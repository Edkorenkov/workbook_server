
import { Component } from "@angular/core";

import { Router } from "@angular/router";

import { AuthService, AuthStore } from "../auth";


@Component({

	templateUrl: "./signup.component.html",

	styleUrls: [ "./signup.component.css" ],

})
export class SignupComponent {

	constructor(router: Router, authService: AuthService, authStore: AuthStore) {

		this._router = router;

		this._authService = authService;

		this._authStore = authStore;

	};

	ngOnInit() {

		this.user = { name: "", email: "", password: "" };

	};

	OnSubmit() {

		console.log(this.user);

		this._authService
		
			.Signup(this.user)

            .subscribe(security => {

				this._authStore.SetToken(security.token);
				
				this._authStore.SetRefreshToken(security.refreshToken);
                
                this._authStore.SetTokenExperationTime(security.experationTime);

                this._router.navigate(["/books"]);

            });

	};


}
