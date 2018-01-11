
import { Component } from "@angular/core";

import moment from "moment";


@Component({

    templateUrl: "./activities.component.html",
    
    styleUrls: [

        "./activities.component.css",

    ],

})
export class ActivitiesComponent {

    constructor() {

        let time = moment();

        this.year = { 

            name: time.format("YYYY"),

            value: time.year(),

        };

        this.month = {

            name: time.format("MMMM"),

            value: time.month(),

        };

        this.date = {

            name: time.format("dddd"),

            value: time.date(),

        };

        this.weeks = [...Array(Math.ceil(time.daysInMonth() / 7)).keys()].map(week => ({

            name: `Week ${week + 1}`,

            value: week,

        }));

        this.currentWeek = this.weeks.find(week => time.daysInMonth() >= this.date.value && this.date.value <= (week.value + 1) * 7);

    };


    PrevYear(year) {

        let time = moment().year(year.value - 1);

        this.SetYear(time);

    };

    NextYear(year) {

        let time = moment().year(year.value + 1);

        this.SetYear(time);

    };

    SetYear(time) {

        this.year = { 

            name: time.format("YYYY"),

            value: time.year(),

        };

    };

};
