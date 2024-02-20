import { Button } from '@chakra-ui/react'
import { loginWithGoogle } from '@/lib/auth'

export const LoginButton = () => {
  return <Button onClick={loginWithGoogle}>Googleでログイン</Button>
}
