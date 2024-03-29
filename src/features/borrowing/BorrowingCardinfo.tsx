import { Container } from '@chakra-ui/react'
import { Borrowing } from '@/graphql/client/gqlhooks'
import { formatDate } from '@/features/utils/utils'
import { LabelledValue } from '@/components/label/LabelValue'

type BorrowingCardInfoProps = {
  // 予約オブジェクト
  borrowing: Borrowing
}

/**
 * 予約情報を表示するカードコンポーネント
 *
 * @param {BorrowingCardInfoProps} props - コンポーネントに渡されるプロパティ
 * @returns Container > LabelledValue
 */
export const BorrowingCardInfo = ({ borrowing }: BorrowingCardInfoProps) => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="start"
      gap={2}
      p={0}
    >
      <LabelledValue label="予約ID" value={borrowing.id} />
      <LabelledValue
        label="予約日時"
        value={formatDate(borrowing.borrowedAt || '')}
      />
      <LabelledValue
        label="返却期限"
        value={formatDate(borrowing.deadline || '')}
      />
      <LabelledValue
        label="返却日時"
        value={formatDate(borrowing.returnedAt || '')}
      />
      <LabelledValue label="予約者" value={borrowing.user?.username} />
      <LabelledValue label="予約物品" value={borrowing.asset?.name} />
    </Container>
  )
}
