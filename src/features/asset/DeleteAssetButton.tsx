import { PopoverButton } from '@/components/button/PopoverButton'
import { Button, Container, Text } from '@chakra-ui/react'

export const DeleteAssetButton = () => {
  return (
    <PopoverButton buttonLabel="削除" placement="left-start">
      <Container
        {...{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 4,
          p: 0,
        }}
      >
        <Text>本当に削除しますか?</Text>
        <Button colorScheme="red" size="sm">
          削除
        </Button>
      </Container>
    </PopoverButton>
  )
}
