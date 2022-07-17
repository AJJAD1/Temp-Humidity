import React, { FC, useEffect } from 'react'
import * as serviceWorker from '../../serviceWorkerRegistration'
import { Button, Snackbar } from '@material-ui/core'

const ServiceWorkerWrapper: FC = () => {
  const [showUpdateMessage, setShowUpdateMessage] = React.useState(false)
  const [waitingWorker, setWaitingWorker] =
    React.useState<ServiceWorker | null>(null)

  const onSWUpdate = async (registration: ServiceWorkerRegistration) => {
    setShowUpdateMessage(true)
    setWaitingWorker(registration.waiting)
    await registration.update()
  }

  const handleClose = () => {
    waitingWorker?.postMessage({ type: 'SKIP_WAITING' })
    window.location.reload()
    setShowUpdateMessage(false)
  }

  useEffect(() => {
    serviceWorker.register({ onUpdate: onSWUpdate })
  }, [])

  return (
    <Snackbar
      open={showUpdateMessage}
      autoHideDuration={3000}
      onClose={handleClose}
      message="App updated to latest version!"
      onClick={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      action={
        <Button color="primary" onClick={handleClose}>
          Ok
        </Button>
      }
    />
  )
}

export default ServiceWorkerWrapper
