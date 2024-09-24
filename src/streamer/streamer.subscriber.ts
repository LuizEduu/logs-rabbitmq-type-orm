import { Injectable } from '@nestjs/common';
import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { Streamer } from './entities/streamer.entity';
import { QueueService } from 'src/queue/queue.service';

@Injectable()
@EventSubscriber()
export class StreamerSubscriber implements EntitySubscriberInterface<Streamer> {
  constructor(
    dataSource: DataSource,
    private queueService: QueueService,
  ) {
    dataSource.subscribers.push(this);
  }

  listenTo(): any {
    return Streamer;
  }

  afterInsert(event: InsertEvent<Streamer>): Promise<any> | void {
    console.log('AFTER INSERT');
    this.queueService.publish({
      reference: 'streamer',
      method: 'AFTER_INSERT',
      old: {},
      new: event.entity,
    });
  }

  afterUpdate(event: UpdateEvent<Streamer>): Promise<any> | void {
    console.log('AFTER UPDATE');
    this.queueService.publish({
      reference: 'streamer',
      method: 'AFTER_UPDATE',
      old: event.databaseEntity,
      new: event.entity,
    });
  }
}
