
import { Component, Input, Output, EventEmitter } from "@angular/core";

import { ActivitiesService } from "../activities.service";


const ACTIVITY_NAME_MAX_LENGTH = 50;


@Component({

    selector: "activities-list",

    templateUrl: "./activities-list.component.html",
    
    styleUrls: [

        "./activities-list.component.css",

    ],

})
export class ActivitiesListComponent {


    @Output() onSelectActivity = new EventEmitter();


    constructor(activityService: ActivitiesService) {

        this._activityService = activityService;

        this.isVisible = false;


        this.activities = [];

        this.activityName = "";

        this.selectedActivityName = "";

    };

    ngOnInit() {

        this._activityService.GetActivities()

			.subscribe(

                activities => this.activities = activities,

                error => this._router.navigate(["/signin"])

            );

    };

    OpenModel() {

        this.isVisible = true;

    };

    CloseModal() {

        this.isVisible = false;

    };

    CreateActivity(activityName) {

        if (!activityName || activityName.length > ACTIVITY_NAME_MAX_LENGTH) {

            return;

        };

        const activity = { name: activityName };

        this.activityName = "";

        this.activities.push(activity);

        this._activityService
        
            .CreateActivity(activity)

            .subscribe(activity => console.log(activity));

    };

    SelectActivity(activity) {

        const { name } = activity;

        this.selectedActivityName = name;

        this.onSelectActivity.emit({ name });

        this.CloseModal();

    };

};
