import { Injectable } from '@nestjs/common';

@Injectable()
export class MoexService {
  getHello(data: string): string {
    return data;
  }
}
