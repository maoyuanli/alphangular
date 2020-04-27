import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})

export class HeadlinesComponent implements OnInit {


  @Input() articles = [];
  filterWord = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  onKeyUpHandleFilterWord(value: string) {
    this.filterWord = value;
  }

  filterZeroSentimentHandler() {
    const nonZero = this.articles.filter((article) => {
      if (article.sentiment !== 0) {
        return article;
      } else {
        return null;
      }
    });
    return nonZero;
  }

  filterTitleHandler() {
    if (this.filterWord === null) {
      return  this.filterZeroSentimentHandler();
    } else {
      return  this.filterZeroSentimentHandler()
        .filter(article => article.title.toLowerCase().includes(this.filterWord.toLowerCase()));
    }
  }
}
