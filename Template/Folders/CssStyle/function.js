
$(function(){
   var atual_fs,next_fs, prev_fs;
    
    $('.next').click(function(){
        atual_fs = $(this).parent();
        next_fs = $(this).parent().next();
        
        
        $('#progress li').eq('fieldset').index(next_fs)).addClass('ativo')
        atual_fs.hide(800);
        next_fs.show(800);
    });
    
    ($('#formulario input[type=submit]').click(function(){
        return false;
        
    });
                                               
});


