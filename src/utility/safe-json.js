export function safeJsonParse(value) {
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

export function safeJsonStringify(value) {
  try
  {    
    return JSON.stringify(value);
  }
  catch (err)
  {
    return '';
  }
}
