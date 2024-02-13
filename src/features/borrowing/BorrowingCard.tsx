import { Card, CardBody, Container, Text } from '@chakra-ui/react'
import type { Borrowing } from '@/graphql/client/gqlhooks'
import { BorrowingCardInfo, BorrowingCardMenu } from '@/features/borrowing'

type BorrowingCardProps = {
  // 予約オブジェクト
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
      <CardBody
        display="flex"
        justifyContent="space-between"
        flexFlow="column"
        gap="4"
      >
        <BorrowingCardInfo borrowing={borrowing} />
        <BorrowingCardMenu borrowing={borrowing} />
      </CardBody>
    </Card>
  )
}
