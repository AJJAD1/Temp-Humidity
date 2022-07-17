import React from 'react'
import { IonButton } from '@ionic/react'
import { withTranslation, WithTranslation } from 'react-i18next'
import './Button.scss'

interface buttonProps {
  buttonLabel?: any
  clickHandler?: Function
  size?: any
  disabled?: boolean
  style?: any
  color?: string
}

const ButtonConmponent: React.FC<buttonProps> = ({
  buttonLabel,
  clickHandler,
  size,
  disabled,
  style,
  color,
  ...props
}) => {
  function handleButtonClick() {
    clickHandler?.()
  }
  return (
    <div>
      <IonButton
        disabled={disabled}
        expand={size}
        style={style}
        color={color}
        onClick={() => handleButtonClick()}
        className="btn-element-wrapper"
        {...props}
      >
        {buttonLabel}
      </IonButton>
    </div>
  )
}
export default withTranslation()(ButtonConmponent)
