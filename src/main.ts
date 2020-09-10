import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import next from 'next';
async function bootstrap() {
  const server = await NestFactory.create(AppModule);
  const dev = process.env.NODE_ENV !== 'production';
  const app = next({ dev });
  await app.prepare();
  await server.listen(3000);
}
bootstrap();
