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
// create a wrapper around native canvas element (with id="c")
var canvas = new fabric.Canvas('c');
class PBEvent {
    constructor(action, objectType, name, options) {
        this.action = action;
        this.objectType = objectType;
        this.name = name;
        this.options = options;
        this.action = action;
        this.objectType = objectType;
        this.name = name;
        this.options = options;
    }
}
const Types = {
    Rectangle: "Rectangle"
};
const Actions = {
    CREATE: "CREATE",
    MOVED: "MOVED",
    SCALED: "SCALED",
};
function addRectangle() {
    // create a rectangle object
    let event = new PBEvent(Actions.CREATE, Types.Rectangle, "Create red Rectangle", {
        left: 100,
        top: 100,
        fill: 'red',
        width: 40,
        height: 40
    });
    applyEvent(event);
}
function applyEvent(event) {
    document.getElementById("eventContainer").innerHTML += ` <div class="eventItem">${event.name}</div>`;
    if (event.action == Actions.CREATE) {
        switch (event.objectType) {
            case Types.Rectangle:
                var rect = new fabric.Rect(event.options);
                // "add" rectangle onto canvas
                canvas.add(rect);
                rect.on('moved', function (opt) {
                    const desc = `${opt.transform.action}: From (${r(opt.transform.original.left)}|${r(opt.transform.original.top)}) to (${r(opt.target.left)}|${r(opt.target.top)})`;
                    let event = new PBEvent(Actions.MOVED, Types.Rectangle, desc, {});
                    applyEvent(event);
                });
                rect.on('scaled', function (opt) {
                    let event = new PBEvent(Actions.SCALED, Types.Rectangle, `Scaled from ${opt.transform.original.scaleX} to ${opt.target.scaleX}`, {});
                    applyEvent(event);
                });
                break;
        }
    }
    if (event.action == Actions.MOVED) {
        switch (event.objectType) {
            case Types.Rectangle:
                //move it
                break;
        }
    }
}
function r(n) {
    return Math.round(n);
}
document.getElementById("addRectButton").addEventListener("click", addRectangle);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcmJvYXJkLy4vZnJvbnRlbmQvc3JjL2luZGV4LnRzIiwid2VicGFjazovL3N1cGVyYm9hcmQvZXh0ZXJuYWwgXCJmYWJyaWNcIiIsIndlYnBhY2s6Ly9zdXBlcmJvYXJkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N1cGVyYm9hcmQvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWE7QUFDYiw4Q0FBNkMsQ0FBQyxjQUFjLEVBQUM7QUFDN0QsZUFBZSxtQkFBTyxDQUFDLHNCQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsV0FBVztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxxQkFBcUIsVUFBVSwrQkFBK0IsR0FBRyw4QkFBOEIsUUFBUSxtQkFBbUIsR0FBRyxrQkFBa0I7QUFDbkwsb0ZBQW9GO0FBQ3BGO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsNEZBQTRGLDhCQUE4QixNQUFNLGtCQUFrQixLQUFLO0FBQ3ZKO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNuRUEsd0I7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7VUNyQkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBmYWJyaWMgPSByZXF1aXJlKFwiZmFicmljXCIpO1xuLy8gY3JlYXRlIGEgd3JhcHBlciBhcm91bmQgbmF0aXZlIGNhbnZhcyBlbGVtZW50ICh3aXRoIGlkPVwiY1wiKVxudmFyIGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCdjJyk7XG5jbGFzcyBQQkV2ZW50IHtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb24sIG9iamVjdFR5cGUsIG5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgICAgIHRoaXMub2JqZWN0VHlwZSA9IG9iamVjdFR5cGU7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgICAgICB0aGlzLm9iamVjdFR5cGUgPSBvYmplY3RUeXBlO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIH1cbn1cbmNvbnN0IFR5cGVzID0ge1xuICAgIFJlY3RhbmdsZTogXCJSZWN0YW5nbGVcIlxufTtcbmNvbnN0IEFjdGlvbnMgPSB7XG4gICAgQ1JFQVRFOiBcIkNSRUFURVwiLFxuICAgIE1PVkVEOiBcIk1PVkVEXCIsXG4gICAgU0NBTEVEOiBcIlNDQUxFRFwiLFxufTtcbmZ1bmN0aW9uIGFkZFJlY3RhbmdsZSgpIHtcbiAgICAvLyBjcmVhdGUgYSByZWN0YW5nbGUgb2JqZWN0XG4gICAgbGV0IGV2ZW50ID0gbmV3IFBCRXZlbnQoQWN0aW9ucy5DUkVBVEUsIFR5cGVzLlJlY3RhbmdsZSwgXCJDcmVhdGUgcmVkIFJlY3RhbmdsZVwiLCB7XG4gICAgICAgIGxlZnQ6IDEwMCxcbiAgICAgICAgdG9wOiAxMDAsXG4gICAgICAgIGZpbGw6ICdyZWQnLFxuICAgICAgICB3aWR0aDogNDAsXG4gICAgICAgIGhlaWdodDogNDBcbiAgICB9KTtcbiAgICBhcHBseUV2ZW50KGV2ZW50KTtcbn1cbmZ1bmN0aW9uIGFwcGx5RXZlbnQoZXZlbnQpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV2ZW50Q29udGFpbmVyXCIpLmlubmVySFRNTCArPSBgIDxkaXYgY2xhc3M9XCJldmVudEl0ZW1cIj4ke2V2ZW50Lm5hbWV9PC9kaXY+YDtcbiAgICBpZiAoZXZlbnQuYWN0aW9uID09IEFjdGlvbnMuQ1JFQVRFKSB7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQub2JqZWN0VHlwZSkge1xuICAgICAgICAgICAgY2FzZSBUeXBlcy5SZWN0YW5nbGU6XG4gICAgICAgICAgICAgICAgdmFyIHJlY3QgPSBuZXcgZmFicmljLlJlY3QoZXZlbnQub3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgLy8gXCJhZGRcIiByZWN0YW5nbGUgb250byBjYW52YXNcbiAgICAgICAgICAgICAgICBjYW52YXMuYWRkKHJlY3QpO1xuICAgICAgICAgICAgICAgIHJlY3Qub24oJ21vdmVkJywgZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXNjID0gYCR7b3B0LnRyYW5zZm9ybS5hY3Rpb259OiBGcm9tICgke3Iob3B0LnRyYW5zZm9ybS5vcmlnaW5hbC5sZWZ0KX18JHtyKG9wdC50cmFuc2Zvcm0ub3JpZ2luYWwudG9wKX0pIHRvICgke3Iob3B0LnRhcmdldC5sZWZ0KX18JHtyKG9wdC50YXJnZXQudG9wKX0pYDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gbmV3IFBCRXZlbnQoQWN0aW9ucy5NT1ZFRCwgVHlwZXMuUmVjdGFuZ2xlLCBkZXNjLCB7fSk7XG4gICAgICAgICAgICAgICAgICAgIGFwcGx5RXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJlY3Qub24oJ3NjYWxlZCcsIGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gbmV3IFBCRXZlbnQoQWN0aW9ucy5TQ0FMRUQsIFR5cGVzLlJlY3RhbmdsZSwgYFNjYWxlZCBmcm9tICR7b3B0LnRyYW5zZm9ybS5vcmlnaW5hbC5zY2FsZVh9IHRvICR7b3B0LnRhcmdldC5zY2FsZVh9YCwge30pO1xuICAgICAgICAgICAgICAgICAgICBhcHBseUV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXZlbnQuYWN0aW9uID09IEFjdGlvbnMuTU9WRUQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5vYmplY3RUeXBlKSB7XG4gICAgICAgICAgICBjYXNlIFR5cGVzLlJlY3RhbmdsZTpcbiAgICAgICAgICAgICAgICAvL21vdmUgaXRcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIHIobikge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG4pO1xufVxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRSZWN0QnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRSZWN0YW5nbGUpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWJyaWM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBtb2R1bGUgZXhwb3J0cyBtdXN0IGJlIHJldHVybmVkIGZyb20gcnVudGltZSBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vZnJvbnRlbmQvc3JjL2luZGV4LnRzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==