// Product data endpoint (stubbed).
// TODO: fetch real product rows from Supabase once the catalog table exists.

export default function handler(req, res) {
  return res.status(501).json({ error: 'Product catalog is not implemented yet.' });
}
