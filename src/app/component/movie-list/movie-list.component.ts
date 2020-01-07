import { MovieService } from './../../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  
  movies:any[];
  constructor(private movieService:MovieService,private activatedrouter:ActivatedRoute) { }

  ngOnInit() {
    this.activatedrouter.queryParams.subscribe(
      qparams=>{
        let q=qparams['q'];
        this.movieService.searchMovies(q)
        .subscribe(res=>this.movies=res.Search)
      }
    )
    
  }

}
