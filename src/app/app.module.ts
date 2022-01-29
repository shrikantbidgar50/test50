import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { ITrackComponent } from './itrack/itrack.component';
import { TrackpageComponent } from './trackpage/trackpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ITrackComponent,
    TrackpageComponent
    
    
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    ScrollingModule,
    MatGridListModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'d',component:HeroesComponent},
      {path:'itrack',component:ITrackComponent},
      {path:'trackPage',component:TrackpageComponent}
      
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
