// import React from 'react'
// import Plot from 'react-plotly.js';


// class Stock2 extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             stockChart2XValues: [],
//             stockChart2YValues: [],

//         }
//     }

 

//     componentDidMount() {
//         this.fetchStock();

//     }

//     fetchStock() {
//         const API_KEY = 'RC89KY2C1GG1PIMO';
//         const pointerToThis = this;
//         console.log(pointerToThis);
//         let StockSymbol2 = 'IBM';
//         // let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`;
//         let API_CALL2 = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol2}&interval=5min&apikey=${API_KEY}`;

//         // ` https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}interval=5min&apikey=${API_KEY}`

//         let stockChartXValues2Function = [];
//         let stockChartYValues2Function = [];


        
    
     
          
    
                
            
//             fetch(API_CALL2)
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) {
//                 console.log(data);
    
//                 for (var key in data['Time Series (5min)']) {
//                     stockChartXValues2Function.push(key);
//                     stockChartYValues2Function.push(data['Time Series (5min)'][key]['1. open']);
//                 }
    
//                 console.log(stockChartXValues2Function);
//                 pointerToThis.setState({
//                     stockChartXValues2: stockChartXValues2Function,
//                     stockChartYValues2: stockChartYValues2Function,
//                 });
//             });
    
            
//     }

    
    


//     render() {
//         const { stockSymbol } = this.state;
//         return (
//             <div>
          
//                 {/* <p>x value; {this.state.stockChartXValues}</p>
//                 <p>Y value; {this.state.stockChartYValues}</p> */}
//                 <div className='conainer'>
                
// <ul></ul>
// <Plot
//   data={[
//     {
//       x: this.state.stockChart2XValues,
//       y: this.state.stockChart2YValues,
//       type: 'scatter',
//       mode: 'lines+markers',
//       marker: { color: 'red' },
//     },
//   ]}
//   layout={{ width: 720, height: 440, title: `${stockSymbol} Share Price 2` }}
// />

//       <ul></ul>
      
//       </div>
//             </div>
//         )
//     }
// }

// export default Stock2