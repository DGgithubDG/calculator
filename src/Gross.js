import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Footerfixed from './FooterFixed';
import { FaQuestionCircle } from "react-icons/fa";


function Gross() {
  const gifUrl = 'https://64.media.tumblr.com/c90100fd260e77796e397f07d1771d34/fd850e41fad78fd6-86/s400x600/f15e520227c7dd8b471d729a48f26080712d8250.gifv';

  const [revenue, setRevenue] = useState(0);
  const [costOfGoodsSold, setCostOfGoodsSold] = useState(0);
  const [grossProfit, setGrossProfit] = useState(0);
  const [grossProfitMargin, setGrossProfitMargin] = useState(0);

  const calculateGrossProfit = () => {
    const gp = revenue - costOfGoodsSold;
    setGrossProfit(gp);

    // Calculate the gross profit margin as a percentage
    const marginPercentage = (gp / revenue) * 100;
    setGrossProfitMargin(marginPercentage.toFixed(2)); // Round to 2 decimal places
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${gifUrl})`,
  };

  return (
    <div className='' style={backgroundImageStyle}>
      <Navbar />
      <h1 className='text-center' style={{ color: 'white' }}>Gross Profit Calculator</h1>
      <div className="g container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="mb-3">
                <label htmlFor="revenue" className="form-label" style={{ color: 'white' }}>
                 <h6>sale price <FaQuestionCircle className='padbot' data-bs-toggle="modal" data-bs-target="#salePrice" /></h6> 
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="revenue"
                  value={revenue}
                  onChange={(e) => setRevenue(parseFloat(e.target.value))}
                />
              </div>
              {/*modal sale price*/}

              <div class="modal fade" id="salePrice" tabindex="-1" aria-labelledby="salePriceLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="salePriceLabel"> sale price </h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              The price you wish to sell you product at.
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>

              {/*modal sale price*/}

               {/*modal sale price*/}

               <div class="modal fade" id="costofproduct" tabindex="-1" aria-labelledby="costofproductLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="costofproductLabel"> total cost </h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              The final price it has cost you to obtain your product.
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>

              {/*modal total cost*/}

              <div className="mb-3">
                <label htmlFor="costOfGoodsSold" className="form-label" style={{ color: 'white' }}>
                  <h6>cost of product <FaQuestionCircle className='padbot' data-bs-toggle="modal" data-bs-target="#costofproduct" /></h6>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="costOfGoodsSold"
                  value={costOfGoodsSold}
                  onChange={(e) => setCostOfGoodsSold(parseFloat(e.target.value))}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={calculateGrossProfit}
              >
                Calculate Gross Profit
              </button>
            </form>
            {grossProfit !== 0 && (
              <div className="mt-3" style={{ color: 'white' }}>
                <h4>Gross Profit: ${grossProfit}</h4>
                <h4>Gross Profit Margin: {grossProfitMargin}%</h4>
              </div>
            )}
          </div>
          <ul></ul>
          <h6 className='text-center col-md-6 offset-md-3' style={{color: 'white'}}>This gross profit calculator measures the money your product will generate after subtracting the total cost from the final product </h6>
        </div>
      </div>
      <Footerfixed />
    </div>
  );
}

export default Gross;
