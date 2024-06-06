import { ProfileLayout } from "./[profile]";
import React, { useEffect, useState } from "react";

import { useQuery, useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

export default function Profile() {
  // Convex API.
  const convex = useConvex();

  // Get the user's information.
  const [myUser, setMyUser] = useState<{
    _id: Id<"user">;
    _creationTime: number;
    user_id: string;
    username: string;
    ranking: number;
    gamesPlayed: number;
    points: number;
    completionRate: number;
    correctAnswers: number;
    wrongAnswers: number;
  }>();
  // Render the profile layout

  useEffect(() => {
    const loadMyUser = async () => {
      const myUser = await convex.query(api.user.myUser);
      if (myUser) {
        setMyUser(myUser);
      }
    };
    loadMyUser();
  }, []);

  return <ProfileLayout user={myUser} ownUser />;
}
