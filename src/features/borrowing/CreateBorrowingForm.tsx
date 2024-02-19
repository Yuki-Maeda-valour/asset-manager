import React, { useState } from 'react'
import { Button, Container } from '@chakra-ui/react'
import {
  Borrowing,
  BorrowingsDocument,
  useCreateBorrowingMutation,
} from '@/graphql/client/gqlhooks'
import { LabelDateInput } from '@/components/input/LabelDateInput'
import { UserSelector } from '@/components/input/UserSelector'
import { AssetSelector } from '@/components/input/AssetSelector'

export const CreateBorrowingForm = ({ onClose }: { onClose: () => void }) => {
  const initialState = {
    borrowedAt: '',
    deadline: '',
    userId: 0,
    assetId: 0,
  }

  const [formState, setFormState] = useState<Borrowing>(initialState)
  const [createBorrowingMutation] = useCreateBorrowingMutation({
    refetchQueries: [BorrowingsDocument],
  })

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
    await createBorrowingMutation({
      variables: {
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
        <Button type="submit">登録</Button>
      </Container>
    </form>
  )
}
