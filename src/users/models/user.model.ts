import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export class UserModel {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;
}
