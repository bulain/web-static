$(document).ready(function() {
    if ($.browser.msie){
     	$("input[type='text'], input[type='password'], textarea, select")
     		.focus(function(){$(this).addClass("ie_focus");})
     		.blur(function(){$(this).removeClass("ie_focus");});
    }
});

function destroy(lnk){
    if (confirm('Are you sure?')) { 
    	$("<form style='display:none' method='POST'></form>")
        	.appendTo($(lnk).parent())
        	.attr('action', lnk.href)
        	.submit();
    };
    return false;
}

function requestLocale(locale){
    $("<form style='display:none' method='POST'/>")
        .attr('action', window.location.href)
        .appendTo($('#login'))
        .append($("<input type='hidden' name='request_locale'/>").val(locale))
        .submit();
    return false;
}