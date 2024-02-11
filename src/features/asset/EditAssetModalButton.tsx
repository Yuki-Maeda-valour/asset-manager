import { useModal } from '@/features/hooks/useModal'
import { Button } from '@chakra-ui/react'
import { EditAssetForm } from '@/features/asset'
import type { Asset } from '@/graphql/client/gqlhooks'
type EditAssetModalButtonProps = {
  //  編集する資産の情報
  asset: Asset
}
/**
 * EditAssetModalButton
 * 資産を編集するためのモーダルを開くボタンコンポーネント
 *
 * @component
 * @param {EditAssetModalButtonProps} props - コンポーネントのプロパティ
 * @returns Button, ModalContainer > EditAssetForm
 */
export const EditAssetModalButton = ({ asset }: EditAssetModalButtonProps) => {
  const { onOpen, onClose, ModalContainer } = useModal()

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        編集
      </Button>
      <ModalContainer title="資産の編集">
        <EditAssetForm asset={asset} onClose={onClose} />
      </ModalContainer>
    </>
  )
}
