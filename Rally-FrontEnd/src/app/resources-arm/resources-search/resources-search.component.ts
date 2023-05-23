import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ViewResource } from '../models/ResourceGet';
import { Resource } from '../models/Search';
import { QueryList, ViewChildren } from '@angular/core';
import { SortableHeaderDirective, SortEvent, compare } from '../models/Sortable';


@Component({
  selector: 'app-resources-search',
  templateUrl: './resources-search.component.html',
  styleUrls: ['./resources-search.component.css']
})
export class ResourcesSearchComponent implements OnInit {
  private userUrl: string;
  currentUser;
  logInStatus: Boolean;
  data: Resource[];
  resourceList: Resource[];
  filter: string;

  constructor(private http: HttpClient, private router: Router, private findResource: ViewResource) {
    this.logInStatus = false;
    //this.userUrl = 'http://localhost:8080/resources/search';
   }

  ngOnInit(): void {
    this.verifyLoggedIn();
    this.findResource.getResource().subscribe((response: Resource[]) => {
      this.resourceList = response;
      this.data = response;
      console.log(this.resourceList);
    })
  }
  verifyLoggedIn(){
    if (localStorage.getItem('userName') !=null) {
      this.currentUser = localStorage.getItem('userName');
      this.logInStatus = true;
    }
  }
  // Validations

  
  logOut() {
    localStorage.clear();
    console.log(localStorage.getItem('userName'))
    this.logInStatus=false;
  }
   @ViewChildren(SortableHeaderDirective)
    headers: QueryList<SortableHeaderDirective>;
  
    onSort({ column, direction }: SortEvent) {
     // resetting other headers
      this.headers.forEach((header) => {
        if (header.sortable !== column) {
          header.direction = '';
        }
      });
    
      // sorting resources
      if (direction === '' || column === '') {
        this.resourceList = this.data;
      } else {
       this.resourceList = [...this.data].sort((a, b) => {
          if (column.valueOf() == ("category")) {
            const res = compare(a[column]["category"], b[column]["category"]);
            return direction === 'asc' ? res : -res;
          } else {   
          const res = compare(a[column], b[column]);
          return direction === 'asc' ? res : -res;
        }});
     }
    }
}
