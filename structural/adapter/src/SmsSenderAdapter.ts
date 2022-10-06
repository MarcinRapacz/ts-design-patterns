import { INotificationSender } from "./INotificationSender";
import { Notification } from "./Notification";
import { SmsSender } from "./SmsSender";

export class SmsSenderAdapter implements INotificationSender {
  private smsSender = new SmsSender();

  sendNotification(userId: number, notification: Notification): void {
    const userPhoneNumber = userId;
    this.smsSender.sendSms(
      userPhoneNumber.toString(),
      `${notification.title} ${notification.body}`
    );
  }
}
