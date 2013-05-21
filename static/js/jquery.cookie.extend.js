jQuery.subcookie = function (ckname, key, value, options) {
  
  //get value from cookie
  if (arguments.length > 3 && String(options) === "[object Object]") {
    options = jQuery.extend({}, options);
  }else{
    options = {};
  }
  
  var ckvalue = jQuery.cookie(ckname, options) || "";

  // get subvalue from cookie
  var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
  var storevalue = (result = new RegExp('(?:^|\|)' + encodeURIComponent(key) + '=([^\|]*)').exec(ckvalue)) ? decode(result[1]) : null;
  
  //add value into cookie
  if (arguments.length > 2 && String(value) !== "[object Object]") {
    value = value || "";
    
    //add key pair
    if(storevalue === null){
      ckvalue += '|' + key + '=' + value;
    //replace key pair
    }else{
      ckvalue = ckvalue.replace('|' + key + '=' + storevalue, '|' + key + '=' + value);
    }
    
    return jQuery.cookie(ckname, ckvalue, options);
  }
  
  return ((storevalue && storevalue.length>0) ? storevalue : null);
};