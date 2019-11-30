import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";


interface Data {
  results: Object;
  backdrops: Object;
}

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  /*private messageSource = new BehaviorSubject<any>("default message");
  currentMessage = this.messageSource.asObservable();*/

  constructor(private http: HttpClient) {
  }


  /*changeMessage(message: any) {
    this.messageSource.next(message);
  }

  sendSimilarMovieID(id : any) {
    this.messageSource.next(id);
  }*/

  getPopular() {
    return this.http.get<Data>("https://api.themoviedb.org/3/movie/popular?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
  }

  getPlayingMovies() {
    return this.http.get<Data>("https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=12a3d32040053bd41f3567e684bcd83a");
  }

  getUpcomingMovies() {
    return this.http.get<Data>("https://api.themoviedb.org/3/movie/upcoming?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=2");
  }

  getSimilarMovies(movieID) {
    return this.http.get<Data>("https://api.themoviedb.org/3/movie/" + movieID + "/similar?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
  }

  searchMovie(movie) {
    return this.http.get<Data>("https://api.themoviedb.org/3/search/movie?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&query=" + movie + "&page=1");
  }
  getMovieDetails(movieID) {
    return this.http.get<Data>("https://api.themoviedb.org/3/movie/" + movieID + "?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
  }

  getReviews(movieID) {
    return this.http.get<Data>("https://api.themoviedb.org/3/movie/" + movieID + "/reviews?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
  }

  getCasts(movieID) {
    return this.http.get<Data>("https://api.themoviedb.org/3/movie/" + movieID + "/credits?api_key=12a3d32040053bd41f3567e684bcd83a");
  }

  getImages(movieID) {
    return this.http.get<Data>("https://api.themoviedb.org/3/movie/" + movieID + "/images?api_key=12a3d32040053bd41f3567e684bcd83a");
  }

  getVideos(movieID) {
    return this.http.get<Data>("https://api.themoviedb.org/3/movie/" + movieID + "/videos?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
  }
}
