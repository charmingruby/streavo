import { Injectable } from '@nestjs/common';
import { PrismaService } from '@src/persistence/prisma/prisma.service';
import { randomUUID } from 'node:crypto';

export interface CreateContentData {
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  sizeInKb: number;
}

@Injectable()
export class ContentManagementService {
  constructor(private readonly prismaService: PrismaService) {}

  async createContent(createContentData: CreateContentData) {
    const { title, description, thumbnailUrl, url, sizeInKb } =
      createContentData;

    const createdVideo = await this.prismaService.video.create({
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

    return createdVideo;
  }
}
