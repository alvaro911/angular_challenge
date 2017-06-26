import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AngChallengeService {

  constructor(private http:Http) { }

  getMovie(){
    const key:string = '81b9f73460ca6ea4ee1166f130832416';
    return this.http.get(`https://api.themoviedb.org/3/movie/27205-inception?api_key=${key}`)
      .map((res:Response) => res.json())
  }
}
