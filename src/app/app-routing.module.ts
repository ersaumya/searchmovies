import { MovieDetailsComponent } from './component/movie-details/movie-details.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { HomeComponent } from './container/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"",pathMatch:'full',redirectTo:'home'},
  {path:"home",component:HomeComponent},
  {path:"movies",component:MovieListComponent},
  {path:'movie-details/:imdbID',component:MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
