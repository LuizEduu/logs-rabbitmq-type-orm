import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); //cria a aplicação rest

  //conecta o microservico para uso do rabbitmq
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ, //rabbitMQ
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'audit',
      queueOptions: {
        durable: true,
      },
    },
  });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  app.enableCors();

  await app.startAllMicroservices(); //incia todos os ms conectados
  await app.listen(3000);
}
bootstrap();
