import type { User } from '@/graphql/client/gqlhooks'
import {
  Button,
  Container,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import { useFormState } from 'react-dom'
import { userEditAction } from '@/features/user/action'
import { useUpdateUserMutation } from '@/graphql/client/gqlhooks'
import { Role } from '@/graphql/client/gqlhooks'

type EditUserFormProps = {
  //  編集するユーザーの情報
  user: User
  // モーダルを閉じる処理
  onClose: () => void
}

/**
 * ユーザー編集フォームコンポーネントです。
 * @param {EditUserFormProps} props - コンポーネントに渡されるプロパティ。
 */
export const EditUserForm = ({ user, onClose }: EditUserFormProps) => {
  const { id, username, role } = user

  const initialState = {
    username: username as FormDataEntryValue | null,
    role: role as FormDataEntryValue | null,
  }
  const [state, formAction] = useFormState(userEditAction, initialState)
  const [updateUserMutation] = useUpdateUserMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const rawType = formData.get('role')
    const role = Object.values(Role).includes(rawType as Role)
      ? (rawType as Role)
      : undefined
    updateUserMutation({
      variables: {
        updateUserId: id,
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
          defaultValue={state.username ? state.username.toString() : ''}
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
