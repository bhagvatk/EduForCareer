jQuery(document).ready(function($){
    //open popup
    $('.cd-popup-trigger').on('click', function(event){
        event.preventDefault();
        $('.cd-popup').addClass('is-visible');
    });
    
    //close popup
    $('.cd-popup').on('click', function(event){
        if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.cd-popup').removeClass('is-visible');
        }
    });
});

/*Another modal*/

jQuery(document).ready(function($){
    //open popup
    $('.cd-pop-dev').on('click', function(event){
        event.preventDefault();
        $('.cd-pop').addClass('is-visible');
    });
    
    //close popup
    $('.cd-pop').on('click', function(event){
        if( $(event.target).is('.cd-pop-close') || $(event.target).is('.cd-pop') ) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.cd-pop').removeClass('is-visible');
        }
    });
});


jQuery(document).ready(function($){
    //open popup
    $('.cd-pop-tri').on('click', function(event){
        event.preventDefault();
        $('.cd-popon').addClass('is-visible');
    });
    
    //close popup
    $('.cd-popon').on('click', function(event){
        if( $(event.target).is('.cd-popon-close') || $(event.target).is('.cd-popon') ) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event){
        if(event.which=='27'){
            $('.cd-popon').removeClass('is-visible');
        }
    });
});