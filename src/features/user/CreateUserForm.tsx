import {
  Button,
  Container,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import {
  useCreateUserMutation,
  UsersDocument,
  Role,
} from '@/graphql/client/gqlhooks'
import { useUserForm } from '@/features/hooks/useUserForm'

/**
 * ユーザー作成フォームコンポーネントです。
 * @param {CreateUserFormProps} props - コンポーネントに渡されるプロパティ。
 */
export const CreateUserForm = ({ onClose }: { onClose: () => void }) => {
  const { formState, handleUsernameChange, handleRoleChange } = useUserForm({
    initialState: {
      username: '',
      role: Role.User,
    },
  })
  const [CreateUserMutation] = useCreateUserMutation({
    refetchQueries: [UsersDocument],
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { username, role } = formState
    CreateUserMutation({
      variables: {
        username: username,
        role: role ? (role as Role) : undefined,
      },
    })
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
          value={formState.username}
          onChange={handleUsernameChange}
        />
        <RadioGroup
          name="role"
          value={formState.role}
          onChange={handleRoleChange}
        >
          <Stack display="flex" gap={2} direction="row">
            <Radio value={Role.User}>USER</Radio>
            <Radio value={Role.Admin}>ADMIN</Radio>
          </Stack>
        </RadioGroup>
        <Button type="submit">登録</Button>
      </Container>
    </form>
  )
}
