import { PrismaClient, User, Borrowing } from '@prisma/client'

const prisma = new PrismaClient()

export const userResolvers = {
  Query: {
    user: async (
      _parent: unknown,
      args: { id: string },
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
