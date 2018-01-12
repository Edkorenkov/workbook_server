
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

import { AuthStore } from "./auth.store";

import "rxjs/add/operator/map";


const baseUrl = "/api/auth";


@Injectable()
export class AuthService {

    constructor(http: HttpClient, authStore: AuthStore) {

        this._http = http;

        this._authStore = authStore;

    };

    Signin(user) {

        return this._http.post(baseUrl + "/signin", JSON.stringify(user))

            .map(security => {

                this._authStore.SetToken(security.token);
				
				this._authStore.SetRefreshToken(security.refreshToken);
                
                this._authStore.SetTokenExperationTime(security.experationTime);

            });

    };

    Signup(user) {

        return this._http.post(baseUrl + "/signup", JSON.stringify(user))
        
            .map(response => response.json());

    };

    GetToken() {

        return this._authStore.GetToken();

    };

    RefreshToken() {

        return this._http.post(baseUrl + "/refresh")

            .map(response => response.json());

    };
    
};