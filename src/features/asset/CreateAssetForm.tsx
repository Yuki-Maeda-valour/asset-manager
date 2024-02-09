import {
  Button,
  Container,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import { useFormState } from 'react-dom'
import { assetCreateAction } from '@/features/asset/action'
import {
  AssetsDocument,
  useCreateAssetMutation,
} from '@/graphql/client/gqlhooks'
import { AssetType } from '@/graphql/client/gqlhooks'

const initialState = {
  name: '',
  type: 'PC',
}

/**
 * 資産作成フォームコンポーネントです。
 * @param {CreateAssetFormProps} props - コンポーネントに渡されるプロパティ。
 */
export const CreateAssetForm = ({ onClose }: { onClose: () => void }) => {
  const [state, formAction] = useFormState(assetCreateAction, initialState)
  const [createAssetMutation] = useCreateAssetMutation({
    refetchQueries: [AssetsDocument],
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const rawType = formData.get('type')
    const type = Object.values(AssetType).includes(rawType as AssetType)
      ? (rawType as AssetType)
      : undefined
    createAssetMutation({
      variables: {
        name: formData.get('name')?.toString(),
        type: type,
      },
    })
    formAction(formData)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container display="flex" flexDirection="column" w={'full'} gap={4}>
        <Input type="text" name="name" placeholder="資産名" isRequired={true} />
        <RadioGroup
          name="type"
          defaultValue={state.type ? state.type.toString() : ''}
        >
          <Stack display="flex" justifyContent="space-between" direction="row">
            <Radio value="PC">PC</Radio>
            <Radio value="SP">SP</Radio>
            <Radio value="WIFI">WIFI</Radio>
            <Radio value="MONITOR">MONITOR</Radio>
          </Stack>
        </RadioGroup>
        <Button type="submit">Submit</Button>
      </Container>
    </form>
  )
}
