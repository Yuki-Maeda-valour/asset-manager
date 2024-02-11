import React from 'react'
import {
  Button,
  Container,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import { useAssetForm } from '@/features/hooks/useAssetForm'
import {
  Asset,
  AssetType,
  useUpdateAssetMutation,
} from '@/graphql/client/gqlhooks'

type EditAssetFormProps = {
  asset: Asset
  onClose: () => void
}

export const EditAssetForm = ({ asset, onClose }: EditAssetFormProps) => {
  const initialState = {
    name: asset.name || '',
    type: asset.type || AssetType.Pc,
  }
  const { formState, handleChange, handleTypeChange } = useAssetForm({
    initialState,
  })
  const [updateAssetMutation] = useUpdateAssetMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, type } = formState
    const isValidType = Object.values(AssetType).includes(type as AssetType)
    updateAssetMutation({
      variables: {
        updateAssetId: Number(asset.id),
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
          onChange={(e) => handleTypeChange(e as AssetType)}
        >
          <Stack display="flex" justifyContent="space-between" direction="row">
            <Radio value="PC">PC</Radio>
            <Radio value="SP">SP</Radio>
            <Radio value="WIFI">WIFI</Radio>
            <Radio value="MONITOR">MONITOR</Radio>
          </Stack>
        </RadioGroup>
        <Button type="submit">更新</Button>
      </Container>
    </form>
  )
}
