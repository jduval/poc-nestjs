import { Module } from '@nestjs/common';
import { AdminResolver } from './admins.resolver';
import { CandidateService } from '../candidates/candidates.service';

@Module({
  providers: [AdminResolver, CandidateService],
})
export class AdminsModule {}
