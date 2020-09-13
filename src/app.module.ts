import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestNextModule } from './next/nest-next.module';
const dev = process.env.NODE_ENV !== 'production';
@Module({
  imports: [NestNextModule.forRoot({dev})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
