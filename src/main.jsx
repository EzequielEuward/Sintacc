import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Principal } from './Principal';
//import { Dashboard } from './Dashboard';
import './Style/index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <Principal />
      {/* <Dashboard /> */}
    </BrowserRouter>


  </React.StrictMode>,
)
