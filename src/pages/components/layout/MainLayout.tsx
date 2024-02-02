import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useTheme } from '@chakra-ui/react'

const inter = Inter({ subsets: ['latin'] })

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme()
  return (
    <>
      <Head>
        <title>資産管理アプリ</title>
        <meta name="description" content="資産管理アプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          backgroundColor: theme.colors.base[500],
        }}
      >
        <main
          className={inter.className}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '640px',
            padding: '16px',
            backgroundColor: theme.colors.base[50],
          }}
        >
          {children}
        </main>
      </div>
    </>
  )
}
