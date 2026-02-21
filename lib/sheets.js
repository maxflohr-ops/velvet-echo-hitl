import { google } from "googleapis";
import { getSession } from "next-auth/react";

function sheetsClientFromToken(accessToken) {
  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({ access_token: accessToken });
  return google.sheets({ version: "v4", auth: oauth2Client });
}

export async function getCampaignsFromUser(req) {
  const session = await getSession({ req });
  if (!session?.accessToken) {
    throw new Error("No access token in session");
  }

  const sheets = sheetsClientFromToken(session.accessToken);
  const sheetId = process.env.SHEET_ID;
  const range = `${process.env.SHEET_TAB_CAMPAIGNS}!A1:Z1000`;

  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range
    });

    const rows = res.data.values || [];
    if (rows.length === 0) return [];

    const headers = rows[0] || [];
    return rows.slice(1).map((r) =>
      headers.reduce((acc, h, i) => {
        acc[h] = r[i] || "";
        return acc;
      }, {})
    );
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    throw error;
  }
}

export async function addDraftForUser(req, draft) {
  const session = await getSession({ req });
  if (!session?.accessToken) {
    throw new Error("No access token in session");
  }

  const sheets = sheetsClientFromToken(session.accessToken);
  const sheetId = process.env.SHEET_ID;
  const range = `${process.env.SHEET_TAB_DRAFTS}!A:Z`;

  try {
    const res = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[
          draft.id || "",
          draft.name || "",
          draft.platform || "",
          draft.target || "",
          draft.budget || "",
          draft.status || "draft",
          new Date().toISOString()
        ]]
      }
    });

    return res.data;
  } catch (error) {
    console.error("Error adding draft:", error);
    throw error;
  }
}

export async function getApprovalsForUser(req) {
  const session = await getSession({ req });
  if (!session?.accessToken) {
    throw new Error("No access token in session");
  }

  const sheets = sheetsClientFromToken(session.accessToken);
  const sheetId = process.env.SHEET_ID;
  const range = `${process.env.SHEET_TAB_APPROVALS}!A1:Z1000`;

  try {
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range
    });

    const rows = res.data.values || [];
    if (rows.length === 0) return [];

    const headers = rows[0] || [];
    return rows.slice(1).map((r) =>
      headers.reduce((acc, h, i) => {
        acc[h] = r[i] || "";
        return acc;
      }, {})
    );
  } catch (error) {
    console.error("Error fetching approvals:", error);
    throw error;
  }
}
