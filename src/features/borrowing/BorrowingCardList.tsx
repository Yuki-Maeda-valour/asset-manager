import { VStack } from '@chakra-ui/react'
import type { Borrowing } from '@/graphql/client/gqlhooks'
import { BorrowingCard } from '@/features/borrowing'

type BorrowingCardListProps = {
  borrowings: (Borrowing | null)[] | null | undefined
}
/**
 * 予約カードリストコンポーネント
 * @param borrowings 予約オブジェクト
 * @returns VStack > BorrowingCard
 */
export const BorrowingCardList = ({ borrowings }: BorrowingCardListProps) => {
  return (
    <VStack w="full">
      {borrowings?.map((borrowing) => (
        <BorrowingCard key={borrowing?.id} borrowing={borrowing} />
      ))}
    </VStack>
  )
}
