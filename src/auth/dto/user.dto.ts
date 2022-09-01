import { IsNotEmpty } from 'class-validator';

export class CreateUser {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
