import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './booking.schema';

@Injectable()
export class BookingsService {
  constructor(@InjectModel(Booking.name) private bookingModel: Model<Booking>) {}

  async createBooking(data: any): Promise<Booking> {
    const newBooking = new this.bookingModel(data);
    return newBooking.save();
  }

  async getAllBookings(): Promise<Booking[]> {
    return this.bookingModel.find().exec();
  }

  async getBookingById(id: string): Promise<Booking> {
    return this.bookingModel.findById(id).exec();
  }

  async deleteBooking(id: string): Promise<Booking> {
    return this.bookingModel.findByIdAndDelete(id).exec();
  }
}
