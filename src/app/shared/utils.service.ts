import {Injectable} from '@angular/core';
import * as AFINN from 'sentiment';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  private devUrlPrefix = 'http://localhost:5000/api/';
  private prodUrlPrefix = 'https://alphaspring.herokuapp.com/api/';
  private backendUrlPrefix = this.prodUrlPrefix;
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
