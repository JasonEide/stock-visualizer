import React, { Component } from 'react'

export class Stock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            x_values: [],
            y_values: []
        }
    }
    componentDidMount() {
        this.fetchAPI();
    }
    fetchAPI() {
        const API_key = 'XLOFSB8IFD1ERBB8';
        let API_symbol = 'AAPL';
        let API_url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${API_symbol}&outputsize=full&apikey=${API_key}`;

        fetch(API_url)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data);
                }
            )
    }
    

    
    render() {
    return (
      <div>stock</div>
    )
  }
}

export default Stock