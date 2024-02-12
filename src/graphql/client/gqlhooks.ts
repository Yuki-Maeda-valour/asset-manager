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
  status?: Maybe<AssetStatus>
  type?: Maybe<AssetType>
  updatedAt?: Maybe<Scalars['String']['output']>
}

export enum AssetStatus {
  Available = 'AVAILABLE',
  Lent = 'LENT',
  Reserved = 'RESERVED',
  Suspended = 'SUSPENDED',
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
  updatedAt?: Maybe<Scalars['String']['output']>
  user?: Maybe<User>
  userId?: Maybe<Scalars['Int']['output']>
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
  status?: InputMaybe<AssetStatus>
  type?: InputMaybe<AssetType>
}

export type MutationCreateBorrowingArgs = {
  assetId?: InputMaybe<Scalars['Int']['input']>
  borrowedAt?: InputMaybe<Scalars['String']['input']>
  deadline?: InputMaybe<Scalars['String']['input']>
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
  status?: InputMaybe<AssetStatus>
  type?: InputMaybe<AssetType>
}

export type MutationUpdateBorrowingArgs = {
  assetId?: InputMaybe<Scalars['Int']['input']>
  borrowedAt?: InputMaybe<Scalars['String']['input']>
  deadline?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['Int']['input']>
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
    status?: AssetStatus | null
  } | null> | null
}

export type CreateAssetMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<AssetType>
  status?: InputMaybe<AssetStatus>
}>

export type CreateAssetMutation = {
  __typename?: 'Mutation'
  createAsset?: {
    __typename?: 'Asset'
    id?: number | null
    name?: string | null
    type?: AssetType | null
    status?: AssetStatus | null
    createdAt?: string | null
    updatedAt?: string | null
  } | null
}

export type UpdateAssetMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>
  type?: InputMaybe<AssetType>
  updateAssetId?: InputMaybe<Scalars['Int']['input']>
  status?: InputMaybe<AssetStatus>
}>

export type UpdateAssetMutation = {
  __typename?: 'Mutation'
  updateAsset?: {
    __typename?: 'Asset'
    id?: number | null
    name?: string | null
    type?: AssetType | null
    status?: AssetStatus | null
    updatedAt?: string | null
  } | null
}

export type DeleteAssetMutationVariables = Exact<{
  deleteAssetId?: InputMaybe<Scalars['Int']['input']>
}>

export type DeleteAssetMutation = {
  __typename?: 'Mutation'
  deleteAsset?: {
    __typename?: 'Asset'
    id?: number | null
    name?: string | null
    type?: AssetType | null
    status?: AssetStatus | null
  } | null
}

export type BorrowingsQueryVariables = Exact<{ [key: string]: never }>

export type BorrowingsQuery = {
  __typename?: 'Query'
  borrowings?: Array<{
    __typename?: 'Borrowing'
    id?: number | null
    borrowedAt?: string | null
    returnedAt?: string | null
    deadline?: string | null
    createdAt?: string | null
    updatedAt?: string | null
    userId?: number | null
    assetId?: number | null
    user?: {
      __typename?: 'User'
      username?: string | null
      role?: Role | null
    } | null
    asset?: {
      __typename?: 'Asset'
      name?: string | null
      type?: AssetType | null
      status?: AssetStatus | null
    } | null
  } | null> | null
}

export type CreateBorrowingMutationVariables = Exact<{
  borrowedAt?: InputMaybe<Scalars['String']['input']>
  deadline?: InputMaybe<Scalars['String']['input']>
  userId?: InputMaybe<Scalars['Int']['input']>
  assetId?: InputMaybe<Scalars['Int']['input']>
}>

export type CreateBorrowingMutation = {
  __typename?: 'Mutation'
  createBorrowing?: {
    __typename?: 'Borrowing'
    id?: number | null
    borrowedAt?: string | null
    returnedAt?: string | null
    deadline?: string | null
    userId?: number | null
    assetId?: number | null
    createdAt?: string | null
    updatedAt?: string | null
  } | null
}

export type UpdateBorrowingMutationVariables = Exact<{
  borrowedAt?: InputMaybe<Scalars['String']['input']>
  deadline?: InputMaybe<Scalars['String']['input']>
  userId?: InputMaybe<Scalars['Int']['input']>
  assetId?: InputMaybe<Scalars['Int']['input']>
  updateBorrowingId?: InputMaybe<Scalars['Int']['input']>
}>

export type UpdateBorrowingMutation = {
  __typename?: 'Mutation'
  updateBorrowing?: {
    __typename?: 'Borrowing'
    id?: number | null
    borrowedAt?: string | null
    returnedAt?: string | null
    deadline?: string | null
    userId?: number | null
    assetId?: number | null
    createdAt?: string | null
    updatedAt?: string | null
    user?: {
      __typename?: 'User'
      id?: number | null
      username?: string | null
      role?: Role | null
    } | null
    asset?: {
      __typename?: 'Asset'
      id?: number | null
      name?: string | null
      type?: AssetType | null
      status?: AssetStatus | null
    } | null
  } | null
}

export type DeleteBorrowingMutationVariables = Exact<{
  deleteBorrowingId?: InputMaybe<Scalars['Int']['input']>
}>

export type DeleteBorrowingMutation = {
  __typename?: 'Mutation'
  deleteBorrowing?: {
    __typename?: 'Borrowing'
    id?: number | null
    borrowedAt?: string | null
    returnedAt?: string | null
    deadline?: string | null
    userId?: number | null
    assetId?: number | null
    createdAt?: string | null
    updatedAt?: string | null
  } | null
}

export type UsersQueryVariables = Exact<{ [key: string]: never }>

export type UsersQuery = {
  __typename?: 'Query'
  users?: Array<{
    __typename?: 'User'
    id?: number | null
    username?: string | null
    role?: Role | null
  } | null> | null
}

export type CreateUserMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Role>
}>

export type CreateUserMutation = {
  __typename?: 'Mutation'
  createUser?: {
    __typename?: 'User'
    id?: number | null
    username?: string | null
    role?: Role | null
    createdAt?: string | null
    updatedAt?: string | null
  } | null
}

export type UpdateUserMutationVariables = Exact<{
  updateUserId?: InputMaybe<Scalars['Int']['input']>
  username?: InputMaybe<Scalars['String']['input']>
  role?: InputMaybe<Role>
}>

export type UpdateUserMutation = {
  __typename?: 'Mutation'
  updateUser?: {
    __typename?: 'User'
    id?: number | null
    username?: string | null
    role?: Role | null
    createdAt?: string | null
    updatedAt?: string | null
  } | null
}

export type DeleteUserMutationVariables = Exact<{
  deleteUserId?: InputMaybe<Scalars['Int']['input']>
}>

export type DeleteUserMutation = {
  __typename?: 'Mutation'
  deleteUser?: {
    __typename?: 'User'
    id?: number | null
    username?: string | null
    role?: Role | null
    createdAt?: string | null
    updatedAt?: string | null
  } | null
}

export const AssetsDocument = gql`
  query Assets {
    assets {
      id
      name
      type
      status
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
export const CreateAssetDocument = gql`
  mutation CreateAsset($name: String, $type: AssetType, $status: AssetStatus) {
    createAsset(name: $name, type: $type, status: $status) {
      id
      name
      type
      status
      createdAt
      updatedAt
    }
  }
`
export type CreateAssetMutationFn = Apollo.MutationFunction<
  CreateAssetMutation,
  CreateAssetMutationVariables
>

/**
 * __useCreateAssetMutation__
 *
 * To run a mutation, you first call `useCreateAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAssetMutation, { data, loading, error }] = useCreateAssetMutation({
 *   variables: {
 *      name: // value for 'name'
 *      type: // value for 'type'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useCreateAssetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateAssetMutation,
    CreateAssetMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateAssetMutation, CreateAssetMutationVariables>(
    CreateAssetDocument,
    options,
  )
}
export type CreateAssetMutationHookResult = ReturnType<
  typeof useCreateAssetMutation
>
export type CreateAssetMutationResult =
  Apollo.MutationResult<CreateAssetMutation>
export type CreateAssetMutationOptions = Apollo.BaseMutationOptions<
  CreateAssetMutation,
  CreateAssetMutationVariables
>
export const UpdateAssetDocument = gql`
  mutation UpdateAsset(
    $name: String
    $type: AssetType
    $updateAssetId: Int
    $status: AssetStatus
  ) {
    updateAsset(name: $name, type: $type, id: $updateAssetId, status: $status) {
      id
      name
      type
      status
      updatedAt
    }
  }
`
export type UpdateAssetMutationFn = Apollo.MutationFunction<
  UpdateAssetMutation,
  UpdateAssetMutationVariables
>

/**
 * __useUpdateAssetMutation__
 *
 * To run a mutation, you first call `useUpdateAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAssetMutation, { data, loading, error }] = useUpdateAssetMutation({
 *   variables: {
 *      name: // value for 'name'
 *      type: // value for 'type'
 *      updateAssetId: // value for 'updateAssetId'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateAssetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateAssetMutation,
    UpdateAssetMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateAssetMutation, UpdateAssetMutationVariables>(
    UpdateAssetDocument,
    options,
  )
}
export type UpdateAssetMutationHookResult = ReturnType<
  typeof useUpdateAssetMutation
>
export type UpdateAssetMutationResult =
  Apollo.MutationResult<UpdateAssetMutation>
export type UpdateAssetMutationOptions = Apollo.BaseMutationOptions<
  UpdateAssetMutation,
  UpdateAssetMutationVariables
>
export const DeleteAssetDocument = gql`
  mutation DeleteAsset($deleteAssetId: Int) {
    deleteAsset(id: $deleteAssetId) {
      id
      name
      type
      status
    }
  }
`
export type DeleteAssetMutationFn = Apollo.MutationFunction<
  DeleteAssetMutation,
  DeleteAssetMutationVariables
>

/**
 * __useDeleteAssetMutation__
 *
 * To run a mutation, you first call `useDeleteAssetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAssetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAssetMutation, { data, loading, error }] = useDeleteAssetMutation({
 *   variables: {
 *      deleteAssetId: // value for 'deleteAssetId'
 *   },
 * });
 */
export function useDeleteAssetMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteAssetMutation,
    DeleteAssetMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteAssetMutation, DeleteAssetMutationVariables>(
    DeleteAssetDocument,
    options,
  )
}
export type DeleteAssetMutationHookResult = ReturnType<
  typeof useDeleteAssetMutation
>
export type DeleteAssetMutationResult =
  Apollo.MutationResult<DeleteAssetMutation>
export type DeleteAssetMutationOptions = Apollo.BaseMutationOptions<
  DeleteAssetMutation,
  DeleteAssetMutationVariables
>
export const BorrowingsDocument = gql`
  query Borrowings {
    borrowings {
      id
      borrowedAt
      returnedAt
      deadline
      createdAt
      updatedAt
      userId
      assetId
      user {
        username
        role
      }
      asset {
        name
        type
        status
      }
    }
  }
`

/**
 * __useBorrowingsQuery__
 *
 * To run a query within a React component, call `useBorrowingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBorrowingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBorrowingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBorrowingsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    BorrowingsQuery,
    BorrowingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<BorrowingsQuery, BorrowingsQueryVariables>(
    BorrowingsDocument,
    options,
  )
}
export function useBorrowingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BorrowingsQuery,
    BorrowingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<BorrowingsQuery, BorrowingsQueryVariables>(
    BorrowingsDocument,
    options,
  )
}
export function useBorrowingsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    BorrowingsQuery,
    BorrowingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<BorrowingsQuery, BorrowingsQueryVariables>(
    BorrowingsDocument,
    options,
  )
}
export type BorrowingsQueryHookResult = ReturnType<typeof useBorrowingsQuery>
export type BorrowingsLazyQueryHookResult = ReturnType<
  typeof useBorrowingsLazyQuery
>
export type BorrowingsSuspenseQueryHookResult = ReturnType<
  typeof useBorrowingsSuspenseQuery
>
export type BorrowingsQueryResult = Apollo.QueryResult<
  BorrowingsQuery,
  BorrowingsQueryVariables
>
export const CreateBorrowingDocument = gql`
  mutation CreateBorrowing(
    $borrowedAt: String
    $deadline: String
    $userId: Int
    $assetId: Int
  ) {
    createBorrowing(
      borrowedAt: $borrowedAt
      deadline: $deadline
      userId: $userId
      assetId: $assetId
    ) {
      id
      borrowedAt
      returnedAt
      deadline
      userId
      assetId
      createdAt
      updatedAt
    }
  }
`
export type CreateBorrowingMutationFn = Apollo.MutationFunction<
  CreateBorrowingMutation,
  CreateBorrowingMutationVariables
>

/**
 * __useCreateBorrowingMutation__
 *
 * To run a mutation, you first call `useCreateBorrowingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBorrowingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBorrowingMutation, { data, loading, error }] = useCreateBorrowingMutation({
 *   variables: {
 *      borrowedAt: // value for 'borrowedAt'
 *      deadline: // value for 'deadline'
 *      userId: // value for 'userId'
 *      assetId: // value for 'assetId'
 *   },
 * });
 */
export function useCreateBorrowingMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBorrowingMutation,
    CreateBorrowingMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    CreateBorrowingMutation,
    CreateBorrowingMutationVariables
  >(CreateBorrowingDocument, options)
}
export type CreateBorrowingMutationHookResult = ReturnType<
  typeof useCreateBorrowingMutation
>
export type CreateBorrowingMutationResult =
  Apollo.MutationResult<CreateBorrowingMutation>
export type CreateBorrowingMutationOptions = Apollo.BaseMutationOptions<
  CreateBorrowingMutation,
  CreateBorrowingMutationVariables
>
export const UpdateBorrowingDocument = gql`
  mutation UpdateBorrowing(
    $borrowedAt: String
    $deadline: String
    $userId: Int
    $assetId: Int
    $updateBorrowingId: Int
  ) {
    updateBorrowing(
      borrowedAt: $borrowedAt
      deadline: $deadline
      userId: $userId
      assetId: $assetId
      id: $updateBorrowingId
    ) {
      id
      borrowedAt
      returnedAt
      deadline
      userId
      assetId
      createdAt
      updatedAt
      user {
        id
        username
        role
      }
      asset {
        id
        name
        type
        status
      }
    }
  }
`
export type UpdateBorrowingMutationFn = Apollo.MutationFunction<
  UpdateBorrowingMutation,
  UpdateBorrowingMutationVariables
>

/**
 * __useUpdateBorrowingMutation__
 *
 * To run a mutation, you first call `useUpdateBorrowingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBorrowingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBorrowingMutation, { data, loading, error }] = useUpdateBorrowingMutation({
 *   variables: {
 *      borrowedAt: // value for 'borrowedAt'
 *      deadline: // value for 'deadline'
 *      userId: // value for 'userId'
 *      assetId: // value for 'assetId'
 *      updateBorrowingId: // value for 'updateBorrowingId'
 *   },
 * });
 */
export function useUpdateBorrowingMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateBorrowingMutation,
    UpdateBorrowingMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    UpdateBorrowingMutation,
    UpdateBorrowingMutationVariables
  >(UpdateBorrowingDocument, options)
}
export type UpdateBorrowingMutationHookResult = ReturnType<
  typeof useUpdateBorrowingMutation
>
export type UpdateBorrowingMutationResult =
  Apollo.MutationResult<UpdateBorrowingMutation>
export type UpdateBorrowingMutationOptions = Apollo.BaseMutationOptions<
  UpdateBorrowingMutation,
  UpdateBorrowingMutationVariables
>
export const DeleteBorrowingDocument = gql`
  mutation DeleteBorrowing($deleteBorrowingId: Int) {
    deleteBorrowing(id: $deleteBorrowingId) {
      id
      borrowedAt
      returnedAt
      deadline
      userId
      assetId
      createdAt
      updatedAt
    }
  }
`
export type DeleteBorrowingMutationFn = Apollo.MutationFunction<
  DeleteBorrowingMutation,
  DeleteBorrowingMutationVariables
>

/**
 * __useDeleteBorrowingMutation__
 *
 * To run a mutation, you first call `useDeleteBorrowingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBorrowingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBorrowingMutation, { data, loading, error }] = useDeleteBorrowingMutation({
 *   variables: {
 *      deleteBorrowingId: // value for 'deleteBorrowingId'
 *   },
 * });
 */
export function useDeleteBorrowingMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteBorrowingMutation,
    DeleteBorrowingMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<
    DeleteBorrowingMutation,
    DeleteBorrowingMutationVariables
  >(DeleteBorrowingDocument, options)
}
export type DeleteBorrowingMutationHookResult = ReturnType<
  typeof useDeleteBorrowingMutation
>
export type DeleteBorrowingMutationResult =
  Apollo.MutationResult<DeleteBorrowingMutation>
export type DeleteBorrowingMutationOptions = Apollo.BaseMutationOptions<
  DeleteBorrowingMutation,
  DeleteBorrowingMutationVariables
>
export const UsersDocument = gql`
  query Users {
    users {
      id
      username
      role
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
export const CreateUserDocument = gql`
  mutation CreateUser($username: String, $role: Role) {
    createUser(username: $username, role: $role) {
      id
      username
      role
      createdAt
      updatedAt
    }
  }
`
export type CreateUserMutationFn = Apollo.MutationFunction<
  CreateUserMutation,
  CreateUserMutationVariables
>

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useCreateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateUserMutation,
    CreateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(
    CreateUserDocument,
    options,
  )
}
export type CreateUserMutationHookResult = ReturnType<
  typeof useCreateUserMutation
>
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<
  CreateUserMutation,
  CreateUserMutationVariables
>
export const UpdateUserDocument = gql`
  mutation UpdateUser($updateUserId: Int, $username: String, $role: Role) {
    updateUser(id: $updateUserId, username: $username, role: $role) {
      id
      username
      role
      createdAt
      updatedAt
    }
  }
`
export type UpdateUserMutationFn = Apollo.MutationFunction<
  UpdateUserMutation,
  UpdateUserMutationVariables
>

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updateUserId: // value for 'updateUserId'
 *      username: // value for 'username'
 *      role: // value for 'role'
 *   },
 * });
 */
export function useUpdateUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(
    UpdateUserDocument,
    options,
  )
}
export type UpdateUserMutationHookResult = ReturnType<
  typeof useUpdateUserMutation
>
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<
  UpdateUserMutation,
  UpdateUserMutationVariables
>
export const DeleteUserDocument = gql`
  mutation DeleteUser($deleteUserId: Int) {
    deleteUser(id: $deleteUserId) {
      id
      username
      role
      createdAt
      updatedAt
    }
  }
`
export type DeleteUserMutationFn = Apollo.MutationFunction<
  DeleteUserMutation,
  DeleteUserMutationVariables
>

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      deleteUserId: // value for 'deleteUserId'
 *   },
 * });
 */
export function useDeleteUserMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteUserMutation,
    DeleteUserMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(
    DeleteUserDocument,
    options,
  )
}
export type DeleteUserMutationHookResult = ReturnType<
  typeof useDeleteUserMutation
>
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<
  DeleteUserMutation,
  DeleteUserMutationVariables
>
