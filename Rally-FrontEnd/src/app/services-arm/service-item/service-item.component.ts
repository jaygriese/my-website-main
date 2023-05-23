import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Service, Type } from '../models/Search';
import { ViewService } from '../models/ServiceGet';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css']
})
export class ServiceItemComponent implements OnInit {

  currentUser;
  logInStatus: Boolean;
  servicesList: Service[];
  serviceItem: Service;

  id: number;
  idString: string;
  serviceId: String;
  serviceName: String;
  category: String;
  type: String;
  description: String;
  email: String;
  day: String;
  time: String;
  user: String;

  idArr: String[] = [];
  serviceArr: String[] = [];
  catArr: String[] = [];
  typeArr: String[] = [];
  descArr: String[] = [];
  emailArr: String[] = [];
  dayArr: String[] = [];
  timeArr: String[] = [];
  userNameArr: String[] = [];


  constructor(private http: HttpClient, private router: Router, private findService: ViewService, private route: ActivatedRoute) {
    this.logInStatus = false;
   }

  ngOnInit(): void {
    this.verifyLoggedIn();



    this.findService.getService().subscribe((response: Service[]) => {
      this.servicesList = response;
      // console.log(this.servicesList);


      if (this.route.snapshot.queryParams['id']) {
        this.id = this.route.snapshot.queryParams['id'];
        // console.log(this.id);
      }

      for (let i = 0; i < this.servicesList.length; i++) {
        this.serviceItem = this.servicesList[i];

        this.idString = this.serviceItem["id"];
        this.serviceName = this.serviceItem["service"];
        this.category = this.serviceItem["category"].category;
        this.type = this.serviceItem["type"].type;
        this.description = this.serviceItem["description"];       
        this.email = this.serviceItem["email"];
        this.day = this.serviceItem["day"];
        this.time = this.serviceItem["time"];
        this.user = this.serviceItem["name"];

        this.idArr.push(this.idString);
        this.serviceArr.push(this.serviceName);
        this.catArr.push(this.category);
        this.typeArr.push(this.type);
        this.descArr.push(this.description);
        this.emailArr.push(this.email);
        this.dayArr.push(this.day);
        this.timeArr.push(this.time);
        this.userNameArr.push(this.user);

        // console.log(this.idArr[i]);
        // console.log(this.serviceArr[i]);
        // console.log(this.catArr[i]);        
        // console.log(this.typeArr[i]);
        // console.log(this.descArr[i]);
        // console.log(this.emailArr[i]);
        // console.log(this.dayArr[i]);
        // console.log(this.timeArr[i]);
        // console.log(this.userNameArr[i]);
      }

      this.serviceId = this.idArr[this.id-1];
      this.serviceName = this.serviceArr[this.id-1];
      this.category = this.catArr[this.id-1];
      this.type = this.typeArr[this.id-1];
      this.description = this.descArr[this.id-1];
      this.email = this.emailArr[this.id-1];
      this.day = this.dayArr[this.id-1];
      this.time = this.timeArr[this.id-1];
      this.user = this.userNameArr[this.id-1];

      // console.log(this.serviceId);

      })
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
