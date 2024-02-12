import {
  BorrowingListContainer,
  CreateBorrowingModalButton,
} from '@/features/borrowing'
import { Box } from '@chakra-ui/react'

/**
 * 予約コンテンツ
 * @returns Text, BorrowingListContainer
 */
export default function BorrowingContents() {
  return (
    <Box display={'flex'} flexFlow={'column'} gap={4}>
      <CreateBorrowingModalButton />
      <BorrowingListContainer />
    </Box>
  )
}
