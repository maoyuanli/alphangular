import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  name = '';
  email = '';
  phone = '';
  comment = '';
  feedbackUrl = 'https://alphasmartback.herokuapp.com/api/feedback/';
  submitResult = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  onChangeName(value: string) {
    this.name = value;
  }

  onChangeEmail(value: string) {
    this.email = value;
  }

  onChangePhone(value: string) {
    this.phone = value;
  }

  onChangeComment(value: string) {
    this.comment = value;
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const name = this.name;
    const email = this.email;
    const phone = this.phone;
    const comment = this.comment;
    const feedbackData = {
      feedback: {
        name,
        email,
        phone,
        comment,
      }
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Authorization': 'my-auth-token'
      })
    };
    this.http.post(this.feedbackUrl, feedbackData, httpOptions)
    .subscribe({
      next: data => {
        console.log(data);
        this.submitResult = String(data);
        console.log(this.submitResult);
      },
      error: error => console.error('There was an error!', error)
    });
  }

}
