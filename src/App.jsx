import { useState } from 'react'

import './App.css'
function App() {
const [buttons,setButtons] = useState([
  {title:"ENTER",id:1 , bg_color:"text-bg-primary"},
  {title:"SUBMIT",id:2 ,bg_color:"text-bg-primary"},
  {title:"DELETE",id:3, bg_color:"text-bg-danger"},
  {title:"RANDOM",id:4,bg_color:"text-bg-primary"},
])

const [input_text,setInputText] = useState('')
const [header_title,setHeader_title] = useState('')
const [list_of_name,setList_of_name] = useState([])
function handleClick(id){
  if (id == 1){
    setHeader_title(input_text)

  }

  if (id==2){
    if (!list_of_name.includes(header_title))
      setList_of_name([...list_of_name,header_title])
  }

  
  if(id == 3){
    const filterd_list = list_of_name.filter((name)=>{
      return name != input_text
    })
    setList_of_name(filterd_list)
  }
  if (id == 4){

    let mathNumer;
    if(list_of_name.length > 0){
    while (true){
      mathNumer = Math.round(Math.random() * 10)
      if (mathNumer < list_of_name.length){
        setHeader_title(list_of_name[mathNumer])
        console.log(mathNumer)
        break
      }
    }
  }
  }
}
  return (
<>
    <div className='d-flex justify-content-around flex-column align-items-center gap-2 w-100  mt-0' id='mm'>
      <div className='text-bg-info p-5 rounded text-white'>
      {list_of_name.map((name,index)=>{
        return(
        <h2>{`#${index+1} ${name}`}</h2>)
      })}

   
    </div>
    
    <div className='d-flex justify-content-center flex-column align-items-center w-25 gap-2 mb-0 text-bg-secondary p-4 rounded'>
    <h1>{header_title}</h1>
    <input type='text'onChange={(e)=>{setInputText(e.target.value)}} value={input_text}  className='p-1 w-50 rounded'/>
      {buttons.map(buttonOfList=>{
        return (
          <button className={`w-75 p-1 rounded ${buttonOfList.bg_color}`} onClick={()=>handleClick(buttonOfList.id)}>{buttonOfList.title}</button>
        )
      })}
      </div>
      </div>
    </>
    
  )
}

export default App
