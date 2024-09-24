import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditModule } from './audit/audit.module';
import { QueueModule } from './queue/queue.module';
import { StreamerModule } from './streamer/streamer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'audit',
      entities: ['dist/**/*.entity.js'],
      synchronize: true,
    }),
    AuditModule,
    QueueModule,
    StreamerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
