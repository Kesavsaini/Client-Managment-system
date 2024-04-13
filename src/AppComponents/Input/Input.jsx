import React, { useEffect, useRef, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './Input.scss';

const persons=[
    {
        id:1,
        name:"Keshav"
    },
    {
        id:1,
        name:"Alisha"
    },
    {
        id:1,
        name:"Nayara"
    },
    {
        id:1,
        name:"Emily"
    }
]

const Suggestion=({name,active,setChips})=>{
    return(
        <div className='suggestionRow' onClick={()=>setChips(prev=>[...prev,{name}])} style={{backgroundColor: active && "rgba(15, 117, 188,0.3)"}}>{name}</div>
    )
}

const Chip=({name,onRemovingChip,idx})=>{
    
    return(
        <span className='chip'>{name}
        <div className='closeChip'>
        <CloseIcon onClick={()=>onRemovingChip(idx)} style={{fontSize:"small"}}/>
        </div>
        </span>
    )
}

const Input = () => {
    const inputRef=useRef();
    const [onFocus,setOnFocus] =useState(false);
    const [suggestions,setSuggestions] =useState(persons);
    const [chips,setChips] =useState([]);
    const [activeIndex,setActiveIndex] =useState(-1);
    const onKeyDown=(e)=>{
        if(e.key==='Enter'){
           let name=e.target.value;
           if(suggestions.length>0 && suggestions[0].name.toUpperCase()==name.toUpperCase()){
            console.log("here")
            setChips(prev=>[...prev,{name:suggestions[0].name}]);
            e.target.value='';
            changeSuggeton(e);
           }else if(activeIndex>=0){
             setChips(prev=>[...prev,{name:suggestions[activeIndex].name}]);
             e.target.value='';
             changeSuggeton(e);
           }
        }

        if(e.key==='ArrowDown'){
            setActiveIndex(prev=>prev<suggestions.length-1?prev+1:0);
        } 
        if(e.key==='ArrowUp'){
            setActiveIndex(prev=>prev>0?prev-1:suggestions.length-1);
        }
    }

    const onRemovingChip=(idx)=>{
        setChips(prev=>prev.filter((_,index)=>index!==idx));
    }

    const changeSuggeton=(e)=>{
        let name=e.target.value;
        setSuggestions(persons.filter(person=>person.name.toLowerCase().includes(name.toLowerCase())));
    }

  return (

   
    <div className='inputBox'>
     <label for="chipInput" className='chipLabel'>
       {
        chips && chips.map((chip,idx)=>{
            return <Chip key={idx} name={chip.name} idx={idx} onRemovingChip={onRemovingChip}/>
        })
       }
      <input type="text" className='input' onFocus={()=>setOnFocus(true)} onBlur={()=>setOnFocus(false)} id="chipInput" onChange={changeSuggeton}  onKeyDown={onKeyDown} ref={inputRef} autocomplete="false" placeholder='Assign User'/>
      </label>
      {(onFocus || false) && <div className='autoCompleteBox' onClick={()=>inputRef.current.focus()}>
          {
            suggestions.length>0 ? 
            suggestions.map((person,idx)=>{
                return <Suggestion key={person.id} name={person.name} active={activeIndex===idx} setChips={setChips}/>
            }):
            <div>Nothing Found !!</div>
          }
        </div>}
        
    </div>
   
  )
}

export default Input