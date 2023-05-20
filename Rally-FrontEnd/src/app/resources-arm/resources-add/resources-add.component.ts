import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ResourceDTO } from '../model/Resource';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resources-add',
  templateUrl: './resources-add.component.html',
  styleUrls: ['./resources-add.component.css']
})
export class ResourcesAddComponent implements OnInit {
  private userUrl: string;
  currentUser;
  logInStatus: Boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.logInStatus = false;
    this.userUrl = 'http://localhost:8080/resources/add';
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
  // Validations

  
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
      email: f.value.email,
      description: f.value.description
    }
    console.log(submitResource);
    this.http.post(this.userUrl, submitResource).subscribe((res) => {
      console.log(res);
    })
  }
}
