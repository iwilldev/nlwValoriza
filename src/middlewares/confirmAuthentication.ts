import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export function confirmAuthentication(req: Request, res: Response, next: NextFunction) {
  const fullToken = req.headers.authorization;
  if (!fullToken) { return res.status(401).json({ error: 'Unauthorized' }); }
  const [, token] = fullToken.split(' ');
  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as IPayload;
    req.user_id = sub;
  } catch (err) { return res.status(401).json({ error: 'Unauthorized' }); }
  return next();
}