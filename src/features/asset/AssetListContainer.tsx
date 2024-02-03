import { useAssetsQuery } from '@/graphql/client/gqlhooks'
import { AssetCardList } from '@/features/asset'
import { Spinner } from '@chakra-ui/react'
export const AssetListContainer = () => {
  const { data, loading } = useAssetsQuery()
  // TODO: fetchの処理を追加する
  if (loading) {
    return <Spinner />
  }
  if (!data) {
    return <div>No data</div>
  }
  return <AssetCardList assets={data.assets} />
}
