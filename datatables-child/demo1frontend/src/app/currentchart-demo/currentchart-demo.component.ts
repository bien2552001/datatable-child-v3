import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { ApexAxisChartSeries, ApexChart, ApexDataLabels, ApexStroke, ApexTooltip, ApexXAxis, ChartComponent } from 'ng-apexcharts';
import { CurrentchartDemoService } from './currentchart-demo.service';


export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  stroke: ApexStroke | any;
  tooltip: ApexTooltip | any;
  dataLabels: ApexDataLabels | any;
};

@Component({
  selector: 'app-currentchart-demo',
  templateUrl: './currentchart-demo.component.html',
  styleUrls: ['./currentchart-demo.component.css']
})

export class CurrentchartDemoComponent implements OnInit {

  public data: any;
  public data2: any;
  public data3: any;
  private interval: any;

  constructor(private http: CurrentchartDemoService) { }
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
    //--------------------------------------Today---------------------------------
    await this.http.GetTimeday().subscribe(
      result => {
        this.data = result;
        let arr2 = [];
        for (let i = 0; i < this.data.length; i++) {
          arr2.push(this.data[i].value);
        }
        let arr3 = [];
        for (let i = 0; i < this.data.length; i++) {
          arr3.push(this.data[i].date);
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
   //--------------------------------------------Weeken--------------------------
    await this.http.GetTimeweek().subscribe(
      result => {
        this.data2 = result;
        let arr2 = [];
        for (let i = 0; i < this.data2.length; i++) {
          arr2.push(this.data2[i].value);
        }
        let arr3 = [];
        for (let i = 0; i < this.data2.length; i++) {
          arr3.push(this.data2[i].date);
        }

        this.chartOptions1 = {
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




    //await this.http.GetTimeday().subscribe(

    //  result => {
    //    this.data1 = result

    //    let arr1 = [];
    //    for (let i = 0; i < this.data1.length; i++) {
    //      arr1.push(this.data1[i].value)

    //    }
    //    let arr3 = [];
    //    for (let i = 0; i < this.data1.length; i++) {
    //      arr3.push(this.data1[i].date)
    //    }
    //    this.chartOptions = {
    //      series: [
    //        {
    //          name: "Current",
    //          data: arr1

    //        }
    //      ],
    //      chart: {
    //        height: 350,
    //        type: "area"
    //      },
    //      dataLabels: {
    //        enabled: false
    //      },

    //      xaxis: {
    //        title: {
    //          text: 'Date',

    //          style: {
    //            color: 'black',
    //            fontFamily: 'Roboto,helvetica neue,helvetica,arial,sans-serif',
    //            fontSize: '12.2px',
    //            fontWeight: 380,
    //          }
    //        },
    //        labels: {
    //          formatter: function (val: any) {
    //            return moment(val).format('yyyy-MM-DD HH:mm:ss A')
    //          },
    //        },

    //        categories: arr3
    //      },
    //      yaxis: {
    //        title: {
    //          text: '°C / %',
    //          rotate: -90,
    //          style: {
    //            color: 'black',
    //            fontFamily: 'Roboto,helvetica neue,helvetica,arial,sans-serif',
    //            fontSize: '13px',
    //            fontWeight: 380,
    //          },
    //        },
    //      },
    //      tooltip: {
    //        x: {
    //          format: "dd/MM/yyyy HH:mm:ss",

    //        }
    //      },
    //      markers: {
    //        size: 4,
    //        hover: {
    //          size: 9
    //        }
    //      },
    //      colors: ["#F08080", "#80DAEC"]
    //    };

    //  }
    //)
  }
}
