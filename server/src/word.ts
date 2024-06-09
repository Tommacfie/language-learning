import { schemaComposer } from 'graphql-compose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import mongoose from 'mongoose';
import { EnumWordClass, EnumWordGender } from './enums';

const { Schema, model } = mongoose;

// Mongoose model
const WordSchema = new Schema({
  english: String,
  polish: String,
  englishDescription: String,
  polishDescription: String,
  wordType: { type: String, enum: EnumWordClass.getFieldNames() },
  wordGender: { type: String, enum: EnumWordGender.getFieldNames() },
  cues: [String]!,
  tags: [String!]!,
});
const WordModel = model('Word', WordSchema);

// // Subschema for nouns
// const nounSchema = new Schema({
//   pluralForm: { type: String, required: false },
// });

// // // Subschema for verbs
// const verbSchema = new Schema({
//   conjugation: { type: Map, of: String }, // Example: storing different tenses
// });

// // // Subschema for adjectives
// const adjectiveSchema = new Schema({
//   comparativeForm: { type: String, required: false },
//   superlativeForm: { type: String, required: false },
// });

WordSchema.add({
  wordType: { type: String, enum: EnumWordClass.getFieldNames() },
  details: {
    type: Schema.Types.Mixed,
    required: true,
  },
});

WordSchema.pre('save', () => {
  const word = this;
  console.log(word);
});

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
