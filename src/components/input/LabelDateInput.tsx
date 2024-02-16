import { Box, Input, Text, useColorModeValue } from '@chakra-ui/react'

type LabelDateInputProps = {
  label: string
  value?: string
  isRequired?: boolean
}

export const LabelDateInput = ({
  label,
  value,
  isRequired,
}: LabelDateInputProps) => {
  const textColor = useColorModeValue('black', 'white')
  return (
    <Box width="full">
      <Text color={textColor} fontWeight="bold">
        {label}:
      </Text>
      <Input
        size="md"
        type="datetime-local"
        isRequired={isRequired}
        value={value?.toString()}
      />
    </Box>
  )
}
