import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Covid19Service, Covid19Stats} from '../services/covid19.service';
import {NumberFormatStyle} from '@angular/common';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  currentStats: Covid19Stats = null;
  moreDetails = '';

  constructor(private covid19Service: Covid19Service) {
  }

  ngOnInit(): void {
    this.fetchCovid19Stats();
  }

  fetchCovid19Stats() {
    this.covid19Service.fetchCovid19Stats().subscribe(statsArray => {
      const latest: Covid19Stats = statsArray[statsArray.length - 1];
      if (latest.Confirmed !== null && latest.Confirmed !== 0) {
        this.currentStats = latest;
        this.moreDetails = `${latest.Active} Active; ${latest.Recovered} Recovered; ${latest.Deaths} Deaths`;
      }
    });
  }
}
