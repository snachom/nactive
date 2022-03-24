import { Component } from 'react';
import Chart from 'react-apexcharts';

export class LineChart extends Component {
  
  constructor(props) {
    super(props);

    // console.log(this.props.com[0])
    // const communities = this.props.com[0]
    const communities = ['Almería', 'Cádiz', 'Cordoba', 'Granada', 'Huelva', 'Jaén', 'Málaga', 'Sevill', ]
    const confirmed = this.props.conf[0]

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: communities
        },
        theme: {
          palette: 'palette5'
        }
      },
      series: [
        {
          name: "COVID-19 confirmed",
          data: confirmed
        }
      ]
    };
  }

  render() {
    return (
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height="280"
              width="100%"
            />
          </div>
        </div>

    );
  }

}
