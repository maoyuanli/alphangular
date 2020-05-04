import {Injectable} from '@angular/core';
import {sentiment} from './sentilyzer';

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
    return sentiment.analyze(str).score;
  }
}
