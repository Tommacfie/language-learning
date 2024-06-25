import { schemaComposer } from 'graphql-compose';
import { composeWithMongoose } from 'graphql-compose-mongoose';
import mongoose from 'mongoose';

// Mongoose model
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});
const UserModel = mongoose.model('User', UserSchema);

// Generate GraphQL Type
const UserType = composeWithMongoose(UserModel);

// Add fields and resolvers to rootQuery
schemaComposer.Query.addFields({
  // userById: UserType.getResolver('findById'),
  userByIds: UserType.getResolver('findByIds'),
  userOne: UserType.getResolver('findOne'),
  userMany: UserType.getResolver('findMany'),
  userCount: UserType.getResolver('count'),
  userConnection: UserType.getResolver('connection'),
});

// Add fields and resolvers to Mutation
schemaComposer.Mutation.addFields({
  userCreateOne: UserType.getResolver('createOne'),
  userUpdateById: UserType.getResolver('updateById'),
  userRemoveById: UserType.getResolver('removeById'),
});
