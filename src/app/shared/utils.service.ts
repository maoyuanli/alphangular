import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  backendUrlPrefix = 'https://alphaspring.herokuapp.com/api/';

  constructor() {
  }

  getFullUrl(endpoint: string) {
    return this.backendUrlPrefix + endpoint + '/';
  }
}
