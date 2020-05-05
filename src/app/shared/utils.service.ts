import {Injectable} from '@angular/core';
import * as AFINN from 'sentiment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private backendUrlPrefix = 'https://alphaspring.herokuapp.com/api/';
  sentiment = new AFINN();

  constructor() {
  }

  getFullUrl(endpoint: string) {
    return this.backendUrlPrefix + endpoint + '/';
  }

  getSentiment(str: string) {
    return this.sentiment.analyze(str).score;
  }
}
