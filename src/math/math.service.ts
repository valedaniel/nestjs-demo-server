import { Inject, Injectable } from '@nestjs/common';

import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class MathService {
  constructor(@Inject('MICROSERVICE') private client: ClientProxy) { }

  accumulate(data: number[]) {
    return this.client.send('math/sum', data);
  }

  subtract(data: number[]) {
    return this.client.send('math/sub', data);
  }

  multiply(data: number[]) {
    return this.client.send('math/multi', data);
  }

  division(data: number[]) {
    return this.client.send('math/div', data);
  }

}
