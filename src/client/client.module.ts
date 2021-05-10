import { DynamicModule, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [ConfigModule.forRoot()]
})
export class ClientModule {
  static register(): DynamicModule {
    return ClientsModule.register(
      [{
        name: 'MICROSERVICE',
        transport: Transport.TCP,
        options: { port: (process.env.PORT_CLIENT) ? Number(process.env.PORT_CLIENT) : 4000 },
      }]
    )
  }
}