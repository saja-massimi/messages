import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import {ValidationPipe} from '@nestjs/common/pipes/validation.pipe';


async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  app.useGlobalPipes(
    new ValidationPipe()
);

  await app.listen(3000); 
}
bootstrap();
