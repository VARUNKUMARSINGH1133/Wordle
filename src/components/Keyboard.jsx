import React,{useCallback, useEffect,useContext} from 'react'
import Key from './Key'
import { AppContext } from '../App'


export default function Keyboard() {

  const {onselectLetter,onEnter,onBkSpc,disable,setDisabled}=useContext(AppContext)


  const keys1=["Q","W","E","R","T","Y","U","I","O","P"]  
  const keys2=["A","S","D","F","G","H","J","K","L"]
  const keys3=["Z","X","C","V","B","N","M"]

  const handleKeyboard=useCallback((event)=>{
    if(event.key==="Enter"){
      onEnter()
    }else if(event.key==="Backspace"){
      onBkSpc()
    }else{
      keys1.forEach((key)=>{
        if(event.key.toLowerCase()===key.toLowerCase())
          onselectLetter(key)
      })
      keys2.forEach((key)=>{
        if(event.key.toLowerCase()===key.toLowerCase())
          onselectLetter(key)
      })
      keys3.forEach((key)=>{
        if(event.key.toLowerCase()===key.toLowerCase())
          onselectLetter(key)
      })
    }
  })
  
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className='keyboard' onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key)=>{
          return <Key keyVal={key} disabled={disable.includes(key)}/>
        })}
      </div>
      <div className="line2">
      {keys2.map((key)=>{
          return <Key keyVal={key} disabled={disable.includes(key)}/>
        })}
      </div>

      <div className="line3">
      <Key keyVal="Enter" bigKey/>
      {keys3.map((key)=>{
          return <Key keyVal={key} disabled={disable.includes(key)}/>
        })}
      <Key keyVal="BkSpc" bigKey/>
      </div>
    </div>
  )
}
