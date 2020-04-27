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
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  length = 0;
  name = '';

  ngOnInit(): void {
  }

  onChangeName(value: string) {
    this.name = value;
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

  onChangeUseLetters() {
    this.useLetters = true;
  }

  onChangeUseNumbers() {
    this.useNumbers = true;
  }

  onChangeUseSymbols() {
    this.useSymbols = true;
  }

  onChangeLength(value: string) {
    const parsedValue: number = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

}
