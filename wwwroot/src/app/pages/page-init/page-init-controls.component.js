
import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({

    selector: "page-init-controls",

    templateUrl: "./page-init-controls.component.html",

    styleUrls: [

        "../pages-controls.component.css",

    ],

})
export class PageInitControlsComponent {

    @Output() onCreatePage = new EventEmitter();

    @Output() onDiscardPageChanges = new EventEmitter();


    CreatePage() {

        this.onCreatePage.emit();

    };

    DiscardPageChanges() {

        this.onDiscardPageChanges.emit();

    };

};