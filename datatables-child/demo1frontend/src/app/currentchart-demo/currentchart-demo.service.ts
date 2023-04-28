import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { CurrentDemoModel } from './currentchart-demo.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentchartDemoService {

  BaseUrl = "https://localhost:5001"
  // Post-Test
  postcurrent(data: any): Observable<Array<CurrentDemoModel>> {
    return this.http.post<Array<CurrentDemoModel>>('https://localhost:5001/currentchartdemo', data);
  }




  timedaya = moment().startOf('day').format("YYYY-MM-DDTHH:mm:ss")


  timedayb = moment().endOf('day').format("YYYY-MM-DDTHH:mm:ss")

  timeweek = moment().endOf('day').subtract(7, 'day').format("YYYY-MM-DDTHH:mm:ss")
  timemonth = moment().endOf('day').subtract(30, 'day').format("YYYY-MM-DDTHH:mm:ss")


  constructor(private http: HttpClient) { }



  GetTimeday() {
    return this.http.get(this.BaseUrl + '/currentchartdemo?start=' + this.timedaya + '&end=' + this.timedayb)
  }
  GetTimeweek() {
    return this.http.get(this.BaseUrl + '/currentchartdemo?start=' + this.timeweek + '&end=' + this.timedayb)
  }
  GetTimemonth() {
    return this.http.get(this.BaseUrl + '/currentchartdemo?from=' + this.timemonth + '&end=' + this.timedayb)
  }
}
