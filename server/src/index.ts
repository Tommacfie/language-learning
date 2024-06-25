import { schemaComposer } from 'graphql-compose';
import './user';
import './word';
import './deck';
import './flashCard';

export const compiledSchema = schemaComposer.buildSchema();
