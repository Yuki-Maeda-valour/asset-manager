import { Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react'
import AssetContents from '@/components/AssetContents'
import UserContents from '@/components/UserContents'
import BorrowingContents from '@/components/BorrowingContents'
import { LoginButton } from '@/components/button/LoginButton'
import { LogoutButton } from '@/components/button/LogoutButton'
import { useAuth } from '@/context/AuthContext'

/**
 * メインコンテンツ
 * @returns div
 */
export default function MainContents() {
  const user = useAuth()
  console.log('user', user)
  return (
    <>
      <Text fontWeight="bold" fontSize="2xl">
        資産予約管理アプリ
      </Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
        <LoginButton />
        <LogoutButton />
      </div>
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
