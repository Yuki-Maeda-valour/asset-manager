import { User, Borrowing, Role } from '@prisma/client'
import { prisma } from '@/prisma/prisma'

export const userResolvers = {
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
  Mutation: {
    createUser: async (
      _parent: unknown,
      args: { username: string; role: Role },
    ): Promise<User> => {
      return await prisma.user.create({
        data: {
          username: args.username,
          role: args.role,
        },
      })
    },
    updateUser: async (
      _parent: unknown,
      args: { id: number; username?: string; role?: Role },
    ): Promise<User | null> => {
      return await prisma.user.update({
        where: { id: Number(args.id) },
        data: {
          username: args.username,
          role: args.role,
        },
      })
    },
    deleteUser: async (
      _parent: unknown,
      args: { id: number },
    ): Promise<User | null> => {
      return await prisma.user.delete({
        where: { id: Number(args.id) },
      })
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
