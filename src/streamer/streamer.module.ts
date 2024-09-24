import { Module } from '@nestjs/common';
import { StreamerService } from './streamer.service';
import { StreamerController } from './streamer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Streamer } from './entities/streamer.entity';
import { QueueModule } from 'src/queue/queue.module';
import { StreamerSubscriber } from './streamer.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Streamer]), QueueModule],
  controllers: [StreamerController],
  providers: [StreamerService, StreamerSubscriber],
})
export class StreamerModule {}
