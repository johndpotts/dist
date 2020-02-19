(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/expansion-panel/expansion-panel.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expansion-panel/expansion-panel.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #expandWrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\n  <ng-content></ng-content>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-title>\n      Scoring\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Scoring</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-button style=\"margin-top:16px;\" expand=\"full\" color=\"tertiary\" (click)=\"toggleScores()\">\n    <ion-icon \n    class=\"arrow-down\" [ngClass]=\"{'open': scoreExplanationsExpanded}\"\n    slot=\"start\" name=\"chevron-down-outline\">\n    </ion-icon>{{getScoringToggleTitle()}}</ion-button>\n  <app-expansion-panel expandHeight=\"600px\" [expanded]=\"scoreExplanationsExpanded\">\n    <ion-list>\n      <ion-item>\n        <ion-label>-3 for first boot</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>+1 for tribe/individual reward</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>+1 for tribe/individual immunity</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>+2 for finding an idol</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>+2 for finding an advantage</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>+2 for playing an idol/advantage correctly</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>-1 for playing an idol/advantage incorrectly (including voted out with the idol)</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>+1 for making the merge\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>+3 for coming in 3rd</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>+5 for coming in 2nd</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>+10 for winning the season</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>+1 for every vote you receive at the final tribal council</ion-label>\n      </ion-item>\n    </ion-list>\n  </app-expansion-panel>\n  <ion-text style=\"margin-top:16px;\" color=\"primary\">\n    <h2 style=\"text-align:center;\" >Record Score</h2>\n  </ion-text>\n\n  <ion-item>\n    <ion-label>Episode</ion-label>\n    <ion-select #firstSelection interface=\"popover\" (ionChange)=chooseEpisode($event.detail.value)>\n      <ion-select-option value=\"1\">1</ion-select-option>\n      <ion-select-option value=\"2\">2</ion-select-option>\n      <ion-select-option value=\"3\">3</ion-select-option>\n      <ion-select-option value=\"4\">4</ion-select-option>\n      <ion-select-option value=\"5\">5</ion-select-option>\n      <ion-select-option value=\"6\">6</ion-select-option>\n      <ion-select-option value=\"7\">7</ion-select-option>\n      <ion-select-option value=\"8\">8</ion-select-option>\n      <ion-select-option value=\"9\">9</ion-select-option>\n      <ion-select-option value=\"10\">10</ion-select-option>\n      <ion-select-option value=\"11\">11</ion-select-option>\n      <ion-select-option value=\"12\">12</ion-select-option>\n      <ion-select-option value=\"13\">13</ion-select-option>\n      <ion-select-option value=\"14\">14</ion-select-option>\n      <ion-select-option value=\"15\">15</ion-select-option>\n      <ion-select-option value=\"16\">16</ion-select-option>\n\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Tribe/Individual</ion-label>\n    <ion-select [disabled]=\"!firstSelection.value\"  #secondSelection interface=\"popover\" (ionChange)=chooseTribeOrInd($event.detail.value)>\n      <ion-select-option value=\"individual\">Individual</ion-select-option>\n      <ion-select-option value=\"tribe\">Tribe</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item *ngIf=\"!tribeScore\">\n    <ion-label>Choose Survivor</ion-label>\n    <ion-select interface=\"popover\" [disabled]=\"!secondSelection.value\" (ionChange)=chooseSurvivor($event.detail.value)>\n      <ion-select-option *ngFor=\"let survivor of survivors\" [value]=\"survivor.survivorId\">{{survivor.firstName}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf=\"tribeScore\">\n    <ion-label>Choose Tribe</ion-label>\n    <ion-select interface=\"popover\" [disabled]=\"!secondSelection.value\" (ionChange)=chooseTribe($event.detail.value)>\n      <ion-select-option *ngFor=\"let tribe of getTribes()\" [value]=\"tribe\">{{tribe}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n\n  <ion-item *ngIf=\"tribeScore\">\n    <ion-label>Choose Score Type</ion-label>\n    <ion-select interface=\"popover\" [disabled]=\"!selectedTribe\" \n    (ionChange)=chooseTribeScore($event.detail.value)>\n      <ion-select-option *ngFor=\"let score of getTribeScoreTypes()\" [value]='score'>{{score.type}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item *ngIf=\"!tribeScore\">\n    <ion-label>Choose Score Type</ion-label>\n    <ion-select interface=\"popover\" [disabled]=\"!selectedSurvivorId\"  (ionChange)=chooseIndividualScore($event.detail.value)>\n      <ion-select-option *ngFor=\"let score of getIndividualScoreTypes()\" [value]='score'>{{score.type}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n<div style=\"text-align:center;\">\n  <ion-button [disabled]=\"!individualScore && !tribeScores\" style=\"margin-top:16px;\" expand=\"medium\" color=\"primary\" (click)=\"submitScore()\">Submit</ion-button>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/expansion-panel/expansion-panel.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/expansion-panel/expansion-panel.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".expand-wrapper {\n  -webkit-transition: max-height 0.4s ease-in-out;\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hucG90dHMvcHJvamVjdHMvc3Vydml2b3ItYnJhY2tldC9zcmMvYXBwL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4cGFuc2lvbi1wYW5lbC9leHBhbnNpb24tcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtFQUFBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSx3QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZXhwYW5zaW9uLXBhbmVsL2V4cGFuc2lvbi1wYW5lbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbmQtd3JhcHBlciB7XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UtaW4tb3V0O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG4gIFxuICAuY29sbGFwc2VkIHtcbiAgICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH0iLCIuZXhwYW5kLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHMgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNvbGxhcHNlZCB7XG4gIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/expansion-panel/expansion-panel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/expansion-panel/expansion-panel.component.ts ***!
  \**************************************************************/
/*! exports provided: ExpansionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpansionPanelComponent", function() { return ExpansionPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ExpansionPanelComponent = class ExpansionPanelComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
    }
    ngAfterViewInit() {
        this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    }
};
ExpansionPanelComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("expandWrapper", { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], ExpansionPanelComponent.prototype, "expandWrapper", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ExpansionPanelComponent.prototype, "expanded", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ExpansionPanelComponent.prototype, "expandHeight", void 0);
ExpansionPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expansion-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./expansion-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/expansion-panel/expansion-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./expansion-panel.component.scss */ "./src/app/expansion-panel/expansion-panel.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], ExpansionPanelComponent);



/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../expansion-panel/expansion-panel.component */ "./src/app/expansion-panel/expansion-panel.component.ts");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"], _expansion_panel_expansion_panel_component__WEBPACK_IMPORTED_MODULE_8__["ExpansionPanelComponent"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-toolbar {\n  --background: translucent;\n}\n\n.arrow-down {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  -webkit-transition: -webkit-transform 0.4s linear;\n  transition: -webkit-transform 0.4s linear;\n  transition: transform 0.4s linear;\n  transition: transform 0.4s linear, -webkit-transform 0.4s linear;\n}\n\n.arrow-down.open {\n  -webkit-transform: rotate(-180deg);\n          transform: rotate(-180deg);\n  -webkit-transition: -webkit-transform 0.4s linear;\n  transition: -webkit-transform 0.4s linear;\n  transition: transform 0.4s linear;\n  transition: transform 0.4s linear, -webkit-transform 0.4s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2hucG90dHMvcHJvamVjdHMvc3Vydml2b3ItYnJhY2tldC9zcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLGlEQUFBO0VBQUEseUNBQUE7RUFBQSxpQ0FBQTtFQUFBLGdFQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsaURBQUE7RUFBQSx5Q0FBQTtFQUFBLGlDQUFBO0VBQUEsZ0VBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCBpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNsdWNlbnQ7XG59XG4uYXJyb3ctZG93bntcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHMgbGluZWFyO1xufVxuXG4uYXJyb3ctZG93bi5vcGVue1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBsaW5lYXI7XG59IiwiaW9uLWNvbnRlbnQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zbHVjZW50O1xufVxuXG4uYXJyb3ctZG93biB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBsaW5lYXI7XG59XG5cbi5hcnJvdy1kb3duLm9wZW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgbGluZWFyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_survivors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/survivors.service */ "./src/app/services/survivors.service.ts");
/* harmony import */ var _services_scoring_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/scoring.service */ "./src/app/services/scoring.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let Tab3Page = class Tab3Page {
    constructor(survivorService, scoringService, toastController) {
        this.survivorService = survivorService;
        this.scoringService = scoringService;
        this.toastController = toastController;
        this.survivors = [];
        this.tribeScore = false;
        this.survivorService.survivors.subscribe(survivors => this.survivors = survivors);
    }
    getScoringToggleTitle() {
        return !this.scoreExplanationsExpanded ? 'View Scoring Rules' : 'Hide Scoring Rules';
    }
    toggleScores() {
        this.scoreExplanationsExpanded = !this.scoreExplanationsExpanded;
    }
    getTribeScoreTypes() {
        return this.scoringService.getTribeScoreTypes();
    }
    getIndividualScoreTypes() {
        return this.scoringService.getIndividualScoreTypes();
    }
    getTribes() {
        return this.survivors.reduce((namesArray, survivor) => {
            !namesArray.includes(survivor.tribe) ? namesArray.push(survivor.tribe) : null;
            return namesArray;
        }, []);
    }
    chooseTribeOrInd(type) {
        this.clearForm();
        this.tribeScore = (type === 'tribe') ? true : false;
    }
    chooseTribe(tribe) {
        this.selectedTribe = tribe;
    }
    chooseEpisode(episode) {
        this.clearForm();
        this.episode = Number(episode);
    }
    chooseSurvivor(survivorId) {
        this.selectedSurvivorId = survivorId;
    }
    chooseTribeScore(score) {
        this.tribeScores = [];
        const survivorsOnTribe = this.survivors.filter(survivor => survivor.tribe === this.selectedTribe);
        survivorsOnTribe.forEach(survivor => {
            this.tribeScores.push(Object.assign({}, score, { episode: this.episode, survivorId: survivor.survivorId }));
        });
    }
    chooseIndividualScore(score) {
        const newScore = Object.assign({}, score, { episode: this.episode, survivorId: this.selectedSurvivorId });
        this.individualScore = newScore;
    }
    submitScore() {
        if (this.individualScore) {
            this.scoringService.saveScore(this.individualScore);
        }
        else if (this.tribeScores) {
            this.scoringService.saveScores(this.tribeScores);
        }
        this.clearForm();
        this.presentToast();
    }
    clearForm() {
        this.individualScore = null;
        this.tribeScores = null;
        this.selectedSurvivorId = null;
        this.selectedTribe = null;
        this.tribeScore = false;
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Score Recorded Successfully!.',
                duration: 2000
            });
            toast.present();
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_survivors_service__WEBPACK_IMPORTED_MODULE_2__["SurvivorsService"] },
    { type: _services_scoring_service__WEBPACK_IMPORTED_MODULE_3__["ScoringService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_survivors_service__WEBPACK_IMPORTED_MODULE_2__["SurvivorsService"],
        _services_scoring_service__WEBPACK_IMPORTED_MODULE_3__["ScoringService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map