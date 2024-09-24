import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Queue } from './entities/queue.entity';

@Injectable()
export class QueueService {
  constructor(@Inject('AUDIT_SERVICE') private client: ClientProxy) {}

  publish(data: Queue) {
    console.log(data);
    this.client.emit({ cmd: 'audit' }, data); //enviando os dados para a queue audit atraves do comando 'audit'
  }
}
