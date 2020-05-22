import {Component, Input, OnInit} from '@angular/core';

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
    return this.articles.filter((article) => {
      if (article.sentiment !== 0) {
        return article;
      } else {
        return null;
      }
    });
  }

  filterTitleHandler() {
    if (this.filterWord === null) {
      return this.filterZeroSentimentHandler();
    } else {
      return this.filterZeroSentimentHandler()
        .filter(article => article.title.toLowerCase().includes(this.filterWord.toLowerCase()));
    }
  }

  avgSentScore(articleJsonList) {
    let sumScore = 0;
    for (const articcleJson of articleJsonList) {
      sumScore += articcleJson.sentiment;
    }

    const avgScore = (sumScore / articleJsonList.length).toFixed(4);
    if (!isNaN(Number(avgScore))) {
      return avgScore;
    } else {
      return 0;
    }
  }
}
