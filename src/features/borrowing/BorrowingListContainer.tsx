import { useBorrowingsQuery } from '@/graphql/client/gqlhooks'
import { Container, Spinner } from '@chakra-ui/react'
import { BorrowingCardList } from '@/features/borrowing'

/**
 * 予約一覧コンポーネント
 * @returns AssetCardList
 */
export const BorrowingListContainer = () => {
  const { data, loading } = useBorrowingsQuery()
  if (loading) {
    return (
      <Container centerContent>
        <Spinner />
      </Container>
    )
  }
  if (!data) {
    return <Container centerContent>No data</Container>
  }
  return <BorrowingCardList borrowings={data.borrowings} />
}
