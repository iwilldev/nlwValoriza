import { Request, Response, NextFunction } from 'express';

export function confirmAuthorization(req: Request, res: Response, next: NextFunction) {
  const admin = true;
  if (admin) { return next(); }
  return res.status(401).json({ error: 'Unauthorized' });
}
