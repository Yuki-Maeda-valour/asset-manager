import { Box, Flex, Text } from '@chakra-ui/react'
import { LoginButton } from '@/components/button/LoginButton'

/**
 * ログインフォームコンポーネント
 * 資産予約管理アプリのログイン画面を表示します。
 * @returns ログインフォームのUIコンポーネント
 */
export const LoginForm = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100vh"
      bg="blackAlpha.300"
    >
      <Box p={8} bg="white" borderRadius="md" boxShadow="md">
        <Flex justify="center" width="100%" flexFlow="column">
          <Text fontSize="xl" mb={4}>
            資産予約管理アプリ
          </Text>
          <LoginButton />
        </Flex>
      </Box>
    </Flex>
  )
}
