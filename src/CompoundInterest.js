import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Footerfixed from './FooterFixed';
import { FaQuestionCircle } from "react-icons/fa";


function CompoundInterestCalculator() {
  const [state, setState] = useState({
    principal: 10000, // Initial principal amount
    monthlyContribution: 100, // Monthly contribution amount
    rate: 8, // Annual interest rate
    time: 5, // Number of years
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

      <div className="g container">
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
                      <b>Initial Investment (Principal) <FaQuestionCircle className='padbot' data-bs-toggle="modal" data-bs-target="#initial" /></b>
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
                      <b>Monthly Contribution <FaQuestionCircle className='padbot' data-bs-toggle="modal" data-bs-target="#monthly" /></b>
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
                      <b>Length of Time in Years <FaQuestionCircle className='padbot' data-bs-toggle="modal" data-bs-target="#length" /></b>
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
                      <b>Estimated Annual Interest Rate (%) <FaQuestionCircle className='padbot' data-bs-toggle="modal" data-bs-target="#estimated" /></b>
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
                      <b>Final Amount</b>
                    </div>
                    <div className="col text-end">
                      {state.result.toFixed(2)}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <ul></ul>
            <h6 className='text-center' style={{color: 'white'}}>This compound interest calculator estimates the amount an indidual will accumulate after filling out the fields above</h6>
{/*Modal */}
{/*Modal initial  */}

<div class="modal fade" id="initial" tabindex="-1" aria-labelledby="initialLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="initialLabel">Initial investment</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              The capital you already have invested or are willing to invest right away.
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>

{/*Modal initial  */}

{/*Modal Monthly */}

<div class="modal fade" id="monthly" tabindex="-1" aria-labelledby="monthlyLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="monthlyLabel">Monthly contribution</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              The amount you decide to increase your investment by each month.
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>

{/*Modal monthly */}

{/*Modal length */}

<div class="modal fade" id="length" tabindex="-1" aria-labelledby="lengthLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="lengthLabel">Length of time in years</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              The amount of time you wish to keep investing for.
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>

{/*Modal length */}


{/*Modal estimated */}

<div class="modal fade" id="estimated" tabindex="-1" aria-labelledby="estimatedabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="estimatedLabel">Estimate interest rate % (annual)</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                              The amount generated yearly from your invested.
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>

{/*Modal estimated */}

{/*Modal */}
          </div>
        </div>
      </div>
      <Footerfixed />
    </div>
  );
}

export default CompoundInterestCalculator;
