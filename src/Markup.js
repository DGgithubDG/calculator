import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Footerfixed from './FooterFixed';
import { FaQuestionCircle } from "react-icons/fa";


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
                <h5 className='text-center'><b>Markup Calculator </b></h5>
              </div>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">
                      <h6>Total Cost <FaQuestionCircle className='padbot' data-bs-toggle="modal" data-bs-target="#grossProfit" /> </h6>
                      

{/*Modal */}
{/*Modal total cost  */}

                      <div class="modal fade" id="grossProfit" tabindex="-1" aria-labelledby="grossProfitLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="grossProfitLabel"> total cost </h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              Total amount it cost you to obtain your product in its final form.
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>

{/*Modal total cost */}

{/*Modal desired margin*/}

<div class="modal fade" id="desiredMargin" tabindex="-1" aria-labelledby="desiredMarginLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="desiredMarginLabel"> desired margin </h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              Measure the % you want to make when you sell your product.
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>

{/*Modal desired margin */}

{/*Modal */}

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
                      <h6>Desired Margin % <FaQuestionCircle className='padbot' data-bs-toggle="modal" data-bs-target="#desiredMargin" /></h6>
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
                      <h6>Final Price</h6>
                    </div>
                    <div className="col text-end">
                      {menuPrice}
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className='row'>
                    <div className='col'>
                      <h6>Gross Profit</h6>
                    </div>
                    <div className='col text-end'>
                      {grossProfit}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <ul></ul>
            <h6 className='text-center' style={{color: 'white'}}>This Mark-Up calculator works out the profit margin an individual will obtain based on their desired margin</h6>
          </div>
        </div>
      </div>
      <Footerfixed className="fixed-footer" />
    </div>
  );
}

export default Markup;
