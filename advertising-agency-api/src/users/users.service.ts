import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { User } from 'src/dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly databaseService: DatabaseService) {}

  async onModuleInit() {
    if (await this.findOne('qwe')) return;
    this.databaseService.user.create({
      data: {
        id: 0,
        login: 'qwe',
        passwordCash: 'ewq',
        role: 'User',
        posts: null,
      },
    });
  }

  async findOne(login: string): Promise<User> {
    return (await this.databaseService.user.findFirst({
      where: {
        login: login,
      },
    })) as User;
  }
}
