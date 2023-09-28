import React , { useState }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Markup() {

  const [costOfFood, setCostOfFood] = useState('');
  const [garnishCost, setGarnishCost] = useState('');
  const [extraCost, setExtraCost] = useState('');
  const [margin, setMargin] = useState('');
  const [menuPrice, setMenuPrice] = useState('');
  const [grossProfit, setGrossProfit] = useState('');
  const [error, setError] = useState('');


// Calculate menu price and gross profit when inputs change
const calculateProfit = () => {
  // Convert margin to a decimal (e.g., 50% -> 0.50)
  const marginDecimal = parseFloat(margin) / 100;

  // Calculate the total cost
  const totalCost = parseFloat(costOfFood) + parseFloat(garnishCost) + parseFloat(extraCost);

  // Calculate the menu price by adding the profit margin
  // const menuPriceValue = totalCost / (1 - marginDecimal);
  const menuPriceValue = totalCost * (1 + marginDecimal);

  // Calculate gross profit
  const grossProfitValue = menuPriceValue - totalCost;

  if (!costOfFood || !garnishCost || !extraCost || !margin) {
    setError('Some fields are empty.');
    return;
  }

  // Update the state with the results
  setMenuPrice(menuPriceValue.toFixed(2));
  setGrossProfit(grossProfitValue.toFixed(2));
  setError('');

};

  
  return (
    <div>
    <Navbar />
    <h1 className='text-center'>Selling Cost Page</h1>

    <div className="a container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className='text-center'><b>Markup Calculator</b></h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="row">
                  <div className="col">
                    <p>Cost Of Food</p>
                  </div>
                  <div className="col text-end">
                    <input
                      type="number"
                      placeholder='0.00'
                      value={costOfFood}
                      onChange={(e) => setCostOfFood(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col">
                    <p>Garnish Cost</p>
                  </div>
                  <div className="col text-end">
                    <input
                      type="number"
                      placeholder='0.00'
                      value={garnishCost}
                      onChange={(e) => setGarnishCost(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col">
                    <p>Extra Cost</p>
                  </div>
                  <div className="col text-end">
                    <input
                      type="number"
                      placeholder='0.00'
                      value={extraCost}
                      onChange={(e) => setExtraCost(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col">
                    <p>Desired Margin %</p>
                  </div>
                  <div className="col text-end">
                    <input
                      type="number"
                      placeholder='0 %'
                      value={margin}
                      onChange={(e) => setMargin(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
              </li>
              <li className="list-group-item text-center">  <button className='btn btn-secondary' onClick={calculateProfit}  style={{width: "60%"}}>Calculate</button>
      {error && <p className="error-message">{error}</p>}</li>
              <li className="list-group-item">
                <div className="row">
                  <div className="col">
                    <p>Menu Price</p>
                  </div>
                  <div className="col text-end">
                    {menuPrice}
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className='row'>
                  <div className='col'>
                    <p>Gross Profit</p>
                  </div>
                  <div className='col text-end'>
                    {grossProfit}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default Markup;