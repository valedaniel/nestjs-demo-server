import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { MathService } from './math.service';
import { MathController } from './math.controller';

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
  controllers: [MathController],
  providers: [MathService]
})
export class MathModule { }
