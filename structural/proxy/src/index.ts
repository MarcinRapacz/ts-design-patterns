import { ProxyYoutubeService } from "./ProxyYoutubeService";
import { YotubeService } from "./YoutubeService";

const youtubeService = new YotubeService();

// youtubeService.getVideo(10);
// youtubeService.getVideo(10);

const proxyYoutubeService = new ProxyYoutubeService(youtubeService);
proxyYoutubeService.getVideo(10);
proxyYoutubeService.getVideo(10);
proxyYoutubeService.getVideo(10);
proxyYoutubeService.getVideo(12);
proxyYoutubeService.getVideo(10);
proxyYoutubeService.getVideo(12);
