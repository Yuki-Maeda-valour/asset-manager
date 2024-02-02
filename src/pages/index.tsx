import { Button } from '@chakra-ui/react'
import { MainLayout } from '@/pages/components/layout/MainLayout'

export default function Home() {
  return <Button colorScheme="primary">Button</Button>
}

Home.getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>
