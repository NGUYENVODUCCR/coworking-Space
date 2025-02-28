import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { BookingsService } from './bookings.service';

@Controller('bookings')
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  createBooking(@Body() data: any) {
    return this.bookingsService.createBooking(data);
  }

  @Get()
  getAllBookings() {
    return this.bookingsService.getAllBookings();
  }

  @Get(':id')
  getBookingById(@Param('id') id: string) {
    return this.bookingsService.getBookingById(id);
  }

  @Delete(':id')
  deleteBooking(@Param('id') id: string) {
    return this.bookingsService.deleteBooking(id);
  }
}
