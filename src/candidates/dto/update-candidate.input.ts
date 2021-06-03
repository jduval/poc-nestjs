import { IsOptional, Length, MaxLength } from 'class-validator';
import { UpdateCandidateInput } from '../../graphql-candidates';

export class UpdateCandidateDto extends UpdateCandidateInput {
  @MaxLength(30)
  id: string;

  @MaxLength(30)
  name: string;

  @IsOptional()
  @Length(30, 255)
  resume?: string;

  skills: string[];
}
