import React, {useState} from 'react'

export const ShowTask = props =>{
    console.log('Show Task ')
    console.log(props.data)
return (
    <tr>
       <td>{props.data.name}</td>
       <td>{props.data.description}</td>
       <td><input type="checkbox" checked={props.data.done} onChange={()=>props.setToggle(props.data)}/></td>
    </tr>

);
}

export const CloseTask = props =>{
    console.log('Close Task')
}


