import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../models/PostInterface';
import { Observable } from 'rxjs';
import { PostUpdate } from '../Dto/PostUpdateRequest';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}
  @Post()
  create(@Body() post: FeedPost): Observable<FeedPost> {
    return this.feedService.createPost(post);
  }
  @Get()
  findAll(): Observable<FeedPost[]> {
    return this.feedService.findAllPost();
  }
  @Put('/:id')
  updatePost(@Param('id') id: string, @Body() post: PostUpdate) {
    return this.feedService.updatePost(id, post);
  }
  @Delete('/:id')
  deletePost(@Param('id') id: string): Observable<any> {
    return this.feedService.deletePost(id);
  }
}
