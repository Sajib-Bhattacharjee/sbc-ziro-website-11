(function ($) {
    "use strict";

    // dynamic year
    if ($(".dynamic-year").length) {
        let currentYear = new Date().getFullYear();
        $(".dynamic-year").html(currentYear);
    }

    //AOS
    AOS.init();

})(jQuery);