
import { Injectable, Injector } from "@angular/core";

import { 
    HttpEvent,
    HttpClient,
    HttpRequest, 
    HttpHandler,
    HttpInterceptor,
    HttpErrorResponse, 
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

        console.log(token);

        request = request.clone({

            setHeaders: {

                "Content-Type": "application/json",

            },

        });

        if (token) {

            request = request.clone({

                setHeaders: {

                    Authorization: `Bearer ${token}`,

                },

            });

        };

        return next.handle(request)
            .catch(error => {

                if (error instanceof HttpErrorResponse) {

                    if (error.status === 401) {

                        debugger;

                        var refreshToken = authService.GetRefreshTokenToken();
        
                        authService
                        
                            .RefreshToken(refreshToken)

                            .subscribe(security => {

                                var httpClient = this._injector.get(HttpClient);

                                httpClient.request(request);

                            });
        
                    };
        
                };

            });

    };

};
