
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

                const id = this.alerts.length;

                const { type, message, isSuccess, isError } = alert;


                this.alerts.push({ id, type, message, isSuccess, isError });

                Rx.Observable.of(this.alerts).delay(5000).subscribe(x => {

                    this.RemoveAlert(id);
        
                });

            });

    };

    RemoveAlert(alertId) {

        this.alerts = this.alerts.filter(alert => alert.id != alertId);

    };

}
