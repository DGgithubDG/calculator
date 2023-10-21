import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function CompoundInterestCalculator() {
  const [state, setState] = useState({
    principal: 1000, // Initial principal amount
    monthlyContribution: 100, // Monthly contribution amount
    rate: 10, // Annual interest rate
    time: 1, // Number of years
    result: 0, // Result will be calculated and displayed here
  });

  const gifUrl = 'https://64.media.tumblr.com/c90100fd260e77796e397f07d1771d34/fd850e41fad78fd6-86/s400x600/f15e520227c7dd8b471d729a48f26080712d8250.gifv';

  const backgroundImageStyle = {
    backgroundImage: `url(${gifUrl})`, // Set the background image URL
  };

  // Event handlers to update the state when input fields change
  const handlePrincipalChange = (event) => {
    setState({ ...state, principal: parseFloat(event.target.value) });
  };

  const handleMonthlyContributionChange = (event) => {
    setState({ ...state, monthlyContribution: parseFloat(event.target.value) });
  };

  const handleRateChange = (event) => {
    setState({ ...state, rate: parseFloat(event.target.value) });
  };

  const handleTimeChange = (event) => {
    setState({ ...state, time: parseFloat(event.target.value) });
  };

  // Calculate the compound interest
  const calculateInterest = () => {
    const { principal, rate, time, monthlyContribution } = state;
    const n = 12; // Compounding frequency set to monthly (12 times per year)
    const r = rate / 100;
    let result = principal;

    for (let i = 0; i < n * time; i++) {
      result += monthlyContribution; // Add the monthly contribution each month
      result *= 1 + r / n;
    }

    setState({ ...state, result });
  };

  return (
    <div style={backgroundImageStyle}>
      <Navbar />
      {/* <h1 className='text-center' style={{ color: 'white' }}>Compound Interest Calculator</h1> */}

      <div className="markuppadbot container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className='text-center'><b>Compound Interest Calculator</b></h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">
                      <p>Initial Investment (Principal)</p>
                    </div>
                    <div className="col text-end">
                      <input
                        type="number"
                        placeholder='0.00'
                        value={state.principal}
                        onChange={handlePrincipalChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">
                      <p>Monthly Contribution</p>
                    </div>
                    <div className="col text-end">
                      <input
                        type="number"
                        placeholder='0.00'
                        value={state.monthlyContribution}
                        onChange={handleMonthlyContributionChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">
                      <p>Length of Time in Years</p>
                    </div>
                    <div className="col text-end">
                      <input
                        type="number"
                        placeholder='0'
                        value={state.time}
                        onChange={handleTimeChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">
                      <p>Estimated Annual Interest Rate (%)</p>
                    </div>
                    <div className="col text-end">
                      <input
                        type="number"
                        placeholder='0 %'
                        value={state.rate}
                        onChange={handleRateChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </li>
                <li className="list-group-item text-center">
                  <button
                    className="btn btn-primary"
                    onClick={calculateInterest}
                    style={{ width: "60%" }}
                  >
                    Calculate
                  </button>
                </li>
                <li className="list-group-item">
                  <div className="row">
                    <div className="col">
                      <p>Final Amount</p>
                    </div>
                    <div className="col text-end">
                      {state.result.toFixed(2)}
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

export default CompoundInterestCalculator;
