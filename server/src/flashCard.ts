import mongoose from 'mongoose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

const { Schema, model } = mongoose;

// Mongoose model
const FlashCardSchema = new Schema({
  front: { type: String, required: true },
  back: { type: String, required: true },
  deck: { type: Schema.Types.ObjectId, ref: 'Deck' },
  cues: [String],
  tags: [String],
});

const FlashCardModel = model('FlashCard', FlashCardSchema);

// Generate GraphQL Type
const FlashCardType = composeWithMongoose(FlashCardModel, {
  fields: {
    remove: ['__v'],
  },
});

// Add fields and resolvers to rootQuery
schemaComposer.Query.addFields({
  flashCard: FlashCardType.getResolver('findById'),
  flashCards: FlashCardType.getResolver('findByIds'),
  flashCardOne: FlashCardType.getResolver('findOne'),
  flashCardMany: FlashCardType.getResolver('findMany'),
  flashCardCount: FlashCardType.getResolver('count'),
  flashCardConnection: FlashCardType.getResolver('connection'),
});

// Add fields and resolvers to Mutation
schemaComposer.Mutation.addFields({
  flashCardCreateOne: FlashCardType.getResolver('createOne'),
  flashCardUpdateById: FlashCardType.getResolver('updateById'),
  flashCardRemoveById: FlashCardType.getResolver('removeById'),
});
