import React from 'react'
import { Link } from 'react-router-dom'
import Nutrition from './Nutrition'
import Conversion from './Conversion'
import DishCost from './DishCost'

function MarkupCalc() {
  return (
    <div>
    <h1 className='text-center'> MarkupCalc</h1>
    <div>
  <ul>  <Link to='/nutrition'>Nutrition</Link></ul>
  <ul>  <Link to='/dishcost'>DishCost</Link></ul>
  <ul>  <Link to='/conversion'>Conversion</Link></ul>


</div>
    </div>
  )
}

export default MarkupCalc