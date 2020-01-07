import { MovieService } from './../../service/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie:any;
  constructor(private movieService:MovieService,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe(params=>{
      let id=params['imdbID'];
      this.movieService.getMovieDetails(id)
      .subscribe(res=>this.movie=res);
    })
  }
  goBack(){
    window.history.back();
  }

}
