!(function (i) {
  var t;
  (t = {
    init: function (a, n) {
      i(window).scroll(function () {
        t.animate(a, n);
      }),
        i(window).trigger("scroll");
    },
    animate: function (t, a) {
      var n, s, e;
      (s = i(window).height()),
        (e = i(window).scrollTop()),
        (n = e + s),
        i.each(t, function () {
          var t, s, o, r, d, h, l, c, m;
          (t = "animated"),
            (s = i(this).data("animate")),
            (c = i(this).data("offset")),
            (d = i(this).data("duration")),
            (r = i(this).data("delay")),
            (l = i(this).data("iteration")),
            (h = i(this).outerHeight()),
            (m = i(this).offset().top),
            (o = m + h),
            c && ((m += c), (o -= c)),
            4 === a.animateCssVersion &&
              ((t = "animate__animated"), (s = "animate__" + s)),
            i(this).css({
              "-webkit-animation-duration": d,
              "animation-duration": d,
            }),
            i(this).css({ "-webkit-animation-delay": r, "animation-delay": r }),
            i(this).css({
              "-webkit-animation-iteration-count": l,
              "animation-iteration-count": l,
            }),
            o >= e && m <= n
              ? (i(this).css("visibility", "visible"),
                i(this).addClass(s),
                i(this).addClass(t))
              : !1 === a.once &&
                (i(this).css("visibility", "hidden"),
                i(this).removeClass(s),
                i(this).removeClass(t));
        });
    },
  }),
    (jQuery.fn.scrolla = function (a) {
      if (
        ((a = i.extend({ mobile: !1, once: !1, animateCssVersion: 4 }, a)),
        !1 === a.mobile &&
          /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          ))
      )
        return !1;
      t.init(this, a);
    });
})(jQuery);
