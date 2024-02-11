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

const initialState = {
  name: '',
  type: 'PC',
}

export const CreateAssetForm = ({ onClose }: { onClose: () => void }) => {
  const [formState, setFormState] = useState(initialState)
  const [createAssetMutation] = useCreateAssetMutation({
    refetchQueries: [AssetsDocument],
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleTypeChange = (nextValue: string) => {
    setFormState((prevState) => ({
      ...prevState,
      type: nextValue,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, type } = formState
    const isValidType = Object.values(AssetType).includes(type as AssetType)
    createAssetMutation({
      variables: {
        name: name,
        type: isValidType ? (type as AssetType) : undefined,
      },
    })
    onClose()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container display="flex" flexDirection="column" w={'full'} gap={4}>
        <Input
          type="text"
          name="name"
          placeholder="資産名"
          isRequired={true}
          value={formState.name}
          onChange={handleChange}
        />
        <RadioGroup
          name="type"
          value={formState.type}
          onChange={handleTypeChange}
        >
          <Stack display="flex" justifyContent="space-between" direction="row">
            <Radio value="PC">PC</Radio>
            <Radio value="SP">SP</Radio>
            <Radio value="WIFI">WIFI</Radio>
            <Radio value="MONITOR">MONITOR</Radio>
          </Stack>
        </RadioGroup>
        <Button type="submit">登録</Button>
      </Container>
    </form>
  )
}
