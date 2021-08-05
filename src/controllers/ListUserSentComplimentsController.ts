import { Request, Response } from 'express';
import { ListUserSentComplimentsService } from '../services/ListUserSentComplimentsService';

class ListUserSentComplimentsController {

  async handle(req: Request, res: Response) {
    const { user_id } = req.body.user_id ? req.body : req;
    const listUserSentComplimentsService = new ListUserSentComplimentsService();
    const compliments = await listUserSentComplimentsService.execute(user_id);
    return res.json(compliments);
  }
}

export { ListUserSentComplimentsController };
