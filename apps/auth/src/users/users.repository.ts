import { AbstractRepository } from '@app/common';
import { Users } from './models/users.schema';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository extends AbstractRepository<Users> {
  protected readonly logger = new Logger(UsersRepository.name);

  constructor(@InjectModel(Users.name) userModel: Model<Users>) {
    super(userModel);
  }
}
