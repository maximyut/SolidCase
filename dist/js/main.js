/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/components/posts-swiper/posts-swiper.js":
/*!************************************************************!*\
  !*** ./src/blocks/components/posts-swiper/posts-swiper.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


document.addEventListener("DOMContentLoaded", function () {
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".posts-swiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      600: {
        slidesPerView: 2
      }
    },
    spaceBetween: 100,
    // Navigation arrows
    navigation: {
      nextEl: ".block-posts__btn--next",
      prevEl: ".block-posts__btn--prev"
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation]
  });
  document.querySelectorAll(".posts-swiper__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (btn.classList.contains("posts-swiper__btn--next")) {
        swiper.slideNext();
      }
      if (btn.classList.contains("posts-swiper__btn--prev")) {
        swiper.slidePrev();
      }
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/block-tabs/block-tabs.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/block-tabs/block-tabs.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");

document.addEventListener("DOMContentLoaded", function () {
  var tabsBlocks = document.querySelectorAll(".block-tabs");
  tabsBlocks.forEach(function (tabsBlock) {
    var tabs = tabsBlock.querySelectorAll(".block-tabs__tab");
    var tabContents = tabsBlock.querySelectorAll(".block-tabs__tab-content");
    tabs.forEach(function (tab) {
      tab.classList.remove("block-tabs__tab--active");
    });
    tabContents.forEach(function (tabContent) {
      tabContent.classList.remove("block-tabs__tab-content--active");
    });
    tabs[0].classList.add("block-tabs__tab--active");
    tabContents[0].classList.add("block-tabs__tab-content--active");
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function (event) {
        event.preventDefault();
        tabs.forEach(function (tab) {
          tab.classList.remove("block-tabs__tab--active");
        });
        tab.classList.add("block-tabs__tab--active");
        tabContents.forEach(function (tabContent) {
          tabContent.classList.remove("block-tabs__tab-content--active");
        });
        tabContents[i].classList.add("block-tabs__tab-content--active");
      });
    });
    if (window.innerWidth <= 1024) {
      tabContents.forEach(function (tabContent, i) {
        tabContent.classList.add("swiper-".concat(i));
        var swiperBlock = document.createElement("div");
        var cols = tabContent.querySelectorAll(".block-tabs__col");
        swiperBlock.className = "swiper-wrapper";
        tabContent.insertBefore(swiperBlock, tabContent.querySelector(".block-tabs__btns"));
        cols.forEach(function (col) {
          col.classList.add("swiper-slide");
          swiperBlock.append(col);
        });
        var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".practices .swiper-".concat(i), {
          slidesPerView: 1,
          breakpoints: {
            600: {
              slidesPerView: 2
            }
          },
          freeMode: true
        });
        tabContent.querySelectorAll(".block-tabs__btn").forEach(function (btn) {
          btn.addEventListener("click", function () {
            if (btn.classList.contains("block-tabs__btn--next")) {
              swiper.slideNext();
            }
            if (btn.classList.contains("block-tabs__btn--prev")) {
              swiper.slidePrev();
            }
          });
        });
      });
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  // template/src/blocks/modules/header/header.js
  var header = document.querySelector(".header");
  var menuList = header.querySelector(".header__menu .menu__list");
  var parentItem = menuList.querySelectorAll(".menu__item--parent");
  parentItem.forEach(function (item) {
    var currentSubmenu = item.querySelector(".menu__submenu");
    var hideSubMenus = function hideSubMenus() {
      parentItem.forEach(function (item) {
        var currentSubmenu = item.querySelector(".menu__submenu");
        currentSubmenu.classList.remove("menu__submenu--active");
      });
    };
    item.addEventListener("mouseover", function () {
      hideSubMenus();
      currentSubmenu.classList.add("menu__submenu--active");
    });
    currentSubmenu.addEventListener("mouseout", function () {
      hideSubMenus();
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/projects/projects.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/projects/projects.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");

document.addEventListener("DOMContentLoaded", function () {
  var projects = document.querySelectorAll(".projects__grid-project");
  if (window.innerWidth <= 768) {
    projects.forEach(function (project) {
      console.log(project);
      project.classList.add("projects__grid-project--mobile");
    });
    var tabsContent = document.querySelectorAll(".projects .block-tabs__tab-content");
    tabsContent.forEach(function (tabContent, i) {
      tabContent.classList.add("swiper-".concat(i));
      tabContent.querySelector(".projects__grid").classList.add("swiper-wrapper");
      tabContent.querySelectorAll(".projects__grid-project").forEach(function (project) {
        project.classList.add("swiper-slide");
      });
      var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".projects .swiper-".concat(i), {});
      tabContent.querySelectorAll(".projects__btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (btn.classList.contains("projects__btn--next")) {
            swiper.slideNext();
          }
          if (btn.classList.contains("projects__btn--prev")) {
            swiper.slidePrev();
          }
        });
      });
    });
  }
});

/***/ }),

/***/ "./src/blocks/modules/testimonials/testimonials.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/testimonials/testimonials.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.mjs");
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/modules */ "./node_modules/swiper/modules/index.mjs");


document.addEventListener("DOMContentLoaded", function () {
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".testimonials__wrapper", {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    },
    history: {
      enabled: true,
      key: "slide",
      root: "localhost:4000"
    },
    // Navigation arrows
    navigation: {
      nextEl: ".testimonials__btn--next",
      prevEl: ".testimonials__btn--prev"
    },
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__.Navigation]
  });
  document.querySelectorAll(".testimonials__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var leftIndex = swiper.realIndex;
      var rightIndex;
      if (swiper.realIndex + 1 > swiper.slides.length - 1) {
        rightIndex = 0;
      } else {
        rightIndex = swiper.realIndex + 1;
      }
      var changeClasses = function changeClasses() {
        swiper.slides.forEach(function (slide) {
          slide.classList.remove("testimonials__testimonial--left", "testimonials__testimonial--right");
        });
        swiper.el.querySelector("[data-swiper-slide-index=\"".concat(leftIndex, "\"]")).classList.add("testimonials__testimonial--left");
        swiper.el.querySelector("[data-swiper-slide-index=\"".concat(rightIndex, "\"]")).classList.add("testimonials__testimonial--right");
      };
      if (btn.classList.contains("testimonials__btn--next")) {
        swiper.slideNext();
      }
      if (btn.classList.contains("testimonials__btn--prev")) {
        swiper.slidePrev();
      }
      changeClasses();
    });
  });
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_posts_swiper_posts_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %components%/posts-swiper/posts-swiper */ "./src/blocks/components/posts-swiper/posts-swiper.js");


/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_block_tabs_block_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/block-tabs/block-tabs */ "./src/blocks/modules/block-tabs/block-tabs.js");
/* harmony import */ var _modules_testimonials_testimonials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/testimonials/testimonials */ "./src/blocks/modules/testimonials/testimonials.js");
/* harmony import */ var _modules_projects_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/projects/projects */ "./src/blocks/modules/projects/projects.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkgulp_scss_starter"] = self["webpackChunkgulp_scss_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map