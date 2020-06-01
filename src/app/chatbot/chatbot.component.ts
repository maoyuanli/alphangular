import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UtilsService} from '../services/utils-service/utils.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  messageQueue: ChatMessage[] = [];
  typedMsg = '';
  @ViewChild('scrollBottom') private scrollBottom: ElementRef;

  constructor(private http: HttpClient,
              private utilsService: UtilsService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollBottom.nativeElement.scrollTop = this.scrollBottom.nativeElement.scrollHeight;
    } catch (err) {
    }
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
    this.http.post<DialogFlowResponse>(this.utilsService.getFullUrl('node', 'chatbot'),
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
