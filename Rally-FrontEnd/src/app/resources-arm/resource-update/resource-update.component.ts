import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Resource } from '../models/resource';
import { ResourceComponent } from '../resource/resource.component';
import { ResourceDTO } from '../models/ResourceDTO';
import { NgForm } from '@angular/forms';

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



 constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.logInStatus = false;
    this.getResourceUrl = 'http://localhost:8080/resources/resource'
    this.updateResourceUrl = 'http://localhost:8080/resources/resource'
    this.resource;
    this.id = this.route.snapshot.params['id'];
   }

ngOnInit(): void {
    this.verifyLoggedIn();
     console.log(this.id);

//     this.eventService.getEvent(this.id).subscribe((response: Event) => {
//       this.resource = response;
//       console.log(response);
//     this.resourceId = +this.resource.id;
//     })


}

                // updateEvent() {
                //   this.eventService.updateEvent(this.id, this.event).subscribe((response: Event) => {
                //     this.event = response;
                //   })
                // }  

                // onSubmit() {
                //   this.updateEvent;
                // }

                // deleteEvent() {
                //   // this.event.eventTitle = "delete";

                // }

                // onSubmit(buttonType: string): void {
                //   if(buttonType==="update") {
                //     this.updateEvent();
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
        category: resourceForm.value.category,
        address: resourceForm.value.address,
        website: resourceForm.value.website,
        telephoneNumber: resourceForm.value.telephoneNumber,
        email: resourceForm.value.email,
        description: resourceForm.value.description
    }

  console.log(updateResource);
  this.http.post(this.updateResourceUrl, updateResource).subscribe((res) => {
    console.log(res)
  });

  resourceForm.reset();

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

}
