import { VStack } from '@chakra-ui/react'
import type { Asset } from '@/graphql/client/gqlhooks'
import { AssetCard } from '@/features/asset/AssetCard'

type AssetCardListProps = {
  assets: (Asset | null)[] | null | undefined
}
/**
 * 予約カードリストコンポーネント
 * @param assets 予約オブジェクト
 * @returns VStack > AssetCard
 */
export const BorrowingCardList = ({ assets }: AssetCardListProps) => {
  return (
    <VStack w="full">
      {assets?.map((asset) => <AssetCard key={asset?.id} asset={asset} />)}
    </VStack>
  )
}
