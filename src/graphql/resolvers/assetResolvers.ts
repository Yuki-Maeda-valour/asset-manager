import { Asset, Borrowing, Type } from '@prisma/client'
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
  Mutation: {
    createAsset: async (
      _parent: unknown,
      args: { name: string; type: Type },
    ): Promise<Asset> => {
      return await prisma.asset.create({
        data: {
          name: args.name,
          type: args.type,
        },
      })
    },
    updateAsset: async (
      _parent: unknown,
      args: { id: number; name?: string; type?: Type },
    ): Promise<Asset | null> => {
      return await prisma.asset.update({
        where: { id: Number(args.id) },
        data: {
          name: args.name,
          type: args.type,
        },
      })
    },
    deleteAsset: async (
      _parent: unknown,
      args: { id: number },
    ): Promise<Asset | null> => {
      return await prisma.asset.delete({
        where: { id: Number(args.id) },
      })
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
