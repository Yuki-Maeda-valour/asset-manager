import { Box, Input, Text, useColorModeValue } from '@chakra-ui/react'

type LabelSelectInputProps = {
  label: string
  value: number
  isRequired?: boolean
}

export const LabelSelectInput = ({
  label,
  value,
  isRequired,
}: LabelSelectInputProps) => {
  const textColor = useColorModeValue('black', 'white')
  return (
    <Box width="full">
      <Text color={textColor} fontWeight="bold">
        {label}:
      </Text>
      <Input
        size="md"
        type="datetime-local"
        value={value}
        isRequired={isRequired}
      />
    </Box>
  )
}
