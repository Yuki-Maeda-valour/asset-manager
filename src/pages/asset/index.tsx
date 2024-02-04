import AssetContents from '@/components/AssetContents'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function index() {
  return <AssetContents />
}

index.getLayout = (page: React.ReactNode) => <MainLayout>{page}</MainLayout>
