import React, { useState } from 'react'
import { Button, Container } from '@chakra-ui/react'
import {
  Borrowing,
  useUpdateBorrowingMutation,
} from '@/graphql/client/gqlhooks'
import { LabelDateInput } from '@/components/input/LabelDateInput'
import { UserSelector } from '@/components/input/UserSelector'
import { AssetSelector } from '@/components/input/AssetSelector'
import { toLocalDateTimeStringForInput } from '@/features/utils/utils'

type EditBorrowingFormProps = {
  borrowing: Borrowing
  onClose: () => void
}

export const EditBorrowingForm = ({
  borrowing,
  onClose,
}: EditBorrowingFormProps) => {
  const initialState = {
    borrowedAt: borrowing.borrowedAt
      ? toLocalDateTimeStringForInput(borrowing.borrowedAt)
      : '',
    deadline: borrowing.deadline
      ? toLocalDateTimeStringForInput(borrowing.deadline)
      : '',
    userId: borrowing.userId,
    assetId: borrowing.assetId,
  }
  const [formState, setFormState] = useState(initialState)
  const [updateBorrowingMutation] = useUpdateBorrowingMutation()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    const isNumericField = name === 'userId' || name === 'assetId'
    setFormState((prevState) => ({
      ...prevState,
      [name]: isNumericField ? (value ? Number(value) : 0) : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await updateBorrowingMutation({
      variables: {
        updateBorrowingId: Number(borrowing.id),
        borrowedAt: formState.borrowedAt
          ? new Date(formState.borrowedAt).toISOString()
          : null,
        deadline: formState.deadline
          ? new Date(formState.deadline).toISOString()
          : null,
        userId: Number(formState.userId),
        assetId: Number(formState.assetId),
      },
    })
    onClose()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container display="flex" flexDirection="column" w={'full'} gap={4}>
        <LabelDateInput
          label="予約日時"
          isRequired={true}
          value={formState.borrowedAt || ''}
          onChange={handleChange}
          name="borrowedAt"
        />
        <LabelDateInput
          label="返却期限"
          isRequired={true}
          value={formState.deadline || ''}
          onChange={handleChange}
          name="deadline"
        />
        <UserSelector
          label="予約者"
          value={formState.userId?.toString()}
          onChange={handleChange}
          name="userId"
        />
        <AssetSelector
          label="資産"
          value={formState.assetId?.toString()}
          onChange={handleChange}
          name="assetId"
        />
        <Button type="submit">更新</Button>
      </Container>
    </form>
  )
}
