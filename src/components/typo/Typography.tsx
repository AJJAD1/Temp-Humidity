import React, { ReactNode } from 'react'
import './Typography.scss'

interface TypographyProps {
  variant?: String
  color?: String
  children: ReactNode
  className?: String
}

const Typography: React.FC<TypographyProps> = (props) => {
  const { variant, color, children, className } = props
  const finalColor = color || 'default'
  const finalVariant = variant || 'body1'
  return (
    <div className={`${finalVariant}`}>
      <div className={`${finalColor}`}>
        <div className={`${className}`}>{children}</div>
      </div>
    </div>
  )
}

export default Typography
