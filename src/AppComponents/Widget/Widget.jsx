import React from 'react'
import './Wideget.scss'
const Widget = ({title,value}) => {
  return (
    <div className='widgetBox'>
       <div className='widgetTitle'>{title}</div>
       <div className='widgetValue'>{value}</div>
    </div>
  )
}

export default Widget