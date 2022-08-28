 import { Link } from "react-router-dom";
import { GrAdd } from 'react-icons/gr';
import {AiFillPlusCircle} from 'react-icons/ai';
import {IoIosAddCircle} from 'react-icons/io'
import '../App.css'
const Add = () => {
    return (
        <div className="add">
        <Link style={{ textDecoration: 'none', color: 'inherit' }}   to='note/create'>
            {/* <button>Add</button>
            <GrAdd color='#DC143C' size={200} />
            <AiFillPlusCircle  color="#DC143C" size={200}/> */}
            <IoIosAddCircle color="#DC143C" size={70}
            onMouseOver={({target})=>target.style.color="green"}
            onMouseOut={({target})=>target.style.color="#DC143C"} />
        </Link>
        </div>
        
      );
}
 
export default Add;