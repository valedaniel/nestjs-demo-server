import { Test, TestingModule } from '@nestjs/testing';

import { ClientModule } from '../client/client.module';

import { CryptService } from './crypt.service';

describe('CryptService', () => {
  let service: CryptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ClientModule.register()],
      providers: [CryptService],
    }).compile();

    service = module.get<CryptService>(CryptService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
