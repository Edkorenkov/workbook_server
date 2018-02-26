
import { Component, Input } from "@angular/core";


@Component({

    selector: "activities-stamps",

    templateUrl: "./activities-stamps.component.html",
    
    styleUrls: [ "./activities-stamps.component.css" ],

})
export class ActivitiesStampsComponent {

    @Input() activityStamps;
    
    constructor() {

    };

};
