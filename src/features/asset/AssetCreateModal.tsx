import { useModal } from '@/features/hooks/useModal'
import { Button } from '@chakra-ui/react'
export const AssetCreateModal = () => {
  const { onOpen, ModalContainer } = useModal()

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        資産の登録
      </Button>
      <ModalContainer title="資産の登録">
        <p>テスト</p>
      </ModalContainer>
    </>
  )
}
