parcelRequire = (function(e, r, t, n) {
  var i,
    o = 'function' == typeof parcelRequire && parcelRequire,
    u = 'function' == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = 'function' == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && 'string' == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = 'MODULE_NOT_FOUND'), c);
      }
      (p.resolve = function(r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function(e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function(r, t) {
      e[r] = [
        function(e, r) {
          r.exports = t;
        },
        {}
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    'object' == typeof exports && 'undefined' != typeof module
      ? (module.exports = l)
      : 'function' == typeof define && define.amd
      ? define(function() {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    U4oe: [
      function(require, module, exports) {
        'use strict';
        var t = function() {
          var t = document.querySelectorAll('.stars');
          function e(t) {
            var e = t.target,
              r = e.parentNode,
              a = r.children,
              s = 0;
            if (e.classList.contains('star')) {
              for (; null != (e = e.previousElementSibling); ) {
                s += 1;
                for (var n = 0; n <= s; n++)
                  a[n].classList.add('rated-star'), (a[n].style.color = '#d58e32');
              }
              t.target === r.firstElementChild &&
                (t.target.classList.add('rated-star'),
                (t.target.style.color = '#d58e32'));
            }
          }
          function r(t) {
            var e = t.target.parentNode.children;
            if (t.target.classList.contains('star'))
              for (var r = 0; r < e.length; r++)
                e[r].classList.remove('rated-star', 'full', 'hover-on');
          }
          function a(t) {
            var e = t.target,
              r = e.parentNode,
              a = r.children,
              s = 0;
            if (e.classList.contains('star')) {
              for (; null != (e = e.previousElementSibling); ) {
                s += 1;
                for (var n = 0; n <= s; n++)
                  a[n].classList.add('hover-on'), (a[n].style.color = '#d58e32');
              }
              t.target === r.firstElementChild &&
                (t.target.classList.add('hover-on'),
                (t.target.style.color = '#d58e32'));
            }
          }
          function s(t) {
            var e = t.target.parentNode.children;
            if (t.target.classList.contains('star'))
              for (var r = 0; r < e.length; r++) e[r].classList.remove('hover-on');
          }
          for (var n = 0; n < t.length; n++)
            t[n].addEventListener('click', function(t) {
              r(t), e(t);
            }),
              t[n].addEventListener('mouseover', function(t) {
                r(t), a(t);
              }),
              t[n].addEventListener('mouseout', s);
        };
        t();
      },
      {}
    ]
  },
  {},
  ['U4oe'],
  null
);
//# sourceMappingURL=/One-month-team-project/stars.05882b33.js.map
