import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { Dtsu666Model } from './dtsu666.model';

@Injectable({
  providedIn: 'root'
})
export class Dtsu666Service {

  BaseUrl = "https://localhost:5001"
  // Post-Test
  postcurrent(data: any): Observable<Array<Dtsu666Model>> {
    return this.http.post<Array<Dtsu666Model>>('https://localhost:5001/dtsu666', data);
  }




  timedaya = moment().startOf('day').format("YYYY-MM-DDTHH:mm:ss")
  timedayb = moment().endOf('day').format("YYYY-MM-DDTHH:mm:ss")

  timeweek = moment().endOf('day').subtract(7, 'day').format("YYYY-MM-DDTHH:mm:ss")
  timemonth = moment().endOf('day').subtract(30, 'day').format("YYYY-MM-DDTHH:mm:ss")


  constructor(private http: HttpClient) { }


  getAllDTSU666() {
    return this.http.get('https://localhost:5001/dtsu666?start=2023-04-09T16%3A14%3A28.7595646%2B07%3A00&end=2023-04-09T16%3A14%3A28.7595646%2B07%3A00');
  }
  GetTimeday() {
    return this.http.get(this.BaseUrl + '/dtsu666?&Fields=A_sum&start=' + this.timedaya + '&end=' + this.timedayb)
  }
  GetTimeweek() {
    return this.http.get(this.BaseUrl + '/dtsu666?&Fields=A_sum&start=' + this.timeweek + '&end=' + this.timedayb)
  }
  GetTimemonth() {
    return this.http.get(this.BaseUrl + '/dtsu666?start=' + this.timemonth + '&end=' + this.timedayb)
  }
}
