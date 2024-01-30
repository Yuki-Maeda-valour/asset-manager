import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/graphql/server/schema.graphql',
  documents: ['./src/graphql/client/operations/*.ts'],
  generates: {
    './src/graphql/client/gqlhooks.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
      },
    },
    './src/graphql/client/graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
