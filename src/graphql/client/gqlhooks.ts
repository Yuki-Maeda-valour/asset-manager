import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Asset = {
  __typename?: 'Asset'
  borrowings?: Maybe<Array<Maybe<Borrowing>>>
  createdAt?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  name?: Maybe<Scalars['String']['output']>
  type?: Maybe<AssetType>
  updatedAt?: Maybe<Scalars['String']['output']>
}

export enum AssetType {
  Monitor = 'MONITOR',
  Pc = 'PC',
  Sp = 'SP',
  Wifi = 'WIFI',
}

export type Borrowing = {
  __typename?: 'Borrowing'
  asset?: Maybe<Asset>
  assetId?: Maybe<Scalars['Int']['output']>
  borrowedAt?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['String']['output']>
  deadline?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  returnedAt?: Maybe<Scalars['String']['output']>
  status?: Maybe<BorrowingStatus>
  updatedAt?: Maybe<Scalars['String']['output']>
  user?: Maybe<User>
  userId?: Maybe<Scalars['Int']['output']>
}

export enum BorrowingStatus {
  Available = 'AVAILABLE',
  Lent = 'LENT',
  Reserved = 'RESERVED',
  Suspended = 'SUSPENDED',
}

export type Mutation = {
  __typename?: 'Mutation'
  createAsset?: Maybe<Asset>
  createBorrowing?: Maybe<Borrowing>
  createUser?: Maybe<User>
  deleteAsset?: Maybe<Asset>
  deleteBorrowing?: Maybe<Borrowing>
  deleteUser?: Maybe<User>
  updateAsset?: Maybe<Asset>
  updateBorrowing?: Maybe<Borrowing>
  updateUser?: Maybe<User>
}

export type MutationCreateAssetArgs = {
  name?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<AssetType>
}

export type MutationCreateBorrowingArgs = {
  assetId?: InputMaybe<Scalars['Int']['input']>
  borrowedAt?: InputMaybe<Scalars['String']['input']>
  deadline?: InputMaybe<Scalars['String']['input']>
  status?: InputMaybe<BorrowingStatus>
  userId?: InputMaybe<Scalars['Int']['input']>
}

export type MutationCreateUserArgs = {
  role?: InputMaybe<Role>
  username?: InputMaybe<Scalars['String']['input']>
}

export type MutationDeleteAssetArgs = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type MutationDeleteBorrowingArgs = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type MutationUpdateAssetArgs = {
  id?: InputMaybe<Scalars['Int']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<AssetType>
}

export type MutationUpdateBorrowingArgs = {
  assetId?: InputMaybe<Scalars['Int']['input']>
  borrowedAt?: InputMaybe<Scalars['String']['input']>
  deadline?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<BorrowingStatus>
  userId?: InputMaybe<Scalars['Int']['input']>
}

export type MutationUpdateUserArgs = {
  id?: InputMaybe<Scalars['Int']['input']>
  role?: InputMaybe<Role>
  username?: InputMaybe<Scalars['String']['input']>
}

export type Query = {
  __typename?: 'Query'
  asset?: Maybe<Asset>
  assets?: Maybe<Array<Maybe<Asset>>>
  borrowing?: Maybe<Borrowing>
  borrowings?: Maybe<Array<Maybe<Borrowing>>>
  user?: Maybe<User>
  users?: Maybe<Array<Maybe<User>>>
}

export type QueryAssetArgs = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type QueryBorrowingArgs = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export type QueryUserArgs = {
  id?: InputMaybe<Scalars['Int']['input']>
}

export enum Role {
  Admin = 'ADMIN',
  User = 'USER',
}

export type User = {
  __typename?: 'User'
  borrowings?: Maybe<Array<Maybe<Borrowing>>>
  createdAt?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['Int']['output']>
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['String']['output']>
  username?: Maybe<Scalars['String']['output']>
}

export type AssetsQueryVariables = Exact<{ [key: string]: never }>

export type AssetsQuery = {
  __typename?: 'Query'
  assets?: Array<{
    __typename?: 'Asset'
    id?: number | null
    name?: string | null
    type?: AssetType | null
  } | null> | null
}

export type UsersQueryVariables = Exact<{ [key: string]: never }>

export type UsersQuery = {
  __typename?: 'Query'
  users?: Array<{
    __typename?: 'User'
    id?: number | null
    username?: string | null
  } | null> | null
}

export const AssetsDocument = gql`
  query Assets {
    assets {
      id
      name
      type
    }
  }
`

/**
 * __useAssetsQuery__
 *
 * To run a query within a React component, call `useAssetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAssetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAssetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAssetsQuery(
  baseOptions?: Apollo.QueryHookOptions<AssetsQuery, AssetsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AssetsQuery, AssetsQueryVariables>(
    AssetsDocument,
    options,
  )
}
export function useAssetsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<AssetsQuery, AssetsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AssetsQuery, AssetsQueryVariables>(
    AssetsDocument,
    options,
  )
}
export function useAssetsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    AssetsQuery,
    AssetsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<AssetsQuery, AssetsQueryVariables>(
    AssetsDocument,
    options,
  )
}
export type AssetsQueryHookResult = ReturnType<typeof useAssetsQuery>
export type AssetsLazyQueryHookResult = ReturnType<typeof useAssetsLazyQuery>
export type AssetsSuspenseQueryHookResult = ReturnType<
  typeof useAssetsSuspenseQuery
>
export type AssetsQueryResult = Apollo.QueryResult<
  AssetsQuery,
  AssetsQueryVariables
>
export const UsersDocument = gql`
  query Users {
    users {
      id
      username
    }
  }
`

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options,
  )
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options,
  )
}
export function useUsersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    UsersQuery,
    UsersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options,
  )
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>
export type UsersSuspenseQueryHookResult = ReturnType<
  typeof useUsersSuspenseQuery
>
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>
