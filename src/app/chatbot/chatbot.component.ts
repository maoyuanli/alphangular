import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ChatbotService} from '../services/chatbot-service/chatbot.service';
import {SkillService} from '../services/skill-service/skill.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  messageQueue: ChatMessage[] = [];
  typedMsg = '';
  @ViewChild('scrollBottom') private scrollBottom: ElementRef;
  visitorAvatar = 'https://img.icons8.com/officexs/30/000000/gender-neutral-user.png';
  botAvatar = 'https://img.icons8.com/ios-filled/48/000000/maxcdn.png';
  allSkills: Skill[] = [];
  showSkill = false;
  alreadyAsked = false;

  constructor(private chatbotService: ChatbotService, private skillService: SkillService) {
  }

  ngOnInit(): void {
    this.getAllSkills();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
    this.popForEndorse();
  }

  popForEndorse() {
    if (this.messageQueue.length === 2 && this.alreadyAsked === false) {
      this.messageQueue.push({
        fromUser: false,
        text: 'Already know Mao? Would you endorse his skills?',
        ask: true
      });
      this.alreadyAsked = true;
    }
  }

  handleDecline() {
    this.messageQueue = this.messageQueue.filter(msg => !msg.ask);
  }

  handleCloseSkillModal() {
    this.showSkill = false;
    this.sendChat('endorsed');
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

    this.sendChat(this.typedMsg);
  }

  sendChat(text: string) {
    this.chatbotService.chat(text)
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
      });
  }

  getAllSkills() {
    this.skillService.fetchAllSkills().subscribe(skills => {
      this.allSkills = skills;
    });
  }

  handleUpdateSkill(skillName: string, score: number) {
    this.skillService.updateSkill({
      skillName,
      score: Number(score) + 1
    }).subscribe(data => {
      this.getAllSkills();
    });
  }
}

export interface ChatMessage {
  fromUser: boolean;
  text: string;
  ask?: boolean;
}

export interface Skill {
  skillName: string;
  score: number;
}
