import { requireAuth } from "../../lib/auth";
import { getCampaignsFromUser } from "../../lib/sheets";

export default async function handler(req, res) {
  const session = await requireAuth(req, res);
  if (!session) return;

  if (req.method === "GET") {
    try {
      const campaigns = await getCampaignsFromUser(req);
      res.status(200).json({ campaigns });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
