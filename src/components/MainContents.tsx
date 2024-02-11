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
