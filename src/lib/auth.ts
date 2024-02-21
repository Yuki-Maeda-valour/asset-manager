import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
} from 'firebase/auth'
import { auth } from '@/lib/firebase'

/**
 * Googleの認証プロバイダを使用してログインを試みます。
 * 成功した場合はUserCredentialを返し、失敗した場合はundefinedを返します。
 * ユーザーがログインプロセスをキャンセルした場合は、アラートで通知します。
 * @returns {Promise<UserCredential | undefined>} ユーザー認証情報またはundefined。
 */
export const loginWithGoogle = async (): Promise<
  UserCredential | undefined
> => {
  const provider = new GoogleAuthProvider()
  try {
    return await signInWithPopup(auth, provider)
  } catch (error) {
    if (error instanceof Error) {
      alert('ログインをキャンセルしました')
    } else {
      throw error
    }
  }
}

/**
 * Firebaseを使用してログアウトを試みます。
 * 成功した場合はvoidを返し、失敗した場合はエラーを投げます。
 * ログアウトに失敗した場合は、アラートで通知します。
 * @returns {Promise<void>} ログアウト処理の完了を示すPromise。
 */
export const logout = async (): Promise<void> => {
  try {
    await signOut(auth)
    alert('ログアウトしました')
  } catch (error) {
    if (error instanceof Error) {
      alert('ログアウトに失敗しました')
    } else {
      throw error
    }
  }
}
