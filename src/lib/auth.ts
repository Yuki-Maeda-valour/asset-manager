import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  UserCredential,
} from 'firebase/auth'
import { auth } from '@/lib/firebase'

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
