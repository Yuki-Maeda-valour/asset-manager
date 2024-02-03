import { AssetCreateModal } from '@/features/asset/AssetCreateModal'
import { AssetListContainer } from '@/features/asset/AssetListContainer'

export default function MainContents() {
  return (
    <>
      <AssetCreateModal />
      <AssetListContainer />
    </>
  )
}
