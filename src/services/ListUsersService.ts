import { classToPlain } from 'class-transformer'
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../database/repositories/UsersRepository';

class ListUsersService {

  async execute() {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.find();
    return classToPlain(users);
  }

}

export { ListUsersService };
