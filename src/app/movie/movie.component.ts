import { Component, OnInit } from '@angular/core';

import { AngChallengeService } from '../ang-challenge.service'
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movieClass:Movie
  constructor(private angService:AngChallengeService) { }

  ngOnInit() {
    this.angService.getMovie().subscribe(
      (data) => {
        // console.log(data)
        this.movieClass = new Movie (data.poster_path, data.overview, data.original_title)
        console.log(this.movieClass)
      }
    )
  }
}
