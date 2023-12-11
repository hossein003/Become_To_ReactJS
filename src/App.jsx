import { useState } from 'react'


function App() {
const [buttons,setButtons] = useState([
  {title:"ENTER",id:1},
  {title:"SUBMIT",id:2},
  {title:"CHANGE",id:3},
  {title:"DELETE",id:4},
  {title:"RANDOM",id:5},
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

  if (id == 3){
    setHeader_title(input_text)
  }
  if(id == 4){
    const filterd_list = list_of_name.filter((name)=>{
      return name != input_text
    })
    // console.log(filterd_list)
    setList_of_name(filterd_list)
  }
  if (id == 5){

    let mathNumer;
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
  return (
    <>

    <div className='d-flex justify-content-center flex-column align-items-center gap-2'>
      {list_of_name.map(name=>{
        return(
        <h2>{name}</h2>)
      })}

    <h1>{header_title}</h1>
    <input type='text'onChange={(e)=>{setInputText(e.target.value)}} value={input_text}/>
      {buttons.map(buttonOfList=>{
        return (
          <button className='w-25' onClick={()=>handleClick(buttonOfList.id)}>{buttonOfList.title}</button>
        )
      })}
      </div>
    </>
  )
}

export default App
