
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model vista_academica_insitus
 * Remote academic view (read-only).
 * Synthetic composite id to satisfy Prisma unique criteria.
 */
export type vista_academica_insitus = $Result.DefaultSelection<Prisma.$vista_academica_insitusPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Vista_academica_insituses
 * const vista_academica_insituses = await prisma.vista_academica_insitus.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Vista_academica_insituses
   * const vista_academica_insituses = await prisma.vista_academica_insitus.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.vista_academica_insitus`: Exposes CRUD operations for the **vista_academica_insitus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vista_academica_insituses
    * const vista_academica_insituses = await prisma.vista_academica_insitus.findMany()
    * ```
    */
  get vista_academica_insitus(): Prisma.vista_academica_insitusDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    vista_academica_insitus: 'vista_academica_insitus'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "vista_academica_insitus"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      vista_academica_insitus: {
        payload: Prisma.$vista_academica_insitusPayload<ExtArgs>
        fields: Prisma.vista_academica_insitusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vista_academica_insitusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vista_academica_insitusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vista_academica_insitusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vista_academica_insitusPayload>
          }
          findFirst: {
            args: Prisma.vista_academica_insitusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vista_academica_insitusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vista_academica_insitusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vista_academica_insitusPayload>
          }
          findMany: {
            args: Prisma.vista_academica_insitusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vista_academica_insitusPayload>[]
          }
          create: {
            args: Prisma.vista_academica_insitusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vista_academica_insitusPayload>
          }
          createMany: {
            args: Prisma.vista_academica_insitusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vista_academica_insitusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vista_academica_insitusPayload>
          }
          update: {
            args: Prisma.vista_academica_insitusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vista_academica_insitusPayload>
          }
          deleteMany: {
            args: Prisma.vista_academica_insitusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vista_academica_insitusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vista_academica_insitusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vista_academica_insitusPayload>
          }
          aggregate: {
            args: Prisma.Vista_academica_insitusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVista_academica_insitus>
          }
          groupBy: {
            args: Prisma.vista_academica_insitusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vista_academica_insitusGroupByOutputType>[]
          }
          count: {
            args: Prisma.vista_academica_insitusCountArgs<ExtArgs>
            result: $Utils.Optional<Vista_academica_insitusCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    vista_academica_insitus?: vista_academica_insitusOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model vista_academica_insitus
   */

  export type AggregateVista_academica_insitus = {
    _count: Vista_academica_insitusCountAggregateOutputType | null
    _avg: Vista_academica_insitusAvgAggregateOutputType | null
    _sum: Vista_academica_insitusSumAggregateOutputType | null
    _min: Vista_academica_insitusMinAggregateOutputType | null
    _max: Vista_academica_insitusMaxAggregateOutputType | null
  }

  export type Vista_academica_insitusAvgAggregateOutputType = {
    ID_PERIODO: number | null
    COD_ASIGNATURA: number | null
    NOTA_FINAL: Decimal | null
    COD_ESTADOMATERIA: number | null
    COD_FORMAACADEMICA: number | null
  }

  export type Vista_academica_insitusSumAggregateOutputType = {
    ID_PERIODO: number | null
    COD_ASIGNATURA: number | null
    NOTA_FINAL: Decimal | null
    COD_ESTADOMATERIA: number | null
    COD_FORMAACADEMICA: number | null
  }

  export type Vista_academica_insitusMinAggregateOutputType = {
    ID_ESTUDIANTE: string | null
    PRIMER_APELLIDO: string | null
    SEGUNDO_APELLIDO: string | null
    PRIMER_NOMBRE: string | null
    SEGUNDO_NOMBRE: string | null
    ID_PERIODO: number | null
    PERIODO: string | null
    NOMBRE_SEDE: string | null
    SEMESTRE: string | null
    ABREVIATURA_CURSO: string | null
    GRUPO: string | null
    ID_DOCENTE: string | null
    DOCENTE: string | null
    NOM_PROGRAMA: string | null
    ASIGNATURA: string | null
    COD_ASIGNATURA: number | null
    COD_INGRESONOTAS: string | null
    NOTA_FINAL: Decimal | null
    COD_ESTADOMATERIA: number | null
    COD_FORMAACADEMICA: number | null
    ABREV_PROGRAMA: string | null
    NOM_DECANO: string | null
    NOM_FACULTAD: string | null
  }

  export type Vista_academica_insitusMaxAggregateOutputType = {
    ID_ESTUDIANTE: string | null
    PRIMER_APELLIDO: string | null
    SEGUNDO_APELLIDO: string | null
    PRIMER_NOMBRE: string | null
    SEGUNDO_NOMBRE: string | null
    ID_PERIODO: number | null
    PERIODO: string | null
    NOMBRE_SEDE: string | null
    SEMESTRE: string | null
    ABREVIATURA_CURSO: string | null
    GRUPO: string | null
    ID_DOCENTE: string | null
    DOCENTE: string | null
    NOM_PROGRAMA: string | null
    ASIGNATURA: string | null
    COD_ASIGNATURA: number | null
    COD_INGRESONOTAS: string | null
    NOTA_FINAL: Decimal | null
    COD_ESTADOMATERIA: number | null
    COD_FORMAACADEMICA: number | null
    ABREV_PROGRAMA: string | null
    NOM_DECANO: string | null
    NOM_FACULTAD: string | null
  }

  export type Vista_academica_insitusCountAggregateOutputType = {
    ID_ESTUDIANTE: number
    PRIMER_APELLIDO: number
    SEGUNDO_APELLIDO: number
    PRIMER_NOMBRE: number
    SEGUNDO_NOMBRE: number
    ID_PERIODO: number
    PERIODO: number
    NOMBRE_SEDE: number
    SEMESTRE: number
    ABREVIATURA_CURSO: number
    GRUPO: number
    ID_DOCENTE: number
    DOCENTE: number
    NOM_PROGRAMA: number
    ASIGNATURA: number
    COD_ASIGNATURA: number
    COD_INGRESONOTAS: number
    NOTA_FINAL: number
    COD_ESTADOMATERIA: number
    COD_FORMAACADEMICA: number
    ABREV_PROGRAMA: number
    NOM_DECANO: number
    NOM_FACULTAD: number
    _all: number
  }


  export type Vista_academica_insitusAvgAggregateInputType = {
    ID_PERIODO?: true
    COD_ASIGNATURA?: true
    NOTA_FINAL?: true
    COD_ESTADOMATERIA?: true
    COD_FORMAACADEMICA?: true
  }

  export type Vista_academica_insitusSumAggregateInputType = {
    ID_PERIODO?: true
    COD_ASIGNATURA?: true
    NOTA_FINAL?: true
    COD_ESTADOMATERIA?: true
    COD_FORMAACADEMICA?: true
  }

  export type Vista_academica_insitusMinAggregateInputType = {
    ID_ESTUDIANTE?: true
    PRIMER_APELLIDO?: true
    SEGUNDO_APELLIDO?: true
    PRIMER_NOMBRE?: true
    SEGUNDO_NOMBRE?: true
    ID_PERIODO?: true
    PERIODO?: true
    NOMBRE_SEDE?: true
    SEMESTRE?: true
    ABREVIATURA_CURSO?: true
    GRUPO?: true
    ID_DOCENTE?: true
    DOCENTE?: true
    NOM_PROGRAMA?: true
    ASIGNATURA?: true
    COD_ASIGNATURA?: true
    COD_INGRESONOTAS?: true
    NOTA_FINAL?: true
    COD_ESTADOMATERIA?: true
    COD_FORMAACADEMICA?: true
    ABREV_PROGRAMA?: true
    NOM_DECANO?: true
    NOM_FACULTAD?: true
  }

  export type Vista_academica_insitusMaxAggregateInputType = {
    ID_ESTUDIANTE?: true
    PRIMER_APELLIDO?: true
    SEGUNDO_APELLIDO?: true
    PRIMER_NOMBRE?: true
    SEGUNDO_NOMBRE?: true
    ID_PERIODO?: true
    PERIODO?: true
    NOMBRE_SEDE?: true
    SEMESTRE?: true
    ABREVIATURA_CURSO?: true
    GRUPO?: true
    ID_DOCENTE?: true
    DOCENTE?: true
    NOM_PROGRAMA?: true
    ASIGNATURA?: true
    COD_ASIGNATURA?: true
    COD_INGRESONOTAS?: true
    NOTA_FINAL?: true
    COD_ESTADOMATERIA?: true
    COD_FORMAACADEMICA?: true
    ABREV_PROGRAMA?: true
    NOM_DECANO?: true
    NOM_FACULTAD?: true
  }

  export type Vista_academica_insitusCountAggregateInputType = {
    ID_ESTUDIANTE?: true
    PRIMER_APELLIDO?: true
    SEGUNDO_APELLIDO?: true
    PRIMER_NOMBRE?: true
    SEGUNDO_NOMBRE?: true
    ID_PERIODO?: true
    PERIODO?: true
    NOMBRE_SEDE?: true
    SEMESTRE?: true
    ABREVIATURA_CURSO?: true
    GRUPO?: true
    ID_DOCENTE?: true
    DOCENTE?: true
    NOM_PROGRAMA?: true
    ASIGNATURA?: true
    COD_ASIGNATURA?: true
    COD_INGRESONOTAS?: true
    NOTA_FINAL?: true
    COD_ESTADOMATERIA?: true
    COD_FORMAACADEMICA?: true
    ABREV_PROGRAMA?: true
    NOM_DECANO?: true
    NOM_FACULTAD?: true
    _all?: true
  }

  export type Vista_academica_insitusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vista_academica_insitus to aggregate.
     */
    where?: vista_academica_insitusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vista_academica_insituses to fetch.
     */
    orderBy?: vista_academica_insitusOrderByWithRelationInput | vista_academica_insitusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vista_academica_insitusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vista_academica_insituses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vista_academica_insituses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vista_academica_insituses
    **/
    _count?: true | Vista_academica_insitusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vista_academica_insitusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vista_academica_insitusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vista_academica_insitusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vista_academica_insitusMaxAggregateInputType
  }

  export type GetVista_academica_insitusAggregateType<T extends Vista_academica_insitusAggregateArgs> = {
        [P in keyof T & keyof AggregateVista_academica_insitus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVista_academica_insitus[P]>
      : GetScalarType<T[P], AggregateVista_academica_insitus[P]>
  }




  export type vista_academica_insitusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vista_academica_insitusWhereInput
    orderBy?: vista_academica_insitusOrderByWithAggregationInput | vista_academica_insitusOrderByWithAggregationInput[]
    by: Vista_academica_insitusScalarFieldEnum[] | Vista_academica_insitusScalarFieldEnum
    having?: vista_academica_insitusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vista_academica_insitusCountAggregateInputType | true
    _avg?: Vista_academica_insitusAvgAggregateInputType
    _sum?: Vista_academica_insitusSumAggregateInputType
    _min?: Vista_academica_insitusMinAggregateInputType
    _max?: Vista_academica_insitusMaxAggregateInputType
  }

  export type Vista_academica_insitusGroupByOutputType = {
    ID_ESTUDIANTE: string
    PRIMER_APELLIDO: string | null
    SEGUNDO_APELLIDO: string | null
    PRIMER_NOMBRE: string | null
    SEGUNDO_NOMBRE: string | null
    ID_PERIODO: number
    PERIODO: string | null
    NOMBRE_SEDE: string | null
    SEMESTRE: string | null
    ABREVIATURA_CURSO: string | null
    GRUPO: string
    ID_DOCENTE: string | null
    DOCENTE: string | null
    NOM_PROGRAMA: string | null
    ASIGNATURA: string | null
    COD_ASIGNATURA: number
    COD_INGRESONOTAS: string | null
    NOTA_FINAL: Decimal | null
    COD_ESTADOMATERIA: number | null
    COD_FORMAACADEMICA: number | null
    ABREV_PROGRAMA: string | null
    NOM_DECANO: string | null
    NOM_FACULTAD: string | null
    _count: Vista_academica_insitusCountAggregateOutputType | null
    _avg: Vista_academica_insitusAvgAggregateOutputType | null
    _sum: Vista_academica_insitusSumAggregateOutputType | null
    _min: Vista_academica_insitusMinAggregateOutputType | null
    _max: Vista_academica_insitusMaxAggregateOutputType | null
  }

  type GetVista_academica_insitusGroupByPayload<T extends vista_academica_insitusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vista_academica_insitusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vista_academica_insitusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vista_academica_insitusGroupByOutputType[P]>
            : GetScalarType<T[P], Vista_academica_insitusGroupByOutputType[P]>
        }
      >
    >


  export type vista_academica_insitusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_ESTUDIANTE?: boolean
    PRIMER_APELLIDO?: boolean
    SEGUNDO_APELLIDO?: boolean
    PRIMER_NOMBRE?: boolean
    SEGUNDO_NOMBRE?: boolean
    ID_PERIODO?: boolean
    PERIODO?: boolean
    NOMBRE_SEDE?: boolean
    SEMESTRE?: boolean
    ABREVIATURA_CURSO?: boolean
    GRUPO?: boolean
    ID_DOCENTE?: boolean
    DOCENTE?: boolean
    NOM_PROGRAMA?: boolean
    ASIGNATURA?: boolean
    COD_ASIGNATURA?: boolean
    COD_INGRESONOTAS?: boolean
    NOTA_FINAL?: boolean
    COD_ESTADOMATERIA?: boolean
    COD_FORMAACADEMICA?: boolean
    ABREV_PROGRAMA?: boolean
    NOM_DECANO?: boolean
    NOM_FACULTAD?: boolean
  }, ExtArgs["result"]["vista_academica_insitus"]>



  export type vista_academica_insitusSelectScalar = {
    ID_ESTUDIANTE?: boolean
    PRIMER_APELLIDO?: boolean
    SEGUNDO_APELLIDO?: boolean
    PRIMER_NOMBRE?: boolean
    SEGUNDO_NOMBRE?: boolean
    ID_PERIODO?: boolean
    PERIODO?: boolean
    NOMBRE_SEDE?: boolean
    SEMESTRE?: boolean
    ABREVIATURA_CURSO?: boolean
    GRUPO?: boolean
    ID_DOCENTE?: boolean
    DOCENTE?: boolean
    NOM_PROGRAMA?: boolean
    ASIGNATURA?: boolean
    COD_ASIGNATURA?: boolean
    COD_INGRESONOTAS?: boolean
    NOTA_FINAL?: boolean
    COD_ESTADOMATERIA?: boolean
    COD_FORMAACADEMICA?: boolean
    ABREV_PROGRAMA?: boolean
    NOM_DECANO?: boolean
    NOM_FACULTAD?: boolean
  }

  export type vista_academica_insitusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_ESTUDIANTE" | "PRIMER_APELLIDO" | "SEGUNDO_APELLIDO" | "PRIMER_NOMBRE" | "SEGUNDO_NOMBRE" | "ID_PERIODO" | "PERIODO" | "NOMBRE_SEDE" | "SEMESTRE" | "ABREVIATURA_CURSO" | "GRUPO" | "ID_DOCENTE" | "DOCENTE" | "NOM_PROGRAMA" | "ASIGNATURA" | "COD_ASIGNATURA" | "COD_INGRESONOTAS" | "NOTA_FINAL" | "COD_ESTADOMATERIA" | "COD_FORMAACADEMICA" | "ABREV_PROGRAMA" | "NOM_DECANO" | "NOM_FACULTAD", ExtArgs["result"]["vista_academica_insitus"]>

  export type $vista_academica_insitusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vista_academica_insitus"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID_ESTUDIANTE: string
      PRIMER_APELLIDO: string | null
      SEGUNDO_APELLIDO: string | null
      PRIMER_NOMBRE: string | null
      SEGUNDO_NOMBRE: string | null
      ID_PERIODO: number
      PERIODO: string | null
      NOMBRE_SEDE: string | null
      SEMESTRE: string | null
      ABREVIATURA_CURSO: string | null
      GRUPO: string
      ID_DOCENTE: string | null
      DOCENTE: string | null
      NOM_PROGRAMA: string | null
      ASIGNATURA: string | null
      COD_ASIGNATURA: number
      COD_INGRESONOTAS: string | null
      NOTA_FINAL: Prisma.Decimal | null
      COD_ESTADOMATERIA: number | null
      COD_FORMAACADEMICA: number | null
      ABREV_PROGRAMA: string | null
      NOM_DECANO: string | null
      NOM_FACULTAD: string | null
    }, ExtArgs["result"]["vista_academica_insitus"]>
    composites: {}
  }

  type vista_academica_insitusGetPayload<S extends boolean | null | undefined | vista_academica_insitusDefaultArgs> = $Result.GetResult<Prisma.$vista_academica_insitusPayload, S>

  type vista_academica_insitusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vista_academica_insitusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vista_academica_insitusCountAggregateInputType | true
    }

  export interface vista_academica_insitusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vista_academica_insitus'], meta: { name: 'vista_academica_insitus' } }
    /**
     * Find zero or one Vista_academica_insitus that matches the filter.
     * @param {vista_academica_insitusFindUniqueArgs} args - Arguments to find a Vista_academica_insitus
     * @example
     * // Get one Vista_academica_insitus
     * const vista_academica_insitus = await prisma.vista_academica_insitus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vista_academica_insitusFindUniqueArgs>(args: SelectSubset<T, vista_academica_insitusFindUniqueArgs<ExtArgs>>): Prisma__vista_academica_insitusClient<$Result.GetResult<Prisma.$vista_academica_insitusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vista_academica_insitus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vista_academica_insitusFindUniqueOrThrowArgs} args - Arguments to find a Vista_academica_insitus
     * @example
     * // Get one Vista_academica_insitus
     * const vista_academica_insitus = await prisma.vista_academica_insitus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vista_academica_insitusFindUniqueOrThrowArgs>(args: SelectSubset<T, vista_academica_insitusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vista_academica_insitusClient<$Result.GetResult<Prisma.$vista_academica_insitusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vista_academica_insitus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vista_academica_insitusFindFirstArgs} args - Arguments to find a Vista_academica_insitus
     * @example
     * // Get one Vista_academica_insitus
     * const vista_academica_insitus = await prisma.vista_academica_insitus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vista_academica_insitusFindFirstArgs>(args?: SelectSubset<T, vista_academica_insitusFindFirstArgs<ExtArgs>>): Prisma__vista_academica_insitusClient<$Result.GetResult<Prisma.$vista_academica_insitusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vista_academica_insitus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vista_academica_insitusFindFirstOrThrowArgs} args - Arguments to find a Vista_academica_insitus
     * @example
     * // Get one Vista_academica_insitus
     * const vista_academica_insitus = await prisma.vista_academica_insitus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vista_academica_insitusFindFirstOrThrowArgs>(args?: SelectSubset<T, vista_academica_insitusFindFirstOrThrowArgs<ExtArgs>>): Prisma__vista_academica_insitusClient<$Result.GetResult<Prisma.$vista_academica_insitusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vista_academica_insituses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vista_academica_insitusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vista_academica_insituses
     * const vista_academica_insituses = await prisma.vista_academica_insitus.findMany()
     * 
     * // Get first 10 Vista_academica_insituses
     * const vista_academica_insituses = await prisma.vista_academica_insitus.findMany({ take: 10 })
     * 
     * // Only select the `ID_ESTUDIANTE`
     * const vista_academica_insitusWithID_ESTUDIANTEOnly = await prisma.vista_academica_insitus.findMany({ select: { ID_ESTUDIANTE: true } })
     * 
     */
    findMany<T extends vista_academica_insitusFindManyArgs>(args?: SelectSubset<T, vista_academica_insitusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vista_academica_insitusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vista_academica_insitus.
     * @param {vista_academica_insitusCreateArgs} args - Arguments to create a Vista_academica_insitus.
     * @example
     * // Create one Vista_academica_insitus
     * const Vista_academica_insitus = await prisma.vista_academica_insitus.create({
     *   data: {
     *     // ... data to create a Vista_academica_insitus
     *   }
     * })
     * 
     */
    create<T extends vista_academica_insitusCreateArgs>(args: SelectSubset<T, vista_academica_insitusCreateArgs<ExtArgs>>): Prisma__vista_academica_insitusClient<$Result.GetResult<Prisma.$vista_academica_insitusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vista_academica_insituses.
     * @param {vista_academica_insitusCreateManyArgs} args - Arguments to create many Vista_academica_insituses.
     * @example
     * // Create many Vista_academica_insituses
     * const vista_academica_insitus = await prisma.vista_academica_insitus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vista_academica_insitusCreateManyArgs>(args?: SelectSubset<T, vista_academica_insitusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vista_academica_insitus.
     * @param {vista_academica_insitusDeleteArgs} args - Arguments to delete one Vista_academica_insitus.
     * @example
     * // Delete one Vista_academica_insitus
     * const Vista_academica_insitus = await prisma.vista_academica_insitus.delete({
     *   where: {
     *     // ... filter to delete one Vista_academica_insitus
     *   }
     * })
     * 
     */
    delete<T extends vista_academica_insitusDeleteArgs>(args: SelectSubset<T, vista_academica_insitusDeleteArgs<ExtArgs>>): Prisma__vista_academica_insitusClient<$Result.GetResult<Prisma.$vista_academica_insitusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vista_academica_insitus.
     * @param {vista_academica_insitusUpdateArgs} args - Arguments to update one Vista_academica_insitus.
     * @example
     * // Update one Vista_academica_insitus
     * const vista_academica_insitus = await prisma.vista_academica_insitus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vista_academica_insitusUpdateArgs>(args: SelectSubset<T, vista_academica_insitusUpdateArgs<ExtArgs>>): Prisma__vista_academica_insitusClient<$Result.GetResult<Prisma.$vista_academica_insitusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vista_academica_insituses.
     * @param {vista_academica_insitusDeleteManyArgs} args - Arguments to filter Vista_academica_insituses to delete.
     * @example
     * // Delete a few Vista_academica_insituses
     * const { count } = await prisma.vista_academica_insitus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vista_academica_insitusDeleteManyArgs>(args?: SelectSubset<T, vista_academica_insitusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vista_academica_insituses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vista_academica_insitusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vista_academica_insituses
     * const vista_academica_insitus = await prisma.vista_academica_insitus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vista_academica_insitusUpdateManyArgs>(args: SelectSubset<T, vista_academica_insitusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vista_academica_insitus.
     * @param {vista_academica_insitusUpsertArgs} args - Arguments to update or create a Vista_academica_insitus.
     * @example
     * // Update or create a Vista_academica_insitus
     * const vista_academica_insitus = await prisma.vista_academica_insitus.upsert({
     *   create: {
     *     // ... data to create a Vista_academica_insitus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vista_academica_insitus we want to update
     *   }
     * })
     */
    upsert<T extends vista_academica_insitusUpsertArgs>(args: SelectSubset<T, vista_academica_insitusUpsertArgs<ExtArgs>>): Prisma__vista_academica_insitusClient<$Result.GetResult<Prisma.$vista_academica_insitusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vista_academica_insituses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vista_academica_insitusCountArgs} args - Arguments to filter Vista_academica_insituses to count.
     * @example
     * // Count the number of Vista_academica_insituses
     * const count = await prisma.vista_academica_insitus.count({
     *   where: {
     *     // ... the filter for the Vista_academica_insituses we want to count
     *   }
     * })
    **/
    count<T extends vista_academica_insitusCountArgs>(
      args?: Subset<T, vista_academica_insitusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vista_academica_insitusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vista_academica_insitus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vista_academica_insitusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Vista_academica_insitusAggregateArgs>(args: Subset<T, Vista_academica_insitusAggregateArgs>): Prisma.PrismaPromise<GetVista_academica_insitusAggregateType<T>>

    /**
     * Group by Vista_academica_insitus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vista_academica_insitusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vista_academica_insitusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vista_academica_insitusGroupByArgs['orderBy'] }
        : { orderBy?: vista_academica_insitusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vista_academica_insitusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVista_academica_insitusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vista_academica_insitus model
   */
  readonly fields: vista_academica_insitusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vista_academica_insitus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vista_academica_insitusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vista_academica_insitus model
   */
  interface vista_academica_insitusFieldRefs {
    readonly ID_ESTUDIANTE: FieldRef<"vista_academica_insitus", 'String'>
    readonly PRIMER_APELLIDO: FieldRef<"vista_academica_insitus", 'String'>
    readonly SEGUNDO_APELLIDO: FieldRef<"vista_academica_insitus", 'String'>
    readonly PRIMER_NOMBRE: FieldRef<"vista_academica_insitus", 'String'>
    readonly SEGUNDO_NOMBRE: FieldRef<"vista_academica_insitus", 'String'>
    readonly ID_PERIODO: FieldRef<"vista_academica_insitus", 'Int'>
    readonly PERIODO: FieldRef<"vista_academica_insitus", 'String'>
    readonly NOMBRE_SEDE: FieldRef<"vista_academica_insitus", 'String'>
    readonly SEMESTRE: FieldRef<"vista_academica_insitus", 'String'>
    readonly ABREVIATURA_CURSO: FieldRef<"vista_academica_insitus", 'String'>
    readonly GRUPO: FieldRef<"vista_academica_insitus", 'String'>
    readonly ID_DOCENTE: FieldRef<"vista_academica_insitus", 'String'>
    readonly DOCENTE: FieldRef<"vista_academica_insitus", 'String'>
    readonly NOM_PROGRAMA: FieldRef<"vista_academica_insitus", 'String'>
    readonly ASIGNATURA: FieldRef<"vista_academica_insitus", 'String'>
    readonly COD_ASIGNATURA: FieldRef<"vista_academica_insitus", 'Int'>
    readonly COD_INGRESONOTAS: FieldRef<"vista_academica_insitus", 'String'>
    readonly NOTA_FINAL: FieldRef<"vista_academica_insitus", 'Decimal'>
    readonly COD_ESTADOMATERIA: FieldRef<"vista_academica_insitus", 'Int'>
    readonly COD_FORMAACADEMICA: FieldRef<"vista_academica_insitus", 'Int'>
    readonly ABREV_PROGRAMA: FieldRef<"vista_academica_insitus", 'String'>
    readonly NOM_DECANO: FieldRef<"vista_academica_insitus", 'String'>
    readonly NOM_FACULTAD: FieldRef<"vista_academica_insitus", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vista_academica_insitus findUnique
   */
  export type vista_academica_insitusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vista_academica_insitus
     */
    select?: vista_academica_insitusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vista_academica_insitus
     */
    omit?: vista_academica_insitusOmit<ExtArgs> | null
    /**
     * Filter, which vista_academica_insitus to fetch.
     */
    where: vista_academica_insitusWhereUniqueInput
  }

  /**
   * vista_academica_insitus findUniqueOrThrow
   */
  export type vista_academica_insitusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vista_academica_insitus
     */
    select?: vista_academica_insitusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vista_academica_insitus
     */
    omit?: vista_academica_insitusOmit<ExtArgs> | null
    /**
     * Filter, which vista_academica_insitus to fetch.
     */
    where: vista_academica_insitusWhereUniqueInput
  }

  /**
   * vista_academica_insitus findFirst
   */
  export type vista_academica_insitusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vista_academica_insitus
     */
    select?: vista_academica_insitusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vista_academica_insitus
     */
    omit?: vista_academica_insitusOmit<ExtArgs> | null
    /**
     * Filter, which vista_academica_insitus to fetch.
     */
    where?: vista_academica_insitusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vista_academica_insituses to fetch.
     */
    orderBy?: vista_academica_insitusOrderByWithRelationInput | vista_academica_insitusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vista_academica_insituses.
     */
    cursor?: vista_academica_insitusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vista_academica_insituses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vista_academica_insituses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vista_academica_insituses.
     */
    distinct?: Vista_academica_insitusScalarFieldEnum | Vista_academica_insitusScalarFieldEnum[]
  }

  /**
   * vista_academica_insitus findFirstOrThrow
   */
  export type vista_academica_insitusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vista_academica_insitus
     */
    select?: vista_academica_insitusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vista_academica_insitus
     */
    omit?: vista_academica_insitusOmit<ExtArgs> | null
    /**
     * Filter, which vista_academica_insitus to fetch.
     */
    where?: vista_academica_insitusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vista_academica_insituses to fetch.
     */
    orderBy?: vista_academica_insitusOrderByWithRelationInput | vista_academica_insitusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vista_academica_insituses.
     */
    cursor?: vista_academica_insitusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vista_academica_insituses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vista_academica_insituses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vista_academica_insituses.
     */
    distinct?: Vista_academica_insitusScalarFieldEnum | Vista_academica_insitusScalarFieldEnum[]
  }

  /**
   * vista_academica_insitus findMany
   */
  export type vista_academica_insitusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vista_academica_insitus
     */
    select?: vista_academica_insitusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vista_academica_insitus
     */
    omit?: vista_academica_insitusOmit<ExtArgs> | null
    /**
     * Filter, which vista_academica_insituses to fetch.
     */
    where?: vista_academica_insitusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vista_academica_insituses to fetch.
     */
    orderBy?: vista_academica_insitusOrderByWithRelationInput | vista_academica_insitusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vista_academica_insituses.
     */
    cursor?: vista_academica_insitusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vista_academica_insituses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vista_academica_insituses.
     */
    skip?: number
    distinct?: Vista_academica_insitusScalarFieldEnum | Vista_academica_insitusScalarFieldEnum[]
  }

  /**
   * vista_academica_insitus create
   */
  export type vista_academica_insitusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vista_academica_insitus
     */
    select?: vista_academica_insitusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vista_academica_insitus
     */
    omit?: vista_academica_insitusOmit<ExtArgs> | null
    /**
     * The data needed to create a vista_academica_insitus.
     */
    data: XOR<vista_academica_insitusCreateInput, vista_academica_insitusUncheckedCreateInput>
  }

  /**
   * vista_academica_insitus createMany
   */
  export type vista_academica_insitusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vista_academica_insituses.
     */
    data: vista_academica_insitusCreateManyInput | vista_academica_insitusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vista_academica_insitus update
   */
  export type vista_academica_insitusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vista_academica_insitus
     */
    select?: vista_academica_insitusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vista_academica_insitus
     */
    omit?: vista_academica_insitusOmit<ExtArgs> | null
    /**
     * The data needed to update a vista_academica_insitus.
     */
    data: XOR<vista_academica_insitusUpdateInput, vista_academica_insitusUncheckedUpdateInput>
    /**
     * Choose, which vista_academica_insitus to update.
     */
    where: vista_academica_insitusWhereUniqueInput
  }

  /**
   * vista_academica_insitus updateMany
   */
  export type vista_academica_insitusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vista_academica_insituses.
     */
    data: XOR<vista_academica_insitusUpdateManyMutationInput, vista_academica_insitusUncheckedUpdateManyInput>
    /**
     * Filter which vista_academica_insituses to update
     */
    where?: vista_academica_insitusWhereInput
    /**
     * Limit how many vista_academica_insituses to update.
     */
    limit?: number
  }

  /**
   * vista_academica_insitus upsert
   */
  export type vista_academica_insitusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vista_academica_insitus
     */
    select?: vista_academica_insitusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vista_academica_insitus
     */
    omit?: vista_academica_insitusOmit<ExtArgs> | null
    /**
     * The filter to search for the vista_academica_insitus to update in case it exists.
     */
    where: vista_academica_insitusWhereUniqueInput
    /**
     * In case the vista_academica_insitus found by the `where` argument doesn't exist, create a new vista_academica_insitus with this data.
     */
    create: XOR<vista_academica_insitusCreateInput, vista_academica_insitusUncheckedCreateInput>
    /**
     * In case the vista_academica_insitus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vista_academica_insitusUpdateInput, vista_academica_insitusUncheckedUpdateInput>
  }

  /**
   * vista_academica_insitus delete
   */
  export type vista_academica_insitusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vista_academica_insitus
     */
    select?: vista_academica_insitusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vista_academica_insitus
     */
    omit?: vista_academica_insitusOmit<ExtArgs> | null
    /**
     * Filter which vista_academica_insitus to delete.
     */
    where: vista_academica_insitusWhereUniqueInput
  }

  /**
   * vista_academica_insitus deleteMany
   */
  export type vista_academica_insitusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vista_academica_insituses to delete
     */
    where?: vista_academica_insitusWhereInput
    /**
     * Limit how many vista_academica_insituses to delete.
     */
    limit?: number
  }

  /**
   * vista_academica_insitus without action
   */
  export type vista_academica_insitusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vista_academica_insitus
     */
    select?: vista_academica_insitusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vista_academica_insitus
     */
    omit?: vista_academica_insitusOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Vista_academica_insitusScalarFieldEnum: {
    ID_ESTUDIANTE: 'ID_ESTUDIANTE',
    PRIMER_APELLIDO: 'PRIMER_APELLIDO',
    SEGUNDO_APELLIDO: 'SEGUNDO_APELLIDO',
    PRIMER_NOMBRE: 'PRIMER_NOMBRE',
    SEGUNDO_NOMBRE: 'SEGUNDO_NOMBRE',
    ID_PERIODO: 'ID_PERIODO',
    PERIODO: 'PERIODO',
    NOMBRE_SEDE: 'NOMBRE_SEDE',
    SEMESTRE: 'SEMESTRE',
    ABREVIATURA_CURSO: 'ABREVIATURA_CURSO',
    GRUPO: 'GRUPO',
    ID_DOCENTE: 'ID_DOCENTE',
    DOCENTE: 'DOCENTE',
    NOM_PROGRAMA: 'NOM_PROGRAMA',
    ASIGNATURA: 'ASIGNATURA',
    COD_ASIGNATURA: 'COD_ASIGNATURA',
    COD_INGRESONOTAS: 'COD_INGRESONOTAS',
    NOTA_FINAL: 'NOTA_FINAL',
    COD_ESTADOMATERIA: 'COD_ESTADOMATERIA',
    COD_FORMAACADEMICA: 'COD_FORMAACADEMICA',
    ABREV_PROGRAMA: 'ABREV_PROGRAMA',
    NOM_DECANO: 'NOM_DECANO',
    NOM_FACULTAD: 'NOM_FACULTAD'
  };

  export type Vista_academica_insitusScalarFieldEnum = (typeof Vista_academica_insitusScalarFieldEnum)[keyof typeof Vista_academica_insitusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const vista_academica_insitusOrderByRelevanceFieldEnum: {
    ID_ESTUDIANTE: 'ID_ESTUDIANTE',
    PRIMER_APELLIDO: 'PRIMER_APELLIDO',
    SEGUNDO_APELLIDO: 'SEGUNDO_APELLIDO',
    PRIMER_NOMBRE: 'PRIMER_NOMBRE',
    SEGUNDO_NOMBRE: 'SEGUNDO_NOMBRE',
    PERIODO: 'PERIODO',
    NOMBRE_SEDE: 'NOMBRE_SEDE',
    SEMESTRE: 'SEMESTRE',
    ABREVIATURA_CURSO: 'ABREVIATURA_CURSO',
    GRUPO: 'GRUPO',
    ID_DOCENTE: 'ID_DOCENTE',
    DOCENTE: 'DOCENTE',
    NOM_PROGRAMA: 'NOM_PROGRAMA',
    ASIGNATURA: 'ASIGNATURA',
    COD_INGRESONOTAS: 'COD_INGRESONOTAS',
    ABREV_PROGRAMA: 'ABREV_PROGRAMA',
    NOM_DECANO: 'NOM_DECANO',
    NOM_FACULTAD: 'NOM_FACULTAD'
  };

  export type vista_academica_insitusOrderByRelevanceFieldEnum = (typeof vista_academica_insitusOrderByRelevanceFieldEnum)[keyof typeof vista_academica_insitusOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type vista_academica_insitusWhereInput = {
    AND?: vista_academica_insitusWhereInput | vista_academica_insitusWhereInput[]
    OR?: vista_academica_insitusWhereInput[]
    NOT?: vista_academica_insitusWhereInput | vista_academica_insitusWhereInput[]
    ID_ESTUDIANTE?: StringFilter<"vista_academica_insitus"> | string
    PRIMER_APELLIDO?: StringNullableFilter<"vista_academica_insitus"> | string | null
    SEGUNDO_APELLIDO?: StringNullableFilter<"vista_academica_insitus"> | string | null
    PRIMER_NOMBRE?: StringNullableFilter<"vista_academica_insitus"> | string | null
    SEGUNDO_NOMBRE?: StringNullableFilter<"vista_academica_insitus"> | string | null
    ID_PERIODO?: IntFilter<"vista_academica_insitus"> | number
    PERIODO?: StringNullableFilter<"vista_academica_insitus"> | string | null
    NOMBRE_SEDE?: StringNullableFilter<"vista_academica_insitus"> | string | null
    SEMESTRE?: StringNullableFilter<"vista_academica_insitus"> | string | null
    ABREVIATURA_CURSO?: StringNullableFilter<"vista_academica_insitus"> | string | null
    GRUPO?: StringFilter<"vista_academica_insitus"> | string
    ID_DOCENTE?: StringNullableFilter<"vista_academica_insitus"> | string | null
    DOCENTE?: StringNullableFilter<"vista_academica_insitus"> | string | null
    NOM_PROGRAMA?: StringNullableFilter<"vista_academica_insitus"> | string | null
    ASIGNATURA?: StringNullableFilter<"vista_academica_insitus"> | string | null
    COD_ASIGNATURA?: IntFilter<"vista_academica_insitus"> | number
    COD_INGRESONOTAS?: StringNullableFilter<"vista_academica_insitus"> | string | null
    NOTA_FINAL?: DecimalNullableFilter<"vista_academica_insitus"> | Decimal | DecimalJsLike | number | string | null
    COD_ESTADOMATERIA?: IntNullableFilter<"vista_academica_insitus"> | number | null
    COD_FORMAACADEMICA?: IntNullableFilter<"vista_academica_insitus"> | number | null
    ABREV_PROGRAMA?: StringNullableFilter<"vista_academica_insitus"> | string | null
    NOM_DECANO?: StringNullableFilter<"vista_academica_insitus"> | string | null
    NOM_FACULTAD?: StringNullableFilter<"vista_academica_insitus"> | string | null
  }

  export type vista_academica_insitusOrderByWithRelationInput = {
    ID_ESTUDIANTE?: SortOrder
    PRIMER_APELLIDO?: SortOrderInput | SortOrder
    SEGUNDO_APELLIDO?: SortOrderInput | SortOrder
    PRIMER_NOMBRE?: SortOrderInput | SortOrder
    SEGUNDO_NOMBRE?: SortOrderInput | SortOrder
    ID_PERIODO?: SortOrder
    PERIODO?: SortOrderInput | SortOrder
    NOMBRE_SEDE?: SortOrderInput | SortOrder
    SEMESTRE?: SortOrderInput | SortOrder
    ABREVIATURA_CURSO?: SortOrderInput | SortOrder
    GRUPO?: SortOrder
    ID_DOCENTE?: SortOrderInput | SortOrder
    DOCENTE?: SortOrderInput | SortOrder
    NOM_PROGRAMA?: SortOrderInput | SortOrder
    ASIGNATURA?: SortOrderInput | SortOrder
    COD_ASIGNATURA?: SortOrder
    COD_INGRESONOTAS?: SortOrderInput | SortOrder
    NOTA_FINAL?: SortOrderInput | SortOrder
    COD_ESTADOMATERIA?: SortOrderInput | SortOrder
    COD_FORMAACADEMICA?: SortOrderInput | SortOrder
    ABREV_PROGRAMA?: SortOrderInput | SortOrder
    NOM_DECANO?: SortOrderInput | SortOrder
    NOM_FACULTAD?: SortOrderInput | SortOrder
    _relevance?: vista_academica_insitusOrderByRelevanceInput
  }

  export type vista_academica_insitusWhereUniqueInput = Prisma.AtLeast<{
    ID_ESTUDIANTE_COD_ASIGNATURA_ID_PERIODO_GRUPO?: vista_academica_insitusID_ESTUDIANTECOD_ASIGNATURAID_PERIODOGRUPOCompoundUniqueInput
    AND?: vista_academica_insitusWhereInput | vista_academica_insitusWhereInput[]
    OR?: vista_academica_insitusWhereInput[]
    NOT?: vista_academica_insitusWhereInput | vista_academica_insitusWhereInput[]
    ID_ESTUDIANTE?: StringFilter<"vista_academica_insitus"> | string
    PRIMER_APELLIDO?: StringNullableFilter<"vista_academica_insitus"> | string | null
    SEGUNDO_APELLIDO?: StringNullableFilter<"vista_academica_insitus"> | string | null
    PRIMER_NOMBRE?: StringNullableFilter<"vista_academica_insitus"> | string | null
    SEGUNDO_NOMBRE?: StringNullableFilter<"vista_academica_insitus"> | string | null
    ID_PERIODO?: IntFilter<"vista_academica_insitus"> | number
    PERIODO?: StringNullableFilter<"vista_academica_insitus"> | string | null
    NOMBRE_SEDE?: StringNullableFilter<"vista_academica_insitus"> | string | null
    SEMESTRE?: StringNullableFilter<"vista_academica_insitus"> | string | null
    ABREVIATURA_CURSO?: StringNullableFilter<"vista_academica_insitus"> | string | null
    GRUPO?: StringFilter<"vista_academica_insitus"> | string
    ID_DOCENTE?: StringNullableFilter<"vista_academica_insitus"> | string | null
    DOCENTE?: StringNullableFilter<"vista_academica_insitus"> | string | null
    NOM_PROGRAMA?: StringNullableFilter<"vista_academica_insitus"> | string | null
    ASIGNATURA?: StringNullableFilter<"vista_academica_insitus"> | string | null
    COD_ASIGNATURA?: IntFilter<"vista_academica_insitus"> | number
    COD_INGRESONOTAS?: StringNullableFilter<"vista_academica_insitus"> | string | null
    NOTA_FINAL?: DecimalNullableFilter<"vista_academica_insitus"> | Decimal | DecimalJsLike | number | string | null
    COD_ESTADOMATERIA?: IntNullableFilter<"vista_academica_insitus"> | number | null
    COD_FORMAACADEMICA?: IntNullableFilter<"vista_academica_insitus"> | number | null
    ABREV_PROGRAMA?: StringNullableFilter<"vista_academica_insitus"> | string | null
    NOM_DECANO?: StringNullableFilter<"vista_academica_insitus"> | string | null
    NOM_FACULTAD?: StringNullableFilter<"vista_academica_insitus"> | string | null
  }, "ID_ESTUDIANTE_COD_ASIGNATURA_ID_PERIODO_GRUPO">

  export type vista_academica_insitusOrderByWithAggregationInput = {
    ID_ESTUDIANTE?: SortOrder
    PRIMER_APELLIDO?: SortOrderInput | SortOrder
    SEGUNDO_APELLIDO?: SortOrderInput | SortOrder
    PRIMER_NOMBRE?: SortOrderInput | SortOrder
    SEGUNDO_NOMBRE?: SortOrderInput | SortOrder
    ID_PERIODO?: SortOrder
    PERIODO?: SortOrderInput | SortOrder
    NOMBRE_SEDE?: SortOrderInput | SortOrder
    SEMESTRE?: SortOrderInput | SortOrder
    ABREVIATURA_CURSO?: SortOrderInput | SortOrder
    GRUPO?: SortOrder
    ID_DOCENTE?: SortOrderInput | SortOrder
    DOCENTE?: SortOrderInput | SortOrder
    NOM_PROGRAMA?: SortOrderInput | SortOrder
    ASIGNATURA?: SortOrderInput | SortOrder
    COD_ASIGNATURA?: SortOrder
    COD_INGRESONOTAS?: SortOrderInput | SortOrder
    NOTA_FINAL?: SortOrderInput | SortOrder
    COD_ESTADOMATERIA?: SortOrderInput | SortOrder
    COD_FORMAACADEMICA?: SortOrderInput | SortOrder
    ABREV_PROGRAMA?: SortOrderInput | SortOrder
    NOM_DECANO?: SortOrderInput | SortOrder
    NOM_FACULTAD?: SortOrderInput | SortOrder
    _count?: vista_academica_insitusCountOrderByAggregateInput
    _avg?: vista_academica_insitusAvgOrderByAggregateInput
    _max?: vista_academica_insitusMaxOrderByAggregateInput
    _min?: vista_academica_insitusMinOrderByAggregateInput
    _sum?: vista_academica_insitusSumOrderByAggregateInput
  }

  export type vista_academica_insitusScalarWhereWithAggregatesInput = {
    AND?: vista_academica_insitusScalarWhereWithAggregatesInput | vista_academica_insitusScalarWhereWithAggregatesInput[]
    OR?: vista_academica_insitusScalarWhereWithAggregatesInput[]
    NOT?: vista_academica_insitusScalarWhereWithAggregatesInput | vista_academica_insitusScalarWhereWithAggregatesInput[]
    ID_ESTUDIANTE?: StringWithAggregatesFilter<"vista_academica_insitus"> | string
    PRIMER_APELLIDO?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
    SEGUNDO_APELLIDO?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
    PRIMER_NOMBRE?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
    SEGUNDO_NOMBRE?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
    ID_PERIODO?: IntWithAggregatesFilter<"vista_academica_insitus"> | number
    PERIODO?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
    NOMBRE_SEDE?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
    SEMESTRE?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
    ABREVIATURA_CURSO?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
    GRUPO?: StringWithAggregatesFilter<"vista_academica_insitus"> | string
    ID_DOCENTE?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
    DOCENTE?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
    NOM_PROGRAMA?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
    ASIGNATURA?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
    COD_ASIGNATURA?: IntWithAggregatesFilter<"vista_academica_insitus"> | number
    COD_INGRESONOTAS?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
    NOTA_FINAL?: DecimalNullableWithAggregatesFilter<"vista_academica_insitus"> | Decimal | DecimalJsLike | number | string | null
    COD_ESTADOMATERIA?: IntNullableWithAggregatesFilter<"vista_academica_insitus"> | number | null
    COD_FORMAACADEMICA?: IntNullableWithAggregatesFilter<"vista_academica_insitus"> | number | null
    ABREV_PROGRAMA?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
    NOM_DECANO?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
    NOM_FACULTAD?: StringNullableWithAggregatesFilter<"vista_academica_insitus"> | string | null
  }

  export type vista_academica_insitusCreateInput = {
    ID_ESTUDIANTE: string
    PRIMER_APELLIDO?: string | null
    SEGUNDO_APELLIDO?: string | null
    PRIMER_NOMBRE?: string | null
    SEGUNDO_NOMBRE?: string | null
    ID_PERIODO: number
    PERIODO?: string | null
    NOMBRE_SEDE?: string | null
    SEMESTRE?: string | null
    ABREVIATURA_CURSO?: string | null
    GRUPO: string
    ID_DOCENTE?: string | null
    DOCENTE?: string | null
    NOM_PROGRAMA?: string | null
    ASIGNATURA?: string | null
    COD_ASIGNATURA: number
    COD_INGRESONOTAS?: string | null
    NOTA_FINAL?: Decimal | DecimalJsLike | number | string | null
    COD_ESTADOMATERIA?: number | null
    COD_FORMAACADEMICA?: number | null
    ABREV_PROGRAMA?: string | null
    NOM_DECANO?: string | null
    NOM_FACULTAD?: string | null
  }

  export type vista_academica_insitusUncheckedCreateInput = {
    ID_ESTUDIANTE: string
    PRIMER_APELLIDO?: string | null
    SEGUNDO_APELLIDO?: string | null
    PRIMER_NOMBRE?: string | null
    SEGUNDO_NOMBRE?: string | null
    ID_PERIODO: number
    PERIODO?: string | null
    NOMBRE_SEDE?: string | null
    SEMESTRE?: string | null
    ABREVIATURA_CURSO?: string | null
    GRUPO: string
    ID_DOCENTE?: string | null
    DOCENTE?: string | null
    NOM_PROGRAMA?: string | null
    ASIGNATURA?: string | null
    COD_ASIGNATURA: number
    COD_INGRESONOTAS?: string | null
    NOTA_FINAL?: Decimal | DecimalJsLike | number | string | null
    COD_ESTADOMATERIA?: number | null
    COD_FORMAACADEMICA?: number | null
    ABREV_PROGRAMA?: string | null
    NOM_DECANO?: string | null
    NOM_FACULTAD?: string | null
  }

  export type vista_academica_insitusUpdateInput = {
    ID_ESTUDIANTE?: StringFieldUpdateOperationsInput | string
    PRIMER_APELLIDO?: NullableStringFieldUpdateOperationsInput | string | null
    SEGUNDO_APELLIDO?: NullableStringFieldUpdateOperationsInput | string | null
    PRIMER_NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    SEGUNDO_NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    ID_PERIODO?: IntFieldUpdateOperationsInput | number
    PERIODO?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRE_SEDE?: NullableStringFieldUpdateOperationsInput | string | null
    SEMESTRE?: NullableStringFieldUpdateOperationsInput | string | null
    ABREVIATURA_CURSO?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: StringFieldUpdateOperationsInput | string
    ID_DOCENTE?: NullableStringFieldUpdateOperationsInput | string | null
    DOCENTE?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_PROGRAMA?: NullableStringFieldUpdateOperationsInput | string | null
    ASIGNATURA?: NullableStringFieldUpdateOperationsInput | string | null
    COD_ASIGNATURA?: IntFieldUpdateOperationsInput | number
    COD_INGRESONOTAS?: NullableStringFieldUpdateOperationsInput | string | null
    NOTA_FINAL?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COD_ESTADOMATERIA?: NullableIntFieldUpdateOperationsInput | number | null
    COD_FORMAACADEMICA?: NullableIntFieldUpdateOperationsInput | number | null
    ABREV_PROGRAMA?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_DECANO?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_FACULTAD?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vista_academica_insitusUncheckedUpdateInput = {
    ID_ESTUDIANTE?: StringFieldUpdateOperationsInput | string
    PRIMER_APELLIDO?: NullableStringFieldUpdateOperationsInput | string | null
    SEGUNDO_APELLIDO?: NullableStringFieldUpdateOperationsInput | string | null
    PRIMER_NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    SEGUNDO_NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    ID_PERIODO?: IntFieldUpdateOperationsInput | number
    PERIODO?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRE_SEDE?: NullableStringFieldUpdateOperationsInput | string | null
    SEMESTRE?: NullableStringFieldUpdateOperationsInput | string | null
    ABREVIATURA_CURSO?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: StringFieldUpdateOperationsInput | string
    ID_DOCENTE?: NullableStringFieldUpdateOperationsInput | string | null
    DOCENTE?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_PROGRAMA?: NullableStringFieldUpdateOperationsInput | string | null
    ASIGNATURA?: NullableStringFieldUpdateOperationsInput | string | null
    COD_ASIGNATURA?: IntFieldUpdateOperationsInput | number
    COD_INGRESONOTAS?: NullableStringFieldUpdateOperationsInput | string | null
    NOTA_FINAL?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COD_ESTADOMATERIA?: NullableIntFieldUpdateOperationsInput | number | null
    COD_FORMAACADEMICA?: NullableIntFieldUpdateOperationsInput | number | null
    ABREV_PROGRAMA?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_DECANO?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_FACULTAD?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vista_academica_insitusCreateManyInput = {
    ID_ESTUDIANTE: string
    PRIMER_APELLIDO?: string | null
    SEGUNDO_APELLIDO?: string | null
    PRIMER_NOMBRE?: string | null
    SEGUNDO_NOMBRE?: string | null
    ID_PERIODO: number
    PERIODO?: string | null
    NOMBRE_SEDE?: string | null
    SEMESTRE?: string | null
    ABREVIATURA_CURSO?: string | null
    GRUPO: string
    ID_DOCENTE?: string | null
    DOCENTE?: string | null
    NOM_PROGRAMA?: string | null
    ASIGNATURA?: string | null
    COD_ASIGNATURA: number
    COD_INGRESONOTAS?: string | null
    NOTA_FINAL?: Decimal | DecimalJsLike | number | string | null
    COD_ESTADOMATERIA?: number | null
    COD_FORMAACADEMICA?: number | null
    ABREV_PROGRAMA?: string | null
    NOM_DECANO?: string | null
    NOM_FACULTAD?: string | null
  }

  export type vista_academica_insitusUpdateManyMutationInput = {
    ID_ESTUDIANTE?: StringFieldUpdateOperationsInput | string
    PRIMER_APELLIDO?: NullableStringFieldUpdateOperationsInput | string | null
    SEGUNDO_APELLIDO?: NullableStringFieldUpdateOperationsInput | string | null
    PRIMER_NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    SEGUNDO_NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    ID_PERIODO?: IntFieldUpdateOperationsInput | number
    PERIODO?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRE_SEDE?: NullableStringFieldUpdateOperationsInput | string | null
    SEMESTRE?: NullableStringFieldUpdateOperationsInput | string | null
    ABREVIATURA_CURSO?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: StringFieldUpdateOperationsInput | string
    ID_DOCENTE?: NullableStringFieldUpdateOperationsInput | string | null
    DOCENTE?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_PROGRAMA?: NullableStringFieldUpdateOperationsInput | string | null
    ASIGNATURA?: NullableStringFieldUpdateOperationsInput | string | null
    COD_ASIGNATURA?: IntFieldUpdateOperationsInput | number
    COD_INGRESONOTAS?: NullableStringFieldUpdateOperationsInput | string | null
    NOTA_FINAL?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COD_ESTADOMATERIA?: NullableIntFieldUpdateOperationsInput | number | null
    COD_FORMAACADEMICA?: NullableIntFieldUpdateOperationsInput | number | null
    ABREV_PROGRAMA?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_DECANO?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_FACULTAD?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vista_academica_insitusUncheckedUpdateManyInput = {
    ID_ESTUDIANTE?: StringFieldUpdateOperationsInput | string
    PRIMER_APELLIDO?: NullableStringFieldUpdateOperationsInput | string | null
    SEGUNDO_APELLIDO?: NullableStringFieldUpdateOperationsInput | string | null
    PRIMER_NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    SEGUNDO_NOMBRE?: NullableStringFieldUpdateOperationsInput | string | null
    ID_PERIODO?: IntFieldUpdateOperationsInput | number
    PERIODO?: NullableStringFieldUpdateOperationsInput | string | null
    NOMBRE_SEDE?: NullableStringFieldUpdateOperationsInput | string | null
    SEMESTRE?: NullableStringFieldUpdateOperationsInput | string | null
    ABREVIATURA_CURSO?: NullableStringFieldUpdateOperationsInput | string | null
    GRUPO?: StringFieldUpdateOperationsInput | string
    ID_DOCENTE?: NullableStringFieldUpdateOperationsInput | string | null
    DOCENTE?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_PROGRAMA?: NullableStringFieldUpdateOperationsInput | string | null
    ASIGNATURA?: NullableStringFieldUpdateOperationsInput | string | null
    COD_ASIGNATURA?: IntFieldUpdateOperationsInput | number
    COD_INGRESONOTAS?: NullableStringFieldUpdateOperationsInput | string | null
    NOTA_FINAL?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    COD_ESTADOMATERIA?: NullableIntFieldUpdateOperationsInput | number | null
    COD_FORMAACADEMICA?: NullableIntFieldUpdateOperationsInput | number | null
    ABREV_PROGRAMA?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_DECANO?: NullableStringFieldUpdateOperationsInput | string | null
    NOM_FACULTAD?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type vista_academica_insitusOrderByRelevanceInput = {
    fields: vista_academica_insitusOrderByRelevanceFieldEnum | vista_academica_insitusOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vista_academica_insitusID_ESTUDIANTECOD_ASIGNATURAID_PERIODOGRUPOCompoundUniqueInput = {
    ID_ESTUDIANTE: string
    COD_ASIGNATURA: number
    ID_PERIODO: number
    GRUPO: string
  }

  export type vista_academica_insitusCountOrderByAggregateInput = {
    ID_ESTUDIANTE?: SortOrder
    PRIMER_APELLIDO?: SortOrder
    SEGUNDO_APELLIDO?: SortOrder
    PRIMER_NOMBRE?: SortOrder
    SEGUNDO_NOMBRE?: SortOrder
    ID_PERIODO?: SortOrder
    PERIODO?: SortOrder
    NOMBRE_SEDE?: SortOrder
    SEMESTRE?: SortOrder
    ABREVIATURA_CURSO?: SortOrder
    GRUPO?: SortOrder
    ID_DOCENTE?: SortOrder
    DOCENTE?: SortOrder
    NOM_PROGRAMA?: SortOrder
    ASIGNATURA?: SortOrder
    COD_ASIGNATURA?: SortOrder
    COD_INGRESONOTAS?: SortOrder
    NOTA_FINAL?: SortOrder
    COD_ESTADOMATERIA?: SortOrder
    COD_FORMAACADEMICA?: SortOrder
    ABREV_PROGRAMA?: SortOrder
    NOM_DECANO?: SortOrder
    NOM_FACULTAD?: SortOrder
  }

  export type vista_academica_insitusAvgOrderByAggregateInput = {
    ID_PERIODO?: SortOrder
    COD_ASIGNATURA?: SortOrder
    NOTA_FINAL?: SortOrder
    COD_ESTADOMATERIA?: SortOrder
    COD_FORMAACADEMICA?: SortOrder
  }

  export type vista_academica_insitusMaxOrderByAggregateInput = {
    ID_ESTUDIANTE?: SortOrder
    PRIMER_APELLIDO?: SortOrder
    SEGUNDO_APELLIDO?: SortOrder
    PRIMER_NOMBRE?: SortOrder
    SEGUNDO_NOMBRE?: SortOrder
    ID_PERIODO?: SortOrder
    PERIODO?: SortOrder
    NOMBRE_SEDE?: SortOrder
    SEMESTRE?: SortOrder
    ABREVIATURA_CURSO?: SortOrder
    GRUPO?: SortOrder
    ID_DOCENTE?: SortOrder
    DOCENTE?: SortOrder
    NOM_PROGRAMA?: SortOrder
    ASIGNATURA?: SortOrder
    COD_ASIGNATURA?: SortOrder
    COD_INGRESONOTAS?: SortOrder
    NOTA_FINAL?: SortOrder
    COD_ESTADOMATERIA?: SortOrder
    COD_FORMAACADEMICA?: SortOrder
    ABREV_PROGRAMA?: SortOrder
    NOM_DECANO?: SortOrder
    NOM_FACULTAD?: SortOrder
  }

  export type vista_academica_insitusMinOrderByAggregateInput = {
    ID_ESTUDIANTE?: SortOrder
    PRIMER_APELLIDO?: SortOrder
    SEGUNDO_APELLIDO?: SortOrder
    PRIMER_NOMBRE?: SortOrder
    SEGUNDO_NOMBRE?: SortOrder
    ID_PERIODO?: SortOrder
    PERIODO?: SortOrder
    NOMBRE_SEDE?: SortOrder
    SEMESTRE?: SortOrder
    ABREVIATURA_CURSO?: SortOrder
    GRUPO?: SortOrder
    ID_DOCENTE?: SortOrder
    DOCENTE?: SortOrder
    NOM_PROGRAMA?: SortOrder
    ASIGNATURA?: SortOrder
    COD_ASIGNATURA?: SortOrder
    COD_INGRESONOTAS?: SortOrder
    NOTA_FINAL?: SortOrder
    COD_ESTADOMATERIA?: SortOrder
    COD_FORMAACADEMICA?: SortOrder
    ABREV_PROGRAMA?: SortOrder
    NOM_DECANO?: SortOrder
    NOM_FACULTAD?: SortOrder
  }

  export type vista_academica_insitusSumOrderByAggregateInput = {
    ID_PERIODO?: SortOrder
    COD_ASIGNATURA?: SortOrder
    NOTA_FINAL?: SortOrder
    COD_ESTADOMATERIA?: SortOrder
    COD_FORMAACADEMICA?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}