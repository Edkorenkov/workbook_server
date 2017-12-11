
import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({

    selector: "page-created-controls",

    templateUrl: "./page-created-controls.component.html",

    styleUrls: [

        "../pages-controls.component.css",

    ],

})
export class PageCreatedControlsComponent {

    @Output() onEditPage = new EventEmitter();

    @Output() onDeletePage = new EventEmitter();


    EditPage() {

        this.onEditPage.emit();

    };

    DeletePage() {

        this.onDeletePage.emit();

    };

};