import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { ApexModel } from './test/test.model';

@Injectable({
  providedIn: 'root'
})
export class ApchartService {

  BaseUrl = "https://localhost:5001"
  // Post-Test
  postcurrent(data: any): Observable<Array<ApexModel>> {
    return this.http.post<Array<ApexModel>>('https://localhost:5001/chart', data);
  }




  timedaya = moment().startOf('day').format("YYYY-MM-DDTHH:mm:ss")


  timedayb = moment().endOf('day').format("YYYY-MM-DDTHH:mm:ss")

  timeweek = moment().endOf('day').subtract(7, 'day').format("YYYY-MM-DDTHH:mm:ss")
  timemonth = moment().endOf('day').subtract(30, 'day').format("YYYY-MM-DDTHH:mm:ss")


  constructor(private http: HttpClient) { }

 

  GetTimeday() {
    return this.http.get(this.BaseUrl + '/chart?start=' + this.timedaya + '&end=' + this.timedayb)
  }
  GetTimeweek() {
    return this.http.get(this.BaseUrl + '/chart?start=' + this.timeweek + '&end=' + this.timedayb)
  }
  GetTimemonth() {
    return this.http.get(this.BaseUrl + '/chart?from=' + this.timemonth + '&end=' + this.timedayb)
  }
}
