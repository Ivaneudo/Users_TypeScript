import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import type { User } from './user.interface';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): User[] {
    return this.userService.getUsers();
  }

  @Post()
  postUsers(@Body() newUser: User): User {
    return this.userService.postUsers(newUser);
  }

  @Put(':id')
  putUser(@Param('id') id: number, @Body() userData: User): User {
    return this.userService.putUser(id, userData);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
