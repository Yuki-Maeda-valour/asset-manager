import Head from '@/components/layouts/Head'
import { Inter } from 'next/font/google'
import { useTheme, Box } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

/**
 * メインレイアウト
 * @param children
 * @returns ReactNode > Head, Main > Box, children
 */
export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme()
  return (
    <>
      <Head />
      <main
        className={inter.className}
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          backgroundColor: theme.colors.base[500],
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
          maxWidth="640px"
          padding="16px"
          backgroundColor={theme.colors.base[50]}
          gap="16px"
        >
          {children}
        </Box>
      </main>
    </>
  )
}
