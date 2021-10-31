import { DateHandler } from "./core/date-handler";
import { CookieHandler } from "./core/cookie-handler";
import { CookieOptions } from "./core/cookie-options";

export function Cookie() { }

Cookie.prototype = { }

Cookie.put = function(cookieName, value, duration, options) {
  CookieHandler.put(cookieName, value, duration, options);
}

Cookie.get = function(cookieName) {
  return CookieHandler.get(cookieName);
}

Cookie.delete = function(cookieName, options) {
  CookieHandler.delete(cookieName, options);
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
