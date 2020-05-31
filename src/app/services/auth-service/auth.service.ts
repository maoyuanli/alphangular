import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UtilsService} from '../utils-service/utils.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private utilsService: UtilsService) {
  }


  login(model: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.post(this.utilsService.getFullUrl('spring', 'users/login'), model, httpOptions)
      .pipe(
        map(res => {
          const token = Object.values(res)[1];
          localStorage.setItem('token', token);
        })
      );
  }
}
