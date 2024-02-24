import { Button } from '@chakra-ui/react'
import { useLoginWithGoogle } from '@/features/hooks/useLoginWithGoogle'
import { FaGoogle } from 'react-icons/fa'
import { useRouter } from 'next/router'

/**
 * Googleを使用してログインまたはユーザーを作成するボタンを提供します。
 * `useLoginWithGoogle` フックを使用して、Google認証を通じてユーザーのログインまたは新規登録を行います。
 * @returns Googleでログインするためのボタンコンポーネント。
 */
export const LoginButton = () => {
  const loginOrCreateUser = useLoginWithGoogle()
  const router = useRouter()
  const handleClick = async () => {
    const result = await loginOrCreateUser()
    if (result) {
      await router.push('/asset-manage')
    } else {
      alert('ログインに失敗しました。もう一度お試しください。')
    }
  }

  return (
    <Button leftIcon={<FaGoogle />} onClick={handleClick}>
      ログイン
    </Button>
  )
}
