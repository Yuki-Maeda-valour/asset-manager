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

const initialState = {
  name: '',
  type: 'PC',
}

export const CreateAssetForm = () => {
  const [state, formAction] = useFormState(assetCreateAction, initialState)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    formAction(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container display="flex" flexDirection="column" w={'full'} gap={4}>
        <Input type="text" name="name" placeholder="資産名" isRequired={true} />
        <RadioGroup
          name="type"
          defaultValue={state.type ? state.type.toString() : ''}
        >
          <Stack direction="row">
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
