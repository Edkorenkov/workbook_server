
import { Injectable } from "@angular/core";

import { Http } from "@angular/http";

import "rxjs/add/operator/map";


const baseUrl = "/api/auth";


@Injectable()
export class AuthService {

    constructor(http: Http) {

        this._http = http;

    };

    Signin(user) {

        return this._http.post(baseUrl + "/signin", JSON.stringify(user))

            .map(response => response.json());

    };

    Signup(user) {

        return this._http.post(baseUrl + "/signup", JSON.stringify(user))
        
            .map(response => response.json());

    };

    RefreshToken() {

        return this._http.post(baseUrl + "/refresh")

            .map(response => response.json());

    };
    
};