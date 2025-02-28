import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Venue, VenueSchema } from './venue.schema';
import { VenuesController } from './venues.controller';
import { VenuesService } from './venues.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Venue.name, schema: VenueSchema }])],
  controllers: [VenuesController],
  providers: [VenuesService],
})
export class VenuesModule {}

// src/venues/venue.schema.ts
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Venue extends Document {
  @Prop({ required: true }) name: string;
  @Prop({ required: true }) location: string;
}
export const VenueSchema = SchemaFactory.createForClass(Venue);
