import { Expose } from 'class-transformer';
import { IsDate, IsUUID } from 'class-validator';

export class CreateVideoResponseDto {
  @IsUUID()
  @Expose()
  id: string;

  @IsUUID()
  @Expose()
  title: string;

  @IsUUID()
  @Expose()
  description: string;

  @IsUUID()
  @Expose()
  url: string;

  @IsDate()
  @Expose()
  createdAt: Date;

  @IsDate()
  @Expose()
  updatedAt: Date;
}
