import NextAuth from "next-auth"
import authConfig from "./auth.config";
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import client from "./lib/db"
import getDbClient from "./lib/db-client";
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  callbacks: {
    signIn: async ({
      user,
      account,
      credentials
    }) => {
      const mongoClient = getDbClient();
      const connectedClient = await mongoClient.connect();
      const userInDB = await connectedClient.db('admin-panel').collection('users').findOne({email: user.email});
      if (userInDB) {
        return true;
      }
      await connectedClient.db('admin-panel').collection('users').insertOne({...user, role: 'ADMIN'});
      return true;
    },
  },
  ...authConfig
})