import { Controller, Get, Post, Body } from '@nestjs/common';
import { AuditService } from './audit.service';
import { CreateAuditDto } from './dto/create-audit.dto';
import { Audit } from './entities/audit.entity';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller('audit')
export class AuditController {
  constructor(private readonly auditService: AuditService) {}

  @Post()
  create(@Body() createAuditDto: CreateAuditDto): Promise<Audit> {
    return this.auditService.create(createAuditDto);
  }

  @Get()
  findAll(): Promise<Audit[]> {
    return this.auditService.findAll();
  }

  @MessagePattern({ cmd: 'audit' })
  //contexto do rmq serve para executar ações ou comandos para as mensagens recebidas
  getNotification(@Payload() data: CreateAuditDto, @Ctx() context: RmqContext) {
    this.auditService.create(data);
  }
}
