import { NotFoundException } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  // Subscription,
} from '@nestjs/graphql';
// import { PubSub } from 'apollo-server-express';
import { NewCandidateInput } from './dto/new-candidate.input';
// import { RecipesArgs } from './dto/recipes.args';
import { Candidate } from './models/candidates.model';
import { CandidateService } from './candidates.service';

// const pubSub = new PubSub();

@Resolver((of) => Candidate)
export class CandidateResolver {
  constructor(private readonly candidateService: CandidateService) {}

  @Query((returns) => Candidate)
  async candidate(@Args('id') id: string): Promise<Candidate> {
    const candidate = await this.candidateService.findOneById(id);
    if (!candidate) {
      throw new NotFoundException(id);
    }
    return candidate;
  }

  @Query((returns) => [Candidate])
  candidates(/* @Args() recipesArgs: RecipesArgs */): Promise<Candidate[]> {
    return this.candidateService.findAll(/* recipesArgs */);
  }

  @Mutation((returns) => Candidate)
  async addCandidate(
    @Args('newCandidateData') newCandidateData: NewCandidateInput,
  ): Promise<Candidate> {
    const candidate = await this.candidateService.create(newCandidateData);
    // pubSub.publish('recipeAdded', { recipeAdded: recipe });
    return candidate;
  }

  @Mutation((returns) => Boolean)
  async removeCandidate(@Args('id') id: string) {
    return this.candidateService.remove(id);
  }

  // @Subscription((returns) => Candidate)
  // recipeAdded() {
  //   return pubSub.asyncIterator('recipeAdded');
  // }
}
