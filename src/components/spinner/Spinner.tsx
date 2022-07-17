import React from 'react'
import './Spinner.scss'
import { IonSpinner } from '@ionic/react'

interface SpinnerProps extends React.HTMLAttributes<HTMLIonSpinnerElement> {
  duration?: number
}

const Spinner: React.FC<SpinnerProps> = (props, duration) => {
  const { ...attributes } = props

  return (
    <IonSpinner
      className={'spinner'}
      {...attributes}
      duration={duration}
      name="crescent"
    />
  )
}

export default Spinner
