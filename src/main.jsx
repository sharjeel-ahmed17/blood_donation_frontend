import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
<div className='max-w-[1200px] mx-auto bg-red-300'>
    <App />
</div>

</BrowserRouter>
  
)
