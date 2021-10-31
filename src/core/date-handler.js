export function DateHandler() { }

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
