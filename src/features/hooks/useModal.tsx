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
  title?: string
  footer?: React.ReactNode
  children: React.ReactNode
}
export const useModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const ModalContainer = ({ title, footer, children }: ModalProps) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </ModalContent>
    </Modal>
  )

  return { onOpen, ModalContainer }
}
