webpackHotUpdate("styles",{

/***/ "./src/components/workExperience/styles.scss":
/*!***************************************************!*\
  !*** ./src/components/workExperience/styles.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"logoCompany":"_3m93hzUETXLL8i9ceg8rYB","titleCompany":"_23hextAD6QUCZeAllVwo8c","descriptionCompany":"_1UGkWk_b20d52yEO_a6zuh"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1561649002256");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.784c55869c561bbb4adf.hot-update.js.map