import { useEffect ,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Delete from '../components/Delete'
// import {AiOutlineRollback} from 'react-icons/ai';
import {IoIosArrowBack} from 'react-icons/io';
const Note = () => {
    let [note ,SetNote]= useState([])
    let {id} = useParams()
    let navigate = useNavigate()

    useEffect(()=>{
        getNote()
    },[id])

    //// CRUD functions
    let getNote = async() =>{
        let response = await fetch(`/api/notes/${id}`)
        let data=  await response.json()
        console.log(data)
        SetNote(data)
    }
   let updateNote = async()=>{
    await fetch(`/api/notes/${id}`, {
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(note)
    })
   }
   let deleteNote = async()=>{
    await fetch(`/api/notes/${id}`, {
        method:'DELETE',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(note)
    })
   }
   let createNote = async()=>{
    await fetch('/api/notes', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(note)
    })
   }

//// 
let handleSubmit = () =>{
    updateNote()
    navigate('/')
}
let handleCreate = () =>{
    createNote()
    navigate('/')
}
let handleDelete = () =>{
    deleteNote()
    navigate('/')
}

    return ( 
    <div className='items'> 
        {/* <AiOutlineRollback onClick={handleSubmit}/> */}
        <div className='back'><IoIosArrowBack color='#DC143C 'size='60px' onClick={handleSubmit}
        onMouseOver={({target})=>target.style.color="green"}
            onMouseOut={({target})=>target.style.color="#DC143C"}/> 
            </div>
         { id !=='create' ? <div className="delete2"> <Delete id={id}/> </div>
                 : <button className='done' onClick={handleCreate}>Done</button>}
   
         <textarea onChange={(e)=>{ SetNote({...note, "title": e.target.value  })}} value={note.title}>
            {note.title}
        </textarea>
            </div> 
    );
}
export default Note;