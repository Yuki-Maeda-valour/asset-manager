import React from 'react'
import { Button, Container } from '@chakra-ui/react'
import { useFormState } from 'react-dom'

type FormDataType = {
  [key: string]: FormDataEntryValue | null
}

export const useForm = (
  // eslint-disable-next-line no-unused-vars
  action: (state: FormDataType, formData: FormData) => FormDataType,
  initialState: FormDataType,
) => {
  // useFormStateを使用してフォームの状態とアクション関数を取得
  const [state, formAction] = useFormState(action, initialState)

  const FormComponent: React.FC<{ children: React.ReactNode }> = ({
    children,
  }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      // formActionを呼び出してフォームの状態を更新
      formAction(formData)
    }

    // 子コンポーネントにformActionを渡すためのクローンを作成
    const formFields = React.Children.map(children, (child) => {
      return child
    })

    return (
      <form onSubmit={handleSubmit} action={formAction}>
        <Container display="flex" flexDirection="column" w={'full'} gap={4}>
          {formFields}
          <Button type="submit">Submit</Button>
        </Container>
      </form>
    )
  }

  // 更新されたstateを返します。
  return { FormComponent, state }
}
