import { Injectable } from '@nestjs/common';
import { CreateUserInput } from '../dto/create-user.input';
import { UpdateUserInput } from '../dto/update-user.input';
import { UserModel } from '../models/user.model';

@Injectable()
export class UsersService {
  private readonly users: UserModel[] = [
    { id: 1, name: 'John Doe', email: 'mreyes@gmail.com' },
  ];

  async createOne(createUserInput: CreateUserInput) {
    return new Promise((resolve) => {
      const user = { id: this.users.length + 1, ...createUserInput };
      this.users.push(user);
      resolve(user);
    });
  }

  async getMany() {
    return new Promise((resolve) => {
      resolve(this.users);
    });
  }

  async getOne(id: number) {
    return new Promise((resolve) => {
      resolve(this.users.find((user) => user.id === id));
    });
  }

  async updateOne(id: number, updateUserInput: UpdateUserInput) {
    return new Promise((resolve) => {
      const user = this.users.find((user) => user.id === id);
      const updatedUser = { ...user, ...updateUserInput };
      this.users.splice(this.users.indexOf(user), 1, updatedUser);
      resolve(updatedUser);
    });
  }

  async deleteOne(id: number) {
    return new Promise((resolve) => {
      const user = this.users.find((user) => user.id === id);
      this.users.splice(this.users.indexOf(user), 1);
      resolve(user);
    });
  }
}
