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
import { AssetType, AssetStatus } from '@/graphql/client/gqlhooks'
import { useAssetForm } from '@/features/hooks/useAssetForm'

export const CreateAssetForm = ({ onClose }: { onClose: () => void }) => {
  const initialState = {
    name: '',
    type: AssetType.Pc,
    status: AssetStatus.Available,
  }
  const { formState, handleChange, handleTypeChange, handleStatusChange } =
    useAssetForm({
      initialState,
    })
  const [createAssetMutation] = useCreateAssetMutation({
    refetchQueries: [AssetsDocument],
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { name, type, status } = formState
    const isValidType = Object.values(AssetType).includes(type as AssetType)
    const isValidStatus = Object.values(AssetStatus).includes(
      status as AssetStatus,
    )
    createAssetMutation({
      variables: {
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
          onChange={handleTypeChange}
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
        <Button type="submit">登録</Button>
      </Container>
    </form>
  )
}
