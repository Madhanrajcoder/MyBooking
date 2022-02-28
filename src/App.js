
import './App.css';
import React from 'react';
import EditBooking from './component/EditBooking/editbooking';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
  <div className='container'>
 <Routes>
 <Route exact path='/EditBooking' element={<EditBooking/>}/>
  </Routes>
  </div>
    
    </BrowserRouter>
  );
}

export default App;
