import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Candidate {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field({ nullable: true })
  resume?: string;

  @Field()
  creationDate: Date;

  @Field(() => [String])
  skills: string[];
}
