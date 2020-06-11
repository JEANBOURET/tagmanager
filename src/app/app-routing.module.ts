import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { HomeComponent } from './home/home.component';
import { DestinationsComponent } from './destinations/destinations.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent },
  {path: 'destinations', component: DestinationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
