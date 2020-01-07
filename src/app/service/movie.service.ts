import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const baseUrl: string ='http://www.omdbapi.com/?apikey=c5832dc7';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient : HttpClient) { }

  searchMovies(searchText:string):Observable<any>{
    return this.httpClient.get(baseUrl,{params:{s:searchText}});
  }
  getMovieDetails(imdbID:string):Observable<any>{
    return this.httpClient.get(baseUrl,{params:{i:imdbID}});
  }
}
