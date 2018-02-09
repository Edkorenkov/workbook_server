
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";


import "rxjs/add/operator/map";


const MapActivities = activities => {

    return activities.map(activity => ({}));

};


@Injectable()
export class ActivitiesService {

    constructor(http: HttpClient) {

        this._http = http;

    };
  
    GetActivities(userId) {

        return this._http.get(`/api/users/${userId}/activities`)

            .map(activities => MapActivities(activities))

    };

};