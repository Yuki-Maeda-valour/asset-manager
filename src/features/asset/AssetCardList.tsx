import { VStack } from '@chakra-ui/react'
import type { Asset } from '@/graphql/client/gqlhooks'
import { AssetCard } from '@/features/asset/AssetCard'

type AssetCardListProps = {
  assets: (Asset | null)[] | null | undefined
}
/**
 * 資産カードリストコンポーネント
 * @param assets 資産オブジェクト
 * @returns VStack > AssetCard
 */
export const AssetCardList = ({ assets }: AssetCardListProps) => {
  return (
    <VStack w="full">
      {assets?.map((asset) => <AssetCard key={asset?.id} asset={asset} />)}
    </VStack>
  )
}
