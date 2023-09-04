export type NotificationResult = "success" | "alert" | "warning" | "hint";
type NotificationColor = "#339944" | "#E6484E" | "#FFA01C" | "#7D5BA6";

export type NotificationData = {
  notificationId: string;
  notificationTitle: {
    translationPath: string;
  };
  notificationText: {
    translationPath: string;
  };
}

export type NotificationType = {
  color: NotificationColor;
  formNotifications?: NotificationData[];
}

type NotificationsData = Record<NotificationResult, NotificationType>;

export const notificationsData: NotificationsData = {
  success: {
    color: "#339944",
    formNotifications: [
      {
        notificationId: "form_without_response",
        notificationTitle: {
          translationPath: "notifications.form_without_response.title"
        },
        notificationText: {
          translationPath: "notifications.form_without_response.text"
        }
      },
      {
        notificationId: "form_with_response",
        notificationTitle: {
          translationPath: "notifications.form_with_response.title"
        },
        notificationText: {
          translationPath: "notifications.form_with_response.text"
        }
      }
    ]
  },
  alert: {
    color: "#E6484E"
  },
  warning: {
    color: "#FFA01C"
  },
  hint: {
    color: "#7D5BA6"
  }
};
