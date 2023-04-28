import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import moment from 'moment';
import { Observable } from 'rxjs';
import { FilterDateModel } from './filterdate.model';
import { FilterdateService } from './filterdate.service';

@Component({
  selector: 'app-filterdate',
  templateUrl: './filterdate.component.html',
  styleUrls: ['./filterdate.component.css']
})
export class FilterdateComponent implements OnInit {
  // ------------------------------------------Date--------------------------
  /*timedaya = moment().startOf('day').format("YYYY-MM-DDTHH:mm:ss");*/
  moment12 = new Date();
  mo = moment().format("HH:mm:ss");
  date1:any;
  date2: any;
  Days: any;
  datee1: any;

  //Caculatordays() {
  //  const datee1 = new Date(this.date1);
  //  const datee2 = new Date(this.date2);

  //  const Time = datee2.getTime() - datee1.getTime();
  //  this.Days = Time / (1000 * 3600 * 24);
  //}
  //----------------------------------------------------------------------------

  //------------------------------Table-------------------------------------
  public allCurrent!: Array<FilterDateModel>;

  isLoading = true;

  constructor(private http: FilterdateService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.mo = moment().format("HH:mm:ss");
      
    }, 1000);
    //setInterval(() => {
    //  this.getAll();
    //}, 1000);
    this.getAll();
  }


  getAll() {
    this.http.GetTimeweek(this.date1, this.date2).subscribe(
      (res) => {
        this.allCurrent = res;
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
        this.isLoading = false;
      }
    );
  }

}
