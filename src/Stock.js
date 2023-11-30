import React from 'react'
import Plot from 'react-plotly.js';


class Stock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stockChartXValues: [],
            stockChartYValues: []

        }
    }

    componentDidMount() {
        this.fetchStock();

    }

    fetchStock() {
        const API_KEY = 'RC89KY2C1GG1PIMO';
        const pointerToThis = this;
        console.log(pointerToThis)
        let StockSymbol = 'AMZN'
        let API_CALL = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&apikey=${API_KEY}`;
        // ` https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}interval=5min&apikey=${API_KEY}`
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = []



        fetch(API_CALL)
            .then(
                function (response) {
                    return response.json();
                }
            )

            .then(
                function (data) {
                    console.log(data);

                    for (var key in data[`Time Series (Daily)`]) {
                        stockChartXValuesFunction.push(key);
                        stockChartYValuesFunction.push(data[`Time Series (Daily)`]
                        [key][`1. open`]);
                    }

                    console.log(stockChartXValuesFunction)
                    pointerToThis.setState({
                        stockChartXValues: stockChartXValuesFunction,
                        stockChartYValues: stockChartYValuesFunction
                    })
                }
            )
    }


    render() {
        return (
            <div>
                <h1>
                    Stock
                </h1>
                <p>x value; {this.state.stockChartXValues}</p>
                <p>x value; {this.state.stockChartYValues}</p>
                <Plot
        data={[
          {
            x: this.state.stockChartXValues,
            y: this.state.stockChartYValues,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={{width: 720, height: 440, title: ` Share Price `}}
      />
            </div>
        )
    }
}

export default Stock