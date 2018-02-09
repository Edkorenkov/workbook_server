
import { Component, Input } from "@angular/core";


@Component({

    selector: "activities-list",

    templateUrl: "./activities-list.component.html",
    
    styleUrls: [

        "./activities-list.component.css",

    ],

})
export class ActivitiesListComponent {

    @Input() activities;

    constructor() {

        this.isVisible = false;

    };

};
