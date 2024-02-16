import React, { useState } from 'react'
import { Button, Container } from '@chakra-ui/react'
import { AssetType } from '@/graphql/client/gqlhooks'
import { useAssetForm } from '@/features/hooks/useAssetForm'
import { LabelDateInput } from '@/components/input/LabelDateInput'
import { UserSelector } from '@/components/input/UserSelector'
import { AssetSelector } from '@/components/input/AssetSelector'

export const CreateBorrowingForm = ({ onClose }: { onClose: () => void }) => {
  // const initialState = { name: '', type: AssetType.Pc }
  // const { formState, handleChange, handleTypeChange } = useAssetForm({
  //   initialState,
  // })
  // const [createAssetMutation] = useCreateAssetMutation({
  //   refetchQueries: [AssetsDocument],
  // })

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   const { name, type } = formState
  //   const isValidType = Object.values(AssetType).includes(type as AssetType)
  //   createAssetMutation({
  //     variables: {
  //       name: name,
  //       type: isValidType ? (type as AssetType) : undefined,
  //     },
  //   })
  //   onClose()
  // }

  return (
    <form>
      <Container display="flex" flexDirection="column" w={'full'} gap={4}>
        <LabelDateInput label="予約日時" isRequired={true} />
        <LabelDateInput label="返却期限" isRequired={true} />
        <UserSelector label="予約者" />
        <AssetSelector label="資産" />
        <Button type="submit">登録</Button>
      </Container>
    </form>
  )
}
