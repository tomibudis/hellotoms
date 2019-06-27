webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/workExperience/index.js":
/*!************************************************!*\
  !*** ./src/components/workExperience/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./src/components/workExperience/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/tomibudi/Documents/hellotoms/gh-pages/src/components/workExperience/index.js";





var WorkExperience = function WorkExperience(props) {
  var _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Work"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-group list-group-flush pt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, data.length > 0 && data.map(function (row, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      className: "list-group-item pl-0 pb-0 pt-3 d-flex align-items-start",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: row.logo,
      alt: "logo-company",
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('img-fluid rounded', _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.logoCompany),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pl-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('mb-0', _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.titleCompany),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, row.company && row.company), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.descriptionCompany,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, row.as && row.as)));
  })));
};

WorkExperience.propTypes = {
  data: Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["arrayOf"])(Object(prop_types__WEBPACK_IMPORTED_MODULE_2__["shape"])({
    logo: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
    company: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
    as: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (WorkExperience);

/***/ })

})
//# sourceMappingURL=index.js.db5a332841ad97492771.hot-update.js.map