import { Module } from '@nestjs/common';
import { CandidateResolver } from './candidates.resolver';
import { CandidateService } from './candidates.service';

@Module({
  providers: [CandidateResolver, CandidateService],
})
export class CandidatesModule {}
