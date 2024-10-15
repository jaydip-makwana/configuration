import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const obj = {
      a: 'dd',
    };
    return 'Hello World!';
  }
}
