import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-cardholder',
  templateUrl: './test-cardholder.component.html',
  styleUrls: ['./test-cardholder.component.css']
})
export class TestCardholderComponent implements OnInit {

  constructor() {
  }

  posts = [
    {
      title: 'EGGIE',
      imageUrl:
        'https://images.unsplash.com/' +
        'photo-1587525483275-1217cef5efeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80 334w',
    },
    {
      title: 'Brain Freeze',
      imageUrl:
        'https://images.unsplash.com/' +
        'photo-1551986782-d0169b3f8fa7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80 334w',
    },
    {
      title: 'Saber Boss Egg',
      imageUrl:
        'https://images.unsplash.com/' +
        'photo-1570217920622-d0db8f472a07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80 334w',
    }
  ];


  ngOnInit(): void {
  }

}
