/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
@Schema()
export class FeedPostEntity {
    @Prop({ default: () => new Types.ObjectId() })
    _id: string;
    @Prop({ default: '' })
    body:string;
    @Prop({ default: Date.now })
    createdAt: Date;
}

export const FeedPostSchema = SchemaFactory.createForClass(FeedPostEntity);
