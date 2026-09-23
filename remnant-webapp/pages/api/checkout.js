// Stripe checkout endpoint (stubbed).
// TODO: add the `stripe` package to package.json and implement a real
// Stripe Checkout Session here once product data is live.

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  return res.status(501).json({ error: 'Checkout is not implemented yet.' });
}
