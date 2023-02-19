import { Controller, Get } from '@nestjs/common';

@Controller('test')
export default class TestController {
  @Get()
  getPostById() {
    return 9;
  }
}
