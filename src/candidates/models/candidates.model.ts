import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Candidate {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  resume?: string;

  @Field()
  creationDate: Date;

  @Field((type) => [String])
  skills: string[];
}
