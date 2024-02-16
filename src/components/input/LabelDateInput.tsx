import { Box, Input, Text, useColorModeValue } from '@chakra-ui/react'

type LabelDateInputProps = {
  label: string
  isRequired?: boolean
}

export const LabelDateInput = ({ label, isRequired }: LabelDateInputProps) => {
  const textColor = useColorModeValue('black', 'white')
  return (
    <Box width="full">
      <Text color={textColor} fontWeight="bold">
        {label}:
      </Text>
      <Input size="md" type="datetime-local" isRequired={isRequired} />
    </Box>
  )
}
