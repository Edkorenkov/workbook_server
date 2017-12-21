
import { Component } from "@angular/core";

import { Router } from "@angular/router";

import { BooksService } from "./books.service";


const DefaultBookTitle = "Empty book title";


@Component({

    templateUrl: "./books.component.html",
    
    styleUrls: [

        "./books.component.css",

    ],

})
export class BooksComponent {

    constructor(router: Router, booksService: BooksService) {

		this._booksService = booksService;

		this._router = router;

        this.books = [];

        this.searchBookQuery = "";

	};

	ngOnInit() {

		this.bookSubscription = this._booksService.GetBooks()

			.subscribe(
				books => this.books = books,
				error => {

					this._router.navigate(["/signin"]);

				}
			);

	};

	ngOnDestroy() {

		this.bookSubscription.unsubscribe();

	};

	CreateBook(book) {

		console.log(book);
		
		this._booksService.CreateBook(book)

			.subscribe(
				book => this.books.push(book),
				error => console.log(error)
			);

	};

	RemoveBook(removedBook) {

		this.books = this.books.filter(book => book.id != removedBook.id);

		this._booksService.RemoveBook(removedBook.id)

			.subscribe(
				done => console.log(done),
				error => console.log(error)
			);

	};

	// SelectBook(book) {

	// 	this.books.forEach(book => book.isSelected = false);

	// 	book.isSelected = true;

    // };
    
    SearchBook(queryString) {

        this.searchBookQuery = queryString;

    };

}
