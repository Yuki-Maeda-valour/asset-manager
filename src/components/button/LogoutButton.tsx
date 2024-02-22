import { Button } from '@chakra-ui/react'
import { logout } from '@/lib/auth'
import { FaGoogle } from 'react-icons/fa'
import { useRouter } from 'next/router'

/**
 * Google アイコンを持つログアウトボタンを提供します。
 * `logout` 関数を使用して、ユーザーのログアウト処理を行います。
 * @returns ログアウトするためのボタンコンポーネント。
 */
export const LogoutButton = () => {
  const router = useRouter()

  const handleClick = async () => {
    await logout()
    router.push('/')
  }

  return (
    <Button
      leftIcon={<FaGoogle />}
      colorScheme="teal"
      variant="solid"
      onClick={handleClick}
    >
      ログアウト
    </Button>
  )
}
