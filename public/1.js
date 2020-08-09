(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PostCategory.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PostCategory.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories */ "./resources/js/components/Categories.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Categories: _Categories__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      posts: []
    };
  },
  created: function created() {
    this.getPosts();
  },
  methods: {
    getPosts: function getPosts() {
      var _this = this;

      axios.get('/api/posts/category/' + this.$route.params.slug).then(function (response) {
        console.log(response.data);
        _this.posts = response.data;
      })["catch"](function (error) {
        return console.log(error);
      });
    }
  },
  watch: {
    '$route': 'getPosts'
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PostCategory.vue?vue&type=template&id=841902ae&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/PostCategory.vue?vue&type=template&id=841902ae& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      { staticClass: "row my-4 " },
      [
        _c("Categories"),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-8 mt-5" }, [
          _c(
            "div",
            { staticClass: "card" },
            [
              _c("div", { staticClass: "card-header" }, [_vm._v("Articles")]),
              _vm._v(" "),
              _vm._l(_vm.posts, function(post, index) {
                return _c("div", { key: index, staticClass: "card-body" }, [
                  _c("div", { staticClass: "media" }, [
                    _c("img", {
                      staticClass: "rounded shadow-sm img-fluid mr-2",
                      attrs: { src: post.photo, alt: "Post image" }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "media-body" },
                      [
                        _c("router-link", { attrs: { to: post.path } }, [
                          _c("h3", [_vm._v(_vm._s(post.title))])
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _c("span", { staticClass: "text-default" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(post.user.name) +
                                "\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("span", { staticClass: "text-primary" }, [
                            _vm._v(
                              "\n                                    " +
                                _vm._s(post.added) +
                                "\n                                "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "lead" }, [
                          _vm._v(_vm._s(post.body.substr(0, 200)) + " ...")
                        ])
                      ],
                      1
                    )
                  ])
                ])
              })
            ],
            2
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/PostCategory.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/PostCategory.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostCategory_vue_vue_type_template_id_841902ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostCategory.vue?vue&type=template&id=841902ae& */ "./resources/js/components/PostCategory.vue?vue&type=template&id=841902ae&");
/* harmony import */ var _PostCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostCategory.vue?vue&type=script&lang=js& */ "./resources/js/components/PostCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostCategory_vue_vue_type_template_id_841902ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PostCategory_vue_vue_type_template_id_841902ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PostCategory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/PostCategory.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/PostCategory.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./PostCategory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PostCategory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCategory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PostCategory.vue?vue&type=template&id=841902ae&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/PostCategory.vue?vue&type=template&id=841902ae& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCategory_vue_vue_type_template_id_841902ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./PostCategory.vue?vue&type=template&id=841902ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/PostCategory.vue?vue&type=template&id=841902ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCategory_vue_vue_type_template_id_841902ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostCategory_vue_vue_type_template_id_841902ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);