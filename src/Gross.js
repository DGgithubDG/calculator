import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

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
                  Revenue
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="revenue"
                  value={revenue}
                  onChange={(e) => setRevenue(parseFloat(e.target.value))}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="costOfGoodsSold" className="form-label" style={{ color: 'white' }}>
                  Cost of Goods Sold
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
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gross;
