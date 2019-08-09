$(document).ready(() => {

    /* Close Button */
    $('#closeSidebar').click(() => {
        $('.sidebar').fadeOut();
        $('#unset-info').fadeOut();
        $('.trigger-sidebar').animate({opacity: '1'}, 'fast');
        $('.overlay-dark').fadeOut('slow');
        $('#itachi-info, #pain-info, #hidan-info, #obito-info, #deidara-info').fadeOut('fast');
        $('#memberOverlay').removeClass().addClass('member-overlay'); // Remove all classes and 'member-overlay' class
    });

    /* Toggle Fullscreen Menu, add animation to trigger-button */
    let menu = $('.fullscreen-menu'); 
    $('.trigger-button').click(() => { 
        if(menu.css('display') == 'block'){
            /* Reset to default values */
            $('p').animate({ left: '-100%' });
            // Animation for shuriken class
            $('.trigger-button').removeClass('animTriggger').fadeIn();

        } else if(menu.css('display') == 'none') {
            /* Add animations */
            // Slide animation for p element
            $('p').animate({ left: '0' }, 700);
            // Animation for shuriken class
            $('.trigger-button').addClass('animTriggger').fadeIn();
        }
        
        menu.fadeToggle();
    }); // End of click function
    
    /* Side bar Trigger */
    $('.trigger-sidebar').click(() => {
        $('.trigger-sidebar').animate({opacity: '0'});
        $('.sidebar').fadeIn().css({display: 'grid'});
    });

    /* Member List Show */
    $('#pain').click(() => {
        $('#unset-info').fadeOut();
        $('.trigger-sidebar').animate({opacity: '1'}, 'fast');
        $('.overlay-dark').fadeIn().removeClass().addClass('overlay-dark background-dark');
        $('.sidebar').fadeOut();
        $('#memberOverlay').removeClass().addClass('member-overlay pain');
        $('#deidara-info, #itachi-info, #hidan-info, #obito-info').fadeOut('fast');
        $('#pain-info').fadeIn();
    });

    $('#itachi').click(() => {
        $('#unset-info').fadeOut();
        $('.trigger-sidebar').animate({opacity: '1'}, 'fast');
        $('.overlay-dark').fadeIn().removeClass().addClass('overlay-dark background-dark');
        $('.sidebar').fadeOut();
        $('#memberOverlay').removeClass().addClass('member-overlay itachi');
        $('#deidara-info, #pain-info, #hidan-info, #obito-info').fadeOut('fast');
        $('#itachi-info').fadeIn();
    });

    $('#sasori').click(() => {
        $('.trigger-sidebar').animate({opacity: '1'}, 'fast');
        $('.overlay-dark').fadeIn().removeClass().addClass('overlay-dark background-dark');
        $('.sidebar').fadeOut();
        $('#memberOverlay').removeClass().addClass('member-overlay sasori');
    });

    $('#kanon').click(() => {
        $('.trigger-sidebar').animate({opacity: '1'}, 'fast');
        $('.overlay-dark').fadeIn().removeClass().addClass('overlay-dark background-dark');
        $('.sidebar').fadeOut();
        $('#memberOverlay').removeClass().addClass('member-overlay kanon');
    });

    $('#hidan').click(() => {
        $('#unset-info').fadeOut();
        $('.trigger-sidebar').animate({opacity: '1'}, 'fast');
        $('.overlay-dark').fadeIn().removeClass().addClass('overlay-dark background-dark');
        $('.sidebar').fadeOut();
        $('#memberOverlay').removeClass().addClass('member-overlay hidan');
        $('#itachi-info, #pain-info, #deidara-info, #obito-info').fadeOut('fast');
        $('#hidan-info').fadeIn();
    });

    $('#deidara').click(() => {
        $('#unset-info').fadeOut();
        $('.trigger-sidebar').animate({opacity: '1'}, 'fast');
        $('.overlay-dark').fadeIn().removeClass().addClass('overlay-dark background-dark');
        $('.sidebar').fadeOut();
        $('#memberOverlay').removeClass().addClass('member-overlay deidara');
        $('#itachi-info, #pain-info, #hidan-info, #obito-info').fadeOut('fast');
        $('#deidara-info').fadeIn();
    });

    $('#kakuzu').click(() => {
        $('.trigger-sidebar').animate({opacity: '1'}, 'fast');
        $('.overlay-dark').fadeIn().removeClass().addClass('overlay-dark background-dark');
        $('.sidebar').fadeOut();
        $('#memberOverlay').removeClass().addClass('member-overlay kakuzu');
    });

    $('#obito').click(() => {
        $('#unset-info').fadeOut();
        $('.trigger-sidebar').animate({opacity: '1'}, 'fast');
        $('.overlay-dark').fadeIn().removeClass().addClass('overlay-dark background-dark');
        $('.sidebar').fadeOut();
        $('#memberOverlay').removeClass().addClass('member-overlay obito');
        $('#deidara-info, #itachi-info, #hidan-info, #pain-info').fadeOut('fast');
        $('#obito-info').fadeIn();
    });

    $('.unset').click(() => {
        $('.trigger-sidebar').animate({opacity: '1'}, 'fast');
        $('.overlay-dark').fadeIn().removeClass().addClass('overlay-dark background-dark');
        $('.sidebar').fadeOut();
        $('#itachi-info, #pain-info, #hidan-info, #obito-info, #deidara-info').fadeOut('fast');
        $('#memberOverlay').removeClass().addClass('member-overlay');
        $('#unset-info').fadeIn().css({display: 'grid'});
    });

    $('#all').click(() => {
        $('.trigger-sidebar').animate({opacity: '1'}, 'fast');
        $('.sidebar').fadeOut('slow');
        $('.overlay-dark').fadeOut('slow');
        $('#memberOverlay').removeClass().addClass('member-overlay'); // Remove all classes and 'member-overlay' class
    });

}); // End of ready function

