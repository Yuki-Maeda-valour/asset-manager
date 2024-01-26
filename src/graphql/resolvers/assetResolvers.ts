import { Asset, Borrowing } from '@prisma/client'
import { prisma } from '@/prisma/prisma'

export const assetResolvers = {
  Query: {
    asset: async (
      _parent: unknown,
      args: { id: number },
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
