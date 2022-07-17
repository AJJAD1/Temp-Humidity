import { Notification } from './Notifications'

export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'
export const ADD_NOTIFICATION = 'ADD_NOTIFICATION'

export const removeNotification = (key: String) => ({
  type: REMOVE_NOTIFICATION,
  key: key,
})

export const addNotification = (notification: Notification) => ({
  type: ADD_NOTIFICATION,
  notification: notification,
})
