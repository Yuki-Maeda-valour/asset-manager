import { User, Borrowing } from '@prisma/client'
import { prisma } from '@/prisma/prisma'

export const userResolvers = {
  Mutation: {
    createUser: async (
      _parent: unknown,
      args: { username: string; role: string },
    ): Promise<User> => {
      return await prisma.user.create({
        data: {
          username: args.username,
          role: args.role,
        },
      })
    },
  },
  Query: {
    user: async (
      _parent: unknown,
      args: { id: number },
    ): Promise<User | null> => {
      return await prisma.user.findUnique({
        where: { id: Number(args.id) },
      })
    },
    users: async (): Promise<User[]> => {
      return await prisma.user.findMany()
    },
  },
  User: {
    borrowings: async (parent: User): Promise<Borrowing[]> => {
      return await prisma.borrowing.findMany({
        where: { userId: parent.id },
      })
    },
  },
}
