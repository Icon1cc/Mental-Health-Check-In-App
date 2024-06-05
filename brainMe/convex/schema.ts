import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  user: defineTable({
    user_id: v.string(),
    username: v.string(),
    ranking: v.number(),
    gamesPlayed: v.number(),
    points: v.number(),
    completionRate: v.number(),
    correctAnswers: v.number(),
    wrongAnswers: v.number(),
  }),
});
