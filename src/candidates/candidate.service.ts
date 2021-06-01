import { Injectable } from '@nestjs/common';
import { NewCandidateInput } from './dto/new-candidate.input';
// import { RecipesArgs } from './dto/recipes.args';
import { Candidate } from './candidate.model';

@Injectable()
export class CandidateService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */

  async create(data: NewCandidateInput): Promise<Candidate> {
    console.log(data);
    return {} as any;
  }

  async findOneById(id: string): Promise<Candidate> {
    console.log(id);
    return {} as any;
  }

  async findAll(/* recipesArgs: RecipesArgs */): Promise<Candidate[]> {
    return [] as Candidate[];
  }

  async remove(id: string): Promise<boolean> {
    console.log(id);
    return true;
  }
}
