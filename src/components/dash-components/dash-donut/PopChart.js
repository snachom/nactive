import { Component } from 'react';
import Chart from 'react-apexcharts';

export class RadialChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["Drupal", "SASS", "Javascript", "HTML", "Git"],
      },
      series: [60, 55, 41, 17, 15],
    }
  }

  render() {
    return (
      <Chart 
        options={this.state.options}
        series={this.state.series}
        type="donut"
        height="350"
        width="100%"
      />
    )
  }

}
