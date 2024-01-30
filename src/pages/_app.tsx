import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/lib/theme'
import { fonts } from '@/lib/font'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '@/graphql/client/apollo'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-rubik: ${fonts.rubik.style.fontFamily};
          }
        `}
      </style>
      <ApolloProvider client={apolloClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </>
  )
}
