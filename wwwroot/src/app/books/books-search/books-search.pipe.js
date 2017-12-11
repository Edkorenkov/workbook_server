
import { Pipe } from "@angular/core";


@Pipe({

    name: "bookSearch",

})
export class BooksSearchPipe {

    transform(books, filterBy) {

        if (!filterBy) {

            return books;

        };

        return books.filter(book => book.title.toLowerCase().includes(filterBy.toLowerCase(), 0));

    };

};