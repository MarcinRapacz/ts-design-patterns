import { IYotubeService } from "./IYotubeService";

export class YotubeService implements IYotubeService {
  getVideo(videoId: number): string {
    console.log("Youtube service downloading video " + videoId);

    return "ff4435df3" + videoId;
  }
}
