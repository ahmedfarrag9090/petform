$(function(){
    
    // for navbar in small screens

    $('.nav-btn').on('click', function(){

            $('.nav-links').slideToggle();

    });
    
    // for form validation 
    var subBtn = $('input[type="submit"]'),
        numInp = $('input[placeholder="Zip Code"]');
    

    subBtn.on('click', function(e){
        
        $('input:not(.optional), select').each(function(){
            
            if($(this).val() == ''){
                
                $(this).css('outline', '1px solid #fd5a5a');
                
                e.preventDefault();
                
                subBtn.next('span').fadeIn(300);
                
            } else {
                $(this).css('outline', 'none');
                
                 subBtn.next('span').fadeOut(300);
            }
            
            
            if (numInp.val().length > 5 || numInp.val() == '') {

                numInp.css('outline', '1px solid #fd5a5a').next('span').fadeIn(300);

                e.preventDefault();
                
                subBtn.next('span').fadeIn(300);

            } else {
                
                $(numInp).css('outline', 'none').next('span').fadeOut(300);
                
                subBtn.next('span').fadeOut(300);
                 
            }
            
        });
    });

});