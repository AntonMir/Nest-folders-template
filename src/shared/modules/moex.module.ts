import { Module } from '@nestjs/common';
import { MoexService } from '../../services/moex.service';
import { MoexController } from '../../controllers/http/moex.controller';

@Module({
  providers: [MoexService],
  controllers: [MoexController],
})
export class MoexModule {}
