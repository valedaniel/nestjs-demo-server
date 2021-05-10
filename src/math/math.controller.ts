import { Controller, Post, Body } from '@nestjs/common';

import { MathService } from './math.service';

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) { }

  @Post('/accumulate')
  accumulate(@Body('data') data: number[]) {
    return this.mathService.accumulate(data);
  }

  @Post('/subtract')
  subtract(@Body('data') data: number[]) {
    return this.mathService.subtract(data);
  }

  @Post('/multiply')
  multiply(@Body('data') data: number[]) {
    return this.mathService.multiply(data);
  }

  @Post('/division')
  division(@Body('data') data: number[]) {
    return this.mathService.division(data);
  }

}
