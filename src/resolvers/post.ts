import { Post } from "../entities/Post";
import { CreatePostInput, MyContext, UpdatePostInput } from "../types";
import { Arg, Ctx, Int, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(@Ctx() { em }: MyContext): Promise<Post[]> {
    return em.find(Post, {});
  }

  @Query(() => Post, { nullable: true })
  post(
    @Arg("id", () => Int) id: number,
    @Ctx() { em }: MyContext
  ): Promise<Post | null> {
    return em.findOne(Post, { id });
  }

  @Mutation(() => [Post], { nullable: true })
  async createPost(
    @Arg("data") newPostData: CreatePostInput,
    @Ctx() { em }: MyContext
  ): Promise<Post[]> {
    console.log(newPostData);
    await em.persistAndFlush(em.create(Post, newPostData));
    return em.find(Post, {});
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg("data") updatedPostData: UpdatePostInput,
    @Ctx() { em }: MyContext
  ): Promise<Post | null> {
    console.log(updatedPostData);
    const findExistingPost = await em.findOne(Post, { id: updatedPostData.id });
    if (!findExistingPost) {
      return null;
    }
    if (typeof updatedPostData.title !== "undefined") {
      findExistingPost.title = updatedPostData.title;
    }
    await em.persistAndFlush(findExistingPost);

    return em.findOne(Post, { id: updatedPostData.id });
  }

  @Mutation(() => Boolean)
  async deletePost(
    @Arg("id") id: number,
    @Ctx() { em }: MyContext
  ): Promise<boolean> {
    const result = await em.nativeDelete(Post, { id });
    return result > 0;
  }
}
