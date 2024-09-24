import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { StreamerService } from './streamer.service';
import { CreateStreamerDto } from './dto/create-streamer.dto';
import { UpdateStreamerDto } from './dto/update-streamer.dto';

@Controller('streamer')
export class StreamerController {
  constructor(private readonly streamerService: StreamerService) {}

  @Post()
  create(@Body() createStreamerDto: CreateStreamerDto) {
    return this.streamerService.create(createStreamerDto);
  }

  @Get()
  findAll() {
    return this.streamerService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStreamerDto: UpdateStreamerDto,
  ) {
    return this.streamerService.update(id, updateStreamerDto);
  }
}
