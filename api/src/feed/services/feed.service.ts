import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FeedPostEntity } from '../models/PostSchema';
import { FeedPost } from '../models/PostInterface';
import { Observable, from } from 'rxjs';
import { PostUpdate } from '../Dto/PostUpdateRequest';

@Injectable()
export class FeedService {
  constructor(
    @InjectModel(FeedPostEntity.name)
    private readonly feedPostEntityModel: Model<FeedPostEntity>,
  ) {}
  createPost(feedPost: FeedPost): Observable<FeedPost> {
    const newFeedPost = new this.feedPostEntityModel(feedPost);
    return from(newFeedPost.save());
  }
  findAllPost(): Observable<any> {
    return from(this.feedPostEntityModel.find());
  }
  updatePost(id: string, updatePost: PostUpdate) {
    return this.feedPostEntityModel.findByIdAndUpdate(id, updatePost, {
      new: true,
    });
  }
  deletePost(id: string): Observable<any> {
    return from(this.feedPostEntityModel.findByIdAndDelete(id));
  }
}
