import React from 'react'
import './ToList.css'
import {IoMdTrash} from 'react-icons/io'
import { BiEditAlt } from 'react-icons/bi'
import { baseURL } from '../../utils/constant'
import axios from "axios"
export const ToList = ({id,todo,setUpdateUI,updateMode}) => {
    const removeToDo=()=>{
        axios.delete(`${baseURL}/deletetodo/${id}`).then((res)=>{
            console.log(res);
            setUpdateUI((prevState)=> !prevState)
        })
    }
  return (
    <li style={{listStyle:'none'}}>
        <div className='todoname'>{todo}
            <BiEditAlt className='icontodo' style={{marginLeft:'30%'}} onClick={()=> updateMode(id,todo)}/>
            <IoMdTrash className='icontodo' onClick={removeToDo}/>
        </div>

    </li>
  )
}
