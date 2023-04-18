import './App.css';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import NavBar from './components/header/NavBar';
import MainPages from './components/mainPages/Pages';
import { DataProvider } from './GlobalState';
function App() {
  return ( 
    <DataProvider>
        <BrowserRouter>
        <NavBar/>
          <MainPages/>
        </BrowserRouter>
    </DataProvider>
  );
}

export default App;
