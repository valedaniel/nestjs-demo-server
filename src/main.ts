import { NestFactory } from '@nestjs/core';
import * as helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3000;
  const app = await NestFactory.create(
    AppModule,
    { bodyParser: true, cors: true }
  );
  app.use(helmet());

  await app.listen(PORT, () => console.log(`NestJS Demo Server is listening on port ${PORT}`));
}

bootstrap();
