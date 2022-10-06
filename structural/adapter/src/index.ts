import { EmailSender } from "./EmailSender";
import { INotificationSender } from "./INotificationSender";
import { Notification } from "./Notification";
import { SmsSenderAdapter } from "./SmsSenderAdapter";

// const notificationSender: INotificationSender = new EmailSender();
const notificationSender: INotificationSender = new SmsSenderAdapter();
notificationSender.sendNotification(
  123,
  new Notification("title test", "body test")
);
