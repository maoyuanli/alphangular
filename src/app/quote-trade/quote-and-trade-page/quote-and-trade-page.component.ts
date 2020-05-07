import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/auth.service';

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

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
        console.log('login success');
      }, error => {
        console.log('failed to login');
      }
    );
  }

  alreadyLogin() {
    const token = localStorage.getItem('token');
    return !!token;
  }

}
