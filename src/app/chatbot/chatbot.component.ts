import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  messageQueue: ChatMessage[] = [];
  typedMsg = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  handleTextQuery() {
    this.messageQueue.push({
      fromUser: true,
      text: this.typedMsg
    });

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    this.http.post<DialogFlowResponse>(environment.chatbotUrl,
      {text: this.typedMsg}, httpOptions)
      .subscribe({
        next: data => {
          this.messageQueue.push({
            fromUser: false,
            text: data.fulfillmentText
          });
          this.typedMsg = '';
        }, error: err => {
          console.error('There was an error!', err);
        }
      })
    ;
  }

}

export interface ChatMessage {
  fromUser: boolean;
  text: string;
}

export interface DialogFlowResponse {
  queryText: string;
  fulfillmentText: string;
}
