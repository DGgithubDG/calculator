import React, { useState, useEffect } from 'react';
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
  const gifUrl = 'https://64.media.tumblr.com/c90100fd260e77796e397f07d1771d34/fd850e41fad78fd6-86/s400x600/f15e520227c7dd8b471d729a48f26080712d8250.gifv';

  const backgroundImageStyle = {
    backgroundImage: `url(${gifUrl})`, // Set the background image URL
  };

  // Calculate menu price and gross profit when inputs change
  const calculateProfit = () => {
    // Convert margin to a decimal (e.g., 50% -> 0.50)
    const marginDecimal = parseFloat(margin) / 100;

    // Calculate the total cost
    const totalCost = parseFloat(costOfFood) ;

    // Calculate the menu price by adding the profit margin
    const menuPriceValue = totalCost * (1 + marginDecimal);

    // Calculate gross profit
    const grossProfitValue = menuPriceValue - totalCost;

    if (!costOfFood ||  !margin) {
      setError('Some fields are empty.');
      return;
    }

    // Update the state with the results
    setMenuPrice(menuPriceValue.toFixed(2));
    setGrossProfit(grossProfitValue.toFixed(2));
    setError('');
  };

  // Function to handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      calculateProfit();
    }
  };

  // Add event listener for Enter key press when the component mounts
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div style={backgroundImageStyle}>
      <Navbar />
      {/* <h1 className='text-center' style={{color: "white"}} >Selling Cost Page</h1> */}

      <div className="markuppadbot container">
        <div className="row justify-content-center">
          <div className="g col-12 col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className='text-center'><b>Markup Calculator</b></h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">
                      <p>Total Cost </p>
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
                <li className="list-group-item text-center">
                  <button
                    className="btn btn-primary"
                    onClick={calculateProfit}
                    style={{ width: "60%" }}
                  >
                    Calculate
                  </button>
                  {error && <p className="error-message">{error}</p>}
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">
                      <p>Final Price</p>
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
