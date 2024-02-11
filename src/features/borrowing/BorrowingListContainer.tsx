import { useAssetsQuery } from '@/graphql/client/gqlhooks'
import { AssetCardList } from '@/features/asset'
import { Container, Spinner } from '@chakra-ui/react'

/**
 * 予約一覧コンポーネント
 * @returns AssetCardList
 */
export const BorrowingListContainer = () => {
  const { data, loading } = useAssetsQuery()
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
  return <AssetCardList assets={data.assets} />
}
