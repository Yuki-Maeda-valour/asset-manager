import {
  Button,
  Container,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import { useBorrowingForm } from '@/features/hooks/useBorrowingForm'
import { Borrowing, useUpdateAssetMutation } from '@/graphql/client/gqlhooks'

type EditBorrowingFormProps = {
  borrowing: Borrowing
  onClose: () => void
}

export const EditBorrowingForm = ({
  borrowing,
  onClose,
}: EditBorrowingFormProps) => {
  // const initialState = {
  //   name: asset.name || '',
  //   type: asset.type || AssetType.Pc,
  // }
  // const { formState, handleChange, handleTypeChange } = useAssetForm({
  //   initialState,
  // })
  // const [updateAssetMutation] = useUpdateAssetMutation()

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   const { name, type } = formState
  //   const isValidType = Object.values(AssetType).includes(type as AssetType)
  //   updateAssetMutation({
  //     variables: {
  //       updateAssetId: Number(asset.id),
  //       name: name,
  //       type: isValidType ? (type as AssetType) : undefined,
  //     },
  //   })
  //   onClose()
  // }

  return (
    <form>
      <Container display="flex" flexDirection="column" w={'full'} gap={4}>
        <Input type="text" name="name" placeholder="予約名" isRequired={true} />
        <RadioGroup name="type">
          <Stack display="flex" justifyContent="space-between" direction="row">
            {/* <Radio value={AssetType.Pc}>PC</Radio>
            <Radio value={AssetType.Sp}>SP</Radio>
            <Radio value={AssetType.Wifi}>WIFI</Radio>
            <Radio value={AssetType.Monitor}>MONITOR</Radio> */}
          </Stack>
        </RadioGroup>
        <Button type="submit">更新</Button>
      </Container>
    </form>
  )
}
