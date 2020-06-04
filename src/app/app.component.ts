import {Component, OnInit} from '@angular/core';
import {ChatbotService} from './services/chatbot-service/chatbot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nodeWakedUp = false;

  constructor(private chatbotService: ChatbotService) {
  }

  ngOnInit(): void {
    this.wakeUpNode();
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
