import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../database/repositories/ComplimentsRepository";

class ListUserSentComplimentsService {

  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);
    const receivedCompliments = await complimentsRepository.find({
      where: { user_sender: user_id },
    });
    return receivedCompliments;
  }

}

export { ListUserSentComplimentsService };