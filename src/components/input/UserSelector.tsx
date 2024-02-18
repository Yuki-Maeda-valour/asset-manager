import { Box, Text, Select, useColorModeValue } from '@chakra-ui/react'
import { useUsersQuery } from '@/graphql/client/gqlhooks'

type UserSelectorProps = {
  label: string
  value?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const UserSelector = ({
  label,
  name,
  value,
  onChange,
}: UserSelectorProps) => {
  const { data } = useUsersQuery()
  const users = data?.users
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
        {users?.map((user) => (
          <option key={user?.id} value={user?.id?.toString()}>
            {user?.username}
          </option>
        ))}
      </Select>
    </Box>
  )
}
