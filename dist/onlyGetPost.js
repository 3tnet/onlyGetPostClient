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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\n(function (window) {\n    window.oldXMLHttpRequest = window.oldXMLHttpRequest || window.XMLHttpRequest;\n    var isHook = false;\n    function MyXMLHttpRequest() {\n        var _this = this;\n\n        var allowableMethods = ['GET', 'POST'];\n        this.xhr = new window.oldXMLHttpRequest();\n\n        var _loop = function _loop(attr) {\n            var type = '';\n            try {\n                type = _typeof(_this.xhr[attr]);\n            } catch (e) {}\n            if (type === 'function') {\n                _this[attr] = function () {\n                    var args = [].slice.call(arguments);\n                    return this.xhr[attr].apply(this.xhr, args);\n                };\n            } else if (attr !== 'open') {\n                Object.defineProperty(_this, attr, {\n                    get: function get() {\n                        return this.xhr[attr];\n                    },\n                    set: function set(newVal) {\n                        this.xhr[attr] = newVal;\n                    }\n                });\n            }\n        };\n\n        for (var attr in this.xhr) {\n            _loop(attr);\n        }\n        this.open = function (method, url, async, username, password) {\n            if (!allowableMethods.includes(method) && isHook) {\n                if (url.includes('?')) {\n                    url += '&_method=' + method;\n                } else {\n                    if (url[url.length - 1] === '/') {\n                        url = url.substr(0, url.length - 1);\n                    }\n                    url += '?_method=' + method;\n                }\n                return _this.xhr.open('POST', url, async, username, password);\n            }\n            return _this.xhr.open(method, url, async, username, password);\n        };\n    }\n    var onlyGetPost = {\n        hook: function hook() {\n            isHook = true;\n            window.XMLHttpRequest = MyXMLHttpRequest;\n        },\n        unHook: function unHook() {\n            isHook = false;\n            window.XMLHttpRequest = window.oldXMLHttpRequest;\n        }\n    };\n    window.onlyGetPost = onlyGetPost;\n})(window);\nexports.default = window.onlyGetPost;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbIndpbmRvdyIsIm9sZFhNTEh0dHBSZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJpc0hvb2siLCJNeVhNTEh0dHBSZXF1ZXN0IiwiYWxsb3dhYmxlTWV0aG9kcyIsInhociIsImF0dHIiLCJ0eXBlIiwiZSIsImFyZ3MiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJhcHBseSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwibmV3VmFsIiwib3BlbiIsIm1ldGhvZCIsInVybCIsImFzeW5jIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImluY2x1ZGVzIiwibGVuZ3RoIiwic3Vic3RyIiwib25seUdldFBvc3QiLCJob29rIiwidW5Ib29rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLENBQUMsVUFBU0EsTUFBVCxFQUFnQjtBQUNiQSxXQUFPQyxpQkFBUCxHQUEyQkQsT0FBT0MsaUJBQVAsSUFBNEJELE9BQU9FLGNBQTlEO0FBQ0EsUUFBSUMsU0FBUyxLQUFiO0FBQ0EsYUFBU0MsZ0JBQVQsR0FBNkI7QUFBQTs7QUFDekIsWUFBTUMsbUJBQW1CLENBQUMsS0FBRCxFQUFRLE1BQVIsQ0FBekI7QUFDQSxhQUFLQyxHQUFMLEdBQVcsSUFBSU4sT0FBT0MsaUJBQVgsRUFBWDs7QUFGeUIsbUNBR2hCTSxJQUhnQjtBQUlyQixnQkFBSUMsT0FBTyxFQUFYO0FBQ0EsZ0JBQUk7QUFDQUEsK0JBQWMsTUFBS0YsR0FBTCxDQUFTQyxJQUFULENBQWQ7QUFDSCxhQUZELENBRUUsT0FBT0UsQ0FBUCxFQUFVLENBQUU7QUFDZCxnQkFBSUQsU0FBUyxVQUFiLEVBQXlCO0FBQ3JCLHNCQUFLRCxJQUFMLElBQWEsWUFBVztBQUNwQix3QkFBSUcsT0FBTyxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0MsU0FBZCxDQUFYO0FBQ0EsMkJBQU8sS0FBS1AsR0FBTCxDQUFTQyxJQUFULEVBQWVPLEtBQWYsQ0FBcUIsS0FBS1IsR0FBMUIsRUFBK0JJLElBQS9CLENBQVA7QUFDSCxpQkFIRDtBQUlILGFBTEQsTUFLTyxJQUFHSCxTQUFTLE1BQVosRUFBb0I7QUFDdkJRLHVCQUFPQyxjQUFQLFFBQTRCVCxJQUE1QixFQUFrQztBQUM5QlUsdUJBRDhCLGlCQUN2QjtBQUNILCtCQUFPLEtBQUtYLEdBQUwsQ0FBU0MsSUFBVCxDQUFQO0FBQ0gscUJBSDZCO0FBSTlCVyx1QkFKOEIsZUFJekJDLE1BSnlCLEVBSWpCO0FBQ1QsNkJBQUtiLEdBQUwsQ0FBU0MsSUFBVCxJQUFrQlksTUFBbEI7QUFDSDtBQU42QixpQkFBbEM7QUFRSDtBQXRCb0I7O0FBR3pCLGFBQUssSUFBSVosSUFBVCxJQUFpQixLQUFLRCxHQUF0QixFQUEyQjtBQUFBLGtCQUFsQkMsSUFBa0I7QUFvQjFCO0FBQ0QsYUFBS2EsSUFBTCxHQUFZLFVBQUNDLE1BQUQsRUFBU0MsR0FBVCxFQUFjQyxLQUFkLEVBQXFCQyxRQUFyQixFQUErQkMsUUFBL0IsRUFBNEM7QUFDckQsZ0JBQUcsQ0FBQ3BCLGlCQUFpQnFCLFFBQWpCLENBQTBCTCxNQUExQixDQUFELElBQXNDbEIsTUFBekMsRUFBZ0Q7QUFDM0Msb0JBQUltQixJQUFJSSxRQUFKLENBQWEsR0FBYixDQUFKLEVBQXNCO0FBQ2xCSiwyQkFBTyxjQUFjRCxNQUFyQjtBQUNILGlCQUZELE1BRU87QUFDSCx3QkFBSUMsSUFBSUEsSUFBSUssTUFBSixHQUFhLENBQWpCLE1BQXdCLEdBQTVCLEVBQWdDO0FBQzVCTCw4QkFBTUEsSUFBSU0sTUFBSixDQUFXLENBQVgsRUFBY04sSUFBSUssTUFBSixHQUFhLENBQTNCLENBQU47QUFDSDtBQUNETCwyQkFBTyxjQUFjRCxNQUFyQjtBQUNIO0FBQ0QsdUJBQU8sTUFBS2YsR0FBTCxDQUFTYyxJQUFULENBQWMsTUFBZCxFQUFzQkUsR0FBdEIsRUFBMkJDLEtBQTNCLEVBQWtDQyxRQUFsQyxFQUE0Q0MsUUFBNUMsQ0FBUDtBQUNIO0FBQ0QsbUJBQU8sTUFBS25CLEdBQUwsQ0FBU2MsSUFBVCxDQUFjQyxNQUFkLEVBQXNCQyxHQUF0QixFQUEyQkMsS0FBM0IsRUFBa0NDLFFBQWxDLEVBQTRDQyxRQUE1QyxDQUFQO0FBQ0gsU0FiRDtBQWNIO0FBQ0QsUUFBTUksY0FBYztBQUNoQkMsWUFEZ0Isa0JBQ1I7QUFDSjNCLHFCQUFTLElBQVQ7QUFDQUgsbUJBQU9FLGNBQVAsR0FBd0JFLGdCQUF4QjtBQUNILFNBSmU7QUFLaEIyQixjQUxnQixvQkFLTjtBQUNONUIscUJBQVMsS0FBVDtBQUNBSCxtQkFBT0UsY0FBUCxHQUF3QkYsT0FBT0MsaUJBQS9CO0FBQ0g7QUFSZSxLQUFwQjtBQVVBRCxXQUFPNkIsV0FBUCxHQUFxQkEsV0FBckI7QUFDSCxDQXJERCxFQXFERzdCLE1BckRIO2tCQXNEZUEsT0FBTzZCLFciLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbih3aW5kb3cpe1xyXG4gICAgd2luZG93Lm9sZFhNTEh0dHBSZXF1ZXN0ID0gd2luZG93Lm9sZFhNTEh0dHBSZXF1ZXN0IHx8IHdpbmRvdy5YTUxIdHRwUmVxdWVzdDtcclxuICAgIGxldCBpc0hvb2sgPSBmYWxzZTtcclxuICAgIGZ1bmN0aW9uIE15WE1MSHR0cFJlcXVlc3QgKCkge1xyXG4gICAgICAgIGNvbnN0IGFsbG93YWJsZU1ldGhvZHMgPSBbJ0dFVCcsICdQT1NUJ107XHJcbiAgICAgICAgdGhpcy54aHIgPSBuZXcgd2luZG93Lm9sZFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgZm9yIChsZXQgYXR0ciBpbiB0aGlzLnhocikge1xyXG4gICAgICAgICAgICBsZXQgdHlwZSA9ICcnO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdHlwZSA9IHR5cGVvZiB0aGlzLnhoclthdHRyXVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhpc1thdHRyXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueGhyW2F0dHJdLmFwcGx5KHRoaXMueGhyLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGF0dHIgIT09ICdvcGVuJykge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGF0dHIsIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXQgKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy54aHJbYXR0cl07XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzZXQgKG5ld1ZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnhoclthdHRyXSA9ICBuZXdWYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9wZW4gPSAobWV0aG9kLCB1cmwsIGFzeW5jLCB1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcclxuICAgICAgICAgICBpZighYWxsb3dhYmxlTWV0aG9kcy5pbmNsdWRlcyhtZXRob2QpICYmIGlzSG9vayl7XHJcbiAgICAgICAgICAgICAgICBpZiAodXJsLmluY2x1ZGVzKCc/Jykpe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCArPSAnJl9tZXRob2Q9JyArIG1ldGhvZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybFt1cmwubGVuZ3RoIC0gMV0gPT09ICcvJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IHVybC5zdWJzdHIoMCwgdXJsLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB1cmwgKz0gJz9fbWV0aG9kPScgKyBtZXRob2Q7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy54aHIub3BlbignUE9TVCcsIHVybCwgYXN5bmMsIHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueGhyLm9wZW4obWV0aG9kLCB1cmwsIGFzeW5jLCB1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG9ubHlHZXRQb3N0ID0ge1xyXG4gICAgICAgIGhvb2sgKCkge1xyXG4gICAgICAgICAgICBpc0hvb2sgPSB0cnVlO1xyXG4gICAgICAgICAgICB3aW5kb3cuWE1MSHR0cFJlcXVlc3QgPSBNeVhNTEh0dHBSZXF1ZXN0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdW5Ib29rICgpIHtcclxuICAgICAgICAgICAgaXNIb29rID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHdpbmRvdy5YTUxIdHRwUmVxdWVzdCA9IHdpbmRvdy5vbGRYTUxIdHRwUmVxdWVzdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB3aW5kb3cub25seUdldFBvc3QgPSBvbmx5R2V0UG9zdDtcclxufSkod2luZG93KTtcclxuZXhwb3J0IGRlZmF1bHQgd2luZG93Lm9ubHlHZXRQb3N0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);