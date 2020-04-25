import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { TestComp1Component } from './test-comp1/test-comp1.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    TestComp1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
