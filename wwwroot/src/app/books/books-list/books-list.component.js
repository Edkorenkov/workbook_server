
import { Component, Input, Output, EventEmitter } from "@angular/core";


@Component({

    selector: "books-list",

    templateUrl: "./books-list.component.html",
    
    styleUrls: [

        "./books-list.component.css",

    ],

})
export class BooksListComponent {

    @Input() books;

    @Input() searchQuery;    

    @Output() onCreateBook = new EventEmitter();

    @Output() onRemoveBook = new EventEmitter();


    constructor() {

        this.book = null;

        this.isBookCreating = false;

    };

    InitBookCreation() {

        this.book = { title: "", };

        this.isBookCreating = true;

    };

    ApplyBookCreation() {
 
        if (!this.book.title) {

            return;

        };

        this.onCreateBook.emit(this.book);
        
        this.isBookCreating = false;

    };

    DiscardBookCreation() {

        this.book = { title: "", };
        
        this.isBookCreating = false;

    };

    SelectBook(book) {

        var selectedBook = this.books.find(book => book.isSelected);

        if (selectedBook) {

            selectedBook.isSelected = false;

        };

        book.isSelected = true;

    };

    RemoveBook(book) {

        this.onRemoveBook.emit(book);

    };

}
