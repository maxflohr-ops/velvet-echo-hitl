import { getSession } from "next-auth/react";

export async function requireAuth(req, res) {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: "Unauthorized" });
    return null;
  }
  return session;
}

export async function getAuthSession(req) {
  return await getSession({ req });
}
