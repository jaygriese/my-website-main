import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  // constructor() { }

  // ngOnInit(): void {
  //   // login(userInformation: NgForm ) {

  //   // }

  // }

  submit(review) {
    console.log("form submitted", review)
  }

}
