import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContentData } from '@src/core/service/content-management.service';
import { randomUUID } from 'node:crypto';

@Injectable()
export class VideoDAO {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createContentData: CreateContentData) {
    const { title, description, thumbnailUrl, url, sizeInKb } =
      createContentData;

    const video = await this.prismaService.video.create({
      data: {
        id: randomUUID(),
        title,
        description,
        url,
        thumbnailUrl,
        sizeInKb,
        duration: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return video;
  }
}
