import React, {Component} from 'react';
import Chart from 'chart.js';

class BarGraph extends Component {
    chartRef = React.createRef();
    
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "bar",
            data: {
                labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                datasets: [
                    {
                        label: "Transactions",
                        data: [86, 67, 91, 67, 78, 89, 99],
                    }
                ]
            },
            options: {
            }
        });
    }
    render() {
        return (
            <div>
                <canvas
                    ref={this.chartRef}
                />
            </div>
        )
    }
}
export default BarGraph;