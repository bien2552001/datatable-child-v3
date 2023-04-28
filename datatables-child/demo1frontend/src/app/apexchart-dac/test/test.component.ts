import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApchartService } from '../apchart.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  signInForm = new FormGroup({
    TemperatureC: new FormControl(''), // <== default value
    humidity: new FormControl('') // <== default value

  });
  constructor(private http: ApchartService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.signInForm.value);
  }
  onPost() {
    this.http.postcurrent(this.signInForm.value).subscribe(data => {
      console.log(data);
    });

    //console.log(this.signInForm.value);
  }
  postsuccess() {
    alert('Post_successful');
  }

}
