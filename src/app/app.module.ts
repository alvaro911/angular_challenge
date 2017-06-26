import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//ROUTER
import { appRouter } from './app.router'

//COMPONENTS
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { HighLowComponent } from './high-low/high-low.component';
import { JokeComponent } from './joke/joke.component';

//SERVICES
import { AngChallengeService } from './ang-challenge.service'

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
    appRouter,
    HttpModule
  ],
  providers: [AngChallengeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
