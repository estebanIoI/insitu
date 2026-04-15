const { PrismaClient: LocalPrismaClient }  = require('./generated/local');
const { PrismaClient: AuthPrismaClient }   = require('./generated/auth');
const { PrismaClient: UserPrismaClient }   = require('./generated/user');

const localPrisma = new LocalPrismaClient();
const authPrisma  = new AuthPrismaClient();
const userPrisma  = new UserPrismaClient();

module.exports = { localPrisma, authPrisma, userPrisma };
