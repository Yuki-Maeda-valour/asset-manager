import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <main className={inter.className}>{children}</main>
    </div>
  )
}
