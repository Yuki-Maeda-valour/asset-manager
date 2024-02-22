import {
  Modal,
  ModalOverlay,
  useDisclosure,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react'

export type ModalProps = {
  // モーダルのタイトル
  title?: string
  // モーダルのフッター
  footer?: React.ReactNode
  // モーダルのコンテンツ
  children: React.ReactNode
}

/**
 * モーダルの状態管理
 * @returns onOpen, ModalContainer
 */
export const useModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ModalContainer = ({ title, footer, children }: ModalProps) => (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  )

  return { onOpen, onClose, ModalContainer }
}
