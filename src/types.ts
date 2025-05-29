import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import { PostgreSqlDriver, SqlEntityManager } from "@mikro-orm/postgresql";
import { Field, InputType, ObjectType } from "type-graphql";
import { Post } from "./entities/Post";
import { User } from "./entities/User";

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

@InputType()
export class UserPasswordInput {
  @Field()
  username: string;

  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;

  @Field()
  message: string;
}

@ObjectType()
export class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  user?: User;
}
