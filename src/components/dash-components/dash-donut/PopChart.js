import { Component } from 'react';
import Chart from 'react-apexcharts';

export class RadialChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["React", "SASS", "Javascript", "HTML", "Git"],
      },
      series: [100, 55, 80, 17, 15],
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
