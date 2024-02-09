import UserContents from '@/components/UserContents'
import { MainLayout } from '@/components/layouts/MainLayout'
export default function index() {
  return <UserContents />
}

index.getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>
