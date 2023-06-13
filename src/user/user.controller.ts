import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dtos';
import { UserEntity } from './interfaces/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUserDto);
  }
  /*   @Post()
  async createUserDto(@Body() createUser: CreateUserDto): Promise<UserEntity> {
    return this.userService.createUser(createUser);
  } */

  @Get()
  async getAlUser(): Promise<UserEntity[]> {
    return this.userService.getAlUser();
  }
}
