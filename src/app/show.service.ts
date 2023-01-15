import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

interface myData {
  backdrops: Object;
  results: Object;
  cast: Object;
}

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private http: HttpClient) {
  }

  getAiringToday() {
    return this.http.get<myData>("https://api.themoviedb.org/3/tv/airing_today?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
  }

  getPopular() {
    return this.http.get<myData>("https://api.themoviedb.org/3/tv/popular?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
  }

  getTopRated() {
    return this.http.get<myData>("https://api.themoviedb.org/3/tv/top_rated?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
  }

  getShowDetails(id) {
    return this.http.get("https://api.themoviedb.org/3/tv/" + id + "?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
  }

  searchShow(show) {
    return this.http.get<myData>("https://api.themoviedb.org/3/search/tv?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&query="+ show + "&page=1");
  }

  getCast(id) {
    return this.http.get<myData>("https://api.themoviedb.org/3/tv/" + id + "/credits?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
  }

  getImages(id) {
    return this.http.get<myData>("https://api.themoviedb.org/3/tv/" + id + "/images?api_key=12a3d32040053bd41f3567e684bcd83a");
  }

  getVideos(id) {
    return this.http.get<myData>("https://api.themoviedb.org/3/tv/" + id + "/videos?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US");
  }

  getReviews(id) {
    return this.http.get<myData>("https://api.themoviedb.org/3/tv/" + id + "/reviews?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
  }

  getSimilarShows(id) {
    return this.http.get<myData>("https://api.themoviedb.org/3/tv/" + id + "/similar?api_key=12a3d32040053bd41f3567e684bcd83a&language=en-US&page=1");
  }
}
