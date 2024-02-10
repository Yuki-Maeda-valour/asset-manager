import { CreateAssetModalButton } from '@/features/asset/CreateAssetModalButton'
import { AssetListContainer } from '@/features/asset/AssetListContainer'
import { Box } from '@chakra-ui/react'

/**
 * 資産コンテンツ
 * @returns AssetCreateButton, AssetListContainer
 */
export default function AssetContents() {
  return (
    <Box display={'flex'} flexFlow={'column'} gap={4}>
      <CreateAssetModalButton />
      <AssetListContainer />
    </Box>
  )
}
