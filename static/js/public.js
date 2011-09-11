$(document).ready(function() {
    if ($.browser.msie){
     	$("input[type='text'], input[type='password'], textarea, select")
     		.focus(function(){$(this).addClass("ie_focus");})
     		.blur(function(){$(this).removeClass("ie_focus");});
    }
});

function destroy(){
	if (confirm('Are you sure?')) { 
		var f = document.createElement('form'); 
		f.style.display = 'none'; 
		this.parentNode.appendChild(f); 
		f.method = 'POST'; 
		f.action = this.href;
		f.submit(); 
	};
	return false;
}