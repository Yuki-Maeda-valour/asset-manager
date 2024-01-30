import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/graphql/server/schema/schema.ts',
  documents: './src/graphql/client/operations/*.ts',
  generates: {
    './src/graphql/client': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'types.ts',
      },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHooks: true,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
