import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('%cconfiguration/src/app.controller.ts:10 ', 'color: #007acc;');
    console.log('%cconfiguration/src/app.controller.ts:10 ', 'color: #007acc;');
    return this.appService.getHello();
  }
}
