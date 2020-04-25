import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-comp1',
  templateUrl: './test-comp1.component.html',
  styleUrls: ['./test-comp1.component.css']
})
export class TestComp1Component implements OnInit {

  constructor() {
  }

  password = '';

  ngOnInit(): void {
  }

  onButtonClick() {
    this.password = 'kindOfApassWord';
  }

  onClearClick() {
    this.password = '';
  }

  getPassword() {
    return this.password;
  }

}
