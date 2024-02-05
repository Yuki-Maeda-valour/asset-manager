import { Button, Container } from '@chakra-ui/react'
import { useFormState } from 'react-dom'

type FormDataType = {
  id: FormDataEntryValue | null
  name: FormDataEntryValue | null
  type: FormDataEntryValue | null
}

export const CreateAssetForm = () => {
  const initialState = {
    id: '',
    name: '',
    type: '',
  }

  const action = (state: FormDataType, formData: FormData) => {
    const newState = {
      id: formData.get('id'),
      name: formData.get('name'),
      type: formData.get('type'),
    }
    return newState
  }
  const [, formAction] = useFormState(action, initialState)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget)
    formAction(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container display="flex" flexDirection="column" w={'full'} gap={4}>
        <input type="text" name="id" placeholder="資産ID" />
        <input type="text" name="name" placeholder="資産名" />
        <input type="text" name="type" placeholder="資産タイプ" />
        <Button type="submit">Submit</Button>
      </Container>
    </form>
  )
}
