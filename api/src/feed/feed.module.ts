import { Module } from '@nestjs/common';
import { FeedService } from './services/feed.service';
import { FeedController } from './contollers/feed.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedPostEntity, FeedPostSchema } from './models/PostSchema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: FeedPostEntity.name,
        schema: FeedPostSchema,
      },
    ]),
  ],
  providers: [FeedService],
  controllers: [FeedController],
})
export class FeedModule {}
