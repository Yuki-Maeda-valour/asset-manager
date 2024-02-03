import { MainLayout } from '@/components/layouts/MainLayout'
import MainContents from '@/pages/MainContents'

export default function Home() {
  return <MainContents />
}

Home.getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>
