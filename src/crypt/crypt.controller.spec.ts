import { Test, TestingModule } from '@nestjs/testing';
import { ClientModule } from '../client/client.module';

import { CryptController } from './crypt.controller';
import { CryptService } from './crypt.service';

describe('CryptController', () => {
  let controller: CryptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ClientModule.register()],
      controllers: [CryptController],
      providers: [CryptService],
    }).compile();

    controller = module.get<CryptController>(CryptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
