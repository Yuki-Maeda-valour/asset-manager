import { Box, Text, Select, useColorModeValue } from '@chakra-ui/react'
import { useAssetsQuery } from '@/graphql/client/gqlhooks'

type UserSelectorProps = {
  label: string
}

export const AssetSelector = ({ label }: UserSelectorProps) => {
  const { data } = useAssetsQuery()
  const assets = data?.assets
  const textColor = useColorModeValue('black', 'white')
  return (
    <Box width="full">
      <Text color={textColor} fontWeight="bold">
        {label}:
      </Text>
      <Select>
        {assets?.map((asset) => (
          <option key={asset?.id} value={asset?.id?.toString()}>
            {asset?.name}
          </option>
        ))}
      </Select>
    </Box>
  )
}
