import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from '../utils-service/utils.service';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  constructor(private http: HttpClient,
              private utilsService: UtilsService) {
  }

  fetchCovid19Stats() {
    return this.http.get<Covid19Stats[]>(this.utilsService.getFullUrl('spring', 'covid19'));
  }
}

export interface Covid19Stats {
  Country: string;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
  Date: string;
}
