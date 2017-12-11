
import { ErrorHandler, Injectable, Injector } from "@angular/core";

import { Router } from "@angular/router";


@Injectable()
export class AuthError {

    constructor(injector: Injector) {

        this._injector = injector;

    };

    handleError(error) {

        const router = this._injector.get(Router);

        console.log(error);

        if (error.status === 401 || error.status === 403) {

            router.navigate(["/signup"]);

            return;

        };

    };

};