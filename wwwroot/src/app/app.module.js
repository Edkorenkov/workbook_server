
import { NgModule, ErrorHandler } from "@angular/core";

import { RouterModule, CanActivate } from "@angular/router";

import { BrowserModule } from "@angular/platform-browser";

import { FormsModule } from "@angular/forms";

import { HttpModule, RequestOptions } from "@angular/http";


import { AppRoutes } from "./app.routes";

import { AuthError, AuthGuard, AuthStore, AuthService, AuthRequest } from "./auth";

import AppComponent from "./app.component";

import { SigninComponent } from "./signin/signin.component";

import { SignupComponent } from "./signup/signup.component";

import SidebarComponent from "./sidebar/sidebar.component";

import { BooksComponent, BooksListComponent, BooksSearchComponent, BooksService, BooksSearchPipe } from "./books";

import { BooksPagesComponent, BooksPagesService } from "./books/books-pages";

import { PagesService, PageInitComponent, PageInitControlsComponent, PageCreatedComponent, PageCreatedControlsComponent } from "./pages";



@NgModule({

    imports: [ 

        BrowserModule,

        HttpModule,

        FormsModule,

        RouterModule.forRoot(AppRoutes, { useHash: true }),

    ],

    declarations: [
        
        AppComponent,
        SigninComponent,
        SignupComponent,
        SidebarComponent,
        BooksComponent,
        BooksSearchPipe,
        BooksListComponent,
        BooksSearchComponent,
        BooksPagesComponent,
        PageInitComponent,
        PageInitControlsComponent,
        PageCreatedComponent,
        PageCreatedControlsComponent

    ],

    providers: [

        AuthStore,
        AuthGuard,
        AuthService,      
        { provide: RequestOptions, useClass: AuthRequest },
        BooksService,
        PagesService,
        BooksPagesService,
        
    ],

    bootstrap: [ AppComponent ],

})
export default class AppModule {}