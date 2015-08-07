
var AuthBlocksSwitching = function() {
    // Init Bootstrap Forms Validation, for more examples you can check out https://github.com/jzaefferer/jquery-validation
    var initBlockFormsApi = function(){
        jQuery(document).on('change', '.js-checbox-terms', function () {
            var $elem = $(this)
                $submit = $(this).closest('form').find('[type="submit"]');
            if ($elem.is(':checked')) {
                $submit.removeAttr('disabled');
            } else {
                $submit.attr('disabled', 'disabled');
            }
        });
    };


    return {
        init: function () {
            
            initBlockFormsApi();

        }
    };
}();

// Initialize when page loads
jQuery(function() {
    AuthBlocksSwitching.init();
    $('.block-auth-select')
});
