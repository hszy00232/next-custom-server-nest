import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { NextResponse } from './next/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  index(@Res() res:NextResponse){
    res.nextRender('/index')
  }
  @Get('hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
