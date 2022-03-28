import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './components/counter/counter.component';
// import { AppCounterService } from './services/app-counter.service';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    // AppCounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
