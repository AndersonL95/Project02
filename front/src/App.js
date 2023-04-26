import {BrowserRouter} from 'react-router-dom'
import Header from './components/header/Header';
import MainPages from './components/mainPages/Pages';
import { DataProvider } from './GlobalState';
import './App.css';
function App() {
  return ( 
    <DataProvider>
        <BrowserRouter>
          
            <Header/>
            <MainPages/>
          
        </BrowserRouter>
    </DataProvider>
  );
}

export default App;
