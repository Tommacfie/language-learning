import mongoose from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

const { Schema, model } = mongoose;

// Mongoose model
const FlashCardSchema = new Schema({
  front: String!,
  back: String!,
  deck: { type: Schema.Types.ObjectId, ref: 'Deck' },
  cues: [String]!,
  tags: [String!]!,
});

const FlashCardModel = model('FlashCard', FlashCardSchema);

// Generate GraphQL Type
const FlashCardType = composeWithMongoose(FlashCardModel);

// Add fields and resolvers to rootQuery
schemaComposer.Query.addFields({
  word: FlashCardType.getResolver('findById'),
  words: FlashCardType.getResolver('findByIds'),
  wordOne: FlashCardType.getResolver('findOne'),
  wordMany: FlashCardType.getResolver('findMany'),
  wordCount: FlashCardType.getResolver('count'),
  wordConnection: FlashCardType.getResolver('connection'),
});

// Add fields and resolvers to Mutation
schemaComposer.Mutation.addFields({
  wordCreateOne: FlashCardType.getResolver('createOne'),
  wordUpdateById: FlashCardType.getResolver('updateById'),
  wordRemoveById: FlashCardType.getResolver('removeById'),
});
