import { User } from "../entities/User";
import { MyContext, UserPasswordInput, UserResponse } from "../types";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import argon2 from "argon2";

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UserPasswordInput,
    @Ctx() { em }: MyContext
  ) {
    if (options.username.length <= 2) {
      return {
        errors: [
          {
            field: "username",
            message: "length must be greater than 2",
          },
        ],
      };
    }
    if (options.password.length <= 6) {
      return {
        errors: [
          {
            field: "password",
            message: "length must be greater than 6",
          },
        ],
      };
    }

    const hashedPwd = await argon2.hash(options.password);
    const user = em.create(User, {
      username: options.username,
      password: hashedPwd,
    });
    try {
      await em.persistAndFlush(user);
    } catch (error) {
      //console.log(error);
      if (error.code === "23505") {
        return {
          errors: [
            {
              field: "username",
              message: "username already exist!",
            },
          ],
        };
      }
    }
    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UserPasswordInput,
    @Ctx() { em }: MyContext
  ) {
    const user = await em.findOne(User, { username: options.username });
    if (!user) {
      return {
        errors: [
          {
            field: "username",
            message: "user does not exist",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, options.password);
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "incorrect password!",
          },
        ],
      };
    }
    return {
      user,
    };
  }
}
