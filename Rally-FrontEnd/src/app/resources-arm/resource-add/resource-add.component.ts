import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Resource } from '../models/resource';
import { NgForm } from '@angular/forms';
import { ResourceDTO } from '../models/ResourceDTO';

@Component({
  selector: 'app-resource-add',
  templateUrl: './resource-add.component.html',
  styleUrls: ['./resource-add.component.css']
})
export class ResourceAddComponent implements OnInit {
  currentUser: String;
  logInStatus: Boolean;
  private userUrl: string;
  private resourceUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.logInStatus = false;
    this.resourceUrl = 'http://localhost:8080/resources/add'
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
    //localStorage.clear();
    console.log(localStorage.getItem('userName'))
    this.logInStatus=false;
  }
//Try
  categories = ["Athletics", "Arts", "Business", "Civic", "Education", "Entertainment", "Fitness", "Hospitality", "Medical", "Park", "Religious", "Retail"];
  categoryModel = {category: this.categories[0]}


  getIdNum(str: string) {
    let num: number = parseInt(str);
    return num;
  }

  onSubmit(resourceForm: NgForm) {
    let newResource: ResourceDTO = {
      id: 0, 
      resourceName: resourceForm.value.resourceName,
      category: resourceForm.value.category,
      address: resourceForm.value.address,
      website: resourceForm.value.website,
      telephoneNumber: resourceForm.value.telephoneNumber,
      email: resourceForm.value.email,
      description: resourceForm.value.description
    }
    console.log(newResource);
    this.http.post(this.resourceUrl, newResource).subscribe((res) => {
      console.log(res)
    });
    this.router.navigate(['/resources']).then(()=>{
      window.location.reload();
    });
  }
}
