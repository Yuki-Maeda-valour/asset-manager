import { Card, CardBody, Container, Text } from '@chakra-ui/react'
import type { Borrowing } from '@/graphql/client/gqlhooks'
import { DeleteAssetButton } from '@/features/asset/DeleteAssetButton'
import { EditAssetModalButton } from '@/features/asset'

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
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text>{borrowing.id}</Text>
          <Text>{borrowing.borrowedAt}</Text>
          <Text>{borrowing.returnedAt}</Text>
          <Text>{borrowing.deadline}</Text>
          <Text>{borrowing.user?.username}</Text>
          <Text>{borrowing.asset?.name}</Text>
        </Container>
        {/* <Container display="flex" justifyContent="flex-end" gap={2} p={0}>
          <EditAssetModalButton asset={asset} />
          <DeleteAssetButton assetId={asset.id} />
        </Container> */}
      </CardBody>
    </Card>
  )
}
