import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Booking, BookingSchema } from './booking.schema';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Booking.name, schema: BookingSchema }])],
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class BookingsModule {}

// src/bookings/booking.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Booking extends Document {
  @Prop({ required: true }) userId: string;
  @Prop({ required: true }) date: string;
  @Prop({ required: true }) time: string;
  @Prop({ default: 'pending' }) status: string;
}
export const BookingSchema = SchemaFactory.createForClass(Booking);
