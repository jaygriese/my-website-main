import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Resource } from '../models/resource'


@Component({
  selector: 'app-resources-search',
  templateUrl: './resources-search.component.html',
  styleUrls: ['./resources-search.component.css']
})
export class ResourcesSearchComponent implements OnInit {
  
  isLoading: boolean = true;

  currentUser;
  
  logInStatus: Boolean;
  private resourceUrl: string;
  
  resourceList: Resource[] = [];
  filteredResources: Resource[] = [];

  
  
  
  
  
  
  
  
  constructor(private http: HttpClient, private router: Router) {
    this.logInStatus = false;
    this.resourceUrl = 'http://localhost:8080/resources/resources/'
    this.resourceList;
    this.filteredResources;


   }









  ngOnInit(): void {
    this.verifyLoggedIn();
    this.http.get(this.resourceUrl).subscribe((response: Resource[]) => {
      console.log(response);
      this.resourceList = response;
      this.allResources();
    })
  }
  verifyLoggedIn(){
    if (localStorage.getItem('userName') !=null) {
      this.currentUser = localStorage.getItem('userName');
      this.logInStatus = true;
    }
  }
  //FILTER

  filterResource(string: string) {
    this.filteredResources.splice(0);
    for(let i = 0; i < this.resourceList.length; i++) {
      if ( this.resourceList[i].category === string) {
        this.filteredResources.push(this.resourceList[i])
      }
    }

    console.log(this.filteredResources)
    return this.filteredResources;
 
  };

  //VIEW ALL
  viewAll() {
    this.filteredResources.splice(0);
    for(let i = 0; i < this.resourceList.length; i++) {
      this.filteredResources.push(this.resourceList[i]);
    }
    return this.filteredResources;
  }

  allResources() {
    return this.viewAll();
  }


  logOut() {
    localStorage.clear();
    console.log(localStorage.getItem('userName'))
    this.logInStatus=false;
  }
}
