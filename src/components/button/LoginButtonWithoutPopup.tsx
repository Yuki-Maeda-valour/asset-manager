import { Button } from '@chakra-ui/react'
import { FaGoogle } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { useUsersQuery } from '@/graphql/client/gqlhooks'
import { auth } from '@/lib/firebase'
import { getRedirectResult } from 'firebase/auth'
import { useEffect } from 'react'
import { loginWithGoogleWithoutPopup } from '@/lib/auth'

/**
 * Googleを使用してログインまたはユーザーを作成するボタンを提供します。
 * `useLoginWithGoogle` フックを使用して、Google認証を通じてユーザーのログインまたは新規登録を行います。
 * @returns Googleでログインするためのボタンコンポーネント。
 */
export const LoginButtonWithoutPopup = () => {
  const { data, loading } = useUsersQuery()
  const router = useRouter()

  useEffect(() => {
    const checkRedirectResult = async () => {
      const result = await getRedirectResult(auth)
      if (result) {
        await router.push('/asset-manage')
      }
    }
    checkRedirectResult()
  }, [data?.users, router])

  const handleClick = async () => {
    await loginWithGoogleWithoutPopup()
  }

  return (
    <Button leftIcon={<FaGoogle />} onClick={handleClick}>
      ログイン
    </Button>
  )
}
