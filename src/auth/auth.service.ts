import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUser } from './dto/user.dto';
import { User } from './user.entity';
import { v4 as uuid } from 'uuid';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async createUser(userCredentials: CreateUser) {
    const newUser = new User();
    newUser.password = userCredentials.password;
    newUser.email = userCredentials.email;
    newUser.id = uuid();
    return await this.userRepository.save(newUser);
  }

  async signIn(userCredentials: CreateUser) {
    const user = await this.userRepository.findOne({
      where: {
        email: userCredentials.email,
      },
    });
    console.log(user.password);
    if (!user || user.password !== userCredentials.password) {
      throw new UnauthorizedException('password or email dont match');
    }

    return {
      access_token: this.jwtService.sign({
        id: user.id,
      }),
    };
  }
}
