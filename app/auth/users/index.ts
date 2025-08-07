import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/db';
import User from '@/models/Users';
import { verifyToken } from '@/lib/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();

  const verified = verifyToken(req, res);
  if ('message' in verified) return;

  if (req.method === 'GET') {
    const users = await User.find();
    return res.status(200).json(users);
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
