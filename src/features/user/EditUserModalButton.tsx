import { useModal } from '@/features/hooks/useModal'
import { Button } from '@chakra-ui/react'
import { EditUserForm } from '@/features/user'
import type { User } from '@/graphql/client/gqlhooks'

type EditUserModalButtonProps = {
  //  編集するユーザーの情報
  user: User
}

/**
 * EditUserModalButton
 * ユーザーを編集するためのモーダルを開くボタンコンポーネント
 *
 * @component
 * @param {EditUserModalButtonProps} props - コンポーネントのプロパティ
 * @returns Button, ModalContainer > EditUserForm
 */
export const EditUserModalButton = ({ user }: EditUserModalButtonProps) => {
  const { onOpen, ModalContainer } = useModal()

  return (
    <>
      <Button colorScheme="teal" onClick={onOpen}>
        編集
      </Button>
      <ModalContainer title="資産の編集">
        {/* <EditUserForm user={user} /> */}
        <div>テスト</div>
      </ModalContainer>
    </>
  )
}
