import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './routes/menu'
import Appitizers from './routes/appitizers';
import Pasta from './routes/pasta'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="menu" element={<Menu />} />
        <Route path="appitizers" element={<Appitizers />} />
        <Route path="pasta" element={<Pasta />} />
         
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


