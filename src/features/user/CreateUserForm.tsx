import React, { useState } from 'react'
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

const initialState = {
  username: '',
  role: 'USER',
}

/**
 * ユーザー作成フォームコンポーネントです。
 * @param {CreateUserFormProps} props - コンポーネントに渡されるプロパティ。
 */
export const CreateUserForm = ({ onClose }: { onClose: () => void }) => {
  const [state, setState] = useState(initialState)
  const [CreateUserMutation] = useCreateUserMutation({
    refetchQueries: [UsersDocument],
  })

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, username: e.target.value })
  }

  const handleRoleChange = (roleValue: Role) => {
    setState({ ...state, role: roleValue as Role })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { username, role } = state
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
          value={state.username}
          onChange={handleUsernameChange}
        />
        <RadioGroup name="role" value={state.role} onChange={handleRoleChange}>
          <Stack display="flex" gap={2} direction="row">
            <Radio value="USER">USER</Radio>
            <Radio value="ADMIN">ADMIN</Radio>
          </Stack>
        </RadioGroup>
        <Button type="submit">登録</Button>
      </Container>
    </form>
  )
}
