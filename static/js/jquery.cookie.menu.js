/*
 Toggles the menu on & off (using cookies)
 */
jQueryMenu = {
    options: {
        hideAll: 'hideAllMenu',
        showAll: 'showAllMenu'
    },

    cookieMenu : function(ids, options){
    
        jQueryMenu.options = jQueryMenu.prepare(ids, options);
        
        jQuery.each(ids, function(index, item){
            jQueryMenu.restoreMenu(item);
            jQuery('#' + item).click(function(e){
                jQueryMenu.toggleMenu(item);
            });
        });
        jQueryMenu.restoreShowHideAllMenu();
        
        jQuery('#'+jQueryMenu.options.hideAll).click(function(e){
            jQueryMenu.hideAll();
        });
        jQuery('#'+jQueryMenu.options.showAll).click(function(e){
            jQueryMenu.showAll();
        });
    },
    
    prepare: function(ids, options){
        options = jQuery.extend(jQueryMenu.options, options);
        options.ids = jQuery.grep(ids, function(item, index){
            return jQuery('#' + item);
        });
        options.selector = jQuery.map(jQueryMenu.options.ids, function(item, index){
            return '#' + item;
        }).join(',');
        return options;
    },
    
    openMenu: function(sectID){
        jQuery('#' + sectID).removeClass('header-closed');
        jQuery('#' + sectID).addClass('header-open');
        jQuery('#' + sectID + '_ul').show();
        jQuery.subcookie("_menu_cookie_", sectID, null);
    },
    
    closeMenu: function(sectID){
        jQuery('#' + sectID).removeClass('header-open');
        jQuery('#' + sectID).addClass('header-closed');
        jQuery('#' + sectID + '_ul').hide();
        jQuery.subcookie("_menu_cookie_", sectID, '0');
    },
    
    toggleMenu: function(sectID){
        if (jQuery.subcookie("_menu_cookie_", sectID) === null) {
            jQueryMenu.closeMenu(sectID);
        }
        else {
            jQueryMenu.openMenu(sectID);
        }
        jQueryMenu.restoreShowHideAllMenu();
    },
    
    /*
     Restores a state of a menu
     */
    restoreMenu: function(sectID){
        if (jQuery.subcookie("_menu_cookie_", sectID) === null) {
            jQueryMenu.openMenu(sectID);
        }
        else {
            jQueryMenu.closeMenu(sectID);
        }
    },
    
    restoreShowHideAllMenu: function(){
        var closesize = jQuery(jQueryMenu.options.selector).filter('.header-closed').size();
        
        if (closesize === 0) {
            jQuery('#' + jQueryMenu.options.hideAll).show();
            jQuery('#' + jQueryMenu.options.showAll).hide();
        }
        else {
            jQuery('#' + jQueryMenu.options.hideAll).hide();
            jQuery('#' + jQueryMenu.options.showAll).show();
        }
    },
    
    // hidden or show all menu
    hideAll : function(){
        jQuery.each(jQueryMenu.options.ids, function(index, item){
            jQueryMenu.closeMenu(item);
        });
        
        jQueryMenu.restoreShowHideAllMenu();
    },
    
    showAll : function(){
        jQuery.each(jQueryMenu.options.ids, function(index, item){
            jQueryMenu.openMenu(item);
        });
        
        jQueryMenu.restoreShowHideAllMenu();
    }

};