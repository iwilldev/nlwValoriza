import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../database/repositories/UsersRepository";

interface IAuthenticationRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticationRequest) {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findOne({ email });
    if (!user) { throw new Error("Invalid email/password"); }
    const passwordIsValid = await compare(password, user.password);
    if (!passwordIsValid) { throw new Error("Invalid email/password"); }
    const token = sign(
      { email: user.email },
      process.env.JWT_SECRET,
      { subject: user.id, expiresIn: "1h" }
    );
    return token;
  }

}

export { AuthenticateUserService };