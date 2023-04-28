import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexStroke, ApexTooltip, ApexXAxis, ChartComponent } from 'ng-apexcharts';
import { ApchartService } from './apchart.service';

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  stroke: ApexStroke | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;

};
@Component({
  selector: 'app-apexchart-dac',
  templateUrl: './apexchart-dac.component.html',
  styleUrls: ['./apexchart-dac.component.css']
})
export class ApexchartDACComponent implements OnInit {

  public data1: any;
  public data2: any;
  public data3: any;
  private interval: any;

  constructor(private http: ApchartService) { }
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public chartOptions1: Partial<ChartOptions> | any;
  public chartOptions2: Partial<ChartOptions> | any;

  ngOnInit(): void {
    this.getdata();
    this.startReload();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  startReload(): void {
    this.interval = setInterval(() => {
      this.getdata();
    }, 100000); // 10 seconds
  }

  async getdata() {
    await this.http.GetTimeday().subscribe(

      result => {
        this.data1 = result
    
        let arr1 = [];
        for (let i = 0; i < this.data1.length; i++) {
          arr1.push(this.data1[i].temperatureC)

        }
        let arr2 = [];
        for (let i = 0; i < this.data1.length; i++) {
          arr2.push(this.data1[i].humidity)

        }
        let arr3 = [];
        for (let i = 0; i < this.data1.length; i++) {
          arr3.push(this.data1[i].createdDate)
        }
        this.chartOptions = {
          series: [
            {
              //name: "Temperature",
              data: arr1

            },
            {
              name: "Humidity",
              data: arr2
            }
          ],
          chart: {
            height: 350,
            type: "area"
          },
          //dataLabels: {
          //  enabled: false
          //},
     
          xaxis: {
            title: {
              text: 'Date',

              style: {
                color: 'black',
                fontFamily: 'Roboto,helvetica neue,helvetica,arial,sans-serif',
                fontSize: '12.2px',
                fontWeight: 380,
              }
            },
            //labels: {
            //  formatter: function (val: any) {
            //    return moment(val).format('yyyy-MM-DD HH:mm:ss A')
            //  },
            //},

            /*categories: arr3*/
          },
          yaxis: {
            title: {
              text: '°C / %',
              rotate: -90,
              style: {
                color: 'black',
                fontFamily: 'Roboto,helvetica neue,helvetica,arial,sans-serif',
                fontSize: '13px',
                fontWeight: 380,
              },
            },
          },
          //tooltip: {
          //  x: {
          //    format: "dd/MM/yyyy HH:mm:ss",

          //  }
          //},
          //markers: {
          //  size: 4,
          //  hover: {
          //    size: 9
          //  }
          //},
          colors: ["#F08080", "#80DAEC"]
        };

      }
    )

    
  }
}
