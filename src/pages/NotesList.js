import { useState,useEffect } from "react";
import Add from '../components/Add';
import Item from "../components/Item";
const NotesList = () => {
    let [notes, SetNote] = useState([]);

    useEffect(()=>{
        fetchNotes()
    },[notes])
    // let result
    //  result=<div class="lds-ring"><div></div><div></div><div></div><div></div></div>  
    let fetchNotes = async() => {
        let response = await fetch('/api/notes ')
        let data= await response.json()
        SetNote(data)
        }        

    return (  
        <>
          <div className="items"> 
            {notes.map( (note,index) => (
                <Item key={index}note={note} />
                ))}
            <div className="add_position">
            <Add />
            </div>
        </div>
        </>          
     );
}
 
export default NotesList;