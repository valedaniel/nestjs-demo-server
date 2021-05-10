import { Test, TestingModule } from '@nestjs/testing';
import { CryptController } from './crypt.controller';
import { CryptService } from './crypt.service';

describe('CryptController', () => {
  let controller: CryptController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CryptController],
      providers: [CryptService],
    }).compile();

    controller = module.get<CryptController>(CryptController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
