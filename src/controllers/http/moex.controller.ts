import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiNotFoundResponse } from '@nestjs/swagger';
import { MoexService } from '../../services/moex.service';

@ApiTags('moex')
@Controller('moex')
export class MoexController {
  constructor(private readonly moexService: MoexService) {}
  @ApiResponse({ status: 500, type: [Number] })
  @ApiNotFoundResponse({ description: 'nfdjfd' })
  @Get('xxx')
  getMany(@Query('data') data: string): string {
    return this.moexService.getHello(data);
  }
}
