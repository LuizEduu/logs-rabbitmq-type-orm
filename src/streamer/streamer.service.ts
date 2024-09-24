import { Injectable } from '@nestjs/common';
import { CreateStreamerDto } from './dto/create-streamer.dto';
import { UpdateStreamerDto } from './dto/update-streamer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Streamer } from './entities/streamer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StreamerService {
  constructor(
    @InjectRepository(Streamer) private repository: Repository<Streamer>,
  ) {}

  async create(dto: CreateStreamerDto) {
    return this.repository.save(dto);
  }

  async findAll() {
    return this.repository.find();
  }

  async update(id: string, dto: UpdateStreamerDto) {
    return this.repository.update(
      {
        id,
      },
      dto,
    );
  }
}
