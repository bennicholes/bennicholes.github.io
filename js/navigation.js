//
// Logic to add fade in/out on the menu content.
//

(function(){
    $('.link').click(function () {
        var self = $(this);

        if (self.hasClass('on')){
        } else {
            $('[data-id="content"]').removeClass('on');
            $('#' + self.data('id')).addClass('on');
        }
    });
})();
