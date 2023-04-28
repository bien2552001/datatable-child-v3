import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { Observable } from 'rxjs';
import { FilterDateModel } from './filterdate.model';

@Injectable({
  providedIn: 'root'
})
export class FilterdateService {

  BaseUrl = "https://localhost:5001"
  // Post-Test
  postcurrent(data: any): Observable<Array<FilterDateModel>> {
    return this.http.post<Array<FilterDateModel>>('https://localhost:5001/chart', data);
  }




  timedaya = moment().startOf('day').format("YYYY-MM-DDTHH:mm:ss")


  timedayb = moment().endOf('day').format("YYYY-MM-DDTHH:mm:ss")

  timeweek = moment().endOf('day').subtract(7, 'day').format("YYYY-MM-DDTHH:mm:ss")
  timemonth = moment().endOf('day').subtract(30, 'day').format("YYYY-MM-DDTHH:mm:ss")


  constructor(private http: HttpClient) { }



  //____________________________Get____________________________
  GetTimeday(fields: string): Observable<Array<FilterDateModel>> {
    const url = `${this.BaseUrl}/dtsu666?Fields=${fields}`;
    return this.http.get<Array<FilterDateModel>>(url);
  }

  GetTimeweek(date1: string, date2: string): Observable<any> {
    const startDate = moment(date1).startOf('day').format("YYYY-MM-DDTHH:mm:ss");
    const endDate = moment(date2).endOf('day').format("YYYY-MM-DDTHH:mm:ss");
    const url = `${this.BaseUrl}/chart?start=${startDate}&end=${endDate}`;
    return this.http.get(url);
  }

  //GetTimeweek(): Observable<any> {
  //  const startDate = moment().endOf('day').subtract(7, 'day').format("YYYY-MM-DDTHH:mm:ss");
  //  const endDate = moment().endOf('day').format("YYYY-MM-DDTHH:mm:ss");
  //  /*startDate.setDate(startDate.getDate() - 7); // Lấy ngày 7 ngày trước*/
  //  const url = `${this.BaseUrl}/chart?start=${startDate}&end=${endDate}`;
  //  return this.http.get(url);
  //}
  //GetTimeweek(): Observable<any> {
  //  const startDate = new Date();
  //  const endDate = new Date();
  //  startDate.setDate(startDate.getDate() - 7); // Lấy ngày 7 ngày trước
  //  const url = `${this.BaseUrl}/chart?start=${startDate.toISOString()}&end=${endDate.toISOString()}`;
  //  return this.http.get(url);
  //}

  GetTimeweek1() {
    return this.http.get(this.BaseUrl + '/chart?start=' + this.timeweek + '&end=' + this.timedayb)
  }
  GetTimemonth() {
    return this.http.get(this.BaseUrl + '/chart?from=' + this.timemonth + '&end=' + this.timedayb)
  }
}
