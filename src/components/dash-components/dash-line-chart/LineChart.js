import { Component } from 'react';
import Chart from 'react-apexcharts';

export class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: '#f4f4f4',
          foreColor: '#333',
        },
        xaxis: {
          category: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        },
        plotOptions: {
          bar: {
            horizontal: false,
          }
        },
        fill: {
          colors: ['#f44336']
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'OS AUDIENCE STATS',
          align: 'center',
          margin: 20,
          offsetY: 20,
          style: { 
            fontSize: '18px',
            color: '#333'
          }
        },
      },
      series: [{
        name: 'data',
        data: [30, 40, 35, 50, 49, 60, 70, 91]
      }]
    }
  }

  render() {
    return (
      <Chart 
        options={this.state.options}
        series={this.state.series}
        type="line"
        height="350"
        width="100%"
      />
    )
  }

}
