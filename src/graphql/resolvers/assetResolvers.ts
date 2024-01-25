import { PrismaClient, Asset, Borrowing } from '@prisma/client'

const prisma = new PrismaClient()

export const assetResolvers = {
  Query: {
    asset: async (
      _parent: unknown,
      args: { id: string },
    ): Promise<Asset | null> => {
      return await prisma.asset.findUnique({
        where: { id: Number(args.id) },
      })
    },
    assets: async (): Promise<Asset[]> => {
      return await prisma.asset.findMany()
    },
  },
  Asset: {
    borrowings: async (parent: Asset): Promise<Borrowing[]> => {
      return await prisma.borrowing.findMany({
        where: { assetId: parent.id },
      })
    },
  },
}
