import {Injectable} from '@angular/core';
import * as AFINN from 'sentiment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private backendUrlPrefix = 'https://alphaspring.herokuapp.com/api/';

  constructor() {
  }

  getFullUrl(endpoint: string) {
    return this.backendUrlPrefix + endpoint + '/';
  }

  getSentiment(str: string) {
    const sentiment = new AFINN();
    return sentiment.analyze(str).score;
  }
}
