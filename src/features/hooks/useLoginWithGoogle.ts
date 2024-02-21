import { useCallback } from 'react'
import {
  useUsersQuery,
  useCreateUserMutation,
  Role,
} from '@/graphql/client/gqlhooks'
import { loginWithGoogle } from '@/lib/auth'

/**
 * Google認証を使用してログインまたは新規ユーザー登録を行うカスタムフック。
 * 既存のユーザーが見つかった場合はログインし、見つからない場合は新規登録を行います。
 * @returns ログインまたは新規登録を実行する非同期関数。
 */
export const useLoginWithGoogle = () => {
  const { data } = useUsersQuery()
  const [createUser] = useCreateUserMutation()

  const loginOrCreateUser = useCallback(async () => {
    const result = await loginWithGoogle()
    if (!result) return null

    const user = data?.users?.find((u) => u?.uid === result.user?.uid)
    if (user) {
      alert('ログインしました')
      return user
    } else {
      await createUser({
        variables: {
          username: result.user?.displayName,
          uid: result.user?.uid,
          role: Role.User,
        },
      })
      alert('新規登録しました')
      return result.user
    }
  }, [createUser, data?.users])

  return loginOrCreateUser
}
