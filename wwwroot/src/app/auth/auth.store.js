
import { Injectable } from "@angular/core";


const tokenName = "jwt_token";

const userName = "jwt_user";

const experationTimeName = "jwt_experation"


@Injectable()
export class AuthStore {

    GetToken() {

        return localStorage.getItem(tokenName);

    };

    GetUserId() {

        return localStorage.getItem(userName);

    };

    GetTokenExperationTime() {

        return localStorage.getItem(experationTimeName);

    };

    SetToken(token) {

        localStorage.setItem(tokenName, token);

    };

    SetUserId(userId) {

        localStorage.setItem(userName, userId);

    };

    SetTokenExperationTime(time) {

        localStorage.setItem(experationTimeName, time);

    };
    
};