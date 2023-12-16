import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Footerfixed from './FooterFixed';
import { FaQuestionCircle } from "react-icons/fa";


function Commission() {
  const gifUrl = 'https://64.media.tumblr.com/c90100fd260e77796e397f07d1771d34/fd850e41fad78fd6-86/s400x600/f15e520227c7dd8b471d729a48f26080712d8250.gifv';

  const [salePrice, setSalePrice] = useState(0);
  const [commissionPercentage, setCommissionPercentage] = useState('0');
  const [finalPrice, setFinalPrice] = useState(0);
  const [commissionAmount, setCommissionAmount] = useState(0);

  const calculateCommission = () => {
    // Convert commissionPercentage to a float
    const commissionPercentageFloat = parseFloat(commissionPercentage);

    // Calculate the commission amount
    const commission = (salePrice * commissionPercentageFloat) / 100;
    setCommissionAmount(commission);

    // Calculate the final price after commission
    const final = salePrice - commission;
    setFinalPrice(final);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${gifUrl})`,
  };

  return (
    <div className='' style={backgroundImageStyle}>
      <Navbar />
      <h1 className='text-center' style={{ color: 'white' }}>Commission Calculator</h1>
      <div className="g container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="mb-3">
                <label htmlFor="salePrice" className="form-label" style={{ color: 'white' }}>
                  <h6>sale price <FaQuestionCircle className='padbot' data-bs-toggle="modal" data-bs-target="#saleprice" /></h6>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="salePrice"
                  value={salePrice}
                  onChange={(e) => setSalePrice(parseFloat(e.target.value))}
                />

{/*Modal */}
{/*Modal sale price  */}

<div class="modal fade" id="saleprice" tabindex="-1" aria-labelledby="salePriceLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="salePriceLabel">sale price</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              The share value that you own when you sell at the represented time.
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>

{/*Modal sale price */}

{/*Modal commission */}

<div class="modal fade" id="commission" tabindex="-1" aria-labelledby="commissionLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="commissionLabel">Commission</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                            A service charge assessed by a broker or investment advisor for providing investment advice or handling purchases and sales of securities for a client.                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>

{/*Modal commission */}

{/*Modal */}


              </div>
              <div className="mb-3">
                <label htmlFor="commissionPercentage" className="form-label" style={{ color: 'white' }}>
                  <h6>commission  (%) <FaQuestionCircle className='padbot' data-bs-toggle="modal" data-bs-target="#commission" /></h6>
                </label>
                <input
                  type="text" // Change the input type to "text"
                  className="form-control"
                  id="commissionPercentage"
                  value={commissionPercentage}
                  onChange={(e) => setCommissionPercentage(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={calculateCommission}
              >
                Calculate Commission
              </button>
            </form>
            {commissionAmount !== 0 && (
              <div className="mt-3" style={{ color: 'white' }}>
                <h4>Commission Amount: ${commissionAmount.toFixed(2)}</h4>
                <h4>Final Price: ${finalPrice.toFixed(2)}</h4>

              </div>
              
            )}
            <ul></ul>
     <h6 className='text-center ' style={{color: 'white'}}>This calculator determines the amount you will have after paying the commission </h6>

          </div>
        </div>
      </div>
      <Footerfixed />
    </div>
  );
}

export default Commission;
