
import { Component } from "@angular/core";

import { Router } from "@angular/router";

import { AuthService } from "../auth";


@Component({

	templateUrl: "./signin.component.html",

	styleUrls: [ "./signin.component.css" ],

})
export class SigninComponent {

	constructor(router: Router, authService: AuthService) {

		this._router = router;

		this._authService = authService;

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

            .subscribe(security => this._router.navigate(["/books"]));

	};


}
