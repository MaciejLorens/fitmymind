/**
 * Table of Contents:
 *
 *  jQuery Cookie Plugin v1.4.1
 *  jquery.easing.1.3.js for piechart smoothness and other
 *  jquery.scrollTo
 *  jquery.localScroll
 *  SmoothScroll for websites
 *  jQuery appear plugin
 *  modernizr
 *  scrollToFixed
 *  Menuzord - Responsive Megamenu
 *  jQuery Isotope
 *  jQuery Parallax
 *  animateNumbers
 *  jflickrfeed
 *  fitvids
 *  Retina.js
 *  ajaxchimp
 *  tweetie
 *  menufullpage
 *  WOW animation
 *  Typed Animation
 *  Owl carousel
 *  FlexSlider
 *  Magnific Popup
 *  Nivo Lightbox
 *  PrettyPhoto Lightbox
 *  equalHeights
 *  Maximage Slider
 *  BxSlider
 *  FullCalendar
 *  jQuery.countdown
 *  instafeed.js
 *  jQuery Validation
 *  jQuery Form
 *  code highlight
 *  YTPlayer
 *  CountDown Timer
 *  Infinite Scroll
 *  jQuery Pagination Plugin
 *  Vide jQuery plugin for video backgrounds
 *  jquery-timepicker
 *
 * ===============================================
 */

/*
 *  jquery.scrollTo
 * -----------------------------------------------
*/
/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
;(function (f) {
  "use strict";
  "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery)
})(function ($) {
  "use strict";

  function n(a) {
    return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
  }

  function h(a) {
    return $.isFunction(a) || $.isPlainObject(a) ? a : {top: a, left: a}
  }

  var p = $.scrollTo = function (a, d, b) {
    return $(window).scrollTo(a, d, b)
  };
  p.defaults = {axis: "xy", duration: 0, limit: !0};
  $.fn.scrollTo = function (a, d, b) {
    "object" === typeof d && (b = d, d = 0);
    "function" === typeof b && (b = {onAfter: b});
    "max" === a && (a = 9E9);
    b = $.extend({}, p.defaults, b);
    d = d || b.duration;
    var u = b.queue && 1 < b.axis.length;
    u && (d /= 2);
    b.offset = h(b.offset);
    b.over = h(b.over);
    return this.each(function () {
      function k(a) {
        var k = $.extend({}, b, {
          queue: !0,
          duration: d,
          complete: a && function () {
            a.call(q, e, b)
          }
        });
        r.animate(f, k)
      }

      if (null !== a) {
        var l = n(this), q = l ? this.contentWindow || window : this, r = $(q),
          e = a, f = {}, t;
        switch (typeof e) {
          case "number":
          case "string":
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) {
              e = h(e);
              break
            }
            e = l ? $(e) : $(e, q);
          case "object":
            if (e.length === 0) return;
            if (e.is || e.style) t = (e = $(e)).offset()
        }
        var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset;
        $.each(b.axis.split(""), function (a, c) {
          var d = "x" === c ? "Left" : "Top", m = d.toLowerCase(),
            g = "scroll" + d, h = r[g](), n = p.max(q, c);
          t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]), b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0, f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0), f[g] += v[m] || 0, b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m], f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d);
          b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n));
          !a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst), f = {}))
        });
        k(b.onAfter)
      }
    })
  };
  p.max = function (a, d) {
    var b = "x" === d ? "Width" : "Height", h = "scroll" + b;
    if (!n(a)) return a[h] - $(a)[b.toLowerCase()]();
    var b = "client" + b, k = a.ownerDocument || a.document,
      l = k.documentElement, k = k.body;
    return Math.max(l[h], k[h]) - Math.min(l[b], k[b])
  };
  $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
    get: function (a) {
      return $(a.elem)[a.prop]()
    }, set: function (a) {
      var d = this.get(a);
      if (a.options.interrupt && a._last && a._last !== d) return $(a.elem).stop();
      var b = Math.round(a.now);
      d !== b && ($(a.elem)[a.prop](b), a._last = this.get(a))
    }
  };
  return p
});

/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
!function (e) {
  function r(r) {
    return e(r).filter(function () {
      return e(this).is(":appeared")
    })
  }

  function t() {
    a = !1;
    for (var e = 0, t = i.length; t > e; e++) {
      var n = r(i[e]);
      if (n.trigger("appear", [n]), p[e]) {
        var o = p[e].not(n);
        o.trigger("disappear", [o])
      }
      p[e] = n
    }
  }

  function n(e) {
    i.push(e), p.push()
  }

  var i = [], o = !1, a = !1, f = {interval: 250, force_process: !1},
    u = e(window), p = [];
  e.expr[":"].appeared = function (r) {
    var t = e(r);
    if (!t.is(":visible")) return !1;
    var n = u.scrollLeft(), i = u.scrollTop(), o = t.offset(), a = o.left,
      f = o.top;
    return f + t.height() >= i && f - (t.data("appear-top-offset") || 0) <= i + u.height() && a + t.width() >= n && a - (t.data("appear-left-offset") || 0) <= n + u.width() ? !0 : !1
  }, e.fn.extend({
    appear: function (r) {
      var i = e.extend({}, f, r || {}), u = this.selector || this;
      if (!o) {
        var p = function () {
          a || (a = !0, setTimeout(t, i.interval))
        };
        e(window).scroll(p).resize(p), o = !0
      }
      return i.force_process && setTimeout(t, i.interval), n(u), e(u)
    }
  }), e.extend({
    force_appear: function () {
      return o ? (t(), !0) : !1
    }
  })
}(function () {
  return "undefined" != typeof module ? require("jquery") : jQuery
}());

/*
 *  scrollToFixed
 * -----------------------------------------------
*/
(function (a) {
  a.isScrollToFixed = function (b) {
    return !!a(b).data("ScrollToFixed")
  };
  a.ScrollToFixed = function (d, i) {
    var m = this;
    m.$el = a(d);
    m.el = d;
    m.$el.data("ScrollToFixed", m);
    var c = false;
    var H = m.$el;
    var I;
    var F;
    var k;
    var e;
    var z;
    var E = 0;
    var r = 0;
    var j = -1;
    var f = -1;
    var u = null;
    var A;
    var g;

    function v() {
      H.trigger("preUnfixed.ScrollToFixed");
      l();
      H.trigger("unfixed.ScrollToFixed");
      f = -1;
      E = H.offset().top;
      r = H.offset().left;
      if (m.options.offsets) {
        r += (H.offset().left - H.position().left)
      }
      if (j == -1) {
        j = r
      }
      I = H.css("position");
      c = true;
      if (m.options.bottom != -1) {
        H.trigger("preFixed.ScrollToFixed");
        x();
        H.trigger("fixed.ScrollToFixed")
      }
    }

    function o() {
      var J = m.options.limit;
      if (!J) {
        return 0
      }
      if (typeof (J) === "function") {
        return J.apply(H)
      }
      return J
    }

    function q() {
      return I === "fixed"
    }

    function y() {
      return I === "absolute"
    }

    function h() {
      return !(q() || y())
    }

    function x() {
      if (!q()) {
        var J = H[0].getBoundingClientRect();
        u.css({
          display: H.css("display"),
          width: J.width,
          height: J.height,
          "float": H.css("float")
        });
        cssOptions = {
          "z-index": m.options.zIndex,
          position: "fixed",
          top: m.options.bottom == -1 ? t() : "",
          bottom: m.options.bottom == -1 ? "" : m.options.bottom,
          "margin-left": "0px"
        };
        if (!m.options.dontSetWidth) {
          cssOptions.width = H.css("width")
        }
        H.css(cssOptions);
        H.addClass(m.options.baseClassName);
        if (m.options.className) {
          H.addClass(m.options.className)
        }
        I = "fixed"
      }
    }

    function b() {
      var K = o();
      var J = r;
      if (m.options.removeOffsets) {
        J = "";
        K = K - E
      }
      cssOptions = {
        position: "absolute",
        top: K,
        left: J,
        "margin-left": "0px",
        bottom: ""
      };
      if (!m.options.dontSetWidth) {
        cssOptions.width = H.css("width")
      }
      H.css(cssOptions);
      I = "absolute"
    }

    function l() {
      if (!h()) {
        f = -1;
        u.css("display", "none");
        H.css({
          "z-index": z,
          width: "",
          position: F,
          left: "",
          top: e,
          "margin-left": ""
        });
        H.removeClass("scroll-to-fixed-fixed");
        if (m.options.className) {
          H.removeClass(m.options.className)
        }
        I = null
      }
    }

    function w(J) {
      if (J != f) {
        H.css("left", r - J);
        f = J
      }
    }

    function t() {
      var J = m.options.marginTop;
      if (!J) {
        return 0
      }
      if (typeof (J) === "function") {
        return J.apply(H)
      }
      return J
    }

    function B() {
      if (!a.isScrollToFixed(H) || H.is(":hidden")) {
        return
      }
      var M = c;
      var L = h();
      if (!c) {
        v()
      } else {
        if (h()) {
          E = H.offset().top;
          r = H.offset().left
        }
      }
      var J = a(window).scrollLeft();
      var N = a(window).scrollTop();
      var K = o();
      if (m.options.minWidth && a(window).width() < m.options.minWidth) {
        if (!h() || !M) {
          p();
          H.trigger("preUnfixed.ScrollToFixed");
          l();
          H.trigger("unfixed.ScrollToFixed")
        }
      } else {
        if (m.options.maxWidth && a(window).width() > m.options.maxWidth) {
          if (!h() || !M) {
            p();
            H.trigger("preUnfixed.ScrollToFixed");
            l();
            H.trigger("unfixed.ScrollToFixed")
          }
        } else {
          if (m.options.bottom == -1) {
            if (K > 0 && N >= K - t()) {
              if (!L && (!y() || !M)) {
                p();
                H.trigger("preAbsolute.ScrollToFixed");
                b();
                H.trigger("unfixed.ScrollToFixed")
              }
            } else {
              if (N >= E - t()) {
                if (!q() || !M) {
                  p();
                  H.trigger("preFixed.ScrollToFixed");
                  x();
                  f = -1;
                  H.trigger("fixed.ScrollToFixed")
                }
                w(J)
              } else {
                if (!h() || !M) {
                  p();
                  H.trigger("preUnfixed.ScrollToFixed");
                  l();
                  H.trigger("unfixed.ScrollToFixed")
                }
              }
            }
          } else {
            if (K > 0) {
              if (N + a(window).height() - H.outerHeight(true) >= K - (t() || -n())) {
                if (q()) {
                  p();
                  H.trigger("preUnfixed.ScrollToFixed");
                  if (F === "absolute") {
                    b()
                  } else {
                    l()
                  }
                  H.trigger("unfixed.ScrollToFixed")
                }
              } else {
                if (!q()) {
                  p();
                  H.trigger("preFixed.ScrollToFixed");
                  x()
                }
                w(J);
                H.trigger("fixed.ScrollToFixed")
              }
            } else {
              w(J)
            }
          }
        }
      }
    }

    function n() {
      if (!m.options.bottom) {
        return 0
      }
      return m.options.bottom
    }

    function p() {
      var J = H.css("position");
      if (J == "absolute") {
        H.trigger("postAbsolute.ScrollToFixed")
      } else {
        if (J == "fixed") {
          H.trigger("postFixed.ScrollToFixed")
        } else {
          H.trigger("postUnfixed.ScrollToFixed")
        }
      }
    }

    var D = function (J) {
      if (H.is(":visible")) {
        c = false;
        B()
      }
    };
    var G = function (J) {
      (!!window.requestAnimationFrame) ? requestAnimationFrame(B) : B()
    };
    var C = function () {
      var K = document.body;
      if (document.createElement && K && K.appendChild && K.removeChild) {
        var M = document.createElement("div");
        if (!M.getBoundingClientRect) {
          return null
        }
        M.innerHTML = "x";
        M.style.cssText = "position:fixed;top:100px;";
        K.appendChild(M);
        var N = K.style.height, O = K.scrollTop;
        K.style.height = "3000px";
        K.scrollTop = 500;
        var J = M.getBoundingClientRect().top;
        K.style.height = N;
        var L = (J === 100);
        K.removeChild(M);
        K.scrollTop = O;
        return L
      }
      return null
    };
    var s = function (J) {
      J = J || window.event;
      if (J.preventDefault) {
        J.preventDefault()
      }
      J.returnValue = false
    };
    m.init = function () {
      m.options = a.extend({}, a.ScrollToFixed.defaultOptions, i);
      z = H.css("z-index");
      m.$el.css("z-index", m.options.zIndex);
      u = a("<div />");
      I = H.css("position");
      F = H.css("position");
      k = H.css("float");
      e = H.css("top");
      if (h()) {
        m.$el.after(u)
      }
      a(window).bind("resize.ScrollToFixed", D);
      a(window).bind("scroll.ScrollToFixed", G);
      if ("ontouchmove" in window) {
        a(window).bind("touchmove.ScrollToFixed", B)
      }
      if (m.options.preFixed) {
        H.bind("preFixed.ScrollToFixed", m.options.preFixed)
      }
      if (m.options.postFixed) {
        H.bind("postFixed.ScrollToFixed", m.options.postFixed)
      }
      if (m.options.preUnfixed) {
        H.bind("preUnfixed.ScrollToFixed", m.options.preUnfixed)
      }
      if (m.options.postUnfixed) {
        H.bind("postUnfixed.ScrollToFixed", m.options.postUnfixed)
      }
      if (m.options.preAbsolute) {
        H.bind("preAbsolute.ScrollToFixed", m.options.preAbsolute)
      }
      if (m.options.postAbsolute) {
        H.bind("postAbsolute.ScrollToFixed", m.options.postAbsolute)
      }
      if (m.options.fixed) {
        H.bind("fixed.ScrollToFixed", m.options.fixed)
      }
      if (m.options.unfixed) {
        H.bind("unfixed.ScrollToFixed", m.options.unfixed)
      }
      if (m.options.spacerClass) {
        u.addClass(m.options.spacerClass)
      }
      H.bind("resize.ScrollToFixed", function () {
        u.height(H.height())
      });
      H.bind("scroll.ScrollToFixed", function () {
        H.trigger("preUnfixed.ScrollToFixed");
        l();
        H.trigger("unfixed.ScrollToFixed");
        B()
      });
      H.bind("detach.ScrollToFixed", function (J) {
        s(J);
        H.trigger("preUnfixed.ScrollToFixed");
        l();
        H.trigger("unfixed.ScrollToFixed");
        a(window).unbind("resize.ScrollToFixed", D);
        a(window).unbind("scroll.ScrollToFixed", G);
        H.unbind(".ScrollToFixed");
        u.remove();
        m.$el.removeData("ScrollToFixed")
      });
      D()
    };
    m.init()
  };
  a.ScrollToFixed.defaultOptions = {
    marginTop: 0,
    limit: 0,
    bottom: -1,
    zIndex: 1000,
    baseClassName: "scroll-to-fixed-fixed"
  };
  a.fn.scrollToFixed = function (b) {
    return this.each(function () {
      (new a.ScrollToFixed(this, b))
    })
  }
})(jQuery);

/*
 *  Menuzord - Responsive Megamenu
 * -----------------------------------------------
*/
!function (e) {
  jQuery.fn.menuzord = function (n) {
    function i(n) {
      "fade" == p.effect ? e(n).children(".dropdown, .megamenu").stop(!0, !0).delay(p.showDelay).fadeIn(p.showSpeed).addClass(p.animation) : e(n).children(".dropdown, .megamenu").stop(!0, !0).delay(p.showDelay).slideDown(p.showSpeed).addClass(p.animation)
    }

    function d(n) {
      "fade" == p.effect ? e(n).children(".dropdown, .megamenu").stop(!0, !0).delay(p.hideDelay).fadeOut(p.hideSpeed).removeClass(p.animation) : e(n).children(".dropdown, .megamenu").stop(!0, !0).delay(p.hideDelay).slideUp(p.hideSpeed).removeClass(p.animation), e(n).children(".dropdown, .megamenu").find(".dropdown, .megamenu").stop(!0, !0).delay(p.hideDelay).fadeOut(p.hideSpeed)
    }

    function o() {
      e(g).find(".dropdown, .megamenu").hide(0), navigator.userAgent.match(/Mobi/i) || window.navigator.msMaxTouchPoints > 0 || "click" == p.trigger ? (e(".menuzord-menu > li > a, .menuzord-menu ul.dropdown li a").bind("click touchstart", function (n) {
        return n.stopPropagation(), n.preventDefault(), e(this).parent("li").siblings("li").find(".dropdown, .megamenu").stop(!0, !0).fadeOut(300), "none" == e(this).siblings(".dropdown, .megamenu").css("display") ? (i(e(this).parent("li")), !1) : (d(e(this).parent("li")), void (window.location.href = e(this).attr("href")))
      }), e(document).bind("click.menu touchstart.menu", function (n) {
        0 == e(n.target).closest(".menuzord").length && e(".menuzord-menu").find(".dropdown, .megamenu").fadeOut(300)
      })) : e(w).bind("mouseenter", function () {
        i(this)
      }).bind("mouseleave", function () {
        d(this)
      })
    }

    function t() {
      e(g).find(".dropdown, .megamenu").hide(0), e(g).find(".indicator").each(function () {
        e(this).parent("a").siblings(".dropdown, .megamenu").length > 0 && e(this).bind("click", function (n) {
          e(g).scrollTo({
            top: 45,
            left: 0
          }, 600), "A" == e(this).parent().prop("tagName") && n.preventDefault(), "none" == e(this).parent("a").siblings(".dropdown, .megamenu").css("display") ? (e(this).parent("a").siblings(".dropdown, .megamenu").delay(p.showDelay).slideDown(p.showSpeed), e(this).parent("a").parent("li").siblings("li").find(".dropdown, .megamenu").slideUp(p.hideSpeed)) : e(this).parent("a").siblings(".dropdown, .megamenu").slideUp(p.hideSpeed)
        })
      })
    }

    function a() {
      var n = e(g).children("li").children(".dropdown, .megamenu");
      if (e(window).innerWidth() > v) for (var i = e(f).outerWidth(!0), d = 0; d < n.length; d++) e(n[d]).parent("li").position().left + e(n[d]).outerWidth() > i ? e(n[d]).css("right", 0) : ((i == e(n[d]).outerWidth() || i - e(n[d]).outerWidth() < 20) && e(n[d]).css("left", 0), e(n[d]).parent("li").position().left + e(n[d]).outerWidth() < i && e(n[d]).css("right", "auto"))
    }

    function s() {
      e(g).hide(0), e(m).show(0).click(function () {
        "none" == e(g).css("display") ? e(g).slideDown(p.showSpeed) : e(g).slideUp(p.hideSpeed).find(".dropdown, .megamenu").hide(p.hideSpeed)
      })
    }

    function r() {
      e(g).show(0), e(m).hide(0)
    }

    function l() {
      e(f).find("li, a").unbind(), e(document).unbind("click.menu touchstart.menu")
    }

    function h() {
      function n(n) {
        var i = e(n).find(".menuzord-tabs-nav > li"),
          d = e(n).find(".menuzord-tabs-content");
        e(i).bind("click touchstart", function (n) {
          n.stopPropagation(), n.preventDefault(), e(i).removeClass("active"), e(this).addClass("active"), e(d).hide(0), e(d[e(this).index()]).show(0)
        })
      }

      if (e(g).find(".menuzord-tabs").length > 0) for (var i = e(g).find(".menuzord-tabs"), d = 0; d < i.length; d++) n(i[d])
    }

    function c() {
      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    }

    function u() {
      if (a(), c() <= v && b > v && (l(), p.responsive ? (s(), t()) : o()), c() > v && v >= y && (l(), r(), o()), b = c(), y = c(), h(), /MSIE (\d+\.\d+);/.test(navigator.userAgent) && c() < v) {
        var n = new Number(RegExp.$1);
        8 == n && (e(m).hide(0), e(g).show(0), l(), o())
      }
    }

    var p;
    e.extend(p = {
      showSpeed: 300,
      hideSpeed: 300,
      trigger: "hover",
      showDelay: 0,
      hideDelay: 0,
      effect: "fade",
      align: "left",
      responsive: !0,
      animation: "none",
      indentChildren: !0,
      indicatorFirstLevel: "+",
      indicatorSecondLevel: "+",
      scrollable: !0,
      scrollableMaxHeight: 400
    }, n);
    var m, f = e(this), g = e(f).children(".menuzord-menu"),
      w = e(g).find("li"), v = 900, b = 2e3, y = 200;
    e(g).children("li").children("a").each(function () {
      e(this).siblings(".dropdown, .megamenu").length > 0 && e(this).append("<span class='indicator'><i class='fa fa-angle-down mr-5'></i>" + p.indicatorFirstLevel + "</span>")
    }), e(g).find(".dropdown").children("li").children("a").each(function () {
      e(this).siblings(".dropdown").length > 0 && e(this).append("<span class='indicator'>" + p.indicatorSecondLevel + "</span>")
    }), "right" == p.align && e(g).addClass("menuzord-right"), p.indentChildren && e(g).addClass("menuzord-indented"), p.responsive && (e(f).addClass("menuzord-responsive").prepend("<a href='javascript:void(0)' class='showhide'><em></em><em></em><em></em></a>"), m = e(f).children(".showhide")), p.scrollable && p.responsive && e(g).css("max-height", p.scrollableMaxHeight).addClass("scrollable").append("<li class='scrollable-fix'></li>"), u(), e(window).resize(function () {
      u(), a()
    })
  }
}(jQuery);

/*!
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
!function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, function () {
  function t() {
  }

  var e = t.prototype;
  return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {}, n = i[t] = i[t] || [];
      return -1 == n.indexOf(e) && n.push(e), this
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {}, n = i[t] = i[t] || [];
      return n[e] = !0, this
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = i.indexOf(e);
      return -1 != n && i.splice(n, 1), this
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = 0, o = i[n];
      e = e || [];
      for (var r = this._onceEvents && this._onceEvents[t]; o;) {
        var s = r && r[o];
        s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
      }
      return this
    }
  }, t
}), function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, function (t, e) {
  function i(t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }

  function n(t) {
    var e = [];
    if (Array.isArray(t)) e = t; else if ("number" == typeof t.length) for (var i = 0; i < t.length; i++) e.push(t[i]); else e.push(t);
    return e
  }

  function o(t, e, r) {
    return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function () {
      this.check()
    }.bind(this))) : new o(t, e, r)
  }

  function r(t) {
    this.img = t
  }

  function s(t, e) {
    this.url = t, this.element = e, this.img = new Image
  }

  var h = t.jQuery, a = t.console;
  o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this)
  }, o.prototype.addElementImages = function (t) {
    "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
    var e = t.nodeType;
    if (e && d[e]) {
      for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var o = i[n];
        this.addImage(o)
      }
      if ("string" == typeof this.options.background) {
        var r = t.querySelectorAll(this.options.background);
        for (n = 0; n < r.length; n++) {
          var s = r[n];
          this.addElementBackgroundImages(s)
        }
      }
    }
  };
  var d = {1: !0, 9: !0, 11: !0};
  return o.prototype.addElementBackgroundImages = function (t) {
    var e = getComputedStyle(t);
    if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
      var o = n && n[2];
      o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
    }
  }, o.prototype.addImage = function (t) {
    var e = new r(t);
    this.images.push(e)
  }, o.prototype.addBackground = function (t, e) {
    var i = new s(t, e);
    this.images.push(i)
  }, o.prototype.check = function () {
    function t(t, i, n) {
      setTimeout(function () {
        e.progress(t, i, n)
      })
    }

    var e = this;
    return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) {
      e.once("progress", t), e.check()
    }) : void this.complete()
  }, o.prototype.progress = function (t, e, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
  }, o.prototype.complete = function () {
    var t = this.hasAnyBroken ? "fail" : "done";
    if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var e = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[e](this)
    }
  }, r.prototype = Object.create(e.prototype), r.prototype.check = function () {
    var t = this.getIsImageComplete();
    return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src))
  }, r.prototype.getIsImageComplete = function () {
    return this.img.complete && void 0 !== this.img.naturalWidth
  }, r.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
  }, r.prototype.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, r.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents()
  }, r.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents()
  }, r.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
    var t = this.getIsImageComplete();
    t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
  }, s.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
  }, o.makeJQueryPlugin = function (e) {
    e = e || t.jQuery, e && (h = e, h.fn.imagesLoaded = function (t, e) {
      var i = new o(this, t, e);
      return i.jqDeferred.promise(h(this))
    })
  }, o.makeJQueryPlugin(), o
});

/*
 *  jQuery Isotope
 * -----------------------------------------------
*/
/*!
 * Isotope PACKAGED v2.2.2
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function (a) {
  function b() {
  }

  function c(a) {
    function c(b) {
      b.prototype.option || (b.prototype.option = function (b) {
        a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
      })
    }

    function e(b, c) {
      a.fn[b] = function (e) {
        if ("string" == typeof e) {
          for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
            var j = this[h], k = a.data(j, b);
            if (k) if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
              var l = k[e].apply(k, g);
              if (void 0 !== l) return l
            } else f("no such method '" + e + "' for " + b + " instance"); else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
          }
          return this
        }
        return this.each(function () {
          var d = a.data(this, b);
          d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
        })
      }
    }

    if (a) {
      var f = "undefined" == typeof console ? b : function (a) {
        console.error(a)
      };
      return a.bridget = function (a, b) {
        c(b), e(a, b)
      }, a.bridget
    }
  }

  var d = Array.prototype.slice;
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window), function (a) {
  function b(b) {
    var c = a.event;
    return c.target = c.target || c.srcElement || b, c
  }

  var c = document.documentElement, d = function () {
  };
  c.addEventListener ? d = function (a, b, c) {
    a.addEventListener(b, c, !1)
  } : c.attachEvent && (d = function (a, c, d) {
    a[c + d] = d.handleEvent ? function () {
      var c = b(a);
      d.handleEvent.call(d, c)
    } : function () {
      var c = b(a);
      d.call(a, c)
    }, a.attachEvent("on" + c, a[c + d])
  });
  var e = function () {
  };
  c.removeEventListener ? e = function (a, b, c) {
    a.removeEventListener(b, c, !1)
  } : c.detachEvent && (e = function (a, b, c) {
    a.detachEvent("on" + b, a[b + c]);
    try {
      delete a[b + c]
    } catch (d) {
      a[b + c] = void 0
    }
  });
  var f = {bind: d, unbind: e};
  "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window), function () {
  "use strict";

  function a() {
  }

  function b(a, b) {
    for (var c = a.length; c--;) if (a[c].listener === b) return c;
    return -1
  }

  function c(a) {
    return function () {
      return this[a].apply(this, arguments)
    }
  }

  var d = a.prototype, e = this, f = e.EventEmitter;
  d.getListeners = function (a) {
    var b, c, d = this._getEvents();
    if (a instanceof RegExp) {
      b = {};
      for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
    } else b = d[a] || (d[a] = []);
    return b
  }, d.flattenListeners = function (a) {
    var b, c = [];
    for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
    return c
  }, d.getListenersAsObject = function (a) {
    var b, c = this.getListeners(a);
    return c instanceof Array && (b = {}, b[a] = c), b || c
  }, d.addListener = function (a, c) {
    var d, e = this.getListenersAsObject(a), f = "object" == typeof c;
    for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
      listener: c,
      once: !1
    });
    return this
  }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
    return this.addListener(a, {listener: b, once: !0})
  }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
    return this.getListeners(a), this
  }, d.defineEvents = function (a) {
    for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
    return this
  }, d.removeListener = function (a, c) {
    var d, e, f = this.getListenersAsObject(a);
    for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
    return this
  }, d.off = c("removeListener"), d.addListeners = function (a, b) {
    return this.manipulateListeners(!1, a, b)
  }, d.removeListeners = function (a, b) {
    return this.manipulateListeners(!0, a, b)
  }, d.manipulateListeners = function (a, b, c) {
    var d, e, f = a ? this.removeListener : this.addListener,
      g = a ? this.removeListeners : this.addListeners;
    if ("object" != typeof b || b instanceof RegExp) for (d = c.length; d--;) f.call(this, b, c[d]); else for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
    return this
  }, d.removeEvent = function (a) {
    var b, c = typeof a, d = this._getEvents();
    if ("string" === c) delete d[a]; else if (a instanceof RegExp) for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b]; else delete this._events;
    return this
  }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
    var c, d, e, f, g = this.getListenersAsObject(a);
    for (e in g) if (g.hasOwnProperty(e)) for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
    return this
  }, d.trigger = c("emitEvent"), d.emit = function (a) {
    var b = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(a, b)
  }, d.setOnceReturnValue = function (a) {
    return this._onceReturnValue = a, this
  }, d._getOnceReturnValue = function () {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
  }, d._getEvents = function () {
    return this._events || (this._events = {})
  }, a.noConflict = function () {
    return e.EventEmitter = f, a
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
    return a
  }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this), function (a) {
  function b(a) {
    if (a) {
      if ("string" == typeof d[a]) return a;
      a = a.charAt(0).toUpperCase() + a.slice(1);
      for (var b, e = 0, f = c.length; f > e; e++) if (b = c[e] + a, "string" == typeof d[b]) return b
    }
  }

  var c = "Webkit Moz ms Ms O".split(" "), d = document.documentElement.style;
  "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
    return b
  }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
}(window), function (a, b) {
  function c(a) {
    var b = parseFloat(a), c = -1 === a.indexOf("%") && !isNaN(b);
    return c && b
  }

  function d() {
  }

  function e() {
    for (var a = {
      width: 0,
      height: 0,
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0
    }, b = 0, c = h.length; c > b; b++) {
      var d = h[b];
      a[d] = 0
    }
    return a
  }

  function f(b) {
    function d() {
      if (!m) {
        m = !0;
        var d = a.getComputedStyle;
        if (j = function () {
          var a = d ? function (a) {
            return d(a, null)
          } : function (a) {
            return a.currentStyle
          };
          return function (b) {
            var c = a(b);
            return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
          }
        }(), k = b("boxSizing")) {
          var e = document.createElement("div");
          e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
          var f = document.body || document.documentElement;
          f.appendChild(e);
          var h = j(e);
          l = 200 === c(h.width), f.removeChild(e)
        }
      }
    }

    function f(a) {
      if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
        var b = j(a);
        if ("none" === b.display) return e();
        var f = {};
        f.width = a.offsetWidth, f.height = a.offsetHeight;
        for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
          var o = h[m], p = b[o];
          p = i(a, p);
          var q = parseFloat(p);
          f[o] = isNaN(q) ? 0 : q
        }
        var r = f.paddingLeft + f.paddingRight,
          s = f.paddingTop + f.paddingBottom, t = f.marginLeft + f.marginRight,
          u = f.marginTop + f.marginBottom,
          v = f.borderLeftWidth + f.borderRightWidth,
          w = f.borderTopWidth + f.borderBottomWidth, x = g && l,
          y = c(b.width);
        y !== !1 && (f.width = y + (x ? 0 : r + v));
        var z = c(b.height);
        return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
      }
    }

    function i(b, c) {
      if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
      var d = b.style, e = d.left, f = b.runtimeStyle, g = f && f.left;
      return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
    }

    var j, k, l, m = !1;
    return f
  }

  var g = "undefined" == typeof console ? d : function (a) {
      console.error(a)
    },
    h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
  "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
}(window), function (a) {
  function b(a) {
    "function" == typeof a && (b.isReady ? a() : g.push(a))
  }

  function c(a) {
    var c = "readystatechange" === a.type && "complete" !== f.readyState;
    b.isReady || c || d()
  }

  function d() {
    b.isReady = !0;
    for (var a = 0, c = g.length; c > a; a++) {
      var d = g[a];
      d()
    }
  }

  function e(e) {
    return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
  }

  var f = a.document, g = [];
  b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
}(window), function (a) {
  "use strict";

  function b(a, b) {
    return a[g](b)
  }

  function c(a) {
    if (!a.parentNode) {
      var b = document.createDocumentFragment();
      b.appendChild(a)
    }
  }

  function d(a, b) {
    c(a);
    for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++) if (d[e] === a) return !0;
    return !1
  }

  function e(a, d) {
    return c(a), b(a, d)
  }

  var f, g = function () {
    if (a.matches) return "matches";
    if (a.matchesSelector) return "matchesSelector";
    for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
      var e = b[c], f = e + "MatchesSelector";
      if (a[f]) return f
    }
  }();
  if (g) {
    var h = document.createElement("div"), i = b(h, "div");
    f = i ? b : e
  } else f = d;
  "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
    return f
  }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
}(Element.prototype), function (a, b) {
  "use strict";
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) {
    return b(a, c, d)
  }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
}(window, function (a, b, c) {
  var d = {};
  d.extend = function (a, b) {
    for (var c in b) a[c] = b[c];
    return a
  }, d.modulo = function (a, b) {
    return (a % b + b) % b
  };
  var e = Object.prototype.toString;
  d.isArray = function (a) {
    return "[object Array]" == e.call(a)
  }, d.makeArray = function (a) {
    var b = [];
    if (d.isArray(a)) b = a; else if (a && "number" == typeof a.length) for (var c = 0, e = a.length; e > c; c++) b.push(a[c]); else b.push(a);
    return b
  }, d.indexOf = Array.prototype.indexOf ? function (a, b) {
    return a.indexOf(b)
  } : function (a, b) {
    for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
    return -1
  }, d.removeFrom = function (a, b) {
    var c = d.indexOf(a, b);
    -1 != c && a.splice(c, 1)
  }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (a) {
    return a instanceof HTMLElement
  } : function (a) {
    return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
  }, d.setText = function () {
    function a(a, c) {
      b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
    }

    var b;
    return a
  }(), d.getParent = function (a, b) {
    for (; a != document.body;) if (a = a.parentNode, c(a, b)) return a
  }, d.getQueryElement = function (a) {
    return "string" == typeof a ? document.querySelector(a) : a
  }, d.handleEvent = function (a) {
    var b = "on" + a.type;
    this[b] && this[b](a)
  }, d.filterFindElements = function (a, b) {
    a = d.makeArray(a);
    for (var e = [], f = 0, g = a.length; g > f; f++) {
      var h = a[f];
      if (d.isElement(h)) if (b) {
        c(h, b) && e.push(h);
        for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
      } else e.push(h)
    }
    return e
  }, d.debounceMethod = function (a, b, c) {
    var d = a.prototype[b], e = b + "Timeout";
    a.prototype[b] = function () {
      var a = this[e];
      a && clearTimeout(a);
      var b = arguments, f = this;
      this[e] = setTimeout(function () {
        d.apply(f, b), delete f[e]
      }, c || 100)
    }
  }, d.toDashed = function (a) {
    return a.replace(/(.)([A-Z])/g, function (a, b, c) {
      return b + "-" + c
    }).toLowerCase()
  };
  var f = a.console;
  return d.htmlInit = function (c, e) {
    b(function () {
      for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
        var k, l = g[i], m = l.getAttribute(h);
        try {
          k = m && JSON.parse(m)
        } catch (n) {
          f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
          continue
        }
        var o = new c(l, k), p = a.jQuery;
        p && p.data(l, e, o)
      }
    })
  }, d
}), function (a, b) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) {
    return b(a, c, d, e, f)
  }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
}(window, function (a, b, c, d, e) {
  "use strict";

  function f(a) {
    for (var b in a) return !1;
    return b = null, !0
  }

  function g(a, b) {
    a && (this.element = a, this.layout = b, this.position = {
      x: 0,
      y: 0
    }, this._create())
  }

  function h(a) {
    return a.replace(/([A-Z])/g, function (a) {
      return "-" + a.toLowerCase()
    })
  }

  var i = a.getComputedStyle, j = i ? function (a) {
      return i(a, null)
    } : function (a) {
      return a.currentStyle
    }, k = d("transition"), l = d("transform"), m = k && l,
    n = !!d("perspective"), o = {
      WebkitTransition: "webkitTransitionEnd",
      MozTransition: "transitionend",
      OTransition: "otransitionend",
      transition: "transitionend"
    }[k],
    p = ["transform", "transition", "transitionDuration", "transitionProperty"],
    q = function () {
      for (var a = {}, b = 0, c = p.length; c > b; b++) {
        var e = p[b], f = d(e);
        f && f !== e && (a[e] = f)
      }
      return a
    }();
  e.extend(g.prototype, b.prototype), g.prototype._create = function () {
    this._transn = {
      ingProperties: {},
      clean: {},
      onEnd: {}
    }, this.css({position: "absolute"})
  }, g.prototype.handleEvent = function (a) {
    var b = "on" + a.type;
    this[b] && this[b](a)
  }, g.prototype.getSize = function () {
    this.size = c(this.element)
  }, g.prototype.css = function (a) {
    var b = this.element.style;
    for (var c in a) {
      var d = q[c] || c;
      b[d] = a[c]
    }
  }, g.prototype.getPosition = function () {
    var a = j(this.element), b = this.layout.options, c = b.isOriginLeft,
      d = b.isOriginTop, e = a[c ? "left" : "right"],
      f = a[d ? "top" : "bottom"], g = this.layout.size,
      h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
      i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
    h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
  }, g.prototype.layoutPosition = function () {
    var a = this.layout.size, b = this.layout.options, c = {},
      d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
      e = b.isOriginLeft ? "left" : "right",
      f = b.isOriginLeft ? "right" : "left", g = this.position.x + a[d];
    c[e] = this.getXValue(g), c[f] = "";
    var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
      i = b.isOriginTop ? "top" : "bottom",
      j = b.isOriginTop ? "bottom" : "top", k = this.position.y + a[h];
    c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
  }, g.prototype.getXValue = function (a) {
    var b = this.layout.options;
    return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
  }, g.prototype.getYValue = function (a) {
    var b = this.layout.options;
    return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
  }, g.prototype._transitionTo = function (a, b) {
    this.getPosition();
    var c = this.position.x, d = this.position.y, e = parseInt(a, 10),
      f = parseInt(b, 10), g = e === this.position.x && f === this.position.y;
    if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
    var h = a - c, i = b - d, j = {};
    j.transform = this.getTranslate(h, i), this.transition({
      to: j,
      onTransitionEnd: {transform: this.layoutPosition},
      isCleaning: !0
    })
  }, g.prototype.getTranslate = function (a, b) {
    var c = this.layout.options;
    return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
  }, g.prototype.goTo = function (a, b) {
    this.setPosition(a, b), this.layoutPosition()
  }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function (a, b) {
    this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
  }, g.prototype._nonTransition = function (a) {
    this.css(a.to), a.isCleaning && this._removeStyles(a.to);
    for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
  }, g.prototype._transition = function (a) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
    var b = this._transn;
    for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
    for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
    if (a.from) {
      this.css(a.from);
      var d = this.element.offsetHeight;
      d = null
    }
    this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
  };
  var r = "opacity," + h(q.transform || "transform");
  g.prototype.enableTransition = function () {
    this.isTransitioning || (this.css({
      transitionProperty: r,
      transitionDuration: this.layout.options.transitionDuration
    }), this.element.addEventListener(o, this, !1))
  }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function (a) {
    this.ontransitionend(a)
  }, g.prototype.onotransitionend = function (a) {
    this.ontransitionend(a)
  };
  var s = {
    "-webkit-transform": "transform",
    "-moz-transform": "transform",
    "-o-transform": "transform"
  };
  g.prototype.ontransitionend = function (a) {
    if (a.target === this.element) {
      var b = this._transn, c = s[a.propertyName] || a.propertyName;
      if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
        var d = b.onEnd[c];
        d.call(this), delete b.onEnd[c]
      }
      this.emitEvent("transitionEnd", [this])
    }
  }, g.prototype.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
  }, g.prototype._removeStyles = function (a) {
    var b = {};
    for (var c in a) b[c] = "";
    this.css(b)
  };
  var t = {transitionProperty: "", transitionDuration: ""};
  return g.prototype.removeTransitionStyles = function () {
    this.css(t)
  }, g.prototype.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
  }, g.prototype.remove = function () {
    if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
    var a = this;
    this.once("transitionEnd", function () {
      a.removeElem()
    }), this.hide()
  }, g.prototype.reveal = function () {
    delete this.isHidden, this.css({display: ""});
    var a = this.layout.options, b = {},
      c = this.getHideRevealTransitionEndProperty("visibleStyle");
    b[c] = this.onRevealTransitionEnd, this.transition({
      from: a.hiddenStyle,
      to: a.visibleStyle,
      isCleaning: !0,
      onTransitionEnd: b
    })
  }, g.prototype.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal")
  }, g.prototype.getHideRevealTransitionEndProperty = function (a) {
    var b = this.layout.options[a];
    if (b.opacity) return "opacity";
    for (var c in b) return c
  }, g.prototype.hide = function () {
    this.isHidden = !0, this.css({display: ""});
    var a = this.layout.options, b = {},
      c = this.getHideRevealTransitionEndProperty("hiddenStyle");
    b[c] = this.onHideTransitionEnd, this.transition({
      from: a.visibleStyle,
      to: a.hiddenStyle,
      isCleaning: !0,
      onTransitionEnd: b
    })
  }, g.prototype.onHideTransitionEnd = function () {
    this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
  }, g.prototype.destroy = function () {
    this.css({
      position: "",
      left: "",
      right: "",
      top: "",
      bottom: "",
      transition: "",
      transform: ""
    })
  }, g
}), function (a, b) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) {
    return b(a, c, d, e, f, g)
  }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
}(window, function (a, b, c, d, e, f) {
  "use strict";

  function g(a, b) {
    var c = e.getQueryElement(a);
    if (!c) return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
    this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
    var d = ++k;
    this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
  }

  var h = a.console, i = a.jQuery, j = function () {
  }, k = 0, l = {};
  return g.namespace = "outlayer", g.Item = f, g.defaults = {
    containerStyle: {position: "relative"},
    isInitLayout: !0,
    isOriginLeft: !0,
    isOriginTop: !0,
    isResizeBound: !0,
    isResizingContainer: !0,
    transitionDuration: "0.4s",
    hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
    visibleStyle: {opacity: 1, transform: "scale(1)"}
  }, e.extend(g.prototype, c.prototype), g.prototype.option = function (a) {
    e.extend(this.options, a)
  }, g.prototype._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
  }, g.prototype.reloadItems = function () {
    this.items = this._itemize(this.element.children)
  }, g.prototype._itemize = function (a) {
    for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
      var g = b[e], h = new c(g, this);
      d.push(h)
    }
    return d
  }, g.prototype._filterFindItemElements = function (a) {
    return e.filterFindElements(a, this.options.itemSelector)
  }, g.prototype.getItemElements = function () {
    for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
    return a
  }, g.prototype.layout = function () {
    this._resetLayout(), this._manageStamps();
    var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
    this.layoutItems(this.items, a), this._isLayoutInited = !0
  }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
    this.getSize()
  }, g.prototype.getSize = function () {
    this.size = d(this.element)
  }, g.prototype._getMeasurement = function (a, b) {
    var c, f = this.options[a];
    f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
  }, g.prototype.layoutItems = function (a, b) {
    a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
  }, g.prototype._getItemsForLayout = function (a) {
    for (var b = [], c = 0, d = a.length; d > c; c++) {
      var e = a[c];
      e.isIgnored || b.push(e)
    }
    return b
  }, g.prototype._layoutItems = function (a, b) {
    if (this._emitCompleteOnItems("layout", a), a && a.length) {
      for (var c = [], d = 0, e = a.length; e > d; d++) {
        var f = a[d], g = this._getItemLayoutPosition(f);
        g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
      }
      this._processLayoutQueue(c)
    }
  }, g.prototype._getItemLayoutPosition = function () {
    return {x: 0, y: 0}
  }, g.prototype._processLayoutQueue = function (a) {
    for (var b = 0, c = a.length; c > b; b++) {
      var d = a[b];
      this._positionItem(d.item, d.x, d.y, d.isInstant)
    }
  }, g.prototype._positionItem = function (a, b, c, d) {
    d ? a.goTo(b, c) : a.moveTo(b, c)
  }, g.prototype._postLayout = function () {
    this.resizeContainer()
  }, g.prototype.resizeContainer = function () {
    if (this.options.isResizingContainer) {
      var a = this._getContainerSize();
      a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
    }
  }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function (a, b) {
    if (void 0 !== a) {
      var c = this.size;
      c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
    }
  }, g.prototype._emitCompleteOnItems = function (a, b) {
    function c() {
      e.dispatchEvent(a + "Complete", null, [b])
    }

    function d() {
      g++, g === f && c()
    }

    var e = this, f = b.length;
    if (!b || !f) return void c();
    for (var g = 0, h = 0, i = b.length; i > h; h++) {
      var j = b[h];
      j.once(a, d)
    }
  }, g.prototype.dispatchEvent = function (a, b, c) {
    var d = b ? [b].concat(c) : c;
    if (this.emitEvent(a, d), i) if (this.$element = this.$element || i(this.element), b) {
      var e = i.Event(b);
      e.type = a, this.$element.trigger(e, c)
    } else this.$element.trigger(a, c)
  }, g.prototype.ignore = function (a) {
    var b = this.getItem(a);
    b && (b.isIgnored = !0)
  }, g.prototype.unignore = function (a) {
    var b = this.getItem(a);
    b && delete b.isIgnored
  }, g.prototype.stamp = function (a) {
    if (a = this._find(a)) {
      this.stamps = this.stamps.concat(a);
      for (var b = 0, c = a.length; c > b; b++) {
        var d = a[b];
        this.ignore(d)
      }
    }
  }, g.prototype.unstamp = function (a) {
    if (a = this._find(a)) for (var b = 0, c = a.length; c > b; b++) {
      var d = a[b];
      e.removeFrom(this.stamps, d), this.unignore(d)
    }
  }, g.prototype._find = function (a) {
    return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
  }, g.prototype._manageStamps = function () {
    if (this.stamps && this.stamps.length) {
      this._getBoundingRect();
      for (var a = 0, b = this.stamps.length; b > a; a++) {
        var c = this.stamps[a];
        this._manageStamp(c)
      }
    }
  }, g.prototype._getBoundingRect = function () {
    var a = this.element.getBoundingClientRect(), b = this.size;
    this._boundingRect = {
      left: a.left + b.paddingLeft + b.borderLeftWidth,
      top: a.top + b.paddingTop + b.borderTopWidth,
      right: a.right - (b.paddingRight + b.borderRightWidth),
      bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
    }
  }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function (a) {
    var b = a.getBoundingClientRect(), c = this._boundingRect, e = d(a), f = {
      left: b.left - c.left - e.marginLeft,
      top: b.top - c.top - e.marginTop,
      right: c.right - b.right - e.marginRight,
      bottom: c.bottom - b.bottom - e.marginBottom
    };
    return f
  }, g.prototype.handleEvent = function (a) {
    var b = "on" + a.type;
    this[b] && this[b](a)
  }, g.prototype.bindResize = function () {
    this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
  }, g.prototype.unbindResize = function () {
    this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
  }, g.prototype.onresize = function () {
    function a() {
      b.resize(), delete b.resizeTimeout
    }

    this.resizeTimeout && clearTimeout(this.resizeTimeout);
    var b = this;
    this.resizeTimeout = setTimeout(a, 100)
  }, g.prototype.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout()
  }, g.prototype.needsResizeLayout = function () {
    var a = d(this.element), b = this.size && a;
    return b && a.innerWidth !== this.size.innerWidth
  }, g.prototype.addItems = function (a) {
    var b = this._itemize(a);
    return b.length && (this.items = this.items.concat(b)), b
  }, g.prototype.appended = function (a) {
    var b = this.addItems(a);
    b.length && (this.layoutItems(b, !0), this.reveal(b))
  }, g.prototype.prepended = function (a) {
    var b = this._itemize(a);
    if (b.length) {
      var c = this.items.slice(0);
      this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
    }
  }, g.prototype.reveal = function (a) {
    this._emitCompleteOnItems("reveal", a);
    for (var b = a && a.length, c = 0; b && b > c; c++) {
      var d = a[c];
      d.reveal()
    }
  }, g.prototype.hide = function (a) {
    this._emitCompleteOnItems("hide", a);
    for (var b = a && a.length, c = 0; b && b > c; c++) {
      var d = a[c];
      d.hide()
    }
  }, g.prototype.revealItemElements = function (a) {
    var b = this.getItems(a);
    this.reveal(b)
  }, g.prototype.hideItemElements = function (a) {
    var b = this.getItems(a);
    this.hide(b)
  }, g.prototype.getItem = function (a) {
    for (var b = 0, c = this.items.length; c > b; b++) {
      var d = this.items[b];
      if (d.element === a) return d
    }
  }, g.prototype.getItems = function (a) {
    a = e.makeArray(a);
    for (var b = [], c = 0, d = a.length; d > c; c++) {
      var f = a[c], g = this.getItem(f);
      g && b.push(g)
    }
    return b
  }, g.prototype.remove = function (a) {
    var b = this.getItems(a);
    if (this._emitCompleteOnItems("remove", b), b && b.length) for (var c = 0, d = b.length; d > c; c++) {
      var f = b[c];
      f.remove(), e.removeFrom(this.items, f)
    }
  }, g.prototype.destroy = function () {
    var a = this.element.style;
    a.height = "", a.position = "", a.width = "";
    for (var b = 0, c = this.items.length; c > b; b++) {
      var d = this.items[b];
      d.destroy()
    }
    this.unbindResize();
    var e = this.element.outlayerGUID;
    delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
  }, g.data = function (a) {
    a = e.getQueryElement(a);
    var b = a && a.outlayerGUID;
    return b && l[b]
  }, g.create = function (a, b) {
    function c() {
      g.apply(this, arguments)
    }

    return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function () {
      f.apply(this, arguments)
    }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
  }, g.Item = f, g
}), function (a, b) {
  "use strict";
  "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
}(window, function (a) {
  "use strict";

  function b() {
    a.Item.apply(this, arguments)
  }

  b.prototype = new a.Item, b.prototype._create = function () {
    this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
  }, b.prototype.updateSortData = function () {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
      var a = this.layout.options.getSortData, b = this.layout._sorters;
      for (var c in a) {
        var d = b[c];
        this.sortData[c] = d(this.element, this)
      }
    }
  };
  var c = b.prototype.destroy;
  return b.prototype.destroy = function () {
    c.apply(this, arguments), this.css({display: ""})
  }, b
}), function (a, b) {
  "use strict";
  "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
}(window, function (a, b) {
  "use strict";

  function c(a) {
    this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
  }

  return function () {
    function a(a) {
      return function () {
        return b.prototype[a].apply(this.isotope, arguments)
      }
    }

    for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
      var g = d[e];
      c.prototype[g] = a(g)
    }
  }(), c.prototype.needsVerticalResizeLayout = function () {
    var b = a(this.isotope.element), c = this.isotope.size && b;
    return c && b.innerHeight != this.isotope.size.innerHeight
  }, c.prototype._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments)
  }, c.prototype.getColumnWidth = function () {
    this.getSegmentSize("column", "Width")
  }, c.prototype.getRowHeight = function () {
    this.getSegmentSize("row", "Height")
  }, c.prototype.getSegmentSize = function (a, b) {
    var c = a + b, d = "outer" + b;
    if (this._getMeasurement(c, d), !this[c]) {
      var e = this.getFirstItemSize();
      this[c] = e && e[d] || this.isotope.size["inner" + b]
    }
  }, c.prototype.getFirstItemSize = function () {
    var b = this.isotope.filteredItems[0];
    return b && b.element && a(b.element)
  }, c.prototype.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments)
  }, c.prototype.getSize = function () {
    this.isotope.getSize(), this.size = this.isotope.size
  }, c.modes = {}, c.create = function (a, b) {
    function d() {
      c.apply(this, arguments)
    }

    return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
  }, c
}), function (a, b) {
  "use strict";
  "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
}(window, function (a, b, c) {
  var d = a.create("masonry");
  return d.prototype._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
    var a = this.cols;
    for (this.colYs = []; a--;) this.colYs.push(0);
    this.maxY = 0
  }, d.prototype.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var a = this.items[0], c = a && a.element;
      this.columnWidth = c && b(c).outerWidth || this.containerWidth
    }
    var d = this.columnWidth += this.gutter,
      e = this.containerWidth + this.gutter, f = e / d, g = d - e % d,
      h = g && 1 > g ? "round" : "floor";
    f = Math[h](f), this.cols = Math.max(f, 1)
  }, d.prototype.getContainerWidth = function () {
    var a = this.options.isFitWidth ? this.element.parentNode : this.element,
      c = b(a);
    this.containerWidth = c && c.innerWidth
  }, d.prototype._getItemLayoutPosition = function (a) {
    a.getSize();
    var b = a.size.outerWidth % this.columnWidth,
      d = b && 1 > b ? "round" : "ceil",
      e = Math[d](a.size.outerWidth / this.columnWidth);
    e = Math.min(e, this.cols);
    for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
      x: this.columnWidth * h,
      y: g
    }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
    return i
  }, d.prototype._getColGroup = function (a) {
    if (2 > a) return this.colYs;
    for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
      var e = this.colYs.slice(d, d + a);
      b[d] = Math.max.apply(Math, e)
    }
    return b
  }, d.prototype._manageStamp = function (a) {
    var c = b(a), d = this._getElementOffset(a),
      e = this.options.isOriginLeft ? d.left : d.right, f = e + c.outerWidth,
      g = Math.floor(e / this.columnWidth);
    g = Math.max(0, g);
    var h = Math.floor(f / this.columnWidth);
    h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
    for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
  }, d.prototype._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);
    var a = {height: this.maxY};
    return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
  }, d.prototype._getContainerFitWidth = function () {
    for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
    return (this.cols - a) * this.columnWidth - this.gutter
  }, d.prototype.needsResizeLayout = function () {
    var a = this.containerWidth;
    return this.getContainerWidth(), a !== this.containerWidth
  }, d
}), function (a, b) {
  "use strict";
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
}(window, function (a, b) {
  "use strict";

  function c(a, b) {
    for (var c in b) a[c] = b[c];
    return a
  }

  var d = a.create("masonry"), e = d.prototype._getElementOffset,
    f = d.prototype.layout, g = d.prototype._getMeasurement;
  c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
  var h = d.prototype.measureColumns;
  d.prototype.measureColumns = function () {
    this.items = this.isotope.filteredItems, h.call(this)
  };
  var i = d.prototype._manageStamp;
  return d.prototype._manageStamp = function () {
    this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
  }, d
}), function (a, b) {
  "use strict";
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function (a) {
  "use strict";
  var b = a.create("fitRows");
  return b.prototype._resetLayout = function () {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
  }, b.prototype._getItemLayoutPosition = function (a) {
    a.getSize();
    var b = a.size.outerWidth + this.gutter,
      c = this.isotope.size.innerWidth + this.gutter;
    0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
    var d = {x: this.x, y: this.y};
    return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
  }, b.prototype._getContainerSize = function () {
    return {height: this.maxY}
  }, b
}), function (a, b) {
  "use strict";
  "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
}(window, function (a) {
  "use strict";
  var b = a.create("vertical", {horizontalAlignment: 0});
  return b.prototype._resetLayout = function () {
    this.y = 0
  }, b.prototype._getItemLayoutPosition = function (a) {
    a.getSize();
    var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
      c = this.y;
    return this.y += a.size.outerHeight, {x: b, y: c}
  }, b.prototype._getContainerSize = function () {
    return {height: this.y}
  }, b
}), function (a, b) {
  "use strict";
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (c, d, e, f, g, h) {
    return b(a, c, d, e, f, g, h)
  }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
}(window, function (a, b, c, d, e, f, g) {
  function h(a, b) {
    return function (c, d) {
      for (var e = 0, f = a.length; f > e; e++) {
        var g = a[e], h = c.sortData[g], i = d.sortData[g];
        if (h > i || i > h) {
          var j = void 0 !== b[g] ? b[g] : b, k = j ? 1 : -1;
          return (h > i ? 1 : -1) * k
        }
      }
      return 0
    }
  }

  var i = a.jQuery, j = String.prototype.trim ? function (a) {
    return a.trim()
  } : function (a) {
    return a.replace(/^\s+|\s+$/g, "")
  }, k = document.documentElement, l = k.textContent ? function (a) {
    return a.textContent
  } : function (a) {
    return a.innerText
  }, m = b.create("isotope", {
    layoutMode: "masonry",
    isJQueryFiltering: !0,
    sortAscending: !0
  });
  m.Item = f, m.LayoutMode = g, m.prototype._create = function () {
    this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
    for (var a in g.modes) this._initLayoutMode(a)
  }, m.prototype.reloadItems = function () {
    this.itemGUID = 0, b.prototype.reloadItems.call(this)
  }, m.prototype._itemize = function () {
    for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
      var e = a[c];
      e.id = this.itemGUID++
    }
    return this._updateItemsSortData(a), a
  }, m.prototype._initLayoutMode = function (a) {
    var b = g.modes[a], c = this.options[a] || {};
    this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
  }, m.prototype.layout = function () {
    return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
  }, m.prototype._layout = function () {
    var a = this._getIsInstant();
    this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
  }, m.prototype.arrange = function (a) {
    function b() {
      d.reveal(c.needReveal), d.hide(c.needHide)
    }

    this.option(a), this._getIsInstant();
    var c = this._filter(this.items);
    this.filteredItems = c.matches;
    var d = this;
    this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
  }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function () {
    var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
    return this._isInstant = a, a
  }, m.prototype._bindArrangeComplete = function () {
    function a() {
      b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
    }

    var b, c, d, e = this;
    this.once("layoutComplete", function () {
      b = !0, a()
    }), this.once("hideComplete", function () {
      c = !0, a()
    }), this.once("revealComplete", function () {
      d = !0, a()
    })
  }, m.prototype._filter = function (a) {
    var b = this.options.filter;
    b = b || "*";
    for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
      var i = a[g];
      if (!i.isIgnored) {
        var j = f(i);
        j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
      }
    }
    return {matches: c, needReveal: d, needHide: e}
  }, m.prototype._getFilterTest = function (a) {
    return i && this.options.isJQueryFiltering ? function (b) {
      return i(b.element).is(a)
    } : "function" == typeof a ? function (b) {
      return a(b.element)
    } : function (b) {
      return d(b.element, a)
    }
  }, m.prototype.updateSortData = function (a) {
    var b;
    a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
  }, m.prototype._getSorters = function () {
    var a = this.options.getSortData;
    for (var b in a) {
      var c = a[b];
      this._sorters[b] = n(c)
    }
  }, m.prototype._updateItemsSortData = function (a) {
    for (var b = a && a.length, c = 0; b && b > c; c++) {
      var d = a[c];
      d.updateSortData()
    }
  };
  var n = function () {
    function a(a) {
      if ("string" != typeof a) return a;
      var c = j(a).split(" "), d = c[0], e = d.match(/^\[(.+)\]$/),
        f = e && e[1], g = b(f, d), h = m.sortDataParsers[c[1]];
      return a = h ? function (a) {
        return a && h(g(a))
      } : function (a) {
        return a && g(a)
      }
    }

    function b(a, b) {
      var c;
      return c = a ? function (b) {
        return b.getAttribute(a)
      } : function (a) {
        var c = a.querySelector(b);
        return c && l(c)
      }
    }

    return a
  }();
  m.sortDataParsers = {
    parseInt: function (a) {
      return parseInt(a, 10)
    }, parseFloat: function (a) {
      return parseFloat(a)
    }
  }, m.prototype._sort = function () {
    var a = this.options.sortBy;
    if (a) {
      var b = [].concat.apply(a, this.sortHistory),
        c = h(b, this.options.sortAscending);
      this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
    }
  }, m.prototype._mode = function () {
    var a = this.options.layoutMode, b = this.modes[a];
    if (!b) throw new Error("No layout mode: " + a);
    return b.options = this.options[a], b
  }, m.prototype._resetLayout = function () {
    b.prototype._resetLayout.call(this), this._mode()._resetLayout()
  }, m.prototype._getItemLayoutPosition = function (a) {
    return this._mode()._getItemLayoutPosition(a)
  }, m.prototype._manageStamp = function (a) {
    this._mode()._manageStamp(a)
  }, m.prototype._getContainerSize = function () {
    return this._mode()._getContainerSize()
  }, m.prototype.needsResizeLayout = function () {
    return this._mode().needsResizeLayout()
  }, m.prototype.appended = function (a) {
    var b = this.addItems(a);
    if (b.length) {
      var c = this._filterRevealAdded(b);
      this.filteredItems = this.filteredItems.concat(c)
    }
  }, m.prototype.prepended = function (a) {
    var b = this._itemize(a);
    if (b.length) {
      this._resetLayout(), this._manageStamps();
      var c = this._filterRevealAdded(b);
      this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
    }
  }, m.prototype._filterRevealAdded = function (a) {
    var b = this._filter(a);
    return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
  }, m.prototype.insert = function (a) {
    var b = this.addItems(a);
    if (b.length) {
      var c, d, e = b.length;
      for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
      var f = this._filter(b).matches;
      for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
      for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
      this.reveal(f)
    }
  };
  var o = m.prototype.remove;
  return m.prototype.remove = function (a) {
    a = e.makeArray(a);
    var b = this.getItems(a);
    o.call(this, a);
    var c = b && b.length;
    if (c) for (var d = 0; c > d; d++) {
      var f = b[d];
      e.removeFrom(this.filteredItems, f)
    }
  }, m.prototype.shuffle = function () {
    for (var a = 0, b = this.items.length; b > a; a++) {
      var c = this.items[a];
      c.sortData.random = Math.random()
    }
    this.options.sortBy = "random", this._sort(), this._layout()
  }, m.prototype._noTransition = function (a) {
    var b = this.options.transitionDuration;
    this.options.transitionDuration = 0;
    var c = a.call(this);
    return this.options.transitionDuration = b, c
  }, m.prototype.getFilteredItemElements = function () {
    for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
    return a
  }, m
});

/*
 *  jQuery Parallax
 * -----------------------------------------------
*/
/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/
Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/
(function ($) {
  var $window = $(window);
  var windowHeight = $window.height();
  $window.resize(function () {
    windowHeight = $window.height()
  });
  $.fn.parallax = function (xpos, speedFactor, outerHeight) {
    var $this = $(this);
    var getHeight;
    var firstTop;
    var paddingTop = 0;
    $this.each(function () {
      firstTop = $this.offset().top
    });
    if (outerHeight) {
      getHeight = function (jqo) {
        return jqo.outerHeight(true)
      }
    } else {
      getHeight = function (jqo) {
        return jqo.height()
      }
    }
    if (arguments.length < 1 || xpos === null) xpos = "50%";
    if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
    if (arguments.length < 3 || outerHeight === null) outerHeight = true;

    function update() {
      var pos = $window.scrollTop();
      $this.each(function () {
        var $element = $(this);
        var top = $element.offset().top;
        var height = getHeight($element);
        if (top + height < pos || top > pos + windowHeight) {
          return
        }
        $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px")
      })
    }

    $window.bind('scroll', update).resize(update);
    update()
  }
})(jQuery);


/*
 *  animateNumbers
 * -----------------------------------------------
*/
/***********
 Animates element's number to new number with commas
 Parameters:
 stop (number): number to stop on
 commas (boolean): turn commas on/off (default is true)
 duration (number): how long in ms (default is 1000)
 ease (string): type of easing (default is "swing", others are avaiable from jQuery's easing plugin
 Examples:
 $("#div").animateNumbers(1234, false, 500, "linear"); // half second linear without commas
 $("#div").animateNumbers(1234, true, 2000); // two second swing with commas
 $("#div").animateNumbers(4321); // one second swing with commas
 This fully expects an element containing an integer
 If the number is within copy then separate it with a span and target the span
 Inserts and accounts for commas during animation by default
 ***********/
!function (t) {
  t.fn.animateNumbers = function (e, n, a, i) {
    return this.each(function () {
      var d = t(this), o = parseInt(d.text().replace(/,/g, ""));
      n = void 0 === n ? !0 : n, t({value: o}).animate({value: e}, {
        duration: void 0 == a ? 1e3 : a,
        easing: void 0 == i ? "swing" : i,
        step: function () {
          d.text(Math.floor(this.value)), n && d.text(d.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
        },
        complete: function () {
          parseInt(d.text()) !== e && (d.text(e), n && d.text(d.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")))
        }
      })
    })
  }
}(jQuery);

/*
 *  jflickrfeed
 * -----------------------------------------------
*/
/*
* Copyright (C) 2009 Joel Sutherland
* Licenced under the MIT license
* http://www.newmediacampaigns.com/page/jquery-flickr-plugin
*
* Available tags for templates:
* title, link, date_taken, description, published, author, author_id, tags, image*
*/
(function ($) {
  $.fn.jflickrfeed = function (settings, callback) {
    settings = $.extend(true, {
      flickrbase: 'http://api.flickr.com/services/feeds/',
      feedapi: 'photos_public.gne',
      limit: 20,
      qstrings: {lang: 'en-us', format: 'json', jsoncallback: '?'},
      cleanDescription: true,
      useTemplate: true,
      itemTemplate: '',
      itemCallback: function () {
      }
    }, settings);
    var url = settings.flickrbase + settings.feedapi + '?';
    var first = true;
    for (var key in settings.qstrings) {
      if (!first)
        url += '&';
      url += key + '=' + settings.qstrings[key];
      first = false;
    }
    return $(this).each(function () {
      var $container = $(this);
      var container = this;
      $.getJSON(url, function (data) {
        $.each(data.items, function (i, item) {
          if (i < settings.limit) {
            if (settings.cleanDescription) {
              var regex = /<p>(.*?)<\/p>/g;
              var input = item.description;
              if (regex.test(input)) {
                item.description = input.match(regex)[2]
                if (item.description != undefined)
                  item.description = item.description.replace('<p>', '').replace('</p>', '');
              }
            }
            item['image_s'] = item.media.m.replace('_m', '_s');
            item['image_t'] = item.media.m.replace('_m', '_t');
            item['image_m'] = item.media.m.replace('_m', '_m');
            item['image'] = item.media.m.replace('_m', '');
            item['image_b'] = item.media.m.replace('_m', '_b');
            delete item.media;
            if (settings.useTemplate) {
              var template = settings.itemTemplate;
              for (var key in item) {
                var rgx = new RegExp('{{' + key + '}}', 'g');
                template = template.replace(rgx, item[key]);
              }
              $container.append(template)
            }
            settings.itemCallback.call(container, item);
          }
        });
        if ($.isFunction(callback)) {
          callback.call(container, data);
        }
      });
    });
  }
})(jQuery);

/*
 *  fitvids
 * -----------------------------------------------
*/
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
!function (t) {
  "use strict";
  t.fn.fitVids = function (e) {
    var i = {customSelector: null, ignore: null};
    if (!document.getElementById("fit-vids-style")) {
      var r = document.head || document.getElementsByTagName("head")[0],
        a = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
        d = document.createElement("div");
      d.innerHTML = '<p>x</p><style id="fit-vids-style">' + a + "</style>", r.appendChild(d.childNodes[1])
    }
    return e && t.extend(i, e), this.each(function () {
      var e = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
      i.customSelector && e.push(i.customSelector);
      var r = ".fitvidsignore";
      i.ignore && (r = r + ", " + i.ignore);
      var a = t(this).find(e.join(","));
      a = a.not("object object"), a = a.not(r), a.each(function (e) {
        var i = t(this);
        if (!(i.parents(r).length > 0 || "embed" === this.tagName.toLowerCase() && i.parent("object").length || i.parent(".fluid-width-video-wrapper").length)) {
          i.css("height") || i.css("width") || !isNaN(i.attr("height")) && !isNaN(i.attr("width")) || (i.attr("height", 9), i.attr("width", 16));
          var a = "object" === this.tagName.toLowerCase() || i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)) ? parseInt(i.attr("height"), 10) : i.height(),
            d = isNaN(parseInt(i.attr("width"), 10)) ? i.width() : parseInt(i.attr("width"), 10),
            o = a / d;
          if (!i.attr("id")) {
            var h = "fitvid" + e;
            i.attr("id", h)
          }
          i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * o + "%"), i.removeAttr("height").removeAttr("width")
        }
      })
    })
  }
}(window.jQuery || window.Zepto);

/*
 * USED Owl carousel
 * -----------------------------------------------
*/
!function (a, b, c, d) {
  function e(b, c) {
    this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function (a, b) {
      this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
    }, this)), a.each(e.Pipe, a.proxy(function (b, c) {
      this._pipe.push({filter: c.filter, run: a.proxy(c.run, this)})
    }, this)), this.setup(), this.initialize()
  }

  function f(a) {
    if (a.touches !== d) return {x: a.touches[0].pageX, y: a.touches[0].pageY};
    if (a.touches === d) {
      if (a.pageX !== d) return {x: a.pageX, y: a.pageY};
      if (a.pageX === d) return {x: a.clientX, y: a.clientY}
    }
  }

  function g(a) {
    var b, d, e = c.createElement("div"), f = a;
    for (b in f) if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
    return [!1]
  }

  function h() {
    return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
  }

  function i() {
    return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
  }

  function j() {
    return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
  }

  function k() {
    return "ontouchstart" in b || !!navigator.msMaxTouchPoints
  }

  function l() {
    return b.navigator.msPointerEnabled
  }

  var m, n, o;
  m = {
    start: 0,
    startX: 0,
    startY: 0,
    current: 0,
    currentX: 0,
    currentY: 0,
    offsetX: 0,
    offsetY: 0,
    distance: null,
    startTime: 0,
    endTime: 0,
    updatedX: 0,
    targetEl: null
  }, n = {
    isTouch: !1,
    isScrolling: !1,
    isSwiping: !1,
    direction: !1,
    inMotion: !1
  }, o = {
    _onDragStart: null,
    _onDragMove: null,
    _onDragEnd: null,
    _transitionEnd: null,
    _resizer: null,
    _responsiveCall: null,
    _goToLoop: null,
    _checkVisibile: null
  }, e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    responsiveClass: !1,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    themeClass: "owl-theme",
    baseClass: "owl-carousel",
    itemClass: "owl-item",
    centerClass: "center",
    activeClass: "active"
  }, e.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
  }, e.Plugins = {}, e.Pipe = [{
    filter: ["width", "items", "settings"],
    run: function (a) {
      a.current = this._items && this._items[this.relative(this._current)]
    }
  }, {
    filter: ["items", "settings"], run: function () {
      var a = this._clones, b = this.$stage.children(".cloned");
      (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
    }
  }, {
    filter: ["items", "settings"], run: function () {
      var a, b, c = this._clones, d = this._items,
        e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
      for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
    }
  }, {
    filter: ["width", "items", "settings"], run: function () {
      var a, b, c, d = this.settings.rtl ? 1 : -1,
        e = (this.width() / this.settings.items).toFixed(3), f = 0;
      for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
    }
  }, {
    filter: ["width", "items", "settings"], run: function () {
      var b, c, d = (this.width() / this.settings.items).toFixed(3), e = {
        width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
        "padding-left": this.settings.stagePadding || "",
        "padding-right": this.settings.stagePadding || ""
      };
      if (this.$stage.css(e), e = {width: this.settings.autoWidth ? "auto" : d - this.settings.margin}, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function (a) {
        return a > 1
      }).length > 0) for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e); else this.$stage.children().css(e)
    }
  }, {
    filter: ["width", "items", "settings"], run: function (a) {
      a.current && this.reset(this.$stage.children().index(a.current))
    }
  }, {
    filter: ["position"], run: function () {
      this.animate(this.coordinates(this._current))
    }
  }, {
    filter: ["width", "position", "items", "settings"], run: function () {
      var a, b, c, d, e = this.settings.rtl ? 1 : -1,
        f = 2 * this.settings.stagePadding,
        g = this.coordinates(this.current()) + f, h = g + this.width() * e,
        i = [];
      for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
      this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
    }
  }], e.prototype.initialize = function () {
    if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
      var b, c, e;
      if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1
    }
    this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
  }, e.prototype.setup = function () {
    var b = this.viewport(), c = this.options.responsive, d = -1, e = null;
    c ? (a.each(c, function (a) {
      b >= a && a > d && (d = Number(a))
    }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function (a, b) {
      return b.replace(/\b owl-responsive-\S+/g, "")
    }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
      property: {
        name: "settings",
        value: e
      }
    }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    }))
  }, e.prototype.optionsLogic = function () {
    this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
  }, e.prototype.prepare = function (b) {
    var c = this.trigger("prepare", {content: b});
    return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {content: c.data}), c.data
  }, e.prototype.update = function () {
    for (var b = 0, c = this._pipe.length, d = a.proxy(function (a) {
      return this[a]
    }, this._invalidated), e = {}; c > b;) (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
    this._invalidated = {}
  }, e.prototype.width = function (a) {
    switch (a = a || e.Width.Default) {
      case e.Width.Inner:
      case e.Width.Outer:
        return this._width;
      default:
        return this._width - 2 * this.settings.stagePadding + this.settings.margin
    }
  }, e.prototype.refresh = function () {
    if (0 === this._items.length) return !1;
    (new Date).getTime();
    this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
  }, e.prototype.eventsCall = function () {
    this.e._onDragStart = a.proxy(function (a) {
      this.onDragStart(a)
    }, this), this.e._onDragMove = a.proxy(function (a) {
      this.onDragMove(a)
    }, this), this.e._onDragEnd = a.proxy(function (a) {
      this.onDragEnd(a)
    }, this), this.e._onResize = a.proxy(function (a) {
      this.onResize(a)
    }, this), this.e._transitionEnd = a.proxy(function (a) {
      this.transitionEnd(a)
    }, this), this.e._preventClick = a.proxy(function (a) {
      this.preventClick(a)
    }, this)
  }, e.prototype.onThrottledResize = function () {
    b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
  }, e.prototype.onResize = function () {
    return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
  }, e.prototype.eventsRouter = function (a) {
    var b = a.type;
    "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
  }, e.prototype.internalEvents = function () {
    var c = (k(), l());
    this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function (a) {
      this.eventsRouter(a)
    }, this)), this.$stage.on("dragstart", function () {
      return !1
    }), this.$stage.get(0).onselectstart = function () {
      return !1
    }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function (a) {
      this.eventsRouter(a)
    }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
  }, e.prototype.onDragStart = function (d) {
    var e, g, h, i;
    if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
    if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0; else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
    this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function (a) {
      this.eventsRouter(a)
    }, this))
  }, e.prototype.onDragMove = function (a) {
    var c, e, g, h, i, j;
    this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
  }, e.prototype.onDragEnd = function (b) {
    var d, e, f;
    if (this.state.isTouch) {
      if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
      this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
    }
  }, e.prototype.removeClick = function (c) {
    this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function () {
      a(c).off("click.preventClick")
    }, 300)
  }, e.prototype.preventClick = function (b) {
    b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
  }, e.prototype.getTransformProperty = function () {
    var a, c;
    return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
  }, e.prototype.closest = function (b) {
    var c = -1, d = 30, e = this.width(), f = this.coordinates();
    return this.settings.freeDrag || a.each(f, a.proxy(function (a, g) {
      return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
    }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
  }, e.prototype.animate = function (b) {
    this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
      transform: "translate3d(" + b + "px,0px, 0px)",
      transition: this.speed() / 1e3 + "s"
    }) : this.state.isTouch ? this.$stage.css({left: b + "px"}) : this.$stage.animate({left: b}, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function () {
      this.state.inMotion && this.transitionEnd()
    }, this))
  }, e.prototype.current = function (a) {
    if (a === d) return this._current;
    if (0 === this._items.length) return d;
    if (a = this.normalize(a), this._current !== a) {
      var b = this.trigger("change", {property: {name: "position", value: a}});
      b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      })
    }
    return this._current
  }, e.prototype.invalidate = function (a) {
    this._invalidated[a] = !0
  }, e.prototype.reset = function (a) {
    a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
  }, e.prototype.normalize = function (b, c) {
    var e = c ? this._items.length : this._items.length + this._clones.length;
    return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
  }, e.prototype.relative = function (a) {
    return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
  }, e.prototype.maximum = function (a) {
    var b, c, d, e = 0, f = this.settings;
    if (a) return this._items.length - 1;
    if (!f.loop && f.center) b = this._items.length - 1; else if (f.loop || f.center) if (f.loop || f.center) b = this._items.length + f.items; else {
      if (!f.autoWidth && !f.merge) throw"Can not detect maximum absolute position.";
      for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width(); (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
    } else b = this._items.length - f.items;
    return b
  }, e.prototype.minimum = function (a) {
    return a ? 0 : this._clones.length / 2
  }, e.prototype.items = function (a) {
    return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
  }, e.prototype.mergers = function (a) {
    return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
  }, e.prototype.clones = function (b) {
    var c = this._clones.length / 2, e = c + this._items.length,
      f = function (a) {
        return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
      };
    return b === d ? a.map(this._clones, function (a, b) {
      return f(b)
    }) : a.map(this._clones, function (a, c) {
      return a === b ? f(c) : null
    })
  }, e.prototype.speed = function (a) {
    return a !== d && (this._speed = a), this._speed
  }, e.prototype.coordinates = function (b) {
    var c = null;
    return b === d ? a.map(this._coordinates, a.proxy(function (a, b) {
      return this.coordinates(b)
    }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
  }, e.prototype.duration = function (a, b, c) {
    return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
  }, e.prototype.to = function (c, d) {
    if (this.settings.loop) {
      var e = c - this.relative(this.current()), f = this.current(),
        g = this.current(), h = this.current() + e, i = 0 > g - h ? !0 : !1,
        j = this._clones.length + this._items.length;
      h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function () {
        this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
      }, this), 30)
    } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
  }, e.prototype.next = function (a) {
    a = a || !1, this.to(this.relative(this.current()) + 1, a)
  }, e.prototype.prev = function (a) {
    a = a || !1, this.to(this.relative(this.current()) - 1, a)
  }, e.prototype.transitionEnd = function (a) {
    return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
  }, e.prototype.viewport = function () {
    var d;
    if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width(); else if (b.innerWidth) d = b.innerWidth; else {
      if (!c.documentElement || !c.documentElement.clientWidth) throw"Can not detect viewport width.";
      d = c.documentElement.clientWidth
    }
    return d
  }, e.prototype.replace = function (b) {
    this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function () {
      return 1 === this.nodeType
    }).each(a.proxy(function (a, b) {
      b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
    }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
  }, e.prototype.add = function (a, b) {
    b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
      content: a,
      position: b
    }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
      content: a,
      position: b
    })
  }, e.prototype.remove = function (a) {
    a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
      content: this._items[a],
      position: a
    }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
      content: null,
      position: a
    }))
  }, e.prototype.addTriggerableEvents = function () {
    var b = a.proxy(function (b, c) {
      return a.proxy(function (a) {
        a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
      }, this)
    }, this);
    a.each({
      next: this.next,
      prev: this.prev,
      to: this.to,
      destroy: this.destroy,
      refresh: this.refresh,
      replace: this.replace,
      add: this.add,
      remove: this.remove
    }, a.proxy(function (a, c) {
      this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
    }, this))
  }, e.prototype.watchVisibility = function () {
    function c(a) {
      return a.offsetWidth > 0 && a.offsetHeight > 0
    }

    function d() {
      c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
    }

    c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
  }, e.prototype.preloadAutoWidthImages = function (b) {
    var c, d, e, f;
    c = 0, d = this, b.each(function (g, h) {
      e = a(h), f = new Image, f.onload = function () {
        c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
      }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
    })
  }, e.prototype.destroy = function () {
    this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
    for (var d in this._plugins) this._plugins[d].destroy();
    (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function () {
    }, this.$stage.off("dragstart", function () {
      return !1
    })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
  }, e.prototype.op = function (a, b, c) {
    var d = this.settings.rtl;
    switch (b) {
      case"<":
        return d ? a > c : c > a;
      case">":
        return d ? c > a : a > c;
      case">=":
        return d ? c >= a : a >= c;
      case"<=":
        return d ? a >= c : c >= a
    }
  }, e.prototype.on = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
  }, e.prototype.off = function (a, b, c, d) {
    a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
  }, e.prototype.trigger = function (b, c, d) {
    var e = {item: {count: this._items.length, index: this.current()}},
      f = a.camelCase(a.grep(["on", b, d], function (a) {
        return a
      }).join("-").toLowerCase()),
      g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({relatedTarget: this}, e, c));
    return this._supress[b] || (a.each(this._plugins, function (a, b) {
      b.onTrigger && b.onTrigger(g)
    }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
  }, e.prototype.suppress = function (b) {
    a.each(b, a.proxy(function (a, b) {
      this._supress[b] = !0
    }, this))
  }, e.prototype.release = function (b) {
    a.each(b, a.proxy(function (a, b) {
      delete this._supress[b]
    }, this))
  }, e.prototype.browserSupport = function () {
    if (this.support3d = j(), this.support3d) {
      this.transformVendor = i();
      var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
      this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
    }
    this.state.orientation = b.orientation
  }, a.fn.owlCarousel = function (b) {
    return this.each(function () {
      a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
    })
  }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document), function (a, b) {
  var c = function (b) {
    this._core = b, this._loaded = [], this._handlers = {
      "initialized.owl.carousel change.owl.carousel": a.proxy(function (b) {
        if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type)) for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function (a, b) {
          this.load(b)
        }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
      }, this)
    }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  c.Defaults = {lazyLoad: !1}, c.prototype.load = function (c) {
    var d = this._core.$stage.children().eq(c), e = d && d.find(".owl-lazy");
    !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function (c, d) {
      var e, f = a(d),
        g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
      this._core.trigger("load", {
        element: f,
        url: g
      }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function () {
        f.css("opacity", 1), this._core.trigger("loaded", {
          element: f,
          url: g
        }, "lazy")
      }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function () {
        f.css({
          "background-image": "url(" + g + ")",
          opacity: "1"
        }), this._core.trigger("loaded", {element: f, url: g}, "lazy")
      }, this), e.src = g)
    }, this)), this._loaded.push(d.get(0)))
  }, c.prototype.destroy = function () {
    var a, b;
    for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document), function (a) {
  var b = function (c) {
    this._core = c, this._handlers = {
      "initialized.owl.carousel": a.proxy(function () {
        this._core.settings.autoHeight && this.update()
      }, this), "changed.owl.carousel": a.proxy(function (a) {
        this._core.settings.autoHeight && "position" == a.property.name && this.update()
      }, this), "loaded.owl.lazy": a.proxy(function (a) {
        this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
      }, this)
    }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
  };
  b.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
  }, b.prototype.update = function () {
    this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
  }, b.prototype.destroy = function () {
    var a, b;
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document), function (a, b, c) {
  var d = function (b) {
    this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
      "resize.owl.carousel": a.proxy(function (a) {
        this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
      }, this),
      "refresh.owl.carousel changed.owl.carousel": a.proxy(function () {
        this._playing && this.stop()
      }, this),
      "prepared.owl.carousel": a.proxy(function (b) {
        var c = a(b.content).find(".owl-video");
        c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
      }, this)
    }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function (a) {
      this.play(a)
    }, this))
  };
  d.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
  }, d.prototype.fetch = function (a, b) {
    var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
      d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
      e = a.attr("data-width") || this._core.settings.videoWidth,
      f = a.attr("data-height") || this._core.settings.videoHeight,
      g = a.attr("href");
    if (!g) throw new Error("Missing video URL.");
    if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube"; else {
      if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
      c = "vimeo"
    }
    d = d[6], this._videos[g] = {
      type: c,
      id: d,
      width: e,
      height: f
    }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
  }, d.prototype.thumbnail = function (b, c) {
    var d, e, f,
      g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
      h = b.find("img"), i = "src", j = "", k = this._core.settings,
      l = function (a) {
        e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
      };
    return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void ("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
      type: "GET",
      url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
      jsonp: "callback",
      dataType: "jsonp",
      success: function (a) {
        f = a[0].thumbnail_large, l(f)
      }
    }))
  }, d.prototype.stop = function () {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
  }, d.prototype.play = function (b) {
    this._core.trigger("play", null, "video"), this._playing && this.stop();
    var c, d, e = a(b.target || b.srcElement),
      f = e.closest("." + this._core.settings.itemClass),
      g = this._videos[f.attr("data-video")], h = g.width || "100%",
      i = g.height || this._core.$stage.height();
    "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
  }, d.prototype.isInFullScreen = function () {
    var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
    return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
  }, d.prototype.destroy = function () {
    var a, b;
    this._core.$element.off("click.owl.video");
    for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document), function (a, b, c, d) {
  var e = function (b) {
    this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
      "change.owl.carousel": a.proxy(function (a) {
        "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
      }, this),
      "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function (a) {
        this.swapping = "translated" == a.type
      }, this),
      "translate.owl.carousel": a.proxy(function () {
        this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
      }, this)
    }, this.core.$element.on(this.handlers)
  };
  e.Defaults = {animateOut: !1, animateIn: !1}, e.prototype.swap = function () {
    if (1 === this.core.settings.items && this.core.support3d) {
      this.core.speed(0);
      var b, c = a.proxy(this.clear, this),
        d = this.core.$stage.children().eq(this.previous),
        e = this.core.$stage.children().eq(this.next),
        f = this.core.settings.animateIn, g = this.core.settings.animateOut;
      this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({left: b + "px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
    }
  }, e.prototype.clear = function (b) {
    a(b.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
  }, e.prototype.destroy = function () {
    var a, b;
    for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
    for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document), function (a, b, c) {
  var d = function (b) {
    this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
      "translated.owl.carousel refreshed.owl.carousel": a.proxy(function () {
        this.autoplay()
      }, this), "play.owl.autoplay": a.proxy(function (a, b, c) {
        this.play(b, c)
      }, this), "stop.owl.autoplay": a.proxy(function () {
        this.stop()
      }, this), "mouseover.owl.autoplay": a.proxy(function () {
        this.core.settings.autoplayHoverPause && this.pause()
      }, this), "mouseleave.owl.autoplay": a.proxy(function () {
        this.core.settings.autoplayHoverPause && this.autoplay()
      }, this)
    }, this.core.$element.on(this.handlers)
  };
  d.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
  }, d.prototype.autoplay = function () {
    this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function () {
      this.play()
    }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
  }, d.prototype.play = function () {
    return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
  }, d.prototype.stop = function () {
    b.clearInterval(this.interval)
  }, d.prototype.pause = function () {
    b.clearInterval(this.interval)
  }, d.prototype.destroy = function () {
    var a, c;
    b.clearInterval(this.interval);
    for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document), function (a) {
  "use strict";
  var b = function (c) {
    this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
      next: this._core.next,
      prev: this._core.prev,
      to: this._core.to
    }, this._handlers = {
      "prepared.owl.carousel": a.proxy(function (b) {
        this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
      }, this),
      "add.owl.carousel": a.proxy(function (b) {
        this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
      }, this),
      "remove.owl.carousel prepared.owl.carousel": a.proxy(function (a) {
        this._core.settings.dotsData && this._templates.splice(a.position, 1)
      }, this),
      "change.owl.carousel": a.proxy(function (a) {
        if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
          var b = this._core.current(), c = this._core.maximum(),
            d = this._core.minimum();
          a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
        }
      }, this),
      "changed.owl.carousel": a.proxy(function (a) {
        "position" == a.property.name && this.draw()
      }, this),
      "refreshed.owl.carousel": a.proxy(function () {
        this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
      }, this)
    }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
  };
  b.Defaults = {
    nav: !1,
    navRewind: !0,
    navText: ["prev", "next"],
    navSpeed: !1,
    navElement: "div",
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotData: !1,
    dotsSpeed: !1,
    dotsContainer: !1,
    controlsClass: "owl-controls"
  }, b.prototype.initialize = function () {
    var b, c, d = this._core.settings;
    d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function (b) {
      var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
      b.preventDefault(), this.to(c, d.dotsSpeed)
    }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function () {
      this.prev(d.navSpeed)
    }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function () {
      this.next(d.navSpeed)
    }, this));
    for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
  }, b.prototype.destroy = function () {
    var a, b, c, d;
    for (a in this._handlers) this.$element.off(a, this._handlers[a]);
    for (b in this._controls) this._controls[b].remove();
    for (d in this.overides) this._core[d] = this._overrides[d];
    for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
  }, b.prototype.update = function () {
    var a, b, c, d = this._core.settings, e = this._core.clones().length / 2,
      f = e + this._core.items().length,
      g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
    if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy) for (this._pages = [], a = e, b = 0, c = 0; f > a; a++) (b >= g || 0 === b) && (this._pages.push({
      start: a - e,
      end: a - e + g - 1
    }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
  }, b.prototype.draw = function () {
    var b, c, d = "", e = this._core.settings,
      f = (this._core.$stage.children(), this._core.relative(this._core.current()));
    if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
      if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
        for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
        this._controls.$indicators.html(d)
      } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
      this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
    }
    this._controls.$indicators.toggle(e.dots)
  }, b.prototype.onTrigger = function (b) {
    var c = this._core.settings;
    b.page = {
      index: a.inArray(this.current(), this._pages),
      count: this._pages.length,
      size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
    }
  }, b.prototype.current = function () {
    var b = this._core.relative(this._core.current());
    return a.grep(this._pages, function (a) {
      return a.start <= b && a.end >= b
    }).pop()
  }, b.prototype.getPosition = function (b) {
    var c, d, e = this._core.settings;
    return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
  }, b.prototype.next = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
  }, b.prototype.prev = function (b) {
    a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
  }, b.prototype.to = function (b, c, d) {
    var e;
    d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
  }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document), function (a, b) {
  "use strict";
  var c = function (d) {
    this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
      "initialized.owl.carousel": a.proxy(function () {
        "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
      }, this), "prepared.owl.carousel": a.proxy(function (b) {
        var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
        this._hashes[c] = b.content
      }, this)
    }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function () {
      var a = b.location.hash.substring(1), c = this._core.$stage.children(),
        d = this._hashes[a] && c.index(this._hashes[a]) || 0;
      return a ? void this._core.to(d, !1, !0) : !1
    }, this))
  };
  c.Defaults = {URLhashListener: !1}, c.prototype.destroy = function () {
    var c, d;
    a(b).off("hashchange.owl.navigation");
    for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
    for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
  }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);

/*
 *  FlexSlider
 * -----------------------------------------------
*/
/*
 * jQuery FlexSlider v2.6.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function ($) {
  var e = !0;
  $.flexslider = function (t, a) {
    var n = $(t);
    n.vars = $.extend({}, $.flexslider.defaults, a);
    var i = n.vars.namespace,
      s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
      r = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
      o = "click touchend MSPointerUp keyup", l = "", c,
      d = "vertical" === n.vars.direction, u = n.vars.reverse,
      v = n.vars.itemWidth > 0, p = "fade" === n.vars.animation,
      m = "" !== n.vars.asNavFor, f = {};
    $.data(t, "flexslider", n), f = {
      init: function () {
        n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = $(n.vars.selector, n), n.container = $(n.containerSelector, n), n.count = n.slides.length, n.syncExists = $(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function () {
          var e = document.createElement("div"),
            t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
          for (var a in t) if (void 0 !== e.style[t[a]]) return n.pfx = t[a].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
          return !1
        }(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = $(n.vars.controlsContainer).length > 0 && $(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = $(n.vars.manualControls).length > 0 && $(n.vars.manualControls)), "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === $(n.vars.customDirectionNav).length && $(n.vars.customDirectionNav)), n.vars.randomize && (n.slides.sort(function () {
          return Math.round(Math.random()) - .5
        }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && f.controlNav.setup(), n.vars.directionNav && f.directionNav.setup(), n.vars.keyboard && (1 === $(n.containerSelector).length || n.vars.multipleKeyboard) && $(document).bind("keyup", function (e) {
          var t = e.keyCode;
          if (!n.animating && (39 === t || 37 === t)) {
            var a = 39 === t ? n.getTarget("next") : 37 === t ? n.getTarget("prev") : !1;
            n.flexAnimate(a, n.vars.pauseOnAction)
          }
        }), n.vars.mousewheel && n.bind("mousewheel", function (e, t, a, i) {
          e.preventDefault();
          var s = 0 > t ? n.getTarget("next") : n.getTarget("prev");
          n.flexAnimate(s, n.vars.pauseOnAction)
        }), n.vars.pausePlay && f.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function () {
          n.manualPlay || n.manualPause || n.pause()
        }, function () {
          n.manualPause || n.manualPlay || n.stopped || n.play()
        }), n.vars.pauseInvisible && f.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && f.asNav.setup(), r && n.vars.touch && f.touch(), (!p || p && n.vars.smoothHeight) && $(window).bind("resize orientationchange focus", f.resize), n.find("img").attr("draggable", "false"), setTimeout(function () {
          n.vars.start(n)
        }, 200)
      }, asNav: {
        setup: function () {
          n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(i + "active-slide").eq(n.currentItem).addClass(i + "active-slide"), s ? (t._slider = n, n.slides.each(function () {
            var e = this;
            e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function (e) {
              e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
            }, !1), e.addEventListener("MSGestureTap", function (e) {
              e.preventDefault();
              var t = $(this), a = t.index();
              $(n.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
            })
          })) : n.slides.on(o, function (e) {
            e.preventDefault();
            var t = $(this), a = t.index(),
              s = t.offset().left - $(n).scrollLeft();
            0 >= s && t.hasClass(i + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : $(n.vars.asNavFor).data("flexslider").animating || t.hasClass(i + "active-slide") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
          })
        }
      }, controlNav: {
        setup: function () {
          n.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
        }, setupPaging: function () {
          var e = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging",
            t = 1, a, s;
          if (n.controlNavScaffold = $('<ol class="' + i + "control-nav " + i + e + '"></ol>'), n.pagingCount > 1) for (var r = 0; r < n.pagingCount; r++) {
            if (s = n.slides.eq(r), void 0 === s.attr("data-thumb-alt") && s.attr("data-thumb-alt", ""), altText = "" !== s.attr("data-thumb-alt") ? altText = ' alt="' + s.attr("data-thumb-alt") + '"' : "", a = "thumbnails" === n.vars.controlNav ? '<img src="' + s.attr("data-thumb") + '"' + altText + "/>" : '<a href="#">' + t + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
              var c = s.attr("data-thumbcaption");
              "" !== c && void 0 !== c && (a += '<span class="' + i + 'caption">' + c + "</span>")
            }
            n.controlNavScaffold.append("<li>" + a + "</li>"), t++
          }
          n.controlsContainer ? $(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), n.controlNavScaffold.delegate("a, img", o, function (e) {
            if (e.preventDefault(), "" === l || l === e.type) {
              var t = $(this), a = n.controlNav.index(t);
              t.hasClass(i + "active") || (n.direction = a > n.currentSlide ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction))
            }
            "" === l && (l = e.type), f.setToClearWatchedEvent()
          })
        }, setupManual: function () {
          n.controlNav = n.manualControls, f.controlNav.active(), n.controlNav.bind(o, function (e) {
            if (e.preventDefault(), "" === l || l === e.type) {
              var t = $(this), a = n.controlNav.index(t);
              t.hasClass(i + "active") || (a > n.currentSlide ? n.direction = "next" : n.direction = "prev", n.flexAnimate(a, n.vars.pauseOnAction))
            }
            "" === l && (l = e.type), f.setToClearWatchedEvent()
          })
        }, set: function () {
          var e = "thumbnails" === n.vars.controlNav ? "img" : "a";
          n.controlNav = $("." + i + "control-nav li " + e, n.controlsContainer ? n.controlsContainer : n)
        }, active: function () {
          n.controlNav.removeClass(i + "active").eq(n.animatingTo).addClass(i + "active")
        }, update: function (e, t) {
          n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append($('<li><a href="#">' + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(t).closest("li").remove(), f.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(t, e) : f.controlNav.active()
        }
      }, directionNav: {
        setup: function () {
          var e = $('<ul class="' + i + 'direction-nav"><li class="' + i + 'nav-prev"><a class="' + i + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + i + 'nav-next"><a class="' + i + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
          n.customDirectionNav ? n.directionNav = n.customDirectionNav : n.controlsContainer ? ($(n.controlsContainer).append(e), n.directionNav = $("." + i + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = $("." + i + "direction-nav li a", n)), f.directionNav.update(), n.directionNav.bind(o, function (e) {
            e.preventDefault();
            var t;
            ("" === l || l === e.type) && (t = $(this).hasClass(i + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(t, n.vars.pauseOnAction)), "" === l && (l = e.type), f.setToClearWatchedEvent()
          })
        }, update: function () {
          var e = i + "disabled";
          1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex")
        }
      }, pausePlay: {
        setup: function () {
          var e = $('<div class="' + i + 'pauseplay"><a href="#"></a></div>');
          n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = $("." + i + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = $("." + i + "pauseplay a", n)), f.pausePlay.update(n.vars.slideshow ? i + "pause" : i + "play"), n.pausePlay.bind(o, function (e) {
            e.preventDefault(), ("" === l || l === e.type) && ($(this).hasClass(i + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === l && (l = e.type), f.setToClearWatchedEvent()
          })
        }, update: function (e) {
          "play" === e ? n.pausePlay.removeClass(i + "pause").addClass(i + "play").html(n.vars.playText) : n.pausePlay.removeClass(i + "play").addClass(i + "pause").html(n.vars.pauseText)
        }
      }, touch: function () {
        function e(e) {
          e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), T = 0, c = d ? n.h : n.w, f = Number(new Date), l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c)
        }

        function a(e) {
          e.stopPropagation();
          var a = e.target._slider;
          if (a) {
            var n = -e.translationX, i = -e.translationY;
            return T += d ? i : n, m = T, x = d ? Math.abs(T) < Math.abs(-n) : Math.abs(T) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
              t._gesture.stop()
            }) : void ((!x || Number(new Date) - f > 500) && (e.preventDefault(), !p && a.transitions && (a.vars.animationLoop || (m = T / (0 === a.currentSlide && 0 > T || a.currentSlide === a.last && T > 0 ? Math.abs(T) / c + 2 : 1)), a.setProps(l + m, "setTouch"))))
          }
        }

        function i(e) {
          e.stopPropagation();
          var t = e.target._slider;
          if (t) {
            if (t.animatingTo === t.currentSlide && !x && null !== m) {
              var a = u ? -m : m,
                n = a > 0 ? t.getTarget("next") : t.getTarget("prev");
              t.canAdvance(n) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
            }
            r = null, o = null, m = null, l = null, T = 0
          }
        }

        var r, o, l, c, m, f, g, h, S, x = !1, y = 0, b = 0, T = 0;
        s ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", e, !1), t._slider = n, t.addEventListener("MSGestureChange", a, !1), t.addEventListener("MSGestureEnd", i, !1)) : (g = function (e) {
          n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), c = d ? n.h : n.w, f = Number(new Date), y = e.touches[0].pageX, b = e.touches[0].pageY, l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c, r = d ? b : y, o = d ? y : b, t.addEventListener("touchmove", h, !1), t.addEventListener("touchend", S, !1))
        }, h = function (e) {
          y = e.touches[0].pageX, b = e.touches[0].pageY, m = d ? r - b : r - y, x = d ? Math.abs(m) < Math.abs(y - o) : Math.abs(m) < Math.abs(b - o);
          var t = 500;
          (!x || Number(new Date) - f > t) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (m /= 0 === n.currentSlide && 0 > m || n.currentSlide === n.last && m > 0 ? Math.abs(m) / c + 2 : 1), n.setProps(l + m, "setTouch")))
        }, S = function (e) {
          if (t.removeEventListener("touchmove", h, !1), n.animatingTo === n.currentSlide && !x && null !== m) {
            var a = u ? -m : m,
              i = a > 0 ? n.getTarget("next") : n.getTarget("prev");
            n.canAdvance(i) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? n.flexAnimate(i, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
          }
          t.removeEventListener("touchend", S, !1), r = null, o = null, m = null, l = null
        }, t.addEventListener("touchstart", g, !1))
      }, resize: function () {
        !n.animating && n.is(":visible") && (v || n.doMath(), p ? f.smoothHeight() : v ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : d ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && f.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
      }, smoothHeight: function (e) {
        if (!d || p) {
          var t = p ? n : n.viewport;
          e ? t.animate({height: n.slides.eq(n.animatingTo).height()}, e) : t.height(n.slides.eq(n.animatingTo).height())
        }
      }, sync: function (e) {
        var t = $(n.vars.sync).data("flexslider"), a = n.animatingTo;
        switch (e) {
          case"animate":
            t.flexAnimate(a, n.vars.pauseOnAction, !1, !0);
            break;
          case"play":
            t.playing || t.asNav || t.play();
            break;
          case"pause":
            t.pause()
        }
      }, uniqueID: function (e) {
        return e.filter("[id]").add(e.find("[id]")).each(function () {
          var e = $(this);
          e.attr("id", e.attr("id") + "_clone")
        }), e
      }, pauseInvisible: {
        visProp: null, init: function () {
          var e = f.pauseInvisible.getHiddenProp();
          if (e) {
            var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
            document.addEventListener(t, function () {
              f.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
            })
          }
        }, isHidden: function () {
          var e = f.pauseInvisible.getHiddenProp();
          return e ? document[e] : !1
        }, getHiddenProp: function () {
          var e = ["webkit", "moz", "ms", "o"];
          if ("hidden" in document) return "hidden";
          for (var t = 0; t < e.length; t++) if (e[t] + "Hidden" in document) return e[t] + "Hidden";
          return null
        }
      }, setToClearWatchedEvent: function () {
        clearTimeout(c), c = setTimeout(function () {
          l = ""
        }, 3e3)
      }
    }, n.flexAnimate = function (e, t, a, s, o) {
      if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next" : "prev"), !n.animating && (n.canAdvance(e, o) || a) && n.is(":visible")) {
        if (m && s) {
          var l = $(n.vars.asNavFor).data("flexslider");
          if (n.atEnd = 0 === e || e === n.count - 1, l.flexAnimate(e, !0, !1, !0, o), n.direction = n.currentItem < e ? "next" : "prev", l.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e) return n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), !1;
          n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), e = Math.floor(e / n.visible)
        }
        if (n.animating = !0, n.animatingTo = e, t && n.pause(), n.vars.before(n), n.syncExists && !o && f.sync("animate"), n.vars.controlNav && f.controlNav.active(), v || n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && f.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p) r ? (n.slides.eq(n.currentSlide).css({
          opacity: 0,
          zIndex: 1
        }), n.slides.eq(e).css({
          opacity: 1,
          zIndex: 2
        }), n.wrapup(c)) : (n.slides.eq(n.currentSlide).css({zIndex: 1}).animate({opacity: 0}, n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing, n.wrapup)); else {
          var c = d ? n.slides.filter(":first").height() : n.computedW, g, h, S;
          v ? (g = n.vars.itemMargin, S = (n.itemW + g) * n.move * n.animatingTo, h = S > n.limit && 1 !== n.visible ? n.limit : S) : h = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * c : 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * c : u ? (n.count - 1 - e + n.cloneOffset) * c : (e + n.cloneOffset) * c, n.setProps(h, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function () {
            clearTimeout(n.ensureAnimationEnd), n.wrapup(c)
          }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function () {
            n.wrapup(c)
          }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function () {
            n.wrapup(c)
          })
        }
        n.vars.smoothHeight && f.smoothHeight(n.vars.animationSpeed)
      }
    }, n.wrapup = function (e) {
      p || v || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
    }, n.animateSlides = function () {
      !n.animating && e && n.flexAnimate(n.getTarget("next"))
    }, n.pause = function () {
      clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && f.pausePlay.update("play"), n.syncExists && f.sync("pause")
    }, n.play = function () {
      n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && f.pausePlay.update("pause"), n.syncExists && f.sync("play")
    }, n.stop = function () {
      n.pause(), n.stopped = !0
    }, n.canAdvance = function (e, t) {
      var a = m ? n.pagingCount - 1 : n.last;
      return t ? !0 : m && n.currentItem === n.count - 1 && 0 === e && "prev" === n.direction ? !0 : m && 0 === n.currentItem && e === n.pagingCount - 1 && "next" !== n.direction ? !1 : e !== n.currentSlide || m ? n.vars.animationLoop ? !0 : n.atEnd && 0 === n.currentSlide && e === a && "next" !== n.direction ? !1 : n.atEnd && n.currentSlide === a && 0 === e && "next" === n.direction ? !1 : !0 : !1
    }, n.getTarget = function (e) {
      return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
    }, n.setProps = function (e, t, a) {
      var i = function () {
        var a = e ? e : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo,
          i = function () {
            if (v) return "setTouch" === t ? e : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : a;
            switch (t) {
              case"setTotal":
                return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;
              case"setTouch":
                return u ? e : e;
              case"jumpEnd":
                return u ? e : n.count * e;
              case"jumpStart":
                return u ? n.count * e : e;
              default:
                return e
            }
          }();
        return -1 * i + "px"
      }();
      n.transitions && (i = d ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", a), n.container.css("transition-duration", a)), n.args[n.prop] = i, (n.transitions || void 0 === a) && n.container.css(n.args), n.container.css("transform", i)
    }, n.setup = function (e) {
      if (p) n.slides.css({
        width: "100%",
        "float": "left",
        marginRight: "-100%",
        position: "relative"
      }), "init" === e && (r ? n.slides.css({
        opacity: 0,
        display: "block",
        webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
        zIndex: 1
      }).eq(n.currentSlide).css({
        opacity: 1,
        zIndex: 2
      }) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
        opacity: 0,
        display: "block",
        zIndex: 1
      }).eq(n.currentSlide).css({zIndex: 2}).css({opacity: 1}) : n.slides.css({
        opacity: 0,
        display: "block",
        zIndex: 1
      }).eq(n.currentSlide).css({zIndex: 2}).animate({opacity: 1}, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && f.smoothHeight(); else {
        var t, a;
        "init" === e && (n.viewport = $('<div class="' + i + 'viewport"></div>').css({
          overflow: "hidden",
          position: "relative"
        }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (a = $.makeArray(n.slides).reverse(), n.slides = $(a), n.container.empty().append(n.slides))), n.vars.animationLoop && !v && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = $(n.vars.selector, n), t = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, d && !v ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
          n.newSlides.css({display: "block"}), n.doMath(), n.viewport.height(n.h), n.setProps(t * n.h, "init")
        }, "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(t * n.computedW, "init"), setTimeout(function () {
          n.doMath(), n.newSlides.css({
            width: n.computedW,
            marginRight: n.computedM,
            "float": "left",
            display: "block"
          }), n.vars.smoothHeight && f.smoothHeight()
        }, "init" === e ? 100 : 0))
      }
      v || n.slides.removeClass(i + "active-slide").eq(n.currentSlide).addClass(i + "active-slide"), n.vars.init(n)
    }, n.doMath = function () {
      var e = n.slides.first(), t = n.vars.itemMargin, a = n.vars.minItems,
        i = n.vars.maxItems;
      n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), v ? (n.itemT = n.vars.itemWidth + t, n.itemM = t, n.minW = a ? a * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (a - 1)) / a : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.itemM = t, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding, n.computedM = n.itemM
    }, n.update = function (e, t) {
      n.doMath(), v || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !v || n.pagingCount > n.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !v || n.pagingCount < n.controlNav.length) && (v && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), f.controlNav.update("remove", n.last))), n.vars.directionNav && f.directionNav.update()
    }, n.addSlide = function (e, t) {
      var a = $(e);
      n.count += 1, n.last = n.count - 1, d && u ? void 0 !== t ? n.slides.eq(n.count - t).after(a) : n.container.prepend(a) : void 0 !== t ? n.slides.eq(t).before(a) : n.container.append(a), n.update(t, "add"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
    }, n.removeSlide = function (e) {
      var t = isNaN(e) ? n.slides.index($(e)) : e;
      n.count -= 1, n.last = n.count - 1, isNaN(e) ? $(e, n.slides).remove() : d && u ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(), n.doMath(), n.update(t, "remove"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
    }, f.init()
  }, $(window).blur(function (t) {
    e = !1
  }).focus(function (t) {
    e = !0
  }), $.flexslider.defaults = {
    namespace: "flex-",
    selector: ".slides > li",
    animation: "fade",
    easing: "swing",
    direction: "horizontal",
    reverse: !1,
    animationLoop: !0,
    smoothHeight: !1,
    startAt: 0,
    slideshow: !0,
    slideshowSpeed: 7e3,
    animationSpeed: 600,
    initDelay: 0,
    randomize: !1,
    fadeFirstSlide: !0,
    thumbCaptions: !1,
    pauseOnAction: !0,
    pauseOnHover: !1,
    pauseInvisible: !0,
    useCSS: !0,
    touch: !0,
    video: !1,
    controlNav: !0,
    directionNav: !0,
    prevText: "Previous",
    nextText: "Next",
    keyboard: !0,
    multipleKeyboard: !1,
    mousewheel: !1,
    pausePlay: !1,
    pauseText: "Pause",
    playText: "Play",
    controlsContainer: "",
    manualControls: "",
    customDirectionNav: "",
    sync: "",
    asNavFor: "",
    itemWidth: 0,
    itemMargin: 0,
    minItems: 1,
    maxItems: 0,
    move: 0,
    allowOneSlide: !0,
    start: function () {
    },
    before: function () {
    },
    after: function () {
    },
    end: function () {
    },
    added: function () {
    },
    removed: function () {
    },
    init: function () {
    }
  }, $.fn.flexslider = function (e) {
    if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function () {
      var t = $(this), a = e.selector ? e.selector : ".slides > li",
        n = t.find(a);
      1 === n.length && e.allowOneSlide === !0 || 0 === n.length ? (n.fadeIn(400), e.start && e.start(t)) : void 0 === t.data("flexslider") && new $.flexslider(this, e)
    });
    var t = $(this).data("flexslider");
    switch (e) {
      case"play":
        t.play();
        break;
      case"pause":
        t.pause();
        break;
      case"stop":
        t.stop();
        break;
      case"next":
        t.flexAnimate(t.getTarget("next"), !0);
        break;
      case"prev":
      case"previous":
        t.flexAnimate(t.getTarget("prev"), !0);
        break;
      default:
        "number" == typeof e && t.flexAnimate(e, !0)
    }
  }
}(jQuery);

/*
 *  USED Magnific Popup
 * -----------------------------------------------
*/
/*! Magnific Popup - v1.0.1 - 2015-12-30
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
  var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose",
    k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp",
    p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close",
    t = function () {
    }, u = !!window.jQuery, v = a(window), w = function (a, c) {
      b.ev.on(o + a + p, c)
    }, x = function (b, c, d, e) {
      var f = document.createElement("div");
      return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
    }, y = function (c, d) {
      b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    }, z = function (c) {
      return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
    }, A = function () {
      a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
    }, B = function () {
      var a = document.createElement("p").style, b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length;) if (b.pop() + "Transition" in a) return !0;
      return !1
    };
  t.prototype = {
    constructor: t, init: function () {
      var c = navigator.appVersion;
      b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
    }, open: function (c) {
      var e;
      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g, h = c.items;
        for (e = 0; e < h.length; e++) if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
          b.index = e;
          break
        }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
      if (b.isOpen) return void b.updateItemHTML();
      b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close()
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close()
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
      }
      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type)
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      }) : b.wrap.css({
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
        height: d.height(),
        position: "absolute"
      }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close()
      }), v.on("resize" + p, function () {
        b.updateSize()
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(), n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o)
      }
      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
    }, close: function () {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close()
      }, b.st.removalDelay)) : b._close())
    }, _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {marginRight: ""};
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
      }
      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
    }, updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), b.wH = d
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
    }, updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
    }, appendContent: function (a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
    }, parseEl: function (c) {
      var d, e = b.items[c];
      if (e.tagName ? e = {el: a(e)} : (d = e.type, e = {
        data: e,
        src: e.src
      }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++) if (e.el.hasClass("mfp-" + f[g])) {
          d = f[g];
          break
        }
        e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
      }
      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
    }, addGroup: function (a, c) {
      var d = function (d) {
        d.mfpEl = this, b._openClick(d, a, c)
      };
      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
    }, _openClick: function (c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g) if (a.isFunction(g)) {
          if (!g.call(b)) return !0
        } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
      }
    }, updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = {status: a, text: d};
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation()
        }), b.container.addClass("mfp-s-" + a), c = a
      }
    }, _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick, e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0
        } else if (e && a.contains(document, c)) return !0;
        return !1
      }
    }, _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a)
    }, _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
    }, _hasScrollBar: function (a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
    }, _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
    }, _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
    }, _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (a, c) {
        if (void 0 === c || c === !1) return !0;
        if (e = a.split("_"), e.length > 1) {
          var d = b.find(p + "-" + e[0]);
          if (d.length > 0) {
            var f = e[1];
            "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
          }
        } else b.find(p + "-" + a).html(c)
      })
    }, _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
      }
      return b.scrollbarSize
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function (b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
    },
    close: function () {
      return a.magnificPopup.instance && a.magnificPopup.instance.close()
    },
    registerModule: function (b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading...",
      autoFocusLast: !0
    }
  }, a.fn.magnificPopup = function (c) {
    A();
    var d = a(this);
    if ("string" == typeof c) if ("open" === c) {
      var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
        g = parseInt(arguments[1], 10) || 0;
      f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({mfpEl: e}, d, f)
    } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1)); else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d
  };
  var C, D, E, F = "inline", G = function () {
    E && (D.after(E.addClass(C)).detach(), E = null)
  };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    }, proto: {
      initInline: function () {
        b.types.push(F), w(h + "." + F, function () {
          G()
        })
      }, getInline: function (c, d) {
        if (G(), c.src) {
          var e = b.st.inline, f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");
          return c.inlineElement = f, f
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
      }
    }
  });
  var H, I = "ajax", J = function () {
    H && a(document.body).removeClass(H)
  }, K = function () {
    J(), b.req && b.req.abort()
  };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    }, proto: {
      initAjax: function () {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
      }, getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src, success: function (d, e, f) {
            var g = {data: d, xhr: f};
            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q)
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
          }, error: function () {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), ""
      }
    }
  });
  var L, M = function (c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;
    var d = b.st.image.titleSrc;
    if (d) {
      if (a.isFunction(d)) return d.call(b, c);
      if (c.el) return c.el.attr(d) || ""
    }
    return ""
  };
  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    }, proto: {
      initImage: function () {
        var c = b.st.image, d = ".image";
        b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
      }, resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
        }
      }, _onImageHasSize: function (a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
      }, findImageSize: function (a) {
        var c = 0, d = a.img[0], e = function (f) {
          L && clearInterval(L), L = setInterval(function () {
            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
          }, f)
        };
        e(1)
      }, getImage: function (c, d) {
        var e = 0, f = function () {
          c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
        }, g = function () {
          c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
        }, h = b.st.image, i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
        }
        return b._parseMarkup(d, {
          title: M(c),
          img_replaceWith: c.img
        }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
      }
    }
  });
  var N, O = function () {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
  };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img")
      }
    }, proto: {
      initZoom: function () {
        var a, c = b.st.zoom, d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e, f, g = c.duration, j = function (a) {
            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
              d = "all " + c.duration / 1e3 + "s " + c.easing, e = {
                position: "fixed",
                zIndex: 9999,
                left: 0,
                top: 0,
                "-webkit-backface-visibility": "hidden"
              }, f = "transition";
            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
          }, k = function () {
            b.content.css("visibility", "visible")
          };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded")
                  }, 16)
                }, g)
              }, 16)
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;
                f = j(a)
              }
              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset())
              }, 16)
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null)
          })
        }
      }, _allowZoom: function () {
        return "image" === b.currItem.type
      }, _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1
      }, _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(), f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
      }
    }
  });
  var P = "iframe", Q = "//about:blank", R = function (a) {
    if (b.currTemplate[P]) {
      var c = b.currTemplate[P].find("iframe");
      c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
    }
  };
  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
      }
    }, proto: {
      initIframe: function () {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0))
        }), w(h + "." + P, function () {
          R()
        })
      }, getIframe: function (c, d) {
        var e = c.src, f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
      }
    }
  });
  var S = function (a) {
    var c = b.items.length;
    return a > c - 1 ? a - c : 0 > a ? c + a : a
  }, T = function (a, b, c) {
    return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
  };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    }, proto: {
      initGallery: function () {
        var c = b.st.gallery, e = ".mfp-gallery",
          g = Boolean(a.fn.mfpFastClick);
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
          })
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
              e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
              f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s),
              h = g ? "mfpFastClick" : "click";
            e[h](function () {
              b.prev()
            }), f[h](function () {
              b.next()
            }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f))
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null
          }, 16)
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
        })) : !1
      }, next: function () {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
      }, prev: function () {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
      }, goTo: function (a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML()
      }, preloadNearbyImages: function () {
        var a, c = b.st.gallery.preload, d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
      }, _preloadItem: function (c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
          }).attr("src", d.src)), d.preloaded = !0
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a
        })
      }, ratio: 1
    }, proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina, c = a.ratio;
          c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
            b.img.css({"max-width": b.img[0].naturalWidth / c, width: "100%"})
          }), w("ElementParse." + U, function (b, d) {
            d.src = a.replaceSrc(d, c)
          }))
        }
      }
    }
  }), function () {
    var b = 1e3, c = "ontouchstart" in window, d = function () {
      v.off("touchmove" + f + " touchend" + f)
    }, e = "mfpFastClick", f = "." + e;
    a.fn.mfpFastClick = function (e) {
      return a(this).each(function () {
        var g, h = a(this);
        if (c) {
          var i, j, k, l, m, n;
          h.on("touchstart" + f, function (a) {
            l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function (a) {
              m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
            }).on("touchend" + f, function (a) {
              d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () {
                g = !1
              }, b), e())
            })
          })
        }
        h.on("click" + f, function () {
          g || e()
        })
      })
    }, a.fn.destroyMfpFastClick = function () {
      a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f)
    }
  }(), A()
});


/*
 *  Maximage Slider
 * -----------------------------------------------
*/
/*
 * jQuery Cycle Plugin (with Transition Definitions)
 */
(function ($) {
  var ver = "2.99";
  if ($.support == undefined) {
    $.support = {opacity: !($.browser.msie)};
  }

  function debug(s) {
    $.fn.cycle.debug && log(s);
  }

  function log() {
    window.console && console.log && console.log("[cycle] " + Array.prototype.join.call(arguments, " "));
  }

  $.expr[":"].paused = function (el) {
    return el.cyclePause;
  };
  $.fn.cycle = function (options, arg2) {
    var o = {s: this.selector, c: this.context};
    if (this.length === 0 && options != "stop") {
      if (!$.isReady && o.s) {
        log("DOM not ready, queuing slideshow");
        $(function () {
          $(o.s, o.c).cycle(options, arg2);
        });
        return this;
      }
      log("terminating; zero elements found by selector" + ($.isReady ? "" : " (DOM not ready)"));
      return this;
    }
    return this.each(function () {
      var opts = handleArguments(this, options, arg2);
      if (opts === false) {
        return;
      }
      opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
      if (this.cycleTimeout) {
        clearTimeout(this.cycleTimeout);
      }
      this.cycleTimeout = this.cyclePause = 0;
      var $cont = $(this);
      var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
      var els = $slides.get();
      if (els.length < 2) {
        log("terminating; too few slides: " + els.length);
        return;
      }
      var opts2 = buildOptions($cont, $slides, els, opts, o);
      if (opts2 === false) {
        return;
      }
      var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);
      if (startTime) {
        startTime += (opts2.delay || 0);
        if (startTime < 10) {
          startTime = 10;
        }
        debug("first timeout: " + startTime);
        this.cycleTimeout = setTimeout(function () {
          go(els, opts2, 0, !opts.backwards);
        }, startTime);
      }
    });
  };

  function handleArguments(cont, options, arg2) {
    if (cont.cycleStop == undefined) {
      cont.cycleStop = 0;
    }
    if (options === undefined || options === null) {
      options = {};
    }
    if (options.constructor == String) {
      switch (options) {
        case"destroy":
        case"stop":
          var opts = $(cont).data("cycle.opts");
          if (!opts) {
            return false;
          }
          cont.cycleStop++;
          if (cont.cycleTimeout) {
            clearTimeout(cont.cycleTimeout);
          }
          cont.cycleTimeout = 0;
          $(cont).removeData("cycle.opts");
          if (options == "destroy") {
            destroy(opts);
          }
          return false;
        case"toggle":
          cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
          checkInstantResume(cont.cyclePause, arg2, cont);
          return false;
        case"pause":
          cont.cyclePause = 1;
          return false;
        case"resume":
          cont.cyclePause = 0;
          checkInstantResume(false, arg2, cont);
          return false;
        case"prev":
        case"next":
          var opts = $(cont).data("cycle.opts");
          if (!opts) {
            log('options not found, "prev/next" ignored');
            return false;
          }
          $.fn.cycle[options](opts);
          return false;
        default:
          options = {fx: options};
      }
      return options;
    } else {
      if (options.constructor == Number) {
        var num = options;
        options = $(cont).data("cycle.opts");
        if (!options) {
          log("options not found, can not advance slide");
          return false;
        }
        if (num < 0 || num >= options.elements.length) {
          log("invalid slide index: " + num);
          return false;
        }
        options.nextSlide = num;
        if (cont.cycleTimeout) {
          clearTimeout(cont.cycleTimeout);
          cont.cycleTimeout = 0;
        }
        if (typeof arg2 == "string") {
          options.oneTimeFx = arg2;
        }
        go(options.elements, options, 1, num >= options.currSlide);
        return false;
      }
    }
    return options;

    function checkInstantResume(isPaused, arg2, cont) {
      if (!isPaused && arg2 === true) {
        var options = $(cont).data("cycle.opts");
        if (!options) {
          log("options not found, can not resume");
          return false;
        }
        if (cont.cycleTimeout) {
          clearTimeout(cont.cycleTimeout);
          cont.cycleTimeout = 0;
        }
        go(options.elements, options, 1, !options.backwards);
      }
    }
  }

  function removeFilter(el, opts) {
    if (!$.support.opacity && opts.cleartype && el.style.filter) {
      try {
        el.style.removeAttribute("filter");
      } catch (smother) {
      }
    }
  }

  function destroy(opts) {
    if (opts.next) {
      $(opts.next).unbind(opts.prevNextEvent);
    }
    if (opts.prev) {
      $(opts.prev).unbind(opts.prevNextEvent);
    }
    if (opts.pager || opts.pagerAnchorBuilder) {
      $.each(opts.pagerAnchors || [], function () {
        this.unbind().remove();
      });
    }
    opts.pagerAnchors = null;
    if (opts.destroy) {
      opts.destroy(opts);
    }
  }

  function buildOptions($cont, $slides, els, options, o) {
    var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
    if (opts.autostop) {
      opts.countdown = opts.autostopCount || els.length;
    }
    var cont = $cont[0];
    $cont.data("cycle.opts", opts);
    opts.$cont = $cont;
    opts.stopCount = cont.cycleStop;
    opts.elements = els;
    opts.before = opts.before ? [opts.before] : [];
    opts.after = opts.after ? [opts.after] : [];
    if (!$.support.opacity && opts.cleartype) {
      opts.after.push(function () {
        removeFilter(this, opts);
      });
    }
    if (opts.continuous) {
      opts.after.push(function () {
        go(els, opts, 0, !opts.backwards);
      });
    }
    saveOriginalOpts(opts);
    if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg) {
      clearTypeFix($slides);
    }
    if ($cont.css("position") == "static") {
      $cont.css("position", "relative");
    }
    if (opts.width) {
      $cont.width(opts.width);
    }
    if (opts.height && opts.height != "auto") {
      $cont.height(opts.height);
    }
    if (opts.startingSlide) {
      opts.startingSlide = parseInt(opts.startingSlide);
    } else {
      if (opts.backwards) {
        opts.startingSlide = els.length - 1;
      }
    }
    if (opts.random) {
      opts.randomMap = [];
      for (var i = 0; i < els.length; i++) {
        opts.randomMap.push(i);
      }
      opts.randomMap.sort(function (a, b) {
        return Math.random() - 0.5;
      });
      opts.randomIndex = 1;
      opts.startingSlide = opts.randomMap[1];
    } else {
      if (opts.startingSlide >= els.length) {
        opts.startingSlide = 0;
      }
    }
    opts.currSlide = opts.startingSlide || 0;
    var first = opts.startingSlide;
    $slides.css({
      position: "absolute",
      top: 0,
      left: 0
    }).hide().each(function (i) {
      var z;
      if (opts.backwards) {
        z = first ? i <= first ? els.length + (i - first) : first - i : els.length - i;
      } else {
        z = first ? i >= first ? els.length - (i - first) : first - i : els.length - i;
      }
      $(this).css("z-index", z);
    });
    $(els[first]).css("opacity", 1).show();
    removeFilter(els[first], opts);
    if (opts.fit && opts.width) {
      $slides.width(opts.width);
    }
    if (opts.fit && opts.height && opts.height != "auto") {
      $slides.height(opts.height);
    }
    var reshape = opts.containerResize && !$cont.innerHeight();
    if (reshape) {
      var maxw = 0, maxh = 0;
      for (var j = 0; j < els.length; j++) {
        var $e = $(els[j]), e = $e[0], w = $e.outerWidth(),
          h = $e.outerHeight();
        if (!w) {
          w = e.offsetWidth || e.width || $e.attr("width");
        }
        if (!h) {
          h = e.offsetHeight || e.height || $e.attr("height");
        }
        maxw = w > maxw ? w : maxw;
        maxh = h > maxh ? h : maxh;
      }
      if (maxw > 0 && maxh > 0) {
        $cont.css({width: maxw + "px", height: maxh + "px"});
      }
    }
    if (opts.pause) {
      $cont.hover(function () {
        this.cyclePause++;
      }, function () {
        this.cyclePause--;
      });
    }
    if (supportMultiTransitions(opts) === false) {
      return false;
    }
    var requeue = false;
    options.requeueAttempts = options.requeueAttempts || 0;
    $slides.each(function () {
      var $el = $(this);
      this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr("height") || 0);
      this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr("width") || 0);
      if ($el.is("thumb")) {
        var loadingIE = ($.browser.msie && this.cycleW == 28 && this.cycleH == 30 && !this.complete);
        var loadingFF = ($.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete);
        var loadingOp = ($.browser.opera && ((this.cycleW == 42 && this.cycleH == 19) || (this.cycleW == 37 && this.cycleH == 17)) && !this.complete);
        var loadingOther = (this.cycleH == 0 && this.cycleW == 0 && !this.complete);
        if (loadingIE || loadingFF || loadingOp || loadingOther) {
          if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) {
            log(options.requeueAttempts, " - img slide not loaded, requeuing slideshow: ", this.src, this.cycleW, this.cycleH);
            setTimeout(function () {
              $(o.s, o.c).cycle(options);
            }, opts.requeueTimeout);
            requeue = true;
            return false;
          } else {
            log("could not determine size of image: " + this.src, this.cycleW, this.cycleH);
          }
        }
      }
      return true;
    });
    if (requeue) {
      return false;
    }
    opts.cssBefore = opts.cssBefore || {};
    opts.cssAfter = opts.cssAfter || {};
    opts.cssFirst = opts.cssFirst || {};
    opts.animIn = opts.animIn || {};
    opts.animOut = opts.animOut || {};
    $slides.not(":eq(" + first + ")").css(opts.cssBefore);
    $($slides[first]).css(opts.cssFirst);
    if (opts.timeout) {
      opts.timeout = parseInt(opts.timeout);
      if (opts.speed.constructor == String) {
        opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed);
      }
      if (!opts.sync) {
        opts.speed = opts.speed / 2;
      }
      var buffer = opts.fx == "none" ? 0 : opts.fx == "shuffle" ? 500 : 250;
      while ((opts.timeout - opts.speed) < buffer) {
        opts.timeout += opts.speed;
      }
    }
    if (opts.easing) {
      opts.easeIn = opts.easeOut = opts.easing;
    }
    if (!opts.speedIn) {
      opts.speedIn = opts.speed;
    }
    if (!opts.speedOut) {
      opts.speedOut = opts.speed;
    }
    opts.slideCount = els.length;
    opts.currSlide = opts.lastSlide = first;
    if (opts.random) {
      if (++opts.randomIndex == els.length) {
        opts.randomIndex = 0;
      }
      opts.nextSlide = opts.randomMap[opts.randomIndex];
    } else {
      if (opts.backwards) {
        opts.nextSlide = opts.startingSlide == 0 ? (els.length - 1) : opts.startingSlide - 1;
      } else {
        opts.nextSlide = opts.startingSlide >= (els.length - 1) ? 0 : opts.startingSlide + 1;
      }
    }
    if (!opts.multiFx) {
      var init = $.fn.cycle.transitions[opts.fx];
      if ($.isFunction(init)) {
        init($cont, $slides, opts);
      } else {
        if (opts.fx != "custom" && !opts.multiFx) {
          log("unknown transition: " + opts.fx, "; slideshow terminating");
          return false;
        }
      }
    }
    var e0 = $slides[first];
    if (opts.before.length) {
      opts.before[0].apply(e0, [e0, e0, opts, true]);
    }
    if (opts.after.length) {
      opts.after[0].apply(e0, [e0, e0, opts, true]);
    }
    if (opts.next) {
      $(opts.next).bind(opts.prevNextEvent, function () {
        return advance(opts, 1);
      });
    }
    if (opts.prev) {
      $(opts.prev).bind(opts.prevNextEvent, function () {
        return advance(opts, 0);
      });
    }
    if (opts.pager || opts.pagerAnchorBuilder) {
      buildPager(els, opts);
    }
    exposeAddSlide(opts, els);
    return opts;
  }

  function saveOriginalOpts(opts) {
    opts.original = {before: [], after: []};
    opts.original.cssBefore = $.extend({}, opts.cssBefore);
    opts.original.cssAfter = $.extend({}, opts.cssAfter);
    opts.original.animIn = $.extend({}, opts.animIn);
    opts.original.animOut = $.extend({}, opts.animOut);
    $.each(opts.before, function () {
      opts.original.before.push(this);
    });
    $.each(opts.after, function () {
      opts.original.after.push(this);
    });
  }

  function supportMultiTransitions(opts) {
    var i, tx, txs = $.fn.cycle.transitions;
    if (opts.fx.indexOf(",") > 0) {
      opts.multiFx = true;
      opts.fxs = opts.fx.replace(/\s*/g, "").split(",");
      for (i = 0; i < opts.fxs.length; i++) {
        var fx = opts.fxs[i];
        tx = txs[fx];
        if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
          log("discarding unknown transition: ", fx);
          opts.fxs.splice(i, 1);
          i--;
        }
      }
      if (!opts.fxs.length) {
        log("No valid transitions named; slideshow terminating.");
        return false;
      }
    } else {
      if (opts.fx == "all") {
        opts.multiFx = true;
        opts.fxs = [];
        for (p in txs) {
          tx = txs[p];
          if (txs.hasOwnProperty(p) && $.isFunction(tx)) {
            opts.fxs.push(p);
          }
        }
      }
    }
    if (opts.multiFx && opts.randomizeEffects) {
      var r1 = Math.floor(Math.random() * 20) + 30;
      for (i = 0; i < r1; i++) {
        var r2 = Math.floor(Math.random() * opts.fxs.length);
        opts.fxs.push(opts.fxs.splice(r2, 1)[0]);
      }
      debug("randomized fx sequence: ", opts.fxs);
    }
    return true;
  }

  function exposeAddSlide(opts, els) {
    opts.addSlide = function (newSlide, prepend) {
      var $s = $(newSlide), s = $s[0];
      if (!opts.autostopCount) {
        opts.countdown++;
      }
      els[prepend ? "unshift" : "push"](s);
      if (opts.els) {
        opts.els[prepend ? "unshift" : "push"](s);
      }
      opts.slideCount = els.length;
      $s.css("position", "absolute");
      $s[prepend ? "prependTo" : "appendTo"](opts.$cont);
      if (prepend) {
        opts.currSlide++;
        opts.nextSlide++;
      }
      if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg) {
        clearTypeFix($s);
      }
      if (opts.fit && opts.width) {
        $s.width(opts.width);
      }
      if (opts.fit && opts.height && opts.height != "auto") {
        $s.height(opts.height);
      }
      s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
      s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();
      $s.css(opts.cssBefore);
      if (opts.pager || opts.pagerAnchorBuilder) {
        $.fn.cycle.createPagerAnchor(els.length - 1, s, $(opts.pager), els, opts);
      }
      if ($.isFunction(opts.onAddSlide)) {
        opts.onAddSlide($s);
      } else {
        $s.hide();
      }
    };
  }

  $.fn.cycle.resetState = function (opts, fx) {
    fx = fx || opts.fx;
    opts.before = [];
    opts.after = [];
    opts.cssBefore = $.extend({}, opts.original.cssBefore);
    opts.cssAfter = $.extend({}, opts.original.cssAfter);
    opts.animIn = $.extend({}, opts.original.animIn);
    opts.animOut = $.extend({}, opts.original.animOut);
    opts.fxFn = null;
    $.each(opts.original.before, function () {
      opts.before.push(this);
    });
    $.each(opts.original.after, function () {
      opts.after.push(this);
    });
    var init = $.fn.cycle.transitions[fx];
    if ($.isFunction(init)) {
      init(opts.$cont, $(opts.elements), opts);
    }
  };

  function go(els, opts, manual, fwd) {
    if (manual && opts.busy && opts.manualTrump) {
      debug("manualTrump in go(), stopping active transition");
      $(els).stop(true, true);
      opts.busy = 0;
    }
    if (opts.busy) {
      debug("transition active, ignoring new tx request");
      return;
    }
    var p = opts.$cont[0], curr = els[opts.currSlide],
      next = els[opts.nextSlide];
    if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual) {
      return;
    }
    if (!manual && !p.cyclePause && !opts.bounce && ((opts.autostop && (--opts.countdown <= 0)) || (opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
      if (opts.end) {
        opts.end(opts);
      }
      return;
    }
    var changed = false;
    if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
      changed = true;
      var fx = opts.fx;
      curr.cycleH = curr.cycleH || $(curr).height();
      curr.cycleW = curr.cycleW || $(curr).width();
      next.cycleH = next.cycleH || $(next).height();
      next.cycleW = next.cycleW || $(next).width();
      if (opts.multiFx) {
        if (opts.lastFx == undefined || ++opts.lastFx >= opts.fxs.length) {
          opts.lastFx = 0;
        }
        fx = opts.fxs[opts.lastFx];
        opts.currFx = fx;
      }
      if (opts.oneTimeFx) {
        fx = opts.oneTimeFx;
        opts.oneTimeFx = null;
      }
      $.fn.cycle.resetState(opts, fx);
      if (opts.before.length) {
        $.each(opts.before, function (i, o) {
          if (p.cycleStop != opts.stopCount) {
            return;
          }
          o.apply(next, [curr, next, opts, fwd]);
        });
      }
      var after = function () {
        opts.busy = 0;
        $.each(opts.after, function (i, o) {
          if (p.cycleStop != opts.stopCount) {
            return;
          }
          o.apply(next, [curr, next, opts, fwd]);
        });
      };
      debug("tx firing(" + fx + "); currSlide: " + opts.currSlide + "; nextSlide: " + opts.nextSlide);
      opts.busy = 1;
      if (opts.fxFn) {
        opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
      } else {
        if ($.isFunction($.fn.cycle[opts.fx])) {
          $.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
        } else {
          $.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
        }
      }
    }
    if (changed || opts.nextSlide == opts.currSlide) {
      opts.lastSlide = opts.currSlide;
      if (opts.random) {
        opts.currSlide = opts.nextSlide;
        if (++opts.randomIndex == els.length) {
          opts.randomIndex = 0;
        }
        opts.nextSlide = opts.randomMap[opts.randomIndex];
        if (opts.nextSlide == opts.currSlide) {
          opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
        }
      } else {
        if (opts.backwards) {
          var roll = (opts.nextSlide - 1) < 0;
          if (roll && opts.bounce) {
            opts.backwards = !opts.backwards;
            opts.nextSlide = 1;
            opts.currSlide = 0;
          } else {
            opts.nextSlide = roll ? (els.length - 1) : opts.nextSlide - 1;
            opts.currSlide = roll ? 0 : opts.nextSlide + 1;
          }
        } else {
          var roll = (opts.nextSlide + 1) == els.length;
          if (roll && opts.bounce) {
            opts.backwards = !opts.backwards;
            opts.nextSlide = els.length - 2;
            opts.currSlide = els.length - 1;
          } else {
            opts.nextSlide = roll ? 0 : opts.nextSlide + 1;
            opts.currSlide = roll ? els.length - 1 : opts.nextSlide - 1;
          }
        }
      }
    }
    if (changed && opts.pager) {
      opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
    }
    var ms = 0;
    if (opts.timeout && !opts.continuous) {
      ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
    } else {
      if (opts.continuous && p.cyclePause) {
        ms = 10;
      }
    }
    if (ms > 0) {
      p.cycleTimeout = setTimeout(function () {
        go(els, opts, 0, !opts.backwards);
      }, ms);
    }
  }

  $.fn.cycle.updateActivePagerLink = function (pager, currSlide, clsName) {
    $(pager).each(function () {
      $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
    });
  };

  function getTimeout(curr, next, opts, fwd) {
    if (opts.timeoutFn) {
      var t = opts.timeoutFn.call(curr, curr, next, opts, fwd);
      while (opts.fx != "none" && (t - opts.speed) < 250) {
        t += opts.speed;
      }
      debug("calculated timeout: " + t + "; speed: " + opts.speed);
      if (t !== false) {
        return t;
      }
    }
    return opts.timeout;
  }

  $.fn.cycle.next = function (opts) {
    advance(opts, 1);
  };
  $.fn.cycle.prev = function (opts) {
    advance(opts, 0);
  };

  function advance(opts, moveForward) {
    var val = moveForward ? 1 : -1;
    var els = opts.elements;
    var p = opts.$cont[0], timeout = p.cycleTimeout;
    if (timeout) {
      clearTimeout(timeout);
      p.cycleTimeout = 0;
    }
    if (opts.random && val < 0) {
      opts.randomIndex--;
      if (--opts.randomIndex == -2) {
        opts.randomIndex = els.length - 2;
      } else {
        if (opts.randomIndex == -1) {
          opts.randomIndex = els.length - 1;
        }
      }
      opts.nextSlide = opts.randomMap[opts.randomIndex];
    } else {
      if (opts.random) {
        opts.nextSlide = opts.randomMap[opts.randomIndex];
      } else {
        opts.nextSlide = opts.currSlide + val;
        if (opts.nextSlide < 0) {
          if (opts.nowrap) {
            return false;
          }
          opts.nextSlide = els.length - 1;
        } else {
          if (opts.nextSlide >= els.length) {
            if (opts.nowrap) {
              return false;
            }
            opts.nextSlide = 0;
          }
        }
      }
    }
    var cb = opts.onPrevNextEvent || opts.prevNextClick;
    if ($.isFunction(cb)) {
      cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
    }
    go(els, opts, 1, moveForward);
    return false;
  }

  function buildPager(els, opts) {
    var $p = $(opts.pager);
    $.each(els, function (i, o) {
      $.fn.cycle.createPagerAnchor(i, o, $p, els, opts);
    });
    opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
  }

  $.fn.cycle.createPagerAnchor = function (i, el, $p, els, opts) {
    var a;
    if ($.isFunction(opts.pagerAnchorBuilder)) {
      a = opts.pagerAnchorBuilder(i, el);
      debug("pagerAnchorBuilder(" + i + ", el) returned: " + a);
    } else {
      a = '<a href="#">' + (i + 1) + "</a>";
    }
    if (!a) {
      return;
    }
    var $a = $(a);
    if ($a.parents("body").length === 0) {
      var arr = [];
      if ($p.length > 1) {
        $p.each(function () {
          var $clone = $a.clone(true);
          $(this).append($clone);
          arr.push($clone[0]);
        });
        $a = $(arr);
      } else {
        $a.appendTo($p);
      }
    }
    opts.pagerAnchors = opts.pagerAnchors || [];
    opts.pagerAnchors.push($a);
    $a.bind(opts.pagerEvent, function (e) {
      e.preventDefault();
      opts.nextSlide = i;
      var p = opts.$cont[0], timeout = p.cycleTimeout;
      if (timeout) {
        clearTimeout(timeout);
        p.cycleTimeout = 0;
      }
      var cb = opts.onPagerEvent || opts.pagerClick;
      if ($.isFunction(cb)) {
        cb(opts.nextSlide, els[opts.nextSlide]);
      }
      go(els, opts, 1, opts.currSlide < i);
    });
    if (!/^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble) {
      $a.bind("click.cycle", function () {
        return false;
      });
    }
    if (opts.pauseOnPagerHover) {
      $a.hover(function () {
        opts.$cont[0].cyclePause++;
      }, function () {
        opts.$cont[0].cyclePause--;
      });
    }
  };
  $.fn.cycle.hopsFromLast = function (opts, fwd) {
    var hops, l = opts.lastSlide, c = opts.currSlide;
    if (fwd) {
      hops = c > l ? c - l : opts.slideCount - l;
    } else {
      hops = c < l ? l - c : l + opts.slideCount - c;
    }
    return hops;
  };

  function clearTypeFix($slides) {
    debug("applying clearType background-color hack");

    function hex(s) {
      s = parseInt(s).toString(16);
      return s.length < 2 ? "0" + s : s;
    }

    function getBg(e) {
      for (; e && e.nodeName.toLowerCase() != "html"; e = e.parentNode) {
        var v = $.css(e, "background-color");
        if (v && v.indexOf("rgb") >= 0) {
          var rgb = v.match(/\d+/g);
          return "#" + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
        }
        if (v && v != "transparent") {
          return v;
        }
      }
      return "#ffffff";
    }

    $slides.each(function () {
      $(this).css("background-color", getBg(this));
    });
  }

  $.fn.cycle.commonReset = function (curr, next, opts, w, h, rev) {
    $(opts.elements).not(curr).hide();
    if (typeof opts.cssBefore.opacity == "undefined") {
      opts.cssBefore.opacity = 1;
    }
    opts.cssBefore.display = "block";
    if (opts.slideResize && w !== false && next.cycleW > 0) {
      opts.cssBefore.width = next.cycleW;
    }
    if (opts.slideResize && h !== false && next.cycleH > 0) {
      opts.cssBefore.height = next.cycleH;
    }
    opts.cssAfter = opts.cssAfter || {};
    opts.cssAfter.display = "none";
    $(curr).css("zIndex", opts.slideCount + (rev === true ? 1 : 0));
    $(next).css("zIndex", opts.slideCount + (rev === true ? 0 : 1));
  };
  $.fn.cycle.custom = function (curr, next, opts, cb, fwd, speedOverride) {
    var $l = $(curr), $n = $(next);
    var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn,
      easeOut = opts.easeOut;
    $n.css(opts.cssBefore);
    if (speedOverride) {
      if (typeof speedOverride == "number") {
        speedIn = speedOut = speedOverride;
      } else {
        speedIn = speedOut = 1;
      }
      easeIn = easeOut = null;
    }
    var fn = function () {
      $n.animate(opts.animIn, speedIn, easeIn, function () {
        cb();
      });
    };
    $l.animate(opts.animOut, speedOut, easeOut, function () {
      $l.css(opts.cssAfter);
      if (!opts.sync) {
        fn();
      }
    });
    if (opts.sync) {
      fn();
    }
  };
  $.fn.cycle.transitions = {
    fade: function ($cont, $slides, opts) {
      $slides.not(":eq(" + opts.currSlide + ")").css("opacity", 0);
      opts.before.push(function (curr, next, opts) {
        $.fn.cycle.commonReset(curr, next, opts);
        opts.cssBefore.opacity = 0;
      });
      opts.animIn = {opacity: 1};
      opts.animOut = {opacity: 0};
      opts.cssBefore = {top: 0, left: 0};
    }
  };
  $.fn.cycle.ver = function () {
    return ver;
  };
  $.fn.cycle.defaults = {
    activePagerClass: "activeSlide",
    after: null,
    allowPagerClickBubble: false,
    animIn: null,
    animOut: null,
    autostop: 0,
    autostopCount: 0,
    backwards: false,
    before: null,
    cleartype: !$.support.opacity,
    cleartypeNoBg: false,
    containerResize: 1,
    continuous: 0,
    cssAfter: null,
    cssBefore: null,
    delay: 0,
    easeIn: null,
    easeOut: null,
    easing: null,
    end: null,
    fastOnEvent: 0,
    fit: 0,
    fx: "fade",
    fxFn: null,
    height: "auto",
    manualTrump: true,
    next: null,
    nowrap: 0,
    onPagerEvent: null,
    onPrevNextEvent: null,
    pager: null,
    pagerAnchorBuilder: null,
    pagerEvent: "click.cycle",
    pause: 0,
    pauseOnPagerHover: 0,
    prev: null,
    prevNextEvent: "click.cycle",
    random: 0,
    randomizeEffects: 1,
    requeueOnImageNotLoaded: true,
    requeueTimeout: 250,
    rev: 0,
    shuffle: null,
    slideExpr: null,
    slideResize: 1,
    speed: 1000,
    speedIn: null,
    speedOut: null,
    startingSlide: 0,
    sync: 1,
    timeout: 4000,
    timeoutFn: null,
    updateActivePagerLink: null
  };
})(jQuery);
/*
 * jQuery Cycle Plugin Transition Definitions
 */
(function ($) {
  $.fn.cycle.transitions.none = function ($cont, $slides, opts) {
    opts.fxFn = function (curr, next, opts, after) {
      $(next).show();
      $(curr).hide();
      after();
    };
  };
  $.fn.cycle.transitions.fadeout = function ($cont, $slides, opts) {
    $slides.not(":eq(" + opts.currSlide + ")").css({
      display: "block",
      opacity: 1
    });
    opts.before.push(function (curr, next, opts, w, h, rev) {
      $(curr).css("zIndex", opts.slideCount + (!rev === true ? 1 : 0));
      $(next).css("zIndex", opts.slideCount + (!rev === true ? 0 : 1));
    });
    opts.animIn.opacity = 1;
    opts.animOut.opacity = 0;
    opts.cssBefore.opacity = 1;
    opts.cssBefore.display = "block";
    opts.cssAfter.zIndex = 0;
  };
  $.fn.cycle.transitions.scrollUp = function ($cont, $slides, opts) {
    $cont.css("overflow", "hidden");
    opts.before.push($.fn.cycle.commonReset);
    var h = $cont.height();
    opts.cssBefore.top = h;
    opts.cssBefore.left = 0;
    opts.cssFirst.top = 0;
    opts.animIn.top = 0;
    opts.animOut.top = -h;
  };
  $.fn.cycle.transitions.scrollDown = function ($cont, $slides, opts) {
    $cont.css("overflow", "hidden");
    opts.before.push($.fn.cycle.commonReset);
    var h = $cont.height();
    opts.cssFirst.top = 0;
    opts.cssBefore.top = -h;
    opts.cssBefore.left = 0;
    opts.animIn.top = 0;
    opts.animOut.top = h;
  };
  $.fn.cycle.transitions.scrollLeft = function ($cont, $slides, opts) {
    $cont.css("overflow", "hidden");
    opts.before.push($.fn.cycle.commonReset);
    var w = $cont.width();
    opts.cssFirst.left = 0;
    opts.cssBefore.left = w;
    opts.cssBefore.top = 0;
    opts.animIn.left = 0;
    opts.animOut.left = 0 - w;
  };
  $.fn.cycle.transitions.scrollRight = function ($cont, $slides, opts) {
    $cont.css("overflow", "hidden");
    opts.before.push($.fn.cycle.commonReset);
    var w = $cont.width();
    opts.cssFirst.left = 0;
    opts.cssBefore.left = -w;
    opts.cssBefore.top = 0;
    opts.animIn.left = 0;
    opts.animOut.left = w;
  };
  $.fn.cycle.transitions.scrollHorz = function ($cont, $slides, opts) {
    $cont.css("overflow", "hidden").width();
    opts.before.push(function (curr, next, opts, fwd) {
      if (opts.rev) {
        fwd = !fwd;
      }
      $.fn.cycle.commonReset(curr, next, opts);
      opts.cssBefore.left = fwd ? (next.cycleW - 1) : (1 - next.cycleW);
      opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
    });
    opts.cssFirst.left = 0;
    opts.cssBefore.top = 0;
    opts.animIn.left = 0;
    opts.animOut.top = 0;
  };
  $.fn.cycle.transitions.scrollVert = function ($cont, $slides, opts) {
    $cont.css("overflow", "hidden");
    opts.before.push(function (curr, next, opts, fwd) {
      if (opts.rev) {
        fwd = !fwd;
      }
      $.fn.cycle.commonReset(curr, next, opts);
      opts.cssBefore.top = fwd ? (1 - next.cycleH) : (next.cycleH - 1);
      opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
    });
    opts.cssFirst.top = 0;
    opts.cssBefore.left = 0;
    opts.animIn.top = 0;
    opts.animOut.left = 0;
  };
  $.fn.cycle.transitions.slideX = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $(opts.elements).not(curr).hide();
      $.fn.cycle.commonReset(curr, next, opts, false, true);
      opts.animIn.width = next.cycleW;
    });
    opts.cssBefore.left = 0;
    opts.cssBefore.top = 0;
    opts.cssBefore.width = 0;
    opts.animIn.width = "show";
    opts.animOut.width = 0;
  };
  $.fn.cycle.transitions.slideY = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $(opts.elements).not(curr).hide();
      $.fn.cycle.commonReset(curr, next, opts, true, false);
      opts.animIn.height = next.cycleH;
    });
    opts.cssBefore.left = 0;
    opts.cssBefore.top = 0;
    opts.cssBefore.height = 0;
    opts.animIn.height = "show";
    opts.animOut.height = 0;
  };
  $.fn.cycle.transitions.shuffle = function ($cont, $slides, opts) {
    var i, w = $cont.css("overflow", "visible").width();
    $slides.css({left: 0, top: 0});
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, true, true);
    });
    if (!opts.speedAdjusted) {
      opts.speed = opts.speed / 2;
      opts.speedAdjusted = true;
    }
    opts.random = 0;
    opts.shuffle = opts.shuffle || {left: -w, top: 15};
    opts.els = [];
    for (i = 0; i < $slides.length; i++) {
      opts.els.push($slides[i]);
    }
    for (i = 0; i < opts.currSlide; i++) {
      opts.els.push(opts.els.shift());
    }
    opts.fxFn = function (curr, next, opts, cb, fwd) {
      if (opts.rev) {
        fwd = !fwd;
      }
      var $el = fwd ? $(curr) : $(next);
      $(next).css(opts.cssBefore);
      var count = opts.slideCount;
      $el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function () {
        var hops = $.fn.cycle.hopsFromLast(opts, fwd);
        for (var k = 0; k < hops; k++) {
          fwd ? opts.els.push(opts.els.shift()) : opts.els.unshift(opts.els.pop());
        }
        if (fwd) {
          for (var i = 0, len = opts.els.length; i < len; i++) {
            $(opts.els[i]).css("z-index", len - i + count);
          }
        } else {
          var z = $(curr).css("z-index");
          $el.css("z-index", parseInt(z) + 1 + count);
        }
        $el.animate({
          left: 0,
          top: 0
        }, opts.speedOut, opts.easeOut, function () {
          $(fwd ? this : curr).hide();
          if (cb) {
            cb();
          }
        });
      });
    };
    $.extend(opts.cssBefore, {display: "block", opacity: 1, top: 0, left: 0});
  };
  $.fn.cycle.transitions.turnUp = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, false);
      opts.cssBefore.top = next.cycleH;
      opts.animIn.height = next.cycleH;
      opts.animOut.width = next.cycleW;
    });
    opts.cssFirst.top = 0;
    opts.cssBefore.left = 0;
    opts.cssBefore.height = 0;
    opts.animIn.top = 0;
    opts.animOut.height = 0;
  };
  $.fn.cycle.transitions.turnDown = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, false);
      opts.animIn.height = next.cycleH;
      opts.animOut.top = curr.cycleH;
    });
    opts.cssFirst.top = 0;
    opts.cssBefore.left = 0;
    opts.cssBefore.top = 0;
    opts.cssBefore.height = 0;
    opts.animOut.height = 0;
  };
  $.fn.cycle.transitions.turnLeft = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, true);
      opts.cssBefore.left = next.cycleW;
      opts.animIn.width = next.cycleW;
    });
    opts.cssBefore.top = 0;
    opts.cssBefore.width = 0;
    opts.animIn.left = 0;
    opts.animOut.width = 0;
  };
  $.fn.cycle.transitions.turnRight = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, true);
      opts.animIn.width = next.cycleW;
      opts.animOut.left = curr.cycleW;
    });
    $.extend(opts.cssBefore, {top: 0, left: 0, width: 0});
    opts.animIn.left = 0;
    opts.animOut.width = 0;
  };
  $.fn.cycle.transitions.zoom = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, false, true);
      opts.cssBefore.top = next.cycleH / 2;
      opts.cssBefore.left = next.cycleW / 2;
      $.extend(opts.animIn, {
        top: 0,
        left: 0,
        width: next.cycleW,
        height: next.cycleH
      });
      $.extend(opts.animOut, {
        width: 0,
        height: 0,
        top: curr.cycleH / 2,
        left: curr.cycleW / 2
      });
    });
    opts.cssFirst.top = 0;
    opts.cssFirst.left = 0;
    opts.cssBefore.width = 0;
    opts.cssBefore.height = 0;
  };
  $.fn.cycle.transitions.fadeZoom = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, false);
      opts.cssBefore.left = next.cycleW / 2;
      opts.cssBefore.top = next.cycleH / 2;
      $.extend(opts.animIn, {
        top: 0,
        left: 0,
        width: next.cycleW,
        height: next.cycleH
      });
    });
    opts.cssBefore.width = 0;
    opts.cssBefore.height = 0;
    opts.animOut.opacity = 0;
  };
  $.fn.cycle.transitions.blindX = function ($cont, $slides, opts) {
    var w = $cont.css("overflow", "hidden").width();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts);
      opts.animIn.width = next.cycleW;
      opts.animOut.left = curr.cycleW;
    });
    opts.cssBefore.left = w;
    opts.cssBefore.top = 0;
    opts.animIn.left = 0;
    opts.animOut.left = w;
  };
  $.fn.cycle.transitions.blindY = function ($cont, $slides, opts) {
    var h = $cont.css("overflow", "hidden").height();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts);
      opts.animIn.height = next.cycleH;
      opts.animOut.top = curr.cycleH;
    });
    opts.cssBefore.top = h;
    opts.cssBefore.left = 0;
    opts.animIn.top = 0;
    opts.animOut.top = h;
  };
  $.fn.cycle.transitions.blindZ = function ($cont, $slides, opts) {
    var h = $cont.css("overflow", "hidden").height();
    var w = $cont.width();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts);
      opts.animIn.height = next.cycleH;
      opts.animOut.top = curr.cycleH;
    });
    opts.cssBefore.top = h;
    opts.cssBefore.left = w;
    opts.animIn.top = 0;
    opts.animIn.left = 0;
    opts.animOut.top = h;
    opts.animOut.left = w;
  };
  $.fn.cycle.transitions.growX = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, true);
      opts.cssBefore.left = this.cycleW / 2;
      opts.animIn.left = 0;
      opts.animIn.width = this.cycleW;
      opts.animOut.left = 0;
    });
    opts.cssBefore.top = 0;
    opts.cssBefore.width = 0;
  };
  $.fn.cycle.transitions.growY = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, false);
      opts.cssBefore.top = this.cycleH / 2;
      opts.animIn.top = 0;
      opts.animIn.height = this.cycleH;
      opts.animOut.top = 0;
    });
    opts.cssBefore.height = 0;
    opts.cssBefore.left = 0;
  };
  $.fn.cycle.transitions.curtainX = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, false, true, true);
      opts.cssBefore.left = next.cycleW / 2;
      opts.animIn.left = 0;
      opts.animIn.width = this.cycleW;
      opts.animOut.left = curr.cycleW / 2;
      opts.animOut.width = 0;
    });
    opts.cssBefore.top = 0;
    opts.cssBefore.width = 0;
  };
  $.fn.cycle.transitions.curtainY = function ($cont, $slides, opts) {
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, false, true);
      opts.cssBefore.top = next.cycleH / 2;
      opts.animIn.top = 0;
      opts.animIn.height = next.cycleH;
      opts.animOut.top = curr.cycleH / 2;
      opts.animOut.height = 0;
    });
    opts.cssBefore.height = 0;
    opts.cssBefore.left = 0;
  };
  $.fn.cycle.transitions.cover = function ($cont, $slides, opts) {
    var d = opts.direction || "left";
    var w = $cont.css("overflow", "hidden").width();
    var h = $cont.height();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts);
      if (d == "right") {
        opts.cssBefore.left = -w;
      } else {
        if (d == "up") {
          opts.cssBefore.top = h;
        } else {
          if (d == "down") {
            opts.cssBefore.top = -h;
          } else {
            opts.cssBefore.left = w;
          }
        }
      }
    });
    opts.animIn.left = 0;
    opts.animIn.top = 0;
    opts.cssBefore.top = 0;
    opts.cssBefore.left = 0;
  };
  $.fn.cycle.transitions.uncover = function ($cont, $slides, opts) {
    var d = opts.direction || "left";
    var w = $cont.css("overflow", "hidden").width();
    var h = $cont.height();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, true, true);
      if (d == "right") {
        opts.animOut.left = w;
      } else {
        if (d == "up") {
          opts.animOut.top = -h;
        } else {
          if (d == "down") {
            opts.animOut.top = h;
          } else {
            opts.animOut.left = -w;
          }
        }
      }
    });
    opts.animIn.left = 0;
    opts.animIn.top = 0;
    opts.cssBefore.top = 0;
    opts.cssBefore.left = 0;
  };
  $.fn.cycle.transitions.toss = function ($cont, $slides, opts) {
    var w = $cont.css("overflow", "visible").width();
    var h = $cont.height();
    opts.before.push(function (curr, next, opts) {
      $.fn.cycle.commonReset(curr, next, opts, true, true, true);
      if (!opts.animOut.left && !opts.animOut.top) {
        $.extend(opts.animOut, {left: w * 2, top: -h / 2, opacity: 0});
      } else {
        opts.animOut.opacity = 0;
      }
    });
    opts.cssBefore.left = 0;
    opts.cssBefore.top = 0;
    opts.animIn.left = 0;
  };
  $.fn.cycle.transitions.wipe = function ($cont, $slides, opts) {
    var w = $cont.css("overflow", "hidden").width();
    var h = $cont.height();
    opts.cssBefore = opts.cssBefore || {};
    var clip;
    if (opts.clip) {
      if (/l2r/.test(opts.clip)) {
        clip = "rect(0px 0px " + h + "px 0px)";
      } else {
        if (/r2l/.test(opts.clip)) {
          clip = "rect(0px " + w + "px " + h + "px " + w + "px)";
        } else {
          if (/t2b/.test(opts.clip)) {
            clip = "rect(0px " + w + "px 0px 0px)";
          } else {
            if (/b2t/.test(opts.clip)) {
              clip = "rect(" + h + "px " + w + "px " + h + "px 0px)";
            } else {
              if (/zoom/.test(opts.clip)) {
                var top = parseInt(h / 2);
                var left = parseInt(w / 2);
                clip = "rect(" + top + "px " + left + "px " + top + "px " + left + "px)";
              }
            }
          }
        }
      }
    }
    opts.cssBefore.clip = opts.cssBefore.clip || clip || "rect(0px 0px 0px 0px)";
    var d = opts.cssBefore.clip.match(/(\d+)/g);
    var t = parseInt(d[0]), r = parseInt(d[1]), b = parseInt(d[2]),
      l = parseInt(d[3]);
    opts.before.push(function (curr, next, opts) {
      if (curr == next) {
        return;
      }
      var $curr = $(curr), $next = $(next);
      $.fn.cycle.commonReset(curr, next, opts, true, true, false);
      opts.cssAfter.display = "block";
      var step = 1, count = parseInt((opts.speedIn / 13)) - 1;
      (function f() {
        var tt = t ? t - parseInt(step * (t / count)) : 0;
        var ll = l ? l - parseInt(step * (l / count)) : 0;
        var bb = b < h ? b + parseInt(step * ((h - b) / count || 1)) : h;
        var rr = r < w ? r + parseInt(step * ((w - r) / count || 1)) : w;
        $next.css({clip: "rect(" + tt + "px " + rr + "px " + bb + "px " + ll + "px)"});
        (step++ <= count) ? setTimeout(f, 13) : $curr.css("display", "none");
      })();
    });
    $.extend(opts.cssBefore, {display: "block", opacity: 1, top: 0, left: 0});
    opts.animIn = {left: 0};
    opts.animOut = {left: 0};
  };
})(jQuery);
