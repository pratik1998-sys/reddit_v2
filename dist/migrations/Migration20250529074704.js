"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250529074704 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250529074704 extends migrations_1.Migration {
    up() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql(`create table "user" ("id" serial primary key, "created_at" timestamptz not null, "updated_at" timestamptz not null, "username" text not null, "password" text not null);`);
            this.addSql(`alter table "user" add constraint "user_username_unique" unique ("username");`);
        });
    }
    down() {
        return __awaiter(this, void 0, void 0, function* () {
            this.addSql(`drop table if exists "user" cascade;`);
        });
    }
}
exports.Migration20250529074704 = Migration20250529074704;
//# sourceMappingURL=Migration20250529074704.js.map