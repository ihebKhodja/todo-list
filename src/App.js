import Header from './components/Header';
import './App.css';
import NotesList from './pages/NotesList';
import Note from './pages/Note';
import { Route, BrowserRouter  as Router , Routes} from 'react-router-dom';


function App() {
  return (
      <div className='App'>  
    <Router >
        <Header className='Header' />
        <Routes>
            <Route  path="/" element={<NotesList/>} >   </Route>
            <Route  path="/note/:id" element={<Note />}></Route>
        </Routes>
    </Router>
      </div>
    
  );
}

export default App;
