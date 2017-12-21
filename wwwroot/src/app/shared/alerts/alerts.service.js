
import { Injectable } from "@angular/core";

import Rx from "rxjs";

import { Subject } from "rxjs";

import { SUCCESS, ERROR } from "./alerts-types.constant";


@Injectable()
export class AlertsService {

    constructor() {

        this.subject = new Subject();

    };

    Success(message) {

        this.subject.next({ SUCCESS, message });


    };

    GetAlerts() {

        return this.subject.asObservable();

    };

};