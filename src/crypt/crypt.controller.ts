import { Controller, Post, Body } from '@nestjs/common';
import { CryptService } from './crypt.service';

@Controller('crypt')
export class CryptController {
  constructor(private readonly cryptService: CryptService) { }

  @Post('/generate_hash')
  async generateHash(@Body('data') data: any, @Body('saltOrRounds') saltOrRounds: string | number) {
    return this.cryptService.generateHash(data, saltOrRounds);
  }

  @Post('/compare_hash')
  async compareHash(@Body('data') data: any, @Body('hash') hash: string) {
    return this.cryptService.compareHash(data, hash);
  }

}
