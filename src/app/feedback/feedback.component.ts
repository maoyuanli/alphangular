import {Component, ElementRef, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UtilsService} from '../services/utils-service/utils.service';
import {ChatbotService} from '../services/chatbot-service/chatbot.service';

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
  submitResult = '';
  submitName = '';
  submitEmail = '';
  submitPhone = '';
  submitComment = '';
  nodeWakedUp = false;
  leaveAMsg = true;

  constructor(private http: HttpClient,
              private utilsService: UtilsService,
              private elementRef: ElementRef,
              private chatbotService: ChatbotService) {
  }

  ngOnInit(): void {
    document.body.appendChild(this.elementRef.nativeElement);
    this.wakeUpNode();
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
      })
    };
    this.http.post(this.utilsService.getFullUrl('node', 'feedback'), feedbackData, httpOptions)
      .subscribe({
        next: data => {
          this.submitResult = String(Object.values(data));
          this.popSubmitInfo();
        },
        error: error => console.error('There was an error!', error)
      });

    this.clearForm();
  }

  clearForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.comment = '';
  }

  popSubmitInfo() {
    if (this.submitResult !== '') {
      const content = this.submitResult.split(':')[1];
      [this.submitName, this.submitEmail, this.submitPhone, this.submitComment] = content.split('|');
    }
  }

  clearSubmitResult() {
    this.submitResult = '';
  }

  private wakeUpNode() {
    this.chatbotService.chat('hi')
      .subscribe({
        next: data => {
          if (data.fulfillmentText.length !== 0) {
            this.nodeWakedUp = true;
          }
        },
        error: err => {
          console.error('There was an error!', err);
        }
      });
  }
}
