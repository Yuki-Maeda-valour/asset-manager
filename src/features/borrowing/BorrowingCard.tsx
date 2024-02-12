import { Card, CardBody, Container, Text } from '@chakra-ui/react'
import type { Asset } from '@/graphql/client/gqlhooks'
import { DeleteAssetButton } from '@/features/asset/DeleteAssetButton'
import { EditAssetModalButton } from '@/features/asset'

type AssetCardProps = {
  asset: Asset | null
}

/**
 * 予約カードコンポーネント
 * @param asset 予約オブジェクト
 * @returns Card > CardBody > Text
 */
export const BorrowingCard = ({ asset }: AssetCardProps) => {
  if (!asset || asset.id === undefined) return null
  return (
    <Card w="full">
      <CardBody display="flex" justifyContent="space-between" gap={2}>
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text>{asset.id}</Text>
          <Text>{asset.name}</Text>
          <Text>{asset.type}</Text>
        </Container>
        <Container display="flex" justifyContent="flex-end" gap={2} p={0}>
          <EditAssetModalButton asset={asset} />
          <DeleteAssetButton assetId={asset.id} />
        </Container>
      </CardBody>
    </Card>
  )
}
