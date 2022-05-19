import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import New from './New';
import Contact from './Contact';
import About from './About';
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <Routes>
            <Route path='/' element={<p>Hello </p>}/>
            <Route path='/New' element={<New/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact'element={<Contact/>}/>
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
