import {Component, OnInit, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-quotecard',
  templateUrl: './quotecard.component.html',
  styleUrls: ['./quotecard.component.css']
})
export class QuotecardComponent implements OnInit {

  @Input() name = '';
  @Input() newestAvailableDate = '';
  @Input() price = '';
  @Input() volume = '';

  constructor() {
  }

  ngOnInit(): void {
  }

}
