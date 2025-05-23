"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postgresql_1 = require("@mikro-orm/postgresql");
const Post_1 = require("./entities/Post");
const constants_1 = require("./constants");
exports.default = (0, postgresql_1.defineConfig)({
    migrations: {
        path: postgresql_1.Utils.detectTsNode() ? "src/migrations" : "dist/migrations",
        glob: "!(*.d).{js,ts}",
    },
    entities: [Post_1.Post],
    dbName: "reddit_v2",
    user: "postgres",
    password: "pratik@1998",
    debug: !constants_1.__prod__,
    driver: postgresql_1.PostgreSqlDriver,
});
//# sourceMappingURL=mikro-orm.config.js.map