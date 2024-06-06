import { Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// This mutation inserts a new user into the database.
export const add = mutation({
  args: {
    username: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    const { tokenIdentifier } = identity!;
    await ctx.db.insert("user", {
      ...args,
      ranking: 0,
      gamesPlayed: 0,
      points: 0,
      completionRate: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      user_id: tokenIdentifier,
    });
  },
});

// This query returns your user from the database
export const myUser = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    const { tokenIdentifier } = identity!;
    return await ctx.db
      .query("user")
      .filter((q) => q.eq(q.field("user_id"), tokenIdentifier))
      .unique();
  },
});

// This query retrieves all users from the database
export const collect = query({
  handler: async (ctx) => {
    return await ctx.db.query("user").collect();

    /*return Promise.all(
      users.map(async (user) => {
        if (user.file) {
          const url = await ctx.storage.getUrl(user.avatar);
          if (url) {
            return { ...user, avatar: url };
          }
          return user;
        }
      })
    );*/
  },
});
