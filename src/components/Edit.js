import { useEffect ,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
const Edit = ({id}) => {
    let [note ,SetNote]= useState([])
    let navigate = useNavigate()
    
    let updateNote = async()=>{
    await fetch(`/api/notes/${id}`, {
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(note)
    })
   }

   let handleEdit = () =>{
    updateNote()
    navigate(`/note/${id}`)
}
    return (  
        <button className='edit' onClick={handleEdit}>Edit</button>
    );
}
 
export default Edit;