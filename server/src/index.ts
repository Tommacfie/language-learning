import { schemaComposer } from 'graphql-compose';
import './user';
import './word';

export const compiledSchema = schemaComposer.buildSchema();
