import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, Colors, registerables } from 'chart.js';
import { format, subDays, subMonths } from 'date-fns';

Chart.register(...registerables);

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  barChart: any;
  myChart: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.barChartMethod();
    this.createChart();
  }
  

  barChartMethod() {
    this.barChart = new Chart('Barchart1', {
      type: 'bar',
      data: {
        labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
        datasets: [
          {
            label: '# of Votes',
            data: [200, 50, 30, 15, 20, 34],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                size: 10,
                family: "'Helvetica Neue', sans-serif",
                weight: "100",
              },
              color: "white",
            },
            grid: {
              color: "#2d2b2b",
            },
          },
          x: {
            ticks: {
              font: {
                size: 10,
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                weight: "100",
              },
              color: "white",
            },
            grid: {
              color: "#2d2b2b",
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: "Election Results",
            font: {
              size: 20,
              family: "'Helvetica Neue', 'Helvetica', sans-serif",
              weight: '100',
            },
            color: "white",
            padding: {
              top: 5,
              bottom: 5
            }
          },
          legend: {
            labels: {
              font: {
                size: 14,
                family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                weight: "100",
              },
              color: "white",
            },
          },
        },
      },
    });
  }
  //----------------------------------------

  
  data = {
    // 7 tháng trước
    //labels: Array.from({ length: 10 }, (_, i) => subMonths(new Date(), i)).reverse().map(date => format(date, 'MMM yyyy dd')),
    // 7 ngày trước
    label: Chart.defaults.color = 'white',
    labels: Array.from({ length: 7 }, (_, i) => subDays(new Date(), i)).reverse().map(date => format(date, 'MMM dd')),
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 100, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };

  options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
   
  };

  //-----config------
  private createChart(): void {
     this.myChart = new Chart('myChart', {
      type: 'bar',
       data: this.data,
      options: this.options,
    });
  }
}



