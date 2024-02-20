import { Button } from '@chakra-ui/react'
import { logout } from '@/lib/auth'

export const LogoutButton = () => {
  return <Button onClick={logout}>ログアウト</Button>
}
