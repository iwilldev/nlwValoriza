import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import { TagsRepository } from '../database/repositories/TagsRepository';

class ListTagsService {

  async execute() {
    const tagsRepository = getCustomRepository(TagsRepository);
    const tags = await tagsRepository.find();
    return classToPlain(tags);
  }

}

export { ListTagsService };
