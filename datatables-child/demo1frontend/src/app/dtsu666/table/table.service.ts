import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { TableTestDTSU666Model } from './table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  BaseUrl = "https://localhost:5001"
  //____________________________Get____________________________
  //get_DTSU666(): Observable<Array<TableTestDTSU666Model>> {
  //  return this.http.get<Array<TableTestDTSU666Model>>('https://localhost:5001/dtsu666?Fields=A_sum,Date');
  //}

  //get_DTSU666(): Observable<Array<TableTestDTSU666Model>> {
  //  const url = `${this.BaseUrl}/dtsu666?Fields=A_sum,Date&start=${this.timedaya}&end=${this.timedayb}`;
  //  return this.http.get<Array<TableTestDTSU666Model>>(url);
  //}

  //get_DTSU666(fields: string): Observable<Array<TableTestDTSU666Model>> {
  //  const url = `${this.BaseUrl}/dtsu666?Fields=${fields}&start=${this.timedaya}&end=${this.timedayb}`;
  //  return this.http.get<Array<TableTestDTSU666Model>>(url);
  //}

  get_DTSU666(fields: string): Observable<Array<TableTestDTSU666Model>> {
    const url = `${this.BaseUrl}/dtsu666?Fields=${fields}`;
    return this.http.get<Array<TableTestDTSU666Model>>(url);
  }


  //____________________________Post____________________________
  post_DTSU666(data: any): Observable<Array<TableTestDTSU666Model>> {
    return this.http.post<Array<TableTestDTSU666Model>>('https://localhost:5001/dtsu666', data);
  }


  timedaya = moment().startOf('day').format("YYYY-MM-DDTHH:mm:ss")
  timedayb = moment().endOf('day').format("YYYY-MM-DDTHH:mm:ss")

  timeweek = moment().endOf('day').subtract(7, 'day').format("YYYY-MM-DDTHH:mm:ss")
  timemonth = moment().endOf('day').subtract(30, 'day').format("YYYY-MM-DDTHH:mm:ss")





  getAllDTSU666() {
    return this.http.get('https://localhost:5001/dtsu666?start=2023-04-09T16%3A14%3A28.7595646%2B07%3A00&end=2023-04-09T16%3A14%3A28.7595646%2B07%3A00');
  }
  GetTimeday() {
    return this.http.get(this.BaseUrl + '/dtsu666?Fields=A_sum&start=' + this.timedaya + '&end=' + this.timedayb)
  }
  GetTimeweek() {
    return this.http.get(this.BaseUrl + '/dtsu666?Fields=A_sum&start=' + this.timeweek + '&end=' + this.timedayb)
  }
  GetTimemonth() {
    return this.http.get(this.BaseUrl + '/dtsu666?start=' + this.timemonth + '&end=' + this.timedayb)
  }
}
