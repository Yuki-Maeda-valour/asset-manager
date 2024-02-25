import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
  browserPopupRedirectResolver,
  signInWithRedirect,
} from 'firebase/auth'
import { auth } from '@/lib/firebase'

/**
 * Googleの認証プロバイダを使用してログインを試みます。
 * 成功した場合はUserCredentialを返し、失敗した場合はnullを返します。
 * ユーザーがログインプロセスをキャンセルした場合は、アラートで通知します。
 * @returns {Promise<UserCredential | null>} ユーザー認証情報またはnull。
 */
export const loginWithGoogleWithPopup =
  async (): Promise<UserCredential | null> => {
    const provider = new GoogleAuthProvider()
    try {
      return await signInWithPopup(auth, provider, browserPopupRedirectResolver)
    } catch (error) {
      alert('ログインに失敗しました')
      return null
    }
  }

export const loginWithGoogleWithoutPopup = async () => {
  const provider = new GoogleAuthProvider()
  signInWithRedirect(auth, provider)
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
  } catch (error) {
    if (error instanceof Error) {
    } else {
      throw error
    }
  }
}
