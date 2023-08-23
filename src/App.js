import './App.css';
import React,{useState} from 'react';
import Home from './Home';
import NewBook from './NewBook';

function App() {
  const [books, setBooks] = useState([]);
  return (
    <div className="App">
      <NewBook bookss={books} setBookss={setBooks}/>
      <Home books={books} setBooks={setBooks}/>
    </div>
  );
}

export default App;
