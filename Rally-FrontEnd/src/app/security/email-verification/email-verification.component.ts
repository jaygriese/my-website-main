import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.css']
})
export class EmailVerificationComponent implements OnInit {

  tokenId: string;
  verificationResponse: string;

  constructor(private route: ActivatedRoute, 
              private http: HttpClient,
              private router: Router) {
   }

  ngOnInit(): void {

    /* Pull verification token from active url */
    this.route.paramMap.subscribe(params => {
      this.tokenId = params.get('token');
    });
    
    /* Send the token to the back to get verified  */
    this.http.post('http://localhost:8080/api/confirm-account', this.tokenId).subscribe((response: any) => {

    /* Failed */
      if (response.message === 'Token not present') {
        this.verificationResponse = "Token expired, being rerouted to register in 5 seconds."
        setTimeout(() => {
          this.router.navigate(["/register"]);
        }, 5000);
      }
    /* Success */
      if (response.success) {
      this.verificationResponse = response.success;
      } else if (response.message === "Error: Couldn't verify email.") {
        this.verificationResponse = response.message;
      } 
    })
  }

}
