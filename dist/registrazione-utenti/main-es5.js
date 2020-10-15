function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n\n\n <app-header></app-header>\n\n  <main>\n    <router-outlet></router-outlet>\n\n\n\n  </main>\n\n\n\n  <!--\n\n\n  <div class=\"footer\" >\n    <div class=\"footer-copyright text-center py-3 \">© 2020 Copyright:\n      <a class=\"\" href=\"https://mdbootstrap.com/\"> mywebsite.com</a>\n    </div>\n  </div>\n\n\n  -->\n\n\n\n\n\n\n\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\" navbar navbar-expand-md navbar-dark bg-dark p-0\">\n\n  <div  data-toggle=\"collapse\" data-target=\".navbar-collapse.show\" >\n    <a class=\"navbar-brand ml-md-5 p-4\" routerLink=\"/home\" routerLinkActive=\"just_apply\">Home</a>\n\n  </div>\n\n\n  <button class=\"navbar-toggler mr-1\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\">\n    <span class=\"icon-bar top-bar\"></span>\n    <span class=\"icon-bar middle-bar\"></span>\n    <span class=\"icon-bar bottom-bar\"></span>\t\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav ml-auto \">\n      <li class=\"nav-item mt-1 mt-md-0   active\"  data-toggle=\"collapse\" data-target=\".navbar-collapse.show\" *ngIf=\"userIsAuthenticated\">\n        <a class=\"nav-link pl-5 pt-3 pb-3 p-md-5\"  routerLink=\"/myaccount\" routerLinkActive=\"just_apply\">MyArea</a>\n      </li>\n      <li class=\" nav-item mt-1 mt-md-0   active\"  data-toggle=\"collapse\" data-target=\".navbar-collapse.show\" *ngIf=\"userIsAuthenticated && userIsAdmin\">\n        <a class=\"nav-link pl-5 pt-3 pb-3  p-md-5\"  routerLink=\"/admin\" routerLinkActive=\"just_apply\">Admin</a>\n      </li>\n      <li class=\"nav-item mt-1 mt-md-0    active\" data-toggle=\"collapse\" data-target=\".navbar-collapse.show\" *ngIf=\"!userIsAuthenticated\">\n        <a class=\"nav-link pl-5 pt-3 pb-3 p-md-5\"   routerLink=\"/registrati\" routerLinkActive=\"just_apply\">Register</a>\n      </li>\n      <li class=\"nav-item mt-1 ml-3  mt-md-0 ml-md-3 mr-md-5  active\"  data-toggle=\"collapse\" data-target=\".navbar-collapse.show\" *ngIf=\"!userIsAuthenticated\">\n        <a class=\"pt-4 pb-4 p-md-5  btn btn-sm btn-link mt-1 button__logout\" routerLink=\"/login\">Login</a>\n      </li>\n      <li class=\"nav-item mt-1 ml-3  mt-md-0 ml-md-3 mr-md-5 \"  data-toggle=\"collapse\" data-target=\".navbar-collapse.show\" *ngIf=\"userIsAuthenticated\">\n        <button class=\"p-4 p-md-5 btn btn-sm btn-link mt-1 button__logout\" (click)=\"onLogout()\">Logout</button>\n      </li>\n    </ul>\n  </div>\n\n</nav>\n\n\n\n\n\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n\n  <!--Grid row-->\n  <div class=\"row d-flex justify-content-center\">\n  \n    <!--Grid column-->\n    <div class=\"col-md-6\">\n  \n      <p class=\"h1 m-4 text-center\">My Beautiful Home-Page </p>\n  \n      <div class=\"embed-responsive embed-responsive-16by9 hoverable\">\n        <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/fa3Iczgh8Ok\" style=\"height: 101%\"\n          allowfullscreen></iframe>\n      </div>\n  \n    </div>\n    <!--Grid column-->\n  \n  </div>\n  <!--Grid row-->\n\n\n\n\n\n  <div class=\"container mt-5\">\n\n\n\n\n <!-- Button to Open the Modal -->\n <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n  Open modal\n</button>\n\n  \n\n<!-- The Modal -->\n<div class=\"modal fade\" id=\"myModal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n    \n      <!-- Modal Header -->\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal Heading</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      \n      <!-- Modal body -->\n      <div class=\"modal-body\">\n        Modal body..\n      </div>\n      \n      <!-- Modal footer -->\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n      </div>\n      \n    </div>\n  </div>\n</div>\n\n\n\n\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n\n<div class=\"row login mx-md-auto \">\n \n \n  <div class=\"col p-5 mt-4 mt-md-5\">\n\n  \n    <div class=\"card rounded_border_all\">\n      <div class=\"card-header  text-center text-white rounded_border_top header_color\">\n        <i class='fas fa-id-badge' style='font-size:28px;color:white'></i>\n      </div>\n      <div class=\"card-body p-4\">\n\n        <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Email address</label>\n            <input type=\"email\" class=\"form-control rounded_border_all\" aria-describedby=\"emailHelp\"\n              placeholder=\"Enter email\" name=\"email\" #emailInput=\"ngModel\" ngModel>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"exampleInputPassword1\">Password</label>\n            <input type=\"password\" class=\"form-control form-control-sm rounded_border_all\" placeholder=\"Password\" name=\"password\"\n              #passwordInput='ngModel' ngModel>\n              <small *ngIf=\"!emailOrPassword \" id=\"emailHelp\" class=\"form-text text-danger\">Email o Password errati!</small>\n          </div>\n          <br>\n          <button type=\"submit\" class=\"btn btn-sm p-2 button button_hover rounded_border_all  btn-block\"><span>Login</span></button>\n        </form>\n\n      </div>\n    \n\n    </div>\n  </div>\n\n\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/myaccount/myaccount.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myaccount/myaccount.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyaccountMyaccountComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n\n\n\n\n\n\n<div class=\"container  mt-2 mt-md-5\">\n\n\n\n<h6 class=\"text-center color_title mt-0 mb-0\">\n  My info\n</h6>\n\n\n\n<div class=\"row align-items-center p-3 mt-md-5\">\n\n\n\n  <div class=\"col \" *ngIf=\"user?.autorizzato\">\n    <img class=\" ml-md-auto  mx-auto d-block\" src=\"{{user?.qrCode}}\" alt=\"\" style=\"width: 130px; height: 130px;\">\n  </div>\n\n\n  <div class=\"col mt-4\">\n\n    <div class=\"h5__content\">\n      <h5 class=\"ml-5\"> <strong>Nome: </strong> {{user?.nome}} </h5>\n      <h5 class=\"ml-5\"> <strong>Cognome: </strong> {{user?.cognome}}</h5>\n      <h5 class=\"ml-5\"> <strong>C.F: </strong> {{user?.cf}} </h5>\n      <h5 class=\"ml-5\"> <strong>Età: </strong> {{user?.eta}} </h5>\n      <h5 class=\"ml-5\"> <strong>Telefono: </strong> {{user?.telefono}} </h5>\n      <h5 class=\"ml-5\"> <strong>Email: </strong> {{user?.email}} </h5>\n      <h5 class=\"ml-5\"> <strong>QR code: </strong> {{user?.autorizzato ? \"Presente\" : \"Non ancora disponibile\"}}  </h5>\n      <h5 class=\"ml-5\"> <strong>Autorizzato: </strong> {{user?.autorizzato ? \"Si\" : \"In attesa...\"}}  </h5>\n    </div>\n  </div>\n\n\n\n\n</div>\n\n\n\n\n</div>\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserListUserListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container \">\n\n\n\n  <div class=\"row mb-5\">\n    <div class=\"col col-sm-0 col-0 col-md-1\"></div>\n\n\n    <div class=\"col col-sm-12 col-12 col-md-10\">\n\n      <div class=\"search\">\n\n\n        <div class=\"input-group input-group-sm p-4\">\n          <input type=\"text\" class=\"form-control rounded_border_all \" placeholder=\"Cerca un utente\"\n            [(ngModel)]=\"search\">\n        </div>\n\n\n\n\n\n        <div class=\"row  \">\n\n          <div class=\"col col-1 col-md-4\"></div>\n\n          <div class=\"col px-0 mx-0\">\n\n            <div class=\"form-check-inline\">\n              <label class=\"form-check-label\" for=\"radio0\">\n                <input type=\"radio\" class=\"form-check-input with-gap\" name=\"1\" id=\"1\" [value]=\"0\" [(ngModel)]=\"flag\"\n                 (click)=\"onCheckBoxSearAll()\">All\n              </label>\n            </div>\n            <div class=\"form-check-inline\">\n              <label class=\"form-check-label\" for=\"radio1\">\n                <input type=\"radio\" class=\"form-check-input with-gap\" name=\"2\" id=\"2\" [value]=\"1\" [(ngModel)]=\"flag\" \n                 (click)=\"onCheckBoxSearPending()\">Pending\n              </label>\n            </div>\n            <div class=\"form-check-inline\">\n              <label class=\"form-check-label\" for=\"radio2\">\n                <input type=\"radio\" class=\"form-check-input with-gap\" name=\"3\" id=\"3\" [value]=\"2\" [(ngModel)]=\"flag\" \n                (click)=\"onCheckBoxSearchAutorizzati()\">Autoriz\n              </label>\n            </div>\n            <div class=\"form-check-inline\" for=\"radio3\">\n              <label class=\"form-check-label\">\n                <input type=\"radio\" class=\"form-check-input with-gap\"  name=\"4\" id=\"4\" [value]=\"3\" [(ngModel)]=\"flag\" \n                (click)=\"onCheckBoxSearchArrivati()\">Arrivati\n              </label>\n            </div>\n\n          </div>\n\n        </div>\n\n\n\n      </div>\n\n\n      <div [ngClass]=\"{'apply_collapse': users.length > 8}\">\n\n        <div class=\"card p-0 \" *ngFor=\"let user of onFilterUser(); let i = index\">\n\n\n          <a class=\"p-2  colore_header\" data-toggle=\"collapse\" href=\"#List-{{ i }}\" aria-expanded=\"false\">\n\n            <div class=\"row\">\n              <div class=\"col col-10 col-md-11 text-center pl-5\">\n                {{user.nome}} {{user.cognome}}\n              </div>\n              <div class=\"col col-2 col-md-1 ml-0  pl-0 \">\n                <!-- Pending -->\n                <span class=\"input-group-text py-1 \" *ngIf=\"!user?.autorizzato && !user?.arrivato\">\n                  <i class=\"fas fa-lock mx-auto  \">\n                  </i>\n                </span>\n                <!-- Non arrivato -->\n                <span class=\"input-group-text py-1 \" *ngIf=\"user?.autorizzato && !user?.arrivato\">\n                  <i class=\"fas fa-barcode mx-auto  \">\n                  </i>\n                </span>\n                <!-- Arrivato -->\n                <span class=\"input-group-text py-1 \" *ngIf=\"user?.autorizzato && user?.arrivato\">\n                  <i class=\"fas fa-check mx-auto  \">\n                  </i>\n                </span>\n              </div>\n            </div>\n          </a>\n\n\n          <div id=\"List-{{ i }}\" [ngClass]=\"{'collapse': body_expand }\">\n            <div class=\"card-body\">\n\n\n              <div class=\"row \">\n\n                <div class=\"col col-0 col-md-3\">\n\n                </div>\n\n                <div class=\"col \">\n                  <img src=\"{{user?.qrCode}}\" alt=\"\" style=\"width: 125px; height: 125px;\">\n                </div>\n\n\n\n                <div class=\"col mt-5\">\n                  <form [formGroup]=\"form\" (change)=\"onUserAuthorization(user)\" class=\"mb-3\">\n                    <div class=\"form-check\">\n                      <input class=\"form-check-input\" [checked]=\"user?.autorizzato\" formControlName=\"authCheckbox\"\n                        type=\"checkbox\">\n                      <label class=\"form-check-label\" for=\"defaultCheck1\">\n                        Autorizzato\n                      </label>\n                    </div>\n                  </form>\n\n                  <form [formGroup]=\"formArrived\" (change)=\"onUserArrived(user)\">\n                    <div class=\"form-check\" *ngIf=\"user?.autorizzato\">\n                      <input class=\"form-check-input\" [checked]=\"user?.arrivato\" formControlName=\"arrivedCheckbox\"\n                        type=\"checkbox\">\n                      <label class=\"form-check-label\" for=\"defaultCheck1\">\n                        Arrivato\n                      </label>\n                    </div>\n                  </form>\n\n                </div>\n\n              </div>\n\n              <div class=\"row \">\n\n                <div class=\"col col-0 col-md-3\">\n\n                </div>\n\n\n\n                <div class=\"col   mt-3 \">\n                  <h5> <small> <strong> C.F: </strong> {{user?.cf}} </small> </h5>\n                  <h5> <small> <strong> E-mail: </strong> {{user?.email}} </small> </h5>\n                  <h5> <small> <strong> Telefono: </strong> {{user?.telefono}} </small> </h5>\n                  <h5> <small> <strong> Età: </strong> {{user?.eta}} </small> </h5>\n                </div>\n\n\n\n\n\n                <div class=\"col mt-5\">\n\n                  <button class=\"btn btn-sm btn-danger rounded_border_all btn-rounded my-3\" type=\"submit\"\n                    (click)=\"onDeleteUser(user?._id)\">\n                    Delete user\n                  </button>\n                </div>\n\n              </div>\n\n\n\n\n\n\n            </div>\n          </div>\n\n\n        </div>\n\n      </div>\n\n\n    </div>\n    <div class=\"col col-sm-0 col-0 col-md-1\"></div>\n  </div>\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user-registration/user-registration.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-registration/user-registration.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserRegistrationUserRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container p-md-2 \">\n\n\n  <div class=\"row  mt-md-5  d-none d-sm-block \">\n    <div class=\"col text-center \">\n      <h3 class=\"title_text_color\"><b>Form Di Registrazione </b>   </h3>\n    </div>\n  </div>\n\n\n  <div class=\"row p-md-5 p-0 mt-2\">\n    <div class=\"col\">\n\n      <div class=\"card  colorbody\">\n        <div class=\"card-header text-center header_register   \">Register</div>\n        <div class=\"card-body card_head colorbody p-4\">\n\n\n          <form [formGroup]=\"form\" (submit)=\"onUserRegistration()\" class=\"needs-validation was-validated\" >\n\n            <div class=\"form-group\">\n\n              <div class=\"input-group input-group-md \">\n                <div class=\"input-group-prepend \">\n                  <span class=\"input-group-text  rounded_border_all\">\n                    <i class=\"fas fa-user\"></i>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control rounded_border_all form-control-sm\" formControlName=\"nome\"\n                  placeholder=\"Il tuo nome\">\n              </div>\n              <small *ngIf=\"form.get('nome').invalid && (form.get('nome').dirty || form.get('nome').touched) \"\n                class=\"ml-5 form-text text-danger\">Campo obbligatorio *</small>\n            </div>\n\n\n\n            <div class=\"form-group\">\n          \n              <div class=\"input-group input-group-md\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text rounded_border_all\">\n                    <i class=\"fas fa-user\">\n                    </i>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control form-control-sm rounded_border_all\" placeholder=\"Il tuo cognome\"\n                  formControlName=\"cognome\" >\n              </div>\n              <small *ngIf=\"form.get('cognome').invalid && (form.get('cognome').dirty || form.get('cognome').touched)\"\n                class=\"ml-5 form-text text-danger\">Campo obbligatorio *</small>\n            </div>\n\n\n\n            <div class=\"form-group\">\n            \n              <div class=\"input-group input-group-md\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text rounded_border_all\">\n                    <i class=\"far fa-address-card\"></i>\n                  </span>\n                </div>\n                <input type=\"text\" class=\"form-control form-control-sm rounded_border_all\" placeholder=\"Il tuo C.F\" formControlName=\"cf\"\n                  >\n              </div>\n              <small *ngIf=\"(form.get('cf').invalid && ( form.get('cf').touched))\"\n                class=\"ml-5 form-text text-danger\">Valore non corretto *</small>\n            </div>\n\n\n\n            <div class=\"form-group\">\n           \n              <div class=\"input-group input-group-md\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text rounded_border_all\">\n                    <i class=\"fas fa-info\">\n                    </i>\n                  </span>\n                </div>\n                <input type=\"number\" class=\"form-control form-control-sm rounded_border_all\" placeholder=\"La tua età\"\n                  formControlName=\"eta\">\n              </div>\n              <small *ngIf=\"form.get('eta').invalid && (form.get('eta').dirty || form.get('eta').touched)\"\n                class=\"ml-5 form-text text-danger\">Età minore di 18 *</small>\n            </div>\n\n            <div class=\"form-group\">\n         \n              <div class=\"input-group input-group-md\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text rounded_border_all\">\n                    <i class=\"fas fa-phone-square\"></i>\n                  </span>\n                </div>\n                <input type=\"tel\" class=\"form-control form-control-sm rounded_border_all\" placeholder=\"Numero di telefono\"\n                  formControlName=\"telefono\">\n              </div>\n              <small\n                *ngIf=\"form.get('telefono').invalid && (form.get('telefono').dirty || form.get('telefono').touched)\"\n                class=\"ml-5 form-text text-danger\">Campo obbligatorio *</small>\n            </div>\n\n\n\n            <div class=\"form-group\">\n    \n              <div class=\"input-group input-group-md\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text rounded_border_all\">\n                    <i class=\"fa fa-envelope-square\">\n                    </i>\n                  </span>\n                </div>\n                <input type=\"email\" class=\"form-control form-control-sm rounded_border_all\" placeholder=\"La tua email\" autocomplete=\"email\"\n                  formControlName=\"email\" >\n              </div>\n              <small *ngIf=\"form.get('email').invalid && (form.get('email').dirty || form.get('email').touched)\"\n                class=\"ml-5 form-text text-danger\">Campo obbligatorio *</small>\n            </div>\n\n\n            <div class=\"form-group\">\n           \n              <div class=\"input-group input-group-md\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text rounded_border_all\">\n                    <i class=\"fas fa-key\">\n                    </i>\n                  </span>\n                </div>\n                <input type=\"password\" class=\"form-control form-control-sm rounded_border_all\" placeholder=\"Nuova password\"\n                  autocomplete=\"current-password\" formControlName=\"nuovaPassword\">\n              </div>\n              <small\n                *ngIf=\"form.get('nuovaPassword').invalid && (form.get('nuovaPassword').dirty || form.get('nuovaPassword').touched)\"\n                class=\"ml-5 form-text text-danger\">Inserire almeno 6 caratteri *</small>\n            </div>\n\n\n            <div class=\"form-group\">\n\n              <div class=\"input-group input-group-md\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text rounded_border_all\">\n                    <i class=\"fas fa-key\">\n                    </i>\n                  </span>\n                </div>\n                <input type=\"password\" class=\"form-control form-control-sm rounded_border_all\" placeholder=\"Ripeti password\"\n                  autocomplete=\"current-password\" formControlName=\"password\">\n              </div>\n              <small\n                *ngIf=\"form.get('password').value !==  form.get('nuovaPassword').value && form.get('password').dirty\"\n                class=\"ml-5 form-text text-danger\">Password non corrispondente *</small>\n            </div>\n\n            <button *ngIf=\"!hideButton\" class=\"btn btn-outline-primary rounded_border_all btn-rounded btn-block my-4\" type=\"submit\"\n              [disabled]=\"!form.valid\">Registrami</button>\n\n            <div *ngIf=\"hideButton\" class=\"alert alert-success alert-dismissible\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n              <strong>Success!</strong> Registrazione andata a buon fine! Adesso puoi effettuare il Login\n              <button class=\"btn btn-sm btn-primary rounded_border_all\" routerLink=\"/login\" > Login </button>\n            </div>\n\n            <div *ngIf=\"userExsist\"  class=\"alert alert-danger alert-dismissible\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>\n              <strong>Errore!</strong> Utente già registrato con la e-mail fornita. Inserire un'altra e-mail!\n            </div>\n\n          </form>\n\n\n        </div>\n\n      </div>\n\n\n    </div>\n\n\n    <div class=\"col \">\n\n\n      <div class=\"card mt-3 mt-md-0\">\n        <div class=\"card-header  text-center header_register \">Area Informazioni</div>\n        <div class=\"card-body colorbody \">\n\n\n          <p class=\"font-italic small p-2\">\n            Questa pagina permette la registrazione di un utente. Con la registrazione effettuata verranno informati gli\n            amministratori della richiesta di registrazione , i quali provvederanno\n            con la generazione e l'assegnazione del proprio codice QR.\n            Dopo la registrazione, nel frattempo sarà possibile effettuare il login con la propria Email\n            e la Password fornita. Una volta effettuato il login è possibile visitare la propria area utente dove verrà\n            mostrato lo stato\n            della registrazione. Solo dopo la conferma di un utente amministratore sarà possibile visualizzare il codice\n            QR nella propria area utente.\n            La notifica dell'assegnazione del codice QR avverrà mediante Email fornita nella registrazione.\n          </p>\n\n\n\n\n          <div class=\"card-deck mt-4\">\n            <div class=\"card bg-light\">\n              <div class=\"card-body \">\n                <strong>\n                  <p class=\"card-text text-center pb-4\">I Dati Della Registrazione</p>\n                </strong>\n\n\n                <h6> <small> <strong>Nome:</strong> {{user?.nome}} </small> </h6>\n                <h6> <small> <strong>Cognome:</strong> {{user?.cognome}} </small> </h6>\n                <h6> <small> <strong>C.F:</strong> {{user?.cf}} </small> </h6>\n                <h6> <small> <strong>Età:</strong> {{user?.eta}} </small> </h6>\n                <h6> <small> <strong>Telefono:</strong> {{user?.telefono}} </small> </h6>\n                <h6> <small> <strong>Email:</strong> {{user?.email}} </small> </h6>\n                <h6> <small> <strong>QR code:</strong> Non ancora disponibile </small> </h6>\n                <h6> <small> <strong>Autorizzato:</strong> In attesa... </small> </h6>\n\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n\n\n\n      </div>\n\n\n\n    </div>\n  </div>\n\n\n\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user-registration/user-registration.component */
    "./src/app/user-registration/user-registration.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./myaccount/myaccount.component */
    "./src/app/myaccount/myaccount.component.ts");
    /* harmony import */


    var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-list/user-list.component */
    "./src/app/user-list/user-list.component.ts");
    /* harmony import */


    var _login_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/auth.guard */
    "./src/app/login/auth.guard.ts");
    /* harmony import */


    var _login_auth_guardA__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/auth.guardA */
    "./src/app/login/auth.guardA.ts");

    var routes = [{
      path: "*",
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
      pathMatch: "full"
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]
    }, {
      path: 'myaccount',
      component: _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_6__["MyaccountComponent"],
      canActivate: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'registrati',
      component: _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_3__["UserRegistrationComponent"]
    }, {
      path: 'admin',
      component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"],
      canActivate: [_login_auth_guardA__WEBPACK_IMPORTED_MODULE_9__["AuthGuardA"]]
    }, {
      path: 'admin/:id',
      component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"],
      canActivate: [_login_auth_guardA__WEBPACK_IMPORTED_MODULE_9__["AuthGuardA"]]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
      providers: [_login_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"], _login_auth_guardA__WEBPACK_IMPORTED_MODULE_9__["AuthGuardA"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n   @media (max-width: 390px) {\n    .footer {\n        display: none;\n    }\n}\n\n\n\n     .footer {\n        position: fixed;\n        left: 0;\n        bottom: 0;\n        width: 100%;\n        background-color: steelblue;\n        color: white;\n        text-align: center;\n        padding-top: 13px ;\n        padding-bottom: 3px ;\n      }\n\n\n\n     .footer a {\n          color: #20c997;\n      }\n    \n    \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0dBR0c7SUFDQztRQUNJLGFBQWE7SUFDakI7QUFDSjs7OztLQUlLO1FBQ0csZUFBZTtRQUNmLE9BQU87UUFDUCxTQUFTO1FBQ1QsV0FBVztRQUNYLDJCQUEyQjtRQUMzQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQixvQkFBb0I7TUFDdEI7Ozs7S0FJQTtVQUNJLGNBQWM7TUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbiAgIEBtZWRpYSAobWF4LXdpZHRoOiAzOTBweCkge1xuICAgIC5mb290ZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuXG5cbiAgICAgLmZvb3RlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogc3RlZWxibHVlO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDEzcHggO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogM3B4IDtcbiAgICAgIH1cbiAgICBcblxuXG4gICAgICAuZm9vdGVyIGEge1xuICAgICAgICAgIGNvbG9yOiAjMjBjOTk3O1xuICAgICAgfVxuICAgIFxuICAgICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/user.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(userService) {
        _classCallCheck(this, AppComponent);

        this.userService = userService;
        this.title = 'registrazione-utenti';
        this.data = new Date();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userService.autoAuthUser();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-registration/user-registration.component */
    "./src/app/user-registration/user-registration.component.ts");
    /* harmony import */


    var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-list/user-list.component */
    "./src/app/user-list/user-list.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _login_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login/auth-interceptor */
    "./src/app/login/auth-interceptor.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./myaccount/myaccount.component */
    "./src/app/myaccount/myaccount.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _user_registration_user_registration_component__WEBPACK_IMPORTED_MODULE_6__["UserRegistrationComponent"], _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_7__["UserListComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_11__["MyaccountComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]],
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"],
        useClass: _login_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n\n\n#altro {\n    height: 600px;\n    width: 100%;\n    background: url('freedom.jpg');\n    color: white;\n}\n\n\n.main-header {\n    width: 100%;\n    background-color: #2ddf5c;\n    padding: 8px 16px;\n   \n}\n\n\n.main-header > div {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n\n.main-header__brand {\n    color: #0e4f1f;\n    text-decoration: none;\n    font-weight: bold;\n    font-size: 22px;\n\n}\n\n\n.main-nav {\n    display: inline-block;  \n    text-align: right;\n    width: calc(100% - 165px);\n    vertical-align: middle;\n}\n\n\n.main-nav__items{\n    margin: 0;\n    padding: 0 ;\n    list-style: none ;\n}\n\n\n.main-nav__item {\n    display: inline-block;\n    margin: 0 16px;\n}\n\n\n.main-nav__item a {\n    text-decoration: none;\n    color: #0e4f1f;\n    font-weight: bold;\npadding: 3px 0;\n}\n\n\n#my-area {\n    display: inline-block;\n    margin: 0 20px;\n    text-decoration: none;\n    color: #0e4f1f;\n    font-weight: bold;\npadding: 3px 0;\n}\n\n\n#my-area:hover,\n#my-area:active{\n    color: white;\nborder-bottom: 3px solid white;\n}\n\n\n.main-nav__item a:hover,\n.main-nav__item a:active  {\ncolor: white;\nborder-bottom: 3px solid white;\n}\n\n\n.main-nav__item-cta a{\n   color: white;\n   background-color: #ff1b68;\n   padding: 8px 12px;\n   border-radius: 8px;\n}\n\n\n.main-nav__item-cta a:hover,\n.main-nav__item-cta a:active{\n    color: #ff1b68;\n    background: white;\n    border: none;\n}\n\n\n/*\nNAVBAR\n*/\n\n\n.bg-dark {\n    background-color: #0e4071!important;\n}\n\n\n.button__logout{\n    color:  springgreen;\n}\n\n\n.button__logout:hover,\n.button__logout:active{\n    color: #ff1b68;\n}\n\n\n.navbar-brand:hover{\n    color: springgreen;\n}\n\n\n.navbar-dark .navbar-nav .nav-link:hover,\n.navbar-dark .navbar-nav .nav-link:active  {\n    color: springgreen;\n    font-size: 14px;\n    font-weight: bold;\n    border-bottom: 5px solid springgreen;\n    background-color: gray;\n}\n\n\n/*\nNAVBAR\n*/\n\n\n.just_apply{\n    color: springgreen;\n    font-size: 14px;\n    font-weight: bold;\n    border-bottom: 5px solid springgreen;\n \n}\n\n\n/*\nICON MENU\n*/\n\n\n.icon-bar {\n\twidth: 22px; \n\theight: 2px;\n\tbackground-color: white;\n\tdisplay: block;\n\ttransition: all 0.2s;\n\tmargin-top: 4px\n}\n\n\n.navbar-toggler {\n  border: none;\n  background: transparent !important;\n}\n\n\n.navbar-toggler .top-bar {\n    transform: rotate(45deg);\n    transform-origin: 10% 10%;\n  }\n\n\n.navbar-toggler .middle-bar {\n    opacity: 0;\n  }\n\n\n.navbar-toggler .bottom-bar {\n    transform: rotate(-45deg);\n    transform-origin: 10% 90%;\n  }\n\n\n.navbar-toggler.collapsed .top-bar {\n    transform: rotate(0);\n  }\n\n\n.navbar-toggler.collapsed .middle-bar {\n    opacity: 1;\n  }\n\n\n.navbar-toggler.collapsed .bottom-bar {\n    transform: rotate(0);\n  }\n\n\n/*\n/ICON MENU\n*/\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBS0E7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDhCQUEyQztJQUMzQyxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsaUJBQWlCOztBQUVyQjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7O0FBRW5COzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQixjQUFjO0FBQ2Q7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQixjQUFjO0FBQ2Q7OztBQUVBOztJQUVJLFlBQVk7QUFDaEIsOEJBQThCO0FBQzlCOzs7QUFLQTs7QUFFQSxZQUFZO0FBQ1osOEJBQThCO0FBQzlCOzs7QUFNQTtHQUNHLFlBQVk7R0FDWix5QkFBeUI7R0FDekIsaUJBQWlCO0dBQ2pCLGtCQUFrQjtBQUNyQjs7O0FBRUE7O0lBRUksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOzs7QUFHQTs7Q0FFQzs7O0FBQ0Q7SUFDSSxtQ0FBbUM7QUFDdkM7OztBQUdBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTs7SUFFSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBR0E7O0lBRUksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0NBQW9DO0lBQ3BDLHNCQUFzQjtBQUMxQjs7O0FBQ0E7O0NBRUM7OztBQUVEO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsb0NBQW9DOztBQUV4Qzs7O0FBR0E7O0NBRUM7OztBQUdDO0NBQ0QsV0FBVztDQUNYLFdBQVc7Q0FDWCx1QkFBdUI7Q0FDdkIsY0FBYztDQUNkLG9CQUFvQjtDQUNwQjtBQUNEOzs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQ0FBa0M7QUFDcEM7OztBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLHlCQUF5QjtFQUMzQjs7O0FBRUE7SUFDRSxVQUFVO0VBQ1o7OztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjs7O0FBRUE7SUFDRSxvQkFBb0I7RUFDdEI7OztBQUVBO0lBQ0UsVUFBVTtFQUNaOzs7QUFFQTtJQUNFLG9CQUFvQjtFQUN0Qjs7O0FBRUE7O0NBRUQiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cblxuI2FsdHJvIHtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9mcmVlZG9tLmpwZ1wiKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuLm1haW4taGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRkZjVjO1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgXG59XG5cbi5tYWluLWhlYWRlciA+IGRpdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tYWluLWhlYWRlcl9fYnJhbmQge1xuICAgIGNvbG9yOiAjMGU0ZjFmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIycHg7XG5cbn1cblxuLm1haW4tbmF2IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICBcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTY1cHgpO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tYWluLW5hdl9faXRlbXN7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmUgO1xufVxuXG4ubWFpbi1uYXZfX2l0ZW0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAgMTZweDtcbn1cblxuLm1haW4tbmF2X19pdGVtIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzBlNGYxZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbnBhZGRpbmc6IDNweCAwO1xufVxuXG4jbXktYXJlYSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMCAyMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzBlNGYxZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbnBhZGRpbmc6IDNweCAwO1xufVxuXG4jbXktYXJlYTpob3ZlcixcbiNteS1hcmVhOmFjdGl2ZXtcbiAgICBjb2xvcjogd2hpdGU7XG5ib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XG59IFxuXG5cblxuXG4ubWFpbi1uYXZfX2l0ZW0gYTpob3Zlcixcbi5tYWluLW5hdl9faXRlbSBhOmFjdGl2ZSAge1xuY29sb3I6IHdoaXRlO1xuYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHdoaXRlO1xufVxuXG5cblxuXG5cbi5tYWluLW5hdl9faXRlbS1jdGEgYXtcbiAgIGNvbG9yOiB3aGl0ZTtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmZjFiNjg7XG4gICBwYWRkaW5nOiA4cHggMTJweDtcbiAgIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLm1haW4tbmF2X19pdGVtLWN0YSBhOmhvdmVyLFxuLm1haW4tbmF2X19pdGVtLWN0YSBhOmFjdGl2ZXtcbiAgICBjb2xvcjogI2ZmMWI2ODtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cblxuLypcbk5BVkJBUlxuKi9cbi5iZy1kYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGU0MDcxIWltcG9ydGFudDtcbn1cblxuXG4uYnV0dG9uX19sb2dvdXR7XG4gICAgY29sb3I6ICBzcHJpbmdncmVlbjtcbn1cblxuLmJ1dHRvbl9fbG9nb3V0OmhvdmVyLFxuLmJ1dHRvbl9fbG9nb3V0OmFjdGl2ZXtcbiAgICBjb2xvcjogI2ZmMWI2ODtcbn1cblxuLm5hdmJhci1icmFuZDpob3ZlcntcbiAgICBjb2xvcjogc3ByaW5nZ3JlZW47XG59XG5cblxuLm5hdmJhci1kYXJrIC5uYXZiYXItbmF2IC5uYXYtbGluazpob3Zlcixcbi5uYXZiYXItZGFyayAubmF2YmFyLW5hdiAubmF2LWxpbms6YWN0aXZlICB7XG4gICAgY29sb3I6IHNwcmluZ2dyZWVuO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgc3ByaW5nZ3JlZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cbi8qXG5OQVZCQVJcbiovXG5cbi5qdXN0X2FwcGx5e1xuICAgIGNvbG9yOiBzcHJpbmdncmVlbjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIHNwcmluZ2dyZWVuO1xuIFxufVxuXG5cbi8qXG5JQ09OIE1FTlVcbiovXG5cblxuICAuaWNvbi1iYXIge1xuXHR3aWR0aDogMjJweDsgXG5cdGhlaWdodDogMnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHRyYW5zaXRpb246IGFsbCAwLjJzO1xuXHRtYXJnaW4tdG9wOiA0cHhcbn1cbiBcbi5uYXZiYXItdG9nZ2xlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuXG4ubmF2YmFyLXRvZ2dsZXIgLnRvcC1iYXIge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMCUgMTAlO1xuICB9XG4gICBcbiAgLm5hdmJhci10b2dnbGVyIC5taWRkbGUtYmFyIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gICBcbiAgLm5hdmJhci10b2dnbGVyIC5ib3R0b20tYmFyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwJSA5MCU7XG4gIH1cbiAgIFxuICAubmF2YmFyLXRvZ2dsZXIuY29sbGFwc2VkIC50b3AtYmFyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAgXG4gIC5uYXZiYXItdG9nZ2xlci5jb2xsYXBzZWQgLm1pZGRsZS1iYXIge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgIFxuICAubmF2YmFyLXRvZ2dsZXIuY29sbGFwc2VkIC5ib3R0b20tYmFyIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuXG4gIC8qXG4vSUNPTiBNRU5VXG4qL1xuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(userService, router) {
        _classCallCheck(this, HeaderComponent);

        this.userService = userService;
        this.router = router; //

        this.userIsAuthenticated = false;
        this.userIsAdmin = false;
      }

      _createClass(HeaderComponent, [{
        key: "onLogout",
        value: function onLogout() {
          this.userService.logOut();
          this.router.navigate(["/home"]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.userIsAuthenticated = this.userService.getIsAuth();
          this.authListenerSubs = this.userService.getAuthStatusListener().subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
          });
          this.userSub = this.userService.getCurrentUserUpdateListener().subscribe(function (user_) {
            _this.userIsAdmin = user_.admin;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authListenerSubs.unsubscribe();
          this.userSub.unsubscribe();
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n\n\n\n\n\n#product-overview {\n    background: url('freedom.jpg');\n    width: 100%;\n    height: 528px;\n    padding: 10px;   \n}\n\n\n.main-header {\n    width: 100%;\n    background-color: #2ddf5c;\n    padding: 8px 16px;\n   \n}\n\n\n.main-header > div {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n\n.main-header__brand {\n    color: #0e4f1f;\n    text-decoration: none;\n    font-weight: bold;\n    font-size: 22px;\n\n}\n\n\n.main-nav {\n    display: inline-block;  \n    text-align: right;\n    width: calc(100% - 75px);\n    vertical-align: middle;\n}\n\n\n.main-nav__items{\n    margin: 0;\n    padding: 0 ;\n    list-style: none ;\n}\n\n\n.main-nav__item {\n    display: inline-block;\n    margin: 0 16px;\n}\n\n\n.main-nav__item a {\n    text-decoration: none;\n    color: #0e4f1f;\n    font-weight: bold;\npadding: 3px 0;\nvertical-align: middle;\n}\n\n\n.main-nav__item a:hover,\n.main-nav__item a:active  {\ncolor: white;\nborder-bottom: 3px solid white;\n}\n\n\n.main-nav__item-cta a{\n   color: white;\n   background-color: #ff1b68;\n   padding: 8px 16px;\n   border-radius: 8px;\n}\n\n\n.main-nav__item-cta a:hover,\n.main-nav__item-cta a:active{\n    color: #ff1b68;\n    background: white;\n    border: none;\n}\n\n\n/*\npLan \n*/\n\n\n.plan{\n    background: #d5ffdc;\n    text-align: center;\n    padding: 16px;\n    margin: 8px;\n    display: inline-block;\n    width: 30%;\n}\n\n\n.plan--highlited{\n    background: #19b84c;\n    color: white;\n    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);\n}\n\n\n.plan__annotation{\n    background: white;\n    color: #19b84c;\n    padding: 8px;\n    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);\n    border-radius: 4px;\n}\n\n\n.plan__features{\nlist-style: none;\npadding: 0;\nmargin: 0;\n}\n\n\n.plan__feature{\n margin: 8px 0;\n}\n\n\n.plan--highlited .plan__title {\n    color: white;\n}\n\n\n.plan__price {\n    color: #0e4f1f;\n}\n\n\n.button {\n    background:#0e4f1f ;\n    color: white;\n    font: inherit;\n    border: 1.5px solid #0e4f1f;\n    padding: 8px;\n    border-radius: 8px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n\n.button:hover,\n.button:active\n{\nbackground: white;\ncolor:  #0e4f1f;\n}\n\n\n.button:focus{\n    outline: none;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFRQTtJQUNJLDhCQUEyQztJQUMzQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixpQkFBaUI7O0FBRXJCOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZUFBZTs7QUFFbkI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCOzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCLGNBQWM7QUFDZCxzQkFBc0I7QUFDdEI7OztBQUtBOztBQUVBLFlBQVk7QUFDWiw4QkFBOEI7QUFDOUI7OztBQUtBO0dBQ0csWUFBWTtHQUNaLHlCQUF5QjtHQUN6QixpQkFBaUI7R0FDakIsa0JBQWtCO0FBQ3JCOzs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7OztBQUlBOztDQUVDOzs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osMkNBQTJDO0FBQy9DOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxrQkFBa0I7QUFDdEI7OztBQUdBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFVBQVU7QUFDVixTQUFTO0FBQ1Q7OztBQUVBO0NBQ0MsYUFBYTtBQUNkOzs7QUFNQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVDO0lBQ0csY0FBYztBQUNsQjs7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7O0FBRUE7OztBQUdBLGlCQUFpQjtBQUNqQixlQUFlO0FBQ2Y7OztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5cblxuXG5cbiNwcm9kdWN0LW92ZXJ2aWV3IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvZnJlZWRvbS5qcGdcIik7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MjhweDtcbiAgICBwYWRkaW5nOiAxMHB4OyAgIFxufVxuXG5cbi5tYWluLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkZGY1YztcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgIFxufVxuXG4ubWFpbi1oZWFkZXIgPiBkaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubWFpbi1oZWFkZXJfX2JyYW5kIHtcbiAgICBjb2xvcjogIzBlNGYxZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuXG59XG5cbi5tYWluLW5hdiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDc1cHgpO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5tYWluLW5hdl9faXRlbXN7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDAgO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmUgO1xufVxuXG4ubWFpbi1uYXZfX2l0ZW0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAgMTZweDtcbn1cblxuLm1haW4tbmF2X19pdGVtIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzBlNGYxZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbnBhZGRpbmc6IDNweCAwO1xudmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuXG5cblxuLm1haW4tbmF2X19pdGVtIGE6aG92ZXIsXG4ubWFpbi1uYXZfX2l0ZW0gYTphY3RpdmUgIHtcbmNvbG9yOiB3aGl0ZTtcbmJvcmRlci1ib3R0b206IDNweCBzb2xpZCB3aGl0ZTtcbn1cblxuXG5cblxuLm1haW4tbmF2X19pdGVtLWN0YSBhe1xuICAgY29sb3I6IHdoaXRlO1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMWI2ODtcbiAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ubWFpbi1uYXZfX2l0ZW0tY3RhIGE6aG92ZXIsXG4ubWFpbi1uYXZfX2l0ZW0tY3RhIGE6YWN0aXZle1xuICAgIGNvbG9yOiAjZmYxYjY4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuXG5cbi8qXG5wTGFuIFxuKi9cblxuLnBsYW57XG4gICAgYmFja2dyb3VuZDogI2Q1ZmZkYztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBtYXJnaW46IDhweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMwJTtcbn1cblxuLnBsYW4tLWhpZ2hsaXRlZHtcbiAgICBiYWNrZ3JvdW5kOiAjMTliODRjO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgwLDAsMCwwLjUpO1xufVxuXG4ucGxhbl9fYW5ub3RhdGlvbntcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBjb2xvcjogIzE5Yjg0YztcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cblxuLnBsYW5fX2ZlYXR1cmVze1xubGlzdC1zdHlsZTogbm9uZTtcbnBhZGRpbmc6IDA7XG5tYXJnaW46IDA7XG59XG5cbi5wbGFuX19mZWF0dXJle1xuIG1hcmdpbjogOHB4IDA7XG59XG5cblxuXG5cblxuLnBsYW4tLWhpZ2hsaXRlZCAucGxhbl9fdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuIC5wbGFuX19wcmljZSB7XG4gICAgY29sb3I6ICMwZTRmMWY7XG59XG5cbi5idXR0b24ge1xuICAgIGJhY2tncm91bmQ6IzBlNGYxZiA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCAjMGU0ZjFmO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnV0dG9uOmhvdmVyLFxuLmJ1dHRvbjphY3RpdmVcbntcbmJhY2tncm91bmQ6IHdoaXRlO1xuY29sb3I6ICAjMGU0ZjFmO1xufVxuXG4uYnV0dG9uOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cblxuXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/auth-interceptor.ts":
  /*!*******************************************!*\
    !*** ./src/app/login/auth-interceptor.ts ***!
    \*******************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppLoginAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor(userService) {
        _classCallCheck(this, AuthInterceptor);

        this.userService = userService;
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var authToken = this.userService.getToken();
          var authRequest = req.clone({
            headers: req.headers.set('Authorization', "Bearer " + authToken)
          });
          return next.handle(authRequest);
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/login/auth.guard.ts":
  /*!*************************************!*\
    !*** ./src/app/login/auth.guard.ts ***!
    \*************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppLoginAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(userService, router) {
        _classCallCheck(this, AuthGuard);

        this.userService = userService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var isAuth = this.userService.getIsAuth();

          if (!isAuth) {
            this.router.navigate(["/login"]);
          }

          return isAuth;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthGuard);
    /***/
  },

  /***/
  "./src/app/login/auth.guardA.ts":
  /*!**************************************!*\
    !*** ./src/app/login/auth.guardA.ts ***!
    \**************************************/

  /*! exports provided: AuthGuardA */

  /***/
  function srcAppLoginAuthGuardATs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuardA", function () {
      return AuthGuardA;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthGuardA = /*#__PURE__*/function () {
      function AuthGuardA(userService, router) {
        _classCallCheck(this, AuthGuardA);

        this.userService = userService;
        this.router = router; // check if admin

        this.userService.getOneUser(localStorage.getItem('email'));
      }

      _createClass(AuthGuardA, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userService.getOneUser(localStorage.getItem('email'));
        }
      }, {
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this2 = this;

          var isAuth = this.userService.getIsAuth();

          if (!isAuth) {
            this.router.navigate(["/login"]);
            return false;
          } // check if admin


          this.userService.getOneUser(localStorage.getItem('email'));
          return this.userService.getCurrentUserUpdateListener().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (e) {
            if (e.admin) {
              return true;
            } else {
              _this2.router.navigate(["/myaccount"]);

              return false;
            }
          }));
        }
      }]);

      return AuthGuardA;
    }();

    AuthGuardA.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    AuthGuardA = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()], AuthGuardA);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n   @media (min-width: 390px) {\n    .login {\n       width: 440px;\n       margin-top: 200px;\n    }\n}\n\n\n\n.rounded_border_top {\n    border-top-left-radius: 12px;\n    border-top-right-radius: 12px;\n}\n\n\n\n.rounded_border_bottom {\n    border-bottom-left-radius: 12px;\n    border-bottom-right-radius: 12px;\n}\n\n\n\n.rounded_border_all {\n    border-radius: 18px;\n}\n\n\n\n.button_coloro {\n    background-color: steelblue;\n    color: white;\n}\n\n\n\n.header_color{\n    background-color: steelblue;\n}\n\n\n\n.button_hover:hover,\n.button_hover:active{\n    color: white;\n    background: #0e4071;\n    border: none;\n}\n\n\n\n.button {\n    display: inline-block;\n    border-radius: 4px;\n    background-color: steelblue;\n    border: none;\n    color: #FFFFFF;\n    text-align: center;\n    border-radius: 16px;\n    transition: all 0.5s;\n    cursor: pointer;\n \n  }\n\n\n\n.button span {\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    transition: 0.5s;\n  }\n\n\n\n.button span:after {\n    content: '\\00bb';\n    position: absolute;\n    opacity: 0;\n    top: 0;\n    right: -20px;\n    transition: 0.5s;\n  }\n\n\n\n.button:hover span {\n    padding-right: 25px;\n  }\n\n\n\n.button:hover span:after {\n    opacity: 1;\n    right: 0;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztHQUVHO0lBQ0M7T0FDRyxZQUFZO09BQ1osaUJBQWlCO0lBQ3BCO0FBQ0o7Ozs7QUFJQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7Ozs7QUFHQTtJQUNJLCtCQUErQjtJQUMvQixnQ0FBZ0M7QUFDcEM7Ozs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7OztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7Ozs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7OztBQUlBOztJQUVJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7OztBQU9BO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixlQUFlOztFQUVqQjs7OztBQUVBO0lBQ0UsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOzs7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixNQUFNO0lBQ04sWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7OztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOzs7O0FBRUE7SUFDRSxVQUFVO0lBQ1YsUUFBUTtFQUNWIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICBAbWVkaWEgKG1pbi13aWR0aDogMzkwcHgpIHtcbiAgICAubG9naW4ge1xuICAgICAgIHdpZHRoOiA0NDBweDtcbiAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgICB9XG59XG5cblxuXG4ucm91bmRlZF9ib3JkZXJfdG9wIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuXG5cbi5yb3VuZGVkX2JvcmRlcl9ib3R0b20ge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XG59XG5cbi5yb3VuZGVkX2JvcmRlcl9hbGwge1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG59XG5cbi5idXR0b25fY29sb3JvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzdGVlbGJsdWU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVhZGVyX2NvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcbn1cblxuXG5cbi5idXR0b25faG92ZXI6aG92ZXIsXG4uYnV0dG9uX2hvdmVyOmFjdGl2ZXtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogIzBlNDA3MTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cblxuXG5cblxuXG4uYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHN0ZWVsYmx1ZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuIFxuICB9XG4gIFxuICAuYnV0dG9uIHNwYW4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG4gIH1cbiAgXG4gIC5idXR0b24gc3BhbjphZnRlciB7XG4gICAgY29udGVudDogJ1xcMDBiYic7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAtMjBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIFxuICAuYnV0dG9uOmhvdmVyIHNwYW4ge1xuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gIH1cbiAgXG4gIC5idXR0b246aG92ZXIgc3BhbjphZnRlciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICByaWdodDogMDtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(userService, router) {
        _classCallCheck(this, LoginComponent);

        this.userService = userService;
        this.router = router;
        this.emailOrPassword = true;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.authListenerSubs = this.userService.getAuthStatusListener().subscribe(function (isAuthenticated) {
            _this3.emailOrPassword = isAuthenticated;

            if (!_this3.emailOrPassword) {
              _this3.router.navigate(["/login"]);

              _this3.form.reset();
            } else {
              _this3.router.navigate(["/admin"]);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.authListenerSubs.unsubscribe();
        }
      }, {
        key: "onLogin",
        value: function onLogin(form) {
          this.form = form;
          this.userService.login(form.value.email, form.value.password);
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/myaccount/myaccount.component.css":
  /*!***************************************************!*\
    !*** ./src/app/myaccount/myaccount.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyaccountMyaccountComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n\n\n\nh5{\n    font-size: 0.75em;\n    \n} \n\n.title__myarea{\n   \n        background: white;\n        color: #19b84c;\n        padding: 8px;\n        box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);\n        border-radius: 4px;\n    } \n\n.color_title{\n        color: #0e4071 ;\n        background: white;\n        padding: 12px;\n        box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);\n        border-radius: 4px;\n        font-weight: bold;\n    }\n\n\n\n\n    \n    \n    \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlhY2NvdW50L215YWNjb3VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BO0lBQ0ksaUJBQWlCOztBQUVyQjs7QUFFQTs7UUFFUSxpQkFBaUI7UUFDakIsY0FBYztRQUNkLFlBQVk7UUFDWiwyQ0FBMkM7UUFDM0Msa0JBQWtCO0lBQ3RCOztBQUlBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsMkNBQTJDO1FBQzNDLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckIiLCJmaWxlIjoic3JjL2FwcC9teWFjY291bnQvbXlhY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cblxuXG5oNXtcbiAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICBcbn0gXG5cbi50aXRsZV9fbXlhcmVhe1xuICAgXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBjb2xvcjogIzE5Yjg0YztcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCAycHggcmdiYSgwLDAsMCwwLjUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG5cblxuICAgIC5jb2xvcl90aXRsZXtcbiAgICAgICAgY29sb3I6ICMwZTQwNzEgO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggMnB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cblxuXG5cbiAgICBcbiAgICBcbiAgICBcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/myaccount/myaccount.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/myaccount/myaccount.component.ts ***!
    \**************************************************/

  /*! exports provided: MyaccountComponent */

  /***/
  function srcAppMyaccountMyaccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyaccountComponent", function () {
      return MyaccountComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");

    var MyaccountComponent = /*#__PURE__*/function () {
      function MyaccountComponent(userService) {
        _classCallCheck(this, MyaccountComponent);

        this.userService = userService;
        this.today = new Date();
        this.user = null;
      }

      _createClass(MyaccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          if (this.userService.getIsAuth()) {
            this.userService.getOneUser(localStorage.getItem('email'));
          }

          this.userSub = this.userService.getCurrentUserUpdateListener().subscribe(function (user_) {
            _this4.user = user_;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
        }
      }]);

      return MyaccountComponent;
    }();

    MyaccountComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    MyaccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-myaccount',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./myaccount.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/myaccount/myaccount.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./myaccount.component.css */
      "./src/app/myaccount/myaccount.component.css"))["default"]]
    })], MyaccountComponent);
    /***/
  },

  /***/
  "./src/app/user-list/user-list.component.css":
  /*!***************************************************!*\
    !*** ./src/app/user-list/user-list.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserListUserListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n.rounded_border_all {\n  border-radius: 18px;\n  border-width: 2px;\n}\n\n\n\n\n.rounded_border_button {\nborder-radius: 8px;\nborder-width: 2px;\n}\n\n\n\n\n.anyClass {\n  height:300px;\n  overflow-y: scroll;\n}\n\n\n\n\n.div_wrapper {\n  padding: 50px 50px 50px 50px;\n}\n\n\n\n\n@media (max-width: 390px) {\n  h5{\n    font-size: 0.9em;\n  }  \n}\n\n\n\n\n.apply_collapse {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  height:340px;\n\n}\n\n\n\n\n.body_content{\n\nborder-radius: 18px;\nborder-width: 5px;\nborder-color: red;\n}\n\n\n\n\n.search{\nmargin: 8px 0;\nbackground: rgba(190, 180, 180, 0.116);\npadding: 8px;\nbox-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);\nborder-radius: 4px;\n}\n\n\n\n\n.colore_header{\nbackground-color: #0e4071;\ncolor: white;\n\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COzs7OztBQUtBO0FBQ0Esa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQjs7Ozs7QUFNQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7Ozs7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7Ozs7O0FBR0E7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtBQUNGOzs7OztBQUtBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZOztBQUVkOzs7OztBQUVBOztBQUVBLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCOzs7OztBQUdBO0FBQ0EsYUFBYTtBQUNiLHNDQUFzQztBQUN0QyxZQUFZO0FBQ1osMkNBQTJDO0FBQzNDLGtCQUFrQjtBQUNsQjs7Ozs7QUFJQTtBQUNBLHlCQUF5QjtBQUN6QixZQUFZOztBQUVaIiwiZmlsZSI6InNyYy9hcHAvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5yb3VuZGVkX2JvcmRlcl9hbGwge1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbn1cblxuXG5cblxuLnJvdW5kZWRfYm9yZGVyX2J1dHRvbiB7XG5ib3JkZXItcmFkaXVzOiA4cHg7XG5ib3JkZXItd2lkdGg6IDJweDtcbn1cblxuXG5cblxuXG4uYW55Q2xhc3Mge1xuICBoZWlnaHQ6MzAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmRpdl93cmFwcGVyIHtcbiAgcGFkZGluZzogNTBweCA1MHB4IDUwcHggNTBweDtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogMzkwcHgpIHtcbiAgaDV7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgfSAgXG59XG5cblxuXG5cbi5hcHBseV9jb2xsYXBzZSB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBoZWlnaHQ6MzQwcHg7XG5cbn1cblxuLmJvZHlfY29udGVudHtcblxuYm9yZGVyLXJhZGl1czogMThweDtcbmJvcmRlci13aWR0aDogNXB4O1xuYm9yZGVyLWNvbG9yOiByZWQ7XG59XG5cblxuLnNlYXJjaHtcbm1hcmdpbjogOHB4IDA7XG5iYWNrZ3JvdW5kOiByZ2JhKDE5MCwgMTgwLCAxODAsIDAuMTE2KTtcbnBhZGRpbmc6IDhweDtcbmJveC1zaGFkb3c6IDJweCAycHggMnB4IDJweCByZ2JhKDAsMCwwLDAuNSk7XG5ib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cblxuXG4uY29sb3JlX2hlYWRlcntcbmJhY2tncm91bmQtY29sb3I6ICMwZTQwNzE7XG5jb2xvcjogd2hpdGU7XG5cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/user-list/user-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/user-list/user-list.component.ts ***!
    \**************************************************/

  /*! exports provided: UserListComponent */

  /***/
  function srcAppUserListUserListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListComponent", function () {
      return UserListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserListComponent = /*#__PURE__*/function () {
      function UserListComponent(userService, cdRef, route, router) {
        _classCallCheck(this, UserListComponent);

        this.userService = userService;
        this.cdRef = cdRef;
        this.route = route;
        this.router = router;
        this.users = [];
        this.today = new Date();
        this.body_expand = true; // flag: any;

        this.search = "";
        this.condition = "all";
        this.userId = "";
      }

      _createClass(UserListComponent, [{
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.cdRef.detectChanges();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          if (this.route.snapshot.params['id'] !== undefined) {
            this.userId = this.route.snapshot.params['id'];
          }

          if (this.search == "") this.condition = "all";
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'authCheckbox': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            })
          });
          this.formArrived = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'arrivedCheckbox': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            })
          }); // Charges all the user

          this.userService.getUsers();
          this.userSub = this.userService.getUsersUpdateListener().subscribe(function (users) {
            _this5.users = users;
          });
        }
      }, {
        key: "onCheckBoxSearPending",
        value: function onCheckBoxSearPending() {
          this.condition = "pending";

          if (this.userId !== "") {
            this.router.navigate(['/admin']);
          }
        }
      }, {
        key: "onCheckBoxSearchAutorizzati",
        value: function onCheckBoxSearchAutorizzati() {
          this.condition = "autorizzati";

          if (this.userId !== "") {
            this.router.navigate(['/admin']);
          }
        }
      }, {
        key: "onCheckBoxSearchArrivati",
        value: function onCheckBoxSearchArrivati() {
          this.condition = "arrivati";

          if (this.userId !== "") {
            this.router.navigate(['/admin']);
          }
        }
      }, {
        key: "onCheckBoxSearAll",
        value: function onCheckBoxSearAll() {
          this.condition = "all";

          if (this.userId !== "") {
            this.router.navigate(['/admin']);
          }
        }
        /**
         *
         */

      }, {
        key: "onFilterUser",
        value: function onFilterUser() {
          var _this6 = this;

          // qrCode pars
          if (this.userId !== "") {
            this.body_expand = false;
            return this.users.filter(function (u) {
              return u._id === _this6.userId;
            });
          } // Se ho iniziato a scrivere


          if (this.search !== "") {
            // ricerca solo in pending
            if (this.condition === "pending") {
              return this.users.filter(function (u) {
                return u.autorizzato === false && (u.nome.trim().toLowerCase() == _this6.search.trim().toLowerCase() || u.nome.toLowerCase().startsWith(_this6.search.trim().toLowerCase()) || u.cognome.trim().toLowerCase() == _this6.search.trim().toLowerCase() || u.cognome.toLowerCase().startsWith(_this6.search.trim().toLowerCase()));
              });
            } // ricerca solo in autorizzati
            else if (this.condition === "autorizzati") {
                return this.users.filter(function (u) {
                  return u.autorizzato === true && (u.nome.trim().toLowerCase() == _this6.search.trim().toLowerCase() || u.nome.toLowerCase().startsWith(_this6.search.trim().toLowerCase()) || u.cognome.trim().toLowerCase() == _this6.search.trim().toLowerCase() || u.cognome.toLowerCase().startsWith(_this6.search.trim().toLowerCase()));
                });
              } // ricerca solo in arrivati
              else if (this.condition === "arrivati") {
                  return this.users.filter(function (u) {
                    return u.arrivato === true && (u.nome.trim().toLowerCase() == _this6.search.trim().toLowerCase() || u.nome.toLowerCase().startsWith(_this6.search.trim().toLowerCase()) || u.cognome.trim().toLowerCase() == _this6.search.trim().toLowerCase() || u.cognome.toLowerCase().startsWith(_this6.search.trim().toLowerCase()));
                  });
                } // ricerca in tutti
                else {
                    return this.users.filter(function (u) {
                      return u.nome.trim().toLowerCase() == _this6.search.trim().toLowerCase() || u.nome.toLowerCase().startsWith(_this6.search.trim().toLowerCase()) || u.cognome.trim().toLowerCase() == _this6.search.trim().toLowerCase() || u.cognome.toLowerCase().startsWith(_this6.search.trim().toLowerCase());
                    });
                  }
          }

          if (this.condition === "all") return this.users;

          if (this.condition === "pending") {
            return this.users.filter(function (x) {
              return !x.autorizzato;
            });
          }

          if (this.condition === "autorizzati") {
            return this.users.filter(function (x) {
              return x.autorizzato && !x.arrivato;
            });
          }

          if (this.condition === "arrivati") {
            return this.users.filter(function (x) {
              return x.autorizzato && x.arrivato;
            });
          }
        } // Only subscribe from the userService

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
        }
      }, {
        key: "onUserAuthorization",
        value: function onUserAuthorization(user) {
          user.autorizzato = this.form.value.authCheckbox;
          this.userService.userUpdateAuth(user); // this.form.value.authCheckbox = true
        }
      }, {
        key: "onUserArrived",
        value: function onUserArrived(user) {
          user.arrivato = this.formArrived.value.arrivedCheckbox;
          user.autorizzato = null;
          this.userService.userUpdateAuth(user);
          this.router.navigate(['/admin']);
        }
      }, {
        key: "onDeleteUser",
        value: function onDeleteUser(_id) {
          this.userService.deleteUser(_id);
        }
      }]);

      return UserListComponent;
    }();

    UserListComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-list/user-list.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-list.component.css */
      "./src/app/user-list/user-list.component.css"))["default"]]
    })], UserListComponent);
    /***/
  },

  /***/
  "./src/app/user-registration/user-registration.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/user-registration/user-registration.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserRegistrationUserRegistrationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n.title_text_color{\n    color: #1C4071;\n}\n\n\n.colorbody{\n    background-color: beige;\n}\n\n\n.header_register {\ncolor: springgreen;\n    background-color: #1C4071;\n}\n\n\n.rounded_border_top {\n    border-top-left-radius: 12px;\n    border-top-right-radius: 12px;\n}\n\n\n.rounded_border_bottom {\n    border-bottom-left-radius: 12px;\n    border-bottom-right-radius: 12px;\n}\n\n\n.rounded_border_all {\n    border-radius: 12px;\n\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1yZWdpc3RyYXRpb24vdXNlci1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLHVCQUF1QjtBQUMzQjs7O0FBR0E7QUFDQSxrQkFBa0I7SUFDZCx5QkFBeUI7QUFDN0I7OztBQU1BO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQzs7O0FBR0E7SUFDSSwrQkFBK0I7SUFDL0IsZ0NBQWdDO0FBQ3BDOzs7QUFFQTtJQUNJLG1CQUFtQjs7QUFFdkIiLCJmaWxlIjoic3JjL2FwcC91c2VyLXJlZ2lzdHJhdGlvbi91c2VyLXJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGl0bGVfdGV4dF9jb2xvcntcbiAgICBjb2xvcjogIzFDNDA3MTtcbn1cblxuXG4uY29sb3Jib2R5e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xufVxuXG5cbi5oZWFkZXJfcmVnaXN0ZXIge1xuY29sb3I6IHNwcmluZ2dyZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxQzQwNzE7XG59XG5cblxuXG5cblxuLnJvdW5kZWRfYm9yZGVyX3RvcCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cblxuXG4ucm91bmRlZF9ib3JkZXJfYm90dG9tIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMnB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMnB4O1xufVxuXG4ucm91bmRlZF9ib3JkZXJfYWxsIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuXG59XG5cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/user-registration/user-registration.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/user-registration/user-registration.component.ts ***!
    \******************************************************************/

  /*! exports provided: UserRegistrationComponent */

  /***/
  function srcAppUserRegistrationUserRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRegistrationComponent", function () {
      return UserRegistrationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user.service.ts");

    var UserRegistrationComponent = /*#__PURE__*/function () {
      function UserRegistrationComponent(userService) {
        _classCallCheck(this, UserRegistrationComponent);

        this.userService = userService;
        this.user = null;
        this.hideButton = false;
        this.userExsist = false;
      }

      _createClass(UserRegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'nome': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            //
            'cognome': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            //
            'cf': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(16)]
            }),
            //
            'eta': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(18)]
            }),
            //
            'telefono': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            //
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }),
            //
            'nuovaPassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]
            }),
            //
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
              validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            })
          });
          this.userSub = this.userService.getCurrentUserUpdateListener().subscribe(function (user_) {
            if (user_ !== null) {
              _this7.user = user_;
              _this7.hideButton = true;

              _this7.form.reset();
            } else {
              _this7.user = null;
              _this7.userExsist = true;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.userSub.unsubscribe();
        }
        /**
         * Only registers an user
         */

      }, {
        key: "onUserRegistration",
        value: function onUserRegistration() {
          if (!this.form.valid) {
            return;
          }

          console.log(this.form);
          var formValue = this.form.value;
          var user = {
            _id: null,
            nome: formValue.nome,
            cognome: formValue.cognome,
            cf: formValue.cf.toUpperCase(),
            eta: formValue.eta,
            telefono: formValue.telefono,
            email: formValue.email,
            password: formValue.password,
            qrCode: null,
            admin: false,
            autorizzato: false,
            arrivato: false
          };
          this.userService.addUser(user);
        }
      }]);

      return UserRegistrationComponent;
    }();

    UserRegistrationComponent.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }];
    };

    UserRegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-registration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user-registration/user-registration.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-registration.component.css */
      "./src/app/user-registration/user-registration.component.css"))["default"]]
    })], UserRegistrationComponent);
    /***/
  },

  /***/
  "./src/app/user.service.ts":
  /*!*********************************!*\
    !*** ./src/app/user.service.ts ***!
    \*********************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http, router) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.router = router;
        this.urlUser = "http://18.192.194.134/api/user/";
        this.users = [];
        this.usersUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.userUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.isAuthenticated = false;
      }

      _createClass(UserService, [{
        key: "map",
        value: function map(arg0) {
          throw new Error("Method not implemented.");
        }
      }, {
        key: "getIsAuth",
        value: function getIsAuth() {
          return this.isAuthenticated;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.token;
        }
      }, {
        key: "getCurrentUserUpdateListener",
        value: function getCurrentUserUpdateListener() {
          return this.userUpdated.asObservable();
        }
      }, {
        key: "getUsersUpdateListener",
        value: function getUsersUpdateListener() {
          return this.usersUpdated.asObservable();
        }
      }, {
        key: "getAuthStatusListener",
        value: function getAuthStatusListener() {
          return this.authStatusListener.asObservable();
        }
      }, {
        key: "autoAuthUser",
        value: function autoAuthUser() {
          var authInformation = this.getAuthData();

          if (!authInformation) {
            return;
          }

          var now = new Date();
          var expiresIn = authInformation.expirationDate.getTime() - now.getTime();

          if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
          }
        }
      }, {
        key: "setAuthTimer",
        value: function setAuthTimer(duration) {
          var _this8 = this;

          this.tokenTimer = setTimeout(function () {
            _this8.logOut();
          }, duration * 1000);
        }
      }, {
        key: "addUser",
        value: function addUser(user) {
          var _this9 = this;

          this.http.post(this.urlUser + "signup", user).subscribe(function (resultData) {
            var user_ = {
              _id: resultData.result._id,
              nome: resultData.result.nome,
              cognome: resultData.result.cognome,
              cf: resultData.result.cf,
              eta: resultData.result.eta,
              telefono: resultData.result.telefono,
              email: resultData.result.email,
              password: resultData.result.password,
              qrCode: resultData.result.qrCode,
              admin: resultData.result.admin,
              autorizzato: resultData.result.autorizzato,
              arrivato: resultData.arrivato
            };

            _this9.users.push(user_);

            _this9.usersUpdated.next(_toConsumableArray(_this9.users));

            var cloneUser = Object.assign({}, user_);
            cloneUser.qrCode = null;
            cloneUser.password = null;

            _this9.userUpdated.next(cloneUser);
          }, function (err) {
            if (err.status === 500) {
              _this9.userUpdated.next(null);
            }
          });
        }
      }, {
        key: "getOneUser",
        value: function getOneUser(email) {
          var _this10 = this;

          this.http.get(this.urlUser + "findme/" + email).subscribe(function (resultData) {
            _this10.currentUser = resultData.user;
            var cloneUser = Object.assign({}, _this10.currentUser);

            _this10.userUpdated.next(cloneUser);
          }, function (err) {});
        }
      }, {
        key: "getUsers",
        value: function getUsers() {
          var _this11 = this;

          this.http.get(this.urlUser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (userData) {
            return userData.posts.map(function (user) {
              return {
                _id: user._id,
                nome: user.nome,
                cognome: user.cognome,
                cf: user.cf,
                eta: user.eta,
                telefono: user.telefono,
                email: user.email,
                password: null,
                qrCode: user.qrCode,
                admin: user.admin,
                autorizzato: user.autorizzato,
                arrivato: user.arrivato
              };
            });
          })).subscribe(function (resultData) {
            _this11.users = resultData;

            _this11.usersUpdated.next(_toConsumableArray(_this11.users));
          });
        }
        /**
         * Cancella un utente data la mail
         * @param email
         */

      }, {
        key: "deleteUser",
        value: function deleteUser(userId) {
          var _this12 = this;

          this.http["delete"](this.urlUser + userId).subscribe(function () {
            var updatedUsers = _this12.users.filter(function (user) {
              return user._id !== userId;
            });

            _this12.users = updatedUsers;

            _this12.usersUpdated.next(_toConsumableArray(_this12.users));
          }, function (err) {
            alert("Utente " + userId + " non cancellato");
          });
        }
      }, {
        key: "userUpdateAuth",
        value: function userUpdateAuth(user) {
          var _this13 = this;

          this.http.put(this.urlUser + "puti", user).subscribe(function (response) {
            var updateUsers = _toConsumableArray(_this13.users);

            var oldUsersIndex = updateUsers.findIndex(function (u) {
              return u._id === user._id;
            });
            updateUsers[oldUsersIndex] = user;
            _this13.users = updateUsers;

            _this13.usersUpdated.next(_toConsumableArray(_this13.users)); //


            _this13.currentUser = user;
            var cloneUser = Object.assign({}, _this13.currentUser);

            _this13.userUpdated.next(cloneUser); //


            _this13.getUsers();
          });
        }
        /**
         * User login first time
         * @param email
         * @param password
         */

      }, {
        key: "login",
        value: function login(email, password) {
          var _this14 = this;

          var authData = {
            email: email,
            password: password
          };
          this.http.post(this.urlUser + "login", authData).subscribe(function (response) {
            if (response.token) {
              var expireInDuration = response.expiresIn;

              _this14.setAuthTimer(expireInDuration); //


              localStorage.setItem("email", email);
              _this14.isAuthenticated = true;
              _this14.token = response.token;

              _this14.saveAuthData(response.token, new Date(new Date().getTime() + expireInDuration * 1000));

              _this14.authStatusListener.next(true);
            }
          }, function (err) {
            if (err.status === 401) {
              //    alert("Email o Password sbagliata!")
              _this14.authStatusListener.next(false);
            }
          });
        }
        /**
         * User logout method
         */

      }, {
        key: "logOut",
        value: function logOut() {
          this.token = null;
          this.isAuthenticated = false;
          this.authStatusListener.next(false);
          clearTimeout(this.tokenTimer);
          this.clearAuthData();
        }
      }, {
        key: "saveAuthData",
        value: function saveAuthData(token, expirationDate) {
          localStorage.setItem('token', token);
          localStorage.setItem('expiration', expirationDate.toISOString());
        }
      }, {
        key: "clearAuthData",
        value: function clearAuthData() {
          localStorage.removeItem('token');
          localStorage.removeItem('expiration');
          localStorage.removeItem('email');
        }
        /**
         * Returns the user token and expiration
         */

      }, {
        key: "getAuthData",
        value: function getAuthData() {
          var token = localStorage.getItem("token");
          var expirationDate = localStorage.getItem("expiration");

          if (!token || !expirationDate) {
            return;
          }

          return {
            token: token,
            expirationDate: new Date(expirationDate)
          };
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/tomas/Desktop/dance_frontend/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map