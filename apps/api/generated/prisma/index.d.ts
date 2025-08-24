/**
 * Client
 **/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Board
 *
 */
export type Board = $Result.DefaultSelection<Prisma.$BoardPayload>;
/**
 * Model BoardUser
 *
 */
export type BoardUser = $Result.DefaultSelection<Prisma.$BoardUserPayload>;
/**
 * Model Column
 *
 */
export type Column = $Result.DefaultSelection<Prisma.$ColumnPayload>;
/**
 * Model Invitation
 *
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>;
/**
 * Model Organization
 *
 */
export type Organization =
  $Result.DefaultSelection<Prisma.$OrganizationPayload>;
/**
 * Model OrganizationUser
 *
 */
export type OrganizationUser =
  $Result.DefaultSelection<Prisma.$OrganizationUserPayload>;
/**
 * Model Task
 *
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>;
/**
 * Model TaskUser
 *
 */
export type TaskUser = $Result.DefaultSelection<Prisma.$TaskUserPayload>;
/**
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const BoardRole: {
    OWNER: 'OWNER';
    READER: 'READER';
    WRITER: 'WRITER';
  };

  export type BoardRole = (typeof BoardRole)[keyof typeof BoardRole];

  export const InvitationStatus: {
    PENDING: 'PENDING';
    ACCEPTED: 'ACCEPTED';
    DECLINED: 'DECLINED';
    EXPIRED: 'EXPIRED';
  };

  export type InvitationStatus =
    (typeof InvitationStatus)[keyof typeof InvitationStatus];

  export const OrganizationRole: {
    OWNER: 'OWNER';
    ADMIN: 'ADMIN';
    MEMBER: 'MEMBER';
  };

  export type OrganizationRole =
    (typeof OrganizationRole)[keyof typeof OrganizationRole];

  export const TaskPriority: {
    HIGH: 'HIGH';
    MEDIUM: 'MEDIUM';
    LOW: 'LOW';
  };

  export type TaskPriority = (typeof TaskPriority)[keyof typeof TaskPriority];
}

export type BoardRole = $Enums.BoardRole;

export const BoardRole: typeof $Enums.BoardRole;

export type InvitationStatus = $Enums.InvitationStatus;

export const InvitationStatus: typeof $Enums.InvitationStatus;

export type OrganizationRole = $Enums.OrganizationRole;

export const OrganizationRole: typeof $Enums.OrganizationRole;

export type TaskPriority = $Enums.TaskPriority;

export const TaskPriority: typeof $Enums.TaskPriority;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Boards
 * const boards = await prisma.board.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions
    ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Boards
   * const boards = await prisma.board.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

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
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    'extends',
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Boards
   * const boards = await prisma.board.findMany()
   * ```
   */
  get board(): Prisma.BoardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boardUser`: Exposes CRUD operations for the **BoardUser** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more BoardUsers
   * const boardUsers = await prisma.boardUser.findMany()
   * ```
   */
  get boardUser(): Prisma.BoardUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.column`: Exposes CRUD operations for the **Column** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Columns
   * const columns = await prisma.column.findMany()
   * ```
   */
  get column(): Prisma.ColumnDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Invitations
   * const invitations = await prisma.invitation.findMany()
   * ```
   */
  get invitation(): Prisma.InvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organizationUser`: Exposes CRUD operations for the **OrganizationUser** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more OrganizationUsers
   * const organizationUsers = await prisma.organizationUser.findMany()
   * ```
   */
  get organizationUser(): Prisma.OrganizationUserDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tasks
   * const tasks = await prisma.task.findMany()
   * ```
   */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskUser`: Exposes CRUD operations for the **TaskUser** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more TaskUsers
   * const taskUsers = await prisma.taskUser.findMany()
   * ```
   */
  get taskUser(): Prisma.TaskUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? 'Please either choose `select` or `include`.'
    : T extends SelectAndOmit
      ? 'Please either choose `select` or `omit`.'
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Board: 'Board';
    BoardUser: 'BoardUser';
    Column: 'Column';
    Invitation: 'Invitation';
    Organization: 'Organization';
    OrganizationUser: 'OrganizationUser';
    Task: 'Task';
    TaskUser: 'TaskUser';
    User: 'User';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this['params']['extArgs'],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps:
        | 'board'
        | 'boardUser'
        | 'column'
        | 'invitation'
        | 'organization'
        | 'organizationUser'
        | 'task'
        | 'taskUser'
        | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Board: {
        payload: Prisma.$BoardPayload<ExtArgs>;
        fields: Prisma.BoardFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BoardFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BoardFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>;
          };
          findFirst: {
            args: Prisma.BoardFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BoardFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>;
          };
          findMany: {
            args: Prisma.BoardFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[];
          };
          create: {
            args: Prisma.BoardCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>;
          };
          createMany: {
            args: Prisma.BoardCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BoardCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[];
          };
          delete: {
            args: Prisma.BoardDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>;
          };
          update: {
            args: Prisma.BoardUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>;
          };
          deleteMany: {
            args: Prisma.BoardDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BoardUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BoardUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>[];
          };
          upsert: {
            args: Prisma.BoardUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardPayload>;
          };
          aggregate: {
            args: Prisma.BoardAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBoard>;
          };
          groupBy: {
            args: Prisma.BoardGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BoardGroupByOutputType>[];
          };
          count: {
            args: Prisma.BoardCountArgs<ExtArgs>;
            result: $Utils.Optional<BoardCountAggregateOutputType> | number;
          };
        };
      };
      BoardUser: {
        payload: Prisma.$BoardUserPayload<ExtArgs>;
        fields: Prisma.BoardUserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.BoardUserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardUserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.BoardUserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardUserPayload>;
          };
          findFirst: {
            args: Prisma.BoardUserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardUserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.BoardUserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardUserPayload>;
          };
          findMany: {
            args: Prisma.BoardUserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardUserPayload>[];
          };
          create: {
            args: Prisma.BoardUserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardUserPayload>;
          };
          createMany: {
            args: Prisma.BoardUserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.BoardUserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardUserPayload>[];
          };
          delete: {
            args: Prisma.BoardUserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardUserPayload>;
          };
          update: {
            args: Prisma.BoardUserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardUserPayload>;
          };
          deleteMany: {
            args: Prisma.BoardUserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.BoardUserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.BoardUserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardUserPayload>[];
          };
          upsert: {
            args: Prisma.BoardUserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$BoardUserPayload>;
          };
          aggregate: {
            args: Prisma.BoardUserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBoardUser>;
          };
          groupBy: {
            args: Prisma.BoardUserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BoardUserGroupByOutputType>[];
          };
          count: {
            args: Prisma.BoardUserCountArgs<ExtArgs>;
            result: $Utils.Optional<BoardUserCountAggregateOutputType> | number;
          };
        };
      };
      Column: {
        payload: Prisma.$ColumnPayload<ExtArgs>;
        fields: Prisma.ColumnFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ColumnFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ColumnFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>;
          };
          findFirst: {
            args: Prisma.ColumnFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ColumnFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>;
          };
          findMany: {
            args: Prisma.ColumnFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[];
          };
          create: {
            args: Prisma.ColumnCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>;
          };
          createMany: {
            args: Prisma.ColumnCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ColumnCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[];
          };
          delete: {
            args: Prisma.ColumnDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>;
          };
          update: {
            args: Prisma.ColumnUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>;
          };
          deleteMany: {
            args: Prisma.ColumnDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ColumnUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ColumnUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>[];
          };
          upsert: {
            args: Prisma.ColumnUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ColumnPayload>;
          };
          aggregate: {
            args: Prisma.ColumnAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateColumn>;
          };
          groupBy: {
            args: Prisma.ColumnGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ColumnGroupByOutputType>[];
          };
          count: {
            args: Prisma.ColumnCountArgs<ExtArgs>;
            result: $Utils.Optional<ColumnCountAggregateOutputType> | number;
          };
        };
      };
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>;
        fields: Prisma.InvitationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>;
          };
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>;
          };
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[];
          };
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>;
          };
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.InvitationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[];
          };
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>;
          };
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>;
          };
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.InvitationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[];
          };
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>;
          };
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInvitation>;
          };
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InvitationGroupByOutputType>[];
          };
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<InvitationCountAggregateOutputType>
              | number;
          };
        };
      };
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>;
        fields: Prisma.OrganizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
          };
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
          };
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[];
          };
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<OrganizationCountAggregateOutputType>
              | number;
          };
        };
      };
      OrganizationUser: {
        payload: Prisma.$OrganizationUserPayload<ExtArgs>;
        fields: Prisma.OrganizationUserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrganizationUserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationUserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrganizationUserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationUserPayload>;
          };
          findFirst: {
            args: Prisma.OrganizationUserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationUserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrganizationUserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationUserPayload>;
          };
          findMany: {
            args: Prisma.OrganizationUserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationUserPayload>[];
          };
          create: {
            args: Prisma.OrganizationUserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationUserPayload>;
          };
          createMany: {
            args: Prisma.OrganizationUserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.OrganizationUserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationUserPayload>[];
          };
          delete: {
            args: Prisma.OrganizationUserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationUserPayload>;
          };
          update: {
            args: Prisma.OrganizationUserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationUserPayload>;
          };
          deleteMany: {
            args: Prisma.OrganizationUserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrganizationUserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.OrganizationUserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationUserPayload>[];
          };
          upsert: {
            args: Prisma.OrganizationUserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrganizationUserPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationUserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganizationUser>;
          };
          groupBy: {
            args: Prisma.OrganizationUserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationUserGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrganizationUserCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<OrganizationUserCountAggregateOutputType>
              | number;
          };
        };
      };
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>;
        fields: Prisma.TaskFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
          };
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
          };
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[];
          };
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
          };
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[];
          };
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
          };
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
          };
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[];
          };
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>;
          };
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTask>;
          };
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TaskGroupByOutputType>[];
          };
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>;
            result: $Utils.Optional<TaskCountAggregateOutputType> | number;
          };
        };
      };
      TaskUser: {
        payload: Prisma.$TaskUserPayload<ExtArgs>;
        fields: Prisma.TaskUserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TaskUserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskUserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TaskUserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskUserPayload>;
          };
          findFirst: {
            args: Prisma.TaskUserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskUserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TaskUserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskUserPayload>;
          };
          findMany: {
            args: Prisma.TaskUserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskUserPayload>[];
          };
          create: {
            args: Prisma.TaskUserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskUserPayload>;
          };
          createMany: {
            args: Prisma.TaskUserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TaskUserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskUserPayload>[];
          };
          delete: {
            args: Prisma.TaskUserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskUserPayload>;
          };
          update: {
            args: Prisma.TaskUserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskUserPayload>;
          };
          deleteMany: {
            args: Prisma.TaskUserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TaskUserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TaskUserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskUserPayload>[];
          };
          upsert: {
            args: Prisma.TaskUserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$TaskUserPayload>;
          };
          aggregate: {
            args: Prisma.TaskUserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTaskUser>;
          };
          groupBy: {
            args: Prisma.TaskUserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TaskUserGroupByOutputType>[];
          };
          count: {
            args: Prisma.TaskUserCountArgs<ExtArgs>;
            result: $Utils.Optional<TaskUserCountAggregateOutputType> | number;
          };
        };
      };
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    'define',
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
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
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    board?: BoardOmit;
    boardUser?: BoardUserOmit;
    column?: ColumnOmit;
    invitation?: InvitationOmit;
    organization?: OrganizationOmit;
    organizationUser?: OrganizationUserOmit;
    task?: TaskOmit;
    taskUser?: TaskUserOmit;
    user?: UserOmit;
  };

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> =
    T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type BoardCountOutputType
   */

  export type BoardCountOutputType = {
    users: number;
    columns: number;
  };

  export type BoardCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | BoardCountOutputTypeCountUsersArgs;
    columns?: boolean | BoardCountOutputTypeCountColumnsArgs;
  };

  // Custom InputTypes
  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     */
    select?: BoardCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BoardUserWhereInput;
  };

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeCountColumnsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ColumnWhereInput;
  };

  /**
   * Count Type ColumnCountOutputType
   */

  export type ColumnCountOutputType = {
    tasks: number;
  };

  export type ColumnCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tasks?: boolean | ColumnCountOutputTypeCountTasksArgs;
  };

  // Custom InputTypes
  /**
   * ColumnCountOutputType without action
   */
  export type ColumnCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ColumnCountOutputType
     */
    select?: ColumnCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ColumnCountOutputType without action
   */
  export type ColumnCountOutputTypeCountTasksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TaskWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number;
    boards: number;
    tasks: number;
    invitations: number;
  };

  export type OrganizationCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs;
    boards?: boolean | OrganizationCountOutputTypeCountBoardsArgs;
    tasks?: boolean | OrganizationCountOutputTypeCountTasksArgs;
    invitations?: boolean | OrganizationCountOutputTypeCountInvitationsArgs;
  };

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizationUserWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountBoardsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BoardWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountTasksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TaskWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountInvitationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InvitationWhereInput;
  };

  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    subTasks: number;
    users: number;
  };

  export type TaskCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subTasks?: boolean | TaskCountOutputTypeCountSubTasksArgs;
    users?: boolean | TaskCountOutputTypeCountUsersArgs;
  };

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSubTasksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TaskWhereInput;
  };

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountUsersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TaskUserWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    boards: number;
    organizations: number;
    createdBoards: number;
    createdColumns: number;
    tasks: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    boards?: boolean | UserCountOutputTypeCountBoardsArgs;
    organizations?: boolean | UserCountOutputTypeCountOrganizationsArgs;
    createdBoards?: boolean | UserCountOutputTypeCountCreatedBoardsArgs;
    createdColumns?: boolean | UserCountOutputTypeCountCreatedColumnsArgs;
    tasks?: boolean | UserCountOutputTypeCountTasksArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBoardsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BoardUserWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrganizationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizationUserWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedBoardsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BoardWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedColumnsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ColumnWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TaskUserWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Board
   */

  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null;
    _min: BoardMinAggregateOutputType | null;
    _max: BoardMaxAggregateOutputType | null;
  };

  export type BoardMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    createdById: string | null;
    name: string | null;
    imagePath: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type BoardMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    createdById: string | null;
    name: string | null;
    imagePath: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type BoardCountAggregateOutputType = {
    id: number;
    organizationId: number;
    createdById: number;
    name: number;
    imagePath: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type BoardMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    createdById?: true;
    name?: true;
    imagePath?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type BoardMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    createdById?: true;
    name?: true;
    imagePath?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type BoardCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    createdById?: true;
    name?: true;
    imagePath?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type BoardAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Board to aggregate.
     */
    where?: BoardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BoardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Boards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Boards
     **/
    _count?: true | BoardCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BoardMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BoardMaxAggregateInputType;
  };

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
    [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>;
  };

  export type BoardGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BoardWhereInput;
    orderBy?:
      | BoardOrderByWithAggregationInput
      | BoardOrderByWithAggregationInput[];
    by: BoardScalarFieldEnum[] | BoardScalarFieldEnum;
    having?: BoardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BoardCountAggregateInputType | true;
    _min?: BoardMinAggregateInputType;
    _max?: BoardMaxAggregateInputType;
  };

  export type BoardGroupByOutputType = {
    id: string;
    organizationId: string;
    createdById: string;
    name: string;
    imagePath: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: BoardCountAggregateOutputType | null;
    _min: BoardMinAggregateOutputType | null;
    _max: BoardMaxAggregateOutputType | null;
  };

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BoardGroupByOutputType, T['by']> & {
          [P in keyof T & keyof BoardGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>;
        }
      >
    >;

  export type BoardSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      createdById?: boolean;
      name?: boolean;
      imagePath?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      users?: boolean | Board$usersArgs<ExtArgs>;
      columns?: boolean | Board$columnsArgs<ExtArgs>;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['board']
  >;

  export type BoardSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      createdById?: boolean;
      name?: boolean;
      imagePath?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['board']
  >;

  export type BoardSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      createdById?: boolean;
      name?: boolean;
      imagePath?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['board']
  >;

  export type BoardSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    createdById?: boolean;
    name?: boolean;
    imagePath?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type BoardOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'organizationId'
    | 'createdById'
    | 'name'
    | 'imagePath'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['board']
  >;
  export type BoardInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | Board$usersArgs<ExtArgs>;
    columns?: boolean | Board$columnsArgs<ExtArgs>;
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    _count?: boolean | BoardCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type BoardIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };
  export type BoardIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };

  export type $BoardPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Board';
    objects: {
      users: Prisma.$BoardUserPayload<ExtArgs>[];
      columns: Prisma.$ColumnPayload<ExtArgs>[];
      createdBy: Prisma.$UserPayload<ExtArgs>;
      organization: Prisma.$OrganizationPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        organizationId: string;
        createdById: string;
        name: string;
        imagePath: string | null;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['board']
    >;
    composites: {};
  };

  type BoardGetPayload<
    S extends boolean | null | undefined | BoardDefaultArgs,
  > = $Result.GetResult<Prisma.$BoardPayload, S>;

  type BoardCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<BoardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BoardCountAggregateInputType | true;
  };

  export interface BoardDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Board'];
      meta: { name: 'Board' };
    };
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardFindUniqueArgs>(
      args: SelectSubset<T, BoardFindUniqueArgs<ExtArgs>>,
    ): Prisma__BoardClient<
      $Result.GetResult<
        Prisma.$BoardPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Board that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoardFindUniqueOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BoardFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__BoardClient<
      $Result.GetResult<
        Prisma.$BoardPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardFindFirstArgs>(
      args?: SelectSubset<T, BoardFindFirstArgs<ExtArgs>>,
    ): Prisma__BoardClient<
      $Result.GetResult<
        Prisma.$BoardPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Board that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstOrThrowArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BoardFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__BoardClient<
      $Result.GetResult<
        Prisma.$BoardPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     *
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     *
     */
    findMany<T extends BoardFindManyArgs>(
      args?: SelectSubset<T, BoardFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BoardPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     *
     */
    create<T extends BoardCreateArgs>(
      args: SelectSubset<T, BoardCreateArgs<ExtArgs>>,
    ): Prisma__BoardClient<
      $Result.GetResult<
        Prisma.$BoardPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Boards.
     * @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BoardCreateManyArgs>(
      args?: SelectSubset<T, BoardCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Boards and returns the data saved in the database.
     * @param {BoardCreateManyAndReturnArgs} args - Arguments to create many Boards.
     * @example
     * // Create many Boards
     * const board = await prisma.board.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Boards and only return the `id`
     * const boardWithIdOnly = await prisma.board.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BoardCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BoardCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BoardPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     *
     */
    delete<T extends BoardDeleteArgs>(
      args: SelectSubset<T, BoardDeleteArgs<ExtArgs>>,
    ): Prisma__BoardClient<
      $Result.GetResult<
        Prisma.$BoardPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BoardUpdateArgs>(
      args: SelectSubset<T, BoardUpdateArgs<ExtArgs>>,
    ): Prisma__BoardClient<
      $Result.GetResult<
        Prisma.$BoardPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BoardDeleteManyArgs>(
      args?: SelectSubset<T, BoardDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BoardUpdateManyArgs>(
      args: SelectSubset<T, BoardUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Boards and returns the data updated in the database.
     * @param {BoardUpdateManyAndReturnArgs} args - Arguments to update many Boards.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Boards and only return the `id`
     * const boardWithIdOnly = await prisma.board.updateManyAndReturn({
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
    updateManyAndReturn<T extends BoardUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BoardUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BoardPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
     */
    upsert<T extends BoardUpsertArgs>(
      args: SelectSubset<T, BoardUpsertArgs<ExtArgs>>,
    ): Prisma__BoardClient<
      $Result.GetResult<
        Prisma.$BoardPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
     **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardAggregateArgs>(
      args: Subset<T, BoardAggregateArgs>,
    ): Prisma.PrismaPromise<GetBoardAggregateType<T>>;

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
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
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetBoardGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Board model
     */
    readonly fields: BoardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    users<T extends Board$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, Board$usersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BoardUserPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    columns<T extends Board$columnsArgs<ExtArgs> = {}>(
      args?: Subset<T, Board$columnsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ColumnPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      | $Result.GetResult<
          Prisma.$OrganizationPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Board model
   */
  interface BoardFieldRefs {
    readonly id: FieldRef<'Board', 'String'>;
    readonly organizationId: FieldRef<'Board', 'String'>;
    readonly createdById: FieldRef<'Board', 'String'>;
    readonly name: FieldRef<'Board', 'String'>;
    readonly imagePath: FieldRef<'Board', 'String'>;
    readonly createdAt: FieldRef<'Board', 'DateTime'>;
    readonly updatedAt: FieldRef<'Board', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Board findUnique
   */
  export type BoardFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null;
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput;
  };

  /**
   * Board findUniqueOrThrow
   */
  export type BoardFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null;
    /**
     * Filter, which Board to fetch.
     */
    where: BoardWhereUniqueInput;
  };

  /**
   * Board findFirst
   */
  export type BoardFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null;
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Boards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[];
  };

  /**
   * Board findFirstOrThrow
   */
  export type BoardFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null;
    /**
     * Filter, which Board to fetch.
     */
    where?: BoardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Boards.
     */
    cursor?: BoardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Boards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Boards.
     */
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[];
  };

  /**
   * Board findMany
   */
  export type BoardFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null;
    /**
     * Filter, which Boards to fetch.
     */
    where?: BoardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Boards to fetch.
     */
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Boards.
     */
    cursor?: BoardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Boards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Boards.
     */
    skip?: number;
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[];
  };

  /**
   * Board create
   */
  export type BoardCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null;
    /**
     * The data needed to create a Board.
     */
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>;
  };

  /**
   * Board createMany
   */
  export type BoardCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Board createManyAndReturn
   */
  export type BoardCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null;
    /**
     * The data used to create many Boards.
     */
    data: BoardCreateManyInput | BoardCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Board update
   */
  export type BoardUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null;
    /**
     * The data needed to update a Board.
     */
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>;
    /**
     * Choose, which Board to update.
     */
    where: BoardWhereUniqueInput;
  };

  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>;
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput;
    /**
     * Limit how many Boards to update.
     */
    limit?: number;
  };

  /**
   * Board updateManyAndReturn
   */
  export type BoardUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null;
    /**
     * The data used to update Boards.
     */
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>;
    /**
     * Filter which Boards to update
     */
    where?: BoardWhereInput;
    /**
     * Limit how many Boards to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Board upsert
   */
  export type BoardUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null;
    /**
     * The filter to search for the Board to update in case it exists.
     */
    where: BoardWhereUniqueInput;
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     */
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>;
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>;
  };

  /**
   * Board delete
   */
  export type BoardDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null;
    /**
     * Filter which Board to delete.
     */
    where: BoardWhereUniqueInput;
  };

  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Boards to delete
     */
    where?: BoardWhereInput;
    /**
     * Limit how many Boards to delete.
     */
    limit?: number;
  };

  /**
   * Board.users
   */
  export type Board$usersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BoardUser
     */
    select?: BoardUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BoardUser
     */
    omit?: BoardUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardUserInclude<ExtArgs> | null;
    where?: BoardUserWhereInput;
    orderBy?:
      | BoardUserOrderByWithRelationInput
      | BoardUserOrderByWithRelationInput[];
    cursor?: BoardUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BoardUserScalarFieldEnum | BoardUserScalarFieldEnum[];
  };

  /**
   * Board.columns
   */
  export type Board$columnsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null;
    where?: ColumnWhereInput;
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[];
    cursor?: ColumnWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[];
  };

  /**
   * Board without action
   */
  export type BoardDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null;
  };

  /**
   * Model BoardUser
   */

  export type AggregateBoardUser = {
    _count: BoardUserCountAggregateOutputType | null;
    _min: BoardUserMinAggregateOutputType | null;
    _max: BoardUserMaxAggregateOutputType | null;
  };

  export type BoardUserMinAggregateOutputType = {
    boardId: string | null;
    userId: string | null;
    role: $Enums.BoardRole | null;
  };

  export type BoardUserMaxAggregateOutputType = {
    boardId: string | null;
    userId: string | null;
    role: $Enums.BoardRole | null;
  };

  export type BoardUserCountAggregateOutputType = {
    boardId: number;
    userId: number;
    role: number;
    _all: number;
  };

  export type BoardUserMinAggregateInputType = {
    boardId?: true;
    userId?: true;
    role?: true;
  };

  export type BoardUserMaxAggregateInputType = {
    boardId?: true;
    userId?: true;
    role?: true;
  };

  export type BoardUserCountAggregateInputType = {
    boardId?: true;
    userId?: true;
    role?: true;
    _all?: true;
  };

  export type BoardUserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which BoardUser to aggregate.
     */
    where?: BoardUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BoardUsers to fetch.
     */
    orderBy?:
      | BoardUserOrderByWithRelationInput
      | BoardUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: BoardUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BoardUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BoardUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned BoardUsers
     **/
    _count?: true | BoardUserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BoardUserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BoardUserMaxAggregateInputType;
  };

  export type GetBoardUserAggregateType<T extends BoardUserAggregateArgs> = {
    [P in keyof T & keyof AggregateBoardUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardUser[P]>
      : GetScalarType<T[P], AggregateBoardUser[P]>;
  };

  export type BoardUserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: BoardUserWhereInput;
    orderBy?:
      | BoardUserOrderByWithAggregationInput
      | BoardUserOrderByWithAggregationInput[];
    by: BoardUserScalarFieldEnum[] | BoardUserScalarFieldEnum;
    having?: BoardUserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BoardUserCountAggregateInputType | true;
    _min?: BoardUserMinAggregateInputType;
    _max?: BoardUserMaxAggregateInputType;
  };

  export type BoardUserGroupByOutputType = {
    boardId: string;
    userId: string;
    role: $Enums.BoardRole;
    _count: BoardUserCountAggregateOutputType | null;
    _min: BoardUserMinAggregateOutputType | null;
    _max: BoardUserMaxAggregateOutputType | null;
  };

  type GetBoardUserGroupByPayload<T extends BoardUserGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<BoardUserGroupByOutputType, T['by']> & {
          [P in keyof T & keyof BoardUserGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardUserGroupByOutputType[P]>
            : GetScalarType<T[P], BoardUserGroupByOutputType[P]>;
        }
      >
    >;

  export type BoardUserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      boardId?: boolean;
      userId?: boolean;
      role?: boolean;
      board?: boolean | BoardDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['boardUser']
  >;

  export type BoardUserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      boardId?: boolean;
      userId?: boolean;
      role?: boolean;
      board?: boolean | BoardDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['boardUser']
  >;

  export type BoardUserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      boardId?: boolean;
      userId?: boolean;
      role?: boolean;
      board?: boolean | BoardDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['boardUser']
  >;

  export type BoardUserSelectScalar = {
    boardId?: boolean;
    userId?: boolean;
    role?: boolean;
  };

  export type BoardUserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'boardId' | 'userId' | 'role',
    ExtArgs['result']['boardUser']
  >;
  export type BoardUserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    board?: boolean | BoardDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type BoardUserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    board?: boolean | BoardDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type BoardUserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    board?: boolean | BoardDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $BoardUserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'BoardUser';
    objects: {
      board: Prisma.$BoardPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        boardId: string;
        userId: string;
        role: $Enums.BoardRole;
      },
      ExtArgs['result']['boardUser']
    >;
    composites: {};
  };

  type BoardUserGetPayload<
    S extends boolean | null | undefined | BoardUserDefaultArgs,
  > = $Result.GetResult<Prisma.$BoardUserPayload, S>;

  type BoardUserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    BoardUserFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: BoardUserCountAggregateInputType | true;
  };

  export interface BoardUserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['BoardUser'];
      meta: { name: 'BoardUser' };
    };
    /**
     * Find zero or one BoardUser that matches the filter.
     * @param {BoardUserFindUniqueArgs} args - Arguments to find a BoardUser
     * @example
     * // Get one BoardUser
     * const boardUser = await prisma.boardUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardUserFindUniqueArgs>(
      args: SelectSubset<T, BoardUserFindUniqueArgs<ExtArgs>>,
    ): Prisma__BoardUserClient<
      $Result.GetResult<
        Prisma.$BoardUserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one BoardUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoardUserFindUniqueOrThrowArgs} args - Arguments to find a BoardUser
     * @example
     * // Get one BoardUser
     * const boardUser = await prisma.boardUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardUserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, BoardUserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__BoardUserClient<
      $Result.GetResult<
        Prisma.$BoardUserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first BoardUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUserFindFirstArgs} args - Arguments to find a BoardUser
     * @example
     * // Get one BoardUser
     * const boardUser = await prisma.boardUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardUserFindFirstArgs>(
      args?: SelectSubset<T, BoardUserFindFirstArgs<ExtArgs>>,
    ): Prisma__BoardUserClient<
      $Result.GetResult<
        Prisma.$BoardUserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first BoardUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUserFindFirstOrThrowArgs} args - Arguments to find a BoardUser
     * @example
     * // Get one BoardUser
     * const boardUser = await prisma.boardUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BoardUserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__BoardUserClient<
      $Result.GetResult<
        Prisma.$BoardUserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more BoardUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardUsers
     * const boardUsers = await prisma.boardUser.findMany()
     *
     * // Get first 10 BoardUsers
     * const boardUsers = await prisma.boardUser.findMany({ take: 10 })
     *
     * // Only select the `boardId`
     * const boardUserWithBoardIdOnly = await prisma.boardUser.findMany({ select: { boardId: true } })
     *
     */
    findMany<T extends BoardUserFindManyArgs>(
      args?: SelectSubset<T, BoardUserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BoardUserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a BoardUser.
     * @param {BoardUserCreateArgs} args - Arguments to create a BoardUser.
     * @example
     * // Create one BoardUser
     * const BoardUser = await prisma.boardUser.create({
     *   data: {
     *     // ... data to create a BoardUser
     *   }
     * })
     *
     */
    create<T extends BoardUserCreateArgs>(
      args: SelectSubset<T, BoardUserCreateArgs<ExtArgs>>,
    ): Prisma__BoardUserClient<
      $Result.GetResult<
        Prisma.$BoardUserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many BoardUsers.
     * @param {BoardUserCreateManyArgs} args - Arguments to create many BoardUsers.
     * @example
     * // Create many BoardUsers
     * const boardUser = await prisma.boardUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends BoardUserCreateManyArgs>(
      args?: SelectSubset<T, BoardUserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many BoardUsers and returns the data saved in the database.
     * @param {BoardUserCreateManyAndReturnArgs} args - Arguments to create many BoardUsers.
     * @example
     * // Create many BoardUsers
     * const boardUser = await prisma.boardUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many BoardUsers and only return the `boardId`
     * const boardUserWithBoardIdOnly = await prisma.boardUser.createManyAndReturn({
     *   select: { boardId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends BoardUserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, BoardUserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BoardUserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a BoardUser.
     * @param {BoardUserDeleteArgs} args - Arguments to delete one BoardUser.
     * @example
     * // Delete one BoardUser
     * const BoardUser = await prisma.boardUser.delete({
     *   where: {
     *     // ... filter to delete one BoardUser
     *   }
     * })
     *
     */
    delete<T extends BoardUserDeleteArgs>(
      args: SelectSubset<T, BoardUserDeleteArgs<ExtArgs>>,
    ): Prisma__BoardUserClient<
      $Result.GetResult<
        Prisma.$BoardUserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one BoardUser.
     * @param {BoardUserUpdateArgs} args - Arguments to update one BoardUser.
     * @example
     * // Update one BoardUser
     * const boardUser = await prisma.boardUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends BoardUserUpdateArgs>(
      args: SelectSubset<T, BoardUserUpdateArgs<ExtArgs>>,
    ): Prisma__BoardUserClient<
      $Result.GetResult<
        Prisma.$BoardUserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more BoardUsers.
     * @param {BoardUserDeleteManyArgs} args - Arguments to filter BoardUsers to delete.
     * @example
     * // Delete a few BoardUsers
     * const { count } = await prisma.boardUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends BoardUserDeleteManyArgs>(
      args?: SelectSubset<T, BoardUserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more BoardUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardUsers
     * const boardUser = await prisma.boardUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends BoardUserUpdateManyArgs>(
      args: SelectSubset<T, BoardUserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more BoardUsers and returns the data updated in the database.
     * @param {BoardUserUpdateManyAndReturnArgs} args - Arguments to update many BoardUsers.
     * @example
     * // Update many BoardUsers
     * const boardUser = await prisma.boardUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more BoardUsers and only return the `boardId`
     * const boardUserWithBoardIdOnly = await prisma.boardUser.updateManyAndReturn({
     *   select: { boardId: true },
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
    updateManyAndReturn<T extends BoardUserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, BoardUserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$BoardUserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one BoardUser.
     * @param {BoardUserUpsertArgs} args - Arguments to update or create a BoardUser.
     * @example
     * // Update or create a BoardUser
     * const boardUser = await prisma.boardUser.upsert({
     *   create: {
     *     // ... data to create a BoardUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardUser we want to update
     *   }
     * })
     */
    upsert<T extends BoardUserUpsertArgs>(
      args: SelectSubset<T, BoardUserUpsertArgs<ExtArgs>>,
    ): Prisma__BoardUserClient<
      $Result.GetResult<
        Prisma.$BoardUserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of BoardUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUserCountArgs} args - Arguments to filter BoardUsers to count.
     * @example
     * // Count the number of BoardUsers
     * const count = await prisma.boardUser.count({
     *   where: {
     *     // ... the filter for the BoardUsers we want to count
     *   }
     * })
     **/
    count<T extends BoardUserCountArgs>(
      args?: Subset<T, BoardUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardUserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a BoardUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardUserAggregateArgs>(
      args: Subset<T, BoardUserAggregateArgs>,
    ): Prisma.PrismaPromise<GetBoardUserAggregateType<T>>;

    /**
     * Group by BoardUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUserGroupByArgs} args - Group by arguments.
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
      T extends BoardUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardUserGroupByArgs['orderBy'] }
        : { orderBy?: BoardUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, BoardUserGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetBoardUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the BoardUser model
     */
    readonly fields: BoardUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardUserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    board<T extends BoardDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BoardDefaultArgs<ExtArgs>>,
    ): Prisma__BoardClient<
      | $Result.GetResult<
          Prisma.$BoardPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the BoardUser model
   */
  interface BoardUserFieldRefs {
    readonly boardId: FieldRef<'BoardUser', 'String'>;
    readonly userId: FieldRef<'BoardUser', 'String'>;
    readonly role: FieldRef<'BoardUser', 'BoardRole'>;
  }

  // Custom InputTypes
  /**
   * BoardUser findUnique
   */
  export type BoardUserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BoardUser
     */
    select?: BoardUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BoardUser
     */
    omit?: BoardUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardUserInclude<ExtArgs> | null;
    /**
     * Filter, which BoardUser to fetch.
     */
    where: BoardUserWhereUniqueInput;
  };

  /**
   * BoardUser findUniqueOrThrow
   */
  export type BoardUserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BoardUser
     */
    select?: BoardUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BoardUser
     */
    omit?: BoardUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardUserInclude<ExtArgs> | null;
    /**
     * Filter, which BoardUser to fetch.
     */
    where: BoardUserWhereUniqueInput;
  };

  /**
   * BoardUser findFirst
   */
  export type BoardUserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BoardUser
     */
    select?: BoardUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BoardUser
     */
    omit?: BoardUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardUserInclude<ExtArgs> | null;
    /**
     * Filter, which BoardUser to fetch.
     */
    where?: BoardUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BoardUsers to fetch.
     */
    orderBy?:
      | BoardUserOrderByWithRelationInput
      | BoardUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BoardUsers.
     */
    cursor?: BoardUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BoardUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BoardUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BoardUsers.
     */
    distinct?: BoardUserScalarFieldEnum | BoardUserScalarFieldEnum[];
  };

  /**
   * BoardUser findFirstOrThrow
   */
  export type BoardUserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BoardUser
     */
    select?: BoardUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BoardUser
     */
    omit?: BoardUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardUserInclude<ExtArgs> | null;
    /**
     * Filter, which BoardUser to fetch.
     */
    where?: BoardUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BoardUsers to fetch.
     */
    orderBy?:
      | BoardUserOrderByWithRelationInput
      | BoardUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for BoardUsers.
     */
    cursor?: BoardUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BoardUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BoardUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of BoardUsers.
     */
    distinct?: BoardUserScalarFieldEnum | BoardUserScalarFieldEnum[];
  };

  /**
   * BoardUser findMany
   */
  export type BoardUserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BoardUser
     */
    select?: BoardUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BoardUser
     */
    omit?: BoardUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardUserInclude<ExtArgs> | null;
    /**
     * Filter, which BoardUsers to fetch.
     */
    where?: BoardUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of BoardUsers to fetch.
     */
    orderBy?:
      | BoardUserOrderByWithRelationInput
      | BoardUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing BoardUsers.
     */
    cursor?: BoardUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` BoardUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` BoardUsers.
     */
    skip?: number;
    distinct?: BoardUserScalarFieldEnum | BoardUserScalarFieldEnum[];
  };

  /**
   * BoardUser create
   */
  export type BoardUserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BoardUser
     */
    select?: BoardUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BoardUser
     */
    omit?: BoardUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardUserInclude<ExtArgs> | null;
    /**
     * The data needed to create a BoardUser.
     */
    data: XOR<BoardUserCreateInput, BoardUserUncheckedCreateInput>;
  };

  /**
   * BoardUser createMany
   */
  export type BoardUserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many BoardUsers.
     */
    data: BoardUserCreateManyInput | BoardUserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * BoardUser createManyAndReturn
   */
  export type BoardUserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BoardUser
     */
    select?: BoardUserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BoardUser
     */
    omit?: BoardUserOmit<ExtArgs> | null;
    /**
     * The data used to create many BoardUsers.
     */
    data: BoardUserCreateManyInput | BoardUserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardUserIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * BoardUser update
   */
  export type BoardUserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BoardUser
     */
    select?: BoardUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BoardUser
     */
    omit?: BoardUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardUserInclude<ExtArgs> | null;
    /**
     * The data needed to update a BoardUser.
     */
    data: XOR<BoardUserUpdateInput, BoardUserUncheckedUpdateInput>;
    /**
     * Choose, which BoardUser to update.
     */
    where: BoardUserWhereUniqueInput;
  };

  /**
   * BoardUser updateMany
   */
  export type BoardUserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update BoardUsers.
     */
    data: XOR<
      BoardUserUpdateManyMutationInput,
      BoardUserUncheckedUpdateManyInput
    >;
    /**
     * Filter which BoardUsers to update
     */
    where?: BoardUserWhereInput;
    /**
     * Limit how many BoardUsers to update.
     */
    limit?: number;
  };

  /**
   * BoardUser updateManyAndReturn
   */
  export type BoardUserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BoardUser
     */
    select?: BoardUserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the BoardUser
     */
    omit?: BoardUserOmit<ExtArgs> | null;
    /**
     * The data used to update BoardUsers.
     */
    data: XOR<
      BoardUserUpdateManyMutationInput,
      BoardUserUncheckedUpdateManyInput
    >;
    /**
     * Filter which BoardUsers to update
     */
    where?: BoardUserWhereInput;
    /**
     * Limit how many BoardUsers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardUserIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * BoardUser upsert
   */
  export type BoardUserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BoardUser
     */
    select?: BoardUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BoardUser
     */
    omit?: BoardUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardUserInclude<ExtArgs> | null;
    /**
     * The filter to search for the BoardUser to update in case it exists.
     */
    where: BoardUserWhereUniqueInput;
    /**
     * In case the BoardUser found by the `where` argument doesn't exist, create a new BoardUser with this data.
     */
    create: XOR<BoardUserCreateInput, BoardUserUncheckedCreateInput>;
    /**
     * In case the BoardUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardUserUpdateInput, BoardUserUncheckedUpdateInput>;
  };

  /**
   * BoardUser delete
   */
  export type BoardUserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BoardUser
     */
    select?: BoardUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BoardUser
     */
    omit?: BoardUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardUserInclude<ExtArgs> | null;
    /**
     * Filter which BoardUser to delete.
     */
    where: BoardUserWhereUniqueInput;
  };

  /**
   * BoardUser deleteMany
   */
  export type BoardUserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which BoardUsers to delete
     */
    where?: BoardUserWhereInput;
    /**
     * Limit how many BoardUsers to delete.
     */
    limit?: number;
  };

  /**
   * BoardUser without action
   */
  export type BoardUserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BoardUser
     */
    select?: BoardUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BoardUser
     */
    omit?: BoardUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardUserInclude<ExtArgs> | null;
  };

  /**
   * Model Column
   */

  export type AggregateColumn = {
    _count: ColumnCountAggregateOutputType | null;
    _avg: ColumnAvgAggregateOutputType | null;
    _sum: ColumnSumAggregateOutputType | null;
    _min: ColumnMinAggregateOutputType | null;
    _max: ColumnMaxAggregateOutputType | null;
  };

  export type ColumnAvgAggregateOutputType = {
    position: number | null;
  };

  export type ColumnSumAggregateOutputType = {
    position: number | null;
  };

  export type ColumnMinAggregateOutputType = {
    id: string | null;
    boardId: string | null;
    createdById: string | null;
    name: string | null;
    position: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ColumnMaxAggregateOutputType = {
    id: string | null;
    boardId: string | null;
    createdById: string | null;
    name: string | null;
    position: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ColumnCountAggregateOutputType = {
    id: number;
    boardId: number;
    createdById: number;
    name: number;
    position: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ColumnAvgAggregateInputType = {
    position?: true;
  };

  export type ColumnSumAggregateInputType = {
    position?: true;
  };

  export type ColumnMinAggregateInputType = {
    id?: true;
    boardId?: true;
    createdById?: true;
    name?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ColumnMaxAggregateInputType = {
    id?: true;
    boardId?: true;
    createdById?: true;
    name?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ColumnCountAggregateInputType = {
    id?: true;
    boardId?: true;
    createdById?: true;
    name?: true;
    position?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ColumnAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Column to aggregate.
     */
    where?: ColumnWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ColumnWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Columns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Columns
     **/
    _count?: true | ColumnCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ColumnAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ColumnSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ColumnMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ColumnMaxAggregateInputType;
  };

  export type GetColumnAggregateType<T extends ColumnAggregateArgs> = {
    [P in keyof T & keyof AggregateColumn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColumn[P]>
      : GetScalarType<T[P], AggregateColumn[P]>;
  };

  export type ColumnGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ColumnWhereInput;
    orderBy?:
      | ColumnOrderByWithAggregationInput
      | ColumnOrderByWithAggregationInput[];
    by: ColumnScalarFieldEnum[] | ColumnScalarFieldEnum;
    having?: ColumnScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ColumnCountAggregateInputType | true;
    _avg?: ColumnAvgAggregateInputType;
    _sum?: ColumnSumAggregateInputType;
    _min?: ColumnMinAggregateInputType;
    _max?: ColumnMaxAggregateInputType;
  };

  export type ColumnGroupByOutputType = {
    id: string;
    boardId: string;
    createdById: string;
    name: string;
    position: number;
    createdAt: Date;
    updatedAt: Date;
    _count: ColumnCountAggregateOutputType | null;
    _avg: ColumnAvgAggregateOutputType | null;
    _sum: ColumnSumAggregateOutputType | null;
    _min: ColumnMinAggregateOutputType | null;
    _max: ColumnMaxAggregateOutputType | null;
  };

  type GetColumnGroupByPayload<T extends ColumnGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ColumnGroupByOutputType, T['by']> & {
          [P in keyof T & keyof ColumnGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColumnGroupByOutputType[P]>
            : GetScalarType<T[P], ColumnGroupByOutputType[P]>;
        }
      >
    >;

  export type ColumnSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      boardId?: boolean;
      createdById?: boolean;
      name?: boolean;
      position?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      tasks?: boolean | Column$tasksArgs<ExtArgs>;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
      board?: boolean | BoardDefaultArgs<ExtArgs>;
      _count?: boolean | ColumnCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['column']
  >;

  export type ColumnSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      boardId?: boolean;
      createdById?: boolean;
      name?: boolean;
      position?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
      board?: boolean | BoardDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['column']
  >;

  export type ColumnSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      boardId?: boolean;
      createdById?: boolean;
      name?: boolean;
      position?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      createdBy?: boolean | UserDefaultArgs<ExtArgs>;
      board?: boolean | BoardDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['column']
  >;

  export type ColumnSelectScalar = {
    id?: boolean;
    boardId?: boolean;
    createdById?: boolean;
    name?: boolean;
    position?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ColumnOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'boardId'
    | 'createdById'
    | 'name'
    | 'position'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['column']
  >;
  export type ColumnInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    tasks?: boolean | Column$tasksArgs<ExtArgs>;
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    board?: boolean | BoardDefaultArgs<ExtArgs>;
    _count?: boolean | ColumnCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type ColumnIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    board?: boolean | BoardDefaultArgs<ExtArgs>;
  };
  export type ColumnIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>;
    board?: boolean | BoardDefaultArgs<ExtArgs>;
  };

  export type $ColumnPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Column';
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[];
      createdBy: Prisma.$UserPayload<ExtArgs>;
      board: Prisma.$BoardPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        boardId: string;
        createdById: string;
        name: string;
        position: number;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['column']
    >;
    composites: {};
  };

  type ColumnGetPayload<
    S extends boolean | null | undefined | ColumnDefaultArgs,
  > = $Result.GetResult<Prisma.$ColumnPayload, S>;

  type ColumnCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ColumnFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ColumnCountAggregateInputType | true;
  };

  export interface ColumnDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Column'];
      meta: { name: 'Column' };
    };
    /**
     * Find zero or one Column that matches the filter.
     * @param {ColumnFindUniqueArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColumnFindUniqueArgs>(
      args: SelectSubset<T, ColumnFindUniqueArgs<ExtArgs>>,
    ): Prisma__ColumnClient<
      $Result.GetResult<
        Prisma.$ColumnPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Column that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColumnFindUniqueOrThrowArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColumnFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ColumnFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ColumnClient<
      $Result.GetResult<
        Prisma.$ColumnPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Column that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindFirstArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColumnFindFirstArgs>(
      args?: SelectSubset<T, ColumnFindFirstArgs<ExtArgs>>,
    ): Prisma__ColumnClient<
      $Result.GetResult<
        Prisma.$ColumnPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Column that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindFirstOrThrowArgs} args - Arguments to find a Column
     * @example
     * // Get one Column
     * const column = await prisma.column.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColumnFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ColumnFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ColumnClient<
      $Result.GetResult<
        Prisma.$ColumnPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Columns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Columns
     * const columns = await prisma.column.findMany()
     *
     * // Get first 10 Columns
     * const columns = await prisma.column.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const columnWithIdOnly = await prisma.column.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ColumnFindManyArgs>(
      args?: SelectSubset<T, ColumnFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ColumnPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Column.
     * @param {ColumnCreateArgs} args - Arguments to create a Column.
     * @example
     * // Create one Column
     * const Column = await prisma.column.create({
     *   data: {
     *     // ... data to create a Column
     *   }
     * })
     *
     */
    create<T extends ColumnCreateArgs>(
      args: SelectSubset<T, ColumnCreateArgs<ExtArgs>>,
    ): Prisma__ColumnClient<
      $Result.GetResult<
        Prisma.$ColumnPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Columns.
     * @param {ColumnCreateManyArgs} args - Arguments to create many Columns.
     * @example
     * // Create many Columns
     * const column = await prisma.column.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ColumnCreateManyArgs>(
      args?: SelectSubset<T, ColumnCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Columns and returns the data saved in the database.
     * @param {ColumnCreateManyAndReturnArgs} args - Arguments to create many Columns.
     * @example
     * // Create many Columns
     * const column = await prisma.column.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Columns and only return the `id`
     * const columnWithIdOnly = await prisma.column.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ColumnCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ColumnCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ColumnPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Column.
     * @param {ColumnDeleteArgs} args - Arguments to delete one Column.
     * @example
     * // Delete one Column
     * const Column = await prisma.column.delete({
     *   where: {
     *     // ... filter to delete one Column
     *   }
     * })
     *
     */
    delete<T extends ColumnDeleteArgs>(
      args: SelectSubset<T, ColumnDeleteArgs<ExtArgs>>,
    ): Prisma__ColumnClient<
      $Result.GetResult<
        Prisma.$ColumnPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Column.
     * @param {ColumnUpdateArgs} args - Arguments to update one Column.
     * @example
     * // Update one Column
     * const column = await prisma.column.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ColumnUpdateArgs>(
      args: SelectSubset<T, ColumnUpdateArgs<ExtArgs>>,
    ): Prisma__ColumnClient<
      $Result.GetResult<
        Prisma.$ColumnPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Columns.
     * @param {ColumnDeleteManyArgs} args - Arguments to filter Columns to delete.
     * @example
     * // Delete a few Columns
     * const { count } = await prisma.column.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ColumnDeleteManyArgs>(
      args?: SelectSubset<T, ColumnDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Columns
     * const column = await prisma.column.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ColumnUpdateManyArgs>(
      args: SelectSubset<T, ColumnUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Columns and returns the data updated in the database.
     * @param {ColumnUpdateManyAndReturnArgs} args - Arguments to update many Columns.
     * @example
     * // Update many Columns
     * const column = await prisma.column.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Columns and only return the `id`
     * const columnWithIdOnly = await prisma.column.updateManyAndReturn({
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
    updateManyAndReturn<T extends ColumnUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ColumnUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ColumnPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Column.
     * @param {ColumnUpsertArgs} args - Arguments to update or create a Column.
     * @example
     * // Update or create a Column
     * const column = await prisma.column.upsert({
     *   create: {
     *     // ... data to create a Column
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Column we want to update
     *   }
     * })
     */
    upsert<T extends ColumnUpsertArgs>(
      args: SelectSubset<T, ColumnUpsertArgs<ExtArgs>>,
    ): Prisma__ColumnClient<
      $Result.GetResult<
        Prisma.$ColumnPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Columns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnCountArgs} args - Arguments to filter Columns to count.
     * @example
     * // Count the number of Columns
     * const count = await prisma.column.count({
     *   where: {
     *     // ... the filter for the Columns we want to count
     *   }
     * })
     **/
    count<T extends ColumnCountArgs>(
      args?: Subset<T, ColumnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColumnCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Column.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ColumnAggregateArgs>(
      args: Subset<T, ColumnAggregateArgs>,
    ): Prisma.PrismaPromise<GetColumnAggregateType<T>>;

    /**
     * Group by Column.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColumnGroupByArgs} args - Group by arguments.
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
      T extends ColumnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColumnGroupByArgs['orderBy'] }
        : { orderBy?: ColumnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ColumnGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetColumnGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Column model
     */
    readonly fields: ColumnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Column.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColumnClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    tasks<T extends Column$tasksArgs<ExtArgs> = {}>(
      args?: Subset<T, Column$tasksArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TaskPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    board<T extends BoardDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, BoardDefaultArgs<ExtArgs>>,
    ): Prisma__BoardClient<
      | $Result.GetResult<
          Prisma.$BoardPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Column model
   */
  interface ColumnFieldRefs {
    readonly id: FieldRef<'Column', 'String'>;
    readonly boardId: FieldRef<'Column', 'String'>;
    readonly createdById: FieldRef<'Column', 'String'>;
    readonly name: FieldRef<'Column', 'String'>;
    readonly position: FieldRef<'Column', 'Int'>;
    readonly createdAt: FieldRef<'Column', 'DateTime'>;
    readonly updatedAt: FieldRef<'Column', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Column findUnique
   */
  export type ColumnFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null;
    /**
     * Filter, which Column to fetch.
     */
    where: ColumnWhereUniqueInput;
  };

  /**
   * Column findUniqueOrThrow
   */
  export type ColumnFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null;
    /**
     * Filter, which Column to fetch.
     */
    where: ColumnWhereUniqueInput;
  };

  /**
   * Column findFirst
   */
  export type ColumnFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null;
    /**
     * Filter, which Column to fetch.
     */
    where?: ColumnWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Columns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Columns.
     */
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[];
  };

  /**
   * Column findFirstOrThrow
   */
  export type ColumnFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null;
    /**
     * Filter, which Column to fetch.
     */
    where?: ColumnWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Columns.
     */
    cursor?: ColumnWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Columns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Columns.
     */
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[];
  };

  /**
   * Column findMany
   */
  export type ColumnFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null;
    /**
     * Filter, which Columns to fetch.
     */
    where?: ColumnWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Columns to fetch.
     */
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Columns.
     */
    cursor?: ColumnWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Columns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Columns.
     */
    skip?: number;
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[];
  };

  /**
   * Column create
   */
  export type ColumnCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null;
    /**
     * The data needed to create a Column.
     */
    data: XOR<ColumnCreateInput, ColumnUncheckedCreateInput>;
  };

  /**
   * Column createMany
   */
  export type ColumnCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Columns.
     */
    data: ColumnCreateManyInput | ColumnCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Column createManyAndReturn
   */
  export type ColumnCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null;
    /**
     * The data used to create many Columns.
     */
    data: ColumnCreateManyInput | ColumnCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Column update
   */
  export type ColumnUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null;
    /**
     * The data needed to update a Column.
     */
    data: XOR<ColumnUpdateInput, ColumnUncheckedUpdateInput>;
    /**
     * Choose, which Column to update.
     */
    where: ColumnWhereUniqueInput;
  };

  /**
   * Column updateMany
   */
  export type ColumnUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Columns.
     */
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyInput>;
    /**
     * Filter which Columns to update
     */
    where?: ColumnWhereInput;
    /**
     * Limit how many Columns to update.
     */
    limit?: number;
  };

  /**
   * Column updateManyAndReturn
   */
  export type ColumnUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null;
    /**
     * The data used to update Columns.
     */
    data: XOR<ColumnUpdateManyMutationInput, ColumnUncheckedUpdateManyInput>;
    /**
     * Filter which Columns to update
     */
    where?: ColumnWhereInput;
    /**
     * Limit how many Columns to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Column upsert
   */
  export type ColumnUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null;
    /**
     * The filter to search for the Column to update in case it exists.
     */
    where: ColumnWhereUniqueInput;
    /**
     * In case the Column found by the `where` argument doesn't exist, create a new Column with this data.
     */
    create: XOR<ColumnCreateInput, ColumnUncheckedCreateInput>;
    /**
     * In case the Column was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColumnUpdateInput, ColumnUncheckedUpdateInput>;
  };

  /**
   * Column delete
   */
  export type ColumnDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null;
    /**
     * Filter which Column to delete.
     */
    where: ColumnWhereUniqueInput;
  };

  /**
   * Column deleteMany
   */
  export type ColumnDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Columns to delete
     */
    where?: ColumnWhereInput;
    /**
     * Limit how many Columns to delete.
     */
    limit?: number;
  };

  /**
   * Column.tasks
   */
  export type Column$tasksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    where?: TaskWhereInput;
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
    cursor?: TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * Column without action
   */
  export type ColumnDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null;
  };

  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null;
    _min: InvitationMinAggregateOutputType | null;
    _max: InvitationMaxAggregateOutputType | null;
  };

  export type InvitationMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    email: string | null;
    role: $Enums.OrganizationRole | null;
    status: $Enums.InvitationStatus | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type InvitationMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    email: string | null;
    role: $Enums.OrganizationRole | null;
    status: $Enums.InvitationStatus | null;
    expiresAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type InvitationCountAggregateOutputType = {
    id: number;
    organizationId: number;
    email: number;
    role: number;
    status: number;
    expiresAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type InvitationMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    email?: true;
    role?: true;
    status?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type InvitationMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    email?: true;
    role?: true;
    status?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type InvitationCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    email?: true;
    role?: true;
    status?: true;
    expiresAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type InvitationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invitations to fetch.
     */
    orderBy?:
      | InvitationOrderByWithRelationInput
      | InvitationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invitations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Invitations
     **/
    _count?: true | InvitationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InvitationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InvitationMaxAggregateInputType;
  };

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
    [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>;
  };

  export type InvitationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InvitationWhereInput;
    orderBy?:
      | InvitationOrderByWithAggregationInput
      | InvitationOrderByWithAggregationInput[];
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum;
    having?: InvitationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvitationCountAggregateInputType | true;
    _min?: InvitationMinAggregateInputType;
    _max?: InvitationMaxAggregateInputType;
  };

  export type InvitationGroupByOutputType = {
    id: string;
    organizationId: string;
    email: string;
    role: $Enums.OrganizationRole;
    status: $Enums.InvitationStatus;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
    _count: InvitationCountAggregateOutputType | null;
    _min: InvitationMinAggregateOutputType | null;
    _max: InvitationMaxAggregateOutputType | null;
  };

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<InvitationGroupByOutputType, T['by']> & {
          [P in keyof T & keyof InvitationGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>;
        }
      >
    >;

  export type InvitationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      email?: boolean;
      role?: boolean;
      status?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['invitation']
  >;

  export type InvitationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      email?: boolean;
      role?: boolean;
      status?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['invitation']
  >;

  export type InvitationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      email?: boolean;
      role?: boolean;
      status?: boolean;
      expiresAt?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['invitation']
  >;

  export type InvitationSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    email?: boolean;
    role?: boolean;
    status?: boolean;
    expiresAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type InvitationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'organizationId'
    | 'email'
    | 'role'
    | 'status'
    | 'expiresAt'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['invitation']
  >;
  export type InvitationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };
  export type InvitationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };
  export type InvitationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };

  export type $InvitationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Invitation';
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        organizationId: string;
        email: string;
        role: $Enums.OrganizationRole;
        status: $Enums.InvitationStatus;
        expiresAt: Date;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['invitation']
    >;
    composites: {};
  };

  type InvitationGetPayload<
    S extends boolean | null | undefined | InvitationDefaultArgs,
  > = $Result.GetResult<Prisma.$InvitationPayload, S>;

  type InvitationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    InvitationFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: InvitationCountAggregateInputType | true;
  };

  export interface InvitationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Invitation'];
      meta: { name: 'Invitation' };
    };
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationFindUniqueArgs>(
      args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationFindFirstArgs>(
      args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     *
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InvitationFindManyArgs>(
      args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     *
     */
    create<T extends InvitationCreateArgs>(
      args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Invitations.
     * @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InvitationCreateManyArgs>(
      args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Invitations and returns the data saved in the database.
     * @param {InvitationCreateManyAndReturnArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InvitationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, InvitationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     *
     */
    delete<T extends InvitationDeleteArgs>(
      args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InvitationUpdateArgs>(
      args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InvitationDeleteManyArgs>(
      args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InvitationUpdateManyArgs>(
      args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Invitations and returns the data updated in the database.
     * @param {InvitationUpdateManyAndReturnArgs} args - Arguments to update many Invitations.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.updateManyAndReturn({
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
    updateManyAndReturn<T extends InvitationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, InvitationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends InvitationUpsertArgs>(
      args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>,
    ): Prisma__InvitationClient<
      $Result.GetResult<
        Prisma.$InvitationPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
     **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvitationAggregateArgs>(
      args: Subset<T, InvitationAggregateArgs>,
    ): Prisma.PrismaPromise<GetInvitationAggregateType<T>>;

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
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
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetInvitationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Invitation model
     */
    readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      | $Result.GetResult<
          Prisma.$OrganizationPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Invitation model
   */
  interface InvitationFieldRefs {
    readonly id: FieldRef<'Invitation', 'String'>;
    readonly organizationId: FieldRef<'Invitation', 'String'>;
    readonly email: FieldRef<'Invitation', 'String'>;
    readonly role: FieldRef<'Invitation', 'OrganizationRole'>;
    readonly status: FieldRef<'Invitation', 'InvitationStatus'>;
    readonly expiresAt: FieldRef<'Invitation', 'DateTime'>;
    readonly createdAt: FieldRef<'Invitation', 'DateTime'>;
    readonly updatedAt: FieldRef<'Invitation', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput;
  };

  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput;
  };

  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invitations to fetch.
     */
    orderBy?:
      | InvitationOrderByWithRelationInput
      | InvitationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invitations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[];
  };

  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invitations to fetch.
     */
    orderBy?:
      | InvitationOrderByWithRelationInput
      | InvitationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invitations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[];
  };

  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Invitations to fetch.
     */
    orderBy?:
      | InvitationOrderByWithRelationInput
      | InvitationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Invitations.
     */
    skip?: number;
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[];
  };

  /**
   * Invitation create
   */
  export type InvitationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>;
  };

  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Invitation createManyAndReturn
   */
  export type InvitationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>;
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput;
  };

  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<
      InvitationUpdateManyMutationInput,
      InvitationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput;
    /**
     * Limit how many Invitations to update.
     */
    limit?: number;
  };

  /**
   * Invitation updateManyAndReturn
   */
  export type InvitationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * The data used to update Invitations.
     */
    data: XOR<
      InvitationUpdateManyMutationInput,
      InvitationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput;
    /**
     * Limit how many Invitations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput;
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>;
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>;
  };

  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput;
  };

  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput;
    /**
     * Limit how many Invitations to delete.
     */
    limit?: number;
  };

  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
  };

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    imagePath: string | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    imagePath: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    name: number;
    imagePath: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    name?: true;
    imagePath?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    name?: true;
    imagePath?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    name?: true;
    imagePath?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<
    T extends OrganizationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type OrganizationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizationWhereInput;
    orderBy?:
      | OrganizationOrderByWithAggregationInput
      | OrganizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: OrganizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    name: string;
    imagePath: string | null;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof OrganizationGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
        }
      >
    >;

  export type OrganizationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      imagePath?: boolean;
      users?: boolean | Organization$usersArgs<ExtArgs>;
      boards?: boolean | Organization$boardsArgs<ExtArgs>;
      tasks?: boolean | Organization$tasksArgs<ExtArgs>;
      invitations?: boolean | Organization$invitationsArgs<ExtArgs>;
      _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['organization']
  >;

  export type OrganizationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      imagePath?: boolean;
    },
    ExtArgs['result']['organization']
  >;

  export type OrganizationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      imagePath?: boolean;
    },
    ExtArgs['result']['organization']
  >;

  export type OrganizationSelectScalar = {
    id?: boolean;
    name?: boolean;
    imagePath?: boolean;
  };

  export type OrganizationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'imagePath',
    ExtArgs['result']['organization']
  >;
  export type OrganizationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | Organization$usersArgs<ExtArgs>;
    boards?: boolean | Organization$boardsArgs<ExtArgs>;
    tasks?: boolean | Organization$tasksArgs<ExtArgs>;
    invitations?: boolean | Organization$invitationsArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type OrganizationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type OrganizationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $OrganizationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Organization';
    objects: {
      users: Prisma.$OrganizationUserPayload<ExtArgs>[];
      boards: Prisma.$BoardPayload<ExtArgs>[];
      tasks: Prisma.$TaskPayload<ExtArgs>[];
      invitations: Prisma.$InvitationPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        imagePath: string | null;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type OrganizationGetPayload<
    S extends boolean | null | undefined | OrganizationDefaultArgs,
  > = $Result.GetResult<Prisma.$OrganizationPayload, S>;

  type OrganizationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    OrganizationFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface OrganizationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Organization'];
      meta: { name: 'Organization' };
    };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(
      args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(
      args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrganizationFindManyArgs>(
      args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     */
    create<T extends OrganizationCreateArgs>(
      args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrganizationCreateManyArgs>(
      args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     */
    delete<T extends OrganizationDeleteArgs>(
      args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrganizationUpdateArgs>(
      args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(
      args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrganizationUpdateManyArgs>(
      args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(
      args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      $Result.GetResult<
        Prisma.$OrganizationPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOrganizationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Organization model
     */
    readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    users<T extends Organization$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$usersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrganizationUserPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    boards<T extends Organization$boardsArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$boardsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BoardPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    tasks<T extends Organization$tasksArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$tasksArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TaskPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    invitations<T extends Organization$invitationsArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$invitationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$InvitationPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<'Organization', 'String'>;
    readonly name: FieldRef<'Organization', 'String'>;
    readonly imagePath: FieldRef<'Organization', 'String'>;
  }

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Organizations to fetch.
     */
    orderBy?:
      | OrganizationOrderByWithRelationInput
      | OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>;
  };

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>;
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<
      OrganizationUpdateManyMutationInput,
      OrganizationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput;
    /**
     * Limit how many Organizations to update.
     */
    limit?: number;
  };

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * The data used to update Organizations.
     */
    data: XOR<
      OrganizationUpdateManyMutationInput,
      OrganizationUncheckedUpdateManyInput
    >;
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput;
    /**
     * Limit how many Organizations to update.
     */
    limit?: number;
  };

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput;
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>;
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>;
  };

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput;
  };

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput;
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number;
  };

  /**
   * Organization.users
   */
  export type Organization$usersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationUser
     */
    select?: OrganizationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrganizationUser
     */
    omit?: OrganizationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationUserInclude<ExtArgs> | null;
    where?: OrganizationUserWhereInput;
    orderBy?:
      | OrganizationUserOrderByWithRelationInput
      | OrganizationUserOrderByWithRelationInput[];
    cursor?: OrganizationUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | OrganizationUserScalarFieldEnum
      | OrganizationUserScalarFieldEnum[];
  };

  /**
   * Organization.boards
   */
  export type Organization$boardsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null;
    where?: BoardWhereInput;
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[];
    cursor?: BoardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[];
  };

  /**
   * Organization.tasks
   */
  export type Organization$tasksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    where?: TaskWhereInput;
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
    cursor?: TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * Organization.invitations
   */
  export type Organization$invitationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null;
    where?: InvitationWhereInput;
    orderBy?:
      | InvitationOrderByWithRelationInput
      | InvitationOrderByWithRelationInput[];
    cursor?: InvitationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[];
  };

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null;
  };

  /**
   * Model OrganizationUser
   */

  export type AggregateOrganizationUser = {
    _count: OrganizationUserCountAggregateOutputType | null;
    _min: OrganizationUserMinAggregateOutputType | null;
    _max: OrganizationUserMaxAggregateOutputType | null;
  };

  export type OrganizationUserMinAggregateOutputType = {
    userId: string | null;
    organizationId: string | null;
    role: $Enums.OrganizationRole | null;
    archived: boolean | null;
  };

  export type OrganizationUserMaxAggregateOutputType = {
    userId: string | null;
    organizationId: string | null;
    role: $Enums.OrganizationRole | null;
    archived: boolean | null;
  };

  export type OrganizationUserCountAggregateOutputType = {
    userId: number;
    organizationId: number;
    role: number;
    archived: number;
    _all: number;
  };

  export type OrganizationUserMinAggregateInputType = {
    userId?: true;
    organizationId?: true;
    role?: true;
    archived?: true;
  };

  export type OrganizationUserMaxAggregateInputType = {
    userId?: true;
    organizationId?: true;
    role?: true;
    archived?: true;
  };

  export type OrganizationUserCountAggregateInputType = {
    userId?: true;
    organizationId?: true;
    role?: true;
    archived?: true;
    _all?: true;
  };

  export type OrganizationUserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrganizationUser to aggregate.
     */
    where?: OrganizationUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrganizationUsers to fetch.
     */
    orderBy?:
      | OrganizationUserOrderByWithRelationInput
      | OrganizationUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrganizationUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrganizationUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrganizationUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OrganizationUsers
     **/
    _count?: true | OrganizationUserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationUserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationUserMaxAggregateInputType;
  };

  export type GetOrganizationUserAggregateType<
    T extends OrganizationUserAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateOrganizationUser]: P extends
      | '_count'
      | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationUser[P]>
      : GetScalarType<T[P], AggregateOrganizationUser[P]>;
  };

  export type OrganizationUserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizationUserWhereInput;
    orderBy?:
      | OrganizationUserOrderByWithAggregationInput
      | OrganizationUserOrderByWithAggregationInput[];
    by: OrganizationUserScalarFieldEnum[] | OrganizationUserScalarFieldEnum;
    having?: OrganizationUserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationUserCountAggregateInputType | true;
    _min?: OrganizationUserMinAggregateInputType;
    _max?: OrganizationUserMaxAggregateInputType;
  };

  export type OrganizationUserGroupByOutputType = {
    userId: string;
    organizationId: string;
    role: $Enums.OrganizationRole;
    archived: boolean;
    _count: OrganizationUserCountAggregateOutputType | null;
    _min: OrganizationUserMinAggregateOutputType | null;
    _max: OrganizationUserMaxAggregateOutputType | null;
  };

  type GetOrganizationUserGroupByPayload<
    T extends OrganizationUserGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationUserGroupByOutputType, T['by']> & {
        [P in keyof T &
          keyof OrganizationUserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationUserGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationUserGroupByOutputType[P]>;
      }
    >
  >;

  export type OrganizationUserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      organizationId?: boolean;
      role?: boolean;
      archived?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['organizationUser']
  >;

  export type OrganizationUserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      organizationId?: boolean;
      role?: boolean;
      archived?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['organizationUser']
  >;

  export type OrganizationUserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      userId?: boolean;
      organizationId?: boolean;
      role?: boolean;
      archived?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['organizationUser']
  >;

  export type OrganizationUserSelectScalar = {
    userId?: boolean;
    organizationId?: boolean;
    role?: boolean;
    archived?: boolean;
  };

  export type OrganizationUserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'userId' | 'organizationId' | 'role' | 'archived',
    ExtArgs['result']['organizationUser']
  >;
  export type OrganizationUserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };
  export type OrganizationUserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };
  export type OrganizationUserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };

  export type $OrganizationUserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'OrganizationUser';
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
      organization: Prisma.$OrganizationPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        userId: string;
        organizationId: string;
        role: $Enums.OrganizationRole;
        archived: boolean;
      },
      ExtArgs['result']['organizationUser']
    >;
    composites: {};
  };

  type OrganizationUserGetPayload<
    S extends boolean | null | undefined | OrganizationUserDefaultArgs,
  > = $Result.GetResult<Prisma.$OrganizationUserPayload, S>;

  type OrganizationUserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    OrganizationUserFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: OrganizationUserCountAggregateInputType | true;
  };

  export interface OrganizationUserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['OrganizationUser'];
      meta: { name: 'OrganizationUser' };
    };
    /**
     * Find zero or one OrganizationUser that matches the filter.
     * @param {OrganizationUserFindUniqueArgs} args - Arguments to find a OrganizationUser
     * @example
     * // Get one OrganizationUser
     * const organizationUser = await prisma.organizationUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationUserFindUniqueArgs>(
      args: SelectSubset<T, OrganizationUserFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrganizationUserClient<
      $Result.GetResult<
        Prisma.$OrganizationUserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one OrganizationUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationUserFindUniqueOrThrowArgs} args - Arguments to find a OrganizationUser
     * @example
     * // Get one OrganizationUser
     * const organizationUser = await prisma.organizationUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationUserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrganizationUserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizationUserClient<
      $Result.GetResult<
        Prisma.$OrganizationUserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OrganizationUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUserFindFirstArgs} args - Arguments to find a OrganizationUser
     * @example
     * // Get one OrganizationUser
     * const organizationUser = await prisma.organizationUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationUserFindFirstArgs>(
      args?: SelectSubset<T, OrganizationUserFindFirstArgs<ExtArgs>>,
    ): Prisma__OrganizationUserClient<
      $Result.GetResult<
        Prisma.$OrganizationUserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first OrganizationUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUserFindFirstOrThrowArgs} args - Arguments to find a OrganizationUser
     * @example
     * // Get one OrganizationUser
     * const organizationUser = await prisma.organizationUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrganizationUserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrganizationUserClient<
      $Result.GetResult<
        Prisma.$OrganizationUserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more OrganizationUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationUsers
     * const organizationUsers = await prisma.organizationUser.findMany()
     *
     * // Get first 10 OrganizationUsers
     * const organizationUsers = await prisma.organizationUser.findMany({ take: 10 })
     *
     * // Only select the `userId`
     * const organizationUserWithUserIdOnly = await prisma.organizationUser.findMany({ select: { userId: true } })
     *
     */
    findMany<T extends OrganizationUserFindManyArgs>(
      args?: SelectSubset<T, OrganizationUserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationUserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a OrganizationUser.
     * @param {OrganizationUserCreateArgs} args - Arguments to create a OrganizationUser.
     * @example
     * // Create one OrganizationUser
     * const OrganizationUser = await prisma.organizationUser.create({
     *   data: {
     *     // ... data to create a OrganizationUser
     *   }
     * })
     *
     */
    create<T extends OrganizationUserCreateArgs>(
      args: SelectSubset<T, OrganizationUserCreateArgs<ExtArgs>>,
    ): Prisma__OrganizationUserClient<
      $Result.GetResult<
        Prisma.$OrganizationUserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many OrganizationUsers.
     * @param {OrganizationUserCreateManyArgs} args - Arguments to create many OrganizationUsers.
     * @example
     * // Create many OrganizationUsers
     * const organizationUser = await prisma.organizationUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrganizationUserCreateManyArgs>(
      args?: SelectSubset<T, OrganizationUserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many OrganizationUsers and returns the data saved in the database.
     * @param {OrganizationUserCreateManyAndReturnArgs} args - Arguments to create many OrganizationUsers.
     * @example
     * // Create many OrganizationUsers
     * const organizationUser = await prisma.organizationUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many OrganizationUsers and only return the `userId`
     * const organizationUserWithUserIdOnly = await prisma.organizationUser.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OrganizationUserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, OrganizationUserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationUserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a OrganizationUser.
     * @param {OrganizationUserDeleteArgs} args - Arguments to delete one OrganizationUser.
     * @example
     * // Delete one OrganizationUser
     * const OrganizationUser = await prisma.organizationUser.delete({
     *   where: {
     *     // ... filter to delete one OrganizationUser
     *   }
     * })
     *
     */
    delete<T extends OrganizationUserDeleteArgs>(
      args: SelectSubset<T, OrganizationUserDeleteArgs<ExtArgs>>,
    ): Prisma__OrganizationUserClient<
      $Result.GetResult<
        Prisma.$OrganizationUserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one OrganizationUser.
     * @param {OrganizationUserUpdateArgs} args - Arguments to update one OrganizationUser.
     * @example
     * // Update one OrganizationUser
     * const organizationUser = await prisma.organizationUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrganizationUserUpdateArgs>(
      args: SelectSubset<T, OrganizationUserUpdateArgs<ExtArgs>>,
    ): Prisma__OrganizationUserClient<
      $Result.GetResult<
        Prisma.$OrganizationUserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more OrganizationUsers.
     * @param {OrganizationUserDeleteManyArgs} args - Arguments to filter OrganizationUsers to delete.
     * @example
     * // Delete a few OrganizationUsers
     * const { count } = await prisma.organizationUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrganizationUserDeleteManyArgs>(
      args?: SelectSubset<T, OrganizationUserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OrganizationUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationUsers
     * const organizationUser = await prisma.organizationUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrganizationUserUpdateManyArgs>(
      args: SelectSubset<T, OrganizationUserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OrganizationUsers and returns the data updated in the database.
     * @param {OrganizationUserUpdateManyAndReturnArgs} args - Arguments to update many OrganizationUsers.
     * @example
     * // Update many OrganizationUsers
     * const organizationUser = await prisma.organizationUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more OrganizationUsers and only return the `userId`
     * const organizationUserWithUserIdOnly = await prisma.organizationUser.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends OrganizationUserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, OrganizationUserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrganizationUserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one OrganizationUser.
     * @param {OrganizationUserUpsertArgs} args - Arguments to update or create a OrganizationUser.
     * @example
     * // Update or create a OrganizationUser
     * const organizationUser = await prisma.organizationUser.upsert({
     *   create: {
     *     // ... data to create a OrganizationUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationUser we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUserUpsertArgs>(
      args: SelectSubset<T, OrganizationUserUpsertArgs<ExtArgs>>,
    ): Prisma__OrganizationUserClient<
      $Result.GetResult<
        Prisma.$OrganizationUserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of OrganizationUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUserCountArgs} args - Arguments to filter OrganizationUsers to count.
     * @example
     * // Count the number of OrganizationUsers
     * const count = await prisma.organizationUser.count({
     *   where: {
     *     // ... the filter for the OrganizationUsers we want to count
     *   }
     * })
     **/
    count<T extends OrganizationUserCountArgs>(
      args?: Subset<T, OrganizationUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationUserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a OrganizationUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationUserAggregateArgs>(
      args: Subset<T, OrganizationUserAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationUserAggregateType<T>>;

    /**
     * Group by OrganizationUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUserGroupByArgs} args - Group by arguments.
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
      T extends OrganizationUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationUserGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OrganizationUserGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOrganizationUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OrganizationUser model
     */
    readonly fields: OrganizationUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationUserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      | $Result.GetResult<
          Prisma.$OrganizationPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the OrganizationUser model
   */
  interface OrganizationUserFieldRefs {
    readonly userId: FieldRef<'OrganizationUser', 'String'>;
    readonly organizationId: FieldRef<'OrganizationUser', 'String'>;
    readonly role: FieldRef<'OrganizationUser', 'OrganizationRole'>;
    readonly archived: FieldRef<'OrganizationUser', 'Boolean'>;
  }

  // Custom InputTypes
  /**
   * OrganizationUser findUnique
   */
  export type OrganizationUserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationUser
     */
    select?: OrganizationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrganizationUser
     */
    omit?: OrganizationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationUserInclude<ExtArgs> | null;
    /**
     * Filter, which OrganizationUser to fetch.
     */
    where: OrganizationUserWhereUniqueInput;
  };

  /**
   * OrganizationUser findUniqueOrThrow
   */
  export type OrganizationUserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationUser
     */
    select?: OrganizationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrganizationUser
     */
    omit?: OrganizationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationUserInclude<ExtArgs> | null;
    /**
     * Filter, which OrganizationUser to fetch.
     */
    where: OrganizationUserWhereUniqueInput;
  };

  /**
   * OrganizationUser findFirst
   */
  export type OrganizationUserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationUser
     */
    select?: OrganizationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrganizationUser
     */
    omit?: OrganizationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationUserInclude<ExtArgs> | null;
    /**
     * Filter, which OrganizationUser to fetch.
     */
    where?: OrganizationUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrganizationUsers to fetch.
     */
    orderBy?:
      | OrganizationUserOrderByWithRelationInput
      | OrganizationUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrganizationUsers.
     */
    cursor?: OrganizationUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrganizationUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrganizationUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrganizationUsers.
     */
    distinct?:
      | OrganizationUserScalarFieldEnum
      | OrganizationUserScalarFieldEnum[];
  };

  /**
   * OrganizationUser findFirstOrThrow
   */
  export type OrganizationUserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationUser
     */
    select?: OrganizationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrganizationUser
     */
    omit?: OrganizationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationUserInclude<ExtArgs> | null;
    /**
     * Filter, which OrganizationUser to fetch.
     */
    where?: OrganizationUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrganizationUsers to fetch.
     */
    orderBy?:
      | OrganizationUserOrderByWithRelationInput
      | OrganizationUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrganizationUsers.
     */
    cursor?: OrganizationUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrganizationUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrganizationUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrganizationUsers.
     */
    distinct?:
      | OrganizationUserScalarFieldEnum
      | OrganizationUserScalarFieldEnum[];
  };

  /**
   * OrganizationUser findMany
   */
  export type OrganizationUserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationUser
     */
    select?: OrganizationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrganizationUser
     */
    omit?: OrganizationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationUserInclude<ExtArgs> | null;
    /**
     * Filter, which OrganizationUsers to fetch.
     */
    where?: OrganizationUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrganizationUsers to fetch.
     */
    orderBy?:
      | OrganizationUserOrderByWithRelationInput
      | OrganizationUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OrganizationUsers.
     */
    cursor?: OrganizationUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrganizationUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrganizationUsers.
     */
    skip?: number;
    distinct?:
      | OrganizationUserScalarFieldEnum
      | OrganizationUserScalarFieldEnum[];
  };

  /**
   * OrganizationUser create
   */
  export type OrganizationUserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationUser
     */
    select?: OrganizationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrganizationUser
     */
    omit?: OrganizationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationUserInclude<ExtArgs> | null;
    /**
     * The data needed to create a OrganizationUser.
     */
    data: XOR<
      OrganizationUserCreateInput,
      OrganizationUserUncheckedCreateInput
    >;
  };

  /**
   * OrganizationUser createMany
   */
  export type OrganizationUserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many OrganizationUsers.
     */
    data: OrganizationUserCreateManyInput | OrganizationUserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * OrganizationUser createManyAndReturn
   */
  export type OrganizationUserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationUser
     */
    select?: OrganizationUserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OrganizationUser
     */
    omit?: OrganizationUserOmit<ExtArgs> | null;
    /**
     * The data used to create many OrganizationUsers.
     */
    data: OrganizationUserCreateManyInput | OrganizationUserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationUserIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * OrganizationUser update
   */
  export type OrganizationUserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationUser
     */
    select?: OrganizationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrganizationUser
     */
    omit?: OrganizationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationUserInclude<ExtArgs> | null;
    /**
     * The data needed to update a OrganizationUser.
     */
    data: XOR<
      OrganizationUserUpdateInput,
      OrganizationUserUncheckedUpdateInput
    >;
    /**
     * Choose, which OrganizationUser to update.
     */
    where: OrganizationUserWhereUniqueInput;
  };

  /**
   * OrganizationUser updateMany
   */
  export type OrganizationUserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update OrganizationUsers.
     */
    data: XOR<
      OrganizationUserUpdateManyMutationInput,
      OrganizationUserUncheckedUpdateManyInput
    >;
    /**
     * Filter which OrganizationUsers to update
     */
    where?: OrganizationUserWhereInput;
    /**
     * Limit how many OrganizationUsers to update.
     */
    limit?: number;
  };

  /**
   * OrganizationUser updateManyAndReturn
   */
  export type OrganizationUserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationUser
     */
    select?: OrganizationUserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OrganizationUser
     */
    omit?: OrganizationUserOmit<ExtArgs> | null;
    /**
     * The data used to update OrganizationUsers.
     */
    data: XOR<
      OrganizationUserUpdateManyMutationInput,
      OrganizationUserUncheckedUpdateManyInput
    >;
    /**
     * Filter which OrganizationUsers to update
     */
    where?: OrganizationUserWhereInput;
    /**
     * Limit how many OrganizationUsers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationUserIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * OrganizationUser upsert
   */
  export type OrganizationUserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationUser
     */
    select?: OrganizationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrganizationUser
     */
    omit?: OrganizationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationUserInclude<ExtArgs> | null;
    /**
     * The filter to search for the OrganizationUser to update in case it exists.
     */
    where: OrganizationUserWhereUniqueInput;
    /**
     * In case the OrganizationUser found by the `where` argument doesn't exist, create a new OrganizationUser with this data.
     */
    create: XOR<
      OrganizationUserCreateInput,
      OrganizationUserUncheckedCreateInput
    >;
    /**
     * In case the OrganizationUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      OrganizationUserUpdateInput,
      OrganizationUserUncheckedUpdateInput
    >;
  };

  /**
   * OrganizationUser delete
   */
  export type OrganizationUserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationUser
     */
    select?: OrganizationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrganizationUser
     */
    omit?: OrganizationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationUserInclude<ExtArgs> | null;
    /**
     * Filter which OrganizationUser to delete.
     */
    where: OrganizationUserWhereUniqueInput;
  };

  /**
   * OrganizationUser deleteMany
   */
  export type OrganizationUserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrganizationUsers to delete
     */
    where?: OrganizationUserWhereInput;
    /**
     * Limit how many OrganizationUsers to delete.
     */
    limit?: number;
  };

  /**
   * OrganizationUser without action
   */
  export type OrganizationUserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationUser
     */
    select?: OrganizationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrganizationUser
     */
    omit?: OrganizationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationUserInclude<ExtArgs> | null;
  };

  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
  };

  export type TaskAvgAggregateOutputType = {
    position: number | null;
  };

  export type TaskSumAggregateOutputType = {
    position: number | null;
  };

  export type TaskMinAggregateOutputType = {
    id: string | null;
    columnId: string | null;
    organizationId: string | null;
    parentTaskId: string | null;
    createdById: string | null;
    name: string | null;
    description: string | null;
    position: number | null;
    dueDate: Date | null;
    priority: $Enums.TaskPriority | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type TaskMaxAggregateOutputType = {
    id: string | null;
    columnId: string | null;
    organizationId: string | null;
    parentTaskId: string | null;
    createdById: string | null;
    name: string | null;
    description: string | null;
    position: number | null;
    dueDate: Date | null;
    priority: $Enums.TaskPriority | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type TaskCountAggregateOutputType = {
    id: number;
    columnId: number;
    organizationId: number;
    parentTaskId: number;
    createdById: number;
    name: number;
    description: number;
    position: number;
    dueDate: number;
    priority: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type TaskAvgAggregateInputType = {
    position?: true;
  };

  export type TaskSumAggregateInputType = {
    position?: true;
  };

  export type TaskMinAggregateInputType = {
    id?: true;
    columnId?: true;
    organizationId?: true;
    parentTaskId?: true;
    createdById?: true;
    name?: true;
    description?: true;
    position?: true;
    dueDate?: true;
    priority?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type TaskMaxAggregateInputType = {
    id?: true;
    columnId?: true;
    organizationId?: true;
    parentTaskId?: true;
    createdById?: true;
    name?: true;
    description?: true;
    position?: true;
    dueDate?: true;
    priority?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type TaskCountAggregateInputType = {
    id?: true;
    columnId?: true;
    organizationId?: true;
    parentTaskId?: true;
    createdById?: true;
    name?: true;
    description?: true;
    position?: true;
    dueDate?: true;
    priority?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type TaskAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tasks
     **/
    _count?: true | TaskCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TaskAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TaskSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TaskMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TaskMaxAggregateInputType;
  };

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
    [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>;
  };

  export type TaskGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TaskWhereInput;
    orderBy?:
      | TaskOrderByWithAggregationInput
      | TaskOrderByWithAggregationInput[];
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum;
    having?: TaskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskCountAggregateInputType | true;
    _avg?: TaskAvgAggregateInputType;
    _sum?: TaskSumAggregateInputType;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
  };

  export type TaskGroupByOutputType = {
    id: string;
    columnId: string;
    organizationId: string;
    parentTaskId: string | null;
    createdById: string;
    name: string;
    description: string | null;
    position: number;
    dueDate: Date | null;
    priority: $Enums.TaskPriority;
    createdAt: Date;
    updatedAt: Date;
    _count: TaskCountAggregateOutputType | null;
    _avg: TaskAvgAggregateOutputType | null;
    _sum: TaskSumAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
  };

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TaskGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
          : GetScalarType<T[P], TaskGroupByOutputType[P]>;
      }
    >
  >;

  export type TaskSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      columnId?: boolean;
      organizationId?: boolean;
      parentTaskId?: boolean;
      createdById?: boolean;
      name?: boolean;
      description?: boolean;
      position?: boolean;
      dueDate?: boolean;
      priority?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      subTasks?: boolean | Task$subTasksArgs<ExtArgs>;
      users?: boolean | Task$usersArgs<ExtArgs>;
      column?: boolean | ColumnDefaultArgs<ExtArgs>;
      parentTask?: boolean | Task$parentTaskArgs<ExtArgs>;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['task']
  >;

  export type TaskSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      columnId?: boolean;
      organizationId?: boolean;
      parentTaskId?: boolean;
      createdById?: boolean;
      name?: boolean;
      description?: boolean;
      position?: boolean;
      dueDate?: boolean;
      priority?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      column?: boolean | ColumnDefaultArgs<ExtArgs>;
      parentTask?: boolean | Task$parentTaskArgs<ExtArgs>;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['task']
  >;

  export type TaskSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      columnId?: boolean;
      organizationId?: boolean;
      parentTaskId?: boolean;
      createdById?: boolean;
      name?: boolean;
      description?: boolean;
      position?: boolean;
      dueDate?: boolean;
      priority?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      column?: boolean | ColumnDefaultArgs<ExtArgs>;
      parentTask?: boolean | Task$parentTaskArgs<ExtArgs>;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['task']
  >;

  export type TaskSelectScalar = {
    id?: boolean;
    columnId?: boolean;
    organizationId?: boolean;
    parentTaskId?: boolean;
    createdById?: boolean;
    name?: boolean;
    description?: boolean;
    position?: boolean;
    dueDate?: boolean;
    priority?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type TaskOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | 'id'
    | 'columnId'
    | 'organizationId'
    | 'parentTaskId'
    | 'createdById'
    | 'name'
    | 'description'
    | 'position'
    | 'dueDate'
    | 'priority'
    | 'createdAt'
    | 'updatedAt',
    ExtArgs['result']['task']
  >;
  export type TaskInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    subTasks?: boolean | Task$subTasksArgs<ExtArgs>;
    users?: boolean | Task$usersArgs<ExtArgs>;
    column?: boolean | ColumnDefaultArgs<ExtArgs>;
    parentTask?: boolean | Task$parentTaskArgs<ExtArgs>;
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type TaskIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    column?: boolean | ColumnDefaultArgs<ExtArgs>;
    parentTask?: boolean | Task$parentTaskArgs<ExtArgs>;
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };
  export type TaskIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    column?: boolean | ColumnDefaultArgs<ExtArgs>;
    parentTask?: boolean | Task$parentTaskArgs<ExtArgs>;
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };

  export type $TaskPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Task';
    objects: {
      subTasks: Prisma.$TaskPayload<ExtArgs>[];
      users: Prisma.$TaskUserPayload<ExtArgs>[];
      column: Prisma.$ColumnPayload<ExtArgs>;
      parentTask: Prisma.$TaskPayload<ExtArgs> | null;
      organization: Prisma.$OrganizationPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        columnId: string;
        organizationId: string;
        parentTaskId: string | null;
        createdById: string;
        name: string;
        description: string | null;
        position: number;
        dueDate: Date | null;
        priority: $Enums.TaskPriority;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs['result']['task']
    >;
    composites: {};
  };

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> =
    $Result.GetResult<Prisma.$TaskPayload, S>;

  type TaskCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskCountAggregateInputType | true;
  };

  export interface TaskDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Task'];
      meta: { name: 'Task' };
    };
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(
      args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>,
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(
      args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>,
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     *
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TaskFindManyArgs>(
      args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     *
     */
    create<T extends TaskCreateArgs>(
      args: SelectSubset<T, TaskCreateArgs<ExtArgs>>,
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TaskCreateManyArgs>(
      args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     *
     */
    delete<T extends TaskDeleteArgs>(
      args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>,
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TaskUpdateArgs>(
      args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>,
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TaskDeleteManyArgs>(
      args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TaskUpdateManyArgs>(
      args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(
      args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>,
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
     **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(
      args: Subset<T, TaskAggregateArgs>,
    ): Prisma.PrismaPromise<GetTaskAggregateType<T>>;

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetTaskGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Task model
     */
    readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    subTasks<T extends Task$subTasksArgs<ExtArgs> = {}>(
      args?: Subset<T, Task$subTasksArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TaskPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    users<T extends Task$usersArgs<ExtArgs> = {}>(
      args?: Subset<T, Task$usersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TaskUserPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    column<T extends ColumnDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ColumnDefaultArgs<ExtArgs>>,
    ): Prisma__ColumnClient<
      | $Result.GetResult<
          Prisma.$ColumnPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    parentTask<T extends Task$parentTaskArgs<ExtArgs> = {}>(
      args?: Subset<T, Task$parentTaskArgs<ExtArgs>>,
    ): Prisma__TaskClient<
      $Result.GetResult<
        Prisma.$TaskPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>,
    ): Prisma__OrganizationClient<
      | $Result.GetResult<
          Prisma.$OrganizationPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<'Task', 'String'>;
    readonly columnId: FieldRef<'Task', 'String'>;
    readonly organizationId: FieldRef<'Task', 'String'>;
    readonly parentTaskId: FieldRef<'Task', 'String'>;
    readonly createdById: FieldRef<'Task', 'String'>;
    readonly name: FieldRef<'Task', 'String'>;
    readonly description: FieldRef<'Task', 'String'>;
    readonly position: FieldRef<'Task', 'Int'>;
    readonly dueDate: FieldRef<'Task', 'DateTime'>;
    readonly priority: FieldRef<'Task', 'TaskPriority'>;
    readonly createdAt: FieldRef<'Task', 'DateTime'>;
    readonly updatedAt: FieldRef<'Task', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput;
  };

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput;
  };

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tasks.
     */
    skip?: number;
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * Task create
   */
  export type TaskCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>;
  };

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Task update
   */
  export type TaskUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>;
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput;
  };

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>;
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput;
    /**
     * Limit how many Tasks to update.
     */
    limit?: number;
  };

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>;
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput;
    /**
     * Limit how many Tasks to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput;
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>;
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>;
  };

  /**
   * Task delete
   */
  export type TaskDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput;
  };

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput;
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number;
  };

  /**
   * Task.subTasks
   */
  export type Task$subTasksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    where?: TaskWhereInput;
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[];
    cursor?: TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * Task.users
   */
  export type Task$usersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TaskUser
     */
    select?: TaskUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskUser
     */
    omit?: TaskUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUserInclude<ExtArgs> | null;
    where?: TaskUserWhereInput;
    orderBy?:
      | TaskUserOrderByWithRelationInput
      | TaskUserOrderByWithRelationInput[];
    cursor?: TaskUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TaskUserScalarFieldEnum | TaskUserScalarFieldEnum[];
  };

  /**
   * Task.parentTask
   */
  export type Task$parentTaskArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
    where?: TaskWhereInput;
  };

  /**
   * Task without action
   */
  export type TaskDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null;
  };

  /**
   * Model TaskUser
   */

  export type AggregateTaskUser = {
    _count: TaskUserCountAggregateOutputType | null;
    _min: TaskUserMinAggregateOutputType | null;
    _max: TaskUserMaxAggregateOutputType | null;
  };

  export type TaskUserMinAggregateOutputType = {
    taskId: string | null;
    userId: string | null;
  };

  export type TaskUserMaxAggregateOutputType = {
    taskId: string | null;
    userId: string | null;
  };

  export type TaskUserCountAggregateOutputType = {
    taskId: number;
    userId: number;
    _all: number;
  };

  export type TaskUserMinAggregateInputType = {
    taskId?: true;
    userId?: true;
  };

  export type TaskUserMaxAggregateInputType = {
    taskId?: true;
    userId?: true;
  };

  export type TaskUserCountAggregateInputType = {
    taskId?: true;
    userId?: true;
    _all?: true;
  };

  export type TaskUserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TaskUser to aggregate.
     */
    where?: TaskUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaskUsers to fetch.
     */
    orderBy?:
      | TaskUserOrderByWithRelationInput
      | TaskUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TaskUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaskUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaskUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned TaskUsers
     **/
    _count?: true | TaskUserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TaskUserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TaskUserMaxAggregateInputType;
  };

  export type GetTaskUserAggregateType<T extends TaskUserAggregateArgs> = {
    [P in keyof T & keyof AggregateTaskUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskUser[P]>
      : GetScalarType<T[P], AggregateTaskUser[P]>;
  };

  export type TaskUserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: TaskUserWhereInput;
    orderBy?:
      | TaskUserOrderByWithAggregationInput
      | TaskUserOrderByWithAggregationInput[];
    by: TaskUserScalarFieldEnum[] | TaskUserScalarFieldEnum;
    having?: TaskUserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskUserCountAggregateInputType | true;
    _min?: TaskUserMinAggregateInputType;
    _max?: TaskUserMaxAggregateInputType;
  };

  export type TaskUserGroupByOutputType = {
    taskId: string;
    userId: string;
    _count: TaskUserCountAggregateOutputType | null;
    _min: TaskUserMinAggregateOutputType | null;
    _max: TaskUserMaxAggregateOutputType | null;
  };

  type GetTaskUserGroupByPayload<T extends TaskUserGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<TaskUserGroupByOutputType, T['by']> & {
          [P in keyof T & keyof TaskUserGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskUserGroupByOutputType[P]>
            : GetScalarType<T[P], TaskUserGroupByOutputType[P]>;
        }
      >
    >;

  export type TaskUserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      taskId?: boolean;
      userId?: boolean;
      task?: boolean | TaskDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['taskUser']
  >;

  export type TaskUserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      taskId?: boolean;
      userId?: boolean;
      task?: boolean | TaskDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['taskUser']
  >;

  export type TaskUserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      taskId?: boolean;
      userId?: boolean;
      task?: boolean | TaskDefaultArgs<ExtArgs>;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['taskUser']
  >;

  export type TaskUserSelectScalar = {
    taskId?: boolean;
    userId?: boolean;
  };

  export type TaskUserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<'taskId' | 'userId', ExtArgs['result']['taskUser']>;
  export type TaskUserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    task?: boolean | TaskDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type TaskUserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    task?: boolean | TaskDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type TaskUserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    task?: boolean | TaskDefaultArgs<ExtArgs>;
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $TaskUserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'TaskUser';
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>;
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        taskId: string;
        userId: string;
      },
      ExtArgs['result']['taskUser']
    >;
    composites: {};
  };

  type TaskUserGetPayload<
    S extends boolean | null | undefined | TaskUserDefaultArgs,
  > = $Result.GetResult<Prisma.$TaskUserPayload, S>;

  type TaskUserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<TaskUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TaskUserCountAggregateInputType | true;
  };

  export interface TaskUserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['TaskUser'];
      meta: { name: 'TaskUser' };
    };
    /**
     * Find zero or one TaskUser that matches the filter.
     * @param {TaskUserFindUniqueArgs} args - Arguments to find a TaskUser
     * @example
     * // Get one TaskUser
     * const taskUser = await prisma.taskUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskUserFindUniqueArgs>(
      args: SelectSubset<T, TaskUserFindUniqueArgs<ExtArgs>>,
    ): Prisma__TaskUserClient<
      $Result.GetResult<
        Prisma.$TaskUserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one TaskUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskUserFindUniqueOrThrowArgs} args - Arguments to find a TaskUser
     * @example
     * // Get one TaskUser
     * const taskUser = await prisma.taskUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskUserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TaskUserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__TaskUserClient<
      $Result.GetResult<
        Prisma.$TaskUserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TaskUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUserFindFirstArgs} args - Arguments to find a TaskUser
     * @example
     * // Get one TaskUser
     * const taskUser = await prisma.taskUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskUserFindFirstArgs>(
      args?: SelectSubset<T, TaskUserFindFirstArgs<ExtArgs>>,
    ): Prisma__TaskUserClient<
      $Result.GetResult<
        Prisma.$TaskUserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first TaskUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUserFindFirstOrThrowArgs} args - Arguments to find a TaskUser
     * @example
     * // Get one TaskUser
     * const taskUser = await prisma.taskUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskUserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TaskUserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__TaskUserClient<
      $Result.GetResult<
        Prisma.$TaskUserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more TaskUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskUsers
     * const taskUsers = await prisma.taskUser.findMany()
     *
     * // Get first 10 TaskUsers
     * const taskUsers = await prisma.taskUser.findMany({ take: 10 })
     *
     * // Only select the `taskId`
     * const taskUserWithTaskIdOnly = await prisma.taskUser.findMany({ select: { taskId: true } })
     *
     */
    findMany<T extends TaskUserFindManyArgs>(
      args?: SelectSubset<T, TaskUserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TaskUserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a TaskUser.
     * @param {TaskUserCreateArgs} args - Arguments to create a TaskUser.
     * @example
     * // Create one TaskUser
     * const TaskUser = await prisma.taskUser.create({
     *   data: {
     *     // ... data to create a TaskUser
     *   }
     * })
     *
     */
    create<T extends TaskUserCreateArgs>(
      args: SelectSubset<T, TaskUserCreateArgs<ExtArgs>>,
    ): Prisma__TaskUserClient<
      $Result.GetResult<
        Prisma.$TaskUserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many TaskUsers.
     * @param {TaskUserCreateManyArgs} args - Arguments to create many TaskUsers.
     * @example
     * // Create many TaskUsers
     * const taskUser = await prisma.taskUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TaskUserCreateManyArgs>(
      args?: SelectSubset<T, TaskUserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many TaskUsers and returns the data saved in the database.
     * @param {TaskUserCreateManyAndReturnArgs} args - Arguments to create many TaskUsers.
     * @example
     * // Create many TaskUsers
     * const taskUser = await prisma.taskUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many TaskUsers and only return the `taskId`
     * const taskUserWithTaskIdOnly = await prisma.taskUser.createManyAndReturn({
     *   select: { taskId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TaskUserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TaskUserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TaskUserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a TaskUser.
     * @param {TaskUserDeleteArgs} args - Arguments to delete one TaskUser.
     * @example
     * // Delete one TaskUser
     * const TaskUser = await prisma.taskUser.delete({
     *   where: {
     *     // ... filter to delete one TaskUser
     *   }
     * })
     *
     */
    delete<T extends TaskUserDeleteArgs>(
      args: SelectSubset<T, TaskUserDeleteArgs<ExtArgs>>,
    ): Prisma__TaskUserClient<
      $Result.GetResult<
        Prisma.$TaskUserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one TaskUser.
     * @param {TaskUserUpdateArgs} args - Arguments to update one TaskUser.
     * @example
     * // Update one TaskUser
     * const taskUser = await prisma.taskUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TaskUserUpdateArgs>(
      args: SelectSubset<T, TaskUserUpdateArgs<ExtArgs>>,
    ): Prisma__TaskUserClient<
      $Result.GetResult<
        Prisma.$TaskUserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more TaskUsers.
     * @param {TaskUserDeleteManyArgs} args - Arguments to filter TaskUsers to delete.
     * @example
     * // Delete a few TaskUsers
     * const { count } = await prisma.taskUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TaskUserDeleteManyArgs>(
      args?: SelectSubset<T, TaskUserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TaskUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskUsers
     * const taskUser = await prisma.taskUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TaskUserUpdateManyArgs>(
      args: SelectSubset<T, TaskUserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more TaskUsers and returns the data updated in the database.
     * @param {TaskUserUpdateManyAndReturnArgs} args - Arguments to update many TaskUsers.
     * @example
     * // Update many TaskUsers
     * const taskUser = await prisma.taskUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more TaskUsers and only return the `taskId`
     * const taskUserWithTaskIdOnly = await prisma.taskUser.updateManyAndReturn({
     *   select: { taskId: true },
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
    updateManyAndReturn<T extends TaskUserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TaskUserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$TaskUserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one TaskUser.
     * @param {TaskUserUpsertArgs} args - Arguments to update or create a TaskUser.
     * @example
     * // Update or create a TaskUser
     * const taskUser = await prisma.taskUser.upsert({
     *   create: {
     *     // ... data to create a TaskUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskUser we want to update
     *   }
     * })
     */
    upsert<T extends TaskUserUpsertArgs>(
      args: SelectSubset<T, TaskUserUpsertArgs<ExtArgs>>,
    ): Prisma__TaskUserClient<
      $Result.GetResult<
        Prisma.$TaskUserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of TaskUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUserCountArgs} args - Arguments to filter TaskUsers to count.
     * @example
     * // Count the number of TaskUsers
     * const count = await prisma.taskUser.count({
     *   where: {
     *     // ... the filter for the TaskUsers we want to count
     *   }
     * })
     **/
    count<T extends TaskUserCountArgs>(
      args?: Subset<T, TaskUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskUserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a TaskUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskUserAggregateArgs>(
      args: Subset<T, TaskUserAggregateArgs>,
    ): Prisma.PrismaPromise<GetTaskUserAggregateType<T>>;

    /**
     * Group by TaskUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUserGroupByArgs} args - Group by arguments.
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
      T extends TaskUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskUserGroupByArgs['orderBy'] }
        : { orderBy?: TaskUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, TaskUserGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetTaskUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the TaskUser model
     */
    readonly fields: TaskUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskUserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, TaskDefaultArgs<ExtArgs>>,
    ): Prisma__TaskClient<
      | $Result.GetResult<
          Prisma.$TaskPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>,
    ): Prisma__UserClient<
      | $Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          'findUniqueOrThrow',
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the TaskUser model
   */
  interface TaskUserFieldRefs {
    readonly taskId: FieldRef<'TaskUser', 'String'>;
    readonly userId: FieldRef<'TaskUser', 'String'>;
  }

  // Custom InputTypes
  /**
   * TaskUser findUnique
   */
  export type TaskUserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TaskUser
     */
    select?: TaskUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskUser
     */
    omit?: TaskUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUserInclude<ExtArgs> | null;
    /**
     * Filter, which TaskUser to fetch.
     */
    where: TaskUserWhereUniqueInput;
  };

  /**
   * TaskUser findUniqueOrThrow
   */
  export type TaskUserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TaskUser
     */
    select?: TaskUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskUser
     */
    omit?: TaskUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUserInclude<ExtArgs> | null;
    /**
     * Filter, which TaskUser to fetch.
     */
    where: TaskUserWhereUniqueInput;
  };

  /**
   * TaskUser findFirst
   */
  export type TaskUserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TaskUser
     */
    select?: TaskUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskUser
     */
    omit?: TaskUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUserInclude<ExtArgs> | null;
    /**
     * Filter, which TaskUser to fetch.
     */
    where?: TaskUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaskUsers to fetch.
     */
    orderBy?:
      | TaskUserOrderByWithRelationInput
      | TaskUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TaskUsers.
     */
    cursor?: TaskUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaskUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaskUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TaskUsers.
     */
    distinct?: TaskUserScalarFieldEnum | TaskUserScalarFieldEnum[];
  };

  /**
   * TaskUser findFirstOrThrow
   */
  export type TaskUserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TaskUser
     */
    select?: TaskUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskUser
     */
    omit?: TaskUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUserInclude<ExtArgs> | null;
    /**
     * Filter, which TaskUser to fetch.
     */
    where?: TaskUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaskUsers to fetch.
     */
    orderBy?:
      | TaskUserOrderByWithRelationInput
      | TaskUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for TaskUsers.
     */
    cursor?: TaskUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaskUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaskUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of TaskUsers.
     */
    distinct?: TaskUserScalarFieldEnum | TaskUserScalarFieldEnum[];
  };

  /**
   * TaskUser findMany
   */
  export type TaskUserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TaskUser
     */
    select?: TaskUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskUser
     */
    omit?: TaskUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUserInclude<ExtArgs> | null;
    /**
     * Filter, which TaskUsers to fetch.
     */
    where?: TaskUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of TaskUsers to fetch.
     */
    orderBy?:
      | TaskUserOrderByWithRelationInput
      | TaskUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing TaskUsers.
     */
    cursor?: TaskUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` TaskUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` TaskUsers.
     */
    skip?: number;
    distinct?: TaskUserScalarFieldEnum | TaskUserScalarFieldEnum[];
  };

  /**
   * TaskUser create
   */
  export type TaskUserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TaskUser
     */
    select?: TaskUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskUser
     */
    omit?: TaskUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUserInclude<ExtArgs> | null;
    /**
     * The data needed to create a TaskUser.
     */
    data: XOR<TaskUserCreateInput, TaskUserUncheckedCreateInput>;
  };

  /**
   * TaskUser createMany
   */
  export type TaskUserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many TaskUsers.
     */
    data: TaskUserCreateManyInput | TaskUserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * TaskUser createManyAndReturn
   */
  export type TaskUserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TaskUser
     */
    select?: TaskUserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskUser
     */
    omit?: TaskUserOmit<ExtArgs> | null;
    /**
     * The data used to create many TaskUsers.
     */
    data: TaskUserCreateManyInput | TaskUserCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUserIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TaskUser update
   */
  export type TaskUserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TaskUser
     */
    select?: TaskUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskUser
     */
    omit?: TaskUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUserInclude<ExtArgs> | null;
    /**
     * The data needed to update a TaskUser.
     */
    data: XOR<TaskUserUpdateInput, TaskUserUncheckedUpdateInput>;
    /**
     * Choose, which TaskUser to update.
     */
    where: TaskUserWhereUniqueInput;
  };

  /**
   * TaskUser updateMany
   */
  export type TaskUserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update TaskUsers.
     */
    data: XOR<
      TaskUserUpdateManyMutationInput,
      TaskUserUncheckedUpdateManyInput
    >;
    /**
     * Filter which TaskUsers to update
     */
    where?: TaskUserWhereInput;
    /**
     * Limit how many TaskUsers to update.
     */
    limit?: number;
  };

  /**
   * TaskUser updateManyAndReturn
   */
  export type TaskUserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TaskUser
     */
    select?: TaskUserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskUser
     */
    omit?: TaskUserOmit<ExtArgs> | null;
    /**
     * The data used to update TaskUsers.
     */
    data: XOR<
      TaskUserUpdateManyMutationInput,
      TaskUserUncheckedUpdateManyInput
    >;
    /**
     * Filter which TaskUsers to update
     */
    where?: TaskUserWhereInput;
    /**
     * Limit how many TaskUsers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUserIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * TaskUser upsert
   */
  export type TaskUserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TaskUser
     */
    select?: TaskUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskUser
     */
    omit?: TaskUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUserInclude<ExtArgs> | null;
    /**
     * The filter to search for the TaskUser to update in case it exists.
     */
    where: TaskUserWhereUniqueInput;
    /**
     * In case the TaskUser found by the `where` argument doesn't exist, create a new TaskUser with this data.
     */
    create: XOR<TaskUserCreateInput, TaskUserUncheckedCreateInput>;
    /**
     * In case the TaskUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUserUpdateInput, TaskUserUncheckedUpdateInput>;
  };

  /**
   * TaskUser delete
   */
  export type TaskUserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TaskUser
     */
    select?: TaskUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskUser
     */
    omit?: TaskUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUserInclude<ExtArgs> | null;
    /**
     * Filter which TaskUser to delete.
     */
    where: TaskUserWhereUniqueInput;
  };

  /**
   * TaskUser deleteMany
   */
  export type TaskUserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which TaskUsers to delete
     */
    where?: TaskUserWhereInput;
    /**
     * Limit how many TaskUsers to delete.
     */
    limit?: number;
  };

  /**
   * TaskUser without action
   */
  export type TaskUserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TaskUser
     */
    select?: TaskUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskUser
     */
    omit?: TaskUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUserInclude<ExtArgs> | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    active: boolean | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    active: boolean | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    active: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    active?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    active?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    active?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    password: string;
    active: boolean;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      active?: boolean;
      boards?: boolean | User$boardsArgs<ExtArgs>;
      organizations?: boolean | User$organizationsArgs<ExtArgs>;
      createdBoards?: boolean | User$createdBoardsArgs<ExtArgs>;
      createdColumns?: boolean | User$createdColumnsArgs<ExtArgs>;
      tasks?: boolean | User$tasksArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      active?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      email?: boolean;
      password?: boolean;
      active?: boolean;
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    active?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'email' | 'password' | 'active',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    boards?: boolean | User$boardsArgs<ExtArgs>;
    organizations?: boolean | User$organizationsArgs<ExtArgs>;
    createdBoards?: boolean | User$createdBoardsArgs<ExtArgs>;
    createdColumns?: boolean | User$createdColumnsArgs<ExtArgs>;
    tasks?: boolean | User$tasksArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $UserPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'User';
    objects: {
      boards: Prisma.$BoardUserPayload<ExtArgs>[];
      organizations: Prisma.$OrganizationUserPayload<ExtArgs>[];
      createdBoards: Prisma.$BoardPayload<ExtArgs>[];
      createdColumns: Prisma.$ColumnPayload<ExtArgs>[];
      tasks: Prisma.$TaskUserPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        email: string;
        password: string;
        active: boolean;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
    $Result.GetResult<Prisma.$UserPayload, S>;

  type UserCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['User'];
      meta: { name: 'User' };
    };
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
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

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
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

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
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>,
    ): Prisma__UserClient<
      $Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

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
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

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
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T['orderBy']>>
      >,
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
                    ];
            }[HavingFields]
          : 'take' extends Keys<T>
            ? 'orderBy' extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Keys<T>
              ? 'orderBy' extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
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
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    boards<T extends User$boardsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$boardsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BoardUserPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    organizations<T extends User$organizationsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$organizationsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrganizationUserPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    createdBoards<T extends User$createdBoardsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$createdBoardsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$BoardPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    createdColumns<T extends User$createdColumnsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$createdColumnsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ColumnPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(
      args?: Subset<T, User$tasksArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$TaskUserPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<'User', 'String'>;
    readonly name: FieldRef<'User', 'String'>;
    readonly email: FieldRef<'User', 'String'>;
    readonly password: FieldRef<'User', 'String'>;
    readonly active: FieldRef<'User', 'Boolean'>;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.boards
   */
  export type User$boardsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the BoardUser
     */
    select?: BoardUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the BoardUser
     */
    omit?: BoardUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardUserInclude<ExtArgs> | null;
    where?: BoardUserWhereInput;
    orderBy?:
      | BoardUserOrderByWithRelationInput
      | BoardUserOrderByWithRelationInput[];
    cursor?: BoardUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BoardUserScalarFieldEnum | BoardUserScalarFieldEnum[];
  };

  /**
   * User.organizations
   */
  export type User$organizationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationUser
     */
    select?: OrganizationUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrganizationUser
     */
    omit?: OrganizationUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationUserInclude<ExtArgs> | null;
    where?: OrganizationUserWhereInput;
    orderBy?:
      | OrganizationUserOrderByWithRelationInput
      | OrganizationUserOrderByWithRelationInput[];
    cursor?: OrganizationUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?:
      | OrganizationUserScalarFieldEnum
      | OrganizationUserScalarFieldEnum[];
  };

  /**
   * User.createdBoards
   */
  export type User$createdBoardsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Board
     */
    select?: BoardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Board
     */
    omit?: BoardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardInclude<ExtArgs> | null;
    where?: BoardWhereInput;
    orderBy?: BoardOrderByWithRelationInput | BoardOrderByWithRelationInput[];
    cursor?: BoardWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BoardScalarFieldEnum | BoardScalarFieldEnum[];
  };

  /**
   * User.createdColumns
   */
  export type User$createdColumnsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Column
     */
    select?: ColumnSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Column
     */
    omit?: ColumnOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColumnInclude<ExtArgs> | null;
    where?: ColumnWhereInput;
    orderBy?: ColumnOrderByWithRelationInput | ColumnOrderByWithRelationInput[];
    cursor?: ColumnWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ColumnScalarFieldEnum | ColumnScalarFieldEnum[];
  };

  /**
   * User.tasks
   */
  export type User$tasksArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the TaskUser
     */
    select?: TaskUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the TaskUser
     */
    omit?: TaskUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskUserInclude<ExtArgs> | null;
    where?: TaskUserWhereInput;
    orderBy?:
      | TaskUserOrderByWithRelationInput
      | TaskUserOrderByWithRelationInput[];
    cursor?: TaskUserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TaskUserScalarFieldEnum | TaskUserScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const BoardScalarFieldEnum: {
    id: 'id';
    organizationId: 'organizationId';
    createdById: 'createdById';
    name: 'name';
    imagePath: 'imagePath';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type BoardScalarFieldEnum =
    (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum];

  export const BoardUserScalarFieldEnum: {
    boardId: 'boardId';
    userId: 'userId';
    role: 'role';
  };

  export type BoardUserScalarFieldEnum =
    (typeof BoardUserScalarFieldEnum)[keyof typeof BoardUserScalarFieldEnum];

  export const ColumnScalarFieldEnum: {
    id: 'id';
    boardId: 'boardId';
    createdById: 'createdById';
    name: 'name';
    position: 'position';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type ColumnScalarFieldEnum =
    (typeof ColumnScalarFieldEnum)[keyof typeof ColumnScalarFieldEnum];

  export const InvitationScalarFieldEnum: {
    id: 'id';
    organizationId: 'organizationId';
    email: 'email';
    role: 'role';
    status: 'status';
    expiresAt: 'expiresAt';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type InvitationScalarFieldEnum =
    (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    name: 'name';
    imagePath: 'imagePath';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const OrganizationUserScalarFieldEnum: {
    userId: 'userId';
    organizationId: 'organizationId';
    role: 'role';
    archived: 'archived';
  };

  export type OrganizationUserScalarFieldEnum =
    (typeof OrganizationUserScalarFieldEnum)[keyof typeof OrganizationUserScalarFieldEnum];

  export const TaskScalarFieldEnum: {
    id: 'id';
    columnId: 'columnId';
    organizationId: 'organizationId';
    parentTaskId: 'parentTaskId';
    createdById: 'createdById';
    name: 'name';
    description: 'description';
    position: 'position';
    dueDate: 'dueDate';
    priority: 'priority';
    createdAt: 'createdAt';
    updatedAt: 'updatedAt';
  };

  export type TaskScalarFieldEnum =
    (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum];

  export const TaskUserScalarFieldEnum: {
    taskId: 'taskId';
    userId: 'userId';
  };

  export type TaskUserScalarFieldEnum =
    (typeof TaskUserScalarFieldEnum)[keyof typeof TaskUserScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    name: 'name';
    email: 'email';
    password: 'password';
    active: 'active';
  };

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String'
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'String[]'
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime'
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'DateTime[]'
  >;

  /**
   * Reference to a field of type 'BoardRole'
   */
  export type EnumBoardRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'BoardRole'
  >;

  /**
   * Reference to a field of type 'BoardRole[]'
   */
  export type ListEnumBoardRoleFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'BoardRole[]'
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int'
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Int[]'
  >;

  /**
   * Reference to a field of type 'OrganizationRole'
   */
  export type EnumOrganizationRoleFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'OrganizationRole'>;

  /**
   * Reference to a field of type 'OrganizationRole[]'
   */
  export type ListEnumOrganizationRoleFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'OrganizationRole[]'>;

  /**
   * Reference to a field of type 'InvitationStatus'
   */
  export type EnumInvitationStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'InvitationStatus'>;

  /**
   * Reference to a field of type 'InvitationStatus[]'
   */
  export type ListEnumInvitationStatusFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'InvitationStatus[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Boolean'
  >;

  /**
   * Reference to a field of type 'TaskPriority'
   */
  export type EnumTaskPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'TaskPriority'
  >;

  /**
   * Reference to a field of type 'TaskPriority[]'
   */
  export type ListEnumTaskPriorityFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, 'TaskPriority[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float'
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    'Float[]'
  >;

  /**
   * Deep Input Types
   */

  export type BoardWhereInput = {
    AND?: BoardWhereInput | BoardWhereInput[];
    OR?: BoardWhereInput[];
    NOT?: BoardWhereInput | BoardWhereInput[];
    id?: UuidFilter<'Board'> | string;
    organizationId?: UuidFilter<'Board'> | string;
    createdById?: UuidFilter<'Board'> | string;
    name?: StringFilter<'Board'> | string;
    imagePath?: StringNullableFilter<'Board'> | string | null;
    createdAt?: DateTimeFilter<'Board'> | Date | string;
    updatedAt?: DateTimeFilter<'Board'> | Date | string;
    users?: BoardUserListRelationFilter;
    columns?: ColumnListRelationFilter;
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>;
    organization?: XOR<
      OrganizationScalarRelationFilter,
      OrganizationWhereInput
    >;
  };

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    createdById?: SortOrder;
    name?: SortOrder;
    imagePath?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    users?: BoardUserOrderByRelationAggregateInput;
    columns?: ColumnOrderByRelationAggregateInput;
    createdBy?: UserOrderByWithRelationInput;
    organization?: OrganizationOrderByWithRelationInput;
  };

  export type BoardWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: BoardWhereInput | BoardWhereInput[];
      OR?: BoardWhereInput[];
      NOT?: BoardWhereInput | BoardWhereInput[];
      organizationId?: UuidFilter<'Board'> | string;
      createdById?: UuidFilter<'Board'> | string;
      name?: StringFilter<'Board'> | string;
      imagePath?: StringNullableFilter<'Board'> | string | null;
      createdAt?: DateTimeFilter<'Board'> | Date | string;
      updatedAt?: DateTimeFilter<'Board'> | Date | string;
      users?: BoardUserListRelationFilter;
      columns?: ColumnListRelationFilter;
      createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>;
      organization?: XOR<
        OrganizationScalarRelationFilter,
        OrganizationWhereInput
      >;
    },
    'id'
  >;

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    createdById?: SortOrder;
    name?: SortOrder;
    imagePath?: SortOrderInput | SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: BoardCountOrderByAggregateInput;
    _max?: BoardMaxOrderByAggregateInput;
    _min?: BoardMinOrderByAggregateInput;
  };

  export type BoardScalarWhereWithAggregatesInput = {
    AND?:
      | BoardScalarWhereWithAggregatesInput
      | BoardScalarWhereWithAggregatesInput[];
    OR?: BoardScalarWhereWithAggregatesInput[];
    NOT?:
      | BoardScalarWhereWithAggregatesInput
      | BoardScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Board'> | string;
    organizationId?: UuidWithAggregatesFilter<'Board'> | string;
    createdById?: UuidWithAggregatesFilter<'Board'> | string;
    name?: StringWithAggregatesFilter<'Board'> | string;
    imagePath?: StringNullableWithAggregatesFilter<'Board'> | string | null;
    createdAt?: DateTimeWithAggregatesFilter<'Board'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Board'> | Date | string;
  };

  export type BoardUserWhereInput = {
    AND?: BoardUserWhereInput | BoardUserWhereInput[];
    OR?: BoardUserWhereInput[];
    NOT?: BoardUserWhereInput | BoardUserWhereInput[];
    boardId?: UuidFilter<'BoardUser'> | string;
    userId?: UuidFilter<'BoardUser'> | string;
    role?: EnumBoardRoleFilter<'BoardUser'> | $Enums.BoardRole;
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type BoardUserOrderByWithRelationInput = {
    boardId?: SortOrder;
    userId?: SortOrder;
    role?: SortOrder;
    board?: BoardOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type BoardUserWhereUniqueInput = Prisma.AtLeast<
    {
      boardId_userId?: BoardUserBoardIdUserIdCompoundUniqueInput;
      AND?: BoardUserWhereInput | BoardUserWhereInput[];
      OR?: BoardUserWhereInput[];
      NOT?: BoardUserWhereInput | BoardUserWhereInput[];
      boardId?: UuidFilter<'BoardUser'> | string;
      userId?: UuidFilter<'BoardUser'> | string;
      role?: EnumBoardRoleFilter<'BoardUser'> | $Enums.BoardRole;
      board?: XOR<BoardScalarRelationFilter, BoardWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'boardId_userId'
  >;

  export type BoardUserOrderByWithAggregationInput = {
    boardId?: SortOrder;
    userId?: SortOrder;
    role?: SortOrder;
    _count?: BoardUserCountOrderByAggregateInput;
    _max?: BoardUserMaxOrderByAggregateInput;
    _min?: BoardUserMinOrderByAggregateInput;
  };

  export type BoardUserScalarWhereWithAggregatesInput = {
    AND?:
      | BoardUserScalarWhereWithAggregatesInput
      | BoardUserScalarWhereWithAggregatesInput[];
    OR?: BoardUserScalarWhereWithAggregatesInput[];
    NOT?:
      | BoardUserScalarWhereWithAggregatesInput
      | BoardUserScalarWhereWithAggregatesInput[];
    boardId?: UuidWithAggregatesFilter<'BoardUser'> | string;
    userId?: UuidWithAggregatesFilter<'BoardUser'> | string;
    role?: EnumBoardRoleWithAggregatesFilter<'BoardUser'> | $Enums.BoardRole;
  };

  export type ColumnWhereInput = {
    AND?: ColumnWhereInput | ColumnWhereInput[];
    OR?: ColumnWhereInput[];
    NOT?: ColumnWhereInput | ColumnWhereInput[];
    id?: UuidFilter<'Column'> | string;
    boardId?: UuidFilter<'Column'> | string;
    createdById?: UuidFilter<'Column'> | string;
    name?: StringFilter<'Column'> | string;
    position?: IntFilter<'Column'> | number;
    createdAt?: DateTimeFilter<'Column'> | Date | string;
    updatedAt?: DateTimeFilter<'Column'> | Date | string;
    tasks?: TaskListRelationFilter;
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>;
    board?: XOR<BoardScalarRelationFilter, BoardWhereInput>;
  };

  export type ColumnOrderByWithRelationInput = {
    id?: SortOrder;
    boardId?: SortOrder;
    createdById?: SortOrder;
    name?: SortOrder;
    position?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    tasks?: TaskOrderByRelationAggregateInput;
    createdBy?: UserOrderByWithRelationInput;
    board?: BoardOrderByWithRelationInput;
  };

  export type ColumnWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ColumnWhereInput | ColumnWhereInput[];
      OR?: ColumnWhereInput[];
      NOT?: ColumnWhereInput | ColumnWhereInput[];
      boardId?: UuidFilter<'Column'> | string;
      createdById?: UuidFilter<'Column'> | string;
      name?: StringFilter<'Column'> | string;
      position?: IntFilter<'Column'> | number;
      createdAt?: DateTimeFilter<'Column'> | Date | string;
      updatedAt?: DateTimeFilter<'Column'> | Date | string;
      tasks?: TaskListRelationFilter;
      createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>;
      board?: XOR<BoardScalarRelationFilter, BoardWhereInput>;
    },
    'id'
  >;

  export type ColumnOrderByWithAggregationInput = {
    id?: SortOrder;
    boardId?: SortOrder;
    createdById?: SortOrder;
    name?: SortOrder;
    position?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ColumnCountOrderByAggregateInput;
    _avg?: ColumnAvgOrderByAggregateInput;
    _max?: ColumnMaxOrderByAggregateInput;
    _min?: ColumnMinOrderByAggregateInput;
    _sum?: ColumnSumOrderByAggregateInput;
  };

  export type ColumnScalarWhereWithAggregatesInput = {
    AND?:
      | ColumnScalarWhereWithAggregatesInput
      | ColumnScalarWhereWithAggregatesInput[];
    OR?: ColumnScalarWhereWithAggregatesInput[];
    NOT?:
      | ColumnScalarWhereWithAggregatesInput
      | ColumnScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Column'> | string;
    boardId?: UuidWithAggregatesFilter<'Column'> | string;
    createdById?: UuidWithAggregatesFilter<'Column'> | string;
    name?: StringWithAggregatesFilter<'Column'> | string;
    position?: IntWithAggregatesFilter<'Column'> | number;
    createdAt?: DateTimeWithAggregatesFilter<'Column'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Column'> | Date | string;
  };

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[];
    OR?: InvitationWhereInput[];
    NOT?: InvitationWhereInput | InvitationWhereInput[];
    id?: UuidFilter<'Invitation'> | string;
    organizationId?: UuidFilter<'Invitation'> | string;
    email?: StringFilter<'Invitation'> | string;
    role?: EnumOrganizationRoleFilter<'Invitation'> | $Enums.OrganizationRole;
    status?: EnumInvitationStatusFilter<'Invitation'> | $Enums.InvitationStatus;
    expiresAt?: DateTimeFilter<'Invitation'> | Date | string;
    createdAt?: DateTimeFilter<'Invitation'> | Date | string;
    updatedAt?: DateTimeFilter<'Invitation'> | Date | string;
    organization?: XOR<
      OrganizationScalarRelationFilter,
      OrganizationWhereInput
    >;
  };

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    email?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    organization?: OrganizationOrderByWithRelationInput;
  };

  export type InvitationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: InvitationWhereInput | InvitationWhereInput[];
      OR?: InvitationWhereInput[];
      NOT?: InvitationWhereInput | InvitationWhereInput[];
      organizationId?: UuidFilter<'Invitation'> | string;
      email?: StringFilter<'Invitation'> | string;
      role?: EnumOrganizationRoleFilter<'Invitation'> | $Enums.OrganizationRole;
      status?:
        | EnumInvitationStatusFilter<'Invitation'>
        | $Enums.InvitationStatus;
      expiresAt?: DateTimeFilter<'Invitation'> | Date | string;
      createdAt?: DateTimeFilter<'Invitation'> | Date | string;
      updatedAt?: DateTimeFilter<'Invitation'> | Date | string;
      organization?: XOR<
        OrganizationScalarRelationFilter,
        OrganizationWhereInput
      >;
    },
    'id'
  >;

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    email?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: InvitationCountOrderByAggregateInput;
    _max?: InvitationMaxOrderByAggregateInput;
    _min?: InvitationMinOrderByAggregateInput;
  };

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?:
      | InvitationScalarWhereWithAggregatesInput
      | InvitationScalarWhereWithAggregatesInput[];
    OR?: InvitationScalarWhereWithAggregatesInput[];
    NOT?:
      | InvitationScalarWhereWithAggregatesInput
      | InvitationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Invitation'> | string;
    organizationId?: UuidWithAggregatesFilter<'Invitation'> | string;
    email?: StringWithAggregatesFilter<'Invitation'> | string;
    role?:
      | EnumOrganizationRoleWithAggregatesFilter<'Invitation'>
      | $Enums.OrganizationRole;
    status?:
      | EnumInvitationStatusWithAggregatesFilter<'Invitation'>
      | $Enums.InvitationStatus;
    expiresAt?: DateTimeWithAggregatesFilter<'Invitation'> | Date | string;
    createdAt?: DateTimeWithAggregatesFilter<'Invitation'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Invitation'> | Date | string;
  };

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[];
    OR?: OrganizationWhereInput[];
    NOT?: OrganizationWhereInput | OrganizationWhereInput[];
    id?: UuidFilter<'Organization'> | string;
    name?: StringFilter<'Organization'> | string;
    imagePath?: StringNullableFilter<'Organization'> | string | null;
    users?: OrganizationUserListRelationFilter;
    boards?: BoardListRelationFilter;
    tasks?: TaskListRelationFilter;
    invitations?: InvitationListRelationFilter;
  };

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    imagePath?: SortOrderInput | SortOrder;
    users?: OrganizationUserOrderByRelationAggregateInput;
    boards?: BoardOrderByRelationAggregateInput;
    tasks?: TaskOrderByRelationAggregateInput;
    invitations?: InvitationOrderByRelationAggregateInput;
  };

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: OrganizationWhereInput | OrganizationWhereInput[];
      OR?: OrganizationWhereInput[];
      NOT?: OrganizationWhereInput | OrganizationWhereInput[];
      name?: StringFilter<'Organization'> | string;
      imagePath?: StringNullableFilter<'Organization'> | string | null;
      users?: OrganizationUserListRelationFilter;
      boards?: BoardListRelationFilter;
      tasks?: TaskListRelationFilter;
      invitations?: InvitationListRelationFilter;
    },
    'id'
  >;

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    imagePath?: SortOrderInput | SortOrder;
    _count?: OrganizationCountOrderByAggregateInput;
    _max?: OrganizationMaxOrderByAggregateInput;
    _min?: OrganizationMinOrderByAggregateInput;
  };

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?:
      | OrganizationScalarWhereWithAggregatesInput
      | OrganizationScalarWhereWithAggregatesInput[];
    OR?: OrganizationScalarWhereWithAggregatesInput[];
    NOT?:
      | OrganizationScalarWhereWithAggregatesInput
      | OrganizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Organization'> | string;
    name?: StringWithAggregatesFilter<'Organization'> | string;
    imagePath?:
      | StringNullableWithAggregatesFilter<'Organization'>
      | string
      | null;
  };

  export type OrganizationUserWhereInput = {
    AND?: OrganizationUserWhereInput | OrganizationUserWhereInput[];
    OR?: OrganizationUserWhereInput[];
    NOT?: OrganizationUserWhereInput | OrganizationUserWhereInput[];
    userId?: UuidFilter<'OrganizationUser'> | string;
    organizationId?: UuidFilter<'OrganizationUser'> | string;
    role?:
      | EnumOrganizationRoleFilter<'OrganizationUser'>
      | $Enums.OrganizationRole;
    archived?: BoolFilter<'OrganizationUser'> | boolean;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    organization?: XOR<
      OrganizationScalarRelationFilter,
      OrganizationWhereInput
    >;
  };

  export type OrganizationUserOrderByWithRelationInput = {
    userId?: SortOrder;
    organizationId?: SortOrder;
    role?: SortOrder;
    archived?: SortOrder;
    user?: UserOrderByWithRelationInput;
    organization?: OrganizationOrderByWithRelationInput;
  };

  export type OrganizationUserWhereUniqueInput = Prisma.AtLeast<
    {
      userId_organizationId?: OrganizationUserUserIdOrganizationIdCompoundUniqueInput;
      AND?: OrganizationUserWhereInput | OrganizationUserWhereInput[];
      OR?: OrganizationUserWhereInput[];
      NOT?: OrganizationUserWhereInput | OrganizationUserWhereInput[];
      userId?: UuidFilter<'OrganizationUser'> | string;
      organizationId?: UuidFilter<'OrganizationUser'> | string;
      role?:
        | EnumOrganizationRoleFilter<'OrganizationUser'>
        | $Enums.OrganizationRole;
      archived?: BoolFilter<'OrganizationUser'> | boolean;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
      organization?: XOR<
        OrganizationScalarRelationFilter,
        OrganizationWhereInput
      >;
    },
    'userId_organizationId'
  >;

  export type OrganizationUserOrderByWithAggregationInput = {
    userId?: SortOrder;
    organizationId?: SortOrder;
    role?: SortOrder;
    archived?: SortOrder;
    _count?: OrganizationUserCountOrderByAggregateInput;
    _max?: OrganizationUserMaxOrderByAggregateInput;
    _min?: OrganizationUserMinOrderByAggregateInput;
  };

  export type OrganizationUserScalarWhereWithAggregatesInput = {
    AND?:
      | OrganizationUserScalarWhereWithAggregatesInput
      | OrganizationUserScalarWhereWithAggregatesInput[];
    OR?: OrganizationUserScalarWhereWithAggregatesInput[];
    NOT?:
      | OrganizationUserScalarWhereWithAggregatesInput
      | OrganizationUserScalarWhereWithAggregatesInput[];
    userId?: UuidWithAggregatesFilter<'OrganizationUser'> | string;
    organizationId?: UuidWithAggregatesFilter<'OrganizationUser'> | string;
    role?:
      | EnumOrganizationRoleWithAggregatesFilter<'OrganizationUser'>
      | $Enums.OrganizationRole;
    archived?: BoolWithAggregatesFilter<'OrganizationUser'> | boolean;
  };

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[];
    OR?: TaskWhereInput[];
    NOT?: TaskWhereInput | TaskWhereInput[];
    id?: UuidFilter<'Task'> | string;
    columnId?: UuidFilter<'Task'> | string;
    organizationId?: UuidFilter<'Task'> | string;
    parentTaskId?: UuidNullableFilter<'Task'> | string | null;
    createdById?: UuidFilter<'Task'> | string;
    name?: StringFilter<'Task'> | string;
    description?: StringNullableFilter<'Task'> | string | null;
    position?: IntFilter<'Task'> | number;
    dueDate?: DateTimeNullableFilter<'Task'> | Date | string | null;
    priority?: EnumTaskPriorityFilter<'Task'> | $Enums.TaskPriority;
    createdAt?: DateTimeFilter<'Task'> | Date | string;
    updatedAt?: DateTimeFilter<'Task'> | Date | string;
    subTasks?: TaskListRelationFilter;
    users?: TaskUserListRelationFilter;
    column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>;
    parentTask?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null;
    organization?: XOR<
      OrganizationScalarRelationFilter,
      OrganizationWhereInput
    >;
  };

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder;
    columnId?: SortOrder;
    organizationId?: SortOrder;
    parentTaskId?: SortOrderInput | SortOrder;
    createdById?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    position?: SortOrder;
    dueDate?: SortOrderInput | SortOrder;
    priority?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    subTasks?: TaskOrderByRelationAggregateInput;
    users?: TaskUserOrderByRelationAggregateInput;
    column?: ColumnOrderByWithRelationInput;
    parentTask?: TaskOrderByWithRelationInput;
    organization?: OrganizationOrderByWithRelationInput;
  };

  export type TaskWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: TaskWhereInput | TaskWhereInput[];
      OR?: TaskWhereInput[];
      NOT?: TaskWhereInput | TaskWhereInput[];
      columnId?: UuidFilter<'Task'> | string;
      organizationId?: UuidFilter<'Task'> | string;
      parentTaskId?: UuidNullableFilter<'Task'> | string | null;
      createdById?: UuidFilter<'Task'> | string;
      name?: StringFilter<'Task'> | string;
      description?: StringNullableFilter<'Task'> | string | null;
      position?: IntFilter<'Task'> | number;
      dueDate?: DateTimeNullableFilter<'Task'> | Date | string | null;
      priority?: EnumTaskPriorityFilter<'Task'> | $Enums.TaskPriority;
      createdAt?: DateTimeFilter<'Task'> | Date | string;
      updatedAt?: DateTimeFilter<'Task'> | Date | string;
      subTasks?: TaskListRelationFilter;
      users?: TaskUserListRelationFilter;
      column?: XOR<ColumnScalarRelationFilter, ColumnWhereInput>;
      parentTask?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null;
      organization?: XOR<
        OrganizationScalarRelationFilter,
        OrganizationWhereInput
      >;
    },
    'id'
  >;

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder;
    columnId?: SortOrder;
    organizationId?: SortOrder;
    parentTaskId?: SortOrderInput | SortOrder;
    createdById?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    position?: SortOrder;
    dueDate?: SortOrderInput | SortOrder;
    priority?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: TaskCountOrderByAggregateInput;
    _avg?: TaskAvgOrderByAggregateInput;
    _max?: TaskMaxOrderByAggregateInput;
    _min?: TaskMinOrderByAggregateInput;
    _sum?: TaskSumOrderByAggregateInput;
  };

  export type TaskScalarWhereWithAggregatesInput = {
    AND?:
      | TaskScalarWhereWithAggregatesInput
      | TaskScalarWhereWithAggregatesInput[];
    OR?: TaskScalarWhereWithAggregatesInput[];
    NOT?:
      | TaskScalarWhereWithAggregatesInput
      | TaskScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Task'> | string;
    columnId?: UuidWithAggregatesFilter<'Task'> | string;
    organizationId?: UuidWithAggregatesFilter<'Task'> | string;
    parentTaskId?: UuidNullableWithAggregatesFilter<'Task'> | string | null;
    createdById?: UuidWithAggregatesFilter<'Task'> | string;
    name?: StringWithAggregatesFilter<'Task'> | string;
    description?: StringNullableWithAggregatesFilter<'Task'> | string | null;
    position?: IntWithAggregatesFilter<'Task'> | number;
    dueDate?:
      | DateTimeNullableWithAggregatesFilter<'Task'>
      | Date
      | string
      | null;
    priority?:
      | EnumTaskPriorityWithAggregatesFilter<'Task'>
      | $Enums.TaskPriority;
    createdAt?: DateTimeWithAggregatesFilter<'Task'> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<'Task'> | Date | string;
  };

  export type TaskUserWhereInput = {
    AND?: TaskUserWhereInput | TaskUserWhereInput[];
    OR?: TaskUserWhereInput[];
    NOT?: TaskUserWhereInput | TaskUserWhereInput[];
    taskId?: UuidFilter<'TaskUser'> | string;
    userId?: UuidFilter<'TaskUser'> | string;
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type TaskUserOrderByWithRelationInput = {
    taskId?: SortOrder;
    userId?: SortOrder;
    task?: TaskOrderByWithRelationInput;
    user?: UserOrderByWithRelationInput;
  };

  export type TaskUserWhereUniqueInput = Prisma.AtLeast<
    {
      taskId_userId?: TaskUserTaskIdUserIdCompoundUniqueInput;
      AND?: TaskUserWhereInput | TaskUserWhereInput[];
      OR?: TaskUserWhereInput[];
      NOT?: TaskUserWhereInput | TaskUserWhereInput[];
      taskId?: UuidFilter<'TaskUser'> | string;
      userId?: UuidFilter<'TaskUser'> | string;
      task?: XOR<TaskScalarRelationFilter, TaskWhereInput>;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    'taskId_userId'
  >;

  export type TaskUserOrderByWithAggregationInput = {
    taskId?: SortOrder;
    userId?: SortOrder;
    _count?: TaskUserCountOrderByAggregateInput;
    _max?: TaskUserMaxOrderByAggregateInput;
    _min?: TaskUserMinOrderByAggregateInput;
  };

  export type TaskUserScalarWhereWithAggregatesInput = {
    AND?:
      | TaskUserScalarWhereWithAggregatesInput
      | TaskUserScalarWhereWithAggregatesInput[];
    OR?: TaskUserScalarWhereWithAggregatesInput[];
    NOT?:
      | TaskUserScalarWhereWithAggregatesInput
      | TaskUserScalarWhereWithAggregatesInput[];
    taskId?: UuidWithAggregatesFilter<'TaskUser'> | string;
    userId?: UuidWithAggregatesFilter<'TaskUser'> | string;
  };

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: UuidFilter<'User'> | string;
    name?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    active?: BoolFilter<'User'> | boolean;
    boards?: BoardUserListRelationFilter;
    organizations?: OrganizationUserListRelationFilter;
    createdBoards?: BoardListRelationFilter;
    createdColumns?: ColumnListRelationFilter;
    tasks?: TaskUserListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    active?: SortOrder;
    boards?: BoardUserOrderByRelationAggregateInput;
    organizations?: OrganizationUserOrderByRelationAggregateInput;
    createdBoards?: BoardOrderByRelationAggregateInput;
    createdColumns?: ColumnOrderByRelationAggregateInput;
    tasks?: TaskUserOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringFilter<'User'> | string;
      password?: StringFilter<'User'> | string;
      active?: BoolFilter<'User'> | boolean;
      boards?: BoardUserListRelationFilter;
      organizations?: OrganizationUserListRelationFilter;
      createdBoards?: BoardListRelationFilter;
      createdColumns?: ColumnListRelationFilter;
      tasks?: TaskUserListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    active?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'User'> | string;
    name?: StringWithAggregatesFilter<'User'> | string;
    email?: StringWithAggregatesFilter<'User'> | string;
    password?: StringWithAggregatesFilter<'User'> | string;
    active?: BoolWithAggregatesFilter<'User'> | boolean;
  };

  export type BoardCreateInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: BoardUserCreateNestedManyWithoutBoardInput;
    columns?: ColumnCreateNestedManyWithoutBoardInput;
    createdBy: UserCreateNestedOneWithoutCreatedBoardsInput;
    organization: OrganizationCreateNestedOneWithoutBoardsInput;
  };

  export type BoardUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    createdById: string;
    name: string;
    imagePath?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: BoardUserUncheckedCreateNestedManyWithoutBoardInput;
    columns?: ColumnUncheckedCreateNestedManyWithoutBoardInput;
  };

  export type BoardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: BoardUserUpdateManyWithoutBoardNestedInput;
    columns?: ColumnUpdateManyWithoutBoardNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutCreatedBoardsNestedInput;
    organization?: OrganizationUpdateOneRequiredWithoutBoardsNestedInput;
  };

  export type BoardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: BoardUserUncheckedUpdateManyWithoutBoardNestedInput;
    columns?: ColumnUncheckedUpdateManyWithoutBoardNestedInput;
  };

  export type BoardCreateManyInput = {
    id?: string;
    organizationId: string;
    createdById: string;
    name: string;
    imagePath?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type BoardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BoardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type BoardUserCreateInput = {
    role?: $Enums.BoardRole;
    board: BoardCreateNestedOneWithoutUsersInput;
    user: UserCreateNestedOneWithoutBoardsInput;
  };

  export type BoardUserUncheckedCreateInput = {
    boardId: string;
    userId: string;
    role?: $Enums.BoardRole;
  };

  export type BoardUserUpdateInput = {
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole;
    board?: BoardUpdateOneRequiredWithoutUsersNestedInput;
    user?: UserUpdateOneRequiredWithoutBoardsNestedInput;
  };

  export type BoardUserUncheckedUpdateInput = {
    boardId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole;
  };

  export type BoardUserCreateManyInput = {
    boardId: string;
    userId: string;
    role?: $Enums.BoardRole;
  };

  export type BoardUserUpdateManyMutationInput = {
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole;
  };

  export type BoardUserUncheckedUpdateManyInput = {
    boardId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole;
  };

  export type ColumnCreateInput = {
    id?: string;
    name: string;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: TaskCreateNestedManyWithoutColumnInput;
    createdBy: UserCreateNestedOneWithoutCreatedColumnsInput;
    board: BoardCreateNestedOneWithoutColumnsInput;
  };

  export type ColumnUncheckedCreateInput = {
    id?: string;
    boardId: string;
    createdById: string;
    name: string;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: TaskUncheckedCreateNestedManyWithoutColumnInput;
  };

  export type ColumnUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    position?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: TaskUpdateManyWithoutColumnNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutCreatedColumnsNestedInput;
    board?: BoardUpdateOneRequiredWithoutColumnsNestedInput;
  };

  export type ColumnUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    boardId?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    position?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: TaskUncheckedUpdateManyWithoutColumnNestedInput;
  };

  export type ColumnCreateManyInput = {
    id?: string;
    boardId: string;
    createdById: string;
    name: string;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ColumnUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    position?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ColumnUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    boardId?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    position?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvitationCreateInput = {
    id?: string;
    email: string;
    role?: $Enums.OrganizationRole;
    status?: $Enums.InvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    organization: OrganizationCreateNestedOneWithoutInvitationsInput;
  };

  export type InvitationUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    email: string;
    role?: $Enums.OrganizationRole;
    status?: $Enums.InvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumInvitationStatusFieldUpdateOperationsInput
      | $Enums.InvitationStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutInvitationsNestedInput;
  };

  export type InvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumInvitationStatusFieldUpdateOperationsInput
      | $Enums.InvitationStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvitationCreateManyInput = {
    id?: string;
    organizationId: string;
    email: string;
    role?: $Enums.OrganizationRole;
    status?: $Enums.InvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumInvitationStatusFieldUpdateOperationsInput
      | $Enums.InvitationStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumInvitationStatusFieldUpdateOperationsInput
      | $Enums.InvitationStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationCreateInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
    users?: OrganizationUserCreateNestedManyWithoutOrganizationInput;
    boards?: BoardCreateNestedManyWithoutOrganizationInput;
    tasks?: TaskCreateNestedManyWithoutOrganizationInput;
    invitations?: InvitationCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
    users?: OrganizationUserUncheckedCreateNestedManyWithoutOrganizationInput;
    boards?: BoardUncheckedCreateNestedManyWithoutOrganizationInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutOrganizationInput;
    invitations?: InvitationUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    users?: OrganizationUserUpdateManyWithoutOrganizationNestedInput;
    boards?: BoardUpdateManyWithoutOrganizationNestedInput;
    tasks?: TaskUpdateManyWithoutOrganizationNestedInput;
    invitations?: InvitationUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    users?: OrganizationUserUncheckedUpdateManyWithoutOrganizationNestedInput;
    boards?: BoardUncheckedUpdateManyWithoutOrganizationNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutOrganizationNestedInput;
    invitations?: InvitationUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationCreateManyInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
  };

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type OrganizationUserCreateInput = {
    role?: $Enums.OrganizationRole;
    archived?: boolean;
    user: UserCreateNestedOneWithoutOrganizationsInput;
    organization: OrganizationCreateNestedOneWithoutUsersInput;
  };

  export type OrganizationUserUncheckedCreateInput = {
    userId: string;
    organizationId: string;
    role?: $Enums.OrganizationRole;
    archived?: boolean;
  };

  export type OrganizationUserUpdateInput = {
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    archived?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutOrganizationsNestedInput;
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput;
  };

  export type OrganizationUserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    archived?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type OrganizationUserCreateManyInput = {
    userId: string;
    organizationId: string;
    role?: $Enums.OrganizationRole;
    archived?: boolean;
  };

  export type OrganizationUserUpdateManyMutationInput = {
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    archived?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type OrganizationUserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    archived?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type TaskCreateInput = {
    id?: string;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subTasks?: TaskCreateNestedManyWithoutParentTaskInput;
    users?: TaskUserCreateNestedManyWithoutTaskInput;
    column: ColumnCreateNestedOneWithoutTasksInput;
    parentTask?: TaskCreateNestedOneWithoutSubTasksInput;
    organization: OrganizationCreateNestedOneWithoutTasksInput;
  };

  export type TaskUncheckedCreateInput = {
    id?: string;
    columnId: string;
    organizationId: string;
    parentTaskId?: string | null;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput;
    users?: TaskUserUncheckedCreateNestedManyWithoutTaskInput;
  };

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subTasks?: TaskUpdateManyWithoutParentTaskNestedInput;
    users?: TaskUserUpdateManyWithoutTaskNestedInput;
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput;
    parentTask?: TaskUpdateOneWithoutSubTasksNestedInput;
    organization?: OrganizationUpdateOneRequiredWithoutTasksNestedInput;
  };

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    columnId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subTasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput;
    users?: TaskUserUncheckedUpdateManyWithoutTaskNestedInput;
  };

  export type TaskCreateManyInput = {
    id?: string;
    columnId: string;
    organizationId: string;
    parentTaskId?: string | null;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    columnId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TaskUserCreateInput = {
    task: TaskCreateNestedOneWithoutUsersInput;
    user: UserCreateNestedOneWithoutTasksInput;
  };

  export type TaskUserUncheckedCreateInput = {
    taskId: string;
    userId: string;
  };

  export type TaskUserUpdateInput = {
    task?: TaskUpdateOneRequiredWithoutUsersNestedInput;
    user?: UserUpdateOneRequiredWithoutTasksNestedInput;
  };

  export type TaskUserUncheckedUpdateInput = {
    taskId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type TaskUserCreateManyInput = {
    taskId: string;
    userId: string;
  };

  export type TaskUserUpdateManyMutationInput = {};

  export type TaskUserUncheckedUpdateManyInput = {
    taskId?: StringFieldUpdateOperationsInput | string;
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    active?: boolean;
    boards?: BoardUserCreateNestedManyWithoutUserInput;
    organizations?: OrganizationUserCreateNestedManyWithoutUserInput;
    createdBoards?: BoardCreateNestedManyWithoutCreatedByInput;
    createdColumns?: ColumnCreateNestedManyWithoutCreatedByInput;
    tasks?: TaskUserCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    active?: boolean;
    boards?: BoardUserUncheckedCreateNestedManyWithoutUserInput;
    organizations?: OrganizationUserUncheckedCreateNestedManyWithoutUserInput;
    createdBoards?: BoardUncheckedCreateNestedManyWithoutCreatedByInput;
    createdColumns?: ColumnUncheckedCreateNestedManyWithoutCreatedByInput;
    tasks?: TaskUserUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    active?: BoolFieldUpdateOperationsInput | boolean;
    boards?: BoardUserUpdateManyWithoutUserNestedInput;
    organizations?: OrganizationUserUpdateManyWithoutUserNestedInput;
    createdBoards?: BoardUpdateManyWithoutCreatedByNestedInput;
    createdColumns?: ColumnUpdateManyWithoutCreatedByNestedInput;
    tasks?: TaskUserUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    active?: BoolFieldUpdateOperationsInput | boolean;
    boards?: BoardUserUncheckedUpdateManyWithoutUserNestedInput;
    organizations?: OrganizationUserUncheckedUpdateManyWithoutUserNestedInput;
    createdBoards?: BoardUncheckedUpdateManyWithoutCreatedByNestedInput;
    createdColumns?: ColumnUncheckedUpdateManyWithoutCreatedByNestedInput;
    tasks?: TaskUserUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    active?: boolean;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    active?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    active?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type BoardUserListRelationFilter = {
    every?: BoardUserWhereInput;
    some?: BoardUserWhereInput;
    none?: BoardUserWhereInput;
  };

  export type ColumnListRelationFilter = {
    every?: ColumnWhereInput;
    some?: ColumnWhereInput;
    none?: ColumnWhereInput;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput;
    isNot?: OrganizationWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type BoardUserOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ColumnOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    createdById?: SortOrder;
    name?: SortOrder;
    imagePath?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    createdById?: SortOrder;
    name?: SortOrder;
    imagePath?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    createdById?: SortOrder;
    name?: SortOrder;
    imagePath?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type EnumBoardRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardRole | EnumBoardRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.BoardRole[] | ListEnumBoardRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BoardRole[] | ListEnumBoardRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumBoardRoleFilter<$PrismaModel> | $Enums.BoardRole;
  };

  export type BoardScalarRelationFilter = {
    is?: BoardWhereInput;
    isNot?: BoardWhereInput;
  };

  export type BoardUserBoardIdUserIdCompoundUniqueInput = {
    boardId: string;
    userId: string;
  };

  export type BoardUserCountOrderByAggregateInput = {
    boardId?: SortOrder;
    userId?: SortOrder;
    role?: SortOrder;
  };

  export type BoardUserMaxOrderByAggregateInput = {
    boardId?: SortOrder;
    userId?: SortOrder;
    role?: SortOrder;
  };

  export type BoardUserMinOrderByAggregateInput = {
    boardId?: SortOrder;
    userId?: SortOrder;
    role?: SortOrder;
  };

  export type EnumBoardRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardRole | EnumBoardRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.BoardRole[] | ListEnumBoardRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BoardRole[] | ListEnumBoardRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumBoardRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.BoardRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumBoardRoleFilter<$PrismaModel>;
    _max?: NestedEnumBoardRoleFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type TaskListRelationFilter = {
    every?: TaskWhereInput;
    some?: TaskWhereInput;
    none?: TaskWhereInput;
  };

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ColumnCountOrderByAggregateInput = {
    id?: SortOrder;
    boardId?: SortOrder;
    createdById?: SortOrder;
    name?: SortOrder;
    position?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ColumnAvgOrderByAggregateInput = {
    position?: SortOrder;
  };

  export type ColumnMaxOrderByAggregateInput = {
    id?: SortOrder;
    boardId?: SortOrder;
    createdById?: SortOrder;
    name?: SortOrder;
    position?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ColumnMinOrderByAggregateInput = {
    id?: SortOrder;
    boardId?: SortOrder;
    createdById?: SortOrder;
    name?: SortOrder;
    position?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ColumnSumOrderByAggregateInput = {
    position?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type EnumOrganizationRoleFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.OrganizationRole
      | EnumOrganizationRoleFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationRoleFilter<$PrismaModel>
      | $Enums.OrganizationRole;
  };

  export type EnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.InvitationStatus
      | EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.InvitationStatus[]
      | ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.InvitationStatus[]
      | ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumInvitationStatusFilter<$PrismaModel>
      | $Enums.InvitationStatus;
  };

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    email?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    email?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    email?: SortOrder;
    role?: SortOrder;
    status?: SortOrder;
    expiresAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type EnumOrganizationRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.OrganizationRole
      | EnumOrganizationRoleFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.OrganizationRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumOrganizationRoleFilter<$PrismaModel>;
    _max?: NestedEnumOrganizationRoleFilter<$PrismaModel>;
  };

  export type EnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.InvitationStatus
      | EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.InvitationStatus[]
      | ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.InvitationStatus[]
      | ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.InvitationStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>;
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>;
  };

  export type OrganizationUserListRelationFilter = {
    every?: OrganizationUserWhereInput;
    some?: OrganizationUserWhereInput;
    none?: OrganizationUserWhereInput;
  };

  export type BoardListRelationFilter = {
    every?: BoardWhereInput;
    some?: BoardWhereInput;
    none?: BoardWhereInput;
  };

  export type InvitationListRelationFilter = {
    every?: InvitationWhereInput;
    some?: InvitationWhereInput;
    none?: InvitationWhereInput;
  };

  export type OrganizationUserOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type BoardOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type InvitationOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    imagePath?: SortOrder;
  };

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    imagePath?: SortOrder;
  };

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    imagePath?: SortOrder;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type OrganizationUserUserIdOrganizationIdCompoundUniqueInput = {
    userId: string;
    organizationId: string;
  };

  export type OrganizationUserCountOrderByAggregateInput = {
    userId?: SortOrder;
    organizationId?: SortOrder;
    role?: SortOrder;
    archived?: SortOrder;
  };

  export type OrganizationUserMaxOrderByAggregateInput = {
    userId?: SortOrder;
    organizationId?: SortOrder;
    role?: SortOrder;
    archived?: SortOrder;
  };

  export type OrganizationUserMinOrderByAggregateInput = {
    userId?: SortOrder;
    organizationId?: SortOrder;
    role?: SortOrder;
    archived?: SortOrder;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type EnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TaskPriority[]
      | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TaskPriority[]
      | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority;
  };

  export type TaskUserListRelationFilter = {
    every?: TaskUserWhereInput;
    some?: TaskUserWhereInput;
    none?: TaskUserWhereInput;
  };

  export type ColumnScalarRelationFilter = {
    is?: ColumnWhereInput;
    isNot?: ColumnWhereInput;
  };

  export type TaskNullableScalarRelationFilter = {
    is?: TaskWhereInput | null;
    isNot?: TaskWhereInput | null;
  };

  export type TaskUserOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder;
    columnId?: SortOrder;
    organizationId?: SortOrder;
    parentTaskId?: SortOrder;
    createdById?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    position?: SortOrder;
    dueDate?: SortOrder;
    priority?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TaskAvgOrderByAggregateInput = {
    position?: SortOrder;
  };

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder;
    columnId?: SortOrder;
    organizationId?: SortOrder;
    parentTaskId?: SortOrder;
    createdById?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    position?: SortOrder;
    dueDate?: SortOrder;
    priority?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder;
    columnId?: SortOrder;
    organizationId?: SortOrder;
    parentTaskId?: SortOrder;
    createdById?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    position?: SortOrder;
    dueDate?: SortOrder;
    priority?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type TaskSumOrderByAggregateInput = {
    position?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?:
      | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
      | Date
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type EnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TaskPriority[]
      | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TaskPriority[]
      | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel>
      | $Enums.TaskPriority;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumTaskPriorityFilter<$PrismaModel>;
    _max?: NestedEnumTaskPriorityFilter<$PrismaModel>;
  };

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput;
    isNot?: TaskWhereInput;
  };

  export type TaskUserTaskIdUserIdCompoundUniqueInput = {
    taskId: string;
    userId: string;
  };

  export type TaskUserCountOrderByAggregateInput = {
    taskId?: SortOrder;
    userId?: SortOrder;
  };

  export type TaskUserMaxOrderByAggregateInput = {
    taskId?: SortOrder;
    userId?: SortOrder;
  };

  export type TaskUserMinOrderByAggregateInput = {
    taskId?: SortOrder;
    userId?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    active?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    active?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    active?: SortOrder;
  };

  export type BoardUserCreateNestedManyWithoutBoardInput = {
    create?:
      | XOR<
          BoardUserCreateWithoutBoardInput,
          BoardUserUncheckedCreateWithoutBoardInput
        >
      | BoardUserCreateWithoutBoardInput[]
      | BoardUserUncheckedCreateWithoutBoardInput[];
    connectOrCreate?:
      | BoardUserCreateOrConnectWithoutBoardInput
      | BoardUserCreateOrConnectWithoutBoardInput[];
    createMany?: BoardUserCreateManyBoardInputEnvelope;
    connect?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
  };

  export type ColumnCreateNestedManyWithoutBoardInput = {
    create?:
      | XOR<
          ColumnCreateWithoutBoardInput,
          ColumnUncheckedCreateWithoutBoardInput
        >
      | ColumnCreateWithoutBoardInput[]
      | ColumnUncheckedCreateWithoutBoardInput[];
    connectOrCreate?:
      | ColumnCreateOrConnectWithoutBoardInput
      | ColumnCreateOrConnectWithoutBoardInput[];
    createMany?: ColumnCreateManyBoardInputEnvelope;
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
  };

  export type UserCreateNestedOneWithoutCreatedBoardsInput = {
    create?: XOR<
      UserCreateWithoutCreatedBoardsInput,
      UserUncheckedCreateWithoutCreatedBoardsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedBoardsInput;
    connect?: UserWhereUniqueInput;
  };

  export type OrganizationCreateNestedOneWithoutBoardsInput = {
    create?: XOR<
      OrganizationCreateWithoutBoardsInput,
      OrganizationUncheckedCreateWithoutBoardsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutBoardsInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type BoardUserUncheckedCreateNestedManyWithoutBoardInput = {
    create?:
      | XOR<
          BoardUserCreateWithoutBoardInput,
          BoardUserUncheckedCreateWithoutBoardInput
        >
      | BoardUserCreateWithoutBoardInput[]
      | BoardUserUncheckedCreateWithoutBoardInput[];
    connectOrCreate?:
      | BoardUserCreateOrConnectWithoutBoardInput
      | BoardUserCreateOrConnectWithoutBoardInput[];
    createMany?: BoardUserCreateManyBoardInputEnvelope;
    connect?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
  };

  export type ColumnUncheckedCreateNestedManyWithoutBoardInput = {
    create?:
      | XOR<
          ColumnCreateWithoutBoardInput,
          ColumnUncheckedCreateWithoutBoardInput
        >
      | ColumnCreateWithoutBoardInput[]
      | ColumnUncheckedCreateWithoutBoardInput[];
    connectOrCreate?:
      | ColumnCreateOrConnectWithoutBoardInput
      | ColumnCreateOrConnectWithoutBoardInput[];
    createMany?: ColumnCreateManyBoardInputEnvelope;
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type BoardUserUpdateManyWithoutBoardNestedInput = {
    create?:
      | XOR<
          BoardUserCreateWithoutBoardInput,
          BoardUserUncheckedCreateWithoutBoardInput
        >
      | BoardUserCreateWithoutBoardInput[]
      | BoardUserUncheckedCreateWithoutBoardInput[];
    connectOrCreate?:
      | BoardUserCreateOrConnectWithoutBoardInput
      | BoardUserCreateOrConnectWithoutBoardInput[];
    upsert?:
      | BoardUserUpsertWithWhereUniqueWithoutBoardInput
      | BoardUserUpsertWithWhereUniqueWithoutBoardInput[];
    createMany?: BoardUserCreateManyBoardInputEnvelope;
    set?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    disconnect?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    delete?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    connect?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    update?:
      | BoardUserUpdateWithWhereUniqueWithoutBoardInput
      | BoardUserUpdateWithWhereUniqueWithoutBoardInput[];
    updateMany?:
      | BoardUserUpdateManyWithWhereWithoutBoardInput
      | BoardUserUpdateManyWithWhereWithoutBoardInput[];
    deleteMany?: BoardUserScalarWhereInput | BoardUserScalarWhereInput[];
  };

  export type ColumnUpdateManyWithoutBoardNestedInput = {
    create?:
      | XOR<
          ColumnCreateWithoutBoardInput,
          ColumnUncheckedCreateWithoutBoardInput
        >
      | ColumnCreateWithoutBoardInput[]
      | ColumnUncheckedCreateWithoutBoardInput[];
    connectOrCreate?:
      | ColumnCreateOrConnectWithoutBoardInput
      | ColumnCreateOrConnectWithoutBoardInput[];
    upsert?:
      | ColumnUpsertWithWhereUniqueWithoutBoardInput
      | ColumnUpsertWithWhereUniqueWithoutBoardInput[];
    createMany?: ColumnCreateManyBoardInputEnvelope;
    set?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    disconnect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    delete?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    update?:
      | ColumnUpdateWithWhereUniqueWithoutBoardInput
      | ColumnUpdateWithWhereUniqueWithoutBoardInput[];
    updateMany?:
      | ColumnUpdateManyWithWhereWithoutBoardInput
      | ColumnUpdateManyWithWhereWithoutBoardInput[];
    deleteMany?: ColumnScalarWhereInput | ColumnScalarWhereInput[];
  };

  export type UserUpdateOneRequiredWithoutCreatedBoardsNestedInput = {
    create?: XOR<
      UserCreateWithoutCreatedBoardsInput,
      UserUncheckedCreateWithoutCreatedBoardsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedBoardsInput;
    upsert?: UserUpsertWithoutCreatedBoardsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCreatedBoardsInput,
        UserUpdateWithoutCreatedBoardsInput
      >,
      UserUncheckedUpdateWithoutCreatedBoardsInput
    >;
  };

  export type OrganizationUpdateOneRequiredWithoutBoardsNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutBoardsInput,
      OrganizationUncheckedCreateWithoutBoardsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutBoardsInput;
    upsert?: OrganizationUpsertWithoutBoardsInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutBoardsInput,
        OrganizationUpdateWithoutBoardsInput
      >,
      OrganizationUncheckedUpdateWithoutBoardsInput
    >;
  };

  export type BoardUserUncheckedUpdateManyWithoutBoardNestedInput = {
    create?:
      | XOR<
          BoardUserCreateWithoutBoardInput,
          BoardUserUncheckedCreateWithoutBoardInput
        >
      | BoardUserCreateWithoutBoardInput[]
      | BoardUserUncheckedCreateWithoutBoardInput[];
    connectOrCreate?:
      | BoardUserCreateOrConnectWithoutBoardInput
      | BoardUserCreateOrConnectWithoutBoardInput[];
    upsert?:
      | BoardUserUpsertWithWhereUniqueWithoutBoardInput
      | BoardUserUpsertWithWhereUniqueWithoutBoardInput[];
    createMany?: BoardUserCreateManyBoardInputEnvelope;
    set?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    disconnect?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    delete?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    connect?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    update?:
      | BoardUserUpdateWithWhereUniqueWithoutBoardInput
      | BoardUserUpdateWithWhereUniqueWithoutBoardInput[];
    updateMany?:
      | BoardUserUpdateManyWithWhereWithoutBoardInput
      | BoardUserUpdateManyWithWhereWithoutBoardInput[];
    deleteMany?: BoardUserScalarWhereInput | BoardUserScalarWhereInput[];
  };

  export type ColumnUncheckedUpdateManyWithoutBoardNestedInput = {
    create?:
      | XOR<
          ColumnCreateWithoutBoardInput,
          ColumnUncheckedCreateWithoutBoardInput
        >
      | ColumnCreateWithoutBoardInput[]
      | ColumnUncheckedCreateWithoutBoardInput[];
    connectOrCreate?:
      | ColumnCreateOrConnectWithoutBoardInput
      | ColumnCreateOrConnectWithoutBoardInput[];
    upsert?:
      | ColumnUpsertWithWhereUniqueWithoutBoardInput
      | ColumnUpsertWithWhereUniqueWithoutBoardInput[];
    createMany?: ColumnCreateManyBoardInputEnvelope;
    set?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    disconnect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    delete?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    update?:
      | ColumnUpdateWithWhereUniqueWithoutBoardInput
      | ColumnUpdateWithWhereUniqueWithoutBoardInput[];
    updateMany?:
      | ColumnUpdateManyWithWhereWithoutBoardInput
      | ColumnUpdateManyWithWhereWithoutBoardInput[];
    deleteMany?: ColumnScalarWhereInput | ColumnScalarWhereInput[];
  };

  export type BoardCreateNestedOneWithoutUsersInput = {
    create?: XOR<
      BoardCreateWithoutUsersInput,
      BoardUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: BoardCreateOrConnectWithoutUsersInput;
    connect?: BoardWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutBoardsInput = {
    create?: XOR<
      UserCreateWithoutBoardsInput,
      UserUncheckedCreateWithoutBoardsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutBoardsInput;
    connect?: UserWhereUniqueInput;
  };

  export type EnumBoardRoleFieldUpdateOperationsInput = {
    set?: $Enums.BoardRole;
  };

  export type BoardUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<
      BoardCreateWithoutUsersInput,
      BoardUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: BoardCreateOrConnectWithoutUsersInput;
    upsert?: BoardUpsertWithoutUsersInput;
    connect?: BoardWhereUniqueInput;
    update?: XOR<
      XOR<
        BoardUpdateToOneWithWhereWithoutUsersInput,
        BoardUpdateWithoutUsersInput
      >,
      BoardUncheckedUpdateWithoutUsersInput
    >;
  };

  export type UserUpdateOneRequiredWithoutBoardsNestedInput = {
    create?: XOR<
      UserCreateWithoutBoardsInput,
      UserUncheckedCreateWithoutBoardsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutBoardsInput;
    upsert?: UserUpsertWithoutBoardsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutBoardsInput,
        UserUpdateWithoutBoardsInput
      >,
      UserUncheckedUpdateWithoutBoardsInput
    >;
  };

  export type TaskCreateNestedManyWithoutColumnInput = {
    create?:
      | XOR<TaskCreateWithoutColumnInput, TaskUncheckedCreateWithoutColumnInput>
      | TaskCreateWithoutColumnInput[]
      | TaskUncheckedCreateWithoutColumnInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutColumnInput
      | TaskCreateOrConnectWithoutColumnInput[];
    createMany?: TaskCreateManyColumnInputEnvelope;
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
  };

  export type UserCreateNestedOneWithoutCreatedColumnsInput = {
    create?: XOR<
      UserCreateWithoutCreatedColumnsInput,
      UserUncheckedCreateWithoutCreatedColumnsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedColumnsInput;
    connect?: UserWhereUniqueInput;
  };

  export type BoardCreateNestedOneWithoutColumnsInput = {
    create?: XOR<
      BoardCreateWithoutColumnsInput,
      BoardUncheckedCreateWithoutColumnsInput
    >;
    connectOrCreate?: BoardCreateOrConnectWithoutColumnsInput;
    connect?: BoardWhereUniqueInput;
  };

  export type TaskUncheckedCreateNestedManyWithoutColumnInput = {
    create?:
      | XOR<TaskCreateWithoutColumnInput, TaskUncheckedCreateWithoutColumnInput>
      | TaskCreateWithoutColumnInput[]
      | TaskUncheckedCreateWithoutColumnInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutColumnInput
      | TaskCreateOrConnectWithoutColumnInput[];
    createMany?: TaskCreateManyColumnInputEnvelope;
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type TaskUpdateManyWithoutColumnNestedInput = {
    create?:
      | XOR<TaskCreateWithoutColumnInput, TaskUncheckedCreateWithoutColumnInput>
      | TaskCreateWithoutColumnInput[]
      | TaskUncheckedCreateWithoutColumnInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutColumnInput
      | TaskCreateOrConnectWithoutColumnInput[];
    upsert?:
      | TaskUpsertWithWhereUniqueWithoutColumnInput
      | TaskUpsertWithWhereUniqueWithoutColumnInput[];
    createMany?: TaskCreateManyColumnInputEnvelope;
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    update?:
      | TaskUpdateWithWhereUniqueWithoutColumnInput
      | TaskUpdateWithWhereUniqueWithoutColumnInput[];
    updateMany?:
      | TaskUpdateManyWithWhereWithoutColumnInput
      | TaskUpdateManyWithWhereWithoutColumnInput[];
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[];
  };

  export type UserUpdateOneRequiredWithoutCreatedColumnsNestedInput = {
    create?: XOR<
      UserCreateWithoutCreatedColumnsInput,
      UserUncheckedCreateWithoutCreatedColumnsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutCreatedColumnsInput;
    upsert?: UserUpsertWithoutCreatedColumnsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutCreatedColumnsInput,
        UserUpdateWithoutCreatedColumnsInput
      >,
      UserUncheckedUpdateWithoutCreatedColumnsInput
    >;
  };

  export type BoardUpdateOneRequiredWithoutColumnsNestedInput = {
    create?: XOR<
      BoardCreateWithoutColumnsInput,
      BoardUncheckedCreateWithoutColumnsInput
    >;
    connectOrCreate?: BoardCreateOrConnectWithoutColumnsInput;
    upsert?: BoardUpsertWithoutColumnsInput;
    connect?: BoardWhereUniqueInput;
    update?: XOR<
      XOR<
        BoardUpdateToOneWithWhereWithoutColumnsInput,
        BoardUpdateWithoutColumnsInput
      >,
      BoardUncheckedUpdateWithoutColumnsInput
    >;
  };

  export type TaskUncheckedUpdateManyWithoutColumnNestedInput = {
    create?:
      | XOR<TaskCreateWithoutColumnInput, TaskUncheckedCreateWithoutColumnInput>
      | TaskCreateWithoutColumnInput[]
      | TaskUncheckedCreateWithoutColumnInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutColumnInput
      | TaskCreateOrConnectWithoutColumnInput[];
    upsert?:
      | TaskUpsertWithWhereUniqueWithoutColumnInput
      | TaskUpsertWithWhereUniqueWithoutColumnInput[];
    createMany?: TaskCreateManyColumnInputEnvelope;
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    update?:
      | TaskUpdateWithWhereUniqueWithoutColumnInput
      | TaskUpdateWithWhereUniqueWithoutColumnInput[];
    updateMany?:
      | TaskUpdateManyWithWhereWithoutColumnInput
      | TaskUpdateManyWithWhereWithoutColumnInput[];
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[];
  };

  export type OrganizationCreateNestedOneWithoutInvitationsInput = {
    create?: XOR<
      OrganizationCreateWithoutInvitationsInput,
      OrganizationUncheckedCreateWithoutInvitationsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutInvitationsInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type EnumOrganizationRoleFieldUpdateOperationsInput = {
    set?: $Enums.OrganizationRole;
  };

  export type EnumInvitationStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvitationStatus;
  };

  export type OrganizationUpdateOneRequiredWithoutInvitationsNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutInvitationsInput,
      OrganizationUncheckedCreateWithoutInvitationsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutInvitationsInput;
    upsert?: OrganizationUpsertWithoutInvitationsInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutInvitationsInput,
        OrganizationUpdateWithoutInvitationsInput
      >,
      OrganizationUncheckedUpdateWithoutInvitationsInput
    >;
  };

  export type OrganizationUserCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          OrganizationUserCreateWithoutOrganizationInput,
          OrganizationUserUncheckedCreateWithoutOrganizationInput
        >
      | OrganizationUserCreateWithoutOrganizationInput[]
      | OrganizationUserUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | OrganizationUserCreateOrConnectWithoutOrganizationInput
      | OrganizationUserCreateOrConnectWithoutOrganizationInput[];
    createMany?: OrganizationUserCreateManyOrganizationInputEnvelope;
    connect?:
      | OrganizationUserWhereUniqueInput
      | OrganizationUserWhereUniqueInput[];
  };

  export type BoardCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          BoardCreateWithoutOrganizationInput,
          BoardUncheckedCreateWithoutOrganizationInput
        >
      | BoardCreateWithoutOrganizationInput[]
      | BoardUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | BoardCreateOrConnectWithoutOrganizationInput
      | BoardCreateOrConnectWithoutOrganizationInput[];
    createMany?: BoardCreateManyOrganizationInputEnvelope;
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
  };

  export type TaskCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          TaskCreateWithoutOrganizationInput,
          TaskUncheckedCreateWithoutOrganizationInput
        >
      | TaskCreateWithoutOrganizationInput[]
      | TaskUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutOrganizationInput
      | TaskCreateOrConnectWithoutOrganizationInput[];
    createMany?: TaskCreateManyOrganizationInputEnvelope;
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
  };

  export type InvitationCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          InvitationCreateWithoutOrganizationInput,
          InvitationUncheckedCreateWithoutOrganizationInput
        >
      | InvitationCreateWithoutOrganizationInput[]
      | InvitationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | InvitationCreateOrConnectWithoutOrganizationInput
      | InvitationCreateOrConnectWithoutOrganizationInput[];
    createMany?: InvitationCreateManyOrganizationInputEnvelope;
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
  };

  export type OrganizationUserUncheckedCreateNestedManyWithoutOrganizationInput =
    {
      create?:
        | XOR<
            OrganizationUserCreateWithoutOrganizationInput,
            OrganizationUserUncheckedCreateWithoutOrganizationInput
          >
        | OrganizationUserCreateWithoutOrganizationInput[]
        | OrganizationUserUncheckedCreateWithoutOrganizationInput[];
      connectOrCreate?:
        | OrganizationUserCreateOrConnectWithoutOrganizationInput
        | OrganizationUserCreateOrConnectWithoutOrganizationInput[];
      createMany?: OrganizationUserCreateManyOrganizationInputEnvelope;
      connect?:
        | OrganizationUserWhereUniqueInput
        | OrganizationUserWhereUniqueInput[];
    };

  export type BoardUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          BoardCreateWithoutOrganizationInput,
          BoardUncheckedCreateWithoutOrganizationInput
        >
      | BoardCreateWithoutOrganizationInput[]
      | BoardUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | BoardCreateOrConnectWithoutOrganizationInput
      | BoardCreateOrConnectWithoutOrganizationInput[];
    createMany?: BoardCreateManyOrganizationInputEnvelope;
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
  };

  export type TaskUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          TaskCreateWithoutOrganizationInput,
          TaskUncheckedCreateWithoutOrganizationInput
        >
      | TaskCreateWithoutOrganizationInput[]
      | TaskUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutOrganizationInput
      | TaskCreateOrConnectWithoutOrganizationInput[];
    createMany?: TaskCreateManyOrganizationInputEnvelope;
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
  };

  export type InvitationUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          InvitationCreateWithoutOrganizationInput,
          InvitationUncheckedCreateWithoutOrganizationInput
        >
      | InvitationCreateWithoutOrganizationInput[]
      | InvitationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | InvitationCreateOrConnectWithoutOrganizationInput
      | InvitationCreateOrConnectWithoutOrganizationInput[];
    createMany?: InvitationCreateManyOrganizationInputEnvelope;
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
  };

  export type OrganizationUserUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          OrganizationUserCreateWithoutOrganizationInput,
          OrganizationUserUncheckedCreateWithoutOrganizationInput
        >
      | OrganizationUserCreateWithoutOrganizationInput[]
      | OrganizationUserUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | OrganizationUserCreateOrConnectWithoutOrganizationInput
      | OrganizationUserCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | OrganizationUserUpsertWithWhereUniqueWithoutOrganizationInput
      | OrganizationUserUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: OrganizationUserCreateManyOrganizationInputEnvelope;
    set?: OrganizationUserWhereUniqueInput | OrganizationUserWhereUniqueInput[];
    disconnect?:
      | OrganizationUserWhereUniqueInput
      | OrganizationUserWhereUniqueInput[];
    delete?:
      | OrganizationUserWhereUniqueInput
      | OrganizationUserWhereUniqueInput[];
    connect?:
      | OrganizationUserWhereUniqueInput
      | OrganizationUserWhereUniqueInput[];
    update?:
      | OrganizationUserUpdateWithWhereUniqueWithoutOrganizationInput
      | OrganizationUserUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | OrganizationUserUpdateManyWithWhereWithoutOrganizationInput
      | OrganizationUserUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?:
      | OrganizationUserScalarWhereInput
      | OrganizationUserScalarWhereInput[];
  };

  export type BoardUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          BoardCreateWithoutOrganizationInput,
          BoardUncheckedCreateWithoutOrganizationInput
        >
      | BoardCreateWithoutOrganizationInput[]
      | BoardUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | BoardCreateOrConnectWithoutOrganizationInput
      | BoardCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | BoardUpsertWithWhereUniqueWithoutOrganizationInput
      | BoardUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: BoardCreateManyOrganizationInputEnvelope;
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    update?:
      | BoardUpdateWithWhereUniqueWithoutOrganizationInput
      | BoardUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | BoardUpdateManyWithWhereWithoutOrganizationInput
      | BoardUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[];
  };

  export type TaskUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          TaskCreateWithoutOrganizationInput,
          TaskUncheckedCreateWithoutOrganizationInput
        >
      | TaskCreateWithoutOrganizationInput[]
      | TaskUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutOrganizationInput
      | TaskCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | TaskUpsertWithWhereUniqueWithoutOrganizationInput
      | TaskUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: TaskCreateManyOrganizationInputEnvelope;
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    update?:
      | TaskUpdateWithWhereUniqueWithoutOrganizationInput
      | TaskUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | TaskUpdateManyWithWhereWithoutOrganizationInput
      | TaskUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[];
  };

  export type InvitationUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          InvitationCreateWithoutOrganizationInput,
          InvitationUncheckedCreateWithoutOrganizationInput
        >
      | InvitationCreateWithoutOrganizationInput[]
      | InvitationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | InvitationCreateOrConnectWithoutOrganizationInput
      | InvitationCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | InvitationUpsertWithWhereUniqueWithoutOrganizationInput
      | InvitationUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: InvitationCreateManyOrganizationInputEnvelope;
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    update?:
      | InvitationUpdateWithWhereUniqueWithoutOrganizationInput
      | InvitationUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | InvitationUpdateManyWithWhereWithoutOrganizationInput
      | InvitationUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[];
  };

  export type OrganizationUserUncheckedUpdateManyWithoutOrganizationNestedInput =
    {
      create?:
        | XOR<
            OrganizationUserCreateWithoutOrganizationInput,
            OrganizationUserUncheckedCreateWithoutOrganizationInput
          >
        | OrganizationUserCreateWithoutOrganizationInput[]
        | OrganizationUserUncheckedCreateWithoutOrganizationInput[];
      connectOrCreate?:
        | OrganizationUserCreateOrConnectWithoutOrganizationInput
        | OrganizationUserCreateOrConnectWithoutOrganizationInput[];
      upsert?:
        | OrganizationUserUpsertWithWhereUniqueWithoutOrganizationInput
        | OrganizationUserUpsertWithWhereUniqueWithoutOrganizationInput[];
      createMany?: OrganizationUserCreateManyOrganizationInputEnvelope;
      set?:
        | OrganizationUserWhereUniqueInput
        | OrganizationUserWhereUniqueInput[];
      disconnect?:
        | OrganizationUserWhereUniqueInput
        | OrganizationUserWhereUniqueInput[];
      delete?:
        | OrganizationUserWhereUniqueInput
        | OrganizationUserWhereUniqueInput[];
      connect?:
        | OrganizationUserWhereUniqueInput
        | OrganizationUserWhereUniqueInput[];
      update?:
        | OrganizationUserUpdateWithWhereUniqueWithoutOrganizationInput
        | OrganizationUserUpdateWithWhereUniqueWithoutOrganizationInput[];
      updateMany?:
        | OrganizationUserUpdateManyWithWhereWithoutOrganizationInput
        | OrganizationUserUpdateManyWithWhereWithoutOrganizationInput[];
      deleteMany?:
        | OrganizationUserScalarWhereInput
        | OrganizationUserScalarWhereInput[];
    };

  export type BoardUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          BoardCreateWithoutOrganizationInput,
          BoardUncheckedCreateWithoutOrganizationInput
        >
      | BoardCreateWithoutOrganizationInput[]
      | BoardUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | BoardCreateOrConnectWithoutOrganizationInput
      | BoardCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | BoardUpsertWithWhereUniqueWithoutOrganizationInput
      | BoardUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: BoardCreateManyOrganizationInputEnvelope;
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    update?:
      | BoardUpdateWithWhereUniqueWithoutOrganizationInput
      | BoardUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | BoardUpdateManyWithWhereWithoutOrganizationInput
      | BoardUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[];
  };

  export type TaskUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          TaskCreateWithoutOrganizationInput,
          TaskUncheckedCreateWithoutOrganizationInput
        >
      | TaskCreateWithoutOrganizationInput[]
      | TaskUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutOrganizationInput
      | TaskCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | TaskUpsertWithWhereUniqueWithoutOrganizationInput
      | TaskUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: TaskCreateManyOrganizationInputEnvelope;
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    update?:
      | TaskUpdateWithWhereUniqueWithoutOrganizationInput
      | TaskUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | TaskUpdateManyWithWhereWithoutOrganizationInput
      | TaskUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[];
  };

  export type InvitationUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          InvitationCreateWithoutOrganizationInput,
          InvitationUncheckedCreateWithoutOrganizationInput
        >
      | InvitationCreateWithoutOrganizationInput[]
      | InvitationUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | InvitationCreateOrConnectWithoutOrganizationInput
      | InvitationCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | InvitationUpsertWithWhereUniqueWithoutOrganizationInput
      | InvitationUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: InvitationCreateManyOrganizationInputEnvelope;
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[];
    update?:
      | InvitationUpdateWithWhereUniqueWithoutOrganizationInput
      | InvitationUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | InvitationUpdateManyWithWhereWithoutOrganizationInput
      | InvitationUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutOrganizationsInput = {
    create?: XOR<
      UserCreateWithoutOrganizationsInput,
      UserUncheckedCreateWithoutOrganizationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationsInput;
    connect?: UserWhereUniqueInput;
  };

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<
      OrganizationCreateWithoutUsersInput,
      OrganizationUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type UserUpdateOneRequiredWithoutOrganizationsNestedInput = {
    create?: XOR<
      UserCreateWithoutOrganizationsInput,
      UserUncheckedCreateWithoutOrganizationsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationsInput;
    upsert?: UserUpsertWithoutOrganizationsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutOrganizationsInput,
        UserUpdateWithoutOrganizationsInput
      >,
      UserUncheckedUpdateWithoutOrganizationsInput
    >;
  };

  export type OrganizationUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutUsersInput,
      OrganizationUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput;
    upsert?: OrganizationUpsertWithoutUsersInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutUsersInput,
        OrganizationUpdateWithoutUsersInput
      >,
      OrganizationUncheckedUpdateWithoutUsersInput
    >;
  };

  export type TaskCreateNestedManyWithoutParentTaskInput = {
    create?:
      | XOR<
          TaskCreateWithoutParentTaskInput,
          TaskUncheckedCreateWithoutParentTaskInput
        >
      | TaskCreateWithoutParentTaskInput[]
      | TaskUncheckedCreateWithoutParentTaskInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutParentTaskInput
      | TaskCreateOrConnectWithoutParentTaskInput[];
    createMany?: TaskCreateManyParentTaskInputEnvelope;
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
  };

  export type TaskUserCreateNestedManyWithoutTaskInput = {
    create?:
      | XOR<
          TaskUserCreateWithoutTaskInput,
          TaskUserUncheckedCreateWithoutTaskInput
        >
      | TaskUserCreateWithoutTaskInput[]
      | TaskUserUncheckedCreateWithoutTaskInput[];
    connectOrCreate?:
      | TaskUserCreateOrConnectWithoutTaskInput
      | TaskUserCreateOrConnectWithoutTaskInput[];
    createMany?: TaskUserCreateManyTaskInputEnvelope;
    connect?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
  };

  export type ColumnCreateNestedOneWithoutTasksInput = {
    create?: XOR<
      ColumnCreateWithoutTasksInput,
      ColumnUncheckedCreateWithoutTasksInput
    >;
    connectOrCreate?: ColumnCreateOrConnectWithoutTasksInput;
    connect?: ColumnWhereUniqueInput;
  };

  export type TaskCreateNestedOneWithoutSubTasksInput = {
    create?: XOR<
      TaskCreateWithoutSubTasksInput,
      TaskUncheckedCreateWithoutSubTasksInput
    >;
    connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput;
    connect?: TaskWhereUniqueInput;
  };

  export type OrganizationCreateNestedOneWithoutTasksInput = {
    create?: XOR<
      OrganizationCreateWithoutTasksInput,
      OrganizationUncheckedCreateWithoutTasksInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutTasksInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type TaskUncheckedCreateNestedManyWithoutParentTaskInput = {
    create?:
      | XOR<
          TaskCreateWithoutParentTaskInput,
          TaskUncheckedCreateWithoutParentTaskInput
        >
      | TaskCreateWithoutParentTaskInput[]
      | TaskUncheckedCreateWithoutParentTaskInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutParentTaskInput
      | TaskCreateOrConnectWithoutParentTaskInput[];
    createMany?: TaskCreateManyParentTaskInputEnvelope;
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
  };

  export type TaskUserUncheckedCreateNestedManyWithoutTaskInput = {
    create?:
      | XOR<
          TaskUserCreateWithoutTaskInput,
          TaskUserUncheckedCreateWithoutTaskInput
        >
      | TaskUserCreateWithoutTaskInput[]
      | TaskUserUncheckedCreateWithoutTaskInput[];
    connectOrCreate?:
      | TaskUserCreateOrConnectWithoutTaskInput
      | TaskUserCreateOrConnectWithoutTaskInput[];
    createMany?: TaskUserCreateManyTaskInputEnvelope;
    connect?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type EnumTaskPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TaskPriority;
  };

  export type TaskUpdateManyWithoutParentTaskNestedInput = {
    create?:
      | XOR<
          TaskCreateWithoutParentTaskInput,
          TaskUncheckedCreateWithoutParentTaskInput
        >
      | TaskCreateWithoutParentTaskInput[]
      | TaskUncheckedCreateWithoutParentTaskInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutParentTaskInput
      | TaskCreateOrConnectWithoutParentTaskInput[];
    upsert?:
      | TaskUpsertWithWhereUniqueWithoutParentTaskInput
      | TaskUpsertWithWhereUniqueWithoutParentTaskInput[];
    createMany?: TaskCreateManyParentTaskInputEnvelope;
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    update?:
      | TaskUpdateWithWhereUniqueWithoutParentTaskInput
      | TaskUpdateWithWhereUniqueWithoutParentTaskInput[];
    updateMany?:
      | TaskUpdateManyWithWhereWithoutParentTaskInput
      | TaskUpdateManyWithWhereWithoutParentTaskInput[];
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[];
  };

  export type TaskUserUpdateManyWithoutTaskNestedInput = {
    create?:
      | XOR<
          TaskUserCreateWithoutTaskInput,
          TaskUserUncheckedCreateWithoutTaskInput
        >
      | TaskUserCreateWithoutTaskInput[]
      | TaskUserUncheckedCreateWithoutTaskInput[];
    connectOrCreate?:
      | TaskUserCreateOrConnectWithoutTaskInput
      | TaskUserCreateOrConnectWithoutTaskInput[];
    upsert?:
      | TaskUserUpsertWithWhereUniqueWithoutTaskInput
      | TaskUserUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: TaskUserCreateManyTaskInputEnvelope;
    set?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    disconnect?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    delete?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    connect?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    update?:
      | TaskUserUpdateWithWhereUniqueWithoutTaskInput
      | TaskUserUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?:
      | TaskUserUpdateManyWithWhereWithoutTaskInput
      | TaskUserUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: TaskUserScalarWhereInput | TaskUserScalarWhereInput[];
  };

  export type ColumnUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<
      ColumnCreateWithoutTasksInput,
      ColumnUncheckedCreateWithoutTasksInput
    >;
    connectOrCreate?: ColumnCreateOrConnectWithoutTasksInput;
    upsert?: ColumnUpsertWithoutTasksInput;
    connect?: ColumnWhereUniqueInput;
    update?: XOR<
      XOR<
        ColumnUpdateToOneWithWhereWithoutTasksInput,
        ColumnUpdateWithoutTasksInput
      >,
      ColumnUncheckedUpdateWithoutTasksInput
    >;
  };

  export type TaskUpdateOneWithoutSubTasksNestedInput = {
    create?: XOR<
      TaskCreateWithoutSubTasksInput,
      TaskUncheckedCreateWithoutSubTasksInput
    >;
    connectOrCreate?: TaskCreateOrConnectWithoutSubTasksInput;
    upsert?: TaskUpsertWithoutSubTasksInput;
    disconnect?: TaskWhereInput | boolean;
    delete?: TaskWhereInput | boolean;
    connect?: TaskWhereUniqueInput;
    update?: XOR<
      XOR<
        TaskUpdateToOneWithWhereWithoutSubTasksInput,
        TaskUpdateWithoutSubTasksInput
      >,
      TaskUncheckedUpdateWithoutSubTasksInput
    >;
  };

  export type OrganizationUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutTasksInput,
      OrganizationUncheckedCreateWithoutTasksInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutTasksInput;
    upsert?: OrganizationUpsertWithoutTasksInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutTasksInput,
        OrganizationUpdateWithoutTasksInput
      >,
      OrganizationUncheckedUpdateWithoutTasksInput
    >;
  };

  export type TaskUncheckedUpdateManyWithoutParentTaskNestedInput = {
    create?:
      | XOR<
          TaskCreateWithoutParentTaskInput,
          TaskUncheckedCreateWithoutParentTaskInput
        >
      | TaskCreateWithoutParentTaskInput[]
      | TaskUncheckedCreateWithoutParentTaskInput[];
    connectOrCreate?:
      | TaskCreateOrConnectWithoutParentTaskInput
      | TaskCreateOrConnectWithoutParentTaskInput[];
    upsert?:
      | TaskUpsertWithWhereUniqueWithoutParentTaskInput
      | TaskUpsertWithWhereUniqueWithoutParentTaskInput[];
    createMany?: TaskCreateManyParentTaskInputEnvelope;
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[];
    update?:
      | TaskUpdateWithWhereUniqueWithoutParentTaskInput
      | TaskUpdateWithWhereUniqueWithoutParentTaskInput[];
    updateMany?:
      | TaskUpdateManyWithWhereWithoutParentTaskInput
      | TaskUpdateManyWithWhereWithoutParentTaskInput[];
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[];
  };

  export type TaskUserUncheckedUpdateManyWithoutTaskNestedInput = {
    create?:
      | XOR<
          TaskUserCreateWithoutTaskInput,
          TaskUserUncheckedCreateWithoutTaskInput
        >
      | TaskUserCreateWithoutTaskInput[]
      | TaskUserUncheckedCreateWithoutTaskInput[];
    connectOrCreate?:
      | TaskUserCreateOrConnectWithoutTaskInput
      | TaskUserCreateOrConnectWithoutTaskInput[];
    upsert?:
      | TaskUserUpsertWithWhereUniqueWithoutTaskInput
      | TaskUserUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: TaskUserCreateManyTaskInputEnvelope;
    set?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    disconnect?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    delete?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    connect?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    update?:
      | TaskUserUpdateWithWhereUniqueWithoutTaskInput
      | TaskUserUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?:
      | TaskUserUpdateManyWithWhereWithoutTaskInput
      | TaskUserUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: TaskUserScalarWhereInput | TaskUserScalarWhereInput[];
  };

  export type TaskCreateNestedOneWithoutUsersInput = {
    create?: XOR<
      TaskCreateWithoutUsersInput,
      TaskUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: TaskCreateOrConnectWithoutUsersInput;
    connect?: TaskWhereUniqueInput;
  };

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<
      UserCreateWithoutTasksInput,
      UserUncheckedCreateWithoutTasksInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput;
    connect?: UserWhereUniqueInput;
  };

  export type TaskUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<
      TaskCreateWithoutUsersInput,
      TaskUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: TaskCreateOrConnectWithoutUsersInput;
    upsert?: TaskUpsertWithoutUsersInput;
    connect?: TaskWhereUniqueInput;
    update?: XOR<
      XOR<
        TaskUpdateToOneWithWhereWithoutUsersInput,
        TaskUpdateWithoutUsersInput
      >,
      TaskUncheckedUpdateWithoutUsersInput
    >;
  };

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<
      UserCreateWithoutTasksInput,
      UserUncheckedCreateWithoutTasksInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput;
    upsert?: UserUpsertWithoutTasksInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutTasksInput,
        UserUpdateWithoutTasksInput
      >,
      UserUncheckedUpdateWithoutTasksInput
    >;
  };

  export type BoardUserCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          BoardUserCreateWithoutUserInput,
          BoardUserUncheckedCreateWithoutUserInput
        >
      | BoardUserCreateWithoutUserInput[]
      | BoardUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BoardUserCreateOrConnectWithoutUserInput
      | BoardUserCreateOrConnectWithoutUserInput[];
    createMany?: BoardUserCreateManyUserInputEnvelope;
    connect?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
  };

  export type OrganizationUserCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          OrganizationUserCreateWithoutUserInput,
          OrganizationUserUncheckedCreateWithoutUserInput
        >
      | OrganizationUserCreateWithoutUserInput[]
      | OrganizationUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OrganizationUserCreateOrConnectWithoutUserInput
      | OrganizationUserCreateOrConnectWithoutUserInput[];
    createMany?: OrganizationUserCreateManyUserInputEnvelope;
    connect?:
      | OrganizationUserWhereUniqueInput
      | OrganizationUserWhereUniqueInput[];
  };

  export type BoardCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          BoardCreateWithoutCreatedByInput,
          BoardUncheckedCreateWithoutCreatedByInput
        >
      | BoardCreateWithoutCreatedByInput[]
      | BoardUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | BoardCreateOrConnectWithoutCreatedByInput
      | BoardCreateOrConnectWithoutCreatedByInput[];
    createMany?: BoardCreateManyCreatedByInputEnvelope;
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
  };

  export type ColumnCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          ColumnCreateWithoutCreatedByInput,
          ColumnUncheckedCreateWithoutCreatedByInput
        >
      | ColumnCreateWithoutCreatedByInput[]
      | ColumnUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ColumnCreateOrConnectWithoutCreatedByInput
      | ColumnCreateOrConnectWithoutCreatedByInput[];
    createMany?: ColumnCreateManyCreatedByInputEnvelope;
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
  };

  export type TaskUserCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          TaskUserCreateWithoutUserInput,
          TaskUserUncheckedCreateWithoutUserInput
        >
      | TaskUserCreateWithoutUserInput[]
      | TaskUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TaskUserCreateOrConnectWithoutUserInput
      | TaskUserCreateOrConnectWithoutUserInput[];
    createMany?: TaskUserCreateManyUserInputEnvelope;
    connect?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
  };

  export type BoardUserUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          BoardUserCreateWithoutUserInput,
          BoardUserUncheckedCreateWithoutUserInput
        >
      | BoardUserCreateWithoutUserInput[]
      | BoardUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BoardUserCreateOrConnectWithoutUserInput
      | BoardUserCreateOrConnectWithoutUserInput[];
    createMany?: BoardUserCreateManyUserInputEnvelope;
    connect?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
  };

  export type OrganizationUserUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          OrganizationUserCreateWithoutUserInput,
          OrganizationUserUncheckedCreateWithoutUserInput
        >
      | OrganizationUserCreateWithoutUserInput[]
      | OrganizationUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OrganizationUserCreateOrConnectWithoutUserInput
      | OrganizationUserCreateOrConnectWithoutUserInput[];
    createMany?: OrganizationUserCreateManyUserInputEnvelope;
    connect?:
      | OrganizationUserWhereUniqueInput
      | OrganizationUserWhereUniqueInput[];
  };

  export type BoardUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          BoardCreateWithoutCreatedByInput,
          BoardUncheckedCreateWithoutCreatedByInput
        >
      | BoardCreateWithoutCreatedByInput[]
      | BoardUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | BoardCreateOrConnectWithoutCreatedByInput
      | BoardCreateOrConnectWithoutCreatedByInput[];
    createMany?: BoardCreateManyCreatedByInputEnvelope;
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
  };

  export type ColumnUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?:
      | XOR<
          ColumnCreateWithoutCreatedByInput,
          ColumnUncheckedCreateWithoutCreatedByInput
        >
      | ColumnCreateWithoutCreatedByInput[]
      | ColumnUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ColumnCreateOrConnectWithoutCreatedByInput
      | ColumnCreateOrConnectWithoutCreatedByInput[];
    createMany?: ColumnCreateManyCreatedByInputEnvelope;
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
  };

  export type TaskUserUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          TaskUserCreateWithoutUserInput,
          TaskUserUncheckedCreateWithoutUserInput
        >
      | TaskUserCreateWithoutUserInput[]
      | TaskUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TaskUserCreateOrConnectWithoutUserInput
      | TaskUserCreateOrConnectWithoutUserInput[];
    createMany?: TaskUserCreateManyUserInputEnvelope;
    connect?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
  };

  export type BoardUserUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          BoardUserCreateWithoutUserInput,
          BoardUserUncheckedCreateWithoutUserInput
        >
      | BoardUserCreateWithoutUserInput[]
      | BoardUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BoardUserCreateOrConnectWithoutUserInput
      | BoardUserCreateOrConnectWithoutUserInput[];
    upsert?:
      | BoardUserUpsertWithWhereUniqueWithoutUserInput
      | BoardUserUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: BoardUserCreateManyUserInputEnvelope;
    set?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    disconnect?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    delete?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    connect?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    update?:
      | BoardUserUpdateWithWhereUniqueWithoutUserInput
      | BoardUserUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | BoardUserUpdateManyWithWhereWithoutUserInput
      | BoardUserUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: BoardUserScalarWhereInput | BoardUserScalarWhereInput[];
  };

  export type OrganizationUserUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          OrganizationUserCreateWithoutUserInput,
          OrganizationUserUncheckedCreateWithoutUserInput
        >
      | OrganizationUserCreateWithoutUserInput[]
      | OrganizationUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OrganizationUserCreateOrConnectWithoutUserInput
      | OrganizationUserCreateOrConnectWithoutUserInput[];
    upsert?:
      | OrganizationUserUpsertWithWhereUniqueWithoutUserInput
      | OrganizationUserUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: OrganizationUserCreateManyUserInputEnvelope;
    set?: OrganizationUserWhereUniqueInput | OrganizationUserWhereUniqueInput[];
    disconnect?:
      | OrganizationUserWhereUniqueInput
      | OrganizationUserWhereUniqueInput[];
    delete?:
      | OrganizationUserWhereUniqueInput
      | OrganizationUserWhereUniqueInput[];
    connect?:
      | OrganizationUserWhereUniqueInput
      | OrganizationUserWhereUniqueInput[];
    update?:
      | OrganizationUserUpdateWithWhereUniqueWithoutUserInput
      | OrganizationUserUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | OrganizationUserUpdateManyWithWhereWithoutUserInput
      | OrganizationUserUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | OrganizationUserScalarWhereInput
      | OrganizationUserScalarWhereInput[];
  };

  export type BoardUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          BoardCreateWithoutCreatedByInput,
          BoardUncheckedCreateWithoutCreatedByInput
        >
      | BoardCreateWithoutCreatedByInput[]
      | BoardUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | BoardCreateOrConnectWithoutCreatedByInput
      | BoardCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | BoardUpsertWithWhereUniqueWithoutCreatedByInput
      | BoardUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: BoardCreateManyCreatedByInputEnvelope;
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    update?:
      | BoardUpdateWithWhereUniqueWithoutCreatedByInput
      | BoardUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | BoardUpdateManyWithWhereWithoutCreatedByInput
      | BoardUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[];
  };

  export type ColumnUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          ColumnCreateWithoutCreatedByInput,
          ColumnUncheckedCreateWithoutCreatedByInput
        >
      | ColumnCreateWithoutCreatedByInput[]
      | ColumnUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ColumnCreateOrConnectWithoutCreatedByInput
      | ColumnCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | ColumnUpsertWithWhereUniqueWithoutCreatedByInput
      | ColumnUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: ColumnCreateManyCreatedByInputEnvelope;
    set?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    disconnect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    delete?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    update?:
      | ColumnUpdateWithWhereUniqueWithoutCreatedByInput
      | ColumnUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | ColumnUpdateManyWithWhereWithoutCreatedByInput
      | ColumnUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: ColumnScalarWhereInput | ColumnScalarWhereInput[];
  };

  export type TaskUserUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          TaskUserCreateWithoutUserInput,
          TaskUserUncheckedCreateWithoutUserInput
        >
      | TaskUserCreateWithoutUserInput[]
      | TaskUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TaskUserCreateOrConnectWithoutUserInput
      | TaskUserCreateOrConnectWithoutUserInput[];
    upsert?:
      | TaskUserUpsertWithWhereUniqueWithoutUserInput
      | TaskUserUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: TaskUserCreateManyUserInputEnvelope;
    set?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    disconnect?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    delete?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    connect?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    update?:
      | TaskUserUpdateWithWhereUniqueWithoutUserInput
      | TaskUserUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | TaskUserUpdateManyWithWhereWithoutUserInput
      | TaskUserUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: TaskUserScalarWhereInput | TaskUserScalarWhereInput[];
  };

  export type BoardUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          BoardUserCreateWithoutUserInput,
          BoardUserUncheckedCreateWithoutUserInput
        >
      | BoardUserCreateWithoutUserInput[]
      | BoardUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | BoardUserCreateOrConnectWithoutUserInput
      | BoardUserCreateOrConnectWithoutUserInput[];
    upsert?:
      | BoardUserUpsertWithWhereUniqueWithoutUserInput
      | BoardUserUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: BoardUserCreateManyUserInputEnvelope;
    set?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    disconnect?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    delete?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    connect?: BoardUserWhereUniqueInput | BoardUserWhereUniqueInput[];
    update?:
      | BoardUserUpdateWithWhereUniqueWithoutUserInput
      | BoardUserUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | BoardUserUpdateManyWithWhereWithoutUserInput
      | BoardUserUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: BoardUserScalarWhereInput | BoardUserScalarWhereInput[];
  };

  export type OrganizationUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          OrganizationUserCreateWithoutUserInput,
          OrganizationUserUncheckedCreateWithoutUserInput
        >
      | OrganizationUserCreateWithoutUserInput[]
      | OrganizationUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | OrganizationUserCreateOrConnectWithoutUserInput
      | OrganizationUserCreateOrConnectWithoutUserInput[];
    upsert?:
      | OrganizationUserUpsertWithWhereUniqueWithoutUserInput
      | OrganizationUserUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: OrganizationUserCreateManyUserInputEnvelope;
    set?: OrganizationUserWhereUniqueInput | OrganizationUserWhereUniqueInput[];
    disconnect?:
      | OrganizationUserWhereUniqueInput
      | OrganizationUserWhereUniqueInput[];
    delete?:
      | OrganizationUserWhereUniqueInput
      | OrganizationUserWhereUniqueInput[];
    connect?:
      | OrganizationUserWhereUniqueInput
      | OrganizationUserWhereUniqueInput[];
    update?:
      | OrganizationUserUpdateWithWhereUniqueWithoutUserInput
      | OrganizationUserUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | OrganizationUserUpdateManyWithWhereWithoutUserInput
      | OrganizationUserUpdateManyWithWhereWithoutUserInput[];
    deleteMany?:
      | OrganizationUserScalarWhereInput
      | OrganizationUserScalarWhereInput[];
  };

  export type BoardUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          BoardCreateWithoutCreatedByInput,
          BoardUncheckedCreateWithoutCreatedByInput
        >
      | BoardCreateWithoutCreatedByInput[]
      | BoardUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | BoardCreateOrConnectWithoutCreatedByInput
      | BoardCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | BoardUpsertWithWhereUniqueWithoutCreatedByInput
      | BoardUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: BoardCreateManyCreatedByInputEnvelope;
    set?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    disconnect?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    delete?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    connect?: BoardWhereUniqueInput | BoardWhereUniqueInput[];
    update?:
      | BoardUpdateWithWhereUniqueWithoutCreatedByInput
      | BoardUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | BoardUpdateManyWithWhereWithoutCreatedByInput
      | BoardUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: BoardScalarWhereInput | BoardScalarWhereInput[];
  };

  export type ColumnUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?:
      | XOR<
          ColumnCreateWithoutCreatedByInput,
          ColumnUncheckedCreateWithoutCreatedByInput
        >
      | ColumnCreateWithoutCreatedByInput[]
      | ColumnUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?:
      | ColumnCreateOrConnectWithoutCreatedByInput
      | ColumnCreateOrConnectWithoutCreatedByInput[];
    upsert?:
      | ColumnUpsertWithWhereUniqueWithoutCreatedByInput
      | ColumnUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: ColumnCreateManyCreatedByInputEnvelope;
    set?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    disconnect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    delete?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    connect?: ColumnWhereUniqueInput | ColumnWhereUniqueInput[];
    update?:
      | ColumnUpdateWithWhereUniqueWithoutCreatedByInput
      | ColumnUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?:
      | ColumnUpdateManyWithWhereWithoutCreatedByInput
      | ColumnUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: ColumnScalarWhereInput | ColumnScalarWhereInput[];
  };

  export type TaskUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          TaskUserCreateWithoutUserInput,
          TaskUserUncheckedCreateWithoutUserInput
        >
      | TaskUserCreateWithoutUserInput[]
      | TaskUserUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | TaskUserCreateOrConnectWithoutUserInput
      | TaskUserCreateOrConnectWithoutUserInput[];
    upsert?:
      | TaskUserUpsertWithWhereUniqueWithoutUserInput
      | TaskUserUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: TaskUserCreateManyUserInputEnvelope;
    set?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    disconnect?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    delete?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    connect?: TaskUserWhereUniqueInput | TaskUserWhereUniqueInput[];
    update?:
      | TaskUserUpdateWithWhereUniqueWithoutUserInput
      | TaskUserUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | TaskUserUpdateManyWithWhereWithoutUserInput
      | TaskUserUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: TaskUserScalarWhereInput | TaskUserScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedEnumBoardRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardRole | EnumBoardRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.BoardRole[] | ListEnumBoardRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BoardRole[] | ListEnumBoardRoleFieldRefInput<$PrismaModel>;
    not?: NestedEnumBoardRoleFilter<$PrismaModel> | $Enums.BoardRole;
  };

  export type NestedEnumBoardRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BoardRole | EnumBoardRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.BoardRole[] | ListEnumBoardRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BoardRole[] | ListEnumBoardRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumBoardRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.BoardRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumBoardRoleFilter<$PrismaModel>;
    _max?: NestedEnumBoardRoleFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedEnumOrganizationRoleFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.OrganizationRole
      | EnumOrganizationRoleFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationRoleFilter<$PrismaModel>
      | $Enums.OrganizationRole;
  };

  export type NestedEnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.InvitationStatus
      | EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.InvitationStatus[]
      | ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.InvitationStatus[]
      | ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumInvitationStatusFilter<$PrismaModel>
      | $Enums.InvitationStatus;
  };

  export type NestedEnumOrganizationRoleWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.OrganizationRole
      | EnumOrganizationRoleFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.OrganizationRole[]
      | ListEnumOrganizationRoleFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumOrganizationRoleWithAggregatesFilter<$PrismaModel>
      | $Enums.OrganizationRole;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumOrganizationRoleFilter<$PrismaModel>;
    _max?: NestedEnumOrganizationRoleFilter<$PrismaModel>;
  };

  export type NestedEnumInvitationStatusWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.InvitationStatus
      | EnumInvitationStatusFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.InvitationStatus[]
      | ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.InvitationStatus[]
      | ListEnumInvitationStatusFieldRefInput<$PrismaModel>;
    not?:
      | NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.InvitationStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>;
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedEnumTaskPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskPriority | EnumTaskPriorityFieldRefInput<$PrismaModel>;
    in?:
      | $Enums.TaskPriority[]
      | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
    notIn?:
      | $Enums.TaskPriority[]
      | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
    not?: NestedEnumTaskPriorityFilter<$PrismaModel> | $Enums.TaskPriority;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
      in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
      notIn?:
        | Date[]
        | string[]
        | ListDateTimeFieldRefInput<$PrismaModel>
        | null;
      lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
      not?:
        | NestedDateTimeNullableWithAggregatesFilter<$PrismaModel>
        | Date
        | string
        | null;
      _count?: NestedIntNullableFilter<$PrismaModel>;
      _min?: NestedDateTimeNullableFilter<$PrismaModel>;
      _max?: NestedDateTimeNullableFilter<$PrismaModel>;
    };

  export type NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.TaskPriority
        | EnumTaskPriorityFieldRefInput<$PrismaModel>;
      in?:
        | $Enums.TaskPriority[]
        | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
      notIn?:
        | $Enums.TaskPriority[]
        | ListEnumTaskPriorityFieldRefInput<$PrismaModel>;
      not?:
        | NestedEnumTaskPriorityWithAggregatesFilter<$PrismaModel>
        | $Enums.TaskPriority;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumTaskPriorityFilter<$PrismaModel>;
      _max?: NestedEnumTaskPriorityFilter<$PrismaModel>;
    };

  export type BoardUserCreateWithoutBoardInput = {
    role?: $Enums.BoardRole;
    user: UserCreateNestedOneWithoutBoardsInput;
  };

  export type BoardUserUncheckedCreateWithoutBoardInput = {
    userId: string;
    role?: $Enums.BoardRole;
  };

  export type BoardUserCreateOrConnectWithoutBoardInput = {
    where: BoardUserWhereUniqueInput;
    create: XOR<
      BoardUserCreateWithoutBoardInput,
      BoardUserUncheckedCreateWithoutBoardInput
    >;
  };

  export type BoardUserCreateManyBoardInputEnvelope = {
    data: BoardUserCreateManyBoardInput | BoardUserCreateManyBoardInput[];
    skipDuplicates?: boolean;
  };

  export type ColumnCreateWithoutBoardInput = {
    id?: string;
    name: string;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: TaskCreateNestedManyWithoutColumnInput;
    createdBy: UserCreateNestedOneWithoutCreatedColumnsInput;
  };

  export type ColumnUncheckedCreateWithoutBoardInput = {
    id?: string;
    createdById: string;
    name: string;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: TaskUncheckedCreateNestedManyWithoutColumnInput;
  };

  export type ColumnCreateOrConnectWithoutBoardInput = {
    where: ColumnWhereUniqueInput;
    create: XOR<
      ColumnCreateWithoutBoardInput,
      ColumnUncheckedCreateWithoutBoardInput
    >;
  };

  export type ColumnCreateManyBoardInputEnvelope = {
    data: ColumnCreateManyBoardInput | ColumnCreateManyBoardInput[];
    skipDuplicates?: boolean;
  };

  export type UserCreateWithoutCreatedBoardsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    active?: boolean;
    boards?: BoardUserCreateNestedManyWithoutUserInput;
    organizations?: OrganizationUserCreateNestedManyWithoutUserInput;
    createdColumns?: ColumnCreateNestedManyWithoutCreatedByInput;
    tasks?: TaskUserCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCreatedBoardsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    active?: boolean;
    boards?: BoardUserUncheckedCreateNestedManyWithoutUserInput;
    organizations?: OrganizationUserUncheckedCreateNestedManyWithoutUserInput;
    createdColumns?: ColumnUncheckedCreateNestedManyWithoutCreatedByInput;
    tasks?: TaskUserUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCreatedBoardsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCreatedBoardsInput,
      UserUncheckedCreateWithoutCreatedBoardsInput
    >;
  };

  export type OrganizationCreateWithoutBoardsInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
    users?: OrganizationUserCreateNestedManyWithoutOrganizationInput;
    tasks?: TaskCreateNestedManyWithoutOrganizationInput;
    invitations?: InvitationCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutBoardsInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
    users?: OrganizationUserUncheckedCreateNestedManyWithoutOrganizationInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutOrganizationInput;
    invitations?: InvitationUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutBoardsInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutBoardsInput,
      OrganizationUncheckedCreateWithoutBoardsInput
    >;
  };

  export type BoardUserUpsertWithWhereUniqueWithoutBoardInput = {
    where: BoardUserWhereUniqueInput;
    update: XOR<
      BoardUserUpdateWithoutBoardInput,
      BoardUserUncheckedUpdateWithoutBoardInput
    >;
    create: XOR<
      BoardUserCreateWithoutBoardInput,
      BoardUserUncheckedCreateWithoutBoardInput
    >;
  };

  export type BoardUserUpdateWithWhereUniqueWithoutBoardInput = {
    where: BoardUserWhereUniqueInput;
    data: XOR<
      BoardUserUpdateWithoutBoardInput,
      BoardUserUncheckedUpdateWithoutBoardInput
    >;
  };

  export type BoardUserUpdateManyWithWhereWithoutBoardInput = {
    where: BoardUserScalarWhereInput;
    data: XOR<
      BoardUserUpdateManyMutationInput,
      BoardUserUncheckedUpdateManyWithoutBoardInput
    >;
  };

  export type BoardUserScalarWhereInput = {
    AND?: BoardUserScalarWhereInput | BoardUserScalarWhereInput[];
    OR?: BoardUserScalarWhereInput[];
    NOT?: BoardUserScalarWhereInput | BoardUserScalarWhereInput[];
    boardId?: UuidFilter<'BoardUser'> | string;
    userId?: UuidFilter<'BoardUser'> | string;
    role?: EnumBoardRoleFilter<'BoardUser'> | $Enums.BoardRole;
  };

  export type ColumnUpsertWithWhereUniqueWithoutBoardInput = {
    where: ColumnWhereUniqueInput;
    update: XOR<
      ColumnUpdateWithoutBoardInput,
      ColumnUncheckedUpdateWithoutBoardInput
    >;
    create: XOR<
      ColumnCreateWithoutBoardInput,
      ColumnUncheckedCreateWithoutBoardInput
    >;
  };

  export type ColumnUpdateWithWhereUniqueWithoutBoardInput = {
    where: ColumnWhereUniqueInput;
    data: XOR<
      ColumnUpdateWithoutBoardInput,
      ColumnUncheckedUpdateWithoutBoardInput
    >;
  };

  export type ColumnUpdateManyWithWhereWithoutBoardInput = {
    where: ColumnScalarWhereInput;
    data: XOR<
      ColumnUpdateManyMutationInput,
      ColumnUncheckedUpdateManyWithoutBoardInput
    >;
  };

  export type ColumnScalarWhereInput = {
    AND?: ColumnScalarWhereInput | ColumnScalarWhereInput[];
    OR?: ColumnScalarWhereInput[];
    NOT?: ColumnScalarWhereInput | ColumnScalarWhereInput[];
    id?: UuidFilter<'Column'> | string;
    boardId?: UuidFilter<'Column'> | string;
    createdById?: UuidFilter<'Column'> | string;
    name?: StringFilter<'Column'> | string;
    position?: IntFilter<'Column'> | number;
    createdAt?: DateTimeFilter<'Column'> | Date | string;
    updatedAt?: DateTimeFilter<'Column'> | Date | string;
  };

  export type UserUpsertWithoutCreatedBoardsInput = {
    update: XOR<
      UserUpdateWithoutCreatedBoardsInput,
      UserUncheckedUpdateWithoutCreatedBoardsInput
    >;
    create: XOR<
      UserCreateWithoutCreatedBoardsInput,
      UserUncheckedCreateWithoutCreatedBoardsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCreatedBoardsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCreatedBoardsInput,
      UserUncheckedUpdateWithoutCreatedBoardsInput
    >;
  };

  export type UserUpdateWithoutCreatedBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    active?: BoolFieldUpdateOperationsInput | boolean;
    boards?: BoardUserUpdateManyWithoutUserNestedInput;
    organizations?: OrganizationUserUpdateManyWithoutUserNestedInput;
    createdColumns?: ColumnUpdateManyWithoutCreatedByNestedInput;
    tasks?: TaskUserUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCreatedBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    active?: BoolFieldUpdateOperationsInput | boolean;
    boards?: BoardUserUncheckedUpdateManyWithoutUserNestedInput;
    organizations?: OrganizationUserUncheckedUpdateManyWithoutUserNestedInput;
    createdColumns?: ColumnUncheckedUpdateManyWithoutCreatedByNestedInput;
    tasks?: TaskUserUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type OrganizationUpsertWithoutBoardsInput = {
    update: XOR<
      OrganizationUpdateWithoutBoardsInput,
      OrganizationUncheckedUpdateWithoutBoardsInput
    >;
    create: XOR<
      OrganizationCreateWithoutBoardsInput,
      OrganizationUncheckedCreateWithoutBoardsInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutBoardsInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutBoardsInput,
      OrganizationUncheckedUpdateWithoutBoardsInput
    >;
  };

  export type OrganizationUpdateWithoutBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    users?: OrganizationUserUpdateManyWithoutOrganizationNestedInput;
    tasks?: TaskUpdateManyWithoutOrganizationNestedInput;
    invitations?: InvitationUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    users?: OrganizationUserUncheckedUpdateManyWithoutOrganizationNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutOrganizationNestedInput;
    invitations?: InvitationUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type BoardCreateWithoutUsersInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    columns?: ColumnCreateNestedManyWithoutBoardInput;
    createdBy: UserCreateNestedOneWithoutCreatedBoardsInput;
    organization: OrganizationCreateNestedOneWithoutBoardsInput;
  };

  export type BoardUncheckedCreateWithoutUsersInput = {
    id?: string;
    organizationId: string;
    createdById: string;
    name: string;
    imagePath?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    columns?: ColumnUncheckedCreateNestedManyWithoutBoardInput;
  };

  export type BoardCreateOrConnectWithoutUsersInput = {
    where: BoardWhereUniqueInput;
    create: XOR<
      BoardCreateWithoutUsersInput,
      BoardUncheckedCreateWithoutUsersInput
    >;
  };

  export type UserCreateWithoutBoardsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    active?: boolean;
    organizations?: OrganizationUserCreateNestedManyWithoutUserInput;
    createdBoards?: BoardCreateNestedManyWithoutCreatedByInput;
    createdColumns?: ColumnCreateNestedManyWithoutCreatedByInput;
    tasks?: TaskUserCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutBoardsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    active?: boolean;
    organizations?: OrganizationUserUncheckedCreateNestedManyWithoutUserInput;
    createdBoards?: BoardUncheckedCreateNestedManyWithoutCreatedByInput;
    createdColumns?: ColumnUncheckedCreateNestedManyWithoutCreatedByInput;
    tasks?: TaskUserUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutBoardsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutBoardsInput,
      UserUncheckedCreateWithoutBoardsInput
    >;
  };

  export type BoardUpsertWithoutUsersInput = {
    update: XOR<
      BoardUpdateWithoutUsersInput,
      BoardUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      BoardCreateWithoutUsersInput,
      BoardUncheckedCreateWithoutUsersInput
    >;
    where?: BoardWhereInput;
  };

  export type BoardUpdateToOneWithWhereWithoutUsersInput = {
    where?: BoardWhereInput;
    data: XOR<
      BoardUpdateWithoutUsersInput,
      BoardUncheckedUpdateWithoutUsersInput
    >;
  };

  export type BoardUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    columns?: ColumnUpdateManyWithoutBoardNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutCreatedBoardsNestedInput;
    organization?: OrganizationUpdateOneRequiredWithoutBoardsNestedInput;
  };

  export type BoardUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    columns?: ColumnUncheckedUpdateManyWithoutBoardNestedInput;
  };

  export type UserUpsertWithoutBoardsInput = {
    update: XOR<
      UserUpdateWithoutBoardsInput,
      UserUncheckedUpdateWithoutBoardsInput
    >;
    create: XOR<
      UserCreateWithoutBoardsInput,
      UserUncheckedCreateWithoutBoardsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutBoardsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutBoardsInput,
      UserUncheckedUpdateWithoutBoardsInput
    >;
  };

  export type UserUpdateWithoutBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    active?: BoolFieldUpdateOperationsInput | boolean;
    organizations?: OrganizationUserUpdateManyWithoutUserNestedInput;
    createdBoards?: BoardUpdateManyWithoutCreatedByNestedInput;
    createdColumns?: ColumnUpdateManyWithoutCreatedByNestedInput;
    tasks?: TaskUserUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutBoardsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    active?: BoolFieldUpdateOperationsInput | boolean;
    organizations?: OrganizationUserUncheckedUpdateManyWithoutUserNestedInput;
    createdBoards?: BoardUncheckedUpdateManyWithoutCreatedByNestedInput;
    createdColumns?: ColumnUncheckedUpdateManyWithoutCreatedByNestedInput;
    tasks?: TaskUserUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type TaskCreateWithoutColumnInput = {
    id?: string;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subTasks?: TaskCreateNestedManyWithoutParentTaskInput;
    users?: TaskUserCreateNestedManyWithoutTaskInput;
    parentTask?: TaskCreateNestedOneWithoutSubTasksInput;
    organization: OrganizationCreateNestedOneWithoutTasksInput;
  };

  export type TaskUncheckedCreateWithoutColumnInput = {
    id?: string;
    organizationId: string;
    parentTaskId?: string | null;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput;
    users?: TaskUserUncheckedCreateNestedManyWithoutTaskInput;
  };

  export type TaskCreateOrConnectWithoutColumnInput = {
    where: TaskWhereUniqueInput;
    create: XOR<
      TaskCreateWithoutColumnInput,
      TaskUncheckedCreateWithoutColumnInput
    >;
  };

  export type TaskCreateManyColumnInputEnvelope = {
    data: TaskCreateManyColumnInput | TaskCreateManyColumnInput[];
    skipDuplicates?: boolean;
  };

  export type UserCreateWithoutCreatedColumnsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    active?: boolean;
    boards?: BoardUserCreateNestedManyWithoutUserInput;
    organizations?: OrganizationUserCreateNestedManyWithoutUserInput;
    createdBoards?: BoardCreateNestedManyWithoutCreatedByInput;
    tasks?: TaskUserCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutCreatedColumnsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    active?: boolean;
    boards?: BoardUserUncheckedCreateNestedManyWithoutUserInput;
    organizations?: OrganizationUserUncheckedCreateNestedManyWithoutUserInput;
    createdBoards?: BoardUncheckedCreateNestedManyWithoutCreatedByInput;
    tasks?: TaskUserUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutCreatedColumnsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutCreatedColumnsInput,
      UserUncheckedCreateWithoutCreatedColumnsInput
    >;
  };

  export type BoardCreateWithoutColumnsInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: BoardUserCreateNestedManyWithoutBoardInput;
    createdBy: UserCreateNestedOneWithoutCreatedBoardsInput;
    organization: OrganizationCreateNestedOneWithoutBoardsInput;
  };

  export type BoardUncheckedCreateWithoutColumnsInput = {
    id?: string;
    organizationId: string;
    createdById: string;
    name: string;
    imagePath?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: BoardUserUncheckedCreateNestedManyWithoutBoardInput;
  };

  export type BoardCreateOrConnectWithoutColumnsInput = {
    where: BoardWhereUniqueInput;
    create: XOR<
      BoardCreateWithoutColumnsInput,
      BoardUncheckedCreateWithoutColumnsInput
    >;
  };

  export type TaskUpsertWithWhereUniqueWithoutColumnInput = {
    where: TaskWhereUniqueInput;
    update: XOR<
      TaskUpdateWithoutColumnInput,
      TaskUncheckedUpdateWithoutColumnInput
    >;
    create: XOR<
      TaskCreateWithoutColumnInput,
      TaskUncheckedCreateWithoutColumnInput
    >;
  };

  export type TaskUpdateWithWhereUniqueWithoutColumnInput = {
    where: TaskWhereUniqueInput;
    data: XOR<
      TaskUpdateWithoutColumnInput,
      TaskUncheckedUpdateWithoutColumnInput
    >;
  };

  export type TaskUpdateManyWithWhereWithoutColumnInput = {
    where: TaskScalarWhereInput;
    data: XOR<
      TaskUpdateManyMutationInput,
      TaskUncheckedUpdateManyWithoutColumnInput
    >;
  };

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[];
    OR?: TaskScalarWhereInput[];
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[];
    id?: UuidFilter<'Task'> | string;
    columnId?: UuidFilter<'Task'> | string;
    organizationId?: UuidFilter<'Task'> | string;
    parentTaskId?: UuidNullableFilter<'Task'> | string | null;
    createdById?: UuidFilter<'Task'> | string;
    name?: StringFilter<'Task'> | string;
    description?: StringNullableFilter<'Task'> | string | null;
    position?: IntFilter<'Task'> | number;
    dueDate?: DateTimeNullableFilter<'Task'> | Date | string | null;
    priority?: EnumTaskPriorityFilter<'Task'> | $Enums.TaskPriority;
    createdAt?: DateTimeFilter<'Task'> | Date | string;
    updatedAt?: DateTimeFilter<'Task'> | Date | string;
  };

  export type UserUpsertWithoutCreatedColumnsInput = {
    update: XOR<
      UserUpdateWithoutCreatedColumnsInput,
      UserUncheckedUpdateWithoutCreatedColumnsInput
    >;
    create: XOR<
      UserCreateWithoutCreatedColumnsInput,
      UserUncheckedCreateWithoutCreatedColumnsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutCreatedColumnsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutCreatedColumnsInput,
      UserUncheckedUpdateWithoutCreatedColumnsInput
    >;
  };

  export type UserUpdateWithoutCreatedColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    active?: BoolFieldUpdateOperationsInput | boolean;
    boards?: BoardUserUpdateManyWithoutUserNestedInput;
    organizations?: OrganizationUserUpdateManyWithoutUserNestedInput;
    createdBoards?: BoardUpdateManyWithoutCreatedByNestedInput;
    tasks?: TaskUserUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutCreatedColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    active?: BoolFieldUpdateOperationsInput | boolean;
    boards?: BoardUserUncheckedUpdateManyWithoutUserNestedInput;
    organizations?: OrganizationUserUncheckedUpdateManyWithoutUserNestedInput;
    createdBoards?: BoardUncheckedUpdateManyWithoutCreatedByNestedInput;
    tasks?: TaskUserUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type BoardUpsertWithoutColumnsInput = {
    update: XOR<
      BoardUpdateWithoutColumnsInput,
      BoardUncheckedUpdateWithoutColumnsInput
    >;
    create: XOR<
      BoardCreateWithoutColumnsInput,
      BoardUncheckedCreateWithoutColumnsInput
    >;
    where?: BoardWhereInput;
  };

  export type BoardUpdateToOneWithWhereWithoutColumnsInput = {
    where?: BoardWhereInput;
    data: XOR<
      BoardUpdateWithoutColumnsInput,
      BoardUncheckedUpdateWithoutColumnsInput
    >;
  };

  export type BoardUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: BoardUserUpdateManyWithoutBoardNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutCreatedBoardsNestedInput;
    organization?: OrganizationUpdateOneRequiredWithoutBoardsNestedInput;
  };

  export type BoardUncheckedUpdateWithoutColumnsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: BoardUserUncheckedUpdateManyWithoutBoardNestedInput;
  };

  export type OrganizationCreateWithoutInvitationsInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
    users?: OrganizationUserCreateNestedManyWithoutOrganizationInput;
    boards?: BoardCreateNestedManyWithoutOrganizationInput;
    tasks?: TaskCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutInvitationsInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
    users?: OrganizationUserUncheckedCreateNestedManyWithoutOrganizationInput;
    boards?: BoardUncheckedCreateNestedManyWithoutOrganizationInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutInvitationsInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutInvitationsInput,
      OrganizationUncheckedCreateWithoutInvitationsInput
    >;
  };

  export type OrganizationUpsertWithoutInvitationsInput = {
    update: XOR<
      OrganizationUpdateWithoutInvitationsInput,
      OrganizationUncheckedUpdateWithoutInvitationsInput
    >;
    create: XOR<
      OrganizationCreateWithoutInvitationsInput,
      OrganizationUncheckedCreateWithoutInvitationsInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutInvitationsInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutInvitationsInput,
      OrganizationUncheckedUpdateWithoutInvitationsInput
    >;
  };

  export type OrganizationUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    users?: OrganizationUserUpdateManyWithoutOrganizationNestedInput;
    boards?: BoardUpdateManyWithoutOrganizationNestedInput;
    tasks?: TaskUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutInvitationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    users?: OrganizationUserUncheckedUpdateManyWithoutOrganizationNestedInput;
    boards?: BoardUncheckedUpdateManyWithoutOrganizationNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUserCreateWithoutOrganizationInput = {
    role?: $Enums.OrganizationRole;
    archived?: boolean;
    user: UserCreateNestedOneWithoutOrganizationsInput;
  };

  export type OrganizationUserUncheckedCreateWithoutOrganizationInput = {
    userId: string;
    role?: $Enums.OrganizationRole;
    archived?: boolean;
  };

  export type OrganizationUserCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationUserWhereUniqueInput;
    create: XOR<
      OrganizationUserCreateWithoutOrganizationInput,
      OrganizationUserUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type OrganizationUserCreateManyOrganizationInputEnvelope = {
    data:
      | OrganizationUserCreateManyOrganizationInput
      | OrganizationUserCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type BoardCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: BoardUserCreateNestedManyWithoutBoardInput;
    columns?: ColumnCreateNestedManyWithoutBoardInput;
    createdBy: UserCreateNestedOneWithoutCreatedBoardsInput;
  };

  export type BoardUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    createdById: string;
    name: string;
    imagePath?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: BoardUserUncheckedCreateNestedManyWithoutBoardInput;
    columns?: ColumnUncheckedCreateNestedManyWithoutBoardInput;
  };

  export type BoardCreateOrConnectWithoutOrganizationInput = {
    where: BoardWhereUniqueInput;
    create: XOR<
      BoardCreateWithoutOrganizationInput,
      BoardUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type BoardCreateManyOrganizationInputEnvelope = {
    data: BoardCreateManyOrganizationInput | BoardCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type TaskCreateWithoutOrganizationInput = {
    id?: string;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subTasks?: TaskCreateNestedManyWithoutParentTaskInput;
    users?: TaskUserCreateNestedManyWithoutTaskInput;
    column: ColumnCreateNestedOneWithoutTasksInput;
    parentTask?: TaskCreateNestedOneWithoutSubTasksInput;
  };

  export type TaskUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    columnId: string;
    parentTaskId?: string | null;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput;
    users?: TaskUserUncheckedCreateNestedManyWithoutTaskInput;
  };

  export type TaskCreateOrConnectWithoutOrganizationInput = {
    where: TaskWhereUniqueInput;
    create: XOR<
      TaskCreateWithoutOrganizationInput,
      TaskUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type TaskCreateManyOrganizationInputEnvelope = {
    data: TaskCreateManyOrganizationInput | TaskCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type InvitationCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    role?: $Enums.OrganizationRole;
    status?: $Enums.InvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InvitationUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    role?: $Enums.OrganizationRole;
    status?: $Enums.InvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InvitationCreateOrConnectWithoutOrganizationInput = {
    where: InvitationWhereUniqueInput;
    create: XOR<
      InvitationCreateWithoutOrganizationInput,
      InvitationUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type InvitationCreateManyOrganizationInputEnvelope = {
    data:
      | InvitationCreateManyOrganizationInput
      | InvitationCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type OrganizationUserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationUserWhereUniqueInput;
    update: XOR<
      OrganizationUserUpdateWithoutOrganizationInput,
      OrganizationUserUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      OrganizationUserCreateWithoutOrganizationInput,
      OrganizationUserUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type OrganizationUserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationUserWhereUniqueInput;
    data: XOR<
      OrganizationUserUpdateWithoutOrganizationInput,
      OrganizationUserUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type OrganizationUserUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationUserScalarWhereInput;
    data: XOR<
      OrganizationUserUpdateManyMutationInput,
      OrganizationUserUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type OrganizationUserScalarWhereInput = {
    AND?: OrganizationUserScalarWhereInput | OrganizationUserScalarWhereInput[];
    OR?: OrganizationUserScalarWhereInput[];
    NOT?: OrganizationUserScalarWhereInput | OrganizationUserScalarWhereInput[];
    userId?: UuidFilter<'OrganizationUser'> | string;
    organizationId?: UuidFilter<'OrganizationUser'> | string;
    role?:
      | EnumOrganizationRoleFilter<'OrganizationUser'>
      | $Enums.OrganizationRole;
    archived?: BoolFilter<'OrganizationUser'> | boolean;
  };

  export type BoardUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: BoardWhereUniqueInput;
    update: XOR<
      BoardUpdateWithoutOrganizationInput,
      BoardUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      BoardCreateWithoutOrganizationInput,
      BoardUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type BoardUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: BoardWhereUniqueInput;
    data: XOR<
      BoardUpdateWithoutOrganizationInput,
      BoardUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type BoardUpdateManyWithWhereWithoutOrganizationInput = {
    where: BoardScalarWhereInput;
    data: XOR<
      BoardUpdateManyMutationInput,
      BoardUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type BoardScalarWhereInput = {
    AND?: BoardScalarWhereInput | BoardScalarWhereInput[];
    OR?: BoardScalarWhereInput[];
    NOT?: BoardScalarWhereInput | BoardScalarWhereInput[];
    id?: UuidFilter<'Board'> | string;
    organizationId?: UuidFilter<'Board'> | string;
    createdById?: UuidFilter<'Board'> | string;
    name?: StringFilter<'Board'> | string;
    imagePath?: StringNullableFilter<'Board'> | string | null;
    createdAt?: DateTimeFilter<'Board'> | Date | string;
    updatedAt?: DateTimeFilter<'Board'> | Date | string;
  };

  export type TaskUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: TaskWhereUniqueInput;
    update: XOR<
      TaskUpdateWithoutOrganizationInput,
      TaskUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      TaskCreateWithoutOrganizationInput,
      TaskUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type TaskUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: TaskWhereUniqueInput;
    data: XOR<
      TaskUpdateWithoutOrganizationInput,
      TaskUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type TaskUpdateManyWithWhereWithoutOrganizationInput = {
    where: TaskScalarWhereInput;
    data: XOR<
      TaskUpdateManyMutationInput,
      TaskUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type InvitationUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: InvitationWhereUniqueInput;
    update: XOR<
      InvitationUpdateWithoutOrganizationInput,
      InvitationUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      InvitationCreateWithoutOrganizationInput,
      InvitationUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type InvitationUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: InvitationWhereUniqueInput;
    data: XOR<
      InvitationUpdateWithoutOrganizationInput,
      InvitationUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type InvitationUpdateManyWithWhereWithoutOrganizationInput = {
    where: InvitationScalarWhereInput;
    data: XOR<
      InvitationUpdateManyMutationInput,
      InvitationUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type InvitationScalarWhereInput = {
    AND?: InvitationScalarWhereInput | InvitationScalarWhereInput[];
    OR?: InvitationScalarWhereInput[];
    NOT?: InvitationScalarWhereInput | InvitationScalarWhereInput[];
    id?: UuidFilter<'Invitation'> | string;
    organizationId?: UuidFilter<'Invitation'> | string;
    email?: StringFilter<'Invitation'> | string;
    role?: EnumOrganizationRoleFilter<'Invitation'> | $Enums.OrganizationRole;
    status?: EnumInvitationStatusFilter<'Invitation'> | $Enums.InvitationStatus;
    expiresAt?: DateTimeFilter<'Invitation'> | Date | string;
    createdAt?: DateTimeFilter<'Invitation'> | Date | string;
    updatedAt?: DateTimeFilter<'Invitation'> | Date | string;
  };

  export type UserCreateWithoutOrganizationsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    active?: boolean;
    boards?: BoardUserCreateNestedManyWithoutUserInput;
    createdBoards?: BoardCreateNestedManyWithoutCreatedByInput;
    createdColumns?: ColumnCreateNestedManyWithoutCreatedByInput;
    tasks?: TaskUserCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutOrganizationsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    active?: boolean;
    boards?: BoardUserUncheckedCreateNestedManyWithoutUserInput;
    createdBoards?: BoardUncheckedCreateNestedManyWithoutCreatedByInput;
    createdColumns?: ColumnUncheckedCreateNestedManyWithoutCreatedByInput;
    tasks?: TaskUserUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutOrganizationsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutOrganizationsInput,
      UserUncheckedCreateWithoutOrganizationsInput
    >;
  };

  export type OrganizationCreateWithoutUsersInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
    boards?: BoardCreateNestedManyWithoutOrganizationInput;
    tasks?: TaskCreateNestedManyWithoutOrganizationInput;
    invitations?: InvitationCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
    boards?: BoardUncheckedCreateNestedManyWithoutOrganizationInput;
    tasks?: TaskUncheckedCreateNestedManyWithoutOrganizationInput;
    invitations?: InvitationUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutUsersInput,
      OrganizationUncheckedCreateWithoutUsersInput
    >;
  };

  export type UserUpsertWithoutOrganizationsInput = {
    update: XOR<
      UserUpdateWithoutOrganizationsInput,
      UserUncheckedUpdateWithoutOrganizationsInput
    >;
    create: XOR<
      UserCreateWithoutOrganizationsInput,
      UserUncheckedCreateWithoutOrganizationsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutOrganizationsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutOrganizationsInput,
      UserUncheckedUpdateWithoutOrganizationsInput
    >;
  };

  export type UserUpdateWithoutOrganizationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    active?: BoolFieldUpdateOperationsInput | boolean;
    boards?: BoardUserUpdateManyWithoutUserNestedInput;
    createdBoards?: BoardUpdateManyWithoutCreatedByNestedInput;
    createdColumns?: ColumnUpdateManyWithoutCreatedByNestedInput;
    tasks?: TaskUserUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutOrganizationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    active?: BoolFieldUpdateOperationsInput | boolean;
    boards?: BoardUserUncheckedUpdateManyWithoutUserNestedInput;
    createdBoards?: BoardUncheckedUpdateManyWithoutCreatedByNestedInput;
    createdColumns?: ColumnUncheckedUpdateManyWithoutCreatedByNestedInput;
    tasks?: TaskUserUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<
      OrganizationUpdateWithoutUsersInput,
      OrganizationUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      OrganizationCreateWithoutUsersInput,
      OrganizationUncheckedCreateWithoutUsersInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutUsersInput,
      OrganizationUncheckedUpdateWithoutUsersInput
    >;
  };

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    boards?: BoardUpdateManyWithoutOrganizationNestedInput;
    tasks?: TaskUpdateManyWithoutOrganizationNestedInput;
    invitations?: InvitationUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    boards?: BoardUncheckedUpdateManyWithoutOrganizationNestedInput;
    tasks?: TaskUncheckedUpdateManyWithoutOrganizationNestedInput;
    invitations?: InvitationUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type TaskCreateWithoutParentTaskInput = {
    id?: string;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subTasks?: TaskCreateNestedManyWithoutParentTaskInput;
    users?: TaskUserCreateNestedManyWithoutTaskInput;
    column: ColumnCreateNestedOneWithoutTasksInput;
    organization: OrganizationCreateNestedOneWithoutTasksInput;
  };

  export type TaskUncheckedCreateWithoutParentTaskInput = {
    id?: string;
    columnId: string;
    organizationId: string;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput;
    users?: TaskUserUncheckedCreateNestedManyWithoutTaskInput;
  };

  export type TaskCreateOrConnectWithoutParentTaskInput = {
    where: TaskWhereUniqueInput;
    create: XOR<
      TaskCreateWithoutParentTaskInput,
      TaskUncheckedCreateWithoutParentTaskInput
    >;
  };

  export type TaskCreateManyParentTaskInputEnvelope = {
    data: TaskCreateManyParentTaskInput | TaskCreateManyParentTaskInput[];
    skipDuplicates?: boolean;
  };

  export type TaskUserCreateWithoutTaskInput = {
    user: UserCreateNestedOneWithoutTasksInput;
  };

  export type TaskUserUncheckedCreateWithoutTaskInput = {
    userId: string;
  };

  export type TaskUserCreateOrConnectWithoutTaskInput = {
    where: TaskUserWhereUniqueInput;
    create: XOR<
      TaskUserCreateWithoutTaskInput,
      TaskUserUncheckedCreateWithoutTaskInput
    >;
  };

  export type TaskUserCreateManyTaskInputEnvelope = {
    data: TaskUserCreateManyTaskInput | TaskUserCreateManyTaskInput[];
    skipDuplicates?: boolean;
  };

  export type ColumnCreateWithoutTasksInput = {
    id?: string;
    name: string;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    createdBy: UserCreateNestedOneWithoutCreatedColumnsInput;
    board: BoardCreateNestedOneWithoutColumnsInput;
  };

  export type ColumnUncheckedCreateWithoutTasksInput = {
    id?: string;
    boardId: string;
    createdById: string;
    name: string;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ColumnCreateOrConnectWithoutTasksInput = {
    where: ColumnWhereUniqueInput;
    create: XOR<
      ColumnCreateWithoutTasksInput,
      ColumnUncheckedCreateWithoutTasksInput
    >;
  };

  export type TaskCreateWithoutSubTasksInput = {
    id?: string;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: TaskUserCreateNestedManyWithoutTaskInput;
    column: ColumnCreateNestedOneWithoutTasksInput;
    parentTask?: TaskCreateNestedOneWithoutSubTasksInput;
    organization: OrganizationCreateNestedOneWithoutTasksInput;
  };

  export type TaskUncheckedCreateWithoutSubTasksInput = {
    id?: string;
    columnId: string;
    organizationId: string;
    parentTaskId?: string | null;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: TaskUserUncheckedCreateNestedManyWithoutTaskInput;
  };

  export type TaskCreateOrConnectWithoutSubTasksInput = {
    where: TaskWhereUniqueInput;
    create: XOR<
      TaskCreateWithoutSubTasksInput,
      TaskUncheckedCreateWithoutSubTasksInput
    >;
  };

  export type OrganizationCreateWithoutTasksInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
    users?: OrganizationUserCreateNestedManyWithoutOrganizationInput;
    boards?: BoardCreateNestedManyWithoutOrganizationInput;
    invitations?: InvitationCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutTasksInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
    users?: OrganizationUserUncheckedCreateNestedManyWithoutOrganizationInput;
    boards?: BoardUncheckedCreateNestedManyWithoutOrganizationInput;
    invitations?: InvitationUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutTasksInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutTasksInput,
      OrganizationUncheckedCreateWithoutTasksInput
    >;
  };

  export type TaskUpsertWithWhereUniqueWithoutParentTaskInput = {
    where: TaskWhereUniqueInput;
    update: XOR<
      TaskUpdateWithoutParentTaskInput,
      TaskUncheckedUpdateWithoutParentTaskInput
    >;
    create: XOR<
      TaskCreateWithoutParentTaskInput,
      TaskUncheckedCreateWithoutParentTaskInput
    >;
  };

  export type TaskUpdateWithWhereUniqueWithoutParentTaskInput = {
    where: TaskWhereUniqueInput;
    data: XOR<
      TaskUpdateWithoutParentTaskInput,
      TaskUncheckedUpdateWithoutParentTaskInput
    >;
  };

  export type TaskUpdateManyWithWhereWithoutParentTaskInput = {
    where: TaskScalarWhereInput;
    data: XOR<
      TaskUpdateManyMutationInput,
      TaskUncheckedUpdateManyWithoutParentTaskInput
    >;
  };

  export type TaskUserUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskUserWhereUniqueInput;
    update: XOR<
      TaskUserUpdateWithoutTaskInput,
      TaskUserUncheckedUpdateWithoutTaskInput
    >;
    create: XOR<
      TaskUserCreateWithoutTaskInput,
      TaskUserUncheckedCreateWithoutTaskInput
    >;
  };

  export type TaskUserUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskUserWhereUniqueInput;
    data: XOR<
      TaskUserUpdateWithoutTaskInput,
      TaskUserUncheckedUpdateWithoutTaskInput
    >;
  };

  export type TaskUserUpdateManyWithWhereWithoutTaskInput = {
    where: TaskUserScalarWhereInput;
    data: XOR<
      TaskUserUpdateManyMutationInput,
      TaskUserUncheckedUpdateManyWithoutTaskInput
    >;
  };

  export type TaskUserScalarWhereInput = {
    AND?: TaskUserScalarWhereInput | TaskUserScalarWhereInput[];
    OR?: TaskUserScalarWhereInput[];
    NOT?: TaskUserScalarWhereInput | TaskUserScalarWhereInput[];
    taskId?: UuidFilter<'TaskUser'> | string;
    userId?: UuidFilter<'TaskUser'> | string;
  };

  export type ColumnUpsertWithoutTasksInput = {
    update: XOR<
      ColumnUpdateWithoutTasksInput,
      ColumnUncheckedUpdateWithoutTasksInput
    >;
    create: XOR<
      ColumnCreateWithoutTasksInput,
      ColumnUncheckedCreateWithoutTasksInput
    >;
    where?: ColumnWhereInput;
  };

  export type ColumnUpdateToOneWithWhereWithoutTasksInput = {
    where?: ColumnWhereInput;
    data: XOR<
      ColumnUpdateWithoutTasksInput,
      ColumnUncheckedUpdateWithoutTasksInput
    >;
  };

  export type ColumnUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    position?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: UserUpdateOneRequiredWithoutCreatedColumnsNestedInput;
    board?: BoardUpdateOneRequiredWithoutColumnsNestedInput;
  };

  export type ColumnUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    boardId?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    position?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TaskUpsertWithoutSubTasksInput = {
    update: XOR<
      TaskUpdateWithoutSubTasksInput,
      TaskUncheckedUpdateWithoutSubTasksInput
    >;
    create: XOR<
      TaskCreateWithoutSubTasksInput,
      TaskUncheckedCreateWithoutSubTasksInput
    >;
    where?: TaskWhereInput;
  };

  export type TaskUpdateToOneWithWhereWithoutSubTasksInput = {
    where?: TaskWhereInput;
    data: XOR<
      TaskUpdateWithoutSubTasksInput,
      TaskUncheckedUpdateWithoutSubTasksInput
    >;
  };

  export type TaskUpdateWithoutSubTasksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: TaskUserUpdateManyWithoutTaskNestedInput;
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput;
    parentTask?: TaskUpdateOneWithoutSubTasksNestedInput;
    organization?: OrganizationUpdateOneRequiredWithoutTasksNestedInput;
  };

  export type TaskUncheckedUpdateWithoutSubTasksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    columnId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: TaskUserUncheckedUpdateManyWithoutTaskNestedInput;
  };

  export type OrganizationUpsertWithoutTasksInput = {
    update: XOR<
      OrganizationUpdateWithoutTasksInput,
      OrganizationUncheckedUpdateWithoutTasksInput
    >;
    create: XOR<
      OrganizationCreateWithoutTasksInput,
      OrganizationUncheckedCreateWithoutTasksInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutTasksInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutTasksInput,
      OrganizationUncheckedUpdateWithoutTasksInput
    >;
  };

  export type OrganizationUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    users?: OrganizationUserUpdateManyWithoutOrganizationNestedInput;
    boards?: BoardUpdateManyWithoutOrganizationNestedInput;
    invitations?: InvitationUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    users?: OrganizationUserUncheckedUpdateManyWithoutOrganizationNestedInput;
    boards?: BoardUncheckedUpdateManyWithoutOrganizationNestedInput;
    invitations?: InvitationUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type TaskCreateWithoutUsersInput = {
    id?: string;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subTasks?: TaskCreateNestedManyWithoutParentTaskInput;
    column: ColumnCreateNestedOneWithoutTasksInput;
    parentTask?: TaskCreateNestedOneWithoutSubTasksInput;
    organization: OrganizationCreateNestedOneWithoutTasksInput;
  };

  export type TaskUncheckedCreateWithoutUsersInput = {
    id?: string;
    columnId: string;
    organizationId: string;
    parentTaskId?: string | null;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    subTasks?: TaskUncheckedCreateNestedManyWithoutParentTaskInput;
  };

  export type TaskCreateOrConnectWithoutUsersInput = {
    where: TaskWhereUniqueInput;
    create: XOR<
      TaskCreateWithoutUsersInput,
      TaskUncheckedCreateWithoutUsersInput
    >;
  };

  export type UserCreateWithoutTasksInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    active?: boolean;
    boards?: BoardUserCreateNestedManyWithoutUserInput;
    organizations?: OrganizationUserCreateNestedManyWithoutUserInput;
    createdBoards?: BoardCreateNestedManyWithoutCreatedByInput;
    createdColumns?: ColumnCreateNestedManyWithoutCreatedByInput;
  };

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    active?: boolean;
    boards?: BoardUserUncheckedCreateNestedManyWithoutUserInput;
    organizations?: OrganizationUserUncheckedCreateNestedManyWithoutUserInput;
    createdBoards?: BoardUncheckedCreateNestedManyWithoutCreatedByInput;
    createdColumns?: ColumnUncheckedCreateNestedManyWithoutCreatedByInput;
  };

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutTasksInput,
      UserUncheckedCreateWithoutTasksInput
    >;
  };

  export type TaskUpsertWithoutUsersInput = {
    update: XOR<
      TaskUpdateWithoutUsersInput,
      TaskUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      TaskCreateWithoutUsersInput,
      TaskUncheckedCreateWithoutUsersInput
    >;
    where?: TaskWhereInput;
  };

  export type TaskUpdateToOneWithWhereWithoutUsersInput = {
    where?: TaskWhereInput;
    data: XOR<
      TaskUpdateWithoutUsersInput,
      TaskUncheckedUpdateWithoutUsersInput
    >;
  };

  export type TaskUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subTasks?: TaskUpdateManyWithoutParentTaskNestedInput;
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput;
    parentTask?: TaskUpdateOneWithoutSubTasksNestedInput;
    organization?: OrganizationUpdateOneRequiredWithoutTasksNestedInput;
  };

  export type TaskUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    columnId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subTasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput;
  };

  export type UserUpsertWithoutTasksInput = {
    update: XOR<
      UserUpdateWithoutTasksInput,
      UserUncheckedUpdateWithoutTasksInput
    >;
    create: XOR<
      UserCreateWithoutTasksInput,
      UserUncheckedCreateWithoutTasksInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutTasksInput,
      UserUncheckedUpdateWithoutTasksInput
    >;
  };

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    active?: BoolFieldUpdateOperationsInput | boolean;
    boards?: BoardUserUpdateManyWithoutUserNestedInput;
    organizations?: OrganizationUserUpdateManyWithoutUserNestedInput;
    createdBoards?: BoardUpdateManyWithoutCreatedByNestedInput;
    createdColumns?: ColumnUpdateManyWithoutCreatedByNestedInput;
  };

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    active?: BoolFieldUpdateOperationsInput | boolean;
    boards?: BoardUserUncheckedUpdateManyWithoutUserNestedInput;
    organizations?: OrganizationUserUncheckedUpdateManyWithoutUserNestedInput;
    createdBoards?: BoardUncheckedUpdateManyWithoutCreatedByNestedInput;
    createdColumns?: ColumnUncheckedUpdateManyWithoutCreatedByNestedInput;
  };

  export type BoardUserCreateWithoutUserInput = {
    role?: $Enums.BoardRole;
    board: BoardCreateNestedOneWithoutUsersInput;
  };

  export type BoardUserUncheckedCreateWithoutUserInput = {
    boardId: string;
    role?: $Enums.BoardRole;
  };

  export type BoardUserCreateOrConnectWithoutUserInput = {
    where: BoardUserWhereUniqueInput;
    create: XOR<
      BoardUserCreateWithoutUserInput,
      BoardUserUncheckedCreateWithoutUserInput
    >;
  };

  export type BoardUserCreateManyUserInputEnvelope = {
    data: BoardUserCreateManyUserInput | BoardUserCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type OrganizationUserCreateWithoutUserInput = {
    role?: $Enums.OrganizationRole;
    archived?: boolean;
    organization: OrganizationCreateNestedOneWithoutUsersInput;
  };

  export type OrganizationUserUncheckedCreateWithoutUserInput = {
    organizationId: string;
    role?: $Enums.OrganizationRole;
    archived?: boolean;
  };

  export type OrganizationUserCreateOrConnectWithoutUserInput = {
    where: OrganizationUserWhereUniqueInput;
    create: XOR<
      OrganizationUserCreateWithoutUserInput,
      OrganizationUserUncheckedCreateWithoutUserInput
    >;
  };

  export type OrganizationUserCreateManyUserInputEnvelope = {
    data:
      | OrganizationUserCreateManyUserInput
      | OrganizationUserCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type BoardCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    imagePath?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: BoardUserCreateNestedManyWithoutBoardInput;
    columns?: ColumnCreateNestedManyWithoutBoardInput;
    organization: OrganizationCreateNestedOneWithoutBoardsInput;
  };

  export type BoardUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    organizationId: string;
    name: string;
    imagePath?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: BoardUserUncheckedCreateNestedManyWithoutBoardInput;
    columns?: ColumnUncheckedCreateNestedManyWithoutBoardInput;
  };

  export type BoardCreateOrConnectWithoutCreatedByInput = {
    where: BoardWhereUniqueInput;
    create: XOR<
      BoardCreateWithoutCreatedByInput,
      BoardUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type BoardCreateManyCreatedByInputEnvelope = {
    data: BoardCreateManyCreatedByInput | BoardCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
  };

  export type ColumnCreateWithoutCreatedByInput = {
    id?: string;
    name: string;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: TaskCreateNestedManyWithoutColumnInput;
    board: BoardCreateNestedOneWithoutColumnsInput;
  };

  export type ColumnUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    boardId: string;
    name: string;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    tasks?: TaskUncheckedCreateNestedManyWithoutColumnInput;
  };

  export type ColumnCreateOrConnectWithoutCreatedByInput = {
    where: ColumnWhereUniqueInput;
    create: XOR<
      ColumnCreateWithoutCreatedByInput,
      ColumnUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type ColumnCreateManyCreatedByInputEnvelope = {
    data: ColumnCreateManyCreatedByInput | ColumnCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
  };

  export type TaskUserCreateWithoutUserInput = {
    task: TaskCreateNestedOneWithoutUsersInput;
  };

  export type TaskUserUncheckedCreateWithoutUserInput = {
    taskId: string;
  };

  export type TaskUserCreateOrConnectWithoutUserInput = {
    where: TaskUserWhereUniqueInput;
    create: XOR<
      TaskUserCreateWithoutUserInput,
      TaskUserUncheckedCreateWithoutUserInput
    >;
  };

  export type TaskUserCreateManyUserInputEnvelope = {
    data: TaskUserCreateManyUserInput | TaskUserCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type BoardUserUpsertWithWhereUniqueWithoutUserInput = {
    where: BoardUserWhereUniqueInput;
    update: XOR<
      BoardUserUpdateWithoutUserInput,
      BoardUserUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      BoardUserCreateWithoutUserInput,
      BoardUserUncheckedCreateWithoutUserInput
    >;
  };

  export type BoardUserUpdateWithWhereUniqueWithoutUserInput = {
    where: BoardUserWhereUniqueInput;
    data: XOR<
      BoardUserUpdateWithoutUserInput,
      BoardUserUncheckedUpdateWithoutUserInput
    >;
  };

  export type BoardUserUpdateManyWithWhereWithoutUserInput = {
    where: BoardUserScalarWhereInput;
    data: XOR<
      BoardUserUpdateManyMutationInput,
      BoardUserUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type OrganizationUserUpsertWithWhereUniqueWithoutUserInput = {
    where: OrganizationUserWhereUniqueInput;
    update: XOR<
      OrganizationUserUpdateWithoutUserInput,
      OrganizationUserUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      OrganizationUserCreateWithoutUserInput,
      OrganizationUserUncheckedCreateWithoutUserInput
    >;
  };

  export type OrganizationUserUpdateWithWhereUniqueWithoutUserInput = {
    where: OrganizationUserWhereUniqueInput;
    data: XOR<
      OrganizationUserUpdateWithoutUserInput,
      OrganizationUserUncheckedUpdateWithoutUserInput
    >;
  };

  export type OrganizationUserUpdateManyWithWhereWithoutUserInput = {
    where: OrganizationUserScalarWhereInput;
    data: XOR<
      OrganizationUserUpdateManyMutationInput,
      OrganizationUserUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type BoardUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: BoardWhereUniqueInput;
    update: XOR<
      BoardUpdateWithoutCreatedByInput,
      BoardUncheckedUpdateWithoutCreatedByInput
    >;
    create: XOR<
      BoardCreateWithoutCreatedByInput,
      BoardUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type BoardUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: BoardWhereUniqueInput;
    data: XOR<
      BoardUpdateWithoutCreatedByInput,
      BoardUncheckedUpdateWithoutCreatedByInput
    >;
  };

  export type BoardUpdateManyWithWhereWithoutCreatedByInput = {
    where: BoardScalarWhereInput;
    data: XOR<
      BoardUpdateManyMutationInput,
      BoardUncheckedUpdateManyWithoutCreatedByInput
    >;
  };

  export type ColumnUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ColumnWhereUniqueInput;
    update: XOR<
      ColumnUpdateWithoutCreatedByInput,
      ColumnUncheckedUpdateWithoutCreatedByInput
    >;
    create: XOR<
      ColumnCreateWithoutCreatedByInput,
      ColumnUncheckedCreateWithoutCreatedByInput
    >;
  };

  export type ColumnUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ColumnWhereUniqueInput;
    data: XOR<
      ColumnUpdateWithoutCreatedByInput,
      ColumnUncheckedUpdateWithoutCreatedByInput
    >;
  };

  export type ColumnUpdateManyWithWhereWithoutCreatedByInput = {
    where: ColumnScalarWhereInput;
    data: XOR<
      ColumnUpdateManyMutationInput,
      ColumnUncheckedUpdateManyWithoutCreatedByInput
    >;
  };

  export type TaskUserUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskUserWhereUniqueInput;
    update: XOR<
      TaskUserUpdateWithoutUserInput,
      TaskUserUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      TaskUserCreateWithoutUserInput,
      TaskUserUncheckedCreateWithoutUserInput
    >;
  };

  export type TaskUserUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskUserWhereUniqueInput;
    data: XOR<
      TaskUserUpdateWithoutUserInput,
      TaskUserUncheckedUpdateWithoutUserInput
    >;
  };

  export type TaskUserUpdateManyWithWhereWithoutUserInput = {
    where: TaskUserScalarWhereInput;
    data: XOR<
      TaskUserUpdateManyMutationInput,
      TaskUserUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type BoardUserCreateManyBoardInput = {
    userId: string;
    role?: $Enums.BoardRole;
  };

  export type ColumnCreateManyBoardInput = {
    id?: string;
    createdById: string;
    name: string;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type BoardUserUpdateWithoutBoardInput = {
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole;
    user?: UserUpdateOneRequiredWithoutBoardsNestedInput;
  };

  export type BoardUserUncheckedUpdateWithoutBoardInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole;
  };

  export type BoardUserUncheckedUpdateManyWithoutBoardInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole;
  };

  export type ColumnUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    position?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: TaskUpdateManyWithoutColumnNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutCreatedColumnsNestedInput;
  };

  export type ColumnUncheckedUpdateWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    position?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: TaskUncheckedUpdateManyWithoutColumnNestedInput;
  };

  export type ColumnUncheckedUpdateManyWithoutBoardInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    position?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TaskCreateManyColumnInput = {
    id?: string;
    organizationId: string;
    parentTaskId?: string | null;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TaskUpdateWithoutColumnInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subTasks?: TaskUpdateManyWithoutParentTaskNestedInput;
    users?: TaskUserUpdateManyWithoutTaskNestedInput;
    parentTask?: TaskUpdateOneWithoutSubTasksNestedInput;
    organization?: OrganizationUpdateOneRequiredWithoutTasksNestedInput;
  };

  export type TaskUncheckedUpdateWithoutColumnInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subTasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput;
    users?: TaskUserUncheckedUpdateManyWithoutTaskNestedInput;
  };

  export type TaskUncheckedUpdateManyWithoutColumnInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationUserCreateManyOrganizationInput = {
    userId: string;
    role?: $Enums.OrganizationRole;
    archived?: boolean;
  };

  export type BoardCreateManyOrganizationInput = {
    id?: string;
    createdById: string;
    name: string;
    imagePath?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TaskCreateManyOrganizationInput = {
    id?: string;
    columnId: string;
    parentTaskId?: string | null;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type InvitationCreateManyOrganizationInput = {
    id?: string;
    email: string;
    role?: $Enums.OrganizationRole;
    status?: $Enums.InvitationStatus;
    expiresAt: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrganizationUserUpdateWithoutOrganizationInput = {
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    archived?: BoolFieldUpdateOperationsInput | boolean;
    user?: UserUpdateOneRequiredWithoutOrganizationsNestedInput;
  };

  export type OrganizationUserUncheckedUpdateWithoutOrganizationInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    archived?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type OrganizationUserUncheckedUpdateManyWithoutOrganizationInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    archived?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type BoardUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: BoardUserUpdateManyWithoutBoardNestedInput;
    columns?: ColumnUpdateManyWithoutBoardNestedInput;
    createdBy?: UserUpdateOneRequiredWithoutCreatedBoardsNestedInput;
  };

  export type BoardUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: BoardUserUncheckedUpdateManyWithoutBoardNestedInput;
    columns?: ColumnUncheckedUpdateManyWithoutBoardNestedInput;
  };

  export type BoardUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TaskUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subTasks?: TaskUpdateManyWithoutParentTaskNestedInput;
    users?: TaskUserUpdateManyWithoutTaskNestedInput;
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput;
    parentTask?: TaskUpdateOneWithoutSubTasksNestedInput;
  };

  export type TaskUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    columnId?: StringFieldUpdateOperationsInput | string;
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subTasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput;
    users?: TaskUserUncheckedUpdateManyWithoutTaskNestedInput;
  };

  export type TaskUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    columnId?: StringFieldUpdateOperationsInput | string;
    parentTaskId?: NullableStringFieldUpdateOperationsInput | string | null;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvitationUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumInvitationStatusFieldUpdateOperationsInput
      | $Enums.InvitationStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvitationUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumInvitationStatusFieldUpdateOperationsInput
      | $Enums.InvitationStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InvitationUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    status?:
      | EnumInvitationStatusFieldUpdateOperationsInput
      | $Enums.InvitationStatus;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TaskCreateManyParentTaskInput = {
    id?: string;
    columnId: string;
    organizationId: string;
    createdById: string;
    name: string;
    description?: string | null;
    position: number;
    dueDate?: Date | string | null;
    priority: $Enums.TaskPriority;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TaskUserCreateManyTaskInput = {
    userId: string;
  };

  export type TaskUpdateWithoutParentTaskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subTasks?: TaskUpdateManyWithoutParentTaskNestedInput;
    users?: TaskUserUpdateManyWithoutTaskNestedInput;
    column?: ColumnUpdateOneRequiredWithoutTasksNestedInput;
    organization?: OrganizationUpdateOneRequiredWithoutTasksNestedInput;
  };

  export type TaskUncheckedUpdateWithoutParentTaskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    columnId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    subTasks?: TaskUncheckedUpdateManyWithoutParentTaskNestedInput;
    users?: TaskUserUncheckedUpdateManyWithoutTaskNestedInput;
  };

  export type TaskUncheckedUpdateManyWithoutParentTaskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    columnId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    createdById?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    position?: IntFieldUpdateOperationsInput | number;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    priority?: EnumTaskPriorityFieldUpdateOperationsInput | $Enums.TaskPriority;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TaskUserUpdateWithoutTaskInput = {
    user?: UserUpdateOneRequiredWithoutTasksNestedInput;
  };

  export type TaskUserUncheckedUpdateWithoutTaskInput = {
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type TaskUserUncheckedUpdateManyWithoutTaskInput = {
    userId?: StringFieldUpdateOperationsInput | string;
  };

  export type BoardUserCreateManyUserInput = {
    boardId: string;
    role?: $Enums.BoardRole;
  };

  export type OrganizationUserCreateManyUserInput = {
    organizationId: string;
    role?: $Enums.OrganizationRole;
    archived?: boolean;
  };

  export type BoardCreateManyCreatedByInput = {
    id?: string;
    organizationId: string;
    name: string;
    imagePath?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ColumnCreateManyCreatedByInput = {
    id?: string;
    boardId: string;
    name: string;
    position: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type TaskUserCreateManyUserInput = {
    taskId: string;
  };

  export type BoardUserUpdateWithoutUserInput = {
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole;
    board?: BoardUpdateOneRequiredWithoutUsersNestedInput;
  };

  export type BoardUserUncheckedUpdateWithoutUserInput = {
    boardId?: StringFieldUpdateOperationsInput | string;
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole;
  };

  export type BoardUserUncheckedUpdateManyWithoutUserInput = {
    boardId?: StringFieldUpdateOperationsInput | string;
    role?: EnumBoardRoleFieldUpdateOperationsInput | $Enums.BoardRole;
  };

  export type OrganizationUserUpdateWithoutUserInput = {
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    archived?: BoolFieldUpdateOperationsInput | boolean;
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput;
  };

  export type OrganizationUserUncheckedUpdateWithoutUserInput = {
    organizationId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    archived?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type OrganizationUserUncheckedUpdateManyWithoutUserInput = {
    organizationId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    archived?: BoolFieldUpdateOperationsInput | boolean;
  };

  export type BoardUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: BoardUserUpdateManyWithoutBoardNestedInput;
    columns?: ColumnUpdateManyWithoutBoardNestedInput;
    organization?: OrganizationUpdateOneRequiredWithoutBoardsNestedInput;
  };

  export type BoardUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: BoardUserUncheckedUpdateManyWithoutBoardNestedInput;
    columns?: ColumnUncheckedUpdateManyWithoutBoardNestedInput;
  };

  export type BoardUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    imagePath?: NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ColumnUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    position?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: TaskUpdateManyWithoutColumnNestedInput;
    board?: BoardUpdateOneRequiredWithoutColumnsNestedInput;
  };

  export type ColumnUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    boardId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    position?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: TaskUncheckedUpdateManyWithoutColumnNestedInput;
  };

  export type ColumnUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string;
    boardId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    position?: IntFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type TaskUserUpdateWithoutUserInput = {
    task?: TaskUpdateOneRequiredWithoutUsersNestedInput;
  };

  export type TaskUserUncheckedUpdateWithoutUserInput = {
    taskId?: StringFieldUpdateOperationsInput | string;
  };

  export type TaskUserUncheckedUpdateManyWithoutUserInput = {
    taskId?: StringFieldUpdateOperationsInput | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
