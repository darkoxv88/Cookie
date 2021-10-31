import { safeJsonParse, safeJsonStringify } from "../utility/safe-json";
import { safeUriEncode, safeUriDecode } from "./../utility/safe-uri";

import { CookieOptions } from "./cookie-options";

export function CookieHandler() { }

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
