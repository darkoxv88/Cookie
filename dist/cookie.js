/**
  * 
	* @author Darko Petrovic
  * @Link Facebook: https://www.facebook.com/WitchkingOfAngmarr
  * @Link GitHub: https://github.com/darkoxv88
  * 
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.


exports:

  window.Cookie;

backup:

  window.___webpack_export_dp___.Cookie;

**/

/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/refs/root.js
var root = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : ({ });

function getRoot() {
  return root;
}

;// CONCATENATED MODULE: ./src/environment.js
var production = true;

function isProduction() {
  return production;
}

;// CONCATENATED MODULE: ./src/core/date-handler.js
function DateHandler() { }

DateHandler.prototype = { }

DateHandler.createDateInDays = function(days) {
  if (typeof(days) !== 'number') {
    days = 0;
  }

  var date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  return date;
}

DateHandler.createDateInHours = function(hours) {
  if (typeof(hours) !== 'number') {
    hours = 0;
  }

  var date = new Date();
  date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
  return date;
}

DateHandler.createDateInMinutes = function(minutes) {
  if (typeof(minutes) !== 'number') {
    minutes = 0;
  }

  var date = new Date();
  date.setTime(date.getTime() + (minutes * 60 * 1000));
  return date;
}

;// CONCATENATED MODULE: ./src/utility/safe-json.js
function safeJsonParse(value) {
  try
  {
    if (typeof(value) !== 'string' || !value) {
      return null;
    }
    
    return JSON.parse(value);
  }
  catch (err)
  {
    return value;
  }
}

function safeJsonStringify(value) {
  try
  {
    return JSON.stringify(value);
  }
  catch (err)
  {
    return '';
  }
}

;// CONCATENATED MODULE: ./src/utility/safe-uri.js
function safeUriEncode(value) {
  try 
  {
    return encodeURIComponent(value);
  }
  catch (err)
  {
    return '';
  }
}

function safeUriDecode(value) {
  try 
  {
    return decodeURIComponent(value)
  }
  catch (err)
  {
    return '';
  }

}

;// CONCATENATED MODULE: ./src/core/cookie-options.js
function CookieOptions() { }

CookieOptions.prototype = {
  path: '/',
  domain: '',
  samesite: null,
  secure: false,
  httponly: false,
}

;// CONCATENATED MODULE: ./src/core/cookie-handler.js
function CookieHandler() { }

CookieHandler.prototype = { }

CookieHandler.put = function(cookieName, value, duration, options) {
  if (typeof(cookieName) !== 'string') {
    return;
  }

  if (typeof(value) !== 'string' && typeof(value) !== 'number' && typeof(value) !== 'boolean') {
    value = '';
  }

  if (!duration || !(duration instanceof Date)) {
    duration = new Date();
  }

  if (typeof(options) !== 'object' || !options) {
    options = new CookieOptions();
  }

  var cookieToSet = '';

  cookieToSet = cookieToSet + safeUriEncode(cookieName) + '=' + safeUriEncode(safeJsonStringify(value)) + ';';
  cookieToSet = cookieToSet + 'expires=' + duration.toUTCString() + ';';

  if (typeof(options.path) !== 'string' || !options.path) {
    options.path == '/';
  }

  cookieToSet = cookieToSet + 'path=' + options.path + ';';

  if (typeof(options.domain) === 'string' && options.domain) {
    cookieToSet = cookieToSet + 'domain=' + options.domain + ';';
  }

  if (typeof(options.samesite) !== 'string' || options.samesite !== 'lax' || options.samesite !== 'strict' || options.samesite !== 'none') {
    options.samesite = null;
  }

  if (!!(options.samesite)) {
    cookieToSet = cookieToSet + 'samesite=' + options.samesite + ';';
  }

  if (options.secure) {
    cookieToSet = cookieToSet + 'secure;';
  }

  if (options.httponly) {
    cookieToSet = cookieToSet + 'HttpOnly;';
  }

  document.cookie = cookieToSet;
}

CookieHandler.get = function(cookieName) {
  if (typeof(cookieName) !== 'string') {
    return null;
  }

  cookieName = safeUriEncode(cookieName) + '=';

  var cookiesList = document.cookie.split('; ');

  for (var i = 0; i < cookiesList.length; i++) {
    var cookie = cookiesList[i];

    while (cookie.charAt(0) == ' ') { 
      cookie = cookie.substring(1); 
    }

    if (cookie.indexOf(cookieName) == 0) {
      return safeJsonParse(safeUriDecode(cookie.substring(cookieName.length, cookie.length)));
    }
  }

  return null;
}

CookieHandler.delete = function(cookieName, options) {
  var date = new Date();
  date.setTime(date.getTime() - 1000);
  CookieHandler.put(cookieName, '', date, options);
}

CookieHandler.putObject = function(obj, duration, options) {
  if (typeof(obj) !== 'object' || !obj) {
    return;
  }

  for (var item in obj) {
    CookieHandler.put(item, obj[item], duration, options);
  }
}

CookieHandler.getAll = function() {
  var out = ({ });
  var cookiesList = document.cookie.split('; ');

  if (!cookiesList[0]) {
    return out;
  }

  for (var i = 0; i < cookiesList.length; i++) {
    while (cookiesList[i].charAt(0) == ' ') { 
      cookiesList[i] = cookiesList[i].substring(1); 
    }

    var splitCookie = cookiesList[i].split('=');
    var cookieName = safeUriDecode(splitCookie[0]);
    var cookieValue = safeJsonParse(safeUriDecode(splitCookie[1]));

    out[cookieName] = cookieValue;
  }

  return out;
}

;// CONCATENATED MODULE: ./src/cookie.js
function Cookie() { }

Cookie.prototype = { }

Cookie.put = function(cookieName, value, duration, options) {
  CookieHandler.put(cookieName, value, duration, options);
}

Cookie.get = function(cookieName) {
  return CookieHandler.get(cookieName);
}

Cookie.delete = function(cookieName, options) {
  CookieHandler["delete"](cookieName, options);
}

Cookie.putObject = function(obj, duration, options) {
  CookieHandler.putObject(obj, duration, options);
}

Cookie.getAll = function() {
  return CookieHandler.getAll();
}

Cookie.createCookieOptions = function() {
  return new CookieOptions();
}

Cookie.createDateInDays = function(days) {
  return DateHandler.createDateInDays(days);
}

Cookie.createDateInHours = function(hours) {
  return DateHandler.createDateInHours(hours);
}

Cookie.createDateInMinutes = function(minutes) {
  return DateHandler.createDateInMinutes(minutes);
}

;// CONCATENATED MODULE: ./src/index.js
var libName = 'Cookie';

try
{
  if (getRoot()[libName] && isProduction()) {
    throw new Error('window["' + libName + '"] is already in use! Switching to: ' + 'window["___webpack_export_dp___"].' + libName);
  }

  getRoot()[libName] = Cookie;
}
catch(err)
{
  console.error(err);

	if (typeof(getRoot()['___webpack_export_dp___']) !== 'object') {
		getRoot()['___webpack_export_dp___'] = ({ });
	}

	getRoot()['___webpack_export_dp___'][libName] = Cookie;
}

/******/ })()
;