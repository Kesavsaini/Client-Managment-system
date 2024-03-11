import React, { useCallback, useRef, useState } from 'react'
import './HoriZontalGrayBar.scss';
import TaskWidget from '../TaskWidget/TaskWidget';

const HoriZontalGrayBar = ({tasks,ref,moveCard}) => {


  return (
    <div className='horizontalGrayBox' ref={ref}>
      { tasks.length>0 ?
        tasks.map(({id,title,status,task,date},index)=>{
            return (
                <TaskWidget key={id} title={title} status={status} task={task} date={date} id={id} index={index} moveCard={moveCard}/>
            )
        }):
        <div className='emptyBox'>
          <img src={require('../../Photos/Empty.png')} alt="" style={{height:'100%'}}/>
        </div>
}
    </div>
  )
}

export default HoriZontalGrayBar