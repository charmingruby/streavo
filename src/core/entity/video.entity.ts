import { randomUUID } from 'crypto';
import { BaseEntity, BaseEntityProps } from './base.entity';

export type NewVideoEntity = Omit<
  VideoEntityProps,
  'id' | 'createdAt' | 'updatedAt'
>;

export interface VideoEntityProps extends BaseEntityProps {
  url: string;
  sizeInKb: number;
  duration: number;
}

export class VideoEntity extends BaseEntity {
  private url: VideoEntityProps['url'];
  private sizeInKb: VideoEntityProps['sizeInKb'];
  private duration: VideoEntityProps['duration'];

  private constructor(data: VideoEntityProps) {
    super(data);
  }

  serialize(): Record<string, any> {
    return {
      id: this.id,
      url: this.url,
      sizeInKb: this.sizeInKb,
      duration: this.duration,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  static createNew(
    data: Omit<VideoEntityProps, 'id' | 'createdAt' | 'updatedAt'>,
    id = randomUUID(),
  ): VideoEntity {
    return new VideoEntity({
      id,
      url: data.url,
      sizeInKb: data.sizeInKb,
      duration: data.duration,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  static createFrom(data: VideoEntityProps): VideoEntity {
    return new VideoEntity({
      id: data.id,
      url: data.url,
      sizeInKb: data.sizeInKb,
      duration: data.duration,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
  }

  static getMaxFileSize(): number {
    const MAX_FILE_SIZE = 1024 * 1024 * 1024; // 1 gB
    return MAX_FILE_SIZE;
  }

  static getMaxThumbnailSize(): number {
    const MAX_THUMBNAIL_SIZE = 1024 * 1024 * 10; // 10 mB
    return MAX_THUMBNAIL_SIZE;
  }

  getUrl(): string {
    return this.url;
  }

  getSizeInKb(): number {
    return this.sizeInKb;
  }

  getDuration(): number {
    return this.duration;
  }
}
