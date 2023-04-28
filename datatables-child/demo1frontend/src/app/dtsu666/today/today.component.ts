import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexStroke, ApexTooltip, ApexXAxis, ChartComponent } from 'ng-apexcharts';
import { Dtsu666Service } from '../dtsu666.service';
export type ChartOptions1 = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  stroke: ApexStroke | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
};
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  //  WeekComponent
  //@Component({
  //  selector: 'app-week',
  //  templateUrl: './week.component.html',
  //  styleUrls: ['./week.component.css']
  //})
  public data: any;
  private interval: any;
  constructor(private http: Dtsu666Service) { }
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions1> | any;


  ngOnInit(): void {
    this.getdata123();
    this.startReload();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  startReload(): void {
    this.interval = setInterval(() => {
      this.getdata123();
    }, 100000); // 10 seconds
  }

  async getdata123() {
    //--------------------------------------Today---------------------------------
    await this.http.GetTimeday().subscribe(
      result => {
        this.data = result;
        let arr2 = [];
        for (let i = 0; i < this.data.length; i++) {
          arr2.push(this.data[i].A_sum);
        }
        let arr3 = [];
        for (let i = 0; i < this.data.length; i++) {
          arr3.push(this.data[i].Date);
        }

        this.chartOptions = {
          series: [
            {
              name: "Current",
              data: arr2.map(num => num.toFixed(2))
            }
          ],
          chart: {
            height: 400,
            type: 'line',
            dropShadow: {
              enabled: true,
              color: '#000',
              top: 18,
              left: 10,
              blur: 5,
              opacity: 0.2
            },
            toolbar: {
              show: true
            }
          },
          colors: ['#77B6EA', '#545454'],
          dataLabels: {
            enabled: true,
          },
          stroke: {
            curve: 'smooth'
          },
          title: {
            text: 'Average High & Low Temperature',
            align: 'left'
          },
          grid: {
            borderColor: '#e7e7e7',
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          markers: {
            size: 1
          },
          xaxis: {
            title: {
              style: {
                color: 'black',
                fontFamily: 'Roboto,helvetica neue,helvetica,arial,sans-serif',
                fontSize: '12.2px',
                fontWeight: 380,
              }
            },
            labels: {
              formatter: function (val: any) {
                return moment(val).format("yyyy-MM-DD HH:mm:ss A")
              },
            },
            categories: arr3
          },
          yaxis: {
            title: {
              text: 'Current (A)',
              //rotate: -90,
              style: {
                color: 'black',
                fontFamily: 'Roboto,helvetica neue,helvetica,arial,sans-serif',
                fontSize: '15px',
                fontWeight: 600,
              },
            },
          },
          legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: false,
            offsetY: 0,
            offsetX: 0
          }
        };
      }


    )
  }
}
