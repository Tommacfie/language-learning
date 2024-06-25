import mongoose from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

const { Schema, model } = mongoose;

// Mongoose model
const DeckSchema = new Schema({
  name: { type: String, unique: true },
  reversed: { type: Boolean, default: false },
  flashCards: [{ type: Schema.Types.ObjectId, ref: 'FlashCard' }],
  tags: [String],
});

const DeckModel = model('Deck', DeckSchema);

// Generate GraphQL Type
const DeckType = composeWithMongoose(DeckModel);

// Add fields and resolvers to rootQuery
schemaComposer.Query.addFields({
  deck: DeckType.getResolver('findById'),
  decks: DeckType.getResolver('findByIds'),
  deckOne: DeckType.getResolver('findOne'),
  deckMany: DeckType.getResolver('findMany'),
  deckCount: DeckType.getResolver('count'),
  deckConnection: DeckType.getResolver('connection'),
});

// Add fields and resolvers to Mutation
schemaComposer.Mutation.addFields({
  deckCreateOne: DeckType.getResolver('createOne'),
  deckUpdateById: DeckType.getResolver('updateById'),
  deckRemoveById: DeckType.getResolver('removeById'),
});
