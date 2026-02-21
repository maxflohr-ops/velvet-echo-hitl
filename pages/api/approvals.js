export default async function handler(req, res) {
  if (req.method === 'GET') {
    return res.json({ approvals: [] });
  }
  if (req.method === 'POST') {
    const payload = req.body;
    return res.json({ ok: true, approval: payload });
  }
  res.status(405).end();
}
