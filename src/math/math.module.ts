import { Module } from '@nestjs/common';

import { MathService } from './math.service';
import { MathController } from './math.controller';
import { ClientModule } from '../client/client.module';

@Module({
  imports: [ClientModule.register()],
  controllers: [MathController],
  providers: [MathService]
})
export class MathModule { }
