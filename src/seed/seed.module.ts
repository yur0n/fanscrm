import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeedService } from './seed.service';
import { User } from '../users/user.model';

@Module({
	imports: [SequelizeModule.forFeature([User])],
  providers: [SeedService]
})
export class SeedModule {}

