import React, { useCallback, useState } from 'react'
import './HorizontalTaskBar.scss'
import HoriZontalGrayBar from '../HorizontalGrayBar/HoriZontalGrayBar';
import { useDrop} from 'react-dnd'
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

export let progressTask=[
    {
        id:5,
        title:"Fifth Task",
        date:"1-Jan-2023",
        status:"Progress",
        task:"This is task and that was scheduled to do"
    },
    {
        id:6,
        title:"Sixth Task",
        date:"1-Jan-2023",
        status:"Progress",
        task:"This is task and that was scheduled to do"
    },
    {
        id:7,
        title:"seventh Task",
        date:"1-Jan-2023",
        status:"Progress",
        task:"This is task and that was scheduled to do"
    },
    {
        id:8,
        title:"Eigdth Task",
        date:"1-Jan-2023",
        status:"Progress",
        task:"This is task and that was scheduled to do"
    }
]

const HorizontalTaskBar = () => {

    const [pendingCard,setPendingCard]=useState(pendingTask);
    const [progressCard,setProgressCard]=useState(progressTask);

     const [{ isOver }, pendingRef] = useDrop({
        accept: ItemTypes.TASK,
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
      });
    
      console.log(isOver);
      const [{ isOver: isCardOver }, progressRef] = useDrop({
        accept: ItemTypes.TASK,
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
      });

    const moveCardtoProgress = (item) => {
        setPendingCard((prev) => prev.filter((_, i) => item.index !== i));
        setProgressCard((prev) => [...prev, {...item,status: 'Progress'}]);
        console.log("pending",pendingCard);
        console.log("progress",progressCard);
      };

      const moveCardtoPending = (item) => {
        setProgressCard((prev) => prev.filter((_, i) => item.index !== i));
        setPendingCard((prev) => [...prev, {...item,status: 'Pending'}]);
        console.log("pending",pendingCard);
        console.log("progress",progressCard);
      };
    

  return (
    <div className='horizontalTaskBox'>
      <div className='subTaskBox'>
        <div>Pending Tasks</div>
        <HoriZontalGrayBar tasks={pendingCard} ref={pendingRef} moveCard={moveCardtoProgress}/>
      </div>
       <div className="subTaskBox">
       <div>Tasks in Progress</div>
       <HoriZontalGrayBar tasks={progressCard} ref={progressRef} moveCard={moveCardtoPending}/>
      </div>
    </div>
  )
}

export default HorizontalTaskBar