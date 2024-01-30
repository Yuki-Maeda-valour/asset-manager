import { User, Asset, Borrowing, Status } from '@prisma/client'
import { prisma } from '@/prisma/prisma'

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
  Mutation: {
    createBorrowing: async (
      _parent: unknown,
      args: {
        borrowedAt: string
        deadline: string
        status: Status
        userId: number
        assetId: number
      },
    ): Promise<Borrowing> => {
      return await prisma.borrowing.create({
        data: {
          borrowedAt: args.borrowedAt,
          deadline: args.deadline,
          status: args.status,
          userId: args.userId,
          assetId: args.assetId,
        },
      })
    },
    updateBorrowing: async (
      _parent: unknown,
      args: {
        id: number
        borrowedAt?: string
        deadline?: string
        status?: Status
        userId?: number
        assetId?: number
      },
    ): Promise<Borrowing | null> => {
      return await prisma.borrowing.update({
        where: { id: Number(args.id) },
        data: {
          borrowedAt: args.borrowedAt,
          deadline: args.deadline,
          status: args.status,
          userId: args.userId,
          assetId: args.assetId,
        },
      })
    },
    deleteBorrowing: async (
      _parent: unknown,
      args: { id: number },
    ): Promise<Borrowing | null> => {
      return await prisma.borrowing.delete({
        where: { id: Number(args.id) },
      })
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
