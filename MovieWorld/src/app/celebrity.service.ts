import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

interface myData {
  results: Object;
  profiles: Object;
  cast: Object;
}

@Injectable({
  providedIn: 'root'
})
export class CelebrityService {

  constructor(private http: HttpClient) { }


  getCelebrities(page)
  {
    return this.http.get<myData>("https://api.themoviedb.org/3/person/popular?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page="+ page);
  }

  getCelebrityDetails(id)
  {
    return this.http.get("https://api.themoviedb.org/3/person/"+ id +"?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
  }

  searchCelebrities(celeb) {
    return this.http.get<myData>("https://api.themoviedb.org/3/search/person?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&query="+ celeb +"&page=1");
  }

  getImages(id)
  {
    return this.http.get<myData>("https://api.themoviedb.org/3/person/"+ id +"/images?api_key=12a3d32040053bd41f3567e684bcd83a");
  }

  getCelebMovies(id)
  {
    return this.http.get<myData>("https://api.themoviedb.org/3/person/"+ id +"/movie_credits?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
  }

  getCelebShows(id)
  {
    return this.http.get<myData>("https://api.themoviedb.org/3/person/"+ id +"/tv_credits?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
  }
}
