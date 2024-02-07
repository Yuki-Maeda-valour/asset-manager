import { CreateAssetModalButton } from '@/features/asset/CreateAssetModalButton'
import { AssetListContainer } from '@/features/asset/AssetListContainer'

/**
 * 資産コンテンツ
 * @returns AssetCreateButton, AssetListContainer
 */
export default function AssetContents() {
  return (
    <>
      <CreateAssetModalButton />
      <AssetListContainer />
    </>
  )
}
