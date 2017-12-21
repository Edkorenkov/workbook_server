
import { Component } from "@angular/core";

import { AlertsService } from "./alerts.service";

import Rx from "rxjs";


@Component({

	selector: "alerts",

    templateUrl: "./alerts.component.html",
    
    styleUrls: [ "./alerts.component.css" ],

})
export default class AlertsComponent {

    constructor(alertsService: AlertsService) {

        this._alertsService = alertsService;

        this.alerts = [];

    };

    ngOnInit() {

        this._alertsService.GetAlerts()

            .subscribe(alert => {

                this.alerts.push(alert);

            });

    };

}
