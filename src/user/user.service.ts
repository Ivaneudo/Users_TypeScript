import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
export class UserService {
  nextId: number = 1;
  user: User[] = [];

  getUsers(): User[] {
    return this.user;
  }

  postUsers(newUser: User): User {
    newUser.id = this.nextId++;
    this.user.push(newUser);

    return newUser;
  }

  putUser(id: number, userData: User): User {
    const index = this.user.findIndex((i: User) => i.id == id);
    const user = this.user[index];

    if (index < 0) {
      throw new NotFoundException(`Usuáiro com id ${id} não encontrado.`);
    }
    if (userData.name) {
      user.name = userData.name;
    }
    if (userData.age) {
      user.age = userData.age;
    }
    if (userData.uf) {
      user.uf = userData.uf;
    }

    this.user[index] = user;
    return user;
  }

  deleteUser(id: number): User {
    const index = this.user.findIndex((d: User) => d.id == id);

    if (index < 0) {
      throw new NotFoundException(`Usuáiro com id ${id} não encontrado.`);
    }

    const [removido] = this.user.splice(index, 1);

    return removido;
  }
}
