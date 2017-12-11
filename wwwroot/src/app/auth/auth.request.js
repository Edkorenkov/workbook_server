
import { BaseRequestOptions  } from "@angular/http";

import { AuthStore } from "./auth.store";


export class AuthRequest extends BaseRequestOptions {

    constructor(authStore: AuthStore) {

        super();

        this._authStore = authStore;

        this.headers.set("Content-Type", "application/json");

        const token = this._authStore.GetToken();

        if (token) {

            this.headers.append("Authorization", `Bearer ${token}`);
            
        };

    };

    merge(options) {

        var newOptions = super.merge(options);

        const token = this._authStore.GetToken();
        
        if (token) {

            newOptions.headers.set("Authorization", `Bearer ${token}`);
            
        };

        return newOptions;
        
    };
    
};