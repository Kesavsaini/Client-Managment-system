import React from 'react'
import './DropDown'
const DropDown = ({options}) => {
  return (
    <select name="" id="" style={{padding:"12px",borderRadius:"8px"}} aria-placeholder='Status'>
        {options.map((option) => (
          <option value={option.value} style={{padding:"12px",margin:"12px"}}>{option.value}</option>
        ))}
</select> 
  )
}

export default DropDown