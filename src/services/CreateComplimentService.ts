import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../database/repositories/ComplimentsRepository";
import { UsersRepository } from "../database/repositories/UsersRepository";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {

  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);
    const usersRepository = getCustomRepository(UsersRepository);
    if (user_sender === user_receiver) { throw new Error("You can't send a compliment to yourself"); }
    const userReceiverExists = await usersRepository.findOne(user_receiver);
    if (!userReceiverExists) { throw new Error("Receiver does not exist"); }
    const compliment = complimentsRepository.create({
      tag_id, user_sender, user_receiver, message
    });
    await complimentsRepository.save(compliment);
    return compliment;
  }

}

export { CreateComplimentService };
