import { PageConfig, NextApiRequest } from "next";
import Cors from "micro-cors";
import { ApolloServer } from "apollo-server-micro";
import { typeDefs } from "./schemas";
import { resolvers } from "./resolvers";
import { getSession } from "next-auth/react";

const cors = Cors();

// const createContext = async ({ req }: { req: NextApiRequest }) => {
//   const session = await getSession({ req });

//   console.log('ctx', session)

//   return {
//     session
//   }
// };

const server = new ApolloServer({ 
  typeDefs, 
  resolvers
});

const startServer = server.start();

export default cors(async (req, res) => { 

  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
});

export const config: PageConfig =  {
  api: {
    bodyParser: false
  }
};