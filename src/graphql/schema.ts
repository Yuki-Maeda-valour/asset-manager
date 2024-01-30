import { makeSchema } from 'nexus'
import { join } from 'path'
import * as types from '@/graphql/types'

export const schema = makeSchema({
  types,
  outputs: {
    schema: join(process.cwd(), 'src/graphql/generated/schema.graphql'),
    typegen: join(process.cwd(), 'src/graphql/generated/nexus.ts'),
  },
  contextType: {
    module: join(process.cwd(), 'src/graphql/context.ts'),
    export: 'Context',
  },
})
