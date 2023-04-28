//import { Component, OnInit } from '@angular/core';

//@Component({
//  selector: 'app-daterangerpicker',
//  templateUrl: './daterangerpicker.component.html',
//  styleUrls: ['./daterangerpicker.component.css']
//})
//export class DaterangerpickerComponent implements OnInit {

//  constructor() { }

//  ngOnInit(): void {
//  }
//  //public daterange: any = {};

//  //// see original project for full list of options
//  //// can also be setup using the config service to apply to multiple pickers
//  //public options: any = {
//  //  locale: { format: 'YYYY-MM-DD' },
//  //  alwaysShowCalendars: false,
//  //};

//  //public selectedDate(value: any, datepicker?: any) {
//  //  // this is the date  selected
//  //  console.log(value);

//  //  // any object can be passed to the selected event and it will be passed back here
//  //  datepicker.start = value.start;
//  //  datepicker.end = value.end;

//  //  // use passed valuable to update state
//  //  this.daterange.start = value.start;
//  //  this.daterange.end = value.end;
//  //  this.daterange.label = value.label;

//    //-------------------------------------------------
//    public daterange: any = {};

//  // see original project for full list of options
//  // can also be setup using the config service to apply to multiple pickers
//  public options: any = {
//    locale: { format: 'YYYY-MM-DD' },
//    alwaysShowCalendars: false,
//  };

//  public selectedDate(value: any, datepicker?: any) {
//    // this is the date  selected
//    console.log(value);

//    // any object can be passed to the selected event and it will be passed back here
//    datepicker.start = value.start;
//    datepicker.end = value.end;

//    // use passed valuable to update state
//    this.daterange.start = value.start;
//    this.daterange.end = value.end;
//    this.daterange.label = value.label;
//  }
  
//}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daterangerpicker',
  templateUrl: './daterangerpicker.component.html',
  styleUrls: ['./daterangerpicker.component.css']
})
export class DaterangerpickerComponent implements OnInit {

  public daterange: any[] = [];

  // See original project for full list of options
  // Can also be setup using the config service to apply to multiple pickers
  public options: any = {
    locale: { format: 'YYYY-MM-DD' },
    alwaysShowCalendars: false,
  };

  constructor() { }

  ngOnInit(): void {
  }

  public selectedDate(value: any, datepicker?: any) {
    // This is the date selected
    console.log(value);

    // Any object can be passed to the selected event and it will be passed back here
    if (datepicker) {
      datepicker.start = value.start;
      datepicker.end = value.end;
    }

    // Use passed valuable to update state
    this.daterange = value;
  }

}
