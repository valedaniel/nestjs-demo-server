import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { CryptService } from './crypt.service';
import { CryptController } from './crypt.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MICROSERVICE',
        transport: Transport.TCP,
        options: { port: 4000 },
      },
    ])
  ],
  controllers: [CryptController],
  providers: [CryptService]
})
export class CryptModule { }
