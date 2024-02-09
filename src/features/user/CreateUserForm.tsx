import {
  Button,
  Container,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import { useFormState } from 'react-dom'
import { userCreateAction } from '@/features/user/action'
import { useCreateUserMutation } from '@/graphql/client/gqlhooks'
import { Role } from '@/graphql/client/gqlhooks'
import { useRouter } from 'next/router'

const initialState = {
  username: '',
  type: 'USER',
}

export const CreateUserForm = () => {
  const router = useRouter()
  const [state, formAction] = useFormState(userCreateAction, initialState)
  const [CreateUserMutation] = useCreateUserMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const rawType = formData.get('type')
    const type = Object.values(Role).includes(rawType as Role)
      ? (rawType as Role)
      : undefined
    CreateUserMutation({
      variables: {
        username: formData.get('username')?.toString(),
        role: type,
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
          name="username"
          placeholder="ユーザー名"
          isRequired={true}
        />
        <RadioGroup
          name="type"
          defaultValue={state.type ? state.type.toString() : ''}
        >
          <Stack display="flex" gap={2} direction="row">
            <Radio value="USER">USER</Radio>
            <Radio value="ADMIN">ADMIN</Radio>
          </Stack>
        </RadioGroup>
        <Button type="submit">Submit</Button>
      </Container>
    </form>
  )
}
