
import { RouterModule, CanActivate } from "@angular/router";

import { SigninComponent } from "./signin/signin.component";

import { SignupComponent } from "./signup/signup.component";

import { BooksComponent } from "./books";

import { BooksPagesComponent } from "./books/books-pages";

import { PageInitComponent, PageCreatedComponent } from "./pages";

import { AuthGuard } from "./auth";



export const AppRoutes = [

    {

        path: "",

        redirectTo: "books",

        pathMatch: "full",

    },

    {

        path: "signin",

        component: SigninComponent,

    },

    {

        path: "signup",

        component: SignupComponent,

    },

    {

        path: "books",

        component: BooksComponent,

        children: [

            { path: ":bookId/pages", component: BooksPagesComponent, },

            { path: ":bookId/pages/create", component: PageInitComponent, },

            { path: ":bookId/pages/:pageId", component: PageCreatedComponent, },

        ],

        canActivate: [ AuthGuard ]

    },

];
