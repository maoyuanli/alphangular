import {Component, OnInit} from '@angular/core';
import {Covid19Service, Covid19Stats} from '../services/covid19.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.css']
})
export class Covid19Component implements OnInit {

  currentStats: Covid19Stats = null;
  gchartData = [];
  type = 'LineChart';
  options = {
    width: 490,
    height: 380,
    lineWidth: 3,
    colors: ['#F7DC6F', '#F39C12', '#2ECC71', '#808B96'],
    vAxis: {
    },
    hAxis: {
    },
    legend: 'none'
  };

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
      }
      statsArray.forEach(stats => {
        this.gchartData.push([new Date(stats.Date), stats.Confirmed, stats.Active,
          stats.Recovered, stats.Deaths]);
      });
    });
  }
}
