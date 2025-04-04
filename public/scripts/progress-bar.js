jQuery(document).ready(function ($) {
  var ProgressBar = (function () {
    "use strict";
    var t = function () {
      $(document).ready(function () {
        $(".progress").each(function () {
          $(this).appear(function () {
            $(this).animate(
              {
                opacity: 1,
                left: "0px",
              },
              800
            );
            var t = $(this).find(".progress-bar").attr("data-width"),
              r = $(this).find(".progress-bar").attr("data-height");
            $(this)
              .find(".progress-bar")
              .animate(
                {
                  width: t + "%",
                  height: r + "%",
                },
                100,
                "linear"
              );
          });
        });
      });
    };
    return {
      init: function () {
        t();
      },
    };
  })();
  $(document).ready(function () {
    ProgressBar.init();
  });
});
