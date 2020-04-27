import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})

export class HeadlinesComponent implements OnInit {


  @Input() articles = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  filterArticles() {
    const nonZero = this.articles.filter((article) => {
      if (article.sentiment !== 0) {
        return article;
      } else {
        return null;
      }
    });
    return nonZero;
  }

}
