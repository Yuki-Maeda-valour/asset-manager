import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/lib/theme'
import { globalStyles } from '@/lib/font'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@/graphql/client/apollo'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { AuthProvider } from '@/context/AuthContext'

type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <style jsx global>
        {globalStyles}
      </style>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <ChakraProvider theme={theme}>
            {getLayout(<Component {...pageProps} />)}
          </ChakraProvider>
        </AuthProvider>
      </ApolloProvider>
    </>
  )
}
