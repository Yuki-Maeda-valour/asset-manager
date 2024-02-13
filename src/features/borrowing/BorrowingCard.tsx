import { Card, CardBody, Container, Text } from '@chakra-ui/react'
import type { Borrowing } from '@/graphql/client/gqlhooks'
import { DeleteAssetButton } from '@/features/asset/DeleteAssetButton'
import { EditAssetModalButton } from '@/features/asset'
import { BorrowingCardInfo } from '@/features/borrowing'

type BorrowingCardProps = {
  borrowing: Borrowing | null
}

/**
 * 予約カードコンポーネント
 * @param borrowing 予約オブジェクト
 * @returns Card > CardBody > Text
 */
export const BorrowingCard = ({ borrowing }: BorrowingCardProps) => {
  if (!borrowing || borrowing.id === undefined) return null
  return (
    <Card w="full">
      <CardBody display="flex" justifyContent="space-between" gap={2}>
        <BorrowingCardInfo borrowing={borrowing} />
        {/* <Container display="flex" justifyContent="flex-end" gap={2} p={0}>
          <EditAssetModalButton asset={asset} />
          <DeleteAssetButton assetId={asset.id} />
        </Container> */}
      </CardBody>
    </Card>
  )
}
