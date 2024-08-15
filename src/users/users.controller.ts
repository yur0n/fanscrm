import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.model';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('api/v1')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add-user')
  @UseGuards(JwtAuthGuard)
  async addUser(@Body() userDto: Partial<User>) {
    const user = await this.usersService.create(userDto);
    console.log('User Created:', user);
    return user;
  }

  @Get('get-user/:id')
  @UseGuards(JwtAuthGuard)
  async getUser(@Param('id') id: number) {
    const user = await this.usersService.findOne(id);
    if (user) {
      console.log('User Retrieved:', user);
      return user;
    } else {
      return { message: 'User not found' };
    }
  }
}