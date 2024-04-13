import React, { useRef } from 'react'
import './TaskWidget.scss'
import { ItemTypes } from '../../Utils'
import { useDrag,useDrop } from 'react-dnd'

const TaskWidget = ({id,title,status,date,task,index,moveCard,setTasks}) => {
  
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: () => {
      return {id,title,status,date,task,index}
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end:(item,monitor)=>{
      const dropResult = monitor.getDropResult();
      if(item){
        if(moveCard) moveCard(item);
        if(setTasks) setTasks(prev=>prev.filter((_,index)=>index!==item.index));
      }
    }
  })

  return (
    <div className='taskWidgetBox' ref={drag} style={{
      display: isDragging ? 'none' : 'flex'
    }}>
        <div className='taskWidgetTitle'>{title}</div>
        <div className={`taskWidgetStatus ${status==='Pending' ? 'redText': "yellowText"}`}>Status: {status}</div>
        <div className='taskWidgetDate'>Due Date: {date}</div>
        <div className='taskWidgetDetail'>{task}</div>
    </div>
  )
}

export default TaskWidget