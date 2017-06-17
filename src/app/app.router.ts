import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {HighLowComponent} from './high-low/high-low.component';
import {HomeComponent} from './home/home.component';
import {JokeComponent} from './joke/joke.component';
import {MovieComponent} from './movie/movie.component';

const APP_ROUTER:Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies', component: MovieComponent},
  {path: 'high-low', component: HighLowComponent},
  {path: 'jokes', component: JokeComponent}
]

export const appRouter:ModuleWithProviders = RouterModule.forRoot(APP_ROUTER)
