import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import RailcarDetails from './views/RailcarDetails'
import Create from './views/Create';
import Update from './views/Update'
import Consist from './views/Consist';

function App() {

  return (
    <>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/railcars/:id/details' element={<RailcarDetails />} />
          <Route path='/railcars/add' element={<Create />} />
          <Route path='/railcars/edit/:id' element={<Update />} />
          <Route path='/railcars/consists' element={<Consist />} />
        </Routes>
    </>
  )
}

export default App
