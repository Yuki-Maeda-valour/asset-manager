import { Card, CardBody, Text } from '@chakra-ui/react'
import type { Asset } from '@/graphql/client/gqlhooks'

type AssetCardProps = {
  asset: Asset | null
}

export const AssetCard = ({ asset }: AssetCardProps) => {
  if (!asset) return null

  return (
    <Card w="full">
      <CardBody>
        <Text>{asset.id}</Text>
        <Text>{asset.name}</Text>
        <Text>{asset.type}</Text>
      </CardBody>
    </Card>
  )
}
