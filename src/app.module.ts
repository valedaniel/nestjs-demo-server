import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MathModule } from './math/math.module';
import { CryptModule } from './crypt/crypt.module';

@Module({
  imports: [
    MathModule,
    CryptModule,
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ]
})
export class AppModule { }
