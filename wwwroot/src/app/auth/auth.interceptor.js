
import { Injectable, Injector } from "@angular/core";

import { 
    HttpEvent,
    HttpRequest, 
    HttpHandler,
    HttpInterceptor 
} from "@angular/common/http";

import { AuthService } from "./auth.service";

import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthInterceptor {

    constructor(injector: Injector) {

        this._injector = injector;

    };

    intercept(request, next) {

        var authService = this._injector.get(AuthService);

        var token = authService.GetToken();

        request = request.clone({

            setHeaders: {

                "Content-Type": "application/json",

            },

        });

        console.log(request.headers);

        if (token) {

            request = request.clone({

                setHeaders: {

                    Authorization: `Bearer ${token}`,

                },

            });

        };

        return next.handle(request);

    };

};
