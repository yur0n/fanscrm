import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) {}

  async create(userDto: Partial<User>): Promise<User> {
    return this.userModel.create(userDto);
  }

  async findOne(id: number): Promise<User> {
    return this.userModel.findByPk(id);
  }
}

