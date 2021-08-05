import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../database/repositories/ComplimentsRepository";

class ListUserReceivedComplimentsService {

  async execute(user_id: string) {
    const complimentsRepository = getCustomRepository(ComplimentsRepository);
    const receivedCompliments = await complimentsRepository.find({
      where: { user_receiver: user_id },
    });
    return receivedCompliments;
  }

}

export { ListUserReceivedComplimentsService };