import { PrismaClient, User, Asset, Borrowing } from '@prisma/client'

const prisma = new PrismaClient()

export const borrowingResolvers = {
  Query: {
    borrowing: async (
      _parent: unknown,
      args: { id: string },
    ): Promise<Borrowing | null> => {
      return await prisma.borrowing.findUnique({
        where: { id: Number(args.id) },
      })
    },
    borrowings: async (): Promise<Borrowing[]> => {
      return await prisma.borrowing.findMany()
    },
  },
  Borrowing: {
    user: async (parent: Borrowing): Promise<User | null> => {
      return await prisma.user.findUnique({
        where: { id: parent.userId },
      })
    },
    asset: async (parent: Borrowing): Promise<Asset | null> => {
      return await prisma.asset.findUnique({
        where: { id: parent.assetId },
      })
    },
  },
}
