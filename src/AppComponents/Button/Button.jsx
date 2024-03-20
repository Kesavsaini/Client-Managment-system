import React from 'react'
import './Button.scss'

const Button = ({onClick,title,icon,style}) => {
  return (
    <div className='button' onClick={onClick} style={style}>
        {icon}
        <span>
        {title}
        </span> 
    </div>
  )
}

export default Button