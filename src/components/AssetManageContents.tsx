import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
  Flex,
} from '@chakra-ui/react'
import AssetContents from '@/components/AssetContents'
import UserContents from '@/components/UserContents'
import BorrowingContents from '@/components/BorrowingContents'
import { LogoutButton } from '@/components/button/LogoutButton'

export const AssetManageContents = () => {
  return (
    <>
      <Text fontWeight="bold" fontSize="2xl">
        資産予約管理アプリ
      </Text>
      <Flex flexFlow="row" justifyContent="flex-end" width="full">
        <LogoutButton />
      </Flex>
      <Tabs isFitted width="full">
        <TabList>
          <Tab>予約</Tab>
          <Tab>資産</Tab>
          <Tab>ユーザー</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <BorrowingContents />
          </TabPanel>
          <TabPanel>
            <AssetContents />
          </TabPanel>
          <TabPanel>
            <UserContents />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}
