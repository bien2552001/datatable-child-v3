//import { Component, OnInit, AfterViewInit } from '@angular/core';
//import * as moment from 'moment';

//@Component({
//  selector: 'app-dtsu666',
//  templateUrl: './dtsu666.component.html',
//  styleUrls: ['./dtsu666.component.css']
//})
//export class Dtsu666Component implements OnInit, AfterViewInit {
//  //dataLoaded: boolean = false; // Biến đánh dấu xem dữ liệu đã được tải hay chưa

//  //constructor() { }

//  ngOnInit(): void {
//  }
//  ngAfterViewInit() { }
//  //ngAfterViewInit() {
//  //  this.loadData(); // Gọi hàm tải dữ liệu
//  //}

//  //loadData() {
//  //  // Simulate data loading
//  //  setTimeout(() => {
//  //    this.dataLoaded = true; // Đánh dấu là dữ liệu đã được tải
//  //  }, 1000);
//  //}

//  //// Xử lý sự kiện khi nút Today được nhấn
//  //onTodayButtonClick() {
//  //  if (this.dataLoaded) {
//  //    // Nếu dữ liệu đã được tải, thực hiện xử lý hiển thị
//  //    const date = document.getElementById("date");
//  //    date!.innerHTML = moment().format('MMMM, Do YYYY');
//  //  }
//  //}

//  //// Xử lý sự kiện khi nút Week được nhấn
//  //onWeekButtonClick() {
//  //  if (this.dataLoaded) {
//  //    // Nếu dữ liệu đã được tải, thực hiện xử lý hiển thị
//  //    const startOfWeek = moment().startOf('week').format('MMMM Do');
//  //    const endOfWeek = moment().endOf('week').format('MMMM Do, YYYY');
//  //    const date = document.getElementById("date");
//  //    date!.innerHTML = `From ${startOfWeek} to ${endOfWeek}`;
//  //  }
//  //}

//  //// Xử lý sự kiện khi nút Month được nhấn
//  //onMonthButtonClick() {
//  //  if (this.dataLoaded) {
//  //    // Nếu dữ liệu đã được tải, thực hiện xử lý hiển thị
//  //    const date = document.getElementById("date");
//  //    date!.innerHTML = moment().format('MMMM, YYYY');
//  //  }
//  //}

//  //// Xử lý sự kiện khi nút Year được nhấn
//  //onYearButtonClick() {
//  //  if (this.dataLoaded) {
//  //    // Nếu dữ liệu đã được tải, thực hiện xử lý hiển thị
//  //    const date = document.getElementById("date");
//  //    date!.innerHTML = moment().format('YYYY');
//  //  }
//  //}
//}




import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dtsu666',
  templateUrl: './dtsu666.component.html',
  styleUrls: ['./dtsu666.component.css']
})
export class Dtsu666Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.getElementById("today")?.click();
    setTimeout(() => {
      document.getElementById("today")?.click();
    }, 100);
  }




  ngAfterViewInit() {
    const t = document.getElementById("today");
    const w = document.getElementById("week");
    const m = document.getElementById("month");
    const y = document.getElementById("year");
    const date = document.getElementById("date");

    // logic for today button when the user is on dashboard
    t?.addEventListener('click', () => {
      date!.innerHTML = moment().format('MMMM, Do YYYY');

    });

    w?.addEventListener('click', () => {
      const startOfWeek = moment().startOf('week').format('MMMM Do');
      const endOfWeek = moment().endOf('week').format('MMMM Do, YYYY');
      date!.innerHTML = `From ${startOfWeek} to ${endOfWeek}`;
    });

    // logic for month button when the user is on dashboard
    m?.addEventListener('click', () => {
      date!.innerHTML = moment().format('MMMM, YYYY');
    });

    // logic for year button when the user is on dashboard
    y?.addEventListener('click', () => {
      date!.innerHTML = moment().format('YYYY');
    });

  }

}
