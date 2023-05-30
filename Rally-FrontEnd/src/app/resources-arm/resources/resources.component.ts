import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resource } from '../models/resource'
import { ResourcesSearchComponent } from '../resources-search/resources-search.component';
import { ActivatedRoute } from '@angular/router';
import { ResourceDTO } from '../models/ResourceDTO';


@Component({
  selector: 'app-resources-home',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
currentUser;
logInStatus: Boolean;

id: string;
resourceDetails: Resource;

constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  this.logInStatus = false;
  this.resourceDetails;
  this.id = this.route.snapshot.params['id'];
 }

ngOnInit(): void {
  this.verifyLoggedIn();
  this.id = this.route.snapshot.params['id']
  console.log(this.id);
}

verifyLoggedIn() {

  if (localStorage.getItem('userName') != null) {
    this.currentUser = localStorage.getItem('userName');
    this.logInStatus = true;
  }

}

logOut() {
  localStorage.clear();
  console.log(localStorage.getItem('userName'))
  this.logInStatus = false;
}
}
