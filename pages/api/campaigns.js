export default async function handler(req, res) {
  if (req.method === 'GET') {
    res.json({ campaigns: [] });
  } else {
    res.status(405).end();
  }
}
