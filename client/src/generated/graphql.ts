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

export enum EnumWordWordClass {
  czasowniki = 'czasowniki',
  przyimki = 'przyimki',
  przymiotniki = 'przymiotniki',
  przyslowki = 'przyslowki',
  rzeczowniki = 'rzeczowniki',
  spojniki = 'spojniki',
  wykrzykniki = 'wykrzykniki',
  zaimek = 'zaimek'
}

export enum EnumWordWordGender {
  meski = 'meski',
  nijaki = 'nijaki',
  none = 'none',
  zenski = 'zenski'
}

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

export enum SortConnectionUserEnum {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC'
}

export enum SortConnectionWordEnum {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC'
}

export enum SortFindByIdsUserInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC'
}

export enum SortFindByIdsWordInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC'
}

export enum SortFindManyUserInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC'
}

export enum SortFindManyWordInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC'
}

export enum SortFindOneUserInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC'
}

export enum SortFindOneWordInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC'
}

export type UpdateByIdUserInput = {
  age?: InputMaybe<Scalars['Float']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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

export type GetWordsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWordsQuery = { wordMany: Array<{ english?: string | null, polish?: string | null, englishDescription?: string | null, polishDescription?: string | null, tags?: Array<string | null> | null }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { userMany: Array<{ name?: string | null }> };

export type CreateWordMutationVariables = Exact<{
  record: CreateOneWordInput;
}>;


export type CreateWordMutation = { wordCreateOne?: { recordId?: any | null } | null };


export const GetWordsDocument = gql`
    query GetWords {
  wordMany {
    english
    polish
    englishDescription
    polishDescription
    tags
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