import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { VenuesService } from './venues.service';

@Controller('venues')
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @Post()
  createVenue(@Body() data: any) {
    return this.venuesService.createVenue(data);
  }

  @Get()
  getAllVenues() {
    return this.venuesService.getAllVenues();
  }

  @Get(':id')
  getVenueById(@Param('id') id: string) {
    return this.venuesService.getVenueById(id);
  }

  @Delete(':id')
  deleteVenue(@Param('id') id: string) {
    return this.venuesService.deleteVenue(id);
  }
}
