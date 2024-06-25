import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import Mongoose from 'mongoose';
import { DB, PORT } from './config';
import { compiledSchema } from './src';
import { consoleLog, logWithDate } from './src/utils/logging';

// Create an express app
const app = express();

// Setup Apollo/GraphQL Server
const server = new ApolloServer({ schema: compiledSchema });

const mongoose = Mongoose;
console.log(DB);

const startServer = async () => {
  mongoose.connect(`mongodb://localhost:27017/polish-app-db`);
  mongoose.connection.on('connected', () => {
    if (process.env.NODE_ENV != 'test') {
      logWithDate('✅ Connected to mongodb');
    }
  });

  mongoose.connection.on('error', (error) => {
    if (error) {
      consoleLog('❌ error: ' + error);
      return;
    }
  });

  mongoose.connection.on('close', (error) => {
    if (error) {
      consoleLog('❌ error: ' + error);
      return;
    }
    if (process.env.NODE_ENV != 'test') {
      logWithDate('🔚 Disconnected from mongodb');
    }
  });
  await server.start();
  server.applyMiddleware({ app });
};

startServer();

app.listen({ port: PORT }, () => {
  logWithDate(`✅ Server ready at http://localhost:4000/graphql`);
});
