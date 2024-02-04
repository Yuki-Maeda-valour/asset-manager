import { CreateAssetModal } from '@/features/asset/CreateAssetModal'
import { AssetListContainer } from '@/features/asset/AssetListContainer'

/**
 * 資産コンテンツ
 * @returns AssetCreateModal, AssetListContainer
 */
export default function AssetContents() {
  return (
    <>
      <CreateAssetModal />
      <AssetListContainer />
    </>
  )
}
