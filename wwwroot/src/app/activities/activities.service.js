
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";


const ACTIVITIES_URL = `/api/activities`;


@Injectable()
export class ActivitiesService {

    constructor(http: HttpClient) {

        this._http = http;

    };
  
    GetActivities() {

        return this._http.get(ACTIVITIES_URL);

    };

    CreateActivity(activity) {

        return this._http.post(ACTIVITIES_URL, activity);

    };

};