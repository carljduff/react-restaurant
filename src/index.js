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
import Appetizers from './routes/appetizers';
import Sandwiches from './routes/sandwiches'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
        <Route path="menu" element={<Menu />} />
        <Route path="appetizers" element={<Appetizers />} />
        <Route path="sandwiches" element={<Sandwiches />} />
         
    
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


