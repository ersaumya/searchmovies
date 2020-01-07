import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  queryText:string;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  submitHandler(evt){
    evt.preventDefault();
    this.router.navigate(['/movies'],{queryParams:{q:this.queryText}});
    this.queryText='';
  }

}
