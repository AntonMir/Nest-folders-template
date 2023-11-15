import { Test, TestingModule } from '@nestjs/testing';
import { MoexService } from './moex.service';

describe('MoexService', () => {
  let service: MoexService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoexService],
    }).compile();

    service = module.get<MoexService>(MoexService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
