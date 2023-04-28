import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sendmessage',
  templateUrl: './sendmessage.component.html',
  styleUrls: ['./sendmessage.component.css']
})
export class SendmessageComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  senddata() {
    const type = 'warning';
    const information = 'text information message';
    const url = `https://localhost:5001/pzem?Type=${type}&Information=${information}`;

    this.http.get(url).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
