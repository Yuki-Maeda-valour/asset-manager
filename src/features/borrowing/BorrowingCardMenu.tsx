import { Container } from '@chakra-ui/react'
import {
  DeleteBorrowingButton,
  EditBorrowingModalButton,
} from '@/features/borrowing'
import { Borrowing } from '@/graphql/client/gqlhooks'

type BorrowingCardMenuProps = {
  borrowing: Borrowing
}

export const BorrowingCardMenu = ({ borrowing }: BorrowingCardMenuProps) => {
  return (
    <Container display="flex" justifyContent="flex-end" gap="2" p="0">
      <EditBorrowingModalButton borrowing={borrowing} />
      <DeleteBorrowingButton borrowingId={borrowing.id} />
    </Container>
  )
}
