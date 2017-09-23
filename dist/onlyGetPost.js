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
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nwindow.oldXMLHttpRequest = window.oldXMLHttpRequest || window.XMLHttpRequest;\nwindow.XMLHttpRequest = function () {\n    var _this = this;\n\n    var allowableMethods = ['GET', 'POST'];\n    this.xhr = new window.oldXMLHttpRequest();\n\n    var _loop = function _loop(attr) {\n        var type = \"\";\n        try {\n            type = _typeof(_this.xhr[attr]);\n        } catch (e) {}\n        if (type === \"function\") {\n            _this[attr] = function () {\n                var args = [].slice.call(arguments);\n                return this.xhr[attr].apply(this.xhr, args);\n            };\n        } else if (attr !== 'open') {\n            Object.defineProperty(_this, attr, {\n                get: function get() {\n                    return this.xhr[attr];\n                },\n                set: function set(newVal) {\n                    this.xhr[attr] = newVal;\n                }\n            });\n        }\n    };\n\n    for (var attr in this.xhr) {\n        _loop(attr);\n    }\n    this.open = function (method, url, async, username, password) {\n        if (!allowableMethods.includes(method)) {\n            if (url.includes('?')) {\n                url += '&_method=' + method;\n            } else {\n                url += '?_method=' + method;\n            }\n            return _this.xhr.open('POST', url, async, username, password);\n        }\n        return _this.xhr.open(method, url, async, username, password);\n    };\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcz8yNjQ1Il0sIm5hbWVzIjpbIndpbmRvdyIsIm9sZFhNTEh0dHBSZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJhbGxvd2FibGVNZXRob2RzIiwieGhyIiwiYXR0ciIsInR5cGUiLCJlIiwiYXJncyIsInNsaWNlIiwiY2FsbCIsImFyZ3VtZW50cyIsImFwcGx5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJzZXQiLCJuZXdWYWwiLCJvcGVuIiwibWV0aG9kIiwidXJsIiwiYXN5bmMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaW5jbHVkZXMiXSwibWFwcGluZ3MiOiI7Ozs7QUFDQUEsT0FBT0MsaUJBQVAsR0FBMkJELE9BQU9DLGlCQUFQLElBQTRCRCxPQUFPRSxjQUE5RDtBQUNBRixPQUFPRSxjQUFQLEdBQXdCLFlBQVk7QUFBQTs7QUFDaEMsUUFBTUMsbUJBQW1CLENBQUMsS0FBRCxFQUFRLE1BQVIsQ0FBekI7QUFDQSxTQUFLQyxHQUFMLEdBQVcsSUFBSUosT0FBT0MsaUJBQVgsRUFBWDs7QUFGZ0MsK0JBR3ZCSSxJQUh1QjtBQUk1QixZQUFJQyxPQUFPLEVBQVg7QUFDQSxZQUFJO0FBQ0FBLDJCQUFjLE1BQUtGLEdBQUwsQ0FBU0MsSUFBVCxDQUFkO0FBQ0gsU0FGRCxDQUVFLE9BQU9FLENBQVAsRUFBVSxDQUFFO0FBQ2QsWUFBSUQsU0FBUyxVQUFiLEVBQXlCO0FBQ3JCLGtCQUFLRCxJQUFMLElBQWEsWUFBVztBQUNwQixvQkFBSUcsT0FBTyxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0MsU0FBZCxDQUFYO0FBQ0EsdUJBQU8sS0FBS1AsR0FBTCxDQUFTQyxJQUFULEVBQWVPLEtBQWYsQ0FBcUIsS0FBS1IsR0FBMUIsRUFBK0JJLElBQS9CLENBQVA7QUFDSCxhQUhEO0FBSUgsU0FMRCxNQUtPLElBQUdILFNBQVMsTUFBWixFQUFvQjtBQUN2QlEsbUJBQU9DLGNBQVAsUUFBNEJULElBQTVCLEVBQWtDO0FBQzlCVSxtQkFEOEIsaUJBQ3ZCO0FBQ0gsMkJBQU8sS0FBS1gsR0FBTCxDQUFTQyxJQUFULENBQVA7QUFDSCxpQkFINkI7QUFJOUJXLG1CQUo4QixlQUl6QkMsTUFKeUIsRUFJakI7QUFDVCx5QkFBS2IsR0FBTCxDQUFTQyxJQUFULElBQWtCWSxNQUFsQjtBQUNIO0FBTjZCLGFBQWxDO0FBUUg7QUF0QjJCOztBQUdoQyxTQUFLLElBQUlaLElBQVQsSUFBaUIsS0FBS0QsR0FBdEIsRUFBMkI7QUFBQSxjQUFsQkMsSUFBa0I7QUFvQjFCO0FBQ0QsU0FBS2EsSUFBTCxHQUFZLFVBQUNDLE1BQUQsRUFBU0MsR0FBVCxFQUFjQyxLQUFkLEVBQXFCQyxRQUFyQixFQUErQkMsUUFBL0IsRUFBNEM7QUFDckQsWUFBRyxDQUFDcEIsaUJBQWlCcUIsUUFBakIsQ0FBMEJMLE1BQTFCLENBQUosRUFBc0M7QUFDakMsZ0JBQUlDLElBQUlJLFFBQUosQ0FBYSxHQUFiLENBQUosRUFBc0I7QUFDbEJKLHVCQUFPLGNBQWNELE1BQXJCO0FBQ0gsYUFGRCxNQUVPO0FBQ0hDLHVCQUFPLGNBQWNELE1BQXJCO0FBQ0g7QUFDRCxtQkFBTyxNQUFLZixHQUFMLENBQVNjLElBQVQsQ0FBYyxNQUFkLEVBQXNCRSxHQUF0QixFQUEyQkMsS0FBM0IsRUFBa0NDLFFBQWxDLEVBQTRDQyxRQUE1QyxDQUFQO0FBQ0g7QUFDRCxlQUFPLE1BQUtuQixHQUFMLENBQVNjLElBQVQsQ0FBY0MsTUFBZCxFQUFzQkMsR0FBdEIsRUFBMkJDLEtBQTNCLEVBQWtDQyxRQUFsQyxFQUE0Q0MsUUFBNUMsQ0FBUDtBQUNILEtBVkQ7QUFXSCxDQW5DRCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbndpbmRvdy5vbGRYTUxIdHRwUmVxdWVzdCA9IHdpbmRvdy5vbGRYTUxIdHRwUmVxdWVzdCB8fCB3aW5kb3cuWE1MSHR0cFJlcXVlc3Q7XHJcbndpbmRvdy5YTUxIdHRwUmVxdWVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGFsbG93YWJsZU1ldGhvZHMgPSBbJ0dFVCcsICdQT1NUJ107XHJcbiAgICB0aGlzLnhociA9IG5ldyB3aW5kb3cub2xkWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIGZvciAobGV0IGF0dHIgaW4gdGhpcy54aHIpIHtcclxuICAgICAgICBsZXQgdHlwZSA9IFwiXCI7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdHlwZSA9IHR5cGVvZiB0aGlzLnhoclthdHRyXVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzW2F0dHJdID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueGhyW2F0dHJdLmFwcGx5KHRoaXMueGhyLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZihhdHRyICE9PSAnb3BlbicpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsIGF0dHIsIHtcclxuICAgICAgICAgICAgICAgIGdldCAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueGhyW2F0dHJdO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNldCAobmV3VmFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54aHJbYXR0cl0gPSAgbmV3VmFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMub3BlbiA9IChtZXRob2QsIHVybCwgYXN5bmMsIHVzZXJuYW1lLCBwYXNzd29yZCkgPT4ge1xyXG4gICAgICAgaWYoIWFsbG93YWJsZU1ldGhvZHMuaW5jbHVkZXMobWV0aG9kKSl7XHJcbiAgICAgICAgICAgIGlmICh1cmwuaW5jbHVkZXMoJz8nKSl7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gJyZfbWV0aG9kPScgKyBtZXRob2Q7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1cmwgKz0gJz9fbWV0aG9kPScgKyBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMueGhyLm9wZW4oJ1BPU1QnLCB1cmwsIGFzeW5jLCB1c2VybmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy54aHIub3BlbihtZXRob2QsIHVybCwgYXN5bmMsIHVzZXJuYW1lLCBwYXNzd29yZCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);