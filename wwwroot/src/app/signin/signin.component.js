
import { Component } from "@angular/core";

import { Router } from "@angular/router";

import { AuthService, AuthStore } from "../auth";


@Component({

	templateUrl: "./signin.component.html",

	styleUrls: [ "./signin.component.css" ],

})
export class SigninComponent {

	constructor(router: Router, authService: AuthService, authStore: AuthStore) {

		this._router = router;

		this._authService = authService;

		this._authStore = authStore;

	};

	ngOnInit() {

		this.user = { email: "", password: "" };

	};

	OnSubmit() {

		if (!this.user.email || !this.user.password) {

			return;

		};

		this._authService
		
			.Signin(this.user)

            .subscribe(security => {

				this._authStore.SetToken(security.token);
				
				this._authStore.SetRefreshToken(security.refreshToken);
                
                this._authStore.SetTokenExperationTime(security.experationTime);

                this._router.navigate(["/books"]);

            });

	};


}
