import { useModal } from '@/features/hooks/useModal'
import { Button } from '@chakra-ui/react'
import { CreateAssetForm } from '@/features/asset'

/**
 * 資産の登録モーダル
 * @returns Button, ModalContainer
 */
export const CreateAssetModal = () => {
  const { onOpen, ModalContainer } = useModal()

  return (
    <>
      <Button colorScheme="primary" onClick={onOpen}>
        資産の登録
      </Button>
      <ModalContainer title="資産の登録">
        <CreateAssetForm />
      </ModalContainer>
    </>
  )
}
