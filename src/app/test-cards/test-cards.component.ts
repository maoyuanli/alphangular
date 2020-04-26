import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-test-cards',
  templateUrl: './test-cards.component.html',
  styleUrls: ['./test-cards.component.css']
})
export class TestCardsComponent implements OnInit {

  @Input() title = '';
  @Input() imageUrl = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
