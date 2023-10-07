import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Commission() {
  const [salePrice, setSalePrice] = useState(0);
  const [commissionRate, setCommissionRate] = useState(0);
  const [commissionAmount, setCommissionAmount] = useState(0);
  const [amountAfterCommission, setAmountAfterCommission] = useState(0);
  const gifUrl = 'https://64.media.tumblr.com/c90100fd260e77796e397f07d1771d34/fd850e41fad78fd6-86/s400x600/f15e520227c7dd8b471d729a48f26080712d8250.gifv';

  const calculateCommission = () => {
    const commission = (salePrice * commissionRate) / 100;
    setCommissionAmount(commission);
    setAmountAfterCommission(salePrice - commission);
  };
  const backgroundImageStyle = {
    backgroundImage: `url(${gifUrl})`, // Set the background image URL
  };

  return (
    <div style={backgroundImageStyle}>
      <Navbar />
    <div className="container" style={{color: 'white'}}>
      <h1>Commission Calculator</h1>
      <div className="form-group">
        <label htmlFor="salePrice">Sale Price:</label>
        <input
          type="number"
          className="form-control"
          id="salePrice"
          value={salePrice}
          onChange={(e) => setSalePrice(parseFloat(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label htmlFor="commissionRate">Commission Rate (%):</label>
        <input
          type="number"
          className="form-control"
          id="commissionRate"
          value={commissionRate}
          onChange={(e) => setCommissionRate(parseFloat(e.target.value))}
        />
      </div>
      <button className="btn btn-primary" onClick={calculateCommission}>
        Calculate
      </button>
      {commissionAmount !== 0 && (
        <div>
          <p>Commission Amount: ${commissionAmount.toFixed(2)}</p>
          <p>Amount After Commission: ${amountAfterCommission.toFixed(2)}</p>
        </div>
      )}
    </div>
    <Footer />
    </div>
  );
}

export default Commission;
