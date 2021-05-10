import { Test, TestingModule } from '@nestjs/testing';

import { MathService } from './math.service';

import { ClientModule } from '../client/client.module';

describe('MathService', () => {
  let service: MathService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ClientModule.register()],
      providers: [MathService],
    }).compile();

    service = module.get<MathService>(MathService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
