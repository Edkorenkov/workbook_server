webpackJsonp([1],{

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _auth = __webpack_require__(874);

Object.keys(_auth).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth[key];
    }
  });
});

var _auth2 = __webpack_require__(105);

Object.keys(_auth2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth2[key];
    }
  });
});

var _auth3 = __webpack_require__(875);

Object.keys(_auth3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth3[key];
    }
  });
});

var _auth4 = __webpack_require__(876);

Object.keys(_auth4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth4[key];
    }
  });
});

var _auth5 = __webpack_require__(417);

Object.keys(_auth5).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth5[key];
    }
  });
});

var _auth6 = __webpack_require__(878);

Object.keys(_auth6).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _auth6[key];
    }
  });
});

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthStore = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tokenName = "jwt_token";

var refreshTokenName = "jwt_refresh_token";

var userName = "jwt_user";

var experationTimeName = "jwt_experation";

var AuthStore = exports.AuthStore = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
    function AuthStore() {
        _classCallCheck(this, AuthStore);
    }

    _createClass(AuthStore, [{
        key: "GetToken",
        value: function GetToken() {

            return localStorage.getItem(tokenName);
        }
    }, {
        key: "GetUserId",
        value: function GetUserId() {

            return localStorage.getItem(userName);
        }
    }, {
        key: "GetRefreshToken",
        value: function GetRefreshToken() {

            return localStorage.getItem(refreshTokenName);
        }
    }, {
        key: "GetTokenExperationTime",
        value: function GetTokenExperationTime() {

            return localStorage.getItem(experationTimeName);
        }
    }, {
        key: "SetToken",
        value: function SetToken(token) {

            localStorage.setItem(tokenName, token);
        }
    }, {
        key: "SetUserId",
        value: function SetUserId(userId) {

            localStorage.setItem(userName, userId);
        }
    }, {
        key: "SetRefreshToken",
        value: function SetRefreshToken(refreshToken) {

            localStorage.setItem(refreshTokenName, refreshToken);
        }
    }, {
        key: "SetTokenExperationTime",
        value: function SetTokenExperationTime(time) {

            localStorage.setItem(experationTimeName, time);
        }
    }]);

    return AuthStore;
}()) || _class);
;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PagesService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _http = __webpack_require__(54);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PagesService = exports.PagesService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
    function PagesService(http) {
        _classCallCheck(this, PagesService);

        this._http = http;
    }

    _createClass(PagesService, [{
        key: "GetPageByOrder",
        value: function GetPageByOrder(bookId, pageOrder) {

            return this._http.get("/api/books/" + bookId + "/pages/" + pageOrder);
        }
    }, {
        key: "MapPage",
        value: function MapPage(page) {

            return {

                id: page.id,

                order: page.order,

                title: page.title,

                text: page.text,

                bookId: page.bookId

            };
        }
    }, {
        key: "AddBookPage",
        value: function AddBookPage(page) {

            return this._http.post("/api/books/" + page.bookId + "/pages", page);
        }
    }, {
        key: "EditBookPage",
        value: function EditBookPage(page) {

            return this._http.put("/api/books/" + page.bookId + "/pages/" + page.order, page);
        }
    }, {
        key: "DownloadBookPage",
        value: function DownloadBookPage(page) {

            return this._http.get("/api/books/" + page.bookId + "/pages/" + page.order + "/download");

            // {

            //     responseType: ResponseContentType.Blob
            // })
            //     .map(response => new Blob([response.json()], { type: "application/x-msdownload" }));
        }
    }, {
        key: "DeleteBookPage",
        value: function DeleteBookPage(page) {

            return this._http.delete("/api/books/" + page.bookId + "/pages/" + page.order);
        }
    }]);

    return PagesService;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_http.HttpClient], PagesService);
;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AlertsService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _rxjs = __webpack_require__(96);

var _rxjs2 = _interopRequireDefault(_rxjs);

var _alertsTypes = __webpack_require__(909);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AlertsService = exports.AlertsService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
    function AlertsService() {
        _classCallCheck(this, AlertsService);

        this.subject = new _rxjs.Subject();
    }

    _createClass(AlertsService, [{
        key: "Success",
        value: function Success(message) {

            this.subject.next({

                type: _alertsTypes.SUCCESS,

                isError: false,

                isSuccess: true,

                message: message

            });
        }
    }, {
        key: "Error",
        value: function Error(message) {

            this.subject.next({

                type: _alertsTypes.ERROR,

                isError: true,

                isSuccess: false,

                message: message

            });
        }
    }, {
        key: "GetAlerts",
        value: function GetAlerts() {

            return this.subject.asObservable();
        }
    }]);

    return AlertsService;
}()) || _class);
;

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SigninComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _router = __webpack_require__(25);

var _auth = __webpack_require__(104);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SigninComponent = exports.SigninComponent = (_dec = (0, _core.Component)({

	template: __webpack_require__(879),

	styles: [__webpack_require__(880)]

}), _dec(_class = function () {
	function SigninComponent(router, authService) {
		_classCallCheck(this, SigninComponent);

		this._router = router;

		this._authService = authService;
	}

	_createClass(SigninComponent, [{
		key: "ngOnInit",
		value: function ngOnInit() {

			this.user = { email: "", password: "" };
		}
	}, {
		key: "OnSubmit",
		value: function OnSubmit() {
			var _this = this;

			if (!this.user.email || !this.user.password) {

				return;
			};

			this._authService.Signin(this.user).subscribe(function (security) {
				return _this._router.navigate(["/books"]);
			});
		}
	}]);

	return SigninComponent;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_router.Router, _auth.AuthService], SigninComponent);

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _http = __webpack_require__(54);

var _auth = __webpack_require__(105);

__webpack_require__(102);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var baseUrl = "/api/auth";

var AuthService = exports.AuthService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
    function AuthService(http, authStore) {
        _classCallCheck(this, AuthService);

        this._http = http;

        this._authStore = authStore;
    }

    _createClass(AuthService, [{
        key: "Signin",
        value: function Signin(user) {
            var _this = this;

            return this._http.post(baseUrl + "/signin", JSON.stringify(user)).map(function (security) {

                _this._authStore.SetToken(security.token);

                _this._authStore.SetRefreshToken(security.refreshToken);

                _this._authStore.SetTokenExperationTime(security.experationTime);
            });
        }
    }, {
        key: "Signup",
        value: function Signup(user) {

            return this._http.post(baseUrl + "/signup", JSON.stringify(user)).map(function (response) {
                return response.json();
            });
        }
    }, {
        key: "GetToken",
        value: function GetToken() {

            return this._authStore.GetToken();
        }
    }, {
        key: "GetRefreshToken",
        value: function GetRefreshToken() {

            return this._authStore.GetRefreshToken();
        }
    }, {
        key: "RefreshToken",
        value: function RefreshToken(refreshToken) {
            var _this2 = this;

            return this._http.get(baseUrl + "/refresh/" + refreshToken).map(function (security) {

                _this2._authStore.SetToken(security.token);

                _this2._authStore.SetRefreshToken(security.refreshToken);

                _this2._authStore.SetTokenExperationTime(security.experationTime);

                return security;
            });
        }
    }]);

    return AuthService;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_http.HttpClient, _auth.AuthStore], AuthService);
;

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SignupComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _router = __webpack_require__(25);

var _auth = __webpack_require__(104);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SignupComponent = exports.SignupComponent = (_dec = (0, _core.Component)({

	template: __webpack_require__(881),

	styles: [__webpack_require__(882)]

}), _dec(_class = function () {
	function SignupComponent(router, authService, authStore) {
		_classCallCheck(this, SignupComponent);

		this._router = router;

		this._authService = authService;

		this._authStore = authStore;
	}

	_createClass(SignupComponent, [{
		key: "ngOnInit",
		value: function ngOnInit() {

			this.user = { name: "", email: "", password: "" };
		}
	}, {
		key: "OnSubmit",
		value: function OnSubmit() {
			var _this = this;

			console.log(this.user);

			this._authService.Signup(this.user).subscribe(function (security) {

				_this._authStore.SetToken(security.token);

				_this._authStore.SetRefreshToken(security.refreshToken);

				_this._authStore.SetTokenExperationTime(security.experationTime);

				_this._router.navigate(["/books"]);
			});
		}
	}]);

	return SignupComponent;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_router.Router, _auth.AuthService, _auth.AuthStore], SignupComponent);

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _books = __webpack_require__(420);

Object.keys(_books).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _books[key];
    }
  });
});

var _books2 = __webpack_require__(883);

Object.keys(_books2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _books2[key];
    }
  });
});

var _booksList = __webpack_require__(886);

Object.keys(_booksList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _booksList[key];
    }
  });
});

var _booksSearch = __webpack_require__(889);

Object.keys(_booksSearch).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _booksSearch[key];
    }
  });
});

var _booksSearch2 = __webpack_require__(890);

Object.keys(_booksSearch2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _booksSearch2[key];
    }
  });
});

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BooksService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _http = __webpack_require__(54);

__webpack_require__(102);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapBooks = function MapBooks(books) {

    return books.map(function (book) {
        return {

            id: book.id,

            title: book.title,

            dateCreated: book.dateCreated,

            isSelected: false

        };
    });
};

var BooksService = exports.BooksService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
    function BooksService(http) {
        _classCallCheck(this, BooksService);

        this._http = http;
    }

    _createClass(BooksService, [{
        key: "GetBooks",
        value: function GetBooks() {

            return this._http.get("/api/books").map(function (books) {
                return MapBooks(books);
            });
        }
    }, {
        key: "CreateBook",
        value: function CreateBook(book) {

            return this._http.post("/api/books", book);
        }
    }, {
        key: "RemoveBook",
        value: function RemoveBook(bookId) {

            return this._http.delete("/api/books/" + bookId);
        }
    }]);

    return BooksService;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_http.HttpClient], BooksService);
;

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _activities = __webpack_require__(893);

Object.keys(_activities).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _activities[key];
    }
  });
});

var _activities2 = __webpack_require__(422);

Object.keys(_activities2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _activities2[key];
    }
  });
});

var _activitiesTags = __webpack_require__(896);

Object.keys(_activitiesTags).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _activitiesTags[key];
    }
  });
});

var _activitiesList = __webpack_require__(898);

Object.keys(_activitiesList).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _activitiesList[key];
    }
  });
});

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ActivitiesService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _http = __webpack_require__(54);

__webpack_require__(102);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapActivities = function MapActivities(activities) {

    return activities.map(function (activity) {
        return {};
    });
};

var ActivitiesService = exports.ActivitiesService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
    function ActivitiesService(http) {
        _classCallCheck(this, ActivitiesService);

        this._http = http;
    }

    _createClass(ActivitiesService, [{
        key: "GetActivities",
        value: function GetActivities(userId) {

            return this._http.get("/api/users/" + userId + "/activities").map(function (activities) {
                return MapActivities(activities);
            });
        }
    }]);

    return ActivitiesService;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_http.HttpClient], ActivitiesService);
;

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _booksPages = __webpack_require__(901);

Object.keys(_booksPages).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _booksPages[key];
    }
  });
});

var _booksPages2 = __webpack_require__(424);

Object.keys(_booksPages2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _booksPages2[key];
    }
  });
});

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BooksPagesService = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _http = __webpack_require__(54);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BooksPagesService = exports.BooksPagesService = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
    function BooksPagesService(http) {
        _classCallCheck(this, BooksPagesService);

        this._http = http;
    }

    _createClass(BooksPagesService, [{
        key: "GetPagesByBookId",
        value: function GetPagesByBookId(bookId) {

            return this._http.get("/api/books/" + bookId + "/pages");
        }
    }]);

    return BooksPagesService;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_http.HttpClient], BooksPagesService);
;

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pages = __webpack_require__(151);

Object.keys(_pages).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pages[key];
    }
  });
});

var _pageInit = __webpack_require__(904);

Object.keys(_pageInit).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pageInit[key];
    }
  });
});

var _pageInitControls = __webpack_require__(906);

Object.keys(_pageInitControls).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pageInitControls[key];
    }
  });
});

var _pageCreated = __webpack_require__(908);

Object.keys(_pageCreated).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pageCreated[key];
    }
  });
});

var _pageCreatedControls = __webpack_require__(911);

Object.keys(_pageCreatedControls).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _pageCreatedControls[key];
    }
  });
});

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

module.exports = "\r\n.pages__editor {\r\n\r\n    font-family: \"Roboto\";\r\n\r\n    margin: auto;\r\n\r\n    width: 870px;\r\n\r\n    background-color: #ffffff;\r\n\r\n}\r\n\r\n.pages__editor-canvas {\r\n\r\n    padding: 15px;\r\n\r\n}\r\n\r\n.pages__editor-canvas__time {\r\n\r\n    margin: 0;\r\n\r\n    padding: 0;\r\n\r\n    color: #aeafb4;\r\n\r\n}\r\n\r\n.pages__editor-canvas__title,\r\n.pages__editor-canvas__text {\r\n\r\n    border: none;\r\n    \r\n    background: none;\r\n\r\n    width: 100%;\r\n\r\n    outline: none;\r\n\r\n    margin: 0;\r\n\r\n    padding: 0;\r\n\r\n    color: #404044;\r\n\r\n    font-size: 24px;\r\n\r\n    font-family: \"Roboto\";\r\n\r\n    font-weight: 500;\r\n\r\n}\r\n\r\n.pages__editor-canvas__title::-webkit-input-placeholder {\r\n\r\n    color: #aeafb4;\r\n\r\n    font-weight: 300;\r\n\r\n}\r\n\r\n.pages__editor-canvas__title {\r\n\r\n    margin: 50px 0 25px 0;\r\n\r\n}\r\n\r\n.pages__editor-canvas__text {\r\n\r\n    font-size: 14px;\r\n\r\n    font-weight: 300;\r\n\r\n    line-height: 1.5em;\r\n\r\n    resize: none;\r\n\r\n    overflow: hidden;\r\n\r\n    overflow-y: auto;\r\n\r\n    min-height: 745px;\r\n\r\n}\r\n\r\n\r\n/* .page-editor h3 { \r\n\r\n    font-size: 18px;\r\n\r\n    font-weight: 500;\r\n\r\n    margin: 20px 0;\r\n\r\n}\r\n\r\n.page-editor .editor-content {\r\n\r\n    position: relative;\r\n\r\n}\r\n\r\n.editor-content .page-title {\r\n\r\n    border: none;\r\n\r\n    background: none;\r\n\r\n    width: 100%;\r\n\r\n    outline: none;\r\n\r\n    font-size: 24px;\r\n\r\n    padding: 15px 0;\r\n\r\n    margin: 0;\r\n\r\n}\r\n\r\n.editor-content textarea {\r\n\r\n    border: none;\r\n\r\n    background: none;\r\n\r\n    width: 100%;\r\n\r\n    outline: none;\r\n\r\n    font-size: 1em;\r\n\r\n    font-weight: 300;\r\n\r\n    padding: 0;\r\n\r\n    padding-right: 15px;\r\n\r\n    font-family: 'Roboto', sans-serif;\r\n\r\n    overflow: hidden;\r\n\r\n    overflow-y: auto;\r\n\r\n    line-height: 1.5em;\r\n\r\n    color: #606c76;\r\n\r\n    resize: none;\r\n\r\n    margin: 0;\r\n\r\n    min-height: 250px;\r\n\r\n} */"

/***/ }),

/***/ 427:
/***/ (function(module, exports) {

module.exports = "\r\n.pages__editor-controls {\r\n\r\n    font-family: \"Roboto\";\r\n\r\n    position: relative;\r\n\r\n    width: 100%;\r\n\r\n    padding: 15px;\r\n\r\n}\r\n\r\n.pages__editor-controls__actions {\r\n\r\n    float: right;\r\n\r\n}\r\n\r\n.pages__editor-controls__actions-action {\r\n\r\n    float: left;\r\n\r\n    cursor: pointer;\r\n\r\n    font-size: 16px;\r\n\r\n    line-height: 16px;\r\n\r\n    color: #404044;\r\n\r\n    padding: 0 10px;\r\n\r\n}\r\n"

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵinterceptingHandler", function() { return interceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return HttpXsrfInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return XSRF_HEADER_NAME; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatMap__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_filter__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);

/**
 * @license Angular v4.4.6
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */







/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * \@experimental
 * @abstract
 */
var HttpHandler = (function () {
    function HttpHandler() {
    }
    /**
     * @abstract
     * @param {?} req
     * @return {?}
     */
    HttpHandler.prototype.handle = function (req) { };
    return HttpHandler;
}());
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * \@experimental
 * @abstract
 */
var HttpBackend = (function () {
    function HttpBackend() {
    }
    /**
     * @abstract
     * @param {?} req
     * @return {?}
     */
    HttpBackend.prototype.handle = function (req) { };
    return HttpBackend;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A `HttpParameterCodec` that uses `encodeURIComponent` and `decodeURIComponent` to
 * serialize and parse URL parameter keys and values.
 *
 * \@experimental
 */
var HttpUrlEncodingCodec = (function () {
    function HttpUrlEncodingCodec() {
    }
    /**
     * @param {?} k
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.encodeKey = function (k) { return standardEncoding(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.encodeValue = function (v) { return standardEncoding(v); };
    /**
     * @param {?} k
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.decodeKey = function (k) { return decodeURIComponent(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    HttpUrlEncodingCodec.prototype.decodeValue = function (v) { return decodeURIComponent(v); };
    return HttpUrlEncodingCodec;
}());
/**
 * @param {?} rawParams
 * @param {?} codec
 * @return {?}
 */
function paramParser(rawParams, codec) {
    var /** @type {?} */ map$$1 = new Map();
    if (rawParams.length > 0) {
        var /** @type {?} */ params = rawParams.split('&');
        params.forEach(function (param) {
            var /** @type {?} */ eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))], key = _a[0], val = _a[1];
            var /** @type {?} */ list = map$$1.get(key) || [];
            list.push(val);
            map$$1.set(key, list);
        });
    }
    return map$$1;
}
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immuatable - all mutation operations return a new instance.
 *
 * \@experimental
 */
var HttpParams = (function () {
    /**
     * @param {?=} options
     */
    function HttpParams(options) {
        if (options === void 0) { options = {}; }
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        this.map = !!options.fromString ? paramParser(options.fromString, this.encoder) : null;
    }
    /**
     * Check whether the body has one or more values for the given parameter name.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.has = function (param) {
        this.init();
        return ((this.map)).has(param);
    };
    /**
     * Get the first value for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.get = function (param) {
        this.init();
        var /** @type {?} */ res = ((this.map)).get(param);
        return !!res ? res[0] : null;
    };
    /**
     * Get all values for the given parameter name, or `null` if it's not present.
     * @param {?} param
     * @return {?}
     */
    HttpParams.prototype.getAll = function (param) {
        this.init();
        return ((this.map)).get(param) || null;
    };
    /**
     * Get all the parameter names for this body.
     * @return {?}
     */
    HttpParams.prototype.keys = function () {
        this.init();
        return Array.from(/** @type {?} */ ((this.map)).keys());
    };
    /**
     * Construct a new body with an appended value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    HttpParams.prototype.append = function (param, value) { return this.clone({ param: param, value: value, op: 'a' }); };
    /**
     * Construct a new body with a new value for the given parameter name.
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    HttpParams.prototype.set = function (param, value) { return this.clone({ param: param, value: value, op: 's' }); };
    /**
     * Construct a new body with either the given value for the given parameter
     * removed, if a value is given, or all values for the given parameter removed
     * if not.
     * @param {?} param
     * @param {?=} value
     * @return {?}
     */
    HttpParams.prototype.delete = function (param, value) { return this.clone({ param: param, value: value, op: 'd' }); };
    /**
     * Serialize the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     * @return {?}
     */
    HttpParams.prototype.toString = function () {
        var _this = this;
        this.init();
        return this.keys()
            .map(function (key) {
            var /** @type {?} */ eKey = _this.encoder.encodeKey(key);
            return ((((_this.map)).get(key))).map(function (value) { return eKey + '=' + _this.encoder.encodeValue(value); })
                .join('&');
        })
            .join('&');
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpParams.prototype.clone = function (update) {
        var /** @type {?} */ clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat([update]);
        return clone;
    };
    /**
     * @return {?}
     */
    HttpParams.prototype.init = function () {
        var _this = this;
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(function (key) { return ((_this.map)).set(key, /** @type {?} */ ((((((_this.cloneFrom)).map)).get(key)))); }); /** @type {?} */
            ((this.updates)).forEach(function (update) {
                switch (update.op) {
                    case 'a':
                    case 's':
                        var /** @type {?} */ base = (update.op === 'a' ? ((_this.map)).get(update.param) : undefined) || [];
                        base.push(/** @type {?} */ ((update.value))); /** @type {?} */
                        ((_this.map)).set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            var /** @type {?} */ base_1 = ((_this.map)).get(update.param) || [];
                            var /** @type {?} */ idx = base_1.indexOf(update.value);
                            if (idx !== -1) {
                                base_1.splice(idx, 1);
                            }
                            if (base_1.length > 0) {
                                ((_this.map)).set(update.param, base_1);
                            }
                            else {
                                ((_this.map)).delete(update.param);
                            }
                        }
                        else {
                            ((_this.map)).delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = null;
        }
    };
    return HttpParams;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Immutable set of Http headers, with lazy parsing.
 * \@experimental
 */
var HttpHeaders = (function () {
    /**
     * @param {?=} headers
     */
    function HttpHeaders(headers) {
        var _this = this;
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = function () {
                _this.headers = new Map();
                headers.split('\n').forEach(function (line) {
                    var index = line.indexOf(':');
                    if (index > 0) {
                        var name = line.slice(0, index);
                        var key = name.toLowerCase();
                        var value = line.slice(index + 1).trim();
                        _this.maybeSetNormalizedName(name, key);
                        if (_this.headers.has(key)) {
                            _this.headers.get(key).push(value);
                        }
                        else {
                            _this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = function () {
                _this.headers = new Map();
                Object.keys(headers).forEach(function (name) {
                    var values = headers[name];
                    var key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        _this.headers.set(key, values);
                        _this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.has = function (name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    };
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.get = function (name) {
        this.init();
        var /** @type {?} */ values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    };
    /**
     * Returns the names of the headers
     * @return {?}
     */
    HttpHeaders.prototype.keys = function () {
        this.init();
        return Array.from(this.normalizedNames.values());
    };
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    HttpHeaders.prototype.getAll = function (name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    HttpHeaders.prototype.append = function (name, value) {
        return this.clone({ name: name, value: value, op: 'a' });
    };
    /**
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    HttpHeaders.prototype.set = function (name, value) {
        return this.clone({ name: name, value: value, op: 's' });
    };
    /**
     * @param {?} name
     * @param {?=} value
     * @return {?}
     */
    HttpHeaders.prototype.delete = function (name, value) {
        return this.clone({ name: name, value: value, op: 'd' });
    };
    /**
     * @param {?} name
     * @param {?} lcName
     * @return {?}
     */
    HttpHeaders.prototype.maybeSetNormalizedName = function (name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    };
    /**
     * @return {?}
     */
    HttpHeaders.prototype.init = function () {
        var _this = this;
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(function (update) { return _this.applyUpdate(update); });
                this.lazyUpdate = null;
            }
        }
    };
    /**
     * @param {?} other
     * @return {?}
     */
    HttpHeaders.prototype.copyFrom = function (other) {
        var _this = this;
        other.init();
        Array.from(other.headers.keys()).forEach(function (key) {
            _this.headers.set(key, /** @type {?} */ ((other.headers.get(key))));
            _this.normalizedNames.set(key, /** @type {?} */ ((other.normalizedNames.get(key))));
        });
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpHeaders.prototype.clone = function (update) {
        var /** @type {?} */ clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    };
    /**
     * @param {?} update
     * @return {?}
     */
    HttpHeaders.prototype.applyUpdate = function (update) {
        var /** @type {?} */ key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                var /** @type {?} */ value = ((update.value));
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                var /** @type {?} */ base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push.apply(base, value);
                this.headers.set(key, base);
                break;
            case 'd':
                var /** @type {?} */ toDelete_1 = (update.value);
                if (!toDelete_1) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    var /** @type {?} */ existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(function (value) { return toDelete_1.indexOf(value) === -1; });
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    };
    /**
     * \@internal
     * @param {?} fn
     * @return {?}
     */
    HttpHeaders.prototype.forEach = function (fn) {
        var _this = this;
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(function (key) { return fn(/** @type {?} */ ((_this.normalizedNames.get(key))), /** @type {?} */ ((_this.headers.get(key)))); });
    };
    return HttpHeaders;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 * @param {?} method
 * @return {?}
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 * @param {?} value
 * @return {?}
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 * @param {?} value
 * @return {?}
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 * @param {?} value
 * @return {?}
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * \@experimental
 */
var HttpRequest = (function () {
    /**
     * @param {?} method
     * @param {?} url
     * @param {?=} third
     * @param {?=} fourth
     */
    function HttpRequest(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        var options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = third || null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            var params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                var qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                var sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     * @return {?}
     */
    HttpRequest.prototype.serializeBody = function () {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return ((this.body)).toString();
    };
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     * @return {?}
     */
    HttpRequest.prototype.detectContentTypeHeader = function () {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            Array.isArray(this.body)) {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    };
    /**
     * @param {?=} update
     * @return {?}
     */
    HttpRequest.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        var /** @type {?} */ method = update.method || this.method;
        var /** @type {?} */ url = update.url || this.url;
        var /** @type {?} */ responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        var /** @type {?} */ body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        var /** @type {?} */ withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        var /** @type {?} */ reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        var /** @type {?} */ headers = update.headers || this.headers;
        var /** @type {?} */ params = update.params || this.params;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce(function (headers, name) { return headers.set(name, /** @type {?} */ ((update.setHeaders))[name]); }, headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce(function (params, param) { return params.set(param, /** @type {?} */ ((update.setParams))[param]); }, params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params: params, headers: headers, reportProgress: reportProgress, responseType: responseType, withCredentials: withCredentials,
        });
    };
    return HttpRequest;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var HttpEventType = {};
HttpEventType.Sent = 0;
HttpEventType.UploadProgress = 1;
HttpEventType.ResponseHeader = 2;
HttpEventType.DownloadProgress = 3;
HttpEventType.Response = 4;
HttpEventType.User = 5;
HttpEventType[HttpEventType.Sent] = "Sent";
HttpEventType[HttpEventType.UploadProgress] = "UploadProgress";
HttpEventType[HttpEventType.ResponseHeader] = "ResponseHeader";
HttpEventType[HttpEventType.DownloadProgress] = "DownloadProgress";
HttpEventType[HttpEventType.Response] = "Response";
HttpEventType[HttpEventType.User] = "User";
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * \@experimental
 * @abstract
 */
var HttpResponseBase = (function () {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     * @param {?} init
     * @param {?=} defaultStatus
     * @param {?=} defaultStatusText
     */
    function HttpResponseBase(init, defaultStatus, defaultStatusText) {
        if (defaultStatus === void 0) { defaultStatus = 200; }
        if (defaultStatusText === void 0) { defaultStatusText = 'OK'; }
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
    return HttpResponseBase;
}());
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * \@experimental
 */
var HttpHeaderResponse = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](HttpHeaderResponse, _super);
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     * @param {?=} init
     */
    function HttpHeaderResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.ResponseHeader;
        return _this;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     * @param {?=} update
     * @return {?}
     */
    HttpHeaderResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpHeaderResponse;
}(HttpResponseBase));
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * \@experimental
 */
var HttpResponse = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](HttpResponse, _super);
    /**
     * Construct a new `HttpResponse`.
     * @param {?=} init
     */
    function HttpResponse(init) {
        if (init === void 0) { init = {}; }
        var _this = _super.call(this, init) || this;
        _this.type = HttpEventType.Response;
        _this.body = init.body || null;
        return _this;
    }
    /**
     * @param {?=} update
     * @return {?}
     */
    HttpResponse.prototype.clone = function (update) {
        if (update === void 0) { update = {}; }
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    };
    return HttpResponse;
}(HttpResponseBase));
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * \@experimental
 */
var HttpErrorResponse = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](HttpErrorResponse, _super);
    /**
     * @param {?} init
     */
    function HttpErrorResponse(init) {
        var _this = 
        // Initialize with a default status of 0 / Unknown Error.
        _super.call(this, init, 0, 'Unknown Error') || this;
        _this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        _this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (_this.status >= 200 && _this.status < 300) {
            _this.message = "Http failure during parsing for " + (init.url || '(unknown url)');
        }
        else {
            _this.message =
                "Http failure response for " + (init.url || '(unknown url)') + ": " + init.status + " " + init.statusText;
        }
        _this.error = init.error || null;
        return _this;
    }
    return HttpErrorResponse;
}(HttpResponseBase));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Construct an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. Basically, this clones the object and adds the body.
 * @template T
 * @param {?} options
 * @param {?} body
 * @return {?}
 */
function addBody(options, body) {
    return {
        body: body,
        headers: options.headers,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Perform HTTP requests.
 *
 * `HttpClient` is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies according to which
 * signature is called (mainly the values of `observe` and `responseType`).
 *
 * \@experimental
 */
var HttpClient = (function () {
    /**
     * @param {?} handler
     */
    function HttpClient(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an `Observable` for a particular HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * This method can be called in one of two ways. Either an `HttpRequest`
     * instance can be passed directly as the only parameter, or a method can be
     * passed as the first parameter, a string URL as the second, and an
     * options hash as the third.
     *
     * If a `HttpRequest` object is passed directly, an `Observable` of the
     * raw `HttpEvent` stream will be returned.
     *
     * If a request is instead built by providing a URL, the options object
     * determines the return type of `request()`. In addition to configuring
     * request parameters such as the outgoing headers and/or the body, the options
     * hash specifies two key pieces of information about the request: the
     * `responseType` and what to `observe`.
     *
     * The `responseType` value determines how a successful response body will be
     * parsed. If `responseType` is the default `json`, a type interface for the
     * resulting object may be passed as a type parameter to `request()`.
     *
     * The `observe` value determines the return type of `request()`, based on what
     * the consumer is interested in observing. A value of `events` will return an
     * `Observable<HttpEvent>` representing the raw `HttpEvent` stream,
     * including progress events by default. A value of `response` will return an
     * `Observable<HttpResponse<T>>` where the `T` parameter of `HttpResponse`
     * depends on the `responseType` and any optionally provided type parameter.
     * A value of `body` will return an `Observable<T>` with the same `T` body type.
     * @param {?} first
     * @param {?=} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.request = function (first, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var /** @type {?} */ req;
        // Firstly, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = (first);
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming GET unless a method is
            // provided.
            req = new HttpRequest(first, /** @type {?} */ ((url)), options.body || null, {
                headers: options.headers,
                params: options.params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        var /** @type {?} */ events$ = __WEBPACK_IMPORTED_MODULE_3_rxjs_operator_concatMap__["concatMap"].call(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(req), function (req) { return _this.handler.handle(req); });
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        var /** @type {?} */ res$ = __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_filter__["filter"].call(events$, function (event) { return event instanceof HttpResponse; });
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].call(res$, function (res) {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        });
                    case 'blob':
                        return __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].call(res$, function (res) {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        });
                    case 'text':
                        return __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].call(res$, function (res) {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        });
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return __WEBPACK_IMPORTED_MODULE_5_rxjs_operator_map__["map"].call(res$, function (res) { return res.body; });
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error("Unreachable: unhandled observe type " + options.observe + "}");
        }
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * DELETE request to be executed on the server. See the individual overloads for
     * details of `delete()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.delete = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('DELETE', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * GET request to be executed on the server. See the individual overloads for
     * details of `get()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.get = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('GET', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * HEAD request to be executed on the server. See the individual overloads for
     * details of `head()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.head = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('HEAD', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause a request
     * with the special method `JSONP` to be dispatched via the interceptor pipeline.
     *
     * A suitable interceptor must be installed (e.g. via the `HttpClientJsonpModule`).
     * If no such interceptor is reached, then the `JSONP` request will likely be
     * rejected by the configured backend.
     * @template T
     * @param {?} url
     * @param {?} callbackParam
     * @return {?}
     */
    HttpClient.prototype.jsonp = function (url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * OPTIONS request to be executed on the server. See the individual overloads for
     * details of `options()`'s return type based on the provided options.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.options = function (url, options) {
        if (options === void 0) { options = {}; }
        return this.request('OPTIONS', url, /** @type {?} */ (options));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * PATCH request to be executed on the server. See the individual overloads for
     * details of `patch()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.patch = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PATCH', url, addBody(options, body));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.post = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('POST', url, addBody(options, body));
    };
    /**
     * Constructs an `Observable` which, when subscribed, will cause the configured
     * POST request to be executed on the server. See the individual overloads for
     * details of `post()`'s return type based on the provided options.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpClient.prototype.put = function (url, body, options) {
        if (options === void 0) { options = {}; }
        return this.request('PUT', url, addBody(options, body));
    };
    return HttpClient;
}());
HttpClient.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
HttpClient.ctorParameters = function () { return [
    { type: HttpHandler, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 * \@experimental
 */
var HttpInterceptorHandler = (function () {
    /**
     * @param {?} next
     * @param {?} interceptor
     */
    function HttpInterceptorHandler(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    HttpInterceptorHandler.prototype.handle = function (req) {
        return this.interceptor.intercept(req, this.next);
    };
    return HttpInterceptorHandler;
}());
/**
 * A multi-provider token which represents the array of `HttpInterceptor`s that
 * are registered.
 *
 * \@experimental
 */
var HTTP_INTERCEPTORS = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('HTTP_INTERCEPTORS');
var NoopInterceptor = (function () {
    function NoopInterceptor() {
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    NoopInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req);
    };
    return NoopInterceptor;
}());
NoopInterceptor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
NoopInterceptor.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
var nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 * \@experimental
 * @abstract
 */
var JsonpCallbackContext = (function () {
    function JsonpCallbackContext() {
    }
    return JsonpCallbackContext;
}());
/**
 * `HttpBackend` that only processes `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 *
 * \@experimental
 */
var JsonpClientBackend = (function () {
    /**
     * @param {?} callbackMap
     * @param {?} document
     */
    function JsonpClientBackend(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     * @return {?}
     */
    JsonpClientBackend.prototype.nextCallback = function () { return "ng_jsonp_callback_" + nextRequestId++; };
    /**
     * Process a JSONP request and return an event stream of the results.
     * @param {?} req
     * @return {?}
     */
    JsonpClientBackend.prototype.handle = function (req) {
        var _this = this;
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            var /** @type {?} */ callback = _this.nextCallback();
            var /** @type {?} */ url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=" + callback + "$1");
            // Construct the <script> tag and point it at the URL.
            var /** @type {?} */ node = _this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            var /** @type {?} */ body = null;
            // Whether the response callback has been called.
            var /** @type {?} */ finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            var /** @type {?} */ cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            _this.callbackMap[callback] = function (data) {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete _this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            var /** @type {?} */ cleanup = function () {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete _this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            var /** @type {?} */ onLoad = function (event) {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // Cleanup the page.
                cleanup();
                // Check whether the response callback has run.
                if (!finished) {
                    // It hasn't, something went wrong with the request. Return an error via
                    // the Observable error path. All JSONP errors have status 0.
                    observer.error(new HttpErrorResponse({
                        url: url,
                        status: 0,
                        statusText: 'JSONP Error',
                        error: new Error(JSONP_ERR_NO_CALLBACK),
                    }));
                    return;
                }
                // Success. body either contains the response body or null if none was
                // returned.
                observer.next(new HttpResponse({
                    body: body,
                    status: 200,
                    statusText: 'OK', url: url,
                }));
                // Complete the stream, the resposne is over.
                observer.complete();
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            var /** @type {?} */ onError = function (error) {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error: error,
                    status: 0,
                    statusText: 'JSONP Error', url: url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            _this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return function () {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    };
    return JsonpClientBackend;
}());
JsonpClientBackend.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
JsonpClientBackend.ctorParameters = function () { return [
    { type: JsonpCallbackContext, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["DOCUMENT"],] },] },
]; };
/**
 * An `HttpInterceptor` which identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * \@experimental
 */
var JsonpInterceptor = (function () {
    /**
     * @param {?} jsonp
     */
    function JsonpInterceptor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    JsonpInterceptor.prototype.intercept = function (req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(/** @type {?} */ (req));
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    };
    return JsonpInterceptor;
}());
JsonpInterceptor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
JsonpInterceptor.ctorParameters = function () { return [
    { type: JsonpClientBackend, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 * @param {?} xhr
 * @return {?}
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * \@experimental
 * @abstract
 */
var XhrFactory = (function () {
    function XhrFactory() {
    }
    /**
     * @abstract
     * @return {?}
     */
    XhrFactory.prototype.build = function () { };
    return XhrFactory;
}());
/**
 * A factory for \@{link HttpXhrBackend} that uses the `XMLHttpRequest` browser API.
 *
 * \@experimental
 */
var BrowserXhr = (function () {
    function BrowserXhr() {
    }
    /**
     * @return {?}
     */
    BrowserXhr.prototype.build = function () { return ((new XMLHttpRequest())); };
    return BrowserXhr;
}());
BrowserXhr.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BrowserXhr.ctorParameters = function () { return []; };
/**
 * An `HttpBackend` which uses the XMLHttpRequest API to send
 * requests to a backend server.
 *
 * \@experimental
 */
var HttpXhrBackend = (function () {
    /**
     * @param {?} xhrFactory
     */
    function HttpXhrBackend(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Process a request and return a stream of response events.
     * @param {?} req
     * @return {?}
     */
    HttpXhrBackend.prototype.handle = function (req) {
        var _this = this;
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the JsonpClientModule
        if (req.method === 'JSONP') {
            throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
        }
        // Everything happens on Observable subscription.
        return new __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"](function (observer) {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            var /** @type {?} */ xhr = _this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach(function (name, values) { return xhr.setRequestHeader(name, values.join(',')); });
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                var /** @type {?} */ detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                var /** @type {?} */ responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = (((responseType !== 'json') ? responseType : 'text'));
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            var /** @type {?} */ reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            var /** @type {?} */ headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            var /** @type {?} */ partialFromXhr = function () {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).
                var /** @type {?} */ status = xhr.status === 1223 ? 204 : xhr.status;
                var /** @type {?} */ statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                var /** @type {?} */ headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                var /** @type {?} */ url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers: headers, status: status, statusText: statusText, url: url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            var /** @type {?} */ onLoad = function () {
                // Read response state from the memoized partial data.
                var _a = partialFromXhr(), headers = _a.headers, status = _a.status, statusText = _a.statusText, url = _a.url;
                // The body will be read out if present.
                var /** @type {?} */ body = null;
                if (status !== 204) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                var /** @type {?} */ ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (ok && req.responseType === 'json' && typeof body === 'string') {
                    // Attempt the parse. If it fails, a parse error should be delivered to the user.
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        body = JSON.parse(body);
                    }
                    catch (error) {
                        // Even though the response status was 2xx, this is still an error.
                        ok = false;
                        // The parse error contains the text of the body that failed to parse.
                        body = ({ error: error, text: body });
                    }
                }
                else if (!ok && req.responseType === 'json' && typeof body === 'string') {
                    try {
                        // Attempt to parse the body as JSON.
                        body = JSON.parse(body);
                    }
                    catch (error) {
                        // Cannot be certain that the body was meant to be parsed as JSON.
                        // Leave the body as a string.
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers: headers,
                        status: status,
                        statusText: statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            var /** @type {?} */ onError = function (error) {
                var /** @type {?} */ res = new HttpErrorResponse({
                    error: error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            var /** @type {?} */ sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            var /** @type {?} */ onDownProgress = function (event) {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                var /** @type {?} */ progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            var /** @type {?} */ onUpProgress = function (event) {
                // Upload progress events are simpler. Begin building the progress
                // event.
                var /** @type {?} */ progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return function () {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('load', onLoad);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                xhr.abort();
            };
        });
    };
    return HttpXhrBackend;
}());
HttpXhrBackend.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
HttpXhrBackend.ctorParameters = function () { return [
    { type: XhrFactory, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSRF_COOKIE_NAME = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('XSRF_COOKIE_NAME');
var XSRF_HEADER_NAME = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * \@experimental
 * @abstract
 */
var HttpXsrfTokenExtractor = (function () {
    function HttpXsrfTokenExtractor() {
    }
    /**
     * Get the XSRF token to use with an outgoing request.
     *
     * Will be called for every request, so the token may change between requests.
     * @abstract
     * @return {?}
     */
    HttpXsrfTokenExtractor.prototype.getToken = function () { };
    return HttpXsrfTokenExtractor;
}());
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
var HttpXsrfCookieExtractor = (function () {
    /**
     * @param {?} doc
     * @param {?} platform
     * @param {?} cookieName
     */
    function HttpXsrfCookieExtractor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * \@internal for testing
         */
        this.parseCount = 0;
    }
    /**
     * @return {?}
     */
    HttpXsrfCookieExtractor.prototype.getToken = function () {
        if (this.platform === 'server') {
            return null;
        }
        var /** @type {?} */ cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = Object(__WEBPACK_IMPORTED_MODULE_6__angular_common__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    };
    return HttpXsrfCookieExtractor;
}());
HttpXsrfCookieExtractor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
HttpXsrfCookieExtractor.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_6__angular_common__["DOCUMENT"],] },] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"],] },] },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [XSRF_COOKIE_NAME,] },] },
]; };
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
var HttpXsrfInterceptor = (function () {
    /**
     * @param {?} tokenService
     * @param {?} headerName
     */
    function HttpXsrfInterceptor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    /**
     * @param {?} req
     * @param {?} next
     * @return {?}
     */
    HttpXsrfInterceptor.prototype.intercept = function (req, next) {
        var /** @type {?} */ lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        var /** @type {?} */ token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    };
    return HttpXsrfInterceptor;
}());
HttpXsrfInterceptor.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
HttpXsrfInterceptor.ctorParameters = function () { return [
    { type: HttpXsrfTokenExtractor, },
    { type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"], args: [XSRF_HEADER_NAME,] },] },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Constructs an `HttpHandler` that applies a bunch of `HttpInterceptor`s
 * to a request before passing it to the given `HttpBackend`.
 *
 * Meant to be used as a factory function within `HttpClientModule`.
 *
 * \@experimental
 * @param {?} backend
 * @param {?=} interceptors
 * @return {?}
 */
function interceptingHandler(backend, interceptors) {
    if (interceptors === void 0) { interceptors = []; }
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight(function (next, interceptor) { return new HttpInterceptorHandler(next, interceptor); }, backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 * \@experimental
 * @return {?}
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * `NgModule` which adds XSRF protection support to outgoing requests.
 *
 * Provided the server supports a cookie-based XSRF protection system, this
 * module can be used directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no such names are provided, the default is to use `X-XSRF-TOKEN` for
 * the header name and `XSRF-TOKEN` for the cookie name.
 *
 * \@experimental
 */
var HttpClientXsrfModule = (function () {
    function HttpClientXsrfModule() {
    }
    /**
     * Disable the default XSRF protection.
     * @return {?}
     */
    HttpClientXsrfModule.disable = function () {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    };
    /**
     * Configure XSRF protection to use the given cookie name or header name,
     * or the default names (as described above) if not provided.
     * @param {?=} options
     * @return {?}
     */
    HttpClientXsrfModule.withOptions = function (options) {
        if (options === void 0) { options = {}; }
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    };
    return HttpClientXsrfModule;
}());
HttpClientXsrfModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                providers: [
                    HttpXsrfInterceptor,
                    { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                    { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                    { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                ],
            },] },
];
/**
 * @nocollapse
 */
HttpClientXsrfModule.ctorParameters = function () { return []; };
/**
 * `NgModule` which provides the `HttpClient` and associated services.
 *
 * Interceptors can be added to the chain behind `HttpClient` by binding them
 * to the multiprovider for `HTTP_INTERCEPTORS`.
 *
 * \@experimental
 */
var HttpClientModule = (function () {
    function HttpClientModule() {
    }
    return HttpClientModule;
}());
HttpClientModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                imports: [
                    HttpClientXsrfModule.withOptions({
                        cookieName: 'XSRF-TOKEN',
                        headerName: 'X-XSRF-TOKEN',
                    }),
                ],
                providers: [
                    HttpClient,
                    // HttpHandler is the backend + interceptors and is constructed
                    // using the interceptingHandler factory function.
                    {
                        provide: HttpHandler,
                        useFactory: interceptingHandler,
                        deps: [HttpBackend, [new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"](), new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"](HTTP_INTERCEPTORS)]],
                    },
                    HttpXhrBackend,
                    { provide: HttpBackend, useExisting: HttpXhrBackend },
                    BrowserXhr,
                    { provide: XhrFactory, useExisting: BrowserXhr },
                ],
            },] },
];
/**
 * @nocollapse
 */
HttpClientModule.ctorParameters = function () { return []; };
/**
 * `NgModule` which enables JSONP support in `HttpClient`.
 *
 * Without this module, Jsonp requests will reach the backend
 * with method JSONP, where they'll be rejected.
 *
 * \@experimental
 */
var HttpClientJsonpModule = (function () {
    function HttpClientJsonpModule() {
    }
    return HttpClientJsonpModule;
}());
HttpClientJsonpModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                providers: [
                    JsonpClientBackend,
                    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                ],
            },] },
];
/**
 * @nocollapse
 */
HttpClientJsonpModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=http.es5.js.map


/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _platformBrowserDynamic = __webpack_require__(197);

var _app = __webpack_require__(872);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _platformBrowserDynamic.platformBrowserDynamic)().bootstrapModule(_app2.default);

/***/ }),

/***/ 872:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _dec, _class;

var _core = __webpack_require__(4);

var _router = __webpack_require__(25);

var _platformBrowser = __webpack_require__(61);

var _forms = __webpack_require__(212);

var _http = __webpack_require__(54);

var _app = __webpack_require__(873);

var _auth = __webpack_require__(104);

var _app2 = __webpack_require__(913);

var _app3 = _interopRequireDefault(_app2);

var _signin = __webpack_require__(416);

var _signup = __webpack_require__(418);

var _sidebar = __webpack_require__(915);

var _sidebar2 = _interopRequireDefault(_sidebar);

var _activities = __webpack_require__(421);

var _books = __webpack_require__(419);

var _booksPages = __webpack_require__(423);

var _pages = __webpack_require__(425);

var _alerts = __webpack_require__(918);

var _alerts2 = _interopRequireDefault(_alerts);

var _alerts3 = __webpack_require__(152);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppModule = (_dec = (0, _core.NgModule)({

    imports: [_platformBrowser.BrowserModule, _http.HttpClientModule, _forms.FormsModule, _router.RouterModule.forRoot(_app.AppRoutes, { useHash: true })],

    declarations: [_app3.default, _alerts2.default, _signin.SigninComponent, _signup.SignupComponent, _sidebar2.default, _books.BooksComponent, _books.BooksSearchPipe, _books.BooksListComponent, _books.BooksSearchComponent, _booksPages.BooksPagesComponent, _pages.PageInitComponent, _pages.PageInitControlsComponent, _pages.PageCreatedComponent, _pages.PageCreatedControlsComponent, _activities.ActivitiesComponent, _activities.ActivitiesTagsComponent, _activities.ActivitiesListComponent],

    providers: [_auth.AuthStore, _auth.AuthGuard, _auth.AuthService, {
        provide: _http.HTTP_INTERCEPTORS,
        useClass: _auth.AuthInterceptor,
        multi: true
    }, _alerts3.AlertsService, _books.BooksService, _pages.PagesService, _booksPages.BooksPagesService, _activities.ActivitiesService],

    bootstrap: [_app3.default]

}), _dec(_class = function AppModule() {
    _classCallCheck(this, AppModule);
}) || _class);
exports.default = AppModule;

/***/ }),

/***/ 873:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.AppRoutes = undefined;

var _router = __webpack_require__(25);

var _signin = __webpack_require__(416);

var _signup = __webpack_require__(418);

var _books = __webpack_require__(419);

var _activities = __webpack_require__(421);

var _booksPages = __webpack_require__(423);

var _pages = __webpack_require__(425);

var _auth = __webpack_require__(104);

var AppRoutes = exports.AppRoutes = [{

        path: "",

        redirectTo: "books",

        pathMatch: "full"

}, {

        path: "signin",

        component: _signin.SigninComponent

}, {

        path: "signup",

        component: _signup.SignupComponent

}, {

        path: "books",

        component: _books.BooksComponent,

        children: [{ path: ":bookId/pages", component: _booksPages.BooksPagesComponent }, { path: ":bookId/pages/create", component: _pages.PageInitComponent }, { path: ":bookId/pages/:pageOrder", component: _pages.PageCreatedComponent }],

        canActivate: [_auth.AuthGuard]

}, {

        path: "activities",

        component: _activities.ActivitiesComponent,

        canActivate: [_auth.AuthGuard]

}];

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.AuthError = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _router = __webpack_require__(25);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthError = exports.AuthError = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
        function AuthError(injector) {
                _classCallCheck(this, AuthError);

                this._injector = injector;
        }

        _createClass(AuthError, [{
                key: "handleError",
                value: function handleError(error) {

                        var router = this._injector.get(_router.Router);

                        console.log(error);

                        if (error.status === 401 || error.status === 403) {

                                router.navigate(["/signup"]);

                                return;
                        };
                }
        }]);

        return AuthError;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_core.Injector], AuthError);
;

/***/ }),

/***/ 875:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.AuthGuard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _router = __webpack_require__(25);

var _auth = __webpack_require__(105);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthGuard = exports.AuthGuard = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
        function AuthGuard(router, authStore) {
                _classCallCheck(this, AuthGuard);

                this._router = router;

                this._authStore = authStore;
        }

        _createClass(AuthGuard, [{
                key: "canActivate",
                value: function canActivate() {

                        var token = this._authStore.GetToken();

                        var experationTime = this._authStore.GetTokenExperationTime();

                        //todo: work with date times   

                        console.log(token);

                        if (!token) {

                                this._router.navigate(["/signin"]);

                                return false;
                        };

                        return true;
                }
        }]);

        return AuthGuard;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_router.Router, _auth.AuthStore], AuthGuard);
;

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.AuthRequest = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _http = __webpack_require__(877);

var _auth = __webpack_require__(105);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AuthRequest = exports.AuthRequest = function (_BaseRequestOptions) {
        _inherits(AuthRequest, _BaseRequestOptions);

        function AuthRequest(authStore) {
                _classCallCheck(this, AuthRequest);

                var _this = _possibleConstructorReturn(this, (AuthRequest.__proto__ || Object.getPrototypeOf(AuthRequest)).call(this));

                _this._authStore = authStore;

                _this.headers.set("Content-Type", "application/json");

                var token = _this._authStore.GetToken();

                if (token) {

                        _this.headers.append("Authorization", "Bearer " + token);
                };

                return _this;
        }

        _createClass(AuthRequest, [{
                key: "merge",
                value: function merge(options) {

                        var newOptions = _get(AuthRequest.prototype.__proto__ || Object.getPrototypeOf(AuthRequest.prototype), "merge", this).call(this, options);

                        var token = this._authStore.GetToken();

                        if (token) {

                                newOptions.headers.set("Authorization", "Bearer " + token);
                        };

                        return newOptions;
                }
        }]);

        return AuthRequest;
}(_http.BaseRequestOptions);

Reflect.defineMetadata("design:paramtypes", [_auth.AuthStore], AuthRequest);
;

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserXhr", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPBackend", function() { return JSONPBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JSONPConnection", function() { return JSONPConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CookieXSRFStrategy", function() { return CookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRBackend", function() { return XHRBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRConnection", function() { return XHRConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseRequestOptions", function() { return BaseRequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestOptions", function() { return RequestOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseResponseOptions", function() { return BaseResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseOptions", function() { return ResponseOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadyState", function() { return ReadyState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMethod", function() { return RequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseContentType", function() { return ResponseContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseType", function() { return ResponseType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Http", function() { return Http; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Jsonp", function() { return Jsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpModule", function() { return HttpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpModule", function() { return JsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return Connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionBackend", function() { return ConnectionBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XSRFStrategy", function() { return XSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryEncoder", function() { return QueryEncoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLSearchParams", function() { return URLSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return BrowserJsonp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return JSONPBackend_; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return Body; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return _createDefaultCookieXSRFStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return httpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return jsonpFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(61);

/**
 * @license Angular v4.4.6
 * (c) 2010-2017 Google, Inc. https://angular.io/
 * License: MIT
 */



/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A backend for http that uses the `XMLHttpRequest` browser API.
 *
 * Take care not to evaluate this in non-browser contexts.
 *
 * \@experimental
 */
var BrowserXhr = (function () {
    function BrowserXhr() {
    }
    /**
     * @return {?}
     */
    BrowserXhr.prototype.build = function () { return ((new XMLHttpRequest())); };
    return BrowserXhr;
}());
BrowserXhr.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BrowserXhr.ctorParameters = function () { return []; };
var RequestMethod = {};
RequestMethod.Get = 0;
RequestMethod.Post = 1;
RequestMethod.Put = 2;
RequestMethod.Delete = 3;
RequestMethod.Options = 4;
RequestMethod.Head = 5;
RequestMethod.Patch = 6;
RequestMethod[RequestMethod.Get] = "Get";
RequestMethod[RequestMethod.Post] = "Post";
RequestMethod[RequestMethod.Put] = "Put";
RequestMethod[RequestMethod.Delete] = "Delete";
RequestMethod[RequestMethod.Options] = "Options";
RequestMethod[RequestMethod.Head] = "Head";
RequestMethod[RequestMethod.Patch] = "Patch";
var ReadyState = {};
ReadyState.Unsent = 0;
ReadyState.Open = 1;
ReadyState.HeadersReceived = 2;
ReadyState.Loading = 3;
ReadyState.Done = 4;
ReadyState.Cancelled = 5;
ReadyState[ReadyState.Unsent] = "Unsent";
ReadyState[ReadyState.Open] = "Open";
ReadyState[ReadyState.HeadersReceived] = "HeadersReceived";
ReadyState[ReadyState.Loading] = "Loading";
ReadyState[ReadyState.Done] = "Done";
ReadyState[ReadyState.Cancelled] = "Cancelled";
var ResponseType = {};
ResponseType.Basic = 0;
ResponseType.Cors = 1;
ResponseType.Default = 2;
ResponseType.Error = 3;
ResponseType.Opaque = 4;
ResponseType[ResponseType.Basic] = "Basic";
ResponseType[ResponseType.Cors] = "Cors";
ResponseType[ResponseType.Default] = "Default";
ResponseType[ResponseType.Error] = "Error";
ResponseType[ResponseType.Opaque] = "Opaque";
var ContentType = {};
ContentType.NONE = 0;
ContentType.JSON = 1;
ContentType.FORM = 2;
ContentType.FORM_DATA = 3;
ContentType.TEXT = 4;
ContentType.BLOB = 5;
ContentType.ARRAY_BUFFER = 6;
ContentType[ContentType.NONE] = "NONE";
ContentType[ContentType.JSON] = "JSON";
ContentType[ContentType.FORM] = "FORM";
ContentType[ContentType.FORM_DATA] = "FORM_DATA";
ContentType[ContentType.TEXT] = "TEXT";
ContentType[ContentType.BLOB] = "BLOB";
ContentType[ContentType.ARRAY_BUFFER] = "ARRAY_BUFFER";
var ResponseContentType = {};
ResponseContentType.Text = 0;
ResponseContentType.Json = 1;
ResponseContentType.ArrayBuffer = 2;
ResponseContentType.Blob = 3;
ResponseContentType[ResponseContentType.Text] = "Text";
ResponseContentType[ResponseContentType.Json] = "Json";
ResponseContentType[ResponseContentType.ArrayBuffer] = "ArrayBuffer";
ResponseContentType[ResponseContentType.Blob] = "Blob";
/**
 * Polyfill for [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers/Headers), as
 * specified in the [Fetch Spec](https://fetch.spec.whatwg.org/#headers-class).
 *
 * The only known difference between this `Headers` implementation and the spec is the
 * lack of an `entries` method.
 *
 * ### Example
 *
 * ```
 * import {Headers} from '\@angular/http';
 *
 * var firstHeaders = new Headers();
 * firstHeaders.append('Content-Type', 'image/jpeg');
 * console.log(firstHeaders.get('Content-Type')) //'image/jpeg'
 *
 * // Create headers from Plain Old JavaScript Object
 * var secondHeaders = new Headers({
 *   'X-My-Custom-Header': 'Angular'
 * });
 * console.log(secondHeaders.get('X-My-Custom-Header')); //'Angular'
 *
 * var thirdHeaders = new Headers(secondHeaders);
 * console.log(thirdHeaders.get('X-My-Custom-Header')); //'Angular'
 * ```
 *
 * \@experimental
 */
var Headers = (function () {
    /**
     * @param {?=} headers
     */
    function Headers(headers) {
        var _this = this;
        /**
         * \@internal header names are lower case
         */
        this._headers = new Map();
        /**
         * \@internal map lower case names to actual names
         */
        this._normalizedNames = new Map();
        if (!headers) {
            return;
        }
        if (headers instanceof Headers) {
            headers.forEach(function (values, name) {
                values.forEach(function (value) { return _this.append(name, value); });
            });
            return;
        }
        Object.keys(headers).forEach(function (name) {
            var values = Array.isArray(headers[name]) ? headers[name] : [headers[name]];
            _this.delete(name);
            values.forEach(function (value) { return _this.append(name, value); });
        });
    }
    /**
     * Returns a new Headers instance from the given DOMString of Response Headers
     * @param {?} headersString
     * @return {?}
     */
    Headers.fromResponseHeaderString = function (headersString) {
        var /** @type {?} */ headers = new Headers();
        headersString.split('\n').forEach(function (line) {
            var /** @type {?} */ index = line.indexOf(':');
            if (index > 0) {
                var /** @type {?} */ name = line.slice(0, index);
                var /** @type {?} */ value = line.slice(index + 1).trim();
                headers.set(name, value);
            }
        });
        return headers;
    };
    /**
     * Appends a header to existing list of header values for a given header name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.append = function (name, value) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            this.set(name, value);
        }
        else {
            values.push(value);
        }
    };
    /**
     * Deletes all header values for the given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.delete = function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        this._normalizedNames.delete(lcName);
        this._headers.delete(lcName);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    Headers.prototype.forEach = function (fn) {
        var _this = this;
        this._headers.forEach(function (values, lcName) { return fn(values, _this._normalizedNames.get(lcName), _this._headers); });
    };
    /**
     * Returns first header that matches given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.get = function (name) {
        var /** @type {?} */ values = this.getAll(name);
        if (values === null) {
            return null;
        }
        return values.length > 0 ? values[0] : null;
    };
    /**
     * Checks for existence of header by given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.has = function (name) { return this._headers.has(name.toLowerCase()); };
    /**
     * Returns the names of the headers
     * @return {?}
     */
    Headers.prototype.keys = function () { return Array.from(this._normalizedNames.values()); };
    /**
     * Sets or overrides header value for given name.
     * @param {?} name
     * @param {?} value
     * @return {?}
     */
    Headers.prototype.set = function (name, value) {
        if (Array.isArray(value)) {
            if (value.length) {
                this._headers.set(name.toLowerCase(), [value.join(',')]);
            }
        }
        else {
            this._headers.set(name.toLowerCase(), [value]);
        }
        this.mayBeSetNormalizedName(name);
    };
    /**
     * Returns values of all headers.
     * @return {?}
     */
    Headers.prototype.values = function () { return Array.from(this._headers.values()); };
    /**
     * @return {?}
     */
    Headers.prototype.toJSON = function () {
        var _this = this;
        var /** @type {?} */ serialized = {};
        this._headers.forEach(function (values, name) {
            var /** @type {?} */ split = [];
            values.forEach(function (v) { return split.push.apply(split, v.split(',')); });
            serialized[((_this._normalizedNames.get(name)))] = split;
        });
        return serialized;
    };
    /**
     * Returns list of header values for a given name.
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.getAll = function (name) {
        return this.has(name) ? this._headers.get(name.toLowerCase()) || null : null;
    };
    /**
     * This method is not implemented.
     * @return {?}
     */
    Headers.prototype.entries = function () { throw new Error('"entries" method is not implemented on Headers class'); };
    /**
     * @param {?} name
     * @return {?}
     */
    Headers.prototype.mayBeSetNormalizedName = function (name) {
        var /** @type {?} */ lcName = name.toLowerCase();
        if (!this._normalizedNames.has(lcName)) {
            this._normalizedNames.set(lcName, name);
        }
    };
    return Headers;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a response options object to be optionally provided when instantiating a
 * {\@link Response}.
 *
 * This class is based on the `ResponseInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#responseinit).
 *
 * All values are null by default. Typical defaults can be found in the
 * {\@link BaseResponseOptions} class, which sub-classes `ResponseOptions`.
 *
 * This class may be used in tests to build {\@link Response Responses} for
 * mock responses (see {\@link MockBackend}).
 *
 * ### Example ([live demo](http://plnkr.co/edit/P9Jkk8e8cz6NVzbcxEsD?p=preview))
 *
 * ```typescript
 * import {ResponseOptions, Response} from '\@angular/http';
 *
 * var options = new ResponseOptions({
 *   body: '{"name":"Jeff"}'
 * });
 * var res = new Response(options);
 *
 * console.log('res.json():', res.json()); // Object {name: "Jeff"}
 * ```
 *
 * \@experimental
 */
var ResponseOptions = (function () {
    /**
     * @param {?=} opts
     */
    function ResponseOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var body = opts.body, status = opts.status, headers = opts.headers, statusText = opts.statusText, type = opts.type, url = opts.url;
        this.body = body != null ? body : null;
        this.status = status != null ? status : null;
        this.headers = headers != null ? headers : null;
        this.statusText = statusText != null ? statusText : null;
        this.type = type != null ? type : null;
        this.url = url != null ? url : null;
    }
    /**
     * Creates a copy of the `ResponseOptions` instance, using the optional input as values to
     * override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * This may be useful when sharing a base `ResponseOptions` object inside tests,
     * where certain properties may change from test to test.
     *
     * ### Example ([live demo](http://plnkr.co/edit/1lXquqFfgduTFBWjNoRE?p=preview))
     *
     * ```typescript
     * import {ResponseOptions, Response} from '\@angular/http';
     *
     * var options = new ResponseOptions({
     *   body: {name: 'Jeff'}
     * });
     * var res = new Response(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('options.url:', options.url); // null
     * console.log('res.json():', res.json()); // Object {name: "Jeff"}
     * console.log('res.url:', res.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    ResponseOptions.prototype.merge = function (options) {
        return new ResponseOptions({
            body: options && options.body != null ? options.body : this.body,
            status: options && options.status != null ? options.status : this.status,
            headers: options && options.headers != null ? options.headers : this.headers,
            statusText: options && options.statusText != null ? options.statusText : this.statusText,
            type: options && options.type != null ? options.type : this.type,
            url: options && options.url != null ? options.url : this.url,
        });
    };
    return ResponseOptions;
}());
/**
 * Subclass of {\@link ResponseOptions}, with default values.
 *
 * Default values:
 *  * status: 200
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link ResponseOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create {\@link Response Responses}.
 *
 * ### Example ([live demo](http://plnkr.co/edit/qv8DLT?p=preview))
 *
 * ```typescript
 * import {provide} from '\@angular/core';
 * import {bootstrap} from '\@angular/platform-browser/browser';
 * import {HTTP_PROVIDERS, Headers, Http, BaseResponseOptions, ResponseOptions} from
 * '\@angular/http';
 * import {App} from './myapp';
 *
 * class MyOptions extends BaseResponseOptions {
 *   headers:Headers = new Headers({network: 'github'});
 * }
 *
 * bootstrap(App, [HTTP_PROVIDERS, {provide: ResponseOptions, useClass: MyOptions}]);
 * ```
 *
 * The options could also be extended when manually creating a {\@link Response}
 * object.
 *
 * ### Example ([live demo](http://plnkr.co/edit/VngosOWiaExEtbstDoix?p=preview))
 *
 * ```
 * import {BaseResponseOptions, Response} from '\@angular/http';
 *
 * var options = new BaseResponseOptions();
 * var res = new Response(options.merge({
 *   body: 'Angular',
 *   headers: new Headers({framework: 'angular'})
 * }));
 * console.log('res.headers.get("framework"):', res.headers.get('framework')); // angular
 * console.log('res.text():', res.text()); // Angular;
 * ```
 *
 * \@experimental
 */
var BaseResponseOptions = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](BaseResponseOptions, _super);
    function BaseResponseOptions() {
        return _super.call(this, { status: 200, statusText: 'Ok', type: ResponseType.Default, headers: new Headers() }) || this;
    }
    return BaseResponseOptions;
}(ResponseOptions));
BaseResponseOptions.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BaseResponseOptions.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Abstract class from which real backends are derived.
 *
 * The primary purpose of a `ConnectionBackend` is to create new connections to fulfill a given
 * {\@link Request}.
 *
 * \@experimental
 * @abstract
 */
var ConnectionBackend = (function () {
    function ConnectionBackend() {
    }
    /**
     * @abstract
     * @param {?} request
     * @return {?}
     */
    ConnectionBackend.prototype.createConnection = function (request) { };
    return ConnectionBackend;
}());
/**
 * Abstract class from which real connections are derived.
 *
 * \@experimental
 * @abstract
 */
var Connection = (function () {
    function Connection() {
    }
    return Connection;
}());
/**
 * An XSRFStrategy configures XSRF protection (e.g. via headers) on an HTTP request.
 *
 * \@experimental
 * @abstract
 */
var XSRFStrategy = (function () {
    function XSRFStrategy() {
    }
    /**
     * @abstract
     * @param {?} req
     * @return {?}
     */
    XSRFStrategy.prototype.configureRequest = function (req) { };
    return XSRFStrategy;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} method
 * @return {?}
 */
function normalizeMethodName(method) {
    if (typeof method !== 'string')
        return method;
    switch (method.toUpperCase()) {
        case 'GET':
            return RequestMethod.Get;
        case 'POST':
            return RequestMethod.Post;
        case 'PUT':
            return RequestMethod.Put;
        case 'DELETE':
            return RequestMethod.Delete;
        case 'OPTIONS':
            return RequestMethod.Options;
        case 'HEAD':
            return RequestMethod.Head;
        case 'PATCH':
            return RequestMethod.Patch;
    }
    throw new Error("Invalid request method. The method \"" + method + "\" is not supported.");
}
var isSuccess = function (status) { return (status >= 200 && status < 300); };
/**
 * @param {?} xhr
 * @return {?}
 */
function getResponseURL(xhr) {
    if ('responseURL' in xhr) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * @param {?} input
 * @return {?}
 */
/**
 * @param {?} input
 * @return {?}
 */
function stringToArrayBuffer(input) {
    var /** @type {?} */ view = new Uint16Array(input.length);
    for (var /** @type {?} */ i = 0, /** @type {?} */ strLen = input.length; i < strLen; i++) {
        view[i] = input.charCodeAt(i);
    }
    return view.buffer;
}
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @param {?=} rawParams
 * @return {?}
 */
function paramParser(rawParams) {
    if (rawParams === void 0) { rawParams = ''; }
    var /** @type {?} */ map = new Map();
    if (rawParams.length > 0) {
        var /** @type {?} */ params = rawParams.split('&');
        params.forEach(function (param) {
            var /** @type {?} */ eqIdx = param.indexOf('=');
            var _a = eqIdx == -1 ? [param, ''] : [param.slice(0, eqIdx), param.slice(eqIdx + 1)], key = _a[0], val = _a[1];
            var /** @type {?} */ list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
/**
 * \@experimental
 *
 */
var QueryEncoder = (function () {
    function QueryEncoder() {
    }
    /**
     * @param {?} k
     * @return {?}
     */
    QueryEncoder.prototype.encodeKey = function (k) { return standardEncoding(k); };
    /**
     * @param {?} v
     * @return {?}
     */
    QueryEncoder.prototype.encodeValue = function (v) { return standardEncoding(v); };
    return QueryEncoder;
}());
/**
 * @param {?} v
 * @return {?}
 */
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
/**
 * Map-like representation of url search parameters, based on
 * [URLSearchParams](https://url.spec.whatwg.org/#urlsearchparams) in the url living standard,
 * with several extensions for merging URLSearchParams objects:
 *   - setAll()
 *   - appendAll()
 *   - replaceAll()
 *
 * This class accepts an optional second parameter of ${\@link QueryEncoder},
 * which is used to serialize parameters before making a request. By default,
 * `QueryEncoder` encodes keys and values of parameters using `encodeURIComponent`,
 * and then un-encodes certain characters that are allowed to be part of the query
 * according to IETF RFC 3986: https://tools.ietf.org/html/rfc3986.
 *
 * These are the characters that are not encoded: `! $ \' ( ) * + , ; A 9 - . _ ~ ? /`
 *
 * If the set of allowed query characters is not acceptable for a particular backend,
 * `QueryEncoder` can be subclassed and provided as the 2nd argument to URLSearchParams.
 *
 * ```
 * import {URLSearchParams, QueryEncoder} from '\@angular/http';
 * class MyQueryEncoder extends QueryEncoder {
 *   encodeKey(k: string): string {
 *     return myEncodingFunction(k);
 *   }
 *
 *   encodeValue(v: string): string {
 *     return myEncodingFunction(v);
 *   }
 * }
 *
 * let params = new URLSearchParams('', new MyQueryEncoder());
 * ```
 * \@experimental
 */
var URLSearchParams = (function () {
    /**
     * @param {?=} rawParams
     * @param {?=} queryEncoder
     */
    function URLSearchParams(rawParams, queryEncoder) {
        if (rawParams === void 0) { rawParams = ''; }
        if (queryEncoder === void 0) { queryEncoder = new QueryEncoder(); }
        this.rawParams = rawParams;
        this.queryEncoder = queryEncoder;
        this.paramsMap = paramParser(rawParams);
    }
    /**
     * @return {?}
     */
    URLSearchParams.prototype.clone = function () {
        var /** @type {?} */ clone = new URLSearchParams('', this.queryEncoder);
        clone.appendAll(this);
        return clone;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.has = function (param) { return this.paramsMap.has(param); };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.get = function (param) {
        var /** @type {?} */ storedParam = this.paramsMap.get(param);
        return Array.isArray(storedParam) ? storedParam[0] : null;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.getAll = function (param) { return this.paramsMap.get(param) || []; };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.set = function (param, val) {
        if (val === void 0 || val === null) {
            this.delete(param);
            return;
        }
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.length = 0;
        list.push(val);
        this.paramsMap.set(param, list);
    };
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.setAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            list.push(value[0]);
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @param {?} param
     * @param {?} val
     * @return {?}
     */
    URLSearchParams.prototype.append = function (param, val) {
        if (val === void 0 || val === null)
            return;
        var /** @type {?} */ list = this.paramsMap.get(param) || [];
        list.push(val);
        this.paramsMap.set(param, list);
    };
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.appendAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @param {?} searchParams
     * @return {?}
     */
    URLSearchParams.prototype.replaceAll = function (searchParams) {
        var _this = this;
        searchParams.paramsMap.forEach(function (value, param) {
            var /** @type {?} */ list = _this.paramsMap.get(param) || [];
            list.length = 0;
            for (var /** @type {?} */ i = 0; i < value.length; ++i) {
                list.push(value[i]);
            }
            _this.paramsMap.set(param, list);
        });
    };
    /**
     * @return {?}
     */
    URLSearchParams.prototype.toString = function () {
        var _this = this;
        var /** @type {?} */ paramsList = [];
        this.paramsMap.forEach(function (values, k) {
            values.forEach(function (v) { return paramsList.push(_this.queryEncoder.encodeKey(k) + '=' + _this.queryEncoder.encodeValue(v)); });
        });
        return paramsList.join('&');
    };
    /**
     * @param {?} param
     * @return {?}
     */
    URLSearchParams.prototype.delete = function (param) { this.paramsMap.delete(param); };
    return URLSearchParams;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * HTTP request body used by both {\@link Request} and {\@link Response}
 * https://fetch.spec.whatwg.org/#body
 * @abstract
 */
var Body = (function () {
    function Body() {
    }
    /**
     * Attempts to return body as parsed `JSON` object, or raises an exception.
     * @return {?}
     */
    Body.prototype.json = function () {
        if (typeof this._body === 'string') {
            return JSON.parse(/** @type {?} */ (this._body));
        }
        if (this._body instanceof ArrayBuffer) {
            return JSON.parse(this.text());
        }
        return this._body;
    };
    /**
     * Returns the body as a string, presuming `toString()` can be called on the response body.
     *
     * When decoding an `ArrayBuffer`, the optional `encodingHint` parameter determines how the
     * bytes in the buffer will be interpreted. Valid values are:
     *
     * - `legacy` - incorrectly interpret the bytes as UTF-16 (technically, UCS-2). Only characters
     *   in the Basic Multilingual Plane are supported, surrogate pairs are not handled correctly.
     *   In addition, the endianness of the 16-bit octet pairs in the `ArrayBuffer` is not taken
     *   into consideration. This is the default behavior to avoid breaking apps, but should be
     *   considered deprecated.
     *
     * - `iso-8859` - interpret the bytes as ISO-8859 (which can be used for ASCII encoded text).
     * @param {?=} encodingHint
     * @return {?}
     */
    Body.prototype.text = function (encodingHint) {
        if (encodingHint === void 0) { encodingHint = 'legacy'; }
        if (this._body instanceof URLSearchParams) {
            return this._body.toString();
        }
        if (this._body instanceof ArrayBuffer) {
            switch (encodingHint) {
                case 'legacy':
                    return String.fromCharCode.apply(null, new Uint16Array(/** @type {?} */ (this._body)));
                case 'iso-8859':
                    return String.fromCharCode.apply(null, new Uint8Array(/** @type {?} */ (this._body)));
                default:
                    throw new Error("Invalid value for encodingHint: " + encodingHint);
            }
        }
        if (this._body == null) {
            return '';
        }
        if (typeof this._body === 'object') {
            return JSON.stringify(this._body, null, 2);
        }
        return this._body.toString();
    };
    /**
     * Return the body as an ArrayBuffer
     * @return {?}
     */
    Body.prototype.arrayBuffer = function () {
        if (this._body instanceof ArrayBuffer) {
            return (this._body);
        }
        return stringToArrayBuffer(this.text());
    };
    /**
     * Returns the request's body as a Blob, assuming that body exists.
     * @return {?}
     */
    Body.prototype.blob = function () {
        if (this._body instanceof Blob) {
            return (this._body);
        }
        if (this._body instanceof ArrayBuffer) {
            return new Blob([this._body]);
        }
        throw new Error('The request body isn\'t either a blob or an array buffer');
    };
    return Body;
}());
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Response` instances from provided values.
 *
 * Though this object isn't
 * usually instantiated by end-users, it is the primary object interacted with when it comes time to
 * add data to a view.
 *
 * ### Example
 *
 * ```
 * http.request('my-friends.txt').subscribe(response => this.friends = response.text());
 * ```
 *
 * The Response's interface is inspired by the Response constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#response-class), but is considered a static value whose body
 * can be accessed many times. There are other differences in the implementation, but this is the
 * most significant.
 *
 * \@experimental
 */
var Response = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Response, _super);
    /**
     * @param {?} responseOptions
     */
    function Response(responseOptions) {
        var _this = _super.call(this) || this;
        _this._body = responseOptions.body;
        _this.status = responseOptions.status;
        _this.ok = (_this.status >= 200 && _this.status <= 299);
        _this.statusText = responseOptions.statusText;
        _this.headers = responseOptions.headers;
        _this.type = responseOptions.type;
        _this.url = responseOptions.url;
        return _this;
    }
    /**
     * @return {?}
     */
    Response.prototype.toString = function () {
        return "Response with status: " + this.status + " " + this.statusText + " for URL: " + this.url;
    };
    return Response;
}(Body));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var _nextRequestId = 0;
var JSONP_HOME = '__ng_jsonp__';
var _jsonpConnections = null;
/**
 * @return {?}
 */
function _getJsonpConnections() {
    var /** @type {?} */ w = typeof window == 'object' ? window : {};
    if (_jsonpConnections === null) {
        _jsonpConnections = w[JSONP_HOME] = {};
    }
    return _jsonpConnections;
}
var BrowserJsonp = (function () {
    function BrowserJsonp() {
    }
    /**
     * @param {?} url
     * @return {?}
     */
    BrowserJsonp.prototype.build = function (url) {
        var /** @type {?} */ node = document.createElement('script');
        node.src = url;
        return node;
    };
    /**
     * @return {?}
     */
    BrowserJsonp.prototype.nextRequestID = function () { return "__req" + _nextRequestId++; };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.requestCallback = function (id) { return JSONP_HOME + "." + id + ".finished"; };
    /**
     * @param {?} id
     * @param {?} connection
     * @return {?}
     */
    BrowserJsonp.prototype.exposeConnection = function (id, connection) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = connection;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    BrowserJsonp.prototype.removeConnection = function (id) {
        var /** @type {?} */ connections = _getJsonpConnections();
        connections[id] = null;
    };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.send = function (node) { document.body.appendChild(/** @type {?} */ ((node))); };
    /**
     * @param {?} node
     * @return {?}
     */
    BrowserJsonp.prototype.cleanup = function (node) {
        if (node.parentNode) {
            node.parentNode.removeChild(/** @type {?} */ ((node)));
        }
    };
    return BrowserJsonp;
}());
BrowserJsonp.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BrowserJsonp.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use GET request method.';
/**
 * Abstract base class for an in-flight JSONP request.
 *
 * \@experimental
 * @abstract
 */
var JSONPConnection = (function () {
    function JSONPConnection() {
    }
    /**
     * Callback called when the JSONP request completes, to notify the application
     * of the new data.
     * @abstract
     * @param {?=} data
     * @return {?}
     */
    JSONPConnection.prototype.finished = function (data) { };
    return JSONPConnection;
}());
var JSONPConnection_ = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](JSONPConnection_, _super);
    /**
     * @param {?} req
     * @param {?} _dom
     * @param {?=} baseResponseOptions
     */
    function JSONPConnection_(req, _dom, baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._dom = _dom;
        _this.baseResponseOptions = baseResponseOptions;
        _this._finished = false;
        if (req.method !== RequestMethod.Get) {
            throw new TypeError(JSONP_ERR_WRONG_METHOD);
        }
        _this.request = req;
        _this.response = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (responseObserver) {
            _this.readyState = ReadyState.Loading;
            var id = _this._id = _dom.nextRequestID();
            _dom.exposeConnection(id, _this);
            // Workaround Dart
            // url = url.replace(/=JSONP_CALLBACK(&|$)/, `generated method`);
            var callback = _dom.requestCallback(_this._id);
            var url = req.url;
            if (url.indexOf('=JSONP_CALLBACK&') > -1) {
                url = url.replace('=JSONP_CALLBACK&', "=" + callback + "&");
            }
            else if (url.lastIndexOf('=JSONP_CALLBACK') === url.length - '=JSONP_CALLBACK'.length) {
                url = url.substring(0, url.length - '=JSONP_CALLBACK'.length) + ("=" + callback);
            }
            var script = _this._script = _dom.build(url);
            var onLoad = function (event) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                if (!_this._finished) {
                    var responseOptions_1 = new ResponseOptions({ body: JSONP_ERR_NO_CALLBACK, type: ResponseType.Error, url: url });
                    if (baseResponseOptions) {
                        responseOptions_1 = baseResponseOptions.merge(responseOptions_1);
                    }
                    responseObserver.error(new Response(responseOptions_1));
                    return;
                }
                var responseOptions = new ResponseOptions({ body: _this._responseData, url: url });
                if (_this.baseResponseOptions) {
                    responseOptions = _this.baseResponseOptions.merge(responseOptions);
                }
                responseObserver.next(new Response(responseOptions));
                responseObserver.complete();
            };
            var onError = function (error) {
                if (_this.readyState === ReadyState.Cancelled)
                    return;
                _this.readyState = ReadyState.Done;
                _dom.cleanup(script);
                var responseOptions = new ResponseOptions({ body: error.message, type: ResponseType.Error });
                if (baseResponseOptions) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            script.addEventListener('load', onLoad);
            script.addEventListener('error', onError);
            _dom.send(script);
            return function () {
                _this.readyState = ReadyState.Cancelled;
                script.removeEventListener('load', onLoad);
                script.removeEventListener('error', onError);
                _this._dom.cleanup(script);
            };
        });
        return _this;
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    JSONPConnection_.prototype.finished = function (data) {
        // Don't leak connections
        this._finished = true;
        this._dom.removeConnection(this._id);
        if (this.readyState === ReadyState.Cancelled)
            return;
        this._responseData = data;
    };
    return JSONPConnection_;
}(JSONPConnection));
/**
 * A {\@link ConnectionBackend} that uses the JSONP strategy of making requests.
 *
 * \@experimental
 * @abstract
 */
var JSONPBackend = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](JSONPBackend, _super);
    function JSONPBackend() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return JSONPBackend;
}(ConnectionBackend));
var JSONPBackend_ = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](JSONPBackend_, _super);
    /**
     * @param {?} _browserJSONP
     * @param {?} _baseResponseOptions
     */
    function JSONPBackend_(_browserJSONP, _baseResponseOptions) {
        var _this = _super.call(this) || this;
        _this._browserJSONP = _browserJSONP;
        _this._baseResponseOptions = _baseResponseOptions;
        return _this;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    JSONPBackend_.prototype.createConnection = function (request) {
        return new JSONPConnection_(request, this._browserJSONP, this._baseResponseOptions);
    };
    return JSONPBackend_;
}(JSONPBackend));
JSONPBackend_.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
JSONPBackend_.ctorParameters = function () { return [
    { type: BrowserJsonp, },
    { type: ResponseOptions, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Creates connections using `XMLHttpRequest`. Given a fully-qualified
 * request, an `XHRConnection` will immediately create an `XMLHttpRequest` object and send the
 * request.
 *
 * This class would typically not be created or interacted with directly inside applications, though
 * the {\@link MockConnection} may be interacted with in tests.
 *
 * \@experimental
 */
var XHRConnection = (function () {
    /**
     * @param {?} req
     * @param {?} browserXHR
     * @param {?=} baseResponseOptions
     */
    function XHRConnection(req, browserXHR, baseResponseOptions) {
        var _this = this;
        this.request = req;
        this.response = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (responseObserver) {
            var _xhr = browserXHR.build();
            _xhr.open(RequestMethod[req.method].toUpperCase(), req.url);
            if (req.withCredentials != null) {
                _xhr.withCredentials = req.withCredentials;
            }
            // load event handler
            var onLoad = function () {
                // normalize IE9 bug (http://bugs.jquery.com/ticket/1450)
                var status = _xhr.status === 1223 ? 204 : _xhr.status;
                var body = null;
                // HTTP 204 means no content
                if (status !== 204) {
                    // responseText is the old-school way of retrieving response (supported by IE8 & 9)
                    // response/responseType properties were introduced in ResourceLoader Level2 spec
                    // (supported by IE10)
                    body = (typeof _xhr.response === 'undefined') ? _xhr.responseText : _xhr.response;
                    // Implicitly strip a potential XSSI prefix.
                    if (typeof body === 'string') {
                        body = body.replace(XSSI_PREFIX, '');
                    }
                }
                // fix status code when it is 0 (0 status is undocumented).
                // Occurs when accessing file resources or on Android 4.1 stock browser
                // while retrieving files from application cache.
                if (status === 0) {
                    status = body ? 200 : 0;
                }
                var headers = Headers.fromResponseHeaderString(_xhr.getAllResponseHeaders());
                // IE 9 does not provide the way to get URL of response
                var url = getResponseURL(_xhr) || req.url;
                var statusText = _xhr.statusText || 'OK';
                var responseOptions = new ResponseOptions({ body: body, status: status, headers: headers, statusText: statusText, url: url });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                var response = new Response(responseOptions);
                response.ok = isSuccess(status);
                if (response.ok) {
                    responseObserver.next(response);
                    // TODO(gdi2290): defer complete if array buffer until done
                    responseObserver.complete();
                    return;
                }
                responseObserver.error(response);
            };
            // error event handler
            var onError = function (err) {
                var responseOptions = new ResponseOptions({
                    body: err,
                    type: ResponseType.Error,
                    status: _xhr.status,
                    statusText: _xhr.statusText,
                });
                if (baseResponseOptions != null) {
                    responseOptions = baseResponseOptions.merge(responseOptions);
                }
                responseObserver.error(new Response(responseOptions));
            };
            _this.setDetectedContentType(req, _xhr);
            if (req.headers == null) {
                req.headers = new Headers();
            }
            if (!req.headers.has('Accept')) {
                req.headers.append('Accept', 'application/json, text/plain, */*');
            }
            req.headers.forEach(function (values, name) { return _xhr.setRequestHeader(name, values.join(',')); });
            // Select the correct buffer type to store the response
            if (req.responseType != null && _xhr.responseType != null) {
                switch (req.responseType) {
                    case ResponseContentType.ArrayBuffer:
                        _xhr.responseType = 'arraybuffer';
                        break;
                    case ResponseContentType.Json:
                        _xhr.responseType = 'json';
                        break;
                    case ResponseContentType.Text:
                        _xhr.responseType = 'text';
                        break;
                    case ResponseContentType.Blob:
                        _xhr.responseType = 'blob';
                        break;
                    default:
                        throw new Error('The selected responseType is not supported');
                }
            }
            _xhr.addEventListener('load', onLoad);
            _xhr.addEventListener('error', onError);
            _xhr.send(_this.request.getBody());
            return function () {
                _xhr.removeEventListener('load', onLoad);
                _xhr.removeEventListener('error', onError);
                _xhr.abort();
            };
        });
    }
    /**
     * @param {?} req
     * @param {?} _xhr
     * @return {?}
     */
    XHRConnection.prototype.setDetectedContentType = function (req /** TODO Request */, _xhr /** XMLHttpRequest */) {
        // Skip if a custom Content-Type header is provided
        if (req.headers != null && req.headers.get('Content-Type') != null) {
            return;
        }
        // Set the detected content type
        switch (req.contentType) {
            case ContentType.NONE:
                break;
            case ContentType.JSON:
                _xhr.setRequestHeader('content-type', 'application/json');
                break;
            case ContentType.FORM:
                _xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                break;
            case ContentType.TEXT:
                _xhr.setRequestHeader('content-type', 'text/plain');
                break;
            case ContentType.BLOB:
                var /** @type {?} */ blob = req.blob();
                if (blob.type) {
                    _xhr.setRequestHeader('content-type', blob.type);
                }
                break;
        }
    };
    return XHRConnection;
}());
/**
 * `XSRFConfiguration` sets up Cross Site Request Forgery (XSRF) protection for the application
 * using a cookie. See https://www.owasp.org/index.php/Cross-Site_Request_Forgery_(CSRF)
 * for more information on XSRF.
 *
 * Applications can configure custom cookie and header names by binding an instance of this class
 * with different `cookieName` and `headerName` values. See the main HTTP documentation for more
 * details.
 *
 * \@experimental
 */
var CookieXSRFStrategy = (function () {
    /**
     * @param {?=} _cookieName
     * @param {?=} _headerName
     */
    function CookieXSRFStrategy(_cookieName, _headerName) {
        if (_cookieName === void 0) { _cookieName = 'XSRF-TOKEN'; }
        if (_headerName === void 0) { _headerName = 'X-XSRF-TOKEN'; }
        this._cookieName = _cookieName;
        this._headerName = _headerName;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    CookieXSRFStrategy.prototype.configureRequest = function (req) {
        var /** @type {?} */ xsrfToken = Object(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["ɵgetDOM"])().getCookie(this._cookieName);
        if (xsrfToken) {
            req.headers.set(this._headerName, xsrfToken);
        }
    };
    return CookieXSRFStrategy;
}());
/**
 * Creates {\@link XHRConnection} instances.
 *
 * This class would typically not be used by end users, but could be
 * overridden if a different backend implementation should be used,
 * such as in a node backend.
 *
 * ### Example
 *
 * ```
 * import {Http, MyNodeBackend, HTTP_PROVIDERS, BaseRequestOptions} from '\@angular/http';
 * \@Component({
 *   viewProviders: [
 *     HTTP_PROVIDERS,
 *     {provide: Http, useFactory: (backend, options) => {
 *       return new Http(backend, options);
 *     }, deps: [MyNodeBackend, BaseRequestOptions]}]
 * })
 * class MyComponent {
 *   constructor(http:Http) {
 *     http.request('people.json').subscribe(res => this.people = res.json());
 *   }
 * }
 * ```
 * \@experimental
 */
var XHRBackend = (function () {
    /**
     * @param {?} _browserXHR
     * @param {?} _baseResponseOptions
     * @param {?} _xsrfStrategy
     */
    function XHRBackend(_browserXHR, _baseResponseOptions, _xsrfStrategy) {
        this._browserXHR = _browserXHR;
        this._baseResponseOptions = _baseResponseOptions;
        this._xsrfStrategy = _xsrfStrategy;
    }
    /**
     * @param {?} request
     * @return {?}
     */
    XHRBackend.prototype.createConnection = function (request) {
        this._xsrfStrategy.configureRequest(request);
        return new XHRConnection(request, this._browserXHR, this._baseResponseOptions);
    };
    return XHRBackend;
}());
XHRBackend.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
XHRBackend.ctorParameters = function () { return [
    { type: BrowserXhr, },
    { type: ResponseOptions, },
    { type: XSRFStrategy, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates a request options object to be optionally provided when instantiating a
 * {\@link Request}.
 *
 * This class is based on the `RequestInit` description in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#requestinit).
 *
 * All values are null by default. Typical defaults can be found in the {\@link BaseRequestOptions}
 * class, which sub-classes `RequestOptions`.
 *
 * ```typescript
 * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new RequestOptions({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * });
 * const req = new Request(options);
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // https://google.com
 * ```
 *
 * \@experimental
 */
var RequestOptions = (function () {
    /**
     * @param {?=} opts
     */
    function RequestOptions(opts) {
        if (opts === void 0) { opts = {}; }
        var method = opts.method, headers = opts.headers, body = opts.body, url = opts.url, search = opts.search, params = opts.params, withCredentials = opts.withCredentials, responseType = opts.responseType;
        this.method = method != null ? normalizeMethodName(method) : null;
        this.headers = headers != null ? headers : null;
        this.body = body != null ? body : null;
        this.url = url != null ? url : null;
        this.params = this._mergeSearchParams(params || search);
        this.withCredentials = withCredentials != null ? withCredentials : null;
        this.responseType = responseType != null ? responseType : null;
    }
    Object.defineProperty(RequestOptions.prototype, "search", {
        /**
         * @deprecated from 4.0.0. Use params instead.
         * @return {?}
         */
        get: function () { return this.params; },
        /**
         * @deprecated from 4.0.0. Use params instead.
         * @param {?} params
         * @return {?}
         */
        set: function (params) { this.params = params; },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a copy of the `RequestOptions` instance, using the optional input as values to override
     * existing values. This method will not change the values of the instance on which it is being
     * called.
     *
     * Note that `headers` and `search` will override existing values completely if present in
     * the `options` object. If these values should be merged, it should be done prior to calling
     * `merge` on the `RequestOptions` instance.
     *
     * ```typescript
     * import {RequestOptions, Request, RequestMethod} from '\@angular/http';
     *
     * const options = new RequestOptions({
     *   method: RequestMethod.Post
     * });
     * const req = new Request(options.merge({
     *   url: 'https://google.com'
     * }));
     * console.log('req.method:', RequestMethod[req.method]); // Post
     * console.log('options.url:', options.url); // null
     * console.log('req.url:', req.url); // https://google.com
     * ```
     * @param {?=} options
     * @return {?}
     */
    RequestOptions.prototype.merge = function (options) {
        return new RequestOptions({
            method: options && options.method != null ? options.method : this.method,
            headers: options && options.headers != null ? options.headers : new Headers(this.headers),
            body: options && options.body != null ? options.body : this.body,
            url: options && options.url != null ? options.url : this.url,
            params: options && this._mergeSearchParams(options.params || options.search),
            withCredentials: options && options.withCredentials != null ? options.withCredentials :
                this.withCredentials,
            responseType: options && options.responseType != null ? options.responseType :
                this.responseType
        });
    };
    /**
     * @param {?=} params
     * @return {?}
     */
    RequestOptions.prototype._mergeSearchParams = function (params) {
        if (!params)
            return this.params;
        if (params instanceof URLSearchParams) {
            return params.clone();
        }
        if (typeof params === 'string') {
            return new URLSearchParams(params);
        }
        return this._parseParams(params);
    };
    /**
     * @param {?=} objParams
     * @return {?}
     */
    RequestOptions.prototype._parseParams = function (objParams) {
        var _this = this;
        if (objParams === void 0) { objParams = {}; }
        var /** @type {?} */ params = new URLSearchParams();
        Object.keys(objParams).forEach(function (key) {
            var /** @type {?} */ value = objParams[key];
            if (Array.isArray(value)) {
                value.forEach(function (item) { return _this._appendParam(key, item, params); });
            }
            else {
                _this._appendParam(key, value, params);
            }
        });
        return params;
    };
    /**
     * @param {?} key
     * @param {?} value
     * @param {?} params
     * @return {?}
     */
    RequestOptions.prototype._appendParam = function (key, value, params) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        params.append(key, value);
    };
    return RequestOptions;
}());
/**
 * Subclass of {\@link RequestOptions}, with default values.
 *
 * Default values:
 *  * method: {\@link RequestMethod RequestMethod.Get}
 *  * headers: empty {\@link Headers} object
 *
 * This class could be extended and bound to the {\@link RequestOptions} class
 * when configuring an {\@link Injector}, in order to override the default options
 * used by {\@link Http} to create and send {\@link Request Requests}.
 *
 * ```typescript
 * import {BaseRequestOptions, RequestOptions} from '\@angular/http';
 *
 * class MyOptions extends BaseRequestOptions {
 *   search: string = 'coreTeam=true';
 * }
 *
 * {provide: RequestOptions, useClass: MyOptions};
 * ```
 *
 * The options could also be extended when manually creating a {\@link Request}
 * object.
 *
 * ```
 * import {BaseRequestOptions, Request, RequestMethod} from '\@angular/http';
 *
 * const options = new BaseRequestOptions();
 * const req = new Request(options.merge({
 *   method: RequestMethod.Post,
 *   url: 'https://google.com'
 * }));
 * console.log('req.method:', RequestMethod[req.method]); // Post
 * console.log('options.url:', options.url); // null
 * console.log('req.url:', req.url); // https://google.com
 * ```
 *
 * \@experimental
 */
var BaseRequestOptions = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](BaseRequestOptions, _super);
    function BaseRequestOptions() {
        return _super.call(this, { method: RequestMethod.Get, headers: new Headers() }) || this;
    }
    return BaseRequestOptions;
}(RequestOptions));
BaseRequestOptions.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
BaseRequestOptions.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Creates `Request` instances from provided values.
 *
 * The Request's interface is inspired by the Request constructor defined in the [Fetch
 * Spec](https://fetch.spec.whatwg.org/#request-class),
 * but is considered a static value whose body can be accessed many times. There are other
 * differences in the implementation, but this is the most significant.
 *
 * `Request` instances are typically created by higher-level classes, like {\@link Http} and
 * {\@link Jsonp}, but it may occasionally be useful to explicitly create `Request` instances.
 * One such example is when creating services that wrap higher-level services, like {\@link Http},
 * where it may be useful to generate a `Request` with arbitrary headers and search params.
 *
 * ```typescript
 * import {Injectable, Injector} from '\@angular/core';
 * import {HTTP_PROVIDERS, Http, Request, RequestMethod} from '\@angular/http';
 *
 * \@Injectable()
 * class AutoAuthenticator {
 *   constructor(public http:Http) {}
 *   request(url:string) {
 *     return this.http.request(new Request({
 *       method: RequestMethod.Get,
 *       url: url,
 *       search: 'password=123'
 *     }));
 *   }
 * }
 *
 * var injector = Injector.resolveAndCreate([HTTP_PROVIDERS, AutoAuthenticator]);
 * var authenticator = injector.get(AutoAuthenticator);
 * authenticator.request('people.json').subscribe(res => {
 *   //URL should have included '?password=123'
 *   console.log('people', res.json());
 * });
 * ```
 *
 * \@experimental
 */
var Request = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Request, _super);
    /**
     * @param {?} requestOptions
     */
    function Request(requestOptions) {
        var _this = _super.call(this) || this;
        // TODO: assert that url is present
        var url = requestOptions.url;
        _this.url = requestOptions.url;
        var paramsArg = requestOptions.params || requestOptions.search;
        if (paramsArg) {
            var params = void 0;
            if (typeof paramsArg === 'object' && !(paramsArg instanceof URLSearchParams)) {
                params = urlEncodeParams(paramsArg).toString();
            }
            else {
                params = paramsArg.toString();
            }
            if (params.length > 0) {
                var prefix = '?';
                if (_this.url.indexOf('?') != -1) {
                    prefix = (_this.url[_this.url.length - 1] == '&') ? '' : '&';
                }
                // TODO: just delete search-query-looking string in url?
                _this.url = url + prefix + params;
            }
        }
        _this._body = requestOptions.body;
        _this.method = normalizeMethodName(requestOptions.method);
        // TODO(jeffbcross): implement behavior
        // Defaults to 'omit', consistent with browser
        _this.headers = new Headers(requestOptions.headers);
        _this.contentType = _this.detectContentType();
        _this.withCredentials = requestOptions.withCredentials;
        _this.responseType = requestOptions.responseType;
        return _this;
    }
    /**
     * Returns the content type enum based on header options.
     * @return {?}
     */
    Request.prototype.detectContentType = function () {
        switch (this.headers.get('content-type')) {
            case 'application/json':
                return ContentType.JSON;
            case 'application/x-www-form-urlencoded':
                return ContentType.FORM;
            case 'multipart/form-data':
                return ContentType.FORM_DATA;
            case 'text/plain':
            case 'text/html':
                return ContentType.TEXT;
            case 'application/octet-stream':
                return this._body instanceof ArrayBuffer$1 ? ContentType.ARRAY_BUFFER : ContentType.BLOB;
            default:
                return this.detectContentTypeFromBody();
        }
    };
    /**
     * Returns the content type of request's body based on its type.
     * @return {?}
     */
    Request.prototype.detectContentTypeFromBody = function () {
        if (this._body == null) {
            return ContentType.NONE;
        }
        else if (this._body instanceof URLSearchParams) {
            return ContentType.FORM;
        }
        else if (this._body instanceof FormData) {
            return ContentType.FORM_DATA;
        }
        else if (this._body instanceof Blob$1) {
            return ContentType.BLOB;
        }
        else if (this._body instanceof ArrayBuffer$1) {
            return ContentType.ARRAY_BUFFER;
        }
        else if (this._body && typeof this._body === 'object') {
            return ContentType.JSON;
        }
        else {
            return ContentType.TEXT;
        }
    };
    /**
     * Returns the request's body according to its type. If body is undefined, return
     * null.
     * @return {?}
     */
    Request.prototype.getBody = function () {
        switch (this.contentType) {
            case ContentType.JSON:
                return this.text();
            case ContentType.FORM:
                return this.text();
            case ContentType.FORM_DATA:
                return this._body;
            case ContentType.TEXT:
                return this.text();
            case ContentType.BLOB:
                return this.blob();
            case ContentType.ARRAY_BUFFER:
                return this.arrayBuffer();
            default:
                return null;
        }
    };
    return Request;
}(Body));
/**
 * @param {?} params
 * @return {?}
 */
function urlEncodeParams(params) {
    var /** @type {?} */ searchParams = new URLSearchParams();
    Object.keys(params).forEach(function (key) {
        var /** @type {?} */ value = params[key];
        if (value && Array.isArray(value)) {
            value.forEach(function (element) { return searchParams.append(key, element.toString()); });
        }
        else {
            searchParams.append(key, value.toString());
        }
    });
    return searchParams;
}
var noop = function () { };
var w = typeof window == 'object' ? window : noop;
var FormData = ((w) /** TODO #9100 */)['FormData'] || noop;
var Blob$1 = ((w) /** TODO #9100 */)['Blob'] || noop;
var ArrayBuffer$1 = ((w) /** TODO #9100 */)['ArrayBuffer'] || noop;
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @param {?} backend
 * @param {?} request
 * @return {?}
 */
function httpRequest(backend, request) {
    return backend.createConnection(request).response;
}
/**
 * @param {?} defaultOpts
 * @param {?} providedOpts
 * @param {?} method
 * @param {?} url
 * @return {?}
 */
function mergeOptions(defaultOpts, providedOpts, method, url) {
    var /** @type {?} */ newOptions = defaultOpts;
    if (providedOpts) {
        // Hack so Dart can used named parameters
        return (newOptions.merge(new RequestOptions({
            method: providedOpts.method || method,
            url: providedOpts.url || url,
            search: providedOpts.search,
            params: providedOpts.params,
            headers: providedOpts.headers,
            body: providedOpts.body,
            withCredentials: providedOpts.withCredentials,
            responseType: providedOpts.responseType
        })));
    }
    return (newOptions.merge(new RequestOptions({ method: method, url: url })));
}
/**
 * Performs http requests using `XMLHttpRequest` as the default backend.
 *
 * `Http` is available as an injectable class, with methods to perform http requests. Calling
 * `request` returns an `Observable` which will emit a single {\@link Response} when a
 * response is received.
 *
 * ### Example
 *
 * ```typescript
 * import {Http, HTTP_PROVIDERS} from '\@angular/http';
 * import 'rxjs/add/operator/map'
 * \@Component({
 *   selector: 'http-app',
 *   viewProviders: [HTTP_PROVIDERS],
 *   templateUrl: 'people.html'
 * })
 * class PeopleComponent {
 *   constructor(http: Http) {
 *     http.get('people.json')
 *       // Call map on the response observable to get the parsed people object
 *       .map(res => res.json())
 *       // Subscribe to the observable to get the parsed people object and attach it to the
 *       // component
 *       .subscribe(people => this.people = people);
 *   }
 * }
 * ```
 *
 *
 * ### Example
 *
 * ```
 * http.get('people.json').subscribe((res:Response) => this.people = res.json());
 * ```
 *
 * The default construct used to perform requests, `XMLHttpRequest`, is abstracted as a "Backend" (
 * {\@link XHRBackend} in this case), which could be mocked with dependency injection by replacing
 * the {\@link XHRBackend} provider, as in the following example:
 *
 * ### Example
 *
 * ```typescript
 * import {BaseRequestOptions, Http} from '\@angular/http';
 * import {MockBackend} from '\@angular/http/testing';
 * var injector = Injector.resolveAndCreate([
 *   BaseRequestOptions,
 *   MockBackend,
 *   {provide: Http, useFactory:
 *       function(backend, defaultOptions) {
 *         return new Http(backend, defaultOptions);
 *       },
 *       deps: [MockBackend, BaseRequestOptions]}
 * ]);
 * var http = injector.get(Http);
 * http.get('request-from-mock-backend.json').subscribe((res:Response) => doSomething(res));
 * ```
 *
 * \@experimental
 */
var Http = (function () {
    /**
     * @param {?} _backend
     * @param {?} _defaultOptions
     */
    function Http(_backend, _defaultOptions) {
        this._backend = _backend;
        this._defaultOptions = _defaultOptions;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.request = function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            responseObservable = httpRequest(this._backend, new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url))));
        }
        else if (url instanceof Request) {
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    /**
     * Performs a request with `get` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.get = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, url)));
    };
    /**
     * Performs a request with `post` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.post = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Post, url)));
    };
    /**
     * Performs a request with `put` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.put = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Put, url)));
    };
    /**
     * Performs a request with `delete` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.delete = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Delete, url)));
    };
    /**
     * Performs a request with `patch` http method.
     * @param {?} url
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.patch = function (url, body, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions.merge(new RequestOptions({ body: body })), options, RequestMethod.Patch, url)));
    };
    /**
     * Performs a request with `head` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.head = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Head, url)));
    };
    /**
     * Performs a request with `options` http method.
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Http.prototype.options = function (url, options) {
        return this.request(new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Options, url)));
    };
    return Http;
}());
Http.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
Http.ctorParameters = function () { return [
    { type: ConnectionBackend, },
    { type: RequestOptions, },
]; };
/**
 * \@experimental
 */
var Jsonp = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](Jsonp, _super);
    /**
     * @param {?} backend
     * @param {?} defaultOptions
     */
    function Jsonp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    /**
     * Performs any type of http request. First argument is required, and can either be a url or
     * a {\@link Request} instance. If the first argument is a url, an optional {\@link RequestOptions}
     * object can be provided as the 2nd argument. The options object will be merged with the values
     * of {\@link BaseRequestOptions} before performing the request.
     *
     * \@security Regular XHR is the safest alternative to JSONP for most applications, and is
     * supported by all current browsers. Because JSONP creates a `<script>` element with
     * contents retrieved from a remote source, attacker-controlled data introduced by an untrusted
     * source could expose your application to XSS risks. Data exposed by JSONP may also be
     * readable by malicious third-party websites. In addition, JSONP introduces potential risk for
     * future security issues (e.g. content sniffing).  For more detail, see the
     * [Security Guide](http://g.co/ng/security).
     * @param {?} url
     * @param {?=} options
     * @return {?}
     */
    Jsonp.prototype.request = function (url, options) {
        var /** @type {?} */ responseObservable;
        if (typeof url === 'string') {
            url =
                new Request(mergeOptions(this._defaultOptions, options, RequestMethod.Get, /** @type {?} */ (url)));
        }
        if (url instanceof Request) {
            if (url.method !== RequestMethod.Get) {
                throw new Error('JSONP requests must use GET request method.');
            }
            responseObservable = httpRequest(this._backend, url);
        }
        else {
            throw new Error('First argument must be a url string or Request instance.');
        }
        return responseObservable;
    };
    return Jsonp;
}(Http));
Jsonp.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"] },
];
/**
 * @nocollapse
 */
Jsonp.ctorParameters = function () { return [
    { type: ConnectionBackend, },
    { type: RequestOptions, },
]; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * The http module provides services to perform http requests. To get started, see the {@link Http}
 * class.
 */
/**
 * @return {?}
 */
function _createDefaultCookieXSRFStrategy() {
    return new CookieXSRFStrategy();
}
/**
 * @param {?} xhrBackend
 * @param {?} requestOptions
 * @return {?}
 */
function httpFactory(xhrBackend, requestOptions) {
    return new Http(xhrBackend, requestOptions);
}
/**
 * @param {?} jsonpBackend
 * @param {?} requestOptions
 * @return {?}
 */
function jsonpFactory(jsonpBackend, requestOptions) {
    return new Jsonp(jsonpBackend, requestOptions);
}
/**
 * The module that includes http's providers
 *
 * \@experimental
 */
var HttpModule = (function () {
    function HttpModule() {
    }
    return HttpModule;
}());
HttpModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                providers: [
                    // TODO(pascal): use factory type annotations once supported in DI
                    // issue: https://github.com/angular/angular/issues/3183
                    { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions] },
                    BrowserXhr,
                    { provide: RequestOptions, useClass: BaseRequestOptions },
                    { provide: ResponseOptions, useClass: BaseResponseOptions },
                    XHRBackend,
                    { provide: XSRFStrategy, useFactory: _createDefaultCookieXSRFStrategy },
                ],
            },] },
];
/**
 * @nocollapse
 */
HttpModule.ctorParameters = function () { return []; };
/**
 * The module that includes jsonp's providers
 *
 * \@experimental
 */
var JsonpModule = (function () {
    function JsonpModule() {
    }
    return JsonpModule;
}());
JsonpModule.decorators = [
    { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                providers: [
                    // TODO(pascal): use factory type annotations once supported in DI
                    // issue: https://github.com/angular/angular/issues/3183
                    { provide: Jsonp, useFactory: jsonpFactory, deps: [JSONPBackend, RequestOptions] },
                    BrowserJsonp,
                    { provide: RequestOptions, useClass: BaseRequestOptions },
                    { provide: ResponseOptions, useClass: BaseResponseOptions },
                    { provide: JSONPBackend, useClass: JSONPBackend_ },
                ],
            },] },
];
/**
 * @nocollapse
 */
JsonpModule.ctorParameters = function () { return []; };
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the common package.
 */
/**
 * \@stable
 */
var VERSION = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["Version"]('4.4.6');
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @module
 * @description
 * Entry point for all public APIs of the http package.
 */
// This file only reexports content of the `src` folder. Keep it that way.
/**
 * Generated bundle index. Do not edit.
 */

//# sourceMappingURL=http.es5.js.map


/***/ }),

/***/ 878:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AuthInterceptor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _http = __webpack_require__(54);

var _auth = __webpack_require__(417);

var _Observable = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthInterceptor = exports.AuthInterceptor = (_dec = (0, _core.Injectable)(), _dec(_class = function () {
    function AuthInterceptor(injector) {
        _classCallCheck(this, AuthInterceptor);

        this._injector = injector;

        //this._httpClient = this._injector.get(HttpClient);

        this._authService = null;
    }

    _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
            var _this = this;

            this._authService = this._injector.get(_auth.AuthService);

            var token = this._authService.GetToken();

            request = request.clone({

                setHeaders: { "Content-Type": "application/json" }

            });

            if (token) {

                request = request.clone({

                    setHeaders: { Authorization: "Bearer " + token }

                });

                return next.handle(request).catch(function (error) {
                    return _this.errorHandler(error, request);
                });
            };

            return next.handle(request);
        }
    }, {
        key: "errorHandler",
        value: function errorHandler(error, currentRequest) {

            if (error instanceof _http.HttpErrorResponse) {

                if (error.status === 401) {

                    var httpClient = this._injector.get(_http.HttpClient);

                    var refreshToken = this._authService.GetRefreshToken();

                    debugger;

                    this._authService.RefreshToken(refreshToken).subscribe(function (security) {

                        currentRequest = currentRequest.clone({

                            setHeaders: {

                                Authorization: "Bearer " + security.token

                            }

                        });

                        httpClient.request(currentRequest);
                    });
                };
            };

            return _Observable.Observable.throw(error);
        }
    }]);

    return AuthInterceptor;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_core.Injector], AuthInterceptor);
;

/***/ }),

/***/ 879:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"signup-background\">\r\n\r\n    <div class=\"signup-sidebar\">\r\n        \r\n        <h1>Daily Workbook</h1>\r\n\r\n        <h5>Create your personal daily workbook account.</h5>\r\n\r\n        <div class=\"signup-form\">\r\n\r\n            <div class=\"signup-form__control\">\r\n\r\n                <label for=\"user-email\">Email Address</label>\r\n\r\n                <div class=\"control\">\r\n\r\n                    <input id=\"user-email\"\r\n                           type=\"text\"\r\n                           placeholder=\"Enter your email\"\r\n                           [(ngModel)]=\"user.email\"\r\n                           (keyup.enter)=\"OnSubmit();\" />\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"signup-form__control\">\r\n\r\n                <label for=\"user-password\">Password</label>\r\n\r\n                <div class=\"control\">\r\n\r\n                    <input id=\"user-password\" \r\n                           type=\"password\"\r\n                           placeholder=\"Enter your password\"\r\n                           [(ngModel)]=\"user.password\"\r\n                           (keyup.enter)=\"OnSubmit();\" />\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"signup-form__button\">\r\n\r\n                <input type=\"button\" \r\n                       value=\"Sign in\"\r\n                       (click)=\"OnSubmit();\" />\r\n\r\n            </div>\r\n\r\n        </div>\r\n        \r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 880:
/***/ (function(module, exports) {

module.exports = "\r\n.signup-background {\r\n\r\n    /*background: url(\"/src/content/images/new-york-city-buildings-sunrise-morning-hd-wallpaper.jpg\") no-repeat center center fixed;*/\r\n    \r\n    background-size: cover;\r\n\r\n    position: fixed;\r\n\r\n    top: 0;\r\n\r\n    left: 0;\r\n    \r\n    right: 0;\r\n\r\n    bottom: 0;\r\n\r\n}\r\n\r\n.signup-sidebar {\r\n\r\n    width: 500px;\r\n\r\n    position: fixed;\r\n\r\n    top: 0;\r\n\r\n    right: 0;\r\n\r\n    bottom: 0;\r\n\r\n    background-color: #F9FAFB;\r\n\r\n    z-index: 20;\r\n\r\n    padding: 80px;\r\n\r\n    font-family: \"Roboto\";\r\n\r\n}\r\n\r\n.signup-sidebar h1 {\r\n\r\n    font-size: 24px;\r\n\r\n    font-weight: 700;\r\n\r\n    margin: 30px 0;\r\n\r\n    text-transform: lowercase;\r\n\r\n}\r\n\r\n.signup-sidebar h5 {\r\n\r\n    font-size: 14px;\r\n\r\n    font-weight: 300;\r\n\r\n    margin: 50px 0 10px 0;\r\n\r\n}\r\n\r\n.signup-form {\r\n\r\n\r\n}\r\n\r\n.signup-form__control {\r\n\r\n    background-color: #fff;\r\n\r\n    border: 1px solid #e6ecf5;\r\n    \r\n    color: #515365;\r\n\r\n    position: relative;\r\n\r\n    border-radius: 2px;\r\n\r\n    padding-top: 7px;\r\n\r\n    padding-left: 12px;\r\n\r\n    padding-right: 12px;\r\n\r\n    padding-bottom: 4px;\r\n\r\n    overflow: hidden;\r\n\r\n    width: 100%;\r\n\r\n    font-size: 12px;\r\n\r\n    margin-bottom: 10px; \r\n\r\n}\r\n\r\n.signup-form__control label {\r\n\r\n    text-transform: uppercase;\r\n\r\n}\r\n\r\n.signup-form__control input[type=\"text\"],\r\n.signup-form__control input[type=\"password\"] {\r\n    \r\n    border: none;\r\n\r\n    padding: 15px 0 5px 0;\r\n\r\n    background: none;\r\n\r\n    width: 100%;\r\n\r\n    outline: none;\r\n\r\n    font-family: \"Roboto\";\r\n\r\n    font-size: 14px;\r\n\r\n    font-weight: 700;\r\n\r\n    color: #000000;\r\n\r\n}\r\n.signup-form__control input[type=\"text\"]::-webkit-input-placeholder,\r\n.signup-form__control input[type=\"password\"]::-webkit-input-placeholder {\r\n\r\n    color: #d2d6db;\r\n\r\n    font-weight: 300;\r\n\r\n}\r\n.signup-form__button {\r\n\r\n    margin-top: 30px;\r\n\r\n}\r\n\r\n.signup-form__button input[type=\"button\"] {\r\n\r\n    background-color: #2979fb;\r\n\r\n    font-family: \"Roboto\";\r\n    \r\n    font-size: 14px;\r\n\r\n    color: #ffffff;\r\n\r\n    border: none;\r\n\r\n    cursor: pointer;\r\n\r\n    padding: 10px 35px;\r\n\r\n    outline: none;\r\n\r\n}\r\n\r\n.signup-form__button input[type=\"button\"]:hover {\r\n\r\n    background-color: #4189fc;\r\n\r\n}\r\n\r\n.signup-form__button input[type=\"button\"]:active {\r\n    \r\n    background-color: #146cf8;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"signup-background\">\r\n\r\n    <div class=\"signup-sidebar\">\r\n        \r\n        <h1>Daily Workbook</h1>\r\n\r\n        <h5>Create your personal daily workbook account.</h5>\r\n\r\n        <div class=\"signup-form\">\r\n\r\n            <div class=\"signup-form__control\">\r\n\r\n                <label for=\"user-name\">First Name</label>\r\n\r\n                <div class=\"control\">\r\n\r\n                    <input id=\"user-name\"\r\n                           type=\"text\"\r\n                           placeholder=\"Enter your name\"\r\n                           [(ngModel)]=\"user.name\" />\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"signup-form__control\">\r\n\r\n                <label for=\"user-email\">Email Address</label>\r\n\r\n                <div class=\"control\">\r\n\r\n                    <input id=\"user-email\"\r\n                           type=\"text\"\r\n                           placeholder=\"Enter your email\"\r\n                           [(ngModel)]=\"user.email\" />\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"signup-form__control\">\r\n\r\n                <label for=\"user-password\">Password</label>\r\n\r\n                <div class=\"control\">\r\n\r\n                    <input id=\"user-password\" \r\n                           type=\"password\"\r\n                           placeholder=\"Enter your password\"\r\n                           [(ngModel)]=\"user.password\" />\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"signup-form__button\">\r\n\r\n                <input type=\"button\" \r\n                       value=\"Sign up\"\r\n                       (click)=\"OnSubmit();\" />\r\n\r\n            </div>\r\n\r\n        </div>\r\n        \r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ 882:
/***/ (function(module, exports) {

module.exports = "\r\n.signup-background {\r\n\r\n    /*background: url(\"/src/content/images/new-york-city-buildings-sunrise-morning-hd-wallpaper.jpg\") no-repeat center center fixed;*/\r\n    \r\n    background-size: cover;\r\n\r\n    position: fixed;\r\n\r\n    top: 0;\r\n\r\n    left: 0;\r\n    \r\n    right: 0;\r\n\r\n    bottom: 0;\r\n\r\n}\r\n\r\n.signup-sidebar {\r\n\r\n    width: 500px;\r\n\r\n    position: fixed;\r\n\r\n    top: 0;\r\n\r\n    right: 0;\r\n\r\n    bottom: 0;\r\n\r\n    background-color: #F9FAFB;\r\n\r\n    z-index: 20;\r\n\r\n    padding: 80px;\r\n\r\n    font-family: \"Roboto\";\r\n\r\n}\r\n\r\n.signup-sidebar h1 {\r\n\r\n    font-size: 24px;\r\n\r\n    font-weight: 700;\r\n\r\n    margin: 30px 0;\r\n\r\n    text-transform: lowercase;\r\n\r\n}\r\n\r\n.signup-sidebar h5 {\r\n\r\n    font-size: 14px;\r\n\r\n    font-weight: 300;\r\n\r\n    margin: 50px 0 10px 0;\r\n\r\n}\r\n\r\n.signup-form {\r\n\r\n\r\n}\r\n\r\n.signup-form__control {\r\n\r\n    background-color: #fff;\r\n\r\n    border: 1px solid #e6ecf5;\r\n    \r\n    color: #515365;\r\n\r\n    position: relative;\r\n\r\n    border-radius: 2px;\r\n\r\n    padding-top: 7px;\r\n\r\n    padding-left: 12px;\r\n\r\n    padding-right: 12px;\r\n\r\n    padding-bottom: 4px;\r\n\r\n    overflow: hidden;\r\n\r\n    width: 100%;\r\n\r\n    font-size: 12px;\r\n\r\n    margin-bottom: 10px; \r\n\r\n}\r\n\r\n.signup-form__control label {\r\n\r\n    text-transform: uppercase;\r\n\r\n}\r\n\r\n.signup-form__control input[type=\"text\"],\r\n.signup-form__control input[type=\"password\"] {\r\n    \r\n    border: none;\r\n\r\n    padding: 15px 0 5px 0;\r\n\r\n    background: none;\r\n\r\n    width: 100%;\r\n\r\n    outline: none;\r\n\r\n    font-family: \"Roboto\";\r\n\r\n    font-size: 14px;\r\n\r\n    font-weight: 700;\r\n\r\n    color: #000000;\r\n\r\n}\r\n.signup-form__control input[type=\"text\"]::-webkit-input-placeholder,\r\n.signup-form__control input[type=\"password\"]::-webkit-input-placeholder {\r\n\r\n    color: #d2d6db;\r\n\r\n    font-weight: 300;\r\n\r\n}\r\n.signup-form__button {\r\n\r\n    margin-top: 30px;\r\n\r\n}\r\n\r\n.signup-form__button input[type=\"button\"] {\r\n\r\n    background-color: #2979fb;\r\n\r\n    font-family: \"Roboto\";\r\n    \r\n    font-size: 14px;\r\n\r\n    color: #ffffff;\r\n\r\n    border: none;\r\n\r\n    cursor: pointer;\r\n\r\n    padding: 10px 35px;\r\n\r\n    outline: none;\r\n\r\n}\r\n\r\n.signup-form__button input[type=\"button\"]:hover {\r\n\r\n    background-color: #4189fc;\r\n\r\n}\r\n\r\n.signup-form__button input[type=\"button\"]:active {\r\n    \r\n    background-color: #146cf8;\r\n\r\n}\r\n\r\n"

/***/ }),

/***/ 883:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BooksComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _router = __webpack_require__(25);

var _books = __webpack_require__(420);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultBookTitle = "Empty book title";

var BooksComponent = exports.BooksComponent = (_dec = (0, _core.Component)({

	template: __webpack_require__(884),

	styles: [__webpack_require__(885)]

}), _dec(_class = function () {
	function BooksComponent(router, booksService) {
		_classCallCheck(this, BooksComponent);

		this._booksService = booksService;

		this._router = router;

		this.books = [];

		this.searchBookQuery = "";
	}

	_createClass(BooksComponent, [{
		key: "ngOnInit",
		value: function ngOnInit() {
			var _this = this;

			this.bookSubscription = this._booksService.GetBooks().subscribe(function (books) {
				return _this.books = books;
			}, function (error) {

				_this._router.navigate(["/signin"]);
			});
		}
	}, {
		key: "ngOnDestroy",
		value: function ngOnDestroy() {

			this.bookSubscription.unsubscribe();
		}
	}, {
		key: "CreateBook",
		value: function CreateBook(book) {
			var _this2 = this;

			console.log(book);

			this._booksService.CreateBook(book).subscribe(function (book) {
				return _this2.books.push(book);
			}, function (error) {
				return console.log(error);
			});
		}
	}, {
		key: "RemoveBook",
		value: function RemoveBook(removedBook) {

			this.books = this.books.filter(function (book) {
				return book.id != removedBook.id;
			});

			this._booksService.RemoveBook(removedBook.id).subscribe(function (done) {
				return console.log(done);
			}, function (error) {
				return console.log(error);
			});
		}
	}, {
		key: "SearchBook",


		// SelectBook(book) {

		// 	this.books.forEach(book => book.isSelected = false);

		// 	book.isSelected = true;

		// };

		value: function SearchBook(queryString) {

			this.searchBookQuery = queryString;
		}
	}]);

	return BooksComponent;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_router.Router, _books.BooksService], BooksComponent);

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

module.exports = "\r\n<sidebar></sidebar>\r\n\r\n<div class=\"books-sidebar\">\r\n    \r\n    <books-search (onSearch)=\"SearchBook($event)\"></books-search>\r\n    \r\n    <books-list [books]=\"books\"\r\n                [searchQuery]=\"searchBookQuery\"\r\n                (onCreateBook)=\"CreateBook($event)\"\r\n                (onRemoveBook)=\"RemoveBook($event)\"></books-list>\r\n\r\n</div>\r\n\r\n<div class=\"books-pages\">\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ 885:
/***/ (function(module, exports) {

module.exports = "\r\n.books-sidebar {\r\n    \r\n    position: fixed;\r\n\r\n    top: 0;\r\n\r\n    left: 60px;\r\n\r\n    bottom: 0;\r\n\r\n    width: 350px;\r\n\r\n    background-color: #8a81d6; /*#2979fb;*/\r\n\r\n    color: #ffffff;\r\n\r\n}\r\n\r\n.books-pages {\r\n\r\n    margin: 10px;\r\n\r\n    margin-left: 420px;\r\n\r\n}"

/***/ }),

/***/ 886:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BooksListComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

var _core = __webpack_require__(4);

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var BooksListComponent = exports.BooksListComponent = (_dec = (0, _core.Component)({

    selector: "books-list",

    template: __webpack_require__(887),

    styles: [__webpack_require__(888)]

}), _dec2 = (0, _core.Input)(), _dec3 = (0, _core.Input)(), _dec4 = (0, _core.Output)(), _dec5 = (0, _core.Output)(), _dec(_class = (_class2 = function () {
    function BooksListComponent() {
        _classCallCheck(this, BooksListComponent);

        _initDefineProp(this, "books", _descriptor, this);

        _initDefineProp(this, "searchQuery", _descriptor2, this);

        _initDefineProp(this, "onCreateBook", _descriptor3, this);

        _initDefineProp(this, "onRemoveBook", _descriptor4, this);

        this.book = null;

        this.isBookCreating = false;
    }

    _createClass(BooksListComponent, [{
        key: "InitBookCreation",
        value: function InitBookCreation() {

            this.book = { title: "" };

            this.isBookCreating = true;
        }
    }, {
        key: "ApplyBookCreation",
        value: function ApplyBookCreation() {

            if (!this.book.title) {

                return;
            };

            this.onCreateBook.emit(this.book);

            this.isBookCreating = false;
        }
    }, {
        key: "DiscardBookCreation",
        value: function DiscardBookCreation() {

            this.book = { title: "" };

            this.isBookCreating = false;
        }
    }, {
        key: "SelectBook",
        value: function SelectBook(book) {

            var selectedBook = this.books.find(function (book) {
                return book.isSelected;
            });

            if (selectedBook) {

                selectedBook.isSelected = false;
            };

            book.isSelected = true;
        }
    }, {
        key: "RemoveBook",
        value: function RemoveBook(book) {

            this.onRemoveBook.emit(book);
        }
    }]);

    return BooksListComponent;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "books", [_dec2], {
    enumerable: true,
    initializer: function initializer() {
        return this.books;
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "searchQuery", [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return this.searchQuery;
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "onCreateBook", [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return new _core.EventEmitter();
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "onRemoveBook", [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return new _core.EventEmitter();
    }
})), _class2)) || _class);

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"book-list\">\r\n\r\n    <div class=\"book-create\"\r\n         (click)=\"InitBookCreation();\">\r\n\r\n        <span class=\"create-icon jam jam-plus\"></span>\r\n\r\n        <span>Create New Book</span>\r\n\r\n    </div>\r\n\r\n    <ul *ngIf=\"isBookCreating\">\r\n\r\n        <li class=\"book-new\">\r\n\r\n            <div class=\"book-new__wrap\">\r\n                \r\n                <input type=\"text\"\r\n                       class=\"book-new__edit\"\r\n                       placeholder=\"Enter book title...\"\r\n                       [(ngModel)]=\"book.title\" />\r\n\r\n                <div class=\"book-new__controls\">\r\n\r\n                    <span class=\"book-new__controls-action jam jam-check\"\r\n                         (click)=\"ApplyBookCreation();\"></span>\r\n\r\n                    <span class=\"book-new__controls-action jam jam-close\"\r\n                         (click)=\"DiscardBookCreation();\"></span>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </li>\r\n\r\n    </ul>\r\n\r\n    <ul>\r\n\r\n        <li class=\"book\"\r\n            *ngFor=\"let book of books | bookSearch:searchQuery\"\r\n            (click)=\"SelectBook(book);\"\r\n            [ngClass]=\"{ 'book__selected': book.isSelected }\"\r\n            [routerLink]=\"['/books', book.id, 'pages']\">\r\n\r\n            <div class=\"book__wrap\">\r\n\r\n                <span class=\"book__selector\"></span>\r\n\r\n                <h3 class=\"book__title\">{{ book.title }}</h3>\r\n\r\n                <div class=\"book__controls\">\r\n                    \r\n                    <span class=\"book__controls-action jam jam-close\"\r\n                         (click)=\"RemoveBook(book)\"></span>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </li>\r\n\r\n    </ul>\r\n\r\n</div>"

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

module.exports = "\r\n.content {\r\n\r\n    margin-left: 410px; \r\n\r\n    margin-top: 10px; \r\n\r\n}\r\n\r\n.book-list {\r\n\r\n    font-family: \"Roboto\";\r\n\r\n}\r\n\r\n.book-list .book-create {\r\n\r\n    padding: 15px;\r\n\r\n    font-size: 14px;\r\n\r\n    cursor: pointer;\r\n\r\n    border-bottom: 1px solid #6864a7; /* #1764E2; */\r\n\r\n    background-color: #7871be;  /* #1b69e8; */\r\n\r\n    color: #e0def7; /* #a3c5ff; */\r\n\r\n}\r\n\r\n.book-list .book-create:hover {\r\n\r\n    color: #ffffff;\r\n\r\n}\r\n\r\n.book-list .book-create .create-icon {\r\n\r\n    display: inline-block;\r\n\r\n    padding: 0 15px;\r\n\r\n    font-size: 16px;\r\n\r\n}\r\n\r\n.book-list ul {\r\n\r\n    list-style: none;\r\n\r\n    margin: 0;\r\n\r\n    padding: 0;\r\n\r\n    font-family: 'Roboto', sans-serif;\r\n\r\n}\r\n\r\n.book-list .book,\r\n.book-list .book-new {\r\n\r\n    padding: 0;\r\n\r\n    margin: 0;\r\n\r\n    line-height: 1em;\r\n\r\n    font-size: 14px;\r\n\r\n    position: relative;\r\n\r\n    height: 50px;\r\n\r\n    cursor: pointer;\r\n\r\n    outline: none;\r\n\r\n}\r\n\r\n.book-list .book-new {\r\n\r\n    background-color: #327ffa;\r\n\r\n}\r\n\r\n.book-list .book__wrap,\r\n.book-list .book-new__wrap {\r\n\r\n    padding: 15px 15px 15px 30px;\r\n\r\n    position: relative;\r\n\r\n}\r\n\r\n.book-list .book-new__edit {\r\n\r\n    font-family: \"Roboto\";\r\n\r\n    border: none;\r\n\r\n    background: none;\r\n\r\n    font-size: 14px;\r\n\r\n    font-weight: 400;\r\n\r\n    letter-spacing: 0;\r\n\r\n    line-height: 20px;\r\n\r\n    color: #ffffff;\r\n\r\n    outline: none;\r\n\r\n    width: 80%;\r\n\r\n}\r\n\r\n.book-list .book-new__edit::-webkit-input-placeholder {\r\n\r\n    color: #a3c5ff;\r\n\r\n}\r\n\r\n.book-list .book__controls,\r\n.book-list .book-new__controls {\r\n\r\n    position: absolute;\r\n\r\n    top: 20px;\r\n\r\n    right: 15px;\r\n\r\n    font-size: 12px;\r\n\r\n}\r\n\r\n.book-list .book__controls-action,\r\n.book-list .book-new__controls-action {\r\n\r\n    margin: 0 5px;\r\n\r\n}\r\n\r\n.book-list .book:hover {\r\n\r\n    background-color: #6864a7; /* #1b69e8; */\r\n\r\n}\r\n\r\n.book-list .book__title {\r\n\r\n    padding: 0;\r\n\r\n    margin: 0;\r\n\r\n    font-size: 14px;\r\n\r\n    font-weight: 400;\r\n\r\n    line-height: 21px;\r\n    \r\n    letter-spacing: 0;\r\n\r\n    color: #ffffff;\r\n\r\n}\r\n\r\n.book-list .book__selector {\r\n\r\n    border-radius: 50%;\r\n    \r\n    display: inline-block;\r\n\r\n    width: 7px;\r\n\r\n    height: 7px;\r\n\r\n    background-color: #ffffff;\r\n\r\n    position: absolute;\r\n\r\n    top: 21px;\r\n\r\n    left: 10px;\r\n\r\n}\r\n\r\n.book-list .book__selected .book__selector {\r\n\r\n    background-color: #fffb1c;\r\n\r\n}\r\n\r\n.book-list .book__selected .book__title {\r\n\r\n    color: #fffb1c;\r\n\r\n}"

/***/ }),

/***/ 889:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BooksSearchPipe = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BooksSearchPipe = exports.BooksSearchPipe = (_dec = (0, _core.Pipe)({

    name: "bookSearch"

}), _dec(_class = function () {
    function BooksSearchPipe() {
        _classCallCheck(this, BooksSearchPipe);
    }

    _createClass(BooksSearchPipe, [{
        key: "transform",
        value: function transform(books, filterBy) {

            if (!filterBy) {

                return books;
            };

            return books.filter(function (book) {
                return book.title.toLowerCase().includes(filterBy.toLowerCase(), 0);
            });
        }
    }]);

    return BooksSearchPipe;
}()) || _class);
;

/***/ }),

/***/ 890:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BooksSearchComponent = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

var _core = __webpack_require__(4);

function _initDefineProp(target, property, descriptor, context) {
	if (!descriptor) return;
	Object.defineProperty(target, property, {
		enumerable: descriptor.enumerable,
		configurable: descriptor.configurable,
		writable: descriptor.writable,
		value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	});
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	var desc = {};
	Object['ke' + 'ys'](descriptor).forEach(function (key) {
		desc[key] = descriptor[key];
	});
	desc.enumerable = !!desc.enumerable;
	desc.configurable = !!desc.configurable;

	if ('value' in desc || desc.initializer) {
		desc.writable = true;
	}

	desc = decorators.slice().reverse().reduce(function (desc, decorator) {
		return decorator(target, property, desc) || desc;
	}, desc);

	if (context && desc.initializer !== void 0) {
		desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
		desc.initializer = undefined;
	}

	if (desc.initializer === void 0) {
		Object['define' + 'Property'](target, property, desc);
		desc = null;
	}

	return desc;
}

function _initializerWarningHelper(descriptor, context) {
	throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var BooksSearchComponent = exports.BooksSearchComponent = (_dec = (0, _core.Component)({

	selector: "books-search",

	template: __webpack_require__(891),

	styles: [__webpack_require__(892)]

}), _dec2 = (0, _core.Output)(), _dec(_class = (_class2 = function BooksSearchComponent() {
	_classCallCheck(this, BooksSearchComponent);

	_initDefineProp(this, 'onSearch', _descriptor, this);

	this.searchQuery = "";
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'onSearch', [_dec2], {
	enumerable: true,
	initializer: function initializer() {
		return new _core.EventEmitter();
	}
})), _class2)) || _class);
;

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"book-search\">\r\n    \r\n        <span class=\"book-search-icon jam jam-search\"></span>\r\n    \r\n        <input type=\"text\" \r\n               placeholder=\"Search by book title\"\r\n               [(ngModel)]=\"searchQuery\"\r\n               (keyup)=\"onSearch.emit(searchQuery);\" />\r\n    \r\n    </div>"

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

module.exports = "\r\n.book-search {\r\n\r\n    margin: 0;\r\n\r\n    padding: 0;\r\n\r\n    position: relative;\r\n\r\n    font-family: \"Roboto\";\r\n\r\n}\r\n\r\n.book-search .book-search-icon { \r\n\r\n    position: absolute;\r\n\r\n    top: 13px;\r\n\r\n    left: 30px;\r\n\r\n    font-size: 21px;\r\n\r\n    color: #e0def7; /* #a3c5ff; */\r\n\r\n}\r\n\r\n.book-search input[type=text] {\r\n\r\n    background: none;\r\n\r\n    border: none;\r\n\r\n    background-color: #6864a7; /* #2163ce; */\r\n\r\n    width: 100%;\r\n\r\n    outline: none;\r\n\r\n    box-sizing: border-box;\r\n\r\n    padding: 0 15px;\r\n\r\n    padding-left: 60px; \r\n\r\n    font-size: 14px;\r\n\r\n    line-height: 1em;\r\n\r\n    color: #ffffff;\r\n\r\n    height: 50px;\r\n\r\n    margin: 0;\r\n\r\n    font-family: 'Roboto', sans-serif;\r\n\r\n}\r\n\r\n.book-search input[type=text]::-webkit-input-placeholder {\r\n\r\n    color: #e0def7; /* #a3c5ff; */\r\n\r\n}"

/***/ }),

/***/ 893:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ActivitiesComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _router = __webpack_require__(25);

var _core = __webpack_require__(4);

var _activities = __webpack_require__(422);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActivitiesComponent = exports.ActivitiesComponent = (_dec = (0, _core.Component)({

    template: __webpack_require__(894),

    styles: [__webpack_require__(895)]

}), _dec(_class = function () {
    function ActivitiesComponent(router, activityService) {
        _classCallCheck(this, ActivitiesComponent);

        this._router = router;

        this._activityService = activityService;

        this.activities = [];

        this.activityName = "";
    }

    _createClass(ActivitiesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
            var _this = this;

            this.subscription = this._activityService.GetActivities(1).subscribe(function (activities) {

                _this.activities = activities;

                console.log(_this.activities);
            }, function (error) {

                _this._router.navigate(["/signin"]);
            });
        }
    }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {

            this.subscription.unsubscribe();
        }
    }, {
        key: "AddActivity",
        value: function AddActivity() {}
    }, {
        key: "CreateActivityStamp",
        value: function CreateActivityStamp() {}
    }]);

    return ActivitiesComponent;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_router.Router, _activities.ActivitiesService], ActivitiesComponent);
;

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

module.exports = "\r\n<sidebar></sidebar>\r\n\r\n<div class=\"activities__tags\">\r\n    \r\n    <activities-tags></activities-tags>\r\n\r\n</div>\r\n\r\n<div class=\"activities\">\r\n\r\n\t<!-- <router-outlet></router-outlet> -->\r\n\t\r\n\t<div class=\"activities__pannel clearfix row-flow\">\r\n\r\n\t\t<div class=\"span-10\">\r\n\r\n\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t<div class=\"activities__pannel-textbox span-10\">\r\n\r\n\t\t\t\t\t<input type=\"text\" \r\n\t\t\t\t\t\t   class=\"txt\"\r\n\t\t\t\t\t\t   placeholder=\"What are you going to do?\"\r\n\t\t\t\t\t\t   [(ngModel)]=\"activityName\" />\r\n\t\r\n\t\t\t\t</div>\r\n\t\r\n\t\t\t\t<div class=\"activities__pannel-btn span-2\">\r\n\t\r\n\t\t\t\t\t<activities-list [activities]=\"activities\"></activities-list>\r\n\t\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t\t<div class=\"span-2\">\r\n\r\n\t\t\t<div class=\"row\">\r\n\r\n\t\t\t\t<div class=\"activities__pannel-btn right span-12\">\r\n\r\n\t\t\t\t\t<input type=\"button\"\r\n\t\t\t\t\t\t   class=\"btn btn-primary\"\r\n\t\t\t\t\t\t   value=\"Create\"\r\n\t\t\t\t\t\t   (click)=\"CreateActivityStamp();\"/>\r\n\t\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n</div>"

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

module.exports = "\r\n.activities {\r\n\r\n    margin: 10px;\r\n    margin-left: 100px;\r\n\r\n}\r\n\r\n.activities__pannel {\r\n\r\n    width: 100%;\r\n    background-color: #ffffff;\r\n    padding: 10px;\r\n    font-size: 14px;\r\n    font-family: \"Roboto\";\r\n    border: 1px solid rgba(0, 0, 0, .08);\r\n    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05);\r\n\r\n}\r\n\r\n.activities__pannel-textbox .txt {\r\n\r\n    border: none;\r\n    background: none;\r\n    color: #404044;\r\n    font-size: 14px;\r\n    padding: 10px;\r\n    width: 100%;\r\n    min-width: 850px;\r\n    font-family: \"Roboto\";\r\n    outline: none;\r\n\r\n}\r\n\r\n.activities__pannel-btn.right {\r\n\r\n    text-align: right;\r\n\r\n}\r\n\r\n.activities__pannel-btn .btn {\r\n\r\n    font-family: \"Roboto\";    \r\n    font-size: 14px;\r\n    border: none;\r\n    background: none;\r\n    cursor: pointer;\r\n    padding: 10px 25px;\r\n    outline: none;\r\n    min-width: 130px;\r\n\r\n}\r\n\r\n.activities__pannel-btn .btn-default {\r\n\r\n    border: 1px solid #dddee0;\r\n    color: #404044;\r\n\r\n}\r\n\r\n.activities__pannel-btn .btn-default:hover {\r\n\r\n    border: 1px solid #c8c8ca;\r\n\r\n}\r\n\r\n.activities__pannel-btn .btn-primary {\r\n\r\n    border: 1px solid #8a81d6;\r\n    background-color: #8a81d6;\r\n    color: #ffffff;\r\n\r\n}\r\n\r\n.activities__pannel-btn .btn-primary:hover {\r\n\r\n    border: 1px solid #6864a7;\r\n    background-color: #6864a7;\r\n\r\n}"

/***/ }),

/***/ 896:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ActivitiesTagsComponent = undefined;

var _dec, _class;

var _core = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActivitiesTagsComponent = exports.ActivitiesTagsComponent = (_dec = (0, _core.Component)({

    selector: "activities-tags",

    template: __webpack_require__(897),

    styles: []

}), _dec(_class = function ActivitiesTagsComponent() {
    _classCallCheck(this, ActivitiesTagsComponent);
}) || _class);
;

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 898:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ActivitiesListComponent = undefined;

var _dec, _dec2, _class, _desc, _value, _class2, _descriptor;

var _core = __webpack_require__(4);

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var ActivitiesListComponent = exports.ActivitiesListComponent = (_dec = (0, _core.Component)({

    selector: "activities-list",

    template: __webpack_require__(899),

    styles: [__webpack_require__(900)]

}), _dec2 = (0, _core.Input)(), _dec(_class = (_class2 = function ActivitiesListComponent() {
    _classCallCheck(this, ActivitiesListComponent);

    _initDefineProp(this, "activities", _descriptor, this);

    this.isVisible = false;
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "activities", [_dec2], {
    enumerable: true,
    initializer: function initializer() {
        return this.activities;
    }
})), _class2)) || _class);
;

/***/ }),

/***/ 899:
/***/ (function(module, exports) {

module.exports = "\r\n<input type=\"button\"\r\n       class=\"btn btn-default\"\r\n       value=\"Add Activity\"\r\n       (click)=\"AddActivity();\" />\r\n\r\n<div class=\"activities__modal\"\r\n     *ngIf=\"isVisible\">\r\n\r\n    <div class=\"activities__modal-content\">\r\n\r\n        <div class=\"\">\r\n\r\n            <input type=\"text\"\r\n                   placeholder=\"Wtire your activity\" />\r\n\r\n            \r\n        \r\n        </div>\r\n    \r\n        <ul>\r\n    \r\n            <li *ngFor=\"let activity of activities\"></li>\r\n    \r\n        </ul>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 900:
/***/ (function(module, exports) {

module.exports = "\r\n.activities__modal {\r\n\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1000;\r\n\r\n}\r\n\r\n.activities__modal-content {\r\n\r\n    position: relative;\r\n    width: 600px;\r\n    margin: 150px auto;\r\n\r\n}"

/***/ }),

/***/ 901:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BooksPagesComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _router = __webpack_require__(25);

var _booksPages = __webpack_require__(424);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BooksPagesComponent = exports.BooksPagesComponent = (_dec = (0, _core.Component)({

    template: __webpack_require__(902),

    styles: [__webpack_require__(903)]

}), _dec(_class = function () {
    function BooksPagesComponent(route, booksPagesService) {
        _classCallCheck(this, BooksPagesComponent);

        this._route = route;

        this._booksPagesService = booksPagesService;

        this.pages = [];
    }

    _createClass(BooksPagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
            var _this = this;

            this._route.params.switchMap(function (params) {

                _this.pages = [];

                _this.bookId = +params["bookId"];

                return _this._booksPagesService.GetPagesByBookId(_this.bookId);
            }).subscribe(function (pages) {
                return _this.pages = pages;
            });
        }
    }]);

    return BooksPagesComponent;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_router.ActivatedRoute, _booksPages.BooksPagesService], BooksPagesComponent);

/***/ }),

/***/ 902:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"book__pages\">\r\n\r\n    <div class=\"book__pages-toolbar clearfix\">\r\n\r\n        <div class=\"book__pages-toolbar__control\"\r\n             [routerLink]=\"['/books', bookId, 'pages', 'create']\">\r\n\r\n            <span class=\"book__pages-toolbar__control-icon jam jam-plus\"></span>\r\n\r\n            <span class=\"book__pages-toolbar__control-title\">Add new page</span>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"book__pages-list clearfix\">\r\n\r\n        <div class=\"book__pages-list__page\"\r\n             *ngFor=\"let page of pages\"\r\n             [routerLink]=\"['/books', bookId, 'pages', page.order]\">\r\n\r\n            <div class=\"book__pages-list__page-content\">\r\n\r\n                <div class=\"book__pages-list__page-date\">{{ page?.dateCreated }}</div>\r\n\r\n                <h2 class=\"book__pages-list__page-title\">{{ page?.title }}</h2>\r\n\r\n                <p class=\"book__pages-list__page-text\">{{ page?.text }}</p>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 903:
/***/ (function(module, exports) {

module.exports = "\r\n.book__pages {\r\n\r\n    font-family: \"Roboto\";\r\n\r\n}\r\n\r\n.book__pages-toolbar {\r\n\r\n    width: 100%;\r\n\r\n}\r\n\r\n.book__pages-toolbar__control {\r\n\r\n    position: relative;\r\n\r\n    color: #1b69e8;\r\n\r\n    padding: 5px;\r\n\r\n    float: left;\r\n\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.book__pages-toolbar__control:hover {\r\n\r\n    color: #2163ce;\r\n\r\n}\r\n\r\n.book__pages-toolbar__control-icon {\r\n\r\n    font-size: 12px;    \r\n\r\n    position: absolute;\r\n\r\n    top: 9px;\r\n\r\n    left: 0;\r\n\r\n}\r\n\r\n.book__pages-toolbar__control-title {\r\n\r\n    font-size: 14px;\r\n\r\n    line-height: 14px;\r\n\r\n    font-weight: 400;\r\n\r\n    padding-left: 15px;\r\n\r\n}\r\n\r\n.book__pages-list {\r\n\r\n    width: 100%;\r\n\r\n}\r\n\r\n.book__pages-list__page {  \r\n\r\n    padding: 0;\r\n\r\n    margin: 0;\r\n\r\n    width: 25%;\r\n\r\n    \r\n\r\n    float: left;\r\n\r\n}\r\n\r\n.book__pages-list__page-content { \r\n\r\n    margin: 10px;\r\n\r\n    border: 1px solid #dddee0;\r\n\r\n    background-color: #ffffff;\r\n\r\n    border-radius: 3px;  \r\n    \r\n    padding: 25px;\r\n\r\n    min-height: 200px;\r\n\r\n}\r\n\r\n.book__pages-list__page-content:hover {\r\n\r\n    border: 1px solid #2979fb;\r\n\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.book__pages-list__page-date {\r\n\r\n    font-size: 12px;\r\n\r\n    font-weight: 600;\r\n\r\n    color: #aeafb4;\r\n\r\n}\r\n\r\n.book__pages-list__page-title {\r\n\r\n    color: #404044;\r\n\r\n    margin: 20px 0;\r\n\r\n    font-size: 18px;\r\n\r\n    font-weight: 600;\r\n\r\n}\r\n\r\n.book__pages-list__page-text {\r\n\r\n    color: #404044;\r\n\r\n    font-size: 14px;\r\n\r\n    font-weight: 300;\r\n\r\n    margin: 0;\r\n\r\n    padding: 0;\r\n\r\n}\r\n\r\n/* .pages {\r\n\r\n    font-family: \"Roboto\";\r\n\r\n}\r\n\r\n.pages .page {\r\n\r\n    float: left;\r\n\r\n    margin: 0 10px;\r\n\r\n}\r\n\r\n.pages .page .page-content {\r\n\r\n    padding: 10px;\r\n\r\n    cursor: pointer;\r\n\r\n    background-color: #ffffff;\r\n\r\n    border: 1px solid #e6ecf5;\r\n\r\n    color: #515365;\r\n\r\n    font-size: 16px;\r\n\r\n    font-weight: 300;\r\n\r\n    line-height: 1em;\r\n\r\n} */"

/***/ }),

/***/ 904:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageInitComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _router = __webpack_require__(25);

var _pages = __webpack_require__(151);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PageInitComponent = exports.PageInitComponent = (_dec = (0, _core.Component)({

    template: __webpack_require__(905),

    styles: [__webpack_require__(426)]

}), _dec(_class = function () {
    function PageInitComponent(router, route, pagesService) {
        _classCallCheck(this, PageInitComponent);

        this._router = router;

        this._route = route;

        this._pagesService = pagesService;

        this.page = { dateCreated: "08 December, 2017", title: "", text: "" };
    }

    _createClass(PageInitComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
            var _this = this;

            this._route.params.subscribe(function (params) {

                _this.page.bookId = +params["bookId"];
            });
        }
    }, {
        key: "CreatePage",
        value: function CreatePage(page) {
            var title = page.title,
                text = page.text,
                bookId = page.bookId;


            var newPage = { title: title, text: text, bookId: bookId };

            if (!title) {

                return;
            };

            this._pagesService.AddBookPage(newPage).subscribe(function (done) {
                return console.log(done);
            }, function (error) {
                return console.log(error);
            });
        }
    }, {
        key: "DiscardPageChanges",
        value: function DiscardPageChanges(page) {

            this._router.navigate(["/books", page.bookId, "pages"]);
        }
    }]);

    return PageInitComponent;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_router.Router, _router.ActivatedRoute, _pages.PagesService], PageInitComponent);
;

/***/ }),

/***/ 905:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container pages__editor\">\r\n\r\n    <page-init-controls (onCreatePage)=\"CreatePage(page);\"\r\n                        (onDiscardPageChanges)=\"DiscardPageChanges(page);\"></page-init-controls>\r\n\r\n    <div class=\"pages__editor-canvas\">\r\n\r\n        <h5 class=\"pages__editor-canvas__time\">{{ page?.dateCreated }}</h5>\r\n\r\n        <div class=\"editor-content\">\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"column\">\r\n\r\n                    <input type=\"text\"\r\n                           class=\"pages__editor-canvas__title\" \r\n                           placeholder=\"Create title...\"\r\n                           [(ngModel)]=\"page.title\" />\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"column\">\r\n\r\n                    <textarea class=\"pages__editor-canvas__text\"\r\n                              placeholder=\"Write your ideas here...\"\r\n                              [(ngModel)]=\"page.text\"></textarea>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 906:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageInitControlsComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _core = __webpack_require__(4);

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var PageInitControlsComponent = exports.PageInitControlsComponent = (_dec = (0, _core.Component)({

    selector: "page-init-controls",

    template: __webpack_require__(907),

    styles: [__webpack_require__(427)]

}), _dec2 = (0, _core.Output)(), _dec3 = (0, _core.Output)(), _dec(_class = (_class2 = function () {
    function PageInitControlsComponent() {
        _classCallCheck(this, PageInitControlsComponent);

        _initDefineProp(this, "onCreatePage", _descriptor, this);

        _initDefineProp(this, "onDiscardPageChanges", _descriptor2, this);
    }

    _createClass(PageInitControlsComponent, [{
        key: "CreatePage",
        value: function CreatePage() {

            this.onCreatePage.emit();
        }
    }, {
        key: "DiscardPageChanges",
        value: function DiscardPageChanges() {

            this.onDiscardPageChanges.emit();
        }
    }]);

    return PageInitControlsComponent;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "onCreatePage", [_dec2], {
    enumerable: true,
    initializer: function initializer() {
        return new _core.EventEmitter();
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "onDiscardPageChanges", [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return new _core.EventEmitter();
    }
})), _class2)) || _class);
;

/***/ }),

/***/ 907:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"pages__editor-controls clearfix\">\r\n    \r\n        <div class=\"pages__editor-controls__actions clearfix\">\r\n    \r\n            <div class=\"pages__editor-controls__actions-action\"\r\n                (click)=\"CreatePage();\">\r\n    \r\n                <span class=\"jam jam-check\"></span>\r\n    \r\n            </div>\r\n    \r\n            <div class=\"pages__editor-controls__actions-action\"\r\n                (click)=\"DiscardPageChanges();\">\r\n    \r\n                <span class=\"jam jam-close\"></span>\r\n    \r\n            </div>\r\n            \r\n        </div>\r\n    \r\n    </div>"

/***/ }),

/***/ 908:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageCreatedComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _router = __webpack_require__(25);

var _pages = __webpack_require__(151);

var _alerts = __webpack_require__(152);

var _rxjs = __webpack_require__(96);

var _rxjs2 = _interopRequireDefault(_rxjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EDIT_MESSAGE = "Page successfully edited.";

var CLONE_MESSAGE = "Page successfully cloned.";

var PageCreatedComponent = exports.PageCreatedComponent = (_dec = (0, _core.Component)({

    template: __webpack_require__(910),

    styles: [__webpack_require__(426)]

}), _dec(_class = function () {
    function PageCreatedComponent(router, route, pagesService, alertsService) {
        _classCallCheck(this, PageCreatedComponent);

        this._router = router;

        this._route = route;

        this._pagesService = pagesService;

        this._alertsService = alertsService;

        this.page = { title: "", text: "", dateCreated: null };
    }

    _createClass(PageCreatedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
            var _this = this;

            this._route.params.subscribe(function (params) {

                _this._pagesService.GetPageByOrder(+params["bookId"], +params["pageOrder"]).subscribe(function (page) {
                    return _this.page = page;
                }, function (error) {
                    return console.log(error);
                });
            });
        }
    }, {
        key: "PrevPage",
        value: function PrevPage(currentPage) {
            var _this2 = this;

            this._pagesService.GetPageByOrder(currentPage.bookId, currentPage.order - 1).subscribe(function (page) {
                return _this2._router.navigate(["/books", page.bookId, "pages", page.order]);
            }, function (error) {
                return _this2._router.navigate(["/books", currentPage.bookId, "pages"]);
            });
        }
    }, {
        key: "NextPage",
        value: function NextPage(currentPage) {
            var _this3 = this;

            this._pagesService.GetPageByOrder(currentPage.bookId, currentPage.order + 1).subscribe(function (page) {
                return _this3._router.navigate(["/books", page.bookId, "pages", page.order]);
            }, function (error) {
                return _this3._router.navigate(["/books", currentPage.bookId, "pages"]);
            });
        }
    }, {
        key: "EditPage",
        value: function EditPage(page) {
            var _this4 = this;

            var newPage = this._pagesService.MapPage(page);

            if (!newPage.title) {

                return;
            };

            this._pagesService.EditBookPage(newPage).subscribe(function (done) {

                _this4._alertsService.Success(EDIT_MESSAGE);
            }, function (error) {
                return console.log(error);
            });
        }
    }, {
        key: "DownloadPage",
        value: function DownloadPage(page) {

            this._pagesService.DownloadBookPage(page).subscribe(function (done) {

                console.log(done);
            }, function (error) {
                return console.log(error);
            });
        }
    }, {
        key: "ClonePage",
        value: function ClonePage(page) {
            var _this5 = this;

            var newPage = this._pagesService.MapPage(page);

            if (!newPage.title) {

                return;
            };

            this._pagesService.AddBookPage(newPage).subscribe(function (createdPage) {

                _this5._alertsService.Success(CLONE_MESSAGE);

                _this5._router.navigate(["/books", createdPage.bookId, "pages", createdPage.order]);
            }, function (error) {
                return console.log(error);
            });
        }
    }, {
        key: "DeletePage",
        value: function DeletePage(page) {
            var _this6 = this;

            this._pagesService.DeleteBookPage(page).subscribe(function (done) {

                console.log(done);

                _this6._router.navigate(["/books", page.bookId, "pages"]);
            }, function (error) {
                return console.log(error);
            });
        }
    }]);

    return PageCreatedComponent;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_router.Router, _router.ActivatedRoute, _pages.PagesService, _alerts.AlertsService], PageCreatedComponent);
;

/***/ }),

/***/ 909:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SUCCESS = exports.SUCCESS = "Success";

var ERROR = exports.ERROR = "Error";

var INFO = exports.INFO = "Info";

/***/ }),

/***/ 910:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container pages__editor\">\r\n\r\n    <page-created-controls (onPrevPage)=\"PrevPage(page);\"\r\n                           (onNextPage)=\"NextPage(page);\"\r\n                           (onEditPage)=\"EditPage(page);\"\r\n                           (onDownloadPage)=\"DownloadPage(page);\"\r\n                           (onClonePage)=\"ClonePage(page);\"\r\n                           (onDeletePage)=\"DeletePage(page);\"></page-created-controls>\r\n\r\n    <div class=\"pages__editor-canvas\">\r\n\r\n        <h5 class=\"pages__editor-canvas__time\">{{ page.dateCreated }}</h5>\r\n\r\n        <div class=\"editor-content\">\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"column\">\r\n\r\n                    <input type=\"text\"\r\n                           class=\"pages__editor-canvas__title\" \r\n                           placeholder=\"Create title...\"\r\n                           [(ngModel)]=\"page.title\" />\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n                <div class=\"column\">\r\n\r\n                    <textarea class=\"pages__editor-canvas__text\"\r\n                              placeholder=\"Write your ideas here...\"\r\n                              [(ngModel)]=\"page.text\"></textarea>\r\n\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 911:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageCreatedControlsComponent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

var _core = __webpack_require__(4);

function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
        enumerable: descriptor.enumerable,
        configurable: descriptor.configurable,
        writable: descriptor.writable,
        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var PageCreatedControlsComponent = exports.PageCreatedControlsComponent = (_dec = (0, _core.Component)({

    selector: "page-created-controls",

    template: __webpack_require__(912),

    styles: [__webpack_require__(427)]

}), _dec2 = (0, _core.Output)(), _dec3 = (0, _core.Output)(), _dec4 = (0, _core.Output)(), _dec5 = (0, _core.Output)(), _dec6 = (0, _core.Output)(), _dec7 = (0, _core.Output)(), _dec(_class = (_class2 = function () {
    function PageCreatedControlsComponent() {
        _classCallCheck(this, PageCreatedControlsComponent);

        _initDefineProp(this, "onPrevPage", _descriptor, this);

        _initDefineProp(this, "onNextPage", _descriptor2, this);

        _initDefineProp(this, "onEditPage", _descriptor3, this);

        _initDefineProp(this, "onDownloadPage", _descriptor4, this);

        _initDefineProp(this, "onClonePage", _descriptor5, this);

        _initDefineProp(this, "onDeletePage", _descriptor6, this);
    }

    _createClass(PageCreatedControlsComponent, [{
        key: "PrevPage",
        value: function PrevPage() {

            this.onPrevPage.emit();
        }
    }, {
        key: "NextPage",
        value: function NextPage() {

            this.onNextPage.emit();
        }
    }, {
        key: "EditPage",
        value: function EditPage() {

            this.onEditPage.emit();
        }
    }, {
        key: "DownloadPage",
        value: function DownloadPage() {

            this.onDownloadPage.emit();
        }
    }, {
        key: "ClonePage",
        value: function ClonePage() {

            this.onClonePage.emit();
        }
    }, {
        key: "DeletePage",
        value: function DeletePage() {

            this.onDeletePage.emit();
        }
    }]);

    return PageCreatedControlsComponent;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "onPrevPage", [_dec2], {
    enumerable: true,
    initializer: function initializer() {
        return new _core.EventEmitter();
    }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "onNextPage", [_dec3], {
    enumerable: true,
    initializer: function initializer() {
        return new _core.EventEmitter();
    }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "onEditPage", [_dec4], {
    enumerable: true,
    initializer: function initializer() {
        return new _core.EventEmitter();
    }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "onDownloadPage", [_dec5], {
    enumerable: true,
    initializer: function initializer() {
        return new _core.EventEmitter();
    }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "onClonePage", [_dec6], {
    enumerable: true,
    initializer: function initializer() {
        return new _core.EventEmitter();
    }
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "onDeletePage", [_dec7], {
    enumerable: true,
    initializer: function initializer() {
        return new _core.EventEmitter();
    }
})), _class2)) || _class);
;

/***/ }),

/***/ 912:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"pages__editor-controls clearfix\">\r\n\r\n    <div class=\"pages__editor-controls__actions clearfix\">\r\n\r\n        <div class=\"pages__editor-controls__actions-action\"\r\n            (click)=\"PrevPage();\">\r\n\r\n            <span class=\"jam jam-arrow-left\"></span>\r\n\r\n        </div>\r\n\r\n        <div class=\"pages__editor-controls__actions-action\"\r\n            (click)=\"NextPage();\">\r\n\r\n            <span class=\"jam jam-arrow-right\"></span>\r\n\r\n        </div>\r\n\r\n    </div>\r\n    \r\n    <div class=\"pages__editor-controls__actions clearfix\">\r\n\r\n        <div class=\"pages__editor-controls__actions-action\"\r\n            (click)=\"EditPage();\">\r\n\r\n            <span class=\"jam jam-check\"></span>\r\n\r\n        </div>\r\n\r\n        <div class=\"pages__editor-controls__actions-action\"\r\n             (click)=\"DownloadPage();\">\r\n\r\n            <span class=\"jam jam-download\"></span>\r\n\r\n        </div>\r\n\r\n        <div class=\"pages__editor-controls__actions-action\"\r\n            (click)=\"ClonePage();\">\r\n\r\n            <span class=\"jam jam-files\"></span>\r\n\r\n        </div>\r\n\r\n        <div class=\"pages__editor-controls__actions-action\"\r\n            (click)=\"DeletePage();\">\r\n\r\n            <span class=\"jam jam-trash-f\"></span>\r\n\r\n        </div>\r\n        \r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 913:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _dec, _class;

var _core = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppComponent = (_dec = (0, _core.Component)({

	selector: "app",

	template: __webpack_require__(914)

}), _dec(_class = function AppComponent() {
	_classCallCheck(this, AppComponent);
}) || _class);
exports.default = AppComponent;

/***/ }),

/***/ 914:
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n\r\n<alerts></alerts>"

/***/ }),

/***/ 915:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _dec, _class;

var _core = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SidebarComponent = (_dec = (0, _core.Component)({

	selector: "sidebar",

	template: __webpack_require__(916),

	styles: [__webpack_require__(917)]

}), _dec(_class = function SidebarComponent() {
	_classCallCheck(this, SidebarComponent);
}) || _class);
exports.default = SidebarComponent;
;

/***/ }),

/***/ 916:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"sidebar-wrap\">\r\n\r\n    <ul class=\"sidebar\">\r\n\r\n        <li [routerLink]=\"['/books']\" \r\n            [routerLinkActive]=\"['is-active']\">\r\n            \r\n            <span class=\"jam jam-book\"></span>\r\n            \r\n        </li>\r\n\r\n        <li [routerLink]=\"['/activities']\"\r\n            [routerLinkActive]=\"['is-active']\">\r\n\r\n            <span class=\"jam jam-tags\"></span>\r\n\r\n        </li>\r\n        \r\n        <li>\r\n\r\n            <span class=\"jam jam-calendar\"></span>\r\n\r\n        </li>\r\n\r\n    </ul>\r\n\r\n</div>"

/***/ }),

/***/ 917:
/***/ (function(module, exports) {

module.exports = "\r\n.sidebar-wrap {\r\n\r\n    position: fixed;\r\n\r\n    top: 0;\r\n\r\n    left: 0;\r\n\r\n    bottom: 0;\r\n\r\n    width: 60px;\r\n\r\n    background-color: #2b303b;\r\n\r\n    color: #788195;\r\n\r\n}\r\n\r\n.sidebar-wrap .sidebar {\r\n\r\n    margin: 0;\r\n\r\n    padding: 0;\r\n\r\n    list-style: none;\r\n\r\n    font-size: 26px;\r\n\r\n}\r\n\r\n.sidebar-wrap .sidebar .sidebar-devider {\r\n\r\n    position: absolute;\r\n\r\n    bottom: 0;\r\n\r\n    left: 0;\r\n\r\n}\r\n\r\n.sidebar-wrap .sidebar li {\r\n\r\n    text-align: center;\r\n\r\n    cursor: pointer;\r\n\r\n    vertical-align: middle;\r\n\r\n    width: 60px;\r\n\r\n    height: 60px;\r\n\r\n    display: inline-block;\r\n\r\n    position: relative;\r\n\r\n    line-height: 70px;\r\n\r\n    outline: none;\r\n\r\n}\r\n\r\n.sidebar-wrap .sidebar li.is-active,\r\n.sidebar-wrap .sidebar li:hover {\r\n\r\n    color: #ffffff;\r\n\r\n}"

/***/ }),

/***/ 918:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _core = __webpack_require__(4);

var _alerts = __webpack_require__(152);

var _rxjs = __webpack_require__(96);

var _rxjs2 = _interopRequireDefault(_rxjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AlertsComponent = (_dec = (0, _core.Component)({

    selector: "alerts",

    template: __webpack_require__(919),

    styles: [__webpack_require__(920)]

}), _dec(_class = function () {
    function AlertsComponent(alertsService) {
        _classCallCheck(this, AlertsComponent);

        this._alertsService = alertsService;

        this.alerts = [];
    }

    _createClass(AlertsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
            var _this = this;

            this._alertsService.GetAlerts().subscribe(function (alert) {

                var id = _this.alerts.length;

                var type = alert.type,
                    message = alert.message,
                    isSuccess = alert.isSuccess,
                    isError = alert.isError;


                _this.alerts.push({ id: id, type: type, message: message, isSuccess: isSuccess, isError: isError });

                _rxjs2.default.Observable.of(_this.alerts).delay(5000).subscribe(function (x) {

                    _this.RemoveAlert(id);
                });
            });
        }
    }, {
        key: "RemoveAlert",
        value: function RemoveAlert(alertId) {

            this.alerts = this.alerts.filter(function (alert) {
                return alert.id != alertId;
            });
        }
    }]);

    return AlertsComponent;
}()) || _class);
Reflect.defineMetadata("design:paramtypes", [_alerts.AlertsService], AlertsComponent);
exports.default = AlertsComponent;

/***/ }),

/***/ 919:
/***/ (function(module, exports) {

module.exports = "\r\n<ul class=\"alerts\">\r\n\r\n    <li class=\"alerts__box\"\r\n        *ngFor=\"let alert of alerts\"\r\n        [ngClass]=\"{ 'alerts__box-success': alert.isSuccess, 'alerts__box-error': alert.isError }\"\r\n        (click)=\"RemoveAlert(alert.id);\">\r\n\r\n        {{ alert.message }}\r\n\r\n    </li>\r\n\r\n</ul>"

/***/ }),

/***/ 920:
/***/ (function(module, exports) {

module.exports = "\r\n.alerts { \r\n\r\n    position: absolute;\r\n\r\n    bottom: 0;\r\n\r\n    right: 10px;\r\n\r\n    list-style: none;\r\n\r\n    margin: 0;\r\n\r\n    padding: 0;\r\n\r\n}\r\n\r\n.alerts__box {\r\n\r\n    padding: 15px;\r\n\r\n    width: 350px;\r\n\r\n    margin: 10px 0;\r\n\r\n    background-color: #4279c0;\r\n\r\n    color: #ffffff;\r\n\r\n    font-size: 14px;\r\n\r\n    font-family: \"Roboto\";\r\n\r\n    font-weight: 500;\r\n    \r\n    line-height: 11px;\r\n\r\n    cursor: pointer;\r\n\r\n}\r\n\r\n.alerts__box-success {\r\n\r\n    background-color: #0b9b57;\r\n\r\n}\r\n\r\n.alerts__box-error {\r\n\r\n    background-color: #ca5252;\r\n\r\n}"

/***/ })

},[871]);