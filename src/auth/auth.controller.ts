import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUser } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUser) {
    return this.authService.createUser(createUserDto);
  }

  @Post('signin')
  async signIn(@Body() createUserDto: CreateUser) {
    return this.authService.signIn(createUserDto);
  }
}
