import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
  MongoID: { input: any; output: any; }
};

export type CreateOneUserInput = {
  age?: InputMaybe<Scalars['Float']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type CreateOneUserPayload = {
  __typename?: 'CreateOneUserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type CreateOneWordInput = {
  cues?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  english?: InputMaybe<Scalars['String']['input']>;
  englishDescription?: InputMaybe<Scalars['String']['input']>;
  polish?: InputMaybe<Scalars['String']['input']>;
  polishDescription?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wordClass?: InputMaybe<EnumWordWordClass>;
  wordGender?: InputMaybe<EnumWordWordGender>;
};

export type CreateOneWordPayload = {
  __typename?: 'CreateOneWordPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Created document */
  record?: Maybe<Word>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export enum EnumWordClass {
  Czasowniki = 'czasowniki',
  Przyimki = 'przyimki',
  Przymiotniki = 'przymiotniki',
  Przyslowki = 'przyslowki',
  Rzeczowniki = 'rzeczowniki',
  Spojniki = 'spojniki',
  Wykrzykniki = 'wykrzykniki',
  Zaimek = 'zaimek'
}

export enum EnumWordGender {
  Meski = 'meski',
  Nijaki = 'nijaki',
  None = 'none',
  Zenski = 'zenski'
}

export enum EnumWordWordClass {
  Czasowniki = 'CZASOWNIKI',
  Przyimki = 'PRZYIMKI',
  Przymiotniki = 'PRZYMIOTNIKI',
  PrzysWki = 'PRZYS__WKI',
  Rzeczowniki = 'RZECZOWNIKI',
  SpJniki = 'SP_JNIKI',
  Wykrzykniki = 'WYKRZYKNIKI',
  Zaimek = 'ZAIMEK'
}

export enum EnumWordWordGender {
  Meski = 'MESKI',
  Nijaki = 'NIJAKI',
  None = 'NONE',
  Zenski = 'ZENSKI'
}

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']['output']>;
};

export type FilterCountUserInput = {
  AND?: InputMaybe<Array<FilterCountUserInput>>;
  OR?: InputMaybe<Array<FilterCountUserInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountUserOperatorsInput>;
  age?: InputMaybe<Scalars['Float']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountUserOperatorsInput = {
  _id?: InputMaybe<FilterCountUser_IdOperatorsInput>;
};

export type FilterCountUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterCountWordInput = {
  AND?: InputMaybe<Array<FilterCountWordInput>>;
  OR?: InputMaybe<Array<FilterCountWordInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterCountWordOperatorsInput>;
  cues?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  english?: InputMaybe<Scalars['String']['input']>;
  englishDescription?: InputMaybe<Scalars['String']['input']>;
  polish?: InputMaybe<Scalars['String']['input']>;
  polishDescription?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wordClass?: InputMaybe<EnumWordWordClass>;
  wordGender?: InputMaybe<EnumWordWordGender>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountWordOperatorsInput = {
  _id?: InputMaybe<FilterCountWord_IdOperatorsInput>;
};

export type FilterCountWord_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyUserInput = {
  AND?: InputMaybe<Array<FilterFindManyUserInput>>;
  OR?: InputMaybe<Array<FilterFindManyUserInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyUserOperatorsInput>;
  age?: InputMaybe<Scalars['Float']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyUserOperatorsInput = {
  _id?: InputMaybe<FilterFindManyUser_IdOperatorsInput>;
};

export type FilterFindManyUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindManyWordInput = {
  AND?: InputMaybe<Array<FilterFindManyWordInput>>;
  OR?: InputMaybe<Array<FilterFindManyWordInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindManyWordOperatorsInput>;
  cues?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  english?: InputMaybe<Scalars['String']['input']>;
  englishDescription?: InputMaybe<Scalars['String']['input']>;
  polish?: InputMaybe<Scalars['String']['input']>;
  polishDescription?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wordClass?: InputMaybe<EnumWordWordClass>;
  wordGender?: InputMaybe<EnumWordWordGender>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyWordOperatorsInput = {
  _id?: InputMaybe<FilterFindManyWord_IdOperatorsInput>;
};

export type FilterFindManyWord_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneUserInput = {
  AND?: InputMaybe<Array<FilterFindOneUserInput>>;
  OR?: InputMaybe<Array<FilterFindOneUserInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneUserOperatorsInput>;
  age?: InputMaybe<Scalars['Float']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneUserOperatorsInput = {
  _id?: InputMaybe<FilterFindOneUser_IdOperatorsInput>;
};

export type FilterFindOneUser_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type FilterFindOneWordInput = {
  AND?: InputMaybe<Array<FilterFindOneWordInput>>;
  OR?: InputMaybe<Array<FilterFindOneWordInput>>;
  _id?: InputMaybe<Scalars['MongoID']['input']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: InputMaybe<FilterFindOneWordOperatorsInput>;
  cues?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  english?: InputMaybe<Scalars['String']['input']>;
  englishDescription?: InputMaybe<Scalars['String']['input']>;
  polish?: InputMaybe<Scalars['String']['input']>;
  polishDescription?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wordClass?: InputMaybe<EnumWordWordClass>;
  wordGender?: InputMaybe<EnumWordWordGender>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneWordOperatorsInput = {
  _id?: InputMaybe<FilterFindOneWord_IdOperatorsInput>;
};

export type FilterFindOneWord_IdOperatorsInput = {
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['MongoID']['input']>;
  gte?: InputMaybe<Scalars['MongoID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
  lt?: InputMaybe<Scalars['MongoID']['input']>;
  lte?: InputMaybe<Scalars['MongoID']['input']>;
  ne?: InputMaybe<Scalars['MongoID']['input']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['MongoID']['input']>>>;
};

export type MongoError = ErrorInterface & {
  __typename?: 'MongoError';
  /** MongoDB error code */
  code?: Maybe<Scalars['Int']['output']>;
  /** MongoDB error message */
  message?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one document with mongoose defaults, setters, hooks and validation */
  userCreateOne?: Maybe<CreateOneUserPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  userRemoveById?: Maybe<RemoveByIdUserPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  userUpdateById?: Maybe<UpdateByIdUserPayload>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  wordCreateOne?: Maybe<CreateOneWordPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  wordRemoveById?: Maybe<RemoveByIdWordPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  wordUpdateById?: Maybe<UpdateByIdWordPayload>;
};


export type MutationUserCreateOneArgs = {
  record: CreateOneUserInput;
};


export type MutationUserRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationUserUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdUserInput;
};


export type MutationWordCreateOneArgs = {
  record: CreateOneWordInput;
};


export type MutationWordRemoveByIdArgs = {
  _id: Scalars['MongoID']['input'];
};


export type MutationWordUpdateByIdArgs = {
  _id: Scalars['MongoID']['input'];
  record: UpdateByIdWordInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  userByIds: Array<User>;
  userConnection?: Maybe<UserConnection>;
  userCount?: Maybe<Scalars['Int']['output']>;
  userMany: Array<User>;
  userOne?: Maybe<User>;
  word?: Maybe<Word>;
  wordConnection?: Maybe<WordConnection>;
  wordCount?: Maybe<Scalars['Int']['output']>;
  wordMany: Array<Word>;
  wordOne?: Maybe<Word>;
  words: Array<Word>;
};


export type QueryUserByIdsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsUserInput>;
};


export type QueryUserConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyUserInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionUserEnum>;
};


export type QueryUserCountArgs = {
  filter?: InputMaybe<FilterCountUserInput>;
};


export type QueryUserManyArgs = {
  filter?: InputMaybe<FilterFindManyUserInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyUserInput>;
};


export type QueryUserOneArgs = {
  filter?: InputMaybe<FilterFindOneUserInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneUserInput>;
};


export type QueryWordArgs = {
  _id: Scalars['MongoID']['input'];
};


export type QueryWordConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<FilterFindManyWordInput>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortConnectionWordEnum>;
};


export type QueryWordCountArgs = {
  filter?: InputMaybe<FilterCountWordInput>;
};


export type QueryWordManyArgs = {
  filter?: InputMaybe<FilterFindManyWordInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindManyWordInput>;
};


export type QueryWordOneArgs = {
  filter?: InputMaybe<FilterFindOneWordInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindOneWordInput>;
};


export type QueryWordsArgs = {
  _ids: Array<Scalars['MongoID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<SortFindByIdsWordInput>;
};

export type RemoveByIdUserPayload = {
  __typename?: 'RemoveByIdUserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RemoveByIdWordPayload = {
  __typename?: 'RemoveByIdWordPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Removed document */
  record?: Maybe<Word>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type RuntimeError = ErrorInterface & {
  __typename?: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']['output']>;
};

export enum SortConnectionUserEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortConnectionWordEnum {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindByIdsWordInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyWordInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneWordInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateByIdUserInput = {
  age?: InputMaybe<Scalars['Float']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateByIdUserPayload = {
  __typename?: 'UpdateByIdUserPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<User>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type UpdateByIdWordInput = {
  cues?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  english?: InputMaybe<Scalars['String']['input']>;
  englishDescription?: InputMaybe<Scalars['String']['input']>;
  polish?: InputMaybe<Scalars['String']['input']>;
  polishDescription?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  wordClass?: InputMaybe<EnumWordWordClass>;
  wordGender?: InputMaybe<EnumWordWordGender>;
};

export type UpdateByIdWordPayload = {
  __typename?: 'UpdateByIdWordPayload';
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
  /** Updated document */
  record?: Maybe<Word>;
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']['output']>;
};

export type User = {
  __typename?: 'User';
  _id: Scalars['MongoID']['output'];
  age?: Maybe<Scalars['Float']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: User;
};

export type ValidationError = ErrorInterface & {
  __typename?: 'ValidationError';
  /** List of validator errors */
  errors?: Maybe<Array<ValidatorError>>;
  /** Combined error message from all validators */
  message?: Maybe<Scalars['String']['output']>;
};

export type ValidatorError = {
  __typename?: 'ValidatorError';
  /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
  idx: Scalars['Int']['output'];
  /** Validation error message */
  message?: Maybe<Scalars['String']['output']>;
  /** Source of the validation error from the model path */
  path?: Maybe<Scalars['String']['output']>;
  /** Field value which occurs the validation error */
  value?: Maybe<Scalars['JSON']['output']>;
};

export type Word = {
  __typename?: 'Word';
  _id: Scalars['MongoID']['output'];
  cues?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  english?: Maybe<Scalars['String']['output']>;
  englishDescription?: Maybe<Scalars['String']['output']>;
  polish?: Maybe<Scalars['String']['output']>;
  polishDescription?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  wordClass?: Maybe<EnumWordClass>;
  wordGender?: Maybe<EnumWordGender>;
};

/** A connection to a list of items. */
export type WordConnection = {
  __typename?: 'WordConnection';
  /** Total object count. */
  count: Scalars['Int']['output'];
  /** Information to aid in pagination. */
  edges: Array<WordEdge>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type WordEdge = {
  __typename?: 'WordEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node: Word;
};

export type GetWordsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWordsQuery = { __typename?: 'Query', wordMany: Array<{ __typename?: 'Word', english?: string | null, polish?: string | null, englishDescription?: string | null, polishDescription?: string | null }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', userMany: Array<{ __typename?: 'User', name?: string | null }> };

export type CreateWordMutationVariables = Exact<{
  record: CreateOneWordInput;
}>;


export type CreateWordMutation = { __typename?: 'Mutation', wordCreateOne?: { __typename?: 'CreateOneWordPayload', recordId?: any | null } | null };


export const GetWordsDocument = gql`
    query GetWords {
  wordMany {
    english
    polish
    englishDescription
    polishDescription
  }
}
    `;

/**
 * __useGetWordsQuery__
 *
 * To run a query within a React component, call `useGetWordsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWordsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWordsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWordsQuery(baseOptions?: Apollo.QueryHookOptions<GetWordsQuery, GetWordsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWordsQuery, GetWordsQueryVariables>(GetWordsDocument, options);
      }
export function useGetWordsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWordsQuery, GetWordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWordsQuery, GetWordsQueryVariables>(GetWordsDocument, options);
        }
export function useGetWordsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetWordsQuery, GetWordsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetWordsQuery, GetWordsQueryVariables>(GetWordsDocument, options);
        }
export type GetWordsQueryHookResult = ReturnType<typeof useGetWordsQuery>;
export type GetWordsLazyQueryHookResult = ReturnType<typeof useGetWordsLazyQuery>;
export type GetWordsSuspenseQueryHookResult = ReturnType<typeof useGetWordsSuspenseQuery>;
export type GetWordsQueryResult = Apollo.QueryResult<GetWordsQuery, GetWordsQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  userMany {
    name
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const CreateWordDocument = gql`
    mutation CreateWord($record: CreateOneWordInput!) {
  wordCreateOne(record: $record) {
    recordId
  }
}
    `;
export type CreateWordMutationFn = Apollo.MutationFunction<CreateWordMutation, CreateWordMutationVariables>;

/**
 * __useCreateWordMutation__
 *
 * To run a mutation, you first call `useCreateWordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWordMutation, { data, loading, error }] = useCreateWordMutation({
 *   variables: {
 *      record: // value for 'record'
 *   },
 * });
 */
export function useCreateWordMutation(baseOptions?: Apollo.MutationHookOptions<CreateWordMutation, CreateWordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWordMutation, CreateWordMutationVariables>(CreateWordDocument, options);
      }
export type CreateWordMutationHookResult = ReturnType<typeof useCreateWordMutation>;
export type CreateWordMutationResult = Apollo.MutationResult<CreateWordMutation>;
export type CreateWordMutationOptions = Apollo.BaseMutationOptions<CreateWordMutation, CreateWordMutationVariables>;