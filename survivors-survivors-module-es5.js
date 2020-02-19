function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["survivors-survivors-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/survivors/survivors.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/survivors/survivors.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSurvivorsSurvivorsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header >\n  <ion-toolbar color=\"tertiary\">\n    <ion-title>\n      Survivors\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Survivors</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list *ngFor=\"let tribe of getTribeNames()\">\n    <ion-list-header>\n      {{tribe}}\n    </ion-list-header>\n    <ion-item *ngFor=\"let survivor of getSurvivorsOnTribe(tribe)\">\n      <ion-avatar slot=\"start\">\n        <img [src]=\"'assets/survivors/' + survivor.imagePath\">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{survivor.firstName}} {{survivor.lastName}}</h2>\n        <h3>{{survivor.tribe}}</h3>\n      </ion-label>\n    </ion-item>\n\n\n  </ion-list>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/survivors/survivors.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/survivors/survivors.module.ts ***!
    \***********************************************/

  /*! exports provided: SurvivorsPageModule */

  /***/
  function srcAppSurvivorsSurvivorsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurvivorsPageModule", function () {
      return SurvivorsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _survivors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./survivors.page */
    "./src/app/survivors/survivors.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var SurvivorsPageModule = function SurvivorsPageModule() {
      _classCallCheck(this, SurvivorsPageModule);
    };

    SurvivorsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _survivors_page__WEBPACK_IMPORTED_MODULE_6__["SurvivorsPage"]
      }])],
      declarations: [_survivors_page__WEBPACK_IMPORTED_MODULE_6__["SurvivorsPage"]]
    })], SurvivorsPageModule);
    /***/
  },

  /***/
  "./src/app/survivors/survivors.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/survivors/survivors.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSurvivorsSurvivorsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hucG90dHMvcHJvamVjdHMvc3Vydml2b3ItYnJhY2tldC9zcmMvYXBwL3N1cnZpdm9ycy9zdXJ2aXZvcnMucGFnZS5zY3NzIiwic3JjL2FwcC9zdXJ2aXZvcnMvc3Vydml2b3JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zdXJ2aXZvcnMvc3Vydml2b3JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn0iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/survivors/survivors.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/survivors/survivors.page.ts ***!
    \*********************************************/

  /*! exports provided: SurvivorsPage */

  /***/
  function srcAppSurvivorsSurvivorsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurvivorsPage", function () {
      return SurvivorsPage;
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


    var _services_survivors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/survivors.service */
    "./src/app/services/survivors.service.ts");
    /* harmony import */


    var _services_players_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/players.service */
    "./src/app/services/players.service.ts");
    /* harmony import */


    var _services_scoring_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/scoring.service */
    "./src/app/services/scoring.service.ts");

    var SurvivorsPage =
    /*#__PURE__*/
    function () {
      function SurvivorsPage(survivorsService, playersService, scoringService) {
        _classCallCheck(this, SurvivorsPage);

        this.survivorsService = survivorsService;
        this.playersService = playersService;
        this.scoringService = scoringService;
        this.survivors = [];
        this.players = [];
      }

      _createClass(SurvivorsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.playersService.players.subscribe(function (players) {
            return _this.players = players;
          });
          this.survivorsService.survivors.subscribe(function (survivors) {
            return _this.survivors = survivors;
          });
          this.scoringService.scores.subscribe(function (scores) {
            return _this.scores = scores;
          });
        }
      }, {
        key: "getPlayerSurvivors",
        value: function getPlayerSurvivors(playerId) {
          return this.survivors.filter(function (survivor) {
            return survivor.playerId === playerId;
          });
        }
      }, {
        key: "getTribeNames",
        value: function getTribeNames() {
          return this.survivors.reduce(function (namesArray, survivor) {
            !namesArray.includes(survivor.tribe) ? namesArray.push(survivor.tribe) : null;
            return namesArray;
          }, []);
        }
      }, {
        key: "getSurvivorsOnTribe",
        value: function getSurvivorsOnTribe(tribeName) {
          return this.survivors.filter(function (survivor) {
            return survivor.tribe === tribeName;
          });
        }
      }]);

      return SurvivorsPage;
    }();

    SurvivorsPage.ctorParameters = function () {
      return [{
        type: _services_survivors_service__WEBPACK_IMPORTED_MODULE_2__["SurvivorsService"]
      }, {
        type: _services_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"]
      }, {
        type: _services_scoring_service__WEBPACK_IMPORTED_MODULE_4__["ScoringService"]
      }];
    };

    SurvivorsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-survivors',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./survivors.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/survivors/survivors.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./survivors.page.scss */
      "./src/app/survivors/survivors.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_survivors_service__WEBPACK_IMPORTED_MODULE_2__["SurvivorsService"], _services_players_service__WEBPACK_IMPORTED_MODULE_3__["PlayersService"], _services_scoring_service__WEBPACK_IMPORTED_MODULE_4__["ScoringService"]])], SurvivorsPage);
    /***/
  }
}]);
//# sourceMappingURL=survivors-survivors-module-es5.js.map