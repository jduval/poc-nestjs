import { NotFoundException } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Candidate } from '../graphql-candidates';
import { CandidateService } from './candidates.service';
import { UpdateCandidateDto } from './dto/update-candidate.input';

@Resolver((of) => Candidate)
export class CandidateResolver {
  constructor(private readonly candidateService: CandidateService) {}

  @Query((returns) => Candidate)
  async me(@Context() ctx): Promise<Candidate> {
    // TODO: use ID from context
    const candidate = await this.candidateService.findOneById('1');
    if (!candidate) {
      throw new NotFoundException('1');
    }
    return candidate;
  }

  @Mutation((returns) => Boolean)
  async updateMe(
    @Args('updateCandidateData') updateCandidateData: UpdateCandidateDto,
    @Context() ctx,
  ) {
    // TODO: replace by the ID from context
    updateCandidateData.id = '1';
    return this.candidateService.update(updateCandidateData);
  }
}
