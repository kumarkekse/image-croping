(function($) {
    $.fn.crop = function() {
        $(this).bind({
            click: function() {
              if ($(this).attr("src") != "") {
                $(this).replaceWith('<div class="testimg" style="' +
                    'background: url(' + this.src + ') no-repeat scroll;' +
                    'height: ' + $(this).attr('size').split('*')[0] + ';' +
                    'width:' + $(this).attr('size').split('*')[1] + ';' +
                "></div>');
              };
            },
        });
    }
}(jQuery));
