import { schemaComposer } from 'graphql-compose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import mongoose from 'mongoose';
import { WordClassEnum, WordGenderEnum } from './enums';

// Mongoose model
const WordSchema = new mongoose.Schema({
  word: String,
  englishDescription: String,
  polishDescription: String,
  wordClass: Object.values(WordClassEnum),
  wordGender: Object.values(WordGenderEnum),
  cues: [String]!,
  tags: [String!]!,
});
const WordModel = mongoose.model('Word', WordSchema);

// Generate GraphQL Type
const WordType = composeWithMongoose(WordModel);

// Add fields and resolvers to rootQuery
schemaComposer.Query.addFields({
  wordById: WordType.getResolver('findById'),
  wordByIds: WordType.getResolver('findByIds'),
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
