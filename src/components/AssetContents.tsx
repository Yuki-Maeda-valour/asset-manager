import { CreateAssetModalButton } from '@/features/asset/CreateAssetModalButton'
import { AssetListContainer } from '@/features/asset/AssetListContainer'
import { Text } from '@chakra-ui/react'

/**
 * 資産コンテンツ
 * @returns AssetCreateButton, AssetListContainer
 */
export default function AssetContents() {
  return (
    <>
      <Text fontWeight="bold" fontSize="2xl">
        資産一覧
      </Text>
      <CreateAssetModalButton />
      <AssetListContainer />
    </>
  )
}
