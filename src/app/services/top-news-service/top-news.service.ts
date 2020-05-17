import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TopNewsService {

  directUrl = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0cd11b45ffd949eaa03bbdbd23c5f95f';

  constructor(private http: HttpClient) {
  }

  fetchTopNews() {
    return this.http.get(this.directUrl);
  }
}
