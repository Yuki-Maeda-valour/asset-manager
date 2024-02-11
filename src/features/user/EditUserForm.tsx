import React, { useState } from 'react'
import {
  Button,
  Container,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import { useUpdateUserMutation, Role, User } from '@/graphql/client/gqlhooks'

type EditUserFormProps = {
  user: User
  onClose: () => void
}

export const EditUserForm = ({ user, onClose }: EditUserFormProps) => {
  const { id } = user

  const [state, setState] = useState({
    username: user.username || '',
    role: user.role ? (user.role as Role) : undefined,
  })
  const [updateUserMutation] = useUpdateUserMutation()

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, username: e.target.value })
  }

  const handleRoleChange = (roleValue: Role) => {
    setState({ ...state, role: roleValue as Role })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { username, role } = state
    updateUserMutation({
      variables: {
        updateUserId: id,
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
        <Button type="submit">Submit</Button>
      </Container>
    </form>
  )
}
