import { schemaComposer } from 'graphql-compose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import mongoose from 'mongoose';
import { EnumWordClass, EnumWordGender } from './enums';

// Mongoose model
const WordSchema = new mongoose.Schema({
  english: String,
  polish: String,
  englishDescription: String,
  polishDescription: String,
  wordType: { type: String, enum: EnumWordClass.getFieldNames() },
  wordGender: { type: String, enum: EnumWordGender.getFieldNames() },
  cues: [String]!,
  tags: [String!]!,
});
const WordModel = mongoose.model('Word', WordSchema);

// Generate GraphQL Type
const WordType = composeWithMongoose(WordModel);

// Add fields and resolvers to rootQuery
schemaComposer.Query.addFields({
  word: WordType.getResolver('findById'),
  words: WordType.getResolver('findByIds'),
  wordOne: WordType.getResolver('findOne'),
  wordMany: WordType.getResolver('findMany'),
  wordCount: WordType.getResolver('count'),
  wordConnection: WordType.getResolver('connection'),
});

// Add fields and resolvers to Mutation
schemaComposer.Mutation.addFields({
  wordCreateOne: WordType.getResolver('createOne'),
  wordUpdateById: WordType.getResolver('updateById'),
  wordRemoveById: WordType.getResolver('removeById'),
});
