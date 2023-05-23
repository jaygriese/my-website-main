import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class ViewResource {
    private getSearchResource = 'http:localhost8080/resources/searchresource';
    constructor(private http: HttpClient, private router: Router) { }
    getResource () {
        return this.http.get(`${this.getSearchResource}`)
    }
}
