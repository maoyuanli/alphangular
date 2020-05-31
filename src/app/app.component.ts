import {Component, OnInit} from '@angular/core';
import {pluck} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {UtilsService} from './services/utils-service/utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  nodeWakedUp = false;

  constructor(private http: HttpClient,
              private utilsService: UtilsService) {
  }

  ngOnInit(): void {
    this.wakeUpNode();
  }

  private wakeUpNode() {
    this.http.get(this.utilsService.getFullUrl('node', 'program')).pipe(
      pluck('data', 'programs')
    ).subscribe({
      next: data => {
        this.nodeWakedUp = true;
      },
      error: err => {
        console.error('There was an error!', err);
      }
    });
  }
}
