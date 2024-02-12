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
import { useUserForm } from '@/features/hooks/useUserForm'

type EditUserFormProps = {
  user: User
  onClose: () => void
}

export const EditUserForm = ({ user, onClose }: EditUserFormProps) => {
  const { id, username, role } = user
  const { formState, handleUsernameChange, handleRoleChange } = useUserForm({
    initialState: {
      username: username || '',
      role: role || undefined,
    },
  })
  const [updateUserMutation] = useUpdateUserMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { username, role } = formState
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
        <Button type="submit">更新</Button>
      </Container>
    </form>
  )
}
