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
    document.getElementById("eventContainer").innerHTML += ` <div class="eventItem"><pre><code>${JSON.stringify(change, undefined, 4)}</code></pre></div>`;
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
            // rect.on('moved', function (opt) {
            //     const desc = `${opt.transform.action}: From (${r(opt.transform.original.left)}|${r(opt.transform.original.top)}) to (${r(opt.target.left)}|${r(opt.target.top)})`;
            //     let event = new PBEvent(Actions.MOVED, Types.Rectangle, desc, {})
            //     applyChange(event)
            // });
            // rect.on('scaled', function (opt) {
            //     let event = new PBEvent(Actions.SCALED, Types.Rectangle, `Scaled from ${opt.transform.original.scaleX} to ${opt.target.scaleX}`, {})
            //     applyChange(event)
            // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdXBlcmJvYXJkLy4vZnJvbnRlbmQvc3JjL2luZGV4LnRzIiwid2VicGFjazovL3N1cGVyYm9hcmQvLi9mcm9udGVuZC9zcmMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vc3VwZXJib2FyZC9leHRlcm5hbCBcImZhYnJpY1wiIiwid2VicGFjazovL3N1cGVyYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3VwZXJib2FyZC93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxDQUFDLGNBQWMsRUFBQztBQUM3RCxlQUFlLG1CQUFPLENBQUMsc0JBQVE7QUFDL0IsZ0JBQWdCLG1CQUFPLENBQUMsd0NBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUdBQWlHLHFDQUFxQztBQUN0STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFCQUFxQixVQUFVLCtCQUErQixHQUFHLDhCQUE4QixRQUFRLG1CQUFtQixHQUFHLGtCQUFrQjtBQUNsTCxtRkFBbUY7QUFDbkY7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSwyRkFBMkYsOEJBQThCLE1BQU0sa0JBQWtCLEtBQUs7QUFDdEo7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekRhO0FBQ2IsOENBQTZDLENBQUMsY0FBYyxFQUFDO0FBQzdELHVCQUF1QixHQUFHLHdCQUF3QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQSxDQUFDLGtEQUFrRCx3QkFBd0IsS0FBSztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLGdEQUFnRCx1QkFBdUIsS0FBSztBQUM3RTs7Ozs7Ozs7Ozs7QUNkQSx3Qjs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7OztVQ3JCQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IGZhYnJpYyA9IHJlcXVpcmUoXCJmYWJyaWNcIik7XG5jb25zdCB0eXBlc18xID0gcmVxdWlyZShcIi4vdHlwZXNcIik7XG5sZXQgY2hhbmdlSGlzdG9yeSA9IFtdO1xuLy8gY3JlYXRlIGEgd3JhcHBlciBhcm91bmQgbmF0aXZlIGNhbnZhcyBlbGVtZW50ICh3aXRoIGlkPVwiY1wiKVxudmFyIGNhbnZhcyA9IG5ldyBmYWJyaWMuQ2FudmFzKCdjJyk7XG5mdW5jdGlvbiBhZGRSZWN0YW5nbGUoKSB7XG4gICAgLy8gY3JlYXRlIGEgcmVjdGFuZ2xlIG9iamVjdFxuICAgIGxldCBjcmVhdGVFdmVudCA9IHtcbiAgICAgICAgb2JqZWN0VHlwZTogdHlwZXNfMS5GYWJyaWNPYmplY3RUeXBlLlJFQ1RBTkdMRSxcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgICAgdG9wOiAxMDAsXG4gICAgICAgICAgICBsZWZ0OiAxMDAsXG4gICAgICAgICAgICB3aWR0aDogMTAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAsXG4gICAgICAgICAgICBmaWxsOiAnZ3JlZW4nXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGxldCBjaGFuZ2UgPSB7XG4gICAgICAgIHRpbWVzdGFtcDogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgIGluaXRpYXRvcjogXCJkdW1teVwiLFxuICAgICAgICBldmVudFR5cGU6IHR5cGVzXzEuQ2hhbmdlRXZlbnRUeXBlLkNSRUFURSxcbiAgICAgICAgZXZlbnQ6IGNyZWF0ZUV2ZW50XG4gICAgfTtcbiAgICBhcHBseUNoYW5nZShjaGFuZ2UpO1xufVxuZnVuY3Rpb24gYXBwbHlDaGFuZ2UoY2hhbmdlKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJldmVudENvbnRhaW5lclwiKS5pbm5lckhUTUwgKz0gYCA8ZGl2IGNsYXNzPVwiZXZlbnRJdGVtXCI+PHByZT48Y29kZT4ke0pTT04uc3RyaW5naWZ5KGNoYW5nZSwgdW5kZWZpbmVkLCA0KX08L2NvZGU+PC9wcmU+PC9kaXY+YDtcbiAgICAvL1RPRE8gRGV0ZXJtaW5lIHdldGhlciB0byBhcHBseSB0aGlzIGNoYW5nZS4uLlxuICAgIGNoYW5nZUhpc3RvcnkucHVzaChjaGFuZ2UpO1xuICAgIHN3aXRjaCAoY2hhbmdlLmV2ZW50VHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzXzEuQ2hhbmdlRXZlbnRUeXBlLkNSRUFURTpcbiAgICAgICAgICAgIGFwcGx5Q3JlYXRlRXZlbnQoY2hhbmdlLmV2ZW50KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFwcGx5Q3JlYXRlRXZlbnQoZSkge1xuICAgIHN3aXRjaCAoZS5vYmplY3RUeXBlKSB7XG4gICAgICAgIGNhc2UgdHlwZXNfMS5GYWJyaWNPYmplY3RUeXBlLlJFQ1RBTkdMRTpcbiAgICAgICAgICAgIHZhciByZWN0ID0gbmV3IGZhYnJpYy5SZWN0KGUucHJvcGVydGllcyk7XG4gICAgICAgICAgICBjYW52YXMuYWRkKHJlY3QpO1xuICAgICAgICAgICAgLy8gcmVjdC5vbignbW92ZWQnLCBmdW5jdGlvbiAob3B0KSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc3QgZGVzYyA9IGAke29wdC50cmFuc2Zvcm0uYWN0aW9ufTogRnJvbSAoJHtyKG9wdC50cmFuc2Zvcm0ub3JpZ2luYWwubGVmdCl9fCR7cihvcHQudHJhbnNmb3JtLm9yaWdpbmFsLnRvcCl9KSB0byAoJHtyKG9wdC50YXJnZXQubGVmdCl9fCR7cihvcHQudGFyZ2V0LnRvcCl9KWA7XG4gICAgICAgICAgICAvLyAgICAgbGV0IGV2ZW50ID0gbmV3IFBCRXZlbnQoQWN0aW9ucy5NT1ZFRCwgVHlwZXMuUmVjdGFuZ2xlLCBkZXNjLCB7fSlcbiAgICAgICAgICAgIC8vICAgICBhcHBseUNoYW5nZShldmVudClcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy8gcmVjdC5vbignc2NhbGVkJywgZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgICAgLy8gICAgIGxldCBldmVudCA9IG5ldyBQQkV2ZW50KEFjdGlvbnMuU0NBTEVELCBUeXBlcy5SZWN0YW5nbGUsIGBTY2FsZWQgZnJvbSAke29wdC50cmFuc2Zvcm0ub3JpZ2luYWwuc2NhbGVYfSB0byAke29wdC50YXJnZXQuc2NhbGVYfWAsIHt9KVxuICAgICAgICAgICAgLy8gICAgIGFwcGx5Q2hhbmdlKGV2ZW50KVxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59XG5mdW5jdGlvbiByKG4pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChuKTtcbn1cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUmVjdEJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUmVjdGFuZ2xlKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5DaGFuZ2VFdmVudFR5cGUgPSBleHBvcnRzLkZhYnJpY09iamVjdFR5cGUgPSB2b2lkIDA7XG52YXIgRmFicmljT2JqZWN0VHlwZTtcbihmdW5jdGlvbiAoRmFicmljT2JqZWN0VHlwZSkge1xuICAgIEZhYnJpY09iamVjdFR5cGVbXCJSRUNUQU5HTEVcIl0gPSBcIlJFQ1RBTkdMRVwiO1xufSkoRmFicmljT2JqZWN0VHlwZSA9IGV4cG9ydHMuRmFicmljT2JqZWN0VHlwZSB8fCAoZXhwb3J0cy5GYWJyaWNPYmplY3RUeXBlID0ge30pKTtcbjtcbnZhciBDaGFuZ2VFdmVudFR5cGU7XG4oZnVuY3Rpb24gKENoYW5nZUV2ZW50VHlwZSkge1xuICAgIENoYW5nZUV2ZW50VHlwZVtcIkNSRUFURVwiXSA9IFwiQ1JFQVRFXCI7XG4gICAgQ2hhbmdlRXZlbnRUeXBlW1wiTU9WRVwiXSA9IFwiTU9WRVwiO1xuICAgIENoYW5nZUV2ZW50VHlwZVtcIlNDQUxFXCJdID0gXCJTQ0FMRVwiO1xufSkoQ2hhbmdlRXZlbnRUeXBlID0gZXhwb3J0cy5DaGFuZ2VFdmVudFR5cGUgfHwgKGV4cG9ydHMuQ2hhbmdlRXZlbnRUeXBlID0ge30pKTtcbjtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFicmljOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gbW9kdWxlIGV4cG9ydHMgbXVzdCBiZSByZXR1cm5lZCBmcm9tIHJ1bnRpbWUgc28gZW50cnkgaW5saW5pbmcgaXMgZGlzYWJsZWRcbi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oXCIuL2Zyb250ZW5kL3NyYy9pbmRleC50c1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=