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
  AssetStatus,
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
    status: asset.status || AssetStatus.Available,
  }
  const { formState, handleChange, handleTypeChange, handleStatusChange } =
    useAssetForm({
      initialState,
    })
  const [updateAssetMutation] = useUpdateAssetMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, type, status } = formState
    const isValidType = Object.values(AssetType).includes(type as AssetType)
    const isValidStatus = Object.values(AssetStatus).includes(
      status as AssetStatus,
    )
    updateAssetMutation({
      variables: {
        updateAssetId: Number(asset.id),
        name: name,
        type: isValidType ? (type as AssetType) : undefined,
        status: isValidStatus ? (status as AssetStatus) : undefined,
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
            <Radio value={AssetType.Pc}>PC</Radio>
            <Radio value={AssetType.Sp}>SP</Radio>
            <Radio value={AssetType.Wifi}>WIFI</Radio>
            <Radio value={AssetType.Monitor}>MONITOR</Radio>
          </Stack>
        </RadioGroup>
        <RadioGroup
          name="status"
          value={formState.status}
          onChange={handleStatusChange}
        >
          <Stack display="flex" gap="4" direction="row">
            <Radio value={AssetStatus.Available}>貸出可</Radio>
            <Radio value={AssetStatus.Suspended}>貸出不可</Radio>
          </Stack>
        </RadioGroup>
        <Button type="submit">更新</Button>
      </Container>
    </form>
  )
}
