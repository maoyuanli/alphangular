import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-valid-input',
  templateUrl: './valid-input.component.html',
  styleUrls: ['./valid-input.component.css']
})
export class ValidInputComponent implements OnInit {

  @Input() control: FormControl;
  @Input() label: string;
  @Input() placeholder: string;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
