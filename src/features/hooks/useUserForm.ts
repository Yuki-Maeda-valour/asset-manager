import { useState } from 'react'
import { Role } from '@/graphql/client/gqlhooks'

type UserFormState = {
  username: string
  role: Role | undefined
}

type UseUserFormProps = {
  initialState: UserFormState
}

type UseUserFormReturn = {
  formState: UserFormState
  handleUsernameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleRoleChange: (roleValue: Role) => void
}

export const useUserForm = ({
  initialState,
}: UseUserFormProps): UseUserFormReturn => {
  const [formState, setFormState] = useState<UserFormState>(initialState)

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, username: e.target.value })
  }

  const handleRoleChange = (roleValue: Role) => {
    setFormState({ ...formState, role: roleValue })
  }

  return { formState, handleUsernameChange, handleRoleChange }
}
