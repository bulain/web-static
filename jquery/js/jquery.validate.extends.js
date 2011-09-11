jQuery.validator.addMethod("time", function(value, element, param) {    
    return this.optional(element) || /^([0-1]\d|2[0-3]):[0-5]\d$/.test(value);    
}, 'Please enter a valid time.');
jQuery.validator.addClassRules("time", {time: true});