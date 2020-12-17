var superboard;superboard =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/src/index.ts":
/*!*******************************!*\
  !*** ./frontend/src/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const fabric = __webpack_require__(/*! fabric */ "fabric");
const types_1 = __webpack_require__(/*! ./types */ "./frontend/src/types.ts");
let changeHistory = [];
// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');
function addRectangle() {
    // create a rectangle object
    let createEvent = {
        objectId: "dummyObjectId",
        objectType: types_1.FabricObjectType.RECTANGLE,
        properties: {
            top: 100,
            left: 100,
            width: 100,
            height: 100,
            fill: 'green'
        }
    };
    let change = {
        timestamp: new Date().getTime(),
        initiator: "dummy",
        eventType: types_1.ChangeEventType.CREATE,
        event: createEvent,
    };
    applyChange(change);
}
function applyChange(change) {
    document.getElementById("eventContainer").innerHTML = ` <div class="eventItem"><pre><code>${JSON.stringify(change, undefined, 4)}</code></pre></div>` + document.getElementById("eventContainer").innerHTML;
    //TODO Determine wether to apply this change...
    changeHistory.push(change);
    switch (change.eventType) {
        case types_1.ChangeEventType.CREATE:
            applyCreateEvent(change.event);
            break;
    }
}
function applyCreateEvent(e) {
    switch (e.objectType) {
        case types_1.FabricObjectType.RECTANGLE:
            var rect = new fabric.Rect(e.properties);
            rect.id = e.objectId;
            canvas.add(rect);
            rect.on('moved', function (opt) {
                const moveEvent = {
                    objectId: opt.target.id,
                    from: {
                        x: r(opt.transform.original.left),
                        y: r(opt.transform.original.top)
                    },
                    to: {
                        x: r(opt.target.left),
                        y: r(opt.target.top)
                    }
                };
                const change = {
                    timestamp: new Date().getTime(),
                    initiator: "dummy",
                    eventType: types_1.ChangeEventType.MOVE,
                    event: moveEvent,
                };
                applyChange(change);
            });
            rect.on('scaled', function (opt) {
                const scaleEvent = {
                    objectId: opt.target.id,
                    from: {
                        x: opt.transform.original.scaleX.toFixed(2),
                        y: opt.transform.original.scaleY.toFixed(2),
                    },
                    to: {
                        x: opt.target.scaleX.toFixed(2),
                        y: opt.target.scaleY.toFixed(2),
                    }
                };
                const change = {
                    timestamp: new Date().getTime(),
                    initiator: "dummy",
                    eventType: types_1.ChangeEventType.SCALE,
                    event: scaleEvent,
                };
                applyChange(change);
            });
            break;
    }
}
function r(n) {
    return Math.round(n);
}
document.getElementById("addRectButton").addEventListener("click", addRectangle);


/***/ }),

/***/ "./frontend/src/types.ts":
/*!*******************************!*\
  !*** ./frontend/src/types.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChangeEventType = exports.FabricObjectType = void 0;
var FabricObjectType;
(function (FabricObjectType) {
    FabricObjectType["RECTANGLE"] = "RECTANGLE";
})(FabricObjectType = exports.FabricObjectType || (exports.FabricObjectType = {}));
;
var ChangeEventType;
(function (ChangeEventType) {
    ChangeEventType["CREATE"] = "CREATE";
    ChangeEventType["MOVE"] = "MOVE";
    ChangeEventType["SCALE"] = "SCALE";
})(ChangeEventType = exports.ChangeEventType || (exports.ChangeEventType = {}));
;


/***/ }),

/***/ "fabric":
/*!*************************!*\
  !*** external "fabric" ***!
  \*************************/
/***/ ((module) => {

module.exports = fabric;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./frontend/src/index.ts");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcmJvYXJkLy4vZnJvbnRlbmQvc3JjL2luZGV4LnRzIiwid2VicGFjazovL3N1cGVyYm9hcmQvLi9mcm9udGVuZC9zcmMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vc3VwZXJib2FyZC9leHRlcm5hbCBcImZhYnJpY1wiIiwid2VicGFjazovL3N1cGVyYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VwZXJib2FyZC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMsc0JBQVE7QUFDL0IsZ0JBQWdCLG1CQUFPLENBQUMsd0NBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0cscUNBQXFDO0FBQ3JJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDMUZhO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELHVCQUF1QixHQUFHLHdCQUF3QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxDQUFDLGtEQUFrRCx3QkFBd0IsS0FBSztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdEQUFnRCx1QkFBdUIsS0FBSztBQUM3RTs7Ozs7Ozs7Ozs7QUNkQSx3Qjs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZhYnJpYyA9IHJlcXVpcmUoXCJmYWJyaWNcIik7XG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5sZXQgY2hhbmdlSGlzdG9yeSA9IFtdO1xuLy8gY3JlYXRlIGEgd3JhcHBlciBhcm91bmQgbmF0aXZlIGNhbnZhcyBlbGVtZW50ICh3aXRoIGlkPVwiY1wiKVxudmFyIGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCdjJyk7XG5mdW5jdGlvbiBhZGRSZWN0YW5nbGUoKSB7XG4gICAgLy8gY3JlYXRlIGEgcmVjdGFuZ2xlIG9iamVjdFxuICAgIGxldCBjcmVhdGVFdmVudCA9IHtcbiAgICAgICAgb2JqZWN0SWQ6IFwiZHVtbXlPYmplY3RJZFwiLFxuICAgICAgICBvYmplY3RUeXBlOiB0eXBlc18xLkZhYnJpY09iamVjdFR5cGUuUkVDVEFOR0xFLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICB0b3A6IDEwMCxcbiAgICAgICAgICAgIGxlZnQ6IDEwMCxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCxcbiAgICAgICAgICAgIGZpbGw6ICdncmVlbidcbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IGNoYW5nZSA9IHtcbiAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgaW5pdGlhdG9yOiBcImR1bW15XCIsXG4gICAgICAgIGV2ZW50VHlwZTogdHlwZXNfMS5DaGFuZ2VFdmVudFR5cGUuQ1JFQVRFLFxuICAgICAgICBldmVudDogY3JlYXRlRXZlbnQsXG4gICAgfTtcbiAgICBhcHBseUNoYW5nZShjaGFuZ2UpO1xufVxuZnVuY3Rpb24gYXBwbHlDaGFuZ2UoY2hhbmdlKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJldmVudENvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBgIDxkaXYgY2xhc3M9XCJldmVudEl0ZW1cIj48cHJlPjxjb2RlPiR7SlNPTi5zdHJpbmdpZnkoY2hhbmdlLCB1bmRlZmluZWQsIDQpfTwvY29kZT48L3ByZT48L2Rpdj5gICsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJldmVudENvbnRhaW5lclwiKS5pbm5lckhUTUw7XG4gICAgLy9UT0RPIERldGVybWluZSB3ZXRoZXIgdG8gYXBwbHkgdGhpcyBjaGFuZ2UuLi5cbiAgICBjaGFuZ2VIaXN0b3J5LnB1c2goY2hhbmdlKTtcbiAgICBzd2l0Y2ggKGNoYW5nZS5ldmVudFR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlc18xLkNoYW5nZUV2ZW50VHlwZS5DUkVBVEU6XG4gICAgICAgICAgICBhcHBseUNyZWF0ZUV2ZW50KGNoYW5nZS5ldmVudCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5mdW5jdGlvbiBhcHBseUNyZWF0ZUV2ZW50KGUpIHtcbiAgICBzd2l0Y2ggKGUub2JqZWN0VHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzXzEuRmFicmljT2JqZWN0VHlwZS5SRUNUQU5HTEU6XG4gICAgICAgICAgICB2YXIgcmVjdCA9IG5ldyBmYWJyaWMuUmVjdChlLnByb3BlcnRpZXMpO1xuICAgICAgICAgICAgcmVjdC5pZCA9IGUub2JqZWN0SWQ7XG4gICAgICAgICAgICBjYW52YXMuYWRkKHJlY3QpO1xuICAgICAgICAgICAgcmVjdC5vbignbW92ZWQnLCBmdW5jdGlvbiAob3B0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW92ZUV2ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RJZDogb3B0LnRhcmdldC5pZCxcbiAgICAgICAgICAgICAgICAgICAgZnJvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogcihvcHQudHJhbnNmb3JtLm9yaWdpbmFsLmxlZnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogcihvcHQudHJhbnNmb3JtLm9yaWdpbmFsLnRvcClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHIob3B0LnRhcmdldC5sZWZ0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHIob3B0LnRhcmdldC50b3ApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYW5nZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhdG9yOiBcImR1bW15XCIsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZTogdHlwZXNfMS5DaGFuZ2VFdmVudFR5cGUuTU9WRSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IG1vdmVFdmVudCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGFwcGx5Q2hhbmdlKGNoYW5nZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlY3Qub24oJ3NjYWxlZCcsIGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZUV2ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3RJZDogb3B0LnRhcmdldC5pZCxcbiAgICAgICAgICAgICAgICAgICAgZnJvbToge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogb3B0LnRyYW5zZm9ybS5vcmlnaW5hbC5zY2FsZVgudG9GaXhlZCgyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IG9wdC50cmFuc2Zvcm0ub3JpZ2luYWwuc2NhbGVZLnRvRml4ZWQoMiksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBvcHQudGFyZ2V0LnNjYWxlWC50b0ZpeGVkKDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogb3B0LnRhcmdldC5zY2FsZVkudG9GaXhlZCgyKSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgY2hhbmdlID0ge1xuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgICAgICBpbml0aWF0b3I6IFwiZHVtbXlcIixcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlOiB0eXBlc18xLkNoYW5nZUV2ZW50VHlwZS5TQ0FMRSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IHNjYWxlRXZlbnQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhcHBseUNoYW5nZShjaGFuZ2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5mdW5jdGlvbiByKG4pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChuKTtcbn1cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUmVjdEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUmVjdGFuZ2xlKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DaGFuZ2VFdmVudFR5cGUgPSBleHBvcnRzLkZhYnJpY09iamVjdFR5cGUgPSB2b2lkIDA7XG52YXIgRmFicmljT2JqZWN0VHlwZTtcbihmdW5jdGlvbiAoRmFicmljT2JqZWN0VHlwZSkge1xuICAgIEZhYnJpY09iamVjdFR5cGVbXCJSRUNUQU5HTEVcIl0gPSBcIlJFQ1RBTkdMRVwiO1xufSkoRmFicmljT2JqZWN0VHlwZSA9IGV4cG9ydHMuRmFicmljT2JqZWN0VHlwZSB8fCAoZXhwb3J0cy5GYWJyaWNPYmplY3RUeXBlID0ge30pKTtcbjtcbnZhciBDaGFuZ2VFdmVudFR5cGU7XG4oZnVuY3Rpb24gKENoYW5nZUV2ZW50VHlwZSkge1xuICAgIENoYW5nZUV2ZW50VHlwZVtcIkNSRUFURVwiXSA9IFwiQ1JFQVRFXCI7XG4gICAgQ2hhbmdlRXZlbnRUeXBlW1wiTU9WRVwiXSA9IFwiTU9WRVwiO1xuICAgIENoYW5nZUV2ZW50VHlwZVtcIlNDQUxFXCJdID0gXCJTQ0FMRVwiO1xufSkoQ2hhbmdlRXZlbnRUeXBlID0gZXhwb3J0cy5DaGFuZ2VFdmVudFR5cGUgfHwgKGV4cG9ydHMuQ2hhbmdlRXZlbnRUeXBlID0ge30pKTtcbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFicmljOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Zyb250ZW5kL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=