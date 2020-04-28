import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FeedbackComponent} from './feedback/feedback.component';
import {SearchnewsComponent} from './searchnews/searchnews.component';

const routes: Routes = [
  {path: 'feedback', component: FeedbackComponent},
  {path: 'search', component: SearchnewsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
