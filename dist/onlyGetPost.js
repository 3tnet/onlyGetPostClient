/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nwindow.oldXMLHttpRequest = window.oldXMLHttpRequest || window.XMLHttpRequest;\nwindow.XMLHttpRequest = function () {\n    var _this = this;\n\n    var allowableMethods = ['GET', 'POST'];\n    this.xhr = new window.oldXMLHttpRequest();\n\n    var _loop = function _loop(attr) {\n        var type = '';\n        try {\n            type = _typeof(_this.xhr[attr]);\n        } catch (e) {}\n        if (type === 'function') {\n            _this[attr] = function () {\n                var args = [].slice.call(arguments);\n                return this.xhr[attr].apply(this.xhr, args);\n            };\n        } else if (attr !== 'open') {\n            Object.defineProperty(_this, attr, {\n                get: function get() {\n                    return this.xhr[attr];\n                },\n                set: function set(newVal) {\n                    this.xhr[attr] = newVal;\n                }\n            });\n        }\n    };\n\n    for (var attr in this.xhr) {\n        _loop(attr);\n    }\n    this.open = function (method, url, async, username, password) {\n        if (!allowableMethods.includes(method)) {\n            if (url.includes('?')) {\n                url += '&_method=' + method;\n            } else {\n                if (url[url.length - 1] === '/') {\n                    url = url.substr(0, url.length - 1);\n                }\n                url += '?_method=' + method;\n            }\n            return _this.xhr.open('POST', url, async, username, password);\n        }\n        return _this.xhr.open(method, url, async, username, password);\n    };\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbIndpbmRvdyIsIm9sZFhNTEh0dHBSZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJhbGxvd2FibGVNZXRob2RzIiwieGhyIiwiYXR0ciIsInR5cGUiLCJlIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImFwcGx5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJzZXQiLCJuZXdWYWwiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwiYXN5bmMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJzdWJzdHIiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQUEsT0FBT0MsaUJBQVAsR0FBMkJELE9BQU9DLGlCQUFQLElBQTRCRCxPQUFPRSxjQUE5RDtBQUNBRixPQUFPRSxjQUFQLEdBQXdCLFlBQVk7QUFBQTs7QUFDaEMsUUFBTUMsbUJBQW1CLENBQUMsS0FBRCxFQUFRLE1BQVIsQ0FBekI7QUFDQSxTQUFLQyxHQUFMLEdBQVcsSUFBSUosT0FBT0MsaUJBQVgsRUFBWDs7QUFGZ0MsK0JBR3ZCSSxJQUh1QjtBQUk1QixZQUFJQyxPQUFPLEVBQVg7QUFDQSxZQUFJO0FBQ0FBLDJCQUFjLE1BQUtGLEdBQUwsQ0FBU0MsSUFBVCxDQUFkO0FBQ0gsU0FGRCxDQUVFLE9BQU9FLENBQVAsRUFBVSxDQUFFO0FBQ2QsWUFBSUQsU0FBUyxVQUFiLEVBQXlCO0FBQ3JCLGtCQUFLRCxJQUFMLElBQWEsWUFBVztBQUNwQixvQkFBSUcsT0FBTyxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0MsU0FBZCxDQUFYO0FBQ0EsdUJBQU8sS0FBS1AsR0FBTCxDQUFTQyxJQUFULEVBQWVPLEtBQWYsQ0FBcUIsS0FBS1IsR0FBMUIsRUFBK0JJLElBQS9CLENBQVA7QUFDSCxhQUhEO0FBSUgsU0FMRCxNQUtPLElBQUdILFNBQVMsTUFBWixFQUFvQjtBQUN2QlEsbUJBQU9DLGNBQVAsUUFBNEJULElBQTVCLEVBQWtDO0FBQzlCVSxtQkFEOEIsaUJBQ3ZCO0FBQ0gsMkJBQU8sS0FBS1gsR0FBTCxDQUFTQyxJQUFULENBQVA7QUFDSCxpQkFINkI7QUFJOUJXLG1CQUo4QixlQUl6QkMsTUFKeUIsRUFJakI7QUFDVCx5QkFBS2IsR0FBTCxDQUFTQyxJQUFULElBQWtCWSxNQUFsQjtBQUNIO0FBTjZCLGFBQWxDO0FBUUg7QUF0QjJCOztBQUdoQyxTQUFLLElBQUlaLElBQVQsSUFBaUIsS0FBS0QsR0FBdEIsRUFBMkI7QUFBQSxjQUFsQkMsSUFBa0I7QUFvQjFCO0FBQ0QsU0FBS2EsSUFBTCxHQUFZLFVBQUNDLE1BQUQsRUFBU0MsR0FBVCxFQUFjQyxLQUFkLEVBQXFCQyxRQUFyQixFQUErQkMsUUFBL0IsRUFBNEM7QUFDckQsWUFBRyxDQUFDcEIsaUJBQWlCcUIsUUFBakIsQ0FBMEJMLE1BQTFCLENBQUosRUFBc0M7QUFDakMsZ0JBQUlDLElBQUlJLFFBQUosQ0FBYSxHQUFiLENBQUosRUFBc0I7QUFDbEJKLHVCQUFPLGNBQWNELE1BQXJCO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsb0JBQUlDLElBQUlBLElBQUlLLE1BQUosR0FBYSxDQUFqQixNQUF3QixHQUE1QixFQUFnQztBQUM1QkwsMEJBQU1BLElBQUlNLE1BQUosQ0FBVyxDQUFYLEVBQWNOLElBQUlLLE1BQUosR0FBYSxDQUEzQixDQUFOO0FBQ0g7QUFDREwsdUJBQU8sY0FBY0QsTUFBckI7QUFDSDtBQUNELG1CQUFPLE1BQUtmLEdBQUwsQ0FBU2MsSUFBVCxDQUFjLE1BQWQsRUFBc0JFLEdBQXRCLEVBQTJCQyxLQUEzQixFQUFrQ0MsUUFBbEMsRUFBNENDLFFBQTVDLENBQVA7QUFDSDtBQUNELGVBQU8sTUFBS25CLEdBQUwsQ0FBU2MsSUFBVCxDQUFjQyxNQUFkLEVBQXNCQyxHQUF0QixFQUEyQkMsS0FBM0IsRUFBa0NDLFFBQWxDLEVBQTRDQyxRQUE1QyxDQUFQO0FBQ0gsS0FiRDtBQWNILENBdENEIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxud2luZG93Lm9sZFhNTEh0dHBSZXF1ZXN0ID0gd2luZG93Lm9sZFhNTEh0dHBSZXF1ZXN0IHx8IHdpbmRvdy5YTUxIdHRwUmVxdWVzdDtcclxud2luZG93LlhNTEh0dHBSZXF1ZXN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYWxsb3dhYmxlTWV0aG9kcyA9IFsnR0VUJywgJ1BPU1QnXTtcclxuICAgIHRoaXMueGhyID0gbmV3IHdpbmRvdy5vbGRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgZm9yIChsZXQgYXR0ciBpbiB0aGlzLnhocikge1xyXG4gICAgICAgIGxldCB0eXBlID0gJyc7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdHlwZSA9IHR5cGVvZiB0aGlzLnhoclthdHRyXVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgdGhpc1thdHRyXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnhoclthdHRyXS5hcHBseSh0aGlzLnhociwgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYoYXR0ciAhPT0gJ29wZW4nKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBhdHRyLCB7XHJcbiAgICAgICAgICAgICAgICBnZXQgKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnhoclthdHRyXTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZXQgKG5ld1ZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueGhyW2F0dHJdID0gIG5ld1ZhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLm9wZW4gPSAobWV0aG9kLCB1cmwsIGFzeW5jLCB1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgICAgIGlmKCFhbGxvd2FibGVNZXRob2RzLmluY2x1ZGVzKG1ldGhvZCkpe1xyXG4gICAgICAgICAgICBpZiAodXJsLmluY2x1ZGVzKCc/Jykpe1xyXG4gICAgICAgICAgICAgICAgdXJsICs9ICcmX21ldGhvZD0nICsgbWV0aG9kO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVybFt1cmwubGVuZ3RoIC0gMV0gPT09ICcvJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gdXJsLnN1YnN0cigwLCB1cmwubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gJz9fbWV0aG9kPScgKyBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueGhyLm9wZW4oJ1BPU1QnLCB1cmwsIGFzeW5jLCB1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy54aHIub3BlbihtZXRob2QsIHVybCwgYXN5bmMsIHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);