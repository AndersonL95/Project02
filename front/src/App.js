import './App.css';
import {Provider} from 'react-redux';
import Store from './store';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './views/home';
import NavBar from './views/NavBar'

function App() {
  return ( 
    <Provider store={Store}>
        <NavBar />
        <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        </Router>
    </Provider>
  );
}

export default App;
