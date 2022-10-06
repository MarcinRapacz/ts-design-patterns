import { INotificationSender } from "./INotificationSender";
import { Notification } from "./Notification";

export class EmailSender implements INotificationSender {
  sendNotification(userId: number, notification: Notification): void {
    console.log(
      `Sending email notification, to: ${userId}, title: ${notification.title}, body: ${notification.body}`
    );
  }
}
