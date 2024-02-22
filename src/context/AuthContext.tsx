import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '@/lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useUsersQuery, useCreateUserMutation } from '@/graphql/client/gqlhooks'
import { useRouter } from 'next/router'

type AuthUserType = {
  uid: string | null | undefined
  email: string | null | undefined
}

type AuthUserContextType = AuthUserType | null | undefined

const AuthContext = createContext<AuthUserContextType>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const { data } = useUsersQuery()
  const [createUser] = useCreateUserMutation()
  const [user, setUser] = useState<AuthUserContextType>()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (fireuser) => {
      const user = data?.users?.find((user) => user?.uid === fireuser?.uid)
      if (user) {
        setUser({ uid: fireuser?.uid, email: fireuser?.email })
      } else {
        setUser(null)
        router.push('/')
      }
    })
    return unsubscribe
  }, [createUser, data?.users, router])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
