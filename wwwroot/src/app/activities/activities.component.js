
import { Router } from "@angular/router";

import { Component } from "@angular/core";

import { ActivitiesService } from "./activities.service";


@Component({

    templateUrl: "./activities.component.html",
    
    styleUrls: [

        "./activities.component.css",

    ],

})
export class ActivitiesComponent {

    constructor(router: Router, activityService: ActivitiesService) {

        this._router = router;

        this._activityService = activityService;

        this.activities = [];

        this.activityName = "";

    };

    ngOnInit() {

		this.subscription = this._activityService.GetActivities(1)

			.subscribe(
				activities => {
                 
                    this.activities = activities;
                    
                    console.log(this.activities);

                },
				error => {

					this._router.navigate(["/signin"]);

				}
			);

	};

	ngOnDestroy() {

		this.subscription.unsubscribe();

	};

    AddActivity() {



    };

    CreateActivityStamp() {



    };

};
