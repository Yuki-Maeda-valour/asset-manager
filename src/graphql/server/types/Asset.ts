import { objectType, extendType, enumType } from 'nexus'
import { Borrowing } from '@/graphql/server/types/Borrowing'

export const AssetType = enumType({
  name: 'AssetType',
  members: ['PC', 'SP', 'WIFI', 'MONITOR'],
})

export const Asset = objectType({
  name: 'Asset',
  definition(t) {
    t.int('id')
    t.string('name')
    t.field('type', { type: AssetType })
    t.string('createdAt')
    t.string('updatedAt')
    t.list.field('borrowings', {
      type: Borrowing,
      resolve: async (_parent, _args, ctx) => {
        if (!_parent.id) {
          throw new Error('ID is required')
        }
        const borrowings = await ctx.prisma.borrowing.findMany({
          where: {
            assetId: _parent.id,
          },
        })
        return borrowings.map((borrowing) => ({
          ...borrowing,
          borrowedAt: borrowing.borrowedAt.toISOString(),
          returnedAt: borrowing.returnedAt
            ? borrowing.returnedAt.toISOString()
            : null,
          deadline: borrowing.deadline.toISOString(),
          createdAt: borrowing?.createdAt.toISOString(),
          updatedAt: borrowing?.updatedAt.toISOString(),
        }))
      },
    })
  },
})

export const AssetQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('assets', {
      type: Asset,
      resolve: async (_parent, _args, ctx) => {
        const assets = await ctx.prisma.asset.findMany()
        return assets.map((asset) => ({
          ...asset,
          createdAt: asset?.createdAt.toISOString(),
          updatedAt: asset?.updatedAt.toISOString(),
        }))
      },
    }),
      t.field('asset', {
        type: Asset,
        args: {
          id: 'Int',
        },
        resolve: async (_parent, args, ctx) => {
          if (args.id === null || args.id === undefined) {
            throw new Error('ID is required')
          }
          const asset = await ctx.prisma.asset.findUnique({
            where: {
              id: args.id,
            },
          })
          return {
            ...asset,
            createdAt: asset?.createdAt.toISOString(),
            updatedAt: asset?.updatedAt.toISOString(),
          }
        },
      })
  },
})

export const AssetMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createAsset', {
      type: Asset,
      args: {
        name: 'String',
        type: AssetType,
      },
      resolve: async (_parent, args, ctx) => {
        if (!args.name) {
          throw new Error('名前が必要です')
        }
        if (!args.type) {
          throw new Error('Type is required')
        }
        const asset = await ctx.prisma.asset.create({
          data: {
            name: args.name,
            type: args.type,
          },
        })
        return {
          ...asset,
          createdAt: asset?.createdAt.toISOString(),
          updatedAt: asset?.updatedAt.toISOString(),
        }
      },
    }),
      t.field('updateAsset', {
        type: Asset,
        args: {
          id: 'Int',
          name: 'String',
          type: AssetType,
        },
        resolve: async (_parent, args, ctx) => {
          if (args.id === null || args.id === undefined) {
            throw new Error('ID is required')
          }
          if (!args.name) {
            throw new Error('名前が必要です')
          }
          if (!args.type) {
            throw new Error('Type is required')
          }
          const asset = await ctx.prisma.asset.update({
            where: {
              id: args.id,
            },
            data: {
              name: args.name,
              type: args.type,
            },
          })
          return {
            ...asset,
            createdAt: asset?.createdAt.toISOString(),
            updatedAt: asset?.updatedAt.toISOString(),
          }
        },
      }),
      t.field('deleteAsset', {
        type: Asset,
        args: {
          id: 'Int',
        },
        resolve: async (_parent, args, ctx) => {
          if (args.id === null || args.id === undefined) {
            throw new Error('ID is required')
          }
          const asset = await ctx.prisma.asset.delete({
            where: {
              id: args.id,
            },
          })
          return {
            ...asset,
            createdAt: asset?.createdAt.toISOString(),
            updatedAt: asset?.updatedAt.toISOString(),
          }
        },
      })
  },
})
