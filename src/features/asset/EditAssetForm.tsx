import type { Asset } from '@/graphql/client/gqlhooks'
import {
  Button,
  Container,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import { useFormState } from 'react-dom'
import { assetEditAction } from '@/features/asset/action'
import { useUpdateAssetMutation } from '@/graphql/client/gqlhooks'
import { AssetType } from '@/graphql/client/gqlhooks'
import { useRouter } from 'next/router'

type EditAssetFormProps = {
  asset: Asset
}
export const EditAssetForm = ({ asset }: EditAssetFormProps) => {
  const { name, type } = asset
  const initialState = {
    id: asset.id as FormDataEntryValue | null,
    name: name as FormDataEntryValue | null,
    type: type as FormDataEntryValue | null,
  }
  const router = useRouter()
  const [state, formAction] = useFormState(assetEditAction, initialState)
  const [updateAssetMutation] = useUpdateAssetMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const rawType = formData.get('type')
    const type = Object.values(AssetType).includes(rawType as AssetType)
      ? (rawType as AssetType)
      : undefined
    updateAssetMutation({
      variables: {
        updateAssetId: asset.id,
        name: formData.get('name')?.toString(),
        type: type,
      },
    })
    formAction(formData)
    router.reload()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container display="flex" flexDirection="column" w={'full'} gap={4}>
        <Input
          type="text"
          name="name"
          placeholder="資産名"
          isRequired={true}
          defaultValue={state.name ? state.name.toString() : ''}
        />
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
