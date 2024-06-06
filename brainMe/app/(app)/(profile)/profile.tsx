import { ProfileLayout } from "./[profile]";
import React from "react";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Profile() {
  // Convex API.
  const myUser = useQuery(api.user.myUser);

  return <ProfileLayout user={myUser} ownUser />;
}
