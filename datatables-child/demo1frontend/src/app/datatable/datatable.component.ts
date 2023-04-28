// import { Component, OnInit, ViewChild } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// declare var $: any;

// interface Group {
//   id: number;
//   name: string;
//   value: string;
//   date: string;
// }

// @Component({
//   selector: 'app-datatable',
//   templateUrl: './datatable.component.html',
//   styleUrls: ['./datatable.component.css']
// })
// export class DatatableComponent implements OnInit {
//   dynamicdata: Group[] = [];
//   @ViewChild('dataTable', { static: false })
//     table!: { nativeElement: any; };
//   dataTable: any;

//   constructor(private http: HttpClient) { }

//   ngOnInit() {
//     this.http.get<Group[]>('https://localhost:5001/api').subscribe(data => {
//       this.dynamicdata = data;
//       setTimeout(() => {
//         this.dataTable = $(this.table.nativeElement);
//         this.dataTable.DataTable({
//           pagingType: 'full_numbers',
//           pageLength: 5,
//           processing: true,
//           lengthMenu: [5, 10, 25]
//         });
//       }, 1);
//     }, error => console.error(error));
//   }

//   onStartDateChange(event: any) {
//     const startDate = event.target.value;
//     const endDate = $('#endDate').val();
//     this.filterDataByDateRange(startDate, endDate);
//   }

//   onEndDateChange(event: any) {
//     const startDate = $('#startDate').val();
//     const endDate = event.target.value;
//     this.filterDataByDateRange(startDate, endDate);
//   }

//   filterDataByDateRange(startDate: string, endDate: string) {
//     const filterStartDate = new Date(startDate).getTime();
//     const filterEndDate = new Date(endDate).getTime();
//     if (filterStartDate && filterEndDate) {
//       const filteredData = this.dynamicdata.filter(data => {
//         const date = new Date(data.date).getTime();
//         return date >= filterStartDate && date <= filterEndDate;
//       });
//       this.dataTable.DataTable().clear();
//       this.dataTable.DataTable().rows.add(filteredData);
//       this.dataTable.DataTable().draw();
//     }
//   }
// }


// -------------------------------------------------1 bảng--------------------------
//import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { DatatableModel } from './datatablemodel.model';

//declare var $: any;


//@Component({
//  selector: 'app-datatable',
//  templateUrl: './datatable.component.html',
//  styleUrls: ['./datatable.component.css']
//})
//export class DatatableComponent implements OnInit {
//  public dynamicdata!: Array<DatatableModel>;

//  constructor(private http: HttpClient) { }
//  ngOnInit() {
//    this.http.get<Array<DatatableModel>>('https://localhost:5001/api?date=' + v).subscribe(data => {
//      this.dynamicdata = data;
//      setTimeout(() => {
//        $('#dataTables-example').DataTable({
//          pagingType: 'full_numbers',
//          pageLength: 5,
//          processing: true,
//          lengthMenu: [5, 10, 25]
//        });
//      }, 1);
//    }, error => console.error(error));
//  }

//  onDateChange(event: any) {
//    const v = event.target.value;
//    console.log(v);
//    $('#dataTables-example').DataTable().columns(3).search(v).draw();
//  }


//}


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatatableModel } from './datatablemodel.model';
import { DatePipe } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css'],
  providers: [DatePipe]
})
export class DatatableComponent implements OnInit {
  public dynamicdata!: Array<DatatableModel>;

  constructor(private http: HttpClient, private datePipe: DatePipe) { }
  mydate = Date.now();
  ngOnInit() { }

  formatDate(dateString: string | null): string {
    if (!dateString) {
      return '';
    }
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return '';
    }
    return this.datePipe.transform(date, 'YYYY-MM-DD') ?? '';
  }

  onDateChange(event: any) {
    const v = event.target.value;
    console.log(v);
    if (v) {
      this.http.get<Array<DatatableModel>>('https://localhost:5001/api?date=' + v).subscribe(data => {
        this.dynamicdata = data.map((row: DatatableModel) => {
          return {
            id: row.id,
            name: row.name,
            value: row.value,
            date: this.formatDate(row.date)
          };
        });
        if ($.fn.DataTable.isDataTable('#dataTables-example')) {
          $('#dataTables-example').DataTable().destroy();
        }
        setTimeout(() => {
          $('#dataTables-example').DataTable({
            data: this.dynamicdata,
            columns: [
              { data: 'id' },
              { data: 'name' },
              { data: 'value' },
              { data: 'date' }
            ],
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            lengthMenu: [5, 10, 25]
          });
        }, 1);
      }, error => console.error(error));
    } else {
      this.dynamicdata = [];
      if ($.fn.DataTable.isDataTable('#dataTables-example')) {
        $('#dataTables-example').DataTable().destroy();
      }
    }
  }
}




//import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { DatatableModel } from './datatablemodel.model';
//import { DatePipe } from '@angular/common';

//declare var $: any;

//@Component({
//  selector: 'app-datatable',
//  templateUrl: './datatable.component.html',
//  styleUrls: ['./datatable.component.css'],
//  providers: [DatePipe]
//})
//export class DatatableComponent implements OnInit {
//  public dynamicdata!: Array<DatatableModel>;

//  constructor(private http: HttpClient, private datePipe: DatePipe) { }

//  ngOnInit() { }

//  formatDate(dateString: string | null): string {
//    if (!dateString) {
//      return '';
//    }
//    const date = new Date(dateString);
//    return this.datePipe.transform(date, 'yyyy-MM-dd') ?? '';
//  }

//  onDateChange(event: any) {
//    const v = event.target.value;
//    console.log(v);
//    if (v) {
//      this.http.get<Array<DatatableModel>>('https://localhost:5001/api?date=' + v).subscribe(data => {
//        this.dynamicdata = data.map((row: DatatableModel) => {
//          return {
//            id: row.id,
//            name: row.name,
//            value: row.value,
//            date: this.formatDate(row.date)
//          };
//        });
//        if ($.fn.DataTable.isDataTable('#dataTables-example')) {
//          $('#dataTables-example').DataTable().destroy();
//        }
//        setTimeout(() => {
//          $('#dataTables-example').DataTable({
//            data: this.dynamicdata,
//            columns: [
//              { data: 'id' },
//              { data: 'name' },
//              { data: 'value' },
//              { data: 'date' }
//            ],
//            pagingType: 'full_numbers',
//            pageLength: 5,
//            processing: true,
//            lengthMenu: [5, 10, 25]
//          });
//        }, 1);
//      }, error => console.error(error));
//    } else {
//      this.dynamicdata = [];
//      if ($.fn.DataTable.isDataTable('#dataTables-example')) {
//        $('#dataTables-example').DataTable().destroy();
//      }
//    }
//  }
//}




//import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
//import { DatatableModel } from './datatablemodel.model';

//declare var $: any;

//@Component({
//  selector: 'app-datatable',
//  templateUrl: './datatable.component.html',
//  styleUrls: ['./datatable.component.css']
//})
//export class DatatableComponent implements OnInit {
//  public dynamicdata!: Array<DatatableModel>;

//  constructor(private http: HttpClient) { }

//  ngOnInit(): void { }

//  onDateChange(event: any) {
//    const v = event.target.value;
//    console.log(v);

//    if (v) {
//      this.http.get<Array<DatatableModel>>('https://localhost:5001/api?date=' + v)
//        .subscribe(data => {
//          this.dynamicdata = data;
//          if ($.fn.DataTable.isDataTable('#dataTables-example')) {
//            $('#dataTables-example').DataTable().destroy();
//          }
//          $('#dataTables-example').DataTable({
//            data: this.dynamicdata,
//            columns: [
//              { data: 'id' },
//              { data: 'name' },
//              { data: 'position' },
//              { data: 'date_added' },
//              { data: 'salary' }
//            ],
//            pagingType: 'full_numbers',
//            pageLength: 5,
//            processing: true,
//            lengthMenu: [5, 10, 25]
//          });
//        }, error => console.error(error));
//    } else {
//      this.dynamicdata = [];
//      if ($.fn.DataTable.isDataTable('#dataTables-example')) {
//        $('#dataTables-example').DataTable().destroy();
//      }
//    }
//  }
//}
