import { objectType, extendType } from 'nexus'
import { Prisma } from '@prisma/client'
import { User } from '@/graphql/server/types/User'
import { Asset } from '@/graphql/server/types/Asset'

export const Borrowing = objectType({
  name: 'Borrowing',
  definition(t) {
    t.int('id')
    t.string('borrowedAt')
    t.string('returnedAt')
    t.string('deadline')
    t.int('userId')
    t.int('assetId')
    t.string('createdAt')
    t.string('updatedAt')
    t.field('user', {
      type: User,
      resolve: async (parent, _args, ctx) => {
        return await ctx.prisma.user
          .findUnique({
            where: { id: parent.userId || undefined },
          })
          .then((user: Prisma.UserGetPayload<{}> | null) => {
            return {
              ...user,
              createdAt: user?.createdAt.toISOString(),
              updatedAt: user?.updatedAt.toISOString(),
            }
          })
      },
    })
    t.field('asset', {
      type: Asset,
      resolve: async (parent, _args, ctx) => {
        return await ctx.prisma.asset
          .findUnique({
            where: { id: parent.assetId || undefined },
          })
          .then((asset: Prisma.AssetGetPayload<{}> | null) => {
            return {
              ...asset,
              createdAt: asset?.createdAt.toISOString(),
              updatedAt: asset?.updatedAt.toISOString(),
            }
          })
      },
    })
  },
})

export const BorrowingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('borrowings', {
      type: Borrowing,
      resolve: async (_parent, _args, ctx) => {
        const borrowings = await ctx.prisma.borrowing.findMany({
          orderBy: {
            createdAt: 'desc',
          },
        })
        return borrowings.map((borrowing: Prisma.BorrowingGetPayload<{}>) => ({
          ...borrowing,
          borrowedAt: borrowing.borrowedAt.toISOString(),
          returnedAt: borrowing.returnedAt
            ? borrowing.returnedAt.toISOString()
            : null,
          deadline: borrowing.deadline.toISOString(),
          createdAt: borrowing.createdAt.toISOString(),
          updatedAt: borrowing?.updatedAt.toISOString(),
        }))
      },
    }),
      t.field('borrowing', {
        type: Borrowing,
        args: {
          id: 'Int',
        },
        resolve: async (_parent, args, ctx) => {
          if (args.id === null || args.id === undefined) {
            throw new Error('ID is required')
          }
          const borrowing = await ctx.prisma.borrowing.findUnique({
            where: {
              id: args.id,
            },
          })
          return {
            ...borrowing,
            borrowedAt: borrowing?.borrowedAt.toISOString(),
            returnedAt: borrowing?.returnedAt
              ? borrowing?.returnedAt.toISOString()
              : null,
            deadline: borrowing?.deadline.toISOString(),
            createdAt: borrowing?.createdAt.toISOString(),
            updatedAt: borrowing?.updatedAt.toISOString(),
          }
        },
      })
  },
})

export const BorrowingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createBorrowing', {
      type: Borrowing,
      args: {
        borrowedAt: 'String',
        deadline: 'String',
        userId: 'Int',
        assetId: 'Int',
      },
      resolve: async (_parent, args, ctx) => {
        if (!args.borrowedAt) {
          throw new Error('BorrowedAt is required')
        }
        if (!args.deadline) {
          throw new Error('Deadline is required')
        }
        if (!args.userId) {
          throw new Error('UserId is required')
        }
        if (!args.assetId) {
          throw new Error('AssetId is required')
        }
        const borrowing = await ctx.prisma.borrowing.create({
          data: {
            borrowedAt: args.borrowedAt,
            deadline: args.deadline,
            userId: args.userId,
            assetId: args.assetId,
          },
        })
        return {
          ...borrowing,
          borrowedAt: borrowing?.borrowedAt.toISOString(),
          returnedAt: borrowing?.returnedAt
            ? borrowing?.returnedAt.toISOString()
            : null,
          deadline: borrowing?.deadline.toISOString(),
          createdAt: borrowing?.createdAt.toISOString(),
          updatedAt: borrowing?.updatedAt.toISOString(),
        }
      },
    }),
      t.field('updateBorrowing', {
        type: Borrowing,
        args: {
          id: 'Int',
          borrowedAt: 'String',
          deadline: 'String',
          userId: 'Int',
          assetId: 'Int',
        },
        resolve: async (_parent, args, ctx) => {
          if (!args.id) {
            throw new Error('ID is required')
          }
          const borrowing = await ctx.prisma.borrowing.update({
            where: {
              id: args.id,
            },
            data: {
              borrowedAt: args.borrowedAt
                ? new Date(args.borrowedAt)
                : undefined,
              deadline: args.deadline ? new Date(args.deadline) : undefined,
              userId: args.userId || undefined,
              assetId: args.assetId || undefined,
            },
          })
          return {
            ...borrowing,
            borrowedAt: borrowing?.borrowedAt.toISOString(),
            returnedAt: borrowing?.returnedAt
              ? borrowing?.returnedAt.toISOString()
              : null,
            deadline: borrowing?.deadline.toISOString(),
            createdAt: borrowing?.createdAt.toISOString(),
            updatedAt: borrowing?.updatedAt.toISOString(),
          }
        },
      }),
      t.field('deleteBorrowing', {
        type: Borrowing,
        args: {
          id: 'Int',
        },
        resolve: async (_parent, args, ctx) => {
          if (!args.id) {
            throw new Error('ID is required')
          }
          const borrowing = await ctx.prisma.borrowing.delete({
            where: {
              id: args.id,
            },
          })
          return {
            ...borrowing,
            borrowedAt: borrowing?.borrowedAt.toISOString(),
            returnedAt: borrowing?.returnedAt
              ? borrowing?.returnedAt.toISOString()
              : null,
            deadline: borrowing?.deadline.toISOString(),
            createdAt: borrowing?.createdAt.toISOString(),
            updatedAt: borrowing?.updatedAt.toISOString(),
          }
        },
      })
  },
})
