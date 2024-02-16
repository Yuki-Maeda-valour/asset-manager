import { Box, Text, Select, useColorModeValue } from '@chakra-ui/react'
import { useUsersQuery } from '@/graphql/client/gqlhooks'

type UserSelectorProps = {
  label: string
  value?: string
}

export const UserSelector = ({ label, value }: UserSelectorProps) => {
  const { data } = useUsersQuery()
  const users = data?.users
  const textColor = useColorModeValue('black', 'white')
  return (
    <Box width="full">
      <Text color={textColor} fontWeight="bold">
        {label}:
      </Text>
      <Select value={value}>
        {users?.map((user) => (
          <option
            key={user?.id}
            value={user?.id?.toString()}
            selected={value === user?.id?.toString()}
          >
            {user?.username}
          </option>
        ))}
      </Select>
    </Box>
  )
}
