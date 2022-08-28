import Delete from "./Delete";
import Edit from "./Edit";
import '../App.css';
const ListItem = ({note}) => {
    return ( 
        <div className="ListItem">
                <p>{note.title}</p>
            <div className='edit'>
                <Edit  id={note.id}/>
            </div>
            <div className="delete">
                <Delete id={note.id}/>
            </div>
        </div>
      
     );
}
 
export default ListItem;