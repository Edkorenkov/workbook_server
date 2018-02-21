
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

        this._authService = null;

    };

    intercept(request, next) {

        this._authService = this._injector.get(AuthService);

        const token = this._authService.GetToken();

        request = request.clone({

            setHeaders: { "Content-Type": "application/json" },

        });

        if (token) {

            request = request.clone({

                setHeaders: { Authorization: `Bearer ${token}` },
    
            });

            return next.handle(request).catch(error => this.errorHandler(error, request));

        };

        return next.handle(request);

    };

    errorHandler(error, currentRequest) {

        if (error instanceof HttpErrorResponse) {

            if (error.status === 401) {

                const httpClient = this._injector.get(HttpClient);

                const refreshToken = this._authService.GetRefreshToken();

                this._authService
                
                    .RefreshToken(refreshToken)

                    .subscribe(security => {

                        currentRequest = currentRequest.clone({

                            setHeaders: {
            
                                Authorization: `Bearer ${security.token}`,
            
                            },
            
                        });

                        httpClient.request(currentRequest);

                    });

            };

        };


        return Observable.throw(error);

    };

};
