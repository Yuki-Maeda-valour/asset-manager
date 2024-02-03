import { VStack } from '@chakra-ui/react'
import type { Asset } from '@/graphql/client/gqlhooks'
import { AssetCard } from '@/features/asset/AssetCard'

export const AssetCardList = ({
  assets,
}: {
  assets: (Asset | null)[] | null | undefined
}) => {
  return (
    <VStack w="full">
      {assets?.map((asset) => <AssetCard key={asset?.id} asset={asset} />)}
    </VStack>
  )
}
