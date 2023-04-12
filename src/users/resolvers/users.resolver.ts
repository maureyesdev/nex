import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from '../services/users.service';
import { UserModel } from '../models/user.model';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserModel)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createOne(createUserInput);
  }

  @Query(() => [UserModel], { name: 'users' })
  getUsers() {
    return this.usersService.getMany();
  }

  @Query(() => UserModel, { name: 'user' })
  getUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.getOne(id);
  }

  @Mutation(() => UserModel)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.updateOne(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => UserModel)
  deleteUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.deleteOne(id);
  }
}
