import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from '../utils-service/utils.service';

@Injectable({
  providedIn: 'root'
})
export class TopNewsService {


  constructor(private http: HttpClient,
              private utilsService: UtilsService) {
  }

  fetchTopNews() {
    return this.utilsService.getNewsArticlesWithSentScore(this.utilsService.getFullUrl('topnews'));
  }
}
