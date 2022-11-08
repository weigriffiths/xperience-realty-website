import { Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import {
	Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const graphData = {
	labels: [],
  datasets: [
		{
		label: 'Mortgage Balance',
		fill: false,
		lineTension: 0.1,
		backgroundColor: "#ff6900",
		borderColor: '#ff6900',
		borderCapStyle: 'butt',
		borderDashOffset: 0.0,
		borderJoinStyle: 'miter',
		pointBorderColor: '#ff6900',
		pointBackgroundColor: '#fff',
		pointBorderWidth: 1,
		pointHoverRadius: 5,
		pointHoverBackgroundColor: '#ff6900',
		pointHoverBorderColor: 'rgba(220,220,220,1)',
		pointHoverBorderWidth: 2,
		pointRadius: 1,
		pointHitRadius: 10,
		data: []
    },
    {
		label: 'Interest Paid',
		fill: false,
		lineTension: 0.1,
		backgroundColor: '#ffd2b3',
		borderColor: '#ffd2b3',
		borderCapStyle: 'butt',
		borderDashOffset: 0.0,
		borderJoinStyle: 'miter',
		pointBorderColor: '#ffd2b3',
		pointBackgroundColor: '#fff',
		pointBorderWidth: 1,
		pointHoverRadius: 5,
		pointHoverBackgroundColor: '#ffd2b3',
		pointHoverBorderColor: 'rgba(220,220,220,1)',
		pointHoverBorderWidth: 2,
		pointRadius: 1,
		pointHitRadius: 10,
		data: []
    },
    {
		label: 'Principal Repaid',
		fill: false,
		lineTension: 0.1,
		backgroundColor: '#ffb480',
		borderColor: '#ffb480',
		borderCapStyle: 'butt',
		borderDashOffset: 0.0,
		borderJoinStyle: 'miter',
		pointBorderColor: '#ffb480',
		pointBackgroundColor: '#fff',
		pointBorderWidth: 1,
		pointHoverRadius: 5,
		pointHoverBackgroundColor: '#ffb480',
		pointHoverBorderColor: 'rgba(220,220,220,1)',
		pointHoverBorderWidth: 2,
		pointRadius: 1,
		pointHitRadius: 10,
		data: []
    }
  ]
};

const graphOptions = {
	scales: {
    y: [{
      ticks: {
          callback: (value, index, values) => {
            return '$' + value;
            
          }
      }
    }]
  },
	responsive: true,
	plugins: {
    legend: {
      position: 'top',
    },
		tooltip: {
			callbacks: {
				label: context => {
					let label = context.dataset.label || '';
					if (label) {
							label += ': ';
					}
					if (context.parsed.y !== null) {
							label += new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD', maximumSignificantDigits:6 }).format(context.parsed.y);
					}
					return label;
						// return parseFloat(tooltipItems.value).toLocaleString('en-AU', {style:'currency', currency:'AUD'}) + ' ' + data.datasets[tooltipItems.datasetIndex].label;
				}
			}
		}

  },
}

export default function PaymentGraph({mortgageTerm, yearlyPayments}) {
	const [chartData, setChartData] = useState(graphData)

	// graphData.labels = [];
	// graphData.datasets[0].data = []; //mortgage balance
	// graphData.datasets[1].data = []; //interest
	// graphData.datasets[2].data = []; //principal paid

	const updateData = () => {
		let time = [], balance = [], interest = [], principal = [];
		for(let i = 0; i <= mortgageTerm; i++) {
			time.push('Year '+ i);
			balance.push(yearlyPayments[i].outstandingBalance);
			interest.push(yearlyPayments[i].interestPaidToDate);
			principal.push(yearlyPayments[i].principalRepaidToDate);

			setChartData({
				labels: time,
				datasets: [
					{
					label: 'Mortgage Balance',
					fill: false,
					lineTension: 0.1,
					backgroundColor: "#ff6900",
					borderColor: '#ff6900',
					borderCapStyle: 'butt',
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: '#ff6900',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: '#ff6900',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: balance
					},
					{
					label: 'Interest Paid',
					fill: false,
					lineTension: 0.1,
					backgroundColor: '#ffd2b3',
					borderColor: '#ffd2b3',
					borderCapStyle: 'butt',
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: '#ffd2b3',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: '#ffd2b3',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: interest
					},
					{
					label: 'Principal Repaid',
					fill: false,
					lineTension: 0.1,
					backgroundColor: '#ffb480',
					borderColor: '#ffb480',
					borderCapStyle: 'butt',
					borderDashOffset: 0.0,
					borderJoinStyle: 'miter',
					pointBorderColor: '#ffb480',
					pointBackgroundColor: '#fff',
					pointBorderWidth: 1,
					pointHoverRadius: 5,
					pointHoverBackgroundColor: '#ffb480',
					pointHoverBorderColor: 'rgba(220,220,220,1)',
					pointHoverBorderWidth: 2,
					pointRadius: 1,
					pointHitRadius: 10,
					data: principal
					}
				]
			})
		}
	}
	
	useEffect(() => {
		updateData();
	}, [mortgageTerm, yearlyPayments]	)

	return (
		<Box maxW="650px">
			<Line 
				data={chartData}
				options={graphOptions}
			/>
		</Box>
	)
}