
import { Component, Input, Output, EventEmitter } from "@angular/core";

import { pageTypes } from "./pages.const";


@Component({

    selector: "pages-controls",

    templateUrl: "./pages-controls.component.html",

    styleUrls: [

        "./pages-controls.component.css",

    ],

})
export class PagesControlsComponent {

    @Input() type;

    @Output() onCreatePage = new EventEmitter();



    ngOnChanges(changes) {

        if (changes.type && changes.type.currentValue) {

            //do some stuff here...
            console.log(this.type);

        };

    };


    CreatePage() {

        this.onCreatePage.emit();

    };

};