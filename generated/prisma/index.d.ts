
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model SessionChat
 * 
 */
export type SessionChat = $Result.DefaultSelection<Prisma.$SessionChatPayload>
/**
 * Model ChatHistory
 * 
 */
export type ChatHistory = $Result.DefaultSelection<Prisma.$ChatHistoryPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionChat`: Exposes CRUD operations for the **SessionChat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionChats
    * const sessionChats = await prisma.sessionChat.findMany()
    * ```
    */
  get sessionChat(): Prisma.SessionChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatHistory`: Exposes CRUD operations for the **ChatHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatHistories
    * const chatHistories = await prisma.chatHistory.findMany()
    * ```
    */
  get chatHistory(): Prisma.ChatHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    User: 'User',
    SessionChat: 'SessionChat',
    ChatHistory: 'ChatHistory',
    Feedback: 'Feedback'
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
      modelProps: "user" | "sessionChat" | "chatHistory" | "feedback"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      SessionChat: {
        payload: Prisma.$SessionChatPayload<ExtArgs>
        fields: Prisma.SessionChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionChatPayload>
          }
          findFirst: {
            args: Prisma.SessionChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionChatPayload>
          }
          findMany: {
            args: Prisma.SessionChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionChatPayload>[]
          }
          create: {
            args: Prisma.SessionChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionChatPayload>
          }
          createMany: {
            args: Prisma.SessionChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionChatPayload>[]
          }
          delete: {
            args: Prisma.SessionChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionChatPayload>
          }
          update: {
            args: Prisma.SessionChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionChatPayload>
          }
          deleteMany: {
            args: Prisma.SessionChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionChatPayload>[]
          }
          upsert: {
            args: Prisma.SessionChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionChatPayload>
          }
          aggregate: {
            args: Prisma.SessionChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionChat>
          }
          groupBy: {
            args: Prisma.SessionChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionChatCountArgs<ExtArgs>
            result: $Utils.Optional<SessionChatCountAggregateOutputType> | number
          }
        }
      }
      ChatHistory: {
        payload: Prisma.$ChatHistoryPayload<ExtArgs>
        fields: Prisma.ChatHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          findFirst: {
            args: Prisma.ChatHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          findMany: {
            args: Prisma.ChatHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>[]
          }
          create: {
            args: Prisma.ChatHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          createMany: {
            args: Prisma.ChatHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>[]
          }
          delete: {
            args: Prisma.ChatHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          update: {
            args: Prisma.ChatHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ChatHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ChatHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatHistoryPayload>
          }
          aggregate: {
            args: Prisma.ChatHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatHistory>
          }
          groupBy: {
            args: Prisma.ChatHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ChatHistoryCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
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
    user?: UserOmit
    sessionChat?: SessionChatOmit
    chatHistory?: ChatHistoryOmit
    feedback?: FeedbackOmit
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    chat_history: number
    feedbacks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    chat_history?: boolean | UserCountOutputTypeCountChat_historyArgs
    feedbacks?: boolean | UserCountOutputTypeCountFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChat_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type SessionChatCountOutputType
   */

  export type SessionChatCountOutputType = {
    chat_history: number
    feedbacks: number
  }

  export type SessionChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat_history?: boolean | SessionChatCountOutputTypeCountChat_historyArgs
    feedbacks?: boolean | SessionChatCountOutputTypeCountFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * SessionChatCountOutputType without action
   */
  export type SessionChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionChatCountOutputType
     */
    select?: SessionChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionChatCountOutputType without action
   */
  export type SessionChatCountOutputTypeCountChat_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatHistoryWhereInput
  }

  /**
   * SessionChatCountOutputType without action
   */
  export type SessionChatCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type ChatHistoryCountOutputType
   */

  export type ChatHistoryCountOutputType = {
    feedbacks: number
  }

  export type ChatHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbacks?: boolean | ChatHistoryCountOutputTypeCountFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * ChatHistoryCountOutputType without action
   */
  export type ChatHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistoryCountOutputType
     */
    select?: ChatHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatHistoryCountOutputType without action
   */
  export type ChatHistoryCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    credits: number | null
    quota: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    credits: number | null
    quota: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    hashed_password: string | null
    full_name: string | null
    is_active: boolean | null
    role: string | null
    last_login: Date | null
    avatar_url: string | null
    api_key: string | null
    credits: number | null
    quota: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    hashed_password: string | null
    full_name: string | null
    is_active: boolean | null
    role: string | null
    last_login: Date | null
    avatar_url: string | null
    api_key: string | null
    credits: number | null
    quota: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    hashed_password: number
    full_name: number
    is_active: number
    role: number
    last_login: number
    avatar_url: number
    api_key: number
    credits: number
    quota: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    credits?: true
    quota?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    credits?: true
    quota?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    hashed_password?: true
    full_name?: true
    is_active?: true
    role?: true
    last_login?: true
    avatar_url?: true
    api_key?: true
    credits?: true
    quota?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    hashed_password?: true
    full_name?: true
    is_active?: true
    role?: true
    last_login?: true
    avatar_url?: true
    api_key?: true
    credits?: true
    quota?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    hashed_password?: true
    full_name?: true
    is_active?: true
    role?: true
    last_login?: true
    avatar_url?: true
    api_key?: true
    credits?: true
    quota?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    hashed_password: string
    full_name: string | null
    is_active: boolean
    role: string
    last_login: Date | null
    avatar_url: string | null
    api_key: string | null
    credits: number
    quota: number
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    hashed_password?: boolean
    full_name?: boolean
    is_active?: boolean
    role?: boolean
    last_login?: boolean
    avatar_url?: boolean
    api_key?: boolean
    credits?: boolean
    quota?: boolean
    created_at?: boolean
    updated_at?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    chat_history?: boolean | User$chat_historyArgs<ExtArgs>
    feedbacks?: boolean | User$feedbacksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    hashed_password?: boolean
    full_name?: boolean
    is_active?: boolean
    role?: boolean
    last_login?: boolean
    avatar_url?: boolean
    api_key?: boolean
    credits?: boolean
    quota?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    hashed_password?: boolean
    full_name?: boolean
    is_active?: boolean
    role?: boolean
    last_login?: boolean
    avatar_url?: boolean
    api_key?: boolean
    credits?: boolean
    quota?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    hashed_password?: boolean
    full_name?: boolean
    is_active?: boolean
    role?: boolean
    last_login?: boolean
    avatar_url?: boolean
    api_key?: boolean
    credits?: boolean
    quota?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "hashed_password" | "full_name" | "is_active" | "role" | "last_login" | "avatar_url" | "api_key" | "credits" | "quota" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    chat_history?: boolean | User$chat_historyArgs<ExtArgs>
    feedbacks?: boolean | User$feedbacksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionChatPayload<ExtArgs>[]
      chat_history: Prisma.$ChatHistoryPayload<ExtArgs>[]
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      hashed_password: string
      full_name: string | null
      is_active: boolean
      role: string
      last_login: Date | null
      avatar_url: string | null
      api_key: string | null
      credits: number
      quota: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    chat_history<T extends User$chat_historyArgs<ExtArgs> = {}>(args?: Subset<T, User$chat_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbacks<T extends User$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly hashed_password: FieldRef<"User", 'String'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'String'>
    readonly last_login: FieldRef<"User", 'DateTime'>
    readonly avatar_url: FieldRef<"User", 'String'>
    readonly api_key: FieldRef<"User", 'String'>
    readonly credits: FieldRef<"User", 'Int'>
    readonly quota: FieldRef<"User", 'Int'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionChat
     */
    select?: SessionChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionChat
     */
    omit?: SessionChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionChatInclude<ExtArgs> | null
    where?: SessionChatWhereInput
    orderBy?: SessionChatOrderByWithRelationInput | SessionChatOrderByWithRelationInput[]
    cursor?: SessionChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionChatScalarFieldEnum | SessionChatScalarFieldEnum[]
  }

  /**
   * User.chat_history
   */
  export type User$chat_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    where?: ChatHistoryWhereInput
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    cursor?: ChatHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatHistoryScalarFieldEnum | ChatHistoryScalarFieldEnum[]
  }

  /**
   * User.feedbacks
   */
  export type User$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model SessionChat
   */

  export type AggregateSessionChat = {
    _count: SessionChatCountAggregateOutputType | null
    _avg: SessionChatAvgAggregateOutputType | null
    _sum: SessionChatSumAggregateOutputType | null
    _min: SessionChatMinAggregateOutputType | null
    _max: SessionChatMaxAggregateOutputType | null
  }

  export type SessionChatAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type SessionChatSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type SessionChatMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    user_id: number | null
    title: string | null
    status: string | null
    model: string | null
    summary: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SessionChatMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    user_id: number | null
    title: string | null
    status: string | null
    model: string | null
    summary: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SessionChatCountAggregateOutputType = {
    id: number
    uuid: number
    user_id: number
    title: number
    status: number
    model: number
    summary: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SessionChatAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type SessionChatSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type SessionChatMinAggregateInputType = {
    id?: true
    uuid?: true
    user_id?: true
    title?: true
    status?: true
    model?: true
    summary?: true
    created_at?: true
    updated_at?: true
  }

  export type SessionChatMaxAggregateInputType = {
    id?: true
    uuid?: true
    user_id?: true
    title?: true
    status?: true
    model?: true
    summary?: true
    created_at?: true
    updated_at?: true
  }

  export type SessionChatCountAggregateInputType = {
    id?: true
    uuid?: true
    user_id?: true
    title?: true
    status?: true
    model?: true
    summary?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SessionChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionChat to aggregate.
     */
    where?: SessionChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionChats to fetch.
     */
    orderBy?: SessionChatOrderByWithRelationInput | SessionChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionChats
    **/
    _count?: true | SessionChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionChatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionChatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionChatMaxAggregateInputType
  }

  export type GetSessionChatAggregateType<T extends SessionChatAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionChat[P]>
      : GetScalarType<T[P], AggregateSessionChat[P]>
  }




  export type SessionChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionChatWhereInput
    orderBy?: SessionChatOrderByWithAggregationInput | SessionChatOrderByWithAggregationInput[]
    by: SessionChatScalarFieldEnum[] | SessionChatScalarFieldEnum
    having?: SessionChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionChatCountAggregateInputType | true
    _avg?: SessionChatAvgAggregateInputType
    _sum?: SessionChatSumAggregateInputType
    _min?: SessionChatMinAggregateInputType
    _max?: SessionChatMaxAggregateInputType
  }

  export type SessionChatGroupByOutputType = {
    id: number
    uuid: string
    user_id: number
    title: string | null
    status: string
    model: string | null
    summary: string | null
    created_at: Date
    updated_at: Date
    _count: SessionChatCountAggregateOutputType | null
    _avg: SessionChatAvgAggregateOutputType | null
    _sum: SessionChatSumAggregateOutputType | null
    _min: SessionChatMinAggregateOutputType | null
    _max: SessionChatMaxAggregateOutputType | null
  }

  type GetSessionChatGroupByPayload<T extends SessionChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionChatGroupByOutputType[P]>
            : GetScalarType<T[P], SessionChatGroupByOutputType[P]>
        }
      >
    >


  export type SessionChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    user_id?: boolean
    title?: boolean
    status?: boolean
    model?: boolean
    summary?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat_history?: boolean | SessionChat$chat_historyArgs<ExtArgs>
    feedbacks?: boolean | SessionChat$feedbacksArgs<ExtArgs>
    _count?: boolean | SessionChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionChat"]>

  export type SessionChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    user_id?: boolean
    title?: boolean
    status?: boolean
    model?: boolean
    summary?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionChat"]>

  export type SessionChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    user_id?: boolean
    title?: boolean
    status?: boolean
    model?: boolean
    summary?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionChat"]>

  export type SessionChatSelectScalar = {
    id?: boolean
    uuid?: boolean
    user_id?: boolean
    title?: boolean
    status?: boolean
    model?: boolean
    summary?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SessionChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uuid" | "user_id" | "title" | "status" | "model" | "summary" | "created_at" | "updated_at", ExtArgs["result"]["sessionChat"]>
  export type SessionChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat_history?: boolean | SessionChat$chat_historyArgs<ExtArgs>
    feedbacks?: boolean | SessionChat$feedbacksArgs<ExtArgs>
    _count?: boolean | SessionChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionChat"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chat_history: Prisma.$ChatHistoryPayload<ExtArgs>[]
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      user_id: number
      title: string | null
      status: string
      model: string | null
      summary: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["sessionChat"]>
    composites: {}
  }

  type SessionChatGetPayload<S extends boolean | null | undefined | SessionChatDefaultArgs> = $Result.GetResult<Prisma.$SessionChatPayload, S>

  type SessionChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionChatCountAggregateInputType | true
    }

  export interface SessionChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionChat'], meta: { name: 'SessionChat' } }
    /**
     * Find zero or one SessionChat that matches the filter.
     * @param {SessionChatFindUniqueArgs} args - Arguments to find a SessionChat
     * @example
     * // Get one SessionChat
     * const sessionChat = await prisma.sessionChat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionChatFindUniqueArgs>(args: SelectSubset<T, SessionChatFindUniqueArgs<ExtArgs>>): Prisma__SessionChatClient<$Result.GetResult<Prisma.$SessionChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionChat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionChatFindUniqueOrThrowArgs} args - Arguments to find a SessionChat
     * @example
     * // Get one SessionChat
     * const sessionChat = await prisma.sessionChat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionChatFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionChatClient<$Result.GetResult<Prisma.$SessionChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionChat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionChatFindFirstArgs} args - Arguments to find a SessionChat
     * @example
     * // Get one SessionChat
     * const sessionChat = await prisma.sessionChat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionChatFindFirstArgs>(args?: SelectSubset<T, SessionChatFindFirstArgs<ExtArgs>>): Prisma__SessionChatClient<$Result.GetResult<Prisma.$SessionChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionChat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionChatFindFirstOrThrowArgs} args - Arguments to find a SessionChat
     * @example
     * // Get one SessionChat
     * const sessionChat = await prisma.sessionChat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionChatFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionChatClient<$Result.GetResult<Prisma.$SessionChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionChats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionChats
     * const sessionChats = await prisma.sessionChat.findMany()
     * 
     * // Get first 10 SessionChats
     * const sessionChats = await prisma.sessionChat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionChatWithIdOnly = await prisma.sessionChat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionChatFindManyArgs>(args?: SelectSubset<T, SessionChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionChat.
     * @param {SessionChatCreateArgs} args - Arguments to create a SessionChat.
     * @example
     * // Create one SessionChat
     * const SessionChat = await prisma.sessionChat.create({
     *   data: {
     *     // ... data to create a SessionChat
     *   }
     * })
     * 
     */
    create<T extends SessionChatCreateArgs>(args: SelectSubset<T, SessionChatCreateArgs<ExtArgs>>): Prisma__SessionChatClient<$Result.GetResult<Prisma.$SessionChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionChats.
     * @param {SessionChatCreateManyArgs} args - Arguments to create many SessionChats.
     * @example
     * // Create many SessionChats
     * const sessionChat = await prisma.sessionChat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionChatCreateManyArgs>(args?: SelectSubset<T, SessionChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionChats and returns the data saved in the database.
     * @param {SessionChatCreateManyAndReturnArgs} args - Arguments to create many SessionChats.
     * @example
     * // Create many SessionChats
     * const sessionChat = await prisma.sessionChat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionChats and only return the `id`
     * const sessionChatWithIdOnly = await prisma.sessionChat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionChatCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionChat.
     * @param {SessionChatDeleteArgs} args - Arguments to delete one SessionChat.
     * @example
     * // Delete one SessionChat
     * const SessionChat = await prisma.sessionChat.delete({
     *   where: {
     *     // ... filter to delete one SessionChat
     *   }
     * })
     * 
     */
    delete<T extends SessionChatDeleteArgs>(args: SelectSubset<T, SessionChatDeleteArgs<ExtArgs>>): Prisma__SessionChatClient<$Result.GetResult<Prisma.$SessionChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionChat.
     * @param {SessionChatUpdateArgs} args - Arguments to update one SessionChat.
     * @example
     * // Update one SessionChat
     * const sessionChat = await prisma.sessionChat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionChatUpdateArgs>(args: SelectSubset<T, SessionChatUpdateArgs<ExtArgs>>): Prisma__SessionChatClient<$Result.GetResult<Prisma.$SessionChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionChats.
     * @param {SessionChatDeleteManyArgs} args - Arguments to filter SessionChats to delete.
     * @example
     * // Delete a few SessionChats
     * const { count } = await prisma.sessionChat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionChatDeleteManyArgs>(args?: SelectSubset<T, SessionChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionChats
     * const sessionChat = await prisma.sessionChat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionChatUpdateManyArgs>(args: SelectSubset<T, SessionChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionChats and returns the data updated in the database.
     * @param {SessionChatUpdateManyAndReturnArgs} args - Arguments to update many SessionChats.
     * @example
     * // Update many SessionChats
     * const sessionChat = await prisma.sessionChat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionChats and only return the `id`
     * const sessionChatWithIdOnly = await prisma.sessionChat.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionChatUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionChat.
     * @param {SessionChatUpsertArgs} args - Arguments to update or create a SessionChat.
     * @example
     * // Update or create a SessionChat
     * const sessionChat = await prisma.sessionChat.upsert({
     *   create: {
     *     // ... data to create a SessionChat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionChat we want to update
     *   }
     * })
     */
    upsert<T extends SessionChatUpsertArgs>(args: SelectSubset<T, SessionChatUpsertArgs<ExtArgs>>): Prisma__SessionChatClient<$Result.GetResult<Prisma.$SessionChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionChats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionChatCountArgs} args - Arguments to filter SessionChats to count.
     * @example
     * // Count the number of SessionChats
     * const count = await prisma.sessionChat.count({
     *   where: {
     *     // ... the filter for the SessionChats we want to count
     *   }
     * })
    **/
    count<T extends SessionChatCountArgs>(
      args?: Subset<T, SessionChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionChatAggregateArgs>(args: Subset<T, SessionChatAggregateArgs>): Prisma.PrismaPromise<GetSessionChatAggregateType<T>>

    /**
     * Group by SessionChat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionChatGroupByArgs} args - Group by arguments.
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
      T extends SessionChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionChatGroupByArgs['orderBy'] }
        : { orderBy?: SessionChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionChat model
   */
  readonly fields: SessionChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionChat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chat_history<T extends SessionChat$chat_historyArgs<ExtArgs> = {}>(args?: Subset<T, SessionChat$chat_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbacks<T extends SessionChat$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, SessionChat$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SessionChat model
   */
  interface SessionChatFieldRefs {
    readonly id: FieldRef<"SessionChat", 'Int'>
    readonly uuid: FieldRef<"SessionChat", 'String'>
    readonly user_id: FieldRef<"SessionChat", 'Int'>
    readonly title: FieldRef<"SessionChat", 'String'>
    readonly status: FieldRef<"SessionChat", 'String'>
    readonly model: FieldRef<"SessionChat", 'String'>
    readonly summary: FieldRef<"SessionChat", 'String'>
    readonly created_at: FieldRef<"SessionChat", 'DateTime'>
    readonly updated_at: FieldRef<"SessionChat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SessionChat findUnique
   */
  export type SessionChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionChat
     */
    select?: SessionChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionChat
     */
    omit?: SessionChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionChatInclude<ExtArgs> | null
    /**
     * Filter, which SessionChat to fetch.
     */
    where: SessionChatWhereUniqueInput
  }

  /**
   * SessionChat findUniqueOrThrow
   */
  export type SessionChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionChat
     */
    select?: SessionChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionChat
     */
    omit?: SessionChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionChatInclude<ExtArgs> | null
    /**
     * Filter, which SessionChat to fetch.
     */
    where: SessionChatWhereUniqueInput
  }

  /**
   * SessionChat findFirst
   */
  export type SessionChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionChat
     */
    select?: SessionChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionChat
     */
    omit?: SessionChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionChatInclude<ExtArgs> | null
    /**
     * Filter, which SessionChat to fetch.
     */
    where?: SessionChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionChats to fetch.
     */
    orderBy?: SessionChatOrderByWithRelationInput | SessionChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionChats.
     */
    cursor?: SessionChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionChats.
     */
    distinct?: SessionChatScalarFieldEnum | SessionChatScalarFieldEnum[]
  }

  /**
   * SessionChat findFirstOrThrow
   */
  export type SessionChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionChat
     */
    select?: SessionChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionChat
     */
    omit?: SessionChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionChatInclude<ExtArgs> | null
    /**
     * Filter, which SessionChat to fetch.
     */
    where?: SessionChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionChats to fetch.
     */
    orderBy?: SessionChatOrderByWithRelationInput | SessionChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionChats.
     */
    cursor?: SessionChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionChats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionChats.
     */
    distinct?: SessionChatScalarFieldEnum | SessionChatScalarFieldEnum[]
  }

  /**
   * SessionChat findMany
   */
  export type SessionChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionChat
     */
    select?: SessionChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionChat
     */
    omit?: SessionChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionChatInclude<ExtArgs> | null
    /**
     * Filter, which SessionChats to fetch.
     */
    where?: SessionChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionChats to fetch.
     */
    orderBy?: SessionChatOrderByWithRelationInput | SessionChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionChats.
     */
    cursor?: SessionChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionChats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionChats.
     */
    skip?: number
    distinct?: SessionChatScalarFieldEnum | SessionChatScalarFieldEnum[]
  }

  /**
   * SessionChat create
   */
  export type SessionChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionChat
     */
    select?: SessionChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionChat
     */
    omit?: SessionChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionChatInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionChat.
     */
    data: XOR<SessionChatCreateInput, SessionChatUncheckedCreateInput>
  }

  /**
   * SessionChat createMany
   */
  export type SessionChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionChats.
     */
    data: SessionChatCreateManyInput | SessionChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionChat createManyAndReturn
   */
  export type SessionChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionChat
     */
    select?: SessionChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionChat
     */
    omit?: SessionChatOmit<ExtArgs> | null
    /**
     * The data used to create many SessionChats.
     */
    data: SessionChatCreateManyInput | SessionChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionChat update
   */
  export type SessionChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionChat
     */
    select?: SessionChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionChat
     */
    omit?: SessionChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionChatInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionChat.
     */
    data: XOR<SessionChatUpdateInput, SessionChatUncheckedUpdateInput>
    /**
     * Choose, which SessionChat to update.
     */
    where: SessionChatWhereUniqueInput
  }

  /**
   * SessionChat updateMany
   */
  export type SessionChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionChats.
     */
    data: XOR<SessionChatUpdateManyMutationInput, SessionChatUncheckedUpdateManyInput>
    /**
     * Filter which SessionChats to update
     */
    where?: SessionChatWhereInput
    /**
     * Limit how many SessionChats to update.
     */
    limit?: number
  }

  /**
   * SessionChat updateManyAndReturn
   */
  export type SessionChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionChat
     */
    select?: SessionChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionChat
     */
    omit?: SessionChatOmit<ExtArgs> | null
    /**
     * The data used to update SessionChats.
     */
    data: XOR<SessionChatUpdateManyMutationInput, SessionChatUncheckedUpdateManyInput>
    /**
     * Filter which SessionChats to update
     */
    where?: SessionChatWhereInput
    /**
     * Limit how many SessionChats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionChat upsert
   */
  export type SessionChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionChat
     */
    select?: SessionChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionChat
     */
    omit?: SessionChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionChatInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionChat to update in case it exists.
     */
    where: SessionChatWhereUniqueInput
    /**
     * In case the SessionChat found by the `where` argument doesn't exist, create a new SessionChat with this data.
     */
    create: XOR<SessionChatCreateInput, SessionChatUncheckedCreateInput>
    /**
     * In case the SessionChat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionChatUpdateInput, SessionChatUncheckedUpdateInput>
  }

  /**
   * SessionChat delete
   */
  export type SessionChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionChat
     */
    select?: SessionChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionChat
     */
    omit?: SessionChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionChatInclude<ExtArgs> | null
    /**
     * Filter which SessionChat to delete.
     */
    where: SessionChatWhereUniqueInput
  }

  /**
   * SessionChat deleteMany
   */
  export type SessionChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionChats to delete
     */
    where?: SessionChatWhereInput
    /**
     * Limit how many SessionChats to delete.
     */
    limit?: number
  }

  /**
   * SessionChat.chat_history
   */
  export type SessionChat$chat_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    where?: ChatHistoryWhereInput
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    cursor?: ChatHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatHistoryScalarFieldEnum | ChatHistoryScalarFieldEnum[]
  }

  /**
   * SessionChat.feedbacks
   */
  export type SessionChat$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * SessionChat without action
   */
  export type SessionChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionChat
     */
    select?: SessionChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionChat
     */
    omit?: SessionChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionChatInclude<ExtArgs> | null
  }


  /**
   * Model ChatHistory
   */

  export type AggregateChatHistory = {
    _count: ChatHistoryCountAggregateOutputType | null
    _avg: ChatHistoryAvgAggregateOutputType | null
    _sum: ChatHistorySumAggregateOutputType | null
    _min: ChatHistoryMinAggregateOutputType | null
    _max: ChatHistoryMaxAggregateOutputType | null
  }

  export type ChatHistoryAvgAggregateOutputType = {
    id: number | null
    token: number | null
    cost: Decimal | null
    scope: number | null
    user_id: number | null
    type: number | null
    parent: number | null
  }

  export type ChatHistorySumAggregateOutputType = {
    id: number | null
    token: number | null
    cost: Decimal | null
    scope: number | null
    user_id: number | null
    type: number | null
    parent: number | null
  }

  export type ChatHistoryMinAggregateOutputType = {
    id: number | null
    role: string | null
    content: string | null
    token: number | null
    cost: Decimal | null
    scope: number | null
    session_id: string | null
    model: string | null
    user_id: number | null
    status: string | null
    notes: string | null
    created_at: Date | null
    type: number | null
    parent: number | null
    tools: string | null
  }

  export type ChatHistoryMaxAggregateOutputType = {
    id: number | null
    role: string | null
    content: string | null
    token: number | null
    cost: Decimal | null
    scope: number | null
    session_id: string | null
    model: string | null
    user_id: number | null
    status: string | null
    notes: string | null
    created_at: Date | null
    type: number | null
    parent: number | null
    tools: string | null
  }

  export type ChatHistoryCountAggregateOutputType = {
    id: number
    role: number
    content: number
    embedding: number
    token: number
    cost: number
    scope: number
    session_id: number
    model: number
    user_id: number
    status: number
    notes: number
    created_at: number
    type: number
    parent: number
    tools: number
    data: number
    metadata: number
    _all: number
  }


  export type ChatHistoryAvgAggregateInputType = {
    id?: true
    token?: true
    cost?: true
    scope?: true
    user_id?: true
    type?: true
    parent?: true
  }

  export type ChatHistorySumAggregateInputType = {
    id?: true
    token?: true
    cost?: true
    scope?: true
    user_id?: true
    type?: true
    parent?: true
  }

  export type ChatHistoryMinAggregateInputType = {
    id?: true
    role?: true
    content?: true
    token?: true
    cost?: true
    scope?: true
    session_id?: true
    model?: true
    user_id?: true
    status?: true
    notes?: true
    created_at?: true
    type?: true
    parent?: true
    tools?: true
  }

  export type ChatHistoryMaxAggregateInputType = {
    id?: true
    role?: true
    content?: true
    token?: true
    cost?: true
    scope?: true
    session_id?: true
    model?: true
    user_id?: true
    status?: true
    notes?: true
    created_at?: true
    type?: true
    parent?: true
    tools?: true
  }

  export type ChatHistoryCountAggregateInputType = {
    id?: true
    role?: true
    content?: true
    embedding?: true
    token?: true
    cost?: true
    scope?: true
    session_id?: true
    model?: true
    user_id?: true
    status?: true
    notes?: true
    created_at?: true
    type?: true
    parent?: true
    tools?: true
    data?: true
    metadata?: true
    _all?: true
  }

  export type ChatHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatHistory to aggregate.
     */
    where?: ChatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatHistories to fetch.
     */
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatHistories
    **/
    _count?: true | ChatHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatHistoryMaxAggregateInputType
  }

  export type GetChatHistoryAggregateType<T extends ChatHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateChatHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatHistory[P]>
      : GetScalarType<T[P], AggregateChatHistory[P]>
  }




  export type ChatHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatHistoryWhereInput
    orderBy?: ChatHistoryOrderByWithAggregationInput | ChatHistoryOrderByWithAggregationInput[]
    by: ChatHistoryScalarFieldEnum[] | ChatHistoryScalarFieldEnum
    having?: ChatHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatHistoryCountAggregateInputType | true
    _avg?: ChatHistoryAvgAggregateInputType
    _sum?: ChatHistorySumAggregateInputType
    _min?: ChatHistoryMinAggregateInputType
    _max?: ChatHistoryMaxAggregateInputType
  }

  export type ChatHistoryGroupByOutputType = {
    id: number
    role: string
    content: string
    embedding: JsonValue
    token: number
    cost: Decimal
    scope: number
    session_id: string
    model: string | null
    user_id: number | null
    status: string
    notes: string | null
    created_at: Date
    type: number
    parent: number | null
    tools: string | null
    data: JsonValue | null
    metadata: JsonValue | null
    _count: ChatHistoryCountAggregateOutputType | null
    _avg: ChatHistoryAvgAggregateOutputType | null
    _sum: ChatHistorySumAggregateOutputType | null
    _min: ChatHistoryMinAggregateOutputType | null
    _max: ChatHistoryMaxAggregateOutputType | null
  }

  type GetChatHistoryGroupByPayload<T extends ChatHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ChatHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ChatHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    content?: boolean
    embedding?: boolean
    token?: boolean
    cost?: boolean
    scope?: boolean
    session_id?: boolean
    model?: boolean
    user_id?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    type?: boolean
    parent?: boolean
    tools?: boolean
    data?: boolean
    metadata?: boolean
    session?: boolean | SessionChatDefaultArgs<ExtArgs>
    user?: boolean | ChatHistory$userArgs<ExtArgs>
    feedbacks?: boolean | ChatHistory$feedbacksArgs<ExtArgs>
    _count?: boolean | ChatHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatHistory"]>

  export type ChatHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    content?: boolean
    embedding?: boolean
    token?: boolean
    cost?: boolean
    scope?: boolean
    session_id?: boolean
    model?: boolean
    user_id?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    type?: boolean
    parent?: boolean
    tools?: boolean
    data?: boolean
    metadata?: boolean
    session?: boolean | SessionChatDefaultArgs<ExtArgs>
    user?: boolean | ChatHistory$userArgs<ExtArgs>
  }, ExtArgs["result"]["chatHistory"]>

  export type ChatHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    content?: boolean
    embedding?: boolean
    token?: boolean
    cost?: boolean
    scope?: boolean
    session_id?: boolean
    model?: boolean
    user_id?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    type?: boolean
    parent?: boolean
    tools?: boolean
    data?: boolean
    metadata?: boolean
    session?: boolean | SessionChatDefaultArgs<ExtArgs>
    user?: boolean | ChatHistory$userArgs<ExtArgs>
  }, ExtArgs["result"]["chatHistory"]>

  export type ChatHistorySelectScalar = {
    id?: boolean
    role?: boolean
    content?: boolean
    embedding?: boolean
    token?: boolean
    cost?: boolean
    scope?: boolean
    session_id?: boolean
    model?: boolean
    user_id?: boolean
    status?: boolean
    notes?: boolean
    created_at?: boolean
    type?: boolean
    parent?: boolean
    tools?: boolean
    data?: boolean
    metadata?: boolean
  }

  export type ChatHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "content" | "embedding" | "token" | "cost" | "scope" | "session_id" | "model" | "user_id" | "status" | "notes" | "created_at" | "type" | "parent" | "tools" | "data" | "metadata", ExtArgs["result"]["chatHistory"]>
  export type ChatHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionChatDefaultArgs<ExtArgs>
    user?: boolean | ChatHistory$userArgs<ExtArgs>
    feedbacks?: boolean | ChatHistory$feedbacksArgs<ExtArgs>
    _count?: boolean | ChatHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionChatDefaultArgs<ExtArgs>
    user?: boolean | ChatHistory$userArgs<ExtArgs>
  }
  export type ChatHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionChatDefaultArgs<ExtArgs>
    user?: boolean | ChatHistory$userArgs<ExtArgs>
  }

  export type $ChatHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatHistory"
    objects: {
      session: Prisma.$SessionChatPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs> | null
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      role: string
      content: string
      embedding: Prisma.JsonValue
      token: number
      cost: Prisma.Decimal
      scope: number
      session_id: string
      model: string | null
      user_id: number | null
      status: string
      notes: string | null
      created_at: Date
      type: number
      parent: number | null
      tools: string | null
      data: Prisma.JsonValue | null
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["chatHistory"]>
    composites: {}
  }

  type ChatHistoryGetPayload<S extends boolean | null | undefined | ChatHistoryDefaultArgs> = $Result.GetResult<Prisma.$ChatHistoryPayload, S>

  type ChatHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatHistoryCountAggregateInputType | true
    }

  export interface ChatHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatHistory'], meta: { name: 'ChatHistory' } }
    /**
     * Find zero or one ChatHistory that matches the filter.
     * @param {ChatHistoryFindUniqueArgs} args - Arguments to find a ChatHistory
     * @example
     * // Get one ChatHistory
     * const chatHistory = await prisma.chatHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatHistoryFindUniqueArgs>(args: SelectSubset<T, ChatHistoryFindUniqueArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatHistoryFindUniqueOrThrowArgs} args - Arguments to find a ChatHistory
     * @example
     * // Get one ChatHistory
     * const chatHistory = await prisma.chatHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryFindFirstArgs} args - Arguments to find a ChatHistory
     * @example
     * // Get one ChatHistory
     * const chatHistory = await prisma.chatHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatHistoryFindFirstArgs>(args?: SelectSubset<T, ChatHistoryFindFirstArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryFindFirstOrThrowArgs} args - Arguments to find a ChatHistory
     * @example
     * // Get one ChatHistory
     * const chatHistory = await prisma.chatHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatHistories
     * const chatHistories = await prisma.chatHistory.findMany()
     * 
     * // Get first 10 ChatHistories
     * const chatHistories = await prisma.chatHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatHistoryWithIdOnly = await prisma.chatHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatHistoryFindManyArgs>(args?: SelectSubset<T, ChatHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatHistory.
     * @param {ChatHistoryCreateArgs} args - Arguments to create a ChatHistory.
     * @example
     * // Create one ChatHistory
     * const ChatHistory = await prisma.chatHistory.create({
     *   data: {
     *     // ... data to create a ChatHistory
     *   }
     * })
     * 
     */
    create<T extends ChatHistoryCreateArgs>(args: SelectSubset<T, ChatHistoryCreateArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatHistories.
     * @param {ChatHistoryCreateManyArgs} args - Arguments to create many ChatHistories.
     * @example
     * // Create many ChatHistories
     * const chatHistory = await prisma.chatHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatHistoryCreateManyArgs>(args?: SelectSubset<T, ChatHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatHistories and returns the data saved in the database.
     * @param {ChatHistoryCreateManyAndReturnArgs} args - Arguments to create many ChatHistories.
     * @example
     * // Create many ChatHistories
     * const chatHistory = await prisma.chatHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatHistories and only return the `id`
     * const chatHistoryWithIdOnly = await prisma.chatHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatHistory.
     * @param {ChatHistoryDeleteArgs} args - Arguments to delete one ChatHistory.
     * @example
     * // Delete one ChatHistory
     * const ChatHistory = await prisma.chatHistory.delete({
     *   where: {
     *     // ... filter to delete one ChatHistory
     *   }
     * })
     * 
     */
    delete<T extends ChatHistoryDeleteArgs>(args: SelectSubset<T, ChatHistoryDeleteArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatHistory.
     * @param {ChatHistoryUpdateArgs} args - Arguments to update one ChatHistory.
     * @example
     * // Update one ChatHistory
     * const chatHistory = await prisma.chatHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatHistoryUpdateArgs>(args: SelectSubset<T, ChatHistoryUpdateArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatHistories.
     * @param {ChatHistoryDeleteManyArgs} args - Arguments to filter ChatHistories to delete.
     * @example
     * // Delete a few ChatHistories
     * const { count } = await prisma.chatHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatHistoryDeleteManyArgs>(args?: SelectSubset<T, ChatHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatHistories
     * const chatHistory = await prisma.chatHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatHistoryUpdateManyArgs>(args: SelectSubset<T, ChatHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatHistories and returns the data updated in the database.
     * @param {ChatHistoryUpdateManyAndReturnArgs} args - Arguments to update many ChatHistories.
     * @example
     * // Update many ChatHistories
     * const chatHistory = await prisma.chatHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatHistories and only return the `id`
     * const chatHistoryWithIdOnly = await prisma.chatHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatHistory.
     * @param {ChatHistoryUpsertArgs} args - Arguments to update or create a ChatHistory.
     * @example
     * // Update or create a ChatHistory
     * const chatHistory = await prisma.chatHistory.upsert({
     *   create: {
     *     // ... data to create a ChatHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatHistory we want to update
     *   }
     * })
     */
    upsert<T extends ChatHistoryUpsertArgs>(args: SelectSubset<T, ChatHistoryUpsertArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryCountArgs} args - Arguments to filter ChatHistories to count.
     * @example
     * // Count the number of ChatHistories
     * const count = await prisma.chatHistory.count({
     *   where: {
     *     // ... the filter for the ChatHistories we want to count
     *   }
     * })
    **/
    count<T extends ChatHistoryCountArgs>(
      args?: Subset<T, ChatHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatHistoryAggregateArgs>(args: Subset<T, ChatHistoryAggregateArgs>): Prisma.PrismaPromise<GetChatHistoryAggregateType<T>>

    /**
     * Group by ChatHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatHistoryGroupByArgs} args - Group by arguments.
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
      T extends ChatHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ChatHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatHistory model
   */
  readonly fields: ChatHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionChatDefaultArgs<ExtArgs>>): Prisma__SessionChatClient<$Result.GetResult<Prisma.$SessionChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends ChatHistory$userArgs<ExtArgs> = {}>(args?: Subset<T, ChatHistory$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    feedbacks<T extends ChatHistory$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, ChatHistory$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ChatHistory model
   */
  interface ChatHistoryFieldRefs {
    readonly id: FieldRef<"ChatHistory", 'Int'>
    readonly role: FieldRef<"ChatHistory", 'String'>
    readonly content: FieldRef<"ChatHistory", 'String'>
    readonly embedding: FieldRef<"ChatHistory", 'Json'>
    readonly token: FieldRef<"ChatHistory", 'Int'>
    readonly cost: FieldRef<"ChatHistory", 'Decimal'>
    readonly scope: FieldRef<"ChatHistory", 'Int'>
    readonly session_id: FieldRef<"ChatHistory", 'String'>
    readonly model: FieldRef<"ChatHistory", 'String'>
    readonly user_id: FieldRef<"ChatHistory", 'Int'>
    readonly status: FieldRef<"ChatHistory", 'String'>
    readonly notes: FieldRef<"ChatHistory", 'String'>
    readonly created_at: FieldRef<"ChatHistory", 'DateTime'>
    readonly type: FieldRef<"ChatHistory", 'Int'>
    readonly parent: FieldRef<"ChatHistory", 'Int'>
    readonly tools: FieldRef<"ChatHistory", 'String'>
    readonly data: FieldRef<"ChatHistory", 'Json'>
    readonly metadata: FieldRef<"ChatHistory", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ChatHistory findUnique
   */
  export type ChatHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatHistory to fetch.
     */
    where: ChatHistoryWhereUniqueInput
  }

  /**
   * ChatHistory findUniqueOrThrow
   */
  export type ChatHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatHistory to fetch.
     */
    where: ChatHistoryWhereUniqueInput
  }

  /**
   * ChatHistory findFirst
   */
  export type ChatHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatHistory to fetch.
     */
    where?: ChatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatHistories to fetch.
     */
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatHistories.
     */
    cursor?: ChatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatHistories.
     */
    distinct?: ChatHistoryScalarFieldEnum | ChatHistoryScalarFieldEnum[]
  }

  /**
   * ChatHistory findFirstOrThrow
   */
  export type ChatHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatHistory to fetch.
     */
    where?: ChatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatHistories to fetch.
     */
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatHistories.
     */
    cursor?: ChatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatHistories.
     */
    distinct?: ChatHistoryScalarFieldEnum | ChatHistoryScalarFieldEnum[]
  }

  /**
   * ChatHistory findMany
   */
  export type ChatHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ChatHistories to fetch.
     */
    where?: ChatHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatHistories to fetch.
     */
    orderBy?: ChatHistoryOrderByWithRelationInput | ChatHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatHistories.
     */
    cursor?: ChatHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatHistories.
     */
    skip?: number
    distinct?: ChatHistoryScalarFieldEnum | ChatHistoryScalarFieldEnum[]
  }

  /**
   * ChatHistory create
   */
  export type ChatHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatHistory.
     */
    data: XOR<ChatHistoryCreateInput, ChatHistoryUncheckedCreateInput>
  }

  /**
   * ChatHistory createMany
   */
  export type ChatHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatHistories.
     */
    data: ChatHistoryCreateManyInput | ChatHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatHistory createManyAndReturn
   */
  export type ChatHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ChatHistories.
     */
    data: ChatHistoryCreateManyInput | ChatHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatHistory update
   */
  export type ChatHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatHistory.
     */
    data: XOR<ChatHistoryUpdateInput, ChatHistoryUncheckedUpdateInput>
    /**
     * Choose, which ChatHistory to update.
     */
    where: ChatHistoryWhereUniqueInput
  }

  /**
   * ChatHistory updateMany
   */
  export type ChatHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatHistories.
     */
    data: XOR<ChatHistoryUpdateManyMutationInput, ChatHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ChatHistories to update
     */
    where?: ChatHistoryWhereInput
    /**
     * Limit how many ChatHistories to update.
     */
    limit?: number
  }

  /**
   * ChatHistory updateManyAndReturn
   */
  export type ChatHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ChatHistories.
     */
    data: XOR<ChatHistoryUpdateManyMutationInput, ChatHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ChatHistories to update
     */
    where?: ChatHistoryWhereInput
    /**
     * Limit how many ChatHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatHistory upsert
   */
  export type ChatHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatHistory to update in case it exists.
     */
    where: ChatHistoryWhereUniqueInput
    /**
     * In case the ChatHistory found by the `where` argument doesn't exist, create a new ChatHistory with this data.
     */
    create: XOR<ChatHistoryCreateInput, ChatHistoryUncheckedCreateInput>
    /**
     * In case the ChatHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatHistoryUpdateInput, ChatHistoryUncheckedUpdateInput>
  }

  /**
   * ChatHistory delete
   */
  export type ChatHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
    /**
     * Filter which ChatHistory to delete.
     */
    where: ChatHistoryWhereUniqueInput
  }

  /**
   * ChatHistory deleteMany
   */
  export type ChatHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatHistories to delete
     */
    where?: ChatHistoryWhereInput
    /**
     * Limit how many ChatHistories to delete.
     */
    limit?: number
  }

  /**
   * ChatHistory.user
   */
  export type ChatHistory$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ChatHistory.feedbacks
   */
  export type ChatHistory$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * ChatHistory without action
   */
  export type ChatHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatHistory
     */
    select?: ChatHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatHistory
     */
    omit?: ChatHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
    chat_id: number | null
    session_id: number | null
    user_id: number | null
    rating: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
    chat_id: number | null
    session_id: number | null
    user_id: number | null
    rating: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    chat_id: number | null
    session_id: number | null
    user_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    chat_id: number | null
    session_id: number | null
    user_id: number | null
    rating: number | null
    comment: string | null
    created_at: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    chat_id: number
    session_id: number
    user_id: number
    rating: number
    comment: number
    created_at: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
    chat_id?: true
    session_id?: true
    user_id?: true
    rating?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
    chat_id?: true
    session_id?: true
    user_id?: true
    rating?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    chat_id?: true
    session_id?: true
    user_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    chat_id?: true
    session_id?: true
    user_id?: true
    rating?: true
    comment?: true
    created_at?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    chat_id?: true
    session_id?: true
    user_id?: true
    rating?: true
    comment?: true
    created_at?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    chat_id: number
    session_id: number | null
    user_id: number | null
    rating: number
    comment: string | null
    created_at: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    session_id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    chat?: boolean | ChatHistoryDefaultArgs<ExtArgs>
    session?: boolean | Feedback$sessionArgs<ExtArgs>
    user?: boolean | Feedback$userArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    session_id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    chat?: boolean | ChatHistoryDefaultArgs<ExtArgs>
    session?: boolean | Feedback$sessionArgs<ExtArgs>
    user?: boolean | Feedback$userArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chat_id?: boolean
    session_id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
    chat?: boolean | ChatHistoryDefaultArgs<ExtArgs>
    session?: boolean | Feedback$sessionArgs<ExtArgs>
    user?: boolean | Feedback$userArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    chat_id?: boolean
    session_id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    created_at?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chat_id" | "session_id" | "user_id" | "rating" | "comment" | "created_at", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatHistoryDefaultArgs<ExtArgs>
    session?: boolean | Feedback$sessionArgs<ExtArgs>
    user?: boolean | Feedback$userArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatHistoryDefaultArgs<ExtArgs>
    session?: boolean | Feedback$sessionArgs<ExtArgs>
    user?: boolean | Feedback$userArgs<ExtArgs>
  }
  export type FeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chat?: boolean | ChatHistoryDefaultArgs<ExtArgs>
    session?: boolean | Feedback$sessionArgs<ExtArgs>
    user?: boolean | Feedback$userArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      chat: Prisma.$ChatHistoryPayload<ExtArgs>
      session: Prisma.$SessionChatPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chat_id: number
      session_id: number | null
      user_id: number | null
      rating: number
      comment: string | null
      created_at: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
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
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chat<T extends ChatHistoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatHistoryDefaultArgs<ExtArgs>>): Prisma__ChatHistoryClient<$Result.GetResult<Prisma.$ChatHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends Feedback$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Feedback$sessionArgs<ExtArgs>>): Prisma__SessionChatClient<$Result.GetResult<Prisma.$SessionChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends Feedback$userArgs<ExtArgs> = {}>(args?: Subset<T, Feedback$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'Int'>
    readonly chat_id: FieldRef<"Feedback", 'Int'>
    readonly session_id: FieldRef<"Feedback", 'Int'>
    readonly user_id: FieldRef<"Feedback", 'Int'>
    readonly rating: FieldRef<"Feedback", 'Int'>
    readonly comment: FieldRef<"Feedback", 'String'>
    readonly created_at: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback.session
   */
  export type Feedback$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionChat
     */
    select?: SessionChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionChat
     */
    omit?: SessionChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionChatInclude<ExtArgs> | null
    where?: SessionChatWhereInput
  }

  /**
   * Feedback.user
   */
  export type Feedback$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    hashed_password: 'hashed_password',
    full_name: 'full_name',
    is_active: 'is_active',
    role: 'role',
    last_login: 'last_login',
    avatar_url: 'avatar_url',
    api_key: 'api_key',
    credits: 'credits',
    quota: 'quota',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionChatScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    user_id: 'user_id',
    title: 'title',
    status: 'status',
    model: 'model',
    summary: 'summary',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SessionChatScalarFieldEnum = (typeof SessionChatScalarFieldEnum)[keyof typeof SessionChatScalarFieldEnum]


  export const ChatHistoryScalarFieldEnum: {
    id: 'id',
    role: 'role',
    content: 'content',
    embedding: 'embedding',
    token: 'token',
    cost: 'cost',
    scope: 'scope',
    session_id: 'session_id',
    model: 'model',
    user_id: 'user_id',
    status: 'status',
    notes: 'notes',
    created_at: 'created_at',
    type: 'type',
    parent: 'parent',
    tools: 'tools',
    data: 'data',
    metadata: 'metadata'
  };

  export type ChatHistoryScalarFieldEnum = (typeof ChatHistoryScalarFieldEnum)[keyof typeof ChatHistoryScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    chat_id: 'chat_id',
    session_id: 'session_id',
    user_id: 'user_id',
    rating: 'rating',
    comment: 'comment',
    created_at: 'created_at'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    hashed_password?: StringFilter<"User"> | string
    full_name?: StringNullableFilter<"User"> | string | null
    is_active?: BoolFilter<"User"> | boolean
    role?: StringFilter<"User"> | string
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    avatar_url?: StringNullableFilter<"User"> | string | null
    api_key?: StringNullableFilter<"User"> | string | null
    credits?: IntFilter<"User"> | number
    quota?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionChatListRelationFilter
    chat_history?: ChatHistoryListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    full_name?: SortOrderInput | SortOrder
    is_active?: SortOrder
    role?: SortOrder
    last_login?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    api_key?: SortOrderInput | SortOrder
    credits?: SortOrder
    quota?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    sessions?: SessionChatOrderByRelationAggregateInput
    chat_history?: ChatHistoryOrderByRelationAggregateInput
    feedbacks?: FeedbackOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    api_key?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    hashed_password?: StringFilter<"User"> | string
    full_name?: StringNullableFilter<"User"> | string | null
    is_active?: BoolFilter<"User"> | boolean
    role?: StringFilter<"User"> | string
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
    avatar_url?: StringNullableFilter<"User"> | string | null
    credits?: IntFilter<"User"> | number
    quota?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionChatListRelationFilter
    chat_history?: ChatHistoryListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }, "id" | "username" | "email" | "api_key">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    full_name?: SortOrderInput | SortOrder
    is_active?: SortOrder
    role?: SortOrder
    last_login?: SortOrderInput | SortOrder
    avatar_url?: SortOrderInput | SortOrder
    api_key?: SortOrderInput | SortOrder
    credits?: SortOrder
    quota?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    hashed_password?: StringWithAggregatesFilter<"User"> | string
    full_name?: StringNullableWithAggregatesFilter<"User"> | string | null
    is_active?: BoolWithAggregatesFilter<"User"> | boolean
    role?: StringWithAggregatesFilter<"User"> | string
    last_login?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    avatar_url?: StringNullableWithAggregatesFilter<"User"> | string | null
    api_key?: StringNullableWithAggregatesFilter<"User"> | string | null
    credits?: IntWithAggregatesFilter<"User"> | number
    quota?: IntWithAggregatesFilter<"User"> | number
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionChatWhereInput = {
    AND?: SessionChatWhereInput | SessionChatWhereInput[]
    OR?: SessionChatWhereInput[]
    NOT?: SessionChatWhereInput | SessionChatWhereInput[]
    id?: IntFilter<"SessionChat"> | number
    uuid?: StringFilter<"SessionChat"> | string
    user_id?: IntFilter<"SessionChat"> | number
    title?: StringNullableFilter<"SessionChat"> | string | null
    status?: StringFilter<"SessionChat"> | string
    model?: StringNullableFilter<"SessionChat"> | string | null
    summary?: StringNullableFilter<"SessionChat"> | string | null
    created_at?: DateTimeFilter<"SessionChat"> | Date | string
    updated_at?: DateTimeFilter<"SessionChat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat_history?: ChatHistoryListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }

  export type SessionChatOrderByWithRelationInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    model?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    chat_history?: ChatHistoryOrderByRelationAggregateInput
    feedbacks?: FeedbackOrderByRelationAggregateInput
  }

  export type SessionChatWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: SessionChatWhereInput | SessionChatWhereInput[]
    OR?: SessionChatWhereInput[]
    NOT?: SessionChatWhereInput | SessionChatWhereInput[]
    user_id?: IntFilter<"SessionChat"> | number
    title?: StringNullableFilter<"SessionChat"> | string | null
    status?: StringFilter<"SessionChat"> | string
    model?: StringNullableFilter<"SessionChat"> | string | null
    summary?: StringNullableFilter<"SessionChat"> | string | null
    created_at?: DateTimeFilter<"SessionChat"> | Date | string
    updated_at?: DateTimeFilter<"SessionChat"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat_history?: ChatHistoryListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }, "id" | "uuid">

  export type SessionChatOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    title?: SortOrderInput | SortOrder
    status?: SortOrder
    model?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: SessionChatCountOrderByAggregateInput
    _avg?: SessionChatAvgOrderByAggregateInput
    _max?: SessionChatMaxOrderByAggregateInput
    _min?: SessionChatMinOrderByAggregateInput
    _sum?: SessionChatSumOrderByAggregateInput
  }

  export type SessionChatScalarWhereWithAggregatesInput = {
    AND?: SessionChatScalarWhereWithAggregatesInput | SessionChatScalarWhereWithAggregatesInput[]
    OR?: SessionChatScalarWhereWithAggregatesInput[]
    NOT?: SessionChatScalarWhereWithAggregatesInput | SessionChatScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SessionChat"> | number
    uuid?: StringWithAggregatesFilter<"SessionChat"> | string
    user_id?: IntWithAggregatesFilter<"SessionChat"> | number
    title?: StringNullableWithAggregatesFilter<"SessionChat"> | string | null
    status?: StringWithAggregatesFilter<"SessionChat"> | string
    model?: StringNullableWithAggregatesFilter<"SessionChat"> | string | null
    summary?: StringNullableWithAggregatesFilter<"SessionChat"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"SessionChat"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"SessionChat"> | Date | string
  }

  export type ChatHistoryWhereInput = {
    AND?: ChatHistoryWhereInput | ChatHistoryWhereInput[]
    OR?: ChatHistoryWhereInput[]
    NOT?: ChatHistoryWhereInput | ChatHistoryWhereInput[]
    id?: IntFilter<"ChatHistory"> | number
    role?: StringFilter<"ChatHistory"> | string
    content?: StringFilter<"ChatHistory"> | string
    embedding?: JsonFilter<"ChatHistory">
    token?: IntFilter<"ChatHistory"> | number
    cost?: DecimalFilter<"ChatHistory"> | Decimal | DecimalJsLike | number | string
    scope?: IntFilter<"ChatHistory"> | number
    session_id?: StringFilter<"ChatHistory"> | string
    model?: StringNullableFilter<"ChatHistory"> | string | null
    user_id?: IntNullableFilter<"ChatHistory"> | number | null
    status?: StringFilter<"ChatHistory"> | string
    notes?: StringNullableFilter<"ChatHistory"> | string | null
    created_at?: DateTimeFilter<"ChatHistory"> | Date | string
    type?: IntFilter<"ChatHistory"> | number
    parent?: IntNullableFilter<"ChatHistory"> | number | null
    tools?: StringNullableFilter<"ChatHistory"> | string | null
    data?: JsonNullableFilter<"ChatHistory">
    metadata?: JsonNullableFilter<"ChatHistory">
    session?: XOR<SessionChatScalarRelationFilter, SessionChatWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    feedbacks?: FeedbackListRelationFilter
  }

  export type ChatHistoryOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    embedding?: SortOrder
    token?: SortOrder
    cost?: SortOrder
    scope?: SortOrder
    session_id?: SortOrder
    model?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    type?: SortOrder
    parent?: SortOrderInput | SortOrder
    tools?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    session?: SessionChatOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    feedbacks?: FeedbackOrderByRelationAggregateInput
  }

  export type ChatHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChatHistoryWhereInput | ChatHistoryWhereInput[]
    OR?: ChatHistoryWhereInput[]
    NOT?: ChatHistoryWhereInput | ChatHistoryWhereInput[]
    role?: StringFilter<"ChatHistory"> | string
    content?: StringFilter<"ChatHistory"> | string
    embedding?: JsonFilter<"ChatHistory">
    token?: IntFilter<"ChatHistory"> | number
    cost?: DecimalFilter<"ChatHistory"> | Decimal | DecimalJsLike | number | string
    scope?: IntFilter<"ChatHistory"> | number
    session_id?: StringFilter<"ChatHistory"> | string
    model?: StringNullableFilter<"ChatHistory"> | string | null
    user_id?: IntNullableFilter<"ChatHistory"> | number | null
    status?: StringFilter<"ChatHistory"> | string
    notes?: StringNullableFilter<"ChatHistory"> | string | null
    created_at?: DateTimeFilter<"ChatHistory"> | Date | string
    type?: IntFilter<"ChatHistory"> | number
    parent?: IntNullableFilter<"ChatHistory"> | number | null
    tools?: StringNullableFilter<"ChatHistory"> | string | null
    data?: JsonNullableFilter<"ChatHistory">
    metadata?: JsonNullableFilter<"ChatHistory">
    session?: XOR<SessionChatScalarRelationFilter, SessionChatWhereInput>
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    feedbacks?: FeedbackListRelationFilter
  }, "id">

  export type ChatHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    embedding?: SortOrder
    token?: SortOrder
    cost?: SortOrder
    scope?: SortOrder
    session_id?: SortOrder
    model?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrder
    type?: SortOrder
    parent?: SortOrderInput | SortOrder
    tools?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: ChatHistoryCountOrderByAggregateInput
    _avg?: ChatHistoryAvgOrderByAggregateInput
    _max?: ChatHistoryMaxOrderByAggregateInput
    _min?: ChatHistoryMinOrderByAggregateInput
    _sum?: ChatHistorySumOrderByAggregateInput
  }

  export type ChatHistoryScalarWhereWithAggregatesInput = {
    AND?: ChatHistoryScalarWhereWithAggregatesInput | ChatHistoryScalarWhereWithAggregatesInput[]
    OR?: ChatHistoryScalarWhereWithAggregatesInput[]
    NOT?: ChatHistoryScalarWhereWithAggregatesInput | ChatHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatHistory"> | number
    role?: StringWithAggregatesFilter<"ChatHistory"> | string
    content?: StringWithAggregatesFilter<"ChatHistory"> | string
    embedding?: JsonWithAggregatesFilter<"ChatHistory">
    token?: IntWithAggregatesFilter<"ChatHistory"> | number
    cost?: DecimalWithAggregatesFilter<"ChatHistory"> | Decimal | DecimalJsLike | number | string
    scope?: IntWithAggregatesFilter<"ChatHistory"> | number
    session_id?: StringWithAggregatesFilter<"ChatHistory"> | string
    model?: StringNullableWithAggregatesFilter<"ChatHistory"> | string | null
    user_id?: IntNullableWithAggregatesFilter<"ChatHistory"> | number | null
    status?: StringWithAggregatesFilter<"ChatHistory"> | string
    notes?: StringNullableWithAggregatesFilter<"ChatHistory"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ChatHistory"> | Date | string
    type?: IntWithAggregatesFilter<"ChatHistory"> | number
    parent?: IntNullableWithAggregatesFilter<"ChatHistory"> | number | null
    tools?: StringNullableWithAggregatesFilter<"ChatHistory"> | string | null
    data?: JsonNullableWithAggregatesFilter<"ChatHistory">
    metadata?: JsonNullableWithAggregatesFilter<"ChatHistory">
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: IntFilter<"Feedback"> | number
    chat_id?: IntFilter<"Feedback"> | number
    session_id?: IntNullableFilter<"Feedback"> | number | null
    user_id?: IntNullableFilter<"Feedback"> | number | null
    rating?: IntFilter<"Feedback"> | number
    comment?: StringNullableFilter<"Feedback"> | string | null
    created_at?: DateTimeFilter<"Feedback"> | Date | string
    chat?: XOR<ChatHistoryScalarRelationFilter, ChatHistoryWhereInput>
    session?: XOR<SessionChatNullableScalarRelationFilter, SessionChatWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    chat_id?: SortOrder
    session_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    chat?: ChatHistoryOrderByWithRelationInput
    session?: SessionChatOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    chat_id?: IntFilter<"Feedback"> | number
    session_id?: IntNullableFilter<"Feedback"> | number | null
    user_id?: IntNullableFilter<"Feedback"> | number | null
    rating?: IntFilter<"Feedback"> | number
    comment?: StringNullableFilter<"Feedback"> | string | null
    created_at?: DateTimeFilter<"Feedback"> | Date | string
    chat?: XOR<ChatHistoryScalarRelationFilter, ChatHistoryWhereInput>
    session?: XOR<SessionChatNullableScalarRelationFilter, SessionChatWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    chat_id?: SortOrder
    session_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feedback"> | number
    chat_id?: IntWithAggregatesFilter<"Feedback"> | number
    session_id?: IntNullableWithAggregatesFilter<"Feedback"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"Feedback"> | number | null
    rating?: IntWithAggregatesFilter<"Feedback"> | number
    comment?: StringNullableWithAggregatesFilter<"Feedback"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type UserCreateInput = {
    username: string
    email: string
    hashed_password: string
    full_name?: string | null
    is_active?: boolean
    role?: string
    last_login?: Date | string | null
    avatar_url?: string | null
    api_key?: string | null
    credits?: number
    quota?: number
    created_at?: Date | string
    updated_at?: Date | string
    sessions?: SessionChatCreateNestedManyWithoutUserInput
    chat_history?: ChatHistoryCreateNestedManyWithoutUserInput
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    hashed_password: string
    full_name?: string | null
    is_active?: boolean
    role?: string
    last_login?: Date | string | null
    avatar_url?: string | null
    api_key?: string | null
    credits?: number
    quota?: number
    created_at?: Date | string
    updated_at?: Date | string
    sessions?: SessionChatUncheckedCreateNestedManyWithoutUserInput
    chat_history?: ChatHistoryUncheckedCreateNestedManyWithoutUserInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    quota?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionChatUpdateManyWithoutUserNestedInput
    chat_history?: ChatHistoryUpdateManyWithoutUserNestedInput
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    quota?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionChatUncheckedUpdateManyWithoutUserNestedInput
    chat_history?: ChatHistoryUncheckedUpdateManyWithoutUserNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    hashed_password: string
    full_name?: string | null
    is_active?: boolean
    role?: string
    last_login?: Date | string | null
    avatar_url?: string | null
    api_key?: string | null
    credits?: number
    quota?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    quota?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    quota?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionChatCreateInput = {
    uuid?: string
    title?: string | null
    status?: string
    model?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
    chat_history?: ChatHistoryCreateNestedManyWithoutSessionInput
    feedbacks?: FeedbackCreateNestedManyWithoutSessionInput
  }

  export type SessionChatUncheckedCreateInput = {
    id?: number
    uuid?: string
    user_id: number
    title?: string | null
    status?: string
    model?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    chat_history?: ChatHistoryUncheckedCreateNestedManyWithoutSessionInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionChatUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    chat_history?: ChatHistoryUpdateManyWithoutSessionNestedInput
    feedbacks?: FeedbackUpdateManyWithoutSessionNestedInput
  }

  export type SessionChatUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_history?: ChatHistoryUncheckedUpdateManyWithoutSessionNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionChatCreateManyInput = {
    id?: number
    uuid?: string
    user_id: number
    title?: string | null
    status?: string
    model?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type SessionChatUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionChatUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryCreateInput = {
    role: string
    content: string
    embedding: JsonNullValueInput | InputJsonValue
    token?: number
    cost?: Decimal | DecimalJsLike | number | string
    scope?: number
    model?: string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    type?: number
    parent?: number | null
    tools?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    session: SessionChatCreateNestedOneWithoutChat_historyInput
    user?: UserCreateNestedOneWithoutChat_historyInput
    feedbacks?: FeedbackCreateNestedManyWithoutChatInput
  }

  export type ChatHistoryUncheckedCreateInput = {
    id?: number
    role: string
    content: string
    embedding: JsonNullValueInput | InputJsonValue
    token?: number
    cost?: Decimal | DecimalJsLike | number | string
    scope?: number
    session_id: string
    model?: string | null
    user_id?: number | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    type?: number
    parent?: number | null
    tools?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatHistoryUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    token?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scope?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: IntFieldUpdateOperationsInput | number
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    session?: SessionChatUpdateOneRequiredWithoutChat_historyNestedInput
    user?: UserUpdateOneWithoutChat_historyNestedInput
    feedbacks?: FeedbackUpdateManyWithoutChatNestedInput
  }

  export type ChatHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    token?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scope?: IntFieldUpdateOperationsInput | number
    session_id?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: IntFieldUpdateOperationsInput | number
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    feedbacks?: FeedbackUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatHistoryCreateManyInput = {
    id?: number
    role: string
    content: string
    embedding: JsonNullValueInput | InputJsonValue
    token?: number
    cost?: Decimal | DecimalJsLike | number | string
    scope?: number
    session_id: string
    model?: string | null
    user_id?: number | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    type?: number
    parent?: number | null
    tools?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChatHistoryUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    token?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scope?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: IntFieldUpdateOperationsInput | number
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChatHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    token?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scope?: IntFieldUpdateOperationsInput | number
    session_id?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: IntFieldUpdateOperationsInput | number
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FeedbackCreateInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    chat: ChatHistoryCreateNestedOneWithoutFeedbacksInput
    session?: SessionChatCreateNestedOneWithoutFeedbacksInput
    user?: UserCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: number
    chat_id: number
    session_id?: number | null
    user_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type FeedbackUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatHistoryUpdateOneRequiredWithoutFeedbacksNestedInput
    session?: SessionChatUpdateOneWithoutFeedbacksNestedInput
    user?: UserUpdateOneWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: IntFieldUpdateOperationsInput | number
    session_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: number
    chat_id: number
    session_id?: number | null
    user_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: IntFieldUpdateOperationsInput | number
    session_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SessionChatListRelationFilter = {
    every?: SessionChatWhereInput
    some?: SessionChatWhereInput
    none?: SessionChatWhereInput
  }

  export type ChatHistoryListRelationFilter = {
    every?: ChatHistoryWhereInput
    some?: ChatHistoryWhereInput
    none?: ChatHistoryWhereInput
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    full_name?: SortOrder
    is_active?: SortOrder
    role?: SortOrder
    last_login?: SortOrder
    avatar_url?: SortOrder
    api_key?: SortOrder
    credits?: SortOrder
    quota?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
    quota?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    full_name?: SortOrder
    is_active?: SortOrder
    role?: SortOrder
    last_login?: SortOrder
    avatar_url?: SortOrder
    api_key?: SortOrder
    credits?: SortOrder
    quota?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    hashed_password?: SortOrder
    full_name?: SortOrder
    is_active?: SortOrder
    role?: SortOrder
    last_login?: SortOrder
    avatar_url?: SortOrder
    api_key?: SortOrder
    credits?: SortOrder
    quota?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    credits?: SortOrder
    quota?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionChatCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    model?: SortOrder
    summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SessionChatAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type SessionChatMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    model?: SortOrder
    summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SessionChatMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    status?: SortOrder
    model?: SortOrder
    summary?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SessionChatSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SessionChatScalarRelationFilter = {
    is?: SessionChatWhereInput
    isNot?: SessionChatWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ChatHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    embedding?: SortOrder
    token?: SortOrder
    cost?: SortOrder
    scope?: SortOrder
    session_id?: SortOrder
    model?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    type?: SortOrder
    parent?: SortOrder
    tools?: SortOrder
    data?: SortOrder
    metadata?: SortOrder
  }

  export type ChatHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    cost?: SortOrder
    scope?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    parent?: SortOrder
  }

  export type ChatHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    token?: SortOrder
    cost?: SortOrder
    scope?: SortOrder
    session_id?: SortOrder
    model?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    type?: SortOrder
    parent?: SortOrder
    tools?: SortOrder
  }

  export type ChatHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    token?: SortOrder
    cost?: SortOrder
    scope?: SortOrder
    session_id?: SortOrder
    model?: SortOrder
    user_id?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    type?: SortOrder
    parent?: SortOrder
    tools?: SortOrder
  }

  export type ChatHistorySumOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    cost?: SortOrder
    scope?: SortOrder
    user_id?: SortOrder
    type?: SortOrder
    parent?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ChatHistoryScalarRelationFilter = {
    is?: ChatHistoryWhereInput
    isNot?: ChatHistoryWhereInput
  }

  export type SessionChatNullableScalarRelationFilter = {
    is?: SessionChatWhereInput | null
    isNot?: SessionChatWhereInput | null
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    session_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    session_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    session_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    session_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    chat_id?: SortOrder
    session_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type SessionChatCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionChatCreateWithoutUserInput, SessionChatUncheckedCreateWithoutUserInput> | SessionChatCreateWithoutUserInput[] | SessionChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionChatCreateOrConnectWithoutUserInput | SessionChatCreateOrConnectWithoutUserInput[]
    createMany?: SessionChatCreateManyUserInputEnvelope
    connect?: SessionChatWhereUniqueInput | SessionChatWhereUniqueInput[]
  }

  export type ChatHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput> | ChatHistoryCreateWithoutUserInput[] | ChatHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutUserInput | ChatHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ChatHistoryCreateManyUserInputEnvelope
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type SessionChatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionChatCreateWithoutUserInput, SessionChatUncheckedCreateWithoutUserInput> | SessionChatCreateWithoutUserInput[] | SessionChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionChatCreateOrConnectWithoutUserInput | SessionChatCreateOrConnectWithoutUserInput[]
    createMany?: SessionChatCreateManyUserInputEnvelope
    connect?: SessionChatWhereUniqueInput | SessionChatWhereUniqueInput[]
  }

  export type ChatHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput> | ChatHistoryCreateWithoutUserInput[] | ChatHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutUserInput | ChatHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ChatHistoryCreateManyUserInputEnvelope
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessionChatUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionChatCreateWithoutUserInput, SessionChatUncheckedCreateWithoutUserInput> | SessionChatCreateWithoutUserInput[] | SessionChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionChatCreateOrConnectWithoutUserInput | SessionChatCreateOrConnectWithoutUserInput[]
    upsert?: SessionChatUpsertWithWhereUniqueWithoutUserInput | SessionChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionChatCreateManyUserInputEnvelope
    set?: SessionChatWhereUniqueInput | SessionChatWhereUniqueInput[]
    disconnect?: SessionChatWhereUniqueInput | SessionChatWhereUniqueInput[]
    delete?: SessionChatWhereUniqueInput | SessionChatWhereUniqueInput[]
    connect?: SessionChatWhereUniqueInput | SessionChatWhereUniqueInput[]
    update?: SessionChatUpdateWithWhereUniqueWithoutUserInput | SessionChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionChatUpdateManyWithWhereWithoutUserInput | SessionChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionChatScalarWhereInput | SessionChatScalarWhereInput[]
  }

  export type ChatHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput> | ChatHistoryCreateWithoutUserInput[] | ChatHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutUserInput | ChatHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ChatHistoryUpsertWithWhereUniqueWithoutUserInput | ChatHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatHistoryCreateManyUserInputEnvelope
    set?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    disconnect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    delete?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    update?: ChatHistoryUpdateWithWhereUniqueWithoutUserInput | ChatHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatHistoryUpdateManyWithWhereWithoutUserInput | ChatHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type SessionChatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionChatCreateWithoutUserInput, SessionChatUncheckedCreateWithoutUserInput> | SessionChatCreateWithoutUserInput[] | SessionChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionChatCreateOrConnectWithoutUserInput | SessionChatCreateOrConnectWithoutUserInput[]
    upsert?: SessionChatUpsertWithWhereUniqueWithoutUserInput | SessionChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionChatCreateManyUserInputEnvelope
    set?: SessionChatWhereUniqueInput | SessionChatWhereUniqueInput[]
    disconnect?: SessionChatWhereUniqueInput | SessionChatWhereUniqueInput[]
    delete?: SessionChatWhereUniqueInput | SessionChatWhereUniqueInput[]
    connect?: SessionChatWhereUniqueInput | SessionChatWhereUniqueInput[]
    update?: SessionChatUpdateWithWhereUniqueWithoutUserInput | SessionChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionChatUpdateManyWithWhereWithoutUserInput | SessionChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionChatScalarWhereInput | SessionChatScalarWhereInput[]
  }

  export type ChatHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput> | ChatHistoryCreateWithoutUserInput[] | ChatHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutUserInput | ChatHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ChatHistoryUpsertWithWhereUniqueWithoutUserInput | ChatHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatHistoryCreateManyUserInputEnvelope
    set?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    disconnect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    delete?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    update?: ChatHistoryUpdateWithWhereUniqueWithoutUserInput | ChatHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatHistoryUpdateManyWithWhereWithoutUserInput | ChatHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type ChatHistoryCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatHistoryCreateWithoutSessionInput, ChatHistoryUncheckedCreateWithoutSessionInput> | ChatHistoryCreateWithoutSessionInput[] | ChatHistoryUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutSessionInput | ChatHistoryCreateOrConnectWithoutSessionInput[]
    createMany?: ChatHistoryCreateManySessionInputEnvelope
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutSessionInput = {
    create?: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput> | FeedbackCreateWithoutSessionInput[] | FeedbackUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutSessionInput | FeedbackCreateOrConnectWithoutSessionInput[]
    createMany?: FeedbackCreateManySessionInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type ChatHistoryUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<ChatHistoryCreateWithoutSessionInput, ChatHistoryUncheckedCreateWithoutSessionInput> | ChatHistoryCreateWithoutSessionInput[] | ChatHistoryUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutSessionInput | ChatHistoryCreateOrConnectWithoutSessionInput[]
    createMany?: ChatHistoryCreateManySessionInputEnvelope
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput> | FeedbackCreateWithoutSessionInput[] | FeedbackUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutSessionInput | FeedbackCreateOrConnectWithoutSessionInput[]
    createMany?: FeedbackCreateManySessionInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type ChatHistoryUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatHistoryCreateWithoutSessionInput, ChatHistoryUncheckedCreateWithoutSessionInput> | ChatHistoryCreateWithoutSessionInput[] | ChatHistoryUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutSessionInput | ChatHistoryCreateOrConnectWithoutSessionInput[]
    upsert?: ChatHistoryUpsertWithWhereUniqueWithoutSessionInput | ChatHistoryUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatHistoryCreateManySessionInputEnvelope
    set?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    disconnect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    delete?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    update?: ChatHistoryUpdateWithWhereUniqueWithoutSessionInput | ChatHistoryUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatHistoryUpdateManyWithWhereWithoutSessionInput | ChatHistoryUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutSessionNestedInput = {
    create?: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput> | FeedbackCreateWithoutSessionInput[] | FeedbackUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutSessionInput | FeedbackCreateOrConnectWithoutSessionInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutSessionInput | FeedbackUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: FeedbackCreateManySessionInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutSessionInput | FeedbackUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutSessionInput | FeedbackUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type ChatHistoryUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<ChatHistoryCreateWithoutSessionInput, ChatHistoryUncheckedCreateWithoutSessionInput> | ChatHistoryCreateWithoutSessionInput[] | ChatHistoryUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutSessionInput | ChatHistoryCreateOrConnectWithoutSessionInput[]
    upsert?: ChatHistoryUpsertWithWhereUniqueWithoutSessionInput | ChatHistoryUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: ChatHistoryCreateManySessionInputEnvelope
    set?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    disconnect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    delete?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    connect?: ChatHistoryWhereUniqueInput | ChatHistoryWhereUniqueInput[]
    update?: ChatHistoryUpdateWithWhereUniqueWithoutSessionInput | ChatHistoryUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: ChatHistoryUpdateManyWithWhereWithoutSessionInput | ChatHistoryUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput> | FeedbackCreateWithoutSessionInput[] | FeedbackUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutSessionInput | FeedbackCreateOrConnectWithoutSessionInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutSessionInput | FeedbackUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: FeedbackCreateManySessionInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutSessionInput | FeedbackUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutSessionInput | FeedbackUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type SessionChatCreateNestedOneWithoutChat_historyInput = {
    create?: XOR<SessionChatCreateWithoutChat_historyInput, SessionChatUncheckedCreateWithoutChat_historyInput>
    connectOrCreate?: SessionChatCreateOrConnectWithoutChat_historyInput
    connect?: SessionChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChat_historyInput = {
    create?: XOR<UserCreateWithoutChat_historyInput, UserUncheckedCreateWithoutChat_historyInput>
    connectOrCreate?: UserCreateOrConnectWithoutChat_historyInput
    connect?: UserWhereUniqueInput
  }

  export type FeedbackCreateNestedManyWithoutChatInput = {
    create?: XOR<FeedbackCreateWithoutChatInput, FeedbackUncheckedCreateWithoutChatInput> | FeedbackCreateWithoutChatInput[] | FeedbackUncheckedCreateWithoutChatInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutChatInput | FeedbackCreateOrConnectWithoutChatInput[]
    createMany?: FeedbackCreateManyChatInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<FeedbackCreateWithoutChatInput, FeedbackUncheckedCreateWithoutChatInput> | FeedbackCreateWithoutChatInput[] | FeedbackUncheckedCreateWithoutChatInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutChatInput | FeedbackCreateOrConnectWithoutChatInput[]
    createMany?: FeedbackCreateManyChatInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
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

  export type SessionChatUpdateOneRequiredWithoutChat_historyNestedInput = {
    create?: XOR<SessionChatCreateWithoutChat_historyInput, SessionChatUncheckedCreateWithoutChat_historyInput>
    connectOrCreate?: SessionChatCreateOrConnectWithoutChat_historyInput
    upsert?: SessionChatUpsertWithoutChat_historyInput
    connect?: SessionChatWhereUniqueInput
    update?: XOR<XOR<SessionChatUpdateToOneWithWhereWithoutChat_historyInput, SessionChatUpdateWithoutChat_historyInput>, SessionChatUncheckedUpdateWithoutChat_historyInput>
  }

  export type UserUpdateOneWithoutChat_historyNestedInput = {
    create?: XOR<UserCreateWithoutChat_historyInput, UserUncheckedCreateWithoutChat_historyInput>
    connectOrCreate?: UserCreateOrConnectWithoutChat_historyInput
    upsert?: UserUpsertWithoutChat_historyInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChat_historyInput, UserUpdateWithoutChat_historyInput>, UserUncheckedUpdateWithoutChat_historyInput>
  }

  export type FeedbackUpdateManyWithoutChatNestedInput = {
    create?: XOR<FeedbackCreateWithoutChatInput, FeedbackUncheckedCreateWithoutChatInput> | FeedbackCreateWithoutChatInput[] | FeedbackUncheckedCreateWithoutChatInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutChatInput | FeedbackCreateOrConnectWithoutChatInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutChatInput | FeedbackUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: FeedbackCreateManyChatInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutChatInput | FeedbackUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutChatInput | FeedbackUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<FeedbackCreateWithoutChatInput, FeedbackUncheckedCreateWithoutChatInput> | FeedbackCreateWithoutChatInput[] | FeedbackUncheckedCreateWithoutChatInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutChatInput | FeedbackCreateOrConnectWithoutChatInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutChatInput | FeedbackUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: FeedbackCreateManyChatInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutChatInput | FeedbackUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutChatInput | FeedbackUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type ChatHistoryCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<ChatHistoryCreateWithoutFeedbacksInput, ChatHistoryUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutFeedbacksInput
    connect?: ChatHistoryWhereUniqueInput
  }

  export type SessionChatCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<SessionChatCreateWithoutFeedbacksInput, SessionChatUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: SessionChatCreateOrConnectWithoutFeedbacksInput
    connect?: SessionChatWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksInput
    connect?: UserWhereUniqueInput
  }

  export type ChatHistoryUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<ChatHistoryCreateWithoutFeedbacksInput, ChatHistoryUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: ChatHistoryCreateOrConnectWithoutFeedbacksInput
    upsert?: ChatHistoryUpsertWithoutFeedbacksInput
    connect?: ChatHistoryWhereUniqueInput
    update?: XOR<XOR<ChatHistoryUpdateToOneWithWhereWithoutFeedbacksInput, ChatHistoryUpdateWithoutFeedbacksInput>, ChatHistoryUncheckedUpdateWithoutFeedbacksInput>
  }

  export type SessionChatUpdateOneWithoutFeedbacksNestedInput = {
    create?: XOR<SessionChatCreateWithoutFeedbacksInput, SessionChatUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: SessionChatCreateOrConnectWithoutFeedbacksInput
    upsert?: SessionChatUpsertWithoutFeedbacksInput
    disconnect?: SessionChatWhereInput | boolean
    delete?: SessionChatWhereInput | boolean
    connect?: SessionChatWhereUniqueInput
    update?: XOR<XOR<SessionChatUpdateToOneWithWhereWithoutFeedbacksInput, SessionChatUpdateWithoutFeedbacksInput>, SessionChatUncheckedUpdateWithoutFeedbacksInput>
  }

  export type UserUpdateOneWithoutFeedbacksNestedInput = {
    create?: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksInput
    upsert?: UserUpsertWithoutFeedbacksInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbacksInput, UserUpdateWithoutFeedbacksInput>, UserUncheckedUpdateWithoutFeedbacksInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SessionChatCreateWithoutUserInput = {
    uuid?: string
    title?: string | null
    status?: string
    model?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    chat_history?: ChatHistoryCreateNestedManyWithoutSessionInput
    feedbacks?: FeedbackCreateNestedManyWithoutSessionInput
  }

  export type SessionChatUncheckedCreateWithoutUserInput = {
    id?: number
    uuid?: string
    title?: string | null
    status?: string
    model?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    chat_history?: ChatHistoryUncheckedCreateNestedManyWithoutSessionInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionChatCreateOrConnectWithoutUserInput = {
    where: SessionChatWhereUniqueInput
    create: XOR<SessionChatCreateWithoutUserInput, SessionChatUncheckedCreateWithoutUserInput>
  }

  export type SessionChatCreateManyUserInputEnvelope = {
    data: SessionChatCreateManyUserInput | SessionChatCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatHistoryCreateWithoutUserInput = {
    role: string
    content: string
    embedding: JsonNullValueInput | InputJsonValue
    token?: number
    cost?: Decimal | DecimalJsLike | number | string
    scope?: number
    model?: string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    type?: number
    parent?: number | null
    tools?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    session: SessionChatCreateNestedOneWithoutChat_historyInput
    feedbacks?: FeedbackCreateNestedManyWithoutChatInput
  }

  export type ChatHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    role: string
    content: string
    embedding: JsonNullValueInput | InputJsonValue
    token?: number
    cost?: Decimal | DecimalJsLike | number | string
    scope?: number
    session_id: string
    model?: string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    type?: number
    parent?: number | null
    tools?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatHistoryCreateOrConnectWithoutUserInput = {
    where: ChatHistoryWhereUniqueInput
    create: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput>
  }

  export type ChatHistoryCreateManyUserInputEnvelope = {
    data: ChatHistoryCreateManyUserInput | ChatHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutUserInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    chat: ChatHistoryCreateNestedOneWithoutFeedbacksInput
    session?: SessionChatCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateWithoutUserInput = {
    id?: number
    chat_id: number
    session_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackCreateManyUserInputEnvelope = {
    data: FeedbackCreateManyUserInput | FeedbackCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionChatUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionChatWhereUniqueInput
    update: XOR<SessionChatUpdateWithoutUserInput, SessionChatUncheckedUpdateWithoutUserInput>
    create: XOR<SessionChatCreateWithoutUserInput, SessionChatUncheckedCreateWithoutUserInput>
  }

  export type SessionChatUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionChatWhereUniqueInput
    data: XOR<SessionChatUpdateWithoutUserInput, SessionChatUncheckedUpdateWithoutUserInput>
  }

  export type SessionChatUpdateManyWithWhereWithoutUserInput = {
    where: SessionChatScalarWhereInput
    data: XOR<SessionChatUpdateManyMutationInput, SessionChatUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionChatScalarWhereInput = {
    AND?: SessionChatScalarWhereInput | SessionChatScalarWhereInput[]
    OR?: SessionChatScalarWhereInput[]
    NOT?: SessionChatScalarWhereInput | SessionChatScalarWhereInput[]
    id?: IntFilter<"SessionChat"> | number
    uuid?: StringFilter<"SessionChat"> | string
    user_id?: IntFilter<"SessionChat"> | number
    title?: StringNullableFilter<"SessionChat"> | string | null
    status?: StringFilter<"SessionChat"> | string
    model?: StringNullableFilter<"SessionChat"> | string | null
    summary?: StringNullableFilter<"SessionChat"> | string | null
    created_at?: DateTimeFilter<"SessionChat"> | Date | string
    updated_at?: DateTimeFilter<"SessionChat"> | Date | string
  }

  export type ChatHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatHistoryWhereUniqueInput
    update: XOR<ChatHistoryUpdateWithoutUserInput, ChatHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ChatHistoryCreateWithoutUserInput, ChatHistoryUncheckedCreateWithoutUserInput>
  }

  export type ChatHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatHistoryWhereUniqueInput
    data: XOR<ChatHistoryUpdateWithoutUserInput, ChatHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ChatHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ChatHistoryScalarWhereInput
    data: XOR<ChatHistoryUpdateManyMutationInput, ChatHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatHistoryScalarWhereInput = {
    AND?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
    OR?: ChatHistoryScalarWhereInput[]
    NOT?: ChatHistoryScalarWhereInput | ChatHistoryScalarWhereInput[]
    id?: IntFilter<"ChatHistory"> | number
    role?: StringFilter<"ChatHistory"> | string
    content?: StringFilter<"ChatHistory"> | string
    embedding?: JsonFilter<"ChatHistory">
    token?: IntFilter<"ChatHistory"> | number
    cost?: DecimalFilter<"ChatHistory"> | Decimal | DecimalJsLike | number | string
    scope?: IntFilter<"ChatHistory"> | number
    session_id?: StringFilter<"ChatHistory"> | string
    model?: StringNullableFilter<"ChatHistory"> | string | null
    user_id?: IntNullableFilter<"ChatHistory"> | number | null
    status?: StringFilter<"ChatHistory"> | string
    notes?: StringNullableFilter<"ChatHistory"> | string | null
    created_at?: DateTimeFilter<"ChatHistory"> | Date | string
    type?: IntFilter<"ChatHistory"> | number
    parent?: IntNullableFilter<"ChatHistory"> | number | null
    tools?: StringNullableFilter<"ChatHistory"> | string | null
    data?: JsonNullableFilter<"ChatHistory">
    metadata?: JsonNullableFilter<"ChatHistory">
  }

  export type FeedbackUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutUserInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutUserInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: IntFilter<"Feedback"> | number
    chat_id?: IntFilter<"Feedback"> | number
    session_id?: IntNullableFilter<"Feedback"> | number | null
    user_id?: IntNullableFilter<"Feedback"> | number | null
    rating?: IntFilter<"Feedback"> | number
    comment?: StringNullableFilter<"Feedback"> | string | null
    created_at?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    username: string
    email: string
    hashed_password: string
    full_name?: string | null
    is_active?: boolean
    role?: string
    last_login?: Date | string | null
    avatar_url?: string | null
    api_key?: string | null
    credits?: number
    quota?: number
    created_at?: Date | string
    updated_at?: Date | string
    chat_history?: ChatHistoryCreateNestedManyWithoutUserInput
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: number
    username: string
    email: string
    hashed_password: string
    full_name?: string | null
    is_active?: boolean
    role?: string
    last_login?: Date | string | null
    avatar_url?: string | null
    api_key?: string | null
    credits?: number
    quota?: number
    created_at?: Date | string
    updated_at?: Date | string
    chat_history?: ChatHistoryUncheckedCreateNestedManyWithoutUserInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type ChatHistoryCreateWithoutSessionInput = {
    role: string
    content: string
    embedding: JsonNullValueInput | InputJsonValue
    token?: number
    cost?: Decimal | DecimalJsLike | number | string
    scope?: number
    model?: string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    type?: number
    parent?: number | null
    tools?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user?: UserCreateNestedOneWithoutChat_historyInput
    feedbacks?: FeedbackCreateNestedManyWithoutChatInput
  }

  export type ChatHistoryUncheckedCreateWithoutSessionInput = {
    id?: number
    role: string
    content: string
    embedding: JsonNullValueInput | InputJsonValue
    token?: number
    cost?: Decimal | DecimalJsLike | number | string
    scope?: number
    model?: string | null
    user_id?: number | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    type?: number
    parent?: number | null
    tools?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatHistoryCreateOrConnectWithoutSessionInput = {
    where: ChatHistoryWhereUniqueInput
    create: XOR<ChatHistoryCreateWithoutSessionInput, ChatHistoryUncheckedCreateWithoutSessionInput>
  }

  export type ChatHistoryCreateManySessionInputEnvelope = {
    data: ChatHistoryCreateManySessionInput | ChatHistoryCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type FeedbackCreateWithoutSessionInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    chat: ChatHistoryCreateNestedOneWithoutFeedbacksInput
    user?: UserCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateWithoutSessionInput = {
    id?: number
    chat_id: number
    user_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutSessionInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput>
  }

  export type FeedbackCreateManySessionInputEnvelope = {
    data: FeedbackCreateManySessionInput | FeedbackCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    quota?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_history?: ChatHistoryUpdateManyWithoutUserNestedInput
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    quota?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_history?: ChatHistoryUncheckedUpdateManyWithoutUserNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatHistoryUpsertWithWhereUniqueWithoutSessionInput = {
    where: ChatHistoryWhereUniqueInput
    update: XOR<ChatHistoryUpdateWithoutSessionInput, ChatHistoryUncheckedUpdateWithoutSessionInput>
    create: XOR<ChatHistoryCreateWithoutSessionInput, ChatHistoryUncheckedCreateWithoutSessionInput>
  }

  export type ChatHistoryUpdateWithWhereUniqueWithoutSessionInput = {
    where: ChatHistoryWhereUniqueInput
    data: XOR<ChatHistoryUpdateWithoutSessionInput, ChatHistoryUncheckedUpdateWithoutSessionInput>
  }

  export type ChatHistoryUpdateManyWithWhereWithoutSessionInput = {
    where: ChatHistoryScalarWhereInput
    data: XOR<ChatHistoryUpdateManyMutationInput, ChatHistoryUncheckedUpdateManyWithoutSessionInput>
  }

  export type FeedbackUpsertWithWhereUniqueWithoutSessionInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutSessionInput, FeedbackUncheckedUpdateWithoutSessionInput>
    create: XOR<FeedbackCreateWithoutSessionInput, FeedbackUncheckedCreateWithoutSessionInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutSessionInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutSessionInput, FeedbackUncheckedUpdateWithoutSessionInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutSessionInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionChatCreateWithoutChat_historyInput = {
    uuid?: string
    title?: string | null
    status?: string
    model?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
    feedbacks?: FeedbackCreateNestedManyWithoutSessionInput
  }

  export type SessionChatUncheckedCreateWithoutChat_historyInput = {
    id?: number
    uuid?: string
    user_id: number
    title?: string | null
    status?: string
    model?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionChatCreateOrConnectWithoutChat_historyInput = {
    where: SessionChatWhereUniqueInput
    create: XOR<SessionChatCreateWithoutChat_historyInput, SessionChatUncheckedCreateWithoutChat_historyInput>
  }

  export type UserCreateWithoutChat_historyInput = {
    username: string
    email: string
    hashed_password: string
    full_name?: string | null
    is_active?: boolean
    role?: string
    last_login?: Date | string | null
    avatar_url?: string | null
    api_key?: string | null
    credits?: number
    quota?: number
    created_at?: Date | string
    updated_at?: Date | string
    sessions?: SessionChatCreateNestedManyWithoutUserInput
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChat_historyInput = {
    id?: number
    username: string
    email: string
    hashed_password: string
    full_name?: string | null
    is_active?: boolean
    role?: string
    last_login?: Date | string | null
    avatar_url?: string | null
    api_key?: string | null
    credits?: number
    quota?: number
    created_at?: Date | string
    updated_at?: Date | string
    sessions?: SessionChatUncheckedCreateNestedManyWithoutUserInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChat_historyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChat_historyInput, UserUncheckedCreateWithoutChat_historyInput>
  }

  export type FeedbackCreateWithoutChatInput = {
    rating: number
    comment?: string | null
    created_at?: Date | string
    session?: SessionChatCreateNestedOneWithoutFeedbacksInput
    user?: UserCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateWithoutChatInput = {
    id?: number
    session_id?: number | null
    user_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutChatInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutChatInput, FeedbackUncheckedCreateWithoutChatInput>
  }

  export type FeedbackCreateManyChatInputEnvelope = {
    data: FeedbackCreateManyChatInput | FeedbackCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type SessionChatUpsertWithoutChat_historyInput = {
    update: XOR<SessionChatUpdateWithoutChat_historyInput, SessionChatUncheckedUpdateWithoutChat_historyInput>
    create: XOR<SessionChatCreateWithoutChat_historyInput, SessionChatUncheckedCreateWithoutChat_historyInput>
    where?: SessionChatWhereInput
  }

  export type SessionChatUpdateToOneWithWhereWithoutChat_historyInput = {
    where?: SessionChatWhereInput
    data: XOR<SessionChatUpdateWithoutChat_historyInput, SessionChatUncheckedUpdateWithoutChat_historyInput>
  }

  export type SessionChatUpdateWithoutChat_historyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    feedbacks?: FeedbackUpdateManyWithoutSessionNestedInput
  }

  export type SessionChatUncheckedUpdateWithoutChat_historyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbacks?: FeedbackUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type UserUpsertWithoutChat_historyInput = {
    update: XOR<UserUpdateWithoutChat_historyInput, UserUncheckedUpdateWithoutChat_historyInput>
    create: XOR<UserCreateWithoutChat_historyInput, UserUncheckedCreateWithoutChat_historyInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChat_historyInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChat_historyInput, UserUncheckedUpdateWithoutChat_historyInput>
  }

  export type UserUpdateWithoutChat_historyInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    quota?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionChatUpdateManyWithoutUserNestedInput
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChat_historyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    quota?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionChatUncheckedUpdateManyWithoutUserNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FeedbackUpsertWithWhereUniqueWithoutChatInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutChatInput, FeedbackUncheckedUpdateWithoutChatInput>
    create: XOR<FeedbackCreateWithoutChatInput, FeedbackUncheckedCreateWithoutChatInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutChatInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutChatInput, FeedbackUncheckedUpdateWithoutChatInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutChatInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatHistoryCreateWithoutFeedbacksInput = {
    role: string
    content: string
    embedding: JsonNullValueInput | InputJsonValue
    token?: number
    cost?: Decimal | DecimalJsLike | number | string
    scope?: number
    model?: string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    type?: number
    parent?: number | null
    tools?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    session: SessionChatCreateNestedOneWithoutChat_historyInput
    user?: UserCreateNestedOneWithoutChat_historyInput
  }

  export type ChatHistoryUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    role: string
    content: string
    embedding: JsonNullValueInput | InputJsonValue
    token?: number
    cost?: Decimal | DecimalJsLike | number | string
    scope?: number
    session_id: string
    model?: string | null
    user_id?: number | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    type?: number
    parent?: number | null
    tools?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChatHistoryCreateOrConnectWithoutFeedbacksInput = {
    where: ChatHistoryWhereUniqueInput
    create: XOR<ChatHistoryCreateWithoutFeedbacksInput, ChatHistoryUncheckedCreateWithoutFeedbacksInput>
  }

  export type SessionChatCreateWithoutFeedbacksInput = {
    uuid?: string
    title?: string | null
    status?: string
    model?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
    chat_history?: ChatHistoryCreateNestedManyWithoutSessionInput
  }

  export type SessionChatUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    uuid?: string
    user_id: number
    title?: string | null
    status?: string
    model?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    chat_history?: ChatHistoryUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionChatCreateOrConnectWithoutFeedbacksInput = {
    where: SessionChatWhereUniqueInput
    create: XOR<SessionChatCreateWithoutFeedbacksInput, SessionChatUncheckedCreateWithoutFeedbacksInput>
  }

  export type UserCreateWithoutFeedbacksInput = {
    username: string
    email: string
    hashed_password: string
    full_name?: string | null
    is_active?: boolean
    role?: string
    last_login?: Date | string | null
    avatar_url?: string | null
    api_key?: string | null
    credits?: number
    quota?: number
    created_at?: Date | string
    updated_at?: Date | string
    sessions?: SessionChatCreateNestedManyWithoutUserInput
    chat_history?: ChatHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    username: string
    email: string
    hashed_password: string
    full_name?: string | null
    is_active?: boolean
    role?: string
    last_login?: Date | string | null
    avatar_url?: string | null
    api_key?: string | null
    credits?: number
    quota?: number
    created_at?: Date | string
    updated_at?: Date | string
    sessions?: SessionChatUncheckedCreateNestedManyWithoutUserInput
    chat_history?: ChatHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedbacksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
  }

  export type ChatHistoryUpsertWithoutFeedbacksInput = {
    update: XOR<ChatHistoryUpdateWithoutFeedbacksInput, ChatHistoryUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<ChatHistoryCreateWithoutFeedbacksInput, ChatHistoryUncheckedCreateWithoutFeedbacksInput>
    where?: ChatHistoryWhereInput
  }

  export type ChatHistoryUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: ChatHistoryWhereInput
    data: XOR<ChatHistoryUpdateWithoutFeedbacksInput, ChatHistoryUncheckedUpdateWithoutFeedbacksInput>
  }

  export type ChatHistoryUpdateWithoutFeedbacksInput = {
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    token?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scope?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: IntFieldUpdateOperationsInput | number
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    session?: SessionChatUpdateOneRequiredWithoutChat_historyNestedInput
    user?: UserUpdateOneWithoutChat_historyNestedInput
  }

  export type ChatHistoryUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    token?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scope?: IntFieldUpdateOperationsInput | number
    session_id?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: IntFieldUpdateOperationsInput | number
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type SessionChatUpsertWithoutFeedbacksInput = {
    update: XOR<SessionChatUpdateWithoutFeedbacksInput, SessionChatUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<SessionChatCreateWithoutFeedbacksInput, SessionChatUncheckedCreateWithoutFeedbacksInput>
    where?: SessionChatWhereInput
  }

  export type SessionChatUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: SessionChatWhereInput
    data: XOR<SessionChatUpdateWithoutFeedbacksInput, SessionChatUncheckedUpdateWithoutFeedbacksInput>
  }

  export type SessionChatUpdateWithoutFeedbacksInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
    chat_history?: ChatHistoryUpdateManyWithoutSessionNestedInput
  }

  export type SessionChatUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_history?: ChatHistoryUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type UserUpsertWithoutFeedbacksInput = {
    update: XOR<UserUpdateWithoutFeedbacksInput, UserUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbacksInput, UserUncheckedUpdateWithoutFeedbacksInput>
  }

  export type UserUpdateWithoutFeedbacksInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    quota?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionChatUpdateManyWithoutUserNestedInput
    chat_history?: ChatHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    hashed_password?: StringFieldUpdateOperationsInput | string
    full_name?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    role?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    quota?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionChatUncheckedUpdateManyWithoutUserNestedInput
    chat_history?: ChatHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionChatCreateManyUserInput = {
    id?: number
    uuid?: string
    title?: string | null
    status?: string
    model?: string | null
    summary?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ChatHistoryCreateManyUserInput = {
    id?: number
    role: string
    content: string
    embedding: JsonNullValueInput | InputJsonValue
    token?: number
    cost?: Decimal | DecimalJsLike | number | string
    scope?: number
    session_id: string
    model?: string | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    type?: number
    parent?: number | null
    tools?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FeedbackCreateManyUserInput = {
    id?: number
    chat_id: number
    session_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type SessionChatUpdateWithoutUserInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_history?: ChatHistoryUpdateManyWithoutSessionNestedInput
    feedbacks?: FeedbackUpdateManyWithoutSessionNestedInput
  }

  export type SessionChatUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat_history?: ChatHistoryUncheckedUpdateManyWithoutSessionNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionChatUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryUpdateWithoutUserInput = {
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    token?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scope?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: IntFieldUpdateOperationsInput | number
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    session?: SessionChatUpdateOneRequiredWithoutChat_historyNestedInput
    feedbacks?: FeedbackUpdateManyWithoutChatNestedInput
  }

  export type ChatHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    token?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scope?: IntFieldUpdateOperationsInput | number
    session_id?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: IntFieldUpdateOperationsInput | number
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    feedbacks?: FeedbackUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    token?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scope?: IntFieldUpdateOperationsInput | number
    session_id?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: IntFieldUpdateOperationsInput | number
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FeedbackUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatHistoryUpdateOneRequiredWithoutFeedbacksNestedInput
    session?: SessionChatUpdateOneWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: IntFieldUpdateOperationsInput | number
    session_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: IntFieldUpdateOperationsInput | number
    session_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatHistoryCreateManySessionInput = {
    id?: number
    role: string
    content: string
    embedding: JsonNullValueInput | InputJsonValue
    token?: number
    cost?: Decimal | DecimalJsLike | number | string
    scope?: number
    model?: string | null
    user_id?: number | null
    status?: string
    notes?: string | null
    created_at?: Date | string
    type?: number
    parent?: number | null
    tools?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FeedbackCreateManySessionInput = {
    id?: number
    chat_id: number
    user_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type ChatHistoryUpdateWithoutSessionInput = {
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    token?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scope?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: IntFieldUpdateOperationsInput | number
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneWithoutChat_historyNestedInput
    feedbacks?: FeedbackUpdateManyWithoutChatNestedInput
  }

  export type ChatHistoryUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    token?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scope?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: IntFieldUpdateOperationsInput | number
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
    feedbacks?: FeedbackUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatHistoryUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    embedding?: JsonNullValueInput | InputJsonValue
    token?: IntFieldUpdateOperationsInput | number
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    scope?: IntFieldUpdateOperationsInput | number
    model?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: IntFieldUpdateOperationsInput | number
    parent?: NullableIntFieldUpdateOperationsInput | number | null
    tools?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FeedbackUpdateWithoutSessionInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatHistoryUpdateOneRequiredWithoutFeedbacksNestedInput
    user?: UserUpdateOneWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    chat_id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyChatInput = {
    id?: number
    session_id?: number | null
    user_id?: number | null
    rating: number
    comment?: string | null
    created_at?: Date | string
  }

  export type FeedbackUpdateWithoutChatInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionChatUpdateOneWithoutFeedbacksNestedInput
    user?: UserUpdateOneWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutChatInput = {
    id?: IntFieldUpdateOperationsInput | number
    session_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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