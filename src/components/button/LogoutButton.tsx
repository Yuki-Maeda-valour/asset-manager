import { Button } from '@chakra-ui/react'
import { logout } from '@/lib/auth'

/**
 * Google アイコンを持つログアウトボタンを提供します。
 * `logout` 関数を使用して、ユーザーのログアウト処理を行います。
 * @returns ログアウトするためのボタンコンポーネント。
 */
export const LogoutButton = () => {
  const handleClick = async () => {
    await logout()
  }

  return (
    <Button colorScheme="teal" variant="solid" onClick={handleClick}>
      ログアウト
    </Button>
  )
}
