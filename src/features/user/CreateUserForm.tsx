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
import {
  UsersDocument,
  UsersQuery,
  useCreateUserMutation,
} from '@/graphql/client/gqlhooks'
import { Role } from '@/graphql/client/gqlhooks'

const initialState = {
  username: '',
  role: 'USER',
}

/**
 * ユーザー作成フォームコンポーネントです。
 * @param {CreateUserFormProps} props - コンポーネントに渡されるプロパティ。
 */
export const CreateUserForm = ({ onClose }: { onClose: () => void }) => {
  const [state, formAction] = useFormState(userCreateAction, initialState)
  const [CreateUserMutation] = useCreateUserMutation({
    update(cache, { data }) {
      const newUser = data?.createUser
      const existingUsers: UsersQuery | null = cache.readQuery({
        query: UsersDocument,
      })
      if (newUser && existingUsers && existingUsers.users) {
        cache.writeQuery({
          query: UsersDocument,
          data: {
            users: [...existingUsers.users, newUser],
          },
        })
      }
    },
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const rawRole = formData.get('role')
    const role = Object.values(Role).includes(rawRole as Role)
      ? (rawRole as Role)
      : undefined
    CreateUserMutation({
      variables: {
        username: formData.get('username')?.toString(),
        role: role,
      },
    })
    formAction(formData)
    onClose()
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
          name="role"
          defaultValue={state.role ? state.role.toString() : ''}
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
