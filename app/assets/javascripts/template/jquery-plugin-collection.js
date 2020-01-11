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


/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
  function n(e) {
    return u.raw ? e : encodeURIComponent(e)
  }

  function o(e) {
    return u.raw ? e : decodeURIComponent(e)
  }

  function i(e) {
    return n(u.json ? JSON.stringify(e) : String(e))
  }

  function t(e) {
    0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
    try {
      return e = decodeURIComponent(e.replace(c, " ")), u.json ? JSON.parse(e) : e
    } catch (n) {
    }
  }

  function r(n, o) {
    var i = u.raw ? n : t(n);
    return e.isFunction(o) ? o(i) : i
  }

  var c = /\+/g, u = e.cookie = function (t, c, s) {
    if (arguments.length > 1 && !e.isFunction(c)) {
      if (s = e.extend({}, u.defaults, s), "number" == typeof s.expires) {
        var a = s.expires, d = s.expires = new Date;
        d.setMilliseconds(d.getMilliseconds() + 864e5 * a)
      }
      return document.cookie = [n(t), "=", i(c), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("")
    }
    for (var f = t ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], l = 0, m = p.length; m > l; l++) {
      var x = p[l].split("="), g = o(x.shift()), j = x.join("=");
      if (t === g) {
        f = r(j, c);
        break
      }
      t || void 0 === (j = r(j)) || (f[g] = j)
    }
    return f
  };
  u.defaults = {}, e.removeCookie = function (n, o) {
    return e.cookie(n, "", e.extend({}, o, {expires: -1})), !e.cookie(n)
  }
});


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
 *  Typed Animation
 * -----------------------------------------------
*/
!function (t) {
  "use strict";
  var s = function (s, e) {
    this.el = t(s), this.options = t.extend({}, t.fn.typed.defaults, e), this.isInput = this.el.is("input"), this.attr = this.options.attr, this.showCursor = this.isInput ? !1 : this.options.showCursor, this.elContent = this.attr ? this.el.attr(this.attr) : this.el.text(), this.contentType = this.options.contentType, this.typeSpeed = this.options.typeSpeed, this.startDelay = this.options.startDelay, this.backSpeed = this.options.backSpeed, this.backDelay = this.options.backDelay, this.stringsElement = this.options.stringsElement, this.strings = this.options.strings, this.strPos = 0, this.arrayPos = 0, this.stopNum = 0, this.loop = this.options.loop, this.loopCount = this.options.loopCount, this.curLoop = 0, this.stop = !1, this.cursorChar = this.options.cursorChar, this.shuffle = this.options.shuffle, this.sequence = [], this.build()
  };
  s.prototype = {
    constructor: s, init: function () {
      var t = this;
      t.timeout = setTimeout(function () {
        for (var s = 0; s < t.strings.length; ++s) t.sequence[s] = s;
        t.shuffle && (t.sequence = t.shuffleArray(t.sequence)), t.typewrite(t.strings[t.sequence[t.arrayPos]], t.strPos)
      }, t.startDelay)
    }, build: function () {
      var s = this;
      if (this.showCursor === !0 && (this.cursor = t('<span class="typed-cursor">' + this.cursorChar + "</span>"), this.el.after(this.cursor)), this.stringsElement) {
        s.strings = [], this.stringsElement.hide();
        var e = this.stringsElement.find("p");
        t.each(e, function (e, i) {
          s.strings.push(t(i).html())
        })
      }
      this.init()
    }, typewrite: function (t, s) {
      if (this.stop !== !0) {
        var e = Math.round(70 * Math.random()) + this.typeSpeed, i = this;
        i.timeout = setTimeout(function () {
          var e = 0, r = t.substr(s);
          if ("^" === r.charAt(0)) {
            var o = 1;
            /^\^\d+/.test(r) && (r = /\d+/.exec(r)[0], o += r.length, e = parseInt(r)), t = t.substring(0, s) + t.substring(s + o)
          }
          if ("html" === i.contentType) {
            var n = t.substr(s).charAt(0);
            if ("<" === n || "&" === n) {
              var a = "", h = "";
              for (h = "<" === n ? ">" : ";"; t.substr(s).charAt(0) !== h;) a += t.substr(s).charAt(0), s++;
              s++, a += h
            }
          }
          i.timeout = setTimeout(function () {
            if (s === t.length) {
              if (i.options.onStringTyped(i.arrayPos), i.arrayPos === i.strings.length - 1 && (i.options.callback(), i.curLoop++, i.loop === !1 || i.curLoop === i.loopCount)) return;
              i.timeout = setTimeout(function () {
                i.backspace(t, s)
              }, i.backDelay)
            } else {
              0 === s && i.options.preStringTyped(i.arrayPos);
              var e = t.substr(0, s + 1);
              i.attr ? i.el.attr(i.attr, e) : i.isInput ? i.el.val(e) : "html" === i.contentType ? i.el.html(e) : i.el.text(e), s++, i.typewrite(t, s)
            }
          }, e)
        }, e)
      }
    }, backspace: function (t, s) {
      if (this.stop !== !0) {
        var e = Math.round(70 * Math.random()) + this.backSpeed, i = this;
        i.timeout = setTimeout(function () {
          if ("html" === i.contentType && ">" === t.substr(s).charAt(0)) {
            for (var e = ""; "<" !== t.substr(s).charAt(0);) e -= t.substr(s).charAt(0), s--;
            s--, e += "<"
          }
          var r = t.substr(0, s);
          i.attr ? i.el.attr(i.attr, r) : i.isInput ? i.el.val(r) : "html" === i.contentType ? i.el.html(r) : i.el.text(r), s > i.stopNum ? (s--, i.backspace(t, s)) : s <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.shuffle && (i.sequence = i.shuffleArray(i.sequence)), i.init()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], s))
        }, e)
      }
    }, shuffleArray: function (t) {
      var s, e, i = t.length;
      if (i) for (; --i;) e = Math.floor(Math.random() * (i + 1)), s = t[e], t[e] = t[i], t[i] = s;
      return t
    }, reset: function () {
      var t = this;
      clearInterval(t.timeout);
      var s = this.el.attr("id");
      this.el.after('<span id="' + s + '"/>'), this.el.remove(), "undefined" != typeof this.cursor && this.cursor.remove(), t.options.resetCallback()
    }
  }, t.fn.typed = function (e) {
    return this.each(function () {
      var i = t(this), r = i.data("typed"), o = "object" == typeof e && e;
      r || i.data("typed", r = new s(this, o)), "string" == typeof e && r[e]()
    })
  }, t.fn.typed.defaults = {
    strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
    stringsElement: null,
    typeSpeed: 0,
    startDelay: 0,
    backSpeed: 0,
    shuffle: !1,
    backDelay: 500,
    loop: !1,
    loopCount: !1,
    showCursor: !0,
    cursorChar: "|",
    attr: null,
    contentType: "html",
    callback: function () {
    },
    preStringTyped: function () {
    },
    onStringTyped: function () {
    },
    resetCallback: function () {
    }
  }
}(window.jQuery);


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
 *  Nivo Lightbox
 * -----------------------------------------------
*/
/*
* Nivo Lightbox v1.2.0
* http://dev7studios.com/nivo-lightbox
*
* Copyright 2013, Dev7studios
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/
(function (e, t, n, r) {
  function o(t, n) {
    this.el = t;
    this.$el = e(this.el);
    this.options = e.extend({}, s, n);
    this._defaults = s;
    this._name = i;
    this.init()
  }

  var i = "nivoLightbox", s = {
    effect: "fade",
    theme: "default",
    keyboardNav: true,
    clickOverlayToClose: true,
    onInit: function () {
    },
    beforeShowLightbox: function () {
    },
    afterShowLightbox: function (e) {
    },
    beforeHideLightbox: function () {
    },
    afterHideLightbox: function () {
    },
    onPrev: function (e) {
    },
    onNext: function (e) {
    },
    errorMessage: "The requested content cannot be loaded. Please try again later."
  };
  o.prototype = {
    init: function () {
      var t = this;
      if (!e("html").hasClass("nivo-lightbox-notouch")) e("html").addClass("nivo-lightbox-notouch");
      if ("ontouchstart" in n) e("html").removeClass("nivo-lightbox-notouch");
      this.$el.on("click", function (e) {
        t.showLightbox(e)
      });
      if (this.options.keyboardNav) {
        e("body").off("keyup").on("keyup", function (n) {
          var r = n.keyCode ? n.keyCode : n.which;
          if (r == 27) t.destructLightbox();
          if (r == 37) e(".nivo-lightbox-prev").trigger("click");
          if (r == 39) e(".nivo-lightbox-next").trigger("click")
        })
      }
      this.options.onInit.call(this)
    }, showLightbox: function (t) {
      var n = this, r = this.$el;
      var i = this.checkContent(r);
      if (!i) return;
      t.preventDefault();
      this.options.beforeShowLightbox.call(this);
      var s = this.constructLightbox();
      if (!s) return;
      var o = s.find(".nivo-lightbox-content");
      if (!o) return;
      e("body").addClass("nivo-lightbox-body-effect-" + this.options.effect);
      this.processContent(o, r);
      if (this.$el.attr("data-lightbox-gallery")) {
        var u = e('[data-lightbox-gallery="' + this.$el.attr("data-lightbox-gallery") + '"]');
        e(".nivo-lightbox-nav").show();
        e(".nivo-lightbox-prev").off("click").on("click", function (t) {
          t.preventDefault();
          var i = u.index(r);
          r = u.eq(i - 1);
          if (!e(r).length) r = u.last();
          n.processContent(o, r);
          n.options.onPrev.call(this, [r])
        });
        e(".nivo-lightbox-next").off("click").on("click", function (t) {
          t.preventDefault();
          var i = u.index(r);
          r = u.eq(i + 1);
          if (!e(r).length) r = u.first();
          n.processContent(o, r);
          n.options.onNext.call(this, [r])
        })
      }
      setTimeout(function () {
        s.addClass("nivo-lightbox-open");
        n.options.afterShowLightbox.call(this, [s])
      }, 1)
    }, checkContent: function (e) {
      var t = this, n = e.attr("href"),
        r = n.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);
      if (n.match(/\.(jpeg|jpg|gif|png)$/i) !== null) {
        return true
      } else if (r) {
        return true
      } else if (e.attr("data-lightbox-type") == "ajax") {
        return true
      } else if (n.substring(0, 1) == "#" && e.attr("data-lightbox-type") == "inline") {
        return true
      } else if (e.attr("data-lightbox-type") == "iframe") {
        return true
      }
      return false
    }, processContent: function (n, r) {
      var i = this, s = r.attr("href"),
        o = s.match(/(youtube|youtu|vimeo)\.(com|be)\/(watch\?v=([\w-]+)|([\w-]+))/);
      n.html("").addClass("nivo-lightbox-loading");
      if (this.isHidpi() && r.attr("data-lightbox-hidpi")) {
        s = r.attr("data-lightbox-hidpi")
      }
      if (s.match(/\.(jpeg|jpg|gif|png)$/i) !== null) {
        var u = e("<img>", {src: s});
        u.one("load", function () {
          var r = e('<div class="nivo-lightbox-image" />');
          r.append(u);
          n.html(r).removeClass("nivo-lightbox-loading");
          r.css({
            "line-height": e(".nivo-lightbox-content").height() + "px",
            height: e(".nivo-lightbox-content").height() + "px"
          });
          e(t).resize(function () {
            r.css({
              "line-height": e(".nivo-lightbox-content").height() + "px",
              height: e(".nivo-lightbox-content").height() + "px"
            })
          })
        }).each(function () {
          if (this.complete) e(this).load()
        });
        u.error(function () {
          var t = e('<div class="nivo-lightbox-error"><p>' + i.options.errorMessage + "</p></div>");
          n.html(t).removeClass("nivo-lightbox-loading")
        })
      } else if (o) {
        var a = "", f = "nivo-lightbox-video";
        if (o[1] == "youtube") {
          a = "http://www.youtube.com/embed/" + o[4];
          f = "nivo-lightbox-youtube"
        }
        if (o[1] == "youtu") {
          a = "http://www.youtube.com/embed/" + o[3];
          f = "nivo-lightbox-youtube"
        }
        if (o[1] == "vimeo") {
          a = "http://player.vimeo.com/video/" + o[3];
          f = "nivo-lightbox-vimeo"
        }
        if (a) {
          var l = e("<iframe>", {
            src: a,
            "class": f,
            frameborder: 0,
            vspace: 0,
            hspace: 0,
            scrolling: "auto"
          });
          n.html(l);
          l.load(function () {
            n.removeClass("nivo-lightbox-loading")
          })
        }
      } else if (r.attr("data-lightbox-type") == "ajax") {
        e.ajax({
          url: s, cache: false, success: function (r) {
            var i = e('<div class="nivo-lightbox-ajax" />');
            i.append(r);
            n.html(i).removeClass("nivo-lightbox-loading");
            if (i.outerHeight() < n.height()) {
              i.css({
                position: "relative",
                top: "50%",
                "margin-top": -(i.outerHeight() / 2) + "px"
              })
            }
            e(t).resize(function () {
              if (i.outerHeight() < n.height()) {
                i.css({
                  position: "relative",
                  top: "50%",
                  "margin-top": -(i.outerHeight() / 2) + "px"
                })
              }
            })
          }, error: function () {
            var t = e('<div class="nivo-lightbox-error"><p>' + i.options.errorMessage + "</p></div>");
            n.html(t).removeClass("nivo-lightbox-loading")
          }
        })
      } else if (s.substring(0, 1) == "#" && r.attr("data-lightbox-type") == "inline") {
        if (e(s).length) {
          var c = e('<div class="nivo-lightbox-inline" />');
          c.append(e(s).clone().show());
          n.html(c).removeClass("nivo-lightbox-loading");
          if (c.outerHeight() < n.height()) {
            c.css({
              position: "relative",
              top: "50%",
              "margin-top": -(c.outerHeight() / 2) + "px"
            })
          }
          e(t).resize(function () {
            if (c.outerHeight() < n.height()) {
              c.css({
                position: "relative",
                top: "50%",
                "margin-top": -(c.outerHeight() / 2) + "px"
              })
            }
          })
        } else {
          var h = e('<div class="nivo-lightbox-error"><p>' + i.options.errorMessage + "</p></div>");
          n.html(h).removeClass("nivo-lightbox-loading")
        }
      } else if (r.attr("data-lightbox-type") == "iframe") {
        var p = e("<iframe>", {
          src: s,
          "class": "nivo-lightbox-item",
          frameborder: 0,
          vspace: 0,
          hspace: 0,
          scrolling: "auto"
        });
        n.html(p);
        p.load(function () {
          n.removeClass("nivo-lightbox-loading")
        })
      } else {
        return false
      }
      if (r.attr("title")) {
        var d = e("<span>", {"class": "nivo-lightbox-title"});
        d.text(r.attr("title"));
        e(".nivo-lightbox-title-wrap").html(d)
      } else {
        e(".nivo-lightbox-title-wrap").html("")
      }
    }, constructLightbox: function () {
      if (e(".nivo-lightbox-overlay").length) return e(".nivo-lightbox-overlay");
      var t = e("<div>", {"class": "nivo-lightbox-overlay nivo-lightbox-theme-" + this.options.theme + " nivo-lightbox-effect-" + this.options.effect});
      var n = e("<div>", {"class": "nivo-lightbox-wrap"});
      var r = e("<div>", {"class": "nivo-lightbox-content"});
      var i = e('<a href="#" class="nivo-lightbox-nav nivo-lightbox-prev">Previous</a><a href="#" class="nivo-lightbox-nav nivo-lightbox-next">Next</a>');
      var s = e('<a href="#" class="nivo-lightbox-close" title="Close">Close</a>');
      var o = e("<div>", {"class": "nivo-lightbox-title-wrap"});
      var u = 0;
      if (u) t.addClass("nivo-lightbox-ie");
      n.append(r);
      n.append(o);
      t.append(n);
      t.append(i);
      t.append(s);
      e("body").append(t);
      var a = this;
      if (a.options.clickOverlayToClose) {
        t.on("click", function (t) {
          if (t.target === this || e(t.target).hasClass("nivo-lightbox-content") || e(t.target).hasClass("nivo-lightbox-image")) {
            a.destructLightbox()
          }
        })
      }
      s.on("click", function (e) {
        e.preventDefault();
        a.destructLightbox()
      });
      return t
    }, destructLightbox: function () {
      var t = this;
      this.options.beforeHideLightbox.call(this);
      e(".nivo-lightbox-overlay").removeClass("nivo-lightbox-open");
      e(".nivo-lightbox-nav").hide();
      e("body").removeClass("nivo-lightbox-body-effect-" + t.options.effect);
      var n = 0;
      if (n) {
        e(".nivo-lightbox-overlay iframe").attr("src", " ");
        e(".nivo-lightbox-overlay iframe").remove()
      }
      e(".nivo-lightbox-prev").off("click");
      e(".nivo-lightbox-next").off("click");
      e(".nivo-lightbox-content").empty();
      this.options.afterHideLightbox.call(this)
    }, isHidpi: function () {
      var e = "(-webkit-min-device-pixel-ratio: 1.5),                              (min--moz-device-pixel-ratio: 1.5),                              (-o-min-device-pixel-ratio: 3/2),                              (min-resolution: 1.5dppx)";
      if (t.devicePixelRatio > 1) return true;
      if (t.matchMedia && t.matchMedia(e).matches) return true;
      return false
    }
  };
  e.fn[i] = function (t) {
    return this.each(function () {
      if (!e.data(this, i)) {
        e.data(this, i, new o(this, t))
      }
    })
  }
})(jQuery, window, document)

/*
 *  PrettyPhoto Lightbox
 * -----------------------------------------------
*/
/* ------------------------------------------------------------------------
	Class: prettyPhoto
	Use: Lightbox clone for jQuery
	Author: Stephane Caron (http://www.no-margin-for-errors.com)
	Version: 3.1.6
------------------------------------------------------------------------- */
!function (e) {
  function t() {
    var e = location.href;
    return hashtag = -1 !== e.indexOf("#prettyPhoto") ? decodeURI(e.substring(e.indexOf("#prettyPhoto") + 1, e.length)) : !1, hashtag && (hashtag = hashtag.replace(/<|>/g, "")), hashtag
  }

  function i() {
    "undefined" != typeof theRel && (location.hash = theRel + "/" + rel_index + "/")
  }

  function p() {
    -1 !== location.href.indexOf("#prettyPhoto") && (location.hash = "prettyPhoto")
  }

  function o(e, t) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var i = "[\\?&]" + e + "=([^&#]*)", p = new RegExp(i), o = p.exec(t);
    return null == o ? "" : o[1]
  }

  e.prettyPhoto = {version: "3.1.6"}, e.fn.prettyPhoto = function (a) {
    function s() {
      e(".pp_loaderIcon").hide(), projectedTop = scroll_pos.scrollTop + (I / 2 - f.containerHeight / 2), projectedTop < 0 && (projectedTop = 0), $ppt.fadeTo(settings.animation_speed, 1), $pp_pic_holder.find(".pp_content").animate({
        height: f.contentHeight,
        width: f.contentWidth
      }, settings.animation_speed), $pp_pic_holder.animate({
        top: projectedTop,
        left: j / 2 - f.containerWidth / 2 < 0 ? 0 : j / 2 - f.containerWidth / 2,
        width: f.containerWidth
      }, settings.animation_speed, function () {
        $pp_pic_holder.find(".pp_hoverContainer,#fullResImage").height(f.height).width(f.width), $pp_pic_holder.find(".pp_fade").fadeIn(settings.animation_speed), isSet && "image" == h(pp_images[set_position]) ? $pp_pic_holder.find(".pp_hoverContainer").show() : $pp_pic_holder.find(".pp_hoverContainer").hide(), settings.allow_expand && (f.resized ? e("a.pp_expand,a.pp_contract").show() : e("a.pp_expand").hide()), !settings.autoplay_slideshow || P || v || e.prettyPhoto.startSlideshow(), settings.changepicturecallback(), v = !0
      }), m(), a.ajaxcallback()
    }

    function n(t) {
      $pp_pic_holder.find("#pp_full_res object,#pp_full_res embed").css("visibility", "hidden"), $pp_pic_holder.find(".pp_fade").fadeOut(settings.animation_speed, function () {
        e(".pp_loaderIcon").show(), t()
      })
    }

    function r(t) {
      t > 1 ? e(".pp_nav").show() : e(".pp_nav").hide()
    }

    function l(e, t) {
      if (resized = !1, d(e, t), imageWidth = e, imageHeight = t, (k > j || b > I) && doresize && settings.allow_resize && !$) {
        for (resized = !0, fitting = !1; !fitting;) k > j ? (imageWidth = j - 200, imageHeight = t / e * imageWidth) : b > I ? (imageHeight = I - 200, imageWidth = e / t * imageHeight) : fitting = !0, b = imageHeight, k = imageWidth;
        (k > j || b > I) && l(k, b), d(imageWidth, imageHeight)
      }
      return {
        width: Math.floor(imageWidth),
        height: Math.floor(imageHeight),
        containerHeight: Math.floor(b),
        containerWidth: Math.floor(k) + 2 * settings.horizontal_padding,
        contentHeight: Math.floor(y),
        contentWidth: Math.floor(w),
        resized: resized
      }
    }

    function d(t, i) {
      t = parseFloat(t), i = parseFloat(i), $pp_details = $pp_pic_holder.find(".pp_details"), $pp_details.width(t), detailsHeight = parseFloat($pp_details.css("marginTop")) + parseFloat($pp_details.css("marginBottom")), $pp_details = $pp_details.clone().addClass(settings.theme).width(t).appendTo(e("body")).css({
        position: "absolute",
        top: -1e4
      }), detailsHeight += $pp_details.height(), detailsHeight = detailsHeight <= 34 ? 36 : detailsHeight, $pp_details.remove(), $pp_title = $pp_pic_holder.find(".ppt"), $pp_title.width(t), titleHeight = parseFloat($pp_title.css("marginTop")) + parseFloat($pp_title.css("marginBottom")), $pp_title = $pp_title.clone().appendTo(e("body")).css({
        position: "absolute",
        top: -1e4
      }), titleHeight += $pp_title.height(), $pp_title.remove(), y = i + detailsHeight, w = t, b = y + titleHeight + $pp_pic_holder.find(".pp_top").height() + $pp_pic_holder.find(".pp_bottom").height(), k = t
    }

    function h(e) {
      return e.match(/youtube\.com\/watch/i) || e.match(/youtu\.be/i) ? "youtube" : e.match(/vimeo\.com/i) ? "vimeo" : e.match(/\b.mov\b/i) ? "quicktime" : e.match(/\b.swf\b/i) ? "flash" : e.match(/\biframe=true\b/i) ? "iframe" : e.match(/\bajax=true\b/i) ? "ajax" : e.match(/\bcustom=true\b/i) ? "custom" : "#" == e.substr(0, 1) ? "inline" : "image"
    }

    function c() {
      if (doresize && "undefined" != typeof $pp_pic_holder) {
        if (scroll_pos = _(), contentHeight = $pp_pic_holder.height(), contentwidth = $pp_pic_holder.width(), projectedTop = I / 2 + scroll_pos.scrollTop - contentHeight / 2, projectedTop < 0 && (projectedTop = 0), contentHeight > I) return;
        $pp_pic_holder.css({
          top: projectedTop,
          left: j / 2 + scroll_pos.scrollLeft - contentwidth / 2
        })
      }
    }

    function _() {
      return self.pageYOffset ? {
        scrollTop: self.pageYOffset,
        scrollLeft: self.pageXOffset
      } : document.documentElement && document.documentElement.scrollTop ? {
        scrollTop: document.documentElement.scrollTop,
        scrollLeft: document.documentElement.scrollLeft
      } : document.body ? {
        scrollTop: document.body.scrollTop,
        scrollLeft: document.body.scrollLeft
      } : void 0
    }

    function g() {
      I = e(window).height(), j = e(window).width(), "undefined" != typeof $pp_overlay && $pp_overlay.height(e(document).height()).width(j)
    }

    function m() {
      isSet && settings.overlay_gallery && "image" == h(pp_images[set_position]) ? (itemWidth = 57, navWidth = "facebook" == settings.theme || "pp_default" == settings.theme ? 50 : 30, itemsPerPage = Math.floor((f.containerWidth - 100 - navWidth) / itemWidth), itemsPerPage = itemsPerPage < pp_images.length ? itemsPerPage : pp_images.length, totalPage = Math.ceil(pp_images.length / itemsPerPage) - 1, 0 == totalPage ? (navWidth = 0, $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").hide()) : $pp_gallery.find(".pp_arrow_next,.pp_arrow_previous").show(), galleryWidth = itemsPerPage * itemWidth, fullGalleryWidth = pp_images.length * itemWidth, $pp_gallery.css("margin-left", -(galleryWidth / 2 + navWidth / 2)).find("div:first").width(galleryWidth + 5).find("ul").width(fullGalleryWidth).find("li.selected").removeClass("selected"), goToPage = Math.floor(set_position / itemsPerPage) < totalPage ? Math.floor(set_position / itemsPerPage) : totalPage, e.prettyPhoto.changeGalleryPage(goToPage), $pp_gallery_li.filter(":eq(" + set_position + ")").addClass("selected")) : $pp_pic_holder.find(".pp_content").unbind("mouseenter mouseleave")
    }

    function u() {
      if (settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href))), settings.markup = settings.markup.replace("{pp_social}", ""), e("body").append(settings.markup), $pp_pic_holder = e(".pp_pic_holder"), $ppt = e(".ppt"), $pp_overlay = e("div.pp_overlay"), isSet && settings.overlay_gallery) {
        currentGalleryPage = 0, toInject = "";
        for (var t = 0; t < pp_images.length; t++) pp_images[t].match(/\b(jpg|jpeg|png|gif)\b/gi) ? (classname = "", img_src = pp_images[t]) : (classname = "default", img_src = ""), toInject += "<li class='" + classname + "'><a href='#'><img src='" + img_src + "' width='50' alt='' /></a></li>";
        toInject = settings.gallery_markup.replace(/{gallery}/g, toInject), $pp_pic_holder.find("#pp_full_res").after(toInject), $pp_gallery = e(".pp_pic_holder .pp_gallery"), $pp_gallery_li = $pp_gallery.find("li"), $pp_gallery.find(".pp_arrow_next").click(function () {
          return e.prettyPhoto.changeGalleryPage("next"), e.prettyPhoto.stopSlideshow(), !1
        }), $pp_gallery.find(".pp_arrow_previous").click(function () {
          return e.prettyPhoto.changeGalleryPage("previous"), e.prettyPhoto.stopSlideshow(), !1
        }), $pp_pic_holder.find(".pp_content").hover(function () {
          $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeIn()
        }, function () {
          $pp_pic_holder.find(".pp_gallery:not(.disabled)").fadeOut()
        }), itemWidth = 57, $pp_gallery_li.each(function (t) {
          e(this).find("a").click(function () {
            return e.prettyPhoto.changePage(t), e.prettyPhoto.stopSlideshow(), !1
          })
        })
      }
      settings.slideshow && ($pp_pic_holder.find(".pp_nav").prepend('<a href="#" class="pp_play">Play</a>'), $pp_pic_holder.find(".pp_nav .pp_play").click(function () {
        return e.prettyPhoto.startSlideshow(), !1
      })), $pp_pic_holder.attr("class", "pp_pic_holder " + settings.theme), $pp_overlay.css({
        opacity: 0,
        height: e(document).height(),
        width: e(window).width()
      }).bind("click", function () {
        settings.modal || e.prettyPhoto.close()
      }), e("a.pp_close").bind("click", function () {
        return e.prettyPhoto.close(), !1
      }), settings.allow_expand && e("a.pp_expand").bind("click", function () {
        return e(this).hasClass("pp_expand") ? (e(this).removeClass("pp_expand").addClass("pp_contract"), doresize = !1) : (e(this).removeClass("pp_contract").addClass("pp_expand"), doresize = !0), n(function () {
          e.prettyPhoto.open()
        }), !1
      }), $pp_pic_holder.find(".pp_previous, .pp_nav .pp_arrow_previous").bind("click", function () {
        return e.prettyPhoto.changePage("previous"), e.prettyPhoto.stopSlideshow(), !1
      }), $pp_pic_holder.find(".pp_next, .pp_nav .pp_arrow_next").bind("click", function () {
        return e.prettyPhoto.changePage("next"), e.prettyPhoto.stopSlideshow(), !1
      }), c()
    }

    a = jQuery.extend({
      hook: "rel",
      animation_speed: "fast",
      ajaxcallback: function () {
      },
      slideshow: 5e3,
      autoplay_slideshow: !1,
      opacity: .8,
      show_title: !0,
      allow_resize: !0,
      allow_expand: !0,
      default_width: 500,
      default_height: 344,
      counter_separator_label: "/",
      theme: "pp_default",
      horizontal_padding: 20,
      hideflash: !1,
      wmode: "opaque",
      autoplay: !0,
      modal: !1,
      deeplinking: !0,
      overlay_gallery: !0,
      overlay_gallery_max: 30,
      keyboard_shortcuts: !0,
      changepicturecallback: function () {
      },
      callback: function () {
      },
      ie6_fallback: !0,
      markup: '<div class="pp_pic_holder"> 						<div class="ppt">&nbsp;</div> 						<div class="pp_top"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 						<div class="pp_content_container"> 							<div class="pp_left"> 							<div class="pp_right"> 								<div class="pp_content"> 									<div class="pp_loaderIcon"></div> 									<div class="pp_fade"> 										<a href="#" class="pp_expand" title="Expand the image">Expand</a> 										<div class="pp_hoverContainer"> 											<a class="pp_next" href="#">next</a> 											<a class="pp_previous" href="#">previous</a> 										</div> 										<div id="pp_full_res"></div> 										<div class="pp_details"> 											<div class="pp_nav"> 												<a href="#" class="pp_arrow_previous">Previous</a> 												<p class="currentTextHolder">0/0</p> 												<a href="#" class="pp_arrow_next">Next</a> 											</div> 											<p class="pp_description"></p> 											<div class="pp_social">{pp_social}</div> 											<a class="pp_close" href="#">Close</a> 										</div> 									</div> 								</div> 							</div> 							</div> 						</div> 						<div class="pp_bottom"> 							<div class="pp_left"></div> 							<div class="pp_middle"></div> 							<div class="pp_right"></div> 						</div> 					</div> 					<div class="pp_overlay"></div>',
      gallery_markup: '<div class="pp_gallery"> 								<a href="#" class="pp_arrow_previous">Previous</a> 								<div> 									<ul> 										{gallery} 									</ul> 								</div> 								<a href="#" class="pp_arrow_next">Next</a> 							</div>',
      image_markup: '<img id="fullResImage" src="{path}" />',
      flash_markup: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="{width}" height="{height}"><param name="wmode" value="{wmode}" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{path}" /><embed src="{path}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="{width}" height="{height}" wmode="{wmode}"></embed></object>',
      quicktime_markup: '<object classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" height="{height}" width="{width}"><param name="src" value="{path}"><param name="autoplay" value="{autoplay}"><param name="type" value="video/quicktime"><embed src="{path}" height="{height}" width="{width}" autoplay="{autoplay}" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/"></embed></object>',
      iframe_markup: '<iframe src ="{path}" width="{width}" height="{height}" frameborder="no"></iframe>',
      inline_markup: '<div class="pp_inline">{content}</div>',
      custom_markup: "",
      social_tools: '<div class="twitter"><a href="http://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div><div class="facebook"><iframe src="//www.facebook.com/plugins/like.php?locale=en_US&href={location_href}&layout=button_count&show_faces=true&width=500&action=like&font&colorscheme=light&height=23" scrolling="no" style="border:none; overflow:hidden; width:500px; height:23px;" allowTransparency="true"></iframe></div>'
    }, a);
    var f, v, y, w, b, k, P, x = this, $ = !1, I = e(window).height(),
      j = e(window).width();
    return doresize = !0, scroll_pos = _(), e(window).unbind("resize.prettyphoto").bind("resize.prettyphoto", function () {
      c(), g()
    }), a.keyboard_shortcuts && e(document).unbind("keydown.prettyphoto").bind("keydown.prettyphoto", function (t) {
      if ("undefined" != typeof $pp_pic_holder && $pp_pic_holder.is(":visible")) switch (t.keyCode) {
        case 37:
          e.prettyPhoto.changePage("previous"), t.preventDefault();
          break;
        case 39:
          e.prettyPhoto.changePage("next"), t.preventDefault();
          break;
        case 27:
          settings.modal || e.prettyPhoto.close(), t.preventDefault()
      }
    }), e.prettyPhoto.initialize = function () {
      return settings = a, "pp_default" == settings.theme && (settings.horizontal_padding = 16), theRel = e(this).attr(settings.hook), galleryRegExp = /\[(?:.*)\]/, isSet = galleryRegExp.exec(theRel) ? !0 : !1, pp_images = isSet ? jQuery.map(x, function (t) {
        return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("href") : void 0
      }) : e.makeArray(e(this).attr("href")), pp_titles = isSet ? jQuery.map(x, function (t) {
        return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).find("img").attr("alt") ? e(t).find("img").attr("alt") : "" : void 0
      }) : e.makeArray(e(this).find("img").attr("alt")), pp_descriptions = isSet ? jQuery.map(x, function (t) {
        return -1 != e(t).attr(settings.hook).indexOf(theRel) ? e(t).attr("title") ? e(t).attr("title") : "" : void 0
      }) : e.makeArray(e(this).attr("title")), pp_images.length > settings.overlay_gallery_max && (settings.overlay_gallery = !1), set_position = jQuery.inArray(e(this).attr("href"), pp_images), rel_index = isSet ? set_position : e("a[" + settings.hook + "^='" + theRel + "']").index(e(this)), u(this), settings.allow_resize && e(window).bind("scroll.prettyphoto", function () {
        c()
      }), e.prettyPhoto.open(), !1
    }, e.prettyPhoto.open = function (t) {
      return "undefined" == typeof settings && (settings = a, pp_images = e.makeArray(arguments[0]), pp_titles = e.makeArray(arguments[1] ? arguments[1] : ""), pp_descriptions = e.makeArray(arguments[2] ? arguments[2] : ""), isSet = pp_images.length > 1 ? !0 : !1, set_position = arguments[3] ? arguments[3] : 0, u(t.target)), settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "hidden"), r(e(pp_images).size()), e(".pp_loaderIcon").show(), settings.deeplinking && i(), settings.social_tools && (facebook_like_link = settings.social_tools.replace("{location_href}", encodeURIComponent(location.href)), $pp_pic_holder.find(".pp_social").html(facebook_like_link)), $ppt.is(":hidden") && $ppt.css("opacity", 0).show(), $pp_overlay.show().fadeTo(settings.animation_speed, settings.opacity), $pp_pic_holder.find(".currentTextHolder").text(set_position + 1 + settings.counter_separator_label + e(pp_images).size()), "undefined" != typeof pp_descriptions[set_position] && "" != pp_descriptions[set_position] ? $pp_pic_holder.find(".pp_description").show().html(unescape(pp_descriptions[set_position])) : $pp_pic_holder.find(".pp_description").hide(), movie_width = parseFloat(o("width", pp_images[set_position])) ? o("width", pp_images[set_position]) : settings.default_width.toString(), movie_height = parseFloat(o("height", pp_images[set_position])) ? o("height", pp_images[set_position]) : settings.default_height.toString(), $ = !1, -1 != movie_height.indexOf("%") && (movie_height = parseFloat(e(window).height() * parseFloat(movie_height) / 100 - 150), $ = !0), -1 != movie_width.indexOf("%") && (movie_width = parseFloat(e(window).width() * parseFloat(movie_width) / 100 - 150), $ = !0), $pp_pic_holder.fadeIn(function () {
        switch ($ppt.html(settings.show_title && "" != pp_titles[set_position] && "undefined" != typeof pp_titles[set_position] ? unescape(pp_titles[set_position]) : "&nbsp;"), imgPreloader = "", skipInjection = !1, h(pp_images[set_position])) {
          case"image":
            imgPreloader = new Image, nextImage = new Image, isSet && set_position < e(pp_images).size() - 1 && (nextImage.src = pp_images[set_position + 1]), prevImage = new Image, isSet && pp_images[set_position - 1] && (prevImage.src = pp_images[set_position - 1]), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = settings.image_markup.replace(/{path}/g, pp_images[set_position]), imgPreloader.onload = function () {
              f = l(imgPreloader.width, imgPreloader.height), s()
            }, imgPreloader.onerror = function () {
              alert("Image cannot be loaded. Make sure the path is correct and image exist."), e.prettyPhoto.close()
            }, imgPreloader.src = pp_images[set_position];
            break;
          case"youtube":
            f = l(movie_width, movie_height), movie_id = o("v", pp_images[set_position]), "" == movie_id && (movie_id = pp_images[set_position].split("youtu.be/"), movie_id = movie_id[1], movie_id.indexOf("?") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("?"))), movie_id.indexOf("&") > 0 && (movie_id = movie_id.substr(0, movie_id.indexOf("&")))), movie = "http://www.youtube.com/embed/" + movie_id, movie += o("rel", pp_images[set_position]) ? "?rel=" + o("rel", pp_images[set_position]) : "?rel=1", settings.autoplay && (movie += "&autoplay=1"), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, movie);
            break;
          case"vimeo":
            f = l(movie_width, movie_height), movie_id = pp_images[set_position];
            var t = /http(s?):\/\/(www\.)?vimeo.com\/(\d+)/,
              i = movie_id.match(t);
            movie = "http://player.vimeo.com/video/" + i[3] + "?title=0&byline=0&portrait=0", settings.autoplay && (movie += "&autoplay=1;"), vimeo_width = f.width + "/embed/?moog_width=" + f.width, toInject = settings.iframe_markup.replace(/{width}/g, vimeo_width).replace(/{height}/g, f.height).replace(/{path}/g, movie);
            break;
          case"quicktime":
            f = l(movie_width, movie_height), f.height += 15, f.contentHeight += 15, f.containerHeight += 15, toInject = settings.quicktime_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, pp_images[set_position]).replace(/{autoplay}/g, settings.autoplay);
            break;
          case"flash":
            f = l(movie_width, movie_height), flash_vars = pp_images[set_position], flash_vars = flash_vars.substring(pp_images[set_position].indexOf("flashvars") + 10, pp_images[set_position].length), filename = pp_images[set_position], filename = filename.substring(0, filename.indexOf("?")), toInject = settings.flash_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{wmode}/g, settings.wmode).replace(/{path}/g, filename + "?" + flash_vars);
            break;
          case"iframe":
            f = l(movie_width, movie_height), frame_url = pp_images[set_position], frame_url = frame_url.substr(0, frame_url.indexOf("iframe") - 1), toInject = settings.iframe_markup.replace(/{width}/g, f.width).replace(/{height}/g, f.height).replace(/{path}/g, frame_url);
            break;
          case"ajax":
            doresize = !1, f = l(movie_width, movie_height), doresize = !0, skipInjection = !0, e.get(pp_images[set_position], function (e) {
              toInject = settings.inline_markup.replace(/{content}/g, e), $pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s()
            });
            break;
          case"custom":
            f = l(movie_width, movie_height), toInject = settings.custom_markup;
            break;
          case"inline":
            myClone = e(pp_images[set_position]).clone().append('<br clear="all" />').css({width: settings.default_width}).wrapInner('<div id="pp_full_res"><div class="pp_inline"></div></div>').appendTo(e("body")).show(), doresize = !1, f = l(e(myClone).width(), e(myClone).height()), doresize = !0, e(myClone).remove(), toInject = settings.inline_markup.replace(/{content}/g, e(pp_images[set_position]).html())
        }
        imgPreloader || skipInjection || ($pp_pic_holder.find("#pp_full_res")[0].innerHTML = toInject, s())
      }), !1
    }, e.prettyPhoto.changePage = function (t) {
      currentGalleryPage = 0, "previous" == t ? (set_position--, set_position < 0 && (set_position = e(pp_images).size() - 1)) : "next" == t ? (set_position++, set_position > e(pp_images).size() - 1 && (set_position = 0)) : set_position = t, rel_index = set_position, doresize || (doresize = !0), settings.allow_expand && e(".pp_contract").removeClass("pp_contract").addClass("pp_expand"), n(function () {
        e.prettyPhoto.open()
      })
    }, e.prettyPhoto.changeGalleryPage = function (e) {
      "next" == e ? (currentGalleryPage++, currentGalleryPage > totalPage && (currentGalleryPage = 0)) : "previous" == e ? (currentGalleryPage--, currentGalleryPage < 0 && (currentGalleryPage = totalPage)) : currentGalleryPage = e, slide_speed = "next" == e || "previous" == e ? settings.animation_speed : 0, slide_to = currentGalleryPage * itemsPerPage * itemWidth, $pp_gallery.find("ul").animate({left: -slide_to}, slide_speed)
    }, e.prettyPhoto.startSlideshow = function () {
      "undefined" == typeof P ? ($pp_pic_holder.find(".pp_play").unbind("click").removeClass("pp_play").addClass("pp_pause").click(function () {
        return e.prettyPhoto.stopSlideshow(), !1
      }), P = setInterval(e.prettyPhoto.startSlideshow, settings.slideshow)) : e.prettyPhoto.changePage("next")
    }, e.prettyPhoto.stopSlideshow = function () {
      $pp_pic_holder.find(".pp_pause").unbind("click").removeClass("pp_pause").addClass("pp_play").click(function () {
        return e.prettyPhoto.startSlideshow(), !1
      }), clearInterval(P), P = void 0
    }, e.prettyPhoto.close = function () {
      $pp_overlay.is(":animated") || (e.prettyPhoto.stopSlideshow(), $pp_pic_holder.stop().find("object,embed").css("visibility", "hidden"), e("div.pp_pic_holder,div.ppt,.pp_fade").fadeOut(settings.animation_speed, function () {
        e(this).remove()
      }), $pp_overlay.fadeOut(settings.animation_speed, function () {
        settings.hideflash && e("object,embed,iframe[src*=youtube],iframe[src*=vimeo]").css("visibility", "visible"), e(this).remove(), e(window).unbind("scroll.prettyphoto"), p(), settings.callback(), doresize = !0, v = !1, delete settings
      }))
    }, !pp_alreadyInitialized && t() && (pp_alreadyInitialized = !0, hashIndex = t(), hashRel = hashIndex, hashIndex = hashIndex.substring(hashIndex.indexOf("/") + 1, hashIndex.length - 1), hashRel = hashRel.substring(0, hashRel.indexOf("/")), setTimeout(function () {
      e("a[" + a.hook + "^='" + hashRel + "']:eq(" + hashIndex + ")").trigger("click")
    }, 50)), this.unbind("click.prettyphoto").bind("click.prettyphoto", e.prettyPhoto.initialize)
  }
}(jQuery);
var pp_alreadyInitialized = !1;

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
 *  BxSlider
 * -----------------------------------------------
*/

/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 */
!function (t) {
  var e = {}, s = {
    mode: "horizontal",
    slideSelector: "",
    infiniteLoop: !0,
    hideControlOnEnd: !1,
    speed: 500,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: !1,
    captions: !1,
    ticker: !1,
    tickerHover: !1,
    adaptiveHeight: !1,
    adaptiveHeightSpeed: 500,
    video: !1,
    useCSS: !0,
    preloadImages: "visible",
    responsive: !0,
    slideZIndex: 50,
    touchEnabled: !0,
    swipeThreshold: 50,
    oneToOneTouch: !0,
    preventDefaultSwipeX: !0,
    preventDefaultSwipeY: !1,
    pager: !0,
    pagerType: "full",
    pagerShortSeparator: " / ",
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,
    controls: !0,
    nextText: "Next",
    prevText: "Prev",
    nextSelector: null,
    prevSelector: null,
    autoControls: !1,
    startText: "Start",
    stopText: "Stop",
    autoControlsCombine: !1,
    autoControlsSelector: null,
    auto: !1,
    pause: 4e3,
    autoStart: !0,
    autoDirection: "next",
    autoHover: !1,
    autoDelay: 0,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    onSliderLoad: function () {
    },
    onSlideBefore: function () {
    },
    onSlideAfter: function () {
    },
    onSlideNext: function () {
    },
    onSlidePrev: function () {
    },
    onSliderResize: function () {
    }
  };
  t.fn.bxSlider = function (n) {
    if (0 == this.length) return this;
    if (this.length > 1) return this.each(function () {
      t(this).bxSlider(n)
    }), this;
    var o = {}, r = this;
    e.el = this;
    var a = t(window).width(), l = t(window).height(), d = function () {
      o.settings = t.extend({}, s, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = r.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = {index: o.settings.startSlide}, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" == o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" != o.settings.mode && function () {
        var t = document.createElement("div"),
          e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
        for (var i in e) if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
        return !1
      }(), "vertical" == o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), r.data("origStyle", r.attr("style")), r.children(o.settings.slideSelector).each(function () {
        t(this).data("origStyle", t(this).attr("style"))
      }), c()
    }, c = function () {
      r.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), o.viewport = r.parent(), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), r.css({
        width: "horizontal" == o.settings.mode ? 100 * o.children.length + 215 + "%" : "auto",
        position: "relative"
      }), o.usingCSS && o.settings.easing ? r.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), f(), o.viewport.css({
        width: "100%",
        overflow: "hidden",
        position: "relative"
      }), o.viewport.parent().css({maxWidth: p()}), o.settings.pager || o.viewport.parent().css({margin: "0 auto 0px"}), o.children.css({
        "float": "horizontal" == o.settings.mode ? "left" : "none",
        listStyle: "none",
        position: "relative"
      }), o.children.css("width", u()), "horizontal" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" == o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" == o.settings.mode && (o.children.css({
        position: "absolute",
        zIndex: 0,
        display: "none"
      }), o.children.eq(o.settings.startSlide).css({
        zIndex: o.settings.slideZIndex,
        display: "block"
      })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && P(), o.active.last = o.settings.startSlide == x() - 1, o.settings.video && r.fitVids();
      var e = o.children.eq(o.settings.startSlide);
      "all" == o.settings.preloadImages && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.pager && T(), o.settings.controls && C(), o.settings.auto && o.settings.autoControls && E(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), g(e, h)
    }, g = function (e, i) {
      var s = e.find("img, iframe").length;
      if (0 == s) return i(), void 0;
      var n = 0;
      e.find("img, iframe").each(function () {
        t(this).one("load", function () {
          ++n == s && i()
        }).each(function () {
          this.complete && t(this).load()
        })
      })
    }, h = function () {
      if (o.settings.infiniteLoop && "fade" != o.settings.mode && !o.settings.ticker) {
        var e = "vertical" == o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
          i = o.children.slice(0, e).clone().addClass("bx-clone"),
          s = o.children.slice(-e).clone().addClass("bx-clone");
        r.append(i).prepend(s)
      }
      o.loader.remove(), S(), "vertical" == o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(v()), r.redrawSlider(), o.settings.onSliderLoad(o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", Z), o.settings.auto && o.settings.autoStart && H(), o.settings.ticker && L(), o.settings.pager && q(o.settings.startSlide), o.settings.controls && W(), o.settings.touchEnabled && !o.settings.ticker && O()
    }, v = function () {
      var e = 0, s = t();
      if ("vertical" == o.settings.mode || o.settings.adaptiveHeight) if (o.carousel) {
        var n = 1 == o.settings.moveSlides ? o.active.index : o.active.index * m();
        for (s = o.children.eq(n), i = 1; i <= o.settings.maxSlides - 1; i++) s = n + i >= o.children.length ? s.add(o.children.eq(i - 1)) : s.add(o.children.eq(n + i))
      } else s = o.children.eq(o.active.index); else s = o.children;
      return "vertical" == o.settings.mode ? (s.each(function () {
        e += t(this).outerHeight()
      }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, s.map(function () {
        return t(this).outerHeight(!1)
      }).get()), e
    }, p = function () {
      var t = "100%";
      return o.settings.slideWidth > 0 && (t = "horizontal" == o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t
    }, u = function () {
      var t = o.settings.slideWidth, e = o.viewport.width();
      return 0 == o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" == o.settings.mode ? t = e : o.settings.maxSlides > 1 && "horizontal" == o.settings.mode && (e > o.maxThreshold || e < o.minThreshold && (t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides)), t
    }, f = function () {
      var t = 1;
      if ("horizontal" == o.settings.mode && o.settings.slideWidth > 0) if (o.viewport.width() < o.minThreshold) t = o.settings.minSlides; else if (o.viewport.width() > o.maxThreshold) t = o.settings.maxSlides; else {
        var e = o.children.first().width();
        t = Math.floor(o.viewport.width() / e)
      } else "vertical" == o.settings.mode && (t = o.settings.minSlides);
      return t
    }, x = function () {
      var t = 0;
      if (o.settings.moveSlides > 0) if (o.settings.infiniteLoop) t = o.children.length / m(); else for (var e = 0, i = 0; e < o.children.length;) ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f(); else t = Math.ceil(o.children.length / f());
      return t
    }, m = function () {
      return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f()
    }, S = function () {
      if (o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop) {
        if ("horizontal" == o.settings.mode) {
          var t = o.children.last(), e = t.position();
          b(-(e.left - (o.viewport.width() - t.width())), "reset", 0)
        } else if ("vertical" == o.settings.mode) {
          var i = o.children.length - o.settings.minSlides,
            e = o.children.eq(i).position();
          b(-e.top, "reset", 0)
        }
      } else {
        var e = o.children.eq(o.active.index * m()).position();
        o.active.index == x() - 1 && (o.active.last = !0), void 0 != e && ("horizontal" == o.settings.mode ? b(-e.left, "reset", 0) : "vertical" == o.settings.mode && b(-e.top, "reset", 0))
      }
    }, b = function (t, e, i, s) {
      if (o.usingCSS) {
        var n = "vertical" == o.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
        r.css("-" + o.cssPrefix + "-transition-duration", i / 1e3 + "s"), "slide" == e ? (r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
          r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), D()
        })) : "reset" == e ? r.css(o.animProp, n) : "ticker" == e && (r.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), r.css(o.animProp, n), r.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
          r.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), b(s.resetValue, "reset", 0), N()
        }))
      } else {
        var a = {};
        a[o.animProp] = t, "slide" == e ? r.animate(a, i, o.settings.easing, function () {
          D()
        }) : "reset" == e ? r.css(o.animProp, t) : "ticker" == e && r.animate(a, speed, "linear", function () {
          b(s.resetValue, "reset", 0), N()
        })
      }
    }, w = function () {
      for (var e = "", i = x(), s = 0; i > s; s++) {
        var n = "";
        o.settings.buildPager && t.isFunction(o.settings.buildPager) ? (n = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (n = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + n + "</a></div>"
      }
      o.pagerEl.html(e)
    }, T = function () {
      o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), w()), o.pagerEl.on("click", "a", I)
    }, C = function () {
      o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click", y), o.controls.prev.bind("click", z), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl))
    }, E = function () {
      o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", k), o.controls.autoEl.on("click", ".bx-stop", M), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), A(o.settings.autoStart ? "stop" : "start")
    }, P = function () {
      o.children.each(function () {
        var e = t(this).find("img:first").attr("title");
        void 0 != e && ("" + e).length && t(this).append('<div class="bx-caption"><span>' + e + "</span></div>")
      })
    }, y = function (t) {
      o.settings.auto && r.stopAuto(), r.goToNextSlide(), t.preventDefault()
    }, z = function (t) {
      o.settings.auto && r.stopAuto(), r.goToPrevSlide(), t.preventDefault()
    }, k = function (t) {
      r.startAuto(), t.preventDefault()
    }, M = function (t) {
      r.stopAuto(), t.preventDefault()
    }, I = function (e) {
      o.settings.auto && r.stopAuto();
      var i = t(e.currentTarget), s = parseInt(i.attr("data-slide-index"));
      s != o.active.index && r.goToSlide(s), e.preventDefault()
    }, q = function (e) {
      var i = o.children.length;
      return "short" == o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i), void 0) : (o.pagerEl.find("a").removeClass("active"), o.pagerEl.each(function (i, s) {
        t(s).find("a").eq(e).addClass("active")
      }), void 0)
    }, D = function () {
      if (o.settings.infiniteLoop) {
        var t = "";
        0 == o.active.index ? t = o.children.eq(0).position() : o.active.index == x() - 1 && o.carousel ? t = o.children.eq((x() - 1) * m()).position() : o.active.index == o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" == o.settings.mode ? b(-t.left, "reset", 0) : "vertical" == o.settings.mode && b(-t.top, "reset", 0))
      }
      o.working = !1, o.settings.onSlideAfter(o.children.eq(o.active.index), o.oldIndex, o.active.index)
    }, A = function (t) {
      o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
    }, W = function () {
      1 == x() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 == o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index == x() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")))
    }, H = function () {
      o.settings.autoDelay > 0 ? setTimeout(r.startAuto, o.settings.autoDelay) : r.startAuto(), o.settings.autoHover && r.hover(function () {
        o.interval && (r.stopAuto(!0), o.autoPaused = !0)
      }, function () {
        o.autoPaused && (r.startAuto(!0), o.autoPaused = null)
      })
    }, L = function () {
      var e = 0;
      if ("next" == o.settings.autoDirection) r.append(o.children.clone().addClass("bx-clone")); else {
        r.prepend(o.children.clone().addClass("bx-clone"));
        var i = o.children.first().position();
        e = "horizontal" == o.settings.mode ? -i.left : -i.top
      }
      b(e, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && !o.usingCSS && o.viewport.hover(function () {
        r.stop()
      }, function () {
        var e = 0;
        o.children.each(function () {
          e += "horizontal" == o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
        });
        var i = o.settings.speed / e,
          s = "horizontal" == o.settings.mode ? "left" : "top",
          n = i * (e - Math.abs(parseInt(r.css(s))));
        N(n)
      }), N()
    }, N = function (t) {
      speed = t ? t : o.settings.speed;
      var e = {left: 0, top: 0}, i = {left: 0, top: 0};
      "next" == o.settings.autoDirection ? e = r.find(".bx-clone").first().position() : i = o.children.first().position();
      var s = "horizontal" == o.settings.mode ? -e.left : -e.top,
        n = "horizontal" == o.settings.mode ? -i.left : -i.top,
        a = {resetValue: n};
      b(s, "ticker", speed, a)
    }, O = function () {
      o.touch = {
        start: {x: 0, y: 0},
        end: {x: 0, y: 0}
      }, o.viewport.bind("touchstart", X)
    }, X = function (t) {
      if (o.working) t.preventDefault(); else {
        o.touch.originalPos = r.position();
        var e = t.originalEvent;
        o.touch.start.x = e.changedTouches[0].pageX, o.touch.start.y = e.changedTouches[0].pageY, o.viewport.bind("touchmove", Y), o.viewport.bind("touchend", V)
      }
    }, Y = function (t) {
      var e = t.originalEvent,
        i = Math.abs(e.changedTouches[0].pageX - o.touch.start.x),
        s = Math.abs(e.changedTouches[0].pageY - o.touch.start.y);
      if (3 * i > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > i && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != o.settings.mode && o.settings.oneToOneTouch) {
        var n = 0;
        if ("horizontal" == o.settings.mode) {
          var r = e.changedTouches[0].pageX - o.touch.start.x;
          n = o.touch.originalPos.left + r
        } else {
          var r = e.changedTouches[0].pageY - o.touch.start.y;
          n = o.touch.originalPos.top + r
        }
        b(n, "reset", 0)
      }
    }, V = function (t) {
      o.viewport.unbind("touchmove", Y);
      var e = t.originalEvent, i = 0;
      if (o.touch.end.x = e.changedTouches[0].pageX, o.touch.end.y = e.changedTouches[0].pageY, "fade" == o.settings.mode) {
        var s = Math.abs(o.touch.start.x - o.touch.end.x);
        s >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto())
      } else {
        var s = 0;
        "horizontal" == o.settings.mode ? (s = o.touch.end.x - o.touch.start.x, i = o.touch.originalPos.left) : (s = o.touch.end.y - o.touch.start.y, i = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 == o.active.index && s > 0 || o.active.last && 0 > s) ? b(i, "reset", 200) : Math.abs(s) >= o.settings.swipeThreshold ? (0 > s ? r.goToNextSlide() : r.goToPrevSlide(), r.stopAuto()) : b(i, "reset", 200)
      }
      o.viewport.unbind("touchend", V)
    }, Z = function () {
      var e = t(window).width(), i = t(window).height();
      (a != e || l != i) && (a = e, l = i, r.redrawSlider(), o.settings.onSliderResize.call(r, o.active.index))
    };
    return r.goToSlide = function (e, i) {
      if (!o.working && o.active.index != e) if (o.working = !0, o.oldIndex = o.active.index, o.active.index = 0 > e ? x() - 1 : e >= x() ? 0 : e, o.settings.onSlideBefore(o.children.eq(o.active.index), o.oldIndex, o.active.index), "next" == i ? o.settings.onSlideNext(o.children.eq(o.active.index), o.oldIndex, o.active.index) : "prev" == i && o.settings.onSlidePrev(o.children.eq(o.active.index), o.oldIndex, o.active.index), o.active.last = o.active.index >= x() - 1, o.settings.pager && q(o.active.index), o.settings.controls && W(), "fade" == o.settings.mode) o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({height: v()}, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({zIndex: 0}), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function () {
        t(this).css("zIndex", o.settings.slideZIndex), D()
      }); else {
        o.settings.adaptiveHeight && o.viewport.height() != v() && o.viewport.animate({height: v()}, o.settings.adaptiveHeightSpeed);
        var s = 0, n = {left: 0, top: 0};
        if (!o.settings.infiniteLoop && o.carousel && o.active.last) if ("horizontal" == o.settings.mode) {
          var a = o.children.eq(o.children.length - 1);
          n = a.position(), s = o.viewport.width() - a.outerWidth()
        } else {
          var l = o.children.length - o.settings.minSlides;
          n = o.children.eq(l).position()
        } else if (o.carousel && o.active.last && "prev" == i) {
          var d = 1 == o.settings.moveSlides ? o.settings.maxSlides - m() : (x() - 1) * m() - (o.children.length - o.settings.maxSlides),
            a = r.children(".bx-clone").eq(d);
          n = a.position()
        } else if ("next" == i && 0 == o.active.index) n = r.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1; else if (e >= 0) {
          var c = e * m();
          n = o.children.eq(c).position()
        }
        if ("undefined" != typeof n) {
          var g = "horizontal" == o.settings.mode ? -(n.left - s) : -n.top;
          b(g, "slide", o.settings.speed)
        }
      }
    }, r.goToNextSlide = function () {
      if (o.settings.infiniteLoop || !o.active.last) {
        var t = parseInt(o.active.index) + 1;
        r.goToSlide(t, "next")
      }
    }, r.goToPrevSlide = function () {
      if (o.settings.infiniteLoop || 0 != o.active.index) {
        var t = parseInt(o.active.index) - 1;
        r.goToSlide(t, "prev")
      }
    }, r.startAuto = function (t) {
      o.interval || (o.interval = setInterval(function () {
        "next" == o.settings.autoDirection ? r.goToNextSlide() : r.goToPrevSlide()
      }, o.settings.pause), o.settings.autoControls && 1 != t && A("stop"))
    }, r.stopAuto = function (t) {
      o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && 1 != t && A("start"))
    }, r.getCurrentSlide = function () {
      return o.active.index
    }, r.getCurrentSlideElement = function () {
      return o.children.eq(o.active.index)
    }, r.getSlideCount = function () {
      return o.children.length
    }, r.redrawSlider = function () {
      o.children.add(r.find(".bx-clone")).outerWidth(u()), o.viewport.css("height", v()), o.settings.ticker || S(), o.active.last && (o.active.index = x() - 1), o.active.index >= x() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (w(), q(o.active.index))
    }, r.destroySlider = function () {
      o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function () {
        void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
      }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", Z))
    }, r.reloadSlider = function (t) {
      void 0 != t && (n = t), r.destroySlider(), d()
    }, d(), this
  }
}(jQuery);


/*
 *  FullCalendar
 * -----------------------------------------------
*/
//! moment.js
//! version : 2.11.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!function (a, b) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function () {
  "use strict";

  function a() {
    return Qc.apply(null, arguments)
  }

  function b(a) {
    Qc = a
  }

  function c(a) {
    return "[object Array]" === Object.prototype.toString.call(a)
  }

  function d(a) {
    return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
  }

  function e(a, b) {
    var c, d = [];
    for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
    return d
  }

  function f(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  }

  function g(a, b) {
    for (var c in b) f(b, c) && (a[c] = b[c]);
    return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
  }

  function h(a, b, c, d) {
    return za(a, b, c, d, !0).utc()
  }

  function i() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1
    }
  }

  function j(a) {
    return null == a._pf && (a._pf = i()), a._pf
  }

  function k(a) {
    if (null == a._isValid) {
      var b = j(a);
      a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
    }
    return a._isValid
  }

  function l(a) {
    var b = h(NaN);
    return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
  }

  function m(a) {
    return void 0 === a
  }

  function n(a, b) {
    var c, d, e;
    if (m(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), m(b._i) || (a._i = b._i), m(b._f) || (a._f = b._f), m(b._l) || (a._l = b._l), m(b._strict) || (a._strict = b._strict), m(b._tzm) || (a._tzm = b._tzm), m(b._isUTC) || (a._isUTC = b._isUTC), m(b._offset) || (a._offset = b._offset), m(b._pf) || (a._pf = j(b)), m(b._locale) || (a._locale = b._locale), Sc.length > 0) for (c in Sc) d = Sc[c], e = b[d], m(e) || (a[d] = e);
    return a
  }

  function o(b) {
    n(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), Tc === !1 && (Tc = !0, a.updateOffset(this), Tc = !1)
  }

  function p(a) {
    return a instanceof o || null != a && null != a._isAMomentObject
  }

  function q(a) {
    return 0 > a ? Math.ceil(a) : Math.floor(a)
  }

  function r(a) {
    var b = +a, c = 0;
    return 0 !== b && isFinite(b) && (c = q(b)), c
  }

  function s(a, b, c) {
    var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length),
      g = 0;
    for (d = 0; e > d; d++) (c && a[d] !== b[d] || !c && r(a[d]) !== r(b[d])) && g++;
    return g + f
  }

  function t() {
  }

  function u(a) {
    return a ? a.toLowerCase().replace("_", "-") : a
  }

  function v(a) {
    for (var b, c, d, e, f = 0; f < a.length;) {
      for (e = u(a[f]).split("-"), b = e.length, c = u(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
        if (d = w(e.slice(0, b).join("-"))) return d;
        if (c && c.length >= b && s(e, c, !0) >= b - 1) break;
        b--
      }
      f++
    }
    return null
  }

  function w(a) {
    var b = null;
    if (!Uc[a] && !m(module) && module && module.exports) try {
      b = Rc._abbr, require("./locale/" + a), x(b)
    } catch (c) {
    }
    return Uc[a]
  }

  function x(a, b) {
    var c;
    return a && (c = m(b) ? z(a) : y(a, b), c && (Rc = c)), Rc._abbr
  }

  function y(a, b) {
    return null !== b ? (b.abbr = a, Uc[a] = Uc[a] || new t, Uc[a].set(b), x(a), Uc[a]) : (delete Uc[a], null)
  }

  function z(a) {
    var b;
    if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Rc;
    if (!c(a)) {
      if (b = w(a)) return b;
      a = [a]
    }
    return v(a)
  }

  function A(a, b) {
    var c = a.toLowerCase();
    Vc[c] = Vc[c + "s"] = Vc[b] = a
  }

  function B(a) {
    return "string" == typeof a ? Vc[a] || Vc[a.toLowerCase()] : void 0
  }

  function C(a) {
    var b, c, d = {};
    for (c in a) f(a, c) && (b = B(c), b && (d[b] = a[c]));
    return d
  }

  function D(a) {
    return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
  }

  function E(b, c) {
    return function (d) {
      return null != d ? (G(this, b, d), a.updateOffset(this, c), this) : F(this, b)
    }
  }

  function F(a, b) {
    return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
  }

  function G(a, b, c) {
    a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
  }

  function H(a, b) {
    var c;
    if ("object" == typeof a) for (c in a) this.set(c, a[c]); else if (a = B(a), D(this[a])) return this[a](b);
    return this
  }

  function I(a, b, c) {
    var d = "" + Math.abs(a), e = b - d.length, f = a >= 0;
    return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
  }

  function J(a, b, c, d) {
    var e = d;
    "string" == typeof d && (e = function () {
      return this[d]()
    }), a && (Zc[a] = e), b && (Zc[b[0]] = function () {
      return I(e.apply(this, arguments), b[1], b[2])
    }), c && (Zc[c] = function () {
      return this.localeData().ordinal(e.apply(this, arguments), a)
    })
  }

  function K(a) {
    return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
  }

  function L(a) {
    var b, c, d = a.match(Wc);
    for (b = 0, c = d.length; c > b; b++) Zc[d[b]] ? d[b] = Zc[d[b]] : d[b] = K(d[b]);
    return function (e) {
      var f = "";
      for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
      return f
    }
  }

  function M(a, b) {
    return a.isValid() ? (b = N(b, a.localeData()), Yc[b] = Yc[b] || L(b), Yc[b](a)) : a.localeData().invalidDate()
  }

  function N(a, b) {
    function c(a) {
      return b.longDateFormat(a) || a
    }

    var d = 5;
    for (Xc.lastIndex = 0; d >= 0 && Xc.test(a);) a = a.replace(Xc, c), Xc.lastIndex = 0, d -= 1;
    return a
  }

  function O(a, b, c) {
    pd[a] = D(b) ? b : function (a) {
      return a && c ? c : b
    }
  }

  function P(a, b) {
    return f(pd, a) ? pd[a](b._strict, b._locale) : new RegExp(Q(a))
  }

  function Q(a) {
    return a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
      return b || c || d || e
    }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  }

  function R(a, b) {
    var c, d = b;
    for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function (a, c) {
      c[b] = r(a)
    }), c = 0; c < a.length; c++) qd[a[c]] = d
  }

  function S(a, b) {
    R(a, function (a, c, d, e) {
      d._w = d._w || {}, b(a, d._w, d, e)
    })
  }

  function T(a, b, c) {
    null != b && f(qd, a) && qd[a](b, c._a, c, a)
  }

  function U(a, b) {
    return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
  }

  function V(a, b) {
    return c(this._months) ? this._months[a.month()] : this._months[Ad.test(b) ? "format" : "standalone"][a.month()]
  }

  function W(a, b) {
    return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[Ad.test(b) ? "format" : "standalone"][a.month()]
  }

  function X(a, b, c) {
    var d, e, f;
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
      if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
      if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
      if (!c && this._monthsParse[d].test(a)) return d
    }
  }

  function Y(a, b) {
    var c;
    return a.isValid() ? "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), U(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a) : a
  }

  function Z(b) {
    return null != b ? (Y(this, b), a.updateOffset(this, !0), this) : F(this, "Month")
  }

  function $() {
    return U(this.year(), this.month())
  }

  function _(a) {
    var b, c = a._a;
    return c && -2 === j(a).overflow && (b = c[sd] < 0 || c[sd] > 11 ? sd : c[td] < 1 || c[td] > U(c[rd], c[sd]) ? td : c[ud] < 0 || c[ud] > 24 || 24 === c[ud] && (0 !== c[vd] || 0 !== c[wd] || 0 !== c[xd]) ? ud : c[vd] < 0 || c[vd] > 59 ? vd : c[wd] < 0 || c[wd] > 59 ? wd : c[xd] < 0 || c[xd] > 999 ? xd : -1, j(a)._overflowDayOfYear && (rd > b || b > td) && (b = td), j(a)._overflowWeeks && -1 === b && (b = yd), j(a)._overflowWeekday && -1 === b && (b = zd), j(a).overflow = b), a
  }

  function aa(b) {
    a.suppressDeprecationWarnings === !1 && !m(console) && console.warn && console.warn("Deprecation warning: " + b)
  }

  function ba(a, b) {
    var c = !0;
    return g(function () {
      return c && (aa(a + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), c = !1), b.apply(this, arguments)
    }, b)
  }

  function ca(a, b) {
    Dd[a] || (aa(b), Dd[a] = !0)
  }

  function da(a) {
    var b, c, d, e, f, g, h = a._i, i = Ed.exec(h) || Fd.exec(h);
    if (i) {
      for (j(a).iso = !0, b = 0, c = Hd.length; c > b; b++) if (Hd[b][1].exec(i[1])) {
        e = Hd[b][0], d = Hd[b][2] !== !1;
        break
      }
      if (null == e) return void (a._isValid = !1);
      if (i[3]) {
        for (b = 0, c = Id.length; c > b; b++) if (Id[b][1].exec(i[3])) {
          f = (i[2] || " ") + Id[b][0];
          break
        }
        if (null == f) return void (a._isValid = !1)
      }
      if (!d && null != f) return void (a._isValid = !1);
      if (i[4]) {
        if (!Gd.exec(i[4])) return void (a._isValid = !1);
        g = "Z"
      }
      a._f = e + (f || "") + (g || ""), sa(a)
    } else a._isValid = !1
  }

  function ea(b) {
    var c = Jd.exec(b._i);
    return null !== c ? void (b._d = new Date(+c[1])) : (da(b), void (b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
  }

  function fa(a, b, c, d, e, f, g) {
    var h = new Date(a, b, c, d, e, f, g);
    return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
  }

  function ga(a) {
    var b = new Date(Date.UTC.apply(null, arguments));
    return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
  }

  function ha(a) {
    return ia(a) ? 366 : 365
  }

  function ia(a) {
    return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
  }

  function ja() {
    return ia(this.year())
  }

  function ka(a, b, c) {
    var d = 7 + b - c, e = (7 + ga(a, 0, d).getUTCDay() - b) % 7;
    return -e + d - 1
  }

  function la(a, b, c, d, e) {
    var f, g, h = (7 + c - d) % 7, i = ka(a, d, e), j = 1 + 7 * (b - 1) + h + i;
    return 0 >= j ? (f = a - 1, g = ha(f) + j) : j > ha(a) ? (f = a + 1, g = j - ha(a)) : (f = a, g = j), {
      year: f,
      dayOfYear: g
    }
  }

  function ma(a, b, c) {
    var d, e, f = ka(a.year(), b, c),
      g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
    return 1 > g ? (e = a.year() - 1, d = g + na(e, b, c)) : g > na(a.year(), b, c) ? (d = g - na(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
      week: d,
      year: e
    }
  }

  function na(a, b, c) {
    var d = ka(a, b, c), e = ka(a + 1, b, c);
    return (ha(a) - d + e) / 7
  }

  function oa(a, b, c) {
    return null != a ? a : null != b ? b : c
  }

  function pa(b) {
    var c = new Date(a.now());
    return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
  }

  function qa(a) {
    var b, c, d, e, f = [];
    if (!a._d) {
      for (d = pa(a), a._w && null == a._a[td] && null == a._a[sd] && ra(a), a._dayOfYear && (e = oa(a._a[rd], d[rd]), a._dayOfYear > ha(e) && (j(a)._overflowDayOfYear = !0), c = ga(e, 0, a._dayOfYear), a._a[sd] = c.getUTCMonth(), a._a[td] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
      for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
      24 === a._a[ud] && 0 === a._a[vd] && 0 === a._a[wd] && 0 === a._a[xd] && (a._nextDay = !0, a._a[ud] = 0), a._d = (a._useUTC ? ga : fa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[ud] = 24)
    }
  }

  function ra(a) {
    var b, c, d, e, f, g, h, i;
    b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = oa(b.GG, a._a[rd], ma(Aa(), 1, 4).year), d = oa(b.W, 1), e = oa(b.E, 1), (1 > e || e > 7) && (i = !0)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = oa(b.gg, a._a[rd], ma(Aa(), f, g).year), d = oa(b.w, 1), null != b.d ? (e = b.d, (0 > e || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f), 1 > d || d > na(c, f, g) ? j(a)._overflowWeeks = !0 : null != i ? j(a)._overflowWeekday = !0 : (h = la(c, d, e, f, g), a._a[rd] = h.year, a._dayOfYear = h.dayOfYear)
  }

  function sa(b) {
    if (b._f === a.ISO_8601) return void da(b);
    b._a = [], j(b).empty = !0;
    var c, d, e, f, g, h = "" + b._i, i = h.length, k = 0;
    for (e = N(b._f, b._locale).match(Wc) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(P(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), Zc[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), T(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
    j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[ud] <= 12 && b._a[ud] > 0 && (j(b).bigHour = void 0), b._a[ud] = ta(b._locale, b._a[ud], b._meridiem), qa(b), _(b)
  }

  function ta(a, b, c) {
    var d;
    return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
  }

  function ua(a) {
    var b, c, d, e, f;
    if (0 === a._f.length) return j(a).invalidFormat = !0, void (a._d = new Date(NaN));
    for (e = 0; e < a._f.length; e++) f = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], sa(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
    g(a, c || b)
  }

  function va(a) {
    if (!a._d) {
      var b = C(a._i);
      a._a = e([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
        return a && parseInt(a, 10)
      }), qa(a)
    }
  }

  function wa(a) {
    var b = new o(_(xa(a)));
    return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
  }

  function xa(a) {
    var b = a._i, e = a._f;
    return a._locale = a._locale || z(a._l), null === b || void 0 === e && "" === b ? l({nullInput: !0}) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), p(b) ? new o(_(b)) : (c(e) ? ua(a) : e ? sa(a) : d(b) ? a._d = b : ya(a), k(a) || (a._d = null), a))
  }

  function ya(b) {
    var f = b._i;
    void 0 === f ? b._d = new Date(a.now()) : d(f) ? b._d = new Date(+f) : "string" == typeof f ? ea(b) : c(f) ? (b._a = e(f.slice(0), function (a) {
      return parseInt(a, 10)
    }), qa(b)) : "object" == typeof f ? va(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
  }

  function za(a, b, c, d, e) {
    var f = {};
    return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, wa(f)
  }

  function Aa(a, b, c, d) {
    return za(a, b, c, d, !1)
  }

  function Ba(a, b) {
    var d, e;
    if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Aa();
    for (d = b[0], e = 1; e < b.length; ++e) (!b[e].isValid() || b[e][a](d)) && (d = b[e]);
    return d
  }

  function Ca() {
    var a = [].slice.call(arguments, 0);
    return Ba("isBefore", a)
  }

  function Da() {
    var a = [].slice.call(arguments, 0);
    return Ba("isAfter", a)
  }

  function Ea(a) {
    var b = C(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0,
      f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0,
      j = b.second || 0, k = b.millisecond || 0;
    this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = z(), this._bubble()
  }

  function Fa(a) {
    return a instanceof Ea
  }

  function Ga(a, b) {
    J(a, 0, 0, function () {
      var a = this.utcOffset(), c = "+";
      return 0 > a && (a = -a, c = "-"), c + I(~~(a / 60), 2) + b + I(~~a % 60, 2)
    })
  }

  function Ha(a, b) {
    var c = (b || "").match(a) || [], d = c[c.length - 1] || [],
      e = (d + "").match(Od) || ["-", 0, 0], f = +(60 * e[1]) + r(e[2]);
    return "+" === e[0] ? f : -f
  }

  function Ia(b, c) {
    var e, f;
    return c._isUTC ? (e = c.clone(), f = (p(b) || d(b) ? +b : +Aa(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Aa(b).local()
  }

  function Ja(a) {
    return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
  }

  function Ka(b, c) {
    var d, e = this._offset || 0;
    return this.isValid() ? null != b ? ("string" == typeof b ? b = Ha(md, b) : Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Ja(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? $a(this, Va(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Ja(this) : null != b ? this : NaN
  }

  function La(a, b) {
    return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
  }

  function Ma(a) {
    return this.utcOffset(0, a)
  }

  function Na(a) {
    return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Ja(this), "m")), this
  }

  function Oa() {
    return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Ha(ld, this._i)), this
  }

  function Pa(a) {
    return this.isValid() ? (a = a ? Aa(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1
  }

  function Qa() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
  }

  function Ra() {
    if (!m(this._isDSTShifted)) return this._isDSTShifted;
    var a = {};
    if (n(a, this), a = xa(a), a._a) {
      var b = a._isUTC ? h(a._a) : Aa(a._a);
      this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0
    } else this._isDSTShifted = !1;
    return this._isDSTShifted
  }

  function Sa() {
    return this.isValid() ? !this._isUTC : !1
  }

  function Ta() {
    return this.isValid() ? this._isUTC : !1
  }

  function Ua() {
    return this.isValid() ? this._isUTC && 0 === this._offset : !1
  }

  function Va(a, b) {
    var c, d, e, g = a, h = null;
    return Fa(a) ? g = {
      ms: a._milliseconds,
      d: a._days,
      M: a._months
    } : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = Pd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
      y: 0,
      d: r(h[td]) * c,
      h: r(h[ud]) * c,
      m: r(h[vd]) * c,
      s: r(h[wd]) * c,
      ms: r(h[xd]) * c
    }) : (h = Qd.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
      y: Wa(h[2], c),
      M: Wa(h[3], c),
      d: Wa(h[4], c),
      h: Wa(h[5], c),
      m: Wa(h[6], c),
      s: Wa(h[7], c),
      w: Wa(h[8], c)
    }) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = Ya(Aa(g.from), Aa(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Ea(g), Fa(a) && f(a, "_locale") && (d._locale = a._locale), d
  }

  function Wa(a, b) {
    var c = a && parseFloat(a.replace(",", "."));
    return (isNaN(c) ? 0 : c) * b
  }

  function Xa(a, b) {
    var c = {milliseconds: 0, months: 0};
    return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
  }

  function Ya(a, b) {
    var c;
    return a.isValid() && b.isValid() ? (b = Ia(b, a), a.isBefore(b) ? c = Xa(a, b) : (c = Xa(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
      milliseconds: 0,
      months: 0
    }
  }

  function Za(a, b) {
    return function (c, d) {
      var e, f;
      return null === d || isNaN(+d) || (ca(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Va(c, d), $a(this, e, a), this
    }
  }

  function $a(b, c, d, e) {
    var f = c._milliseconds, g = c._days, h = c._months;
    b.isValid() && (e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && G(b, "Date", F(b, "Date") + g * d), h && Y(b, F(b, "Month") + h * d), e && a.updateOffset(b, g || h))
  }

  function _a(a, b) {
    var c = a || Aa(), d = Ia(c, this).startOf("day"),
      e = this.diff(d, "days", !0),
      f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse",
      g = b && (D(b[f]) ? b[f]() : b[f]);
    return this.format(g || this.localeData().calendar(f, this, Aa(c)))
  }

  function ab() {
    return new o(this)
  }

  function bb(a, b) {
    var c = p(a) ? a : Aa(a);
    return this.isValid() && c.isValid() ? (b = B(m(b) ? "millisecond" : b), "millisecond" === b ? +this > +c : +c < +this.clone().startOf(b)) : !1
  }

  function cb(a, b) {
    var c = p(a) ? a : Aa(a);
    return this.isValid() && c.isValid() ? (b = B(m(b) ? "millisecond" : b), "millisecond" === b ? +c > +this : +this.clone().endOf(b) < +c) : !1
  }

  function db(a, b, c) {
    return this.isAfter(a, c) && this.isBefore(b, c)
  }

  function eb(a, b) {
    var c, d = p(a) ? a : Aa(a);
    return this.isValid() && d.isValid() ? (b = B(b || "millisecond"), "millisecond" === b ? +this === +d : (c = +d, +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))) : !1
  }

  function fb(a, b) {
    return this.isSame(a, b) || this.isAfter(a, b)
  }

  function gb(a, b) {
    return this.isSame(a, b) || this.isBefore(a, b)
  }

  function hb(a, b, c) {
    var d, e, f, g;
    return this.isValid() ? (d = Ia(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = B(b), "year" === b || "month" === b || "quarter" === b ? (g = ib(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : q(g)) : NaN) : NaN
  }

  function ib(a, b) {
    var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
      f = a.clone().add(e, "months");
    return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
  }

  function jb() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
  }

  function kb() {
    var a = this.clone().utc();
    return 0 < a.year() && a.year() <= 9999 ? D(Date.prototype.toISOString) ? this.toDate().toISOString() : M(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : M(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
  }

  function lb(b) {
    var c = M(this, b || a.defaultFormat);
    return this.localeData().postformat(c)
  }

  function mb(a, b) {
    return this.isValid() && (p(a) && a.isValid() || Aa(a).isValid()) ? Va({
      to: this,
      from: a
    }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
  }

  function nb(a) {
    return this.from(Aa(), a)
  }

  function ob(a, b) {
    return this.isValid() && (p(a) && a.isValid() || Aa(a).isValid()) ? Va({
      from: this,
      to: a
    }).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
  }

  function pb(a) {
    return this.to(Aa(), a)
  }

  function qb(a) {
    var b;
    return void 0 === a ? this._locale._abbr : (b = z(a), null != b && (this._locale = b), this)
  }

  function rb() {
    return this._locale
  }

  function sb(a) {
    switch (a = B(a)) {
      case"year":
        this.month(0);
      case"quarter":
      case"month":
        this.date(1);
      case"week":
      case"isoWeek":
      case"day":
        this.hours(0);
      case"hour":
        this.minutes(0);
      case"minute":
        this.seconds(0);
      case"second":
        this.milliseconds(0)
    }
    return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
  }

  function tb(a) {
    return a = B(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
  }

  function ub() {
    return +this._d - 6e4 * (this._offset || 0)
  }

  function vb() {
    return Math.floor(+this / 1e3)
  }

  function wb() {
    return this._offset ? new Date(+this) : this._d
  }

  function xb() {
    var a = this;
    return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
  }

  function yb() {
    var a = this;
    return {
      years: a.year(),
      months: a.month(),
      date: a.date(),
      hours: a.hours(),
      minutes: a.minutes(),
      seconds: a.seconds(),
      milliseconds: a.milliseconds()
    }
  }

  function zb() {
    return this.isValid() ? this.toISOString() : "null"
  }

  function Ab() {
    return k(this)
  }

  function Bb() {
    return g({}, j(this))
  }

  function Cb() {
    return j(this).overflow
  }

  function Db() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    }
  }

  function Eb(a, b) {
    J(0, [a, a.length], 0, b)
  }

  function Fb(a) {
    return Jb.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
  }

  function Gb(a) {
    return Jb.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
  }

  function Hb() {
    return na(this.year(), 1, 4)
  }

  function Ib() {
    var a = this.localeData()._week;
    return na(this.year(), a.dow, a.doy)
  }

  function Jb(a, b, c, d, e) {
    var f;
    return null == a ? ma(this, d, e).year : (f = na(a, d, e), b > f && (b = f), Kb.call(this, a, b, c, d, e))
  }

  function Kb(a, b, c, d, e) {
    var f = la(a, b, c, d, e), g = ga(f.year, 0, f.dayOfYear);
    return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
  }

  function Lb(a) {
    return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
  }

  function Mb(a) {
    return ma(a, this._week.dow, this._week.doy).week
  }

  function Nb() {
    return this._week.dow
  }

  function Ob() {
    return this._week.doy
  }

  function Pb(a) {
    var b = this.localeData().week(this);
    return null == a ? b : this.add(7 * (a - b), "d")
  }

  function Qb(a) {
    var b = ma(this, 1, 4).week;
    return null == a ? b : this.add(7 * (a - b), "d")
  }

  function Rb(a, b) {
    return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
  }

  function Sb(a, b) {
    return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()]
  }

  function Tb(a) {
    return this._weekdaysShort[a.day()]
  }

  function Ub(a) {
    return this._weekdaysMin[a.day()]
  }

  function Vb(a, b, c) {
    var d, e, f;
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; 7 > d; d++) {
      if (e = Aa([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
      if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
      if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
      if (!c && this._weekdaysParse[d].test(a)) return d
    }
  }

  function Wb(a) {
    if (!this.isValid()) return null != a ? this : NaN;
    var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != a ? (a = Rb(a, this.localeData()), this.add(a - b, "d")) : b
  }

  function Xb(a) {
    if (!this.isValid()) return null != a ? this : NaN;
    var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == a ? b : this.add(a - b, "d")
  }

  function Yb(a) {
    return this.isValid() ? null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7) : null != a ? this : NaN
  }

  function Zb(a) {
    var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return null == a ? b : this.add(a - b, "d")
  }

  function $b() {
    return this.hours() % 12 || 12
  }

  function _b(a, b) {
    J(a, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), b)
    })
  }

  function ac(a, b) {
    return b._meridiemParse
  }

  function bc(a) {
    return "p" === (a + "").toLowerCase().charAt(0)
  }

  function cc(a, b, c) {
    return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
  }

  function dc(a, b) {
    b[xd] = r(1e3 * ("0." + a))
  }

  function ec() {
    return this._isUTC ? "UTC" : ""
  }

  function fc() {
    return this._isUTC ? "Coordinated Universal Time" : ""
  }

  function gc(a) {
    return Aa(1e3 * a)
  }

  function hc() {
    return Aa.apply(null, arguments).parseZone()
  }

  function ic(a, b, c) {
    var d = this._calendar[a];
    return D(d) ? d.call(b, c) : d
  }

  function jc(a) {
    var b = this._longDateFormat[a], c = this._longDateFormat[a.toUpperCase()];
    return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
      return a.slice(1)
    }), this._longDateFormat[a])
  }

  function kc() {
    return this._invalidDate
  }

  function lc(a) {
    return this._ordinal.replace("%d", a)
  }

  function mc(a) {
    return a
  }

  function nc(a, b, c, d) {
    var e = this._relativeTime[c];
    return D(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
  }

  function oc(a, b) {
    var c = this._relativeTime[a > 0 ? "future" : "past"];
    return D(c) ? c(b) : c.replace(/%s/i, b)
  }

  function pc(a) {
    var b, c;
    for (c in a) b = a[c], D(b) ? this[c] = b : this["_" + c] = b;
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
  }

  function qc(a, b, c, d) {
    var e = z(), f = h().set(d, b);
    return e[c](f, a)
  }

  function rc(a, b, c, d, e) {
    if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return qc(a, b, c, e);
    var f, g = [];
    for (f = 0; d > f; f++) g[f] = qc(a, f, c, e);
    return g
  }

  function sc(a, b) {
    return rc(a, b, "months", 12, "month")
  }

  function tc(a, b) {
    return rc(a, b, "monthsShort", 12, "month")
  }

  function uc(a, b) {
    return rc(a, b, "weekdays", 7, "day")
  }

  function vc(a, b) {
    return rc(a, b, "weekdaysShort", 7, "day")
  }

  function wc(a, b) {
    return rc(a, b, "weekdaysMin", 7, "day")
  }

  function xc() {
    var a = this._data;
    return this._milliseconds = me(this._milliseconds), this._days = me(this._days), this._months = me(this._months), a.milliseconds = me(a.milliseconds), a.seconds = me(a.seconds), a.minutes = me(a.minutes), a.hours = me(a.hours), a.months = me(a.months), a.years = me(a.years), this
  }

  function yc(a, b, c, d) {
    var e = Va(b, c);
    return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
  }

  function zc(a, b) {
    return yc(this, a, b, 1)
  }

  function Ac(a, b) {
    return yc(this, a, b, -1)
  }

  function Bc(a) {
    return 0 > a ? Math.floor(a) : Math.ceil(a)
  }

  function Cc() {
    var a, b, c, d, e, f = this._milliseconds, g = this._days, h = this._months,
      i = this._data;
    return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * Bc(Ec(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = q(f / 1e3), i.seconds = a % 60, b = q(a / 60), i.minutes = b % 60, c = q(b / 60), i.hours = c % 24, g += q(c / 24), e = q(Dc(g)), h += e, g -= Bc(Ec(e)), d = q(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
  }

  function Dc(a) {
    return 4800 * a / 146097
  }

  function Ec(a) {
    return 146097 * a / 4800
  }

  function Fc(a) {
    var b, c, d = this._milliseconds;
    if (a = B(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + Dc(b), "month" === a ? c : c / 12;
    switch (b = this._days + Math.round(Ec(this._months)), a) {
      case"week":
        return b / 7 + d / 6048e5;
      case"day":
        return b + d / 864e5;
      case"hour":
        return 24 * b + d / 36e5;
      case"minute":
        return 1440 * b + d / 6e4;
      case"second":
        return 86400 * b + d / 1e3;
      case"millisecond":
        return Math.floor(864e5 * b) + d;
      default:
        throw new Error("Unknown unit " + a)
    }
  }

  function Gc() {
    return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * r(this._months / 12)
  }

  function Hc(a) {
    return function () {
      return this.as(a)
    }
  }

  function Ic(a) {
    return a = B(a), this[a + "s"]()
  }

  function Jc(a) {
    return function () {
      return this._data[a]
    }
  }

  function Kc() {
    return q(this.days() / 7)
  }

  function Lc(a, b, c, d, e) {
    return e.relativeTime(b || 1, !!c, a, d)
  }

  function Mc(a, b, c) {
    var d = Va(a).abs(), e = Ce(d.as("s")), f = Ce(d.as("m")),
      g = Ce(d.as("h")), h = Ce(d.as("d")), i = Ce(d.as("M")),
      j = Ce(d.as("y")),
      k = e < De.s && ["s", e] || 1 >= f && ["m"] || f < De.m && ["mm", f] || 1 >= g && ["h"] || g < De.h && ["hh", g] || 1 >= h && ["d"] || h < De.d && ["dd", h] || 1 >= i && ["M"] || i < De.M && ["MM", i] || 1 >= j && ["y"] || ["yy", j];
    return k[2] = b, k[3] = +a > 0, k[4] = c, Lc.apply(null, k)
  }

  function Nc(a, b) {
    return void 0 === De[a] ? !1 : void 0 === b ? De[a] : (De[a] = b, !0)
  }

  function Oc(a) {
    var b = this.localeData(), c = Mc(this, !a, b);
    return a && (c = b.pastFuture(+this, c)), b.postformat(c)
  }

  function Pc() {
    var a, b, c, d = Ee(this._milliseconds) / 1e3, e = Ee(this._days),
      f = Ee(this._months);
    a = q(d / 60), b = q(a / 60), d %= 60, a %= 60, c = q(f / 12), f %= 12;
    var g = c, h = f, i = e, j = b, k = a, l = d, m = this.asSeconds();
    return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
  }

  var Qc, Rc, Sc = a.momentProperties = [], Tc = !1, Uc = {}, Vc = {},
    Wc = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    Xc = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Yc = {}, Zc = {},
    $c = /\d/, _c = /\d\d/, ad = /\d{3}/, bd = /\d{4}/, cd = /[+-]?\d{6}/,
    dd = /\d\d?/, ed = /\d\d\d\d?/, fd = /\d\d\d\d\d\d?/, gd = /\d{1,3}/,
    hd = /\d{1,4}/, id = /[+-]?\d{1,6}/, jd = /\d+/, kd = /[+-]?\d+/,
    ld = /Z|[+-]\d\d:?\d\d/gi, md = /Z|[+-]\d\d(?::?\d\d)?/gi,
    nd = /[+-]?\d+(\.\d{1,3})?/,
    od = /[0-9]*(a[mn]\s?)?['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\-]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    pd = {}, qd = {}, rd = 0, sd = 1, td = 2, ud = 3, vd = 4, wd = 5, xd = 6,
    yd = 7, zd = 8;
  J("M", ["MM", 2], "Mo", function () {
    return this.month() + 1
  }), J("MMM", 0, 0, function (a) {
    return this.localeData().monthsShort(this, a)
  }), J("MMMM", 0, 0, function (a) {
    return this.localeData().months(this, a)
  }), A("month", "M"), O("M", dd), O("MM", dd, _c), O("MMM", od), O("MMMM", od), R(["M", "MM"], function (a, b) {
    b[sd] = r(a) - 1
  }), R(["MMM", "MMMM"], function (a, b, c, d) {
    var e = c._locale.monthsParse(a, d, c._strict);
    null != e ? b[sd] = e : j(c).invalidMonth = a
  });
  var Ad = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
    Bd = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    Cd = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sept_Oct_Nov_Dec".split("_"), Dd = {};
  a.suppressDeprecationWarnings = !1;
  var Ed = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
    Fd = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
    Gd = /Z|[+-]\d\d(?::?\d\d)?/,
    Hd = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
    Id = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
    Jd = /^\/?Date\((\-?\d+)/i;
  a.createFromInputFallback = ba("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) {
    a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
  }), J(0, ["YY", 2], 0, function () {
    return this.year() % 100
  }), J(0, ["YYYY", 4], 0, "year"), J(0, ["YYYYY", 5], 0, "year"), J(0, ["YYYYYY", 6, !0], 0, "year"), A("year", "y"), O("Y", kd), O("YY", dd, _c), O("YYYY", hd, bd), O("YYYYY", id, cd), O("YYYYYY", id, cd), R(["YYYYY", "YYYYYY"], rd), R("YYYY", function (b, c) {
    c[rd] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b)
  }), R("YY", function (b, c) {
    c[rd] = a.parseTwoDigitYear(b)
  }), a.parseTwoDigitYear = function (a) {
    return r(a) + (r(a) > 68 ? 1900 : 2e3)
  };
  var Kd = E("FullYear", !1);
  a.ISO_8601 = function () {
  };
  var Ld = ba("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function () {
      var a = Aa.apply(null, arguments);
      return this.isValid() && a.isValid() ? this > a ? this : a : l()
    }),
    Md = ba("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function () {
      var a = Aa.apply(null, arguments);
      return this.isValid() && a.isValid() ? a > this ? this : a : l()
    }), Nd = Date.now || function () {
      return +new Date
    };
  Ga("Z", ":"), Ga("ZZ", ""), O("Z", md), O("ZZ", md), R(["Z", "ZZ"], function (a, b, c) {
    c._useUTC = !0, c._tzm = Ha(md, a)
  });
  var Od = /([\+\-]|\d\d)/gi;
  a.updateOffset = function () {
  };
  var Pd = /(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
    Qd = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
  Va.fn = Ea.prototype;
  var Rd = Za(1, "add"), Sd = Za(-1, "subtract");
  a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  var Td = ba("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
    return void 0 === a ? this.localeData() : this.locale(a)
  });
  J(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100
  }), J(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100
  }), Eb("gggg", "weekYear"), Eb("ggggg", "weekYear"), Eb("GGGG", "isoWeekYear"), Eb("GGGGG", "isoWeekYear"), A("weekYear", "gg"), A("isoWeekYear", "GG"), O("G", kd), O("g", kd), O("GG", dd, _c), O("gg", dd, _c), O("GGGG", hd, bd), O("gggg", hd, bd), O("GGGGG", id, cd), O("ggggg", id, cd), S(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
    b[d.substr(0, 2)] = r(a)
  }), S(["gg", "GG"], function (b, c, d, e) {
    c[e] = a.parseTwoDigitYear(b)
  }), J("Q", 0, "Qo", "quarter"), A("quarter", "Q"), O("Q", $c), R("Q", function (a, b) {
    b[sd] = 3 * (r(a) - 1)
  }), J("w", ["ww", 2], "wo", "week"), J("W", ["WW", 2], "Wo", "isoWeek"), A("week", "w"), A("isoWeek", "W"), O("w", dd), O("ww", dd, _c), O("W", dd), O("WW", dd, _c), S(["w", "ww", "W", "WW"], function (a, b, c, d) {
    b[d.substr(0, 1)] = r(a)
  });
  var Ud = {dow: 0, doy: 6};
  J("D", ["DD", 2], "Do", "date"), A("date", "D"), O("D", dd), O("DD", dd, _c), O("Do", function (a, b) {
    return a ? b._ordinalParse : b._ordinalParseLenient
  }), R(["D", "DD"], td), R("Do", function (a, b) {
    b[td] = r(a.match(dd)[0], 10)
  });
  var Vd = E("Date", !0);
  J("d", 0, "do", "day"), J("dd", 0, 0, function (a) {
    return this.localeData().weekdaysMin(this, a)
  }), J("ddd", 0, 0, function (a) {
    return this.localeData().weekdaysShort(this, a)
  }), J("dddd", 0, 0, function (a) {
    return this.localeData().weekdays(this, a)
  }), J("e", 0, 0, "weekday"), J("E", 0, 0, "isoWeekday"), A("day", "d"), A("weekday", "e"), A("isoWeekday", "E"), O("d", dd), O("e", dd), O("E", dd), O("dd", od), O("ddd", od), O("dddd", od), S(["dd", "ddd", "dddd"], function (a, b, c, d) {
    var e = c._locale.weekdaysParse(a, d, c._strict);
    null != e ? b.d = e : j(c).invalidWeekday = a
  }), S(["d", "e", "E"], function (a, b, c, d) {
    b[d] = r(a)
  });
  var Wd = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    Xd = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    Yd = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  J("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), A("dayOfYear", "DDD"), O("DDD", gd), O("DDDD", ad), R(["DDD", "DDDD"], function (a, b, c) {
    c._dayOfYear = r(a)
  }), J("H", ["HH", 2], 0, "hour"), J("h", ["hh", 2], 0, $b), J("hmm", 0, 0, function () {
    return "" + $b.apply(this) + I(this.minutes(), 2)
  }), J("hmmss", 0, 0, function () {
    return "" + $b.apply(this) + I(this.minutes(), 2) + I(this.seconds(), 2)
  }), J("Hmm", 0, 0, function () {
    return "" + this.hours() + I(this.minutes(), 2)
  }), J("Hmmss", 0, 0, function () {
    return "" + this.hours() + I(this.minutes(), 2) + I(this.seconds(), 2)
  }), _b("a", !0), _b("A", !1), A("hour", "h"), O("a", ac), O("A", ac), O("H", dd), O("h", dd), O("HH", dd, _c), O("hh", dd, _c), O("hmm", ed), O("hmmss", fd), O("Hmm", ed), O("Hmmss", fd), R(["H", "HH"], ud), R(["a", "A"], function (a, b, c) {
    c._isPm = c._locale.isPM(a), c._meridiem = a
  }), R(["h", "hh"], function (a, b, c) {
    b[ud] = r(a), j(c).bigHour = !0
  }), R("hmm", function (a, b, c) {
    var d = a.length - 2;
    b[ud] = r(a.substr(0, d)), b[vd] = r(a.substr(d)), j(c).bigHour = !0
  }), R("hmmss", function (a, b, c) {
    var d = a.length - 4, e = a.length - 2;
    b[ud] = r(a.substr(0, d)), b[vd] = r(a.substr(d, 2)), b[wd] = r(a.substr(e)), j(c).bigHour = !0
  }), R("Hmm", function (a, b, c) {
    var d = a.length - 2;
    b[ud] = r(a.substr(0, d)), b[vd] = r(a.substr(d))
  }), R("Hmmss", function (a, b, c) {
    var d = a.length - 4, e = a.length - 2;
    b[ud] = r(a.substr(0, d)), b[vd] = r(a.substr(d, 2)), b[wd] = r(a.substr(e))
  });
  var Zd = /[ap]\.?m?\.?/i, $d = E("Hours", !0);
  J("m", ["mm", 2], 0, "minute"), A("minute", "m"), O("m", dd), O("mm", dd, _c), R(["m", "mm"], vd);
  var _d = E("Minutes", !1);
  J("s", ["ss", 2], 0, "second"), A("second", "s"), O("s", dd), O("ss", dd, _c), R(["s", "ss"], wd);
  var ae = E("Seconds", !1);
  J("S", 0, 0, function () {
    return ~~(this.millisecond() / 100)
  }), J(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10)
  }), J(0, ["SSS", 3], 0, "millisecond"), J(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond()
  }), J(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond()
  }), J(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond()
  }), J(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond()
  }), J(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond()
  }), J(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond()
  }), A("millisecond", "ms"), O("S", gd, $c), O("SS", gd, _c), O("SSS", gd, ad);
  var be;
  for (be = "SSSS"; be.length <= 9; be += "S") O(be, jd);
  for (be = "S"; be.length <= 9; be += "S") R(be, dc);
  var ce = E("Milliseconds", !1);
  J("z", 0, 0, "zoneAbbr"), J("zz", 0, 0, "zoneName");
  var de = o.prototype;
  de.add = Rd, de.calendar = _a, de.clone = ab, de.diff = hb, de.endOf = tb, de.format = lb, de.from = mb, de.fromNow = nb, de.to = ob, de.toNow = pb, de.get = H, de.invalidAt = Cb, de.isAfter = bb, de.isBefore = cb, de.isBetween = db, de.isSame = eb, de.isSameOrAfter = fb, de.isSameOrBefore = gb, de.isValid = Ab, de.lang = Td, de.locale = qb, de.localeData = rb, de.max = Md, de.min = Ld, de.parsingFlags = Bb, de.set = H, de.startOf = sb, de.subtract = Sd, de.toArray = xb, de.toObject = yb, de.toDate = wb, de.toISOString = kb, de.toJSON = zb, de.toString = jb, de.unix = vb, de.valueOf = ub, de.creationData = Db, de.year = Kd, de.isLeapYear = ja, de.weekYear = Fb, de.isoWeekYear = Gb, de.quarter = de.quarters = Lb, de.month = Z, de.daysInMonth = $, de.week = de.weeks = Pb, de.isoWeek = de.isoWeeks = Qb, de.weeksInYear = Ib, de.isoWeeksInYear = Hb, de.date = Vd, de.day = de.days = Wb, de.weekday = Xb, de.isoWeekday = Yb, de.dayOfYear = Zb, de.hour = de.hours = $d, de.minute = de.minutes = _d, de.second = de.seconds = ae, de.millisecond = de.milliseconds = ce, de.utcOffset = Ka, de.utc = Ma, de.local = Na, de.parseZone = Oa, de.hasAlignedHourOffset = Pa, de.isDST = Qa, de.isDSTShifted = Ra, de.isLocal = Sa, de.isUtcOffset = Ta, de.isUtc = Ua, de.isUTC = Ua, de.zoneAbbr = ec, de.zoneName = fc, de.dates = ba("dates accessor is deprecated. Use date instead.", Vd), de.months = ba("months accessor is deprecated. Use month instead", Z), de.years = ba("years accessor is deprecated. Use year instead", Kd), de.zone = ba("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", La);
  var ee = de, fe = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  }, ge = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  }, he = "Invalid date", ie = "%d", je = /\d{1,2}/, ke = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  }, le = t.prototype;
  le._calendar = fe, le.calendar = ic, le._longDateFormat = ge, le.longDateFormat = jc, le._invalidDate = he, le.invalidDate = kc, le._ordinal = ie, le.ordinal = lc, le._ordinalParse = je, le.preparse = mc, le.postformat = mc, le._relativeTime = ke, le.relativeTime = nc, le.pastFuture = oc, le.set = pc, le.months = V, le._months = Bd, le.monthsShort = W, le._monthsShort = Cd, le.monthsParse = X, le.week = Mb, le._week = Ud, le.firstDayOfYear = Ob, le.firstDayOfWeek = Nb, le.weekdays = Sb, le._weekdays = Wd, le.weekdaysMin = Ub, le._weekdaysMin = Yd, le.weekdaysShort = Tb, le._weekdaysShort = Xd, le.weekdaysParse = Vb, le.isPM = bc, le._meridiemParse = Zd, le.meridiem = cc, x("en", {
    monthsParse: [/^jan/i, /^feb/i, /^mar/i, /^apr/i, /^may/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^oct/i, /^nov/i, /^dec/i],
    longMonthsParse: [/^january$/i, /^february$/i, /^march$/i, /^april$/i, /^may$/i, /^june$/i, /^july$/i, /^august$/i, /^september$/i, /^october$/i, /^november$/i, /^december$/i],
    shortMonthsParse: [/^jan$/i, /^feb$/i, /^mar$/i, /^apr$/i, /^may$/i, /^jun$/i, /^jul$/i, /^aug/i, /^sept?$/i, /^oct$/i, /^nov$/i, /^dec$/i],
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (a) {
      var b = a % 10,
        c = 1 === r(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
      return a + c
    }
  }), a.lang = ba("moment.lang is deprecated. Use moment.locale instead.", x), a.langData = ba("moment.langData is deprecated. Use moment.localeData instead.", z);
  var me = Math.abs, ne = Hc("ms"), oe = Hc("s"), pe = Hc("m"), qe = Hc("h"),
    re = Hc("d"), se = Hc("w"), te = Hc("M"), ue = Hc("y"),
    ve = Jc("milliseconds"), we = Jc("seconds"), xe = Jc("minutes"),
    ye = Jc("hours"), ze = Jc("days"), Ae = Jc("months"), Be = Jc("years"),
    Ce = Math.round, De = {s: 45, m: 45, h: 22, d: 26, M: 11}, Ee = Math.abs,
    Fe = Ea.prototype;
  Fe.abs = xc, Fe.add = zc, Fe.subtract = Ac, Fe.as = Fc, Fe.asMilliseconds = ne, Fe.asSeconds = oe, Fe.asMinutes = pe, Fe.asHours = qe, Fe.asDays = re, Fe.asWeeks = se, Fe.asMonths = te, Fe.asYears = ue, Fe.valueOf = Gc, Fe._bubble = Cc, Fe.get = Ic, Fe.milliseconds = ve, Fe.seconds = we, Fe.minutes = xe, Fe.hours = ye, Fe.days = ze, Fe.weeks = Kc, Fe.months = Ae, Fe.years = Be, Fe.humanize = Oc, Fe.toISOString = Pc, Fe.toString = Pc, Fe.toJSON = Pc, Fe.locale = qb, Fe.localeData = rb, Fe.toIsoString = ba("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Pc), Fe.lang = Td, J("X", 0, 0, "unix"), J("x", 0, 0, "valueOf"), O("x", kd), O("X", nd), R("X", function (a, b, c) {
    c._d = new Date(1e3 * parseFloat(a, 10))
  }), R("x", function (a, b, c) {
    c._d = new Date(r(a))
  }), a.version = "2.11.0", b(Aa), a.fn = ee, a.min = Ca, a.max = Da, a.now = Nd, a.utc = h, a.unix = gc, a.months = sc, a.isDate = d, a.locale = x, a.invalid = l, a.duration = Va, a.isMoment = p, a.weekdays = uc, a.parseZone = hc, a.localeData = z, a.isDuration = Fa, a.monthsShort = tc, a.weekdaysMin = wc, a.defineLocale = y, a.weekdaysShort = vc, a.normalizeUnits = B, a.relativeTimeThreshold = Nc, a.prototype = ee;
  var Ge = a;
  return Ge
});

/*!
 * FullCalendar v2.6.0
 * Docs & License: http://fullcalendar.io/
 * (c) 2015 Adam Shaw
 */
!function (a) {
  "function" == typeof define && define.amd ? define(["jquery", "moment"], a) : "object" == typeof exports ? module.exports = a(require("jquery"), require("moment")) : a(jQuery, moment)
}(function (a, b) {
  function c(a) {
    return Q(a, Ra)
  }

  function d(b) {
    var c, d = {views: b.views || {}};
    return a.each(b, function (b, e) {
      "views" != b && (a.isPlainObject(e) && !/(time|duration|interval)$/i.test(b) && -1 == a.inArray(b, Ra) ? (c = null, a.each(e, function (a, e) {
        /^(month|week|day|default|basic(Week|Day)?|agenda(Week|Day)?)$/.test(a) ? (d.views[a] || (d.views[a] = {}), d.views[a][b] = e) : (c || (c = {}), c[a] = e)
      }), c && (d[b] = c)) : d[b] = e)
    }), d
  }

  function e(a, b) {
    b.left && a.css({
      "border-left-width": 1,
      "margin-left": b.left - 1
    }), b.right && a.css({"border-right-width": 1, "margin-right": b.right - 1})
  }

  function f(a) {
    a.css({
      "margin-left": "",
      "margin-right": "",
      "border-left-width": "",
      "border-right-width": ""
    })
  }

  function g() {
    a("body").addClass("fc-not-allowed")
  }

  function h() {
    a("body").removeClass("fc-not-allowed")
  }

  function i(b, c, d) {
    var e = Math.floor(c / b.length), f = Math.floor(c - e * (b.length - 1)),
      g = [], h = [], i = [], k = 0;
    j(b), b.each(function (c, d) {
      var j = c === b.length - 1 ? f : e, l = a(d).outerHeight(!0);
      j > l ? (g.push(d), h.push(l), i.push(a(d).height())) : k += l
    }), d && (c -= k, e = Math.floor(c / g.length), f = Math.floor(c - e * (g.length - 1))), a(g).each(function (b, c) {
      var d = b === g.length - 1 ? f : e, j = h[b], k = i[b], l = d - (j - k);
      d > j && a(c).height(l)
    })
  }

  function j(a) {
    a.height("")
  }

  function k(b) {
    var c = 0;
    return b.find("> span").each(function (b, d) {
      var e = a(d).outerWidth();
      e > c && (c = e)
    }), c++, b.width(c), c
  }

  function l(a, b) {
    return a.height(b).addClass("fc-scroller"), a[0].scrollHeight - 1 > a[0].clientHeight ? !0 : (m(a), !1)
  }

  function m(a) {
    a.height("").removeClass("fc-scroller")
  }

  function n(b) {
    var c = b.css("position"), d = b.parents().filter(function () {
      var b = a(this);
      return /(auto|scroll)/.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
    }).eq(0);
    return "fixed" !== c && d.length ? d : a(b[0].ownerDocument || document)
  }

  function o(a) {
    var b = a.offset();
    return {
      left: b.left,
      right: b.left + a.outerWidth(),
      top: b.top,
      bottom: b.top + a.outerHeight()
    }
  }

  function p(a) {
    var b = a.offset(), c = r(a),
      d = b.left + u(a, "border-left-width") + c.left,
      e = b.top + u(a, "border-top-width") + c.top;
    return {
      left: d,
      right: d + a[0].clientWidth,
      top: e,
      bottom: e + a[0].clientHeight
    }
  }

  function q(a) {
    var b = a.offset(),
      c = b.left + u(a, "border-left-width") + u(a, "padding-left"),
      d = b.top + u(a, "border-top-width") + u(a, "padding-top");
    return {left: c, right: c + a.width(), top: d, bottom: d + a.height()}
  }

  function r(a) {
    var b = a.innerWidth() - a[0].clientWidth, c = {
      left: 0,
      right: 0,
      top: 0,
      bottom: a.innerHeight() - a[0].clientHeight
    };
    return s() && "rtl" == a.css("direction") ? c.left = b : c.right = b, c
  }

  function s() {
    return null === Sa && (Sa = t()), Sa
  }

  function t() {
    var b = a("<div><div/></div>").css({
        position: "absolute",
        top: -1e3,
        left: 0,
        border: 0,
        padding: 0,
        overflow: "scroll",
        direction: "rtl"
      }).appendTo("body"), c = b.children(),
      d = c.offset().left > b.offset().left;
    return b.remove(), d
  }

  function u(a, b) {
    return parseFloat(a.css(b)) || 0
  }

  function v(a) {
    return 1 == a.which && !a.ctrlKey
  }

  function w(a, b) {
    var c = {
      left: Math.max(a.left, b.left),
      right: Math.min(a.right, b.right),
      top: Math.max(a.top, b.top),
      bottom: Math.min(a.bottom, b.bottom)
    };
    return c.left < c.right && c.top < c.bottom ? c : !1
  }

  function x(a, b) {
    return {
      left: Math.min(Math.max(a.left, b.left), b.right),
      top: Math.min(Math.max(a.top, b.top), b.bottom)
    }
  }

  function y(a) {
    return {left: (a.left + a.right) / 2, top: (a.top + a.bottom) / 2}
  }

  function z(a, b) {
    return {left: a.left - b.left, top: a.top - b.top}
  }

  function A(b) {
    var c, d, e = [], f = [];
    for ("string" == typeof b ? f = b.split(/\s*,\s*/) : "function" == typeof b ? f = [b] : a.isArray(b) && (f = b), c = 0; c < f.length; c++) d = f[c], "string" == typeof d ? e.push("-" == d.charAt(0) ? {
      field: d.substring(1),
      order: -1
    } : {field: d, order: 1}) : "function" == typeof d && e.push({func: d});
    return e
  }

  function B(a, b, c) {
    var d, e;
    for (d = 0; d < c.length; d++) if (e = C(a, b, c[d])) return e;
    return 0
  }

  function C(a, b, c) {
    return c.func ? c.func(a, b) : D(a[c.field], b[c.field]) * (c.order || 1)
  }

  function D(b, c) {
    return b || c ? null == c ? -1 : null == b ? 1 : "string" === a.type(b) || "string" === a.type(c) ? String(b).localeCompare(String(c)) : b - c : 0
  }

  function E(a, b) {
    var c, d, e, f, g = a.start, h = a.end, i = b.start, j = b.end;
    return h > i && j > g ? (g >= i ? (c = g.clone(), e = !0) : (c = i.clone(), e = !1), j >= h ? (d = h.clone(), f = !0) : (d = j.clone(), f = !1), {
      start: c,
      end: d,
      isStart: e,
      isEnd: f
    }) : void 0
  }

  function F(a, c) {
    return b.duration({
      days: a.clone().stripTime().diff(c.clone().stripTime(), "days"),
      ms: a.time() - c.time()
    })
  }

  function G(a, c) {
    return b.duration({days: a.clone().stripTime().diff(c.clone().stripTime(), "days")})
  }

  function H(a, c, d) {
    return b.duration(Math.round(a.diff(c, d, !0)), d)
  }

  function I(a, b) {
    var c, d, e;
    for (c = 0; c < Ua.length && (d = Ua[c], e = J(d, a, b), !(e >= 1 && ba(e))); c++) ;
    return d
  }

  function J(a, c, d) {
    return null != d ? d.diff(c, a, !0) : b.isDuration(c) ? c.as(a) : c.end.diff(c.start, a, !0)
  }

  function K(a, b, c) {
    var d;
    return N(c) ? (b - a) / c : (d = c.asMonths(), Math.abs(d) >= 1 && ba(d) ? b.diff(a, "months", !0) / d : b.diff(a, "days", !0) / c.asDays())
  }

  function L(a, b) {
    var c, d;
    return N(a) || N(b) ? a / b : (c = a.asMonths(), d = b.asMonths(), Math.abs(c) >= 1 && ba(c) && Math.abs(d) >= 1 && ba(d) ? c / d : a.asDays() / b.asDays())
  }

  function M(a, c) {
    var d;
    return N(a) ? b.duration(a * c) : (d = a.asMonths(), Math.abs(d) >= 1 && ba(d) ? b.duration({months: d * c}) : b.duration({days: a.asDays() * c}))
  }

  function N(a) {
    return Boolean(a.hours() || a.minutes() || a.seconds() || a.milliseconds())
  }

  function O(a) {
    return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
  }

  function P(a) {
    return /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(a)
  }

  function Q(a, b) {
    var c, d, e, f, g, h, i = {};
    if (b) for (c = 0; c < b.length; c++) {
      for (d = b[c], e = [], f = a.length - 1; f >= 0; f--) if (g = a[f][d], "object" == typeof g) e.unshift(g); else if (void 0 !== g) {
        i[d] = g;
        break
      }
      e.length && (i[d] = Q(e))
    }
    for (c = a.length - 1; c >= 0; c--) {
      h = a[c];
      for (d in h) d in i || (i[d] = h[d])
    }
    return i
  }

  function R(a) {
    var b = function () {
    };
    return b.prototype = a, new b
  }

  function S(a, b) {
    for (var c in a) U(a, c) && (b[c] = a[c])
  }

  function T(a, b) {
    var c, d, e = ["constructor", "toString", "valueOf"];
    for (c = 0; c < e.length; c++) d = e[c], a[d] !== Object.prototype[d] && (b[d] = a[d])
  }

  function U(a, b) {
    return Ya.call(a, b)
  }

  function V(b) {
    return /undefined|null|boolean|number|string/.test(a.type(b))
  }

  function W(b, c, d) {
    if (a.isFunction(b) && (b = [b]), b) {
      var e, f;
      for (e = 0; e < b.length; e++) f = b[e].apply(c, d) || f;
      return f
    }
  }

  function X() {
    for (var a = 0; a < arguments.length; a++) if (void 0 !== arguments[a]) return arguments[a]
  }

  function Y(a) {
    return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
  }

  function Z(a) {
    return a.replace(/&.*?;/g, "")
  }

  function $(b) {
    var c = [];
    return a.each(b, function (a, b) {
      null != b && c.push(a + ":" + b)
    }), c.join(";")
  }

  function _(a) {
    return a.charAt(0).toUpperCase() + a.slice(1)
  }

  function aa(a, b) {
    return a - b
  }

  function ba(a) {
    return a % 1 === 0
  }

  function ca(a, b) {
    var c = a[b];
    return function () {
      return c.apply(a, arguments)
    }
  }

  function da(a, b) {
    var c, d, e, f, g = function () {
      var h = +new Date - f;
      b > h && h > 0 ? c = setTimeout(g, b - h) : (c = null, a.apply(e, d), c || (e = d = null))
    };
    return function () {
      e = this, d = arguments, f = +new Date, c || (c = setTimeout(g, b))
    }
  }

  function ea(c, d, e) {
    var f, g, h, i, j = c[0], k = 1 == c.length && "string" == typeof j;
    return b.isMoment(j) ? (i = b.apply(null, c), ga(j, i)) : O(j) || void 0 === j ? i = b.apply(null, c) : (f = !1, g = !1, k ? Za.test(j) ? (j += "-01", c = [j], f = !0, g = !0) : (h = $a.exec(j)) && (f = !h[5], g = !0) : a.isArray(j) && (g = !0), i = d || f ? b.utc.apply(b, c) : b.apply(null, c), f ? (i._ambigTime = !0, i._ambigZone = !0) : e && (g ? i._ambigZone = !0 : k && (i.utcOffset ? i.utcOffset(j) : i.zone(j)))), i._fullCalendar = !0, i
  }

  function fa(a, c) {
    var d, e, f = !1, g = !1, h = a.length, i = [];
    for (d = 0; h > d; d++) e = a[d], b.isMoment(e) || (e = Pa.moment.parseZone(e)), f = f || e._ambigTime, g = g || e._ambigZone, i.push(e);
    for (d = 0; h > d; d++) e = i[d], c || !f || e._ambigTime ? g && !e._ambigZone && (i[d] = e.clone().stripZone()) : i[d] = e.clone().stripTime();
    return i
  }

  function ga(a, b) {
    a._ambigTime ? b._ambigTime = !0 : b._ambigTime && (b._ambigTime = !1), a._ambigZone ? b._ambigZone = !0 : b._ambigZone && (b._ambigZone = !1)
  }

  function ha(a, b) {
    a.year(b[0] || 0).month(b[1] || 0).date(b[2] || 0).hours(b[3] || 0).minutes(b[4] || 0).seconds(b[5] || 0).milliseconds(b[6] || 0)
  }

  function ia(a, b) {
    return ab.format.call(a, b)
  }

  function ja(a, b) {
    return ka(a, pa(b))
  }

  function ka(a, b) {
    var c, d = "";
    for (c = 0; c < b.length; c++) d += la(a, b[c]);
    return d
  }

  function la(a, b) {
    var c, d;
    return "string" == typeof b ? b : (c = b.token) ? bb[c] ? bb[c](a) : ia(a, c) : b.maybe && (d = ka(a, b.maybe), d.match(/[1-9]/)) ? d : ""
  }

  function ma(a, b, c, d, e) {
    var f;
    return a = Pa.moment.parseZone(a), b = Pa.moment.parseZone(b), f = (a.localeData || a.lang).call(a), c = f.longDateFormat(c) || c, d = d || " - ", na(a, b, pa(c), d, e)
  }

  function na(a, b, c, d, e) {
    var f, g, h, i, j = a.clone().stripZone(), k = b.clone().stripZone(),
      l = "", m = "", n = "", o = "", p = "";
    for (g = 0; g < c.length && (f = oa(a, b, j, k, c[g]), f !== !1); g++) l += f;
    for (h = c.length - 1; h > g && (f = oa(a, b, j, k, c[h]), f !== !1); h--) m = f + m;
    for (i = g; h >= i; i++) n += la(a, c[i]), o += la(b, c[i]);
    return (n || o) && (p = e ? o + d + n : n + d + o), l + p + m
  }

  function oa(a, b, c, d, e) {
    var f, g;
    return "string" == typeof e ? e : (f = e.token) && (g = cb[f.charAt(0)], g && c.isSame(d, g)) ? ia(a, f) : !1
  }

  function pa(a) {
    return a in db ? db[a] : db[a] = qa(a)
  }

  function qa(a) {
    for (var b, c = [], d = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g; b = d.exec(a);) b[1] ? c.push(b[1]) : b[2] ? c.push({maybe: qa(b[2])}) : b[3] ? c.push({token: b[3]}) : b[5] && c.push(b[5]);
    return c
  }

  function ra() {
  }

  function sa(a, b) {
    var c;
    return U(b, "constructor") && (c = b.constructor), "function" != typeof c && (c = b.constructor = function () {
      a.apply(this, arguments)
    }), c.prototype = R(a.prototype), S(b, c.prototype), T(b, c.prototype), S(a, c), c
  }

  function ta(a, b) {
    S(b.prototype || b, a.prototype)
  }

  function ua(a, b) {
    return a || b ? a && b ? a.component === b.component && va(a, b) && va(b, a) : !1 : !0
  }

  function va(a, b) {
    for (var c in a) if (!/^(component|left|right|top|bottom)$/.test(c) && a[c] !== b[c]) return !1;
    return !0
  }

  function wa(a) {
    var b = ya(a);
    return "background" === b || "inverse-background" === b
  }

  function xa(a) {
    return "inverse-background" === ya(a)
  }

  function ya(a) {
    return X((a.source || {}).rendering, a.rendering)
  }

  function za(a) {
    var b, c, d = {};
    for (b = 0; b < a.length; b++) c = a[b], (d[c._id] || (d[c._id] = [])).push(c);
    return d
  }

  function Aa(a, b) {
    return a.start - b.start
  }

  function Ba(c) {
    var d, e, f, g, h = Pa.dataAttrPrefix;
    return h && (h += "-"), d = c.data(h + "event") || null, d && (d = "object" == typeof d ? a.extend({}, d) : {}, e = d.start, null == e && (e = d.time), f = d.duration, g = d.stick, delete d.start, delete d.time, delete d.duration, delete d.stick), null == e && (e = c.data(h + "start")), null == e && (e = c.data(h + "time")), null == f && (f = c.data(h + "duration")), null == g && (g = c.data(h + "stick")), e = null != e ? b.duration(e) : null, f = null != f ? b.duration(f) : null, g = Boolean(g), {
      eventProps: d,
      startTime: e,
      duration: f,
      stick: g
    }
  }

  function Ca(a, b) {
    var c, d;
    for (c = 0; c < b.length; c++) if (d = b[c], d.leftCol <= a.rightCol && d.rightCol >= a.leftCol) return !0;
    return !1
  }

  function Da(a, b) {
    return a.leftCol - b.leftCol
  }

  function Ea(a) {
    var b, c, d, e = [];
    for (b = 0; b < a.length; b++) {
      for (c = a[b], d = 0; d < e.length && Ha(c, e[d]).length; d++) ;
      c.level = d, (e[d] || (e[d] = [])).push(c)
    }
    return e
  }

  function Fa(a) {
    var b, c, d, e, f;
    for (b = 0; b < a.length; b++) for (c = a[b], d = 0; d < c.length; d++) for (e = c[d], e.forwardSegs = [], f = b + 1; f < a.length; f++) Ha(e, a[f], e.forwardSegs)
  }

  function Ga(a) {
    var b, c, d = a.forwardSegs, e = 0;
    if (void 0 === a.forwardPressure) {
      for (b = 0; b < d.length; b++) c = d[b], Ga(c), e = Math.max(e, 1 + c.forwardPressure);
      a.forwardPressure = e
    }
  }

  function Ha(a, b, c) {
    c = c || [];
    for (var d = 0; d < b.length; d++) Ia(a, b[d]) && c.push(b[d]);
    return c
  }

  function Ia(a, b) {
    return a.bottom > b.top && a.top < b.bottom
  }

  function Ja(c, d) {
    function e() {
      U ? h() && (k(), i()) : f()
    }

    function f() {
      V = O.theme ? "ui" : "fc", c.addClass("fc"), O.isRTL ? c.addClass("fc-rtl") : c.addClass("fc-ltr"), O.theme ? c.addClass("ui-widget") : c.addClass("fc-unthemed"), U = a("<div class='fc-view-container'/>").prependTo(c), S = N.header = new Ma(N, O), T = S.render(), T && c.prepend(T), i(O.defaultView), O.handleWindowResize && (Y = da(m, O.windowResizeDelay), a(window).resize(Y))
    }

    function g() {
      W && W.removeElement(), S.removeElement(), U.remove(), c.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"), Y && a(window).unbind("resize", Y)
    }

    function h() {
      return c.is(":visible")
    }

    function i(b) {
      ca++, W && b && W.type !== b && (S.deactivateButton(W.type), H(), W.removeElement(), W = N.view = null), !W && b && (W = N.view = ba[b] || (ba[b] = N.instantiateView(b)), W.setElement(a("<div class='fc-view fc-" + b + "-view' />").appendTo(U)), S.activateButton(b)), W && (Z = W.massageCurrentDate(Z), W.displaying && Z.isWithin(W.intervalStart, W.intervalEnd) || h() && (W.display(Z), I(), u(), v(), q())), I(), ca--
    }

    function j(a) {
      return h() ? (a && l(), ca++, W.updateSize(!0), ca--, !0) : void 0
    }

    function k() {
      h() && l()
    }

    function l() {
      X = "number" == typeof O.contentHeight ? O.contentHeight : "number" == typeof O.height ? O.height - (T ? T.outerHeight(!0) : 0) : Math.round(U.width() / Math.max(O.aspectRatio, .5))
    }

    function m(a) {
      !ca && a.target === window && W.start && j(!0) && W.trigger("windowResize", aa)
    }

    function n() {
      p(), r()
    }

    function o() {
      h() && (H(), W.displayEvents(ea), I())
    }

    function p() {
      H(), W.clearEvents(), I()
    }

    function q() {
      !O.lazyFetching || $(W.start, W.end) ? r() : o()
    }

    function r() {
      _(W.start, W.end)
    }

    function s(a) {
      ea = a, o()
    }

    function t() {
      o()
    }

    function u() {
      S.updateTitle(W.title)
    }

    function v() {
      var a = N.getNow();
      a.isWithin(W.intervalStart, W.intervalEnd) ? S.disableButton("today") : S.enableButton("today")
    }

    function w(a, b) {
      W.select(N.buildSelectSpan.apply(N, arguments))
    }

    function x() {
      W && W.unselect()
    }

    function y() {
      Z = W.computePrevDate(Z), i()
    }

    function z() {
      Z = W.computeNextDate(Z), i()
    }

    function A() {
      Z.add(-1, "years"), i()
    }

    function B() {
      Z.add(1, "years"), i()
    }

    function C() {
      Z = N.getNow(), i()
    }

    function D(a) {
      Z = N.moment(a).stripZone(), i()
    }

    function E(a) {
      Z.add(b.duration(a)), i()
    }

    function F(a, b) {
      var c;
      b = b || "day", c = N.getViewSpec(b) || N.getUnitViewSpec(b), Z = a.clone(), i(c ? c.type : null)
    }

    function G() {
      return N.applyTimezone(Z)
    }

    function H() {
      U.css({width: "100%", height: U.height(), overflow: "hidden"})
    }

    function I() {
      U.css({width: "", height: "", overflow: ""})
    }

    function J() {
      return N
    }

    function K() {
      return W
    }

    function L(a, b) {
      return void 0 === b ? O[a] : void (("height" == a || "contentHeight" == a || "aspectRatio" == a) && (O[a] = b, j(!0)))
    }

    function M(a, b) {
      var c = Array.prototype.slice.call(arguments, 2);
      return b = b || aa, this.triggerWith(a, b, c), O[a] ? O[a].apply(b, c) : void 0
    }

    var N = this;
    N.initOptions(d || {});
    var O = this.options;
    N.render = e, N.destroy = g, N.refetchEvents = n, N.reportEvents = s, N.reportEventChange = t, N.rerenderEvents = o, N.changeView = i, N.select = w, N.unselect = x, N.prev = y, N.next = z, N.prevYear = A, N.nextYear = B, N.today = C, N.gotoDate = D, N.incrementDate = E, N.zoomTo = F, N.getDate = G, N.getCalendar = J, N.getView = K, N.option = L, N.trigger = M;
    var P = R(La(O.lang));
    if (O.monthNames && (P._months = O.monthNames), O.monthNamesShort && (P._monthsShort = O.monthNamesShort), O.dayNames && (P._weekdays = O.dayNames), O.dayNamesShort && (P._weekdaysShort = O.dayNamesShort), null != O.firstDay) {
      var Q = R(P._week);
      Q.dow = O.firstDay, P._week = Q
    }
    P._fullCalendar_weekCalc = function (a) {
      return "function" == typeof a ? a : "local" === a ? a : "iso" === a || "ISO" === a ? "ISO" : void 0
    }(O.weekNumberCalculation), N.defaultAllDayEventDuration = b.duration(O.defaultAllDayEventDuration), N.defaultTimedEventDuration = b.duration(O.defaultTimedEventDuration), N.moment = function () {
      var a;
      return "local" === O.timezone ? (a = Pa.moment.apply(null, arguments), a.hasTime() && a.local()) : a = "UTC" === O.timezone ? Pa.moment.utc.apply(null, arguments) : Pa.moment.parseZone.apply(null, arguments), "_locale" in a ? a._locale = P : a._lang = P, a
    }, N.getIsAmbigTimezone = function () {
      return "local" !== O.timezone && "UTC" !== O.timezone
    }, N.applyTimezone = function (a) {
      if (!a.hasTime()) return a.clone();
      var b, c = N.moment(a.toArray()), d = a.time() - c.time();
      return d && (b = c.clone().add(d), a.time() - b.time() === 0 && (c = b)), c
    }, N.getNow = function () {
      var a = O.now;
      return "function" == typeof a && (a = a()), N.moment(a).stripZone()
    }, N.getEventEnd = function (a) {
      return a.end ? a.end.clone() : N.getDefaultEventEnd(a.allDay, a.start)
    }, N.getDefaultEventEnd = function (a, b) {
      var c = b.clone();
      return a ? c.stripTime().add(N.defaultAllDayEventDuration) : c.add(N.defaultTimedEventDuration), N.getIsAmbigTimezone() && c.stripZone(), c
    }, N.humanizeDuration = function (a) {
      return (a.locale || a.lang).call(a, O.lang).humanize()
    }, Na.call(N, O);
    var S, T, U, V, W, X, Y, Z, $ = N.isFetchNeeded, _ = N.fetchEvents,
      aa = c[0], ba = {}, ca = 0, ea = [];
    Z = null != O.defaultDate ? N.moment(O.defaultDate).stripZone() : N.getNow(), N.getSuggestedViewHeight = function () {
      return void 0 === X && k(), X
    }, N.isHeightAuto = function () {
      return "auto" === O.contentHeight || "auto" === O.height
    }, N.freezeContentHeight = H, N.unfreezeContentHeight = I, N.initialize()
  }

  function Ka(b) {
    a.each(tb, function (a, c) {
      null == b[a] && (b[a] = c(b))
    })
  }

  function La(a) {
    var c = b.localeData || b.langData;
    return c.call(b, a) || c.call(b, "en")
  }

  function Ma(b, c) {
    function d() {
      var b = c.header;
      return n = c.theme ? "ui" : "fc", b ? o = a("<div class='fc-toolbar'/>").append(f("left")).append(f("right")).append(f("center")).append('<div class="fc-clear"/>') : void 0
    }

    function e() {
      o.remove(), o = a()
    }

    function f(d) {
      var e = a('<div class="fc-' + d + '"/>'), f = c.header[d];
      return f && a.each(f.split(" "), function (d) {
        var f, g = a(), h = !0;
        a.each(this.split(","), function (d, e) {
          var f, i, j, k, l, m, o, q, r, s;
          "title" == e ? (g = g.add(a("<h2>&nbsp;</h2>")), h = !1) : ((f = (b.options.customButtons || {})[e]) ? (j = function (a) {
            f.click && f.click.call(s[0], a)
          }, k = "", l = f.text) : (i = b.getViewSpec(e)) ? (j = function () {
            b.changeView(e)
          }, p.push(e), k = i.buttonTextOverride, l = i.buttonTextDefault) : b[e] && (j = function () {
            b[e]()
          }, k = (b.overrides.buttonText || {})[e], l = c.buttonText[e]), j && (m = f ? f.themeIcon : c.themeButtonIcons[e], o = f ? f.icon : c.buttonIcons[e], q = k ? Y(k) : m && c.theme ? "<span class='ui-icon ui-icon-" + m + "'></span>" : o && !c.theme ? "<span class='fc-icon fc-icon-" + o + "'></span>" : Y(l), r = ["fc-" + e + "-button", n + "-button", n + "-state-default"], s = a('<button type="button" class="' + r.join(" ") + '">' + q + "</button>").click(function (a) {
            s.hasClass(n + "-state-disabled") || (j(a), (s.hasClass(n + "-state-active") || s.hasClass(n + "-state-disabled")) && s.removeClass(n + "-state-hover"))
          }).mousedown(function () {
            s.not("." + n + "-state-active").not("." + n + "-state-disabled").addClass(n + "-state-down")
          }).mouseup(function () {
            s.removeClass(n + "-state-down")
          }).hover(function () {
            s.not("." + n + "-state-active").not("." + n + "-state-disabled").addClass(n + "-state-hover")
          }, function () {
            s.removeClass(n + "-state-hover").removeClass(n + "-state-down")
          }), g = g.add(s)))
        }), h && g.first().addClass(n + "-corner-left").end().last().addClass(n + "-corner-right").end(), g.length > 1 ? (f = a("<div/>"), h && f.addClass("fc-button-group"), f.append(g), e.append(f)) : e.append(g)
      }), e
    }

    function g(a) {
      o.find("h2").text(a)
    }

    function h(a) {
      o.find(".fc-" + a + "-button").addClass(n + "-state-active")
    }

    function i(a) {
      o.find(".fc-" + a + "-button").removeClass(n + "-state-active")
    }

    function j(a) {
      o.find(".fc-" + a + "-button").attr("disabled", "disabled").addClass(n + "-state-disabled")
    }

    function k(a) {
      o.find(".fc-" + a + "-button").removeAttr("disabled").removeClass(n + "-state-disabled")
    }

    function l() {
      return p
    }

    var m = this;
    m.render = d, m.removeElement = e, m.updateTitle = g, m.activateButton = h, m.deactivateButton = i, m.disableButton = j, m.enableButton = k, m.getViewsWithButtons = l;
    var n, o = a(), p = []
  }

  function Na(c) {
    function d(a, b) {
      return !L || L > a || b > M
    }

    function e(a, b) {
      L = a, M = b, T = [];
      var c = ++R, d = Q.length;
      S = d;
      for (var e = 0; d > e; e++) f(Q[e], c)
    }

    function f(b, c) {
      g(b, function (d) {
        var e, f, g, h = a.isArray(b.events);
        if (c == R) {
          if (d) for (e = 0; e < d.length; e++) f = d[e], g = h ? f : s(f, b), g && T.push.apply(T, w(g));
          S--, S || N(T)
        }
      })
    }

    function g(b, d) {
      var e, f, h = Pa.sourceFetchers;
      for (e = 0; e < h.length; e++) {
        if (f = h[e].call(K, b, L.clone(), M.clone(), c.timezone, d), f === !0) return;
        if ("object" == typeof f) return void g(f, d)
      }
      var i = b.events;
      if (i) a.isFunction(i) ? (K.pushLoading(), i.call(K, L.clone(), M.clone(), c.timezone, function (a) {
        d(a), K.popLoading()
      })) : a.isArray(i) ? d(i) : d(); else {
        var j = b.url;
        if (j) {
          var k, l = b.success, m = b.error, n = b.complete;
          k = a.isFunction(b.data) ? b.data() : b.data;
          var o = a.extend({}, k || {}), p = X(b.startParam, c.startParam),
            q = X(b.endParam, c.endParam),
            r = X(b.timezoneParam, c.timezoneParam);
          p && (o[p] = L.format()), q && (o[q] = M.format()), c.timezone && "local" != c.timezone && (o[r] = c.timezone), K.pushLoading(), a.ajax(a.extend({}, ub, b, {
            data: o,
            success: function (b) {
              b = b || [];
              var c = W(l, this, arguments);
              a.isArray(c) && (b = c), d(b)
            },
            error: function () {
              W(m, this, arguments), d()
            },
            complete: function () {
              W(n, this, arguments), K.popLoading()
            }
          }))
        } else d()
      }
    }

    function h(a) {
      var b = i(a);
      b && (Q.push(b), S++, f(b, R))
    }

    function i(b) {
      var c, d, e = Pa.sourceNormalizers;
      if (a.isFunction(b) || a.isArray(b) ? c = {events: b} : "string" == typeof b ? c = {url: b} : "object" == typeof b && (c = a.extend({}, b)), c) {
        for (c.className ? "string" == typeof c.className && (c.className = c.className.split(/\s+/)) : c.className = [], a.isArray(c.events) && (c.origArray = c.events, c.events = a.map(c.events, function (a) {
          return s(a, c)
        })), d = 0; d < e.length; d++) e[d].call(K, c);
        return c
      }
    }

    function j(b) {
      Q = a.grep(Q, function (a) {
        return !k(a, b)
      }), T = a.grep(T, function (a) {
        return !k(a.source, b)
      }), N(T)
    }

    function k(a, b) {
      return a && b && l(a) == l(b)
    }

    function l(a) {
      return ("object" == typeof a ? a.origArray || a.googleCalendarId || a.url || a.events : null) || a
    }

    function m(a) {
      a.start = K.moment(a.start), a.end ? a.end = K.moment(a.end) : a.end = null, x(a, n(a)), N(T)
    }

    function n(b) {
      var c = {};
      return a.each(b, function (a, b) {
        o(a) && void 0 !== b && V(b) && (c[a] = b)
      }), c
    }

    function o(a) {
      return !/^_|^(id|allDay|start|end)$/.test(a)
    }

    function p(a, b) {
      var c, d, e, f = s(a);
      if (f) {
        for (c = w(f), d = 0; d < c.length; d++) e = c[d], e.source || (b && (O.events.push(e), e.source = O), T.push(e));
        return N(T), c
      }
      return []
    }

    function q(b) {
      var c, d;
      for (null == b ? b = function () {
        return !0
      } : a.isFunction(b) || (c = b + "", b = function (a) {
        return a._id == c
      }), T = a.grep(T, b, !0), d = 0; d < Q.length; d++) a.isArray(Q[d].events) && (Q[d].events = a.grep(Q[d].events, b, !0));
      N(T)
    }

    function r(b) {
      return a.isFunction(b) ? a.grep(T, b) : null != b ? (b += "", a.grep(T, function (a) {
        return a._id == b
      })) : T
    }

    function s(d, e) {
      var f, g, h, i = {};
      if (c.eventDataTransform && (d = c.eventDataTransform(d)), e && e.eventDataTransform && (d = e.eventDataTransform(d)), a.extend(i, d), e && (i.source = e), i._id = d._id || (void 0 === d.id ? "_fc" + vb++ : d.id + ""), d.className ? "string" == typeof d.className ? i.className = d.className.split(/\s+/) : i.className = d.className : i.className = [], f = d.start || d.date, g = d.end, P(f) && (f = b.duration(f)), P(g) && (g = b.duration(g)), d.dow || b.isDuration(f) || b.isDuration(g)) i.start = f ? b.duration(f) : null, i.end = g ? b.duration(g) : null, i._recurring = !0; else {
        if (f && (f = K.moment(f), !f.isValid())) return !1;
        g && (g = K.moment(g), g.isValid() || (g = null)), h = d.allDay, void 0 === h && (h = X(e ? e.allDayDefault : void 0, c.allDayDefault)), t(f, g, h, i)
      }
      return i
    }

    function t(a, b, c, d) {
      d.start = a, d.end = b, d.allDay = c, u(d), Oa(d)
    }

    function u(a) {
      v(a), a.end && !a.end.isAfter(a.start) && (a.end = null), a.end || (c.forceEventDuration ? a.end = K.getDefaultEventEnd(a.allDay, a.start) : a.end = null)
    }

    function v(a) {
      null == a.allDay && (a.allDay = !(a.start.hasTime() || a.end && a.end.hasTime())), a.allDay ? (a.start.stripTime(), a.end && a.end.stripTime()) : (a.start.hasTime() || (a.start = K.applyTimezone(a.start.time(0))), a.end && !a.end.hasTime() && (a.end = K.applyTimezone(a.end.time(0))))
    }

    function w(b, c, d) {
      var e, f, g, h, i, j, k, l, m, n = [];
      if (c = c || L, d = d || M, b) if (b._recurring) {
        if (f = b.dow) for (e = {}, g = 0; g < f.length; g++) e[f[g]] = !0;
        for (h = c.clone().stripTime(); h.isBefore(d);) (!e || e[h.day()]) && (i = b.start, j = b.end, k = h.clone(), l = null, i && (k = k.time(i)), j && (l = h.clone().time(j)), m = a.extend({}, b), t(k, l, !i && !j, m), n.push(m)), h.add(1, "days")
      } else n.push(b);
      return n
    }

    function x(b, c, d) {
      function e(a, b) {
        return d ? H(a, b, d) : c.allDay ? G(a, b) : F(a, b)
      }

      var f, g, h, i, j, k, l = {};
      return c = c || {}, c.start || (c.start = b.start.clone()), void 0 === c.end && (c.end = b.end ? b.end.clone() : null), null == c.allDay && (c.allDay = b.allDay), u(c), f = {
        start: b._start.clone(),
        end: b._end ? b._end.clone() : K.getDefaultEventEnd(b._allDay, b._start),
        allDay: c.allDay
      }, u(f), g = null !== b._end && null === c.end, h = e(c.start, f.start), c.end ? (i = e(c.end, f.end), j = i.subtract(h)) : j = null, a.each(c, function (a, b) {
        o(a) && void 0 !== b && (l[a] = b)
      }), k = y(r(b._id), g, c.allDay, h, j, l), {
        dateDelta: h,
        durationDelta: j,
        undo: k
      }
    }

    function y(b, c, d, e, f, g) {
      var h = K.getIsAmbigTimezone(), i = [];
      return e && !e.valueOf() && (e = null), f && !f.valueOf() && (f = null), a.each(b, function (b, j) {
        var k, l;
        k = {
          start: j.start.clone(),
          end: j.end ? j.end.clone() : null,
          allDay: j.allDay
        }, a.each(g, function (a) {
          k[a] = j[a]
        }), l = {
          start: j._start,
          end: j._end,
          allDay: d
        }, u(l), c ? l.end = null : f && !l.end && (l.end = K.getDefaultEventEnd(l.allDay, l.start)), e && (l.start.add(e), l.end && l.end.add(e)), f && l.end.add(f), h && !l.allDay && (e || f) && (l.start.stripZone(), l.end && l.end.stripZone()), a.extend(j, g, l), Oa(j), i.push(function () {
          a.extend(j, k), Oa(j)
        })
      }), function () {
        for (var a = 0; a < i.length; a++) i[a]()
      }
    }

    function z(b) {
      var d, e = c.businessHours, f = {
        className: "fc-nonbusiness",
        start: "09:00",
        end: "17:00",
        dow: [1, 2, 3, 4, 5],
        rendering: "inverse-background"
      }, g = K.getView();
      return e && (d = a.extend({}, f, "object" == typeof e ? e : {})), d ? (b && (d.start = null, d.end = null), w(s(d), g.start, g.end)) : []
    }

    function A(a, b) {
      var d = b.source || {},
        e = X(b.constraint, d.constraint, c.eventConstraint),
        f = X(b.overlap, d.overlap, c.eventOverlap);
      return D(a, e, f, b)
    }

    function B(b, c, d) {
      var e, f;
      return d && (e = a.extend({}, d, c), f = w(s(e))[0]), f ? A(b, f) : C(b)
    }

    function C(a) {
      return D(a, c.selectConstraint, c.selectOverlap)
    }

    function D(a, b, c, d) {
      var e, f, g, h, i, j;
      if (null != b) {
        for (e = E(b), f = !1, h = 0; h < e.length; h++) if (I(e[h], a)) {
          f = !0;
          break
        }
        if (!f) return !1
      }
      for (g = K.getPeerEvents(a, d), h = 0; h < g.length; h++) if (i = g[h], J(i, a)) {
        if (c === !1) return !1;
        if ("function" == typeof c && !c(i, d)) return !1;
        if (d) {
          if (j = X(i.overlap, (i.source || {}).overlap), j === !1) return !1;
          if ("function" == typeof j && !j(d, i)) return !1
        }
      }
      return !0
    }

    function E(a) {
      return "businessHours" === a ? z() : "object" == typeof a ? w(s(a)) : r(a)
    }

    function I(a, b) {
      var c = a.start.clone().stripZone(), d = K.getEventEnd(a).stripZone();
      return b.start >= c && b.end <= d
    }

    function J(a, b) {
      var c = a.start.clone().stripZone(), d = K.getEventEnd(a).stripZone();
      return b.start < d && b.end > c
    }

    var K = this;
    K.isFetchNeeded = d, K.fetchEvents = e, K.addEventSource = h, K.removeEventSource = j, K.updateEvent = m, K.renderEvent = p, K.removeEvents = q, K.clientEvents = r, K.mutateEvent = x, K.normalizeEventDates = u, K.normalizeEventTimes = v;
    var L, M, N = K.reportEvents, O = {events: []}, Q = [O], R = 0, S = 0,
      T = [];
    a.each((c.events ? [c.events] : []).concat(c.eventSources || []), function (a, b) {
      var c = i(b);
      c && Q.push(c)
    }), K.getBusinessHoursEvents = z, K.isEventSpanAllowed = A, K.isExternalSpanAllowed = B, K.isSelectionSpanAllowed = C, K.getEventCache = function () {
      return T
    }
  }

  function Oa(a) {
    a._allDay = a.allDay, a._start = a.start.clone(), a._end = a.end ? a.end.clone() : null
  }

  var Pa = a.fullCalendar = {version: "2.6.0", internalApiVersion: 2},
    Qa = Pa.views = {};
  a.fn.fullCalendar = function (b) {
    var c = Array.prototype.slice.call(arguments, 1), d = this;
    return this.each(function (e, f) {
      var g, h = a(f), i = h.data("fullCalendar");
      "string" == typeof b ? i && a.isFunction(i[b]) && (g = i[b].apply(i, c), e || (d = g), "destroy" === b && h.removeData("fullCalendar")) : i || (i = new pb(h, b), h.data("fullCalendar", i), i.render())
    }), d
  };
  var Ra = ["header", "buttonText", "buttonIcons", "themeButtonIcons"];
  Pa.intersectRanges = E, Pa.applyAll = W, Pa.debounce = da, Pa.isInt = ba, Pa.htmlEscape = Y, Pa.cssToStr = $, Pa.proxy = ca, Pa.capitaliseFirstLetter = _, Pa.getOuterRect = o, Pa.getClientRect = p, Pa.getContentRect = q, Pa.getScrollbarWidths = r;
  var Sa = null;
  Pa.intersectRects = w, Pa.parseFieldSpecs = A, Pa.compareByFieldSpecs = B, Pa.compareByFieldSpec = C, Pa.flexibleCompare = D, Pa.computeIntervalUnit = I, Pa.divideRangeByDuration = K, Pa.divideDurationByDuration = L, Pa.multiplyDuration = M, Pa.durationHasTime = N;
  var Ta = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
    Ua = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"];
  Pa.log = function () {
    var a = window.console;
    return a && a.log ? a.log.apply(a, arguments) : void 0
  }, Pa.warn = function () {
    var a = window.console;
    return a && a.warn ? a.warn.apply(a, arguments) : Pa.log.apply(Pa, arguments)
  };
  var Va, Wa, Xa, Ya = {}.hasOwnProperty, Za = /^\s*\d{4}-\d\d$/,
    $a = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,
    _a = b.fn, ab = a.extend({}, _a);
  Pa.moment = function () {
    return ea(arguments)
  }, Pa.moment.utc = function () {
    var a = ea(arguments, !0);
    return a.hasTime() && a.utc(), a
  }, Pa.moment.parseZone = function () {
    return ea(arguments, !0, !0)
  }, _a.clone = function () {
    var a = ab.clone.apply(this, arguments);
    return ga(this, a), this._fullCalendar && (a._fullCalendar = !0), a
  }, _a.week = _a.weeks = function (a) {
    var b = (this._locale || this._lang)._fullCalendar_weekCalc;
    return null == a && "function" == typeof b ? b(this) : "ISO" === b ? ab.isoWeek.apply(this, arguments) : ab.week.apply(this, arguments)
  }, _a.time = function (a) {
    if (!this._fullCalendar) return ab.time.apply(this, arguments);
    if (null == a) return b.duration({
      hours: this.hours(),
      minutes: this.minutes(),
      seconds: this.seconds(),
      milliseconds: this.milliseconds()
    });
    this._ambigTime = !1, b.isDuration(a) || b.isMoment(a) || (a = b.duration(a));
    var c = 0;
    return b.isDuration(a) && (c = 24 * Math.floor(a.asDays())), this.hours(c + a.hours()).minutes(a.minutes()).seconds(a.seconds()).milliseconds(a.milliseconds())
  }, _a.stripTime = function () {
    var a;
    return this._ambigTime || (a = this.toArray(), this.utc(), Wa(this, a.slice(0, 3)), this._ambigTime = !0, this._ambigZone = !0), this
  }, _a.hasTime = function () {
    return !this._ambigTime
  }, _a.stripZone = function () {
    var a, b;
    return this._ambigZone || (a = this.toArray(), b = this._ambigTime, this.utc(), Wa(this, a), this._ambigTime = b || !1, this._ambigZone = !0), this
  }, _a.hasZone = function () {
    return !this._ambigZone
  }, _a.local = function () {
    var a = this.toArray(), b = this._ambigZone;
    return ab.local.apply(this, arguments), this._ambigTime = !1, this._ambigZone = !1, b && Xa(this, a), this
  }, _a.utc = function () {
    return ab.utc.apply(this, arguments), this._ambigTime = !1, this._ambigZone = !1, this
  }, a.each(["zone", "utcOffset"], function (a, b) {
    ab[b] && (_a[b] = function (a) {
      return null != a && (this._ambigTime = !1, this._ambigZone = !1), ab[b].apply(this, arguments)
    })
  }), _a.format = function () {
    return this._fullCalendar && arguments[0] ? ja(this, arguments[0]) : this._ambigTime ? ia(this, "YYYY-MM-DD") : this._ambigZone ? ia(this, "YYYY-MM-DD[T]HH:mm:ss") : ab.format.apply(this, arguments)
  }, _a.toISOString = function () {
    return this._ambigTime ? ia(this, "YYYY-MM-DD") : this._ambigZone ? ia(this, "YYYY-MM-DD[T]HH:mm:ss") : ab.toISOString.apply(this, arguments)
  }, _a.isWithin = function (a, b) {
    var c = fa([this, a, b]);
    return c[0] >= c[1] && c[0] < c[2]
  }, _a.isSame = function (a, b) {
    var c;
    return this._fullCalendar ? b ? (c = fa([this, a], !0), ab.isSame.call(c[0], c[1], b)) : (a = Pa.moment.parseZone(a), ab.isSame.call(this, a) && Boolean(this._ambigTime) === Boolean(a._ambigTime) && Boolean(this._ambigZone) === Boolean(a._ambigZone)) : ab.isSame.apply(this, arguments)
  }, a.each(["isBefore", "isAfter"], function (a, b) {
    _a[b] = function (a, c) {
      var d;
      return this._fullCalendar ? (d = fa([this, a]), ab[b].call(d[0], d[1], c)) : ab[b].apply(this, arguments)
    }
  }), Va = "_d" in b() && "updateOffset" in b, Wa = Va ? function (a, c) {
    a._d.setTime(Date.UTC.apply(Date, c)), b.updateOffset(a, !1)
  } : ha, Xa = Va ? function (a, c) {
    a._d.setTime(+new Date(c[0] || 0, c[1] || 0, c[2] || 0, c[3] || 0, c[4] || 0, c[5] || 0, c[6] || 0)), b.updateOffset(a, !1)
  } : ha;
  var bb = {
    t: function (a) {
      return ia(a, "a").charAt(0)
    }, T: function (a) {
      return ia(a, "A").charAt(0)
    }
  };
  Pa.formatRange = ma;
  var cb = {
    Y: "year",
    M: "month",
    D: "day",
    d: "day",
    A: "second",
    a: "second",
    T: "second",
    t: "second",
    H: "second",
    h: "second",
    m: "second",
    s: "second"
  }, db = {};
  Pa.Class = ra, ra.extend = function () {
    var a, b, c = arguments.length;
    for (a = 0; c > a; a++) b = arguments[a], c - 1 > a && ta(this, b);
    return sa(this, b || {})
  }, ra.mixin = function (a) {
    ta(this, a)
  };
  var eb = Pa.Emitter = ra.extend({
    callbackHash: null, on: function (a, b) {
      return this.getCallbacks(a).add(b), this
    }, off: function (a, b) {
      return this.getCallbacks(a).remove(b), this
    }, trigger: function (a) {
      var b = Array.prototype.slice.call(arguments, 1);
      return this.triggerWith(a, this, b), this
    }, triggerWith: function (a, b, c) {
      var d = this.getCallbacks(a);
      return d.fireWith(b, c), this
    }, getCallbacks: function (b) {
      var c;
      return this.callbackHash || (this.callbackHash = {}), c = this.callbackHash[b], c || (c = this.callbackHash[b] = a.Callbacks()), c
    }
  }), fb = ra.extend({
    isHidden: !0,
    options: null,
    el: null,
    documentMousedownProxy: null,
    margin: 10,
    constructor: function (a) {
      this.options = a || {}
    },
    show: function () {
      this.isHidden && (this.el || this.render(), this.el.show(), this.position(), this.isHidden = !1, this.trigger("show"))
    },
    hide: function () {
      this.isHidden || (this.el.hide(), this.isHidden = !0, this.trigger("hide"))
    },
    render: function () {
      var b = this, c = this.options;
      this.el = a('<div class="fc-popover"/>').addClass(c.className || "").css({
        top: 0,
        left: 0
      }).append(c.content).appendTo(c.parentEl), this.el.on("click", ".fc-close", function () {
        b.hide()
      }), c.autoHide && a(document).on("mousedown", this.documentMousedownProxy = ca(this, "documentMousedown"))
    },
    documentMousedown: function (b) {
      this.el && !a(b.target).closest(this.el).length && this.hide()
    },
    removeElement: function () {
      this.hide(), this.el && (this.el.remove(), this.el = null), a(document).off("mousedown", this.documentMousedownProxy)
    },
    position: function () {
      var b, c, d, e, f, g = this.options, h = this.el.offsetParent().offset(),
        i = this.el.outerWidth(), j = this.el.outerHeight(), k = a(window),
        l = n(this.el);
      e = g.top || 0, f = void 0 !== g.left ? g.left : void 0 !== g.right ? g.right - i : 0, l.is(window) || l.is(document) ? (l = k, b = 0, c = 0) : (d = l.offset(), b = d.top, c = d.left), b += k.scrollTop(), c += k.scrollLeft(), g.viewportConstrain !== !1 && (e = Math.min(e, b + l.outerHeight() - j - this.margin), e = Math.max(e, b + this.margin), f = Math.min(f, c + l.outerWidth() - i - this.margin),
        f = Math.max(f, c + this.margin)), this.el.css({
        top: e - h.top,
        left: f - h.left
      })
    },
    trigger: function (a) {
      this.options[a] && this.options[a].apply(this, Array.prototype.slice.call(arguments, 1))
    }
  }), gb = Pa.CoordCache = ra.extend({
    els: null,
    forcedOffsetParentEl: null,
    origin: null,
    boundingRect: null,
    isHorizontal: !1,
    isVertical: !1,
    lefts: null,
    rights: null,
    tops: null,
    bottoms: null,
    constructor: function (b) {
      this.els = a(b.els), this.isHorizontal = b.isHorizontal, this.isVertical = b.isVertical, this.forcedOffsetParentEl = b.offsetParent ? a(b.offsetParent) : null
    },
    build: function () {
      var a = this.forcedOffsetParentEl || this.els.eq(0).offsetParent();
      this.origin = a.offset(), this.boundingRect = this.queryBoundingRect(), this.isHorizontal && this.buildElHorizontals(), this.isVertical && this.buildElVerticals()
    },
    clear: function () {
      this.origin = null, this.boundingRect = null, this.lefts = null, this.rights = null, this.tops = null, this.bottoms = null
    },
    queryBoundingRect: function () {
      var a = n(this.els.eq(0));
      return a.is(document) ? void 0 : p(a)
    },
    buildElHorizontals: function () {
      var b = [], c = [];
      this.els.each(function (d, e) {
        var f = a(e), g = f.offset().left, h = f.outerWidth();
        b.push(g), c.push(g + h)
      }), this.lefts = b, this.rights = c
    },
    buildElVerticals: function () {
      var b = [], c = [];
      this.els.each(function (d, e) {
        var f = a(e), g = f.offset().top, h = f.outerHeight();
        b.push(g), c.push(g + h)
      }), this.tops = b, this.bottoms = c
    },
    getHorizontalIndex: function (a) {
      var b, c = this.boundingRect, d = this.lefts, e = this.rights,
        f = d.length;
      if (!c || a >= c.left && a < c.right) for (b = 0; f > b; b++) if (a >= d[b] && a < e[b]) return b
    },
    getVerticalIndex: function (a) {
      var b, c = this.boundingRect, d = this.tops, e = this.bottoms,
        f = d.length;
      if (!c || a >= c.top && a < c.bottom) for (b = 0; f > b; b++) if (a >= d[b] && a < e[b]) return b
    },
    getLeftOffset: function (a) {
      return this.lefts[a]
    },
    getLeftPosition: function (a) {
      return this.lefts[a] - this.origin.left
    },
    getRightOffset: function (a) {
      return this.rights[a]
    },
    getRightPosition: function (a) {
      return this.rights[a] - this.origin.left
    },
    getWidth: function (a) {
      return this.rights[a] - this.lefts[a]
    },
    getTopOffset: function (a) {
      return this.tops[a]
    },
    getTopPosition: function (a) {
      return this.tops[a] - this.origin.top
    },
    getBottomOffset: function (a) {
      return this.bottoms[a]
    },
    getBottomPosition: function (a) {
      return this.bottoms[a] - this.origin.top
    },
    getHeight: function (a) {
      return this.bottoms[a] - this.tops[a]
    }
  }), hb = Pa.DragListener = ra.extend({
    options: null,
    isListening: !1,
    isDragging: !1,
    originX: null,
    originY: null,
    mousemoveProxy: null,
    mouseupProxy: null,
    subjectEl: null,
    subjectHref: null,
    scrollEl: null,
    scrollBounds: null,
    scrollTopVel: null,
    scrollLeftVel: null,
    scrollIntervalId: null,
    scrollHandlerProxy: null,
    scrollSensitivity: 30,
    scrollSpeed: 200,
    scrollIntervalMs: 50,
    constructor: function (a) {
      a = a || {}, this.options = a, this.subjectEl = a.subjectEl
    },
    mousedown: function (a) {
      v(a) && (a.preventDefault(), this.startListening(a), this.options.distance || this.startDrag(a))
    },
    startListening: function (b) {
      var c;
      this.isListening || (b && this.options.scroll && (c = n(a(b.target)), c.is(window) || c.is(document) || (this.scrollEl = c, this.scrollHandlerProxy = da(ca(this, "scrollHandler"), 100), this.scrollEl.on("scroll", this.scrollHandlerProxy))), a(document).on("mousemove", this.mousemoveProxy = ca(this, "mousemove")).on("mouseup", this.mouseupProxy = ca(this, "mouseup")).on("selectstart", this.preventDefault), b ? (this.originX = b.pageX, this.originY = b.pageY) : (this.originX = 0, this.originY = 0), this.isListening = !0, this.listenStart(b))
    },
    listenStart: function (a) {
      this.trigger("listenStart", a)
    },
    mousemove: function (a) {
      var b, c, d = a.pageX - this.originX, e = a.pageY - this.originY;
      this.isDragging || (b = this.options.distance || 1, c = d * d + e * e, c >= b * b && this.startDrag(a)), this.isDragging && this.drag(d, e, a)
    },
    startDrag: function (a) {
      this.isListening || this.startListening(), this.isDragging || (this.isDragging = !0, this.dragStart(a))
    },
    dragStart: function (a) {
      var b = this.subjectEl;
      this.trigger("dragStart", a), (this.subjectHref = b ? b.attr("href") : null) && b.removeAttr("href")
    },
    drag: function (a, b, c) {
      this.trigger("drag", a, b, c), this.updateScroll(c)
    },
    mouseup: function (a) {
      this.stopListening(a)
    },
    stopDrag: function (a) {
      this.isDragging && (this.stopScrolling(), this.dragStop(a), this.isDragging = !1)
    },
    dragStop: function (a) {
      var b = this;
      this.trigger("dragStop", a), setTimeout(function () {
        b.subjectHref && b.subjectEl.attr("href", b.subjectHref)
      }, 0)
    },
    stopListening: function (b) {
      this.stopDrag(b), this.isListening && (this.scrollEl && (this.scrollEl.off("scroll", this.scrollHandlerProxy), this.scrollHandlerProxy = null), a(document).off("mousemove", this.mousemoveProxy).off("mouseup", this.mouseupProxy).off("selectstart", this.preventDefault), this.mousemoveProxy = null, this.mouseupProxy = null, this.isListening = !1, this.listenStop(b))
    },
    listenStop: function (a) {
      this.trigger("listenStop", a)
    },
    trigger: function (a) {
      this.options[a] && this.options[a].apply(this, Array.prototype.slice.call(arguments, 1))
    },
    preventDefault: function (a) {
      a.preventDefault()
    },
    computeScrollBounds: function () {
      var a = this.scrollEl;
      this.scrollBounds = a ? o(a) : null
    },
    updateScroll: function (a) {
      var b, c, d, e, f = this.scrollSensitivity, g = this.scrollBounds, h = 0,
        i = 0;
      g && (b = (f - (a.pageY - g.top)) / f, c = (f - (g.bottom - a.pageY)) / f, d = (f - (a.pageX - g.left)) / f, e = (f - (g.right - a.pageX)) / f, b >= 0 && 1 >= b ? h = b * this.scrollSpeed * -1 : c >= 0 && 1 >= c && (h = c * this.scrollSpeed), d >= 0 && 1 >= d ? i = d * this.scrollSpeed * -1 : e >= 0 && 1 >= e && (i = e * this.scrollSpeed)), this.setScrollVel(h, i)
    },
    setScrollVel: function (a, b) {
      this.scrollTopVel = a, this.scrollLeftVel = b, this.constrainScrollVel(), !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(ca(this, "scrollIntervalFunc"), this.scrollIntervalMs))
    },
    constrainScrollVel: function () {
      var a = this.scrollEl;
      this.scrollTopVel < 0 ? a.scrollTop() <= 0 && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && a.scrollTop() + a[0].clientHeight >= a[0].scrollHeight && (this.scrollTopVel = 0), this.scrollLeftVel < 0 ? a.scrollLeft() <= 0 && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && a.scrollLeft() + a[0].clientWidth >= a[0].scrollWidth && (this.scrollLeftVel = 0)
    },
    scrollIntervalFunc: function () {
      var a = this.scrollEl, b = this.scrollIntervalMs / 1e3;
      this.scrollTopVel && a.scrollTop(a.scrollTop() + this.scrollTopVel * b), this.scrollLeftVel && a.scrollLeft(a.scrollLeft() + this.scrollLeftVel * b), this.constrainScrollVel(), this.scrollTopVel || this.scrollLeftVel || this.stopScrolling()
    },
    stopScrolling: function () {
      this.scrollIntervalId && (clearInterval(this.scrollIntervalId), this.scrollIntervalId = null, this.scrollStop())
    },
    scrollHandler: function () {
      this.scrollIntervalId || this.scrollStop()
    },
    scrollStop: function () {
    }
  }), ib = hb.extend({
    component: null,
    origHit: null,
    hit: null,
    coordAdjust: null,
    constructor: function (a, b) {
      hb.call(this, b), this.component = a
    },
    listenStart: function (a) {
      var b, c, d, e = this.subjectEl;
      hb.prototype.listenStart.apply(this, arguments), this.computeCoords(), a ? (c = {
        left: a.pageX,
        top: a.pageY
      }, d = c, e && (b = o(e), d = x(d, b)), this.origHit = this.queryHit(d.left, d.top), e && this.options.subjectCenter && (this.origHit && (b = w(this.origHit, b) || b), d = y(b)), this.coordAdjust = z(d, c)) : (this.origHit = null, this.coordAdjust = null)
    },
    computeCoords: function () {
      this.component.prepareHits(), this.computeScrollBounds()
    },
    dragStart: function (a) {
      var b;
      hb.prototype.dragStart.apply(this, arguments), b = this.queryHit(a.pageX, a.pageY), b && this.hitOver(b)
    },
    drag: function (a, b, c) {
      var d;
      hb.prototype.drag.apply(this, arguments), d = this.queryHit(c.pageX, c.pageY), ua(d, this.hit) || (this.hit && this.hitOut(), d && this.hitOver(d))
    },
    dragStop: function () {
      this.hitDone(), hb.prototype.dragStop.apply(this, arguments)
    },
    hitOver: function (a) {
      var b = ua(a, this.origHit);
      this.hit = a, this.trigger("hitOver", this.hit, b, this.origHit)
    },
    hitOut: function () {
      this.hit && (this.trigger("hitOut", this.hit), this.hitDone(), this.hit = null)
    },
    hitDone: function () {
      this.hit && this.trigger("hitDone", this.hit)
    },
    listenStop: function () {
      hb.prototype.listenStop.apply(this, arguments), this.origHit = null, this.hit = null, this.component.releaseHits()
    },
    scrollStop: function () {
      hb.prototype.scrollStop.apply(this, arguments), this.computeCoords()
    },
    queryHit: function (a, b) {
      return this.coordAdjust && (a += this.coordAdjust.left, b += this.coordAdjust.top), this.component.queryHit(a, b)
    }
  }), jb = ra.extend({
    options: null,
    sourceEl: null,
    el: null,
    parentEl: null,
    top0: null,
    left0: null,
    mouseY0: null,
    mouseX0: null,
    topDelta: null,
    leftDelta: null,
    mousemoveProxy: null,
    isFollowing: !1,
    isHidden: !1,
    isAnimating: !1,
    constructor: function (b, c) {
      this.options = c = c || {}, this.sourceEl = b, this.parentEl = c.parentEl ? a(c.parentEl) : b.parent()
    },
    start: function (b) {
      this.isFollowing || (this.isFollowing = !0, this.mouseY0 = b.pageY, this.mouseX0 = b.pageX, this.topDelta = 0, this.leftDelta = 0, this.isHidden || this.updatePosition(), a(document).on("mousemove", this.mousemoveProxy = ca(this, "mousemove")))
    },
    stop: function (b, c) {
      function d() {
        this.isAnimating = !1, e.removeElement(), this.top0 = this.left0 = null, c && c()
      }

      var e = this, f = this.options.revertDuration;
      this.isFollowing && !this.isAnimating && (this.isFollowing = !1, a(document).off("mousemove", this.mousemoveProxy), b && f && !this.isHidden ? (this.isAnimating = !0, this.el.animate({
        top: this.top0,
        left: this.left0
      }, {duration: f, complete: d})) : d())
    },
    getEl: function () {
      var a = this.el;
      return a || (this.sourceEl.width(), a = this.el = this.sourceEl.clone().css({
        position: "absolute",
        visibility: "",
        display: this.isHidden ? "none" : "",
        margin: 0,
        right: "auto",
        bottom: "auto",
        width: this.sourceEl.width(),
        height: this.sourceEl.height(),
        opacity: this.options.opacity || "",
        zIndex: this.options.zIndex
      }).appendTo(this.parentEl)), a
    },
    removeElement: function () {
      this.el && (this.el.remove(), this.el = null)
    },
    updatePosition: function () {
      var a, b;
      this.getEl(), null === this.top0 && (this.sourceEl.width(), a = this.sourceEl.offset(), b = this.el.offsetParent().offset(), this.top0 = a.top - b.top, this.left0 = a.left - b.left), this.el.css({
        top: this.top0 + this.topDelta,
        left: this.left0 + this.leftDelta
      })
    },
    mousemove: function (a) {
      this.topDelta = a.pageY - this.mouseY0, this.leftDelta = a.pageX - this.mouseX0, this.isHidden || this.updatePosition()
    },
    hide: function () {
      this.isHidden || (this.isHidden = !0, this.el && this.el.hide())
    },
    show: function () {
      this.isHidden && (this.isHidden = !1, this.updatePosition(), this.getEl().show())
    }
  }), kb = Pa.Grid = ra.extend({
    view: null,
    isRTL: null,
    start: null,
    end: null,
    el: null,
    elsByFill: null,
    externalDragStartProxy: null,
    eventTimeFormat: null,
    displayEventTime: null,
    displayEventEnd: null,
    minResizeDuration: null,
    largeUnit: null,
    constructor: function (a) {
      this.view = a, this.isRTL = a.opt("isRTL"), this.elsByFill = {}, this.externalDragStartProxy = ca(this, "externalDragStart")
    },
    computeEventTimeFormat: function () {
      return this.view.opt("smallTimeFormat")
    },
    computeDisplayEventTime: function () {
      return !0
    },
    computeDisplayEventEnd: function () {
      return !0
    },
    setRange: function (a) {
      this.start = a.start.clone(), this.end = a.end.clone(), this.rangeUpdated(), this.processRangeOptions()
    },
    rangeUpdated: function () {
    },
    processRangeOptions: function () {
      var a, b, c = this.view;
      this.eventTimeFormat = c.opt("eventTimeFormat") || c.opt("timeFormat") || this.computeEventTimeFormat(), a = c.opt("displayEventTime"), null == a && (a = this.computeDisplayEventTime()), b = c.opt("displayEventEnd"), null == b && (b = this.computeDisplayEventEnd()), this.displayEventTime = a, this.displayEventEnd = b
    },
    spanToSegs: function (a) {
    },
    diffDates: function (a, b) {
      return this.largeUnit ? H(a, b, this.largeUnit) : F(a, b)
    },
    prepareHits: function () {
    },
    releaseHits: function () {
    },
    queryHit: function (a, b) {
    },
    getHitSpan: function (a) {
    },
    getHitEl: function (a) {
    },
    setElement: function (b) {
      var c = this;
      this.el = b, b.on("mousedown", function (b) {
        a(b.target).is(".fc-event-container *, .fc-more") || a(b.target).closest(".fc-popover").length || c.dayMousedown(b)
      }), this.bindSegHandlers(), this.bindGlobalHandlers()
    },
    removeElement: function () {
      this.unbindGlobalHandlers(), this.el.remove()
    },
    renderSkeleton: function () {
    },
    renderDates: function () {
    },
    unrenderDates: function () {
    },
    bindGlobalHandlers: function () {
      a(document).on("dragstart sortstart", this.externalDragStartProxy)
    },
    unbindGlobalHandlers: function () {
      a(document).off("dragstart sortstart", this.externalDragStartProxy)
    },
    dayMousedown: function (a) {
      var b, c, d = this, e = this.view, f = e.opt("selectable"),
        i = new ib(this, {
          scroll: e.opt("dragScroll"), dragStart: function () {
            e.unselect()
          }, hitOver: function (a, e, h) {
            h && (b = e ? a : null, f && (c = d.computeSelection(d.getHitSpan(h), d.getHitSpan(a)), c ? d.renderSelection(c) : c === !1 && g()))
          }, hitOut: function () {
            b = null, c = null, d.unrenderSelection(), h()
          }, listenStop: function (a) {
            b && e.triggerDayClick(d.getHitSpan(b), d.getHitEl(b), a), c && e.reportSelection(c, a), h()
          }
        });
      i.mousedown(a)
    },
    renderEventLocationHelper: function (a, b) {
      var c = this.fabricateHelperEvent(a, b);
      this.renderHelper(c, b)
    },
    fabricateHelperEvent: function (a, b) {
      var c = b ? R(b.event) : {};
      return c.start = a.start.clone(), c.end = a.end ? a.end.clone() : null, c.allDay = null, this.view.calendar.normalizeEventDates(c), c.className = (c.className || []).concat("fc-helper"), b || (c.editable = !1), c
    },
    renderHelper: function (a, b) {
    },
    unrenderHelper: function () {
    },
    renderSelection: function (a) {
      this.renderHighlight(a)
    },
    unrenderSelection: function () {
      this.unrenderHighlight()
    },
    computeSelection: function (a, b) {
      var c = this.computeSelectionSpan(a, b);
      return c && !this.view.calendar.isSelectionSpanAllowed(c) ? !1 : c
    },
    computeSelectionSpan: function (a, b) {
      var c = [a.start, a.end, b.start, b.end];
      return c.sort(aa), {start: c[0].clone(), end: c[3].clone()}
    },
    renderHighlight: function (a) {
      this.renderFill("highlight", this.spanToSegs(a))
    },
    unrenderHighlight: function () {
      this.unrenderFill("highlight")
    },
    highlightSegClasses: function () {
      return ["fc-highlight"]
    },
    renderBusinessHours: function () {
    },
    unrenderBusinessHours: function () {
    },
    getNowIndicatorUnit: function () {
    },
    renderNowIndicator: function (a) {
    },
    unrenderNowIndicator: function () {
    },
    renderFill: function (a, b) {
    },
    unrenderFill: function (a) {
      var b = this.elsByFill[a];
      b && (b.remove(), delete this.elsByFill[a])
    },
    renderFillSegEls: function (b, c) {
      var d, e = this, f = this[b + "SegEl"], g = "", h = [];
      if (c.length) {
        for (d = 0; d < c.length; d++) g += this.fillSegHtml(b, c[d]);
        a(g).each(function (b, d) {
          var g = c[b], i = a(d);
          f && (i = f.call(e, g, i)), i && (i = a(i), i.is(e.fillSegTag) && (g.el = i, h.push(g)))
        })
      }
      return h
    },
    fillSegTag: "div",
    fillSegHtml: function (a, b) {
      var c = this[a + "SegClasses"], d = this[a + "SegCss"],
        e = c ? c.call(this, b) : [], f = $(d ? d.call(this, b) : {});
      return "<" + this.fillSegTag + (e.length ? ' class="' + e.join(" ") + '"' : "") + (f ? ' style="' + f + '"' : "") + " />"
    },
    getDayClasses: function (a) {
      var b = this.view, c = b.calendar.getNow(), d = ["fc-" + Ta[a.day()]];
      return 1 == b.intervalDuration.as("months") && a.month() != b.intervalStart.month() && d.push("fc-other-month"), a.isSame(c, "day") ? d.push("fc-today", b.highlightStateClass) : c > a ? d.push("fc-past") : d.push("fc-future"), d
    }
  });
  kb.mixin({
    mousedOverSeg: null,
    isDraggingSeg: !1,
    isResizingSeg: !1,
    isDraggingExternal: !1,
    segs: null,
    renderEvents: function (a) {
      var b, c = [], d = [];
      for (b = 0; b < a.length; b++) (wa(a[b]) ? c : d).push(a[b]);
      this.segs = [].concat(this.renderBgEvents(c), this.renderFgEvents(d))
    },
    renderBgEvents: function (a) {
      var b = this.eventsToSegs(a);
      return this.renderBgSegs(b) || b
    },
    renderFgEvents: function (a) {
      var b = this.eventsToSegs(a);
      return this.renderFgSegs(b) || b
    },
    unrenderEvents: function () {
      this.triggerSegMouseout(), this.unrenderFgSegs(), this.unrenderBgSegs(), this.segs = null
    },
    getEventSegs: function () {
      return this.segs || []
    },
    renderFgSegs: function (a) {
    },
    unrenderFgSegs: function () {
    },
    renderFgSegEls: function (b, c) {
      var d, e = this.view, f = "", g = [];
      if (b.length) {
        for (d = 0; d < b.length; d++) f += this.fgSegHtml(b[d], c);
        a(f).each(function (c, d) {
          var f = b[c], h = e.resolveEventEl(f.event, a(d));
          h && (h.data("fc-seg", f), f.el = h, g.push(f))
        })
      }
      return g
    },
    fgSegHtml: function (a, b) {
    },
    renderBgSegs: function (a) {
      return this.renderFill("bgEvent", a)
    },
    unrenderBgSegs: function () {
      this.unrenderFill("bgEvent")
    },
    bgEventSegEl: function (a, b) {
      return this.view.resolveEventEl(a.event, b)
    },
    bgEventSegClasses: function (a) {
      var b = a.event, c = b.source || {};
      return ["fc-bgevent"].concat(b.className, c.className || [])
    },
    bgEventSegCss: function (a) {
      var b = this.view, c = a.event, d = c.source || {};
      return {"background-color": c.backgroundColor || c.color || d.backgroundColor || d.color || b.opt("eventBackgroundColor") || b.opt("eventColor")}
    },
    businessHoursSegClasses: function (a) {
      return ["fc-nonbusiness", "fc-bgevent"]
    },
    bindSegHandlers: function () {
      var b = this, c = this.view;
      a.each({
        mouseenter: function (a, c) {
          b.triggerSegMouseover(a, c)
        }, mouseleave: function (a, c) {
          b.triggerSegMouseout(a, c)
        }, click: function (a, b) {
          return c.trigger("eventClick", this, a.event, b)
        }, mousedown: function (d, e) {
          a(e.target).is(".fc-resizer") && c.isEventResizable(d.event) ? b.segResizeMousedown(d, e, a(e.target).is(".fc-start-resizer")) : c.isEventDraggable(d.event) && b.segDragMousedown(d, e)
        }
      }, function (c, d) {
        b.el.on(c, ".fc-event-container > *", function (c) {
          var e = a(this).data("fc-seg");
          return !e || b.isDraggingSeg || b.isResizingSeg ? void 0 : d.call(this, e, c)
        })
      })
    },
    triggerSegMouseover: function (a, b) {
      this.mousedOverSeg || (this.mousedOverSeg = a, this.view.trigger("eventMouseover", a.el[0], a.event, b))
    },
    triggerSegMouseout: function (a, b) {
      b = b || {}, this.mousedOverSeg && (a = a || this.mousedOverSeg, this.mousedOverSeg = null, this.view.trigger("eventMouseout", a.el[0], a.event, b))
    },
    segDragMousedown: function (a, b) {
      var c, d = this, e = this.view, f = e.calendar, i = a.el, j = a.event,
        k = new jb(a.el, {
          parentEl: e.el,
          opacity: e.opt("dragOpacity"),
          revertDuration: e.opt("dragRevertDuration"),
          zIndex: 2
        }), l = new ib(e, {
          distance: 5,
          scroll: e.opt("dragScroll"),
          subjectEl: i,
          subjectCenter: !0,
          listenStart: function (a) {
            k.hide(), k.start(a)
          },
          dragStart: function (b) {
            d.triggerSegMouseout(a, b), d.segDragStart(a, b), e.hideEvent(j)
          },
          hitOver: function (b, h, i) {
            a.hit && (i = a.hit), c = d.computeEventDrop(i.component.getHitSpan(i), b.component.getHitSpan(b), j), c && !f.isEventSpanAllowed(d.eventToSpan(c), j) && (g(), c = null), c && e.renderDrag(c, a) ? k.hide() : k.show(), h && (c = null)
          },
          hitOut: function () {
            e.unrenderDrag(), k.show(), c = null
          },
          hitDone: function () {
            h()
          },
          dragStop: function (b) {
            k.stop(!c, function () {
              e.unrenderDrag(), e.showEvent(j), d.segDragStop(a, b), c && e.reportEventDrop(j, c, this.largeUnit, i, b)
            })
          },
          listenStop: function () {
            k.stop()
          }
        });
      l.mousedown(b)
    },
    segDragStart: function (a, b) {
      this.isDraggingSeg = !0, this.view.trigger("eventDragStart", a.el[0], a.event, b, {})
    },
    segDragStop: function (a, b) {
      this.isDraggingSeg = !1, this.view.trigger("eventDragStop", a.el[0], a.event, b, {})
    },
    computeEventDrop: function (a, b, c) {
      var d, e, f = this.view.calendar, g = a.start, h = b.start;
      return g.hasTime() === h.hasTime() ? (d = this.diffDates(h, g), c.allDay && N(d) ? (e = {
        start: c.start.clone(),
        end: f.getEventEnd(c),
        allDay: !1
      }, f.normalizeEventTimes(e)) : e = {
        start: c.start.clone(),
        end: c.end ? c.end.clone() : null,
        allDay: c.allDay
      }, e.start.add(d), e.end && e.end.add(d)) : e = {
        start: h.clone(),
        end: null,
        allDay: !h.hasTime()
      }, e
    },
    applyDragOpacity: function (a) {
      var b = this.view.opt("dragOpacity");
      null != b && a.each(function (a, c) {
        c.style.opacity = b
      })
    },
    externalDragStart: function (b, c) {
      var d, e, f = this.view;
      f.opt("droppable") && (d = a((c ? c.item : null) || b.target), e = f.opt("dropAccept"), (a.isFunction(e) ? e.call(d[0], d) : d.is(e)) && (this.isDraggingExternal || this.listenToExternalDrag(d, b, c)))
    },
    listenToExternalDrag: function (a, b, c) {
      var d, e = this, f = this.view.calendar, i = Ba(a), j = new ib(this, {
        listenStart: function () {
          e.isDraggingExternal = !0
        }, hitOver: function (a) {
          d = e.computeExternalDrop(a.component.getHitSpan(a), i), d && !f.isExternalSpanAllowed(e.eventToSpan(d), d, i.eventProps) && (g(), d = null), d && e.renderDrag(d)
        }, hitOut: function () {
          d = null
        }, hitDone: function () {
          h(), e.unrenderDrag()
        }, dragStop: function () {
          d && e.view.reportExternalDrop(i, d, a, b, c)
        }, listenStop: function () {
          e.isDraggingExternal = !1
        }
      });
      j.startDrag(b)
    },
    computeExternalDrop: function (a, b) {
      var c = this.view.calendar,
        d = {start: c.applyTimezone(a.start), end: null};
      return b.startTime && !d.start.hasTime() && d.start.time(b.startTime), b.duration && (d.end = d.start.clone().add(b.duration)), d
    },
    renderDrag: function (a, b) {
    },
    unrenderDrag: function () {
    },
    segResizeMousedown: function (a, b, c) {
      var d, e = this, f = this.view, i = f.calendar, j = a.el, k = a.event,
        l = i.getEventEnd(k), m = new ib(this, {
          distance: 5,
          scroll: f.opt("dragScroll"),
          subjectEl: j,
          dragStart: function (b) {
            e.triggerSegMouseout(a, b), e.segResizeStart(a, b)
          },
          hitOver: function (b, h, j) {
            var m = e.getHitSpan(j), n = e.getHitSpan(b);
            d = c ? e.computeEventStartResize(m, n, k) : e.computeEventEndResize(m, n, k), d && (i.isEventSpanAllowed(e.eventToSpan(d), k) ? d.start.isSame(k.start) && d.end.isSame(l) && (d = null) : (g(), d = null)), d && (f.hideEvent(k), e.renderEventResize(d, a))
          },
          hitOut: function () {
            d = null
          },
          hitDone: function () {
            e.unrenderEventResize(), f.showEvent(k), h()
          },
          dragStop: function (b) {
            e.segResizeStop(a, b), d && f.reportEventResize(k, d, this.largeUnit, j, b)
          }
        });
      m.mousedown(b)
    },
    segResizeStart: function (a, b) {
      this.isResizingSeg = !0, this.view.trigger("eventResizeStart", a.el[0], a.event, b, {})
    },
    segResizeStop: function (a, b) {
      this.isResizingSeg = !1, this.view.trigger("eventResizeStop", a.el[0], a.event, b, {})
    },
    computeEventStartResize: function (a, b, c) {
      return this.computeEventResize("start", a, b, c)
    },
    computeEventEndResize: function (a, b, c) {
      return this.computeEventResize("end", a, b, c)
    },
    computeEventResize: function (a, b, c, d) {
      var e, f, g = this.view.calendar, h = this.diffDates(c[a], b[a]);
      return e = {
        start: d.start.clone(),
        end: g.getEventEnd(d),
        allDay: d.allDay
      }, e.allDay && N(h) && (e.allDay = !1, g.normalizeEventTimes(e)), e[a].add(h), e.start.isBefore(e.end) || (f = this.minResizeDuration || (d.allDay ? g.defaultAllDayEventDuration : g.defaultTimedEventDuration), "start" == a ? e.start = e.end.clone().subtract(f) : e.end = e.start.clone().add(f)), e
    },
    renderEventResize: function (a, b) {
    },
    unrenderEventResize: function () {
    },
    getEventTimeText: function (a, b, c) {
      return null == b && (b = this.eventTimeFormat), null == c && (c = this.displayEventEnd), this.displayEventTime && a.start.hasTime() ? c && a.end ? this.view.formatRange(a, b) : a.start.format(b) : ""
    },
    getSegClasses: function (a, b, c) {
      var d = a.event,
        e = ["fc-event", a.isStart ? "fc-start" : "fc-not-start", a.isEnd ? "fc-end" : "fc-not-end"].concat(d.className, d.source ? d.source.className : []);
      return b && e.push("fc-draggable"), c && e.push("fc-resizable"), e
    },
    getEventSkinCss: function (a) {
      var b = this.view, c = a.source || {}, d = a.color, e = c.color,
        f = b.opt("eventColor");
      return {
        "background-color": a.backgroundColor || d || c.backgroundColor || e || b.opt("eventBackgroundColor") || f,
        "border-color": a.borderColor || d || c.borderColor || e || b.opt("eventBorderColor") || f,
        color: a.textColor || c.textColor || b.opt("eventTextColor")
      }
    },
    eventToSegs: function (a) {
      return this.eventsToSegs([a])
    },
    eventToSpan: function (a) {
      return this.eventToSpans(a)[0]
    },
    eventToSpans: function (a) {
      var b = this.eventToRange(a);
      return this.eventRangeToSpans(b, a)
    },
    eventsToSegs: function (b, c) {
      var d = this, e = za(b), f = [];
      return a.each(e, function (a, b) {
        var e, g = [];
        for (e = 0; e < b.length; e++) g.push(d.eventToRange(b[e]));
        if (xa(b[0])) for (g = d.invertRanges(g), e = 0; e < g.length; e++) f.push.apply(f, d.eventRangeToSegs(g[e], b[0], c)); else for (e = 0; e < g.length; e++) f.push.apply(f, d.eventRangeToSegs(g[e], b[e], c))
      }), f
    },
    eventToRange: function (a) {
      return {
        start: a.start.clone().stripZone(),
        end: (a.end ? a.end.clone() : this.view.calendar.getDefaultEventEnd(null != a.allDay ? a.allDay : !a.start.hasTime(), a.start)).stripZone()
      }
    },
    eventRangeToSegs: function (a, b, c) {
      var d, e = this.eventRangeToSpans(a, b), f = [];
      for (d = 0; d < e.length; d++) f.push.apply(f, this.eventSpanToSegs(e[d], b, c));
      return f
    },
    eventRangeToSpans: function (b, c) {
      return [a.extend({}, b)]
    },
    eventSpanToSegs: function (a, b, c) {
      var d, e, f = c ? c(a) : this.spanToSegs(a);
      for (d = 0; d < f.length; d++) e = f[d], e.event = b, e.eventStartMS = +a.start, e.eventDurationMS = a.end - a.start;
      return f
    },
    invertRanges: function (a) {
      var b, c, d = this.view, e = d.start.clone(), f = d.end.clone(), g = [],
        h = e;
      for (a.sort(Aa), b = 0; b < a.length; b++) c = a[b], c.start > h && g.push({
        start: h,
        end: c.start
      }), h = c.end;
      return f > h && g.push({start: h, end: f}), g
    },
    sortEventSegs: function (a) {
      a.sort(ca(this, "compareEventSegs"))
    },
    compareEventSegs: function (a, b) {
      return a.eventStartMS - b.eventStartMS || b.eventDurationMS - a.eventDurationMS || b.event.allDay - a.event.allDay || B(a.event, b.event, this.view.eventOrderSpecs)
    }
  }), Pa.isBgEvent = wa, Pa.dataAttrPrefix = "";
  var lb = Pa.DayTableMixin = {
    breakOnWeeks: !1,
    dayDates: null,
    dayIndices: null,
    daysPerRow: null,
    rowCnt: null,
    colCnt: null,
    colHeadFormat: null,
    updateDayTable: function () {
      for (var a, b, c, d = this.view, e = this.start.clone(), f = -1, g = [], h = []; e.isBefore(this.end);) d.isHiddenDay(e) ? g.push(f + .5) : (f++, g.push(f), h.push(e.clone())), e.add(1, "days");
      if (this.breakOnWeeks) {
        for (b = h[0].day(), a = 1; a < h.length && h[a].day() != b; a++) ;
        c = Math.ceil(h.length / a)
      } else c = 1, a = h.length;
      this.dayDates = h, this.dayIndices = g, this.daysPerRow = a, this.rowCnt = c, this.updateDayTableCols()
    },
    updateDayTableCols: function () {
      this.colCnt = this.computeColCnt(), this.colHeadFormat = this.view.opt("columnFormat") || this.computeColHeadFormat()
    },
    computeColCnt: function () {
      return this.daysPerRow
    },
    getCellDate: function (a, b) {
      return this.dayDates[this.getCellDayIndex(a, b)].clone()
    },
    getCellRange: function (a, b) {
      var c = this.getCellDate(a, b), d = c.clone().add(1, "days");
      return {start: c, end: d}
    },
    getCellDayIndex: function (a, b) {
      return a * this.daysPerRow + this.getColDayIndex(b)
    },
    getColDayIndex: function (a) {
      return this.isRTL ? this.colCnt - 1 - a : a
    },
    getDateDayIndex: function (a) {
      var b = this.dayIndices, c = a.diff(this.start, "days");
      return 0 > c ? b[0] - 1 : c >= b.length ? b[b.length - 1] + 1 : b[c]
    },
    computeColHeadFormat: function () {
      return this.rowCnt > 1 || this.colCnt > 10 ? "ddd" : this.colCnt > 1 ? this.view.opt("dayOfMonthFormat") : "dddd"
    },
    sliceRangeByRow: function (a) {
      var b, c, d, e, f, g = this.daysPerRow, h = this.view.computeDayRange(a),
        i = this.getDateDayIndex(h.start),
        j = this.getDateDayIndex(h.end.clone().subtract(1, "days")), k = [];
      for (b = 0; b < this.rowCnt; b++) c = b * g, d = c + g - 1, e = Math.max(i, c), f = Math.min(j, d), e = Math.ceil(e), f = Math.floor(f), f >= e && k.push({
        row: b,
        firstRowDayIndex: e - c,
        lastRowDayIndex: f - c,
        isStart: e === i,
        isEnd: f === j
      });
      return k
    },
    sliceRangeByDay: function (a) {
      var b, c, d, e, f, g, h = this.daysPerRow,
        i = this.view.computeDayRange(a), j = this.getDateDayIndex(i.start),
        k = this.getDateDayIndex(i.end.clone().subtract(1, "days")), l = [];
      for (b = 0; b < this.rowCnt; b++) for (c = b * h, d = c + h - 1, e = c; d >= e; e++) f = Math.max(j, e), g = Math.min(k, e), f = Math.ceil(f), g = Math.floor(g), g >= f && l.push({
        row: b,
        firstRowDayIndex: f - c,
        lastRowDayIndex: g - c,
        isStart: f === j,
        isEnd: g === k
      });
      return l
    },
    renderHeadHtml: function () {
      var a = this.view;
      return '<div class="fc-row ' + a.widgetHeaderClass + '"><table><thead>' + this.renderHeadTrHtml() + "</thead></table></div>"
    },
    renderHeadIntroHtml: function () {
      return this.renderIntroHtml()
    },
    renderHeadTrHtml: function () {
      return "<tr>" + (this.isRTL ? "" : this.renderHeadIntroHtml()) + this.renderHeadDateCellsHtml() + (this.isRTL ? this.renderHeadIntroHtml() : "") + "</tr>"
    },
    renderHeadDateCellsHtml: function () {
      var a, b, c = [];
      for (a = 0; a < this.colCnt; a++) b = this.getCellDate(0, a), c.push(this.renderHeadDateCellHtml(b));
      return c.join("")
    },
    renderHeadDateCellHtml: function (a, b, c) {
      var d = this.view;
      return '<th class="fc-day-header ' + d.widgetHeaderClass + " fc-" + Ta[a.day()] + '"' + (1 == this.rowCnt ? ' data-date="' + a.format("YYYY-MM-DD") + '"' : "") + (b > 1 ? ' colspan="' + b + '"' : "") + (c ? " " + c : "") + ">" + Y(a.format(this.colHeadFormat)) + "</th>"
    },
    renderBgTrHtml: function (a) {
      return "<tr>" + (this.isRTL ? "" : this.renderBgIntroHtml(a)) + this.renderBgCellsHtml(a) + (this.isRTL ? this.renderBgIntroHtml(a) : "") + "</tr>"
    },
    renderBgIntroHtml: function (a) {
      return this.renderIntroHtml()
    },
    renderBgCellsHtml: function (a) {
      var b, c, d = [];
      for (b = 0; b < this.colCnt; b++) c = this.getCellDate(a, b), d.push(this.renderBgCellHtml(c));
      return d.join("")
    },
    renderBgCellHtml: function (a, b) {
      var c = this.view, d = this.getDayClasses(a);
      return d.unshift("fc-day", c.widgetContentClass), '<td class="' + d.join(" ") + '" data-date="' + a.format("YYYY-MM-DD") + '"' + (b ? " " + b : "") + "></td>"
    },
    renderIntroHtml: function () {
    },
    bookendCells: function (a) {
      var b = this.renderIntroHtml();
      b && (this.isRTL ? a.append(b) : a.prepend(b))
    }
  }, mb = Pa.DayGrid = kb.extend(lb, {
    numbersVisible: !1,
    bottomCoordPadding: 0,
    rowEls: null,
    cellEls: null,
    helperEls: null,
    rowCoordCache: null,
    colCoordCache: null,
    renderDates: function (a) {
      var b, c, d = this.view, e = this.rowCnt, f = this.colCnt, g = "";
      for (b = 0; e > b; b++) g += this.renderDayRowHtml(b, a);
      for (this.el.html(g), this.rowEls = this.el.find(".fc-row"), this.cellEls = this.el.find(".fc-day"), this.rowCoordCache = new gb({
        els: this.rowEls,
        isVertical: !0
      }), this.colCoordCache = new gb({
        els: this.cellEls.slice(0, this.colCnt),
        isHorizontal: !0
      }), b = 0; e > b; b++) for (c = 0; f > c; c++) d.trigger("dayRender", null, this.getCellDate(b, c), this.getCellEl(b, c))
    },
    unrenderDates: function () {
      this.removeSegPopover()
    },
    renderBusinessHours: function () {
      var a = this.view.calendar.getBusinessHoursEvents(!0),
        b = this.eventsToSegs(a);
      this.renderFill("businessHours", b, "bgevent")
    },
    renderDayRowHtml: function (a, b) {
      var c = this.view, d = ["fc-row", "fc-week", c.widgetContentClass];
      return b && d.push("fc-rigid"), '<div class="' + d.join(" ") + '"><div class="fc-bg"><table>' + this.renderBgTrHtml(a) + '</table></div><div class="fc-content-skeleton"><table>' + (this.numbersVisible ? "<thead>" + this.renderNumberTrHtml(a) + "</thead>" : "") + "</table></div></div>"
    },
    renderNumberTrHtml: function (a) {
      return "<tr>" + (this.isRTL ? "" : this.renderNumberIntroHtml(a)) + this.renderNumberCellsHtml(a) + (this.isRTL ? this.renderNumberIntroHtml(a) : "") + "</tr>"
    },
    renderNumberIntroHtml: function (a) {
      return this.renderIntroHtml()
    },
    renderNumberCellsHtml: function (a) {
      var b, c, d = [];
      for (b = 0; b < this.colCnt; b++) c = this.getCellDate(a, b), d.push(this.renderNumberCellHtml(c));
      return d.join("")
    },
    renderNumberCellHtml: function (a) {
      var b;
      return this.view.dayNumbersVisible ? (b = this.getDayClasses(a), b.unshift("fc-day-number"), '<td class="' + b.join(" ") + '" data-date="' + a.format() + '">' + a.date() + "</td>") : "<td/>"
    },
    computeEventTimeFormat: function () {
      return this.view.opt("extraSmallTimeFormat")
    },
    computeDisplayEventEnd: function () {
      return 1 == this.colCnt
    },
    rangeUpdated: function () {
      this.updateDayTable()
    },
    spanToSegs: function (a) {
      var b, c, d = this.sliceRangeByRow(a);
      for (b = 0; b < d.length; b++) c = d[b], this.isRTL ? (c.leftCol = this.daysPerRow - 1 - c.lastRowDayIndex, c.rightCol = this.daysPerRow - 1 - c.firstRowDayIndex) : (c.leftCol = c.firstRowDayIndex, c.rightCol = c.lastRowDayIndex);
      return d
    },
    prepareHits: function () {
      this.colCoordCache.build(), this.rowCoordCache.build(), this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding
    },
    releaseHits: function () {
      this.colCoordCache.clear(), this.rowCoordCache.clear()
    },
    queryHit: function (a, b) {
      var c = this.colCoordCache.getHorizontalIndex(a),
        d = this.rowCoordCache.getVerticalIndex(b);
      return null != d && null != c ? this.getCellHit(d, c) : void 0
    },
    getHitSpan: function (a) {
      return this.getCellRange(a.row, a.col)
    },
    getHitEl: function (a) {
      return this.getCellEl(a.row, a.col)
    },
    getCellHit: function (a, b) {
      return {
        row: a,
        col: b,
        component: this,
        left: this.colCoordCache.getLeftOffset(b),
        right: this.colCoordCache.getRightOffset(b),
        top: this.rowCoordCache.getTopOffset(a),
        bottom: this.rowCoordCache.getBottomOffset(a)
      }
    },
    getCellEl: function (a, b) {
      return this.cellEls.eq(a * this.colCnt + b)
    },
    renderDrag: function (a, b) {
      return this.renderHighlight(this.eventToSpan(a)), b && !b.el.closest(this.el).length ? (this.renderEventLocationHelper(a, b), this.applyDragOpacity(this.helperEls), !0) : void 0
    },
    unrenderDrag: function () {
      this.unrenderHighlight(), this.unrenderHelper()
    },
    renderEventResize: function (a, b) {
      this.renderHighlight(this.eventToSpan(a)), this.renderEventLocationHelper(a, b)
    },
    unrenderEventResize: function () {
      this.unrenderHighlight(), this.unrenderHelper()
    },
    renderHelper: function (b, c) {
      var d, e = [], f = this.eventToSegs(b);
      f = this.renderFgSegEls(f), d = this.renderSegRows(f), this.rowEls.each(function (b, f) {
        var g, h = a(f),
          i = a('<div class="fc-helper-skeleton"><table/></div>');
        g = c && c.row === b ? c.el.position().top : h.find(".fc-content-skeleton tbody").position().top, i.css("top", g).find("table").append(d[b].tbodyEl), h.append(i), e.push(i[0])
      }), this.helperEls = a(e)
    },
    unrenderHelper: function () {
      this.helperEls && (this.helperEls.remove(), this.helperEls = null)
    },
    fillSegTag: "td",
    renderFill: function (b, c, d) {
      var e, f, g, h = [];
      for (c = this.renderFillSegEls(b, c), e = 0; e < c.length; e++) f = c[e], g = this.renderFillRow(b, f, d), this.rowEls.eq(f.row).append(g), h.push(g[0]);
      return this.elsByFill[b] = a(h), c
    },
    renderFillRow: function (b, c, d) {
      var e, f, g = this.colCnt, h = c.leftCol, i = c.rightCol + 1;
      return d = d || b.toLowerCase(), e = a('<div class="fc-' + d + '-skeleton"><table><tr/></table></div>'), f = e.find("tr"), h > 0 && f.append('<td colspan="' + h + '"/>'), f.append(c.el.attr("colspan", i - h)), g > i && f.append('<td colspan="' + (g - i) + '"/>'), this.bookendCells(f), e
    }
  });
  mb.mixin({
    rowStructs: null, unrenderEvents: function () {
      this.removeSegPopover(), kb.prototype.unrenderEvents.apply(this, arguments)
    }, getEventSegs: function () {
      return kb.prototype.getEventSegs.call(this).concat(this.popoverSegs || [])
    }, renderBgSegs: function (b) {
      var c = a.grep(b, function (a) {
        return a.event.allDay
      });
      return kb.prototype.renderBgSegs.call(this, c)
    }, renderFgSegs: function (b) {
      var c;
      return b = this.renderFgSegEls(b), c = this.rowStructs = this.renderSegRows(b), this.rowEls.each(function (b, d) {
        a(d).find(".fc-content-skeleton > table").append(c[b].tbodyEl)
      }), b
    }, unrenderFgSegs: function () {
      for (var a, b = this.rowStructs || []; a = b.pop();) a.tbodyEl.remove();
      this.rowStructs = null
    }, renderSegRows: function (a) {
      var b, c, d = [];
      for (b = this.groupSegRows(a), c = 0; c < b.length; c++) d.push(this.renderSegRow(c, b[c]));
      return d
    }, fgSegHtml: function (a, b) {
      var c, d, e = this.view, f = a.event, g = e.isEventDraggable(f),
        h = !b && f.allDay && a.isStart && e.isEventResizableFromStart(f),
        i = !b && f.allDay && a.isEnd && e.isEventResizableFromEnd(f),
        j = this.getSegClasses(a, g, h || i), k = $(this.getEventSkinCss(f)),
        l = "";
      return j.unshift("fc-day-grid-event", "fc-h-event"), a.isStart && (c = this.getEventTimeText(f), c && (l = '<span class="fc-time">' + Y(c) + "</span>")), d = '<span class="fc-title">' + (Y(f.title || "") || "&nbsp;") + "</span>", '<a class="' + j.join(" ") + '"' + (f.url ? ' href="' + Y(f.url) + '"' : "") + (k ? ' style="' + k + '"' : "") + '><div class="fc-content">' + (this.isRTL ? d + " " + l : l + " " + d) + "</div>" + (h ? '<div class="fc-resizer fc-start-resizer" />' : "") + (i ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
    }, renderSegRow: function (b, c) {
      function d(b) {
        for (; b > g;) k = (r[e - 1] || [])[g], k ? k.attr("rowspan", parseInt(k.attr("rowspan") || 1, 10) + 1) : (k = a("<td/>"), h.append(k)), q[e][g] = k, r[e][g] = k, g++
      }

      var e, f, g, h, i, j, k, l = this.colCnt, m = this.buildSegLevels(c),
        n = Math.max(1, m.length), o = a("<tbody/>"), p = [], q = [], r = [];
      for (e = 0; n > e; e++) {
        if (f = m[e], g = 0, h = a("<tr/>"), p.push([]), q.push([]), r.push([]), f) for (i = 0; i < f.length; i++) {
          for (j = f[i], d(j.leftCol), k = a('<td class="fc-event-container"/>').append(j.el), j.leftCol != j.rightCol ? k.attr("colspan", j.rightCol - j.leftCol + 1) : r[e][g] = k; g <= j.rightCol;) q[e][g] = k, p[e][g] = j, g++;
          h.append(k)
        }
        d(l), this.bookendCells(h), o.append(h)
      }
      return {
        row: b,
        tbodyEl: o,
        cellMatrix: q,
        segMatrix: p,
        segLevels: m,
        segs: c
      }
    }, buildSegLevels: function (a) {
      var b, c, d, e = [];
      for (this.sortEventSegs(a), b = 0; b < a.length; b++) {
        for (c = a[b], d = 0; d < e.length && Ca(c, e[d]); d++) ;
        c.level = d, (e[d] || (e[d] = [])).push(c)
      }
      for (d = 0; d < e.length; d++) e[d].sort(Da);
      return e
    }, groupSegRows: function (a) {
      var b, c = [];
      for (b = 0; b < this.rowCnt; b++) c.push([]);
      for (b = 0; b < a.length; b++) c[a[b].row].push(a[b]);
      return c
    }
  }), mb.mixin({
    segPopover: null, popoverSegs: null, removeSegPopover: function () {
      this.segPopover && this.segPopover.hide()
    }, limitRows: function (a) {
      var b, c, d = this.rowStructs || [];
      for (b = 0; b < d.length; b++) this.unlimitRow(b), c = a ? "number" == typeof a ? a : this.computeRowLevelLimit(b) : !1, c !== !1 && this.limitRow(b, c)
    }, computeRowLevelLimit: function (b) {
      function c(b, c) {
        f = Math.max(f, a(c).outerHeight())
      }

      var d, e, f, g = this.rowEls.eq(b), h = g.height(),
        i = this.rowStructs[b].tbodyEl.children();
      for (d = 0; d < i.length; d++) if (e = i.eq(d).removeClass("fc-limited"), f = 0, e.find("> td > :first-child").each(c), e.position().top + f > h) return d;
      return !1
    }, limitRow: function (b, c) {
      function d(d) {
        for (; d > w;) j = t.getCellSegs(b, w, c), j.length && (m = f[c - 1][w], s = t.renderMoreLink(b, w, j), r = a("<div/>").append(s), m.append(r), v.push(r[0])), w++
      }

      var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t = this,
        u = this.rowStructs[b], v = [], w = 0;
      if (c && c < u.segLevels.length) {
        for (e = u.segLevels[c - 1], f = u.cellMatrix, g = u.tbodyEl.children().slice(c).addClass("fc-limited").get(), h = 0; h < e.length; h++) {
          for (i = e[h], d(i.leftCol), l = [], k = 0; w <= i.rightCol;) j = this.getCellSegs(b, w, c), l.push(j), k += j.length, w++;
          if (k) {
            for (m = f[c - 1][i.leftCol], n = m.attr("rowspan") || 1, o = [], p = 0; p < l.length; p++) q = a('<td class="fc-more-cell"/>').attr("rowspan", n), j = l[p], s = this.renderMoreLink(b, i.leftCol + p, [i].concat(j)), r = a("<div/>").append(s), q.append(r), o.push(q[0]), v.push(q[0]);
            m.addClass("fc-limited").after(a(o)), g.push(m[0])
          }
        }
        d(this.colCnt), u.moreEls = a(v), u.limitedEls = a(g)
      }
    }, unlimitRow: function (a) {
      var b = this.rowStructs[a];
      b.moreEls && (b.moreEls.remove(), b.moreEls = null), b.limitedEls && (b.limitedEls.removeClass("fc-limited"), b.limitedEls = null)
    }, renderMoreLink: function (b, c, d) {
      var e = this, f = this.view;
      return a('<a class="fc-more"/>').text(this.getMoreLinkText(d.length)).on("click", function (g) {
        var h = f.opt("eventLimitClick"), i = e.getCellDate(b, c), j = a(this),
          k = e.getCellEl(b, c), l = e.getCellSegs(b, c),
          m = e.resliceDaySegs(l, i), n = e.resliceDaySegs(d, i);
        "function" == typeof h && (h = f.trigger("eventLimitClick", null, {
          date: i,
          dayEl: k,
          moreEl: j,
          segs: m,
          hiddenSegs: n
        }, g)), "popover" === h ? e.showSegPopover(b, c, j, m) : "string" == typeof h && f.calendar.zoomTo(i, h)
      })
    }, showSegPopover: function (a, b, c, d) {
      var e, f, g = this, h = this.view, i = c.parent();
      e = 1 == this.rowCnt ? h.el : this.rowEls.eq(a), f = {
        className: "fc-more-popover",
        content: this.renderSegPopoverContent(a, b, d),
        parentEl: this.el,
        top: e.offset().top,
        autoHide: !0,
        viewportConstrain: h.opt("popoverViewportConstrain"),
        hide: function () {
          g.segPopover.removeElement(), g.segPopover = null, g.popoverSegs = null
        }
      }, this.isRTL ? f.right = i.offset().left + i.outerWidth() + 1 : f.left = i.offset().left - 1, this.segPopover = new fb(f), this.segPopover.show()
    }, renderSegPopoverContent: function (b, c, d) {
      var e, f = this.view, g = f.opt("theme"),
        h = this.getCellDate(b, c).format(f.opt("dayPopoverFormat")),
        i = a('<div class="fc-header ' + f.widgetHeaderClass + '"><span class="fc-close ' + (g ? "ui-icon ui-icon-closethick" : "fc-icon fc-icon-x") + '"></span><span class="fc-title">' + Y(h) + '</span><div class="fc-clear"/></div><div class="fc-body ' + f.widgetContentClass + '"><div class="fc-event-container"></div></div>'),
        j = i.find(".fc-event-container");
      for (d = this.renderFgSegEls(d, !0), this.popoverSegs = d, e = 0; e < d.length; e++) this.prepareHits(), d[e].hit = this.getCellHit(b, c), this.releaseHits(), j.append(d[e].el);
      return i
    }, resliceDaySegs: function (b, c) {
      var d = a.map(b, function (a) {
        return a.event
      }), e = c.clone(), f = e.clone().add(1, "days"), g = {start: e, end: f};
      return b = this.eventsToSegs(d, function (a) {
        var b = E(a, g);
        return b ? [b] : []
      }), this.sortEventSegs(b), b
    }, getMoreLinkText: function (a) {
      var b = this.view.opt("eventLimitText");
      return "function" == typeof b ? b(a) : "+" + a + " " + b
    }, getCellSegs: function (a, b, c) {
      for (var d, e = this.rowStructs[a].segMatrix, f = c || 0, g = []; f < e.length;) d = e[f][b], d && g.push(d), f++;
      return g
    }
  });
  var nb = Pa.TimeGrid = kb.extend(lb, {
    slotDuration: null,
    snapDuration: null,
    snapsPerSlot: null,
    minTime: null,
    maxTime: null,
    labelFormat: null,
    labelInterval: null,
    colEls: null,
    slatEls: null,
    nowIndicatorEls: null,
    colCoordCache: null,
    slatCoordCache: null,
    constructor: function () {
      kb.apply(this, arguments), this.processOptions()
    },
    renderDates: function () {
      this.el.html(this.renderHtml()), this.colEls = this.el.find(".fc-day"), this.slatEls = this.el.find(".fc-slats tr"), this.colCoordCache = new gb({
        els: this.colEls,
        isHorizontal: !0
      }), this.slatCoordCache = new gb({
        els: this.slatEls,
        isVertical: !0
      }), this.renderContentSkeleton()
    },
    renderHtml: function () {
      return '<div class="fc-bg"><table>' + this.renderBgTrHtml(0) + '</table></div><div class="fc-slats"><table>' + this.renderSlatRowHtml() + "</table></div>"
    },
    renderSlatRowHtml: function () {
      for (var a, c, d, e = this.view, f = this.isRTL, g = "", h = b.duration(+this.minTime); h < this.maxTime;) a = this.start.clone().time(h), c = ba(L(h, this.labelInterval)), d = '<td class="fc-axis fc-time ' + e.widgetContentClass + '" ' + e.axisStyleAttr() + ">" + (c ? "<span>" + Y(a.format(this.labelFormat)) + "</span>" : "") + "</td>", g += '<tr data-time="' + a.format("HH:mm:ss") + '"' + (c ? "" : ' class="fc-minor"') + ">" + (f ? "" : d) + '<td class="' + e.widgetContentClass + '"/>' + (f ? d : "") + "</tr>", h.add(this.slotDuration);
      return g
    },
    processOptions: function () {
      var c, d = this.view, e = d.opt("slotDuration"),
        f = d.opt("snapDuration");
      e = b.duration(e), f = f ? b.duration(f) : e, this.slotDuration = e, this.snapDuration = f, this.snapsPerSlot = e / f, this.minResizeDuration = f, this.minTime = b.duration(d.opt("minTime")), this.maxTime = b.duration(d.opt("maxTime")), c = d.opt("slotLabelFormat"), a.isArray(c) && (c = c[c.length - 1]), this.labelFormat = c || d.opt("axisFormat") || d.opt("smallTimeFormat"), c = d.opt("slotLabelInterval"), this.labelInterval = c ? b.duration(c) : this.computeLabelInterval(e)
    },
    computeLabelInterval: function (a) {
      var c, d, e;
      for (c = Db.length - 1; c >= 0; c--) if (d = b.duration(Db[c]), e = L(d, a), ba(e) && e > 1) return d;
      return b.duration(a)
    },
    computeEventTimeFormat: function () {
      return this.view.opt("noMeridiemTimeFormat")
    },
    computeDisplayEventEnd: function () {
      return !0
    },
    prepareHits: function () {
      this.colCoordCache.build(), this.slatCoordCache.build()
    },
    releaseHits: function () {
      this.colCoordCache.clear()
    },
    queryHit: function (a, b) {
      var c = this.snapsPerSlot, d = this.colCoordCache,
        e = this.slatCoordCache, f = d.getHorizontalIndex(a),
        g = e.getVerticalIndex(b);
      if (null != f && null != g) {
        var h = e.getTopOffset(g), i = e.getHeight(g), j = (b - h) / i,
          k = Math.floor(j * c), l = g * c + k, m = h + k / c * i,
          n = h + (k + 1) / c * i;
        return {
          col: f,
          snap: l,
          component: this,
          left: d.getLeftOffset(f),
          right: d.getRightOffset(f),
          top: m,
          bottom: n
        }
      }
    },
    getHitSpan: function (a) {
      var b, c = this.getCellDate(0, a.col), d = this.computeSnapTime(a.snap);
      return c.time(d), b = c.clone().add(this.snapDuration), {start: c, end: b}
    },
    getHitEl: function (a) {
      return this.colEls.eq(a.col)
    },
    rangeUpdated: function () {
      this.updateDayTable()
    },
    computeSnapTime: function (a) {
      return b.duration(this.minTime + this.snapDuration * a)
    },
    spanToSegs: function (a) {
      var b, c = this.sliceRangeByTimes(a);
      for (b = 0; b < c.length; b++) this.isRTL ? c[b].col = this.daysPerRow - 1 - c[b].dayIndex : c[b].col = c[b].dayIndex;
      return c
    },
    sliceRangeByTimes: function (a) {
      var b, c, d, e, f = [];
      for (c = 0; c < this.daysPerRow; c++) d = this.dayDates[c].clone(), e = {
        start: d.clone().time(this.minTime),
        end: d.clone().time(this.maxTime)
      }, b = E(a, e), b && (b.dayIndex = c, f.push(b));
      return f
    },
    updateSize: function (a) {
      this.slatCoordCache.build(), a && this.updateSegVerticals([].concat(this.fgSegs || [], this.bgSegs || [], this.businessSegs || []))
    },
    computeDateTop: function (a, c) {
      return this.computeTimeTop(b.duration(a - c.clone().stripTime()))
    },
    computeTimeTop: function (a) {
      var b, c, d = this.slatEls.length,
        e = (a - this.minTime) / this.slotDuration;
      return e = Math.max(0, e), e = Math.min(d, e), b = Math.floor(e), b = Math.min(b, d - 1), c = e - b, this.slatCoordCache.getTopPosition(b) + this.slatCoordCache.getHeight(b) * c
    },
    renderDrag: function (a, b) {
      if (b) {
        this.renderEventLocationHelper(a, b);
        for (var c = 0; c < this.helperSegs.length; c++) this.applyDragOpacity(this.helperSegs[c].el);
        return !0
      }
      this.renderHighlight(this.eventToSpan(a))
    },
    unrenderDrag: function () {
      this.unrenderHelper(), this.unrenderHighlight()
    },
    renderEventResize: function (a, b) {
      this.renderEventLocationHelper(a, b)
    },
    unrenderEventResize: function () {
      this.unrenderHelper()
    },
    renderHelper: function (a, b) {
      this.renderHelperSegs(this.eventToSegs(a), b)
    },
    unrenderHelper: function () {
      this.unrenderHelperSegs()
    },
    renderBusinessHours: function () {
      var a = this.view.calendar.getBusinessHoursEvents(),
        b = this.eventsToSegs(a);
      this.renderBusinessSegs(b)
    },
    unrenderBusinessHours: function () {
      this.unrenderBusinessSegs()
    },
    getNowIndicatorUnit: function () {
      return "minute"
    },
    renderNowIndicator: function (b) {
      var c, d = this.spanToSegs({start: b, end: b}),
        e = this.computeDateTop(b, b), f = [];
      for (c = 0; c < d.length; c++) f.push(a('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top", e).appendTo(this.colContainerEls.eq(d[c].col))[0]);
      d.length > 0 && f.push(a('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top", e).appendTo(this.el.find(".fc-content-skeleton"))[0]), this.nowIndicatorEls = a(f)
    },
    unrenderNowIndicator: function () {
      this.nowIndicatorEls && (this.nowIndicatorEls.remove(), this.nowIndicatorEls = null)
    },
    renderSelection: function (a) {
      this.view.opt("selectHelper") ? this.renderEventLocationHelper(a) : this.renderHighlight(a)
    },
    unrenderSelection: function () {
      this.unrenderHelper(), this.unrenderHighlight()
    },
    renderHighlight: function (a) {
      this.renderHighlightSegs(this.spanToSegs(a))
    },
    unrenderHighlight: function () {
      this.unrenderHighlightSegs()
    }
  });
  nb.mixin({
    colContainerEls: null,
    fgContainerEls: null,
    bgContainerEls: null,
    helperContainerEls: null,
    highlightContainerEls: null,
    businessContainerEls: null,
    fgSegs: null,
    bgSegs: null,
    helperSegs: null,
    highlightSegs: null,
    businessSegs: null,
    renderContentSkeleton: function () {
      var b, c, d = "";
      for (b = 0; b < this.colCnt; b++) d += '<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';
      c = a('<div class="fc-content-skeleton"><table><tr>' + d + "</tr></table></div>"), this.colContainerEls = c.find(".fc-content-col"), this.helperContainerEls = c.find(".fc-helper-container"), this.fgContainerEls = c.find(".fc-event-container:not(.fc-helper-container)"), this.bgContainerEls = c.find(".fc-bgevent-container"), this.highlightContainerEls = c.find(".fc-highlight-container"), this.businessContainerEls = c.find(".fc-business-container"), this.bookendCells(c.find("tr")), this.el.append(c)
    },
    renderFgSegs: function (a) {
      return a = this.renderFgSegsIntoContainers(a, this.fgContainerEls), this.fgSegs = a, a
    },
    unrenderFgSegs: function () {
      this.unrenderNamedSegs("fgSegs")
    },
    renderHelperSegs: function (a, b) {
      var c, d, e;
      for (a = this.renderFgSegsIntoContainers(a, this.helperContainerEls), c = 0; c < a.length; c++) d = a[c], b && b.col === d.col && (e = b.el, d.el.css({
        left: e.css("left"),
        right: e.css("right"),
        "margin-left": e.css("margin-left"),
        "margin-right": e.css("margin-right")
      }));
      this.helperSegs = a
    },
    unrenderHelperSegs: function () {
      this.unrenderNamedSegs("helperSegs")
    },
    renderBgSegs: function (a) {
      return a = this.renderFillSegEls("bgEvent", a), this.updateSegVerticals(a), this.attachSegsByCol(this.groupSegsByCol(a), this.bgContainerEls), this.bgSegs = a, a
    },
    unrenderBgSegs: function () {
      this.unrenderNamedSegs("bgSegs")
    },
    renderHighlightSegs: function (a) {
      a = this.renderFillSegEls("highlight", a), this.updateSegVerticals(a), this.attachSegsByCol(this.groupSegsByCol(a), this.highlightContainerEls), this.highlightSegs = a
    },
    unrenderHighlightSegs: function () {
      this.unrenderNamedSegs("highlightSegs")
    },
    renderBusinessSegs: function (a) {
      a = this.renderFillSegEls("businessHours", a), this.updateSegVerticals(a), this.attachSegsByCol(this.groupSegsByCol(a), this.businessContainerEls), this.businessSegs = a
    },
    unrenderBusinessSegs: function () {
      this.unrenderNamedSegs("businessSegs")
    },
    groupSegsByCol: function (a) {
      var b, c = [];
      for (b = 0; b < this.colCnt; b++) c.push([]);
      for (b = 0; b < a.length; b++) c[a[b].col].push(a[b]);
      return c
    },
    attachSegsByCol: function (a, b) {
      var c, d, e;
      for (c = 0; c < this.colCnt; c++) for (d = a[c], e = 0; e < d.length; e++) b.eq(c).append(d[e].el)
    },
    unrenderNamedSegs: function (a) {
      var b, c = this[a];
      if (c) {
        for (b = 0; b < c.length; b++) c[b].el.remove();
        this[a] = null
      }
    },
    renderFgSegsIntoContainers: function (a, b) {
      var c, d;
      for (a = this.renderFgSegEls(a), c = this.groupSegsByCol(a), d = 0; d < this.colCnt; d++) this.updateFgSegCoords(c[d]);
      return this.attachSegsByCol(c, b), a
    },
    fgSegHtml: function (a, b) {
      var c, d, e, f = this.view, g = a.event, h = f.isEventDraggable(g),
        i = !b && a.isStart && f.isEventResizableFromStart(g),
        j = !b && a.isEnd && f.isEventResizableFromEnd(g),
        k = this.getSegClasses(a, h, i || j), l = $(this.getEventSkinCss(g));
      return k.unshift("fc-time-grid-event", "fc-v-event"), f.isMultiDayEvent(g) ? (a.isStart || a.isEnd) && (c = this.getEventTimeText(a), d = this.getEventTimeText(a, "LT"), e = this.getEventTimeText(a, null, !1)) : (c = this.getEventTimeText(g), d = this.getEventTimeText(g, "LT"), e = this.getEventTimeText(g, null, !1)), '<a class="' + k.join(" ") + '"' + (g.url ? ' href="' + Y(g.url) + '"' : "") + (l ? ' style="' + l + '"' : "") + '><div class="fc-content">' + (c ? '<div class="fc-time" data-start="' + Y(e) + '" data-full="' + Y(d) + '"><span>' + Y(c) + "</span></div>" : "") + (g.title ? '<div class="fc-title">' + Y(g.title) + "</div>" : "") + '</div><div class="fc-bg"/>' + (j ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
    },
    updateSegVerticals: function (a) {
      this.computeSegVerticals(a), this.assignSegVerticals(a)
    },
    computeSegVerticals: function (a) {
      var b, c;
      for (b = 0; b < a.length; b++) c = a[b], c.top = this.computeDateTop(c.start, c.start), c.bottom = this.computeDateTop(c.end, c.start)
    },
    assignSegVerticals: function (a) {
      var b, c;
      for (b = 0; b < a.length; b++) c = a[b], c.el.css(this.generateSegVerticalCss(c))
    },
    generateSegVerticalCss: function (a) {
      return {top: a.top, bottom: -a.bottom}
    },
    updateFgSegCoords: function (a) {
      this.computeSegVerticals(a), this.computeFgSegHorizontals(a), this.assignSegVerticals(a), this.assignFgSegHorizontals(a)
    },
    computeFgSegHorizontals: function (a) {
      var b, c, d;
      if (this.sortEventSegs(a), b = Ea(a), Fa(b), c = b[0]) {
        for (d = 0; d < c.length; d++) Ga(c[d]);
        for (d = 0; d < c.length; d++) this.computeFgSegForwardBack(c[d], 0, 0)
      }
    },
    computeFgSegForwardBack: function (a, b, c) {
      var d, e = a.forwardSegs;
      if (void 0 === a.forwardCoord) for (e.length ? (this.sortForwardSegs(e), this.computeFgSegForwardBack(e[0], b + 1, c), a.forwardCoord = e[0].backwardCoord) : a.forwardCoord = 1, a.backwardCoord = a.forwardCoord - (a.forwardCoord - c) / (b + 1), d = 0; d < e.length; d++) this.computeFgSegForwardBack(e[d], 0, a.forwardCoord)
    },
    sortForwardSegs: function (a) {
      a.sort(ca(this, "compareForwardSegs"))
    },
    compareForwardSegs: function (a, b) {
      return b.forwardPressure - a.forwardPressure || (a.backwardCoord || 0) - (b.backwardCoord || 0) || this.compareEventSegs(a, b)
    },
    assignFgSegHorizontals: function (a) {
      var b, c;
      for (b = 0; b < a.length; b++) c = a[b], c.el.css(this.generateFgSegHorizontalCss(c)), c.bottom - c.top < 30 && c.el.addClass("fc-short")
    },
    generateFgSegHorizontalCss: function (a) {
      var b, c, d = this.view.opt("slotEventOverlap"), e = a.backwardCoord,
        f = a.forwardCoord, g = this.generateSegVerticalCss(a);
      return d && (f = Math.min(1, e + 2 * (f - e))), this.isRTL ? (b = 1 - f, c = e) : (b = e, c = 1 - f), g.zIndex = a.level + 1, g.left = 100 * b + "%", g.right = 100 * c + "%", d && a.forwardPressure && (g[this.isRTL ? "marginLeft" : "marginRight"] = 20), g
    }
  });
  var ob = Pa.View = ra.extend({
    type: null,
    name: null,
    title: null,
    calendar: null,
    options: null,
    el: null,
    displaying: null,
    isSkeletonRendered: !1,
    isEventsRendered: !1,
    start: null,
    end: null,
    intervalStart: null,
    intervalEnd: null,
    intervalDuration: null,
    intervalUnit: null,
    isRTL: !1,
    isSelected: !1,
    eventOrderSpecs: null,
    scrollerEl: null,
    scrollTop: null,
    widgetHeaderClass: null,
    widgetContentClass: null,
    highlightStateClass: null,
    nextDayThreshold: null,
    isHiddenDayHash: null,
    documentMousedownProxy: null,
    nowIndicatorTimeoutID: null,
    nowIndicatorIntervalID: null,
    constructor: function (a, c, d, e) {
      this.calendar = a, this.type = this.name = c, this.options = d, this.intervalDuration = e || b.duration(1, "day"), this.nextDayThreshold = b.duration(this.opt("nextDayThreshold")), this.initThemingProps(), this.initHiddenDays(), this.isRTL = this.opt("isRTL"), this.eventOrderSpecs = A(this.opt("eventOrder")), this.documentMousedownProxy = ca(this, "documentMousedown"), this.initialize()
    },
    initialize: function () {
    },
    opt: function (a) {
      return this.options[a]
    },
    trigger: function (a, b) {
      var c = this.calendar;
      return c.trigger.apply(c, [a, b || this].concat(Array.prototype.slice.call(arguments, 2), [this]))
    },
    setDate: function (a) {
      this.setRange(this.computeRange(a))
    },
    setRange: function (b) {
      a.extend(this, b), this.updateTitle()
    },
    computeRange: function (a) {
      var b, c, d = I(this.intervalDuration), e = a.clone().startOf(d),
        f = e.clone().add(this.intervalDuration);
      return /year|month|week|day/.test(d) ? (e.stripTime(), f.stripTime()) : (e.hasTime() || (e = this.calendar.time(0)), f.hasTime() || (f = this.calendar.time(0))), b = e.clone(), b = this.skipHiddenDays(b), c = f.clone(), c = this.skipHiddenDays(c, -1, !0), {
        intervalUnit: d,
        intervalStart: e,
        intervalEnd: f,
        start: b,
        end: c
      }
    },
    computePrevDate: function (a) {
      return this.massageCurrentDate(a.clone().startOf(this.intervalUnit).subtract(this.intervalDuration), -1)
    },
    computeNextDate: function (a) {
      return this.massageCurrentDate(a.clone().startOf(this.intervalUnit).add(this.intervalDuration))
    },
    massageCurrentDate: function (a, b) {
      return this.intervalDuration.as("days") <= 1 && this.isHiddenDay(a) && (a = this.skipHiddenDays(a, b), a.startOf("day")), a
    },
    updateTitle: function () {
      this.title = this.computeTitle()
    },
    computeTitle: function () {
      return this.formatRange({
        start: this.calendar.applyTimezone(this.intervalStart),
        end: this.calendar.applyTimezone(this.intervalEnd)
      }, this.opt("titleFormat") || this.computeTitleFormat(), this.opt("titleRangeSeparator"))
    },
    computeTitleFormat: function () {
      return "year" == this.intervalUnit ? "YYYY" : "month" == this.intervalUnit ? this.opt("monthYearFormat") : this.intervalDuration.as("days") > 1 ? "ll" : "LL"
    },
    formatRange: function (a, b, c) {
      var d = a.end;
      return d.hasTime() || (d = d.clone().subtract(1)), ma(a.start, d, b, c, this.opt("isRTL"))
    },
    setElement: function (a) {
      this.el = a, this.bindGlobalHandlers()
    },
    removeElement: function () {
      this.clear(), this.isSkeletonRendered && (this.unrenderSkeleton(), this.isSkeletonRendered = !1), this.unbindGlobalHandlers(), this.el.remove()
    },
    display: function (b) {
      var c = this, d = null;
      return this.displaying && (d = this.queryScroll()), this.calendar.freezeContentHeight(), this.clear().then(function () {
        return c.displaying = a.when(c.displayView(b)).then(function () {
          c.forceScroll(c.computeInitialScroll(d)), c.calendar.unfreezeContentHeight(), c.triggerRender()
        })
      })
    },
    clear: function () {
      var b = this, c = this.displaying;
      return c ? c.then(function () {
        return b.displaying = null, b.clearEvents(), b.clearView()
      }) : a.when()
    },
    redisplay: function () {
      if (this.isSkeletonRendered) {
        var a = this.isEventsRendered;
        this.clearEvents(), this.clearView(), this.displayView(), a && this.displayEvents(this.calendar.getEventCache())
      }
    },
    displayView: function (a) {
      this.isSkeletonRendered || (this.renderSkeleton(), this.isSkeletonRendered = !0), a && this.setDate(a), this.render && this.render(), this.renderDates(), this.updateSize(), this.renderBusinessHours(), this.opt("nowIndicator") && this.startNowIndicator()
    },
    clearView: function () {
      this.unselect(), this.stopNowIndicator(), this.triggerUnrender(), this.unrenderBusinessHours(), this.unrenderDates(), this.destroy && this.destroy()
    },
    renderSkeleton: function () {
    },
    unrenderSkeleton: function () {
    },
    renderDates: function () {
    },
    unrenderDates: function () {
    },
    triggerRender: function () {
      this.trigger("viewRender", this, this, this.el)
    },
    triggerUnrender: function () {
      this.trigger("viewDestroy", this, this, this.el)
    },
    bindGlobalHandlers: function () {
      a(document).on("mousedown", this.documentMousedownProxy)
    },
    unbindGlobalHandlers: function () {
      a(document).off("mousedown", this.documentMousedownProxy)
    },
    initThemingProps: function () {
      var a = this.opt("theme") ? "ui" : "fc";
      this.widgetHeaderClass = a + "-widget-header", this.widgetContentClass = a + "-widget-content", this.highlightStateClass = a + "-state-highlight"
    },
    renderBusinessHours: function () {
    },
    unrenderBusinessHours: function () {
    },
    startNowIndicator: function () {
      function a() {
        f.unrenderNowIndicator(), f.renderNowIndicator(c.clone().add(new Date - d))
      }

      var c, d, e, f = this, g = this.getNowIndicatorUnit();
      g && (c = this.calendar.getNow(), d = +new Date, this.renderNowIndicator(c), e = c.clone().startOf(g).add(1, g) - c, this.nowIndicatorTimeoutID = setTimeout(function () {
        this.nowIndicatorTimeoutID = null, a(), e = +b.duration(1, g), e = Math.max(100, e), this.nowIndicatorIntervalID = setInterval(a, e)
      }, e))
    },
    stopNowIndicator: function () {
      var a = !1;
      this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID), a = !0), this.nowIndicatorIntervalID && (clearTimeout(this.nowIndicatorIntervalID), a = !0), a && this.unrenderNowIndicator()
    },
    getNowIndicatorUnit: function () {
    },
    renderNowIndicator: function (a) {
    },
    unrenderNowIndicator: function () {
    },
    updateSize: function (a) {
      var b;
      a && (b = this.queryScroll()), this.updateHeight(a), this.updateWidth(a), a && this.setScroll(b)
    },
    updateWidth: function (a) {
    },
    updateHeight: function (a) {
      var b = this.calendar;
      this.setHeight(b.getSuggestedViewHeight(), b.isHeightAuto())
    },
    setHeight: function (a, b) {
    },
    computeScrollerHeight: function (a) {
      var b, c, d = this.scrollerEl;
      return b = this.el.add(d), b.css({
        position: "relative",
        left: -1
      }), c = this.el.outerHeight() - d.height(), b.css({
        position: "",
        left: ""
      }), a - c
    },
    computeInitialScroll: function (a) {
      return 0
    },
    queryScroll: function () {
      return this.scrollerEl ? this.scrollerEl.scrollTop() : void 0
    },
    setScroll: function (a) {
      return this.scrollerEl ? this.scrollerEl.scrollTop(a) : void 0
    },
    forceScroll: function (a) {
      var b = this;
      this.setScroll(a), setTimeout(function () {
        b.setScroll(a)
      }, 0)
    },
    displayEvents: function (a) {
      var b = this.queryScroll();
      this.clearEvents(), this.renderEvents(a), this.isEventsRendered = !0, this.setScroll(b), this.triggerEventRender()
    },
    clearEvents: function () {
      var a;
      this.isEventsRendered && (a = this.queryScroll(), this.triggerEventUnrender(), this.destroyEvents && this.destroyEvents(), this.unrenderEvents(), this.setScroll(a), this.isEventsRendered = !1)
    },
    renderEvents: function (a) {
    },
    unrenderEvents: function () {
    },
    triggerEventRender: function () {
      this.renderedEventSegEach(function (a) {
        this.trigger("eventAfterRender", a.event, a.event, a.el)
      }), this.trigger("eventAfterAllRender")
    },
    triggerEventUnrender: function () {
      this.renderedEventSegEach(function (a) {
        this.trigger("eventDestroy", a.event, a.event, a.el)
      })
    },
    resolveEventEl: function (b, c) {
      var d = this.trigger("eventRender", b, b, c);
      return d === !1 ? c = null : d && d !== !0 && (c = a(d)), c
    },
    showEvent: function (a) {
      this.renderedEventSegEach(function (a) {
        a.el.css("visibility", "")
      }, a)
    },
    hideEvent: function (a) {
      this.renderedEventSegEach(function (a) {
        a.el.css("visibility", "hidden")
      }, a)
    },
    renderedEventSegEach: function (a, b) {
      var c, d = this.getEventSegs();
      for (c = 0; c < d.length; c++) b && d[c].event._id !== b._id || d[c].el && a.call(this, d[c])
    },
    getEventSegs: function () {
      return []
    },
    isEventDraggable: function (a) {
      var b = a.source || {};
      return X(a.startEditable, b.startEditable, this.opt("eventStartEditable"), a.editable, b.editable, this.opt("editable"))
    },
    reportEventDrop: function (a, b, c, d, e) {
      var f = this.calendar, g = f.mutateEvent(a, b, c), h = function () {
        g.undo(), f.reportEventChange()
      };
      this.triggerEventDrop(a, g.dateDelta, h, d, e), f.reportEventChange()
    },
    triggerEventDrop: function (a, b, c, d, e) {
      this.trigger("eventDrop", d[0], a, b, c, e, {})
    },
    reportExternalDrop: function (b, c, d, e, f) {
      var g, h, i = b.eventProps;
      i && (g = a.extend({}, i, c), h = this.calendar.renderEvent(g, b.stick)[0]), this.triggerExternalDrop(h, c, d, e, f)
    },
    triggerExternalDrop: function (a, b, c, d, e) {
      this.trigger("drop", c[0], b.start, d, e), a && this.trigger("eventReceive", null, a)
    },
    renderDrag: function (a, b) {
    },
    unrenderDrag: function () {
    },
    isEventResizableFromStart: function (a) {
      return this.opt("eventResizableFromStart") && this.isEventResizable(a)
    },
    isEventResizableFromEnd: function (a) {
      return this.isEventResizable(a)
    },
    isEventResizable: function (a) {
      var b = a.source || {};
      return X(a.durationEditable, b.durationEditable, this.opt("eventDurationEditable"), a.editable, b.editable, this.opt("editable"))
    },
    reportEventResize: function (a, b, c, d, e) {
      var f = this.calendar, g = f.mutateEvent(a, b, c), h = function () {
        g.undo(), f.reportEventChange()
      };
      this.triggerEventResize(a, g.durationDelta, h, d, e), f.reportEventChange()
    },
    triggerEventResize: function (a, b, c, d, e) {
      this.trigger("eventResize", d[0], a, b, c, e, {})
    },
    select: function (a, b) {
      this.unselect(b), this.renderSelection(a), this.reportSelection(a, b)
    },
    renderSelection: function (a) {
    },
    reportSelection: function (a, b) {
      this.isSelected = !0, this.triggerSelect(a, b)
    },
    triggerSelect: function (a, b) {
      this.trigger("select", null, this.calendar.applyTimezone(a.start), this.calendar.applyTimezone(a.end), b)
    },
    unselect: function (a) {
      this.isSelected && (this.isSelected = !1, this.destroySelection && this.destroySelection(), this.unrenderSelection(), this.trigger("unselect", null, a))
    },
    unrenderSelection: function () {
    },
    documentMousedown: function (b) {
      var c;
      this.isSelected && this.opt("unselectAuto") && v(b) && (c = this.opt("unselectCancel"), c && a(b.target).closest(c).length || this.unselect(b))
    },
    triggerDayClick: function (a, b, c) {
      this.trigger("dayClick", b, this.calendar.applyTimezone(a.start), c)
    },
    initHiddenDays: function () {
      var b, c = this.opt("hiddenDays") || [], d = [], e = 0;
      for (this.opt("weekends") === !1 && c.push(0, 6), b = 0; 7 > b; b++) (d[b] = -1 !== a.inArray(b, c)) || e++;
      if (!e) throw"invalid hiddenDays";
      this.isHiddenDayHash = d
    },
    isHiddenDay: function (a) {
      return b.isMoment(a) && (a = a.day()), this.isHiddenDayHash[a]
    },
    skipHiddenDays: function (a, b, c) {
      var d = a.clone();
      for (b = b || 1; this.isHiddenDayHash[(d.day() + (c ? b : 0) + 7) % 7];) d.add(b, "days");
      return d
    },
    computeDayRange: function (a) {
      var b, c = a.start.clone().stripTime(), d = a.end, e = null;
      return d && (e = d.clone().stripTime(), b = +d.time(), b && b >= this.nextDayThreshold && e.add(1, "days")), (!d || c >= e) && (e = c.clone().add(1, "days")), {
        start: c,
        end: e
      }
    },
    isMultiDayEvent: function (a) {
      var b = this.computeDayRange(a);
      return b.end.diff(b.start, "days") > 1
    }
  }), pb = Pa.Calendar = ra.extend({
    dirDefaults: null,
    langDefaults: null,
    overrides: null,
    options: null,
    viewSpecCache: null,
    view: null,
    header: null,
    loadingLevel: 0,
    constructor: Ja,
    initialize: function () {
    },
    initOptions: function (a) {
      var b, e, f, g;
      a = d(a), b = a.lang, e = qb[b], e || (b = pb.defaults.lang, e = qb[b] || {}), f = X(a.isRTL, e.isRTL, pb.defaults.isRTL), g = f ? pb.rtlDefaults : {}, this.dirDefaults = g, this.langDefaults = e, this.overrides = a, this.options = c([pb.defaults, g, e, a]), Ka(this.options), this.viewSpecCache = {}
    },
    getViewSpec: function (a) {
      var b = this.viewSpecCache;
      return b[a] || (b[a] = this.buildViewSpec(a))
    },
    getUnitViewSpec: function (b) {
      var c, d, e;
      if (-1 != a.inArray(b, Ua)) for (c = this.header.getViewsWithButtons(), a.each(Pa.views, function (a) {
        c.push(a)
      }), d = 0; d < c.length; d++) if (e = this.getViewSpec(c[d]), e && e.singleUnit == b) return e
    },
    buildViewSpec: function (a) {
      for (var d, e, f, g, h = this.overrides.views || {}, i = [], j = [], k = [], l = a; l;) d = Qa[l], e = h[l], l = null, "function" == typeof d && (d = {"class": d}), d && (i.unshift(d), j.unshift(d.defaults || {}), f = f || d.duration, l = l || d.type), e && (k.unshift(e), f = f || e.duration, l = l || e.type);
      return d = Q(i), d.type = a, d["class"] ? (f && (f = b.duration(f), f.valueOf() && (d.duration = f, g = I(f), 1 === f.as(g) && (d.singleUnit = g, k.unshift(h[g] || {})))), d.defaults = c(j), d.overrides = c(k), this.buildViewSpecOptions(d), this.buildViewSpecButtonText(d, a), d) : !1
    },
    buildViewSpecOptions: function (a) {
      a.options = c([pb.defaults, a.defaults, this.dirDefaults, this.langDefaults, this.overrides, a.overrides]), Ka(a.options)
    },
    buildViewSpecButtonText: function (a, b) {
      function c(c) {
        var d = c.buttonText || {};
        return d[b] || (a.singleUnit ? d[a.singleUnit] : null)
      }

      a.buttonTextOverride = c(this.overrides) || a.overrides.buttonText, a.buttonTextDefault = c(this.langDefaults) || c(this.dirDefaults) || a.defaults.buttonText || c(pb.defaults) || (a.duration ? this.humanizeDuration(a.duration) : null) || b
    },
    instantiateView: function (a) {
      var b = this.getViewSpec(a);
      return new b["class"](this, a, b.options, b.duration)
    },
    isValidViewType: function (a) {
      return Boolean(this.getViewSpec(a))
    },
    pushLoading: function () {
      this.loadingLevel++ || this.trigger("loading", null, !0, this.view)
    },
    popLoading: function () {
      --this.loadingLevel || this.trigger("loading", null, !1, this.view)
    },
    buildSelectSpan: function (a, b) {
      var c, d = this.moment(a).stripZone();
      return c = b ? this.moment(b).stripZone() : d.hasTime() ? d.clone().add(this.defaultTimedEventDuration) : d.clone().add(this.defaultAllDayEventDuration), {
        start: d,
        end: c
      }
    }
  });
  pb.mixin(eb), pb.defaults = {
    titleRangeSeparator: " — ",
    monthYearFormat: "MMMM YYYY",
    defaultTimedEventDuration: "02:00:00",
    defaultAllDayEventDuration: {days: 1},
    forceEventDuration: !1,
    nextDayThreshold: "09:00:00",
    defaultView: "month",
    aspectRatio: 1.35,
    header: {left: "title", center: "", right: "today prev,next"},
    weekends: !0,
    weekNumbers: !1,
    weekNumberTitle: "W",
    weekNumberCalculation: "local",
    scrollTime: "06:00:00",
    lazyFetching: !0,
    startParam: "start",
    endParam: "end",
    timezoneParam: "timezone",
    timezone: !1,
    isRTL: !1,
    buttonText: {
      prev: "prev",
      next: "next",
      prevYear: "prev year",
      nextYear: "next year",
      year: "year",
      today: "today",
      month: "month",
      week: "week",
      day: "day"
    },
    buttonIcons: {
      prev: "left-single-arrow",
      next: "right-single-arrow",
      prevYear: "left-double-arrow",
      nextYear: "right-double-arrow"
    },
    theme: !1,
    themeButtonIcons: {
      prev: "circle-triangle-w",
      next: "circle-triangle-e",
      prevYear: "seek-prev",
      nextYear: "seek-next"
    },
    dragOpacity: .75,
    dragRevertDuration: 500,
    dragScroll: !0,
    unselectAuto: !0,
    dropAccept: "*",
    eventOrder: "title",
    eventLimit: !1,
    eventLimitText: "more",
    eventLimitClick: "popover",
    dayPopoverFormat: "LL",
    handleWindowResize: !0,
    windowResizeDelay: 200
  }, pb.englishDefaults = {dayPopoverFormat: "dddd, MMMM D"}, pb.rtlDefaults = {
    header: {
      left: "next,prev today",
      center: "",
      right: "title"
    },
    buttonIcons: {
      prev: "right-single-arrow",
      next: "left-single-arrow",
      prevYear: "right-double-arrow",
      nextYear: "left-double-arrow"
    },
    themeButtonIcons: {
      prev: "circle-triangle-e",
      next: "circle-triangle-w",
      nextYear: "seek-prev",
      prevYear: "seek-next"
    }
  };
  var qb = Pa.langs = {};
  Pa.datepickerLang = function (b, c, d) {
    var e = qb[b] || (qb[b] = {});
    e.isRTL = d.isRTL, e.weekNumberTitle = d.weekHeader, a.each(rb, function (a, b) {
      e[a] = b(d)
    }), a.datepicker && (a.datepicker.regional[c] = a.datepicker.regional[b] = d, a.datepicker.regional.en = a.datepicker.regional[""], a.datepicker.setDefaults(d))
  }, Pa.lang = function (b, d) {
    var e, f;
    e = qb[b] || (qb[b] = {}), d && (e = qb[b] = c([e, d])), f = La(b), a.each(sb, function (a, b) {
      null == e[a] && (e[a] = b(f, e))
    }), pb.defaults.lang = b
  };
  var rb = {
    buttonText: function (a) {
      return {prev: Z(a.prevText), next: Z(a.nextText), today: Z(a.currentText)}
    }, monthYearFormat: function (a) {
      return a.showMonthAfterYear ? "YYYY[" + a.yearSuffix + "] MMMM" : "MMMM YYYY[" + a.yearSuffix + "]"
    }
  }, sb = {
    dayOfMonthFormat: function (a, b) {
      var c = a.longDateFormat("l");
      return c = c.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), b.isRTL ? c += " ddd" : c = "ddd " + c, c
    }, mediumTimeFormat: function (a) {
      return a.longDateFormat("LT").replace(/\s*a$/i, "a")
    }, smallTimeFormat: function (a) {
      return a.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
    }, extraSmallTimeFormat: function (a) {
      return a.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
    }, hourFormat: function (a) {
      return a.longDateFormat("LT").replace(":mm", "").replace(/(\Wmm)$/, "").replace(/\s*a$/i, "a")
    }, noMeridiemTimeFormat: function (a) {
      return a.longDateFormat("LT").replace(/\s*a$/i, "")
    }
  }, tb = {
    smallDayDateFormat: function (a) {
      return a.isRTL ? "D dd" : "dd D";
    }, weekFormat: function (a) {
      return a.isRTL ? "w[ " + a.weekNumberTitle + "]" : "[" + a.weekNumberTitle + " ]w"
    }, smallWeekFormat: function (a) {
      return a.isRTL ? "w[" + a.weekNumberTitle + "]" : "[" + a.weekNumberTitle + "]w"
    }
  };
  Pa.lang("en", pb.englishDefaults), Pa.sourceNormalizers = [], Pa.sourceFetchers = [];
  var ub = {dataType: "json", cache: !1}, vb = 1;
  pb.prototype.getPeerEvents = function (a, b) {
    var c, d, e = this.getEventCache(), f = [];
    for (c = 0; c < e.length; c++) d = e[c], b && b._id === d._id || f.push(d);
    return f
  };
  var wb = Pa.BasicView = ob.extend({
    dayGridClass: mb,
    dayGrid: null,
    dayNumbersVisible: !1,
    weekNumbersVisible: !1,
    weekNumberWidth: null,
    headContainerEl: null,
    headRowEl: null,
    initialize: function () {
      this.dayGrid = this.instantiateDayGrid()
    },
    instantiateDayGrid: function () {
      var a = this.dayGridClass.extend(xb);
      return new a(this)
    },
    setRange: function (a) {
      ob.prototype.setRange.call(this, a), this.dayGrid.breakOnWeeks = /year|month|week/.test(this.intervalUnit), this.dayGrid.setRange(a)
    },
    computeRange: function (a) {
      var b = ob.prototype.computeRange.call(this, a);
      return /year|month/.test(b.intervalUnit) && (b.start.startOf("week"), b.start = this.skipHiddenDays(b.start), b.end.weekday() && (b.end.add(1, "week").startOf("week"), b.end = this.skipHiddenDays(b.end, -1, !0))), b
    },
    renderDates: function () {
      this.dayNumbersVisible = this.dayGrid.rowCnt > 1, this.weekNumbersVisible = this.opt("weekNumbers"), this.dayGrid.numbersVisible = this.dayNumbersVisible || this.weekNumbersVisible, this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()), this.renderHead(), this.scrollerEl = this.el.find(".fc-day-grid-container"), this.dayGrid.setElement(this.el.find(".fc-day-grid")), this.dayGrid.renderDates(this.hasRigidRows())
    },
    renderHead: function () {
      this.headContainerEl = this.el.find(".fc-head-container").html(this.dayGrid.renderHeadHtml()), this.headRowEl = this.headContainerEl.find(".fc-row")
    },
    unrenderDates: function () {
      this.dayGrid.unrenderDates(), this.dayGrid.removeElement()
    },
    renderBusinessHours: function () {
      this.dayGrid.renderBusinessHours()
    },
    renderSkeletonHtml: function () {
      return '<table><thead class="fc-head"><tr><td class="fc-head-container ' + this.widgetHeaderClass + '"></td></tr></thead><tbody class="fc-body"><tr><td class="' + this.widgetContentClass + '"><div class="fc-day-grid-container"><div class="fc-day-grid"/></div></td></tr></tbody></table>'
    },
    weekNumberStyleAttr: function () {
      return null !== this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
    },
    hasRigidRows: function () {
      var a = this.opt("eventLimit");
      return a && "number" != typeof a
    },
    updateWidth: function () {
      this.weekNumbersVisible && (this.weekNumberWidth = k(this.el.find(".fc-week-number")))
    },
    setHeight: function (a, b) {
      var c, d = this.opt("eventLimit");
      m(this.scrollerEl), f(this.headRowEl), this.dayGrid.removeSegPopover(), d && "number" == typeof d && this.dayGrid.limitRows(d), c = this.computeScrollerHeight(a), this.setGridHeight(c, b), d && "number" != typeof d && this.dayGrid.limitRows(d), !b && l(this.scrollerEl, c) && (e(this.headRowEl, r(this.scrollerEl)), c = this.computeScrollerHeight(a), this.scrollerEl.height(c))
    },
    setGridHeight: function (a, b) {
      b ? j(this.dayGrid.rowEls) : i(this.dayGrid.rowEls, a, !0)
    },
    prepareHits: function () {
      this.dayGrid.prepareHits()
    },
    releaseHits: function () {
      this.dayGrid.releaseHits()
    },
    queryHit: function (a, b) {
      return this.dayGrid.queryHit(a, b)
    },
    getHitSpan: function (a) {
      return this.dayGrid.getHitSpan(a)
    },
    getHitEl: function (a) {
      return this.dayGrid.getHitEl(a)
    },
    renderEvents: function (a) {
      this.dayGrid.renderEvents(a), this.updateHeight()
    },
    getEventSegs: function () {
      return this.dayGrid.getEventSegs()
    },
    unrenderEvents: function () {
      this.dayGrid.unrenderEvents()
    },
    renderDrag: function (a, b) {
      return this.dayGrid.renderDrag(a, b)
    },
    unrenderDrag: function () {
      this.dayGrid.unrenderDrag()
    },
    renderSelection: function (a) {
      this.dayGrid.renderSelection(a)
    },
    unrenderSelection: function () {
      this.dayGrid.unrenderSelection()
    }
  }), xb = {
    renderHeadIntroHtml: function () {
      var a = this.view;
      return a.weekNumbersVisible ? '<th class="fc-week-number ' + a.widgetHeaderClass + '" ' + a.weekNumberStyleAttr() + "><span>" + Y(a.opt("weekNumberTitle")) + "</span></th>" : ""
    }, renderNumberIntroHtml: function (a) {
      var b = this.view;
      return b.weekNumbersVisible ? '<td class="fc-week-number" ' + b.weekNumberStyleAttr() + "><span>" + this.getCellDate(a, 0).format("w") + "</span></td>" : ""
    }, renderBgIntroHtml: function () {
      var a = this.view;
      return a.weekNumbersVisible ? '<td class="fc-week-number ' + a.widgetContentClass + '" ' + a.weekNumberStyleAttr() + "></td>" : ""
    }, renderIntroHtml: function () {
      var a = this.view;
      return a.weekNumbersVisible ? '<td class="fc-week-number" ' + a.weekNumberStyleAttr() + "></td>" : ""
    }
  }, yb = Pa.MonthView = wb.extend({
    computeRange: function (a) {
      var b, c = wb.prototype.computeRange.call(this, a);
      return this.isFixedWeeks() && (b = Math.ceil(c.end.diff(c.start, "weeks", !0)), c.end.add(6 - b, "weeks")), c
    }, setGridHeight: function (a, b) {
      b = b || "variable" === this.opt("weekMode"), b && (a *= this.rowCnt / 6), i(this.dayGrid.rowEls, a, !b)
    }, isFixedWeeks: function () {
      var a = this.opt("weekMode");
      return a ? "fixed" === a : this.opt("fixedWeekCount")
    }
  });
  Qa.basic = {"class": wb}, Qa.basicDay = {
    type: "basic",
    duration: {days: 1}
  }, Qa.basicWeek = {
    type: "basic",
    duration: {weeks: 1}
  }, Qa.month = {
    "class": yb,
    duration: {months: 1},
    defaults: {fixedWeekCount: !0}
  };
  var zb = Pa.AgendaView = ob.extend({
      timeGridClass: nb,
      timeGrid: null,
      dayGridClass: mb,
      dayGrid: null,
      axisWidth: null,
      headContainerEl: null,
      noScrollRowEls: null,
      bottomRuleEl: null,
      bottomRuleHeight: null,
      initialize: function () {
        this.timeGrid = this.instantiateTimeGrid(), this.opt("allDaySlot") && (this.dayGrid = this.instantiateDayGrid())
      },
      instantiateTimeGrid: function () {
        var a = this.timeGridClass.extend(Ab);
        return new a(this)
      },
      instantiateDayGrid: function () {
        var a = this.dayGridClass.extend(Bb);
        return new a(this)
      },
      setRange: function (a) {
        ob.prototype.setRange.call(this, a), this.timeGrid.setRange(a), this.dayGrid && this.dayGrid.setRange(a)
      },
      renderDates: function () {
        this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()), this.renderHead(), this.scrollerEl = this.el.find(".fc-time-grid-container"), this.timeGrid.setElement(this.el.find(".fc-time-grid")), this.timeGrid.renderDates(), this.bottomRuleEl = a('<hr class="fc-divider ' + this.widgetHeaderClass + '"/>').appendTo(this.timeGrid.el), this.dayGrid && (this.dayGrid.setElement(this.el.find(".fc-day-grid")), this.dayGrid.renderDates(), this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight()), this.noScrollRowEls = this.el.find(".fc-row:not(.fc-scroller *)")
      },
      renderHead: function () {
        this.headContainerEl = this.el.find(".fc-head-container").html(this.timeGrid.renderHeadHtml())
      },
      unrenderDates: function () {
        this.timeGrid.unrenderDates(), this.timeGrid.removeElement(), this.dayGrid && (this.dayGrid.unrenderDates(), this.dayGrid.removeElement())
      },
      renderSkeletonHtml: function () {
        return '<table><thead class="fc-head"><tr><td class="fc-head-container ' + this.widgetHeaderClass + '"></td></tr></thead><tbody class="fc-body"><tr><td class="' + this.widgetContentClass + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="fc-divider ' + this.widgetHeaderClass + '"/>' : "") + '<div class="fc-time-grid-container"><div class="fc-time-grid"/></div></td></tr></tbody></table>'
      },
      axisStyleAttr: function () {
        return null !== this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : ""
      },
      renderBusinessHours: function () {
        this.timeGrid.renderBusinessHours(), this.dayGrid && this.dayGrid.renderBusinessHours()
      },
      unrenderBusinessHours: function () {
        this.timeGrid.unrenderBusinessHours(), this.dayGrid && this.dayGrid.unrenderBusinessHours()
      },
      getNowIndicatorUnit: function () {
        return this.timeGrid.getNowIndicatorUnit()
      },
      renderNowIndicator: function (a) {
        this.timeGrid.renderNowIndicator(a)
      },
      unrenderNowIndicator: function () {
        this.timeGrid.unrenderNowIndicator()
      },
      updateSize: function (a) {
        this.timeGrid.updateSize(a), ob.prototype.updateSize.call(this, a)
      },
      updateWidth: function () {
        this.axisWidth = k(this.el.find(".fc-axis"))
      },
      setHeight: function (a, b) {
        var c, d;
        null === this.bottomRuleHeight && (this.bottomRuleHeight = this.bottomRuleEl.outerHeight()), this.bottomRuleEl.hide(), this.scrollerEl.css("overflow", ""), m(this.scrollerEl), f(this.noScrollRowEls), this.dayGrid && (this.dayGrid.removeSegPopover(), c = this.opt("eventLimit"), c && "number" != typeof c && (c = Cb), c && this.dayGrid.limitRows(c)), b || (d = this.computeScrollerHeight(a), l(this.scrollerEl, d) ? (e(this.noScrollRowEls, r(this.scrollerEl)), d = this.computeScrollerHeight(a), this.scrollerEl.height(d)) : (this.scrollerEl.height(d).css("overflow", "hidden"), this.bottomRuleEl.show()))
      },
      computeInitialScroll: function () {
        var a = b.duration(this.opt("scrollTime")),
          c = this.timeGrid.computeTimeTop(a);
        return c = Math.ceil(c), c && c++, c
      },
      prepareHits: function () {
        this.timeGrid.prepareHits(), this.dayGrid && this.dayGrid.prepareHits()
      },
      releaseHits: function () {
        this.timeGrid.releaseHits(), this.dayGrid && this.dayGrid.releaseHits()
      },
      queryHit: function (a, b) {
        var c = this.timeGrid.queryHit(a, b);
        return !c && this.dayGrid && (c = this.dayGrid.queryHit(a, b)), c
      },
      getHitSpan: function (a) {
        return a.component.getHitSpan(a)
      },
      getHitEl: function (a) {
        return a.component.getHitEl(a)
      },
      renderEvents: function (a) {
        var b, c, d = [], e = [], f = [];
        for (c = 0; c < a.length; c++) a[c].allDay ? d.push(a[c]) : e.push(a[c]);
        b = this.timeGrid.renderEvents(e), this.dayGrid && (f = this.dayGrid.renderEvents(d)), this.updateHeight()
      },
      getEventSegs: function () {
        return this.timeGrid.getEventSegs().concat(this.dayGrid ? this.dayGrid.getEventSegs() : [])
      },
      unrenderEvents: function () {
        this.timeGrid.unrenderEvents(), this.dayGrid && this.dayGrid.unrenderEvents()
      },
      renderDrag: function (a, b) {
        return a.start.hasTime() ? this.timeGrid.renderDrag(a, b) : this.dayGrid ? this.dayGrid.renderDrag(a, b) : void 0
      },
      unrenderDrag: function () {
        this.timeGrid.unrenderDrag(), this.dayGrid && this.dayGrid.unrenderDrag()
      },
      renderSelection: function (a) {
        a.start.hasTime() || a.end.hasTime() ? this.timeGrid.renderSelection(a) : this.dayGrid && this.dayGrid.renderSelection(a)
      },
      unrenderSelection: function () {
        this.timeGrid.unrenderSelection(), this.dayGrid && this.dayGrid.unrenderSelection()
      }
    }), Ab = {
      renderHeadIntroHtml: function () {
        var a, b = this.view;
        return b.opt("weekNumbers") ? (a = this.start.format(b.opt("smallWeekFormat")), '<th class="fc-axis fc-week-number ' + b.widgetHeaderClass + '" ' + b.axisStyleAttr() + "><span>" + Y(a) + "</span></th>") : '<th class="fc-axis ' + b.widgetHeaderClass + '" ' + b.axisStyleAttr() + "></th>"
      }, renderBgIntroHtml: function () {
        var a = this.view;
        return '<td class="fc-axis ' + a.widgetContentClass + '" ' + a.axisStyleAttr() + "></td>"
      }, renderIntroHtml: function () {
        var a = this.view;
        return '<td class="fc-axis" ' + a.axisStyleAttr() + "></td>"
      }
    }, Bb = {
      renderBgIntroHtml: function () {
        var a = this.view;
        return '<td class="fc-axis ' + a.widgetContentClass + '" ' + a.axisStyleAttr() + "><span>" + (a.opt("allDayHtml") || Y(a.opt("allDayText"))) + "</span></td>"
      }, renderIntroHtml: function () {
        var a = this.view;
        return '<td class="fc-axis" ' + a.axisStyleAttr() + "></td>"
      }
    }, Cb = 5,
    Db = [{hours: 1}, {minutes: 30}, {minutes: 15}, {seconds: 30}, {seconds: 15}];
  return Qa.agenda = {
    "class": zb,
    defaults: {
      allDaySlot: !0,
      allDayText: "all-day",
      slotDuration: "00:30:00",
      minTime: "00:00:00",
      maxTime: "24:00:00",
      slotEventOverlap: !0
    }
  }, Qa.agendaDay = {
    type: "agenda",
    duration: {days: 1}
  }, Qa.agendaWeek = {type: "agenda", duration: {weeks: 1}}, Pa
});


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
 *  Infinite Scroll
 * -----------------------------------------------
*/

/*!
   --------------------------------
   Infinite Scroll
   --------------------------------
   + https://github.com/paulirish/infinite-scroll
   + version 2.1.0
   + Copyright 2011/12 Paul Irish & Luke Shumard
   + Licensed under the MIT license

   + Documentation: http://infinite-scroll.com/
*/
;(function (e) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], e)
  } else {
    e(jQuery)
  }
})(function (e, t) {
  "use strict";
  e.infinitescroll = function (n, r, i) {
    this.element = e(i);
    if (!this._create(n, r)) {
      this.failed = true
    }
  };
  e.infinitescroll.defaults = {
    loading: {
      finished: t,
      finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
      img: "data:image/gif;base64,R0lGODlh3AATAPQeAPDy+MnQ6LW/4N3h8MzT6rjC4sTM5r/I5NHX7N7j8c7U6tvg8OLl8uXo9Ojr9b3G5MfP6Ovu9tPZ7PT1+vX2+tbb7vf4+8/W69jd7rC73vn5/O/x+K243ai02////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQECgD/ACwAAAAA3AATAAAF/6AnjmRpnmiqrmzrvnAsz3Rt33iu73zv/8CgcEj0BAScpHLJbDqf0Kh0Sq1ar9isdioItAKGw+MAKYMFhbF63CW438f0mg1R2O8EuXj/aOPtaHx7fn96goR4hmuId4qDdX95c4+RBIGCB4yAjpmQhZN0YGYGXitdZBIVGAsLoq4BBKQDswm1CQRkcG6ytrYKubq8vbfAcMK9v7q7EMO1ycrHvsW6zcTKsczNz8HZw9vG3cjTsMIYqQkCLBwHCgsMDQ4RDAYIqfYSFxDxEfz88/X38Onr16+Bp4ADCco7eC8hQYMAEe57yNCew4IVBU7EGNDiRn8Z831cGLHhSIgdFf9chIeBg7oA7gjaWUWTVQAGE3LqBDCTlc9WOHfm7PkTqNCh54rePDqB6M+lR536hCpUqs2gVZM+xbrTqtGoWqdy1emValeXKzggYBBB5y1acFNZmEvXAoN2cGfJrTv3bl69Ffj2xZt3L1+/fw3XRVw4sGDGcR0fJhxZsF3KtBTThZxZ8mLMgC3fRatCbYMNFCzwLEqLgE4NsDWs/tvqdezZf13Hvk2A9Szdu2X3pg18N+68xXn7rh1c+PLksI/Dhe6cuO3ow3NfV92bdArTqC2Ebd3A8vjf5QWfH6Bg7Nz17c2fj69+fnq+8N2Lty+fuP78/eV2X13neIcCeBRwxorbZrA1ANoCDGrgoG8RTshahQ9iSKEEzUmYIYfNWViUhheCGJyIP5E4oom7WWjgCeBFAJNv1DVV01MAdJhhjdkplWNzO/5oXI846njjVEIqR2OS2B1pE5PVscajkxhMycqLJghQSwT40PgfAl4GqNSXYdZXJn5gSkmmmmJu1aZYb14V51do+pTOCmA40AqVCIhG5IJ9PvYnhIFOxmdqhpaI6GeHCtpooisuutmg+Eg62KOMKuqoTaXgicQWoIYq6qiklmoqFV0UoeqqrLbq6quwxirrrLTWauutJ4QAACH5BAUKABwALAcABADOAAsAAAX/IPd0D2dyRCoUp/k8gpHOKtseR9yiSmGbuBykler9XLAhkbDavXTL5k2oqFqNOxzUZPU5YYZd1XsD72rZpBjbeh52mSNnMSC8lwblKZGwi+0QfIJ8CncnCoCDgoVnBHmKfByGJimPkIwtiAeBkH6ZHJaKmCeVnKKTHIihg5KNq4uoqmEtcRUtEREMBggtEr4QDrjCuRC8h7/BwxENeicSF8DKy82pyNLMOxzWygzFmdvD2L3P0dze4+Xh1Arkyepi7dfFvvTtLQkZBC0T/FX3CRgCMOBHsJ+EHYQY7OinAGECgQsB+Lu3AOK+CewcWjwxQeJBihtNGHSoQOE+iQ3//4XkwBBhRZMcUS6YSXOAwIL8PGqEaSJCiYt9SNoCmnJPAgUVLChdaoFBURN8MAzl2PQphwQLfDFd6lTowglHve6rKpbjhK7/pG5VinZP1qkiz1rl4+tr2LRwWU64cFEihwEtZgbgR1UiHaMVvxpOSwBA37kzGz9e8G+B5MIEKLutOGEsAH2ATQwYfTmuX8aETWdGPZmiZcccNSzeTCA1Sw0bdiitC7LBWgu8jQr8HRzqgpK6gX88QbrB14z/kF+ELpwB8eVQj/JkqdylAudji/+ts3039vEEfK8Vz2dlvxZKG0CmbkKDBvllRd6fCzDvBLKBDSCeffhRJEFebFk1k/Mv9jVIoIJZSeBggwUaNeB+Qk34IE0cXlihcfRxkOAJFFhwGmKlmWDiakZhUJtnLBpnWWcnKaAZcxI0piFGGLBm1mc90kajSCveeBVWKeYEoU2wqeaQi0PetoE+rr14EpVC7oAbAUHqhYExbn2XHHsVqbcVew9tx8+XJKk5AZsqqdlddGpqAKdbAYBn1pcczmSTdWvdmZ17c1b3FZ99vnTdCRFM8OEcAhLwm1NdXnWcBBSMRWmfkWZqVlsmLIiAp/o1gGV2vpS4lalGYsUOqXrddcKCmK61aZ8SjEpUpVFVoCpTj4r661Km7kBHjrDyc1RAIQAAIfkEBQoAGwAsBwAEAM4ACwAABf/gtmUCd4goQQgFKj6PYKi0yrrbc8i4ohQt12EHcal+MNSQiCP8gigdz7iCioaCIvUmZLp8QBzW0EN2vSlCuDtFKaq4RyHzQLEKZNdiQDhRDVooCwkbfm59EAmKi4SGIm+AjIsKjhsqB4mSjT2IOIOUnICeCaB/mZKFNTSRmqVpmJqklSqskq6PfYYCDwYHDC4REQwGCBLGxxIQDsHMwhAIX8bKzcENgSLGF9PU1j3Sy9zX2NrgzQziChLk1BHWxcjf7N046tvN82715czn9Pryz6Ilc4ACj4EBOCZM8KEnAYYADBRKnACAYUMFv1wotIhCEcaJCisqwJFgAUSQGyX/kCSVUUTIdKMwJlyo0oXHlhskwrTJciZHEXsgaqS4s6PJiCAr1uzYU8kBBSgnWFqpoMJMUjGtDmUwkmfVmVypakWhEKvXsS4nhLW5wNjVroJIoc05wSzTr0PtiigpYe4EC2vj4iWrFu5euWIMRBhacaVJhYQBEFjA9jHjyQ0xEABwGceGAZYjY0YBOrRLCxUp29QM+bRkx5s7ZyYgVbTqwwti2ybJ+vLtDYpycyZbYOlptxdx0kV+V7lC5iJAyyRrwYKxAdiz82ng0/jnAdMJFz0cPi104Ec1Vj9/M6F173vKL/feXv156dw11tlqeMMnv4V5Ap53GmjQQH97nFfg+IFiucfgRX5Z8KAgbUlQ4IULIlghhhdOSB6AgX0IVn8eReghen3NRIBsRgnH4l4LuEidZBjwRpt6NM5WGwoW0KSjCwX6yJSMab2GwwAPDXfaBCtWpluRTQqC5JM5oUZAjUNS+VeOLWpJEQ7VYQANW0INJSZVDFSnZphjSikfmzE5N4EEbQI1QJmnWXCmHulRp2edwDXF43txukenJwvI9xyg9Q26Z3MzGUcBYFEChZh6DVTq34AU8Iflh51Sd+CnKFYQ6mmZkhqfBKfSxZWqA9DZanWjxmhrWwi0qtCrt/43K6WqVjjpmhIqgEGvculaGKklKstAACEAACH5BAUKABwALAcABADOAAsAAAX/ICdyQmaMYyAUqPgIBiHPxNpy79kqRXH8wAPsRmDdXpAWgWdEIYm2llCHqjVHU+jjJkwqBTecwItShMXkEfNWSh8e1NGAcLgpDGlRgk7EJ/6Ae3VKfoF/fDuFhohVeDeCfXkcCQqDVQcQhn+VNDOYmpSWaoqBlUSfmowjEA+iEAEGDRGztAwGCDcXEA60tXEiCrq8vREMEBLIyRLCxMWSHMzExnbRvQ2Sy7vN0zvVtNfU2tLY3rPgLdnDvca4VQS/Cpk3ABwSLQkYAQwT/P309vcI7OvXr94jBQMJ/nskkGA/BQBRLNDncAIAiDcG6LsxAWOLiQzmeURBKWSLCQbv/1F0eDGinJUKR47YY1IEgQASKk7Yc7ACRwZm7mHweRJoz59BJUogisKCUaFMR0x4SlJBVBFTk8pZivTR0K73rN5wqlXEAq5Fy3IYgHbEzQ0nLy4QSoCjXLoom96VOJEeCosK5n4kkFfqXjl94wa+l1gvAcGICbewAOAxY8l/Ky/QhAGz4cUkGxu2HNozhwMGBnCUqUdBg9UuW9eUynqSwLHIBujePef1ZGQZXcM+OFuEBeBhi3OYgLyqcuaxbT9vLkf4SeqyWxSQpKGB2gQpm1KdWbu72rPRzR9Ne2Nu9Kzr/1Jqj0yD/fvqP4aXOt5sW/5qsXXVcv1Nsp8IBUAmgswGF3llGgeU1YVXXKTN1FlhWFXW3gIE+DVChApysACHHo7Q4A35lLichh+ROBmLKAzgYmYEYDAhCgxKGOOMn4WR4kkDaoBBOxJtdNKQxFmg5JIWIBnQc07GaORfUY4AEkdV6jHlCEISSZ5yTXpp1pbGZbkWmcuZmQCaE6iJ0FhjMaDjTMsgZaNEHFRAQVp3bqXnZED1qYcECOz5V6BhSWCoVJQIKuKQi2KFKEkEFAqoAo7uYSmO3jk61wUUMKmknJ4SGimBmAa0qVQBhAAAIfkEBQoAGwAsBwAEAM4ACwAABf/gJm5FmRlEqhJC+bywgK5pO4rHI0D3pii22+Mg6/0Ej96weCMAk7cDkXf7lZTTnrMl7eaYoy10JN0ZFdco0XAuvKI6qkgVFJXYNwjkIBcNBgR8TQoGfRsJCRuCYYQQiI+ICosiCoGOkIiKfSl8mJkHZ4U9kZMbKaI3pKGXmJKrngmug4WwkhA0lrCBWgYFCCMQFwoQDRHGxwwGCBLMzRLEx8iGzMMO0cYNeCMKzBDW19lnF9DXDIY/48Xg093f0Q3s1dcR8OLe8+Y91OTv5wrj7o7B+7VNQqABIoRVCMBggsOHE36kSoCBIcSH3EbFangxogJYFi8CkJhqQciLJEf/LDDJEeJIBT0GsOwYUYJGBS0fjpQAMidGmyVP6sx4Y6VQhzs9VUwkwqaCCh0tmKoFtSMDmBOf9phg4SrVrROuasRQAaxXpVUhdsU6IsECZlvX3kwLUWzRt0BHOLTbNlbZG3vZinArge5Dvn7wbqtQkSYAAgtKmnSsYKVKo2AfW048uaPmG386i4Q8EQMBAIAnfB7xBxBqvapJ9zX9WgRS2YMpnvYMGdPK3aMjt/3dUcNI4blpj7iwkMFWDXDvSmgAlijrt9RTR78+PS6z1uAJZIe93Q8g5zcsWCi/4Y+C8bah5zUv3vv89uft30QP23punGCx5954oBBwnwYaNCDY/wYrsYeggnM9B2Fpf8GG2CEUVWhbWAtGouEGDy7Y4IEJVrbSiXghqGKIo7z1IVcXIkKWWR361QOLWWnIhwERpLaaCCee5iMBGJQmJGyPFTnbkfHVZGRtIGrg5HALEJAZbu39BuUEUmq1JJQIPtZilY5hGeSWsSk52G9XqsmgljdIcABytq13HyIM6RcUA+r1qZ4EBF3WHWB29tBgAzRhEGhig8KmqKFv8SeCeo+mgsF7YFXa1qWSbkDpom/mqR1PmHCqJ3fwNRVXjC7S6CZhFVCQ2lWvZiirhQq42SACt25IK2hv8TprriUV1usGgeka7LFcNmCldMLi6qZMgFLgpw16Cipb7bC1knXsBiEAACH5BAUKABsALAcABADOAAsAAAX/4FZsJPkUmUGsLCEUTywXglFuSg7fW1xAvNWLF6sFFcPb42C8EZCj24EJdCp2yoegWsolS0Uu6fmamg8n8YYcLU2bXSiRaXMGvqV6/KAeJAh8VgZqCX+BexCFioWAYgqNi4qAR4ORhRuHY408jAeUhAmYYiuVlpiflqGZa5CWkzc5fKmbbhIpsAoQDRG8vQwQCBLCwxK6vb5qwhfGxxENahvCEA7NzskSy7vNzzzK09W/PNHF1NvX2dXcN8K55cfh69Luveol3vO8zwi4Yhj+AQwmCBw4IYclDAAJDlQggVOChAoLKkgFkSCAHDwWLKhIEOONARsDKryogFPIiAUb/95gJNIiw4wnI778GFPhzBKFOAq8qLJEhQpiNArjMcHCmlTCUDIouTKBhApELSxFWiGiVKY4E2CAekPgUphDu0742nRrVLJZnyrFSqKQ2ohoSYAMW6IoDpNJ4bLdILTnAj8KUF7UeENjAKuDyxIgOuGiOI0EBBMgLNew5AUrDTMGsFixwBIaNCQuAXJB57qNJ2OWm2Aj4skwCQCIyNkhhtMkdsIuodE0AN4LJDRgfLPtn5YDLdBlraAByuUbBgxQwICxMOnYpVOPej074OFdlfc0TqC62OIbcppHjV4o+LrieWhfT8JC/I/T6W8oCl29vQ0XjLdBaA3s1RcPBO7lFvpX8BVoG4O5jTXRQRDuJ6FDTzEWF1/BCZhgbyAKE9qICYLloQYOFtahVRsWYlZ4KQJHlwHS/IYaZ6sZd9tmu5HQm2xi1UaTbzxYwJk/wBF5g5EEYOBZeEfGZmNdFyFZmZIR4jikbLThlh5kUUVJGmRT7sekkziRWUIACABk3T4qCsedgO4xhgGcY7q5pHJ4klBBTQRJ0CeHcoYHHUh6wgfdn9uJdSdMiebGJ0zUPTcoS286FCkrZxnYoYYKWLkBowhQoBeaOlZAgVhLidrXqg2GiqpQpZ4apwSwRtjqrB3muoF9BboaXKmshlqWqsWiGt2wphJkQbAU5hoCACH5BAUKABsALAcABADOAAsAAAX/oGFw2WZuT5oZROsSQnGaKjRvilI893MItlNOJ5v5gDcFrHhKIWcEYu/xFEqNv6B1N62aclysF7fsZYe5aOx2yL5aAUGSaT1oTYMBwQ5VGCAJgYIJCnx1gIOBhXdwiIl7d0p2iYGQUAQBjoOFSQR/lIQHnZ+Ue6OagqYzSqSJi5eTpTxGcjcSChANEbu8DBAIEsHBChe5vL13G7fFuscRDcnKuM3H0La3EA7Oz8kKEsXazr7Cw9/Gztar5uHHvte47MjktznZ2w0G1+D3BgirAqJmJMAQgMGEgwgn5Ei0gKDBhBMALGRYEOJBb5QcWlQo4cbAihZz3GgIMqFEBSM1/4ZEOWPAgpIIJXYU+PIhRG8ja1qU6VHlzZknJNQ6UanCjQkWCIGSUGEjAwVLjc44+DTqUQtPPS5gejUrTa5TJ3g9sWCr1BNUWZI161StiQUDmLYdGfesibQ3XMq1OPYthrwuA2yU2LBs2cBHIypYQPPlYAKFD5cVvNPtW8eVGbdcQADATsiNO4cFAPkvHpedPzc8kUcPgNGgZ5RNDZG05reoE9s2vSEP79MEGiQGy1qP8LA4ZcdtsJE48ONoLTBtTV0B9LsTnPceoIDBDQvS7W7vfjVY3q3eZ4A339J4eaAmKqU/sV58HvJh2RcnIBsDUw0ABqhBA5aV5V9XUFGiHfVeAiWwoFgJJrIXRH1tEMiDFV4oHoAEGlaWhgIGSGBO2nFomYY3mKjVglidaNYJGJDkWW2xxTfbjCbVaOGNqoX2GloR8ZeTaECS9pthRGJH2g0b3Agbk6hNANtteHD2GJUucfajCQBy5OOTQ25ZgUPvaVVQmbKh9510/qQpwXx3SQdfk8tZJOd5b6JJFplT3ZnmmX3qd5l1eg5q00HrtUkUn0AKaiGjClSAgKLYZcgWXwocGRcCFGCKwSB6ceqphwmYRUFYT/1WKlOdUpipmxW0mlCqHjYkAaeoZlqrqZ4qd+upQKaapn/AmgAegZ8KUtYtFAQQAgAh+QQFCgAbACwHAAQAzgALAAAF/+C2PUcmiCiZGUTrEkKBis8jQEquKwU5HyXIbEPgyX7BYa5wTNmEMwWsSXsqFbEh8DYs9mrgGjdK6GkPY5GOeU6ryz7UFopSQEzygOGhJBjoIgMDBAcBM0V/CYqLCQqFOwobiYyKjn2TlI6GKC2YjJZknouaZAcQlJUHl6eooJwKooobqoewrJSEmyKdt59NhRKFMxLEEA4RyMkMEAjDEhfGycqAG8TQx9IRDRDE3d3R2ctD1RLg0ttKEnbY5wZD3+zJ6M7X2RHi9Oby7u/r9g38UFjTh2xZJBEBMDAboogAgwkQI07IMUORwocSJwCgWDFBAIwZOaJIsOBjRogKJP8wTODw5ESVHVtm3AhzpEeQElOuNDlTZ0ycEUWKWFASqEahGwYUPbnxoAgEdlYSqDBkgoUNClAlIHbSAoOsqCRQnQHxq1axVb06FWFxLIqyaze0Tft1JVqyE+pWXMD1pF6bYl3+HTqAWNW8cRUFzmih0ZAAB2oGKukSAAGGRHWJgLiR6AylBLpuHKKUMlMCngMpDSAa9QIUggZVVvDaJobLeC3XZpvgNgCmtPcuwP3WgmXSq4do0DC6o2/guzcseECtUoO0hmcsGKDgOt7ssBd07wqesAIGZC1YIBa7PQHvb1+SFo+++HrJSQfB33xfav3i5eX3Hnb4CTJgegEq8tH/YQEOcIJzbm2G2EoYRLgBXFpVmFYDcREV4HIcnmUhiGBRouEMJGJGzHIspqgdXxK0yCKHRNXoIX4uorCdTyjkyNtdPWrA4Up82EbAbzMRxxZRR54WXVLDIRmRcag5d2R6ugl3ZXzNhTecchpMhIGVAKAYpgJjjsSklBEd99maZoo535ZvdamjBEpusJyctg3h4X8XqodBMx0tiNeg/oGJaKGABpogS40KSqiaEgBqlQWLUtqoVQnytekEjzo0hHqhRorppOZt2p923M2AAV+oBtpAnnPNoB6HaU6mAAIU+IXmi3j2mtFXuUoHKwXpzVrsjcgGOauKEjQrwq157hitGq2NoWmjh7z6Wmxb0m5w66+2VRAuXN/yFUAIACH5BAUKABsALAcABADOAAsAAAX/4CZuRiaM45MZqBgIRbs9AqTcuFLE7VHLOh7KB5ERdjJaEaU4ClO/lgKWjKKcMiJQ8KgumcieVdQMD8cbBeuAkkC6LYLhOxoQ2PF5Ys9PKPBMen17f0CCg4VSh32JV4t8jSNqEIOEgJKPlkYBlJWRInKdiJdkmQlvKAsLBxdABA4RsbIMBggtEhcQsLKxDBC2TAS6vLENdJLDxMZAubu8vjIbzcQRtMzJz79S08oQEt/guNiyy7fcvMbh4OezdAvGrakLAQwyABsELQkY9BP+//ckyPDD4J9BfAMh1GsBoImMeQUN+lMgUJ9CiRMa5msxoB9Gh/o8GmxYMZXIgxtR/yQ46S/gQAURR0pDwYDfywoyLPip5AdnCwsMFPBU4BPFhKBDi444quCmDKZOfwZ9KEGpCKgcN1jdALSpPqIYsabS+nSqvqplvYqQYAeDPgwKwjaMtiDl0oaqUAyo+3TuWwUAMPpVCfee0cEjVBGQq2ABx7oTWmQk4FglZMGN9fGVDMCuiH2AOVOu/PmyxM630gwM0CCn6q8LjVJ8GXvpa5Uwn95OTC/nNxkda1/dLSK475IjCD6dHbK1ZOa4hXP9DXs5chJ00UpVm5xo2qRpoxptwF2E4/IbJpB/SDz9+q9b1aNfQH08+p4a8uvX8B53fLP+ycAfemjsRUBgp1H20K+BghHgVgt1GXZXZpZ5lt4ECjxYR4ScUWiShEtZqBiIInRGWnERNnjiBglw+JyGnxUmGowsyiiZg189lNtPGACjV2+S9UjbU0JWF6SPvEk3QZEqsZYTk3UAaRSUnznJI5LmESCdBVSyaOWUWLK4I5gDUYVeV1T9l+FZClCAUVA09uSmRHBCKAECFEhW51ht6rnmWBXkaR+NjuHpJ40D3DmnQXt2F+ihZxlqVKOfQRACACH5BAUKABwALAcABADOAAsAAAX/ICdyUCkUo/g8mUG8MCGkKgspeC6j6XEIEBpBUeCNfECaglBcOVfJFK7YQwZHQ6JRZBUqTrSuVEuD3nI45pYjFuWKvjjSkCoRaBUMWxkwBGgJCXspQ36Bh4EEB0oKhoiBgyNLjo8Ki4QElIiWfJqHnISNEI+Ql5J9o6SgkqKkgqYihamPkW6oNBgSfiMMDQkGCBLCwxIQDhHIyQwQCGMKxsnKVyPCF9DREQ3MxMPX0cu4wt7J2uHWx9jlKd3o39MiuefYEcvNkuLt5O8c1ePI2tyELXGQwoGDAQf+iEC2xByDCRAjTlAgIUWCBRgCPJQ4AQBFXAs0coT40WLIjRxL/47AcHLkxIomRXL0CHPERZkpa4q4iVKiyp0tR/7kwHMkTUBBJR5dOCEBAVcKKtCAyOHpowXCpk7goABqBZdcvWploACpBKkpIJI1q5OD2rIWE0R1uTZu1LFwbWL9OlKuWb4c6+o9i3dEgw0RCGDUG9KlRw56gDY2qmCByZBaASi+TACA0TucAaTteCcy0ZuOK3N2vJlx58+LRQyY3Xm0ZsgjZg+oPQLi7dUcNXi0LOJw1pgNtB7XG6CBy+U75SYfPTSQAgZTNUDnQHt67wnbZyvwLgKiMN3oCZB3C76tdewpLFgIP2C88rbi4Y+QT3+8S5USMICZXWj1pkEDeUU3lOYGB3alSoEiMIjgX4WlgNF2EibIwQIXauWXSRg2SAOHIU5IIIMoZkhhWiJaiFVbKo6AQEgQXrTAazO1JhkBrBG3Y2Y6EsUhaGn95hprSN0oWpFE7rhkeaQBchGOEWnwEmc0uKWZj0LeuNV3W4Y2lZHFlQCSRjTIl8uZ+kG5HU/3sRlnTG2ytyadytnD3HrmuRcSn+0h1dycexIK1KCjYaCnjCCVqOFFJTZ5GkUUjESWaUIKU2lgCmAKKQIUjHapXRKE+t2og1VgankNYnohqKJ2CmKplso6GKz7WYCgqxeuyoF8u9IQAgA7",
      msg: null,
      msgText: "<em>Loading the next set of posts...</em>",
      selector: null,
      speed: "fast",
      start: t
    },
    state: {
      isDuringAjax: false,
      isInvalidPage: false,
      isDestroyed: false,
      isDone: false,
      isPaused: false,
      isBeyondMaxPage: false,
      currPage: 1
    },
    debug: false,
    behavior: t,
    binder: e(window),
    nextSelector: "div.navigation a:first",
    navSelector: "div.navigation",
    contentSelector: null,
    extraScrollPx: 150,
    itemSelector: "div.post",
    animate: false,
    pathParse: t,
    dataType: "html",
    appendCallback: true,
    bufferPx: 40,
    errorCallback: function () {
    },
    infid: 0,
    pixelsFromNavToBottom: t,
    path: t,
    prefill: false,
    maxPage: t
  };
  e.infinitescroll.prototype = {
    _binding: function (n) {
      var r = this, i = r.options;
      i.v = "2.0b2.120520";
      if (!!i.behavior && this["_binding_" + i.behavior] !== t) {
        this["_binding_" + i.behavior].call(this);
        return
      }
      if (n !== "bind" && n !== "unbind") {
        this._debug("Binding value  " + n + " not valid");
        return false
      }
      if (n === "unbind") {
        this.options.binder.unbind("smartscroll.infscr." + r.options.infid)
      } else {
        this.options.binder[n]("smartscroll.infscr." + r.options.infid, function () {
          r.scroll()
        })
      }
      this._debug("Binding", n)
    }, _create: function (r, i) {
      var s = e.extend(true, {}, e.infinitescroll.defaults, r);
      this.options = s;
      var o = e(window);
      var u = this;
      if (!u._validate(r)) {
        return false
      }
      var a = e(s.nextSelector).attr("href");
      if (!a) {
        this._debug("Navigation selector not found");
        return false
      }
      s.path = s.path || this._determinepath(a);
      s.contentSelector = s.contentSelector || this.element;
      s.loading.selector = s.loading.selector || s.contentSelector;
      s.loading.msg = s.loading.msg || e('<div id="infscr-loading"><img alt="Loading..." src="' + s.loading.img + '" /><div>' + s.loading.msgText + "</div></div>");
      (new Image).src = s.loading.img;
      if (s.pixelsFromNavToBottom === t) {
        s.pixelsFromNavToBottom = e(document).height() - e(s.navSelector).offset().top;
        this._debug("pixelsFromNavToBottom: " + s.pixelsFromNavToBottom)
      }
      var f = this;
      s.loading.start = s.loading.start || function () {
        e(s.navSelector).hide();
        s.loading.msg.appendTo(s.loading.selector).show(s.loading.speed, e.proxy(function () {
          this.beginAjax(s)
        }, f))
      };
      s.loading.finished = s.loading.finished || function () {
        if (!s.state.isBeyondMaxPage) s.loading.msg.fadeOut(s.loading.speed)
      };
      s.callback = function (n, r, u) {
        if (!!s.behavior && n["_callback_" + s.behavior] !== t) {
          n["_callback_" + s.behavior].call(e(s.contentSelector)[0], r, u)
        }
        if (i) {
          i.call(e(s.contentSelector)[0], r, s, u)
        }
        if (s.prefill) {
          o.bind("resize.infinite-scroll", n._prefill)
        }
      };
      if (r.debug) {
        if (Function.prototype.bind && (typeof console === "object" || typeof console === "function") && typeof console.log === "object") {
          ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function (e) {
            console[e] = this.call(console[e], console)
          }, Function.prototype.bind)
        }
      }
      this._setup();
      if (s.prefill) {
        this._prefill()
      }
      return true
    }, _prefill: function () {
      function i() {
        return e(n.options.contentSelector).height() <= r.height()
      }

      var n = this;
      var r = e(window);
      this._prefill = function () {
        if (i()) {
          n.scroll()
        }
        r.bind("resize.infinite-scroll", function () {
          if (i()) {
            r.unbind("resize.infinite-scroll");
            n.scroll()
          }
        })
      };
      this._prefill()
    }, _debug: function () {
      if (true !== this.options.debug) {
        return
      }
      if (typeof console !== "undefined" && typeof console.log === "function") {
        if (Array.prototype.slice.call(arguments).length === 1 && typeof Array.prototype.slice.call(arguments)[0] === "string") {
          console.log(Array.prototype.slice.call(arguments).toString())
        } else {
          console.log(Array.prototype.slice.call(arguments))
        }
      } else if (!Function.prototype.bind && typeof console !== "undefined" && typeof console.log === "object") {
        Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments))
      }
    }, _determinepath: function (n) {
      var r = this.options;
      if (!!r.behavior && this["_determinepath_" + r.behavior] !== t) {
        return this["_determinepath_" + r.behavior].call(this, n)
      }
      if (!!r.pathParse) {
        this._debug("pathParse manual");
        return r.pathParse(n, this.options.state.currPage + 1)
      } else if (n.match(/^(.*?)\b2\b(.*?$)/)) {
        n = n.match(/^(.*?)\b2\b(.*?$)/).slice(1)
      } else if (n.match(/^(.*?)2(.*?$)/)) {
        if (n.match(/^(.*?page=)2(\/.*|$)/)) {
          n = n.match(/^(.*?page=)2(\/.*|$)/).slice(1);
          return n
        }
        n = n.match(/^(.*?)2(.*?$)/).slice(1)
      } else {
        if (n.match(/^(.*?page=)1(\/.*|$)/)) {
          n = n.match(/^(.*?page=)1(\/.*|$)/).slice(1);
          return n
        } else {
          this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com.");
          r.state.isInvalidPage = true
        }
      }
      this._debug("determinePath", n);
      return n
    }, _error: function (n) {
      var r = this.options;
      if (!!r.behavior && this["_error_" + r.behavior] !== t) {
        this["_error_" + r.behavior].call(this, n);
        return
      }
      if (n !== "destroy" && n !== "end") {
        n = "unknown"
      }
      this._debug("Error", n);
      if (n === "end" || r.state.isBeyondMaxPage) {
        this._showdonemsg()
      }
      r.state.isDone = true;
      r.state.currPage = 1;
      r.state.isPaused = false;
      r.state.isBeyondMaxPage = false;
      this._binding("unbind")
    }, _loadcallback: function (r, i, s) {
      var o = this.options, u = this.options.callback,
        a = o.state.isDone ? "done" : !o.appendCallback ? "no-append" : "append",
        f;
      if (!!o.behavior && this["_loadcallback_" + o.behavior] !== t) {
        this["_loadcallback_" + o.behavior].call(this, r, i);
        return
      }
      switch (a) {
        case"done":
          this._showdonemsg();
          return false;
        case"no-append":
          if (o.dataType === "html") {
            i = "<div>" + i + "</div>";
            i = e(i).find(o.itemSelector)
          }
          if (i.length === 0) {
            return this._error("end")
          }
          break;
        case"append":
          var l = r.children();
          if (l.length === 0) {
            return this._error("end")
          }
          f = document.createDocumentFragment();
          while (r[0].firstChild) {
            f.appendChild(r[0].firstChild)
          }
          this._debug("contentSelector", e(o.contentSelector)[0]);
          e(o.contentSelector)[0].appendChild(f);
          i = l.get();
          break
      }
      o.loading.finished.call(e(o.contentSelector)[0], o);
      if (o.animate) {
        var c = e(window).scrollTop() + e(o.loading.msg).height() + o.extraScrollPx + "px";
        e("html,body").animate({scrollTop: c}, 800, function () {
          o.state.isDuringAjax = false
        })
      }
      if (!o.animate) {
        o.state.isDuringAjax = false
      }
      u(this, i, s);
      if (o.prefill) {
        this._prefill()
      }
    }, _nearbottom: function () {
      var r = this.options,
        i = 0 + e(document).height() - r.binder.scrollTop() - e(window).height();
      if (!!r.behavior && this["_nearbottom_" + r.behavior] !== t) {
        return this["_nearbottom_" + r.behavior].call(this)
      }
      this._debug("math:", i, r.pixelsFromNavToBottom);
      return i - r.bufferPx < r.pixelsFromNavToBottom
    }, _pausing: function (n) {
      var r = this.options;
      if (!!r.behavior && this["_pausing_" + r.behavior] !== t) {
        this["_pausing_" + r.behavior].call(this, n);
        return
      }
      if (n !== "pause" && n !== "resume" && n !== null) {
        this._debug("Invalid argument. Toggling pause value instead")
      }
      n = n && (n === "pause" || n === "resume") ? n : "toggle";
      switch (n) {
        case"pause":
          r.state.isPaused = true;
          break;
        case"resume":
          r.state.isPaused = false;
          break;
        case"toggle":
          r.state.isPaused = !r.state.isPaused;
          break
      }
      this._debug("Paused", r.state.isPaused);
      return false
    }, _setup: function () {
      var n = this.options;
      if (!!n.behavior && this["_setup_" + n.behavior] !== t) {
        this["_setup_" + n.behavior].call(this);
        return
      }
      this._binding("bind");
      return false
    }, _showdonemsg: function () {
      var r = this.options;
      if (!!r.behavior && this["_showdonemsg_" + r.behavior] !== t) {
        this["_showdonemsg_" + r.behavior].call(this);
        return
      }
      r.loading.msg.find("img").hide().parent().find("div").html(r.loading.finishedMsg).animate({opacity: 1}, 2e3, function () {
        e(this).parent().fadeOut(r.loading.speed)
      });
      r.errorCallback.call(e(r.contentSelector)[0], "done")
    }, _validate: function (n) {
      for (var r in n) {
        if (r.indexOf && r.indexOf("Selector") > -1 && e(n[r]).length === 0) {
          this._debug("Your " + r + " found no elements.");
          return false
        }
      }
      return true
    }, bind: function () {
      this._binding("bind")
    }, destroy: function () {
      this.options.state.isDestroyed = true;
      this.options.loading.finished();
      return this._error("destroy")
    }, pause: function () {
      this._pausing("pause")
    }, resume: function () {
      this._pausing("resume")
    }, beginAjax: function (r) {
      var i = this, s = r.path, o, u, a, f;
      r.state.currPage++;
      if (r.maxPage !== t && r.state.currPage > r.maxPage) {
        r.state.isBeyondMaxPage = true;
        this.destroy();
        return
      }
      o = e(r.contentSelector).is("table, tbody") ? e("<tbody/>") : e("<div/>");
      u = typeof s === "function" ? s(r.state.currPage) : s.join(r.state.currPage);
      i._debug("heading into ajax", u);
      a = r.dataType === "html" || r.dataType === "json" ? r.dataType : "html+callback";
      if (r.appendCallback && r.dataType === "html") {
        a += "+callback"
      }
      switch (a) {
        case"html+callback":
          i._debug("Using HTML via .load() method");
          o.load(u + " " + r.itemSelector, t, function (t) {
            i._loadcallback(o, t, u)
          });
          break;
        case"html":
          i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
          e.ajax({
            url: u, dataType: r.dataType, complete: function (t, n) {
              f = typeof t.isResolved !== "undefined" ? t.isResolved() : n === "success" || n === "notmodified";
              if (f) {
                i._loadcallback(o, t.responseText, u)
              } else {
                i._error("end")
              }
            }
          });
          break;
        case"json":
          i._debug("Using " + a.toUpperCase() + " via $.ajax() method");
          e.ajax({
            dataType: "json",
            type: "GET",
            url: u,
            success: function (e, n, s) {
              f = typeof s.isResolved !== "undefined" ? s.isResolved() : n === "success" || n === "notmodified";
              if (r.appendCallback) {
                if (r.template !== t) {
                  var a = r.template(e);
                  o.append(a);
                  if (f) {
                    i._loadcallback(o, a)
                  } else {
                    i._error("end")
                  }
                } else {
                  i._debug("template must be defined.");
                  i._error("end")
                }
              } else {
                if (f) {
                  i._loadcallback(o, e, u)
                } else {
                  i._error("end")
                }
              }
            },
            error: function () {
              i._debug("JSON ajax request failed.");
              i._error("end")
            }
          });
          break
      }
    }, retrieve: function (r) {
      r = r || null;
      var i = this, s = i.options;
      if (!!s.behavior && this["retrieve_" + s.behavior] !== t) {
        this["retrieve_" + s.behavior].call(this, r);
        return
      }
      if (s.state.isDestroyed) {
        this._debug("Instance is destroyed");
        return false
      }
      s.state.isDuringAjax = true;
      s.loading.start.call(e(s.contentSelector)[0], s)
    }, scroll: function () {
      var n = this.options, r = n.state;
      if (!!n.behavior && this["scroll_" + n.behavior] !== t) {
        this["scroll_" + n.behavior].call(this);
        return
      }
      if (r.isDuringAjax || r.isInvalidPage || r.isDone || r.isDestroyed || r.isPaused) {
        return
      }
      if (!this._nearbottom()) {
        return
      }
      this.retrieve()
    }, toggle: function () {
      this._pausing()
    }, unbind: function () {
      this._binding("unbind")
    }, update: function (n) {
      if (e.isPlainObject(n)) {
        this.options = e.extend(true, this.options, n)
      }
    }
  };
  e.fn.infinitescroll = function (n, r) {
    var i = typeof n;
    switch (i) {
      case"string":
        var s = Array.prototype.slice.call(arguments, 1);
        this.each(function () {
          var t = e.data(this, "infinitescroll");
          if (!t) {
            return false
          }
          if (!e.isFunction(t[n]) || n.charAt(0) === "_") {
            return false
          }
          t[n].apply(t, s)
        });
        break;
      case"object":
        this.each(function () {
          var t = e.data(this, "infinitescroll");
          if (t) {
            t.update(n)
          } else {
            t = new e.infinitescroll(n, r, this);
            if (!t.failed) {
              e.data(this, "infinitescroll", t)
            }
          }
        });
        break
    }
    return this
  };
  var n = e.event, r;
  n.special.smartscroll = {
    setup: function () {
      e(this).bind("scroll", n.special.smartscroll.handler)
    }, teardown: function () {
      e(this).unbind("scroll", n.special.smartscroll.handler)
    }, handler: function (t, n) {
      var i = this, s = arguments;
      t.type = "smartscroll";
      if (r) {
        clearTimeout(r)
      }
      r = setTimeout(function () {
        e(i).trigger("smartscroll", s)
      }, n === "execAsap" ? 0 : 100)
    }
  };
  e.fn.smartscroll = function (e) {
    return e ? this.bind("smartscroll", e) : this.trigger("smartscroll", ["execAsap"])
  }
});

/*
	--------------------------------
	Infinite Scroll Behavior
	Manual / Twitter-style
	--------------------------------

*/
$.extend($.infinitescroll.prototype, {
  _setup_twitter: function () {
    var t = this.options, e = this;
    $(t.nextSelector).click(function (t) {
      1 != t.which || t.metaKey || t.shiftKey || (t.preventDefault(), e.retrieve())
    }), e.options.loading.start = function (t) {
      t.loading.msg.appendTo(t.loading.selector).show(t.loading.speed, function () {
        e.beginAjax(t)
      })
    }
  }, _showdonemsg_twitter: function () {
    var t = this.options;
    t.loading.msg.find("img").hide().parent().find("div").html(t.loading.finishedMsg).animate({opacity: 1}, 2e3, function () {
      $(this).parent().fadeOut("normal")
    }), $(t.navSelector).fadeOut("normal"), t.errorCallback.call($(t.contentSelector)[0], "done")
  }
});


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

/*
 *  Vide jQuery plugin for video backgrounds
 * -----------------------------------------------
*/
/*
Vide
Easy as hell jQuery plugin for video backgrounds.
https://github.com/VodkaBears/Vide
*/

!function (e, t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : e.jQuery)
}(this, function (e) {
  "use strict";

  function t(e) {
    var t, o, i, r, s, n, a, p = {};
    for (s = e.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",").split(","), a = 0, n = s.length; n > a && (o = s[a], -1 === o.search(/^(http|https|ftp):\/\//) && -1 !== o.search(":")); a++) t = o.indexOf(":"), i = o.substring(0, t), r = o.substring(t + 1), r || (r = void 0), "string" == typeof r && (r = "true" === r || ("false" === r ? !1 : r)), "string" == typeof r && (r = isNaN(r) ? r : +r), p[i] = r;
    return null == i && null == r ? e : p
  }

  function o(e) {
    e = "" + e;
    var t, o, i, r = e.split(/\s+/), s = "50%", n = "50%";
    for (i = 0, t = r.length; t > i; i++) o = r[i], "left" === o ? s = "0%" : "right" === o ? s = "100%" : "top" === o ? n = "0%" : "bottom" === o ? n = "100%" : "center" === o ? 0 === i ? s = "50%" : n = "50%" : 0 === i ? s = o : n = o;
    return {x: s, y: n}
  }

  function i(t, o) {
    var i = function () {
      o(this.src)
    };
    e('<img src="' + t + '.gif">').load(i), e('<img src="' + t + '.jpg">').load(i), e('<img src="' + t + '.jpeg">').load(i), e('<img src="' + t + '.png">').load(i)
  }

  function r(o, i, r) {
    if (this.$element = e(o), "string" == typeof i && (i = t(i)), r ? "string" == typeof r && (r = t(r)) : r = {}, "string" == typeof i) i = i.replace(/\.\w*$/, ""); else if ("object" == typeof i) for (var s in i) i.hasOwnProperty(s) && (i[s] = i[s].replace(/\.\w*$/, ""));
    this.settings = e.extend({}, n, r), this.path = i;
    try {
      this.init()
    } catch (p) {
      if (p.message !== a) throw p
    }
  }

  var s = "vide", n = {
    volume: 1,
    playbackRate: 1,
    muted: !0,
    loop: !0,
    autoplay: !0,
    position: "50% 50%",
    posterType: "detect",
    resizing: !0,
    bgColor: "transparent",
    className: ""
  }, a = "Not implemented";
  r.prototype.init = function () {
    var t, r, n = this, p = n.path, c = p, d = "", u = n.$element,
      l = n.settings, g = o(l.position), f = l.posterType;
    r = n.$wrapper = e("<div>").addClass(l.className).css({
      position: "absolute",
      "z-index": -1,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      overflow: "hidden",
      "-webkit-background-size": "cover",
      "-moz-background-size": "cover",
      "-o-background-size": "cover",
      "background-size": "cover",
      "background-color": l.bgColor,
      "background-repeat": "no-repeat",
      "background-position": g.x + " " + g.y
    }), "object" == typeof p && (p.poster ? c = p.poster : p.mp4 ? c = p.mp4 : p.webm ? c = p.webm : p.ogv && (c = p.ogv)), "detect" === f ? i(c, function (e) {
      r.css("background-image", "url(" + e + ")")
    }) : "none" !== f && r.css("background-image", "url(" + c + "." + f + ")"), "static" === u.css("position") && u.css("position", "relative"), u.prepend(r), "object" == typeof p ? (p.mp4 && (d += '<source src="' + p.mp4 + '.mp4" type="video/mp4">'), p.webm && (d += '<source src="' + p.webm + '.webm" type="video/webm">'), p.ogv && (d += '<source src="' + p.ogv + '.ogv" type="video/ogg">'), t = n.$video = e("<video>" + d + "</video>")) : t = n.$video = e('<video><source src="' + p + '.mp4" type="video/mp4"><source src="' + p + '.webm" type="video/webm"><source src="' + p + '.ogv" type="video/ogg"></video>');
    try {
      t.prop({
        autoplay: l.autoplay,
        loop: l.loop,
        volume: l.volume,
        muted: l.muted,
        defaultMuted: l.muted,
        playbackRate: l.playbackRate,
        defaultPlaybackRate: l.playbackRate
      })
    } catch (h) {
      throw new Error(a)
    }
    t.css({
      margin: "auto",
      position: "absolute",
      "z-index": -1,
      top: g.y,
      left: g.x,
      "-webkit-transform": "translate(-" + g.x + ", -" + g.y + ")",
      "-ms-transform": "translate(-" + g.x + ", -" + g.y + ")",
      "-moz-transform": "translate(-" + g.x + ", -" + g.y + ")",
      transform: "translate(-" + g.x + ", -" + g.y + ")",
      visibility: "hidden",
      opacity: 0
    }).one("canplaythrough." + s, function () {
      n.resize()
    }).one("playing." + s, function () {
      t.css({
        visibility: "visible",
        opacity: 1
      }), r.css("background-image", "none")
    }), u.on("resize." + s, function () {
      l.resizing && n.resize()
    }), r.append(t)
  }, r.prototype.getVideoObject = function () {
    return this.$video[0]
  }, r.prototype.resize = function () {
    if (this.$video) {
      var e = this.$wrapper, t = this.$video, o = t[0], i = o.videoHeight,
        r = o.videoWidth, s = e.height(), n = e.width();
      n / r > s / i ? t.css({
        width: n + 2,
        height: "auto"
      }) : t.css({width: "auto", height: s + 2})
    }
  }, r.prototype.destroy = function () {
    delete e[s].lookup[this.index], this.$video && this.$video.off(s), this.$element.off(s).removeData(s), this.$wrapper.remove()
  }, e[s] = {lookup: []}, e.fn[s] = function (t, o) {
    var i;
    return this.each(function () {
      i = e.data(this, s), i && i.destroy(), i = new r(this, t, o), i.index = e[s].lookup.push(i) - 1, e.data(this, s, i)
    }), this
  }, e(document).ready(function () {
    var t = e(window);
    t.on("resize." + s, function () {
      for (var t, o = e[s].lookup.length, i = 0; o > i; i++) t = e[s].lookup[i], t && t.settings.resizing && t.resize()
    }), t.on("unload." + s, function () {
      return !1
    }), e(document).find("[data-" + s + "-bg]").each(function (t, o) {
      var i = e(o), r = i.data(s + "-options"), n = i.data(s + "-bg");
      i[s](n, r)
    })
  })
});


/*!
 * jquery-timepicker v1.8.10 - A jQuery timepicker plugin inspired by Google Calendar. It supports both mouse and keyboard navigation.
 * Copyright (c) 2016 Jon Thornton - http://jonthornton.github.com/jquery-timepicker/
 * License: MIT
 */

!function (a) {
  "object" == typeof exports && exports && "object" == typeof module && module && module.exports === exports ? a(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function (a) {
  function b(a) {
    var b = a[0];
    return b.offsetWidth > 0 && b.offsetHeight > 0
  }

  function c(b) {
    if (b.minTime && (b.minTime = u(b.minTime)), b.maxTime && (b.maxTime = u(b.maxTime)), b.durationTime && "function" != typeof b.durationTime && (b.durationTime = u(b.durationTime)), "now" == b.scrollDefault) b.scrollDefault = function () {
      return b.roundingFunction(u(new Date), b)
    }; else if (b.scrollDefault && "function" != typeof b.scrollDefault) {
      var c = b.scrollDefault;
      b.scrollDefault = function () {
        return b.roundingFunction(u(c), b)
      }
    } else b.minTime && (b.scrollDefault = function () {
      return b.roundingFunction(b.minTime, b)
    });
    if ("string" === a.type(b.timeFormat) && b.timeFormat.match(/[gh]/) && (b._twelveHourTime = !0), b.showOnFocus === !1 && -1 != b.showOn.indexOf("focus") && b.showOn.splice(b.showOn.indexOf("focus"), 1), b.disableTimeRanges.length > 0) {
      for (var d in b.disableTimeRanges) b.disableTimeRanges[d] = [u(b.disableTimeRanges[d][0]), u(b.disableTimeRanges[d][1])];
      b.disableTimeRanges = b.disableTimeRanges.sort(function (a, b) {
        return a[0] - b[0]
      });
      for (var d = b.disableTimeRanges.length - 1; d > 0; d--) b.disableTimeRanges[d][0] <= b.disableTimeRanges[d - 1][1] && (b.disableTimeRanges[d - 1] = [Math.min(b.disableTimeRanges[d][0], b.disableTimeRanges[d - 1][0]), Math.max(b.disableTimeRanges[d][1], b.disableTimeRanges[d - 1][1])], b.disableTimeRanges.splice(d, 1))
    }
    return b
  }

  function d(b) {
    var c = b.data("timepicker-settings"), d = b.data("timepicker-list");
    if (d && d.length && (d.remove(), b.data("timepicker-list", !1)), c.useSelect) {
      d = a("<select />", {"class": "ui-timepicker-select"});
      var g = d
    } else {
      d = a("<ul />", {"class": "ui-timepicker-list"});
      var g = a("<div />", {"class": "ui-timepicker-wrapper", tabindex: -1});
      g.css({display: "none", position: "absolute"}).append(d)
    }
    if (c.noneOption) if (c.noneOption === !0 && (c.noneOption = c.useSelect ? "Time..." : "None"), a.isArray(c.noneOption)) {
      for (var h in c.noneOption) if (parseInt(h, 10) == h) {
        var j = e(c.noneOption[h], c.useSelect);
        d.append(j)
      }
    } else {
      var j = e(c.noneOption, c.useSelect);
      d.append(j)
    }
    if (c.className && g.addClass(c.className), (null !== c.minTime || null !== c.durationTime) && c.showDuration) {
      "function" == typeof c.step ? "function" : c.step;
      g.addClass("ui-timepicker-with-duration"), g.addClass("ui-timepicker-step-" + c.step)
    }
    var l = c.minTime;
    "function" == typeof c.durationTime ? l = u(c.durationTime()) : null !== c.durationTime && (l = c.durationTime);
    var m = null !== c.minTime ? c.minTime : 0,
      o = null !== c.maxTime ? c.maxTime : m + w - 1;
    m > o && (o += w), o === w - 1 && "string" === a.type(c.timeFormat) && c.show2400 && (o = w);
    var p = c.disableTimeRanges, q = 0, v = p.length, x = c.step;
    "function" != typeof x && (x = function () {
      return c.step
    });
    for (var h = m, z = 0; o >= h; z++, h += 60 * x(z)) {
      var A = h, B = t(A, c);
      if (c.useSelect) {
        var C = a("<option />", {value: B});
        C.text(B)
      } else {
        var C = a("<li />");
        C.addClass(43200 > A % 86400 ? "ui-timepicker-am" : "ui-timepicker-pm"), C.data("time", 86400 >= A ? A : A % 86400), C.text(B)
      }
      if ((null !== c.minTime || null !== c.durationTime) && c.showDuration) {
        var D = s(h - l, c.step);
        if (c.useSelect) C.text(C.text() + " (" + D + ")"); else {
          var E = a("<span />", {"class": "ui-timepicker-duration"});
          E.text(" (" + D + ")"), C.append(E)
        }
      }
      v > q && (A >= p[q][1] && (q += 1), p[q] && A >= p[q][0] && A < p[q][1] && (c.useSelect ? C.prop("disabled", !0) : C.addClass("ui-timepicker-disabled"))), d.append(C)
    }
    if (g.data("timepicker-input", b), b.data("timepicker-list", g), c.useSelect) b.val() && d.val(f(u(b.val()), c)), d.on("focus", function () {
      a(this).data("timepicker-input").trigger("showTimepicker")
    }), d.on("blur", function () {
      a(this).data("timepicker-input").trigger("hideTimepicker")
    }), d.on("change", function () {
      n(b, a(this).val(), "select")
    }), n(b, d.val(), "initial"), b.hide().after(d); else {
      var F = c.appendTo;
      "string" == typeof F ? F = a(F) : "function" == typeof F && (F = F(b)), F.append(g), k(b, d), d.on("mousedown", "li", function (c) {
        b.off("focus.timepicker"), b.on("focus.timepicker-ie-hack", function () {
          b.off("focus.timepicker-ie-hack"), b.on("focus.timepicker", y.show)
        }), i(b) || b[0].focus(), d.find("li").removeClass("ui-timepicker-selected"), a(this).addClass("ui-timepicker-selected"), r(b) && (b.trigger("hideTimepicker"), d.on("mouseup.timepicker", "li", function (a) {
          d.off("mouseup.timepicker"), g.hide()
        }))
      })
    }
  }

  function e(b, c) {
    var d, e, f;
    return "object" == typeof b ? (d = b.label, e = b.className, f = b.value) : "string" == typeof b ? d = b : a.error("Invalid noneOption value"), c ? a("<option />", {
      value: f,
      "class": e,
      text: d
    }) : a("<li />", {"class": e, text: d}).data("time", f)
  }

  function f(a, b) {
    return a = b.roundingFunction(a, b), null !== a ? t(a, b) : void 0
  }

  function g() {
    return new Date(1970, 0, 1, 0, 0, 0)
  }

  function h(b) {
    var c = a(b.target), d = c.closest(".ui-timepicker-input");
    0 === d.length && 0 === c.closest(".ui-timepicker-wrapper").length && (y.hide(), a(document).unbind(".ui-timepicker"), a(window).unbind(".ui-timepicker"))
  }

  function i(a) {
    var b = a.data("timepicker-settings");
    return (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && b.disableTouchKeyboard
  }

  function j(b, c, d) {
    if (!d && 0 !== d) return !1;
    var e = b.data("timepicker-settings"), f = !1, d = e.roundingFunction(d, e);
    return c.find("li").each(function (b, c) {
      var e = a(c);
      if ("number" == typeof e.data("time")) return e.data("time") == d ? (f = e, !1) : void 0
    }), f
  }

  function k(a, b) {
    b.find("li").removeClass("ui-timepicker-selected");
    var c = u(m(a), a.data("timepicker-settings"));
    if (null !== c) {
      var d = j(a, b, c);
      if (d) {
        var e = d.offset().top - b.offset().top;
        (e + d.outerHeight() > b.outerHeight() || 0 > e) && b.scrollTop(b.scrollTop() + d.position().top - d.outerHeight()), d.addClass("ui-timepicker-selected")
      }
    }
  }

  function l(b, c) {
    if ("" !== this.value && "timepicker" != c) {
      var d = a(this);
      if (!d.is(":focus") || b && "change" == b.type) {
        var e = d.data("timepicker-settings"), f = u(this.value, e);
        if (null === f) return void d.trigger("timeFormatError");
        var g = !1;
        null !== e.minTime && f < e.minTime ? g = !0 : null !== e.maxTime && f > e.maxTime && (g = !0), a.each(e.disableTimeRanges, function () {
          return f >= this[0] && f < this[1] ? (g = !0, !1) : void 0
        }), e.forceRoundTime && (f = e.roundingFunction(f, e));
        var h = t(f, e);
        g ? n(d, h, "error") && d.trigger("timeRangeError") : n(d, h)
      }
    }
  }

  function m(a) {
    return a.is("input") ? a.val() : a.data("ui-timepicker-value")
  }

  function n(a, b, c) {
    if (a.is("input")) {
      a.val(b);
      var d = a.data("timepicker-settings");
      d.useSelect && "select" != c && "initial" != c && a.data("timepicker-list").val(f(u(b), d))
    }
    return a.data("ui-timepicker-value") != b ? (a.data("ui-timepicker-value", b), "select" == c ? a.trigger("selectTime").trigger("changeTime").trigger("change", "timepicker") : "error" != c && a.trigger("changeTime"), !0) : (a.trigger("selectTime"), !1)
  }

  function o(a) {
    switch (a.keyCode) {
      case 13:
      case 9:
        return;
      default:
        a.preventDefault()
    }
  }

  function p(c) {
    var d = a(this), e = d.data("timepicker-list");
    if (!e || !b(e)) {
      if (40 != c.keyCode) return !0;
      y.show.call(d.get(0)), e = d.data("timepicker-list"), i(d) || d.focus()
    }
    switch (c.keyCode) {
      case 13:
        return r(d) && y.hide.apply(this), c.preventDefault(), !1;
      case 38:
        var f = e.find(".ui-timepicker-selected");
        return f.length ? f.is(":first-child") || (f.removeClass("ui-timepicker-selected"), f.prev().addClass("ui-timepicker-selected"), f.prev().position().top < f.outerHeight() && e.scrollTop(e.scrollTop() - f.outerHeight())) : (e.find("li").each(function (b, c) {
          return a(c).position().top > 0 ? (f = a(c), !1) : void 0
        }), f.addClass("ui-timepicker-selected")), !1;
      case 40:
        return f = e.find(".ui-timepicker-selected"), 0 === f.length ? (e.find("li").each(function (b, c) {
          return a(c).position().top > 0 ? (f = a(c), !1) : void 0
        }), f.addClass("ui-timepicker-selected")) : f.is(":last-child") || (f.removeClass("ui-timepicker-selected"), f.next().addClass("ui-timepicker-selected"), f.next().position().top + 2 * f.outerHeight() > e.outerHeight() && e.scrollTop(e.scrollTop() + f.outerHeight())), !1;
      case 27:
        e.find("li").removeClass("ui-timepicker-selected"), y.hide();
        break;
      case 9:
        y.hide();
        break;
      default:
        return !0
    }
  }

  function q(c) {
    var d = a(this), e = d.data("timepicker-list"),
      f = d.data("timepicker-settings");
    if (!e || !b(e) || f.disableTextInput) return !0;
    switch (c.keyCode) {
      case 96:
      case 97:
      case 98:
      case 99:
      case 100:
      case 101:
      case 102:
      case 103:
      case 104:
      case 105:
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
      case 65:
      case 77:
      case 80:
      case 186:
      case 8:
      case 46:
        f.typeaheadHighlight ? k(d, e) : e.hide()
    }
  }

  function r(a) {
    var b = a.data("timepicker-settings"), c = a.data("timepicker-list"),
      d = null, e = c.find(".ui-timepicker-selected");
    return e.hasClass("ui-timepicker-disabled") ? !1 : (e.length && (d = e.data("time")), null !== d && ("string" != typeof d && (d = t(d, b)), n(a, d, "select")), !0)
  }

  function s(a, b) {
    a = Math.abs(a);
    var c, d, e = Math.round(a / 60), f = [];
    return 60 > e ? f = [e, x.mins] : (c = Math.floor(e / 60), d = e % 60, 30 == b && 30 == d && (c += x.decimal + 5), f.push(c), f.push(1 == c ? x.hr : x.hrs), 30 != b && d && (f.push(d), f.push(x.mins))), f.join(" ")
  }

  function t(b, c) {
    if (null === b) return null;
    var d = new Date(v.valueOf() + 1e3 * b);
    if (isNaN(d.getTime())) return null;
    if ("function" === a.type(c.timeFormat)) return c.timeFormat(d);
    for (var e, f, g = "", h = 0; h < c.timeFormat.length; h++) switch (f = c.timeFormat.charAt(h)) {
      case"a":
        g += d.getHours() > 11 ? x.pm : x.am;
        break;
      case"A":
        g += d.getHours() > 11 ? x.PM : x.AM;
        break;
      case"g":
        e = d.getHours() % 12, g += 0 === e ? "12" : e;
        break;
      case"G":
        e = d.getHours(), b === w && (e = 24), g += e;
        break;
      case"h":
        e = d.getHours() % 12, 0 !== e && 10 > e && (e = "0" + e), g += 0 === e ? "12" : e;
        break;
      case"H":
        e = d.getHours(), b === w && (e = c.show2400 ? 24 : 0), g += e > 9 ? e : "0" + e;
        break;
      case"i":
        var i = d.getMinutes();
        g += i > 9 ? i : "0" + i;
        break;
      case"s":
        b = d.getSeconds(), g += b > 9 ? b : "0" + b;
        break;
      case"\\":
        h++, g += c.timeFormat.charAt(h);
        break;
      default:
        g += f
    }
    return g
  }

  function u(a, b) {
    if ("" === a) return null;
    if (!a || a + 0 == a) return a;
    if ("object" == typeof a) return 3600 * a.getHours() + 60 * a.getMinutes() + a.getSeconds();
    a = a.toLowerCase().replace(/[\s\.]/g, ""), ("a" == a.slice(-1) || "p" == a.slice(-1)) && (a += "m");
    var c = "(" + x.am.replace(".", "") + "|" + x.pm.replace(".", "") + "|" + x.AM.replace(".", "") + "|" + x.PM.replace(".", "") + ")?",
      d = new RegExp("^" + c + "([0-9]?[0-9])\\W?([0-5][0-9])?\\W?([0-5][0-9])?" + c + "$"),
      e = a.match(d);
    if (!e) return null;
    var f = parseInt(1 * e[2], 10), g = f > 24 ? f % 24 : f, h = e[1] || e[5],
      i = g;
    if (12 >= g && h) {
      var j = h == x.pm || h == x.PM;
      i = 12 == g ? j ? 12 : 0 : g + (j ? 12 : 0)
    }
    var k = 1 * e[3] || 0, l = 1 * e[4] || 0, m = 3600 * i + 60 * k + l;
    if (12 > g && !h && b && b._twelveHourTime && b.scrollDefault) {
      var n = m - b.scrollDefault();
      0 > n && n >= w / -2 && (m = (m + w / 2) % w)
    }
    return m
  }

  var v = g(), w = 86400, x = {
    am: "am",
    pm: "pm",
    AM: "AM",
    PM: "PM",
    decimal: ".",
    mins: "mins",
    hr: "hr",
    hrs: "hrs"
  }, y = {
    init: function (b) {
      return this.each(function () {
        var e = a(this), f = [];
        for (var g in a.fn.timepicker.defaults) e.data(g) && (f[g] = e.data(g));
        var h = a.extend({}, a.fn.timepicker.defaults, f, b);
        if (h.lang && (x = a.extend(x, h.lang)), h = c(h), e.data("timepicker-settings", h), e.addClass("ui-timepicker-input"), h.useSelect) d(e); else {
          if (e.prop("autocomplete", "off"), h.showOn) for (var i in h.showOn) e.on(h.showOn[i] + ".timepicker", y.show);
          e.on("change.timepicker", l), e.on("keydown.timepicker", p), e.on("keyup.timepicker", q), h.disableTextInput && e.on("keydown.timepicker", o), l.call(e.get(0))
        }
      })
    }, show: function (c) {
      var e = a(this), f = e.data("timepicker-settings");
      if (c && c.preventDefault(), f.useSelect) return void e.data("timepicker-list").focus();
      i(e) && e.blur();
      var g = e.data("timepicker-list");
      if (!e.prop("readonly") && (g && 0 !== g.length && "function" != typeof f.durationTime || (d(e), g = e.data("timepicker-list")), !b(g))) {
        e.data("ui-timepicker-value", e.val()), k(e, g), y.hide(), g.show();
        var l = {};
        f.orientation.match(/r/) ? l.left = e.offset().left + e.outerWidth() - g.outerWidth() + parseInt(g.css("marginLeft").replace("px", ""), 10) : l.left = e.offset().left + parseInt(g.css("marginLeft").replace("px", ""), 10);
        var n;
        n = f.orientation.match(/t/) ? "t" : f.orientation.match(/b/) ? "b" : e.offset().top + e.outerHeight(!0) + g.outerHeight() > a(window).height() + a(window).scrollTop() ? "t" : "b", "t" == n ? (g.addClass("ui-timepicker-positioned-top"), l.top = e.offset().top - g.outerHeight() + parseInt(g.css("marginTop").replace("px", ""), 10)) : (g.removeClass("ui-timepicker-positioned-top"), l.top = e.offset().top + e.outerHeight() + parseInt(g.css("marginTop").replace("px", ""), 10)), g.offset(l);
        var o = g.find(".ui-timepicker-selected");
        if (!o.length) {
          var p = u(m(e));
          null !== p ? o = j(e, g, p) : f.scrollDefault && (o = j(e, g, f.scrollDefault()))
        }
        if (o && o.length) {
          var q = g.scrollTop() + o.position().top - o.outerHeight();
          g.scrollTop(q)
        } else g.scrollTop(0);
        return f.stopScrollPropagation && a(document).on("wheel.ui-timepicker", ".ui-timepicker-wrapper", function (b) {
          b.preventDefault();
          var c = a(this).scrollTop();
          a(this).scrollTop(c + b.originalEvent.deltaY)
        }), a(document).on("touchstart.ui-timepicker mousedown.ui-timepicker", h), a(window).on("resize.ui-timepicker", h), f.closeOnWindowScroll && a(document).on("scroll.ui-timepicker", h), e.trigger("showTimepicker"), this
      }
    }, hide: function (c) {
      var d = a(this), e = d.data("timepicker-settings");
      return e && e.useSelect && d.blur(), a(".ui-timepicker-wrapper").each(function () {
        var c = a(this);
        if (b(c)) {
          var d = c.data("timepicker-input"), e = d.data("timepicker-settings");
          e && e.selectOnBlur && r(d), c.hide(), d.trigger("hideTimepicker")
        }
      }), this
    }, option: function (b, e) {
      return "string" == typeof b && "undefined" == typeof e ? a(this).data("timepicker-settings")[b] : this.each(function () {
        var f = a(this), g = f.data("timepicker-settings"),
          h = f.data("timepicker-list");
        "object" == typeof b ? g = a.extend(g, b) : "string" == typeof b && (g[b] = e), g = c(g), f.data("timepicker-settings", g), h && (h.remove(), f.data("timepicker-list", !1)), g.useSelect && d(f)
      })
    }, getSecondsFromMidnight: function () {
      return u(m(this))
    }, getTime: function (a) {
      var b = this, c = m(b);
      if (!c) return null;
      var d = u(c);
      if (null === d) return null;
      a || (a = v);
      var e = new Date(a);
      return e.setHours(d / 3600), e.setMinutes(d % 3600 / 60), e.setSeconds(d % 60), e.setMilliseconds(0), e
    }, setTime: function (a) {
      var b = this, c = b.data("timepicker-settings");
      if (c.forceRoundTime) var d = f(u(a), c); else var d = t(u(a), c);
      return a && null === d && c.noneOption && (d = a), n(b, d), b.data("timepicker-list") && k(b, b.data("timepicker-list")), this
    }, remove: function () {
      var a = this;
      if (a.hasClass("ui-timepicker-input")) {
        var b = a.data("timepicker-settings");
        return a.removeAttr("autocomplete", "off"), a.removeClass("ui-timepicker-input"), a.removeData("timepicker-settings"), a.off(".timepicker"), a.data("timepicker-list") && a.data("timepicker-list").remove(), b.useSelect && a.show(), a.removeData("timepicker-list"), this
      }
    }
  };
  a.fn.timepicker = function (b) {
    return this.length ? y[b] ? this.hasClass("ui-timepicker-input") ? y[b].apply(this, Array.prototype.slice.call(arguments, 1)) : this : "object" != typeof b && b ? void a.error("Method " + b + " does not exist on jQuery.timepicker") : y.init.apply(this, arguments) : this
  }, a.fn.timepicker.defaults = {
    appendTo: "body",
    className: null,
    closeOnWindowScroll: !1,
    disableTextInput: !1,
    disableTimeRanges: [],
    disableTouchKeyboard: !1,
    durationTime: null,
    forceRoundTime: !1,
    maxTime: null,
    minTime: null,
    noneOption: !1,
    orientation: "l",
    roundingFunction: function (a, b) {
      if (null === a) return null;
      if ("number" != typeof b.step) return a;
      var c = a % (60 * b.step);
      return c >= 30 * b.step ? a += 60 * b.step - c : a -= c, a
    },
    scrollDefault: null,
    selectOnBlur: !1,
    show2400: !1,
    showDuration: !1,
    showOn: ["click", "focus"],
    showOnFocus: !0,
    step: 30,
    stopScrollPropagation: !1,
    timeFormat: "g:ia",
    typeaheadHighlight: !0,
    useSelect: !1
  }
});

