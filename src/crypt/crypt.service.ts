import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class CryptService {
  constructor(@Inject('MICROSERVICE') private client: ClientProxy) { }

  async generateHash(data: any, saltOrRounds: string | number) {
    return this.client.send('crypt/getHash', { data, saltOrRounds });
  }

  async compareHash(data: any, hash: string) {
    return this.client.send('crypt/compare', { data, hash });
  }

}
