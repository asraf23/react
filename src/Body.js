import './Body.css'
import React, { useState } from "react";
const Body=()=>{
    
 let initialList = [
    {
        id:1,
        checked:true,
        value:"Backup"
    },
    {
        id:2,
        checked:true,
        value:"upload"
    },
    {
        id:3,
        checked:false,
        value:"Jenkins"
    }
]
    const [list, setList]=useState(initialList)
    const checkhandler=(id)=>{
        const newList = list.map(item=>
            item.id===id ? {...item, checked:!item.checked} : item)
            setList(newList)

    }
    const handledelete=(id)=>{
        const newlist= list.filter((item=>item.id!==id))
        setList(newlist) 
    }
    

    
    return(
        <div>
            {(list.length) ? ( 
            <ul>
                {list.map((item)=>
                <li key={item.id}>
                    <input
                    type='checkBox'
                    checked={item.checked}
                    onClick={()=>checkhandler(item.id)}
                    />
                    <label>{item.value}</label>
                    <button onClick={()=>handledelete(item.id)}>delete</button>

                </li>
                )}
                
            </ul>) : <p>List Empty</p>}
        </div>
    )

}
export default Body;