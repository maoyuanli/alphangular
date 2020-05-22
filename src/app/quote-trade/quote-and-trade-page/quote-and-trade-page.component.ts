import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
  registerOn = true;

  registerForm = new FormGroup({
    fullname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.email, Validators.required])
  });

  constructor(private authService: AuthService) {
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

}
