import { INotificationSender } from "./INotificationSender";
import { Notification } from "./Notification";

export class PushSender implements INotificationSender {
  sendNotification(userId: number, notification: Notification): void {
    console.log(
      `Sending push notification, to: ${userId}, title: ${notification.title}, body: ${notification.body}`
    );
  }
}
