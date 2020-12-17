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
        event: createEvent
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
            canvas.add(rect);
            rect.on('moved', function (opt) {
                const moveEvent = {
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
                    event: moveEvent
                };
                applyChange(change);
            });
            rect.on('scaled', function (opt) {
                const scaleEvent = {
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
                    event: scaleEvent
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcmJvYXJkLy4vZnJvbnRlbmQvc3JjL2luZGV4LnRzIiwid2VicGFjazovL3N1cGVyYm9hcmQvLi9mcm9udGVuZC9zcmMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vc3VwZXJib2FyZC9leHRlcm5hbCBcImZhYnJpY1wiIiwid2VicGFjazovL3N1cGVyYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VwZXJib2FyZC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMsc0JBQVE7QUFDL0IsZ0JBQWdCLG1CQUFPLENBQUMsd0NBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQWdHLHFDQUFxQztBQUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3RGYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCx1QkFBdUIsR0FBRyx3QkFBd0I7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrREFBa0Qsd0JBQXdCLEtBQUs7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxnREFBZ0QsdUJBQXVCLEtBQUs7QUFDN0U7Ozs7Ozs7Ozs7O0FDZEEsd0I7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBmYWJyaWMgPSByZXF1aXJlKFwiZmFicmljXCIpO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xubGV0IGNoYW5nZUhpc3RvcnkgPSBbXTtcbi8vIGNyZWF0ZSBhIHdyYXBwZXIgYXJvdW5kIG5hdGl2ZSBjYW52YXMgZWxlbWVudCAod2l0aCBpZD1cImNcIilcbnZhciBjYW52YXMgPSBuZXcgZmFicmljLkNhbnZhcygnYycpO1xuZnVuY3Rpb24gYWRkUmVjdGFuZ2xlKCkge1xuICAgIC8vIGNyZWF0ZSBhIHJlY3RhbmdsZSBvYmplY3RcbiAgICBsZXQgY3JlYXRlRXZlbnQgPSB7XG4gICAgICAgIG9iamVjdFR5cGU6IHR5cGVzXzEuRmFicmljT2JqZWN0VHlwZS5SRUNUQU5HTEUsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIHRvcDogMTAwLFxuICAgICAgICAgICAgbGVmdDogMTAwLFxuICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgICAgICAgZmlsbDogJ2dyZWVuJ1xuICAgICAgICB9XG4gICAgfTtcbiAgICBsZXQgY2hhbmdlID0ge1xuICAgICAgICB0aW1lc3RhbXA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgICBpbml0aWF0b3I6IFwiZHVtbXlcIixcbiAgICAgICAgZXZlbnRUeXBlOiB0eXBlc18xLkNoYW5nZUV2ZW50VHlwZS5DUkVBVEUsXG4gICAgICAgIGV2ZW50OiBjcmVhdGVFdmVudFxuICAgIH07XG4gICAgYXBwbHlDaGFuZ2UoY2hhbmdlKTtcbn1cbmZ1bmN0aW9uIGFwcGx5Q2hhbmdlKGNoYW5nZSkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXZlbnRDb250YWluZXJcIikuaW5uZXJIVE1MID0gYCA8ZGl2IGNsYXNzPVwiZXZlbnRJdGVtXCI+PHByZT48Y29kZT4ke0pTT04uc3RyaW5naWZ5KGNoYW5nZSwgdW5kZWZpbmVkLCA0KX08L2NvZGU+PC9wcmU+PC9kaXY+YCArIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXZlbnRDb250YWluZXJcIikuaW5uZXJIVE1MO1xuICAgIC8vVE9ETyBEZXRlcm1pbmUgd2V0aGVyIHRvIGFwcGx5IHRoaXMgY2hhbmdlLi4uXG4gICAgY2hhbmdlSGlzdG9yeS5wdXNoKGNoYW5nZSk7XG4gICAgc3dpdGNoIChjaGFuZ2UuZXZlbnRUeXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5DaGFuZ2VFdmVudFR5cGUuQ1JFQVRFOlxuICAgICAgICAgICAgYXBwbHlDcmVhdGVFdmVudChjaGFuZ2UuZXZlbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlDcmVhdGVFdmVudChlKSB7XG4gICAgc3dpdGNoIChlLm9iamVjdFR5cGUpIHtcbiAgICAgICAgY2FzZSB0eXBlc18xLkZhYnJpY09iamVjdFR5cGUuUkVDVEFOR0xFOlxuICAgICAgICAgICAgdmFyIHJlY3QgPSBuZXcgZmFicmljLlJlY3QoZS5wcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIGNhbnZhcy5hZGQocmVjdCk7XG4gICAgICAgICAgICByZWN0Lm9uKCdtb3ZlZCcsIGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb3ZlRXZlbnQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb206IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHIob3B0LnRyYW5zZm9ybS5vcmlnaW5hbC5sZWZ0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHIob3B0LnRyYW5zZm9ybS5vcmlnaW5hbC50b3ApXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiByKG9wdC50YXJnZXQubGVmdCksXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiByKG9wdC50YXJnZXQudG9wKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYXRvcjogXCJkdW1teVwiLFxuICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6IHR5cGVzXzEuQ2hhbmdlRXZlbnRUeXBlLk1PVkUsXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50OiBtb3ZlRXZlbnRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGFwcGx5Q2hhbmdlKGNoYW5nZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlY3Qub24oJ3NjYWxlZCcsIGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzY2FsZUV2ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICBmcm9tOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBvcHQudHJhbnNmb3JtLm9yaWdpbmFsLnNjYWxlWC50b0ZpeGVkKDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogb3B0LnRyYW5zZm9ybS5vcmlnaW5hbC5zY2FsZVkudG9GaXhlZCgyKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IG9wdC50YXJnZXQuc2NhbGVYLnRvRml4ZWQoMiksXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBvcHQudGFyZ2V0LnNjYWxlWS50b0ZpeGVkKDIpLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFuZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAgICAgICAgIGluaXRpYXRvcjogXCJkdW1teVwiLFxuICAgICAgICAgICAgICAgICAgICBldmVudFR5cGU6IHR5cGVzXzEuQ2hhbmdlRXZlbnRUeXBlLlNDQUxFLFxuICAgICAgICAgICAgICAgICAgICBldmVudDogc2NhbGVFdmVudFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYXBwbHlDaGFuZ2UoY2hhbmdlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuZnVuY3Rpb24gcihuKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobik7XG59XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFJlY3RCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFJlY3RhbmdsZSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ2hhbmdlRXZlbnRUeXBlID0gZXhwb3J0cy5GYWJyaWNPYmplY3RUeXBlID0gdm9pZCAwO1xudmFyIEZhYnJpY09iamVjdFR5cGU7XG4oZnVuY3Rpb24gKEZhYnJpY09iamVjdFR5cGUpIHtcbiAgICBGYWJyaWNPYmplY3RUeXBlW1wiUkVDVEFOR0xFXCJdID0gXCJSRUNUQU5HTEVcIjtcbn0pKEZhYnJpY09iamVjdFR5cGUgPSBleHBvcnRzLkZhYnJpY09iamVjdFR5cGUgfHwgKGV4cG9ydHMuRmFicmljT2JqZWN0VHlwZSA9IHt9KSk7XG47XG52YXIgQ2hhbmdlRXZlbnRUeXBlO1xuKGZ1bmN0aW9uIChDaGFuZ2VFdmVudFR5cGUpIHtcbiAgICBDaGFuZ2VFdmVudFR5cGVbXCJDUkVBVEVcIl0gPSBcIkNSRUFURVwiO1xuICAgIENoYW5nZUV2ZW50VHlwZVtcIk1PVkVcIl0gPSBcIk1PVkVcIjtcbiAgICBDaGFuZ2VFdmVudFR5cGVbXCJTQ0FMRVwiXSA9IFwiU0NBTEVcIjtcbn0pKENoYW5nZUV2ZW50VHlwZSA9IGV4cG9ydHMuQ2hhbmdlRXZlbnRUeXBlIHx8IChleHBvcnRzLkNoYW5nZUV2ZW50VHlwZSA9IHt9KSk7XG47XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhYnJpYzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIG1vZHVsZSBleHBvcnRzIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBydW50aW1lIHNvIGVudHJ5IGlubGluaW5nIGlzIGRpc2FibGVkXG4vLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9mcm9udGVuZC9zcmMvaW5kZXgudHNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9