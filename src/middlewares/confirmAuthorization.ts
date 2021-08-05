import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../database/repositories/UsersRepository';

export async function confirmAuthorization(req: Request, res: Response, next: NextFunction) {
  const { user_id } = req;
  const usersRepository = getCustomRepository(UsersRepository);
  const { admin } = await usersRepository.findOne(user_id);
  if (admin) { return next(); }
  return res.status(403).json({ error: 'Forbidden' });
}
