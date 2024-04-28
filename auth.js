import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import clientPromise from "./helper/clientPromise";
import authConfig from "./auth.config";

export const { handlers, auth } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: { strategy: "jwt" },
  callbacks: {
    session: async ({ session, token }) => {
      session.user = {
        id: token.sub,
        ...token,
      };
      return session;
    },
  },
  ...authConfig,
});
