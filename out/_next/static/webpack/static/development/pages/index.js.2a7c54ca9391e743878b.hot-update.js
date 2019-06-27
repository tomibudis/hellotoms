webpackHotUpdate("static/development/pages/index.js",{

/***/ "./mock/about.js":
/*!***********************!*\
  !*** ./mock/about.js ***!
  \***********************/
/*! exports provided: aboutInfo, basicInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "aboutInfo", function() { return aboutInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basicInfo", function() { return basicInfo; });
var aboutInfo = [{
  label: 'Phone',
  value: '-6285877266079'
}, {
  label: 'Address',
  value: 'Rempoa permai no 08 Ciputat Timur, Tangerang Selatan, Indonesia'
}, {
  lable: 'E-mail',
  value: 'tomibudis@gmail.com'
}, {
  label: 'Site',
  value: 'https://tomibudis.github.io/hellotoms'
}];
var basicInfo = [{
  label: 'Birthday',
  value: '10 December'
}, {
  label: 'Gender',
  value: 'Male'
}];

/***/ }),

/***/ "./src/view/homepage.js":
/*!******************************!*\
  !*** ./src/view/homepage.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_photoProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/photoProfile */ "./src/components/photoProfile/index.js");
/* harmony import */ var _components_workExperience__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/workExperience */ "./src/components/workExperience/index.js");
/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/profile */ "./src/components/profile/index.js");
/* harmony import */ var _mock_work__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mock/work */ "./mock/work.js");
/* harmony import */ var _mock_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mock/about */ "./mock/about.js");
var _jsxFileName = "/Users/tomibudi/Documents/hellotoms/gh-pages/src/view/homepage.js";







var HomepageView = function HomepageView() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_photoProfile__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "px-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_workExperience__WEBPACK_IMPORTED_MODULE_2__["default"], {
    data: _mock_work__WEBPACK_IMPORTED_MODULE_4__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_profile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    basicInfo: _mock_about__WEBPACK_IMPORTED_MODULE_5__["default"].basicInfo,
    aboutInfo: _mock_about__WEBPACK_IMPORTED_MODULE_5__["default"].aboutInfo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (HomepageView);

/***/ })

})
//# sourceMappingURL=index.js.2a7c54ca9391e743878b.hot-update.js.map