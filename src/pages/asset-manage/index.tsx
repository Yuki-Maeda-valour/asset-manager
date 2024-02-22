import { AssetManageContents } from '@/components/AssetManageContents'
import { MainLayout } from '@/components/layouts/MainLayout'

export default function AssetManage() {
  return <AssetManageContents />
}

AssetManage.getLayout = (page: React.ReactNode) => (
  <MainLayout>{page}</MainLayout>
)
