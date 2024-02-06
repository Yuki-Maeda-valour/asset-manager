import { Button, Card, CardBody, Container, Text } from '@chakra-ui/react'
import type { Asset } from '@/graphql/client/gqlhooks'

type AssetCardProps = {
  // 資産オブジェクト
  asset: Asset | null
}

/**
 * 資産カードコンポーネント
 * @param asset 資産オブジェクト
 * @returns Card > CardBody > Text
 */
export const AssetCard = ({ asset }: AssetCardProps) => {
  if (!asset) return null

  const handleClick = () => {
    console.log(asset.id)
  }

  return (
    <Card w="full" onClick={handleClick}>
      <CardBody display="flex" justifyContent="space-between" gap={2}>
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text>{asset.id}</Text>
          <Text>{asset.name}</Text>
          <Text>{asset.type}</Text>
        </Container>
        <Container display="flex" justifyContent="flex-end" gap={2} p={0}>
          <Button colorScheme="teal">編集</Button>
          <Button colorScheme="red">削除</Button>
        </Container>
      </CardBody>
    </Card>
  )
}
