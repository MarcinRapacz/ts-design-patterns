import { Notification } from "./Notification";

export interface INotificationSender {
  sendNotification(userId: number, notification: Notification): void;
}
