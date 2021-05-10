import { Module } from '@nestjs/common';

import { CryptService } from './crypt.service';
import { CryptController } from './crypt.controller';
import { ClientModule } from '../client/client.module';

@Module({
  imports: [ClientModule.register()],
  controllers: [CryptController],
  providers: [CryptService]
})
export class CryptModule { }
