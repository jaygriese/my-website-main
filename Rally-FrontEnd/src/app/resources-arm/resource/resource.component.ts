import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Resource } from '../models/resource';
import { ResourceService } from '../resource-filter/resource-service';
import { ResourceSearchComponent } from '../resource-search/resource-search.component';
import { ResourceDTO } from '../models/ResourceDTO';


@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  // currentUser;
  // logInStatus: Boolean;

  id: string;
  resourceDetails: Resource;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router, private resourceService: ResourceService) {
    // this.logInStatus = false;
    this.resourceDetails;
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    // this.verifyLoggedIn();
    // this.id = this.route.snapshot.params['id']
    console.log(this.id);
    this.resourceService.getResource(this.id).subscribe((response: Resource) => {
      this.resourceDetails = response;
      console.log(response);
    })
  }

  deleteResource() {
    if(confirm("Are you sure you want to delete this resource?")) {
      this.resourceService.deleteResource(this.id).subscribe(data => {
        console.log(data);
      })
      this.router.navigate(["/resources"])
    .then(() => {
      window.location.reload();
    });
    }
   
  }

  // verifyLoggedIn() {

  //   if (localStorage.getItem('userName') != null) {
  //     this.currentUser = localStorage.getItem('userName');
  //     this.logInStatus = true;
  //   }

  // }

  // logOut() {
  //   localStorage.clear();
  //   console.log(localStorage.getItem('userName'))
  //   this.logInStatus = false;
  // }
}
