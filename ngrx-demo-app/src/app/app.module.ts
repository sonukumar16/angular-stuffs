import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


// components 
import { AppComponent } from './app.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';

// reducer
import { counterReducer } from './store/reducer/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({count: counterReducer }),
    StoreDevtoolsModule.instrument() // enable developer tools 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
