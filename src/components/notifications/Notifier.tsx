import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { removeNotification } from './actions'
import { IonToast } from '@ionic/react'
import { Notification } from './Notifications'

const mapStateToProps = (state: any) => ({
  notifications: state.notifications,
})
const mapDispatchToProps = (dispatch: any) => ({
  removeNotification: (key: String) => dispatch(removeNotification(key)),
})
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>

/**
 * Notifier component which displays the notifications as toasts
 */
const Notifier: React.FC<Props> = (props) => {
  const { notifications, removeNotification } = props

  const [currentNotification, setCurrentNotification] = useState<Notification>()
  const [displayed, addDisplayed] = useState<Notification[]>([])
  const toastDuration = 1000

  useEffect(() => {
    // Updated with every change to component and its elements
    notifications.notifications.forEach((notification: Notification) => {
      // Do nothing if notification has already been displayed or another notification is already displayed
      if (displayed.includes(notification) || currentNotification) return
      // Display notification
      setCurrentNotification(notification)
      // // Keep track of notifications that we've displayed
      addDisplayed((notifications) => notifications.concat([notification]))
    })
  })

  /**
   * Cleans the notification from this component and the central notification service
   */
  function cleanNotification(notification: Notification) {
    setCurrentNotification(undefined)
    removeNotification(notification.key)
  }

  return (
    <div>
      {currentNotification ? (
        <IonToast
          isOpen={true}
          message={currentNotification.message}
          color={currentNotification.variant}
          onDidDismiss={() => cleanNotification(currentNotification)}
          duration={toastDuration}
        />
      ) : null}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifier)
