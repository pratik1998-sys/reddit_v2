import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { PostgreSqlDriver, SqlEntityManager } from "@mikro-orm/postgresql";
import { Field, InputType } from "type-graphql";
import { Post } from "./entities/Post";

export type MyContext = {
  em: SqlEntityManager<PostgreSqlDriver> &
    EntityManager<IDatabaseDriver<Connection>>;
};

@InputType()
export class CreatePostInput implements Partial<Post> {
  @Field()
  title!: string;
}

@InputType()
export class UpdatePostInput implements Partial<Post> {
  @Field()
  id!: number;

  @Field({ nullable: true })
  title?: string;
}

@InputType()
export class DeletePostInput implements Partial<Post> {
  @Field()
  id!: number;
}
