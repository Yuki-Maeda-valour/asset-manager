import { Box, Text, Select, useColorModeValue } from '@chakra-ui/react'
import { useAssetsQuery } from '@/graphql/client/gqlhooks'

type UserSelectorProps = {
  label: string
  value?: string
}

export const AssetSelector = ({ label, value }: UserSelectorProps) => {
  const { data } = useAssetsQuery()
  const assets = data?.assets
  const textColor = useColorModeValue('black', 'white')
  return (
    <Box width="full">
      <Text color={textColor} fontWeight="bold">
        {label}:
      </Text>
      <Select value={value}>
        {assets?.map((asset) => (
          <option
            key={asset?.id}
            value={asset?.id?.toString()}
            selected={value === asset?.id?.toString()}
          >
            {asset?.name}
          </option>
        ))}
      </Select>
    </Box>
  )
}
