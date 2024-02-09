import { PopoverButton } from '@/components/button/PopoverButton'
import { Button, Container, Text } from '@chakra-ui/react'
import {
  AssetsDocument,
  useDeleteAssetMutation,
} from '@/graphql/client/gqlhooks'
import type { Asset } from '@/graphql/client/gqlhooks'

type DeleteAssetButtonProps = {
  // 資産ID
  assetId: Asset['id']
}

/**
 * 資産を削除するボタンコンポーネント
 * @param assetId - 削除対象の資産ID
 * @returns 削除ボタンを含むコンポーネント
 */
export const DeleteAssetButton = ({ assetId }: DeleteAssetButtonProps) => {
  const [deleteAsset] = useDeleteAssetMutation({
    refetchQueries: [AssetsDocument],
  })
  const handleClick = async () => {
    await deleteAsset({ variables: { deleteAssetId: assetId } })
  }
  return (
    <PopoverButton buttonLabel="削除" placement="left-start">
      <Container
        {...{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4,
          p: 0,
        }}
      >
        <Text>本当に削除しますか?</Text>
        <Button colorScheme="red" size="sm" onClick={handleClick}>
          削除
        </Button>
      </Container>
    </PopoverButton>
  )
}
