import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewCandidateDto } from '../candidates/dto/new-candidate.input';
import { UpdateCandidateDto } from '../candidates/dto/update-candidate.input';
import { Candidate } from '../graphql-candidates';
import { CandidateService } from '../candidates/candidates.service';

@Resolver((of) => Candidate)
export class AdminResolver {
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
  async candidates(): Promise<Candidate[]> {
    return this.candidateService.findAll(/* recipesArgs */);
  }

  @Mutation((returns) => Candidate)
  async addCandidate(
    @Args('newCandidateData') newCandidateData: NewCandidateDto,
  ): Promise<Candidate> {
    const candidate = await this.candidateService.create(newCandidateData);
    return candidate;
  }

  @Mutation((returns) => Boolean)
  async removeCandidate(@Args('id') id: string) {
    return this.candidateService.remove(id);
  }

  @Mutation((returns) => Boolean)
  async updateCandidate(
    @Args('updateCandidateData') updateCandidateData: UpdateCandidateDto,
  ) {
    return this.candidateService.update(updateCandidateData);
  }
}
