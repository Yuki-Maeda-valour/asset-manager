import { useAssetsQuery } from '@/graphql/client/gqlhooks'
import { AssetCardList } from '@/features/asset'
import { Container, Spinner } from '@chakra-ui/react'

/**
 * 資産一覧コンポーネント
 * @returns AssetCardList
 */
export const AssetListContainer = () => {
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
