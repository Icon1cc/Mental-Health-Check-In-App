import { Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// This mutation inserts a new user into the database.
export const addUser = mutation({
  args: {
    username: v.string(),
  },
  handler: async (ctx, args) => {
    await ctx.db.insert("user", { username: args.username });
  },
});

// This query returns all profiles.
export const getUser = query({
  handler: async (ctx) => {
    return await ctx.db.query("user").collect();
  },
});
