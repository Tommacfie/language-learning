import mongoose from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

const { Schema, model } = mongoose;

// Mongoose model
const DeckSchema = new Schema({
  name: { type: String!, unique: true },
  tags: [String!]!,
  reversed: { type: Boolean, default: false },
  flashCards: [{ type: Schema.Types.ObjectId, ref: 'FlashCard' }],
});

const DeckModel = model('Deck', DeckSchema);

// Generate GraphQL Type
const DeckType = composeWithMongoose(DeckModel);

// Add fields and resolvers to rootQuery
schemaComposer.Query.addFields({
  word: DeckType.getResolver('findById'),
  words: DeckType.getResolver('findByIds'),
  wordOne: DeckType.getResolver('findOne'),
  wordMany: DeckType.getResolver('findMany'),
  wordCount: DeckType.getResolver('count'),
  wordConnection: DeckType.getResolver('connection'),
});

// Add fields and resolvers to Mutation
schemaComposer.Mutation.addFields({
  wordCreateOne: DeckType.getResolver('createOne'),
  wordUpdateById: DeckType.getResolver('updateById'),
  wordRemoveById: DeckType.getResolver('removeById'),
});
