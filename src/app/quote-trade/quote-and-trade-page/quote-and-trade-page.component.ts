import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UtilsService} from '../../services/utils-service/utils.service';

@Component({
  selector: 'app-quote-and-trade-page',
  templateUrl: './quote-and-trade-page.component.html',
  styleUrls: ['./quote-and-trade-page.component.css']
})
export class QuoteAndTradePageComponent implements OnInit {

  model: any = {
    username: 'user@abc.com',
    password: 'password'
  };

  failedLogin = false;
  registerOn = false;
  registerSuccess = false;
  registeredFullname = '';

  registerForm = new FormGroup({
    fullname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthService,
              private http: HttpClient,
              private utilsService: UtilsService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
        this.failedLogin = false;
      }, error => {
        this.failedLogin = true;
      }
    );
  }

  alreadyLogin() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  registerSubmit() {
    this.registerOn = false;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    const regInfo = {
      username: this.registerForm.controls.email.value,
      fullName: this.registerForm.controls.fullname.value,
      password: this.registerForm.controls.password.value,
      confirmPassword: this.registerForm.controls.password.value
    };
    this.http.post<RegisterSuccessResponse>(this.utilsService.getFullUrl('users/register'),
      regInfo, httpOptions)
      .subscribe(res => {
        if (res.password) {
          this.registerSuccess = true;
        }
        this.model.username = res.username;
        this.model.password = regInfo.password;
        this.registeredFullname = regInfo.fullName;

        this.registerForm.reset();
      });
  }

  registerCancel() {
    this.registerOn = false;
    this.registerForm.reset();
  }

}

export interface RegisterSuccessResponse {
  id: string;
  username: string;
  fullName: string;
  password: string;
  create_at: string;
}
