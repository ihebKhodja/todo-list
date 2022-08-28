import { useState } from 'react';
import { useNavigate} from 'react-router-dom'

const Delete = ({id}) => {
    let [note ,SetNote]= useState([])
    let navigate = useNavigate()
    let deleteNote = async()=>{
    await fetch(`/api/notes/${id}`, {
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(note)
    })
   }
    let handleDelete = () =>{
    deleteNote()
    navigate('/')
}
    return ( 
        <button className='delete' onClick={handleDelete}>Delete</button> 
     );
}
 
export default Delete;