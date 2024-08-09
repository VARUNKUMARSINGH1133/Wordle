import React ,{useContext, useState}from 'react'
import { AppContext } from '../App'
export default function Key({keyVal,bigKey,disabled}) {
    const {onselectLetter,onEnter,onBkSpc}=useContext(AppContext)
    
    const selectLetter=()=>{
        if(keyVal==="Enter"){
            onEnter()
        }
        else if(keyVal==="BkSpc"){
            onBkSpc()

        }else{
        onselectLetter(keyVal)
    }
    }
    return (
    <div className='key'id={bigKey ?"big":disabled && "disabled"}onClick={selectLetter}>
      {keyVal}
    </div>
  )
}
