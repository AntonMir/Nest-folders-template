import { Module } from '@nestjs/common';
import { MoexModule } from './moex.module';
import { AppService } from '../../services/app.service';
import { AppController } from '../../controllers/http/app.controller';

@Module({
  imports: [MoexModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
