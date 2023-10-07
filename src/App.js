import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarkupCalc from './Markup';
import Nutrition from './Nutrition';
import Conversion from './Conversion';
import Home from './Home';
import Commission from './Commission';


function App() {
  return(
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/markup' element={<MarkupCalc />} />
        <Route path='/nutrition' element={<Nutrition />} />
        <Route path='/commission' element={<Commission />} />
        <Route path='/conversion' element={<Conversion />} />

      </Routes>
    </BrowserRouter>
  )

}

export default App;

{/* <BrowserRouter>
<Routes>
<Route path='/markupcalc' element={<MarkupCalc />}></Route>
</Routes>
</BrowserRouter> */}