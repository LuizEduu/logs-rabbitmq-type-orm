import { PartialType } from '@nestjs/mapped-types';
import { CreateStreamerDto } from './create-streamer.dto';
import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateStreamerDto extends PartialType(CreateStreamerDto) {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsOptional()
  age?: number;

  @IsBoolean()
  @IsOptional()
  status?: boolean;
}
