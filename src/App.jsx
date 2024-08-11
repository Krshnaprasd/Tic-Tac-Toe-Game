import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tictactoe from './Tic-Tac-Toe'
import './App.css'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path ='/' element={<Tictactoe/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
