import { objectType, extendType, enumType } from 'nexus'
import { Borrowing } from '@/graphql/server/types/Borrowing'

export const Role = enumType({
  name: 'Role',
  members: ['ADMIN', 'USER'],
})

export const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('username')
    t.field('role', { type: Role })
    t.string('uid')
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
            userId: _parent.id,
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

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.list.field('users', {
      type: User,
      resolve: async (_parent, _args, ctx) => {
        const users = await ctx.prisma.user.findMany({
          orderBy: {
            id: 'asc',
          },
        })
        return users.map((user) => ({
          ...user,
          createdAt: user.createdAt.toISOString(),
          updatedAt: user.updatedAt.toISOString(),
        }))
      },
    }),
      t.field('user', {
        type: User,
        args: {
          id: 'Int',
        },
        resolve: async (_parent, args, ctx) => {
          if (args.id === null || args.id === undefined) {
            throw new Error('ID is required')
          }
          const user = await ctx.prisma.user.findUnique({
            where: {
              id: args.id,
            },
          })
          return {
            ...user,
            createdAt: user?.createdAt.toISOString(),
            updatedAt: user?.updatedAt.toISOString(),
          }
        },
      })
  },
})

export const UserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createUser', {
      type: User,
      args: {
        username: 'String',
        uid: 'String',
        role: Role,
      },
      resolve: async (_parent, args, ctx) => {
        if (!args.username) {
          throw new Error('ユーザー名が必要です')
        }
        if (!args.uid) {
          throw new Error('UID is required')
        }
        if (!args.role) {
          throw new Error('Role is required')
        }
        const user = await ctx.prisma.user.create({
          data: {
            username: args.username,
            uid: args.uid,
            role: args.role,
          },
        })
        return {
          ...user,
          createdAt: user?.createdAt.toISOString(),
          updatedAt: user?.updatedAt.toISOString(),
        }
      },
    }),
      t.field('updateUser', {
        type: User,
        args: {
          id: 'Int',
          username: 'String',
          uid: 'String',
          role: Role,
        },
        resolve: async (_parent, args, ctx) => {
          if (args.id === null || args.id === undefined) {
            throw new Error('ID is required')
          }
          if (!args.username) {
            throw new Error('ユーザー名が必要です')
          }
          if (!args.uid) {
            throw new Error('UID is required')
          }
          if (!args.role) {
            throw new Error('Role is required')
          }
          const user = await ctx.prisma.user.update({
            where: {
              id: args.id,
            },
            data: {
              username: args.username,
              uid: args.uid,
              role: args.role,
            },
          })
          return {
            ...user,
            createdAt: user?.createdAt.toISOString(),
            updatedAt: user?.updatedAt.toISOString(),
          }
        },
      }),
      t.field('deleteUser', {
        type: User,
        args: {
          id: 'Int',
        },
        resolve: async (_parent, args, ctx) => {
          if (args.id === null || args.id === undefined) {
            throw new Error('ID is required')
          }
          const user = await ctx.prisma.user.delete({
            where: {
              id: args.id,
            },
          })
          return {
            ...user,
            createdAt: user?.createdAt.toISOString(),
            updatedAt: user?.updatedAt.toISOString(),
          }
        },
      })
  },
})
