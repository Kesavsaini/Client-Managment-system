import React, { useCallback, useRef, useState } from 'react'
import './VerticalGrayBar.scss';
import TaskWidget from '../TaskWidget/TaskWidget';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../Utils';

export let pendingTask=[
  {
      id:1,
      title:"First Task",
      date:"1-Jan-2023",
      status:"Pending",
      task:"This is task and that was scheduled to do"
  },
  {
      id:2,
      title:"Second Task",
      date:"1-Jan-2023",
      status:"Pending",
      task:"This is task and that was scheduled to do"
  },
  {
      id:3,
      title:"Third Task",
      date:"1-Jan-2023",
      status:"Pending",
      task:"This is task and that was scheduled to do"
  },
  {
      id:4,
      title:"Fouth Task",
      date:"1-Jan-2023",
      status:"Pending",
      task:"This is task and that was scheduled to do"
  }
]

const VerticalGrayBar = ({logo,name}) => {

  const [tasks,setTasks]=useState(pendingTask);

  const [{ isOver }, ref] = useDrop({
    accept: ItemTypes.TASK,
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    drop:(item,monitor)=>{
       setTasks(prev=>[...prev,item])
    }
  });

  const moveCard=(item)=>{
      console.log("Name",name);
  }

  return (
    <div className='verticalGrayBox' ref={ref}>
      <div className='taskProfileBox'>
        {logo && <img src={logo} alt="" style={{width:"50px",height:"50px", borderRadius:"50%"}}/>}
         <span>{name}</span>
      </div>
      <div className='verticalTasks'>
      { tasks.length>0 ?
        tasks.map(({id,title,status,task,date},index)=>{
            return (
                <TaskWidget key={id} title={title} status={status} task={task} date={date} id={id} index={index} moveCard={moveCard} setTasks={setTasks}/>
            )
        }):
        <div className='emptyBox'>
          <img src={require('../../Photos/Empty.png')} alt="" style={{height:'100%'}}/>
        </div>
      }
      </div>
    </div>
  )
}

export default VerticalGrayBar