import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4000/graphql',
  documents: ['!generated/**/*'],
  generates: {
    'src/generated/graphql.ts': {
      documents: ['src/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        // 'typescript-react-query',
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
