import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../database/repositories/UsersRepository';
import { hash } from 'bcryptjs';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {

  async execute({ name, email, admin, password }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepository);
    if (!email) { throw new Error('Invalid email'); }
    const userAlreadyExists = await usersRepository.findOne({ email });
    if (userAlreadyExists) { throw new Error('User already exists'); }
    const passwordHash = await hash(password, 8);
    const user = usersRepository.create({ name, email, admin, password: passwordHash });
    await usersRepository.save(user);
    return user;
  }

}

export { CreateUserService };
