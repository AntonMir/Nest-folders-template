import { Test, TestingModule } from '@nestjs/testing';
import { MoexController } from './moex.controller';

describe('MoexController', () => {
  let controller: MoexController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoexController],
    }).compile();

    controller = module.get<MoexController>(MoexController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
