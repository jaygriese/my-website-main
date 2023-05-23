import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ResourceDTO } from '../model/Resource';

@Component({
  selector: 'app-resources-add',
  templateUrl: './resources-add.component.html',
  styleUrls: ['./resources-add.component.css']
})
export class ResourcesAddComponent implements OnInit {
  private userUrl: string;
  currentUser: string;
  logInStatus: Boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.logInStatus = false;
    this.userUrl = 'http://locahost:8080/resources/add';
   }

  ngOnInit(): void {
    this.verifyLoggedIn();
  }
  verifyLoggedIn(){
    if (localStorage.getItem('userName') !=null) {
      this.currentUser = localStorage.getItem('userName');
      this.logInStatus = true;
    }
  }
  logOut() {
    localStorage.clear();
    console.log(localStorage.getItem('userName'))
    this.logInStatus=false;
  }

  onSubmit(f: NgForm ) {
    let submitResource: ResourceDTO = {
      resourceName: f.value.resourceName,
      category: f.value.category,
      address: f.value.address,
      website: f.value.website,
      telephoneNumber: f.value.telephoneNumber,
      emailAddress: f.value.emailAddress,
      description: f.value.description
    }
    this.http.post(this.userUrl, submitResource).subscribe((res) => {
      console.log(res);
    })
  }

}
