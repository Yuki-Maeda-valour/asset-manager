import {
  Button,
  Container,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import { useFormState } from 'react-dom'

type FormDataType = {
  name: FormDataEntryValue | null
  type: FormDataEntryValue | null
}

export const CreateAssetForm = () => {
  const initialState = {
    name: '',
    type: 'PC',
  }

  const action = (state: FormDataType, formData: FormData) => {
    const newState = {
      name: formData.get('name'),
      type: formData.get('type'),
    }
    // console.log(newState)
    return newState
  }
  const [state, formAction] = useFormState(action, initialState)

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
