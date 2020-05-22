import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedRoutingModule} from './shared-routing.module';
import {HeadlinesComponent} from './headlines/headlines.component';
import {FormatPhoneNoPipe} from './pipes/format-phone-no.pipe';
import { ValidInputComponent } from './valid-input/valid-input.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    HeadlinesComponent,
    FormatPhoneNoPipe,
    ValidInputComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HeadlinesComponent,
    FormatPhoneNoPipe,
    ValidInputComponent
  ]
})
export class SharedModule {
}
