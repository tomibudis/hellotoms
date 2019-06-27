webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/about/index.js":
/*!***************************************!*\
  !*** ./src/components/about/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/about/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/tomibudi/Documents/hellotoms/gh-pages/src/components/about/index.js";





var About = function About(props) {
  var _props$basicInfo = props.basicInfo,
      basicInfo = _props$basicInfo === void 0 ? [] : _props$basicInfo,
      _props$aboutInfo = props.aboutInfo,
      aboutInfo = _props$aboutInfo === void 0 ? [] : _props$aboutInfo;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.summaryInformation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Contact Information"), aboutInfo.length > 0 && aboutInfo.map(function (row) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex py-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.labelInformation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, row.label && row.label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('flex-fill', _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.valueInformation),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, row.value && row.value));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.summaryInformation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Basic Information"), basicInfo.length > 0 && basicInfo.map(function (row) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex py-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.labelInformation,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, row.label && row.label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "flex-fill",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, row.value && row.value));
  })));
};

About.propTypes = {
  aboutInfo: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["shape"])({
    label: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    value: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
  })),
  basicInfo: Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_3__["shape"])({
    label: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"],
    value: prop_types__WEBPACK_IMPORTED_MODULE_3__["string"]
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

})
//# sourceMappingURL=index.js.58de9a08e161e984df43.hot-update.js.map