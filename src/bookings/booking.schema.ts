import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Booking extends Document {
  @Prop({ required: true }) userId: string;
  @Prop({ required: true }) venueId: string;
  @Prop({ required: true, type: Date }) date: Date;
  @Prop({ required: true, type: Date }) time: Date;
  @Prop({ default: 'pending' }) status: string;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
