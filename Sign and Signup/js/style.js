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
    $('.cd-pop-trigger').on('click', function(event){
        event.preventDefault();
        $('.cd-pop').addClass('is-visible');
    });
    
    //close popup
    $('.cd-pop').on('click', function(event){
        if( $(event.target).is('.cd-pop-close') || $(event.target).is('.cd-popup') ) {
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


function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}



