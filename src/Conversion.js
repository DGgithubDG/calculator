import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CurrencyInput from './CurrencyInput';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';


function Conversion() {
  const gifUrl = 'https://64.media.tumblr.com/c90100fd260e77796e397f07d1771d34/fd850e41fad78fd6-86/s400x600/f15e520227c7dd8b471d729a48f26080712d8250.gifv';
  const backgroundImageStyle = {
    backgroundImage: `url(${gifUrl})`,
  };

  const [ammount1, setAmmount1] = useState(1);
  const [ammount2, setAmmount2] = useState(1);
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('USD');
  const [rates, setRates] = useState({});

  useEffect(() => {
    axios.get('http://data.fixer.io/api/latest?access_key=6323428e95fc71f70e3e65f1938b698d')
      .then((response) => {
        setRates(response.data.rates);
      });
  }, []);

  function format(number) {

    return number.toFixed(4);
  
  }

  function handleAmmount1Change(ammount1) {
    setAmmount1(ammount1);
    setAmmount2(format (ammount1 * (rates[currency2] / rates[currency1])));
  }

  function handleCurrency1Change(currency1) {
    setCurrency1(currency1);
    setAmmount2(format (ammount1 * (rates[currency2] / rates[currency1])));
  }

  function handleAmmount2Change(ammount2) {
    setAmmount2(ammount2);
    setAmmount1(format (ammount2 * (rates[currency1] / rates[currency2])));
  }

  function handleCurrency2Change(currency2) {
    setCurrency2(currency2);
    setAmmount1(format (ammount2 * (rates[currency1] / rates[currency2])));
  }

  return (
    <div className="g container-fluid p-0" style={backgroundImageStyle}>
    <Navbar />
    <div className="container mt-5">
      <h1 className="text-center text-white">Conversion</h1>
      <div className="row">
        <div className="col-md-6">
          <CurrencyInput
            onAmountChange={handleAmmount1Change}
            onCurrencyChange={handleCurrency1Change}
            currencies={Object.keys(rates)}
            amount={ammount1}
            currency={currency1}
            label="Amount 1"
          />
        </div>
        <div className="col-md-6">
          <CurrencyInput
            onAmountChange={handleAmmount2Change}
            onCurrencyChange={handleCurrency2Change}
            currencies={Object.keys(rates)}
            amount={ammount2}
            currency={currency2}
            label="Amount 2"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default Conversion;
