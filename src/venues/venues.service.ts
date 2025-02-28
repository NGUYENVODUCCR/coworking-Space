import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Venue } from './venue.schema';

@Injectable()
export class VenuesService {
  constructor(@InjectModel(Venue.name) private venueModel: Model<Venue>) {}

  async createVenue(data: any): Promise<Venue> {
    const newVenue = new this.venueModel(data);
    return newVenue.save();
  }

  async getAllVenues(): Promise<Venue[]> {
    return this.venueModel.find().exec();
  }

  async getVenueById(id: string): Promise<Venue> {
    return this.venueModel.findById(id).exec();
  }

  async deleteVenue(id: string): Promise<Venue> {
    return this.venueModel.findByIdAndDelete(id).exec();
  }
}
