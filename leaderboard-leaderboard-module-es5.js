function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leaderboard-leaderboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/leaderboard/leaderboard.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/leaderboard/leaderboard.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLeaderboardLeaderboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Leaderboard\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Leaderboard</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-img src=\"assets/Winners_at_War_Logo.png\" style=\"margin: 10px 40px 10px 40px;\"></ion-img>\n  <ion-card *ngFor=\"let player of players\">\n    <img [src]=\"'assets/players/' + player.imagePath\"\n      style=\"height:150px; width:150px; border-radius:10px; margin:10px auto 10px auto; display:block\" />\n    <ion-card-header>\n      <ion-card-subtitle>Score: {{getPlayerScore(player.playerId)}} points</ion-card-subtitle>\n      <ion-card-title>{{player.firstName}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor=\"let survivor of getPlayerSurvivors(player.playerId)\">\n          <ion-label>{{survivor.firstName}} {{survivor.lastName}} | {{getSurvivorScore(survivor)}} points</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/leaderboard/leaderboard.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/leaderboard/leaderboard.module.ts ***!
    \***************************************************/

  /*! exports provided: LeaderboardPageModule */

  /***/
  function srcAppLeaderboardLeaderboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaderboardPageModule", function () {
      return LeaderboardPageModule;
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


    var _leaderboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./leaderboard.page */
    "./src/app/leaderboard/leaderboard.page.ts");
    /* harmony import */


    var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../explore-container/explore-container.module */
    "./src/app/explore-container/explore-container.module.ts");

    var LeaderboardPageModule = function LeaderboardPageModule() {
      _classCallCheck(this, LeaderboardPageModule);
    };

    LeaderboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _leaderboard_page__WEBPACK_IMPORTED_MODULE_6__["LeaderboardPage"]
      }])],
      declarations: [_leaderboard_page__WEBPACK_IMPORTED_MODULE_6__["LeaderboardPage"]]
    })], LeaderboardPageModule);
    /***/
  },

  /***/
  "./src/app/leaderboard/leaderboard.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/leaderboard/leaderboard.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLeaderboardLeaderboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content ion-toolbar {\n  --background: translucent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hucG90dHMvcHJvamVjdHMvc3Vydml2b3ItYnJhY2tldC9zcmMvYXBwL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IGlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc2x1Y2VudDtcbn0iLCJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/leaderboard/leaderboard.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/leaderboard/leaderboard.page.ts ***!
    \*************************************************/

  /*! exports provided: LeaderboardPage */

  /***/
  function srcAppLeaderboardLeaderboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaderboardPage", function () {
      return LeaderboardPage;
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


    var _services_players_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/players.service */
    "./src/app/services/players.service.ts");
    /* harmony import */


    var _services_survivors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/survivors.service */
    "./src/app/services/survivors.service.ts");
    /* harmony import */


    var _services_scoring_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/scoring.service */
    "./src/app/services/scoring.service.ts");

    var LeaderboardPage =
    /*#__PURE__*/
    function () {
      function LeaderboardPage(playersService, survivorsService, scoringService) {
        _classCallCheck(this, LeaderboardPage);

        this.playersService = playersService;
        this.survivorsService = survivorsService;
        this.scoringService = scoringService;
        this.players = [];
        this.survivors = [];
        this.scores = [];
      }

      _createClass(LeaderboardPage, [{
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
            console.log(scores);
            _this.scores = scores;

            _this.players.sort(function (player1, player2) {
              return _this.getPlayerScore(player2.playerId) - _this.getPlayerScore(player1.playerId);
            });
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
        key: "getSurvivorScore",
        value: function getSurvivorScore(survivor) {
          return this.scores.filter(function (score) {
            return score.survivorId === survivor.survivorId;
          }).reduce(function (totalValue, score) {
            return totalValue += score.value;
          }, 0);
        }
      }, {
        key: "getPlayerScore",
        value: function getPlayerScore(playerId) {
          var _this2 = this;

          return this.getPlayerSurvivors(playerId).reduce(function (totalScore, survivor) {
            return totalScore += _this2.getSurvivorScore(survivor);
          }, 0);
        }
      }]);

      return LeaderboardPage;
    }();

    LeaderboardPage.ctorParameters = function () {
      return [{
        type: _services_players_service__WEBPACK_IMPORTED_MODULE_2__["PlayersService"]
      }, {
        type: _services_survivors_service__WEBPACK_IMPORTED_MODULE_3__["SurvivorsService"]
      }, {
        type: _services_scoring_service__WEBPACK_IMPORTED_MODULE_4__["ScoringService"]
      }];
    };

    LeaderboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-leaderboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./leaderboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/leaderboard/leaderboard.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./leaderboard.page.scss */
      "./src/app/leaderboard/leaderboard.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_players_service__WEBPACK_IMPORTED_MODULE_2__["PlayersService"], _services_survivors_service__WEBPACK_IMPORTED_MODULE_3__["SurvivorsService"], _services_scoring_service__WEBPACK_IMPORTED_MODULE_4__["ScoringService"]])], LeaderboardPage);
    /***/
  }
}]);
//# sourceMappingURL=leaderboard-leaderboard-module-es5.js.map