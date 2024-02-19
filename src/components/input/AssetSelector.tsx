import { Box, Text, Select, useColorModeValue } from '@chakra-ui/react'
import { useAssetsQuery } from '@/graphql/client/gqlhooks'

type AssetSelectorProps = {
  label: string
  value?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const AssetSelector = ({
  label,
  name,
  value,
  onChange,
}: AssetSelectorProps) => {
  const { data } = useAssetsQuery()
  const assets = data?.assets
  const textColor = useColorModeValue('black', 'white')
  return (
    <Box width="full">
      <Text color={textColor} fontWeight="bold">
        {label}:
      </Text>
      <Select name={name} value={value} onChange={onChange} required>
        <option value="" selected>
          選択してください
        </option>
        {assets?.map((asset) => (
          <option key={asset?.id} value={asset?.id?.toString()}>
            {asset?.name}
          </option>
        ))}
      </Select>
    </Box>
  )
}
