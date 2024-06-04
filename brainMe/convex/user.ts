import { Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// This mutation inserts a new user into the database.
export const add = mutation({
  args: {
    username: v.string(),
    ranking: v.number(),
    gamesPlayed: v.number(),
    points: v.number(),
    completionRate: v.number(),
    correctAnswers: v.number(),
    wrongAnswers: v.number(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    const { tokenIdentifier } = identity!;
    await ctx.db.insert("user", { ...args, user_id: tokenIdentifier });
  },
});

// This query returns all profiles.
export const getUser = query({
  handler: async (ctx) => {
    return await ctx.db.query("user").collect();
  },
});
