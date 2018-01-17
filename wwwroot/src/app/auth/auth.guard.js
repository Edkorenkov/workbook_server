
import { Injectable } from "@angular/core";

import { Router, CanActivate } from "@angular/router";

import { AuthStore } from "./auth.store";


@Injectable()
export class AuthGuard {

    constructor(router: Router, authStore: AuthStore) {

        this._router = router;

        this._authStore = authStore;

    };


    canActivate() {

        const token = this._authStore.GetToken();

        const experationTime = this._authStore.GetTokenExperationTime();


        //todo: work with date times   
        
        console.log(token);

        if (!token) {

            this._router.navigate(["/signin"]);

            return false;

        };

        return true;

    };

};