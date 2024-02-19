import { Box, Input, Text, useColorModeValue } from '@chakra-ui/react'

type LabelDateInputProps = {
  label: string
  value?: string
  isRequired?: boolean
  name: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const LabelDateInput = ({
  label,
  value,
  isRequired,
  name,
  onChange,
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
        value={value || ''}
        name={name}
        onChange={onChange}
      />
    </Box>
  )
}
