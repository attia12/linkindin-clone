import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedModule } from './feed/feed.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/nest'), FeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
