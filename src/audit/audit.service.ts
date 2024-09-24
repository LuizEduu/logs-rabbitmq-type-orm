import { Injectable } from '@nestjs/common';
import { CreateAuditDto } from './dto/create-audit.dto';
import { Audit } from './entities/audit.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuditService {
  constructor(
    @InjectRepository(Audit)
    private repository: Repository<Audit>,
  ) {}

  async create(dto: CreateAuditDto): Promise<Audit> {
    return this.repository.save(dto);
  }

  async findAll(): Promise<Audit[]> {
    return this.repository.find();
  }
}
