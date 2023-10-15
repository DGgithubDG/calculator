import React from 'react';
import PropTypes from 'prop-types';

function CurrencyInput(props) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <form>
            <div className="mb-3">
              <label htmlFor="amount" className="form-label" style={{ color: 'white' }}>
                Amount
              </label>
              <input
                type="text"
                className="form-control"
                id="amount"
                value={props.amount}
                onChange={(e) => props.onAmountChange(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="currency" className="form-label" style={{ color: 'white' }}>
                Currency
              </label>
              <select
                className="form-select"
                id="currency"
                value={props.currency}
                onChange={(e) => props.onCurrencyChange(e.target.value)}
              >
                {props.currencies.map((currency) => (
                  <option value={currency} key={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

CurrencyInput.propTypes = {
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default CurrencyInput;
