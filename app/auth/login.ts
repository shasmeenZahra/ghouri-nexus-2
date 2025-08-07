import type { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  if (username === 'admin' && password === '1234') {
    const token = jwt.sign({ username }, 'secret-key', { expiresIn: '1h' });
    return res.status(200).json({ token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
}
