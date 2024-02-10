import { Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react'
import AssetContents from '@/components/AssetContents'
import UserContents from '@/components/UserContents'
import BorrowingContents from '@/components/BorrowingContents'

/**
 * メインコンテンツ
 * @returns div
 */
export default function MainContents() {
  return (
    <>
      <Text fontWeight="bold" fontSize="2xl">
        資産予約管理アプリ
      </Text>
      <Tabs isFitted width="full">
        <TabList>
          <Tab>予約管理一覧</Tab>
          <Tab>資産一覧</Tab>
          <Tab>ユーザー一覧</Tab>
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
