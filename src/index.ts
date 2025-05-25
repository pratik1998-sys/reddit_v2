import { __prod__ } from "./constants";
import ormConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import cors from "cors";
import { expressMiddleware } from "@as-integrations/express4";
import { PostResolver } from "./resolvers/post";
import { MyContext } from "./types";
import { MikroORM } from "@mikro-orm/postgresql";
import { buildSchema } from "type-graphql";

const main = async () => {
  const orm = await MikroORM.init(ormConfig);
  await orm.getMigrator().up();

  const app = express();
  const httpServer = http.createServer(app);

  const schema = await buildSchema({
    resolvers: [PostResolver],
    validate: false,
  });

  const apolloServer = new ApolloServer<MyContext>({
    // typeDefs,
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await apolloServer.start();

  app.use(cors<cors.CorsRequest>());
  app.use(express.json());

  app.use(
    "/graphql",
    expressMiddleware(apolloServer, {
      context: async () => ({ em: orm.em.fork() }),
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);

  //   app.listen(4000, () => {
  //     console.log("server startd on localhost:4000");
  //   });
  // const em = orm.em.fork(); // ✅ Create a request-scoped EntityManager

  // const post = em.create(Post, { title: "my second post" });
  // await em.persistAndFlush(post);

  //   const posts = await em.find(Post, {});
  //   console.log(posts);
};

main().catch((err) => {
  console.error(err);
});
