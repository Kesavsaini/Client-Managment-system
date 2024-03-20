import React from 'react'
import './MenuCard.scss'
const MenuCard = ({menueItems}) => {
  return (
    <div className='menuCard'>
        {
            menueItems.map((item, index) => {
                return (
                    <div className='menuItem' key={index} onClick={item.onClick}>
                        {item.title}
                    </div>
                )
            })
        }
    </div>
  )
}

export default MenuCard