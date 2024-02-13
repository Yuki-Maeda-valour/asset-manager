import { Text, Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { Maybe } from 'nexus/dist/core'

interface LabelledValueProps {
  label: string
  value: Maybe<string> | Maybe<number> | Maybe<number> | undefined
}

export const LabelledValue: React.FC<LabelledValueProps> = ({
  label,
  value,
}) => {
  const formattedValue =
    typeof value === 'number' ? value.toLocaleString() : value || 'なし'
  const bgColor = useColorModeValue('gray.100', 'gray.700')
  const textColor = useColorModeValue('black', 'white')

  return (
    <Box padding="2" borderRadius="md" backgroundColor={bgColor} width="100%">
      <Flex justifyContent="space-between">
        <Text color={textColor} fontWeight="bold">
          {label}:
        </Text>
        <Text color={textColor} textAlign="right">
          {formattedValue}
        </Text>
      </Flex>
    </Box>
  )
}
