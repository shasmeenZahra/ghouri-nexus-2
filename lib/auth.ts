import jwt from 'jsonwebtoken';
import { NextApiRequest, NextApiResponse } from 'next';

interface DecodedToken {
  username: string;
  iat: number;
  exp: number;
}

export function verifyToken(req: NextApiRequest, res: NextApiResponse): DecodedToken | { message: string } {
  const authHeader = req.headers.authorization;

  if (!authHeader) return { message: 'No token' };

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, 'secret-key') as DecodedToken;
    return decoded;
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
    return { message: 'Invalid token' };
  }
}
