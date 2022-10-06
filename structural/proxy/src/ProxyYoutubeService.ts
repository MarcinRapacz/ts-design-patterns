import { IYotubeService } from "./IYotubeService";
import { YotubeService } from "./YoutubeService";

export class ProxyYoutubeService implements IYotubeService {
  private cache: Record<number, string> = {};

  constructor(private youtubeService: YotubeService) {}

  getVideo(videoId: number): string {
    console.log("ProxyYoutubeService getting " + videoId);
    if (this.cache[videoId]) {
      console.log("Getting from cache " + videoId);
      return this.cache[videoId];
    }

    const video = this.youtubeService.getVideo(videoId);
    this.cache[videoId] = video;
    return video;
  }
}
