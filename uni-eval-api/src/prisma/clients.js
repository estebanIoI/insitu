// Multi-DB Prisma clients setup
// Local (migrations + write), Remote Auth (read-only), Remote User (read-only)

// Clients generated at build time via prisma generate into ./generated/*
const { PrismaClient: LocalPrismaClient } = require('./generated/local');
const { PrismaClient: AuthPrismaClient } = require('./generated/auth');
const { PrismaClient: UserPrismaClient } = require('./generated/user');

// Helper to wrap a Prisma client and block mutating operations
function makeReadOnly(prisma, label) {
  const writeOps = [
    'create', 'createMany', 'update', 'updateMany', 'delete', 'deleteMany', 'upsert'
  ];

  return new Proxy(prisma, {
    get(target, prop) {
      const original = target[prop];

      // Block raw execute that can mutate
      if (['$executeRaw', '$runCommandRaw'].includes(prop)) {
        return () => { throw new Error(`Write raw operation blocked on read-only client (${label}).`); };
      }

      // Intercept models (delegates)
      if (typeof original === 'object' && original !== null) {
        return new Proxy(original, {
          get(modelTarget, op) {
            if (writeOps.includes(op)) {
              return () => { throw new Error(`Operation ${op} blocked on read-only client (${label}).`); };
            }
            return modelTarget[op];
          }
        });
      }

      return original;
    }
  });
}

// Instantiate clients
const localPrisma = new LocalPrismaClient();
const authPrisma = makeReadOnly(new AuthPrismaClient(), 'AUTH');
const userPrisma = makeReadOnly(new UserPrismaClient(), 'USER'); 
// No metric client needed at this time

module.exports = {
  localPrisma,
  authPrisma,
  userPrisma,
  // Helper to gracefully close all connections (e.g., on process shutdown)
  disconnectAll: () => Promise.all([
    localPrisma.$disconnect(),
    authPrisma.$disconnect(),
    userPrisma.$disconnect()
  ])
};
