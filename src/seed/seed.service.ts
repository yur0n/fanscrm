import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../users/user.model';
import { faker } from '@faker-js/faker';

@Injectable()
export class SeedService implements OnModuleInit {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}

  async onModuleInit() {
    await this.seedUsers(25);
  }

  async seedUsers(count: number): Promise<void> {
		const users = Array.from({ length: count }).map(() => {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();
      const name = `${firstName} ${lastName}`
      const email = faker.internet.email({ firstName, lastName });
      const phone = '+' + faker.string.numeric(12);
      
      return { name, email, phone };
    });
    
    await this.userModel.bulkCreate(users);
    console.log(`${count} users have been seeded`);
  }
}
