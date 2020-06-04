import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UtilsService} from '../utils-service/utils.service';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {

  constructor(private http: HttpClient,
              private utilsService: UtilsService) {
  }

  chat(msg: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post<DialogFlowResponse>(this.utilsService.getFullUrl('node', 'chatbot'),
      {text: msg}, httpOptions);
  }
}

export interface DialogFlowResponse {
  queryText: string;
  fulfillmentText: string;
}
