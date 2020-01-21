/*
@Author: ThemeMascot
@URL: http://ThemeMascot.com

Necessary jQuery Collection
*/

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
 *  jquery.easing.1.3.js for piechart smoothness and other
 * -----------------------------------------------
*/
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
*/
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
  def: "easeOutQuad", swing: function (n, e, t, u, a) {
    return jQuery.easing[jQuery.easing.def](n, e, t, u, a)
  }, easeInQuad: function (n, e, t, u, a) {
    return u * (e /= a) * e + t
  }, easeOutQuad: function (n, e, t, u, a) {
    return -u * (e /= a) * (e - 2) + t
  }, easeInOutQuad: function (n, e, t, u, a) {
    return (e /= a / 2) < 1 ? u / 2 * e * e + t : -u / 2 * (--e * (e - 2) - 1) + t
  }, easeInCubic: function (n, e, t, u, a) {
    return u * (e /= a) * e * e + t
  }, easeOutCubic: function (n, e, t, u, a) {
    return u * ((e = e / a - 1) * e * e + 1) + t
  }, easeInOutCubic: function (n, e, t, u, a) {
    return (e /= a / 2) < 1 ? u / 2 * e * e * e + t : u / 2 * ((e -= 2) * e * e + 2) + t
  }, easeInQuart: function (n, e, t, u, a) {
    return u * (e /= a) * e * e * e + t
  }, easeOutQuart: function (n, e, t, u, a) {
    return -u * ((e = e / a - 1) * e * e * e - 1) + t
  }, easeInOutQuart: function (n, e, t, u, a) {
    return (e /= a / 2) < 1 ? u / 2 * e * e * e * e + t : -u / 2 * ((e -= 2) * e * e * e - 2) + t
  }, easeInQuint: function (n, e, t, u, a) {
    return u * (e /= a) * e * e * e * e + t
  }, easeOutQuint: function (n, e, t, u, a) {
    return u * ((e = e / a - 1) * e * e * e * e + 1) + t
  }, easeInOutQuint: function (n, e, t, u, a) {
    return (e /= a / 2) < 1 ? u / 2 * e * e * e * e * e + t : u / 2 * ((e -= 2) * e * e * e * e + 2) + t
  }, easeInSine: function (n, e, t, u, a) {
    return -u * Math.cos(e / a * (Math.PI / 2)) + u + t
  }, easeOutSine: function (n, e, t, u, a) {
    return u * Math.sin(e / a * (Math.PI / 2)) + t
  }, easeInOutSine: function (n, e, t, u, a) {
    return -u / 2 * (Math.cos(Math.PI * e / a) - 1) + t
  }, easeInExpo: function (n, e, t, u, a) {
    return 0 == e ? t : u * Math.pow(2, 10 * (e / a - 1)) + t
  }, easeOutExpo: function (n, e, t, u, a) {
    return e == a ? t + u : u * (-Math.pow(2, -10 * e / a) + 1) + t
  }, easeInOutExpo: function (n, e, t, u, a) {
    return 0 == e ? t : e == a ? t + u : (e /= a / 2) < 1 ? u / 2 * Math.pow(2, 10 * (e - 1)) + t : u / 2 * (-Math.pow(2, -10 * --e) + 2) + t
  }, easeInCirc: function (n, e, t, u, a) {
    return -u * (Math.sqrt(1 - (e /= a) * e) - 1) + t
  }, easeOutCirc: function (n, e, t, u, a) {
    return u * Math.sqrt(1 - (e = e / a - 1) * e) + t
  }, easeInOutCirc: function (n, e, t, u, a) {
    return (e /= a / 2) < 1 ? -u / 2 * (Math.sqrt(1 - e * e) - 1) + t : u / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
  }, easeInElastic: function (n, e, t, u, a) {
    var r = 1.70158, i = 0, s = u;
    if (0 == e) return t;
    if (1 == (e /= a)) return t + u;
    if (i || (i = .3 * a), s < Math.abs(u)) {
      s = u;
      var r = i / 4
    } else var r = i / (2 * Math.PI) * Math.asin(u / s);
    return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i)) + t
  }, easeOutElastic: function (n, e, t, u, a) {
    var r = 1.70158, i = 0, s = u;
    if (0 == e) return t;
    if (1 == (e /= a)) return t + u;
    if (i || (i = .3 * a), s < Math.abs(u)) {
      s = u;
      var r = i / 4
    } else var r = i / (2 * Math.PI) * Math.asin(u / s);
    return s * Math.pow(2, -10 * e) * Math.sin(2 * (e * a - r) * Math.PI / i) + u + t
  }, easeInOutElastic: function (n, e, t, u, a) {
    var r = 1.70158, i = 0, s = u;
    if (0 == e) return t;
    if (2 == (e /= a / 2)) return t + u;
    if (i || (i = .3 * a * 1.5), s < Math.abs(u)) {
      s = u;
      var r = i / 4
    } else var r = i / (2 * Math.PI) * Math.asin(u / s);
    return 1 > e ? -.5 * s * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * a - r) * Math.PI / i) * .5 + u + t
  }, easeInBack: function (n, e, t, u, a, r) {
    return void 0 == r && (r = 1.70158), u * (e /= a) * e * ((r + 1) * e - r) + t
  }, easeOutBack: function (n, e, t, u, a, r) {
    return void 0 == r && (r = 1.70158), u * ((e = e / a - 1) * e * ((r + 1) * e + r) + 1) + t
  }, easeInOutBack: function (n, e, t, u, a, r) {
    return void 0 == r && (r = 1.70158), (e /= a / 2) < 1 ? u / 2 * e * e * (((r *= 1.525) + 1) * e - r) + t : u / 2 * ((e -= 2) * e * (((r *= 1.525) + 1) * e + r) + 2) + t
  }, easeInBounce: function (n, e, t, u, a) {
    return u - jQuery.easing.easeOutBounce(n, a - e, 0, u, a) + t
  }, easeOutBounce: function (n, e, t, u, a) {
    return (e /= a) < 1 / 2.75 ? 7.5625 * u * e * e + t : 2 / 2.75 > e ? u * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? u * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : u * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
  }, easeInOutBounce: function (n, e, t, u, a) {
    return a / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, u, a) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - a, 0, u, a) + .5 * u + t
  }
});

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
 *  jquery.localScroll
 * -----------------------------------------------
*/
/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.0
 */
;(function (a) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], a)
  } else {
    a(jQuery)
  }
}(function ($) {
  var g = location.href.replace(/#.*/, '');
  var h = $.localScroll = function (a) {
    $('body').localScroll(a)
  };
  h.defaults = {
    duration: 1000,
    axis: 'y',
    event: 'click',
    stop: true,
    target: window
  };
  $.fn.localScroll = function (a) {
    a = $.extend({}, h.defaults, a);
    if (a.hash && location.hash) {
      if (a.target) window.scrollTo(0, 0);
      scroll(0, location, a)
    }
    return a.lazy ? this.on(a.event, 'a,area', function (e) {
      if (filter.call(this)) {
        scroll(e, this, a)
      }
    }) : this.find('a,area').filter(filter).bind(a.event, function (e) {
      scroll(e, this, a)
    }).end().end();

    function filter() {
      return !!this.href && !!this.hash && this.href.replace(this.hash, '') === g && (!a.filter || $(this).is(a.filter))
    }
  };
  h.hash = function () {
  };

  function scroll(e, a, b) {
    var c = a.hash.slice(1),
      elem = document.getElementById(c) || document.getElementsByName(c)[0];
    if (!elem) return;
    if (e) e.preventDefault();
    var d = $(b.target);
    if (b.lock && d.is(':animated') || b.onBefore && b.onBefore(e, elem, d) === false) return;
    if (b.stop) {
      d.stop(true)
    }
    if (b.hash) {
      var f = elem.id === c ? 'id' : 'name', $a = $('<a> </a>').attr(f, c).css({
        position: 'absolute',
        top: $(window).scrollTop(),
        left: $(window).scrollLeft()
      });
      elem[f] = '';
      $('body').prepend($a);
      location.hash = a.hash;
      $a.remove();
      elem[f] = c
    }
    d.scrollTo(elem, b).trigger('notify.serialScroll', [elem])
  }

  return h
}));


/*
 *  SmoothScroll for websites
 * -----------------------------------------------
*/
// SmoothScroll for websites v1.4.0 (Balazs Galambosi)
// http://www.smoothscroll.net/
!function () {
  function e() {
    z.keyboardSupport && m("keydown", a)
  }

  function t() {
    if (!A && document.body) {
      A = !0;
      var t = document.body, o = document.documentElement,
        n = window.innerHeight, r = t.scrollHeight;
      if (B = document.compatMode.indexOf("CSS") >= 0 ? o : t, D = t, e(), top != self) X = !0; else if (r > n && (t.offsetHeight <= n || o.offsetHeight <= n)) {
        var a = document.createElement("div");
        a.style.cssText = "position:absolute; z-index:-10000; top:0; left:0; right:0; height:" + B.scrollHeight + "px", document.body.appendChild(a);
        var i;
        T = function () {
          i || (i = setTimeout(function () {
            L || (a.style.height = "0", a.style.height = B.scrollHeight + "px", i = null)
          }, 500))
        }, setTimeout(T, 10), m("resize", T);
        var l = {attributes: !0, childList: !0, characterData: !1};
        if (M = new V(T), M.observe(t, l), B.offsetHeight <= n) {
          var c = document.createElement("div");
          c.style.clear = "both", t.appendChild(c)
        }
      }
      z.fixedBackground || L || (t.style.backgroundAttachment = "scroll", o.style.backgroundAttachment = "scroll")
    }
  }

  function o() {
    M && M.disconnect(), h(I, r), h("mousedown", i), h("keydown", a), h("resize", T), h("load", t)
  }

  function n(e, t, o) {
    if (p(t, o), 1 != z.accelerationMax) {
      var n = Date.now(), r = n - R;
      if (r < z.accelerationDelta) {
        var a = (1 + 50 / r) / 2;
        a > 1 && (a = Math.min(a, z.accelerationMax), t *= a, o *= a)
      }
      R = Date.now()
    }
    if (q.push({
      x: t,
      y: o,
      lastX: 0 > t ? .99 : -.99,
      lastY: 0 > o ? .99 : -.99,
      start: Date.now()
    }), !P) {
      var i = e === document.body, l = function (n) {
        for (var r = Date.now(), a = 0, c = 0, u = 0; u < q.length; u++) {
          var d = q[u], s = r - d.start, f = s >= z.animationTime,
            m = f ? 1 : s / z.animationTime;
          z.pulseAlgorithm && (m = x(m));
          var h = d.x * m - d.lastX >> 0, w = d.y * m - d.lastY >> 0;
          a += h, c += w, d.lastX += h, d.lastY += w, f && (q.splice(u, 1), u--)
        }
        i ? window.scrollBy(a, c) : (a && (e.scrollLeft += a), c && (e.scrollTop += c)), t || o || (q = []), q.length ? _(l, e, 1e3 / z.frameRate + 1) : P = !1
      };
      _(l, e, 0), P = !0
    }
  }

  function r(e) {
    A || t();
    var o = e.target, r = u(o);
    if (!r || e.defaultPrevented || e.ctrlKey) return !0;
    if (w(D, "embed") || w(o, "embed") && /\.pdf/i.test(o.src) || w(D, "object")) return !0;
    var a = -e.wheelDeltaX || e.deltaX || 0,
      i = -e.wheelDeltaY || e.deltaY || 0;
    return K && (e.wheelDeltaX && b(e.wheelDeltaX, 120) && (a = -120 * (e.wheelDeltaX / Math.abs(e.wheelDeltaX))), e.wheelDeltaY && b(e.wheelDeltaY, 120) && (i = -120 * (e.wheelDeltaY / Math.abs(e.wheelDeltaY)))), a || i || (i = -e.wheelDelta || 0), 1 === e.deltaMode && (a *= 40, i *= 40), !z.touchpadSupport && v(i) ? !0 : (Math.abs(a) > 1.2 && (a *= z.stepSize / 120), Math.abs(i) > 1.2 && (i *= z.stepSize / 120), n(r, a, i), e.preventDefault(), void l())
  }

  function a(e) {
    var t = e.target,
      o = e.ctrlKey || e.altKey || e.metaKey || e.shiftKey && e.keyCode !== N.spacebar;
    document.contains(D) || (D = document.activeElement);
    var r = /^(textarea|select|embed|object)$/i,
      a = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if (r.test(t.nodeName) || w(t, "input") && !a.test(t.type) || w(D, "video") || y(e) || t.isContentEditable || e.defaultPrevented || o) return !0;
    if ((w(t, "button") || w(t, "input") && a.test(t.type)) && e.keyCode === N.spacebar) return !0;
    var i, c = 0, d = 0, s = u(D), f = s.clientHeight;
    switch (s == document.body && (f = window.innerHeight), e.keyCode) {
      case N.up:
        d = -z.arrowScroll;
        break;
      case N.down:
        d = z.arrowScroll;
        break;
      case N.spacebar:
        i = e.shiftKey ? 1 : -1, d = -i * f * .9;
        break;
      case N.pageup:
        d = .9 * -f;
        break;
      case N.pagedown:
        d = .9 * f;
        break;
      case N.home:
        d = -s.scrollTop;
        break;
      case N.end:
        var m = s.scrollHeight - s.scrollTop - f;
        d = m > 0 ? m + 10 : 0;
        break;
      case N.left:
        c = -z.arrowScroll;
        break;
      case N.right:
        c = z.arrowScroll;
        break;
      default:
        return !0
    }
    n(s, c, d), e.preventDefault(), l()
  }

  function i(e) {
    D = e.target
  }

  function l() {
    clearTimeout(E), E = setInterval(function () {
      F = {}
    }, 1e3)
  }

  function c(e, t) {
    for (var o = e.length; o--;) F[j(e[o])] = t;
    return t
  }

  function u(e) {
    var t = [], o = document.body, n = B.scrollHeight;
    do {
      var r = F[j(e)];
      if (r) return c(t, r);
      if (t.push(e), n === e.scrollHeight) {
        var a = s(B) && s(o), i = a || f(B);
        if (X && d(B) || !X && i) return c(t, $())
      } else if (d(e) && f(e)) return c(t, e)
    } while (e = e.parentElement)
  }

  function d(e) {
    return e.clientHeight + 10 < e.scrollHeight
  }

  function s(e) {
    var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
    return "hidden" !== t
  }

  function f(e) {
    var t = getComputedStyle(e, "").getPropertyValue("overflow-y");
    return "scroll" === t || "auto" === t
  }

  function m(e, t) {
    window.addEventListener(e, t, !1)
  }

  function h(e, t) {
    window.removeEventListener(e, t, !1)
  }

  function w(e, t) {
    return (e.nodeName || "").toLowerCase() === t.toLowerCase()
  }

  function p(e, t) {
    e = e > 0 ? 1 : -1, t = t > 0 ? 1 : -1, (Y.x !== e || Y.y !== t) && (Y.x = e, Y.y = t, q = [], R = 0)
  }

  function v(e) {
    return e ? (O.length || (O = [e, e, e]), e = Math.abs(e), O.push(e), O.shift(), clearTimeout(H), H = setTimeout(function () {
      window.localStorage && (localStorage.SS_deltaBuffer = O.join(","))
    }, 1e3), !g(120) && !g(100)) : void 0
  }

  function b(e, t) {
    return Math.floor(e / t) == e / t
  }

  function g(e) {
    return b(O[0], e) && b(O[1], e) && b(O[2], e)
  }

  function y(e) {
    var t = e.target, o = !1;
    if (-1 != document.URL.indexOf("www.youtube.com/watch")) do if (o = t.classList && t.classList.contains("html5-video-controls")) break; while (t = t.parentNode);
    return o
  }

  function S(e) {
    var t, o, n;
    return e *= z.pulseScale, 1 > e ? t = e - (1 - Math.exp(-e)) : (o = Math.exp(-1), e -= 1, n = 1 - Math.exp(-e), t = o + n * (1 - o)), t * z.pulseNormalize
  }

  function x(e) {
    return e >= 1 ? 1 : 0 >= e ? 0 : (1 == z.pulseNormalize && (z.pulseNormalize /= S(1)), S(e))
  }

  function k(e) {
    for (var t in e) C.hasOwnProperty(t) && (z[t] = e[t])
  }

  var D, M, T, E, H, C = {
      frameRate: 150,
      animationTime: 400,
      stepSize: 100,
      pulseAlgorithm: !0,
      pulseScale: 4,
      pulseNormalize: 1,
      accelerationDelta: 50,
      accelerationMax: 3,
      keyboardSupport: !0,
      arrowScroll: 50,
      touchpadSupport: !1,
      fixedBackground: !0,
      excluded: ""
    }, z = C, L = !1, X = !1, Y = {x: 0, y: 0}, A = !1,
    B = document.documentElement, O = [], K = /^Mac/.test(navigator.platform),
    N = {
      left: 37,
      up: 38,
      right: 39,
      down: 40,
      spacebar: 32,
      pageup: 33,
      pagedown: 34,
      end: 35,
      home: 36
    }, q = [], P = !1, R = Date.now(), j = function () {
      var e = 0;
      return function (t) {
        return t.uniqueID || (t.uniqueID = e++)
      }
    }(), F = {};
  window.localStorage && localStorage.SS_deltaBuffer && (O = localStorage.SS_deltaBuffer.split(","));
  var I, _ = function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e, t, o) {
        window.setTimeout(e, o || 1e3 / 60)
      }
    }(),
    V = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
    $ = function () {
      var e;
      return function () {
        if (!e) {
          var t = document.createElement("div");
          t.style.cssText = "height:10000px;width:1px;", document.body.appendChild(t);
          var o = document.body.scrollTop;
          document.documentElement.scrollTop;
          window.scrollBy(0, 3), e = document.body.scrollTop != o ? document.body : document.documentElement, window.scrollBy(0, -3), document.body.removeChild(t)
        }
        return e
      }
    }(), U = window.navigator.userAgent, W = /Edge/.test(U),
    G = /chrome/i.test(U) && !W, J = /safari/i.test(U) && !W,
    Q = /mobile/i.test(U), Z = (G || J) && !Q;
  "onwheel" in document.createElement("div") ? I = "wheel" : "onmousewheel" in document.createElement("div") && (I = "mousewheel"), I && Z && (m(I, r), m("mousedown", i), m("load", t)), k.destroy = o, window.SmoothScrollOptions && k(window.SmoothScrollOptions), "function" == typeof define && define.amd ? define(function () {
    return k
  }) : "object" == typeof exports ? module.exports = k : window.SmoothScroll = k
}();


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
 *  modernizr
 * -----------------------------------------------
*/
window.Modernizr = function (e, t, n) {
  function r(e) {
    b.cssText = e
  }

  function o(e, t) {
    return r(S.join(e + ";") + (t || ""))
  }

  function a(e, t) {
    return typeof e === t
  }

  function i(e, t) {
    return !!~("" + e).indexOf(t)
  }

  function c(e, t) {
    for (var r in e) {
      var o = e[r];
      if (!i(o, "-") && b[o] !== n) return "pfx" == t ? o : !0
    }
    return !1
  }

  function s(e, t, r) {
    for (var o in e) {
      var i = t[e[o]];
      if (i !== n) return r === !1 ? e[o] : a(i, "function") ? i.bind(r || t) : i
    }
    return !1
  }

  function u(e, t, n) {
    var r = e.charAt(0).toUpperCase() + e.slice(1),
      o = (e + " " + k.join(r + " ") + r).split(" ");
    return a(t, "string") || a(t, "undefined") ? c(o, t) : (o = (e + " " + T.join(r + " ") + r).split(" "), s(o, t, n))
  }

  function l() {
    p.input = function (n) {
      for (var r = 0, o = n.length; o > r; r++) j[n[r]] = !!(n[r] in E);
      return j.list && (j.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), j
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), p.inputtypes = function (e) {
      for (var r, o, a, i = 0, c = e.length; c > i; i++) E.setAttribute("type", o = e[i]), r = "text" !== E.type, r && (E.value = x, E.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(o) && E.style.WebkitAppearance !== n ? (g.appendChild(E), a = t.defaultView, r = a.getComputedStyle && "textfield" !== a.getComputedStyle(E, null).WebkitAppearance && 0 !== E.offsetHeight, g.removeChild(E)) : /^(search|tel)$/.test(o) || (r = /^(url|email)$/.test(o) ? E.checkValidity && E.checkValidity() === !1 : E.value != x)), P[e[i]] = !!r;
      return P
    }("search tel url email datetime date month week time datetime-local number range color".split(" "))
  }

  var d, f, m = "2.7.1", p = {}, h = !0, g = t.documentElement, v = "modernizr",
    y = t.createElement(v), b = y.style, E = t.createElement("input"), x = ":)",
    w = {}.toString, S = " -webkit- -moz- -o- -ms- ".split(" "),
    C = "Webkit Moz O ms", k = C.split(" "), T = C.toLowerCase().split(" "),
    N = {svg: "http://www.w3.org/2000/svg"}, M = {}, P = {}, j = {}, $ = [],
    D = $.slice, F = function (e, n, r, o) {
      var a, i, c, s, u = t.createElement("div"), l = t.body,
        d = l || t.createElement("body");
      if (parseInt(r, 10)) for (; r--;) c = t.createElement("div"), c.id = o ? o[r] : v + (r + 1), u.appendChild(c);
      return a = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), u.id = v, (l ? u : d).innerHTML += a, d.appendChild(u), l || (d.style.background = "", d.style.overflow = "hidden", s = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)), i = n(u, e), l ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), g.style.overflow = s), !!i
    }, z = function (t) {
      var n = e.matchMedia || e.msMatchMedia;
      if (n) return n(t).matches;
      var r;
      return F("@media " + t + " { #" + v + " { position: absolute; } }", function (t) {
        r = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
      }), r
    }, A = function () {
      function e(e, o) {
        o = o || t.createElement(r[e] || "div"), e = "on" + e;
        var i = e in o;
        return i || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(e, ""), i = a(o[e], "function"), a(o[e], "undefined") || (o[e] = n), o.removeAttribute(e))), o = null, i
      }

      var r = {
        select: "input",
        change: "input",
        submit: "form",
        reset: "form",
        error: "img",
        load: "img",
        abort: "img"
      };
      return e
    }(), L = {}.hasOwnProperty;
  f = a(L, "undefined") || a(L.call, "undefined") ? function (e, t) {
    return t in e && a(e.constructor.prototype[t], "undefined")
  } : function (e, t) {
    return L.call(e, t)
  }, Function.prototype.bind || (Function.prototype.bind = function (e) {
    var t = this;
    if ("function" != typeof t) throw new TypeError;
    var n = D.call(arguments, 1), r = function () {
      if (this instanceof r) {
        var o = function () {
        };
        o.prototype = t.prototype;
        var a = new o, i = t.apply(a, n.concat(D.call(arguments)));
        return Object(i) === i ? i : a
      }
      return t.apply(e, n.concat(D.call(arguments)))
    };
    return r
  }), M.flexbox = function () {
    return u("flexWrap")
  }, M.flexboxlegacy = function () {
    return u("boxDirection")
  }, M.canvas = function () {
    var e = t.createElement("canvas");
    return !(!e.getContext || !e.getContext("2d"))
  }, M.canvastext = function () {
    return !(!p.canvas || !a(t.createElement("canvas").getContext("2d").fillText, "function"))
  }, M.webgl = function () {
    return !!e.WebGLRenderingContext
  }, M.touch = function () {
    var n;
    return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : F(["@media (", S.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
      n = 9 === e.offsetTop
    }), n
  }, M.geolocation = function () {
    return "geolocation" in navigator
  }, M.postmessage = function () {
    return !!e.postMessage
  }, M.websqldatabase = function () {
    return !!e.openDatabase
  }, M.indexedDB = function () {
    return !!u("indexedDB", e)
  }, M.hashchange = function () {
    return A("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
  }, M.history = function () {
    return !(!e.history || !history.pushState)
  }, M.draganddrop = function () {
    var e = t.createElement("div");
    return "draggable" in e || "ondragstart" in e && "ondrop" in e
  }, M.websockets = function () {
    return "WebSocket" in e || "MozWebSocket" in e
  }, M.rgba = function () {
    return r("background-color:rgba(150,255,150,.5)"), i(b.backgroundColor, "rgba")
  }, M.hsla = function () {
    return r("background-color:hsla(120,40%,100%,.5)"), i(b.backgroundColor, "rgba") || i(b.backgroundColor, "hsla")
  }, M.multiplebgs = function () {
    return r("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(b.background)
  }, M.backgroundsize = function () {
    return u("backgroundSize")
  }, M.borderimage = function () {
    return u("borderImage")
  }, M.borderradius = function () {
    return u("borderRadius")
  }, M.boxshadow = function () {
    return u("boxShadow")
  }, M.textshadow = function () {
    return "" === t.createElement("div").style.textShadow
  }, M.opacity = function () {
    return o("opacity:.55"), /^0.55$/.test(b.opacity)
  }, M.cssanimations = function () {
    return u("animationName")
  }, M.csscolumns = function () {
    return u("columnCount")
  }, M.cssgradients = function () {
    var e = "background-image:",
      t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
      n = "linear-gradient(left top,#9f9, white);";
    return r((e + "-webkit- ".split(" ").join(t + e) + S.join(n + e)).slice(0, -e.length)), i(b.backgroundImage, "gradient")
  }, M.cssreflections = function () {
    return u("boxReflect")
  }, M.csstransforms = function () {
    return !!u("transform")
  }, M.csstransforms3d = function () {
    var e = !!u("perspective");
    return e && "webkitPerspective" in g.style && F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, n) {
      e = 9 === t.offsetLeft && 3 === t.offsetHeight
    }), e
  }, M.csstransitions = function () {
    return u("transition")
  }, M.fontface = function () {
    var e;
    return F('@font-face {font-family:"font";src:url("https://")}', function (n, r) {
      var o = t.getElementById("smodernizr"), a = o.sheet || o.styleSheet,
        i = a ? a.cssRules && a.cssRules[0] ? a.cssRules[0].cssText : a.cssText || "" : "";
      e = /src/i.test(i) && 0 === i.indexOf(r.split(" ")[0])
    }), e
  }, M.generatedcontent = function () {
    var e;
    return F(["#", v, "{font:0/0 a}#", v, ':after{content:"', x, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
      e = t.offsetHeight >= 3
    }), e
  }, M.video = function () {
    var e = t.createElement("video"), n = !1;
    try {
      (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
    } catch (r) {
    }
    return n
  }, M.audio = function () {
    var e = t.createElement("audio"), n = !1;
    try {
      (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
    } catch (r) {
    }
    return n
  }, M.localstorage = function () {
    try {
      return localStorage.setItem(v, v), localStorage.removeItem(v), !0
    } catch (e) {
      return !1
    }
  }, M.sessionstorage = function () {
    try {
      return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
    } catch (e) {
      return !1
    }
  }, M.webworkers = function () {
    return !!e.Worker
  }, M.applicationcache = function () {
    return !!e.applicationCache
  }, M.svg = function () {
    return !!t.createElementNS && !!t.createElementNS(N.svg, "svg").createSVGRect
  }, M.inlinesvg = function () {
    var e = t.createElement("div");
    return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == N.svg
  }, M.smil = function () {
    return !!t.createElementNS && /SVGAnimate/.test(w.call(t.createElementNS(N.svg, "animate")))
  }, M.svgclippaths = function () {
    return !!t.createElementNS && /SVGClipPath/.test(w.call(t.createElementNS(N.svg, "clipPath")))
  };
  for (var H in M) f(M, H) && (d = H.toLowerCase(), p[d] = M[H](), $.push((p[d] ? "" : "no-") + d));
  return p.input || l(), p.addTest = function (e, t) {
    if ("object" == typeof e) for (var r in e) f(e, r) && p.addTest(r, e[r]); else {
      if (e = e.toLowerCase(), p[e] !== n) return p;
      t = "function" == typeof t ? t() : t, "undefined" != typeof h && h && (g.className += " " + (t ? "" : "no-") + e), p[e] = t
    }
    return p
  }, r(""), y = E = null, function (e, t) {
    function n(e, t) {
      var n = e.createElement("p"),
        r = e.getElementsByTagName("head")[0] || e.documentElement;
      return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
    }

    function r() {
      var e = y.elements;
      return "string" == typeof e ? e.split(" ") : e
    }

    function o(e) {
      var t = v[e[h]];
      return t || (t = {}, g++, e[h] = g, v[g] = t), t
    }

    function a(e, n, r) {
      if (n || (n = t), l) return n.createElement(e);
      r || (r = o(n));
      var a;
      return a = r.cache[e] ? r.cache[e].cloneNode() : p.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !a.canHaveChildren || m.test(e) || a.tagUrn ? a : r.frag.appendChild(a)
    }

    function i(e, n) {
      if (e || (e = t), l) return e.createDocumentFragment();
      n = n || o(e);
      for (var a = n.frag.cloneNode(), i = 0, c = r(), s = c.length; s > i; i++) a.createElement(c[i]);
      return a
    }

    function c(e, t) {
      t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
        return y.shivMethods ? a(n, e, t) : t.createElem(n)
      }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function (e) {
        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
      }) + ");return n}")(y, t.frag)
    }

    function s(e) {
      e || (e = t);
      var r = o(e);
      return !y.shivCSS || u || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || c(e, r), e
    }

    var u, l, d = "3.7.0", f = e.html5 || {},
      m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
      p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
      h = "_html5shiv", g = 0, v = {};
    !function () {
      try {
        var e = t.createElement("a");
        e.innerHTML = "<xyz></xyz>", u = "hidden" in e, l = 1 == e.childNodes.length || function () {
          t.createElement("a");
          var e = t.createDocumentFragment();
          return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
        }()
      } catch (n) {
        u = !0, l = !0
      }
    }();
    var y = {
      elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
      version: d,
      shivCSS: f.shivCSS !== !1,
      supportsUnknownElements: l,
      shivMethods: f.shivMethods !== !1,
      type: "default",
      shivDocument: s,
      createElement: a,
      createDocumentFragment: i
    };
    e.html5 = y, s(t)
  }(this, t), p._version = m, p._prefixes = S, p._domPrefixes = T, p._cssomPrefixes = k, p.mq = z, p.hasEvent = A, p.testProp = function (e) {
    return c([e])
  }, p.testAllProps = u, p.testStyles = F, p.prefixed = function (e, t, n) {
    return t ? u(e, t, n) : u(e, "pfx")
  }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (h ? " js " + $.join(" ") : ""), p
}(this, this.document);
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
 *  Retina.js
 * -----------------------------------------------
*/
/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function () {
  function a() {
  }

  function b(a) {
    return f.retinaImageSuffix + a
  }

  function c(a, c) {
    if (this.path = a || "", "undefined" != typeof c && null !== c) this.at_2x_path = c, this.perform_check = !1; else {
      if (void 0 !== document.createElement) {
        var d = document.createElement("a");
        d.href = this.path, d.pathname = d.pathname.replace(g, b), this.at_2x_path = d.href
      } else {
        var e = this.path.split("?");
        e[0] = e[0].replace(g, b), this.at_2x_path = e.join("?")
      }
      this.perform_check = !0
    }
  }

  function d(a) {
    this.el = a, this.path = new c(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
    var b = this;
    this.path.check_2x_variant(function (a) {
      a && b.swap()
    })
  }

  var e = "undefined" == typeof exports ? window : exports, f = {
    retinaImageSuffix: "@2x",
    check_mime_type: !0,
    force_original_dimensions: !0
  };
  e.Retina = a, a.configure = function (a) {
    null === a && (a = {});
    for (var b in a) a.hasOwnProperty(b) && (f[b] = a[b])
  }, a.init = function (a) {
    null === a && (a = e);
    var b = a.onload || function () {
    };
    a.onload = function () {
      var a, c, e = document.getElementsByTagName("img"), f = [];
      for (a = 0; a < e.length; a += 1) c = e[a], c.getAttributeNode("data-no-retina") || f.push(new d(c));
      b()
    }
  }, a.isRetina = function () {
    var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
    return e.devicePixelRatio > 1 ? !0 : e.matchMedia && e.matchMedia(a).matches ? !0 : !1
  };
  var g = /\.\w+$/;
  e.RetinaImagePath = c, c.confirmed_paths = [], c.prototype.is_external = function () {
    return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
  }, c.prototype.check_2x_variant = function (a) {
    var b, d = this;
    return this.is_external() ? a(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in c.confirmed_paths ? a(!0) : (b = new XMLHttpRequest, b.open("HEAD", this.at_2x_path), b.onreadystatechange = function () {
      if (4 !== b.readyState) return a(!1);
      if (b.status >= 200 && b.status <= 399) {
        if (f.check_mime_type) {
          var e = b.getResponseHeader("Content-Type");
          if (null === e || !e.match(/^image/i)) return a(!1)
        }
        return c.confirmed_paths.push(d.at_2x_path), a(!0)
      }
      return a(!1)
    }, b.send(), void 0) : a(!0)
  }, e.RetinaImage = d, d.prototype.swap = function (a) {
    function b() {
      c.el.complete ? (f.force_original_dimensions && (c.el.setAttribute("width", c.el.offsetWidth), c.el.setAttribute("height", c.el.offsetHeight)), c.el.setAttribute("src", a)) : setTimeout(b, 5)
    }

    "undefined" == typeof a && (a = this.path.at_2x_path);
    var c = this;
    b()
  }, a.isRetina() && a.init(e)
}();


/*
 *  ajaxchimp
 * -----------------------------------------------
*/
/*!
 * version 1.3.0
 */
(function ($) {
  "use strict";
  $.ajaxChimp = {
    responses: {
      "We have sent you a confirmation email": 0,
      "Please enter a value": 1,
      "An email address must contain a single @": 2,
      "The domain portion of the email address is invalid (the portion after the @: )": 3,
      "The username portion of the email address is invalid (the portion before the @: )": 4,
      "This email address looks fake or invalid. Please enter a real email address": 5
    }, translations: {en: null}, init: function (selector, options) {
      $(selector).ajaxChimp(options)
    }
  };
  $.fn.ajaxChimp = function (options) {
    $(this).each(function (i, elem) {
      var form = $(elem);
      var email = form.find("input[type=email]");
      var label = form.find("label[for=" + email.attr("id") + "]");
      var settings = $.extend({
        url: form.attr("action"),
        language: "en"
      }, options);
      var url = settings.url.replace("/post?", "/post-json?").concat("&c=?");
      form.attr("novalidate", "true");
      email.attr("name", "EMAIL");
      form.submit(function () {
        var msg;

        function successCallback(resp) {
          if (resp.result === "success") {
            msg = "We have sent you a confirmation email";
            label.removeClass("error").addClass("valid");
            email.removeClass("error").addClass("valid")
          } else {
            email.removeClass("valid").addClass("error");
            label.removeClass("valid").addClass("error");
            var index = -1;
            try {
              var parts = resp.msg.split(" - ", 2);
              if (parts[1] === undefined) {
                msg = resp.msg
              } else {
                var i = parseInt(parts[0], 10);
                if (i.toString() === parts[0]) {
                  index = parts[0];
                  msg = parts[1]
                } else {
                  index = -1;
                  msg = resp.msg
                }
              }
            } catch (e) {
              index = -1;
              msg = resp.msg
            }
          }
          if (settings.language !== "en" && $.ajaxChimp.responses[msg] !== undefined && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]) {
            msg = $.ajaxChimp.translations[settings.language][$.ajaxChimp.responses[msg]]
          }
          label.html(msg);
          label.show(2e3);
          if (settings.callback) {
            settings.callback(resp)
          }
        }

        var data = {};
        var dataArray = form.serializeArray();
        $.each(dataArray, function (index, item) {
          data[item.name] = item.value
        });
        $.ajax({
          url: url,
          data: data,
          success: successCallback,
          dataType: "jsonp",
          error: function (resp, text) {
            console.log("mailchimp ajax submit error: " + text)
          }
        });
        var submitMsg = "Submitting...";
        if (settings.language !== "en" && $.ajaxChimp.translations && $.ajaxChimp.translations[settings.language] && $.ajaxChimp.translations[settings.language]["submit"]) {
          submitMsg = $.ajaxChimp.translations[settings.language]["submit"]
        }
        label.html(submitMsg).show(2e3);
        return false
      })
    });
    return this
  }
})(jQuery);


/*
 *  tweetie
 * -----------------------------------------------
*/
(function (e) {
  "use strict";
  e.fn.twittie = function () {
    var t = arguments[0] instanceof Object ? arguments[0] : {},
      n = typeof arguments[0] === "function" ? arguments[0] : arguments[1];
    var r = e.extend({
      username: null,
      list: null,
      hashtag: null,
      count: 10,
      hideReplies: false,
      dateFormat: "%b/%d/%Y",
      template: "{{date}} - {{tweet}}",
      apiPath: "includes/twitter/tweet.php",
      loadingText: "Loading..."
    }, t);
    if (r.list && !r.username) {
      e.error("If you want to fetch tweets from a list, you must define the username of the list owner.")
    }
    var i = function (e) {
      var t = e.replace(/(https?:\/\/([-\w\.]+)+(:\d+)?(\/([\w\/_\.]*(\?\S+)?)?)?)/ig, '<a href="$1" target="_blank" title="Visit this link">$1</a>').replace(/#([a-zA-Z0-9_]+)/g, '<a href="https://twitter.com/search?q=%23$1&src=hash" target="_blank" title="Search for #$1">#$1</a>').replace(/@([a-zA-Z0-9_]+)/g, '<a href="https://twitter.com/$1" target="_blank" title="$1 on Twitter">@$1</a>');
      return t
    };
    var s = function (e) {
      var t = e.split(" ");
      e = new Date(Date.parse(t[1] + " " + t[2] + ", " + t[5] + " " + t[3] + " UTC"));
      var n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var i = {
        "%d": e.getDate(),
        "%m": e.getMonth() + 1,
        "%b": n[e.getMonth()].substr(0, 3),
        "%B": n[e.getMonth()],
        "%y": String(e.getFullYear()).slice(-2),
        "%Y": e.getFullYear()
      };
      var s = r.dateFormat;
      var o = r.dateFormat.match(/%[dmbByY]/g);
      for (var u = 0, a = o.length; u < a; u++) {
        s = s.replace(o[u], i[o[u]])
      }
      return s
    };
    var o = function (e) {
      var t = r.template;
      var n = ["date", "tweet", "avatar", "url", "retweeted", "screen_name", "user_name"];
      for (var i = 0, s = n.length; i < s; i++) {
        t = t.replace(new RegExp("{{" + n[i] + "}}", "gi"), e[n[i]])
      }
      return t
    };
    this.html("<span>" + r.loadingText + "</span>");
    var u = this;
    e.getJSON(r.apiPath, {
      username: r.username,
      list: r.list,
      hashtag: r.hashtag,
      count: r.count,
      exclude_replies: r.hideReplies
    }, function (e) {
      u.find("span").fadeOut("fast", function () {
        u.html("<ul></ul>");
        for (var t = 0; t < r.count; t++) {
          var a = false;
          if (e[t]) {
            a = e[t]
          } else if (e.statuses !== undefined && e.statuses[t]) {
            a = e.statuses[t]
          } else {
            break
          }
          var f = {
            user_name: a.user.name,
            date: s(a.created_at),
            tweet: a.retweeted ? i("RT @" + a.user.screen_name + ": " + a.retweeted_status.text) : i(a.text),
            avatar: '<img src="' + a.user.profile_image_url + '" />',
            url: "https://twitter.com/" + a.user.screen_name + "/status/" + a.id_str,
            retweeted: a.retweeted,
            screen_name: i("@" + a.user.screen_name)
          };
          u.find("ul").append("<li class='item'>" + o(f) + "</li>")
        }
        if (typeof n === "function") {
          n()
        }
      })
    })
  }
})(jQuery)

/*
 *  menufullpage
 * -----------------------------------------------
*/
/*! menufullpage - v1.0.0 - 2015-03-26
* https://github.com/rottenstudios/menufullpage
* Copyright (c) 2015 Carmelo Catalfamo - rottenStudios.it */
!function (a) {
  "use strict";
  a.fn.menufullpage = function (b) {
    var c = a.extend({
      menu: "#fullpage-nav",
      push: ".push",
      side: "left",
      menuWidth: "100%",
      speed: "400",
      activeBtn: "menu-open"
    }, b), d = this, e = a(c.menu), f = a(c.push), g = c.menuWidth, h = {
      position: "fixed",
      top: "0",
      bottom: "0",
      "settings.side": "-" + c.menuWidth,
      width: c.menuWidth,
      height: "100%"
    }, i = {
      "-webkit-transition": c.side + " " + c.speed + "ms ease",
      "-moz-transition": c.side + " " + c.speed + "ms ease",
      "-ms-transition": c.side + " " + c.speed + "ms ease",
      "-o-transition": c.side + " " + c.speed + "ms ease",
      transition: c.side + " " + c.speed + "ms ease"
    };
    return e.css(h), f.css(c.side, "0"), e.css(i), f.css(i), e._state = "closed", e.open = function () {
      e._state = "open", e.css(c.side, "0"), f.css(c.side, g), d.addClass(c.activeBtn)
    }, e.close = function () {
      e._state = "closed", e.css(c.side, "-" + g), f.css(c.side, "0"), d.removeClass(c.activeBtn)
    }, a(document).on("click.menufullpage", function (b) {
      a(b.target).parents().andSelf().is(d) || "open" !== e._state || (e.close(), d.removeClass(c.activeBtn))
    }), d.on("click.menufullpage", function (a) {
      a.preventDefault(), "closed" === e._state ? e.open() : e.close()
    }), d.on("touchend", function (a) {
      d.trigger("click.menufullpage"), a.preventDefault()
    }), e
  }
}(jQuery);
!function (e, t) {
  "function" == typeof define && define.amd ? define("smoothScroll", t(e)) : "object" == typeof exports ? module.exports = t(e) : e.smoothScroll = t(e)
}(window || this, function (e) {
  "use strict";
  var t, n, o, r = {}, a = !!document.querySelector && !!e.addEventListener,
    c = {
      speed: 500,
      easing: "easeInOutCubic",
      offset: 0,
      updateURL: !0,
      callbackBefore: function () {
      },
      callbackAfter: function () {
      }
    }, u = function (e, t, n) {
      if ("[object Object]" === Object.prototype.toString.call(e)) for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(n, e[o], o, e); else for (var r = 0, a = e.length; a > r; r++) t.call(n, e[r], r, e)
    }, i = function (e, t) {
      var n = {};
      return u(e, function (t, o) {
        n[o] = e[o]
      }), u(t, function (e, o) {
        n[o] = t[o]
      }), n
    }, l = function (e, t) {
      for (var n = t.charAt(0); e && e !== document; e = e.parentNode) if ("." === n) {
        if (e.classList.contains(t.substr(1))) return e
      } else if ("#" === n) {
        if (e.id === t.substr(1)) return e
      } else if ("[" === n && e.hasAttribute(t.substr(1, t.length - 2))) return e;
      return !1
    }, s = function (e) {
      return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight)
    }, f = function (e) {
      for (var t, n = String(e), o = n.length, r = -1, a = "", c = n.charCodeAt(0); ++r < o;) {
        if (t = n.charCodeAt(r), 0 === t) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
        a += t >= 1 && 31 >= t || 127 == t || 0 === r && t >= 48 && 57 >= t || 1 === r && t >= 48 && 57 >= t && 45 === c ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t ? n.charAt(r) : "\\" + n.charAt(r)
      }
      return a
    }, d = function (e, t) {
      var n;
      return "easeInQuad" === e && (n = t * t), "easeOutQuad" === e && (n = t * (2 - t)), "easeInOutQuad" === e && (n = .5 > t ? 2 * t * t : -1 + (4 - 2 * t) * t), "easeInCubic" === e && (n = t * t * t), "easeOutCubic" === e && (n = --t * t * t + 1), "easeInOutCubic" === e && (n = .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e && (n = t * t * t * t), "easeOutQuart" === e && (n = 1 - --t * t * t * t), "easeInOutQuart" === e && (n = .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e && (n = t * t * t * t * t), "easeOutQuint" === e && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e && (n = .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), n || t
    }, h = function (e, t, n) {
      var o = 0;
      if (e.offsetParent) do o += e.offsetTop, e = e.offsetParent; while (e);
      return o = o - t - n, o >= 0 ? o : 0
    }, m = function () {
      return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
    }, p = function (e) {
      return e && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(e) : {}
    }, v = function (t, n) {
      history.pushState && (n || "true" === n) && history.pushState(null, null, [e.location.protocol, "//", e.location.host, e.location.pathname, e.location.search, t].join(""))
    };
  r.animateScroll = function (t, n, r) {
    var a = i(a || c, r || {}),
      u = p(t ? t.getAttribute("data-options") : null);
    a = i(a, u), n = "#" + f(n.substr(1));
    var l = "#" === n ? document.documentElement : document.querySelector(n),
      g = e.pageYOffset;
    o || (o = document.querySelector("[data-scroll-header]"));
    var b, O, y, S = null === o ? 0 : s(o) + o.offsetTop,
      I = h(l, S, parseInt(a.offset, 10)), H = I - g, E = m(), A = 0;
    v(n, a.updateURL);
    var L = function (o, r, c) {
      var u = e.pageYOffset;
      (o == r || u == r || e.innerHeight + u >= E) && (clearInterval(c), l.focus(), a.callbackAfter(t, n))
    }, Q = function () {
      A += 16, O = A / parseInt(a.speed, 10), O = O > 1 ? 1 : O, y = g + H * d(a.easing, O), e.scrollTo(0, Math.floor(y)), L(y, I, b)
    }, C = function () {
      a.callbackBefore(t, n), b = setInterval(Q, 16)
    };
    0 === e.pageYOffset && e.scrollTo(0, 0), C()
  };
  var g = function (e) {
    var n = l(e.target, "[data-scroll]");
    n && "a" === n.tagName.toLowerCase() && (e.preventDefault(), r.animateScroll(n, n.hash, t))
  }, b = function () {
    n || (n = setTimeout(function () {
      n = null, headerHeight = null === o ? 0 : s(o) + o.offsetTop
    }, 66))
  };
  return r.destroy = function () {
    t && (document.removeEventListener("click", g, !1), e.removeEventListener("resize", b, !1), t = null, n = null, o = null)
  }, r.init = function (n) {
    a && (r.destroy(), t = i(c, n || {}), o = document.querySelector("[data-scroll-header]"), document.addEventListener("click", g, !1), o && e.addEventListener("resize", b, !1))
  }, r
});

/*
 *  WOW animation
 * -----------------------------------------------
*/
/*! WOW - v1.1.2 - 2015-08-19
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */
(function () {
  var a, b, c, d, e, f = function (a, b) {
    return function () {
      return a.apply(b, arguments)
    }
  }, g = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
    return -1
  };
  b = function () {
    function a() {
    }

    return a.prototype.extend = function (a, b) {
      var c, d;
      for (c in b) d = b[c], null == a[c] && (a[c] = d);
      return a
    }, a.prototype.isMobile = function (a) {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
    }, a.prototype.createEvent = function (a, b, c, d) {
      var e;
      return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
    }, a.prototype.emitEvent = function (a, b) {
      return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0
    }, a.prototype.addEvent = function (a, b, c) {
      return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
    }, a.prototype.removeEvent = function (a, b, c) {
      return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
    }, a.prototype.innerHeight = function () {
      return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
    }, a
  }(), c = this.WeakMap || this.MozWeakMap || (c = function () {
    function a() {
      this.keys = [], this.values = []
    }

    return a.prototype.get = function (a) {
      var b, c, d, e, f;
      for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (c = f[b], c === a) return this.values[b]
    }, a.prototype.set = function (a, b) {
      var c, d, e, f, g;
      for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (d = g[c], d === a) return void (this.values[c] = b);
      return this.keys.push(a), this.values.push(b)
    }, a
  }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function () {
    function a() {
      "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
    }

    return a.notSupported = !0, a.prototype.observe = function () {
    }, a
  }()), d = this.getComputedStyle || function (a) {
    return this.getPropertyValue = function (b) {
      var c;
      return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function (a, b) {
        return b.toUpperCase()
      }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
    }, this
  }, e = /(\-([a-z]){1})/g, this.WOW = function () {
    function e(a) {
      null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass)
    }

    return e.prototype.defaults = {
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: !0,
      live: !0,
      callback: null,
      scrollContainer: null
    }, e.prototype.init = function () {
      var a;
      return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
    }, e.prototype.start = function () {
      var b, c, d, e;
      if (this.stopped = !1, this.boxes = function () {
        var a, c, d, e;
        for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
        return e
      }.call(this), this.all = function () {
        var a, c, d, e;
        for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
        return e
      }.call(this), this.boxes.length) if (this.disabled()) this.resetStyle(); else for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
      return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function (a) {
        return function (b) {
          var c, d, e, f, g;
          for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function () {
            var a, b, c, d;
            for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e));
            return d
          }.call(a));
          return g
        }
      }(this)).observe(document.body, {childList: !0, subtree: !0}) : void 0
    }, e.prototype.stop = function () {
      return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
    }, e.prototype.sync = function () {
      return a.notSupported ? this.doSync(this.element) : void 0
    }, e.prototype.doSync = function (a) {
      var b, c, d, e, f;
      if (null == a && (a = this.element), 1 === a.nodeType) {
        for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
        return f
      }
    }, e.prototype.show = function (a) {
      return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a
    }, e.prototype.applyStyle = function (a, b) {
      var c, d, e;
      return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function (f) {
        return function () {
          return f.customStyle(a, b, d, c, e)
        }
      }(this))
    }, e.prototype.animate = function () {
      return "requestAnimationFrame" in window ? function (a) {
        return window.requestAnimationFrame(a)
      } : function (a) {
        return a()
      }
    }(), e.prototype.resetStyle = function () {
      var a, b, c, d, e;
      for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
      return e
    }, e.prototype.resetAnimation = function (a) {
      var b;
      return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0
    }, e.prototype.customStyle = function (a, b, c, d, e) {
      return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {animationDuration: c}), d && this.vendorSet(a.style, {animationDelay: d}), e && this.vendorSet(a.style, {animationIterationCount: e}), this.vendorSet(a.style, {animationName: b ? "none" : this.cachedAnimationName(a)}), a
    }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function (a, b) {
      var c, d, e, f;
      d = [];
      for (c in b) e = b[c], a["" + c] = e, d.push(function () {
        var b, d, g, h;
        for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e);
        return h
      }.call(this));
      return d
    }, e.prototype.vendorCSS = function (a, b) {
      var c, e, f, g, h, i;
      for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b);
      return g
    }, e.prototype.animationName = function (a) {
      var b;
      try {
        b = this.vendorCSS(a, "animation-name").cssText
      } catch (c) {
        b = d(a).getPropertyValue("animation-name")
      }
      return "none" === b ? "" : b
    }, e.prototype.cacheAnimationName = function (a) {
      return this.animationNameCache.set(a, this.animationName(a))
    }, e.prototype.cachedAnimationName = function (a) {
      return this.animationNameCache.get(a)
    }, e.prototype.scrollHandler = function () {
      return this.scrolled = !0
    }, e.prototype.scrollCallback = function () {
      var a;
      return !this.scrolled || (this.scrolled = !1, this.boxes = function () {
        var b, c, d, e;
        for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
        return e
      }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
    }, e.prototype.offsetTop = function (a) {
      for (var b; void 0 === a.offsetTop;) a = a.parentNode;
      for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
      return b
    }, e.prototype.isVisible = function (a) {
      var b, c, d, e, f;
      return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
    }, e.prototype.util = function () {
      return null != this._util ? this._util : this._util = new b
    }, e.prototype.disabled = function () {
      return !this.config.mobile && this.util().isMobile(navigator.userAgent)
    }, e
  }()
}).call(this);



/*
 *  Owl carousel
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
 *  Magnific Popup
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
 *  equalHeights
 * -----------------------------------------------
*/
$.fn.equalHeights = function (e) {
  return $(this).each(function () {
    var t = 0;
    $(this).children().each(function () {
      $(this).height() > t && (t = $(this).height())
    }), e && Number.prototype.pxToEm || (t = t.pxToEm()), $.browser.msie && 6 == $.browser.version && $(this).children().css({height: t}), $(this).children().css({"min-height": t})
  }), this
}, $.fn.equalWidths = function (e) {
  return $(this).each(function () {
    var t = 0;
    $(this).children().each(function () {
      $(this).width() > t && (t = $(this).width())
    }), e && Number.prototype.pxToEm || (t = t.pxToEm()), $.browser.msie && 6 == $.browser.version && $(this).children().css({width: t}), $(this).children().css({"min-width": t})
  }), this
}, Number.prototype.pxToEm = String.prototype.pxToEm = function (e) {
  e = jQuery.extend({scope: "body", reverse: !1}, e);
  var t, i = "" == this ? 0 : parseFloat(this), s = function () {
    var e = document.documentElement;
    return self.innerWidth || e && e.clientWidth || document.body.clientWidth
  };
  if ("body" == e.scope && $.browser.msie && (parseFloat($("body").css("font-size")) / s()).toFixed(1) > 0) {
    var r = function () {
      return 16 * (parseFloat($("body").css("font-size")) / s()).toFixed(3)
    };
    t = r()
  } else t = parseFloat(jQuery(e.scope).css("font-size"));
  var o = 1 == e.reverse ? (i * t).toFixed(2) + "px" : (i / t).toFixed(2) + "em";
  return o
};


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

/*!
 * Maximage Version: 2.0.8 (16-Jan-2012) - http://www.aaronvanderzwan.com/maximage/2.0/
 */
(function (a) {
  a.fn.maximage = function (d, e) {
    var c;
    if (typeof d == "object" || d === undefined) {
      c = a.extend(a.fn.maximage.defaults, d || {})
    }
    if (typeof d == "string") {
      c = a.fn.maximage.defaults
    }
    a.Body = a("body");
    a.Window = a(window);
    a.Scroll = a("html, body");
    a.Events = {RESIZE: "resize"};
    this.each(function () {
      var m = a(this), f = 0, j = [];
      var i = {
        setup: function () {
          if (a.Slides.length > 0) {
            var r, p = a.Slides.length;
            for (r = 0; r < p; r++) {
              var q = a.Slides[r];
              m.append('<div class="mc-image ' + q.theclass + '" title="' + q.alt + '" style="background-image:url(\'' + q.url + "');" + q.style + '" data-href="' + q.datahref + '">' + q.content + "</div>")
            }
            i.preload(0);
            i.resize()
          }
        }, preload: function (q) {
          var p = a("<img/>");
          p.load(function () {
            if (f == 0) {
              g.setup();
              c.onFirstImageLoaded()
            }
            if (f == (a.Slides.length - 1)) {
              c.onImagesLoaded(m)
            } else {
              f++;
              i.preload(f)
            }
          });
          p[0].src = a.Slides[q].url;
          j.push(p[0])
        }, resize: function () {
          a.Window.bind(a.Events.RESIZE, function () {
            a.Scroll.addClass("mc-hide-scrolls");
            a.Window.data("h", k.sizes().h).data("w", k.sizes().w);
            m.height(a.Window.data("h")).width(a.Window.data("w")).children().height(a.Window.data("h")).width(a.Window.data("w"));
            m.children().each(function () {
              this.cycleH = a.Window.data("h");
              this.cycleW = a.Window.data("w")
            });
            a(a.Scroll).removeClass("mc-hide-scrolls")
          })
        }
      };
      var h = {
        setup: function () {
          var u, s, q, r, p = a.Slides.length;
          if (a.BrowserTests.msie && !c.overrideMSIEStop) {
            document.execCommand("Stop", false)
          }
          m.html("");
          a.Body.addClass("mc-old-browser");
          if (a.Slides.length > 0) {
            a.Scroll.addClass("mc-hide-scrolls");
            a.Window.data("h", k.sizes().h).data("w", k.sizes().w);
            a("body").append(a("<div></div>").attr("class", "mc-loader").css({
              position: "absolute",
              left: "-9999px"
            }));
            for (r = 0; r < p; r++) {
              if (a.Slides[r].content.length == 0) {
                u = '<img src="' + a.Slides[r].url + '" />'
              } else {
                u = a.Slides[r].content
              }
              q = a("<div>" + u + "</div>").attr("class", "mc-image mc-image-n" + r + " " + a.Slides[r].theclass);
              m.append(q);
              if (a(".mc-image-n" + r).children("img").length == 0) {
              } else {
                a("div.mc-loader").append(a(".mc-image-n" + r).children("img").first().clone().addClass("not-loaded"))
              }
            }
            h.preload();
            h.windowResize()
          }
        }, preload: function () {
          var p = setInterval(function () {
            a(".mc-loader").children("img").each(function (r) {
              var q = a(this);
              if (q.hasClass("not-loaded")) {
                if (q.height() > 0) {
                  a(this).removeClass("not-loaded");
                  var s = a("div.mc-image-n" + r).children("img").first();
                  s.data("h", q.height()).data("w", q.width()).data("ar", (q.width() / q.height()));
                  h.onceLoaded(r)
                }
              }
            });
            if (a(".not-loaded").length == 0) {
              a(".mc-loader").remove();
              clearInterval(p)
            }
          }, 1000)
        }, onceLoaded: function (p) {
          h.maximage(p);
          if (p == 0) {
            m.css({visibility: "visible"});
            c.onFirstImageLoaded()
          } else {
            if (p == a.Slides.length - 1) {
              g.setup();
              a(a.Scroll).removeClass("mc-hide-scrolls");
              c.onImagesLoaded(m);
              if (c.debug) {
                b(" - Final Maximage - ");
                b(m)
              }
            }
          }
        }, maximage: function (q) {
          a("div.mc-image-n" + q).height(a.Window.data("h")).width(a.Window.data("w")).children("img").first().each(function () {
            n.maxcover(a(this))
          })
        }, windowResize: function () {
          a.Window.bind(a.Events.RESIZE, function () {
            clearTimeout(this.id);
            this.id = setTimeout(h.doneResizing, 200)
          })
        }, doneResizing: function () {
          a(a.Scroll).addClass("mc-hide-scrolls");
          a.Window.data("h", k.sizes().h).data("w", k.sizes().w);
          m.height(a.Window.data("h")).width(a.Window.data("w"));
          m.find(".mc-image").each(function (q) {
            h.maximage(q)
          });
          var p = m.data("cycle.opts");
          if (p != undefined) {
            p.height = a.Window.data("h");
            p.width = a.Window.data("w");
            jQuery.each(p.elements, function (q, r) {
              r.cycleW = a.Window.data("w");
              r.cycleH = a.Window.data("h")
            })
          }
          a(a.Scroll).removeClass("mc-hide-scrolls")
        }
      };
      var g = {
        setup: function () {
          var q, p;
          m.addClass("mc-cycle");
          a.Window.data("h", k.sizes().h).data("w", k.sizes().w);
          jQuery.easing.easeForCSSTransition = function (v, w, u, A, z, y) {
            return u + A
          };
          var r = a.extend({
            fit: 1,
            containerResize: 0,
            height: a.Window.data("h"),
            width: a.Window.data("w"),
            slideResize: false,
            easing: (a.BrowserTests.cssTransitions && c.cssTransitions ? "easeForCSSTransition" : "swing")
          }, c.cycleOptions);
          m.cycle(r)
        }
      };
      var n = {
        center: function (p) {
          if (c.verticalCenter) {
            p.css({marginTop: ((p.height() - a.Window.data("h")) / 2) * -1})
          }
          if (c.horizontalCenter) {
            p.css({marginLeft: ((p.width() - a.Window.data("w")) / 2) * -1})
          }
        }, fill: function (p) {
          var q = p.is("object") ? p.parent().first() : p;
          if (typeof c.backgroundSize == "function") {
            c.backgroundSize(p)
          } else {
            if (c.backgroundSize == "cover") {
              if (a.Window.data("w") / a.Window.data("h") < q.data("ar")) {
                p.height(a.Window.data("h")).width((a.Window.data("h") * q.data("ar")).toFixed(0))
              } else {
                p.height((a.Window.data("w") / q.data("ar")).toFixed(0)).width(a.Window.data("w"))
              }
            } else {
              if (c.backgroundSize == "contain") {
                if (a.Window.data("w") / a.Window.data("h") < q.data("ar")) {
                  p.height((a.Window.data("w") / q.data("ar")).toFixed(0)).width(a.Window.data("w"))
                } else {
                  p.height(a.Window.data("h")).width((a.Window.data("h") * q.data("ar")).toFixed(0))
                }
              } else {
                b("The backgroundSize option was not recognized for older browsers.")
              }
            }
          }
        }, maxcover: function (p) {
          n.fill(p);
          n.center(p)
        }, maxcontain: function (p) {
          n.fill(p);
          n.center(p)
        }
      };
      var k = {
        browser_tests: function () {
          var q = a("<div />")[0], u = ["Moz", "Webkit", "Khtml", "O", "ms"],
            t = "transition", s = {
              cssTransitions: false,
              cssBackgroundSize: ("backgroundSize" in q.style && c.cssBackgroundSize),
              html5Video: false,
              msie: false
            };
          if (c.cssTransitions) {
            if (typeof q.style[t] == "string") {
              s.cssTransitions = true
            }
            t = t.charAt(0).toUpperCase() + t.substr(1);
            for (var r = 0; r < u.length; r++) {
              if (u[r] + t in q.style) {
                s.cssTransitions = true
              }
            }
          }
          if (!!document.createElement("video").canPlayType) {
            s.html5Video = true
          }
          s.msie = (k.msie() !== undefined);
          if (c.debug) {
            b(" - Browser Test - ");
            b(s)
          }
          return s
        }, construct_slide_object: function () {
          var r = new Object(), p = new Array(), q = "";
          m.children().each(function (t) {
            var s = a(this).is("img") ? a(this).clone() : a(this).find("img").first().clone();
            r = {};
            r.url = s.attr("src");
            r.title = s.attr("title") != undefined ? s.attr("title") : "";
            r.alt = s.attr("alt") != undefined ? s.attr("alt") : "";
            r.theclass = s.attr("class") != undefined ? s.attr("class") : "";
            r.styles = s.attr("style") != undefined ? s.attr("style") : "";
            r.orig = s.clone();
            r.datahref = s.attr("data-href") != undefined ? s.attr("data-href") : "";
            r.content = "";
            if (a(this).find("img").length > 0) {
              if (a.BrowserTests.cssBackgroundSize) {
                a(this).find("img").first().remove()
              }
              r.content = a(this).html()
            }
            s[0].src = "";
            if (a.BrowserTests.cssBackgroundSize) {
              a(this).remove()
            }
            p.push(r)
          });
          if (c.debug) {
            b(" - Slide Object - ");
            b(p)
          }
          return p
        }, msie: function () {
          var r, p = 3, s = document.createElement("div"),
            q = s.getElementsByTagName("i");
          while (s.innerHTML = "<!--[if gt IE " + (++p) + "]><i></i><![endif]-->", q[0]) {
          }
          return p > 4 ? p : r
        }, sizes: function () {
          var p = {h: 0, w: 0};
          if (c.fillElement == "window") {
            p.h = a.Window.height();
            p.w = a.Window.width()
          } else {
            var q = m.parents(c.fillElement).first();
            if (q.height() == 0 || q.data("windowHeight") == true) {
              q.data("windowHeight", true);
              p.h = a.Window.height()
            } else {
              p.h = q.height()
            }
            if (q.width() == 0 || q.data("windowWidth") == true) {
              q.data("windowWidth", true);
              p.w = a.Window.width()
            } else {
              p.w = q.width()
            }
          }
          return p
        }
      };
      a.BrowserTests = k.browser_tests();
      if (typeof d == "string") {
        if (a.BrowserTests.html5Video || !m.is("video")) {
          var l, o = m.is("object") ? m.parent().first() : m;
          if (!a.Body.hasClass("mc-old-browser")) {
            a.Body.addClass("mc-old-browser")
          }
          a.Window.data("h", k.sizes().h).data("w", k.sizes().w);
          o.data("h", m.height()).data("w", m.width()).data("ar", m.width() / m.height());
          a.Window.bind(a.Events.RESIZE, function () {
            a.Window.data("h", k.sizes().h).data("w", k.sizes().w);
            l = m.data("resizer");
            clearTimeout(l);
            l = setTimeout(n[d](m), 200);
            m.data("resizer", l)
          });
          n[d](m)
        }
      } else {
        a.Slides = k.construct_slide_object();
        if (a.BrowserTests.cssBackgroundSize) {
          if (c.debug) {
            b(" - Using Modern - ")
          }
          i.setup()
        } else {
          if (c.debug) {
            b(" - Using Old - ")
          }
          h.setup()
        }
      }
    });

    function b(f) {
      if (window.console && window.console.log) {
        window.console.log(f)
      }
    }
  };
  a.fn.maximage.defaults = {
    debug: false,
    cssBackgroundSize: true,
    cssTransitions: true,
    verticalCenter: true,
    horizontalCenter: true,
    scaleInterval: 20,
    backgroundSize: "cover",
    fillElement: "window",
    overrideMSIEStop: false,
    onFirstImageLoaded: function () {
    },
    onImagesLoaded: function () {
    }
  }
})(jQuery);

/*
 *  jQuery.countdown
 * -----------------------------------------------
*/
//https://github.com/hilios/jQuery.countdown
!function (t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
  "use strict";

  function e(t) {
    if (t instanceof Date) return t;
    if (String(t).match(o)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
    throw new Error("Couldn't cast `" + t + "` to a date object.")
  }

  function s(t) {
    var e = t.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
    return new RegExp(e)
  }

  function n(t) {
    return function (e) {
      var n = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (n) for (var a = 0, o = n.length; o > a; ++a) {
        var r = n[a].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/), l = s(r[0]),
          c = r[1] || "", u = r[3] || "", f = null;
        r = r[2], h.hasOwnProperty(r) && (f = h[r], f = Number(t[f])), null !== f && ("!" === c && (f = i(u, f)), "" === c && 10 > f && (f = "0" + f.toString()), e = e.replace(l, f.toString()))
      }
      return e = e.replace(/%%/, "%")
    }
  }

  function i(t, e) {
    var s = "s", n = "";
    return t && (t = t.replace(/(:|;|\s)/gi, "").split(/\,/), 1 === t.length ? s = t[0] : (n = t[0], s = t[1])), 1 === Math.abs(e) ? n : s
  }

  var a = [], o = [], r = {precision: 100, elapse: !1};
  o.push(/^[0-9]*$/.source), o.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), o.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), o = new RegExp(o.join("|"));
  var h = {
    Y: "years",
    m: "months",
    n: "daysToMonth",
    w: "weeks",
    d: "daysToWeek",
    D: "totalDays",
    H: "hours",
    M: "minutes",
    S: "seconds"
  }, l = function (e, s, n) {
    this.el = e, this.$el = t(e), this.interval = null, this.offset = {}, this.options = t.extend({}, r), this.instanceNumber = a.length, a.push(this), this.$el.data("countdown-instance", this.instanceNumber), n && ("function" == typeof n ? (this.$el.on("update.countdown", n), this.$el.on("stoped.countdown", n), this.$el.on("finish.countdown", n)) : this.options = t.extend({}, r, n)), this.setFinalDate(s), this.start()
  };
  t.extend(l.prototype, {
    start: function () {
      null !== this.interval && clearInterval(this.interval);
      var t = this;
      this.update(), this.interval = setInterval(function () {
        t.update.call(t)
      }, this.options.precision)
    }, stop: function () {
      clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
    }, toggle: function () {
      this.interval ? this.stop() : this.start()
    }, pause: function () {
      this.stop()
    }, resume: function () {
      this.start()
    }, remove: function () {
      this.stop.call(this), a[this.instanceNumber] = null, delete this.$el.data().countdownInstance
    }, setFinalDate: function (t) {
      this.finalDate = e(t)
    }, update: function () {
      if (0 === this.$el.closest("html").length) return void this.remove();
      var e, s = void 0 !== t._data(this.el, "events"), n = new Date;
      e = this.finalDate.getTime() - n.getTime(), e = Math.ceil(e / 1e3), e = !this.options.elapse && 0 > e ? 0 : Math.abs(e), this.totalSecsLeft !== e && s && (this.totalSecsLeft = e, this.elapsed = n >= this.finalDate, this.offset = {
        seconds: this.totalSecsLeft % 60,
        minutes: Math.floor(this.totalSecsLeft / 60) % 60,
        hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
        days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
        daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
        daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
        totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
        weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
        months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
        years: Math.abs(this.finalDate.getFullYear() - n.getFullYear())
      }, this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish")))
    }, dispatchEvent: function (e) {
      var s = t.Event(e + ".countdown");
      s.finalDate = this.finalDate, s.elapsed = this.elapsed, s.offset = t.extend({}, this.offset), s.strftime = n(this.offset), this.$el.trigger(s)
    }
  }), t.fn.countdown = function () {
    var e = Array.prototype.slice.call(arguments, 0);
    return this.each(function () {
      var s = t(this).data("countdown-instance");
      if (void 0 !== s) {
        var n = a[s], i = e[0];
        l.prototype.hasOwnProperty(i) ? n[i].apply(n, e.slice(1)) : null === String(i).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (n.setFinalDate.call(n, i), n.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, i))
      } else new l(this, e[0], e[1])
    })
  }
});


/*
 *  instafeed.js
 * -----------------------------------------------
*/
// Generated by CoffeeScript 1.9.3
(function () {
  var e;
  e = function () {
    function e(e, t) {
      var n, r;
      this.options = {
        target: "instafeed",
        get: "popular",
        resolution: "thumbnail",
        sortBy: "none",
        links: !0,
        mock: !1,
        useHttp: !1
      };
      if (typeof e == "object") for (n in e) r = e[n], this.options[n] = r;
      this.context = t != null ? t : this, this.unique = this._genKey()
    }

    return e.prototype.hasNext = function () {
      return typeof this.context.nextUrl == "string" && this.context.nextUrl.length > 0
    }, e.prototype.next = function () {
      return this.hasNext() ? this.run(this.context.nextUrl) : !1
    }, e.prototype.run = function (t) {
      var n, r, i;
      if (typeof this.options.clientId != "string" && typeof this.options.accessToken != "string") throw new Error("Missing clientId or accessToken.");
      if (typeof this.options.accessToken != "string" && typeof this.options.clientId != "string") throw new Error("Missing clientId or accessToken.");
      return this.options.before != null && typeof this.options.before == "function" && this.options.before.call(this), typeof document != "undefined" && document !== null && (i = document.createElement("script"), i.id = "instafeed-fetcher", i.src = t || this._buildUrl(), n = document.getElementsByTagName("head"), n[0].appendChild(i), r = "instafeedCache" + this.unique, window[r] = new e(this.options, this), window[r].unique = this.unique), !0
    }, e.prototype.parse = function (e) {
      var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x,
        T, N, C, k, L, A, O, M, _, D;
      if (typeof e != "object") {
        if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "Invalid JSON data"), !1;
        throw new Error("Invalid JSON response")
      }
      if (e.meta.code !== 200) {
        if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, e.meta.error_message), !1;
        throw new Error("Error from Instagram: " + e.meta.error_message)
      }
      if (e.data.length === 0) {
        if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "No images were returned from Instagram"), !1;
        throw new Error("No images were returned from Instagram")
      }
      this.options.success != null && typeof this.options.success == "function" && this.options.success.call(this, e), this.context.nextUrl = "", e.pagination != null && (this.context.nextUrl = e.pagination.next_url);
      if (this.options.sortBy !== "none") {
        this.options.sortBy === "random" ? M = ["", "random"] : M = this.options.sortBy.split("-"), O = M[0] === "least" ? !0 : !1;
        switch (M[1]) {
          case"random":
            e.data.sort(function () {
              return .5 - Math.random()
            });
            break;
          case"recent":
            e.data = this._sortBy(e.data, "created_time", O);
            break;
          case"liked":
            e.data = this._sortBy(e.data, "likes.count", O);
            break;
          case"commented":
            e.data = this._sortBy(e.data, "comments.count", O);
            break;
          default:
            throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
        }
      }
      if (typeof document != "undefined" && document !== null && this.options.mock === !1) {
        m = e.data, A = parseInt(this.options.limit, 10), this.options.limit != null && m.length > A && (m = m.slice(0, A)), u = document.createDocumentFragment(), this.options.filter != null && typeof this.options.filter == "function" && (m = this._filter(m, this.options.filter));
        if (this.options.template != null && typeof this.options.template == "string") {
          f = "", d = "", w = "", D = document.createElement("div");
          for (c = 0, N = m.length; c < N; c++) {
            h = m[c], p = h.images[this.options.resolution];
            if (typeof p != "object") throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
            E = p.width, y = p.height, b = "square", E > y && (b = "landscape"), E < y && (b = "portrait"), v = p.url, l = window.location.protocol.indexOf("http") >= 0, l && !this.options.useHttp && (v = v.replace(/https?:\/\//, "//")), d = this._makeTemplate(this.options.template, {
              model: h,
              id: h.id,
              link: h.link,
              type: h.type,
              image: v,
              width: E,
              height: y,
              orientation: b,
              caption: this._getObjectProperty(h, "caption.text"),
              likes: h.likes.count,
              comments: h.comments.count,
              location: this._getObjectProperty(h, "location.name")
            }), f += d
          }
          D.innerHTML = f, i = [], r = 0, n = D.childNodes.length;
          while (r < n) i.push(D.childNodes[r]), r += 1;
          for (x = 0, C = i.length; x < C; x++) L = i[x], u.appendChild(L)
        } else for (T = 0, k = m.length; T < k; T++) {
          h = m[T], g = document.createElement("img"), p = h.images[this.options.resolution];
          if (typeof p != "object") throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
          v = p.url, l = window.location.protocol.indexOf("http") >= 0, l && !this.options.useHttp && (v = v.replace(/https?:\/\//, "//")), g.src = v, this.options.links === !0 ? (t = document.createElement("a"), t.href = h.link, t.appendChild(g), u.appendChild(t)) : u.appendChild(g)
        }
        _ = this.options.target, typeof _ == "string" && (_ = document.getElementById(_));
        if (_ == null) throw o = 'No element with id="' + this.options.target + '" on page.', new Error(o);
        _.appendChild(u), a = document.getElementsByTagName("head")[0], a.removeChild(document.getElementById("instafeed-fetcher")), S = "instafeedCache" + this.unique, window[S] = void 0;
        try {
          delete window[S]
        } catch (P) {
          s = P
        }
      }
      return this.options.after != null && typeof this.options.after == "function" && this.options.after.call(this), !0
    }, e.prototype._buildUrl = function () {
      var e, t, n;
      e = "https://api.instagram.com/v1";
      switch (this.options.get) {
        case"popular":
          t = "media/popular";
          break;
        case"tagged":
          if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
          t = "tags/" + this.options.tagName + "/media/recent";
          break;
        case"location":
          if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
          t = "locations/" + this.options.locationId + "/media/recent";
          break;
        case"user":
          if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
          t = "users/" + this.options.userId + "/media/recent";
          break;
        default:
          throw new Error("Invalid option for get: '" + this.options.get + "'.")
      }
      return n = e + "/" + t, this.options.accessToken != null ? n += "?access_token=" + this.options.accessToken : n += "?client_id=" + this.options.clientId, this.options.limit != null && (n += "&count=" + this.options.limit), n += "&callback=instafeedCache" + this.unique + ".parse", n
    }, e.prototype._genKey = function () {
      var e;
      return e = function () {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
      }, "" + e() + e() + e() + e()
    }, e.prototype._makeTemplate = function (e, t) {
      var n, r, i, s, o;
      r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, n = e;
      while (r.test(n)) s = n.match(r)[1], o = (i = this._getObjectProperty(t, s)) != null ? i : "", n = n.replace(r, function () {
        return "" + o
      });
      return n
    }, e.prototype._getObjectProperty = function (e, t) {
      var n, r;
      t = t.replace(/\[(\w+)\]/g, ".$1"), r = t.split(".");
      while (r.length) {
        n = r.shift();
        if (!(e != null && n in e)) return null;
        e = e[n]
      }
      return e
    }, e.prototype._sortBy = function (e, t, n) {
      var r;
      return r = function (e, r) {
        var i, s;
        return i = this._getObjectProperty(e, t), s = this._getObjectProperty(r, t), n ? i > s ? 1 : -1 : i < s ? 1 : -1
      }, e.sort(r.bind(this)), e
    }, e.prototype._filter = function (e, t) {
      var n, r, i, s, o;
      n = [], r = function (e) {
        if (t(e)) return n.push(e)
      };
      for (i = 0, o = e.length; i < o; i++) s = e[i], r(s);
      return n
    }, e
  }(), function (e, t) {
    return typeof define == "function" && define.amd ? define([], t) : typeof module == "object" && module.exports ? module.exports = t() : e.Instafeed = t()
  }(this, function () {
    return e
  })
}).call(this);


/*
 *  jQuery Validation
 * -----------------------------------------------
*/
/*! jQuery Validation Plugin - v1.14.0 - 6/30/2015
 * http://jqueryvalidation.org/
 * Copyright (c) 2015 Jörn Zaefferer; Licensed MIT */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
  a.extend(a.fn, {
    validate: function (b) {
      if (!this.length) return void (b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
      var c = a.data(this[0], "validator");
      return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
        c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
      }), this.on("submit.validate", function (b) {
        function d() {
          var d, e;
          return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0
        }

        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
      })), c)
    }, valid: function () {
      var b, c, d;
      return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
        b = c.element(this) && b, d = d.concat(c.errorList)
      }), c.errorList = d), b
    }, rules: function (b, c) {
      var d, e, f, g, h, i, j = this[0];
      if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
        case"add":
          a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
          break;
        case"remove":
          return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
            i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
          }), i) : (delete e[j.name], f)
      }
      return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({required: h}, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {remote: h})), g
    }
  }), a.extend(a.expr[":"], {
    blank: function (b) {
      return !a.trim("" + a(b).val())
    }, filled: function (b) {
      return !!a.trim("" + a(b).val())
    }, unchecked: function (b) {
      return !a(b).prop("checked")
    }
  }), a.validator = function (b, c) {
    this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
  }, a.validator.format = function (b, c) {
    return 1 === arguments.length ? function () {
      var c = a.makeArray(arguments);
      return c.unshift(b), a.validator.format.apply(this, c)
    } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
        return c
      })
    }), b)
  }, a.extend(a.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: !1,
      focusInvalid: !0,
      errorContainer: a([]),
      errorLabelContainer: a([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function (a) {
        this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
      },
      onfocusout: function (a) {
        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
      },
      onkeyup: function (b, c) {
        var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
        9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b === this.lastElement) && this.element(b)
      },
      onclick: function (a) {
        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
      },
      highlight: function (b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
      },
      unhighlight: function (b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
      }
    },
    setDefaults: function (b) {
      a.extend(a.validator.defaults, b)
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date ( ISO ).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      creditcard: "Please enter a valid credit card number.",
      equalTo: "Please enter the same value again.",
      maxlength: a.validator.format("Please enter no more than {0} characters."),
      minlength: a.validator.format("Please enter at least {0} characters."),
      rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
      range: a.validator.format("Please enter a value between {0} and {1}."),
      max: a.validator.format("Please enter a value less than or equal to {0}."),
      min: a.validator.format("Please enter a value greater than or equal to {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function () {
        function b(b) {
          var c = a.data(this.form, "validator"),
            d = "on" + b.type.replace(/^validate/, ""), e = c.settings;
          e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
        }

        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var c, d = this.groups = {};
        a.each(this.settings.groups, function (b, c) {
          "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
            d[c] = b
          })
        }), c = this.settings.rules, a.each(c, function (b, d) {
          c[b] = a.validator.normalizeRule(d)
        }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
      }, form: function () {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
      }, checkForm: function () {
        this.prepareForm();
        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
        return this.valid()
      }, element: function (b) {
        var c = this.clean(b), d = this.validationTargetFor(c), e = !0;
        return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
      }, showErrors: function (b) {
        if (b) {
          a.extend(this.errorMap, b), this.errorList = [];
          for (var c in b) this.errorList.push({
            message: b[c],
            element: this.findByName(c)[0]
          });
          this.successList = a.grep(this.successList, function (a) {
            return !(a.name in b)
          })
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
      }, resetForm: function () {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
        var b,
          c = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        if (this.settings.unhighlight) for (b = 0; c[b]; b++) this.settings.unhighlight.call(this, c[b], this.settings.errorClass, ""); else c.removeClass(this.settings.errorClass)
      }, numberOfInvalids: function () {
        return this.objectLength(this.invalid)
      }, objectLength: function (a) {
        var b, c = 0;
        for (b in a) c++;
        return c
      }, hideErrors: function () {
        this.hideThese(this.toHide)
      }, hideThese: function (a) {
        a.not(this.containers).text(""), this.addWrapper(a).hide()
      }, valid: function () {
        return 0 === this.size()
      }, size: function () {
        return this.errorList.length
      }, focusInvalid: function () {
        if (this.settings.focusInvalid) try {
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
        } catch (b) {
        }
      }, findLastActive: function () {
        var b = this.lastActive;
        return b && 1 === a.grep(this.errorList, function (a) {
          return a.element.name === b.name
        }).length && b
      }, elements: function () {
        var b = this, c = {};
        return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0)
        })
      }, clean: function (b) {
        return a(b)[0]
      }, errors: function () {
        var b = this.settings.errorClass.split(" ").join(".");
        return a(this.settings.errorElement + "." + b, this.errorContext)
      }, reset: function () {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
      }, prepareForm: function () {
        this.reset(), this.toHide = this.errors().add(this.containers)
      }, prepareElement: function (a) {
        this.reset(), this.toHide = this.errorsFor(a)
      }, elementValue: function (b) {
        var c, d = a(b), e = b.type;
        return "radio" === e || "checkbox" === e ? this.findByName(b.name).filter(":checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
      }, check: function (b) {
        b = this.validationTargetFor(this.clean(b));
        var c, d, e, f = a(b).rules(), g = a.map(f, function (a, b) {
          return b
        }).length, h = !1, i = this.elementValue(b);
        for (d in f) {
          e = {method: d, parameters: f[d]};
          try {
            if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
              h = !0;
              continue
            }
            if (h = !1, "pending" === c) return void (this.toHide = this.toHide.not(this.errorsFor(b)));
            if (!c) return this.formatAndAdd(b, e), !1
          } catch (j) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j
          }
        }
        if (!h) return this.objectLength(f) && this.successList.push(b), !0
      }, customDataMessage: function (b, c) {
        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
      }, customMessage: function (a, b) {
        var c = this.settings.messages[a];
        return c && (c.constructor === String ? c : c[b])
      }, findDefined: function () {
        for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a];
        return void 0
      }, defaultMessage: function (b, c) {
        return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
      }, formatAndAdd: function (b, c) {
        var d = this.defaultMessage(b, c.method), e = /\$?\{(\d+)\}/g;
        "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
          message: d,
          element: b,
          method: c.method
        }), this.errorMap[b.name] = d, this.submitted[b.name] = d
      }, addWrapper: function (a) {
        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
      }, defaultShowErrors: function () {
        var a, b, c;
        for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
        if (this.settings.unhighlight) for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
      }, validElements: function () {
        return this.currentElements.not(this.invalidElements())
      }, invalidElements: function () {
        return a(this.errorList).map(function () {
          return this.element
        })
      }, showLabel: function (b, c) {
        var d, e, f, g = this.errorsFor(b), h = this.idOrName(b),
          i = a(b).attr("aria-describedby");
        g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function (b, c) {
          c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id"))
        }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
      }, errorsFor: function (b) {
        var c = this.idOrName(b), d = a(b).attr("aria-describedby"),
          e = "label[for='" + c + "'], label[for='" + c + "'] *";
        return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
      }, idOrName: function (a) {
        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
      }, validationTargetFor: function (b) {
        return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
      }, checkable: function (a) {
        return /radio|checkbox/i.test(a.type)
      }, findByName: function (b) {
        return a(this.currentForm).find("[name='" + b + "']")
      }, getLength: function (b, c) {
        switch (c.nodeName.toLowerCase()) {
          case"select":
            return a("option:selected", c).length;
          case"input":
            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
        }
        return b.length
      }, depend: function (a, b) {
        return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
      }, dependTypes: {
        "boolean": function (a) {
          return a
        }, string: function (b, c) {
          return !!a(b, c.form).length
        }, "function": function (a, b) {
          return a(b)
        }
      }, optional: function (b) {
        var c = this.elementValue(b);
        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
      }, startRequest: function (a) {
        this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
      }, stopRequest: function (b, c) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
      }, previousValue: function (b) {
        return a.data(b, "previousValue") || a.data(b, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(b, "remote")
        })
      }, destroy: function () {
        this.resetForm(), a(this.currentForm).off(".validate").removeData("validator")
      }
    },
    classRuleSettings: {
      required: {required: !0},
      email: {email: !0},
      url: {url: !0},
      date: {date: !0},
      dateISO: {dateISO: !0},
      number: {number: !0},
      digits: {digits: !0},
      creditcard: {creditcard: !0}
    },
    addClassRules: function (b, c) {
      b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
    },
    classRules: function (b) {
      var c = {}, d = a(b).attr("class");
      return d && a.each(d.split(" "), function () {
        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
      }), c
    },
    normalizeAttributeRule: function (a, b, c, d) {
      /min|max/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
    },
    attributeRules: function (b) {
      var c, d, e = {}, f = a(b), g = b.getAttribute("type");
      for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
    },
    dataRules: function (b) {
      var c, d, e = {}, f = a(b), g = b.getAttribute("type");
      for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
      return e
    },
    staticRules: function (b) {
      var c = {}, d = a.data(b.form, "validator");
      return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
    },
    normalizeRules: function (b, c) {
      return a.each(b, function (d, e) {
        if (e === !1) return void delete b[d];
        if (e.param || e.depends) {
          var f = !0;
          switch (typeof e.depends) {
            case"string":
              f = !!a(e.depends, c.form).length;
              break;
            case"function":
              f = e.depends.call(c, c)
          }
          f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
        }
      }), a.each(b, function (d, e) {
        b[d] = a.isFunction(e) ? e(c) : e
      }), a.each(["minlength", "maxlength"], function () {
        b[this] && (b[this] = Number(b[this]))
      }), a.each(["rangelength", "range"], function () {
        var c;
        b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
      }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
    },
    normalizeRule: function (b) {
      if ("string" == typeof b) {
        var c = {};
        a.each(b.split(/\s/), function () {
          c[this] = !0
        }), b = c
      }
      return b
    },
    addMethod: function (b, c, d) {
      a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
    },
    methods: {
      required: function (b, c, d) {
        if (!this.depend(d, c)) return "dependency-mismatch";
        if ("select" === c.nodeName.toLowerCase()) {
          var e = a(c).val();
          return e && e.length > 0
        }
        return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
      }, email: function (a, b) {
        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
      }, url: function (a, b) {
        return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
      }, date: function (a, b) {
        return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
      }, dateISO: function (a, b) {
        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
      }, number: function (a, b) {
        return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
      }, digits: function (a, b) {
        return this.optional(b) || /^\d+$/.test(a)
      }, creditcard: function (a, b) {
        if (this.optional(b)) return "dependency-mismatch";
        if (/[^0-9 \-]+/.test(a)) return !1;
        var c, d, e = 0, f = 0, g = !1;
        if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
        for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
        return e % 10 === 0
      }, minlength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d
      }, maxlength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || d >= e
      }, rangelength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d[0] && e <= d[1]
      }, min: function (a, b, c) {
        return this.optional(b) || a >= c
      }, max: function (a, b, c) {
        return this.optional(b) || c >= a
      }, range: function (a, b, c) {
        return this.optional(b) || a >= c[0] && a <= c[1]
      }, equalTo: function (b, c, d) {
        var e = a(d);
        return this.settings.onfocusout && e.off(".validate-equalTo").on("blur.validate-equalTo", function () {
          a(c).valid()
        }), b === e.val()
      }, remote: function (b, c, d) {
        if (this.optional(c)) return "dependency-mismatch";
        var e, f, g = this.previousValue(c);
        return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && {url: d} || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
          mode: "abort",
          port: "validate" + c.name,
          dataType: "json",
          data: f,
          context: e.currentForm,
          success: function (d) {
            var f, h, i, j = d === !0 || "true" === d;
            e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
          }
        }, d)), "pending")
      }
    }
  });
  var b, c = {};
  a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
    var e = a.port;
    "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
  }) : (b = a.ajax, a.ajax = function (d) {
    var e = ("mode" in d ? d : a.ajaxSettings).mode,
      f = ("port" in d ? d : a.ajaxSettings).port;
    return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
  })
});


/*
 *  jQuery Form
 * -----------------------------------------------
*/
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function (e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
  "use strict";

  function t(t) {
    var r = t.data;
    t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
  }

  function r(t) {
    var r = t.target, a = e(r);
    if (!a.is("[type=submit],[type=image]")) {
      var n = a.closest("[type=submit]");
      if (0 === n.length) return;
      r = n[0]
    }
    var i = this;
    if (i.clk = r, "image" == r.type) if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY; else if ("function" == typeof e.fn.offset) {
      var o = a.offset();
      i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
    } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
    setTimeout(function () {
      i.clk = i.clk_x = i.clk_y = null
    }, 100)
  }

  function a() {
    if (e.fn.ajaxSubmit.debug) {
      var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
      window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
    }
  }

  var n = {};
  n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
  var i = !!e.fn.prop;
  e.fn.attr2 = function () {
    if (!i) return this.attr.apply(this, arguments);
    var e = this.prop.apply(this, arguments);
    return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
  }, e.fn.ajaxSubmit = function (t) {
    function r(r) {
      var a, n, i = e.param(r, t.traditional).split("&"), o = i.length, s = [];
      for (a = 0; o > a; a++) i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
      return s
    }

    function o(a) {
      for (var n = new FormData, i = 0; i < a.length; i++) n.append(a[i].name, a[i].value);
      if (t.extraData) {
        var o = r(t.extraData);
        for (i = 0; i < o.length; i++) o[i] && n.append(o[i][0], o[i][1])
      }
      t.data = null;
      var s = e.extend(!0, {}, e.ajaxSettings, t, {
        contentType: !1,
        processData: !1,
        cache: !1,
        type: u || "POST"
      });
      t.uploadProgress && (s.xhr = function () {
        var r = e.ajaxSettings.xhr();
        return r.upload && r.upload.addEventListener("progress", function (e) {
          var r = 0, a = e.loaded || e.position, n = e.total;
          e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
        }, !1), r
      }), s.data = null;
      var c = s.beforeSend;
      return s.beforeSend = function (e, r) {
        t.formData ? r.data = t.formData : r.data = n, c && c.call(this, e, r)
      }, e.ajax(s)
    }

    function s(r) {
      function n(e) {
        var t = null;
        try {
          e.contentWindow && (t = e.contentWindow.document)
        } catch (r) {
          a("cannot get iframe.contentWindow document: " + r)
        }
        if (t) return t;
        try {
          t = e.contentDocument ? e.contentDocument : e.document
        } catch (r) {
          a("cannot get iframe.contentDocument: " + r), t = e.document
        }
        return t
      }

      function o() {
        function t() {
          try {
            var e = n(g).readyState;
            a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
          } catch (r) {
            a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
          }
        }

        var r = f.attr2("target"), i = f.attr2("action"),
          o = "multipart/form-data",
          c = f.attr("enctype") || f.attr("encoding") || o;
        w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
          encoding: "multipart/form-data",
          enctype: "multipart/form-data"
        }), m.timeout && (j = setTimeout(function () {
          T = !0, s(D)
        }, m.timeout));
        var l = [];
        try {
          if (m.extraData) for (var d in m.extraData) m.extraData.hasOwnProperty(d) && (e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? l.push(e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0]) : l.push(e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]));
          m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
          try {
            w.submit()
          } catch (h) {
            var x = document.createElement("form").submit;
            x.apply(w)
          }
        } finally {
          w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
        }
      }

      function s(t) {
        if (!x.aborted && !F) {
          if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x) return x.abort("timeout"), void S.reject(x, "timeout");
          if (t == k && x) return x.abort("server abort"), void S.reject(x, "error", "server abort");
          if (M && M.location.href != m.iframeSrc || T) {
            g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
            var r, i = "success";
            try {
              if (T) throw"timeout";
              var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
              if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O) return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
              var u = M.body ? M.body : M.documentElement;
              x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
                var t = {"content-type": m.dataType};
                return t[e.toLowerCase()]
              }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
              var c = (m.dataType || "").toLowerCase(),
                l = /(json|script|text)/.test(c);
              if (l || m.textarea) {
                var f = M.getElementsByTagName("textarea")[0];
                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText; else if (l) {
                  var p = M.getElementsByTagName("pre")[0],
                    h = M.getElementsByTagName("body")[0];
                  p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                }
              } else "xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
              try {
                E = _(x, c, m)
              } catch (y) {
                i = "parsererror", x.error = r = y || i
              }
            } catch (y) {
              a("error caught: ", y), i = "error", x.error = r = y || i
            }
            x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
              m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
            }, 100)
          }
        }
      }

      var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0], S = e.Deferred();
      if (S.abort = function (e) {
        x.abort(e)
      }, r) for (l = 0; l < h.length; l++) c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
      if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
        position: "absolute",
        top: "-1000px",
        left: "-1000px"
      })), g = v[0], x = {
        aborted: 0,
        responseText: null,
        responseXML: null,
        status: 0,
        statusText: "n/a",
        getAllResponseHeaders: function () {
        },
        getResponseHeader: function () {
        },
        setRequestHeader: function () {
        },
        abort: function (t) {
          var r = "timeout" === t ? "timeout" : "aborted";
          a("aborting upload... " + r), this.aborted = 1;
          try {
            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
          } catch (n) {
          }
          v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
        }
      }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1) return m.global && e.active--, S.reject(), S;
      if (x.aborted) return S.reject(), S;
      y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
      var D = 1, k = 2, A = e("meta[name=csrf-token]").attr("content"),
        L = e("meta[name=csrf-param]").attr("content");
      L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
      var E, M, F, O = 50, X = e.parseXML || function (e, t) {
        return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
      }, C = e.parseJSON || function (e) {
        return window.eval("(" + e + ")")
      }, _ = function (t, r, a) {
        var n = t.getResponseHeader("content-type") || "",
          i = "xml" === r || !r && n.indexOf("xml") >= 0,
          o = i ? t.responseXML : t.responseText;
        return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
      };
      return S
    }

    if (!this.length) return a("ajaxSubmit: skipping submit process - no element selected"), this;
    var u, c, l, f = this;
    "function" == typeof t ? t = {success: t} : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
      url: l,
      success: e.ajaxSettings.success,
      type: u || e.ajaxSettings.type,
      iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
    }, t);
    var m = {};
    if (this.trigger("form-pre-serialize", [this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
    if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
    var d = t.traditional;
    void 0 === d && (d = e.ajaxSettings.traditional);
    var p, h = [], v = this.formToArray(t.semantic, h);
    if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1) return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
    if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto) return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
    var g = e.param(v, d);
    p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
    var x = [];
    if (t.resetForm && x.push(function () {
      f.resetForm()
    }), t.clearForm && x.push(function () {
      f.clearForm(t.includeHidden)
    }), !t.dataType && t.target) {
      var y = t.success || function () {
      };
      x.push(function (r) {
        var a = t.replaceTarget ? "replaceWith" : "html";
        e(t.target)[a](r).each(y, arguments)
      })
    } else t.success && x.push(t.success);
    if (t.success = function (e, r, a) {
      for (var n = t.context || this, i = 0, o = x.length; o > i; i++) x[i].apply(n, [e, r, a || f, f])
    }, t.error) {
      var b = t.error;
      t.error = function (e, r, a) {
        var n = t.context || this;
        b.apply(n, [e, r, a, f])
      }
    }
    if (t.complete) {
      var T = t.complete;
      t.complete = function (e, r) {
        var a = t.context || this;
        T.apply(a, [e, r, f])
      }
    }
    var j = e("input[type=file]:enabled", this).filter(function () {
        return "" !== e(this).val()
      }), w = j.length > 0, S = "multipart/form-data",
      D = f.attr("enctype") == S || f.attr("encoding") == S,
      k = n.fileapi && n.formdata;
    a("fileAPI :" + k);
    var A, L = (w || D) && !k;
    t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
      A = s(v)
    }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
    for (var E = 0; E < h.length; E++) h[E] = null;
    return this.trigger("form-submit-notify", [this, t]), this
  }, e.fn.ajaxForm = function (n) {
    if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
      var i = {s: this.selector, c: this.context};
      return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
        e(i.s, i.c).ajaxForm(n)
      }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
    }
    return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
  }, e.fn.ajaxFormUnbind = function () {
    return this.unbind("submit.form-plugin click.form-plugin")
  }, e.fn.formToArray = function (t, r) {
    var a = [];
    if (0 === this.length) return a;
    var i, o = this[0], s = this.attr("id"),
      u = t ? o.getElementsByTagName("*") : o.elements;
    if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length) return a;
    var c, l, f, m, d, p, h;
    for (c = 0, p = u.length; p > c; c++) if (d = u[c], f = d.name, f && !d.disabled) if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
      name: f,
      value: e(d).val(),
      type: d.type
    }), a.push({name: f + ".x", value: o.clk_x}, {
      name: f + ".y",
      value: o.clk_y
    })); else if (m = e.fieldValue(d, !0), m && m.constructor == Array) for (r && r.push(d), l = 0, h = m.length; h > l; l++) a.push({
      name: f,
      value: m[l]
    }); else if (n.fileapi && "file" == d.type) {
      r && r.push(d);
      var v = d.files;
      if (v.length) for (l = 0; l < v.length; l++) a.push({
        name: f,
        value: v[l],
        type: d.type
      }); else a.push({name: f, value: "", type: d.type})
    } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
      name: f,
      value: m,
      type: d.type,
      required: d.required
    }));
    if (!t && o.clk) {
      var g = e(o.clk), x = g[0];
      f = x.name, f && !x.disabled && "image" == x.type && (a.push({
        name: f,
        value: g.val()
      }), a.push({name: f + ".x", value: o.clk_x}, {
        name: f + ".y",
        value: o.clk_y
      }))
    }
    return a
  }, e.fn.formSerialize = function (t) {
    return e.param(this.formToArray(t))
  }, e.fn.fieldSerialize = function (t) {
    var r = [];
    return this.each(function () {
      var a = this.name;
      if (a) {
        var n = e.fieldValue(this, t);
        if (n && n.constructor == Array) for (var i = 0, o = n.length; o > i; i++) r.push({
          name: a,
          value: n[i]
        }); else null !== n && "undefined" != typeof n && r.push({
          name: this.name,
          value: n
        })
      }
    }), e.param(r)
  }, e.fn.fieldValue = function (t) {
    for (var r = [], a = 0, n = this.length; n > a; a++) {
      var i = this[a], o = e.fieldValue(i, t);
      null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
    }
    return r
  }, e.fieldValue = function (t, r) {
    var a = t.name, n = t.type, i = t.tagName.toLowerCase();
    if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex)) return null;
    if ("select" == i) {
      var o = t.selectedIndex;
      if (0 > o) return null;
      for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
        var m = u[f];
        if (m.selected) {
          var d = m.value;
          if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c) return d;
          s.push(d)
        }
      }
      return s
    }
    return e(t).val()
  }, e.fn.clearForm = function (t) {
    return this.each(function () {
      e("input,select,textarea", this).clearFields(t)
    })
  }, e.fn.clearFields = e.fn.clearInputs = function (t) {
    var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
    return this.each(function () {
      var a = this.type, n = this.tagName.toLowerCase();
      r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
    })
  }, e.fn.resetForm = function () {
    return this.each(function () {
      ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
    })
  }, e.fn.enable = function (e) {
    return void 0 === e && (e = !0), this.each(function () {
      this.disabled = !e
    })
  }, e.fn.selected = function (t) {
    return void 0 === t && (t = !0), this.each(function () {
      var r = this.type;
      if ("checkbox" == r || "radio" == r) this.checked = t; else if ("option" == this.tagName.toLowerCase()) {
        var a = e(this).parent("select");
        t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
      }
    })
  }, e.fn.ajaxSubmit.debug = !1
});


/*
 *  code highlight
 * -----------------------------------------------
*/
/* http://prismjs.com/download.html?themes=prism&languages=markup+css+clike+javascript+aspnet+bash+c+csharp+cpp+coffeescript+css-extras+git+http+ini+java+latex+less+matlab+objectivec+perl+php+php-extras+python+ruby+scss+sql+swift&plugins=line-numbers+show-language */
self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {};
var Prism = function () {
  var e = /\blang(?:uage)?-(?!\*)(\w+)\b/i, t = self.Prism = {
    util: {
      encode: function (e) {
        return e instanceof n ? new n(e.type, t.util.encode(e.content), e.alias) : "Array" === t.util.type(e) ? e.map(t.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
      }, type: function (e) {
        return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
      }, clone: function (e) {
        var n = t.util.type(e);
        switch (n) {
          case"Object":
            var a = {};
            for (var r in e) e.hasOwnProperty(r) && (a[r] = t.util.clone(e[r]));
            return a;
          case"Array":
            return e.map(function (e) {
              return t.util.clone(e)
            })
        }
        return e
      }
    }, languages: {
      extend: function (e, n) {
        var a = t.util.clone(t.languages[e]);
        for (var r in n) a[r] = n[r];
        return a
      }, insertBefore: function (e, n, a, r) {
        r = r || t.languages;
        var i = r[e];
        if (2 == arguments.length) {
          a = arguments[1];
          for (var l in a) a.hasOwnProperty(l) && (i[l] = a[l]);
          return i
        }
        var s = {};
        for (var o in i) if (i.hasOwnProperty(o)) {
          if (o == n) for (var l in a) a.hasOwnProperty(l) && (s[l] = a[l]);
          s[o] = i[o]
        }
        return t.languages.DFS(t.languages, function (t, n) {
          n === r[e] && t != e && (this[t] = s)
        }), r[e] = s
      }, DFS: function (e, n, a) {
        for (var r in e) e.hasOwnProperty(r) && (n.call(e, r, e[r], a || r), "Object" === t.util.type(e[r]) ? t.languages.DFS(e[r], n) : "Array" === t.util.type(e[r]) && t.languages.DFS(e[r], n, r))
      }
    }, highlightAll: function (e, n) {
      for (var a, r = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), i = 0; a = r[i++];) t.highlightElement(a, e === !0, n)
    }, highlightElement: function (a, r, i) {
      for (var l, s, o = a; o && !e.test(o.className);) o = o.parentNode;
      if (o && (l = (o.className.match(e) || [, ""])[1], s = t.languages[l]), s) {
        a.className = a.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l, o = a.parentNode, /pre/i.test(o.nodeName) && (o.className = o.className.replace(e, "").replace(/\s+/g, " ") + " language-" + l);
        var u = a.textContent;
        if (u) {
          u = u.replace(/^(?:\r?\n|\r)/, "");
          var g = {element: a, language: l, grammar: s, code: u};
          if (t.hooks.run("before-highlight", g), r && self.Worker) {
            var c = new Worker(t.filename);
            c.onmessage = function (e) {
              g.highlightedCode = n.stringify(JSON.parse(e.data), l), t.hooks.run("before-insert", g), g.element.innerHTML = g.highlightedCode, i && i.call(g.element), t.hooks.run("after-highlight", g)
            }, c.postMessage(JSON.stringify({
              language: g.language,
              code: g.code
            }))
          } else g.highlightedCode = t.highlight(g.code, g.grammar, g.language), t.hooks.run("before-insert", g), g.element.innerHTML = g.highlightedCode, i && i.call(a), t.hooks.run("after-highlight", g)
        }
      }
    }, highlight: function (e, a, r) {
      var i = t.tokenize(e, a);
      return n.stringify(t.util.encode(i), r)
    }, tokenize: function (e, n) {
      var a = t.Token, r = [e], i = n.rest;
      if (i) {
        for (var l in i) n[l] = i[l];
        delete n.rest
      }
      e:for (var l in n) if (n.hasOwnProperty(l) && n[l]) {
        var s = n[l];
        s = "Array" === t.util.type(s) ? s : [s];
        for (var o = 0; o < s.length; ++o) {
          var u = s[o], g = u.inside, c = !!u.lookbehind, f = 0, h = u.alias;
          u = u.pattern || u;
          for (var p = 0; p < r.length; p++) {
            var d = r[p];
            if (r.length > e.length) break e;
            if (!(d instanceof a)) {
              u.lastIndex = 0;
              var m = u.exec(d);
              if (m) {
                c && (f = m[1].length);
                var y = m.index - 1 + f, m = m[0].slice(f), v = m.length,
                  k = y + v, b = d.slice(0, y + 1), w = d.slice(k + 1),
                  N = [p, 1];
                b && N.push(b);
                var O = new a(l, g ? t.tokenize(m, g) : m, h);
                N.push(O), w && N.push(w), Array.prototype.splice.apply(r, N)
              }
            }
          }
        }
      }
      return r
    }, hooks: {
      all: {}, add: function (e, n) {
        var a = t.hooks.all;
        a[e] = a[e] || [], a[e].push(n)
      }, run: function (e, n) {
        var a = t.hooks.all[e];
        if (a && a.length) for (var r, i = 0; r = a[i++];) r(n)
      }
    }
  }, n = t.Token = function (e, t, n) {
    this.type = e, this.content = t, this.alias = n
  };
  if (n.stringify = function (e, a, r) {
    if ("string" == typeof e) return e;
    if ("Array" === t.util.type(e)) return e.map(function (t) {
      return n.stringify(t, a, e)
    }).join("");
    var i = {
      type: e.type,
      content: n.stringify(e.content, a, r),
      tag: "span",
      classes: ["token", e.type],
      attributes: {},
      language: a,
      parent: r
    };
    if ("comment" == i.type && (i.attributes.spellcheck = "true"), e.alias) {
      var l = "Array" === t.util.type(e.alias) ? e.alias : [e.alias];
      Array.prototype.push.apply(i.classes, l)
    }
    t.hooks.run("wrap", i);
    var s = "";
    for (var o in i.attributes) s += o + '="' + (i.attributes[o] || "") + '"';
    return "<" + i.tag + ' class="' + i.classes.join(" ") + '" ' + s + ">" + i.content + "</" + i.tag + ">"
  }, !self.document) return self.addEventListener ? (self.addEventListener("message", function (e) {
    var n = JSON.parse(e.data), a = n.language, r = n.code;
    self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r, t.languages[a])))), self.close()
  }, !1), self.Prism) : self.Prism;
  var a = document.getElementsByTagName("script");
  return a = a[a.length - 1], a && (t.filename = a.src, document.addEventListener && !a.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", t.highlightAll)), self.Prism
}();
"undefined" != typeof module && module.exports && (module.exports = Prism);
;
Prism.languages.markup = {
  comment: /<!--[\w\W]*?-->/,
  prolog: /<\?.+?\?>/,
  doctype: /<!DOCTYPE.+?>/,
  cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
  tag: {
    pattern: /<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,
    inside: {
      tag: {
        pattern: /^<\/?[\w:-]+/i,
        inside: {punctuation: /^<\/?/, namespace: /^[\w-]+?:/}
      },
      "attr-value": {
        pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
        inside: {punctuation: /=|>|"/}
      },
      punctuation: /\/?>/,
      "attr-name": {pattern: /[\w:-]+/, inside: {namespace: /^[\w-]+?:/}}
    }
  },
  entity: /&#?[\da-z]{1,8};/i
}, Prism.hooks.add("wrap", function (t) {
  "entity" === t.type && (t.attributes.title = t.content.replace(/&amp;/, "&"))
});
;
Prism.languages.css = {
  comment: /\/\*[\w\W]*?\*\//,
  atrule: {pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: {punctuation: /[;:]/}},
  url: /url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,
  selector: /[^\{\}\s][^\{\};]*(?=\s*\{)/,
  string: /("|')(\\\n|\\?.)*?\1/,
  property: /(\b|\B)[\w-]+(?=\s*:)/i,
  important: /\B!important\b/i,
  punctuation: /[\{\};:]/,
  "function": /[-a-z0-9]+(?=\()/i
}, Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
  style: {
    pattern: /<style[\w\W]*?>[\w\W]*?<\/style>/i,
    inside: {
      tag: {
        pattern: /<style[\w\W]*?>|<\/style>/i,
        inside: Prism.languages.markup.tag.inside
      }, rest: Prism.languages.css
    },
    alias: "language-css"
  }
}), Prism.languages.insertBefore("inside", "attr-value", {
  "style-attr": {
    pattern: /\s*style=("|').*?\1/i,
    inside: {
      "attr-name": {
        pattern: /^\s*style/i,
        inside: Prism.languages.markup.tag.inside
      },
      punctuation: /^\s*=\s*['"]|['"]\s*$/,
      "attr-value": {pattern: /.+/i, inside: Prism.languages.css}
    },
    alias: "language-css"
  }
}, Prism.languages.markup.tag));
;
Prism.languages.clike = {
  comment: [{
    pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
    lookbehind: !0
  }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0}],
  string: /("|')(\\\n|\\?.)*?\1/,
  "class-name": {
    pattern: /((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
    lookbehind: !0,
    inside: {punctuation: /(\.|\\)/}
  },
  keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  "boolean": /\b(true|false)\b/,
  "function": {pattern: /[a-z0-9_]+\(/i, inside: {punctuation: /\(/}},
  number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
  operator: /[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,
  ignore: /&(lt|gt|amp);/i,
  punctuation: /[{}[\];(),.:]/
};
;
Prism.languages.javascript = Prism.languages.extend("clike", {
  keyword: /\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,
  number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,
  "function": /(?!\d)[a-z0-9_$]+(?=\()/i
}), Prism.languages.insertBefore("javascript", "keyword", {
  regex: {
    pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
    lookbehind: !0
  }
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
  script: {
    pattern: /<script[\w\W]*?>[\w\W]*?<\/script>/i,
    inside: {
      tag: {
        pattern: /<script[\w\W]*?>|<\/script>/i,
        inside: Prism.languages.markup.tag.inside
      }, rest: Prism.languages.javascript
    },
    alias: "language-javascript"
  }
});
;
Prism.languages.aspnet = Prism.languages.extend("markup", {
  "page-directive tag": {
    pattern: /<%\s*@.*%>/i,
    inside: {
      "page-directive tag": /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master|MasterType|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
      rest: Prism.languages.markup.tag.inside
    }
  },
  "directive tag": {
    pattern: /<%.*%>/i,
    inside: {
      "directive tag": /<%\s*?[$=%#:]{0,2}|%>/i,
      rest: Prism.languages.csharp
    }
  }
}), Prism.languages.insertBefore("inside", "punctuation", {"directive tag": Prism.languages.aspnet["directive tag"]}, Prism.languages.aspnet.tag.inside["attr-value"]), Prism.languages.insertBefore("aspnet", "comment", {"asp comment": /<%--[\w\W]*?--%>/}), Prism.languages.insertBefore("aspnet", Prism.languages.javascript ? "script" : "tag", {
  "asp script": {
    pattern: /<script(?=.*runat=['"]?server['"]?)[\w\W]*?>[\w\W]*?<\/script>/i,
    inside: {
      tag: {
        pattern: /<\/?script\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/i,
        inside: Prism.languages.aspnet.tag.inside
      }, rest: Prism.languages.csharp || {}
    }
  }
}), Prism.languages.aspnet.style && (Prism.languages.aspnet.style.inside.tag.pattern = /<\/?style\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/i, Prism.languages.aspnet.style.inside.tag.inside = Prism.languages.aspnet.tag.inside), Prism.languages.aspnet.script && (Prism.languages.aspnet.script.inside.tag.pattern = Prism.languages.aspnet["asp script"].inside.tag.pattern, Prism.languages.aspnet.script.inside.tag.inside = Prism.languages.aspnet.tag.inside);
;
Prism.languages.bash = Prism.languages.extend("clike", {
  comment: {pattern: /(^|[^"{\\])(#.*?(\r?\n|$))/, lookbehind: !0},
  string: {
    pattern: /("|')(\\?[\s\S])*?\1/,
    inside: {property: /\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^\}]+\})/}
  },
  number: {
    pattern: /([^\w\.])-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,
    lookbehind: !0
  },
  "function": /\b(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|declare|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|echo|egrep|eject|enable|env|ethtool|eval|exec|exit|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|select|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|until|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)\b/,
  keyword: /\b(if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)\b/
}), Prism.languages.insertBefore("bash", "keyword", {property: /\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^}]+\})/}), Prism.languages.insertBefore("bash", "comment", {important: /(^#!\s*\/bin\/bash)|(^#!\s*\/bin\/sh)/});
;
Prism.languages.c = Prism.languages.extend("clike", {
  string: /("|')([^\n\\\1]|\\.|\\\r*\n)*?\1/,
  keyword: /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
  operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\//
}), Prism.languages.insertBefore("c", "string", {
  property: {
    pattern: /((^|\n)\s*)#\s*[a-z]+([^\n\\]|\\.|\\\r*\n)*/i,
    lookbehind: !0,
    inside: {
      string: {
        pattern: /(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,
        lookbehind: !0
      }
    }
  }
}), delete Prism.languages.c["class-name"], delete Prism.languages.c["boolean"];
;
Prism.languages.csharp = Prism.languages.extend("clike", {
  keyword: /\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,
  string: [/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/, /("|')(\\?.)*?\1/],
  preprocessor: /^\s*#.*/m,
  number: /\b-?(0x[\da-f]+|\d*\.?\d+)\b/i
});
;
Prism.languages.cpp = Prism.languages.extend("c", {
  keyword: /\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|delete\[\]|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|new\[\]|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
  "boolean": /\b(true|false)\b/,
  operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/
}), Prism.languages.insertBefore("cpp", "keyword", {
  "class-name": {
    pattern: /(class\s+)[a-z0-9_]+/i,
    lookbehind: !0
  }
});
;
!function (e) {
  var n = /#(?!\{).+/, t = {pattern: /#\{[^}]+\}/, alias: "variable"};
  e.languages.coffeescript = e.languages.extend("javascript", {
    comment: n,
    string: [/'(?:\\?[\s\S])*?'/, {
      pattern: /"(?:\\?[\s\S])*?"/,
      inside: {interpolation: t}
    }],
    keyword: /\b(and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    "class-member": {pattern: /@(?!\d)\w+/, alias: "variable"}
  }), e.languages.insertBefore("coffeescript", "comment", {
    "multiline-comment": {
      pattern: /###[\s\S]+?###/,
      alias: "comment"
    },
    "block-regex": {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: "regex",
      inside: {comment: n, interpolation: t}
    }
  }), e.languages.insertBefore("coffeescript", "string", {
    "inline-javascript": {
      pattern: /`(?:\\?[\s\S])*?`/,
      inside: {
        delimiter: {pattern: /^`|`$/, alias: "punctuation"},
        rest: e.languages.javascript
      }
    },
    "multiline-string": [{
      pattern: /'''[\s\S]*?'''/,
      alias: "string"
    }, {pattern: /"""[\s\S]*?"""/, alias: "string", inside: {interpolation: t}}]
  }), e.languages.insertBefore("coffeescript", "keyword", {property: /(?!\d)\w+(?=\s*:(?!:))/})
}(Prism);
;
Prism.languages.css.selector = {
  pattern: /[^\{\}\s][^\{\}]*(?=\s*\{)/,
  inside: {
    "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
    "pseudo-class": /:[-\w]+(?:\(.*\))?/,
    "class": /\.[-:\.\w]+/,
    id: /#[-:\.\w]+/
  }
}, Prism.languages.insertBefore("css", "function", {
  hexcode: /#[\da-f]{3,6}/i,
  entity: /\\[\da-f]{1,8}/i,
  number: /[\d%\.]+/
});
;
Prism.languages.git = {
  comment: /^#.*$/m,
  string: /("|')(\\?.)*?\1/m,
  command: {pattern: /^.*\$ git .*$/m, inside: {parameter: /\s(--|-)\w+/m}},
  coord: /^@@.*@@$/m,
  deleted: /^-(?!-).+$/m,
  inserted: /^\+(?!\+).+$/m,
  commit_sha1: /^commit \w{40}$/m
};
;
Prism.languages.http = {
  "request-line": {
    pattern: /^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/,
    inside: {
      property: /^\b(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,
      "attr-name": /:\w+/
    }
  },
  "response-status": {
    pattern: /^HTTP\/1.[01] [0-9]+.*/,
    inside: {property: /[0-9]+[A-Z\s-]+$/i}
  },
  keyword: /^[\w-]+:(?=.+)/m
};
var httpLanguages = {
  "application/json": Prism.languages.javascript,
  "application/xml": Prism.languages.markup,
  "text/xml": Prism.languages.markup,
  "text/html": Prism.languages.markup
};
for (var contentType in httpLanguages) if (httpLanguages[contentType]) {
  var options = {};
  options[contentType] = {
    pattern: new RegExp("(content-type:\\s*" + contentType + "[\\w\\W]*?)\\n\\n[\\w\\W]*", "i"),
    lookbehind: !0,
    inside: {rest: httpLanguages[contentType]}
  }, Prism.languages.insertBefore("http", "keyword", options)
}
;
Prism.languages.ini = {
  comment: /^\s*;.*$/m,
  important: /\[.*?\]/m,
  constant: /^\s*[^\s=]+?(?=[ \t]*=)/m,
  "attr-value": {pattern: /=.*/m, inside: {punctuation: /^[=]/}}
};
;
Prism.languages.java = Prism.languages.extend("clike", {
  keyword: /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
  number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\b\d*\.?\d+\b/i,
  operator: {
    pattern: /(^|[^\.])(?:\+=|\+\+?|-=|--?|!=?|<{1,2}=?|>{1,3}=?|==?|&=|&&?|\|=|\|\|?|\?|\*=?|\/=?|%=?|\^=?|:|~)/m,
    lookbehind: !0
  }
});
;
Prism.languages.latex = {
  comment: /%.*?(\r?\n|$)$/m,
  string: /(\$)(\\?.)*?\1/,
  punctuation: /[{}]/,
  selector: /\\[a-z;,:\.]*/i
};
;
Prism.languages.less = Prism.languages.extend("css", {
  comment: [/\/\*[\w\W]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: !0
  }],
  atrule: {
    pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
    inside: {punctuation: /[:()]/}
  },
  selector: {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
    inside: {variable: /@+[\w-]+/}
  },
  property: /(\b|\B)(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
  punctuation: /[{}();:,]/,
  operator: /[+\-*\/]/
}), Prism.languages.insertBefore("less", "punctuation", {"function": Prism.languages.less.function}), Prism.languages.insertBefore("less", "property", {
  variable: [{
    pattern: /@[\w-]+\s*:/,
    inside: {punctuation: /:/}
  }, /@@?[\w-]+/],
  "mixin-usage": {
    pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
    lookbehind: !0,
    alias: "function"
  }
});
;
Prism.languages.matlab = {
  string: {
    pattern: /(^|\W)'(?:''|[^'\n])*'/,
    lookbehind: !0
  },
  comment: [/%\{[\s\S]*?\}%/, /%.+/],
  number: /\b-?(?:\d*\.?\d+(?:[eE][+-]?\d+)?(?:[ij])?|[ij])\b/,
  keyword: /\b(?:break|case|catch|continue|else|elseif|end|for|function|if|inf|NaN|otherwise|parfor|pause|pi|return|switch|try|while)\b/,
  "function": /(?!\d)\w+(?=\s*\()/,
  operator: /\.?[*^\/\\']|[+\-:@]|[<>=~]=?|&&?|\|\|?/,
  punctuation: /\.{3}|[.,;\[\](){}!]/
};
;
Prism.languages.objectivec = Prism.languages.extend("c", {
  keyword: /(\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b)|((?=[\w|@])(@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b)/,
  string: /(?:("|')([^\n\\\1]|\\.|\\\r*\n)*?\1)|(@"([^\n\\"]|\\.|\\\r*\n)*?")/,
  operator: /[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|@/
});
;
Prism.languages.perl = {
  comment: [{
    pattern: /((?:^|\n)\s*)=\w+[\s\S]*?=cut.*/,
    lookbehind: !0
  }, {pattern: /(^|[^\\$])#.*?(\r?\n|$)/, lookbehind: !0}],
  string: [/\b(?:q|qq|qx|qw)\s*([^a-zA-Z0-9\s\{\(\[<])(\\?.)*?\s*\1/, /\b(?:q|qq|qx|qw)\s+([a-zA-Z0-9])(\\?.)*?\s*\1/, /\b(?:q|qq|qx|qw)\s*\(([^()]|\\.)*\s*\)/, /\b(?:q|qq|qx|qw)\s*\{([^{}]|\\.)*\s*\}/, /\b(?:q|qq|qx|qw)\s*\[([^[\]]|\\.)*\s*\]/, /\b(?:q|qq|qx|qw)\s*<([^<>]|\\.)*\s*>/, /("|'|`)(\\?.)*?\1/],
  regex: [/\b(?:m|qr)\s*([^a-zA-Z0-9\s\{\(\[<])(\\?.)*?\s*\1[msixpodualgc]*/, /\b(?:m|qr)\s+([a-zA-Z0-9])(\\?.)*?\s*\1[msixpodualgc]*/, /\b(?:m|qr)\s*\(([^()]|\\.)*\s*\)[msixpodualgc]*/, /\b(?:m|qr)\s*\{([^{}]|\\.)*\s*\}[msixpodualgc]*/, /\b(?:m|qr)\s*\[([^[\]]|\\.)*\s*\][msixpodualgc]*/, /\b(?:m|qr)\s*<([^<>]|\\.)*\s*>[msixpodualgc]*/, /\b(?:s|tr|y)\s*([^a-zA-Z0-9\s\{\(\[<])(\\?.)*?\s*\1\s*((?!\1).|\\.)*\s*\1[msixpodualgcer]*/, /\b(?:s|tr|y)\s+([a-zA-Z0-9])(\\?.)*?\s*\1\s*((?!\1).|\\.)*\s*\1[msixpodualgcer]*/, /\b(?:s|tr|y)\s*\(([^()]|\\.)*\s*\)\s*\(\s*([^()]|\\.)*\s*\)[msixpodualgcer]*/, /\b(?:s|tr|y)\s*\{([^{}]|\\.)*\s*\}\s*\{\s*([^{}]|\\.)*\s*\}[msixpodualgcer]*/, /\b(?:s|tr|y)\s*\[([^[\]]|\\.)*\s*\]\s*\[\s*([^[\]]|\\.)*\s*\][msixpodualgcer]*/, /\b(?:s|tr|y)\s*<([^<>]|\\.)*\s*>\s*<\s*([^<>]|\\.)*\s*>[msixpodualgcer]*/, /\/(\[.+?]|\\.|[^\/\r\n])*\/[msixpodualgc]*(?=\s*($|[\r\n,.;})&|\-+*=~<>!?^]|(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b))/],
  variable: [/[&*\$@%]\{\^[A-Z]+\}/, /[&*\$@%]\^[A-Z_]/, /[&*\$@%]#?(?=\{)/, /[&*\$@%]#?((::)*'?(?!\d)[\w$]+)+(::)*/i, /[&*\$@%]\d+/, /[\$@%][!"#\$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~]/],
  filehandle: {pattern: /<(?!=).*>|\b_\b/, alias: "symbol"},
  vstring: {pattern: /v\d+(\.\d+)*|\d+(\.\d+){2,}/, alias: "string"},
  "function": {pattern: /sub [a-z0-9_]+/i, inside: {keyword: /sub/}},
  keyword: /\b(any|break|continue|default|delete|die|do|else|elsif|eval|for|foreach|given|goto|if|last|local|my|next|our|package|print|redo|require|say|state|sub|switch|undef|unless|until|use|when|while)\b/,
  number: /(\n|\b)-?(0x[\dA-Fa-f](_?[\dA-Fa-f])*|0b[01](_?[01])*|(\d(_?\d)*)?\.?\d(_?\d)*([Ee]-?\d+)?)\b/,
  operator: /-[rwxoRWXOezsfdlpSbctugkTBMAC]\b|[-+*=~\/|&]{1,2}|<=?|>=?|\.{1,3}|[!?\\^]|\b(lt|gt|le|ge|eq|ne|cmp|not|and|or|xor|x)\b/,
  punctuation: /[{}[\];(),:]/
};
;
Prism.languages.php = Prism.languages.extend("clike", {
  keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
  constant: /\b[A-Z0-9_]{2,}\b/,
  comment: {
    pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])(\/\/).*?(\r?\n|$))/,
    lookbehind: !0
  }
}), Prism.languages.insertBefore("php", "class-name", {
  "shell-comment": {
    pattern: /(^|[^\\])#.*?(\r?\n|$)/,
    lookbehind: !0,
    alias: "comment"
  }
}), Prism.languages.insertBefore("php", "keyword", {
  delimiter: /(\?>|<\?php|<\?)/i,
  variable: /(\$\w+)\b/i,
  "package": {
    pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
    lookbehind: !0,
    inside: {punctuation: /\\/}
  }
}), Prism.languages.insertBefore("php", "operator", {
  property: {
    pattern: /(->)[\w]+/,
    lookbehind: !0
  }
}), Prism.languages.markup && (Prism.hooks.add("before-highlight", function (e) {
  "php" === e.language && (e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi, function (n) {
    return e.tokenStack.push(n), "{{{PHP" + e.tokenStack.length + "}}}"
  }))
}), Prism.hooks.add("before-insert", function (e) {
  "php" === e.language && (e.code = e.backupCode, delete e.backupCode)
}), Prism.hooks.add("after-highlight", function (e) {
  if ("php" === e.language) {
    for (var n, a = 0; n = e.tokenStack[a]; a++) e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (a + 1) + "}}}", Prism.highlight(n, e.grammar, "php"));
    e.element.innerHTML = e.highlightedCode
  }
}), Prism.hooks.add("wrap", function (e) {
  "php" === e.language && "markup" === e.type && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'))
}), Prism.languages.insertBefore("php", "comment", {
  markup: {
    pattern: /<[^?]\/?(.*?)>/,
    inside: Prism.languages.markup
  }, php: /\{\{\{PHP[0-9]+\}\}\}/
}));
;
Prism.languages.insertBefore("php", "variable", {
  "this": /\$this/,
  global: /\$_?(GLOBALS|SERVER|GET|POST|FILES|REQUEST|SESSION|ENV|COOKIE|HTTP_RAW_POST_DATA|argc|argv|php_errormsg|http_response_header)/,
  scope: {
    pattern: /\b[\w\\]+::/,
    inside: {keyword: /(static|self|parent)/, punctuation: /(::|\\)/}
  }
});
;
Prism.languages.python = {
  comment: {
    pattern: /(^|[^\\])#.*?(\r?\n|$)/,
    lookbehind: !0
  },
  string: /"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(\\?.)*?\1/,
  keyword: /\b(as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
  "boolean": /\b(True|False)\b/,
  number: /\b-?(0[box])?(?:[\da-f]+\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  operator: /[-+]|<=?|>=?|!|={1,2}|&{1,2}|\|?\||\?|\*|\/|~|\^|%|\b(or|and|not)\b/,
  punctuation: /[{}[\];(),.:]/
};
;
Prism.languages.ruby = Prism.languages.extend("clike", {
  comment: /#[^\r\n]*(\r?\n|$)/,
  keyword: /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/,
  builtin: /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
  constant: /\b[A-Z][a-zA-Z_0-9]*[?!]?\b/
}), Prism.languages.insertBefore("ruby", "keyword", {
  regex: {
    pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,
    lookbehind: !0
  },
  variable: /[@$]+\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/,
  symbol: /:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/
});
;
Prism.languages.scss = Prism.languages.extend("css", {
  comment: {
    pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/,
    lookbehind: !0
  },
  atrule: /@[\w-]+(?=\s+(\(|\{|;))/i,
  url: /([-a-z]+-)*url(?=\()/i,
  selector: /([^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+)(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m
}), Prism.languages.insertBefore("scss", "atrule", {keyword: /@(if|else if|else|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)|(?=@for\s+\$[-_\w]+\s)+from/i}), Prism.languages.insertBefore("scss", "property", {variable: /((\$[-_\w]+)|(#\{\$[-_\w]+\}))/i}), Prism.languages.insertBefore("scss", "function", {
  placeholder: /%[-_\w]+/i,
  statement: /\B!(default|optional)\b/i,
  "boolean": /\b(true|false)\b/,
  "null": /\b(null)\b/,
  operator: /\s+([-+]{1,2}|={1,2}|!=|\|?\||\?|\*|\/|%)\s+/
});
;
Prism.languages.sql = {
  comment: {
    pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|((--)|(\/\/)|#).*?(\r?\n|$))/,
    lookbehind: !0
  },
  string: {pattern: /(^|[^@])("|')(\\?[\s\S])*?\2/, lookbehind: !0},
  variable: /@[\w.$]+|@("|'|`)(\\?[\s\S])+?\1/,
  "function": /\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,
  keyword: /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALTER|ANALYZE|APPLY|AS|ASC|AUTHORIZATION|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADE|CASCADED|CASE|CHAIN|CHAR VARYING|CHARACTER VARYING|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT|CURRENT_DATE|CURRENT_TIME|CURRENT_TIMESTAMP|CURRENT_USER|CURSOR|DATA|DATABASE|DATABASES|DATETIME|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DOUBLE PRECISION|DROP|DUMMY|DUMP|DUMPFILE|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE|ESCAPED BY|EXCEPT|EXEC|EXECUTE|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR|FOR EACH ROW|FORCE|FOREIGN|FREETEXT|FREETEXTTABLE|FROM|FULL|FUNCTION|GEOMETRY|GEOMETRYCOLLECTION|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY|IDENTITY_INSERT|IDENTITYCOL|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEY|KEYS|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONGBLOB|LONGTEXT|MATCH|MATCHED|MEDIUMBLOB|MEDIUMINT|MEDIUMTEXT|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTILINESTRING|MULTIPOINT|MULTIPOLYGON|NATIONAL|NATIONAL CHAR VARYING|NATIONAL CHARACTER|NATIONAL CHARACTER VARYING|NATIONAL VARCHAR|NATURAL|NCHAR|NCHAR VARCHAR|NEXT|NO|NO SQL|NOCHECK|NOCYCLE|NONCLUSTERED|NULLIF|NUMERIC|OF|OFF|OFFSETS|ON|OPEN|OPENDATASOURCE|OPENQUERY|OPENROWSET|OPTIMIZE|OPTION|OPTIONALLY|ORDER|OUT|OUTER|OUTFILE|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC|PROCEDURE|PUBLIC|PURGE|QUICK|RAISERROR|READ|READS SQL DATA|READTEXT|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURN|RETURNS|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROWCOUNT|ROWGUIDCOL|ROWS?|RTREE|RULE|SAVE|SAVEPOINT|SCHEMA|SELECT|SERIAL|SERIALIZABLE|SESSION|SESSION_USER|SET|SETUSER|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START|STARTING BY|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLE|TABLES|TABLESPACE|TEMP(?:ORARY)?|TEMPTABLE|TERMINATED BY|TEXT|TEXTSIZE|THEN|TIMESTAMP|TINYBLOB|TINYINT|TINYTEXT|TO|TOP|TRAN|TRANSACTION|TRANSACTIONS|TRIGGER|TRUNCATE|TSEQUAL|TYPE|TYPES|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNPIVOT|UPDATE|UPDATETEXT|USAGE|USE|USER|USING|VALUE|VALUES|VARBINARY|VARCHAR|VARCHARACTER|VARYING|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH|WITH ROLLUP|WITHIN|WORK|WRITE|WRITETEXT)\b/i,
  "boolean": /\b(?:TRUE|FALSE|NULL)\b/i,
  number: /\b-?(0x)?\d*\.?[\da-f]+\b/,
  operator: /\b(?:ALL|AND|ANY|BETWEEN|EXISTS|IN|LIKE|NOT|OR|IS|UNIQUE|CHARACTER SET|COLLATE|DIV|OFFSET|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b|[-+]|!|[=<>]{1,2}|(&){1,2}|\|?\||\?|\*|\//i,
  punctuation: /[;[\]()`,.]/
};
;
Prism.languages.swift = Prism.languages.extend("clike", {
  keyword: /\b(as|associativity|break|case|class|continue|convenience|default|deinit|didSet|do|dynamicType|else|enum|extension|fallthrough|final|for|func|get|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|required|return|right|safe|self|Self|set|static|struct|subscript|super|switch|Type|typealias|unowned|unowned|unsafe|var|weak|where|while|willSet|__COLUMN__|__FILE__|__FUNCTION__|__LINE__)\b/,
  number: /\b([\d_]+(\.[\de_]+)?|0x[a-f0-9_]+(\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
  constant: /\b(nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
  atrule: /@\b(IBOutlet|IBDesignable|IBAction|IBInspectable|class_protocol|exported|noreturn|NSCopying|NSManaged|objc|UIApplicationMain|auto_closure)\b/,
  builtin: /\b([A-Z]\S+|abs|advance|alignof|alignofValue|assert|contains|count|countElements|debugPrint|debugPrintln|distance|dropFirst|dropLast|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lazy|lexicographicalCompare|map|max|maxElement|min|minElement|numericCast|overlaps|partition|prefix|print|println|reduce|reflect|reverse|sizeof|sizeofValue|sort|sorted|split|startsWith|stride|strideof|strideofValue|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|withExtendedLifetime|withUnsafeMutablePointer|withUnsafeMutablePointers|withUnsafePointer|withUnsafePointers|withVaList)\b/
});
;
Prism.hooks.add("after-highlight", function (e) {
  var t = e.element.parentNode, s = /\s*\bline-numbers\b\s*/;
  if (t && /pre/i.test(t.nodeName) && (s.test(t.className) || s.test(e.element.className))) {
    s.test(e.element.className) && (e.element.className = e.element.className.replace(s, "")), s.test(t.className) || (t.className += " line-numbers");
    var a, n = 1 + e.code.split("\n").length, l = new Array(n);
    l = l.join("<span></span>"), a = document.createElement("span"), a.className = "line-numbers-rows", a.innerHTML = l, t.hasAttribute("data-start") && (t.style.counterReset = "linenumber " + (parseInt(t.getAttribute("data-start"), 10) - 1)), e.element.appendChild(a)
  }
});
;
!function () {
  if (self.Prism) {
    var e = {csharp: "C#", cpp: "C++"};
    Prism.hooks.add("before-highlight", function (a) {
      var t = a.element.parentNode;
      if (t && /pre/i.test(t.nodeName)) {
        var i = e[a.language] || a.language;
        t.setAttribute("data-language", i)
      }
    })
  }
}();
;


/*
 *  YTPlayer
 * -----------------------------------------------
*/
function onYouTubePlayerAPIReady() {
  ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}

var ytp = ytp || {};
!function (jQuery, ytp) {
  var nAgt = navigator.userAgent;
  if (!jQuery.browser) {
    jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;
    if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident")) {
      jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
      var start = nAgt.indexOf("rv:") + 3, end = start + 4;
      jQuery.browser.fullVersion = nAgt.substring(start, end)
    } else -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
    -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
  }
  jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.fn.CSSAnimate = function (a, b, c, d, e) {
    function f(a) {
      return a.replace(/([A-Z])/g, function (a) {
        return "-" + a.toLowerCase()
      })
    }

    function g(a, b) {
      return "string" != typeof a || a.match(/^[\-0-9\.]+$/) ? "" + a + b : a
    }

    return jQuery.support.CSStransition = function () {
      var a = (document.body || document.documentElement).style;
      return void 0 !== a.transition || void 0 !== a.WebkitTransition || void 0 !== a.MozTransition || void 0 !== a.MsTransition || void 0 !== a.OTransition
    }(), this.each(function () {
      var h = this, i = jQuery(this);
      h.id = h.id || "CSSA_" + (new Date).getTime();
      var j = j || {type: "noEvent"};
      if (h.CSSAIsRunning && h.eventType == j.type) h.CSSqueue = function () {
        i.CSSAnimate(a, b, c, d, e)
      }; else if (h.CSSqueue = null, h.eventType = j.type, 0 !== i.length && a) {
        if (h.CSSAIsRunning = !0, "function" == typeof b && (e = b, b = jQuery.fx.speeds._default), "function" == typeof c && (e = c, c = 0), "function" == typeof d && (e = d, d = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof b) for (var k in jQuery.fx.speeds) {
          if (b == k) {
            b = jQuery.fx.speeds[k];
            break
          }
          b = jQuery.fx.speeds._default
        }
        if (b || (b = jQuery.fx.speeds._default), jQuery.support.CSStransition) {
          j = {
            "default": "ease",
            "in": "ease-in",
            out: "ease-out",
            "in-out": "ease-in-out",
            snap: "cubic-bezier(0,1,.5,1)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
          }, j[d] && (d = j[d]);
          var l = "", m = "transitionEnd";
          jQuery.browser.webkit ? (l = "-webkit-", m = "webkitTransitionEnd") : jQuery.browser.mozilla ? (l = "-moz-", m = "transitionend") : jQuery.browser.opera ? (l = "-o-", m = "otransitionend") : jQuery.browser.msie && (l = "-ms-", m = "msTransitionEnd"), j = [];
          for (n in a) k = n, "transform" === k && (k = l + "transform", a[k] = a[n], delete a[n]), "filter" === k && (k = l + "filter", a[k] = a[n], delete a[n]), ("transform-origin" === k || "origin" === k) && (k = l + "transform-origin", a[k] = a[n], delete a[n]), "x" === k && (k = l + "transform", a[k] = a[k] || "", a[k] += " translateX(" + g(a[n], "px") + ")", delete a[n]), "y" === k && (k = l + "transform", a[k] = a[k] || "", a[k] += " translateY(" + g(a[n], "px") + ")", delete a[n]), "z" === k && (k = l + "transform", a[k] = a[k] || "", a[k] += " translateZ(" + g(a[n], "px") + ")", delete a[n]), "rotate" === k && (k = l + "transform", a[k] = a[k] || "", a[k] += " rotate(" + g(a[n], "deg") + ")", delete a[n]), "rotateX" === k && (k = l + "transform", a[k] = a[k] || "", a[k] += " rotateX(" + g(a[n], "deg") + ")", delete a[n]), "rotateY" === k && (k = l + "transform", a[k] = a[k] || "", a[k] += " rotateY(" + g(a[n], "deg") + ")", delete a[n]), "rotateZ" === k && (k = l + "transform", a[k] = a[k] || "", a[k] += " rotateZ(" + g(a[n], "deg") + ")", delete a[n]), "scale" === k && (k = l + "transform", a[k] = a[k] || "", a[k] += " scale(" + g(a[n], "") + ")", delete a[n]), "scaleX" === k && (k = l + "transform", a[k] = a[k] || "", a[k] += " scaleX(" + g(a[n], "") + ")", delete a[n]), "scaleY" === k && (k = l + "transform", a[k] = a[k] || "", a[k] += " scaleY(" + g(a[n], "") + ")", delete a[n]), "scaleZ" === k && (k = l + "transform", a[k] = a[k] || "", a[k] += " scaleZ(" + g(a[n], "") + ")", delete a[n]), "skew" === k && (k = l + "transform", a[k] = a[k] || "", a[k] += " skew(" + g(a[n], "deg") + ")", delete a[n]), "skewX" === k && (k = l + "transform", a[k] = a[k] || "", a[k] += " skewX(" + g(a[n], "deg") + ")", delete a[n]), "skewY" === k && (k = l + "transform", a[k] = a[k] || "", a[k] += " skewY(" + g(a[n], "deg") + ")", delete a[n]), "perspective" === k && (k = l + "transform", a[k] = a[k] || "", a[k] += " perspective(" + g(a[n], "px") + ")", delete a[n]), 0 > j.indexOf(k) && j.push(f(k));
          var n = j.join(","), o = function () {
            i.off(m + "." + h.id), clearTimeout(h.timeout), i.css(l + "transition", ""), "function" == typeof e && e(i), h.called = !0, h.CSSAIsRunning = !1, "function" == typeof h.CSSqueue && (h.CSSqueue(), h.CSSqueue = null)
          }, p = {};
          jQuery.extend(p, a), p[l + "transition-property"] = n, p[l + "transition-duration"] = b + "ms", p[l + "transition-delay"] = c + "ms", p[l + "transition-style"] = "preserve-3d", p[l + "transition-timing-function"] = d, setTimeout(function () {
            i.one(m + "." + h.id, o), i.css(p)
          }, 1), h.timeout = setTimeout(function () {
            i.called || !e ? (i.called = !1, h.CSSAIsRunning = !1) : (i.css(l + "transition", ""), e(i), h.CSSAIsRunning = !1, "function" == typeof h.CSSqueue && (h.CSSqueue(), h.CSSqueue = null))
          }, b + c + 100)
        } else {
          for (var n in a) "transform" === n && delete a[n], "filter" === n && delete a[n], "transform-origin" === n && delete a[n], "auto" === a[n] && delete a[n];
          e && "string" != typeof e || (e = "linear"), i.animate(a, b, e)
        }
      }
    })
  };
  var getYTPVideoID = function (a) {
    var b, c;
    return a.indexOf("youtu.be") > 0 ? (b = a.substr(a.lastIndexOf("/") + 1, a.length), c = b.indexOf("?list=") > 0 ? b.substr(b.lastIndexOf("="), b.length) : null, b = c ? b.substr(0, b.lastIndexOf("?")) : b) : a.indexOf("http") > -1 ? (b = a.match(/[\\?&]v=([^&#]*)/)[1], c = a.indexOf("list=") > 0 ? a.match(/[\\?&]list=([^&#]*)/)[1] : null) : (b = a.length > 15 ? null : a, c = b ? null : a), {
      videoID: b,
      playlistID: c
    }
  };
  jQuery.mbYTPlayer = {
    name: "jquery.mb.YTPlayer",
    version: "2.7.6",
    author: "Matteo Bicocchi",
    defaults: {
      containment: "body",
      ratio: "16/9",
      videoURL: null,
      playlistURL: null,
      startAt: 0,
      stopAt: 0,
      autoPlay: !0,
      vol: 100,
      addRaster: !1,
      opacity: 1,
      quality: "default",
      mute: !1,
      loop: !0,
      showControls: !0,
      showAnnotations: !1,
      showYTLogo: !0,
      stopMovieOnClick: !1,
      stopMovieOnBlur: !0,
      realfullscreen: !0,
      gaTrack: !0,
      onReady: function () {
      }
    },
    controls: {
      play: "P",
      pause: "p",
      mute: "M",
      unmute: "A",
      onlyYT: "O",
      showSite: "R",
      ytLogo: "Y"
    },
    locationProtocol: "https:",
    buildPlayer: function (options) {
      return this.each(function () {
        var YTPlayer = this, $YTPlayer = jQuery(YTPlayer);
        YTPlayer.loop = 0, YTPlayer.opt = {}, $YTPlayer.addClass("mb_YTPlayer");
        var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
        "undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 == property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property);
        var canGoFullscreen = !(jQuery.browser.msie || jQuery.browser.opera || self.location.href != top.location.href);
        canGoFullscreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (new Date).getTime());
        var playerID = "mbYTP_" + YTPlayer.id;
        YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0;
        var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : !1,
          playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : !1;
        YTPlayer.videoID = videoID, YTPlayer.playlistID = playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
        var playerVars = {
          autoplay: 0,
          modestbranding: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          version: 3,
          playerapiid: playerID,
          origin: "*",
          allowfullscreen: !0,
          wmode: "transparent",
          iv_load_policy: YTPlayer.opt.showAnnotations
        }, canPlayHTML5 = !1, v = document.createElement("video");
        v.canPlayType && (canPlayHTML5 = !0), canPlayHTML5 && jQuery.extend(playerVars, {html5: 1}), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
        var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"),
          overlay = jQuery("<div/>").css({
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }).addClass("YTPOverlay");
        if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.opt.containment = "self" == YTPlayer.opt.containment ? jQuery(this) : jQuery(YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
          var isPlayer = YTPlayer.opt.containment.is(jQuery(this)) && 0 == jQuery(this).children().length;
          if (isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide(), jQuery.browser.mobile && YTPlayer.isBackground) return $YTPlayer.remove(), void 0;
          if (YTPlayer.opt.addRaster) {
            var classN = "dot" == YTPlayer.opt.addRaster ? "raster-dot" : "raster",
              retina = window.retina || window.devicePixelRatio > 1;
            overlay.addClass(retina ? classN + " retina" : classN)
          } else overlay.removeClass(function (a, b) {
            var c = b.split(" "), d = [];
            return jQuery.each(c, function (a, b) {
              /raster-.*/.test(b) && d.push(b)
            }), d.push("retina"), d.join(" ")
          });
          var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
          if (wrapper.css({
            position: "absolute",
            zIndex: 0,
            minWidth: "100%",
            minHeight: "100%",
            left: 0,
            top: 0,
            overflow: "hidden",
            opacity: 0
          }), playerBox.css({
            position: "absolute",
            zIndex: 0,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            overflow: "hidden"
          }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function () {
            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
          }), YTPlayer.isBackground ? (jQuery("body").css({
            position: "absolute",
            minWidth: "100%",
            minHeight: "100%",
            zIndex: 1,
            boxSizing: "border-box"
          }), wrapper.css({
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 0,
            webkitTransform: "translateZ(0)"
          }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({position: "relative"}), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({opacity: 1}), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function () {
            $YTPlayer.find(".mb_YTPBar").addClass("visible")
          }).on("mouseleave", function () {
            $YTPlayer.find(".mb_YTPBar").removeClass("visible")
          }), ytp.YTAPIReady) setTimeout(function () {
            jQuery(document).trigger("YTAPIReady")
          }, 100); else {
            jQuery("#YTAPI").remove();
            var tag = jQuery("<script></script>").attr({
              src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/player_api?v=" + jQuery.mbYTPlayer.version,
              id: "YTAPI"
            });
            jQuery("head title").after(tag)
          }
          jQuery(document).on("YTAPIReady", function () {
            YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && YTPlayer.opt.stopMovieOnClick && jQuery(document).off("mousedown.ytplayer").on("mousedown,.ytplayer", function (a) {
              var b = jQuery(a.target);
              (b.is("a") || b.parents().is("a")) && $YTPlayer.pauseYTP()
            }), YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? YTPlayer.isBackground ? !0 : !1 : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromFeed(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function () {
              return YTPlayer.isInit ? void 0 : (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.isPlayer ? (new YT.Player(playerID, {
                videoId: YTPlayer.videoID.toString(),
                height: "100%",
                width: "100%",
                videoId: YTPlayer.videoID,
                events: {
                  onReady: function (a) {
                    YTPlayer.player = a.target, playerBox.css({opacity: 1}), YTPlayer.wrapper.css({opacity: YTPlayer.opt.opacity}), $YTPlayer.optimizeDisplay()
                  }, onStateChange: function () {
                  }
                }
              }), void 0) : (new YT.Player(playerID, {
                videoId: YTPlayer.videoID.toString(),
                playerVars: playerVars,
                events: {
                  onReady: function (a) {
                    if (YTPlayer.player = a.target, !YTPlayer.isReady) {
                      YTPlayer.isReady = !0, YTPlayer.playerEl = YTPlayer.player.getIframe(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).on("resize.YTP", function () {
                        $YTPlayer.optimizeDisplay()
                      }), YTPlayer.opt.showControls && jQuery(YTPlayer).buildYTPControls();
                      var b = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                      YTPlayer.player.setVolume(0), jQuery(YTPlayer).muteYTPVolume(), jQuery.mbYTPlayer.checkForState(YTPlayer), YTPlayer.checkForStartAt = setInterval(function () {
                        var a = YTPlayer.player.getVideoLoadedFraction() > b / YTPlayer.player.getDuration();
                        YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= b && a ? (clearInterval(YTPlayer.checkForStartAt), YTPlayer.player.setVolume(0), jQuery(YTPlayer).muteYTPVolume(), "function" == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady(YTPlayer), YTPlayer.opt.mute || jQuery(YTPlayer).unmuteYTP(), jQuery.mbYTPlayer.checkForState(YTPlayer), YTPlayer.player.pauseVideo(), setTimeout(function () {
                          YTPlayer.canTrigger = !0, YTPlayer.opt.autoPlay ? ($YTPlayer.playYTP(), $YTPlayer.css("background-image", "none"), YTPlayer.wrapper.CSSAnimate({opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity}, 2e3)) : YTPlayer.player.pauseVideo()
                        }, 100)) : (YTPlayer.player.playVideo(), YTPlayer.player.seekTo(b, !0))
                      }, jQuery.browser.chrome ? 1e3 : 1)
                    }
                  }, onStateChange: function (event) {
                    if ("function" == typeof event.target.getPlayerState) {
                      var state = event.target.getPlayerState();
                      if (YTPlayer.state != state) {
                        YTPlayer.state = state;
                        var controls = jQuery("#controlBar_" + YTPlayer.id),
                          data = YTPlayer.opt, eventType;
                        switch (state) {
                          case-1:
                            eventType = "YTPUnstarted";
                            break;
                          case 0:
                            eventType = "YTPEnd", YTPlayer.player.pauseVideo();
                            var startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                            data.loop ? (YTPlayer.wrapper.css({opacity: 0}), $YTPlayer.playYTP(), YTPlayer.player.seekTo(startAt, !0)) : YTPlayer.isBackground || (YTPlayer.player.seekTo(startAt, !0), $YTPlayer.playYTP(), setTimeout(function () {
                              $YTPlayer.pauseYTP()
                            }, 10)), !data.loop && YTPlayer.isBackground ? YTPlayer.wrapper.CSSAnimate({opacity: 0}, 2e3) : data.loop && YTPlayer.loop++, controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                            break;
                          case 1:
                            eventType = "YTPStart", jQuery.browser.chrome || YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.videoTitle || YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.videoTitle || YTPlayer.videoID.toString());
                            break;
                          case 2:
                            eventType = "YTPPause", controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                            break;
                          case 3:
                            eventType = "YTPBuffering", jQuery.browser.chrome || YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), controls.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                            break;
                          case 5:
                            eventType = "YTPCued"
                        }
                        var YTPevent = jQuery.Event(eventType);
                        YTPevent.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPevent)
                      }
                    }
                  }, onPlaybackQualityChange: function (a) {
                    var b = a.target.getPlaybackQuality(),
                      c = jQuery.Event("YTPQualityChange");
                    c.quality = b, jQuery(YTPlayer).trigger(c)
                  }, onError: function (a) {
                    150 == a.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == a.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, a)
                  }
                }
              }), void 0))
            }))
          })
        }
      })
    },
    getDataFromFeed: function (a) {
      jQuery.browser.msie && jQuery.browser.version <= 9 ? ("auto" == a.opt.ratio ? a.opt.ratio = "16/9" : a.opt.ratio, a.hasData || (a.hasData = !0, setTimeout(function () {
        jQuery(a).trigger("YTPChanged")
      }, 100))) : (jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//gdata.youtube.com/feeds/api/videos/" + a.videoID + "?v=2&alt=jsonc", function (b) {
        a.dataReceived = !0, a.videoData = b.data, jQuery(a).trigger("YTPChanged");
        var e = jQuery.Event("YTPData");
        e.prop = {};
        for (var f in a.videoData) e.prop[f] = a.videoData[f];
        if (jQuery(a).trigger(e), a.videoTitle = a.videoData.title, "auto" == a.opt.ratio && (a.opt.ratio = a.videoData.aspectRatio && "widescreen" === a.videoData.aspectRatio ? "16/9" : "4/3"), !a.hasData && (a.hasData = !0, a.isPlayer)) {
          var g = a.videoData.thumbnail.hqDefault;
          a.opt.containment.css({
            background: "rgba(0,0,0,0.5) url(" + g + ") center center",
            backgroundSize: "cover"
          })
        }
      }), setTimeout(function () {
        a.dataReceived || a.hasData || (a.hasData = !0, jQuery(a).trigger("YTPChanged"))
      }, 1500))
    },
    getVideoData: function () {
      var a = this.get(0);
      return a.videoData
    },
    getVideoID: function () {
      var a = this.get(0);
      return a.videoID || !1
    },
    setVideoQuality: function (a) {
      var b = this.get(0);
      jQuery.browser.chrome || b.player.setPlaybackQuality(a)
    },
    YTPlaylist: function (a, b, c) {
      var d = this.get(0);
      d.isPlayList = !0, b && (a = jQuery.shuffle(a)), d.videoID || (d.videos = a, d.videoCounter = 0, d.videoLength = a.length, jQuery(d).data("property", a[0]), jQuery(d).mb_YTPlayer()), "function" == typeof c && jQuery(d).on("YTPChanged", function () {
        c(d)
      }), jQuery(d).on("YTPEnd", function () {
        jQuery(d).playNext()
      })
    },
    playNext: function () {
      var a = this.get(0);
      a.videoCounter++, a.videoCounter >= a.videoLength && (a.videoCounter = 0), jQuery(a.playerEl).css({opacity: 0}), jQuery(a).changeMovie(a.videos[a.videoCounter])
    },
    playPrev: function () {
      var a = this.get(0);
      a.videoCounter--, a.videoCounter < 0 && (a.videoCounter = a.videoLength - 1), jQuery(a.playerEl).css({opacity: 0}), jQuery(a).changeMovie(a.videos[a.videoCounter])
    },
    changeMovie: function (a) {
      var b = this.get(0);
      b.opt.startAt = 0, b.opt.stopAt = 0, b.opt.mute = !0, a && jQuery.extend(b.opt, a), b.videoID = getYTPVideoID(b.opt.videoURL).videoID, jQuery(b).pauseYTP();
      var c = jQuery.browser.msie ? 1e3 : 0;
      if (jQuery(b.playerEl).CSSAnimate({opacity: 0}, c), setTimeout(function () {
        var a = jQuery.browser.chrome ? "default" : b.opt.quality;
        jQuery(b).getPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + b.videoID), 1, a), jQuery(b).playYTP(), jQuery(b).one("YTPStart", function () {
          b.wrapper.CSSAnimate({opacity: b.isAlone ? 1 : b.opt.opacity}, 1e3), jQuery(b.playerEl).CSSAnimate({opacity: 1}, c), b.opt.startAt && b.player.seekTo(b.opt.startAt), jQuery.mbYTPlayer.checkForState(b), b.opt.autoPlay || jQuery(b).pauseYTP()
        }), b.opt.mute ? jQuery(b).muteYTPVolume() : jQuery(b).unmuteYTP()
      }, c), b.opt.addRaster) {
        var d = window.retina || window.devicePixelRatio > 1;
        b.overlay.addClass(d ? "raster retina" : "raster")
      } else b.overlay.removeClass("raster"), b.overlay.removeClass("retina");
      jQuery("#controlBar_" + b.id).remove(), b.opt.showControls && jQuery(b).buildYTPControls(), jQuery.mbYTPlayer.getDataFromFeed(b), jQuery(b).optimizeDisplay()
    },
    getPlayer: function () {
      return jQuery(this).get(0).player
    },
    playerDestroy: function () {
      var a = this.get(0);
      ytp.YTAPIReady = !1, ytp.backgroundIsInited = !1, a.isInit = !1, a.videoID = null;
      var b = a.wrapper;
      b.remove(), jQuery("#controlBar_" + a.id).remove()
    },
    fullscreen: function (real) {
      function RunPrefixMethod(a, b) {
        for (var e, f, c = ["webkit", "moz", "ms", "o", ""], d = 0; d < c.length && !a[e];) {
          if (e = b, "" == c[d] && (e = e.substr(0, 1).toLowerCase() + e.substr(1)), e = c[d] + e, f = typeof a[e], "undefined" != f) return c = [c[d]], "function" == f ? a[e]() : a[e];
          d++
        }
      }

      function launchFullscreen(a) {
        RunPrefixMethod(a, "RequestFullScreen")
      }

      function cancelFullscreen() {
        (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
      }

      var YTPlayer = this.get(0);
      "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
      var controls = jQuery("#controlBar_" + YTPlayer.id),
        fullScreenBtn = controls.find(".mb_OnlyYT"),
        videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
      if (real) {
        var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
        jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
          var a = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
          a ? (jQuery(YTPlayer).setVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).setVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("fullscreen"), videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 500), videoWrapper.css({zIndex: 0}), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
        })
      }
      YTPlayer.isAlone ? (real ? cancelFullscreen() : (videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 500), videoWrapper.css({zIndex: 0})), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (real ? (videoWrapper.css({opacity: 0}), videoWrapper.addClass("fullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () {
        videoWrapper.CSSAnimate({opacity: 1}, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
      }, 500)) : videoWrapper.css({zIndex: 1e4}).CSSAnimate({opacity: 1}, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0)
    },
    playYTP: function () {
      var a = this.get(0);
      if ("undefined" != typeof a.player) {
        var b = jQuery("#controlBar_" + a.id), c = b.find(".mb_YTPPlaypause");
        c.html(jQuery.mbYTPlayer.controls.pause), a.player.playVideo(), a.wrapper.CSSAnimate({opacity: a.isAlone ? 1 : a.opt.opacity}, 2e3), jQuery(a).on("YTPStart", function () {
          jQuery(a).css("background-image", "none")
        })
      }
    },
    toggleLoops: function () {
      var a = this.get(0), b = a.opt;
      1 == b.loop ? b.loop = 0 : (b.startAt ? a.player.seekTo(b.startAt) : a.player.playVideo(), b.loop = 1)
    },
    stopYTP: function () {
      var a = this.get(0), b = jQuery("#controlBar_" + a.id),
        c = b.find(".mb_YTPPlaypause");
      c.html(jQuery.mbYTPlayer.controls.play), a.player.stopVideo()
    },
    pauseYTP: function () {
      var a = this.get(0);
      a.opt;
      var c = jQuery("#controlBar_" + a.id), d = c.find(".mb_YTPPlaypause");
      d.html(jQuery.mbYTPlayer.controls.play), a.player.pauseVideo()
    },
    seekToYTP: function (a) {
      var b = this.get(0);
      b.player.seekTo(a, !0)
    },
    setYTPVolume: function (a) {
      var b = this.get(0);
      a || b.opt.vol || 0 != b.player.getVolume() ? !a && b.player.getVolume() > 0 || a && b.player.getVolume() == a ? jQuery(b).muteYTPVolume() : b.opt.vol = a : jQuery(b).unmuteYTP(), b.player.setVolume(b.opt.vol)
    },
    muteYTP: function () {
      var a = this.get(0);
      a.player.mute(), a.player.setVolume(0);
      var b = jQuery("#controlBar_" + a.id), c = b.find(".mb_YTPMuteUnmute");
      c.html(jQuery.mbYTPlayer.controls.unmute), jQuery(a).addClass("isMuted"), jQuery(a).trigger("YTPMuted")
    },
    unmuteYTP: function () {
      var a = this.get(0);
      a.player.unMute(), a.player.setVolume(a.opt.vol);
      var b = jQuery("#controlBar_" + a.id), c = b.find(".mb_YTPMuteUnmute");
      c.html(jQuery.mbYTPlayer.controls.mute), jQuery(a).removeClass("isMuted"), jQuery(a).trigger("YTPUnmuted")
    },
    manageYTPProgress: function () {
      var a = this.get(0), b = jQuery("#controlBar_" + a.id),
        c = b.find(".mb_YTPProgress"), d = b.find(".mb_YTPLoaded"),
        e = b.find(".mb_YTPseekbar"), f = c.outerWidth(),
        g = Math.floor(a.player.getCurrentTime()),
        h = Math.floor(a.player.getDuration()), i = g * f / h, j = 0,
        k = 100 * a.player.getVideoLoadedFraction();
      return d.css({left: j, width: k + "%"}), e.css({
        left: 0,
        width: i
      }), {totalTime: h, currentTime: g}
    },
    buildYTPControls: function () {
      var YTPlayer = this.get(0), data = YTPlayer.opt;
      if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
        var controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
            whiteSpace: "noWrap",
            position: YTPlayer.isBackground ? "fixed" : "absolute",
            zIndex: YTPlayer.isBackground ? 1e4 : 1e3
          }).hide(), buttonBar = jQuery("<div/>").addClass("buttonBar"),
          playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function () {
            1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).pauseYTP() : jQuery(YTPlayer).playYTP()
          }),
          MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function () {
            0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).unmuteYTP() : jQuery(YTPlayer).muteYTP()
          }), idx = jQuery("<span/>").addClass("mb_YTPTime"),
          vURL = data.videoURL ? data.videoURL : "";
        vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
        var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
            window.open(vURL, "viewOnYT")
          }),
          onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () {
            jQuery(YTPlayer).fullscreen(data.realfullscreen)
          }),
          progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function (a) {
            timeBar.css({width: a.clientX - timeBar.offset().left}), YTPlayer.timeW = a.clientX - timeBar.offset().left, controlBar.find(".mb_YTPLoaded").css({width: 0});
            var b = Math.floor(YTPlayer.player.getDuration());
            YTPlayer.goto = timeBar.outerWidth() * b / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer.goto), !0), controlBar.find(".mb_YTPLoaded").css({width: 0})
          }),
          loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
          timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
        progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(controlBar) : (controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(controlBar)), controlBar.fadeIn()
      }
    },
    checkForState: function (a) {
      var b = a.opt.showControls ? 10 : 1e3;
      clearInterval(a.getState), a.getState = setInterval(function () {
        var b = jQuery(a).manageYTPProgress(), c = jQuery(a),
          d = jQuery("#controlBar_" + a.id), e = a.opt,
          f = a.opt.startAt ? a.opt.startAt : 1,
          g = a.opt.stopAt > a.opt.startAt ? a.opt.stopAt : 0;
        if (g = g < a.player.getDuration() ? g : 0, a.player.time != b.currentTime) {
          var h = jQuery.Event("YTPTime");
          h.time = a.player.time, jQuery(a).trigger(h)
        }
        if (a.player.time = b.currentTime, 0 == a.player.getVolume() ? c.addClass("isMuted") : c.removeClass("isMuted"), a.opt.showControls && (b.totalTime ? d.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(b.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(b.totalTime)) : d.find(".mb_YTPTime").html("-- : -- / -- : --")), a.opt.stopMovieOnBlur && (document.hasFocus() ? document.hasFocus() && !a.hasFocus && (a.hasFocus = !0, c.playYTP()) : 1 == a.state && (a.hasFocus = !1, c.pauseYTP())), 1 == a.player.getPlayerState() && (parseFloat(a.player.getDuration() - 3) < a.player.getCurrentTime() || g > 0 && parseFloat(a.player.getCurrentTime()) > g)) {
          if (a.isEnded) return;
          if (a.isEnded = !0, setTimeout(function () {
            a.isEnded = !1
          }, 2e3), a.isPlayList) {
            clearInterval(a.getState);
            var i = jQuery.Event("YTPEnd");
            return i.time = a.player.time, jQuery(a).trigger(i), void 0
          }
          e.loop ? a.player.seekTo(f, !0) : (a.player.pauseVideo(), a.wrapper.CSSAnimate({opacity: 0}, 1e3, function () {
            var b = jQuery.Event("YTPEnd");
            if (b.time = a.player.time, jQuery(a).trigger(b), a.player.seekTo(f, !0), !a.isBackground) {
              var c = a.videoData.thumbnail.hqDefault;
              jQuery(a).css({
                background: "rgba(0,0,0,0.5) url(" + c + ") center center",
                backgroundSize: "cover"
              })
            }
          }))
        }
      }, b)
    },
    formatTime: function (a) {
      var b = Math.floor(a / 60), c = Math.floor(a - 60 * b);
      return (9 >= b ? "0" + b : b) + " : " + (9 >= c ? "0" + c : c)
    }
  }, jQuery.fn.toggleVolume = function () {
    var a = this.get(0);
    if (a) return a.player.isMuted() ? (jQuery(a).unmuteYTP(), !0) : (jQuery(a).muteYTP(), !1)
  }, jQuery.fn.optimizeDisplay = function () {
    var a = this.get(0), b = a.opt, c = jQuery(a.playerEl), d = {},
      e = a.wrapper;
    d.width = e.outerWidth(), d.height = e.outerHeight();
    var f = 24, g = 100, h = {};
    h.width = d.width + d.width * f / 100, h.height = "16/9" == b.ratio ? Math.ceil(9 * d.width / 16) : Math.ceil(3 * d.width / 4), h.marginTop = -((h.height - d.height) / 2), h.marginLeft = -(d.width * (f / 2) / 100), h.height < d.height && (h.height = d.height + d.height * f / 100, h.width = "16/9" == b.ratio ? Math.floor(16 * d.height / 9) : Math.floor(4 * d.height / 3), h.marginTop = -(d.height * (f / 2) / 100), h.marginLeft = -((h.width - d.width) / 2)), h.width += g, h.height += g, h.marginTop -= g / 2, h.marginLeft -= g / 2, c.css({
      width: h.width,
      height: h.height,
      marginTop: h.marginTop,
      marginLeft: h.marginLeft
    })
  }, jQuery.shuffle = function (a) {
    for (var b = a.slice(), c = b.length, d = c; d--;) {
      var e = parseInt(Math.random() * c), f = b[d];
      b[d] = b[e], b[e] = f
    }
    return b
  }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.YTPlaylist, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildYTPControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.playYTP, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stopYTP, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pauseYTP, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekToYTP, jQuery.fn.muteYTP = jQuery.mbYTPlayer.muteYTP, jQuery.fn.unmuteYTP = jQuery.mbYTPlayer.unmuteYTP, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setYTPVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageYTPProgress, jQuery.fn.getDataFromFeed = jQuery.mbYTPlayer.getVideoData, jQuery.fn.mb_YTPlayer = jQuery.fn.YTPlayer, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.muteYTP, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmuteYTP
}(jQuery, ytp);

/*
 *  CountDown Timer
 * -----------------------------------------------
*/

/* Soon v1.8.4 - Soon, Animated Responsive Countdowns, jQuery
 * Copyright (c) 2015 Rik Schennink - http://rikschennink.nl/products/soon
 */

!function (a, b, c) {
  function d() {
    H !== window.innerWidth && (H = window.innerWidth, g())
  }

  function e(a, b, c, d) {
    var e = parseInt(getComputedStyle(document.documentElement).fontSize, 10) / 16,
      f = parseInt(getComputedStyle(b).fontSize, 10) / 16 / e,
      g = d / b.scrollWidth, h = g * f;
    return 4 > h ? (a.style.fontSize = "", c.redraw(), !1) : (a.style.fontSize = h + "rem", a.setAttribute("data-scale-rounded", Math.round(h).toString()), c.redraw(), !0)
  }

  function f(a, b) {
    if (!B.isSlow()) {
      for (var c, d, f = window.getComputedStyle(a.parentNode), g = parseInt(f.getPropertyValue("padding-left"), 10), h = parseInt(f.getPropertyValue("padding-right"), 10), i = a.parentNode.clientWidth - g - h, j = a.getAttribute("data-scale-max"), k = a.getAttribute("data-scale-hide"), l = j ? I.indexOf(j) : J, m = a.querySelectorAll(".soon-group-sub"), n = 0, o = m.length, p = a.querySelector(".soon-group"); o > n; n++) m[n].style.display = "";
      if ("fit" === j || "fill" === j) {
        if (e(a, p, b, i)) return;
        l = 0
      }
      c = l;
      do a.setAttribute("data-scale", I[c]), c++; while (p.scrollWidth > i && I[c]);
      if (c !== l && b.redraw(), !(p.scrollWidth <= i || "none" === k)) {
        n = 0, d = !1;
        do {
          if ("0" !== m[n].getAttribute("data-value")) break;
          m[n].style.display = "none", d = !0, n++
        } while (p.scrollWidth > i && o > n);
        if (d && b.redraw(), "empty" !== k) {
          n = o - 1, d = !1;
          do m[n].style.display = "none", d = !0, n--; while (p.scrollWidth > i && n > 0);
          d && b.redraw()
        }
      }
    }
  }

  function g() {
    for (var a = K.length - 1; a >= 0; a--) f(K[a].node, K[a].presenter)
  }

  function h(a) {
    for (var b = 0, c = K.length; c > b; b++) if (K[b].node === a) return b;
    return null
  }

  function i(a) {
    for (var b = 0, c = L.length; c > b; b++) if (L[b].node === a) return b;
    return null
  }

  function j(a) {
    var b = h(a);
    return null === b ? null : K[b]
  }

  function k(a) {
    -1 === a.className.indexOf("soon") && (a.className += " soon"), B.supportsAnimation() || (a.className += " soon-no-animation");
    var b = a.getAttribute("data-layout");
    (!b || -1 === b.indexOf("group") && -1 === b.indexOf("line")) && (b || (b = ""), a.setAttribute("data-layout", b + " group")), B.isSlow() && (a.removeAttribute("data-visual"), a.setAttribute("data-view", "text"), a.className += " soon-slow-browser")
  }

  function l(a, b, c) {
    b[c] && !a.getAttribute("data-" + c) && a.setAttribute("data-" + c, b[c])
  }

  function m(a, b) {
    return a.getAttribute("data-" + b)
  }

  function n(a, b) {
    var c = null !== a.due || null !== a.since, d = null;
    if (c) if (a.since) {
      var e = a.now ? a.now.valueOf() : (new Date).valueOf();
      d = D.chain(function (b) {
        return a.now ? -b : b
      }, D.offset(e), D.diff(a.since.valueOf()), function (a) {
        return Math.abs(a)
      }, function (a) {
        return Math.max(0, a)
      }, function (b) {
        return a.callback.onTick(b, a.since), b
      }, D.event(function (a) {
        return 0 === a
      }, b), D.duration(new Date(e), a.since, a.format, a.cascade))
    } else d = D.chain(D.offset(a.now.valueOf()), D.diff(a.due.valueOf()), function (a) {
      return Math.max(0, a)
    }, function (b) {
      return a.callback.onTick(b, a.due), b
    }, D.event(function (a) {
      return 0 >= a
    }, b), D.duration(a.now, a.due, a.format, a.cascade)); else d = function () {
      var a = new Date;
      return [a.getHours(), a.getMinutes(), a.getSeconds()]
    }, a.format = ["h", "m", "s"], a.separator = ":";
    return d
  }

  function o(a, b) {
    for (var c, d, e, f, g, h, i, j = null !== a.due || null !== a.since, k = n(a, b), l = {
      type: "group",
      options: {transform: k, presenters: []}
    }, m = [], o = a.format.length, r = 0; o > r; r++) h = a.format[r], i = r, c = {
      type: "group",
      options: {className: "soon-group-sub", presenters: []}
    }, a.visual && (c.options.presenters.push(p(a, h)), a.reflect && c.options.presenters.push(p(a, h, "soon-reflection"))), d = {
      type: "text",
      options: {className: "soon-label"}
    }, d.options.transform = a.singular ? D.plural(a.label[h], a.label[h + "_s"]) : function (b) {
      return function () {
        return a.label[b + "_s"]
      }
    }(h), e = q(a, h), f = null, a.reflect && !a.visual && (f = q(a, h, "soon-reflection")), c.options.presenters.push(e), f && c.options.presenters.push(f), j && c.options.presenters.push(d), a.separator && (g = {
      type: "group",
      options: {className: "soon-group-separator", presenters: [c]}
    }, 0 !== i && (a.reflect && g.options.presenters.unshift({
      type: "text",
      options: {
        className: "soon-separator soon-reflection",
        transform: function () {
          return a.separator
        }
      }
    }), g.options.presenters.unshift({
      type: "text",
      options: {
        className: "soon-separator", transform: function () {
          return a.separator
        }
      }
    })), c = g), m.push(c);
    return l.options.presenters = m, l
  }

  function p(a, b, c) {
    var d = a.visual.split(" "), e = d[0];
    return d.shift(), {
      type: e,
      options: {
        className: "soon-visual " + (c || ""),
        transform: D.chain(D.progress(B.MAX[b]), D.cap()),
        modifiers: d,
        animate: "ms" !== b
      }
    }
  }

  function q(a, b, c) {
    return a.chars ? {
      type: "repeater",
      options: {
        delay: "text" === a.view ? 0 : 50,
        className: "soon-value " + (c || ""),
        transform: D.chain(D.pad(a.padding[b]), D.chars()),
        presenter: {type: a.view}
      }
    } : {
      type: "group",
      options: {
        className: "soon-group-sub-sub soon-value " + (c || ""),
        transform: D.pad(a.padding[b]),
        presenters: [{type: a.view}]
      }
    }
  }

  function r(a, b, c, d) {
    K.push({node: a, ticker: b, presenter: c, options: d})
  }

  function s(a) {
    return new (t(a.type))(a.options || {})
  }

  function t(a) {
    return C[a.charAt(0).toUpperCase() + a.slice(1)]
  }

  function u(a, b) {
    var c = a.getElementsByClassName ? a.getElementsByClassName("soon-placeholder") : a.querySelectorAll("soon-placeholder");
    c.length && (c[0].innerHTML = "", a = c[0]);
    var d = s(b);
    return a.appendChild(d.getElement()), d
  }

  function v(a, b, c, d) {
    var e = new F(function (a) {
      b.setValue(a)
    }, {rate: c});
    return r(a, e, b, d), e.start(), f(a, b), e
  }

  function w(a) {
    var b, c, d = ["labels", "padding"], e = 2, f = {
      since: m(a, "since"),
      due: m(a, "due"),
      now: m(a, "now"),
      face: m(a, "face"),
      visual: m(a, "visual"),
      format: m(a, "format"),
      singular: "true" === m(a, "singular"),
      reflect: "true" === m(a, "reflect"),
      scaleMax: m(a, "scale-max"),
      scaleHide: m(a, "scale-hide"),
      separateChars: !("false" === m(a, "separate-chars")),
      cascade: !("false" === m(a, "cascade")),
      separator: m(a, "separator"),
      padding: !("false" === m(a, "padding")),
      eventComplete: m(a, "event-complete"),
      eventTick: m(a, "event-tick")
    };
    for (var g in M) if (M.hasOwnProperty(g)) for (b = M[g], c = 0; e > c; c++) f[d[c] + b.option] = m(a, d[c] + "-" + b.option.toLowerCase());
    return A.create(a, f)
  }

  function x(a) {
    var b;
    if (0 === a.indexOf("in ")) {
      var c = a.match(N), d = parseInt(c[1], 10), e = c[2];
      return b = new Date, -1 !== e.indexOf("hour") ? b.setHours(b.getHours() + d) : -1 !== e.indexOf("minute") ? b.setMinutes(b.getMinutes() + d) : -1 !== e.indexOf("second") && b.setSeconds(b.getSeconds() + d), b
    }
    if (-1 !== a.indexOf("at ")) {
      b = new Date;
      var f = b.getTime(), g = -1 !== a.indexOf("reset");
      a = a.replace("reset ", "");
      var h = a.split("at "), i = h[1].match(O), j = parseInt(i[1], 10),
        k = i[2] ? parseInt(i[2], 10) : 0, l = i[3] ? parseInt(i[3], 10) : 0,
        m = h[1].split(" zone ");
      if (m && (m = m[1]), h[0].length) {
        var n = B.getDayIndex(h[0]), o = (n + 7 - b.getDay()) % 7;
        b.setDate(b.getDate() + o)
      }
      b.setHours(j), b.setMinutes(k), b.setSeconds(l), b.setMilliseconds(0), g && f >= b.getTime() && b.setHours(j + (h[0].length ? 168 : 24));
      var p = B.pad,
        q = b.getFullYear() + "-" + p(b.getMonth() + 1) + "-" + p(b.getDate()),
        r = p(b.getHours()) + ":" + p(b.getMinutes()) + ":" + p(b.getSeconds());
      a = q + "T" + r + (m || "")
    }
    return B.isoToDate(a)
  }

  function y(a, b) {
    if (0 === b.indexOf(a)) return "";
    if ("w" === a && -1 !== b.indexOf("M")) return "";
    if ("d" === a) {
      if (-1 !== b.indexOf("w")) return "";
      if (-1 !== b.indexOf("M")) return "00"
    }
    return null
  }

  function z(a, b, c) {
    if (c && -1 !== G.indexOf(a)) return c;
    var d = function (c) {
      return function () {
        c(), A.destroy(a), A.create(a, b)
      }
    }(c);
    return G.push(a), d
  }

  if (document.querySelectorAll && !a.Soon) {
    var A = {}, B = {}, C = {}, D = {}, E = {
      timer: 0, cbs: [], register: function (a) {
        E.cbs.push(a)
      }, deregister: function (a) {
        for (var b = E.cbs.length - 1; b >= 0; b--) E.cbs[b] === a && E.cbs.splice(b, 1)
      }, onresize: function () {
        clearTimeout(E.timer), E.timer = setTimeout(function () {
          E.resize()
        }, 100)
      }, resize: function () {
        for (var a = 0, b = E.cbs.length; b > a; a++) E.cbs[a]()
      }, init: function () {
        a.addEventListener && a.addEventListener("resize", E.onresize, !1)
      }
    };
    E.init(), Function.prototype.bind || (Function.prototype.bind = function (a) {
      if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
      var b = Array.prototype.slice.call(arguments, 1), c = this,
        d = function () {
        }, e = function () {
          return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)))
        };
      return d.prototype = this.prototype, e.prototype = new d, e
    }), Array.prototype.indexOf || (Array.prototype.indexOf = function (a, b) {
      var c;
      if (null == this) throw new TypeError('"this" is null or not defined');
      var d = Object(this), e = d.length >>> 0;
      if (0 === e) return -1;
      var f = +b || 0;
      if (1 / 0 === Math.abs(f) && (f = 0), f >= e) return -1;
      for (c = Math.max(f >= 0 ? f : e - Math.abs(f), 0); e > c;) {
        if (c in d && d[c] === a) return c;
        c++
      }
      return -1
    }), function () {
      function a(a) {
        this.el = a;
        for (var b = a.className.replace(/^\s+|\s+$/g, "").split(/\s+/), c = 0; c < b.length; c++) d.call(this, b[c])
      }

      function b(a, b, c) {
        Object.defineProperty ? Object.defineProperty(a, b, {get: c}) : a.__defineGetter__(b, c)
      }

      if (!("undefined" == typeof window.Element || "classList" in document.documentElement)) {
        var c = Array.prototype, d = c.push, e = c.splice, f = c.join;
        a.prototype = {
          add: function (a) {
            this.contains(a) || (d.call(this, a), this.el.className = this.toString())
          }, contains: function (a) {
            return -1 != this.el.className.indexOf(a)
          }, item: function (a) {
            return this[a] || null
          }, remove: function (a) {
            if (this.contains(a)) {
              for (var b = 0; b < this.length && this[b] != a; b++) ;
              e.call(this, b, 1), this.el.className = this.toString()
            }
          }, toString: function () {
            return f.call(this, " ")
          }, toggle: function (a) {
            return this.contains(a) ? this.remove(a) : this.add(a), this.contains(a)
          }
        }, window.DOMTokenList = a, b(Element.prototype, "classList", function () {
          return new a(this)
        })
      }
    }(), function () {
      for (var a = 0, b = ["webkit", "moz"], c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
      window.requestAnimationFrame || (window.requestAnimationFrame = function (b) {
        var c = (new Date).getTime(), d = Math.max(0, 16 - (c - a)),
          e = window.setTimeout(function () {
            b(c + d)
          }, d);
        return a = c + d, e
      }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) {
        clearTimeout(a)
      })
    }(), B = function () {
      function a() {
        if (!window.getComputedStyle) return !1;
        var a, b = document.createElement("div"), d = {
          webkitTransform: "-webkit-transform",
          OTransform: "-o-transform",
          msTransform: "-ms-transform",
          MozTransform: "-moz-transform",
          transform: "transform"
        };
        document.body.insertBefore(b, null);
        for (var e in d) b.style[e] !== c && (b.style[e] = "translate3d(1px,1px,1px)", a = window.getComputedStyle(b).getPropertyValue(d[e]));
        return document.body.removeChild(b), a !== c && a.length > 0 && "none" !== a
      }

      function b() {
        var a = !1, b = "animation", d = "",
          e = "Webkit Moz O ms Khtml".split(" "), f = "", g = 0,
          h = document.body, i = e.length;
        if (h.style.animationName !== c && (a = !0), a === !1) for (; i > g; g++) if (h.style[e[g] + "AnimationName"] !== c) {
          f = e[g], b = f + "Animation", d = "-" + f.toLowerCase() + "-", a = !0;
          break
        }
        return a
      }

      var d, e, f = "textContent" in document.documentElement,
        g = function (a) {
          var b, c,
            d = /^(\d{4}\-\d\d\-\d\d([tT ][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/,
            e = d.exec(a) || [];
          if (e[1]) {
            b = e[1].split(/\D/);
            for (var f = 0, g = b.length; g > f; f++) b[f] = parseInt(b[f], 10) || 0;
            return b[1] -= 1, b = new Date(Date.UTC.apply(Date, b)), b.getDate() ? (e[5] && (c = 60 * parseInt(e[5], 10), e[6] && (c += parseInt(e[6], 10)), "+" == e[4] && (c *= -1), c && b.setUTCMinutes(b.getUTCMinutes() + c)), b) : Number.NaN
          }
          return Number.NaN
        }, h = new Date("2015-01-01T12:00:00.123+01:00"),
        i = isNaN(h) ? function (a) {
          return g(a)
        } : function (a) {
          return new Date(a)
        };
      "undefined" != typeof document.hidden ? (e = "hidden", d = "visibilitychange") : "undefined" != typeof document.mozHidden ? (e = "mozHidden", d = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (e = "msHidden", d = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (e = "webkitHidden", d = "webkitvisibilitychange");
      var j = !1, k = 1, l = 1e3 * k, m = 60 * l, n = 60 * m, o = 24 * n,
        p = 7 * o, q = {
          MAX: {y: 100, M: 12, w: 52, d: 365, h: 24, m: 60, s: 60, ms: 1e3},
          AMOUNT: {w: p, d: o, h: n, m: m, s: l, ms: k},
          NAMES: {
            y: "years",
            M: "months",
            w: "weeks",
            d: "days",
            h: "hours",
            m: "minutes",
            s: "seconds",
            ms: "milliseconds"
          },
          FORMATS: ["y", "M", "w", "d", "h", "m", "s", "ms"],
          CIRC: 2 * Math.PI,
          QUART: .5 * Math.PI,
          DAYS: ["su", "mo", "tu", "we", "th", "fr", "sa"],
          setText: null,
          documentVisibilityEvent: d,
          pad: function (a) {
            return ("00" + a).slice(-2)
          },
          getDayIndex: function (a) {
            return this.DAYS.indexOf(a.substr(0, 2))
          },
          isSlow: function () {
            return !f
          },
          supportsAnimation: function () {
            return j = b() && a(), q.supportsAnimation = function () {
              return j
            }, j
          },
          toArray: function (a) {
            return Array.prototype.slice.call(a)
          },
          toBoolean: function (a) {
            return "string" == typeof a ? "true" === a : a
          },
          isoToDate: function (a) {
            if (a.match(/(Z)|([+\-][0-9]{2}:?[0-9]*$)/g)) return i(a);
            a += -1 !== a.indexOf("T") ? "Z" : "";
            var b = i(a);
            return this.dateToLocal(b)
          },
          dateToLocal: function (a) {
            return new Date(a.getTime() + 6e4 * a.getTimezoneOffset())
          },
          prefix: function () {
            for (var a, b = ["webkit", "Moz", "ms", "O"], c = 0, d = b.length, e = document.createElement("div").style; d > c; c++) if (a = b[c] + "Transform", a in e) return b[c];
            return null
          }(),
          setTransform: function (a, b) {
            a.style[this.prefix + "Transform"] = b, a.style.transform = b
          },
          setTransitionDelay: function (a, b) {
            a.style[this.prefix + "TransitionDelay"] = b + "," + b + "," + b, a.style.TransitionDelay = b + "," + b + "," + b
          },
          getShadowProperties: function (a) {
            if (a = a ? a.match(/(-?\d+px)|(rgba\(.+\))|(rgb\(.+\))|(#[abcdef\d]+)/g) : null, !a) return null;
            for (var b, c = 0, d = a.length, e = []; d > c; c++) -1 !== a[c].indexOf("px") ? e.push(parseInt(a[c], 10)) : b = a[c];
            return e.push(b), 5 === e.length && e.splice(3, 1), e
          },
          getDevicePixelRatio: function () {
            return window.devicePixelRatio || 1
          },
          isDocumentHidden: function () {
            return e ? document[e] : !1
          },
          triggerAnimation: function (a, b) {
            a.classList.remove(b), window.requestAnimationFrame(function () {
              a.offsetLeft, a.classList.add(b)
            })
          },
          getBackingStoreRatio: function (a) {
            return a.webkitBackingStorePixelRatio || a.mozBackingStorePixelRatio || a.msBackingStorePixelRatio || a.oBackingStorePixelRatio || a.backingStorePixelRatio || 1
          },
          setShadow: function (a, b, c, d, e) {
            a.shadowOffsetX = b, a.shadowOffsetY = c, a.shadowBlur = d, a.shadowColor = e
          },
          getColorBetween: function (a, b, c) {
            function d(a, b) {
              return a + Math.round((b - a) * c)
            }

            function e(a) {
              a = Math.min(a, 255), a = Math.max(a, 0);
              var b = a.toString(16);
              return b.length < 2 && (b = "0" + b), b
            }

            return "#" + e(d(a.r, b.r)) + e(d(a.g, b.g)) + e(d(a.b, b.b))
          },
          getGradientColors: function (a, b, c) {
            for (var d = [], e = 0, f = c, g = 1 / (f - 1), h = 0; f > e; e++) d[e] = this.getColorBetween(a, b, h), h += g;
            return d
          },
          hexToRgb: function (a) {
            var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
            return b ? {
              r: parseInt(b[1], 16),
              g: parseInt(b[2], 16),
              b: parseInt(b[3], 16)
            } : null
          },
          drawGradientArc: function (a, b, c, d, e, f, g, h, i, j, k, l, m) {
            if (!(g > h)) {
              l && this.drawArc(a, b, c, d, e, f, g, h, i, "transparent", l, m);
              for (var n, o, p, q, r, s, t, u = this.hexToRgb(j), v = this.hexToRgb(k), w = this.hexToRgb(this.getColorBetween(u, v, (g - e) / f)), x = this.hexToRgb(this.getColorBetween(u, v, (h - e) / f)), y = h - g, z = Math.ceil(30 * y), A = this.getGradientColors(w, x, z), B = -this.QUART + this.CIRC * g, C = A.length, D = 0, E = this.CIRC * y / C; C > D; D++) o = A[D], p = A[D + 1] || o, q = b + Math.cos(B) * d, s = b + Math.cos(B + E) * d, r = c + Math.sin(B) * d, t = c + Math.sin(B + E) * d, a.beginPath(), n = a.createLinearGradient(q, r, s, t), n.addColorStop(0, o), n.addColorStop(1, p), a.lineCap = m, a.strokeStyle = n, a.arc(b, c, d, B - .005, B + E + .005), a.lineWidth = i, a.stroke(), a.closePath(), B += E
            }
          },
          drawArc: function (a, b, c, d, e, f, g, h, i, j, k, l) {
            if (!(g > h)) {
              if (null !== j.gradient.colors && "follow" === j.gradient.type) return void this.drawGradientArc(a, b, c, d, e, f, g, h, i, j.gradient.colors[0], j.gradient.colors[1], k, l);
              if (k) {
                var m = "transparent" === j.fill ? 9999 : 0;
                a.save(), a.translate(m, 0), this.setShadow(a, k[0] - m, k[1], k[2], k[3])
              }
              if (a.beginPath(), a.lineWidth = i, a.arc(b, c, d, -this.QUART + this.CIRC * g, -this.QUART + this.CIRC * h, !1), j.gradient.colors) {
                var n = "horizontal" === j.gradient.type ? a.createLinearGradient(0, d, 2 * d, d) : a.createLinearGradient(d, 0, d, 2 * d);
                n.addColorStop(0, j.gradient.colors[0]), n.addColorStop(1, j.gradient.colors[1]), a.strokeStyle = n
              } else a.strokeStyle = "transparent" === j.fill ? "#000" : j.fill;
              a.lineCap = l, a.stroke(), k && a.restore()
            }
          },
          drawRing: function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
            d + e > 1 && (d -= -1 + d + e, c += .5 * e);
            var q = c, r = c + d, s = b * d, t = .5 - Math.abs(-.5 + b),
              u = c + (s - t * e), v = c + (s + (1 - t) * e);
            (g || k) && (p ? (this.drawArc(a, f, f, g, c, d, v, r, h, i, j, o), this.drawArc(a, f, f, k, c, d, q, u, l, m, n, o)) : (this.drawArc(a, f, f, g, c, d, q, u, h, i, j, o), this.drawArc(a, f, f, k, c, d, v, r, l, m, n, o)))
          },
          setTextContent: function () {
            return f ? function (a, b) {
              a.textContent = b
            } : function (a, b) {
              a.innerText = b
            }
          }()
        };
      return q
    }(), D.cap = function (a, b) {
      return a = a || 0, b = b || 1, function (c) {
        return Math.min(Math.max(c, a), b)
      }
    }, D.chain = function (a) {
      return function () {
        var b, c = a.toArray(arguments), d = c.length;
        return function (a) {
          for (b = 0; d > b; b++) a = c[b](a);
          return a
        }
      }
    }(B), D.chars = function () {
      return function (a) {
        return (a + "").split("")
      }
    }, D.diff = function (a) {
      return function (b) {
        return a - b
      }
    }, D.duplicate = function (a) {
      var b, c = new Array(a);
      return function (d) {
        for (b = a; b--;) c[b] = d;
        return c
      }
    }, D.duration = function (a) {
      function b(a, b) {
        return a.setMonth(a.getMonth() + b), a
      }

      function c(a) {
        return new Date(a.valueOf())
      }

      function d(a, b) {
        return -1 !== b.indexOf(a)
      }

      function e(a, d) {
        var e, f,
          g = 12 * (d.getFullYear() - a.getFullYear()) + (d.getMonth() - a.getMonth()),
          h = b(c(a), g);
        return 0 > d - h ? (e = b(c(a), g - 1), f = (d - h) / (h - e)) : (e = b(c(a), g + 1), f = (d - h) / (e - h)), -(g + f)
      }

      var f = a.FORMATS, g = f.length, h = {M: 1, y: 12};
      return function (i, j, k, l) {
        var m = d("M", k), n = d("y", k);
        return function (j) {
          var o, p, q, r, s, t, u = 0, v = [];
          for ((m || n || !l) && (o = new Date(i.valueOf() + j), p = e(o, i), t = m ? Math.floor(p) : 12 * Math.floor(p / 12), j = o.valueOf() - b(c(i), t).valueOf()); g > u; u++) r = f[u], 2 > u ? (q = Math.floor(p / h[r]), d(r, k) ? (p -= q * h[r], v.push(Math.max(0, q))) : l || (p -= q * h[r])) : (s = a.AMOUNT[r], q = Math.floor(j / s), d(r, k) ? (j %= s, v.push(Math.max(0, q))) : l || (j %= s));
          return v
        }
      }
    }(B), D.event = function (a, b) {
      return function (c) {
        return a(c) && b(), c
      }
    }, D.modulate = function (a) {
      return function (b) {
        return parseInt(b, 10) % 2 === 0 ? a : ""
      }
    }, D.now = function () {
      return function () {
        return (new Date).getTime()
      }
    }, D.offset = function (a) {
      return function (b) {
        return a + b
      }
    }, D.pad = function (a) {
      return a = a || "", function (b) {
        return (a + b).slice(-a.length)
      }
    }, D.plural = function (a, b) {
      return function (c) {
        return 1 === parseInt(c, 10) ? a : b
      }
    }, D.progress = function (a, b) {
      return function (c) {
        return c = parseInt(c, 10), b > a ? c / b : (a - c) / a
      }
    }, C.Console = function () {
      var a = function (a) {
        this._transform = a.transform || function (a) {
          return a
        }
      };
      return a.prototype = {
        redraw: function () {
        }, destroy: function () {
          return null
        }, getElement: function () {
          return null
        }, setValue: function (a) {
          console.log(this._transform(a))
        }
      }, a
    }(), C.Fill = function (a) {
      var b = function (a) {
        this._wrapper = document.createElement("span"), this._wrapper.className = "soon-fill " + (a.className || ""), this._transform = a.transform || function (a) {
          return a
        }, this._direction = "to-top";
        for (var b = 0, c = a.modifiers.length; c > b; b++) if (0 === a.modifiers[b].indexOf("to-")) {
          this._direction = a.modifiers[b];
          break
        }
        this._fill = document.createElement("span"), this._fill.className = "soon-fill-inner", this._progress = document.createElement("span"), this._progress.className = "soon-fill-progress", this._fill.appendChild(this._progress), this._wrapper.appendChild(this._fill)
      };
      return b.prototype = {
        redraw: function () {
        }, destroy: function () {
          return this._wrapper
        }, getElement: function () {
          return this._wrapper
        }, setValue: function (b) {
          var c, d = this._transform(b);
          switch (this._direction) {
            case"to-top":
              c = "translateY(" + (100 - 100 * d) + "%)";
              break;
            case"to-top-right":
              c = "scale(1.45) rotateZ(-45deg) translateX(" + (-100 + 100 * d) + "%)";
              break;
            case"to-top-left":
              c = "scale(1.45) rotateZ(45deg) translateX(" + (100 - 100 * d) + "%)";
              break;
            case"to-left":
              c = "translateX(" + (100 - 100 * d) + "%)";
              break;
            case"to-right":
              c = "translateX(" + (-100 + 100 * d) + "%)";
              break;
            case"to-bottom-right":
              c = "scale(1.45) rotateZ(45deg) translateX(" + (-100 + 100 * d) + "%)";
              break;
            case"to-bottom-left":
              c = "scale(1.45) rotateZ(-45deg) translateX(" + (100 - 100 * d) + "%)";
              break;
            case"to-bottom":
              c = "translateY(" + (-100 + 100 * d) + "%)"
          }
          a.setTransform(this._progress, c)
        }
      }, b
    }(B), C.Flip = function (a) {
      var b = function (b) {
        this._wrapper = document.createElement("span"), this._wrapper.className = "soon-flip " + (b.className || ""), this._transform = b.transform || function (a) {
          return a
        }, this._inner = document.createElement("span"), this._inner.className = "soon-flip-inner", this._card = document.createElement("span"), this._card.className = "soon-flip-card", a.supportsAnimation() ? (this._front = document.createElement("span"), this._front.className = "soon-flip-front soon-flip-face", this._back = document.createElement("span"), this._back.className = "soon-flip-back soon-flip-face", this._card.appendChild(this._front), this._card.appendChild(this._back), this._top = document.createElement("span"), this._top.className = "soon-flip-top soon-flip-face", this._card.appendChild(this._top), this._bottom = document.createElement("span"), this._bottom.className = "soon-flip-bottom soon-flip-face", this._card.appendChild(this._bottom)) : (this._fallback = document.createElement("span"), this._fallback.className = "soon-flip-fallback", this._card.appendChild(this._fallback)), this._bounding = document.createElement("span"), this._bounding.className = "soon-flip-bounding", this._card.appendChild(this._bounding), this._inner.appendChild(this._card), this._wrapper.appendChild(this._inner), this._frontValue = null, this._backValue = null, this._boundingLength = 0
      };
      return b.prototype = {
        redraw: function () {
        }, _setBoundingForValue: function (a) {
          var b = (a + "").length;
          if (b !== this._boundingLength) {
            this._boundingLength = b;
            for (var c = "", d = 0; b > d; d++) c += "8";
            this._bounding.textContent = c;
            var e = parseInt(getComputedStyle(this._card).fontSize, 10),
              f = this._bounding.offsetWidth / e;
            this._inner.style.width = f + .1 * (b - 1) + "em"
          }
        }, destroy: function () {
          return this._wrapper
        }, getElement: function () {
          return this._wrapper
        }, setValue: function (b) {
          return b = this._transform(b), a.supportsAnimation() ? this._frontValue ? void (this._backValue && this._backValue === b || this._frontValue === b || (this._backValue && (this._bottom.textContent = this._backValue, this._front.textContent = this._backValue, this._frontValue = this._backValue), this._setBoundingForValue(b), this._top.textContent = b, this._back.textContent = b, this._backValue = b, a.triggerAnimation(this._inner, "soon-flip-animate"))) : (this._bottom.textContent = b, this._front.textContent = b, this._frontValue = b, void this._setBoundingForValue(b)) : (this._fallback.textContent = b, void this._setBoundingForValue(b))
        }
      }, b
    }(B), C.Group = function (a) {
      var b = function (a) {
        this._wrapper = document.createElement("span"), this._wrapper.className = "soon-group " + (a.className || ""), this._inner = document.createElement("span"), this._inner.className = "soon-group-inner", this._wrapper.appendChild(this._inner), this._transform = a.transform || function (a) {
          return a
        }, this._presenters = a.presenters, this._presenterStorage = []
      };
      return b.prototype = {
        redraw: function () {
          for (var a = this._presenterStorage.length - 1; a >= 0; a--) this._presenterStorage[a].redraw()
        }, destroy: function () {
          for (var a = this._presenterStorage.length - 1; a >= 0; a--) this._presenterStorage[a].destroy();
          return this._wrapper
        }, getElement: function () {
          return this._wrapper
        }, setValue: function (b) {
          this._wrapper.setAttribute("data-value", b), b = this._transform(b);
          for (var c, d = 0, e = b instanceof Array, f = e ? b.length : this._presenters.length; f > d; d++) c = this._presenterStorage[d], c || (c = a(this._presenters[d]), this._inner.appendChild(c.getElement()), this._presenterStorage[d] = c), c.setValue(e ? b[d] : b)
        }
      }, b
    }(s), C.Matrix = function () {
      for (var a, b = {
        " ": [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]],
        0: [[0, 1, 1, 1, 0], [1, 1, 0, 1, 1], [1, 1, 0, 1, 1], [1, 1, 0, 1, 1], [1, 1, 0, 1, 1], [1, 1, 0, 1, 1], [0, 1, 1, 1, 0]],
        1: [[0, 0, 1, 1, 0], [0, 1, 1, 1, 0], [0, 0, 1, 1, 0], [0, 0, 1, 1, 0], [0, 0, 1, 1, 0], [0, 0, 1, 1, 0], [0, 1, 1, 1, 1]],
        2: [[0, 1, 1, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 1, 1], [0, 0, 1, 1, 0], [0, 1, 1, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 1]],
        3: [[0, 1, 1, 1, 0], [1, 1, 0, 1, 1], [0, 0, 0, 1, 1], [0, 0, 1, 1, 0], [0, 0, 0, 1, 1], [1, 1, 0, 1, 1], [0, 1, 1, 1, 0]],
        4: [[0, 0, 1, 1, 1], [0, 1, 0, 1, 1], [1, 1, 0, 1, 1], [1, 1, 1, 1, 1], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1]],
        5: [[1, 1, 1, 1, 1], [1, 1, 0, 0, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [0, 0, 0, 1, 1], [1, 1, 0, 1, 1], [0, 1, 1, 1, 0]],
        6: [[0, 1, 1, 1, 0], [1, 1, 0, 0, 0], [1, 1, 1, 1, 0], [1, 1, 0, 1, 1], [1, 1, 0, 1, 1], [1, 1, 0, 1, 1], [0, 1, 1, 1, 0]],
        7: [[1, 1, 1, 1, 1], [0, 0, 0, 1, 1], [0, 0, 0, 1, 1], [0, 0, 1, 1, 0], [0, 1, 1, 0, 0], [1, 1, 0, 0, 0], [1, 1, 0, 0, 0]],
        8: [[0, 1, 1, 1, 0], [1, 1, 0, 1, 1], [1, 1, 0, 1, 1], [0, 1, 1, 1, 0], [1, 1, 0, 1, 1], [1, 1, 0, 1, 1], [0, 1, 1, 1, 0]],
        9: [[0, 1, 1, 1, 0], [1, 1, 0, 1, 1], [1, 1, 0, 1, 1], [1, 1, 0, 1, 1], [0, 1, 1, 1, 1], [0, 0, 0, 1, 1], [0, 1, 1, 1, 0]]
      }, c = b[0].length, d = b[0][0].length, e = 0, f = ""; c > e; e++) {
        for (f += '<span class="soon-matrix-row">', a = 0; d > a; a++) f += '<span class="soon-matrix-dot"></span>';
        f += "</span>"
      }
      var g = function (a) {
        this._wrapper = document.createElement("span"), this._wrapper.className = "soon-matrix " + (a.className || ""), this._inner = document.createElement("span"), this._inner.className = "soon-matrix-inner", this._wrapper.appendChild(this._inner), this._transform = a.transform || function (a) {
          return a
        }, this._value = []
      };
      return g.prototype = {
        redraw: function () {
        }, destroy: function () {
          return this._wrapper
        }, getElement: function () {
          return this._wrapper
        }, _addChar: function () {
          var a = document.createElement("span");
          return a.className = "soon-matrix-char", a.innerHTML = f, {
            node: a,
            ref: []
          }
        }, _updateChar: function (a, e) {
          var f, g = b[e], h = 0, i = a.ref;
          if (!i.length) for (var j = a.node.getElementsByClassName("soon-matrix-dot"); c > h; h++) for (i[h] = [], f = 0; d > f; f++) i[h][f] = j[h * d + f];
          for (; c > h; h++) for (f = 0; d > f; f++) i[h][f].setAttribute("data-state", 1 === g[h][f] ? "1" : "0")
        }, setValue: function (a) {
          a = this._transform(a), a += "", a = a.split("");
          for (var b = 0, c = a.length; c > b; b++) {
            var d = this._value[b];
            d || (d = this._addChar(), this._inner.appendChild(d.node), this._value[b] = d), this._updateChar(d, a[b])
          }
        }
      }, g
    }(), C.Repeater = function (a) {
      var b = function (b) {
        this._wrapper = document.createElement("span"), this._wrapper.className = "soon-repeater " + (b.className || ""), this._delay = b.delay || 0, this._transform = b.transform || function (a) {
          return a
        }, this._destroyed = !1, this._presenter = b.presenter, this._Presenter = a(this._presenter.type), this._prepend = "undefined" == typeof b.prepend ? !0 : b.prepend, this._presenterStorage = []
      };
      return b.prototype = {
        redraw: function () {
          for (var a = this._presenterStorage.length - 1; a >= 0; a--) this._presenterStorage[a].redraw()
        }, destroy: function () {
          this._destroyed = !0;
          for (var a = this._presenterStorage.length - 1; a >= 0; a--) this._presenterStorage[a].destroy();
          return this._wrapper
        }, getElement: function () {
          return this._wrapper
        }, setValue: function (a) {
          a = this._transform(a), a = a instanceof Array ? a : [a], this._prepend && a.reverse();
          for (var b, c, d, e = 0, f = a.length, g = 0, h = a.length !== this._wrapper.children.length; f > e; e++) b = this._presenterStorage[e], b || (b = new this._Presenter(this._presenter.options || {}), 0 !== this._wrapper.children.length && this._prepend ? this._wrapper.insertBefore(b.getElement(), this._wrapper.firstChild) : this._wrapper.appendChild(b.getElement()), this._presenterStorage[e] = b, this._delay && (g -= this._delay)), this._delay && !h ? (this._setValueDelayed(b, a[e], g), g += this._delay) : this._setValue(b, a[e], h);
          for (f = this._wrapper.children.length, d = e; f > e; e++) b = this._presenterStorage[e], c = b.destroy(), c.parentNode.removeChild(c), this._presenterStorage[e] = null;
          this._presenterStorage.length = d
        }, _setValueDelayed: function (a, b, c, d) {
          var e = this;
          setTimeout(function () {
            e._setValue(a, b, d)
          }, c)
        }, _setValue: function (a, b, c) {
          c && a.setValue(" "), a.setValue(b)
        }
      }, b
    }(t), C.Ring = function (a, b) {
      var c = function (b) {
        this._wrapper = document.createElement("span"), this._wrapper.className = "soon-ring " + (b.className || ""), this._transform = b.transform || function (a) {
          return a
        }, this._modifiers = b.modifiers, this._animate = b.animate, this._drawn = !1, this._canvas = document.createElement("canvas"), this._wrapper.appendChild(this._canvas), this._style = document.createElement("span"), this._style.className = "soon-ring-progress", this._style.style.visibility = "hidden", this._style.style.position = "absolute", this._wrapper.appendChild(this._style), this._current = 0, this._target = null, this._destroyed = !1, this._lastTick = 0, this._styles = null;
        var c = this;
        a.supportsAnimation() ? window.requestAnimationFrame(function (a) {
          c._tick(a)
        }) : this._animate = !1
      };
      return c.prototype = {
        destroy: function () {
          return this._destroyed = !0, b.deregister(this._resizeBind), this._wrapper
        }, getElement: function () {
          return this._wrapper
        }, _getModifier: function (a) {
          for (var b = 0, c = this._modifiers.length, d = null; c > b; b++) if (-1 !== this._modifiers[b].indexOf(a)) {
            d = this._modifiers[b];
            break
          }
          if (!d) return null;
          if (-1 === d.indexOf("-")) return !0;
          var e = d.split("-");
          if (-1 !== e[1].indexOf("_")) {
            var f = e[1].split("_");
            return f[0] = "#" + f[0], f[1] = "#" + f[1], f
          }
          var g = parseFloat(e[1]);
          return isNaN(g) ? e[1] : g / 100
        }, redraw: function () {
          var b = window.getComputedStyle(this._style);
          this._styles = {
            offset: this._getModifier("offset") || 0,
            gap: this._getModifier("gap") || 0,
            length: this._getModifier("length") || 1,
            flip: this._getModifier("flip") || !1,
            invert: this._getModifier("invert") || null,
            align: "center",
            size: 0,
            radius: 0,
            padding: parseInt(b.getPropertyValue("padding-bottom"), 10) || 0,
            cap: 0 === parseInt(b.getPropertyValue("border-top-right-radius"), 10) ? "butt" : "round",
            progressColor: {
              fill: b.getPropertyValue("color") || "#000",
              gradient: {
                colors: this._getModifier("progressgradient") || null,
                type: this._getModifier("progressgradienttype") || "follow"
              }
            },
            progressWidth: parseInt(b.getPropertyValue("border-top-width"), 10) || 2,
            progressShadow: a.getShadowProperties(b.getPropertyValue("text-shadow")),
            ringColor: {
              fill: b.getPropertyValue("background-color") || "#fff",
              gradient: {
                colors: this._getModifier("ringgradient") || null,
                type: this._getModifier("ringgradienttype") || "follow"
              }
            },
            ringWidth: parseInt(b.getPropertyValue("border-bottom-width"), 10) || 2,
            ringShadow: a.getShadowProperties(b.getPropertyValue("box-shadow"))
          };
          var c = this._canvas.getContext("2d"),
            d = this._canvas.parentNode.clientWidth,
            e = a.getDevicePixelRatio(), f = a.getBackingStoreRatio(c),
            g = e / f, h = 125 > d ? Math.min(1, .005 * d) : 1;
          if (this._styles.ringWidth = Math.ceil(this._styles.ringWidth * h), this._styles.progressWidth = Math.ceil(this._styles.progressWidth * h), "transparent" === this._styles.ringColor.fill && (this._styles.ringColor.fill = "rgba(0,0,0,0)"), "transparent" === this._styles.progressColor.fill && (this._styles.progressColor.fill = "rgba(0,0,0,0)"), "round" === this._styles.cap && -1 === this._modifiers.join("").indexOf("gap-") && (this._styles.gap = .5 * (this._styles.ringWidth + this._styles.progressWidth) * .005), d) {
            e !== f ? (this._canvas.width = d * g, this._canvas.height = d * g, this._canvas.style.width = d + "px", this._canvas.style.height = d + "px", c.scale(g, g)) : (this._canvas.width = d, this._canvas.height = d), this._styles.size = .5 * d;
            var i = this._styles.size - this._styles.padding;
            this._styles.ringRadius = i - .5 * this._styles.ringWidth, this._styles.progressRadius = i - .5 * this._styles.progressWidth, this._styles.progressWidth === this._styles.ringWidth ? this._styles.progressRadius = this._styles.ringRadius : this._styles.progressWidth < this._styles.ringWidth ? -1 !== this._modifiers.indexOf("align-center") ? this._styles.progressRadius = this._styles.ringRadius : -1 !== this._modifiers.indexOf("align-bottom") ? this._styles.progressRadius = i - (this._styles.ringWidth - .5 * this._styles.progressWidth) : -1 !== this._modifiers.indexOf("align-inside") && (this._styles.progressRadius = i - (this._styles.ringWidth + .5 * this._styles.progressWidth)) : -1 !== this._modifiers.indexOf("align-center") ? this._styles.ringRadius = this._styles.progressRadius : -1 !== this._modifiers.indexOf("align-bottom") ? this._styles.ringRadius = i - (this._styles.progressWidth - .5 * this._styles.ringWidth) : -1 !== this._modifiers.indexOf("align-inside") && (this._styles.ringRadius = i - (this._styles.progressWidth + .5 * this._styles.ringWidth)), -1 !== this._modifiers.indexOf("glow-progress") && this._styles.progressShadow && (this._styles.progressShadow[this._styles.progressShadow.length - 1] = null !== this._styles.progressColor.gradient.colors ? this._styles.progressColor.gradient.colors[0] : this._styles.progressColor.fill), -1 !== this._modifiers.indexOf("glow-background") && this._styles.ringShadow && (this._styles.ringShadow[this._styles.ringShadow.length - 1] = null !== this._styles.ringColor.gradient.colors ? this._styles.ringColor.gradient.colors[0] : this._styles.ringColor.fill), this._drawn = !1
          }
        }, _tick: function (a) {
          if (!this._destroyed) {
            null !== this._target && this._draw(a);
            var b = this;
            window.requestAnimationFrame(function (a) {
              b._tick(a)
            })
          }
        }, _draw: function (b) {
          if (this._animate) {
            var c = b - this._lastTick, d = 250 > c ? 1e3 / c : 30;
            if (this._lastTick = b, this._current === this._target && this._drawn) return;
            this._current += (this._target - this._current) / (d / 3), Math.abs(this._current - this._target) <= .001 && (this._current = this._target)
          } else this._current = this._target;
          var e = this._canvas.getContext("2d");
          e.clearRect(0, 0, this._canvas.width, this._canvas.height);
          var f = this._styles.flip ? 1 - this._current : this._current;
          a.drawRing(e, f, this._styles.offset, this._styles.length, this._styles.gap, this._styles.size, this._styles.ringRadius, this._styles.ringWidth, this._styles.ringColor, this._styles.ringShadow, this._styles.progressRadius, this._styles.progressWidth, this._styles.progressColor, this._styles.progressShadow, this._styles.cap, this._styles.invert), this._drawn = !0
        }, setValue: function (b) {
          this._styles || this.redraw(), b = this._transform(b), this._target !== b && (null == this._target && (this._current = b), this._target = b), a.supportsAnimation() || (this._current = this._target, this._draw())
        }
      }, c
    }(B, E), C.Slot = function (a) {
      var b = function (a) {
        this._forceReplace = "undefined" == typeof a.forceReplace ? !1 : a.forceReplace, this._wrapper = document.createElement("span"), this._wrapper.className = "soon-slot " + (a.className || ""), this._transform = a.transform || function (a) {
          return a
        }, this._new = document.createElement("span"), this._new.className = "soon-slot-new", this._old = document.createElement("span"), this._old.className = "soon-slot-old", this._bounding = document.createElement("span"), this._bounding.className = "soon-slot-bounding", this._inner = document.createElement("span"), this._inner.className = "soon-slot-inner soon-slot-animate", this._inner.appendChild(this._old), this._inner.appendChild(this._new), this._inner.appendChild(this._bounding), this._wrapper.appendChild(this._inner), this._newValue = "", this._oldValue = "", this._boundingLength = 0
      };
      return b.prototype = {
        redraw: function () {
        }, destroy: function () {
          return this._wrapper
        }, getElement: function () {
          return this._wrapper
        }, _isEmpty: function () {
          return !this._newValue
        }, _isSame: function (a) {
          return this._newValue === a
        }, _setBoundingForValue: function (a) {
          var b = (a + "").length;
          if (b !== this._boundingLength) {
            this._boundingLength = b;
            for (var c = "", d = 0; b > d; d++) c += "8";
            this._bounding.textContent = c;
            var e = parseInt(getComputedStyle(this._wrapper).fontSize, 10),
              f = this._bounding.offsetWidth / e;
            this._inner.style.width = f + .1 * (b - 1) + "em"
          }
        }, _setNewValue: function (a) {
          this._newValue = a, " " !== a && (this._new.textContent = a)
        }, _setOldValue: function (a) {
          this._oldValue = a, this._old.textContent = a
        }, setValue: function (b) {
          b = this._transform(b), this._isEmpty() ? (this._setNewValue(b), this._setBoundingForValue(b), a.triggerAnimation(this._inner, "soon-slot-animate")) : this._isSame(b) && !this._forceReplace || (this._newValue.length && this._setOldValue(this._newValue), this._setNewValue(b), this._setBoundingForValue(b), a.triggerAnimation(this._inner, "soon-slot-animate"))
        }
      }, b
    }(B), C.Text = function (a) {
      var b = function (a) {
        this._wrapper = document.createElement("span"), this._wrapper.className = "soon-text " + (a.className || ""), this._transform = a.transform || function (a) {
          return a
        }
      };
      return b.prototype = {
        redraw: function () {
        }, destroy: function () {
          return this._wrapper
        }, getElement: function () {
          return this._wrapper
        }, setValue: function (b) {
          a.setTextContent(this._wrapper, this._transform(b))
        }
      }, b
    }(B);
    var F = function (a, b) {
        var c = function (a, c) {
          c = c || {}, this._rate = c.rate || 1e3, this._offset = null, this._time = 0, this._paused = !1, this._nextTickReference = null, this._tickBind = this._tick.bind(this), this._onTick = a || function () {
          }, "addEventListener" in document && document.addEventListener(b.documentVisibilityEvent, this)
        };
        return c.prototype = {
          handleEvent: function () {
            b.isDocumentHidden() ? this._lock() : this._unlock()
          }, isRunning: function () {
            return null !== this._offset
          }, isPaused: function () {
            return this.isRunning() && this._paused
          }, start: function () {
            this.isRunning() || this.reset()
          }, getTime: function () {
            return this._time
          }, reset: function () {
            this.pause(), this._offset = (new Date).getTime(), this._time = 0, this.resume()
          }, stop: function () {
            var a = this;
            setTimeout(function () {
              a._clearTimer(), a._offset = null
            }, 0)
          }, pause: function () {
            this._paused = !0, this._clearTimer()
          }, resume: function () {
            if (this.isPaused()) {
              this._paused = !1;
              var a = (new Date).getTime();
              this._time += a - this._offset, this._offset = a, this._tick()
            }
          }, _clearTimer: function () {
            clearTimeout(this._nextTickReference), this._nextTickReference = null
          }, _lock: function () {
            this._clearTimer()
          }, _unlock: function () {
            this.isPaused() || (this.pause(), this.resume())
          }, _tick: function () {
            this._onTick(this._time), this._offset += this._rate, this._time += this._rate, this._nextTickReference = a.setTimeout(this._tickBind, this._offset - (new Date).getTime())
          }
        }, c
      }(this, B), G = [], H = 0, I = ["xxl", "xl", "l", "m", "s", "xs", "xxs"],
      J = 3, K = (I.length, []), L = [], M = {
        y: {labels: "Year,Years", option: "Years", padding: ""},
        M: {labels: "Month,Months", option: "Months", padding: "00"},
        w: {labels: "Week,Weeks", option: "Weeks", padding: "00"},
        d: {labels: "Day,Days", option: "Days", padding: "000"},
        h: {labels: "Hour,Hours", option: "Hours", padding: "00"},
        m: {labels: "Minute,Minutes", option: "Minutes", padding: "00"},
        s: {labels: "Second,Seconds", option: "Seconds", padding: "00"},
        ms: {
          labels: "Millisecond,Milliseconds",
          option: "Milliseconds",
          padding: "000"
        }
      };
    E.register(d);
    var N = /([\d]+)[\s]+([a-z]+)/i, O = /([\d]+)[:]*([\d]{2})*[:]*([\d]{2})*/;
    A.parse = function (a) {
      w(a)
    }, A.redraw = function (a) {
      if (a) {
        var b = j(a);
        f(b.node, b.presenter)
      } else g()
    }, A.reset = function (a) {
      var b = j(a);
      b && b.ticker.reset()
    }, A.freeze = function (a) {
      var b = j(a);
      b && b.ticker.pause()
    }, A.unfreeze = function (a) {
      var b = j(a);
      b && b.ticker.resume()
    }, A.setOption = function (a, b, c) {
      var d = j(a);
      if (d) {
        var e = d.options;
        e[b] = c, this.destroy(a), this.create(a, e)
      }
    }, A.setOptions = function (a, b) {
      var c = j(a);
      if (c) {
        var d, e = c.options;
        for (d in b) b.hasOwnProperty(d) && (e[d] = b[d]);
        this.destroy(a), this.create(a, b)
      }
    }, A.destroy = function (a) {
      var b = h(a);
      if (null !== b) {
        var c = i(a);
        null !== c && L.splice(c, 1);
        var d = K[b];
        d.ticker && d.ticker.stop(), d.presenter.destroy();
        var e = d.node.querySelector(".soon-placeholder");
        d.node.removeChild(e ? e : d.node.querySelector(".soon-group")), a.removeAttribute("data-initialized"), K.splice(b, 1)
      }
    }, A.create = function (a, b) {
      if (!b) return w(a);
      if ("true" === a.getAttribute("data-initialized")) return null;
      a.setAttribute("data-initialized", "true");
      var c = null, d = null;
      b.eventComplete && (c = "string" == typeof b.eventComplete ? window[b.eventComplete] : b.eventComplete), b.eventTick && (d = "string" == typeof b.eventTick ? window[b.eventTick] : b.eventTick), b.due && -1 !== b.due.indexOf("reset") && (c = z(a, b, c), b.eventComplete = c), l(a, b, "layout"), l(a, b, "face"), l(a, b, "visual"), l(a, b, "format"), b.scaleMax && a.setAttribute("data-scale-max", b.scaleMax), b.scaleHide && a.setAttribute("data-scale-hide", b.scaleHide);
      var e, f, g, h = (b.format || "d,h,m,s").split(","),
        i = -1 === h.indexOf("ms") ? 1e3 : 24, j = {};
      for (e in M) M.hasOwnProperty(e) && (f = M[e], g = (b["labels" + f.option] || f.labels).split(","), j[e] = g[0], j[e + "_s"] = g[1] || g[0]);
      var m = "undefined" == typeof b.padding ? !0 : b.padding, n = {};
      for (e in M) M.hasOwnProperty(e) && (f = M[e], m ? (n[e] = y(e, h), null === n[e] && (n[e] = f.padding), b["padding" + f.option] && (n[e] = b["padding" + f.option])) : n[e] = "");
      var p = (b.face || "text ").split(" ")[0], q = b.due ? x(b.due) : null,
        r = b.since ? B.isoToDate(b.since) : null,
        s = b.now ? B.isoToDate(b.now) : r ? null : new Date, t = {
          due: q,
          since: r,
          now: s,
          view: p,
          visual: b.visual || null,
          format: h,
          separator: b.separator || null,
          cascade: "undefined" == typeof b.cascade ? !0 : B.toBoolean(b.cascade),
          singular: b.singular,
          reflect: b.reflect || !1,
          chars: "undefined" == typeof b.separateChars ? !0 : B.toBoolean(b.separateChars),
          label: j,
          padding: n,
          callback: {
            onComplete: c || function () {
            }, onTick: d || function () {
            }
          }
        };
      B.isSlow() && (t.view = "text", t.reflect = !1, t.visual = null);
      var A = null, C = o(t, function () {
        A && A.stop(), t.callback.onComplete()
      });
      k(a);
      var D = u(a, C);
      return A = v(a, D, i, b)
    };
    var P;
    !function (a) {
      P = a()
    }(function (a) {
      function b(a) {
        for (n = 1; a = d.shift();) a()
      }

      var c, d = [], e = !1, f = document, g = f.documentElement,
        h = g.doScroll, i = "DOMContentLoaded", j = "addEventListener",
        k = "onreadystatechange", l = "readyState",
        m = h ? /^loaded|^c/ : /^loaded|c/, n = m.test(f[l]);
      return f[j] && f[j](i, c = function () {
        f.removeEventListener(i, c, e), b()
      }, e), h && f.attachEvent(k, c = function () {
        /^c/.test(f[l]) && (f.detachEvent(k, c), b())
      }), a = h ? function (b) {
        self != top ? n ? b() : d.push(b) : function () {
          try {
            g.doScroll("left")
          } catch (c) {
            return setTimeout(function () {
              a(b)
            }, 50)
          }
          b()
        }()
      } : function (a) {
        n ? a() : d.push(a)
      }
    }), P(function () {
      var a = document.querySelector("script[src*=soon]");
      if (!a || "false" !== a.getAttribute("data-auto")) for (var b = document.getElementsByClassName ? document.getElementsByClassName("soon") : document.querySelectorAll(".soon"), c = 0, d = b.length; d > c; c++) w(b[c])
    }), function (a, b) {
      "use strict";
      if (b) {
        var c = ["destroy", "reset", "resize", "freeze", "unfreeze", "redraw"],
          d = c.length;
        b.fn.soon = function () {
          var b = this;
          b.create = function (b) {
            return this.each(function () {
              a.create(this, b)
            })
          }, b.setOption = function (b, c) {
            return this.each(function () {
              a.setOption(this, b, c)
            })
          }, b.setOptions = function (b) {
            return this.each(function () {
              a.setOptions(this, b)
            })
          };
          for (var e = 0; d > e; e++) !function (c) {
            b[c] = function () {
              return this.each(function () {
                a[c](this)
              })
            }
          }(c[e]);
          return this
        }
      }
    }(A, b), "undefined" != typeof module && module.exports ? module.exports = A : "function" == typeof define && define.amd ? define(function () {
      return A
    }) : a.Soon = A
  }
}(window, window.jQuery);

/*
 *  jQuery Pagination Plugin
 * -----------------------------------------------
*/

/*
Pajinate - jQuery Pagination Plugin
Author:    Wesley Nolte
*/
;(function ($) {
  $.fn.pajinate = function (options) {
    var current_page = "current_page";
    var items_per_page = "items_per_page";
    var meta;
    var defaults = {
      item_container_id: ".content",
      items_per_page: 10,
      nav_panel_id: ".page_navigation",
      nav_info_id: ".info_text",
      num_page_links_to_display: 20,
      start_page: 0,
      wrap_around: false,
      nav_label_first: "First",
      nav_label_prev: "Prev",
      nav_label_next: "Next",
      nav_label_last: "Last",
      nav_order: ["first", "prev", "num", "next", "last"],
      nav_label_info: "Showing {0}-{1} of {2} results",
      show_first_last: true,
      abort_on_small_lists: false,
      jquery_ui: false,
      jquery_ui_active: "ui-state-highlight",
      jquery_ui_default: "ui-state-default",
      jquery_ui_disabled: "ui-state-disabled"
    };
    var options = $.extend(defaults, options);
    var $item_container;
    var $page_container;
    var $items;
    var $nav_panels;
    var total_page_no_links;
    var jquery_ui_default_class = options.jquery_ui ? options.jquery_ui_default : "";
    var jquery_ui_active_class = options.jquery_ui ? options.jquery_ui_active : "";
    var jquery_ui_disabled_class = options.jquery_ui ? options.jquery_ui_disabled : "";
    return this.each(function () {
      $page_container = $(this);
      $item_container = $(this).find(options.item_container_id);
      $items = $page_container.find(options.item_container_id).children();
      if (options.abort_on_small_lists && options.items_per_page >= $items.size()) {
        return $page_container
      }
      meta = $page_container;
      meta.data(current_page, 0);
      meta.data(items_per_page, options.items_per_page);
      var total_items = $item_container.children().size();
      var number_of_pages = Math.ceil(total_items / options.items_per_page);
      var more = '<li class="disabled ellipse more"><span>...</span></li>';
      var less = '<li class="disabled ellipse less"><span>...</span></li>';
      var first = !options.show_first_last ? "" : '<li class="first_link ' + jquery_ui_default_class + '"><a href="#">' + options.nav_label_first + "</a></li>";
      var last = !options.show_first_last ? "" : '<li class="last_link ' + jquery_ui_default_class + '"><a href="#">' + options.nav_label_last + "</a></li>";
      var navigation_html = "";
      for (var i = 0; i < options.nav_order.length; i++) {
        switch (options.nav_order[i]) {
          case"first":
            navigation_html += first;
            break;
          case"last":
            navigation_html += last;
            break;
          case"next":
            navigation_html += '<li class="next_link ' + jquery_ui_default_class + '"><a href="#">' + options.nav_label_next + "</a></li>";
            break;
          case"prev":
            navigation_html += '<li class="previous_link ' + jquery_ui_default_class + '"><a href="#">' + options.nav_label_prev + "</a></li>";
            break;
          case"num":
            navigation_html += less;
            var current_link = 0;
            while (number_of_pages > current_link) {
              navigation_html += '<li class="page_link ' + jquery_ui_default_class + '" longdesc="' + current_link + '"><a href="#">' + (current_link + 1) + "</a></li>";
              current_link++
            }
            navigation_html += more;
            break;
          default:
            break
        }
      }
      $nav_panels = $page_container.find(options.nav_panel_id);
      $nav_panels.html(navigation_html).each(function () {
        $(this).find(".page_link:first").addClass("first");
        $(this).find(".page_link:last").addClass("last")
      });
      $nav_panels.children(".ellipse").hide();
      $nav_panels.find(".previous_link").next().next().addClass("active " + jquery_ui_active_class);
      $items.hide();
      $items.slice(0, meta.data(items_per_page)).show();
      total_page_no_links = $page_container.find(options.nav_panel_id + ":first").children(".page_link").size();
      options.num_page_links_to_display = Math.min(options.num_page_links_to_display, total_page_no_links);
      $nav_panels.children(".page_link").hide();
      $nav_panels.each(function () {
        $(this).children(".page_link").slice(0, options.num_page_links_to_display).show()
      });
      $page_container.find(".first_link").click(function (e) {
        e.preventDefault();
        movePageNumbersRight($(this), 0);
        gotopage(0)
      });
      $page_container.find(".last_link").click(function (e) {
        e.preventDefault();
        var lastPage = total_page_no_links - 1;
        movePageNumbersLeft($(this), lastPage);
        gotopage(lastPage)
      });
      $page_container.find(".previous_link").click(function (e) {
        e.preventDefault();
        showPrevPage($(this))
      });
      $page_container.find(".next_link").click(function (e) {
        e.preventDefault();
        showNextPage($(this))
      });
      $page_container.find(".page_link").click(function (e) {
        e.preventDefault();
        gotopage($(this).attr("longdesc"))
      });
      gotopage(parseInt(options.start_page));
      toggleMoreLess();
      if (!options.wrap_around) {
        tagNextPrev()
      }
    });

    function showPrevPage(e) {
      new_page = parseInt(meta.data(current_page)) - 1;
      if ($(e).siblings(".active").prev(".page_link").length == true) {
        movePageNumbersRight(e, new_page);
        gotopage(new_page)
      } else {
        if (options.wrap_around) {
          gotopage(total_page_no_links - 1)
        }
      }
    }

    function showNextPage(e) {
      new_page = parseInt(meta.data(current_page)) + 1;
      if ($(e).siblings(".active").next(".page_link").length == true) {
        movePageNumbersLeft(e, new_page);
        gotopage(new_page)
      } else {
        if (options.wrap_around) {
          gotopage(0)
        }
      }
    }

    function gotopage(page_num) {
      page_num = parseInt(page_num, 10);
      var ipp = parseInt(meta.data(items_per_page));
      start_from = page_num * ipp;
      end_on = start_from + ipp;
      var items = $items.hide().slice(start_from, end_on);
      items.fadeIn(700);
      $page_container.find(options.nav_panel_id).children(".page_link[longdesc=" + page_num + "]").addClass("active " + jquery_ui_active_class).siblings(".active").removeClass("active " + jquery_ui_active_class);
      meta.data(current_page, page_num);
      var $current_page = parseInt(meta.data(current_page) + 1);
      var total_items = $item_container.children().size();
      var $number_of_pages = Math.ceil(total_items / options.items_per_page);
      $page_container.find(options.nav_info_id).html(options.nav_label_info.replace("{0}", start_from + 1).replace("{1}", start_from + items.length).replace("{2}", $items.length).replace("{3}", $current_page).replace("{4}", $number_of_pages));
      toggleMoreLess();
      tagNextPrev();
      if (typeof (options.onPageDisplayed) !== "undefined") {
        options.onPageDisplayed.call(this, page_num + 1)
      }
    }

    function movePageNumbersLeft(e, new_p) {
      var new_page = new_p;
      var $current_active_link = $(e).siblings(".active");
      if ($current_active_link.siblings(".page_link[longdesc=" + new_page + "]").css("display") == "none") {
        $nav_panels.each(function () {
          $(this).children(".page_link").hide().slice(parseInt(new_page - options.num_page_links_to_display + 1), new_page + 1).show()
        })
      }
    }

    function movePageNumbersRight(e, new_p) {
      var new_page = new_p;
      var $current_active_link = $(e).siblings(".active");
      if ($current_active_link.siblings(".page_link[longdesc=" + new_page + "]").css("display") == "none") {
        $nav_panels.each(function () {
          $(this).children(".page_link").hide().slice(new_page, new_page + parseInt(options.num_page_links_to_display)).show()
        })
      }
    }

    function toggleMoreLess() {
    }

    function tagNextPrev() {
      if ($nav_panels.children(".last").hasClass("active")) {
        $nav_panels.children(".next_link").add(".last_link").addClass("no_more " + jquery_ui_disabled_class)
      } else {
        $nav_panels.children(".next_link").add(".last_link").removeClass("no_more " + jquery_ui_disabled_class)
      }
      if ($nav_panels.children(".first").hasClass("active")) {
        $nav_panels.children(".previous_link").add(".first_link").addClass("no_more " + jquery_ui_disabled_class)
      } else {
        $nav_panels.children(".previous_link").add(".first_link").removeClass("no_more " + jquery_ui_disabled_class)
      }
    }
  }
})(jQuery);
