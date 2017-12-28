
import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({

    selector: "page-created-controls",

    templateUrl: "./page-created-controls.component.html",

    styleUrls: [

        "../pages-controls.component.css",

    ],

})
export class PageCreatedControlsComponent {

    @Output() onPrevPage = new EventEmitter();

    @Output() onNextPage = new EventEmitter();

    @Output() onEditPage = new EventEmitter();

    @Output() onDownloadPage = new EventEmitter();

    @Output() onClonePage = new EventEmitter();

    @Output() onDeletePage = new EventEmitter();


    PrevPage() {

        this.onPrevPage.emit();

    };

    NextPage() {

        this.onNextPage.emit();

    };

    EditPage() {

        this.onEditPage.emit();

    };

    DownloadPage() {

        this.onDownloadPage.emit();

    };

    ClonePage() {

        this.onClonePage.emit();

    };

    DeletePage() {

        this.onDeletePage.emit();

    };

};