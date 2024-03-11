import React from 'react'
import './Home.scss'
import RevenueChart from '../../AppComponents/RevenueChart/RevenueChart'
import PendingRequest from '../../AppComponents/PendingRequest/PendingRequest'
import Widget from '../../AppComponents/Widget/Widget'
import HorizontalTaskBar from '../../AppComponents/HorizontalTaskBar/HorizontalTaskBar'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const widgetData=[
  {
    id:1,
    title:"No. of Cliets",
    value:290
  },
  {
      id:2,
      title:"Request in pending",
      value:14
  },
  {
    id:3,
    title:"Request in Progress",
    value:32
  }
]

const Home = () => {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className='homeBox'>
      <div className='homeSubBox'>
      <RevenueChart/>
      <PendingRequest/>
      <div className='widgetClass'>
      {
        widgetData.map(({id,title,value})=>{
          return <Widget key={id} title={title} value={value}/>
        })
      }
      </div>
      </div>
      <div className='taskBox'>
        <HorizontalTaskBar/>
      </div>
    </div>
    </DndProvider>
  )
}

export default Home