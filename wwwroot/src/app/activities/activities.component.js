
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

        this.activityStamps = [];

        this.activity = null;

        this.activityStampName = "";

    };

    ngOnInit() {

	};

    SelectActivity(activity) {

        this.activity = activity;

    };

    CreateActivityStamp(activityStampName) {



    };

};
