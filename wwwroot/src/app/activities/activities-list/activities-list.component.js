
import { Component, Input, Output, EventEmitter } from "@angular/core";


const ACTIVITY_NAME_MAX_LENGTH = 50;


@Component({

    selector: "activities-list",

    templateUrl: "./activities-list.component.html",
    
    styleUrls: [

        "./activities-list.component.css",

    ],

})
export class ActivitiesListComponent {

    @Input() activities;

    @Output() onCreateActivity = new EventEmitter();

    constructor() {

        this.isVisible = false;

        this.activityName = "";

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

        this.onCreateActivity.emit({ name: activityName });

        this.activityName = "";

    };

};
