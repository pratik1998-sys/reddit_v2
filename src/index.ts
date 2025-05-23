import { __prod__ } from "./constants";
// import { Post } from "./entities/Post";
import { MikroORM } from "@mikro-orm/core";
import ormConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(ormConfig);
  await orm.getMigrator().up();
  //   const em = orm.em.fork(); // ✅ Create a request-scoped EntityManager

  //   const post = em.create(Post, { title: "my first post" });
  //   await em.persistAndFlush(post);

  //   const posts = await em.find(Post, {});
  //   console.log(posts);
};

main().catch((err) => {
  console.error(err);
});
