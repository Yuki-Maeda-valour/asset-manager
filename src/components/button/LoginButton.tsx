import { Button } from '@chakra-ui/react'
import { useLoginWithGoogle } from '@/features/hooks/useLoginWithGoogle'

/**
 * Googleを使用してログインまたはユーザーを作成するボタンを提供します。
 * `useLoginWithGoogle` フックを使用して、Google認証を通じてユーザーのログインまたは新規登録を行います。
 * @returns Googleでログインするためのボタンコンポーネント。
 */
export const LoginButton = () => {
  const loginOrCreateUser = useLoginWithGoogle()
  const handleClick = async () => {
    await loginOrCreateUser()
  }
  return <Button onClick={handleClick}>Googleでログイン</Button>
}
