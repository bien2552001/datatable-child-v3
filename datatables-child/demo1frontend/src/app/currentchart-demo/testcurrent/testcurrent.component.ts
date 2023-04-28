import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CurrentchartDemoService } from '../currentchart-demo.service';

@Component({
  selector: 'app-testcurrent',
  templateUrl: './testcurrent.component.html',
  styleUrls: ['./testcurrent.component.css']
})
export class TestcurrentComponent implements OnInit {



  signInForm = new FormGroup({
    Value: new FormControl(''), // <== default value

  });
  constructor(private http: CurrentchartDemoService) { }

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
