import { ADD_NOTIFICATION, REMOVE_NOTIFICATION } from './actions'

/**
 * Defines the different notification variants and their mapping to the Ion-toast colors
 */
export enum NotificationVariant {
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'danger',
  INFORMATION = 'dark',
}

/**
 * Defines the content of a notification
 */
export class Notification {
  key: string
  message: string
  variant: NotificationVariant

  constructor(message: string, variant: NotificationVariant) {
    this.key = String(new Date().getTime() + Math.random())
    this.message = message
    this.variant = variant
  }
}

let defaultNotifications: Notification[] = []
const defaultNotificationState = {
  notifications: defaultNotifications,
}

export const notifications = (
  state = defaultNotificationState,
  action: any,
) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      let newNotifaction = action.notification
      return {
        ...state,
        notifications: [...state.notifications, newNotifaction],
      }
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter(
          (notification) => notification.key !== action.key,
        ),
      }
    default:
      return state
  }
}
