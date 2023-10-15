import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

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
                  Sale Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="salePrice"
                  value={salePrice}
                  onChange={(e) => setSalePrice(parseFloat(e.target.value))}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="commissionPercentage" className="form-label" style={{ color: 'white' }}>
                  Commission Percentage (%)
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Commission;
