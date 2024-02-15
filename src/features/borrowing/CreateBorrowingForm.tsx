import React, { useState } from 'react'
import {
  Button,
  Container,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import {
  AssetsDocument,
  useCreateAssetMutation,
} from '@/graphql/client/gqlhooks'
import { AssetType } from '@/graphql/client/gqlhooks'
import { useAssetForm } from '@/features/hooks/useAssetForm'
import { LabelDateInput } from '@/components/input/LabelDateInput'
import { LabelSelectInput } from '@/components/input/LabelSelectInput'

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
        <LabelDateInput
          label="予約日時"
          value="2022-01-01T00:00:00+09:00"
          isRequired={true}
        />
        <LabelDateInput
          label="返却期限"
          value="2022-01-01T00:00:00+09:00"
          isRequired={true}
        />
        <LabelSelectInput label="予約者" value={1} isRequired={true} />
        <LabelSelectInput label="物品" value={1} isRequired={true} />
        <Button type="submit">登録</Button>
      </Container>
    </form>
  )
}
