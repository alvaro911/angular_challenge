import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { appRouter } from './app.router'
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { HighLowComponent } from './high-low/high-low.component';
import { JokeComponent } from './joke/joke.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    MovieComponent,
    HighLowComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    appRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
