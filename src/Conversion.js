// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar';
// import Footer from './Footer';

// function Conversion() {
//   const [amount, setAmount] = useState(1);
//   const [fromCurrency, setFromCurrency] = useState('USD');
//   const [toCurrency, setToCurrency] = useState('GBP');
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const gifUrl = 'https://64.media.tumblr.com/c90100fd260e77796e397f07d1771d34/fd850e41fad78fd6-86/s400x600/f15e520227c7dd8b471d729a48f26080712d8250.gifv';

//   useEffect(() => {
//     // Replace the URL with your API endpoint
//     fetch('https://v6.exchangerate-api.com/v6/13ee51fba33be7a7f3a26f8e/latest/' + fromCurrency)
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data.conversion_rates);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//         setLoading(false);
//       });
//   }, [fromCurrency]);

//   const handleAmountChange = (e) => {
//     setAmount(e.target.value);
//   };

//   const handleFromCurrencyChange = (e) => {
//     setFromCurrency(e.target.value);
//   };

//   const handleToCurrencyChange = (e) => {
//     setToCurrency(e.target.value);
//   };

//   const backgroundImageStyle = {
//     backgroundImage: `url(${gifUrl})`,
//   };

//   useEffect(() => {
//     const disableHorizontalScroll = (e) => {
//       if (e.touches.length === 1) {
//         const touch = e.touches[0];
//         const touchStartX = touch.clientX;
//         const touchStartY = touch.clientY;
  
//         const handleTouchMove = (e) => {
//           const deltaX = touchStartX - e.touches[0].clientX;
//           const deltaY = touchStartY - e.touches[0].clientY;
  
//           if (Math.abs(deltaX) > Math.abs(deltaY)) {
//             e.preventDefault();
//           }
//         };
  
//         document.addEventListener('touchmove', handleTouchMove, { passive: false });
  
//         document.addEventListener('touchend', () => {
//           document.removeEventListener('touchmove', handleTouchMove);
//         }, { once: true });
//       }
//     };
  
//     document.addEventListener('touchstart', disableHorizontalScroll, { passive: false });
  
//     return () => {
//       document.removeEventListener('touchstart', disableHorizontalScroll);
//     };
//   }, []);
  

//   return (
//     <div style={backgroundImageStyle}>
//       <Navbar />
//       <div className="App no-horizontal-scroll" style={{ color: 'white' }}>
//         <h1 className='conversionpadbot'>Currency Conversion</h1>
//         <div className='gg'>
//           <div className="row">
//             <div className="col d-flex justify-content-center">
//               <div class="input-group mb-3" style={{ width: '40%' }}>
//                 <input
//                   type="text"
//                   class="form-control"
//                   aria-label="Sizing example input"
//                   aria-describedby="inputGroup-sizing-default"
//                   value={amount}
//                   onChange={handleAmountChange}
//                 />
//                 <span class="input-group-text" id="inputGroup-sizing-default">
//                   <select value={fromCurrency} onChange={handleFromCurrencyChange}>
//                     {Object.keys(data).map((currency) => (
//                       <option key={currency} value={currency}>
//                         {currency}
//                       </option>
//                     ))}
//                   </select>
//                 </span>
//               </div>
//             </div>
//             <div className="col d-flex justify-content-center">
//               <div class="input-group mb-3 " style={{ width: '40%' }}>
//                 <input
//                   type="text"
//                   class="form-control"
//                   aria-label="Sizing example input"
//                   aria-describedby="inputGroup-sizing-default"
//                   value={amount * (data[toCurrency] || 0)}
//                   readOnly
//                 />
//                 <span class="input-group-text" id="inputGroup-sizing-default">
//                   <select value={toCurrency} onChange={handleToCurrencyChange}>
//                     {Object.keys(data).map((currency) => (
//                       <option className='btn btn-primary' key={currency} value={currency}>
//                         {currency}
//                       </option>
//                     ))}
//                   </select>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Conversion;
