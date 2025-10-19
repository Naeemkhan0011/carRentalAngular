import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {
  metrics = [
    { icon: 'bi bi-people', title: 'Total Users', value: '1,240' },
    { icon: 'bi bi-cart-check', title: 'New Orders', value: '320' },
    { icon: 'bi bi-currency-rupee', title: 'Revenue', value: '₹8.4L' },
    { icon: 'bi bi-graph-up-arrow', title: 'Growth', value: '+14%' },
    { icon: 'bi bi-clock-history', title: 'Avg. Session', value: '3m 45s' },
    { icon: 'bi bi-bag-heart', title: 'Active Stores', value: '145' },
    { icon: 'bi bi-bar-chart', title: 'Page Views', value: '25K' },
    { icon: 'bi bi-star', title: 'Ratings', value: '4.8 / 5' },
  ];

  chartData: ChartConfiguration<'line'>['data'] = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ],
    datasets: [
      {
        data: [120, 190, 300, 500, 200, 300, 400, 350, 500, 600, 550, 700],
        label: '',
        fill: true,
        tension: 0.4,
        borderColor: '#0d6efd',
        backgroundColor: 'rgba(13, 110, 253, 0.1)',
        pointBackgroundColor: '#0d6efd',
      },
    ],
  };

  chartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true, labels: { color: '#000' } },
    },
    scales: {
      x: { ticks: { color: '#6c757d' }, grid: { color: 'transparent' } },
      y: { ticks: { color: '#6c757d' }, grid: { color: '#eee' } },
    },
  };
}
