import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from '../models/resource';
import { ResourceComponent } from '../resource/resource.component';
import { ResourceDTO } from '../models/ResourceDTO';
import { NgForm } from '@angular/forms';
import { ResourceService } from '../resource-filter/resource-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resource-update',
  templateUrl: './resource-update.component.html',
  styleUrls: ['./resource-update.component.css']
})
export class ResourceUpdateComponent implements OnInit {

  currentUser;
  logInStatus: Boolean;


  private updateResourceUrl: string;
  private getResourceUrl: string;
  id: string;
  resource: Resource;
  // buttonType: string;
  resourceId: number;



 constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private resourceService: ResourceService) {
    this.logInStatus = false;
    this.getResourceUrl = 'http://localhost:8080/resources/resource'
    this.updateResourceUrl = 'http://localhost:8080/resources/update/resource'
    this.resource;
    this.id = this.route.snapshot.params['id'];
   }

ngOnInit(): void {
    this.verifyLoggedIn();
     console.log(this.id);

    this.resourceService.getResource(this.id).subscribe((response: Resource) => {
      this.resource = response;
      console.log(response);
    this.resourceId = +this.resource.id;
    })


}

                // updateResource() {
                //   this.resourceService.updateResource(this.id, this.resource).subscribe((response: Resource) => {
                //     this.resource = response;
                //   })
                // }  

                // onSubmit() {
                //   this.updateResource;
                // }

                // deleteResource() {
                //   // this.resource.reosurceTitle = "delete";

                // }

                // onSubmit(buttonType: string): void {
                //   if(buttonType==="update") {
                //     this.updateResource();
                //   } else if(buttonType==="delete") {
                //     this.deleteEvent();
                //   }
                // }



                // getIdNum(str: string) {
                //   let num: number = parseInt(str);
                //   console.log(typeof num);
                //   return num;
                // }


updateResource(resourceForm: NgForm) {

    let updateResource: ResourceDTO = {
        id: this.resourceId,

        resourceName: resourceForm.value.resourceName,
        neighborhood: resourceForm.value.neighborhood,
        category: resourceForm.value.category,
        address: resourceForm.value.address,
        city: resourceForm.value.city,
        state: resourceForm.value.state,
        zip: resourceForm.value.zip,
        website: resourceForm.value.website,
        telephoneNumber: resourceForm.value.telephoneNumber,
        email: resourceForm.value.email,
        description: resourceForm.value.description
    }

  console.log(updateResource);
  this.http.post(this.updateResourceUrl, updateResource).subscribe((res) => {
    console.log(res)
  });

  //resourceForm.reset();
this.router.navigate(['/resources']).then(()=>{
    window.location.reload();
  });
 }


    verifyLoggedIn() {

    if (localStorage.getItem('userName') != null) {
      this.currentUser = localStorage.getItem('userName');
      this.logInStatus = true;
    }

  
  }

logOut() {
    // localStorage.clear();
    console.log(localStorage.getItem('userName'))
    this.logInStatus = false;
  }
categories = ["Athletics", "Arts", "Business", "Civic", "Education", "Entertainment", "Fitness", "Hospitality", "Medical", "Park", "Religious", "Retail"];
  categoryModel = {category: this.categories[0]}

}
