import { IsOptional, Length, MaxLength } from 'class-validator';
import { NewCandidateInput } from '../../graphql-admins';

export class NewCandidateDto extends NewCandidateInput {
  @MaxLength(30)
  name: string;

  @IsOptional()
  @Length(30, 255)
  resume?: string;

  skills: string[];
}
