import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TableTestDTSU666Model } from './table.model';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public allCurrent!: Array<TableTestDTSU666Model>;
  signInForm = new FormGroup({
    value: new FormControl('') // <== default value
  });
  isLoading = true;

  constructor(private http: TableService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    const fields = this.signInForm.get('value')?.value; // Lấy giá trị của trường value trong form
    if (typeof fields === 'string') { // Kiểm tra fields có phải là string
      this.http.get_DTSU666(fields).subscribe(
        (res) => {
          this.allCurrent = res;
          this.isLoading = false;
        },
        (err) => {
          console.log(err);
          this.isLoading = false;
        }
      );
    } else {
      console.error('Giá trị của trường value không hợp lệ');
    }
  }

}
