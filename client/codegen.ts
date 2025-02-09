import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4000/graphql',
  documents: ['!generated/**/*'],
  config: {
    namingConvention: {
      enumValues: 'keep',
    },
    skipTypename: true,
    inlineFragmentTypes: 'combine',
    preResolveTypes: true,
    onlyOperationTypes: true,
  },
  generates: {
    'src/generated/graphql.ts': {
      documents: ['src/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
    'src/generated/schema.graphql': {
      plugins: ['schema-ast'],
    },
    'src/generated/schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
