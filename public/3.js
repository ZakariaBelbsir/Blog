(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/postDetails.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/postDetails.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      post: null,
      comment: '',
      logged: User.isLoggedIn().logged
    };
  },
  created: function created() {
    var _this = this;

    axios.get("/api/posts/".concat(this.$route.params.slug)).then(function (response) {
      console.log(response.data);
      _this.post = response.data;
    })["catch"](function (err) {
      return console.log(err);
    });
  },
  methods: {
    addComment: function addComment(id) {
      var _this2 = this;

      axios.post('/api/comments', {
        post_id: id,
        body: this.comment,
        user_id: User.isLoggedIn().id
      }).then(function (response) {
        _this2.post.comments_count++;

        _this2.post.comments.unshift(response.data);

        _this2.comment = '';
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/postDetails.vue?vue&type=template&id=1e60a0f2&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/postDetails.vue?vue&type=template&id=1e60a0f2& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "row my-4" }, [
      _c("div", { staticClass: "col-md-8 mx-auto mt-5" }, [
        _c("div", { staticClass: "card" }, [
          _c("h2", { staticClass: "card-header" }, [
            _vm._v(_vm._s(_vm.post.title))
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "p-2" }, [
            _c("span", { staticClass: "badge badge-default" }, [
              _vm._v(
                "\n                          " +
                  _vm._s(_vm.post.user) +
                  "\n                      "
              )
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "badge badge-info" }, [
              _vm._v(
                "\n                          " +
                  _vm._s(_vm.post.created_at) +
                  "\n                      "
              )
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "badge badge-success" }, [
              _vm._v(
                "\n                          " +
                  _vm._s(_vm.post.category) +
                  "\n                      "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-img-top" }, [
            _c("img", {
              staticClass: "rounded shadow-sm img-fluid mr-2",
              staticStyle: { width: "100%", height: "400px" },
              attrs: { src: _vm.post.photo, alt: "Post image" }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "media" }, [
              _c("div", { staticClass: "media-body" }, [
                _c("p", { staticClass: "lead" }, [
                  _vm._v(
                    "\n                                " +
                      _vm._s(_vm.post.body.substr(0, 300)) +
                      "\n                            "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row my-3" }, [
              _c(
                "div",
                { staticClass: "col-md-12" },
                [
                  _c("div", { staticClass: "media-shadow my-4 p-4" }, [
                    _vm.logged
                      ? _c("div", { staticClass: "media-body" }, [
                          _c("h3", { staticClass: "my-3 text-dark" }, [
                            _vm._v("Ajouter un commentaire")
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "form-group" }, [
                            _c("label", { attrs: { for: "comment" } }, [
                              _vm._v("Commentaire")
                            ]),
                            _vm._v(" "),
                            _c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.comment,
                                  expression: "comment"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { id: "comment", cols: "30", rows: "3" },
                              domProps: { value: _vm.comment },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.comment = $event.target.value
                                }
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.addComment(_vm.post.id)
                                }
                              }
                            },
                            [_vm._v("Valider")]
                          )
                        ])
                      : _c("div", { staticClass: "media shadow" }, [
                          _c(
                            "div",
                            { staticClass: "media-body" },
                            [
                              _c("router-link", { attrs: { to: "/login" } }, [
                                _vm._v("Connectez vous pour commenter")
                              ])
                            ],
                            1
                          )
                        ])
                  ]),
                  _vm._v(" "),
                  _c("h3", { staticClass: "text-info mb-3" }, [
                    _vm._v("\n                                Commentaires "),
                    _c("span", { staticClass: "badge badge-dark p-2" }, [
                      _vm._v(_vm._s(_vm.post.comments_count))
                    ])
                  ]),
                  _vm._v(" "),
                  _vm._l(_vm.post.comments, function(comment, index) {
                    return _c(
                      "div",
                      { key: index, staticClass: "medya my-4 p-4 shadow" },
                      [
                        _c("div", { staticClass: "media-body" }, [
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(
                              "\n                                      " +
                                _vm._s(comment.user) +
                                " | " +
                                _vm._s(comment.created_at) +
                                "\n                                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "lead" }, [
                            _vm._v(
                              "\n                                      " +
                                _vm._s(comment.body.substr(0, 100)) +
                                "\n                                  "
                            )
                          ])
                        ])
                      ]
                    )
                  })
                ],
                2
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/postDetails.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/postDetails.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _postDetails_vue_vue_type_template_id_1e60a0f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postDetails.vue?vue&type=template&id=1e60a0f2& */ "./resources/js/components/postDetails.vue?vue&type=template&id=1e60a0f2&");
/* harmony import */ var _postDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postDetails.vue?vue&type=script&lang=js& */ "./resources/js/components/postDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _postDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _postDetails_vue_vue_type_template_id_1e60a0f2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _postDetails_vue_vue_type_template_id_1e60a0f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/postDetails.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/postDetails.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/postDetails.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_postDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./postDetails.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/postDetails.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_postDetails_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/postDetails.vue?vue&type=template&id=1e60a0f2&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/postDetails.vue?vue&type=template&id=1e60a0f2& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_postDetails_vue_vue_type_template_id_1e60a0f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./postDetails.vue?vue&type=template&id=1e60a0f2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/postDetails.vue?vue&type=template&id=1e60a0f2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_postDetails_vue_vue_type_template_id_1e60a0f2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_postDetails_vue_vue_type_template_id_1e60a0f2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);