import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    { bodyParser: true, cors: true }
  );

  const configService: ConfigService = app.get(ConfigService);
  const PORT = configService.get('PORT') || 3000;

  app.use(helmet());

  await app.listen(PORT, () => console.log(`NestJS Demo Server is listening on port ${PORT}`));
}

bootstrap();
