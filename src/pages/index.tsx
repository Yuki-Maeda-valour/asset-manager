import Head from 'next/head'
import { Button } from '@chakra-ui/react'
import { MainLayout } from '@/pages/components/layout/MainLayout'

export default function Home() {
  return (
    <>
      <Head>
        <title>資産管理アプリ</title>
        <meta name="description" content="資産管理アプリ" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button colorScheme="primary">Button</Button>
    </>
  )
}

Home.getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>
