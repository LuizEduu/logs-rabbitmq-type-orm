import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateStreamerDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  age: number;

  @IsBoolean()
  @IsDefined()
  @IsNotEmpty()
  status: boolean;
}
