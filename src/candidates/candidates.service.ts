import { Injectable } from '@nestjs/common';
import { NewCandidateInput } from './dto/new-candidate.input';
// import { RecipesArgs } from './dto/recipes.args';
import { Candidate } from './models/candidates.model';
import { ID } from '@nestjs/graphql';

@Injectable()
export class CandidateService {
  /**
   * MOCK
   * Put some real business logic here
   * Left for demonstration purposes
   */
  private readonly candidates: Array<Candidate> = [];

  async create(data: NewCandidateInput): Promise<Candidate> {
    console.log(data);
    const newCandidate = {
      id: (this.candidates.length + 1).toString(),
      creationDate: new Date(),
      ...data,
    } as Candidate;
    this.candidates.push(newCandidate);
    return newCandidate;
  }

  async findOneById(id: string): Promise<Candidate> {
    return this.candidates.find((candidate) => candidate.id === id);
  }

  async findAll(/* recipesArgs: RecipesArgs */): Promise<Candidate[]> {
    return this.candidates;
  }

  async remove(id: string): Promise<boolean> {
    const indexToBeRemoved = this.candidates.findIndex(
      (candidate) => candidate.id === id,
    );
    if (indexToBeRemoved === -1) {
      return false;
    }
    this.candidates.splice(indexToBeRemoved, 1);
    return true;
  }
}
