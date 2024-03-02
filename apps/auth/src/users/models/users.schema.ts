import { AbstractSchema } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class Users extends AbstractSchema {
  @Prop()
  email: string;
  @Prop()
  password: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);
