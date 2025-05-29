import { defineConfig, PostgreSqlDriver, Utils } from "@mikro-orm/postgresql";
import { Post } from "./entities/Post";
import { __prod__ } from "./constants";
import { User } from "./entities/User";

export default defineConfig({
  migrations: {
    path: Utils.detectTsNode() ? "src/migrations" : "dist/migrations",
    glob: "!(*.d).{js,ts}",
  },
  entities: [Post, User],
  dbName: "reddit_v2",
  user: "postgres",
  password: "pratik@1998",
  debug: !__prod__,
  driver: PostgreSqlDriver,
});
