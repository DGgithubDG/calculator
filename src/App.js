import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MarkupCalc from './MarkupCalc';
import Nutrition from './Nutrition';


function App() {
  return(
<div>
<MarkupCalc />
</div>
  )

}

export default App;

{/* <BrowserRouter>
<Routes>
<Route path='/markupcalc' element={<MarkupCalc />}></Route>
</Routes>
</BrowserRouter> */}