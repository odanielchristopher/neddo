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
 * Model Leads
 *
 */
export type Leads = $Result.DefaultSelection<Prisma.$LeadsPayload>;
/**
 * Model Interactions
 *
 */
export type Interactions =
  $Result.DefaultSelection<Prisma.$InteractionsPayload>;
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
 * Model User
 *
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const OrganizationRole: {
    OWNER: 'OWNER';
    ADMIN: 'ADMIN';
    MEMBER: 'MEMBER';
    READONLY: 'READONLY';
  };

  export type OrganizationRole =
    (typeof OrganizationRole)[keyof typeof OrganizationRole];
}

export type OrganizationRole = $Enums.OrganizationRole;

export const OrganizationRole: typeof $Enums.OrganizationRole;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Leads
 * const leads = await prisma.leads.findMany()
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
   * // Fetch zero or more Leads
   * const leads = await prisma.leads.findMany()
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
   * `prisma.leads`: Exposes CRUD operations for the **Leads** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Leads
   * const leads = await prisma.leads.findMany()
   * ```
   */
  get leads(): Prisma.LeadsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.interactions`: Exposes CRUD operations for the **Interactions** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Interactions
   * const interactions = await prisma.interactions.findMany()
   * ```
   */
  get interactions(): Prisma.InteractionsDelegate<ExtArgs, ClientOptions>;

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
    Leads: 'Leads';
    Interactions: 'Interactions';
    Organization: 'Organization';
    OrganizationUser: 'OrganizationUser';
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
        | 'leads'
        | 'interactions'
        | 'organization'
        | 'organizationUser'
        | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Leads: {
        payload: Prisma.$LeadsPayload<ExtArgs>;
        fields: Prisma.LeadsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.LeadsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.LeadsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>;
          };
          findFirst: {
            args: Prisma.LeadsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.LeadsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>;
          };
          findMany: {
            args: Prisma.LeadsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>[];
          };
          create: {
            args: Prisma.LeadsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>;
          };
          createMany: {
            args: Prisma.LeadsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.LeadsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>[];
          };
          delete: {
            args: Prisma.LeadsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>;
          };
          update: {
            args: Prisma.LeadsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>;
          };
          deleteMany: {
            args: Prisma.LeadsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.LeadsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.LeadsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>[];
          };
          upsert: {
            args: Prisma.LeadsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$LeadsPayload>;
          };
          aggregate: {
            args: Prisma.LeadsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateLeads>;
          };
          groupBy: {
            args: Prisma.LeadsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<LeadsGroupByOutputType>[];
          };
          count: {
            args: Prisma.LeadsCountArgs<ExtArgs>;
            result: $Utils.Optional<LeadsCountAggregateOutputType> | number;
          };
        };
      };
      Interactions: {
        payload: Prisma.$InteractionsPayload<ExtArgs>;
        fields: Prisma.InteractionsFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.InteractionsFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionsPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.InteractionsFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionsPayload>;
          };
          findFirst: {
            args: Prisma.InteractionsFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionsPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.InteractionsFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionsPayload>;
          };
          findMany: {
            args: Prisma.InteractionsFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionsPayload>[];
          };
          create: {
            args: Prisma.InteractionsCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionsPayload>;
          };
          createMany: {
            args: Prisma.InteractionsCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.InteractionsCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionsPayload>[];
          };
          delete: {
            args: Prisma.InteractionsDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionsPayload>;
          };
          update: {
            args: Prisma.InteractionsUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionsPayload>;
          };
          deleteMany: {
            args: Prisma.InteractionsDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.InteractionsUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.InteractionsUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionsPayload>[];
          };
          upsert: {
            args: Prisma.InteractionsUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$InteractionsPayload>;
          };
          aggregate: {
            args: Prisma.InteractionsAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInteractions>;
          };
          groupBy: {
            args: Prisma.InteractionsGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InteractionsGroupByOutputType>[];
          };
          count: {
            args: Prisma.InteractionsCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<InteractionsCountAggregateOutputType>
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
    leads?: LeadsOmit;
    interactions?: InteractionsOmit;
    organization?: OrganizationOmit;
    organizationUser?: OrganizationUserOmit;
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
   * Count Type LeadsCountOutputType
   */

  export type LeadsCountOutputType = {
    interactions: number;
  };

  export type LeadsCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    interactions?: boolean | LeadsCountOutputTypeCountInteractionsArgs;
  };

  // Custom InputTypes
  /**
   * LeadsCountOutputType without action
   */
  export type LeadsCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the LeadsCountOutputType
     */
    select?: LeadsCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * LeadsCountOutputType without action
   */
  export type LeadsCountOutputTypeCountInteractionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InteractionsWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    users: number;
    leads: number;
    interactions: number;
  };

  export type OrganizationCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs;
    leads?: boolean | OrganizationCountOutputTypeCountLeadsArgs;
    interactions?: boolean | OrganizationCountOutputTypeCountInteractionsArgs;
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
  export type OrganizationCountOutputTypeCountLeadsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LeadsWhereInput;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountInteractionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InteractionsWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    organizations: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organizations?: boolean | UserCountOutputTypeCountOrganizationsArgs;
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
  export type UserCountOutputTypeCountOrganizationsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrganizationUserWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Leads
   */

  export type AggregateLeads = {
    _count: LeadsCountAggregateOutputType | null;
    _min: LeadsMinAggregateOutputType | null;
    _max: LeadsMaxAggregateOutputType | null;
  };

  export type LeadsMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
  };

  export type LeadsMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
  };

  export type LeadsCountAggregateOutputType = {
    id: number;
    organizationId: number;
    name: number;
    email: number;
    phone: number;
    _all: number;
  };

  export type LeadsMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    email?: true;
    phone?: true;
  };

  export type LeadsMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    email?: true;
    phone?: true;
  };

  export type LeadsCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    name?: true;
    email?: true;
    phone?: true;
    _all?: true;
  };

  export type LeadsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Leads to aggregate.
     */
    where?: LeadsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: LeadsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Leads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Leads
     **/
    _count?: true | LeadsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: LeadsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: LeadsMaxAggregateInputType;
  };

  export type GetLeadsAggregateType<T extends LeadsAggregateArgs> = {
    [P in keyof T & keyof AggregateLeads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeads[P]>
      : GetScalarType<T[P], AggregateLeads[P]>;
  };

  export type LeadsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: LeadsWhereInput;
    orderBy?:
      | LeadsOrderByWithAggregationInput
      | LeadsOrderByWithAggregationInput[];
    by: LeadsScalarFieldEnum[] | LeadsScalarFieldEnum;
    having?: LeadsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LeadsCountAggregateInputType | true;
    _min?: LeadsMinAggregateInputType;
    _max?: LeadsMaxAggregateInputType;
  };

  export type LeadsGroupByOutputType = {
    id: string;
    organizationId: string;
    name: string;
    email: string;
    phone: string;
    _count: LeadsCountAggregateOutputType | null;
    _min: LeadsMinAggregateOutputType | null;
    _max: LeadsMaxAggregateOutputType | null;
  };

  type GetLeadsGroupByPayload<T extends LeadsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<LeadsGroupByOutputType, T['by']> & {
          [P in keyof T & keyof LeadsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadsGroupByOutputType[P]>
            : GetScalarType<T[P], LeadsGroupByOutputType[P]>;
        }
      >
    >;

  export type LeadsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      name?: boolean;
      email?: boolean;
      phone?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      interactions?: boolean | Leads$interactionsArgs<ExtArgs>;
      _count?: boolean | LeadsCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['leads']
  >;

  export type LeadsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      name?: boolean;
      email?: boolean;
      phone?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['leads']
  >;

  export type LeadsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      name?: boolean;
      email?: boolean;
      phone?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['leads']
  >;

  export type LeadsSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
  };

  export type LeadsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'organizationId' | 'name' | 'email' | 'phone',
    ExtArgs['result']['leads']
  >;
  export type LeadsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    interactions?: boolean | Leads$interactionsArgs<ExtArgs>;
    _count?: boolean | LeadsCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type LeadsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };
  export type LeadsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
  };

  export type $LeadsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Leads';
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>;
      interactions: Prisma.$InteractionsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        organizationId: string;
        name: string;
        email: string;
        phone: string;
      },
      ExtArgs['result']['leads']
    >;
    composites: {};
  };

  type LeadsGetPayload<
    S extends boolean | null | undefined | LeadsDefaultArgs,
  > = $Result.GetResult<Prisma.$LeadsPayload, S>;

  type LeadsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<LeadsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LeadsCountAggregateInputType | true;
  };

  export interface LeadsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Leads'];
      meta: { name: 'Leads' };
    };
    /**
     * Find zero or one Leads that matches the filter.
     * @param {LeadsFindUniqueArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadsFindUniqueArgs>(
      args: SelectSubset<T, LeadsFindUniqueArgs<ExtArgs>>,
    ): Prisma__LeadsClient<
      $Result.GetResult<
        Prisma.$LeadsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Leads that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeadsFindUniqueOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, LeadsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__LeadsClient<
      $Result.GetResult<
        Prisma.$LeadsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsFindFirstArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadsFindFirstArgs>(
      args?: SelectSubset<T, LeadsFindFirstArgs<ExtArgs>>,
    ): Prisma__LeadsClient<
      $Result.GetResult<
        Prisma.$LeadsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Leads that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsFindFirstOrThrowArgs} args - Arguments to find a Leads
     * @example
     * // Get one Leads
     * const leads = await prisma.leads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, LeadsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__LeadsClient<
      $Result.GetResult<
        Prisma.$LeadsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.leads.findMany()
     *
     * // Get first 10 Leads
     * const leads = await prisma.leads.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const leadsWithIdOnly = await prisma.leads.findMany({ select: { id: true } })
     *
     */
    findMany<T extends LeadsFindManyArgs>(
      args?: SelectSubset<T, LeadsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LeadsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Leads.
     * @param {LeadsCreateArgs} args - Arguments to create a Leads.
     * @example
     * // Create one Leads
     * const Leads = await prisma.leads.create({
     *   data: {
     *     // ... data to create a Leads
     *   }
     * })
     *
     */
    create<T extends LeadsCreateArgs>(
      args: SelectSubset<T, LeadsCreateArgs<ExtArgs>>,
    ): Prisma__LeadsClient<
      $Result.GetResult<
        Prisma.$LeadsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Leads.
     * @param {LeadsCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends LeadsCreateManyArgs>(
      args?: SelectSubset<T, LeadsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadsCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const leads = await prisma.leads.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends LeadsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, LeadsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LeadsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Leads.
     * @param {LeadsDeleteArgs} args - Arguments to delete one Leads.
     * @example
     * // Delete one Leads
     * const Leads = await prisma.leads.delete({
     *   where: {
     *     // ... filter to delete one Leads
     *   }
     * })
     *
     */
    delete<T extends LeadsDeleteArgs>(
      args: SelectSubset<T, LeadsDeleteArgs<ExtArgs>>,
    ): Prisma__LeadsClient<
      $Result.GetResult<
        Prisma.$LeadsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Leads.
     * @param {LeadsUpdateArgs} args - Arguments to update one Leads.
     * @example
     * // Update one Leads
     * const leads = await prisma.leads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends LeadsUpdateArgs>(
      args: SelectSubset<T, LeadsUpdateArgs<ExtArgs>>,
    ): Prisma__LeadsClient<
      $Result.GetResult<
        Prisma.$LeadsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Leads.
     * @param {LeadsDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.leads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends LeadsDeleteManyArgs>(
      args?: SelectSubset<T, LeadsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends LeadsUpdateManyArgs>(
      args: SelectSubset<T, LeadsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Leads and returns the data updated in the database.
     * @param {LeadsUpdateManyAndReturnArgs} args - Arguments to update many Leads.
     * @example
     * // Update many Leads
     * const leads = await prisma.leads.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Leads and only return the `id`
     * const leadsWithIdOnly = await prisma.leads.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeadsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, LeadsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$LeadsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Leads.
     * @param {LeadsUpsertArgs} args - Arguments to update or create a Leads.
     * @example
     * // Update or create a Leads
     * const leads = await prisma.leads.upsert({
     *   create: {
     *     // ... data to create a Leads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leads we want to update
     *   }
     * })
     */
    upsert<T extends LeadsUpsertArgs>(
      args: SelectSubset<T, LeadsUpsertArgs<ExtArgs>>,
    ): Prisma__LeadsClient<
      $Result.GetResult<
        Prisma.$LeadsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.leads.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
     **/
    count<T extends LeadsCountArgs>(
      args?: Subset<T, LeadsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadsAggregateArgs>(
      args: Subset<T, LeadsAggregateArgs>,
    ): Prisma.PrismaPromise<GetLeadsAggregateType<T>>;

    /**
     * Group by Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadsGroupByArgs} args - Group by arguments.
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
      T extends LeadsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadsGroupByArgs['orderBy'] }
        : { orderBy?: LeadsGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, LeadsGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetLeadsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Leads model
     */
    readonly fields: LeadsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadsClient<
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
    interactions<T extends Leads$interactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, Leads$interactionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$InteractionsPayload<ExtArgs>,
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
   * Fields of the Leads model
   */
  interface LeadsFieldRefs {
    readonly id: FieldRef<'Leads', 'String'>;
    readonly organizationId: FieldRef<'Leads', 'String'>;
    readonly name: FieldRef<'Leads', 'String'>;
    readonly email: FieldRef<'Leads', 'String'>;
    readonly phone: FieldRef<'Leads', 'String'>;
  }

  // Custom InputTypes
  /**
   * Leads findUnique
   */
  export type LeadsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null;
    /**
     * Filter, which Leads to fetch.
     */
    where: LeadsWhereUniqueInput;
  };

  /**
   * Leads findUniqueOrThrow
   */
  export type LeadsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null;
    /**
     * Filter, which Leads to fetch.
     */
    where: LeadsWhereUniqueInput;
  };

  /**
   * Leads findFirst
   */
  export type LeadsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null;
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Leads.
     */
    cursor?: LeadsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Leads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[];
  };

  /**
   * Leads findFirstOrThrow
   */
  export type LeadsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null;
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Leads.
     */
    cursor?: LeadsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Leads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[];
  };

  /**
   * Leads findMany
   */
  export type LeadsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null;
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Leads.
     */
    cursor?: LeadsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Leads.
     */
    skip?: number;
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[];
  };

  /**
   * Leads create
   */
  export type LeadsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Leads.
     */
    data: XOR<LeadsCreateInput, LeadsUncheckedCreateInput>;
  };

  /**
   * Leads createMany
   */
  export type LeadsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Leads.
     */
    data: LeadsCreateManyInput | LeadsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Leads createManyAndReturn
   */
  export type LeadsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null;
    /**
     * The data used to create many Leads.
     */
    data: LeadsCreateManyInput | LeadsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Leads update
   */
  export type LeadsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Leads.
     */
    data: XOR<LeadsUpdateInput, LeadsUncheckedUpdateInput>;
    /**
     * Choose, which Leads to update.
     */
    where: LeadsWhereUniqueInput;
  };

  /**
   * Leads updateMany
   */
  export type LeadsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadsUpdateManyMutationInput, LeadsUncheckedUpdateManyInput>;
    /**
     * Filter which Leads to update
     */
    where?: LeadsWhereInput;
    /**
     * Limit how many Leads to update.
     */
    limit?: number;
  };

  /**
   * Leads updateManyAndReturn
   */
  export type LeadsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null;
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadsUpdateManyMutationInput, LeadsUncheckedUpdateManyInput>;
    /**
     * Filter which Leads to update
     */
    where?: LeadsWhereInput;
    /**
     * Limit how many Leads to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Leads upsert
   */
  export type LeadsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Leads to update in case it exists.
     */
    where: LeadsWhereUniqueInput;
    /**
     * In case the Leads found by the `where` argument doesn't exist, create a new Leads with this data.
     */
    create: XOR<LeadsCreateInput, LeadsUncheckedCreateInput>;
    /**
     * In case the Leads was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadsUpdateInput, LeadsUncheckedUpdateInput>;
  };

  /**
   * Leads delete
   */
  export type LeadsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null;
    /**
     * Filter which Leads to delete.
     */
    where: LeadsWhereUniqueInput;
  };

  /**
   * Leads deleteMany
   */
  export type LeadsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadsWhereInput;
    /**
     * Limit how many Leads to delete.
     */
    limit?: number;
  };

  /**
   * Leads.interactions
   */
  export type Leads$interactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interactions
     */
    select?: InteractionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interactions
     */
    omit?: InteractionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionsInclude<ExtArgs> | null;
    where?: InteractionsWhereInput;
    orderBy?:
      | InteractionsOrderByWithRelationInput
      | InteractionsOrderByWithRelationInput[];
    cursor?: InteractionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InteractionsScalarFieldEnum | InteractionsScalarFieldEnum[];
  };

  /**
   * Leads without action
   */
  export type LeadsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null;
  };

  /**
   * Model Interactions
   */

  export type AggregateInteractions = {
    _count: InteractionsCountAggregateOutputType | null;
    _min: InteractionsMinAggregateOutputType | null;
    _max: InteractionsMaxAggregateOutputType | null;
  };

  export type InteractionsMinAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    leadId: string | null;
    message: string | null;
    createdAt: Date | null;
  };

  export type InteractionsMaxAggregateOutputType = {
    id: string | null;
    organizationId: string | null;
    leadId: string | null;
    message: string | null;
    createdAt: Date | null;
  };

  export type InteractionsCountAggregateOutputType = {
    id: number;
    organizationId: number;
    leadId: number;
    message: number;
    createdAt: number;
    _all: number;
  };

  export type InteractionsMinAggregateInputType = {
    id?: true;
    organizationId?: true;
    leadId?: true;
    message?: true;
    createdAt?: true;
  };

  export type InteractionsMaxAggregateInputType = {
    id?: true;
    organizationId?: true;
    leadId?: true;
    message?: true;
    createdAt?: true;
  };

  export type InteractionsCountAggregateInputType = {
    id?: true;
    organizationId?: true;
    leadId?: true;
    message?: true;
    createdAt?: true;
    _all?: true;
  };

  export type InteractionsAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Interactions to aggregate.
     */
    where?: InteractionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Interactions to fetch.
     */
    orderBy?:
      | InteractionsOrderByWithRelationInput
      | InteractionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: InteractionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Interactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Interactions
     **/
    _count?: true | InteractionsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InteractionsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InteractionsMaxAggregateInputType;
  };

  export type GetInteractionsAggregateType<
    T extends InteractionsAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateInteractions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInteractions[P]>
      : GetScalarType<T[P], AggregateInteractions[P]>;
  };

  export type InteractionsGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: InteractionsWhereInput;
    orderBy?:
      | InteractionsOrderByWithAggregationInput
      | InteractionsOrderByWithAggregationInput[];
    by: InteractionsScalarFieldEnum[] | InteractionsScalarFieldEnum;
    having?: InteractionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InteractionsCountAggregateInputType | true;
    _min?: InteractionsMinAggregateInputType;
    _max?: InteractionsMaxAggregateInputType;
  };

  export type InteractionsGroupByOutputType = {
    id: string;
    organizationId: string;
    leadId: string;
    message: string;
    createdAt: Date;
    _count: InteractionsCountAggregateOutputType | null;
    _min: InteractionsMinAggregateOutputType | null;
    _max: InteractionsMaxAggregateOutputType | null;
  };

  type GetInteractionsGroupByPayload<T extends InteractionsGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<InteractionsGroupByOutputType, T['by']> & {
          [P in keyof T &
            keyof InteractionsGroupByOutputType]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InteractionsGroupByOutputType[P]>
            : GetScalarType<T[P], InteractionsGroupByOutputType[P]>;
        }
      >
    >;

  export type InteractionsSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      leadId?: boolean;
      message?: boolean;
      createdAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      lead?: boolean | LeadsDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['interactions']
  >;

  export type InteractionsSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      leadId?: boolean;
      message?: boolean;
      createdAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      lead?: boolean | LeadsDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['interactions']
  >;

  export type InteractionsSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      organizationId?: boolean;
      leadId?: boolean;
      message?: boolean;
      createdAt?: boolean;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
      lead?: boolean | LeadsDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['interactions']
  >;

  export type InteractionsSelectScalar = {
    id?: boolean;
    organizationId?: boolean;
    leadId?: boolean;
    message?: boolean;
    createdAt?: boolean;
  };

  export type InteractionsOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'organizationId' | 'leadId' | 'message' | 'createdAt',
    ExtArgs['result']['interactions']
  >;
  export type InteractionsInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    lead?: boolean | LeadsDefaultArgs<ExtArgs>;
  };
  export type InteractionsIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    lead?: boolean | LeadsDefaultArgs<ExtArgs>;
  };
  export type InteractionsIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    lead?: boolean | LeadsDefaultArgs<ExtArgs>;
  };

  export type $InteractionsPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: 'Interactions';
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>;
      lead: Prisma.$LeadsPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        organizationId: string;
        leadId: string;
        message: string;
        createdAt: Date;
      },
      ExtArgs['result']['interactions']
    >;
    composites: {};
  };

  type InteractionsGetPayload<
    S extends boolean | null | undefined | InteractionsDefaultArgs,
  > = $Result.GetResult<Prisma.$InteractionsPayload, S>;

  type InteractionsCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    InteractionsFindManyArgs,
    'select' | 'include' | 'distinct' | 'omit'
  > & {
    select?: InteractionsCountAggregateInputType | true;
  };

  export interface InteractionsDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['Interactions'];
      meta: { name: 'Interactions' };
    };
    /**
     * Find zero or one Interactions that matches the filter.
     * @param {InteractionsFindUniqueArgs} args - Arguments to find a Interactions
     * @example
     * // Get one Interactions
     * const interactions = await prisma.interactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InteractionsFindUniqueArgs>(
      args: SelectSubset<T, InteractionsFindUniqueArgs<ExtArgs>>,
    ): Prisma__InteractionsClient<
      $Result.GetResult<
        Prisma.$InteractionsPayload<ExtArgs>,
        T,
        'findUnique',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Interactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InteractionsFindUniqueOrThrowArgs} args - Arguments to find a Interactions
     * @example
     * // Get one Interactions
     * const interactions = await prisma.interactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InteractionsFindUniqueOrThrowArgs>(
      args: SelectSubset<T, InteractionsFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__InteractionsClient<
      $Result.GetResult<
        Prisma.$InteractionsPayload<ExtArgs>,
        T,
        'findUniqueOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Interactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionsFindFirstArgs} args - Arguments to find a Interactions
     * @example
     * // Get one Interactions
     * const interactions = await prisma.interactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InteractionsFindFirstArgs>(
      args?: SelectSubset<T, InteractionsFindFirstArgs<ExtArgs>>,
    ): Prisma__InteractionsClient<
      $Result.GetResult<
        Prisma.$InteractionsPayload<ExtArgs>,
        T,
        'findFirst',
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Interactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionsFindFirstOrThrowArgs} args - Arguments to find a Interactions
     * @example
     * // Get one Interactions
     * const interactions = await prisma.interactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InteractionsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, InteractionsFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__InteractionsClient<
      $Result.GetResult<
        Prisma.$InteractionsPayload<ExtArgs>,
        T,
        'findFirstOrThrow',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Interactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Interactions
     * const interactions = await prisma.interactions.findMany()
     *
     * // Get first 10 Interactions
     * const interactions = await prisma.interactions.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const interactionsWithIdOnly = await prisma.interactions.findMany({ select: { id: true } })
     *
     */
    findMany<T extends InteractionsFindManyArgs>(
      args?: SelectSubset<T, InteractionsFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InteractionsPayload<ExtArgs>,
        T,
        'findMany',
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Interactions.
     * @param {InteractionsCreateArgs} args - Arguments to create a Interactions.
     * @example
     * // Create one Interactions
     * const Interactions = await prisma.interactions.create({
     *   data: {
     *     // ... data to create a Interactions
     *   }
     * })
     *
     */
    create<T extends InteractionsCreateArgs>(
      args: SelectSubset<T, InteractionsCreateArgs<ExtArgs>>,
    ): Prisma__InteractionsClient<
      $Result.GetResult<
        Prisma.$InteractionsPayload<ExtArgs>,
        T,
        'create',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Interactions.
     * @param {InteractionsCreateManyArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interactions = await prisma.interactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends InteractionsCreateManyArgs>(
      args?: SelectSubset<T, InteractionsCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Interactions and returns the data saved in the database.
     * @param {InteractionsCreateManyAndReturnArgs} args - Arguments to create many Interactions.
     * @example
     * // Create many Interactions
     * const interactions = await prisma.interactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Interactions and only return the `id`
     * const interactionsWithIdOnly = await prisma.interactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends InteractionsCreateManyAndReturnArgs>(
      args?: SelectSubset<T, InteractionsCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InteractionsPayload<ExtArgs>,
        T,
        'createManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Interactions.
     * @param {InteractionsDeleteArgs} args - Arguments to delete one Interactions.
     * @example
     * // Delete one Interactions
     * const Interactions = await prisma.interactions.delete({
     *   where: {
     *     // ... filter to delete one Interactions
     *   }
     * })
     *
     */
    delete<T extends InteractionsDeleteArgs>(
      args: SelectSubset<T, InteractionsDeleteArgs<ExtArgs>>,
    ): Prisma__InteractionsClient<
      $Result.GetResult<
        Prisma.$InteractionsPayload<ExtArgs>,
        T,
        'delete',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Interactions.
     * @param {InteractionsUpdateArgs} args - Arguments to update one Interactions.
     * @example
     * // Update one Interactions
     * const interactions = await prisma.interactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends InteractionsUpdateArgs>(
      args: SelectSubset<T, InteractionsUpdateArgs<ExtArgs>>,
    ): Prisma__InteractionsClient<
      $Result.GetResult<
        Prisma.$InteractionsPayload<ExtArgs>,
        T,
        'update',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Interactions.
     * @param {InteractionsDeleteManyArgs} args - Arguments to filter Interactions to delete.
     * @example
     * // Delete a few Interactions
     * const { count } = await prisma.interactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends InteractionsDeleteManyArgs>(
      args?: SelectSubset<T, InteractionsDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Interactions
     * const interactions = await prisma.interactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends InteractionsUpdateManyArgs>(
      args: SelectSubset<T, InteractionsUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Interactions and returns the data updated in the database.
     * @param {InteractionsUpdateManyAndReturnArgs} args - Arguments to update many Interactions.
     * @example
     * // Update many Interactions
     * const interactions = await prisma.interactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Interactions and only return the `id`
     * const interactionsWithIdOnly = await prisma.interactions.updateManyAndReturn({
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
    updateManyAndReturn<T extends InteractionsUpdateManyAndReturnArgs>(
      args: SelectSubset<T, InteractionsUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$InteractionsPayload<ExtArgs>,
        T,
        'updateManyAndReturn',
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Interactions.
     * @param {InteractionsUpsertArgs} args - Arguments to update or create a Interactions.
     * @example
     * // Update or create a Interactions
     * const interactions = await prisma.interactions.upsert({
     *   create: {
     *     // ... data to create a Interactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Interactions we want to update
     *   }
     * })
     */
    upsert<T extends InteractionsUpsertArgs>(
      args: SelectSubset<T, InteractionsUpsertArgs<ExtArgs>>,
    ): Prisma__InteractionsClient<
      $Result.GetResult<
        Prisma.$InteractionsPayload<ExtArgs>,
        T,
        'upsert',
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionsCountArgs} args - Arguments to filter Interactions to count.
     * @example
     * // Count the number of Interactions
     * const count = await prisma.interactions.count({
     *   where: {
     *     // ... the filter for the Interactions we want to count
     *   }
     * })
     **/
    count<T extends InteractionsCountArgs>(
      args?: Subset<T, InteractionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InteractionsCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InteractionsAggregateArgs>(
      args: Subset<T, InteractionsAggregateArgs>,
    ): Prisma.PrismaPromise<GetInteractionsAggregateType<T>>;

    /**
     * Group by Interactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InteractionsGroupByArgs} args - Group by arguments.
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
      T extends InteractionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InteractionsGroupByArgs['orderBy'] }
        : { orderBy?: InteractionsGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, InteractionsGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetInteractionsGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Interactions model
     */
    readonly fields: InteractionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Interactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InteractionsClient<
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
    lead<T extends LeadsDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, LeadsDefaultArgs<ExtArgs>>,
    ): Prisma__LeadsClient<
      | $Result.GetResult<
          Prisma.$LeadsPayload<ExtArgs>,
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
   * Fields of the Interactions model
   */
  interface InteractionsFieldRefs {
    readonly id: FieldRef<'Interactions', 'String'>;
    readonly organizationId: FieldRef<'Interactions', 'String'>;
    readonly leadId: FieldRef<'Interactions', 'String'>;
    readonly message: FieldRef<'Interactions', 'String'>;
    readonly createdAt: FieldRef<'Interactions', 'DateTime'>;
  }

  // Custom InputTypes
  /**
   * Interactions findUnique
   */
  export type InteractionsFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interactions
     */
    select?: InteractionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interactions
     */
    omit?: InteractionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionsInclude<ExtArgs> | null;
    /**
     * Filter, which Interactions to fetch.
     */
    where: InteractionsWhereUniqueInput;
  };

  /**
   * Interactions findUniqueOrThrow
   */
  export type InteractionsFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interactions
     */
    select?: InteractionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interactions
     */
    omit?: InteractionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionsInclude<ExtArgs> | null;
    /**
     * Filter, which Interactions to fetch.
     */
    where: InteractionsWhereUniqueInput;
  };

  /**
   * Interactions findFirst
   */
  export type InteractionsFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interactions
     */
    select?: InteractionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interactions
     */
    omit?: InteractionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionsInclude<ExtArgs> | null;
    /**
     * Filter, which Interactions to fetch.
     */
    where?: InteractionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Interactions to fetch.
     */
    orderBy?:
      | InteractionsOrderByWithRelationInput
      | InteractionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Interactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionsScalarFieldEnum | InteractionsScalarFieldEnum[];
  };

  /**
   * Interactions findFirstOrThrow
   */
  export type InteractionsFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interactions
     */
    select?: InteractionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interactions
     */
    omit?: InteractionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionsInclude<ExtArgs> | null;
    /**
     * Filter, which Interactions to fetch.
     */
    where?: InteractionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Interactions to fetch.
     */
    orderBy?:
      | InteractionsOrderByWithRelationInput
      | InteractionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Interactions.
     */
    cursor?: InteractionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Interactions.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Interactions.
     */
    distinct?: InteractionsScalarFieldEnum | InteractionsScalarFieldEnum[];
  };

  /**
   * Interactions findMany
   */
  export type InteractionsFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interactions
     */
    select?: InteractionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interactions
     */
    omit?: InteractionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionsInclude<ExtArgs> | null;
    /**
     * Filter, which Interactions to fetch.
     */
    where?: InteractionsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Interactions to fetch.
     */
    orderBy?:
      | InteractionsOrderByWithRelationInput
      | InteractionsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Interactions.
     */
    cursor?: InteractionsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Interactions from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Interactions.
     */
    skip?: number;
    distinct?: InteractionsScalarFieldEnum | InteractionsScalarFieldEnum[];
  };

  /**
   * Interactions create
   */
  export type InteractionsCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interactions
     */
    select?: InteractionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interactions
     */
    omit?: InteractionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionsInclude<ExtArgs> | null;
    /**
     * The data needed to create a Interactions.
     */
    data: XOR<InteractionsCreateInput, InteractionsUncheckedCreateInput>;
  };

  /**
   * Interactions createMany
   */
  export type InteractionsCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Interactions.
     */
    data: InteractionsCreateManyInput | InteractionsCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Interactions createManyAndReturn
   */
  export type InteractionsCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interactions
     */
    select?: InteractionsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Interactions
     */
    omit?: InteractionsOmit<ExtArgs> | null;
    /**
     * The data used to create many Interactions.
     */
    data: InteractionsCreateManyInput | InteractionsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionsIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Interactions update
   */
  export type InteractionsUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interactions
     */
    select?: InteractionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interactions
     */
    omit?: InteractionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionsInclude<ExtArgs> | null;
    /**
     * The data needed to update a Interactions.
     */
    data: XOR<InteractionsUpdateInput, InteractionsUncheckedUpdateInput>;
    /**
     * Choose, which Interactions to update.
     */
    where: InteractionsWhereUniqueInput;
  };

  /**
   * Interactions updateMany
   */
  export type InteractionsUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Interactions.
     */
    data: XOR<
      InteractionsUpdateManyMutationInput,
      InteractionsUncheckedUpdateManyInput
    >;
    /**
     * Filter which Interactions to update
     */
    where?: InteractionsWhereInput;
    /**
     * Limit how many Interactions to update.
     */
    limit?: number;
  };

  /**
   * Interactions updateManyAndReturn
   */
  export type InteractionsUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interactions
     */
    select?: InteractionsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Interactions
     */
    omit?: InteractionsOmit<ExtArgs> | null;
    /**
     * The data used to update Interactions.
     */
    data: XOR<
      InteractionsUpdateManyMutationInput,
      InteractionsUncheckedUpdateManyInput
    >;
    /**
     * Filter which Interactions to update
     */
    where?: InteractionsWhereInput;
    /**
     * Limit how many Interactions to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionsIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Interactions upsert
   */
  export type InteractionsUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interactions
     */
    select?: InteractionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interactions
     */
    omit?: InteractionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionsInclude<ExtArgs> | null;
    /**
     * The filter to search for the Interactions to update in case it exists.
     */
    where: InteractionsWhereUniqueInput;
    /**
     * In case the Interactions found by the `where` argument doesn't exist, create a new Interactions with this data.
     */
    create: XOR<InteractionsCreateInput, InteractionsUncheckedCreateInput>;
    /**
     * In case the Interactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InteractionsUpdateInput, InteractionsUncheckedUpdateInput>;
  };

  /**
   * Interactions delete
   */
  export type InteractionsDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interactions
     */
    select?: InteractionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interactions
     */
    omit?: InteractionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionsInclude<ExtArgs> | null;
    /**
     * Filter which Interactions to delete.
     */
    where: InteractionsWhereUniqueInput;
  };

  /**
   * Interactions deleteMany
   */
  export type InteractionsDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Interactions to delete
     */
    where?: InteractionsWhereInput;
    /**
     * Limit how many Interactions to delete.
     */
    limit?: number;
  };

  /**
   * Interactions without action
   */
  export type InteractionsDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interactions
     */
    select?: InteractionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interactions
     */
    omit?: InteractionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionsInclude<ExtArgs> | null;
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
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    name: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    name?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    name?: true;
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
      users?: boolean | Organization$usersArgs<ExtArgs>;
      leads?: boolean | Organization$leadsArgs<ExtArgs>;
      interactions?: boolean | Organization$interactionsArgs<ExtArgs>;
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
    },
    ExtArgs['result']['organization']
  >;

  export type OrganizationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
    },
    ExtArgs['result']['organization']
  >;

  export type OrganizationSelectScalar = {
    id?: boolean;
    name?: boolean;
  };

  export type OrganizationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<'id' | 'name', ExtArgs['result']['organization']>;
  export type OrganizationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    users?: boolean | Organization$usersArgs<ExtArgs>;
    leads?: boolean | Organization$leadsArgs<ExtArgs>;
    interactions?: boolean | Organization$interactionsArgs<ExtArgs>;
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
      leads: Prisma.$LeadsPayload<ExtArgs>[];
      interactions: Prisma.$InteractionsPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
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
    leads<T extends Organization$leadsArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$leadsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$LeadsPayload<ExtArgs>,
          T,
          'findMany',
          GlobalOmitOptions
        >
      | Null
    >;
    interactions<T extends Organization$interactionsArgs<ExtArgs> = {}>(
      args?: Subset<T, Organization$interactionsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$InteractionsPayload<ExtArgs>,
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
   * Organization.leads
   */
  export type Organization$leadsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Leads
     */
    select?: LeadsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Leads
     */
    omit?: LeadsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeadsInclude<ExtArgs> | null;
    where?: LeadsWhereInput;
    orderBy?: LeadsOrderByWithRelationInput | LeadsOrderByWithRelationInput[];
    cursor?: LeadsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: LeadsScalarFieldEnum | LeadsScalarFieldEnum[];
  };

  /**
   * Organization.interactions
   */
  export type Organization$interactionsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Interactions
     */
    select?: InteractionsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Interactions
     */
    omit?: InteractionsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InteractionsInclude<ExtArgs> | null;
    where?: InteractionsWhereInput;
    orderBy?:
      | InteractionsOrderByWithRelationInput
      | InteractionsOrderByWithRelationInput[];
    cursor?: InteractionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InteractionsScalarFieldEnum | InteractionsScalarFieldEnum[];
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
  };

  export type OrganizationUserMaxAggregateOutputType = {
    userId: string | null;
    organizationId: string | null;
    role: $Enums.OrganizationRole | null;
  };

  export type OrganizationUserCountAggregateOutputType = {
    userId: number;
    organizationId: number;
    role: number;
    _all: number;
  };

  export type OrganizationUserMinAggregateInputType = {
    userId?: true;
    organizationId?: true;
    role?: true;
  };

  export type OrganizationUserMaxAggregateInputType = {
    userId?: true;
    organizationId?: true;
    role?: true;
  };

  export type OrganizationUserCountAggregateInputType = {
    userId?: true;
    organizationId?: true;
    role?: true;
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
      user?: boolean | UserDefaultArgs<ExtArgs>;
      organization?: boolean | OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['organizationUser']
  >;

  export type OrganizationUserSelectScalar = {
    userId?: boolean;
    organizationId?: boolean;
    role?: boolean;
  };

  export type OrganizationUserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'userId' | 'organizationId' | 'role',
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
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
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
      organizations?: boolean | User$organizationsArgs<ExtArgs>;
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
    },
    ExtArgs['result']['user']
  >;

  export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
  };

  export type UserOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    'id' | 'name' | 'email' | 'password',
    ExtArgs['result']['user']
  >;
  export type UserInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organizations?: boolean | User$organizationsArgs<ExtArgs>;
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
      organizations: Prisma.$OrganizationUserPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        email: string;
        password: string;
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

  export const LeadsScalarFieldEnum: {
    id: 'id';
    organizationId: 'organizationId';
    name: 'name';
    email: 'email';
    phone: 'phone';
  };

  export type LeadsScalarFieldEnum =
    (typeof LeadsScalarFieldEnum)[keyof typeof LeadsScalarFieldEnum];

  export const InteractionsScalarFieldEnum: {
    id: 'id';
    organizationId: 'organizationId';
    leadId: 'leadId';
    message: 'message';
    createdAt: 'createdAt';
  };

  export type InteractionsScalarFieldEnum =
    (typeof InteractionsScalarFieldEnum)[keyof typeof InteractionsScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    name: 'name';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const OrganizationUserScalarFieldEnum: {
    userId: 'userId';
    organizationId: 'organizationId';
    role: 'role';
  };

  export type OrganizationUserScalarFieldEnum =
    (typeof OrganizationUserScalarFieldEnum)[keyof typeof OrganizationUserScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    name: 'name';
    email: 'email';
    password: 'password';
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
   * Deep Input Types
   */

  export type LeadsWhereInput = {
    AND?: LeadsWhereInput | LeadsWhereInput[];
    OR?: LeadsWhereInput[];
    NOT?: LeadsWhereInput | LeadsWhereInput[];
    id?: UuidFilter<'Leads'> | string;
    organizationId?: UuidFilter<'Leads'> | string;
    name?: StringFilter<'Leads'> | string;
    email?: StringFilter<'Leads'> | string;
    phone?: StringFilter<'Leads'> | string;
    organization?: XOR<
      OrganizationScalarRelationFilter,
      OrganizationWhereInput
    >;
    interactions?: InteractionsListRelationFilter;
  };

  export type LeadsOrderByWithRelationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    organization?: OrganizationOrderByWithRelationInput;
    interactions?: InteractionsOrderByRelationAggregateInput;
  };

  export type LeadsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: LeadsWhereInput | LeadsWhereInput[];
      OR?: LeadsWhereInput[];
      NOT?: LeadsWhereInput | LeadsWhereInput[];
      organizationId?: UuidFilter<'Leads'> | string;
      name?: StringFilter<'Leads'> | string;
      email?: StringFilter<'Leads'> | string;
      phone?: StringFilter<'Leads'> | string;
      organization?: XOR<
        OrganizationScalarRelationFilter,
        OrganizationWhereInput
      >;
      interactions?: InteractionsListRelationFilter;
    },
    'id'
  >;

  export type LeadsOrderByWithAggregationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
    _count?: LeadsCountOrderByAggregateInput;
    _max?: LeadsMaxOrderByAggregateInput;
    _min?: LeadsMinOrderByAggregateInput;
  };

  export type LeadsScalarWhereWithAggregatesInput = {
    AND?:
      | LeadsScalarWhereWithAggregatesInput
      | LeadsScalarWhereWithAggregatesInput[];
    OR?: LeadsScalarWhereWithAggregatesInput[];
    NOT?:
      | LeadsScalarWhereWithAggregatesInput
      | LeadsScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Leads'> | string;
    organizationId?: UuidWithAggregatesFilter<'Leads'> | string;
    name?: StringWithAggregatesFilter<'Leads'> | string;
    email?: StringWithAggregatesFilter<'Leads'> | string;
    phone?: StringWithAggregatesFilter<'Leads'> | string;
  };

  export type InteractionsWhereInput = {
    AND?: InteractionsWhereInput | InteractionsWhereInput[];
    OR?: InteractionsWhereInput[];
    NOT?: InteractionsWhereInput | InteractionsWhereInput[];
    id?: UuidFilter<'Interactions'> | string;
    organizationId?: UuidFilter<'Interactions'> | string;
    leadId?: UuidFilter<'Interactions'> | string;
    message?: StringFilter<'Interactions'> | string;
    createdAt?: DateTimeFilter<'Interactions'> | Date | string;
    organization?: XOR<
      OrganizationScalarRelationFilter,
      OrganizationWhereInput
    >;
    lead?: XOR<LeadsScalarRelationFilter, LeadsWhereInput>;
  };

  export type InteractionsOrderByWithRelationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    leadId?: SortOrder;
    message?: SortOrder;
    createdAt?: SortOrder;
    organization?: OrganizationOrderByWithRelationInput;
    lead?: LeadsOrderByWithRelationInput;
  };

  export type InteractionsWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: InteractionsWhereInput | InteractionsWhereInput[];
      OR?: InteractionsWhereInput[];
      NOT?: InteractionsWhereInput | InteractionsWhereInput[];
      organizationId?: UuidFilter<'Interactions'> | string;
      leadId?: UuidFilter<'Interactions'> | string;
      message?: StringFilter<'Interactions'> | string;
      createdAt?: DateTimeFilter<'Interactions'> | Date | string;
      organization?: XOR<
        OrganizationScalarRelationFilter,
        OrganizationWhereInput
      >;
      lead?: XOR<LeadsScalarRelationFilter, LeadsWhereInput>;
    },
    'id'
  >;

  export type InteractionsOrderByWithAggregationInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    leadId?: SortOrder;
    message?: SortOrder;
    createdAt?: SortOrder;
    _count?: InteractionsCountOrderByAggregateInput;
    _max?: InteractionsMaxOrderByAggregateInput;
    _min?: InteractionsMinOrderByAggregateInput;
  };

  export type InteractionsScalarWhereWithAggregatesInput = {
    AND?:
      | InteractionsScalarWhereWithAggregatesInput
      | InteractionsScalarWhereWithAggregatesInput[];
    OR?: InteractionsScalarWhereWithAggregatesInput[];
    NOT?:
      | InteractionsScalarWhereWithAggregatesInput
      | InteractionsScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'Interactions'> | string;
    organizationId?: UuidWithAggregatesFilter<'Interactions'> | string;
    leadId?: UuidWithAggregatesFilter<'Interactions'> | string;
    message?: StringWithAggregatesFilter<'Interactions'> | string;
    createdAt?: DateTimeWithAggregatesFilter<'Interactions'> | Date | string;
  };

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[];
    OR?: OrganizationWhereInput[];
    NOT?: OrganizationWhereInput | OrganizationWhereInput[];
    id?: UuidFilter<'Organization'> | string;
    name?: StringFilter<'Organization'> | string;
    users?: OrganizationUserListRelationFilter;
    leads?: LeadsListRelationFilter;
    interactions?: InteractionsListRelationFilter;
  };

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    users?: OrganizationUserOrderByRelationAggregateInput;
    leads?: LeadsOrderByRelationAggregateInput;
    interactions?: InteractionsOrderByRelationAggregateInput;
  };

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: OrganizationWhereInput | OrganizationWhereInput[];
      OR?: OrganizationWhereInput[];
      NOT?: OrganizationWhereInput | OrganizationWhereInput[];
      name?: StringFilter<'Organization'> | string;
      users?: OrganizationUserListRelationFilter;
      leads?: LeadsListRelationFilter;
      interactions?: InteractionsListRelationFilter;
    },
    'id'
  >;

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
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
  };

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: UuidFilter<'User'> | string;
    name?: StringFilter<'User'> | string;
    email?: StringFilter<'User'> | string;
    password?: StringFilter<'User'> | string;
    organizations?: OrganizationUserListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
    organizations?: OrganizationUserOrderByRelationAggregateInput;
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
      organizations?: OrganizationUserListRelationFilter;
    },
    'id' | 'email'
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
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
  };

  export type LeadsCreateInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    organization: OrganizationCreateNestedOneWithoutLeadsInput;
    interactions?: InteractionsCreateNestedManyWithoutLeadInput;
  };

  export type LeadsUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    name: string;
    email: string;
    phone: string;
    interactions?: InteractionsUncheckedCreateNestedManyWithoutLeadInput;
  };

  export type LeadsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    organization?: OrganizationUpdateOneRequiredWithoutLeadsNestedInput;
    interactions?: InteractionsUpdateManyWithoutLeadNestedInput;
  };

  export type LeadsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    interactions?: InteractionsUncheckedUpdateManyWithoutLeadNestedInput;
  };

  export type LeadsCreateManyInput = {
    id?: string;
    organizationId: string;
    name: string;
    email: string;
    phone: string;
  };

  export type LeadsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
  };

  export type LeadsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
  };

  export type InteractionsCreateInput = {
    id?: string;
    message: string;
    createdAt: Date | string;
    organization: OrganizationCreateNestedOneWithoutInteractionsInput;
    lead: LeadsCreateNestedOneWithoutInteractionsInput;
  };

  export type InteractionsUncheckedCreateInput = {
    id?: string;
    organizationId: string;
    leadId: string;
    message: string;
    createdAt: Date | string;
  };

  export type InteractionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutInteractionsNestedInput;
    lead?: LeadsUpdateOneRequiredWithoutInteractionsNestedInput;
  };

  export type InteractionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    leadId?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InteractionsCreateManyInput = {
    id?: string;
    organizationId: string;
    leadId: string;
    message: string;
    createdAt: Date | string;
  };

  export type InteractionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InteractionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    leadId?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationCreateInput = {
    id?: string;
    name: string;
    users?: OrganizationUserCreateNestedManyWithoutOrganizationInput;
    leads?: LeadsCreateNestedManyWithoutOrganizationInput;
    interactions?: InteractionsCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateInput = {
    id?: string;
    name: string;
    users?: OrganizationUserUncheckedCreateNestedManyWithoutOrganizationInput;
    leads?: LeadsUncheckedCreateNestedManyWithoutOrganizationInput;
    interactions?: InteractionsUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    users?: OrganizationUserUpdateManyWithoutOrganizationNestedInput;
    leads?: LeadsUpdateManyWithoutOrganizationNestedInput;
    interactions?: InteractionsUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    users?: OrganizationUserUncheckedUpdateManyWithoutOrganizationNestedInput;
    leads?: LeadsUncheckedUpdateManyWithoutOrganizationNestedInput;
    interactions?: InteractionsUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationCreateManyInput = {
    id?: string;
    name: string;
  };

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
  };

  export type OrganizationUserCreateInput = {
    role?: $Enums.OrganizationRole;
    user: UserCreateNestedOneWithoutOrganizationsInput;
    organization: OrganizationCreateNestedOneWithoutUsersInput;
  };

  export type OrganizationUserUncheckedCreateInput = {
    userId: string;
    organizationId: string;
    role?: $Enums.OrganizationRole;
  };

  export type OrganizationUserUpdateInput = {
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    user?: UserUpdateOneRequiredWithoutOrganizationsNestedInput;
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput;
  };

  export type OrganizationUserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
  };

  export type OrganizationUserCreateManyInput = {
    userId: string;
    organizationId: string;
    role?: $Enums.OrganizationRole;
  };

  export type OrganizationUserUpdateManyMutationInput = {
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
  };

  export type OrganizationUserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
  };

  export type UserCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    organizations?: OrganizationUserCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
    organizations?: OrganizationUserUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    organizations?: OrganizationUserUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    organizations?: OrganizationUserUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
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

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput;
    isNot?: OrganizationWhereInput;
  };

  export type InteractionsListRelationFilter = {
    every?: InteractionsWhereInput;
    some?: InteractionsWhereInput;
    none?: InteractionsWhereInput;
  };

  export type InteractionsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type LeadsCountOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
  };

  export type LeadsMaxOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
  };

  export type LeadsMinOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    phone?: SortOrder;
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

  export type LeadsScalarRelationFilter = {
    is?: LeadsWhereInput;
    isNot?: LeadsWhereInput;
  };

  export type InteractionsCountOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    leadId?: SortOrder;
    message?: SortOrder;
    createdAt?: SortOrder;
  };

  export type InteractionsMaxOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    leadId?: SortOrder;
    message?: SortOrder;
    createdAt?: SortOrder;
  };

  export type InteractionsMinOrderByAggregateInput = {
    id?: SortOrder;
    organizationId?: SortOrder;
    leadId?: SortOrder;
    message?: SortOrder;
    createdAt?: SortOrder;
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

  export type OrganizationUserListRelationFilter = {
    every?: OrganizationUserWhereInput;
    some?: OrganizationUserWhereInput;
    none?: OrganizationUserWhereInput;
  };

  export type LeadsListRelationFilter = {
    every?: LeadsWhereInput;
    some?: LeadsWhereInput;
    none?: LeadsWhereInput;
  };

  export type OrganizationUserOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type LeadsOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
  };

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type OrganizationUserUserIdOrganizationIdCompoundUniqueInput = {
    userId: string;
    organizationId: string;
  };

  export type OrganizationUserCountOrderByAggregateInput = {
    userId?: SortOrder;
    organizationId?: SortOrder;
    role?: SortOrder;
  };

  export type OrganizationUserMaxOrderByAggregateInput = {
    userId?: SortOrder;
    organizationId?: SortOrder;
    role?: SortOrder;
  };

  export type OrganizationUserMinOrderByAggregateInput = {
    userId?: SortOrder;
    organizationId?: SortOrder;
    role?: SortOrder;
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    email?: SortOrder;
    password?: SortOrder;
  };

  export type OrganizationCreateNestedOneWithoutLeadsInput = {
    create?: XOR<
      OrganizationCreateWithoutLeadsInput,
      OrganizationUncheckedCreateWithoutLeadsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutLeadsInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type InteractionsCreateNestedManyWithoutLeadInput = {
    create?:
      | XOR<
          InteractionsCreateWithoutLeadInput,
          InteractionsUncheckedCreateWithoutLeadInput
        >
      | InteractionsCreateWithoutLeadInput[]
      | InteractionsUncheckedCreateWithoutLeadInput[];
    connectOrCreate?:
      | InteractionsCreateOrConnectWithoutLeadInput
      | InteractionsCreateOrConnectWithoutLeadInput[];
    createMany?: InteractionsCreateManyLeadInputEnvelope;
    connect?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
  };

  export type InteractionsUncheckedCreateNestedManyWithoutLeadInput = {
    create?:
      | XOR<
          InteractionsCreateWithoutLeadInput,
          InteractionsUncheckedCreateWithoutLeadInput
        >
      | InteractionsCreateWithoutLeadInput[]
      | InteractionsUncheckedCreateWithoutLeadInput[];
    connectOrCreate?:
      | InteractionsCreateOrConnectWithoutLeadInput
      | InteractionsCreateOrConnectWithoutLeadInput[];
    createMany?: InteractionsCreateManyLeadInputEnvelope;
    connect?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type OrganizationUpdateOneRequiredWithoutLeadsNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutLeadsInput,
      OrganizationUncheckedCreateWithoutLeadsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutLeadsInput;
    upsert?: OrganizationUpsertWithoutLeadsInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutLeadsInput,
        OrganizationUpdateWithoutLeadsInput
      >,
      OrganizationUncheckedUpdateWithoutLeadsInput
    >;
  };

  export type InteractionsUpdateManyWithoutLeadNestedInput = {
    create?:
      | XOR<
          InteractionsCreateWithoutLeadInput,
          InteractionsUncheckedCreateWithoutLeadInput
        >
      | InteractionsCreateWithoutLeadInput[]
      | InteractionsUncheckedCreateWithoutLeadInput[];
    connectOrCreate?:
      | InteractionsCreateOrConnectWithoutLeadInput
      | InteractionsCreateOrConnectWithoutLeadInput[];
    upsert?:
      | InteractionsUpsertWithWhereUniqueWithoutLeadInput
      | InteractionsUpsertWithWhereUniqueWithoutLeadInput[];
    createMany?: InteractionsCreateManyLeadInputEnvelope;
    set?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    disconnect?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    delete?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    connect?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    update?:
      | InteractionsUpdateWithWhereUniqueWithoutLeadInput
      | InteractionsUpdateWithWhereUniqueWithoutLeadInput[];
    updateMany?:
      | InteractionsUpdateManyWithWhereWithoutLeadInput
      | InteractionsUpdateManyWithWhereWithoutLeadInput[];
    deleteMany?: InteractionsScalarWhereInput | InteractionsScalarWhereInput[];
  };

  export type InteractionsUncheckedUpdateManyWithoutLeadNestedInput = {
    create?:
      | XOR<
          InteractionsCreateWithoutLeadInput,
          InteractionsUncheckedCreateWithoutLeadInput
        >
      | InteractionsCreateWithoutLeadInput[]
      | InteractionsUncheckedCreateWithoutLeadInput[];
    connectOrCreate?:
      | InteractionsCreateOrConnectWithoutLeadInput
      | InteractionsCreateOrConnectWithoutLeadInput[];
    upsert?:
      | InteractionsUpsertWithWhereUniqueWithoutLeadInput
      | InteractionsUpsertWithWhereUniqueWithoutLeadInput[];
    createMany?: InteractionsCreateManyLeadInputEnvelope;
    set?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    disconnect?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    delete?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    connect?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    update?:
      | InteractionsUpdateWithWhereUniqueWithoutLeadInput
      | InteractionsUpdateWithWhereUniqueWithoutLeadInput[];
    updateMany?:
      | InteractionsUpdateManyWithWhereWithoutLeadInput
      | InteractionsUpdateManyWithWhereWithoutLeadInput[];
    deleteMany?: InteractionsScalarWhereInput | InteractionsScalarWhereInput[];
  };

  export type OrganizationCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<
      OrganizationCreateWithoutInteractionsInput,
      OrganizationUncheckedCreateWithoutInteractionsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutInteractionsInput;
    connect?: OrganizationWhereUniqueInput;
  };

  export type LeadsCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<
      LeadsCreateWithoutInteractionsInput,
      LeadsUncheckedCreateWithoutInteractionsInput
    >;
    connectOrCreate?: LeadsCreateOrConnectWithoutInteractionsInput;
    connect?: LeadsWhereUniqueInput;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type OrganizationUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: XOR<
      OrganizationCreateWithoutInteractionsInput,
      OrganizationUncheckedCreateWithoutInteractionsInput
    >;
    connectOrCreate?: OrganizationCreateOrConnectWithoutInteractionsInput;
    upsert?: OrganizationUpsertWithoutInteractionsInput;
    connect?: OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        OrganizationUpdateToOneWithWhereWithoutInteractionsInput,
        OrganizationUpdateWithoutInteractionsInput
      >,
      OrganizationUncheckedUpdateWithoutInteractionsInput
    >;
  };

  export type LeadsUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: XOR<
      LeadsCreateWithoutInteractionsInput,
      LeadsUncheckedCreateWithoutInteractionsInput
    >;
    connectOrCreate?: LeadsCreateOrConnectWithoutInteractionsInput;
    upsert?: LeadsUpsertWithoutInteractionsInput;
    connect?: LeadsWhereUniqueInput;
    update?: XOR<
      XOR<
        LeadsUpdateToOneWithWhereWithoutInteractionsInput,
        LeadsUpdateWithoutInteractionsInput
      >,
      LeadsUncheckedUpdateWithoutInteractionsInput
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

  export type LeadsCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          LeadsCreateWithoutOrganizationInput,
          LeadsUncheckedCreateWithoutOrganizationInput
        >
      | LeadsCreateWithoutOrganizationInput[]
      | LeadsUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | LeadsCreateOrConnectWithoutOrganizationInput
      | LeadsCreateOrConnectWithoutOrganizationInput[];
    createMany?: LeadsCreateManyOrganizationInputEnvelope;
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[];
  };

  export type InteractionsCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          InteractionsCreateWithoutOrganizationInput,
          InteractionsUncheckedCreateWithoutOrganizationInput
        >
      | InteractionsCreateWithoutOrganizationInput[]
      | InteractionsUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | InteractionsCreateOrConnectWithoutOrganizationInput
      | InteractionsCreateOrConnectWithoutOrganizationInput[];
    createMany?: InteractionsCreateManyOrganizationInputEnvelope;
    connect?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
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

  export type LeadsUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          LeadsCreateWithoutOrganizationInput,
          LeadsUncheckedCreateWithoutOrganizationInput
        >
      | LeadsCreateWithoutOrganizationInput[]
      | LeadsUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | LeadsCreateOrConnectWithoutOrganizationInput
      | LeadsCreateOrConnectWithoutOrganizationInput[];
    createMany?: LeadsCreateManyOrganizationInputEnvelope;
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[];
  };

  export type InteractionsUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          InteractionsCreateWithoutOrganizationInput,
          InteractionsUncheckedCreateWithoutOrganizationInput
        >
      | InteractionsCreateWithoutOrganizationInput[]
      | InteractionsUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | InteractionsCreateOrConnectWithoutOrganizationInput
      | InteractionsCreateOrConnectWithoutOrganizationInput[];
    createMany?: InteractionsCreateManyOrganizationInputEnvelope;
    connect?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
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

  export type LeadsUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          LeadsCreateWithoutOrganizationInput,
          LeadsUncheckedCreateWithoutOrganizationInput
        >
      | LeadsCreateWithoutOrganizationInput[]
      | LeadsUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | LeadsCreateOrConnectWithoutOrganizationInput
      | LeadsCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | LeadsUpsertWithWhereUniqueWithoutOrganizationInput
      | LeadsUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: LeadsCreateManyOrganizationInputEnvelope;
    set?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[];
    disconnect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[];
    delete?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[];
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[];
    update?:
      | LeadsUpdateWithWhereUniqueWithoutOrganizationInput
      | LeadsUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | LeadsUpdateManyWithWhereWithoutOrganizationInput
      | LeadsUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: LeadsScalarWhereInput | LeadsScalarWhereInput[];
  };

  export type InteractionsUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          InteractionsCreateWithoutOrganizationInput,
          InteractionsUncheckedCreateWithoutOrganizationInput
        >
      | InteractionsCreateWithoutOrganizationInput[]
      | InteractionsUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | InteractionsCreateOrConnectWithoutOrganizationInput
      | InteractionsCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | InteractionsUpsertWithWhereUniqueWithoutOrganizationInput
      | InteractionsUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: InteractionsCreateManyOrganizationInputEnvelope;
    set?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    disconnect?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    delete?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    connect?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    update?:
      | InteractionsUpdateWithWhereUniqueWithoutOrganizationInput
      | InteractionsUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | InteractionsUpdateManyWithWhereWithoutOrganizationInput
      | InteractionsUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: InteractionsScalarWhereInput | InteractionsScalarWhereInput[];
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

  export type LeadsUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          LeadsCreateWithoutOrganizationInput,
          LeadsUncheckedCreateWithoutOrganizationInput
        >
      | LeadsCreateWithoutOrganizationInput[]
      | LeadsUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | LeadsCreateOrConnectWithoutOrganizationInput
      | LeadsCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | LeadsUpsertWithWhereUniqueWithoutOrganizationInput
      | LeadsUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: LeadsCreateManyOrganizationInputEnvelope;
    set?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[];
    disconnect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[];
    delete?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[];
    connect?: LeadsWhereUniqueInput | LeadsWhereUniqueInput[];
    update?:
      | LeadsUpdateWithWhereUniqueWithoutOrganizationInput
      | LeadsUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | LeadsUpdateManyWithWhereWithoutOrganizationInput
      | LeadsUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: LeadsScalarWhereInput | LeadsScalarWhereInput[];
  };

  export type InteractionsUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          InteractionsCreateWithoutOrganizationInput,
          InteractionsUncheckedCreateWithoutOrganizationInput
        >
      | InteractionsCreateWithoutOrganizationInput[]
      | InteractionsUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | InteractionsCreateOrConnectWithoutOrganizationInput
      | InteractionsCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | InteractionsUpsertWithWhereUniqueWithoutOrganizationInput
      | InteractionsUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: InteractionsCreateManyOrganizationInputEnvelope;
    set?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    disconnect?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    delete?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    connect?: InteractionsWhereUniqueInput | InteractionsWhereUniqueInput[];
    update?:
      | InteractionsUpdateWithWhereUniqueWithoutOrganizationInput
      | InteractionsUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | InteractionsUpdateManyWithWhereWithoutOrganizationInput
      | InteractionsUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: InteractionsScalarWhereInput | InteractionsScalarWhereInput[];
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

  export type EnumOrganizationRoleFieldUpdateOperationsInput = {
    set?: $Enums.OrganizationRole;
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

  export type OrganizationCreateWithoutLeadsInput = {
    id?: string;
    name: string;
    users?: OrganizationUserCreateNestedManyWithoutOrganizationInput;
    interactions?: InteractionsCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutLeadsInput = {
    id?: string;
    name: string;
    users?: OrganizationUserUncheckedCreateNestedManyWithoutOrganizationInput;
    interactions?: InteractionsUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutLeadsInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutLeadsInput,
      OrganizationUncheckedCreateWithoutLeadsInput
    >;
  };

  export type InteractionsCreateWithoutLeadInput = {
    id?: string;
    message: string;
    createdAt: Date | string;
    organization: OrganizationCreateNestedOneWithoutInteractionsInput;
  };

  export type InteractionsUncheckedCreateWithoutLeadInput = {
    id?: string;
    organizationId: string;
    message: string;
    createdAt: Date | string;
  };

  export type InteractionsCreateOrConnectWithoutLeadInput = {
    where: InteractionsWhereUniqueInput;
    create: XOR<
      InteractionsCreateWithoutLeadInput,
      InteractionsUncheckedCreateWithoutLeadInput
    >;
  };

  export type InteractionsCreateManyLeadInputEnvelope = {
    data: InteractionsCreateManyLeadInput | InteractionsCreateManyLeadInput[];
    skipDuplicates?: boolean;
  };

  export type OrganizationUpsertWithoutLeadsInput = {
    update: XOR<
      OrganizationUpdateWithoutLeadsInput,
      OrganizationUncheckedUpdateWithoutLeadsInput
    >;
    create: XOR<
      OrganizationCreateWithoutLeadsInput,
      OrganizationUncheckedCreateWithoutLeadsInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutLeadsInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutLeadsInput,
      OrganizationUncheckedUpdateWithoutLeadsInput
    >;
  };

  export type OrganizationUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    users?: OrganizationUserUpdateManyWithoutOrganizationNestedInput;
    interactions?: InteractionsUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutLeadsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    users?: OrganizationUserUncheckedUpdateManyWithoutOrganizationNestedInput;
    interactions?: InteractionsUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type InteractionsUpsertWithWhereUniqueWithoutLeadInput = {
    where: InteractionsWhereUniqueInput;
    update: XOR<
      InteractionsUpdateWithoutLeadInput,
      InteractionsUncheckedUpdateWithoutLeadInput
    >;
    create: XOR<
      InteractionsCreateWithoutLeadInput,
      InteractionsUncheckedCreateWithoutLeadInput
    >;
  };

  export type InteractionsUpdateWithWhereUniqueWithoutLeadInput = {
    where: InteractionsWhereUniqueInput;
    data: XOR<
      InteractionsUpdateWithoutLeadInput,
      InteractionsUncheckedUpdateWithoutLeadInput
    >;
  };

  export type InteractionsUpdateManyWithWhereWithoutLeadInput = {
    where: InteractionsScalarWhereInput;
    data: XOR<
      InteractionsUpdateManyMutationInput,
      InteractionsUncheckedUpdateManyWithoutLeadInput
    >;
  };

  export type InteractionsScalarWhereInput = {
    AND?: InteractionsScalarWhereInput | InteractionsScalarWhereInput[];
    OR?: InteractionsScalarWhereInput[];
    NOT?: InteractionsScalarWhereInput | InteractionsScalarWhereInput[];
    id?: UuidFilter<'Interactions'> | string;
    organizationId?: UuidFilter<'Interactions'> | string;
    leadId?: UuidFilter<'Interactions'> | string;
    message?: StringFilter<'Interactions'> | string;
    createdAt?: DateTimeFilter<'Interactions'> | Date | string;
  };

  export type OrganizationCreateWithoutInteractionsInput = {
    id?: string;
    name: string;
    users?: OrganizationUserCreateNestedManyWithoutOrganizationInput;
    leads?: LeadsCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutInteractionsInput = {
    id?: string;
    name: string;
    users?: OrganizationUserUncheckedCreateNestedManyWithoutOrganizationInput;
    leads?: LeadsUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationCreateOrConnectWithoutInteractionsInput = {
    where: OrganizationWhereUniqueInput;
    create: XOR<
      OrganizationCreateWithoutInteractionsInput,
      OrganizationUncheckedCreateWithoutInteractionsInput
    >;
  };

  export type LeadsCreateWithoutInteractionsInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    organization: OrganizationCreateNestedOneWithoutLeadsInput;
  };

  export type LeadsUncheckedCreateWithoutInteractionsInput = {
    id?: string;
    organizationId: string;
    name: string;
    email: string;
    phone: string;
  };

  export type LeadsCreateOrConnectWithoutInteractionsInput = {
    where: LeadsWhereUniqueInput;
    create: XOR<
      LeadsCreateWithoutInteractionsInput,
      LeadsUncheckedCreateWithoutInteractionsInput
    >;
  };

  export type OrganizationUpsertWithoutInteractionsInput = {
    update: XOR<
      OrganizationUpdateWithoutInteractionsInput,
      OrganizationUncheckedUpdateWithoutInteractionsInput
    >;
    create: XOR<
      OrganizationCreateWithoutInteractionsInput,
      OrganizationUncheckedCreateWithoutInteractionsInput
    >;
    where?: OrganizationWhereInput;
  };

  export type OrganizationUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: OrganizationWhereInput;
    data: XOR<
      OrganizationUpdateWithoutInteractionsInput,
      OrganizationUncheckedUpdateWithoutInteractionsInput
    >;
  };

  export type OrganizationUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    users?: OrganizationUserUpdateManyWithoutOrganizationNestedInput;
    leads?: LeadsUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    users?: OrganizationUserUncheckedUpdateManyWithoutOrganizationNestedInput;
    leads?: LeadsUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type LeadsUpsertWithoutInteractionsInput = {
    update: XOR<
      LeadsUpdateWithoutInteractionsInput,
      LeadsUncheckedUpdateWithoutInteractionsInput
    >;
    create: XOR<
      LeadsCreateWithoutInteractionsInput,
      LeadsUncheckedCreateWithoutInteractionsInput
    >;
    where?: LeadsWhereInput;
  };

  export type LeadsUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: LeadsWhereInput;
    data: XOR<
      LeadsUpdateWithoutInteractionsInput,
      LeadsUncheckedUpdateWithoutInteractionsInput
    >;
  };

  export type LeadsUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    organization?: OrganizationUpdateOneRequiredWithoutLeadsNestedInput;
  };

  export type LeadsUncheckedUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
  };

  export type OrganizationUserCreateWithoutOrganizationInput = {
    role?: $Enums.OrganizationRole;
    user: UserCreateNestedOneWithoutOrganizationsInput;
  };

  export type OrganizationUserUncheckedCreateWithoutOrganizationInput = {
    userId: string;
    role?: $Enums.OrganizationRole;
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

  export type LeadsCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    interactions?: InteractionsCreateNestedManyWithoutLeadInput;
  };

  export type LeadsUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    interactions?: InteractionsUncheckedCreateNestedManyWithoutLeadInput;
  };

  export type LeadsCreateOrConnectWithoutOrganizationInput = {
    where: LeadsWhereUniqueInput;
    create: XOR<
      LeadsCreateWithoutOrganizationInput,
      LeadsUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type LeadsCreateManyOrganizationInputEnvelope = {
    data: LeadsCreateManyOrganizationInput | LeadsCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type InteractionsCreateWithoutOrganizationInput = {
    id?: string;
    message: string;
    createdAt: Date | string;
    lead: LeadsCreateNestedOneWithoutInteractionsInput;
  };

  export type InteractionsUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    leadId: string;
    message: string;
    createdAt: Date | string;
  };

  export type InteractionsCreateOrConnectWithoutOrganizationInput = {
    where: InteractionsWhereUniqueInput;
    create: XOR<
      InteractionsCreateWithoutOrganizationInput,
      InteractionsUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type InteractionsCreateManyOrganizationInputEnvelope = {
    data:
      | InteractionsCreateManyOrganizationInput
      | InteractionsCreateManyOrganizationInput[];
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
  };

  export type LeadsUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: LeadsWhereUniqueInput;
    update: XOR<
      LeadsUpdateWithoutOrganizationInput,
      LeadsUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      LeadsCreateWithoutOrganizationInput,
      LeadsUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type LeadsUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: LeadsWhereUniqueInput;
    data: XOR<
      LeadsUpdateWithoutOrganizationInput,
      LeadsUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type LeadsUpdateManyWithWhereWithoutOrganizationInput = {
    where: LeadsScalarWhereInput;
    data: XOR<
      LeadsUpdateManyMutationInput,
      LeadsUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type LeadsScalarWhereInput = {
    AND?: LeadsScalarWhereInput | LeadsScalarWhereInput[];
    OR?: LeadsScalarWhereInput[];
    NOT?: LeadsScalarWhereInput | LeadsScalarWhereInput[];
    id?: UuidFilter<'Leads'> | string;
    organizationId?: UuidFilter<'Leads'> | string;
    name?: StringFilter<'Leads'> | string;
    email?: StringFilter<'Leads'> | string;
    phone?: StringFilter<'Leads'> | string;
  };

  export type InteractionsUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: InteractionsWhereUniqueInput;
    update: XOR<
      InteractionsUpdateWithoutOrganizationInput,
      InteractionsUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      InteractionsCreateWithoutOrganizationInput,
      InteractionsUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type InteractionsUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: InteractionsWhereUniqueInput;
    data: XOR<
      InteractionsUpdateWithoutOrganizationInput,
      InteractionsUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type InteractionsUpdateManyWithWhereWithoutOrganizationInput = {
    where: InteractionsScalarWhereInput;
    data: XOR<
      InteractionsUpdateManyMutationInput,
      InteractionsUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type UserCreateWithoutOrganizationsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
  };

  export type UserUncheckedCreateWithoutOrganizationsInput = {
    id?: string;
    name: string;
    email: string;
    password: string;
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
    leads?: LeadsCreateNestedManyWithoutOrganizationInput;
    interactions?: InteractionsCreateNestedManyWithoutOrganizationInput;
  };

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    leads?: LeadsUncheckedCreateNestedManyWithoutOrganizationInput;
    interactions?: InteractionsUncheckedCreateNestedManyWithoutOrganizationInput;
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
  };

  export type UserUncheckedUpdateWithoutOrganizationsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
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
    leads?: LeadsUpdateManyWithoutOrganizationNestedInput;
    interactions?: InteractionsUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    leads?: LeadsUncheckedUpdateManyWithoutOrganizationNestedInput;
    interactions?: InteractionsUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type OrganizationUserCreateWithoutUserInput = {
    role?: $Enums.OrganizationRole;
    organization: OrganizationCreateNestedOneWithoutUsersInput;
  };

  export type OrganizationUserUncheckedCreateWithoutUserInput = {
    organizationId: string;
    role?: $Enums.OrganizationRole;
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

  export type InteractionsCreateManyLeadInput = {
    id?: string;
    organizationId: string;
    message: string;
    createdAt: Date | string;
  };

  export type InteractionsUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: OrganizationUpdateOneRequiredWithoutInteractionsNestedInput;
  };

  export type InteractionsUncheckedUpdateWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InteractionsUncheckedUpdateManyWithoutLeadInput = {
    id?: StringFieldUpdateOperationsInput | string;
    organizationId?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationUserCreateManyOrganizationInput = {
    userId: string;
    role?: $Enums.OrganizationRole;
  };

  export type LeadsCreateManyOrganizationInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
  };

  export type InteractionsCreateManyOrganizationInput = {
    id?: string;
    leadId: string;
    message: string;
    createdAt: Date | string;
  };

  export type OrganizationUserUpdateWithoutOrganizationInput = {
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    user?: UserUpdateOneRequiredWithoutOrganizationsNestedInput;
  };

  export type OrganizationUserUncheckedUpdateWithoutOrganizationInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
  };

  export type OrganizationUserUncheckedUpdateManyWithoutOrganizationInput = {
    userId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
  };

  export type LeadsUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    interactions?: InteractionsUpdateManyWithoutLeadNestedInput;
  };

  export type LeadsUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
    interactions?: InteractionsUncheckedUpdateManyWithoutLeadNestedInput;
  };

  export type LeadsUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    phone?: StringFieldUpdateOperationsInput | string;
  };

  export type InteractionsUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    lead?: LeadsUpdateOneRequiredWithoutInteractionsNestedInput;
  };

  export type InteractionsUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    leadId?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type InteractionsUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    leadId?: StringFieldUpdateOperationsInput | string;
    message?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrganizationUserCreateManyUserInput = {
    organizationId: string;
    role?: $Enums.OrganizationRole;
  };

  export type OrganizationUserUpdateWithoutUserInput = {
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
    organization?: OrganizationUpdateOneRequiredWithoutUsersNestedInput;
  };

  export type OrganizationUserUncheckedUpdateWithoutUserInput = {
    organizationId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
  };

  export type OrganizationUserUncheckedUpdateManyWithoutUserInput = {
    organizationId?: StringFieldUpdateOperationsInput | string;
    role?:
      | EnumOrganizationRoleFieldUpdateOperationsInput
      | $Enums.OrganizationRole;
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
