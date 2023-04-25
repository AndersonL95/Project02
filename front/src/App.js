import {BrowserRouter} from 'react-router-dom'
import NavBar from './components/header/NavBar';
import MainPages from './components/mainPages/Pages';
import { DataProvider } from './GlobalState';
import './App.css';
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
