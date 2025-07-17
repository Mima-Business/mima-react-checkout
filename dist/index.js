(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode("*{line-height:1.2}h1,h2,h3,h4,h5,h6,p{all:unset;line-height:1.4;display:block}h1,h2,h3,h4,h5,h6{font-weight:600}._checkoutModal_1rie5_1{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9999;display:flex;justify-content:center;align-items:center;font-family:inherit}._backdrop_1rie5_14{position:absolute;width:100%;height:100%;background-color:#0006;top:0;left:0;z-index:-1}._loading_1rie5_24{background:#fff;padding:20px;border-radius:10px;box-shadow:0 2px 8px #0003}._errorMessage_1rie5_31{background-color:#fff;color:#d32f2f;font-weight:500;padding:20px;border-radius:10px;border:1px solid #d32f2f;text-align:center}@keyframes _modalFadeIn_1rie5_1{0%{opacity:0;transform:scale(.96)}to{opacity:1;transform:scale(1)}}._modalContent_1rie5_52{background-color:#fff;padding:30px 20px;border-radius:12px;position:relative;z-index:10000;animation:_modalFadeIn_1rie5_1 .25s ease-out}._checkoutForm_1rie5_61{display:flex;flex-direction:column;gap:10px;width:500px;max-width:100%}@media (max-width: 520px){._checkoutForm_1rie5_61{width:100%}._modalContent_1rie5_52{padding:20px 12px;max-width:98%}}._checkoutTop_1rie5_80{display:flex;flex-direction:column;font-size:20px}._checkoutTopFirst_1rie5_86{font-size:14px;color:#464646}._checkoutTopSpan_1rie5_91{color:#136e13;font-weight:600}:root{--primary-normal: #1f68d6;--primary-hover: #003c97;--grey-200: #e5e7eb;--dark-700: #414651;--dark-900: #1f2937}._buttonBase_oq4y8_10{height:40px;padding:8px 12px;border-radius:6px;cursor:pointer;width:fit-content;display:flex;justify-content:center;align-items:center;gap:8px;white-space:nowrap;outline:none;border:none}._buttonBase_oq4y8_10:disabled{background-color:#ccc;cursor:not-allowed}._buttonBase_oq4y8_10:disabled:hover{background-color:#ccc}._buttonDefault_oq4y8_37{background-color:var(--primary-normal);color:#fff}._buttonDefault_oq4y8_37:hover{background-color:var(--primary-hover)}._buttonOutlined_oq4y8_46{background-color:transparent;border:1px solid var(--grey-200);color:var(--dark-700)}._buttonOutlined_oq4y8_46:hover{border-color:var(--dark-700);color:var(--dark-900);background-color:var(--grey-200)}._buttonText_oq4y8_58{background-color:transparent;color:var(--primary-normal)}._buttonText_oq4y8_58:hover{color:var(--primary-hover)}._buttonFull_oq4y8_67{width:100%}._buttonDisabled_oq4y8_71{opacity:.6;pointer-events:none}._spinner_1uybp_1{border:2px solid rgba(0,0,0,.1);border-top:2px solid white;border-radius:50%;width:15px;height:15px;animation:_spin_1uybp_1 .6s linear infinite}@keyframes _spin_1uybp_1{to{transform:rotate(360deg)}}._container_1apau_1{display:flex;flex-direction:column;gap:10px;width:fit-content}._label_1apau_8{display:flex;align-items:center;cursor:pointer;gap:5px}._labelText_1apau_15{font-weight:500}._logo_1apau_19{height:25px;width:auto;object-fit:contain;display:block}._mima_1apau_26{display:flex;align-items:center;justify-content:center;margin-top:10px;gap:10px;text-decoration:none;color:#1f2937}")),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { jsx as z, jsxs as i1, Fragment as ft } from "react/jsx-runtime";
import W, { createContext as ht, forwardRef as mt, useContext as yt, useState as b1, useEffect as ee, useMemo as Ct } from "react";
import { createRoot as vt } from "react-dom/client";
function bt(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var k1 = { exports: {} }, w1 = { exports: {} }, R = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var te;
function gt() {
  if (te) return R;
  te = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, i = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, h = t ? Symbol.for("react.suspense") : 60113, u = t ? Symbol.for("react.suspense_list") : 60120, k = t ? Symbol.for("react.memo") : 60115, m = t ? Symbol.for("react.lazy") : 60116, C = t ? Symbol.for("react.block") : 60121, g = t ? Symbol.for("react.fundamental") : 60117, w = t ? Symbol.for("react.responder") : 60118, L = t ? Symbol.for("react.scope") : 60119;
  function I(f) {
    if (typeof f == "object" && f !== null) {
      var F = f.$$typeof;
      switch (F) {
        case e:
          switch (f = f.type, f) {
            case i:
            case l:
            case r:
            case o:
            case a:
            case h:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case c:
                case d:
                case m:
                case k:
                case s:
                  return f;
                default:
                  return F;
              }
          }
        case n:
          return F;
      }
    }
  }
  function V(f) {
    return I(f) === l;
  }
  return R.AsyncMode = i, R.ConcurrentMode = l, R.ContextConsumer = c, R.ContextProvider = s, R.Element = e, R.ForwardRef = d, R.Fragment = r, R.Lazy = m, R.Memo = k, R.Portal = n, R.Profiler = o, R.StrictMode = a, R.Suspense = h, R.isAsyncMode = function(f) {
    return V(f) || I(f) === i;
  }, R.isConcurrentMode = V, R.isContextConsumer = function(f) {
    return I(f) === c;
  }, R.isContextProvider = function(f) {
    return I(f) === s;
  }, R.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, R.isForwardRef = function(f) {
    return I(f) === d;
  }, R.isFragment = function(f) {
    return I(f) === r;
  }, R.isLazy = function(f) {
    return I(f) === m;
  }, R.isMemo = function(f) {
    return I(f) === k;
  }, R.isPortal = function(f) {
    return I(f) === n;
  }, R.isProfiler = function(f) {
    return I(f) === o;
  }, R.isStrictMode = function(f) {
    return I(f) === a;
  }, R.isSuspense = function(f) {
    return I(f) === h;
  }, R.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === r || f === l || f === o || f === a || f === h || f === u || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === k || f.$$typeof === s || f.$$typeof === c || f.$$typeof === d || f.$$typeof === g || f.$$typeof === w || f.$$typeof === L || f.$$typeof === C);
  }, R.typeOf = I, R;
}
var N = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ne;
function kt() {
  return ne || (ne = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, i = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, h = t ? Symbol.for("react.suspense") : 60113, u = t ? Symbol.for("react.suspense_list") : 60120, k = t ? Symbol.for("react.memo") : 60115, m = t ? Symbol.for("react.lazy") : 60116, C = t ? Symbol.for("react.block") : 60121, g = t ? Symbol.for("react.fundamental") : 60117, w = t ? Symbol.for("react.responder") : 60118, L = t ? Symbol.for("react.scope") : 60119;
    function I(b) {
      return typeof b == "string" || typeof b == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      b === r || b === l || b === o || b === a || b === h || b === u || typeof b == "object" && b !== null && (b.$$typeof === m || b.$$typeof === k || b.$$typeof === s || b.$$typeof === c || b.$$typeof === d || b.$$typeof === g || b.$$typeof === w || b.$$typeof === L || b.$$typeof === C);
    }
    function V(b) {
      if (typeof b == "object" && b !== null) {
        var a1 = b.$$typeof;
        switch (a1) {
          case e:
            var g1 = b.type;
            switch (g1) {
              case i:
              case l:
              case r:
              case o:
              case a:
              case h:
                return g1;
              default:
                var $1 = g1 && g1.$$typeof;
                switch ($1) {
                  case c:
                  case d:
                  case m:
                  case k:
                  case s:
                    return $1;
                  default:
                    return a1;
                }
            }
          case n:
            return a1;
        }
      }
    }
    var f = i, F = l, q = c, K = s, t1 = e, B = d, n1 = r, X = m, l1 = k, o1 = n, J = o, r1 = a, Q = h, c1 = !1;
    function u1(b) {
      return c1 || (c1 = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), p(b) || V(b) === i;
    }
    function p(b) {
      return V(b) === l;
    }
    function y(b) {
      return V(b) === c;
    }
    function P(b) {
      return V(b) === s;
    }
    function x(b) {
      return typeof b == "object" && b !== null && b.$$typeof === e;
    }
    function E(b) {
      return V(b) === d;
    }
    function A(b) {
      return V(b) === r;
    }
    function T(b) {
      return V(b) === m;
    }
    function M(b) {
      return V(b) === k;
    }
    function O(b) {
      return V(b) === n;
    }
    function G(b) {
      return V(b) === o;
    }
    function j(b) {
      return V(b) === a;
    }
    function _(b) {
      return V(b) === h;
    }
    N.AsyncMode = f, N.ConcurrentMode = F, N.ContextConsumer = q, N.ContextProvider = K, N.Element = t1, N.ForwardRef = B, N.Fragment = n1, N.Lazy = X, N.Memo = l1, N.Portal = o1, N.Profiler = J, N.StrictMode = r1, N.Suspense = Q, N.isAsyncMode = u1, N.isConcurrentMode = p, N.isContextConsumer = y, N.isContextProvider = P, N.isElement = x, N.isForwardRef = E, N.isFragment = A, N.isLazy = T, N.isMemo = M, N.isPortal = O, N.isProfiler = G, N.isStrictMode = j, N.isSuspense = _, N.isValidElementType = I, N.typeOf = V;
  }()), N;
}
var re;
function Oe() {
  return re || (re = 1, process.env.NODE_ENV === "production" ? w1.exports = gt() : w1.exports = kt()), w1.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var O1, ae;
function wt() {
  if (ae) return O1;
  ae = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var s = {}, c = 0; c < 10; c++)
        s["_" + String.fromCharCode(c)] = c;
      var i = Object.getOwnPropertyNames(s).map(function(d) {
        return s[d];
      });
      if (i.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        l[d] = d;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return O1 = a() ? Object.assign : function(o, s) {
    for (var c, i = r(o), l, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var h in c)
        e.call(c, h) && (i[h] = c[h]);
      if (t) {
        l = t(c);
        for (var u = 0; u < l.length; u++)
          n.call(c, l[u]) && (i[l[u]] = c[l[u]]);
      }
    }
    return i;
  }, O1;
}
var j1, oe;
function K1() {
  if (oe) return j1;
  oe = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return j1 = t, j1;
}
var L1, ie;
function je() {
  return ie || (ie = 1, L1 = Function.call.bind(Object.prototype.hasOwnProperty)), L1;
}
var R1, se;
function St() {
  if (se) return R1;
  se = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = /* @__PURE__ */ K1(), n = {}, r = /* @__PURE__ */ je();
    t = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, c, i, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in o)
        if (r(o, d)) {
          var h;
          try {
            if (typeof o[d] != "function") {
              var u = Error(
                (i || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw u.name = "Invariant Violation", u;
            }
            h = o[d](s, d, i, c, null, e);
          } catch (m) {
            h = m;
          }
          if (h && !(h instanceof Error) && t(
            (i || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in n)) {
            n[h.message] = !0;
            var k = l ? l() : "";
            t(
              "Failed " + c + " type: " + h.message + (k ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, R1 = a, R1;
}
var N1, ce;
function Et() {
  if (ce) return N1;
  ce = 1;
  var t = Oe(), e = wt(), n = /* @__PURE__ */ K1(), r = /* @__PURE__ */ je(), a = /* @__PURE__ */ St(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(c) {
    var i = "Warning: " + c;
    typeof console < "u" && console.error(i);
    try {
      throw new Error(i);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return N1 = function(c, i) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(p) {
      var y = p && (l && p[l] || p[d]);
      if (typeof y == "function")
        return y;
    }
    var u = "<<anonymous>>", k = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: L(),
      arrayOf: I,
      element: V(),
      elementType: f(),
      instanceOf: F,
      node: B(),
      objectOf: K,
      oneOf: q,
      oneOfType: t1,
      shape: X,
      exact: l1
    };
    function m(p, y) {
      return p === y ? p !== 0 || 1 / p === 1 / y : p !== p && y !== y;
    }
    function C(p, y) {
      this.message = p, this.data = y && typeof y == "object" ? y : {}, this.stack = "";
    }
    C.prototype = Error.prototype;
    function g(p) {
      if (process.env.NODE_ENV !== "production")
        var y = {}, P = 0;
      function x(A, T, M, O, G, j, _) {
        if (O = O || u, j = j || M, _ !== n) {
          if (i) {
            var b = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw b.name = "Invariant Violation", b;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var a1 = O + ":" + M;
            !y[a1] && // Avoid spamming the console because they are often not actionable except for lib authors
            P < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + O + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), y[a1] = !0, P++);
          }
        }
        return T[M] == null ? A ? T[M] === null ? new C("The " + G + " `" + j + "` is marked as required " + ("in `" + O + "`, but its value is `null`.")) : new C("The " + G + " `" + j + "` is marked as required in " + ("`" + O + "`, but its value is `undefined`.")) : null : p(T, M, O, G, j);
      }
      var E = x.bind(null, !1);
      return E.isRequired = x.bind(null, !0), E;
    }
    function w(p) {
      function y(P, x, E, A, T, M) {
        var O = P[x], G = r1(O);
        if (G !== p) {
          var j = Q(O);
          return new C(
            "Invalid " + A + " `" + T + "` of type " + ("`" + j + "` supplied to `" + E + "`, expected ") + ("`" + p + "`."),
            { expectedType: p }
          );
        }
        return null;
      }
      return g(y);
    }
    function L() {
      return g(s);
    }
    function I(p) {
      function y(P, x, E, A, T) {
        if (typeof p != "function")
          return new C("Property `" + T + "` of component `" + E + "` has invalid PropType notation inside arrayOf.");
        var M = P[x];
        if (!Array.isArray(M)) {
          var O = r1(M);
          return new C("Invalid " + A + " `" + T + "` of type " + ("`" + O + "` supplied to `" + E + "`, expected an array."));
        }
        for (var G = 0; G < M.length; G++) {
          var j = p(M, G, E, A, T + "[" + G + "]", n);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return g(y);
    }
    function V() {
      function p(y, P, x, E, A) {
        var T = y[P];
        if (!c(T)) {
          var M = r1(T);
          return new C("Invalid " + E + " `" + A + "` of type " + ("`" + M + "` supplied to `" + x + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(p);
    }
    function f() {
      function p(y, P, x, E, A) {
        var T = y[P];
        if (!t.isValidElementType(T)) {
          var M = r1(T);
          return new C("Invalid " + E + " `" + A + "` of type " + ("`" + M + "` supplied to `" + x + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(p);
    }
    function F(p) {
      function y(P, x, E, A, T) {
        if (!(P[x] instanceof p)) {
          var M = p.name || u, O = u1(P[x]);
          return new C("Invalid " + A + " `" + T + "` of type " + ("`" + O + "` supplied to `" + E + "`, expected ") + ("instance of `" + M + "`."));
        }
        return null;
      }
      return g(y);
    }
    function q(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function y(P, x, E, A, T) {
        for (var M = P[x], O = 0; O < p.length; O++)
          if (m(M, p[O]))
            return null;
        var G = JSON.stringify(p, function(_, b) {
          var a1 = Q(b);
          return a1 === "symbol" ? String(b) : b;
        });
        return new C("Invalid " + A + " `" + T + "` of value `" + String(M) + "` " + ("supplied to `" + E + "`, expected one of " + G + "."));
      }
      return g(y);
    }
    function K(p) {
      function y(P, x, E, A, T) {
        if (typeof p != "function")
          return new C("Property `" + T + "` of component `" + E + "` has invalid PropType notation inside objectOf.");
        var M = P[x], O = r1(M);
        if (O !== "object")
          return new C("Invalid " + A + " `" + T + "` of type " + ("`" + O + "` supplied to `" + E + "`, expected an object."));
        for (var G in M)
          if (r(M, G)) {
            var j = p(M, G, E, A, T + "." + G, n);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return g(y);
    }
    function t1(p) {
      if (!Array.isArray(p))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var y = 0; y < p.length; y++) {
        var P = p[y];
        if (typeof P != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + c1(P) + " at index " + y + "."
          ), s;
      }
      function x(E, A, T, M, O) {
        for (var G = [], j = 0; j < p.length; j++) {
          var _ = p[j], b = _(E, A, T, M, O, n);
          if (b == null)
            return null;
          b.data && r(b.data, "expectedType") && G.push(b.data.expectedType);
        }
        var a1 = G.length > 0 ? ", expected one of type [" + G.join(", ") + "]" : "";
        return new C("Invalid " + M + " `" + O + "` supplied to " + ("`" + T + "`" + a1 + "."));
      }
      return g(x);
    }
    function B() {
      function p(y, P, x, E, A) {
        return o1(y[P]) ? null : new C("Invalid " + E + " `" + A + "` supplied to " + ("`" + x + "`, expected a ReactNode."));
      }
      return g(p);
    }
    function n1(p, y, P, x, E) {
      return new C(
        (p || "React class") + ": " + y + " type `" + P + "." + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + E + "`."
      );
    }
    function X(p) {
      function y(P, x, E, A, T) {
        var M = P[x], O = r1(M);
        if (O !== "object")
          return new C("Invalid " + A + " `" + T + "` of type `" + O + "` " + ("supplied to `" + E + "`, expected `object`."));
        for (var G in p) {
          var j = p[G];
          if (typeof j != "function")
            return n1(E, A, T, G, Q(j));
          var _ = j(M, G, E, A, T + "." + G, n);
          if (_)
            return _;
        }
        return null;
      }
      return g(y);
    }
    function l1(p) {
      function y(P, x, E, A, T) {
        var M = P[x], O = r1(M);
        if (O !== "object")
          return new C("Invalid " + A + " `" + T + "` of type `" + O + "` " + ("supplied to `" + E + "`, expected `object`."));
        var G = e({}, P[x], p);
        for (var j in G) {
          var _ = p[j];
          if (r(p, j) && typeof _ != "function")
            return n1(E, A, T, j, Q(_));
          if (!_)
            return new C(
              "Invalid " + A + " `" + T + "` key `" + j + "` supplied to `" + E + "`.\nBad object: " + JSON.stringify(P[x], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(p), null, "  ")
            );
          var b = _(M, j, E, A, T + "." + j, n);
          if (b)
            return b;
        }
        return null;
      }
      return g(y);
    }
    function o1(p) {
      switch (typeof p) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !p;
        case "object":
          if (Array.isArray(p))
            return p.every(o1);
          if (p === null || c(p))
            return !0;
          var y = h(p);
          if (y) {
            var P = y.call(p), x;
            if (y !== p.entries) {
              for (; !(x = P.next()).done; )
                if (!o1(x.value))
                  return !1;
            } else
              for (; !(x = P.next()).done; ) {
                var E = x.value;
                if (E && !o1(E[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function J(p, y) {
      return p === "symbol" ? !0 : y ? y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && y instanceof Symbol : !1;
    }
    function r1(p) {
      var y = typeof p;
      return Array.isArray(p) ? "array" : p instanceof RegExp ? "object" : J(y, p) ? "symbol" : y;
    }
    function Q(p) {
      if (typeof p > "u" || p === null)
        return "" + p;
      var y = r1(p);
      if (y === "object") {
        if (p instanceof Date)
          return "date";
        if (p instanceof RegExp)
          return "regexp";
      }
      return y;
    }
    function c1(p) {
      var y = Q(p);
      switch (y) {
        case "array":
        case "object":
          return "an " + y;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + y;
        default:
          return y;
      }
    }
    function u1(p) {
      return !p.constructor || !p.constructor.name ? u : p.constructor.name;
    }
    return k.checkPropTypes = a, k.resetWarningCache = a.resetWarningCache, k.PropTypes = k, k;
  }, N1;
}
var W1, le;
function xt() {
  if (le) return W1;
  le = 1;
  var t = /* @__PURE__ */ K1();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, W1 = function() {
    function r(s, c, i, l, d, h) {
      if (h !== t) {
        var u = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw u.name = "Invariant Violation", u;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: e
    };
    return o.PropTypes = o, o;
  }, W1;
}
var ue;
function Pt() {
  if (ue) return k1.exports;
  if (ue = 1, process.env.NODE_ENV !== "production") {
    var t = Oe(), e = !0;
    k1.exports = /* @__PURE__ */ Et()(t.isElement, e);
  } else
    k1.exports = /* @__PURE__ */ xt()();
  return k1.exports;
}
var Tt = /* @__PURE__ */ Pt();
const Y = /* @__PURE__ */ bt(Tt);
function pe(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function de(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? pe(Object(n), !0).forEach(function(r) {
      Le(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : pe(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function I1(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? I1 = function(e) {
    return typeof e;
  } : I1 = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, I1(t);
}
function Le(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function It(t, e) {
  if (t == null) return {};
  var n = {}, r = Object.keys(t), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(e.indexOf(a) >= 0) && (n[a] = t[a]);
  return n;
}
function Mt(t, e) {
  if (t == null) return {};
  var n = It(t, e), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (a = 0; a < o.length; a++)
      r = o[a], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function Re(t, e) {
  return Vt(t) || At(t, e) || Ot(t, e) || jt();
}
function Vt(t) {
  if (Array.isArray(t)) return t;
}
function At(t, e) {
  var n = t && (typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"]);
  if (n != null) {
    var r = [], a = !0, o = !1, s, c;
    try {
      for (n = n.call(t); !(a = (s = n.next()).done) && (r.push(s.value), !(e && r.length === e)); a = !0)
        ;
    } catch (i) {
      o = !0, c = i;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o) throw c;
      }
    }
    return r;
  }
}
function Ot(t, e) {
  if (t) {
    if (typeof t == "string") return fe(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set") return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return fe(t, e);
  }
}
function fe(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
function jt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var e1 = function(e, n, r) {
  var a = !!r, o = W.useRef(r);
  W.useEffect(function() {
    o.current = r;
  }, [r]), W.useEffect(function() {
    if (!a || !e)
      return function() {
      };
    var s = function() {
      o.current && o.current.apply(o, arguments);
    };
    return e.on(n, s), function() {
      e.off(n, s);
    };
  }, [a, n, e, o]);
}, D1 = function(e) {
  var n = W.useRef(e);
  return W.useEffect(function() {
    n.current = e;
  }, [e]), n.current;
}, y1 = function(e) {
  return e !== null && I1(e) === "object";
}, Lt = function(e) {
  return y1(e) && typeof e.then == "function";
}, Rt = function(e) {
  return y1(e) && typeof e.elements == "function" && typeof e.createToken == "function" && typeof e.createPaymentMethod == "function" && typeof e.confirmCardPayment == "function";
}, he = "[object Object]", Nt = function t(e, n) {
  if (!y1(e) || !y1(n))
    return e === n;
  var r = Array.isArray(e), a = Array.isArray(n);
  if (r !== a) return !1;
  var o = Object.prototype.toString.call(e) === he, s = Object.prototype.toString.call(n) === he;
  if (o !== s) return !1;
  if (!o && !r) return e === n;
  var c = Object.keys(e), i = Object.keys(n);
  if (c.length !== i.length) return !1;
  for (var l = {}, d = 0; d < c.length; d += 1)
    l[c[d]] = !0;
  for (var h = 0; h < i.length; h += 1)
    l[i[h]] = !0;
  var u = Object.keys(l);
  if (u.length !== c.length)
    return !1;
  var k = e, m = n, C = function(w) {
    return t(k[w], m[w]);
  };
  return u.every(C);
}, Ne = function(e, n, r) {
  return y1(e) ? Object.keys(e).reduce(function(a, o) {
    var s = !y1(n) || !Nt(e[o], n[o]);
    return r.includes(o) ? (s && console.warn("Unsupported prop change: options.".concat(o, " is not a mutable property.")), a) : s ? de(de({}, a || {}), {}, Le({}, o, e[o])) : a;
  }, null) : null;
}, We = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.", me = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We;
  if (e === null || Rt(e))
    return e;
  throw new Error(n);
}, Wt = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We;
  if (Lt(e))
    return {
      tag: "async",
      stripePromise: Promise.resolve(e).then(function(a) {
        return me(a, n);
      })
    };
  var r = me(e, n);
  return r === null ? {
    tag: "empty"
  } : {
    tag: "sync",
    stripe: r
  };
}, Gt = function(e) {
  !e || !e._registerWrapper || !e.registerAppInfo || (e._registerWrapper({
    name: "react-stripe-js",
    version: "3.7.0"
  }), e.registerAppInfo({
    name: "react-stripe-js",
    version: "3.7.0",
    url: "https://stripe.com/docs/stripe-js/react"
  }));
}, A1 = /* @__PURE__ */ W.createContext(null);
A1.displayName = "ElementsContext";
var Ge = function(e, n) {
  if (!e)
    throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n, " in an <Elements> provider."));
  return e;
}, ze = function(e) {
  var n = e.stripe, r = e.options, a = e.children, o = W.useMemo(function() {
    return Wt(n);
  }, [n]), s = W.useState(function() {
    return {
      stripe: o.tag === "sync" ? o.stripe : null,
      elements: o.tag === "sync" ? o.stripe.elements(r) : null
    };
  }), c = Re(s, 2), i = c[0], l = c[1];
  W.useEffect(function() {
    var u = !0, k = function(C) {
      l(function(g) {
        return g.stripe ? g : {
          stripe: C,
          elements: C.elements(r)
        };
      });
    };
    return o.tag === "async" && !i.stripe ? o.stripePromise.then(function(m) {
      m && u && k(m);
    }) : o.tag === "sync" && !i.stripe && k(o.stripe), function() {
      u = !1;
    };
  }, [o, i, r]);
  var d = D1(n);
  W.useEffect(function() {
    d !== null && d !== n && console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.");
  }, [d, n]);
  var h = D1(r);
  return W.useEffect(function() {
    if (i.elements) {
      var u = Ne(r, h, ["clientSecret", "fonts"]);
      u && i.elements.update(u);
    }
  }, [r, h, i.elements]), W.useEffect(function() {
    Gt(i.stripe);
  }, [i.stripe]), /* @__PURE__ */ W.createElement(A1.Provider, {
    value: i
  }, a);
};
ze.propTypes = {
  stripe: Y.any,
  options: Y.object
};
var zt = function(e) {
  var n = W.useContext(A1);
  return Ge(n, e);
}, qt = function() {
  var e = zt("calls useElements()"), n = e.elements;
  return n;
};
Y.func.isRequired;
var qe = /* @__PURE__ */ W.createContext(null);
qe.displayName = "CheckoutSdkContext";
var Ut = function(e, n) {
  if (!e)
    throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(n, " in an <CheckoutProvider> provider."));
  return e;
}, Yt = /* @__PURE__ */ W.createContext(null);
Yt.displayName = "CheckoutContext";
Y.any, Y.shape({
  fetchClientSecret: Y.func.isRequired,
  elementsOptions: Y.object
}).isRequired;
var Z1 = function(e) {
  var n = W.useContext(qe), r = W.useContext(A1);
  if (n && r)
    throw new Error("You cannot wrap the part of your app that ".concat(e, " in both <CheckoutProvider> and <Elements> providers."));
  return n ? Ut(n, e) : Ge(r, e);
}, Ft = ["mode"], Ht = function(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}, D = function(e, n) {
  var r = "".concat(Ht(e), "Element"), a = function(i) {
    var l = i.id, d = i.className, h = i.options, u = h === void 0 ? {} : h, k = i.onBlur, m = i.onFocus, C = i.onReady, g = i.onChange, w = i.onEscape, L = i.onClick, I = i.onLoadError, V = i.onLoaderStart, f = i.onNetworksChange, F = i.onConfirm, q = i.onCancel, K = i.onShippingAddressChange, t1 = i.onShippingRateChange, B = Z1("mounts <".concat(r, ">")), n1 = "elements" in B ? B.elements : null, X = "checkoutSdk" in B ? B.checkoutSdk : null, l1 = W.useState(null), o1 = Re(l1, 2), J = o1[0], r1 = o1[1], Q = W.useRef(null), c1 = W.useRef(null);
    e1(J, "blur", k), e1(J, "focus", m), e1(J, "escape", w), e1(J, "click", L), e1(J, "loaderror", I), e1(J, "loaderstart", V), e1(J, "networkschange", f), e1(J, "confirm", F), e1(J, "cancel", q), e1(J, "shippingaddresschange", K), e1(J, "shippingratechange", t1), e1(J, "change", g);
    var u1;
    C && (e === "expressCheckout" ? u1 = C : u1 = function() {
      C(J);
    }), e1(J, "ready", u1), W.useLayoutEffect(function() {
      if (Q.current === null && c1.current !== null && (n1 || X)) {
        var y = null;
        if (X)
          switch (e) {
            case "payment":
              y = X.createPaymentElement(u);
              break;
            case "address":
              if ("mode" in u) {
                var P = u.mode, x = Mt(u, Ft);
                if (P === "shipping")
                  y = X.createShippingAddressElement(x);
                else if (P === "billing")
                  y = X.createBillingAddressElement(x);
                else
                  throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.");
              } else
                throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");
              break;
            case "expressCheckout":
              y = X.createExpressCheckoutElement(u);
              break;
            case "currencySelector":
              y = X.createCurrencySelectorElement();
              break;
            default:
              throw new Error("Invalid Element type ".concat(r, ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."));
          }
        else n1 && (y = n1.create(e, u));
        Q.current = y, r1(y), y && y.mount(c1.current);
      }
    }, [n1, X, u]);
    var p = D1(u);
    return W.useEffect(function() {
      if (Q.current) {
        var y = Ne(u, p, ["paymentRequest"]);
        y && "update" in Q.current && Q.current.update(y);
      }
    }, [u, p]), W.useLayoutEffect(function() {
      return function() {
        if (Q.current && typeof Q.current.destroy == "function")
          try {
            Q.current.destroy(), Q.current = null;
          } catch {
          }
      };
    }, []), /* @__PURE__ */ W.createElement("div", {
      id: l,
      className: d,
      ref: c1
    });
  }, o = function(i) {
    Z1("mounts <".concat(r, ">"));
    var l = i.id, d = i.className;
    return /* @__PURE__ */ W.createElement("div", {
      id: l,
      className: d
    });
  }, s = n ? o : a;
  return s.propTypes = {
    id: Y.string,
    className: Y.string,
    onChange: Y.func,
    onBlur: Y.func,
    onFocus: Y.func,
    onReady: Y.func,
    onEscape: Y.func,
    onClick: Y.func,
    onLoadError: Y.func,
    onLoaderStart: Y.func,
    onNetworksChange: Y.func,
    onConfirm: Y.func,
    onCancel: Y.func,
    onShippingAddressChange: Y.func,
    onShippingRateChange: Y.func,
    options: Y.object
  }, s.displayName = r, s.__elementType = e, s;
}, Z = typeof window > "u", Dt = /* @__PURE__ */ W.createContext(null);
Dt.displayName = "EmbeddedCheckoutProviderContext";
var Zt = function() {
  var e = Z1("calls useStripe()"), n = e.stripe;
  return n;
};
D("auBankAccount", Z);
D("card", Z);
D("cardNumber", Z);
D("cardExpiry", Z);
D("cardCvc", Z);
D("fpxBank", Z);
D("iban", Z);
D("idealBank", Z);
D("p24Bank", Z);
D("epsBank", Z);
var Bt = D("payment", Z);
D("expressCheckout", Z);
D("currencySelector", Z);
D("paymentRequestButton", Z);
D("linkAuthentication", Z);
D("address", Z);
D("shippingAddress", Z);
D("paymentMethodMessaging", Z);
D("affirmMessage", Z);
D("afterpayClearpayMessage", Z);
var Ue = "basil", Jt = function(e) {
  return e === 3 ? "v3" : e;
}, Ye = "https://js.stripe.com", Qt = "".concat(Ye, "/").concat(Ue, "/stripe.js"), Kt = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/, Xt = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/;
var _t = function(e) {
  return Kt.test(e) || Xt.test(e);
}, $t = function() {
  for (var e = document.querySelectorAll('script[src^="'.concat(Ye, '"]')), n = 0; n < e.length; n++) {
    var r = e[n];
    if (_t(r.src))
      return r;
  }
  return null;
}, ye = function(e) {
  var n = "", r = document.createElement("script");
  r.src = "".concat(Qt).concat(n);
  var a = document.head || document.body;
  if (!a)
    throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
  return a.appendChild(r), r;
}, en = function(e, n) {
  !e || !e._registerWrapper || e._registerWrapper({
    name: "stripe-js",
    version: "7.4.0",
    startTime: n
  });
}, C1 = null, S1 = null, E1 = null, tn = function(e) {
  return function(n) {
    e(new Error("Failed to load Stripe.js", {
      cause: n
    }));
  };
}, nn = function(e, n) {
  return function() {
    window.Stripe ? e(window.Stripe) : n(new Error("Stripe.js not available"));
  };
}, rn = function(e) {
  return C1 !== null ? C1 : (C1 = new Promise(function(n, r) {
    if (typeof window > "u" || typeof document > "u") {
      n(null);
      return;
    }
    if (window.Stripe) {
      n(window.Stripe);
      return;
    }
    try {
      var a = $t();
      if (!(a && e)) {
        if (!a)
          a = ye(e);
        else if (a && E1 !== null && S1 !== null) {
          var o;
          a.removeEventListener("load", E1), a.removeEventListener("error", S1), (o = a.parentNode) === null || o === void 0 || o.removeChild(a), a = ye(e);
        }
      }
      E1 = nn(n, r), S1 = tn(r), a.addEventListener("load", E1), a.addEventListener("error", S1);
    } catch (s) {
      r(s);
      return;
    }
  }), C1.catch(function(n) {
    return C1 = null, Promise.reject(n);
  }));
}, an = function(e, n, r) {
  if (e === null)
    return null;
  var a = n[0], o = a.match(/^pk_test/), s = Jt(e.version), c = Ue;
  o && s !== c && console.warn("Stripe.js@".concat(s, " was loaded on the page, but @stripe/stripe-js@").concat("7.4.0", " expected Stripe.js@").concat(c, ". This may result in unexpected behavior. For more information, see https://docs.stripe.com/sdks/stripejs-versioning"));
  var i = e.apply(void 0, n);
  return en(i, r), i;
}, v1, Fe = !1, He = function() {
  return v1 || (v1 = rn(null).catch(function(e) {
    return v1 = null, Promise.reject(e);
  }), v1);
};
Promise.resolve().then(function() {
  return He();
}).catch(function(t) {
  Fe || console.warn(t);
});
var on = function() {
  for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
    n[r] = arguments[r];
  Fe = !0;
  var a = Date.now();
  return He().then(function(o) {
    return an(o, n, a);
  });
}, U = function() {
  return U = Object.assign || function(e) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, U.apply(this, arguments);
};
function De(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(t); a < r.length; a++)
      e.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[a]) && (n[r[a]] = t[r[a]]);
  return n;
}
function Ce(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function H(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ce(Object(n), !0).forEach(function(r) {
      Je(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ce(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function d1(t) {
  return d1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, d1(t);
}
function Ze(t, e) {
  if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function ve(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function Be(t, e, n) {
  return e && ve(t.prototype, e), n && ve(t, n), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Je(t, e, n) {
  return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
}
function B1(t, e) {
  if (t == null) return {};
  var n, r, a = function(s, c) {
    if (s == null) return {};
    var i, l, d = {}, h = Object.keys(s);
    for (l = 0; l < h.length; l++) i = h[l], c.indexOf(i) >= 0 || (d[i] = s[i]);
    return d;
  }(t, e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (a[n] = t[n]);
  }
  return a;
}
function sn(t, e) {
  return function(n) {
    if (Array.isArray(n)) return n;
  }(t) || function(n, r) {
    var a = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
    if (a != null) {
      var o, s, c = [], i = !0, l = !1;
      try {
        for (a = a.call(n); !(i = (o = a.next()).done) && (c.push(o.value), !r || c.length !== r); i = !0) ;
      } catch (d) {
        l = !0, s = d;
      } finally {
        try {
          i || a.return == null || a.return();
        } finally {
          if (l) throw s;
        }
      }
      return c;
    }
  }(t, e) || Qe(t, e) || function() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function cn(t) {
  return function(e) {
    if (Array.isArray(e)) return J1(e);
  }(t) || function(e) {
    if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
  }(t) || Qe(t) || function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }();
}
function Qe(t, e) {
  if (t) {
    if (typeof t == "string") return J1(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set" ? Array.from(t) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? J1(t, e) : void 0;
  }
}
function J1(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
  return r;
}
var X1 = { cookieTestUrl: "https://legacy-staging.paystack.co/test-iframe/start.html", publishableKey: "uFmz/uE/SDT6GupOrSEXIZXGByjQ0zFkPyc9LqKHFqnTI0WPN3JS5kQPo/j9or0TOXlqMQj2lzHn/UGsQT4XeQ==", publicKey: `-----BEGIN PUBLIC KEY-----\r
MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALhZs/7hP0g0+hrqTq0hFyGVxgco0NMx\r
ZD8nPS6ihxap0yNFjzdyUuZED6P4/aK9Ezl5ajEI9pcx5/1BrEE+F3kCAwEAAQ==\r
-----END PUBLIC KEY-----`, applePayVersion: 6, applePayValidateSessionPath: "applepay/validate-session/", applePayChargePath: "applepay/charge" };
H(H({}, X1), {}, { checkoutUrl: "http://localhost:8081/", paymentBaseUrl: "https://legacy-staging.paystack.co/", paystackApiUrl: "https://studio-api.paystack.co/", siteUrl: "https://paystack.com", pusherKey: "1c7b262ee18455815893", pusherUrl: "http://localhost:8081/static/vendor/pusher.min.js" });
var ln = H(H({}, X1), {}, { checkoutUrl: "https://checkout-studio.paystack.com/", paymentBaseUrl: "https://legacy-staging.paystack.co/", paystackApiUrl: "https://studio-api.paystack.co/", siteUrl: "https://beta.paystack.com", pusherKey: "1c7b262ee18455815893", pusherUrl: "https://checkout-studio.paystack.com/static/vendor/pusher.min.js" }), $ = { production: H(H({}, X1), {}, { checkoutUrl: "https://checkout.paystack.com/", paymentBaseUrl: "https://standard.paystack.co/", paystackApiUrl: "https://api.paystack.co/", siteUrl: "https://paystack.com", pusherKey: "8e4b9b7ca3418bd5cdc8", pusherUrl: "https://checkout.paystack.com/static/vendor/pusher.min.js" }) }.production || ln;
function Ke(t, e) {
  var n = [];
  return Object.keys(t).forEach(function(r) {
    var a = e ? "".concat(e, "[").concat(r, "]") : r, o = t[a];
    n.push(o !== null && (typeof v > "u" ? "undefined" : d1(v)) === "object" ? Ke(o, a) : "".concat(encodeURIComponent(r), "=").concat(encodeURIComponent(o)));
  }), n.join("&");
}
function h1() {
  return document.currentScript || (t = document.getElementsByTagName("script"))[t.length - 1];
  var t;
}
function be() {
  var t = [], e = h1();
  if (e) {
    var n = Array.prototype.slice.call(e.attributes);
    t = Object.keys(n).filter(function(r) {
      var a = n[r].nodeName;
      return a && a.indexOf("data") > -1;
    }).map(function(r) {
      return n[r].nodeName;
    });
  }
  return t;
}
var Xe = `
  <svg id="inline-button-wordmark--white" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#ffffff"/>
  </svg>
`, un = `
<svg id="inline-button-wordmark--grey" width="166" height="16" viewBox="0 0 166 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M0.564068 6.26985L1.86515 6.10375C1.85184 5.15143 1.83489 3.71187 1.84942 3.45964C1.95955 1.67927 3.39982 0.16589 5.13056 0.0170127C5.23949 0.00839996 5.34842 0.0034784 5.45371 0.00101762C6.36645 -0.0209585 7.25272 0.313716 7.93 0.936113C8.62472 1.56238 9.07979 2.4864 9.14999 3.4055C9.16815 3.64174 9.1621 5.24002 9.1621 6.18249L10.4886 6.38305L10.4438 14.0767L5.47308 14.7657L0.519287 13.961L0.564068 6.26985ZM5.53359 5.63743L7.62016 5.95241C7.61169 4.80446 7.55965 3.12867 7.30548 2.68696C6.91939 2.0164 6.28156 1.62021 5.55901 1.60421H5.48276C4.7481 1.61406 4.10543 2.0004 3.71813 2.66727C3.44944 3.13236 3.39619 4.70972 3.3974 5.91181L5.53359 5.63743ZM22.5808 12.4378C21.8836 12.4378 21.293 12.3492 20.8089 12.172C20.372 12.0088 19.9719 11.7577 19.6325 11.4338C19.3256 11.1331 19.0833 10.7712 18.9208 10.3707C18.7637 9.95815 18.6612 9.52621 18.6158 9.08621H19.8358C19.8745 9.40119 19.9423 9.70141 20.0391 9.98686C20.136 10.2625 20.286 10.5085 20.4894 10.7251C20.6927 10.9318 20.959 11.0991 21.2882 11.2271C21.6271 11.3452 22.0579 11.4043 22.5808 11.4043C22.9197 11.4043 23.2295 11.36 23.5103 11.2714C23.8008 11.173 24.0525 11.0351 24.2655 10.858C24.4785 10.6808 24.6431 10.4692 24.7593 10.2231C24.8852 9.97701 24.9481 9.70633 24.9481 9.41103C24.9481 9.11574 24.9094 8.85982 24.8319 8.64327C24.7536 8.41559 24.6125 8.21568 24.4253 8.06745C24.196 7.88594 23.9347 7.75064 23.6555 7.6688C23.257 7.54201 22.849 7.4482 22.4355 7.38828C21.9393 7.31041 21.4491 7.19693 20.9686 7.04869C20.5808 6.92967 20.2133 6.75038 19.8794 6.51716C19.5939 6.29685 19.3607 6.01432 19.1968 5.69034C19.0418 5.35567 18.9644 4.9521 18.9644 4.47963C18.9644 4.07607 19.0467 3.70203 19.2113 3.35752C19.3759 3.00317 19.6034 2.69803 19.8939 2.44211C20.194 2.18619 20.5475 1.98441 20.9541 1.83676C21.3608 1.68911 21.811 1.61529 22.3048 1.61529C23.3505 1.61529 24.1784 1.86629 24.7884 2.36829C25.4081 2.86044 25.7711 3.57899 25.8777 4.52393H24.7448C24.6189 3.8546 24.3624 3.37721 23.9751 3.09176C23.5878 2.79646 23.031 2.64882 22.3048 2.64882C21.5883 2.64882 21.0461 2.81123 20.6782 3.13605C20.5037 3.28606 20.3648 3.47417 20.2717 3.68635C20.1787 3.89853 20.1339 4.12931 20.1408 4.36152C20.1408 4.61744 20.1698 4.84875 20.2279 5.05546C20.2957 5.25232 20.4167 5.42457 20.591 5.57222C20.775 5.71987 21.0267 5.85275 21.3463 5.97087C21.7689 6.09987 22.2012 6.19369 22.6389 6.25139C23.2198 6.33998 23.7281 6.4581 24.1639 6.60575C24.5996 6.75339 24.9675 6.94533 25.2677 7.18157C25.5678 7.4178 25.7905 7.70818 25.9358 8.05268C26.0907 8.39719 26.1681 8.82045 26.1681 9.32245C26.1681 9.76539 26.0761 10.1788 25.8922 10.5627C25.7149 10.9408 25.4627 11.2775 25.1515 11.5519C24.8319 11.8275 24.4495 12.0441 24.0041 12.2016C23.5684 12.359 23.094 12.4378 22.5808 12.4378ZM31.2066 12.4378C30.6741 12.4378 30.1803 12.3443 29.7252 12.1573C29.2906 11.9775 28.8956 11.7115 28.5633 11.3747C28.2268 11.0185 27.965 10.5966 27.7936 10.1345C27.6136 9.61796 27.5251 9.07309 27.5321 8.52515V8.40704C27.5321 7.82629 27.6193 7.29476 27.7936 6.81245C27.9679 6.3203 28.2099 5.90196 28.5198 5.55746C28.8393 5.2031 29.2169 4.93242 29.6526 4.7454C30.0883 4.54854 30.5676 4.45011 31.0905 4.45011C31.5262 4.45011 31.9473 4.52393 32.354 4.67158C32.7704 4.80938 33.1383 5.03085 33.4578 5.33599C33.7773 5.64112 34.0291 6.03977 34.213 6.53192C34.4067 7.01424 34.5035 7.5999 34.5035 8.28892V8.68756H28.7812C28.8102 9.57345 29.0281 10.2526 29.4348 10.7251C29.8414 11.1877 30.4369 11.419 31.2212 11.419C32.4121 11.419 33.085 10.9712 33.24 10.0754H34.4454C34.3099 10.8531 33.9516 11.4436 33.3707 11.8472C32.7897 12.2409 32.0684 12.4378 31.2066 12.4378ZM33.269 7.69833C33.2109 6.90104 32.9882 6.33014 32.6009 5.98563C32.2233 5.64112 31.7198 5.46887 31.0905 5.46887C30.4708 5.46887 29.9624 5.67065 29.5655 6.07422C29.1782 6.46794 28.9313 7.00932 28.8248 7.69833H33.269ZM39.3593 12.4378C38.8267 12.4378 38.3329 12.3492 37.8779 12.172C37.4401 11.9901 37.0407 11.7245 36.7014 11.3895C36.3636 11.0315 36.0973 10.6103 35.9172 10.1493C35.7268 9.63002 35.6332 9.07925 35.6412 8.52515V8.40704C35.6412 7.81645 35.738 7.28 35.9317 6.79769C36.1253 6.30553 36.3868 5.8872 36.716 5.54269C37.0548 5.19818 37.447 4.93242 37.8924 4.7454C38.3475 4.54854 38.8267 4.45011 39.3302 4.45011C39.7272 4.45011 40.1097 4.49932 40.4776 4.59775C40.8552 4.69618 41.1893 4.85367 41.4797 5.07022C41.7799 5.27693 42.0316 5.55253 42.235 5.89704C42.4383 6.24155 42.569 6.65988 42.6271 7.15204H41.4362C41.3393 6.54177 41.0924 6.10867 40.6955 5.85275C40.3082 5.59683 39.8531 5.46887 39.3302 5.46887C38.995 5.46599 38.6632 5.53649 38.3571 5.67557C38.0667 5.81338 37.8101 6.01024 37.5874 6.26616C37.3615 6.53514 37.1889 6.84598 37.0791 7.18157C36.9484 7.57626 36.8845 7.99063 36.8902 8.40704V8.52515C36.8902 9.47994 37.1178 10.2034 37.5729 10.6956C38.0376 11.1779 38.6379 11.419 39.3738 11.419C39.6449 11.419 39.9015 11.3797 40.1436 11.3009C40.6361 11.1497 41.0523 10.8113 41.3055 10.356C41.441 10.1197 41.5233 9.84413 41.5524 9.52915H42.6707C42.6338 9.9361 42.5204 10.3321 42.3366 10.6956C42.1663 11.0447 41.9293 11.3559 41.6395 11.611C41.349 11.8669 41.0101 12.0687 40.6228 12.2163C40.2355 12.364 39.8144 12.4378 39.3593 12.4378ZM46.9164 12.4378C46.5568 12.4406 46.199 12.3858 45.8562 12.2754C45.5441 12.1717 45.2605 11.9947 45.0284 11.7586C44.7829 11.4908 44.595 11.1741 44.4765 10.8284C44.3409 10.4544 44.2731 10.0016 44.2731 9.47009V4.58299H45.4786V9.41103C45.4786 10.0902 45.619 10.5873 45.8998 10.9023C46.1903 11.2172 46.6356 11.3747 47.236 11.3747C47.5071 11.3747 47.7685 11.3304 48.0202 11.2419C48.272 11.1533 48.4947 11.0204 48.6883 10.8432C48.882 10.666 49.0369 10.4446 49.1531 10.1788C49.2693 9.91303 49.3274 9.6079 49.3274 9.26339V4.58299H50.5328V12.3049H49.3274V11.0794C49.1531 11.4436 48.8578 11.7635 48.4414 12.0391C48.0348 12.3049 47.5264 12.4378 46.9164 12.4378ZM52.8239 4.58299H54.0294V5.97087C54.2715 5.53777 54.5765 5.18342 54.9444 4.90781C55.322 4.62236 55.8497 4.46979 56.5275 4.45011V5.60175C56.1799 5.61707 55.8346 5.66652 55.4963 5.7494C55.2039 5.81939 54.9308 5.95567 54.6975 6.14804C54.4729 6.35252 54.303 6.6116 54.2037 6.90104C54.0875 7.20618 54.0294 7.59498 54.0294 8.06745V12.3049H52.8239V4.58299ZM61.0347 12.4378C60.5021 12.4378 60.0083 12.3443 59.5533 12.1573C59.1186 11.9775 58.7236 11.7115 58.3914 11.3747C58.0549 11.0185 57.793 10.5966 57.6216 10.1345C57.4416 9.61796 57.3531 9.07309 57.3602 8.52515V8.40704C57.3602 7.82629 57.4473 7.29476 57.6216 6.81245C57.7959 6.3203 58.038 5.90196 58.3478 5.55746C58.6673 5.2031 59.0449 4.93242 59.4806 4.7454C59.9164 4.54854 60.3956 4.45011 60.9185 4.45011C61.3542 4.45011 61.7754 4.52393 62.1821 4.67158C62.5984 4.80938 62.9663 5.03085 63.2859 5.33599C63.6054 5.64112 63.8571 6.03977 64.0411 6.53192C64.2347 7.01424 64.3316 7.5999 64.3316 8.28892V8.68756H58.6092C58.6383 9.57345 58.8561 10.2526 59.2628 10.7251C59.6695 11.1877 60.2649 11.419 61.0492 11.419C62.2401 11.419 62.9131 10.9712 63.068 10.0754H64.2735C64.1379 10.8531 63.7797 11.4436 63.1987 11.8472C62.6178 12.2409 61.8964 12.4378 61.0347 12.4378ZM63.097 7.69833C63.0389 6.90104 62.8162 6.33014 62.429 5.98563C62.0513 5.64112 61.5478 5.46887 60.9185 5.46887C60.2988 5.46887 59.7905 5.67065 59.3935 6.07422C59.0062 6.46794 58.7593 7.00932 58.6528 7.69833H63.097ZM68.8968 12.4378C68.403 12.4378 67.9431 12.3541 67.5171 12.1868C67.1072 12.0141 66.7365 11.7578 66.4278 11.4338C66.1165 11.0803 65.8749 10.6693 65.7161 10.2231C65.5451 9.69956 65.4617 9.15057 65.4692 8.59898V8.48086C65.4692 7.89027 65.5564 7.3489 65.7307 6.85675C65.905 6.36459 66.147 5.94134 66.4569 5.58698C66.7667 5.22279 67.1395 4.94226 67.5752 4.7454C68.0109 4.54854 68.4902 4.45011 69.013 4.45011C69.6521 4.45011 70.1701 4.58791 70.5671 4.86352C70.964 5.12928 71.2739 5.44918 71.4966 5.82322V0.891819H72.702V12.3049H71.4966V10.9761C71.3901 11.1631 71.2448 11.3452 71.0609 11.5224C70.8713 11.7038 70.6617 11.8623 70.4363 11.9949C70.2066 12.1258 69.963 12.2298 69.7102 12.3049C69.4487 12.3935 69.1776 12.4378 68.8968 12.4378ZM69.0275 11.419C69.3761 11.419 69.7053 11.36 70.0152 11.2419C70.325 11.1237 70.5913 10.9466 70.814 10.7103C71.0367 10.4642 71.2109 10.1591 71.3368 9.79492C71.4724 9.42088 71.5401 8.98778 71.5401 8.49562V8.37751C71.5401 7.38335 71.3223 6.65004 70.8866 6.17757C70.4606 5.7051 69.8748 5.46887 69.1292 5.46887C68.374 5.46887 67.7834 5.72479 67.3573 6.23663C66.9313 6.74847 66.7183 7.47686 66.7183 8.4218V8.53992C66.7183 9.02223 66.7764 9.44549 66.8926 9.80968C67.0184 10.1739 67.183 10.4741 67.3864 10.7103C67.5994 10.9466 67.8463 11.1237 68.1271 11.2419C68.4079 11.36 68.708 11.419 69.0275 11.419ZM82.4716 12.4378C81.852 12.4378 81.3243 12.3 80.8886 12.0244C80.485 11.7813 80.146 11.4417 79.901 11.0351V12.3049H78.6955V0.891819H79.901V5.88228C80.0153 5.68531 80.1572 5.50626 80.3221 5.35075C80.5061 5.17357 80.7094 5.02101 80.9321 4.89305C81.1645 4.75524 81.4114 4.64697 81.6729 4.56822C81.9343 4.48948 82.2005 4.45011 82.4716 4.45011C82.9655 4.45011 83.4254 4.53869 83.8514 4.71587C84.2774 4.89305 84.6405 5.14897 84.9407 5.48363C85.2505 5.8183 85.4926 6.22679 85.6669 6.7091C85.8411 7.19141 85.9283 7.73278 85.9283 8.33321V8.45133C85.9283 9.04192 85.846 9.58329 85.6814 10.0754C85.5295 10.535 85.2929 10.9609 84.9843 11.3304C84.6852 11.6839 84.3133 11.9662 83.895 12.1573C83.4445 12.3492 82.96 12.4447 82.4716 12.4378ZM82.3555 11.419C83.1107 11.419 83.6868 11.173 84.0838 10.6808C84.4808 10.1788 84.6793 9.45533 84.6793 8.51039V8.39227C84.6793 7.90012 84.6163 7.47194 84.4904 7.10775C84.3829 6.77559 84.2099 6.46915 83.9821 6.2071C83.7841 5.96487 83.5294 5.77704 83.2414 5.66081C82.9581 5.53232 82.6511 5.46687 82.3409 5.46887C81.9924 5.46887 81.6632 5.52793 81.3533 5.64604C81.0537 5.7638 80.7852 5.95084 80.569 6.19234C80.3464 6.42857 80.1721 6.73371 80.0462 7.10775C79.9127 7.52209 79.8488 7.95635 79.8574 8.39227V8.51039C79.8574 9.4947 80.0898 10.228 80.5545 10.7103C81.0193 11.1828 81.6196 11.419 82.3555 11.419ZM89.6342 11.5076L86.6569 4.58299H87.9495L90.2733 10.1197L92.3792 4.58299H93.6137L89.4164 14.9921H88.1964L89.6342 11.5076ZM105.97 4.51532C105.618 4.13844 105.195 3.83755 104.727 3.63067C104.257 3.42601 103.751 3.32132 103.241 3.32307C102.698 3.32307 102.214 3.42888 101.804 3.64297C101.501 3.7934 101.229 4.00091 101.003 4.25447V4.01947C101.003 3.93064 100.979 3.84347 100.933 3.76781C100.888 3.69214 100.822 3.631 100.744 3.59129C100.691 3.56626 100.633 3.55364 100.574 3.55438H98.9827C98.9241 3.55245 98.8658 3.56433 98.8125 3.58909C98.7592 3.61385 98.7122 3.65082 98.6753 3.69711C98.5956 3.78474 98.5523 3.90019 98.5542 4.01947V15.0561C98.5542 15.1791 98.5954 15.2874 98.6753 15.3735C98.715 15.4152 98.7629 15.4479 98.8158 15.4698C98.8688 15.4916 98.9256 15.502 98.9827 15.5002H100.606C100.661 15.5001 100.715 15.4889 100.766 15.4671C100.817 15.4453 100.863 15.4135 100.901 15.3735C100.945 15.3333 100.979 15.284 101.002 15.229C101.025 15.174 101.036 15.1146 101.034 15.0548V11.2898C101.25 11.5384 101.539 11.7291 101.884 11.8607C102.307 12.0256 102.755 12.1105 103.207 12.1105C103.727 12.1105 104.233 12.0096 104.71 11.8054C105.185 11.599 105.613 11.2958 105.969 10.9146C106.338 10.5135 106.628 10.0422 106.824 9.52669C107.044 8.94733 107.152 8.33033 107.143 7.70941C107.143 7.045 107.038 6.43349 106.824 5.89212C106.631 5.38011 106.341 4.91182 105.97 4.51409V4.51532ZM104.513 8.50178C104.424 8.73555 104.295 8.94718 104.131 9.12928C103.969 9.31219 103.77 9.45789 103.547 9.55674C103.325 9.65558 103.085 9.70531 102.842 9.70264C102.6 9.70387 102.358 9.65342 102.136 9.55499C101.911 9.4556 101.71 9.31074 101.542 9.12928C101.375 8.94704 101.244 8.73407 101.155 8.50178C101.062 8.25439 101.015 7.99155 101.016 7.72663C101.016 7.45102 101.064 7.19141 101.155 6.95026C101.332 6.48635 101.682 6.1122 102.128 5.90935C102.352 5.80353 102.595 5.7494 102.842 5.75063C103.103 5.75063 103.343 5.80476 103.56 5.91058C103.774 6.0127 103.969 6.15542 104.134 6.33014C104.476 6.71058 104.661 7.21105 104.648 7.72663C104.648 8.00347 104.603 8.26308 104.513 8.50178ZM115.859 3.55684H114.249C114.193 3.55751 114.138 3.56987 114.087 3.59315C114.036 3.61643 113.99 3.65013 113.952 3.69219C113.868 3.78 113.821 3.8973 113.821 4.01947V4.22371C113.62 3.9808 113.372 3.78302 113.092 3.64297C112.654 3.42397 112.17 3.31511 111.681 3.32553C111.166 3.32821 110.657 3.43439 110.183 3.63795C109.708 3.84151 109.278 4.13843 108.917 4.51162C108.537 4.91069 108.236 5.37962 108.029 5.89335C107.801 6.47081 107.687 7.08847 107.696 7.71064C107.696 8.37505 107.807 8.98655 108.029 9.52792C108.251 10.0619 108.545 10.5331 108.91 10.9158C109.265 11.2945 109.693 11.5958 110.167 11.8016C110.641 12.0074 111.15 12.1133 111.665 12.113C112.194 12.113 112.675 12.0047 113.085 11.7943C113.388 11.6343 113.637 11.4412 113.821 11.2148V11.4326C113.82 11.4923 113.831 11.5516 113.854 11.6066C113.877 11.6615 113.911 11.7109 113.954 11.7512C113.993 11.7915 114.038 11.8236 114.089 11.8456C114.14 11.8676 114.194 11.879 114.249 11.8792H115.859C115.916 11.8812 115.972 11.8706 116.024 11.8483C116.077 11.826 116.124 11.7925 116.162 11.75C116.203 11.7085 116.235 11.6589 116.256 11.6043C116.277 11.5497 116.287 11.4912 116.285 11.4326V4.0207C116.287 3.90142 116.244 3.78597 116.164 3.69834C116.127 3.65337 116.08 3.61736 116.027 3.5929C115.975 3.56844 115.917 3.55613 115.859 3.55684ZM113.685 8.4907C113.601 8.72324 113.473 8.9368 113.308 9.11943C113.143 9.29538 112.95 9.43933 112.735 9.54269C112.52 9.64727 112.275 9.70141 112.014 9.70141C111.764 9.70141 111.521 9.64727 111.3 9.54146C111.079 9.4398 110.881 9.29437 110.717 9.11372C110.552 8.93306 110.425 8.72082 110.343 8.48947C110.253 8.24551 110.207 7.98712 110.207 7.72663C110.207 7.44979 110.253 7.19018 110.343 6.94903C110.433 6.71156 110.562 6.50116 110.723 6.32891C110.888 6.15296 111.086 6.00901 111.301 5.90812C111.521 5.80353 111.764 5.7494 112.015 5.7494C112.275 5.7494 112.52 5.80353 112.735 5.90935C112.951 6.01393 113.144 6.15542 113.308 6.32891C113.65 6.70961 113.834 7.21001 113.821 7.7254C113.821 7.98993 113.776 8.24709 113.685 8.4907ZM131.919 7.49901C131.685 7.28955 131.417 7.12228 131.127 7.00439C130.828 6.88012 130.511 6.78169 130.177 6.71525L128.95 6.46425C128.635 6.40273 128.416 6.3203 128.293 6.21448C128.242 6.17732 128.201 6.12853 128.172 6.07209C128.144 6.01565 128.128 5.95315 128.128 5.88966C128.128 5.75432 128.204 5.64358 128.357 5.54269C128.523 5.43688 128.755 5.38274 129.042 5.38274C129.357 5.38274 129.669 5.44795 129.958 5.57591C130.252 5.70633 130.528 5.85398 130.769 6.01885C131.126 6.24893 131.43 6.21817 131.649 5.95364L132.238 5.25232C132.351 5.13393 132.416 4.97752 132.422 4.81307C132.422 4.65558 132.345 4.51162 132.198 4.3812C131.948 4.15481 131.553 3.91612 131.023 3.68234C130.494 3.44611 129.829 3.32553 129.042 3.32553C128.525 3.32553 128.049 3.39689 127.628 3.53716C127.205 3.67988 126.842 3.87674 126.547 4.12036C126.251 4.37136 126.017 4.66173 125.858 4.99763C125.699 5.33341 125.617 5.70154 125.618 6.07422C125.618 6.76324 125.82 7.32552 126.218 7.74509C126.615 8.15481 127.145 8.43411 127.796 8.56945L129.072 8.8549C129.435 8.93118 129.711 9.01731 129.889 9.11328C130.045 9.19572 130.119 9.31383 130.119 9.47871C130.119 9.62635 130.045 9.758 129.892 9.87735C129.731 10.0053 129.478 10.0681 129.139 10.0681C128.79 10.0717 128.445 9.99161 128.133 9.83429C127.836 9.68469 127.56 9.49515 127.312 9.27077C127.202 9.17922 127.076 9.1084 126.941 9.0616C126.788 9.01608 126.616 9.0653 126.419 9.22155L125.714 9.78876C125.509 9.96717 125.423 10.1825 125.461 10.431C125.496 10.6697 125.691 10.9158 126.055 11.1939C126.38 11.4313 126.798 11.6467 127.3 11.8312C127.803 12.017 128.391 12.113 129.059 12.113C129.596 12.113 130.092 12.0416 130.529 11.9013C130.967 11.7549 131.354 11.5593 131.668 11.3108C131.98 11.0724 132.231 10.7631 132.404 10.4077C132.576 10.0523 132.663 9.66076 132.659 9.26462C132.659 8.87212 132.595 8.52638 132.46 8.23601C132.331 7.95492 132.147 7.70366 131.919 7.49778V7.49901ZM138.958 9.51193C138.923 9.445 138.872 9.3882 138.809 9.34687C138.747 9.30555 138.675 9.28105 138.601 9.27569C138.451 9.27322 138.305 9.3222 138.186 9.41473C138.071 9.49101 137.946 9.55007 137.815 9.58821C137.649 9.64412 137.47 9.64967 137.3 9.60421C137.219 9.58443 137.144 9.54519 137.081 9.48978C137.005 9.42056 136.946 9.33472 136.908 9.23878C136.855 9.09669 136.83 8.94521 136.836 8.79338V5.76662H138.931C139.051 5.76662 139.159 5.71741 139.253 5.62267C139.295 5.58108 139.329 5.5314 139.352 5.4765C139.376 5.42159 139.388 5.36254 139.389 5.30276V4.02193C139.389 3.96024 139.377 3.89918 139.353 3.84249C139.329 3.78579 139.294 3.73465 139.25 3.69219C139.165 3.60724 139.05 3.55916 138.931 3.55807H136.835V1.49717C136.838 1.43555 136.827 1.37406 136.805 1.31679C136.782 1.25952 136.748 1.20777 136.704 1.16497C136.627 1.08454 136.521 1.03854 136.41 1.03701H134.784C134.695 1.03555 134.609 1.06135 134.535 1.11101C134.462 1.16066 134.405 1.23182 134.372 1.31507C134.349 1.37287 134.338 1.43484 134.339 1.49717V3.55684H133.411C133.353 3.55549 133.294 3.5675 133.241 3.59199C133.188 3.61647 133.14 3.65281 133.102 3.69834C133.025 3.78687 132.982 3.90193 132.984 4.0207V5.304C132.985 5.39177 133.01 5.47753 133.055 5.55238C133.1 5.62724 133.164 5.68846 133.24 5.72971C133.294 5.75555 133.352 5.76908 133.41 5.76662H134.339V9.36551C134.339 9.84536 134.423 10.2588 134.581 10.5996C134.741 10.9367 134.951 11.2197 135.204 11.4313C135.466 11.6503 135.766 11.8128 136.088 11.9087C136.415 12.0121 136.755 12.0638 137.096 12.0638C137.562 12.0638 138.004 11.9887 138.421 11.8423C138.817 11.7053 139.175 11.4722 139.463 11.1631C139.647 10.9404 139.668 10.6943 139.518 10.4483L138.958 9.51316V9.51193ZM147.78 3.55684H146.171C146.116 3.55785 146.061 3.57036 146.01 3.59363C145.959 3.6169 145.914 3.65043 145.876 3.69219C145.835 3.73558 145.802 3.78651 145.779 3.84229C145.758 3.89876 145.746 3.95885 145.747 4.01947V4.22371C145.544 3.98167 145.295 3.78409 145.014 3.64297C144.609 3.43011 144.136 3.32553 143.601 3.32553C143.092 3.32553 142.591 3.42765 142.117 3.6319C141.638 3.83631 141.204 4.13534 140.84 4.51162C140.46 4.9102 140.158 5.37925 139.952 5.89335C139.722 6.47038 139.608 7.08828 139.618 7.71064C139.618 8.37505 139.729 8.98655 139.95 9.52792C140.173 10.0619 140.468 10.5331 140.833 10.9158C141.188 11.2943 141.614 11.5956 142.087 11.8014C142.56 12.0072 143.069 12.1132 143.584 12.113C144.076 12.1217 144.563 12.0125 145.006 11.7943C145.314 11.6343 145.559 11.4412 145.747 11.2148V11.4326C145.745 11.4921 145.756 11.5513 145.778 11.6062C145.801 11.6612 145.834 11.7106 145.877 11.7512C145.916 11.7913 145.961 11.8232 146.012 11.8452C146.062 11.8671 146.116 11.8787 146.171 11.8792H147.78C147.837 11.8806 147.893 11.8699 147.946 11.8476C147.998 11.8254 148.046 11.7921 148.085 11.75C148.166 11.6649 148.21 11.5508 148.208 11.4326V4.0207C148.21 3.90149 148.167 3.78617 148.087 3.69834C148.049 3.65272 148.002 3.61618 147.948 3.59129C147.895 3.56679 147.838 3.555 147.78 3.55684ZM145.606 8.4907C145.437 8.95456 145.095 9.33232 144.655 9.54269C144.43 9.64997 144.184 9.70423 143.936 9.70141C143.685 9.70141 143.446 9.64727 143.224 9.54146C143.004 9.43906 142.806 9.2934 142.642 9.11285C142.477 8.9323 142.349 8.72044 142.266 8.48947C142.175 8.24565 142.129 7.98721 142.129 7.72663C142.129 7.44979 142.174 7.19018 142.264 6.94903C142.353 6.71894 142.481 6.50855 142.645 6.32891C142.812 6.15296 143.008 6.00901 143.224 5.90812C143.447 5.8023 143.69 5.74817 143.936 5.7494C144.199 5.7494 144.438 5.80353 144.655 5.90935C144.874 6.01393 145.066 6.15542 145.226 6.32891C145.388 6.50486 145.517 6.71402 145.606 6.94903C145.796 7.44486 145.796 7.99486 145.606 8.4907ZM156.622 9.40119L155.699 8.67157C155.522 8.52638 155.355 8.48701 155.21 8.54853C155.079 8.60436 154.964 8.69079 154.872 8.80076C154.673 9.05649 154.434 9.27863 154.167 9.45902C153.934 9.60913 153.629 9.68418 153.269 9.68418C153.004 9.68418 152.76 9.63496 152.542 9.53407C152.327 9.43495 152.134 9.2917 151.975 9.11328C151.812 8.93013 151.686 8.71715 151.602 8.48578C151.515 8.24262 151.471 7.98546 151.474 7.72663C151.474 7.4461 151.515 7.18772 151.602 6.94903C151.687 6.71279 151.811 6.50239 151.975 6.33014C152.138 6.15296 152.332 6.01024 152.546 5.90935C152.772 5.80107 153.019 5.74694 153.269 5.7494C153.629 5.7494 153.931 5.82814 154.167 5.97948C154.406 6.13451 154.646 6.35598 154.873 6.63651C154.968 6.7497 155.079 6.83337 155.21 6.88997C155.358 6.94903 155.523 6.90965 155.695 6.7657L156.618 6.03485C156.732 5.95424 156.817 5.83809 156.861 5.70387C156.886 5.63045 156.896 5.55227 156.889 5.47473C156.882 5.39719 156.858 5.32214 156.82 5.25478C156.464 4.67928 155.973 4.20275 155.391 3.86813C154.781 3.51009 154.05 3.32553 153.232 3.32553C152.668 3.32238 152.109 3.43311 151.588 3.65129C151.066 3.86947 150.593 4.19076 150.194 4.59652C149.805 4.99271 149.497 5.4701 149.29 5.99547C149.07 6.54494 148.957 7.13314 148.96 7.72663C148.96 8.33567 149.072 8.91765 149.29 9.45164C149.5 9.97332 149.807 10.4458 150.194 10.8395C150.593 11.2451 151.067 11.5663 151.588 11.7846C152.11 12.003 152.668 12.1142 153.232 12.1117C154.05 12.1117 154.781 11.9284 155.391 11.5654C155.976 11.232 156.468 10.7537 156.822 10.1751C156.86 10.1101 156.882 10.0374 156.889 9.96225C156.896 9.88643 156.886 9.80992 156.861 9.73832C156.813 9.60626 156.731 9.49007 156.622 9.40242V9.40119ZM165.194 11.1299L162.647 7.26277L164.827 4.29138C164.941 4.12036 164.971 3.95672 164.918 3.80292C164.88 3.69219 164.777 3.55684 164.514 3.55684H162.789C162.69 3.55775 162.593 3.58219 162.506 3.62821C162.398 3.68359 162.309 3.77173 162.253 3.88043L160.511 6.39904H160.089V0.447649C160.091 0.329229 160.048 0.214475 159.969 0.127748C159.929 0.0869473 159.881 0.0547186 159.828 0.0329554C159.776 0.0111921 159.719 0.000333517 159.663 0.00101762H158.051C157.964 0.00131009 157.88 0.0270233 157.807 0.0750545C157.735 0.123086 157.678 0.191382 157.643 0.271703C157.62 0.327334 157.608 0.387308 157.61 0.447649V11.4313C157.61 11.5581 157.656 11.6688 157.743 11.75C157.783 11.7911 157.831 11.8236 157.884 11.8456C157.937 11.8676 157.993 11.8786 158.051 11.878H159.664C159.721 11.8798 159.777 11.8692 159.83 11.8469C159.882 11.8246 159.929 11.7912 159.968 11.7488C160.007 11.7068 160.038 11.657 160.058 11.6024C160.08 11.5477 160.09 11.489 160.087 11.4301V8.52392H160.555L162.456 11.5335C162.592 11.7635 162.779 11.8792 163.013 11.8792H164.817C165.091 11.8792 165.205 11.7439 165.251 11.6307C165.316 11.4707 165.297 11.3083 165.194 11.1311V11.1299ZM125.015 3.55684H123.213C123.146 3.55424 123.079 3.56628 123.017 3.59218C122.954 3.61807 122.898 3.6572 122.852 3.70695C122.774 3.79331 122.72 3.89895 122.695 4.01332L121.365 9.14035H121.041L119.61 4.01332C119.586 3.90347 119.539 3.79998 119.473 3.70941C119.435 3.66072 119.386 3.62162 119.331 3.59516C119.276 3.5687 119.215 3.55559 119.154 3.55684H117.285C117.044 3.55684 116.892 3.63805 116.835 3.79431C116.786 3.94184 116.785 4.10149 116.832 4.24955L119.116 11.4658C119.152 11.5802 119.213 11.675 119.292 11.7512C119.337 11.7944 119.391 11.828 119.449 11.8499C119.507 11.8719 119.57 11.8818 119.632 11.8792H120.598L120.518 12.113L120.288 12.786C120.225 12.9927 120.103 13.1754 119.937 13.3101C119.784 13.4312 119.595 13.4954 119.402 13.4922C119.234 13.4914 119.069 13.4536 118.918 13.3815C118.768 13.312 118.625 13.2257 118.494 13.1243C118.375 13.0381 118.234 12.9889 118.089 12.9829H118.069C117.912 12.9829 117.775 13.0739 117.665 13.2486L117.091 14.1197C116.858 14.4938 116.987 14.7399 117.139 14.8764C117.422 15.152 117.778 15.3673 118.198 15.5211C118.614 15.6749 119.073 15.75 119.56 15.75C120.386 15.75 121.076 15.5199 121.605 15.0548C122.131 14.5922 122.52 13.9635 122.757 13.1797L125.405 4.24955C125.465 4.05884 125.465 3.90012 125.411 3.77093C125.366 3.6725 125.26 3.55684 125.015 3.55684Z"
  fill="#838383"
/>
</svg>
`, pn = `
  <button type="button" id="apple-pay-close-button">
    <svg width="10" height="9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.572 4.033L8.89.71a.4.4 0 0 0-.566-.566L5.003 3.459 1.681.145a.4.4 0 0 0-.566.566L4.44 4.033
      1.115 7.354a.398.398 0 0 0 0 .566.4.4 0 0 0 .566 0l3.322-3.33 3.322 3.33a.4.4 0 0 0 .566-.566L5.57 4.033z"
        fill="white"
      />
    </svg>
  </button>
`, dn = `
<svg width="74" height="19" viewBox="0 0 74 19" fill="none" xmlns="http://www.w3.org/2000/svg" id="vault-logo">
  <g clip-path="url(#clip0_9910_9664)">
    <path
      d="M32.1273 15.8163H28.9432C28.6448 15.8163 28.4481 15.6622 28.3497 15.3507L25.1886 6.20188C25.1165 6.01825 25.1296 5.85101 25.2214 5.70345C25.3132 5.55589 25.451 5.48047 25.6346 5.48047H27.9693C28.2513 5.48047 28.435 5.63787 28.5202 5.94611L30.6648 12.9077L32.5536 5.94611C32.6388 5.63459 32.829 5.48047 33.1274 5.48047H35.4195C35.6031 5.48047 35.7441 5.55589 35.8425 5.70345C35.9409 5.85101 35.954 6.01825 35.8851 6.20188L32.7241 15.3507C32.6257 15.6622 32.4257 15.8163 32.1305 15.8163H32.1273Z"
      fill="#343C43" />
    <path
      d="M37.6361 14.5842C36.6097 13.5644 36.0981 12.2495 36.0981 10.6362C36.0981 9.02283 36.6097 7.71118 37.6361 6.69792C38.6624 5.68795 39.8757 5.17969 41.2759 5.17969C41.9416 5.17969 42.5384 5.31085 43.0696 5.57318C43.6008 5.83551 43.9943 6.16998 44.2468 6.57988V5.94373C44.2468 5.81584 44.2927 5.70763 44.3845 5.61581C44.4763 5.524 44.578 5.47809 44.6927 5.47809H46.8373C46.9652 5.47809 47.0701 5.524 47.1554 5.61581C47.2406 5.70763 47.2833 5.81584 47.2833 5.94373V15.3679C47.2833 15.4958 47.2406 15.6008 47.1554 15.686C47.0701 15.7713 46.9652 15.8139 46.8373 15.8139H44.6927C44.578 15.8139 44.4763 15.7713 44.3845 15.686C44.2927 15.6008 44.2468 15.4958 44.2468 15.3679V14.7088C43.991 15.1187 43.6008 15.4565 43.0696 15.7155C42.5384 15.9779 41.935 16.109 41.2562 16.109C39.8691 16.109 38.6624 15.6008 37.6361 14.581V14.5842ZM39.9151 8.79985C39.433 9.31795 39.1936 9.93443 39.1936 10.6558C39.1936 11.3772 39.433 11.997 39.9151 12.5118C40.3971 13.0299 40.9972 13.2857 41.7186 13.2857C42.44 13.2857 43.0401 13.0266 43.5221 12.5118C44.0041 11.997 44.2435 11.3772 44.2435 10.6558C44.2435 9.93443 44.0041 9.31467 43.5221 8.79985C43.0401 8.28502 42.44 8.02597 41.7186 8.02597C40.9972 8.02597 40.3938 8.28502 39.9151 8.79985Z"
      fill="#343C43" />
    <path
      d="M51.6315 5.9016V11.2302C51.6315 11.9385 51.8086 12.4959 52.1627 12.9058C52.5169 13.3157 53.0415 13.5223 53.7334 13.5223C54.4253 13.5223 54.9401 13.319 55.3139 12.9058C55.6878 12.4959 55.878 11.9516 55.878 11.2728V5.9016C55.878 5.78683 55.9239 5.68845 56.0157 5.60319C56.1075 5.51794 56.2092 5.47531 56.3239 5.47531H58.4685C58.6095 5.47531 58.7242 5.52122 58.8095 5.61303C58.8948 5.70485 58.9374 5.81306 58.9374 5.94094V15.3652C58.9374 15.4931 58.8948 15.598 58.8095 15.6832C58.7242 15.7685 58.6128 15.8111 58.4685 15.8111H56.3239C56.196 15.8111 56.0911 15.7718 56.0058 15.6931C55.9206 15.6144 55.878 15.5127 55.878 15.3848V14.7257C55.1139 15.6472 54.081 16.1062 52.7792 16.1062C51.4774 16.1062 50.4707 15.7062 49.7132 14.9061C48.9557 14.106 48.5786 13.0501 48.5786 11.7319V5.89504C48.5786 5.78027 48.6278 5.68189 48.7262 5.59664C48.8246 5.51138 48.9295 5.46875 49.0442 5.46875H51.1658C51.2937 5.46875 51.4019 5.51138 51.4938 5.59664C51.5856 5.68189 51.6315 5.78027 51.6315 5.89504V5.9016Z"
      fill="#343C43" />
    <path
      d="M62.9872 15.8148C62.0658 15.8148 61.387 15.582 60.9509 15.113C60.5115 14.6474 60.2917 14.0178 60.2917 13.2243V1.42267C60.2917 1.29478 60.3344 1.18657 60.4196 1.09475C60.5049 1.00294 60.6164 0.957031 60.7607 0.957031H62.8823C63.0233 0.957031 63.138 1.00294 63.2233 1.09475C63.3085 1.18657 63.3512 1.29478 63.3512 1.42267V12.6078C63.3512 12.8045 63.4069 12.9652 63.5217 13.0865C63.6332 13.2079 63.7906 13.2669 63.9873 13.2669H64.6464C64.9448 13.2669 65.0924 13.4144 65.0924 13.7129V15.2409C65.0924 15.6246 64.8956 15.8148 64.4989 15.8148H62.9905H62.9872Z"
      fill="#343C43" />
    <path
      d="M66.722 12.7378V8.04861H65.3644C65.2365 8.04861 65.1316 8.00271 65.0463 7.91089C64.9611 7.81907 64.9185 7.71086 64.9185 7.58298V5.94997C64.9185 5.82208 64.9611 5.71387 65.0463 5.62206C65.1316 5.53024 65.2365 5.48433 65.3644 5.48433H66.722V2.74626C66.722 2.60526 66.7679 2.49049 66.8597 2.40523C66.9515 2.31997 67.0597 2.27734 67.1876 2.27734H69.3518C69.4666 2.27734 69.5683 2.31997 69.6601 2.40523C69.7519 2.49049 69.7978 2.60198 69.7978 2.74626V5.48433H72.7064C72.8343 5.48433 72.9458 5.53024 73.0474 5.62206C73.1458 5.71387 73.195 5.82208 73.195 5.94997V7.58298C73.195 7.69775 73.1458 7.80268 73.0474 7.90105C72.949 7.99943 72.8343 8.04861 72.7064 8.04861H69.7978V12.0164C69.7978 12.4689 69.9027 12.7804 70.1159 12.9509C70.329 13.1214 70.5684 13.2067 70.8373 13.2067C71.1193 13.2067 71.4308 13.1083 71.7718 12.9083C72.1555 12.6689 72.4441 12.6951 72.6408 12.9935L73.3852 14.1806C73.5557 14.4495 73.5327 14.7052 73.3229 14.9446C72.6146 15.6792 71.5948 16.0497 70.2667 16.0497C69.2764 16.0497 68.437 15.7742 67.7516 15.2234C67.0663 14.6725 66.722 13.8428 66.722 12.741V12.7378Z"
      fill="#343C43" />
    <path
      d="M15.2266 0H4.43496C2.26089 0 0.5 1.76089 0.5 3.93496V14.7266C0.5 16.9006 2.26089 18.6615 4.43496 18.6615H15.2266C17.4006 18.6615 19.1615 16.9006 19.1615 14.7266V3.93496C19.1615 1.76089 17.4006 0 15.2266 0ZM15.079 12.2312L12.1442 14.6118C11.9114 14.8086 11.5507 14.6807 11.4949 14.379L10.8161 11.8934C10.7702 11.6934 10.8489 11.4868 11.0096 11.3589C11.4425 11.0113 11.7179 10.4801 11.7179 9.8833C11.7179 8.44048 10.098 7.37476 8.5765 8.40113C8.48468 8.46344 8.40598 8.54214 8.34368 8.63723C7.63539 9.68983 7.92723 10.7883 8.65192 11.3655C8.8126 11.4934 8.88474 11.6967 8.84211 11.8967L8.22891 14.3823C8.17317 14.6839 7.81246 14.8118 7.57964 14.6151L4.57924 12.2344C4.47431 12.1262 4.41856 11.9787 4.4284 11.8278L4.77271 6.69271C4.78582 6.49268 4.91371 6.31561 5.09734 6.23691L9.41924 4.03661C9.68157 3.9284 9.97341 3.9284 10.2357 4.03661L14.5576 6.23691C14.7445 6.31561 14.8691 6.49268 14.8855 6.69271L15.2299 11.8278C15.2397 11.9787 15.1839 12.1262 15.079 12.2344V12.2312Z"
      fill="#343C43" />
  </g>
  <defs>
    <clipPath id="clip0_9910_9664">
      <rect width="73" height="18.6615" fill="white" transform="translate(0.5)" />
    </clipPath>
  </defs>
</svg>
`, G1 = { height: "50px", width: "auto", borderRadius: "3px", padding: "10px", locale: "en", type: "pay" }, ge = function(t) {
  return t && d1(t) === "object" ? Object.keys(G1).reduce(function(e, n) {
    return H(H({}, e), {}, Je({}, n, t[n] || G1[n]));
  }, {}) : G1;
}, fn = `
  .pre-checkout-modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.75);
    transition: all 0.2s ease;
  }

  .pre-checkout-modal.show {
    display: block;
  }

  .pre-checkout-modal__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    background-color: #fefefe;
    padding: 20px;
    padding-bottom: max(30px, env(safe-area-inset-bottom));
    width: 100%;
    border-radius: 6px 6px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 350px;

    box-sizing: border-box;
    transform: translateY(238px);
    transition: transform 0.3s cubic-bezier(.16,.81,.32,1);
  }

  .modal-wrapper {
    width: 100%;
  }

  .payment-info {
    position: relative;
    padding-bottom: 15px;
    border-bottom: solid 1px whitesmoke;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  .customer-email {
    color: #737373;
    font-size: 13px;
    line-height: 16px;
  }

  .customer-info {
    flex: 1;
    text-align: right;
  }

  .merchant-logo {
    display: flex;
    align-items: center;
    height: 30px;
  }
  .transaction-amount {
    margin-top: 5px;
    font-size: 13px;
    line-height: 16px;
    color: #737373;
  }

  .amount {
    color: #29b263;
    font-weight: bold;
  }

  @media only screen and (min-width: 500px) {
    .pre-checkout-modal__content {
      bottom: 0;
      top: 0;
      margin: auto;
      border-radius: 6px;
      height: fit-content;
    }
  }

  .pre-checkout-modal__content.show {
    transform: translateY(0);
    margin: 0 auto;
    margin-top: 100px;
  }

  .pre-checkout-modal__content > * {
    margin-top: 0;
    margin-bottom: 40px;
  }
  .pre-checkout-modal__content > *:last-child {
    margin-bottom: 0;
  }

  .pre-checkout-modal__content svg {
    margin: auto;
    width: 100%;
  }

  #inline-button-wordmark--white {
    position: absolute;
    bottom: -50px;
    margin: auto;
    left: 0;
    right: 0;
    width: fit-content;
  }

  #inline-button-wordmark--grey {
    display: none;
  }

  .pre-checkout-modal__content #apple-pay-mark--light {
    margin-bottom: 16px;
  }

  .pre-checkout-modal p {
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    color: #4E4E4E;
    line-height: 140%;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    padding: 0 20px;
    text-align: center;
    letter-spacing: -0.3px;
  }

  .pre-checkout-modal button {
    height: 42px;
    width: 100%;
    
    box-sizing: border-box;
    border-radius: 3px;
    font-size: 14px;
    line-height: 24px;
    cursor: pointer;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  .pre-checkout-modal .open-paystack-pop-button {
    background: #FAFAFA;
    border: 1px solid #F2F3F3;
    color: #4E4E4E;
    font-weight: 500;
  }

  .pre-checkout-modal .open-paystack-pop-button:hover, 
  .pre-checkout-modal .open-paystack-pop-button:active, 
  .pre-checkout-modal .open-paystack-pop-button:focus {
    background: #F2F3F3;
  }

  .pre-checkout-modal .pay-with-vault-button {
    font-weight: 700;
    background: #44b669;
    background: linear-gradient(to bottom, #44b669 0%, #40ad57 100%);
    border: solid 1px #49a861;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
    outline: none;
    color: white;
    transition: all 300ms;
  }

  .pre-checkout-modal .vault-instruction {
    color: #2f3d4d;
    font-size: 14px;
    letter-spacing: normal;
    line-height: 1.4;
    margin: 0 auto 24px;
    padding: 0;
  }
  .vault-logo-container {
    width: 74px;
    height: 20px;
    margin: 0 auto 24px
  }
  .vault-logo-container img {
    height: 100%;
    width: 100%;
    border-radius: 8px;
  }
  .vault-divider {
    margin-bottom: 16px;
    margin-top: 24px;
    position: relative;
  }
  .vault-divider__container {
    align-items: center;
    bottom: 0;
    display: flex;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
  .vault-divider__line {
    border: 1px dashed #ccced0;
    width: 100%;
  }
  .vault-divider__text-container {
    display: flex;
    justify-content: center;
    position: relative;
  }
  .vault-divider__text {
    background-color: #fff;
    color: #999da1;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -.3px;
    line-height: 19.6px;
    margin-bottom: 2px;
    padding: 0 8px;
  }

  #payment-request-button {
    width: 100%;
    height: fit-content;
    margin: 24px 0 16px 0;
  }

  #paystackpop-button {
    padding: 0 16px;
  }

  #apple-pay-close-button {
    position: absolute;
    text-align: center;
    top: 0;
    right: -26px;
    height: 16px;
    width: 16px;
    padding: 0;
    display: inline-block;
    z-index: 3;
    border-radius: 50%;
    background: transparent;
    transition: all 300ms;
    outline: none;
    cursor: pointer;
    border: none;
  }

  #apple-pay-close-button svg {
    width: initial;
  }
  
  #apple-pay-close-button:hover {
    background-color: #e22b28;
  }

  @media only screen and (max-width: 500px) {
    .pre-checkout-modal__content {
      max-width: 500px;
      border-radius: 0;
      padding-bottom: 0;
    }

    .modal-wrapper {
      padding: 0;
    }

    .vault-logo-container {
      width: 74px;
      height: 20px;
    }

    #inline-button-wordmark--white {
      display: none
    }
    
    #inline-button-wordmark--grey {
      display: block;
      width: 100%;
      margin: 16px 0;
      height: 13px;
    }

    #apple-pay-close-button {
      display: none;
    }
  }
`, ke = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return Number(parseFloat(t / 100).toFixed(2));
}, we = { headers: { accept: "application/json, text/plain, */*", "accept-language": "en-GB,en-US;q=0.9,en;q=0.8", "content-type": "application/x-www-form-urlencoded", "sec-ch-ua-mobile": "?0", "sec-fetch-dest": "empty", "sec-fetch-mode": "cors", "sec-fetch-site": "cross-site" }, referrerPolicy: "no-referrer-when-downgrade", method: "POST", mode: "cors", credentials: "omit" };
function Se(t) {
  return Object.keys(t).reduce(function(e, n) {
    var r = encodeURIComponent(n), a = encodeURIComponent(t[n]), o = "".concat(r, "=").concat(a);
    return [].concat(cn(e), [o]);
  }, []).join("&");
}
var hn = function(t) {
  return { biannually: "BIANNUAL PLAN", annually: "ANNUAL PLAN" }[t] || "".concat(t.toUpperCase(), " PLAN");
}, _e = function() {
  try {
    return window.location && window.location.protocol === "https:" && window.ApplePaySession && window.ApplePaySession.supportsVersion($.applePayVersion);
  } catch {
    return !1;
  }
}, Q1 = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return _e() && t.includes("apple_pay");
};
function mn() {
  var t = 0;
  return Array.from(document.querySelectorAll("body *")).forEach(function(e) {
    var n = window.getComputedStyle(e), r = parseFloat(n.zIndex);
    !Number.isNaN(r) && r > t && (t = r);
  }), t;
}
function z1(t) {
  var e = document.createElement("iframe");
  return e.setAttribute("frameBorder", "0"), e.setAttribute("allowtransparency", "true"), e.id = t, e.style.display = "none", e;
}
function M1(t) {
  return t.querySelector("apple-pay-button") || t.querySelector("#apple-pay-button");
}
function x1(t) {
  return document.querySelector("#".concat(t));
}
function Ee(t, e, n) {
  var r = e.channels, a = r === void 0 ? [] : r, o = e.styles, s = o === void 0 ? {} : o, c = { applePay: !1 };
  return new Promise(function(i, l) {
    if (t) if (Q1(a)) {
      if (M1(t)) return c.applePay = !0, void i(c);
      (function(d, h) {
        return new Promise(function(u, k) {
          var m = document.createElement("script");
          m.src = d, m.addEventListener("load", function() {
            u(!0);
          }), m.addEventListener("error", function() {
            m.remove(), k(!1);
          }), h ? h.appendChild(m) : document.head.appendChild(m);
        });
      })("https://applepay.cdn-apple.com/jsapi/v1.1.0/apple-pay-sdk.js", t).then(function() {
        if (n && n !== 1077497 && window && !Array.isArray(window.webpackJsonp)) throw new Error("Incorrect data type for 'webpackJsonp', expected array, got ".concat(d1(window.webpackJsonp), ". Switching to fallback apple pay button"));
        (function(d, h) {
          var u = h.styles, k = h.theme, m = document.createElement("style"), C = function(w) {
            var L = w.height, I = w.width, V = w.borderRadius, f = w.padding;
            return `
  apple-pay-button {
    --apple-pay-button-width: `.concat(I, `;
    --apple-pay-button-height: `).concat(L, `;
    --apple-pay-button-border-radius: `).concat(V, `;
    --apple-pay-button-padding: `).concat(f, `;
    --apple-pay-button-box-sizing: border-box;
    width: `).concat(I, `;
  }
`);
          }(u);
          m.type = "text/css", m.styleSheet ? m.styleSheet.cssText = C : m.appendChild(document.createTextNode(C)), d.appendChild(m);
          var g = document.createElement("apple-pay-button");
          g.setAttribute("buttonstyle", k === "light" ? "white" : "black"), g.setAttribute("type", u.type), g.setAttribute("locale", u.locale), d.appendChild(g);
        })(t, { styles: ge(s.applePay), theme: s.theme }), c.applePay = !0, i(c);
      }).catch(function() {
        (function(d, h) {
          var u = h.styles, k = h.theme, m = document.createElement("style"), C = function(L) {
            var I = L.height, V = L.width, f = L.borderRadius, F = L.padding, q = L.type, K = L.locale;
            return `
  @supports (-webkit-appearance: -apple-pay-button) { 
    .apple-pay-button {
        display: inline-block;
        -webkit-appearance: -apple-pay-button;
        width: `.concat(V, `;
        height: `).concat(I, `;
        border-radius: `).concat(f, `;
        padding: `).concat(F, `;
        -apple-pay-button-type: `).concat(q, `;
        -webkit-locale: `).concat(K, `;
    }
    .apple-pay-button-black {
        -apple-pay-button-style: black;
    }
    .apple-pay-button-white {
        -apple-pay-button-style: white;
    }
    .apple-pay-button-white-with-line {
        -apple-pay-button-style: white-outline;
    }
  }

  @supports not (-webkit-appearance: -apple-pay-button) {
    .apple-pay-button {
        display: inline-block;
        background-size: 100% 60%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        border-radius: 5px;
        padding: 0px;
        box-sizing: border-box;
        min-width: 200px;
        min-height: 32px;
        max-height: 64px;
    }
    .apple-pay-button-black {
        background-image: -webkit-named-image(apple-pay-logo-white);
        background-color: black;
    }
    .apple-pay-button-white {
        background-image: -webkit-named-image(apple-pay-logo-black);
        background-color: white;
    }
    .apple-pay-button-white-with-line {
        background-image: -webkit-named-image(apple-pay-logo-black);
        background-color: white;
        border: .5px solid black;
    }
  }
`);
          }(u);
          m.type = "text/css", m.styleSheet ? m.styleSheet.cssText = C : m.appendChild(document.createTextNode(C)), d.appendChild(m);
          var g = document.createElement("button");
          g.classList.add("apple-pay-button", k === "light" ? "apple-pay-button-white" : "apple-pay-button-black"), g.id = "apple-pay-button";
          var w = document.createElement("span");
          w.classList.add("logo"), g.appendChild(w), d.appendChild(g);
        })(t, { styles: ge(s.applePay), theme: s.theme }), c.applePay = !0, i(c);
      });
    } else l("No wallet payment method is available on this device");
    else l("Container to mount elements was not provided");
  });
}
function yn(t) {
  for (; t.firstChild; ) t.removeChild(t.firstChild);
}
var $e = "payment-request-button", et = "paystackpop-button", tt = "pay-with-vault-button";
function nt(t) {
  var e = document.createElement("button");
  return e.id = et, e.className = "open-paystack-pop-button", e.innerText = t, e;
}
function xe(t) {
  return t.querySelector("#".concat(et));
}
function rt() {
  var t = document.createElement("div");
  return t.id = $e, t;
}
function q1(t) {
  return t.querySelector("#".concat($e));
}
function Cn() {
  var t = document.createElement("button");
  return t.className = "pay-with-vault-button", t.id = tt, t.innerText = "Pay with Vault", t;
}
function vn(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = document.createElement("div");
  n.className = "vault-logo-container", n.innerHTML = dn, t.appendChild(n);
  var r = document.createElement("p");
  r.id = "instruction", r.className = "vault-instruction", r.innerHTML = "Access your saved cards and bank details for faster, more secure payments", t.appendChild(r);
  var a = Cn();
  t.appendChild(a);
  var o = document.createElement("div");
  if (o.className = "vault-divider", o.innerHTML = '<div id="vault-divider" class="vault-divider__container"><div class="vault-divider__line"></div></div><div class="vault-divider__text-container"><span class="vault-divider__text">or</span></div>', t.appendChild(o), e.canPayWithApplePay) {
    var s = rt();
    t.appendChild(s);
  }
  var c = nt("Use other payment methods");
  t.appendChild(c);
}
function bn(t) {
  var e = document.createElement("div");
  e.innerHTML = `
  <svg width="51" height="32" viewBox="0 0 51 32" fill="none" xmlns="http://www.w3.org/2000/svg" id="apple-pay-mark--light">
    <g>
    <path d="M46.0162 0H4.98386C4.81297 0 4.64177 0 4.47118 0.000996555C4.32698 0.00202331 4.18311 0.00362383 4.03925 0.00754966C3.72548 0.0160355 3.40903 0.0345472 3.09919 0.0902335C2.7844 0.146886 2.49148 0.239294 2.20571 0.384791C1.92477 0.52766 1.66757 0.71453 1.44468 0.937516C1.22169 1.1605 1.03482 1.41728 0.891977 1.69852C0.74645 1.98429 0.653982 2.27731 0.597722 2.59234C0.541737 2.90227 0.523101 3.21866 0.514645 3.53209C0.51078 3.67596 0.509122 3.81982 0.508183 3.96366C0.507186 4.13461 0.507519 4.30545 0.507519 4.4767V27.5236C0.507519 27.6949 0.507186 27.8654 0.508183 28.0367C0.509122 28.1805 0.51078 28.3244 0.514645 28.4683C0.523101 28.7814 0.541737 29.0978 0.597722 29.4077C0.653982 29.7228 0.74645 30.0157 0.891977 30.3015C1.03482 30.5827 1.22169 30.8399 1.44468 31.0625C1.66757 31.2859 1.92477 31.4727 2.20571 31.6152C2.49148 31.7611 2.7844 31.8535 3.09919 31.9102C3.40903 31.9655 3.72548 31.9843 4.03925 31.9928C4.18311 31.9961 4.32698 31.998 4.47118 31.9987C4.64177 32 4.81297 32 4.98386 32H46.0162C46.1868 32 46.358 32 46.5286 31.9987C46.6724 31.998 46.8163 31.9961 46.9608 31.9928C47.2739 31.9843 47.5903 31.9655 47.9009 31.9102C48.2153 31.8535 48.5083 31.7611 48.7941 31.6152C49.0753 31.4727 49.3317 31.2859 49.5551 31.0625C49.7777 30.8399 49.9646 30.5827 50.1078 30.3015C50.2537 30.0157 50.346 29.7228 50.402 29.4077C50.458 29.0978 50.4762 28.7814 50.4847 28.4683C50.4886 28.3244 50.4906 28.1805 50.4912 28.0367C50.4925 27.8654 50.4926 27.6949 50.4926 27.5236V4.4767C50.4926 4.30545 50.4925 4.13461 50.4912 3.96366C50.4906 3.81982 50.4886 3.67596 50.4847 3.53209C50.4762 3.21866 50.458 2.90227 50.402 2.59234C50.346 2.27731 50.2537 1.98429 50.1078 1.69852C49.9646 1.41728 49.7777 1.1605 49.5551 0.937516C49.3317 0.71453 49.0753 0.52766 48.7941 0.384791C48.5083 0.239294 48.2153 0.146886 47.9009 0.0902335C47.5903 0.0345472 47.2739 0.0160355 46.9608 0.00754966C46.8163 0.00362383 46.6724 0.00202331 46.5286 0.000996555C46.358 0 46.1868 0 46.0162 0Z" fill="black"/>
    <path d="M46.0162 1.06662L46.521 1.06759C46.6577 1.06855 46.7945 1.07003 46.932 1.07378C47.1711 1.08024 47.4509 1.09319 47.7117 1.13994C47.9384 1.18077 48.1285 1.24286 48.311 1.33575C48.4911 1.42728 48.6562 1.54723 48.8003 1.69113C48.9449 1.83599 49.065 2.0013 49.1578 2.18343C49.2501 2.36447 49.3118 2.55369 49.3524 2.78205C49.3991 3.04001 49.412 3.32055 49.4185 3.56121C49.4222 3.69704 49.424 3.83287 49.4247 3.97194C49.426 4.14012 49.4259 4.3082 49.4259 4.47671V27.5236C49.4259 27.6921 49.426 27.8599 49.4246 28.0317C49.424 28.1675 49.4222 28.3033 49.4185 28.4394C49.4119 28.6797 49.3991 28.9601 49.3519 29.2211C49.3118 29.4463 49.2502 29.6356 49.1573 29.8175C49.0648 29.9992 48.9449 30.1643 48.8009 30.3083C48.656 30.4532 48.4915 30.5728 48.3092 30.6652C48.1281 30.7576 47.9383 30.8197 47.7138 30.8601C47.4477 30.9075 47.1562 30.9205 46.9367 30.9265C46.7986 30.9296 46.6611 30.9315 46.5203 30.9321C46.3525 30.9334 46.1841 30.9334 46.0162 30.9334H4.98386C4.98162 30.9334 4.97945 30.9334 4.97718 30.9334C4.81127 30.9334 4.64503 30.9334 4.4761 30.9321C4.33836 30.9315 4.20093 30.9296 4.06805 30.9266C3.8435 30.9205 3.55181 30.9075 3.2879 30.8604C3.06151 30.8197 2.87171 30.7576 2.68822 30.664C2.50766 30.5724 2.34329 30.453 2.19831 30.3077C2.05444 30.1641 1.93488 29.9995 1.84245 29.8176C1.74992 29.6358 1.68801 29.446 1.64731 29.218C1.60025 28.9576 1.58733 28.6783 1.58087 28.4396C1.57718 28.303 1.57564 28.1664 1.57476 28.0305L1.5741 27.6295L1.57413 27.5236V4.47671L1.5741 4.37083L1.57473 3.97067C1.57564 3.83402 1.57718 3.6974 1.58087 3.56088C1.58733 3.32197 1.60025 3.04258 1.64769 2.77991C1.68804 2.55405 1.74992 2.36422 1.84293 2.18155C1.93464 2.001 2.05441 1.83617 2.19903 1.69158C2.34308 1.54747 2.50799 1.42767 2.6897 1.33527C2.87122 1.24283 3.06138 1.18077 3.28778 1.14003C3.54864 1.09316 3.82861 1.08024 4.06839 1.07375C4.20507 1.07003 4.34174 1.06855 4.4774 1.06762L4.98386 1.06662H46.0162Z" fill="white"/>
    <path d="M14.1531 10.7629C14.5811 10.2276 14.8715 9.50886 14.7949 8.77435C14.1684 8.80551 13.4038 9.18768 12.9612 9.72342C12.5638 10.1822 12.212 10.9311 12.3037 11.6348C13.007 11.6958 13.7097 11.2832 14.1531 10.7629Z" fill="black"/>
    <path d="M14.7869 11.7722C13.7655 11.7114 12.8972 12.3519 12.4094 12.3519C11.9214 12.3519 11.1745 11.8029 10.3667 11.8177C9.31521 11.8331 8.33959 12.4276 7.80602 13.3731C6.70857 15.2646 7.51641 18.0704 8.58362 19.611C9.10188 20.3731 9.72648 21.2123 10.5495 21.1822C11.3271 21.1517 11.6319 20.6787 12.5771 20.6787C13.5216 20.6787 13.7961 21.1822 14.6192 21.1669C15.4729 21.1516 16.0065 20.4044 16.5248 19.6415C17.1193 18.7727 17.3627 17.9338 17.378 17.8877C17.3627 17.8725 15.732 17.2469 15.7169 15.3711C15.7015 13.8004 16.9972 13.0534 17.0581 13.007C16.3265 11.9249 15.1832 11.8029 14.7869 11.7722Z" fill="black"/>
    <path d="M23.68 9.64661C25.8999 9.64661 27.4457 11.1768 27.4457 13.4046C27.4457 15.6404 25.8681 17.1786 23.6244 17.1786H21.1665V21.0872H19.3907V9.64661H23.68V9.64661ZM21.1665 15.688H23.2041C24.7502 15.688 25.6302 14.8556 25.6302 13.4126C25.6302 11.9697 24.7502 11.1451 23.2121 11.1451H21.1665V15.688Z" fill="black"/>
    <path d="M27.9097 18.7167C27.9097 17.2578 29.0276 16.3619 31.0098 16.2509L33.293 16.1162V15.474C33.293 14.5464 32.6666 13.9914 31.6203 13.9914C30.629 13.9914 30.0106 14.467 29.8601 15.2124H28.2428C28.3379 13.7059 29.6222 12.5959 31.6836 12.5959C33.7053 12.5959 34.9976 13.6663 34.9976 15.3392V21.0872H33.3563V19.7156H33.3169C32.8333 20.6433 31.7787 21.2299 30.6847 21.2299C29.0514 21.2299 27.9097 20.2151 27.9097 18.7167ZM33.293 17.9635V17.3055L31.2395 17.4323C30.2167 17.5037 29.6381 17.9556 29.6381 18.6691C29.6381 19.3985 30.2406 19.8742 31.1603 19.8742C32.3574 19.8742 33.293 19.0496 33.293 17.9635Z" fill="black"/>
    <path d="M36.547 24.1556V22.768C36.6736 22.7997 36.959 22.7997 37.1018 22.7997C37.8946 22.7997 38.3228 22.4668 38.5843 21.6105C38.5843 21.5946 38.7351 21.1031 38.7351 21.0952L35.7224 12.7466H37.5774L39.6866 19.5333H39.7181L41.8273 12.7466H43.6349L40.5109 21.5232C39.7976 23.5451 38.973 24.1952 37.2447 24.1952C37.1018 24.1952 36.6736 24.1793 36.547 24.1556Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0">
    <rect width="49.9851" height="32" fill="white" transform="translate(0.507462)"/>
    </clipPath>
    </defs>
  </svg>
`, t.appendChild(e);
  var n = document.createElement("p");
  n.id = "apple-pay-description", n.innerHTML = "Pay with Apple Pay to complete your purchase without filling a form", t.appendChild(n);
  var r = rt();
  t.appendChild(r);
  var a = nt("More payment options");
  t.appendChild(a);
}
var P1 = [{ value: "key", required: !0, types: ["string"] }, { value: "amount", required: !0, or: ["plan", "planCode"], types: ["string", "number"] }, { value: "currency", required: !1, types: ["string"] }, { value: "email", required: !0, or: ["customerCode"], types: ["string"] }, { value: "label", required: !1, types: ["string"] }, { value: "firstName", required: !1, types: ["string"] }, { value: "lastName", required: !1, types: ["string"] }, { value: "reference", required: !1, types: ["string"] }, { value: "phone", required: !1, types: ["string"] }, { value: "customerCode", required: !1, override: "email", types: ["string"] }, { value: "channels", required: !1, types: ["array"] }, { value: "paymentRequest", required: !1, types: ["string", "number"] }, { value: "paymentPage", required: !1, types: ["string"] }, { value: "hash", required: !1, types: ["string"] }, { value: "container", required: !1, types: ["string"] }, { value: "metadata", required: !1, types: ["object"] }, { value: "subaccountCode", required: !1, types: ["string"] }, { value: "bearer", required: !1, types: ["string"] }, { value: "transactionCharge", required: !1, types: ["string", "number"] }, { value: "planCode", required: !1, override: "amount", types: ["string"] }, { value: "subscriptionCount", required: !1, types: ["number"] }, { value: "planInterval", required: !1, types: ["string"] }, { value: "subscriptionLimit", required: !1, types: ["number"] }, { value: "subscriptionStartDate", required: !1, types: ["string"] }, { value: "accessCode", required: !1, types: ["string"] }, { value: "onError", required: !1, types: ["function"] }, { value: "onLoad", required: !1, types: ["function"] }, { value: "onSuccess", required: !1, types: ["function"] }, { value: "onCancel", required: !1, types: ["function"] }, { value: "callback", required: !1, types: ["function"] }, { value: "onClose", required: !1, types: ["function"] }, { value: "onBankTransferConfirmationPending", required: !1, types: ["function"] }, { value: "firstname", required: !1, types: ["string"] }, { value: "lastname", required: !1, types: ["string"] }, { value: "customer_code", required: !1, types: ["string"] }, { value: "payment_request", required: !1, types: ["string", "number"] }, { value: "subaccount", required: !1, types: ["string"] }, { value: "transaction_charge", required: !1, types: ["number", "string"] }, { value: "plan", required: !1, types: ["string"] }, { value: "quantity", required: !1, types: ["number"] }, { value: "interval", required: !1, types: ["string"] }, { value: "invoice_limit", required: !1, types: ["number", "string"] }, { value: "start_date", required: !1, types: ["string"] }, { value: "payment_page", required: !1, types: ["number", "string"] }, { value: "order_id", required: !1, types: ["number"] }, { value: "ref", required: !1, types: ["string"] }, { value: "card", required: !1, types: ["string"] }, { value: "bank", required: !1, types: ["string"] }, { value: "split", required: !1, types: ["object"] }, { value: "split_code", required: !1, types: ["string"] }, { value: "transaction_type", required: !1, types: ["string"] }, { value: "subscription", required: !1, types: ["number"] }, { value: "language", required: !1, types: ["string"] }, { value: "connect_account", required: !1, types: ["string"] }, { value: "connect_split", required: !1, types: ["array"] }];
function gn(t) {
  var e, n = H({}, t);
  return n.metadata = t.metadata || {}, n.metadata.referrer = (e = window.location.href) && e.length > 500 ? e.split("?")[0] : e, n.metadata = JSON.stringify(n.metadata), n.mode = "popup", t.split && typeof t.split != "string" && (n.split = JSON.stringify(n.split)), n.card !== void 0 && ["false", !1].indexOf(n.card) > -1 && (n.channels = ["bank"], delete n.card), n.bank !== void 0 && ["false", !1].indexOf(n.bank) > -1 && (n.channels = ["card"], delete n.bank), [{ to: "firstname", from: "firstName" }, { to: "lastname", from: "lastName" }, { to: "customer_code", from: "customerCode" }, { to: "payment_request", from: "paymentRequest" }, { to: "subaccount", from: "subaccountCode" }, { to: "transaction_charge", from: "transactionCharge" }, { to: "plan", from: "planCode" }, { to: "quantity", from: "subscriptionCount" }, { to: "interval", from: "planInterval" }, { to: "invoice_limit", from: "subscriptionLimit" }, { to: "start_date", from: "subscriptionStartDate" }, { to: "ref", from: "reference" }].forEach(function(r) {
    n[r.from] && (n[r.to] = n[r.from], delete n[r.from]);
  }), Object.values(t).forEach(function(r, a) {
    if (typeof r == "function") {
      var o = Object.keys(t)[a];
      delete n[o];
    }
  }), n;
}
var kn = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"], at = window && window.navigator && (window.navigator.platform || window.navigator.userAgentData && window.navigator.userAgentData.platform), ot = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.platform, n = t.userAgent, r = n === void 0 ? window && window.navigator && window.navigator.userAgent : n, a = e || at;
  return kn.includes(a) || r.includes("Mac") && "ontouchend" in document;
}, wn = function(t, e, n) {
  var r = "".concat($.paystackApiUrl, "transaction/update_log/").concat(t), a = { Authorization: "Bearer ".concat(e) };
  return fetch(r, { method: "POST", body: JSON.stringify({ payload: JSON.stringify(n) }), headers: a });
}, Sn = function(t, e) {
  var n = "".concat($.paystackApiUrl, "transaction/set_ip/").concat(t), r = { Authorization: "Bearer ".concat(e) };
  return fetch(n, { method: "POST", headers: r });
}, En = { initializeLog: function(t) {
  var e = t || {}, n = e.attempts, r = e.authentication, a = e.errors, o = e.history;
  this.log = { start_time: Math.round(Date.now() / 1e3), time_spent: 0, attempts: n || 0, authentication: r, errors: a || 0, success: !1, mobile: ot(), input: [], history: o || [] };
}, getTimeSpent: function() {
  var t = Math.round(Date.now() / 1e3);
  return this.log.time_spent = t - this.log.start_time, this.log.time_spent;
}, logAPIResponse: function(t, e) {
  switch (t.status) {
    case "success":
      return this.logApiSuccess(e);
    case "failed":
      return this.logApiError(t.message);
    default:
      return !1;
  }
}, logValidationResponse: function(t) {
  return this.log.history.push({ type: "action", message: t, time: this.getTimeSpent() }), this.saveLog();
}, logAttempt: function(t) {
  var e = "Attempted to pay";
  return t && (e += " with ".concat(t)), this.log.attempts += 1, this.log.history.push({ type: "action", message: e, time: this.getTimeSpent() }), this.saveLog();
}, logApiError: function(t) {
  var e = "Error";
  return t && (e += ": ".concat(t)), this.log.errors += 1, this.log.history.push({ type: "error", message: e, time: this.getTimeSpent() }), this.saveLog();
}, logApiSuccess: function(t) {
  var e = "Successfully paid";
  return t && (e += " with ".concat(t)), this.log.success = !0, this.log.history.push({ type: "success", message: e, time: this.getTimeSpent() }), this.saveLog();
}, saveLog: function() {
  try {
    if (this.response) return wn(this.id, this.response.merchant_key, this.log);
  } catch {
  }
}, saveIpAddress: function() {
  try {
    if (this.response) return Sn(this.id, this.response.merchant_key);
  } catch {
  }
} }, xn = ["language", "connect_account"], Pn = { requestInline: function() {
  var t = this, e = this.urlParameters, n = e.language, r = e.connect_account, a = B1(e, xn), o = H({ "Content-Type": "application/json" }, n && { "Accept-Language": n });
  return (this.accessCode ? fetch(new URL("transaction/verify_access_code/".concat(this.accessCode), $.paystackApiUrl).toString(), { headers: o }) : fetch(new URL("/checkout/request_inline", $.paystackApiUrl).toString(), { method: "POST", body: JSON.stringify(a), headers: H(H({}, o), r && { "x-connect-account": r }) })).then(function(s) {
    return s.json();
  }).then(function(s) {
    if (s.status === !1) throw new Error(s.message);
    return t.response = s.data, t.id = s.data.id, t.status = s.data.transaction_status, t.accessCode = s.data.access_code, t.log = null, Object.assign(t, En), t.initializeLog(s.data.log), t.saveIpAddress(), s.data;
  });
} }, U1 = function() {
  function t(e) {
    Ze(this, t), function(l) {
      function d(m, C) {
        this.message = m, this.issues = C || [];
      }
      if (!l || d1(l) !== "object") throw new d("Transaction parameters should be a non-empty object");
      var h = l;
      if ("accessCode" in h) return { accessCode: h.accessCode };
      Object.keys(h).forEach(function(m) {
        P1.find(function(C) {
          return C.value === m;
        }) !== void 0 || delete h[m];
      });
      var u = Object.keys(h), k = [];
      if (P1.filter(function(m) {
        return m.required;
      }).forEach(function(m) {
        var C = !h[m.value], g = m.or ? m.or.some(function(w) {
          return h[w];
        }) : null;
        C && !g && k.push({ message: "Required parameter missing: ".concat(m.value) });
      }), u.forEach(function(m) {
        var C = h[m], g = P1.find(function(L) {
          return L.value === m;
        }), w = d1(C);
        w === "object" && Array.isArray(C) && (w = "array"), g.types.indexOf(w) <= -1 && k.push({ message: "Invalid parameter type: ".concat(m), validTypes: g.types });
      }), u.forEach(function(m) {
        var C = P1.find(function(g) {
          return g.value === m;
        });
        C.override && delete h[C.override];
      }), k.length) throw new d("Invalid transaction parameters", k);
    }(e), this.parameters = e, this.urlParameters = gn(e), this.id = null, this.status = null, this.accessCode = e.accessCode || null, this.authorizationUrl = null, this.errors = [], this.response = null, this.isActive = !0;
    var n = e.onError, r = e.onLoad, a = e.onSuccess, o = e.onCancel, s = e.callback, c = e.onClose, i = e.onBankTransferConfirmationPending;
    this.callbacks = { onError: n, onLoad: r, onSuccess: a, onCancel: o, onBankTransferConfirmationPending: i }, this.deprecatedCallbacks = { callback: s, onClose: c }, Object.assign(this, Pn);
  }
  return Be(t, [{ key: "onSetupError", value: function(e) {
    this.logError(e), this.callbacks.onError && this.callbacks.onError(e);
  } }, { key: "onLoad", value: function(e) {
    var n = e.id, r = e.customer, a = e.accessCode;
    Object.assign(this, { id: n, customer: r, accessCode: a }), this.authorizationUrl = "".concat($.checkoutUrl).concat(a), this.callbacks.onLoad && this.callbacks.onLoad({ id: n, customer: r, accessCode: a });
  } }, { key: "onSuccess", value: function(e) {
    this.isActive = !1, this.response = e, this.status = e.status, this.callbacks.onSuccess && this.callbacks.onSuccess(e), this.deprecatedCallbacks.callback && this.deprecatedCallbacks.callback(e);
  } }, { key: "setStatus", value: function(e) {
    this.status = e;
  } }, { key: "onCancel", value: function() {
    this.callbacks.onCancel && this.callbacks.onCancel(), this.deprecatedCallbacks.onClose && this.deprecatedCallbacks.onClose();
  } }, { key: "cancel", value: function() {
    this.isActive = !1, this.onCancel();
  } }, { key: "onBankTransferConfirmationPending", value: function() {
    this.cancel(), this.callbacks.onBankTransferConfirmationPending && this.callbacks.onBankTransferConfirmationPending();
  } }, { key: "logError", value: function(e) {
    this.errors.push(e);
  } }]), t;
}(), _1 = console ? console.warn || console.log : function() {
};
function Pe(t, e, n) {
  _1('"'.concat(t, '" has been deprecated, please use "').concat(e, '". ').concat(n));
}
var S, Tn = ["preload", "inlineTransaction"], In = ["container", "styles", "onElementsMount"];
function Y1(t, e) {
  if (!t.length) return null;
  var n = t.filter(function(r) {
    var a, o, s, c, i = !r.status || r.status === "abandoned", l = (a = r.parameters, o = e, s = Object.keys(a).sort().join("") === Object.keys(o).sort().join(""), c = Object.values(a).sort().join("") === Object.values(o).sort().join(""), s && c);
    return i && l;
  });
  return n.length ? n[n.length - 1] : null;
}
function Te(t) {
  var e = t.checkoutIframe, n = t.urlParameters;
  e && n && e.contentWindow.postMessage({ type: "inline:url", path: "newTransaction", params: n }, "*");
}
var Mn = "trackCheckoutClosed", Ie = "trackPaymentError", Vn = "trackPaymentAttempt", An = "trackPaymentCompletion";
function F1(t) {
  throw _1(t), new Error(t);
}
var Me, Ve, it = function() {
  function t(e) {
    var n, r;
    Ze(this, t), this.id = function() {
      for (var a = "", o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", s = 0; s < 5; s += 1) a += o.charAt(Math.floor(Math.random() * o.length));
      return a;
    }(), this.transactions = [], this.isOpen = !1, this.isLoaded = !1, this.isDeprecatedApi = e && e.isDeprecatedApi, e && e.isEmbed ? this.isEmbed = !0 : e && e.isPaymentRequest && (e.container && x1(e.container) || F1("A container is required to mount the payment request button"), this.paymentRequestContainer = x1(e.container), this.paymentRequestTransaction = null), this.preCheckoutModal = null, this.backgroundIframe = function(a) {
      var o = z1("inline-background-".concat(a));
      o.style.cssText = `
  z-index: 999999999999999;
  background: transparent;
  background: rgba(0, 0, 0, 0.75);    
  border: 0px none transparent;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s;
  -webkit-transition: opacity 0.3s;
  visibility: hidden;
  display: none;
`, document.body.appendChild(o);
      var s = o.contentWindow.document;
      return s.open(), s.write(`
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Paystack Popup Loader</title>
    <style>
      .app-loader {
        margin: 200px 0;
        text-align: center;
        color: white;
      }      
      @keyframes app-loader__spinner {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      @-webkit-keyframes app-loader__spinner {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
      .app-loader__spinner {
        position: relative;
        display: inline-block;
      }
      .app-loader__spinner div {
        left: 95px;
        top: 35px;
        position: absolute;
        -webkit-animation: app-loader__spinner linear 1s infinite;
        animation: app-loader__spinner linear 1s infinite;
        background: white;
        width: 10px;
        height: 30px;
        border-radius: 40%;
        -webkit-transform-origin: 5px 65px;
        transform-origin: 5px 65px;
      }
      .app-loader__spinner div:nth-child(1) {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-animation-delay: -0.916666666666667s;
        animation-delay: -0.916666666666667s;
      }
      .app-loader__spinner div:nth-child(2) {
        -webkit-transform: rotate(30deg);
        transform: rotate(30deg);
        -webkit-animation-delay: -0.833333333333333s;
        animation-delay: -0.833333333333333s;
      }
      .app-loader__spinner div:nth-child(3) {
        -webkit-transform: rotate(60deg);
        transform: rotate(60deg);
        -webkit-animation-delay: -0.75s;
        animation-delay: -0.75s;
      }
      .app-loader__spinner div:nth-child(4) {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        -webkit-animation-delay: -0.666666666666667s;
        animation-delay: -0.666666666666667s;
      }
      .app-loader__spinner div:nth-child(5) {
        -webkit-transform: rotate(120deg);
        transform: rotate(120deg);
        -webkit-animation-delay: -0.583333333333333s;
        animation-delay: -0.583333333333333s;
      }
      .app-loader__spinner div:nth-child(6) {
        -webkit-transform: rotate(150deg);
        transform: rotate(150deg);
        -webkit-animation-delay: -0.5s;
        animation-delay: -0.5s;
      }
      .app-loader__spinner div:nth-child(7) {
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
        -webkit-animation-delay: -0.416666666666667s;
        animation-delay: -0.416666666666667s;
      }
      .app-loader__spinner div:nth-child(8) {
        -webkit-transform: rotate(210deg);
        transform: rotate(210deg);
        -webkit-animation-delay: -0.333333333333333s;
        animation-delay: -0.333333333333333s;
      }
      .app-loader__spinner div:nth-child(9) {
        -webkit-transform: rotate(240deg);
        transform: rotate(240deg);
        -webkit-animation-delay: -0.25s;
        animation-delay: -0.25s;
      }
      .app-loader__spinner div:nth-child(10) {
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg);
        -webkit-animation-delay: -0.166666666666667s;
        animation-delay: -0.166666666666667s;
      }
      .app-loader__spinner div:nth-child(11) {
        -webkit-transform: rotate(300deg);
        transform: rotate(300deg);
        -webkit-animation-delay: -0.083333333333333s;
        animation-delay: -0.083333333333333s;
      }
      .app-loader__spinner div:nth-child(12) {
        -webkit-transform: rotate(330deg);
        transform: rotate(330deg);
        -webkit-animation-delay: 0s;
        animation-delay: 0s;
      }
      .app-loader__spinner {
        width: 40px;
        height: 40px;
        -webkit-transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
        transform: translate(-20px, -20px) scale(0.2) translate(20px, 20px);
      }
    </style>
  </head>

  <body>
    <div id="app-loader" class="app-loader">
      <div id="spinner" class="app-loader__spinner">
        <div></div><div></div><div></div><div></div><div></div><div></div><div>
        </div><div></div><div></div><div></div><div></div><div></div>
      </div>
    </div>
  </body>

  </html>
`), s.close(), o;
    }(this.id), this.checkoutIframe = (n = this.id, (r = z1("inline-checkout-".concat(n))).src = "".concat($.checkoutUrl, "popup"), r.style.cssText = `
  z-index: 999999999999999;
  background: transparent;
  border: 0px none transparent;
  overflow-x: hidden;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  visibility: hidden;
  display: none;
  height: 100%;
`, r.setAttribute("allowpaymentrequest", "true"), r.setAttribute("allow", "payment; clipboard-read; clipboard-write"), document.body.appendChild(r), r), this.registerListeners();
  }
  return Be(t, [{ key: "registerListeners", value: function() {
    var e = this;
    window.addEventListener("message", function(n) {
      var r = "".concat(n.origin, "/") === $.checkoutUrl, a = e.checkoutIframe && e.checkoutIframe.contentWindow === n.source, o = e.isEmbed;
      r || a ? e.respondToEvent(n) : o && e.respondToEmbedEvents(n);
    });
  } }, { key: "sendAnalyticsEventToCheckout", value: function(e, n) {
    this.checkoutIframe.contentWindow.postMessage({ type: "analytics", action: e, params: n }, "*");
  } }, { key: "checkout", value: function(e) {
    this.activeTransaction() && this.activeTransaction().cancel(), S = this;
    var n = Y1(this.transactions, e) || new U1(e);
    return new Promise(function(r, a) {
      n.requestInline().then(function(o) {
        var s = function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = i.platform, d = i.userAgent, h = d === void 0 ? window && window.navigator && window.navigator.userAgent : d, u = l || at, k = h && !!h.match(/Version\/[\d.]+.*Safari/), m = u && /(Mac)/i.test(u);
          return ot() || m && k;
        }() && Q1(o.channels), c = function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = !!i.custom_filters && i.custom_filters.recurring, d = i.plan_details, h = l || d, u = !!i.link_config && i.link_config.enabled && i.link_config.has_payment_instruments;
          return !h && u;
        }(o);
        c || s ? (S.preloadTransaction({ inlineTransaction: n }), S.preCheckoutModal = function(i, l) {
          var d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, h = document.querySelector("#pre-checkout-modal-".concat(i));
          if (h) {
            if (xe(h) && q1(h)) return h;
            h.remove();
          }
          var u = document.createElement("div");
          u.classList.add("pre-checkout-modal"), u.id = "pre-checkout-modal-".concat(i), u.style.zIndex = mn() + 1;
          var k = document.createElement("div");
          k.classList.add("pre-checkout-modal__content"), u.appendChild(k);
          var m = l || {}, C = m.merchant_logo, g = m.merchant_name, w = m.email, L = m.amount, I = m.currency, V = m.label, f = new Intl.NumberFormat("en", { style: "currency", currency: I, currencyDisplay: "code", maximumFractionDigits: 2, minimumFractionDigits: 0 }).format(L / 100), F = document.createElement("div");
          F.classList.add("payment-info"), F.innerHTML = '<img class="merchant-logo" src="'.concat(C, '" alt="').concat(g, ` Logo">
    <div class="customer-info">
      <div class="customer-email">`).concat(V || w, `</div>
      <div class="transaction-amount">Pay <span class="amount">`).concat(f, `</span></div>
    </div>`), k.appendChild(F), k.innerHTML += pn;
          var q = document.createElement("div");
          q.classList.add("modal-wrapper"), d.canPayWithVault ? vn(q, { canPayWithApplePay: d.canPayWithApplePay }) : bn(q), q.innerHTML = q.innerHTML + Xe + un, k.appendChild(q);
          var K = document.createElement("style");
          return K.textContent = fn, document.body.appendChild(K), document.body.appendChild(u), u;
        }(S.id, o, { canPayWithVault: c, canPayWithApplePay: s }), s ? (S.paymentRequestContainer = q1(S.preCheckoutModal), Ee(S.paymentRequestContainer, { channels: o.channels, styles: { applePay: { width: "100%", type: "pay", height: "42px", padding: "15px", borderRadius: "5px" } } }, o.merchant_id).then(function() {
          S.registerPaymentRequestEventListeners(), S.openPreCheckoutModal();
        }).catch(function() {
          c ? (q1(S.preCheckoutModal).remove(), S.openPreCheckoutModal()) : (S.closePreCheckoutModal(), S.animateCheckoutIn());
        }).finally(function() {
          r(n);
        })) : (S.openPreCheckoutModal(), r(n))) : (S.newTransaction({ inlineTransaction: n }), r(n));
      }).catch(function(o) {
        n.onSetupError({ status: !1, message: o.message }), a(o);
      });
    });
  } }, { key: "openPreCheckoutModal", value: function() {
    var e;
    this.registerPreCheckoutModalEventListeners(), e = this.preCheckoutModal, new Promise(function(n, r) {
      try {
        var a = e.querySelector(".pre-checkout-modal__content");
        e.classList.add("show"), setTimeout(function() {
          a.classList.add("show"), n(!0);
        }, 50);
      } catch (o) {
        r(o);
      }
    });
  } }, { key: "registerPreCheckoutModalEventListeners", value: function() {
    var e, n = this, r = !1, a = this.activeTransaction();
    document.addEventListener("touchstart", function(i) {
      i.preventDefault(), r || (r = !0, e = setTimeout(function() {
        r = !1;
      }, 125));
    }, !0), document.addEventListener("touchend", function(i) {
      i.target && i.target.isSameNode(S.preCheckoutModal) && r && (clearTimeout(e), S.closePreCheckoutModal(), a && a.cancel()), r = !1;
    }, !0);
    var o = xe(this.preCheckoutModal), s = this.preCheckoutModal.querySelector("#".concat(tt));
    o.onclick = function() {
      n.closePreCheckoutModal(), n.animateCheckoutIn();
    }, s && (s.onclick = function() {
      n.closePreCheckoutModal(), n.animateCheckoutIn(), n.checkoutIframe.contentWindow.postMessage({ type: "inline:pay-with-vault" }, "*");
    });
    var c = function(i) {
      return i.querySelector("#apple-pay-close-button");
    }(this.preCheckoutModal);
    c.onclick = function() {
      n.sendAnalyticsEventToCheckout(Mn), n.closePreCheckoutModalAndCancelTransaction();
    };
  } }, { key: "closePreCheckoutModal", value: function(e) {
    var n;
    this.preCheckoutModal && (e === "failed" ? (n = this.preCheckoutModal) && (n.querySelector("#apple-pay-mark--light").innerHTML = `<svg width="50" height="30" viewBox="0 0 21 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="error-icon">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="error" fill-rule="nonzero">
            <path d="M9.14672,0.47855 L0.14829,15.47855 C-0.0403320234,15.7872042 -0.0475647902,16.1736607 0.129375884,16.4891566 C0.306316558,16.8046526 0.639843999,16.9999993 1.00157,17 L19.43546,17 C19.797186,16.9999993 20.1307134,16.8046526 20.3076541,16.4891566 C20.4845948,16.1736607 20.477362,15.7872042 20.28874,15.47855 L10.85328,0.47855 C10.671624,0.181297031 10.3483651,3.00996351e-06 10,3.00996351e-06 C9.6516349,3.00996351e-06 9.32837603,0.181297031 9.14672,0.47855 Z" id="Shape" fill="#FFAA22"></path>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="6" width="2" height="5"></rect>
            <rect id="Rectangle-path" fill="#FFFFFF" x="9" y="12" width="2" height="2"></rect>
        </g>
    </g>
</svg>`, n.querySelector("#apple-pay-description").textContent = "An error occurred while paying with Apple Pay. Please try again or use another payment method.") : (function(r) {
      r && (r.querySelector(".pre-checkout-modal__content").classList.remove("show"), r.classList.remove("show"));
    }(this.preCheckoutModal), this.preCheckoutModal.remove(), this.preCheckoutModal = null));
  } }, { key: "closePreCheckoutModalAndCancelTransaction", value: function() {
    this.preCheckoutModal && (this.cancelTransaction(), this.checkoutIframe && this.checkoutIframe.contentWindow && this.checkoutIframe.contentWindow.postMessage("close", "*"), this.closePreCheckoutModal());
  } }, { key: "newTransaction", value: function(e) {
    var n, r = e.preload, a = e.inlineTransaction, o = B1(e, Tn), s = this.paymentRequestContainer && M1(this.paymentRequestContainer);
    this.activeTransaction() && !s && this.activeTransaction().cancel();
    var c = Y1(this.transactions, a ? a.parameters : o), i = c || a || new U1(o);
    return c ? (i.isActive = !0, n = { accessCode: i.accessCode }) : (n = i.accessCode ? { accessCode: i.accessCode } : i.urlParameters, this.transactions.push(i)), this.isDeprecatedApi || this.open(n, r), i;
  } }, { key: "preloadTransaction", value: function(e) {
    var n = this;
    return this.newTransaction(H(H({}, e), {}, { preload: !0 })), function() {
      return n.animateCheckoutIn();
    };
  } }, { key: "paymentRequest", value: function(e) {
    var n = e.container, r = e.styles, a = e.onElementsMount, o = B1(e, In);
    return S = this, new Promise(function(s, c) {
      var i = document.querySelector("#".concat(e.loadPaystackCheckoutButton));
      if (_e()) {
        S.activeTransaction() && S.activeTransaction().cancel(), n && x1(n) || F1("A container is required to mount the payment request button"), S.paymentRequestContainer = x1(n);
        var l = Y1(S.transactions, o), d = l || new U1(o);
        d.requestInline().then(function(k) {
          Ee(S.paymentRequestContainer, { channels: k.channels, styles: r }, k.merchant_id).then(function(m) {
            a && a(m);
          }).catch(function() {
            a && a(null);
          }).finally(function() {
            if (l ? d.isActive = !0 : S.transactions.push(d), S.registerPaymentRequestEventListeners(), i) {
              var m = S.preloadTransaction({ inlineTransaction: d });
              i.onclick = m;
            }
            s(d);
          });
        }).catch(function(k) {
          d.onSetupError({ status: !1, message: k.message }), c(k);
        });
      } else {
        if (e && e.loadPaystackCheckoutButton) if (i) {
          var h = S.preloadTransaction(o);
          i.onclick = h;
        } else _1("This device does not support any payment request wallet options. Please consult our documentation at https://developers.paystack.co/docs/paystack-inline to see how to load alternative payment options using 'loadPaystackCheckoutButton'");
        a && a(null);
        var u = S.activeTransaction();
        s(u);
      }
    });
  } }, { key: "registerApplePayEventListener", value: function() {
    var e = this;
    M1(this.paymentRequestContainer).onclick = function() {
      return e.startApplePay();
    };
  } }, { key: "registerPaymentRequestEventListeners", value: function() {
    var e = this.activeTransaction();
    e && Q1(e.response.channels) ? this.registerApplePayEventListener() : yn(this.paymentRequestContainer);
  } }, { key: "startApplePay", value: function() {
    var e, n, r, a, o, s = this, c = "apple pay", i = this.activeTransaction();
    if (i) {
      var l = { channel: "apple_pay", paymentMethod: c, currency: i.currency, amount: i.amount }, d = { channel: "apple_pay", currency: i.currency, amount: i.amount, timeSpent: i.getTimeSpent() };
      try {
        i.logAttempt(c), this.sendAnalyticsEventToCheckout(Vn, l);
        var h = (e = { currency: i.response.currency, amount: i.response.amount, merchantName: i.response.merchant_name, interval: i.response.plan_details && i.response.plan_details.interval }, n = e.currency, r = e.amount, a = e.merchantName, o = e.interval, H({ countryCode: "NG", currencyCode: n, merchantCapabilities: ["supports3DS", "supportsCredit", "supportsDebit"], supportedNetworks: ["visa", "masterCard"], requiredBillingContactFields: ["postalAddress", "name", "phone", "email"], total: { label: "".concat(a, " - Paystack"), type: "final", amount: String(ke(r)) } }, typeof o == "string" && o.trim() !== "" && { lineItems: [{ label: hn(o), amount: String(ke(r)) }] })), u = new window.ApplePaySession($.applePayVersion, h);
        u.onvalidatemerchant = function(k) {
          var m = function(C) {
            var g = C.transactionId, w = C.validationURL, L = C.merchantName, I = C.domainName, V = I === void 0 ? window && window.location && window.location.hostname : I, f = "".concat($.paymentBaseUrl).concat($.applePayValidateSessionPath), F = Se({ transaction: g, sessionUrl: w, displayName: L, domainName: V });
            return fetch(f, H(H({}, we), {}, { body: F })).then(function(q) {
              return q.json();
            });
          }({ validationURL: k.validationURL, transactionId: i.id, merchantName: i.response.merchant_name });
          m.then(function(C) {
            C.status !== "success" ? i.onSetupError(C) : u.completeMerchantValidation(C.data), i.logValidationResponse(C.message);
          }).catch(function(C) {
            i.onSetupError(C);
          });
        }, u.oncancel = function() {
          S.preCheckoutModal || i.onCancel();
        }, u.onpaymentauthorized = function(k) {
          var m = k.payment, C = function(g) {
            var w = g.transactionId, L = g.payment, I = "".concat($.paymentBaseUrl).concat($.applePayChargePath), V = Se({ transaction: w, paymentObject: JSON.stringify(L) });
            return fetch(I, H(H({}, we), {}, { body: V })).then(function(f) {
              return f.json();
            });
          }({ transactionId: i.id, payment: m });
          C.then(function(g) {
            i.logAPIResponse(g, c), g.status === "success" ? (u.completePayment(u.STATUS_SUCCESS), i.onSuccess(g), s.sendAnalyticsEventToCheckout(An, d)) : (u.completePayment(u.STATUS_FAILURE), i.onSetupError(g), s.sendAnalyticsEventToCheckout(Ie, { channel: "apple_pay", message: g && g.message || "Transaction attempt failed" })), S.closePreCheckoutModal(g.status);
          }).catch(function(g) {
            u.completePayment(u.STATUS_FAILURE), i.onSetupError(g), s.sendAnalyticsEventToCheckout(Ie, { channel: "apple_pay", message: g && g.message || "Error occurred" }), S.closePreCheckoutModal("failed");
          });
        }, u.begin();
      } catch (k) {
        i.onSetupError(k);
      }
    } else F1("Could not initiate apple pay transaction");
  } }, { key: "resumeTransaction", value: function(e) {
    return this.newTransaction({ accessCode: e });
  } }, { key: "activeTransaction", value: function() {
    var e = this.transactions.filter(function(r) {
      return r.isActive;
    }), n = e.length ? e[e.length - 1] : null;
    return n;
  } }, { key: "cancelTransaction", value: function(e) {
    var n = this.transactions.find(function(r) {
      return r.id === e;
    }) || this.activeTransaction();
    n && (n.cancel(), this.close());
  } }, { key: "respondToEvent", value: function(e) {
    if (e) {
      var n, r, a = this.activeTransaction();
      try {
        var o = e.data || e.message, s = o.event, c = o.data;
        if (s) switch (s) {
          case "loaded:checkout":
            this.isLoaded = !0, a && Te({ checkoutIframe: this.checkoutIframe, urlParameters: a.urlParameters });
            break;
          case "loaded:transaction":
            n = this.backgroundIframe, (r = n.contentWindow.document) && (r.getElementById("app-loader").style.display = "none"), a.onLoad(c);
            break;
          case "error":
            c.type === "setup" ? a.onSetupError(c) : a.logError(c);
            break;
          case "cancel":
          case "close":
            this.close();
            var i = c && c.status;
            i && a.setStatus(i), !(this.paymentRequestContainer && M1(this.paymentRequestContainer) && !this.preCheckoutModal) && (a.isActive = !1), a.onCancel();
            break;
          case "transfer:pending":
            this.close();
            var l = c && c.status;
            l && a.setStatus(l), a.onBankTransferConfirmationPending();
            break;
          case "success":
            this.close(), a.onSuccess(c);
        }
      } catch {
      }
    }
  } }, { key: "respondToEmbedEvents", value: function(e) {
    var n, r, a = this.activeTransaction(), o = e.data || e.message;
    if (o && (typeof o == "string" || o instanceof String)) {
      var s = { action: r = (n = o) && typeof n == "string" ? n.split(" ")[0] : null, data: r ? n.split(" ").slice(2).join(" ") : null };
      s && s.action === "PaystackClose" && s.data && a.onSuccess(o), s.action === "PaystackTLSClose" && a.cancel();
    }
  } }, { key: "animateCheckoutIn", value: function() {
    var e, n = this;
    if (!this.isOpen) {
      var r = this.checkoutIframe, a = this.backgroundIframe;
      (e = { checkoutIframe: r, backgroundIframe: a }, new Promise(function(o, s) {
        e || s("No dom element provided");
        var c = e.checkoutIframe, i = e.backgroundIframe;
        c && i || s("No dom element provided"), c.style.display = "", c.style.visibility = "visible", i.style.display = "", i.style.visibility = "visible", o();
      })).then(function() {
        n.checkoutIframe.contentWindow.postMessage("render", "*");
      }), this.isOpen = !0;
    }
  } }, { key: "open", value: function(e, n) {
    e && (Te({ checkoutIframe: this.checkoutIframe, urlParameters: e }), n || this.animateCheckoutIn());
  } }, { key: "close", value: function() {
    var e = this;
    if (this.isOpen) {
      var n, r = this.checkoutIframe, a = this.backgroundIframe;
      (n = { checkoutIframe: r, backgroundIframe: a }, new Promise(function(o, s) {
        n || s("No dom element provided");
        var c = n.checkoutIframe, i = n.backgroundIframe;
        c && i || s("No dom element provided"), i.style.opacity = 0, c.style.display = "none", c.style.visibility = "hidden", setTimeout(function() {
          i.style.display = "none", i.style.visibility = "hidden", i.style.opacity = 1, o();
        }, 300);
      })).then(function() {
        e.checkoutIframe.contentWindow.postMessage("close", "*");
      }), this.isOpen = !1;
    }
  } }, { key: "isLoaded", value: function() {
    return this.isLoaded;
  } }], [{ key: "setup", value: function(e) {
    var n = e && e.container;
    S || (S = new t({ isDeprecatedApi: !0, isEmbed: n })), Pe("PaystackPop.setup()", "new PaystackPop()", "Please consult our documentation at https://developers.paystack.co/docs/paystack-inline");
    var r = S.newTransaction(e, "deprecated"), a = r.urlParameters;
    if (n) {
      var o = "".concat($.siteUrl, "/assets/payment/production/inline.html?").concat(Ke(a)), s = function(c, i) {
        var l = z1("embed-checkout-".concat(c));
        return l.style.cssText = `
  background: transparent;
  background: rgba(0,0,0,0);
  border: 0px none transparent;
  overflow-x: hidden;
  overflow-y: hidden;
  nmargin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  display: none;
`, l.src = i, l.id = c, l.name = c, l;
      }(S.id, o);
      (function(c, i) {
        var l = document.getElementById(c);
        l.innerHTML = "", l.removeAttribute("style"), l.className = "paystack-embed-container", l.style.position = "relative", l.style.width = "100%", l.appendChild(i);
      })(e.container, s), s.onload = function() {
        var c;
        s.contentWindow.postMessage("PaystackOpen ".concat(S.id), "*"), c = s, new Promise(function(i, l) {
          c || l("No dom element provided"), c.style.display = "", c.style.visibility = "visible", i();
        });
      };
    } else r.openIframe = function() {
      Pe("openIframe", "open", "Please consult our documentation at https://developers.paystack.co/docs/paystack-inline"), S.open(a);
    };
    return r;
  } }]), t;
}();
if (Me = be().length > 0, Ve = h1() && h1().parentElement.tagName === "FORM", Me && Ve) {
  var H1, p1 = function() {
    var t = {}, e = h1();
    return be().forEach(function(n) {
      var r = e.getAttribute(n), a = n.split("data-")[1].replace(/-([a-z])/g, function(o) {
        return o[1].toUpperCase();
      });
      t[a] = r;
    }), function(n) {
      if (n.buttonId && !document.getElementById(n.buttonId)) throw new Error("Please make sure the buttonId is an element available in the DOM");
      var r = H({}, n);
      r.buttonText = n.buttonText || "Pay", r.buttonVariant = "normal", r.buttonWordmarkVariant = "normal";
      var a = ["normal", "light"];
      return n.buttonVariant && a.indexOf(n.buttonVariant) > -1 && (r.buttonVariant = n.buttonVariant), n.buttonWordmarkVariant && a.indexOf(n.buttonWordmarkVariant) > -1 && (r.buttonWordmarkVariant = n.buttonWordmarkVariant), r;
    }(t);
  }(), Ae = h1().parentElement;
  S || (S = new it()), function(t) {
    var e;
    if (t.id) (e = document.getElementById(t.id)).setAttribute("data-inline-id", t.id);
    else {
      var n = document.createElement("div");
      n.id = "inline-button-".concat(t.inlineId), n.innerHTML = function(r) {
        var a, o, s = { normal: `
  <svg id="inline-button-wordmark" width="137" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M.037 5.095l1.075-.135c-.011-.774-.025-1.944-.013-2.149C1.19 1.364 2.38.134 3.81.013 3.9.006 3.99.002 4.077 0a2.947 2.947 0 0 1 2.046.76c.574.509.95 1.26 1.008 2.007.015.192.01 1.491.01 2.257l1.096.163L8.2 11.44 4.093 12 0 11.346l.037-6.251zm4.106-.514l1.724.256c-.007-.933-.05-2.295-.26-2.654-.319-.545-.846-.867-1.443-.88h-.063c-.607.008-1.138.322-1.458.864-.222.378-.266 1.66-.265 2.637l1.765-.223zM18.228 10.108c-.576 0-1.064-.072-1.464-.216a2.864 2.864 0 0 1-.972-.6 2.552 2.552 0 0 1-.588-.864 4.067 4.067 0 0 1-.252-1.044h1.008c.032.256.088.5.168.732.08.224.204.424.372.6.168.168.388.304.66.408.28.096.636.144 1.068.144.28 0 .536-.036.768-.108.24-.08.448-.192.624-.336.176-.144.312-.316.408-.516.104-.2.156-.42.156-.66 0-.24-.032-.448-.096-.624a1.02 1.02 0 0 0-.336-.468 1.885 1.885 0 0 0-.636-.324 6.4 6.4 0 0 0-1.008-.228 8.79 8.79 0 0 1-1.212-.276 3.246 3.246 0 0 1-.9-.432 1.982 1.982 0 0 1-.564-.672c-.128-.272-.192-.6-.192-.984 0-.328.068-.632.204-.912.136-.288.324-.536.564-.744.248-.208.54-.372.876-.492.336-.12.708-.18 1.116-.18.864 0 1.548.204 2.052.612.512.4.812.984.9 1.752h-.936c-.104-.544-.316-.932-.636-1.164-.32-.24-.78-.36-1.38-.36-.592 0-1.04.132-1.344.396a1.255 1.255 0 0 0-.444.996c0 .208.024.396.072.564.056.16.156.3.3.42.152.12.36.228.624.324a6.72 6.72 0 0 0 1.068.228c.48.072.9.168 1.26.288.36.12.664.276.912.468s.432.428.552.708c.128.28.192.624.192 1.032 0 .36-.076.696-.228 1.008a2.472 2.472 0 0 1-.612.804c-.264.224-.58.4-.948.528-.36.128-.752.192-1.176.192zM25.355 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM32.091 10.108c-.44 0-.848-.072-1.224-.216a3.054 3.054 0 0 1-.972-.636 3.12 3.12 0 0 1-.648-1.008 3.626 3.626 0 0 1-.228-1.32v-.096c0-.48.08-.916.24-1.308.16-.4.376-.74.648-1.02.28-.28.604-.496.972-.648.376-.16.772-.24 1.188-.24.328 0 .644.04.948.12.312.08.588.208.828.384.248.168.456.392.624.672.168.28.276.62.324 1.02h-.984c-.08-.496-.284-.848-.612-1.056-.32-.208-.696-.312-1.128-.312a1.93 1.93 0 0 0-.804.168c-.24.112-.452.272-.636.48a2.23 2.23 0 0 0-.42.744 2.991 2.991 0 0 0-.156.996v.096c0 .776.188 1.364.564 1.764.384.392.88.588 1.488.588.224 0 .436-.032.636-.096a1.651 1.651 0 0 0 .96-.768c.112-.192.18-.416.204-.672h.924a2.595 2.595 0 0 1-.276.948 2.386 2.386 0 0 1-.576.744c-.24.208-.52.372-.84.492-.32.12-.668.18-1.044.18zM38.335 10.108a2.83 2.83 0 0 1-.876-.132 1.724 1.724 0 0 1-.684-.42 2.145 2.145 0 0 1-.456-.756c-.112-.304-.168-.672-.168-1.104V3.724h.996v3.924c0 .552.116.956.348 1.212.24.256.608.384 1.104.384.224 0 .44-.036.648-.108.208-.072.392-.18.552-.324.16-.144.288-.324.384-.54.096-.216.144-.464.144-.744V3.724h.996V10h-.996v-.996c-.144.296-.388.556-.732.78-.336.216-.756.324-1.26.324zM43.216 3.724h.996v1.128c.2-.352.452-.64.756-.864.312-.232.748-.356 1.308-.372v.936a4.461 4.461 0 0 0-.852.12 1.647 1.647 0 0 0-.66.324 1.472 1.472 0 0 0-.408.612c-.096.248-.144.564-.144.948V10h-.996V3.724zM50 10.108c-.44 0-.848-.076-1.224-.228a2.916 2.916 0 0 1-.96-.636 2.966 2.966 0 0 1-.636-1.008 3.77 3.77 0 0 1-.216-1.308v-.096c0-.472.072-.904.216-1.296.144-.4.344-.74.6-1.02.264-.288.576-.508.936-.66.36-.16.756-.24 1.188-.24.36 0 .708.06 1.044.18.344.112.648.292.912.54.264.248.472.572.624.972.16.392.24.868.24 1.428v.324h-4.728c.024.72.204 1.272.54 1.656.336.376.828.564 1.476.564.984 0 1.54-.364 1.668-1.092h.996c-.112.632-.408 1.112-.888 1.44-.48.32-1.076.48-1.788.48zm1.704-3.852c-.048-.648-.232-1.112-.552-1.392-.312-.28-.728-.42-1.248-.42-.512 0-.932.164-1.26.492-.32.32-.524.76-.612 1.32h3.672zM56.496 10.108c-.408 0-.788-.068-1.14-.204a2.683 2.683 0 0 1-.9-.612 3.01 3.01 0 0 1-.588-.984 4.01 4.01 0 0 1-.204-1.32v-.096c0-.48.072-.92.216-1.32.144-.4.344-.744.6-1.032.256-.296.564-.524.924-.684.36-.16.756-.24 1.188-.24.528 0 .956.112 1.284.336.328.216.584.476.768.78V.724h.996V10h-.996V8.92c-.088.152-.208.3-.36.444a2.792 2.792 0 0 1-.516.384 2.874 2.874 0 0 1-.6.252c-.216.072-.44.108-.672.108zm.108-.828c.288 0 .56-.048.816-.144.256-.096.476-.24.66-.432.184-.2.328-.448.432-.744.112-.304.168-.656.168-1.056v-.096c0-.808-.18-1.404-.54-1.788-.352-.384-.836-.576-1.452-.576-.624 0-1.112.208-1.464.624-.352.416-.528 1.008-.528 1.776v.096c0 .392.048.736.144 1.032.104.296.24.54.408.732.176.192.38.336.612.432.232.096.48.144.744.144zM67.712 10.108c-.512 0-.948-.112-1.308-.336a2.38 2.38 0 0 1-.816-.804V10h-.996V.724h.996V4.78a1.92 1.92 0 0 1 .348-.432c.152-.144.32-.268.504-.372.192-.112.396-.2.612-.264.216-.064.436-.096.66-.096.408 0 .788.072 1.14.216.352.144.652.352.9.624.256.272.456.604.6.996.144.392.216.832.216 1.32v.096c0 .48-.068.92-.204 1.32a3.103 3.103 0 0 1-.576 1.02 2.583 2.583 0 0 1-.9.672 2.937 2.937 0 0 1-1.176.228zm-.096-.828c.624 0 1.1-.2 1.428-.6.328-.408.492-.996.492-1.764V6.82c0-.4-.052-.748-.156-1.044a2.095 2.095 0 0 0-.42-.732 1.53 1.53 0 0 0-.612-.444 1.798 1.798 0 0 0-.744-.156c-.288 0-.56.048-.816.144a1.71 1.71 0 0 0-.648.444c-.184.192-.328.44-.432.744a3.152 3.152 0 0 0-.156 1.044v.096c0 .8.192 1.396.576 1.788.384.384.88.576 1.488.576zM73.63 9.352l-2.46-5.628h1.068l1.92 4.5 1.74-4.5h1.02l-3.468 8.46h-1.008l1.188-2.832zM87.127 3.669A3.138 3.138 0 0 0 86.1 2.95a3.09 3.09 0 0 0-1.228-.25c-.448 0-.848.086-1.187.26a2.199 2.199 0 0 0-.662.497v-.191a.387.387 0 0 0-.214-.348.323.323 0 0 0-.14-.03h-1.315a.314.314 0 0 0-.254.116.377.377 0 0 0-.1.262v8.97c0 .1.034.188.1.258a.34.34 0 0 0 .254.103h1.341a.342.342 0 0 0 .244-.103.336.336 0 0 0 .11-.259v-3.06c.178.202.417.357.702.464.35.134.72.203 1.093.203.43 0 .848-.082 1.242-.248a3.124 3.124 0 0 0 1.04-.724c.305-.326.545-.709.707-1.128a3.93 3.93 0 0 0 .263-1.477c0-.54-.086-1.037-.263-1.477a3.387 3.387 0 0 0-.706-1.12zm-1.204 3.24c-.073.19-.18.362-.315.51a1.415 1.415 0 0 1-1.065.466c-.2.001-.4-.04-.584-.12a1.484 1.484 0 0 1-.49-.346 1.593 1.593 0 0 1-.32-.51 1.738 1.738 0 0 1-.115-.63c0-.224.04-.435.115-.631a1.532 1.532 0 0 1 .804-.846c.185-.086.386-.13.59-.129.215 0 .414.044.593.13.177.083.338.199.474.341a1.622 1.622 0 0 1 .425 1.135c0 .225-.037.436-.112.63zM95.298 2.89h-1.33a.339.339 0 0 0-.246.11.384.384 0 0 0-.108.266v.166a1.856 1.856 0 0 0-.602-.472 2.525 2.525 0 0 0-1.166-.258 3.227 3.227 0 0 0-2.284.964 3.554 3.554 0 0 0-.734 1.123 3.827 3.827 0 0 0-.275 1.477c0 .54.092 1.037.275 1.477.184.434.427.817.728 1.128a3.146 3.146 0 0 0 2.277.973c.437 0 .834-.088 1.173-.259.25-.13.456-.287.608-.471v.177a.34.34 0 0 0 .11.259.341.341 0 0 0 .244.104h1.33a.324.324 0 0 0 .25-.105.349.349 0 0 0 .102-.258V3.267a.377.377 0 0 0-.1-.262.325.325 0 0 0-.252-.115zM93.502 6.9a1.55 1.55 0 0 1-.312.511c-.136.143-.296.26-.473.344-.178.085-.38.129-.596.129-.207 0-.407-.044-.59-.13a1.501 1.501 0 0 1-.791-.855 1.766 1.766 0 0 1-.112-.62c0-.225.038-.436.112-.632.075-.193.181-.364.314-.504.137-.143.3-.26.478-.342.182-.085.382-.129.59-.129.215 0 .417.044.595.13.178.085.338.2.473.341a1.623 1.623 0 0 1 .424 1.135c0 .215-.037.424-.112.622zM108.567 6.094a2.265 2.265 0 0 0-.654-.402c-.247-.101-.509-.181-.785-.235l-1.014-.204c-.26-.05-.441-.117-.543-.203a.328.328 0 0 1-.136-.264c0-.11.063-.2.189-.282.137-.086.329-.13.566-.13.26 0 .518.053.757.157.243.106.471.226.67.36.295.187.546.162.727-.053l.487-.57a.543.543 0 0 0 .152-.357c0-.128-.064-.245-.185-.351-.207-.184-.533-.378-.971-.568-.437-.192-.987-.29-1.637-.29-.427 0-.82.058-1.168.172-.35.116-.65.276-.893.474-.245.204-.438.44-.57.713a2 2 0 0 0-.198.875c0 .56.167 1.017.496 1.358.328.333.766.56 1.304.67l1.054.232c.3.062.528.132.675.21.129.067.19.163.19.297 0 .12-.061.227-.188.324-.133.104-.342.155-.622.155a1.83 1.83 0 0 1-.831-.19 3.056 3.056 0 0 1-.678-.458.995.995 0 0 0-.307-.17c-.126-.037-.268.003-.431.13l-.583.461c-.169.145-.24.32-.209.522.029.194.19.394.491.62.269.193.614.368 1.029.518.415.151.901.229 1.453.229.444 0 .854-.058 1.215-.172.362-.119.681-.278.941-.48a2.056 2.056 0 0 0 .819-1.663c0-.319-.053-.6-.165-.836a1.843 1.843 0 0 0-.447-.6zM114.383 7.73a.363.363 0 0 0-.295-.192.55.55 0 0 0-.343.113c-.095.062-.198.11-.306.141a.75.75 0 0 1-.426.013.43.43 0 0 1-.181-.093.554.554 0 0 1-.143-.204.92.92 0 0 1-.059-.362v-2.46h1.731c.099 0 .188-.04.266-.117a.368.368 0 0 0 .112-.26V3.268a.369.369 0 0 0-.115-.268.38.38 0 0 0-.263-.109h-1.732V1.216a.354.354 0 0 0-.108-.27.347.347 0 0 0-.243-.104h-1.344a.36.36 0 0 0-.34.226.371.371 0 0 0-.027.148V2.89h-.767a.324.324 0 0 0-.255.115.385.385 0 0 0-.098.262V4.31a.4.4 0 0 0 .212.346c.044.021.092.032.14.03h.768v2.925c0 .39.069.726.2 1.003.132.274.305.504.514.676.217.178.465.31.731.388.27.084.551.126.833.126.385 0 .75-.061 1.094-.18a2.13 2.13 0 0 0 .861-.552c.152-.181.17-.381.046-.581l-.463-.76zM121.672 2.89h-1.329a.339.339 0 0 0-.244.11.39.39 0 0 0-.08.122.394.394 0 0 0-.027.144v.166a1.906 1.906 0 0 0-.605-.472c-.335-.173-.726-.258-1.168-.258-.42 0-.834.083-1.226.249a3.24 3.24 0 0 0-1.055.715 3.528 3.528 0 0 0-.734 1.123 3.79 3.79 0 0 0-.276 1.477c0 .54.092 1.037.275 1.477.184.434.428.817.729 1.128a3.138 3.138 0 0 0 2.273.973 2.59 2.59 0 0 0 1.175-.259c.255-.13.457-.287.612-.471v.177a.34.34 0 0 0 .108.259.343.343 0 0 0 .243.104h1.329a.335.335 0 0 0 .252-.105.364.364 0 0 0 .102-.258V3.267a.38.38 0 0 0-.1-.262.332.332 0 0 0-.115-.087.311.311 0 0 0-.139-.028zM119.876 6.9a1.534 1.534 0 0 1-.786.855 1.362 1.362 0 0 1-.594.129c-.207 0-.405-.044-.588-.13a1.516 1.516 0 0 1-.792-.855 1.757 1.757 0 0 1-.113-.62c0-.225.037-.436.112-.632.073-.187.179-.358.314-.504.138-.143.3-.26.479-.342.184-.086.385-.13.588-.129.217 0 .415.044.594.13.181.085.34.2.472.341.134.143.24.313.314.504a1.73 1.73 0 0 1 0 1.253zM128.978 7.64l-.763-.593c-.146-.118-.284-.15-.404-.1a.742.742 0 0 0-.279.205 2.527 2.527 0 0 1-.583.535c-.192.122-.444.183-.742.183-.219 0-.42-.04-.6-.122a1.423 1.423 0 0 1-.469-.342 1.575 1.575 0 0 1-.308-.51 1.751 1.751 0 0 1-.106-.617c0-.228.034-.438.106-.632.07-.192.173-.363.308-.503.135-.144.295-.26.472-.342.187-.088.391-.132.597-.13.298 0 .547.064.742.187.198.126.396.306.584.534.078.092.17.16.278.206.122.048.259.016.401-.101l.762-.594a.53.53 0 0 0 .201-.269.437.437 0 0 0-.034-.365 3.329 3.329 0 0 0-1.18-1.127c-.504-.291-1.108-.441-1.784-.441a3.519 3.519 0 0 0-2.51 1.033c-.322.322-.576.71-.747 1.137a3.68 3.68 0 0 0-.273 1.407c0 .495.093.968.273 1.402.173.424.427.808.747 1.128a3.527 3.527 0 0 0 2.51 1.034c.676 0 1.28-.149 1.784-.444a3.286 3.286 0 0 0 1.182-1.13.411.411 0 0 0 .055-.173.415.415 0 0 0-.023-.182.624.624 0 0 0-.197-.273zM136.06 9.045l-2.104-3.143 1.801-2.415c.094-.139.119-.272.075-.397-.031-.09-.116-.2-.334-.2h-1.425a.52.52 0 0 0-.234.058.482.482 0 0 0-.209.205L132.191 5.2h-.349V.363a.37.37 0 0 0-.099-.26.352.352 0 0 0-.253-.103h-1.332a.37.37 0 0 0-.337.22.346.346 0 0 0-.027.143V9.29c0 .103.038.193.11.259a.353.353 0 0 0 .254.104h1.333a.328.328 0 0 0 .251-.105.346.346 0 0 0 .075-.119.333.333 0 0 0 .024-.14V6.927h.386l1.571 2.446c.112.187.267.281.46.281h1.491c.226 0 .32-.11.358-.202.054-.13.038-.262-.047-.406zM102.863 2.89h-1.489a.389.389 0 0 0-.298.122.544.544 0 0 0-.13.249l-1.099 4.167h-.268l-1.182-4.167a.66.66 0 0 0-.113-.247.329.329 0 0 0-.264-.124h-1.544c-.199 0-.325.066-.372.193a.588.588 0 0 0-.002.37l1.887 5.865c.03.093.08.17.145.232a.388.388 0 0 0 .281.104h.798l-.066.19-.19.547a.872.872 0 0 1-.29.426.7.7 0 0 1-.442.148.956.956 0 0 1-.4-.09 1.842 1.842 0 0 1-.35-.209.62.62 0 0 0-.335-.115h-.016c-.13 0-.243.074-.334.216l-.474.708c-.193.304-.086.504.039.615.234.224.528.399.875.524.344.125.723.186 1.126.186.682 0 1.252-.187 1.689-.565.435-.376.756-.887.952-1.524l2.188-7.258c.05-.155.05-.284.005-.389-.037-.08-.125-.174-.327-.174z" fill="#011B33"/>
    </svg>`, light: Xe };
        return `
    <style>
      #inline-button-`.concat(r.inlineId, ` {
        position: relative;
        text-align: center;
        display: inline-block;
      }
      #inline-button-`).concat(r.inlineId, `__trigger {
        `).concat((a = r.variant || "normal", o = { normal: `
    background: linear-gradient(180deg,#44b669 0,#40ad57);
    text-shadow: 1px 1px 1px rgba(0,0,0,.1);
    color: #ffffff;
  `, light: `
    background: white;
    text-shadow: none;
    color: #011b33;
  ` }, "".concat(`
    box-sizing: border-box;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    margin: 0 0 10px;
    text-align: center;
    -webkit-appearance: none;
    outline: none;
    font-size: 14px;
    font-weight: 600;
    border-radius: 6px;
    cursor: pointer;
    padding: 16px 24px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    transition: all .3s ease;
    border: none;
    min-width: 190px;
  `).concat(o[a])), `
      }
      #inline-button-`).concat(r.inlineId, `__trigger:hover {
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
      }
      #inline-button-`).concat(r.inlineId, `__trigger:active {
        transform: translateY(3px);
      }
    </style>
    <button id="inline-button-`).concat(r.inlineId, '__trigger" data-inline-id="').concat(r.inlineId, '">').concat(r.text || "Pay", " ").concat(r.currency || "NGN", " ").concat(r.amount, `</button>
    <div id="inline-button-`).concat(r.inlineId, `__wordmark">
      `).concat(s[r.wordmarkVariant || "normal"], `
    </div>
  `);
      }(t), t.parent.parentNode.insertBefore(n, t.parent.nextSibling), e = sn(n.getElementsByTagName("button"), 1)[0];
    }
    return e;
  }({ inlineId: S.id, amount: p1.amount / 100, currency: p1.currency, id: p1.buttonId, text: p1.buttonText, variant: p1.buttonVariant, wordmarkVariant: p1.buttonWordmarkVariant, parent: h1() }).addEventListener("click", function(t) {
    t.preventDefault(), H1 ? S.resumeTransaction(H1.accessCode) : H1 = S.newTransaction(H(H({}, p1), {}, { onSuccess: function(e) {
      var n, r, a, o, s, c;
      n = { type: "hidden", name: "reference", value: e.reference, parent: Ae }, r = n.type, a = n.value, o = n.name, s = n.parent, (c = document.createElement("input")).type = r, c.value = a, c.name = o, s.appendChild(c), Ae.submit();
    } }));
  });
}
var On = function(t) {
  var e = new it();
  e.newTransaction(t);
};
function st(t) {
  function e(n) {
    var r = n.config, a = n.onSuccess, o = n.onClose, s = U(U({}, t), r), c = s.publicKey, i = s.firstname, l = s.lastname, d = s.phone, h = s.email, u = s.amount, k = s.reference, m = s.metadata, C = s.currency, g = C === void 0 ? "NGN" : C, w = s.channels, L = s.label, I = s.plan, V = s.quantity, f = s.subaccount, F = s.transaction_charge, q = s.bearer, K = s.split, t1 = s.split_code, B = s.connect_account, n1 = s.connect_split, X = s.onBankTransferConfirmationPending, l1 = U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U(U({ onSuccess: a || function() {
      return null;
    }, onCancel: o || function() {
      return null;
    }, key: c, email: h, amount: u }, i && { firstname: i }), l && { lastname: l }), d && { phone: d }), k && { ref: k }), g && { currency: g }), w && { channels: w }), m && { metadata: m }), L && { label: L }), X && { onBankTransferConfirmationPending: X }), f && { subaccount: f }), F && { transaction_charge: F }), q && { bearer: q }), K && { split: K }), t1 && { split_code: t1 }), I && { plan: I }), V && { quantity: V }), n1 && { connect_split: n1 }), B && { connect_account: B });
    On(l1);
  }
  return e;
}
var ct = ht({
  config: {},
  initializePayment: function() {
    return null;
  },
  onSuccess: function() {
    return null;
  },
  onClose: function() {
    return null;
  }
}), jn = function(t) {
  var e = t.children, n = t.onSuccess, r = t.onClose, a = De(t, ["children", "onSuccess", "onClose"]), o = st(a);
  return W.createElement(ct.Provider, { value: { config: a, initializePayment: o, onSuccess: n, onClose: r } }, e);
}, Ln = function(t) {
  var e = t.children, n = t.ref, r = yt(ct), a = r.config, o = r.initializePayment, s = r.onSuccess, c = r.onClose, i = function() {
    return o({ config: a, onSuccess: s, onClose: c });
  };
  return e({ initializePayment: i, ref: n });
};
mt(function(t, e) {
  var n = t.children, r = t.onSuccess, a = t.onClose, o = De(t, ["children", "onSuccess", "onClose"]), s = r || function() {
    return null;
  }, c = a || function() {
    return null;
  };
  return W.createElement(
    jn,
    U({}, o, { onSuccess: s, onClose: c }),
    W.createElement(Ln, { ref: e }, n)
  );
});
const Rn = "_checkoutModal_1rie5_1", Nn = "_backdrop_1rie5_14", Wn = "_errorMessage_1rie5_31", Gn = "_modalContent_1rie5_52", zn = "_checkoutForm_1rie5_61", qn = "_checkoutTop_1rie5_80", Un = "_checkoutTopFirst_1rie5_86", Yn = "_checkoutTopSpan_1rie5_91", s1 = {
  checkoutModal: Rn,
  backdrop: Nn,
  errorMessage: Wn,
  modalContent: Gn,
  checkoutForm: zn,
  checkoutTop: qn,
  checkoutTopFirst: Un,
  checkoutTopSpan: Yn
}, Fn = "_buttonBase_oq4y8_10", Hn = "_buttonDefault_oq4y8_37", Dn = "_buttonOutlined_oq4y8_46", Zn = "_buttonText_oq4y8_58", Bn = "_buttonFull_oq4y8_67", Jn = "_buttonDisabled_oq4y8_71", f1 = {
  buttonBase: Fn,
  buttonDefault: Hn,
  buttonOutlined: Dn,
  buttonText: Zn,
  buttonFull: Bn,
  buttonDisabled: Jn
};
function lt(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var a = t.length;
    for (e = 0; e < a; e++) t[e] && (n = lt(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Qn() {
  for (var t, e, n = 0, r = "", a = arguments.length; n < a; n++) (t = arguments[n]) && (e = lt(t)) && (r && (r += " "), r += e);
  return r;
}
const Kn = "_spinner_1uybp_1", Xn = {
  spinner: Kn
}, ut = ({
  color: t = "white",
  size: e = 15
}) => /* @__PURE__ */ z(
  "div",
  {
    className: Xn.spinner,
    style: {
      borderTopColor: t,
      width: e,
      height: e
    }
  }
), V1 = ({
  title: t,
  type: e = "button",
  variant: n = "default",
  onClick: r,
  className: a,
  disabled: o = !1,
  loading: s = !1,
  fullWidth: c = !1
}) => {
  let i = "white";
  switch (n) {
    case "outlined":
      i = "#414651";
      break;
    case "text":
      i = "#255A5A";
      break;
    case "default":
    default:
      i = "white";
      break;
  }
  const l = Qn(
    f1.buttonBase,
    n === "outlined" && f1.buttonOutlined,
    n === "text" && f1.buttonText,
    n === "default" && f1.buttonDefault,
    c && f1.buttonFull,
    o && f1.buttonDisabled,
    a
  );
  return /* @__PURE__ */ z(
    "button",
    {
      type: e,
      onClick: r,
      disabled: s || o,
      className: l,
      children: s ? /* @__PURE__ */ z(ut, { color: i, size: 15 }) : t
    }
  );
}, pt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAACACAYAAADXlBe3AAAACXBIWXMAAC4jAAAuIwF4pT92AAAFDGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMi0wNS0zMFQyMTowOTowMiswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjItMDUtMzFUMDk6MzErMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDUtMzFUMDk6MzErMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjRlNmM1YTctYWExZC0zMTQ4LTliY2Qt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", _n = "_container_1apau_1", $n = "_label_1apau_8", e2 = "_labelText_1apau_15", t2 = "_logo_1apau_19", n2 = "_mima_1apau_26", m1 = {
  container: _n,
  label: $n,
  labelText: e2,
  logo: t2,
  mima: n2
}, r2 = () => /* @__PURE__ */ i1(
  "a",
  {
    href: "https://mimapay.africa/",
    className: m1.mima,
    target: "_blank",
    rel: "noopener noreferrer",
    children: [
      /* @__PURE__ */ z("p", { children: "Powered by" }),
      /* @__PURE__ */ z("img", { src: pt, className: m1.logo, alt: "mima Logo" })
    ]
  }
), a2 = ({
  onSuccess: t,
  onClose: e,
  goBack: n,
  currencyCode: r,
  transactionAmount: a
}) => {
  const o = Zt(), s = qt(), [c, i] = b1(!1), l = async (d) => {
    if (d.preventDefault(), !o || !s) return;
    i(!0);
    const { error: h } = await o.confirmPayment({
      elements: s,
      redirect: "if_required"
    });
    if (h) {
      console.error(h.message), i(!1), e();
      return;
    }
    i(!1), t();
  };
  return /* @__PURE__ */ i1("form", { className: s1.checkoutForm, onSubmit: l, children: [
    /* @__PURE__ */ i1("div", { className: s1.checkoutTop, children: [
      /* @__PURE__ */ i1("p", { style: { color: "#464646" }, children: [
        "Pay",
        " ",
        /* @__PURE__ */ i1("span", { className: s1.checkoutTopSpan, children: [
          r,
          " ",
          a
        ] })
      ] }),
      /* @__PURE__ */ z("p", { className: s1.checkoutTopFirst, children: "All transactions are secure and encrypted." })
    ] }),
    /* @__PURE__ */ z(Bt, {}),
    /* @__PURE__ */ i1(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "150px 1fr",
          gap: "1rem",
          width: "100%"
        },
        children: [
          /* @__PURE__ */ z(
            V1,
            {
              title: "Go Back",
              loading: c,
              variant: "outlined",
              onClick: n,
              fullWidth: !0
            }
          ),
          /* @__PURE__ */ z(V1, { title: "Pay now", type: "submit", fullWidth: !0, loading: c })
        ]
      }
    ),
    /* @__PURE__ */ z(r2, {})
  ] });
}, T1 = ({ children: t, onClose: e }) => /* @__PURE__ */ i1("div", { className: s1.checkoutModal, children: [
  /* @__PURE__ */ z("div", { className: s1.backdrop, onClick: e }),
  /* @__PURE__ */ z("div", { className: s1.modalContent, children: t })
] }), o2 = ({
  isOpen: t,
  closeCheckout: e,
  onSuccess: n,
  onClose: r,
  payload: a,
  signature: o
}) => {
  const [s, c] = b1(!1), i = "https://api.trymima.com/v1", l = {
    product: "/invoices/new/checkout",
    bookings: "/invoices/accept-booking-invoice"
  }, [d, h] = b1(""), [u, k] = b1({}), [m, C] = b1("");
  ee(() => {
    if (!t || a?.order?.items && a?.order?.items?.length < 1)
      return;
    const q = i + l.product;
    (async () => {
      c(!0);
      try {
        const B = await (await fetch(q, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-mima-signature": o
          },
          body: JSON.stringify(a)
        })).json();
        k(B), B?.stripeSessionId && h(B?.stripeSessionId), B?.error && B?.message && C(B?.message);
      } catch (t1) {
        console.log("err", t1), C("Something went wrong. Please try again."), e();
      } finally {
        c(!1);
      }
    })();
  }, [
    t,
    e,
    l.product,
    l.bookings,
    i,
    a,
    o
  ]);
  const g = Ct(() => {
    const q = "pk_live_8f9d0f43221de55a2139081d8a530fd65a15e960", K = {
      custom_fields: [
        {
          display_name: "business",
          variable_name: "business",
          value: u?.business?._id
        },
        {
          display_name: "invoiceNumber",
          variable_name: "invoiceNumber",
          value: `INV-${u?.number}`
        },
        {
          display_name: "customerName",
          variable_name: "customerName",
          value: u?.customer?.fullname
        },
        {
          display_name: "invoice",
          variable_name: "invoice",
          value: u?._id
        },
        {
          display_name: "type",
          variable_name: "type",
          value: "INVOICE"
        }
      ]
      //   business: invoice?.business?._id,
      //   invoiceNumber: `INV-${invoice?.number}`,
      //   customer: { fullname: invoice?.customer?.fullname },
      //   invoice: invoice?._id,
      //   type: "INVOICE",
    };
    return {
      email: u?.customer?.email,
      amount: u?.transactionAmount * 100,
      metadata: K,
      publicKey: q
    };
  }, [u]), w = () => {
    r?.(), e();
  }, L = () => {
    n?.(), e();
  }, I = st(g);
  ee(() => {
    u?.currencyCode === "NGN" && I({
      onSuccess: L,
      onClose: w
    });
  }, [u]);
  const f = on("pk_live_51R3rfgDWL23lDLO0wx0psgHwZdtra8Hpt62NV4jhjHNEL2Vy1tX6GDtmG6x4JhPNcLjBz3O9FJLIOWuDVhECKdUB00Br6kqrtR"), F = () => {
    h("");
  };
  if (!t) return null;
  if (!f && u?.currencyCode !== "NGN")
    return /* @__PURE__ */ z(T1, { onClose: w, children: /* @__PURE__ */ z("div", { className: s1.errorMessage, children: "FX Payment is not available." }) });
  if (m)
    return /* @__PURE__ */ z(T1, { onClose: w, children: /* @__PURE__ */ z("div", { className: s1.errorMessage, children: m }) });
  if (s)
    return /* @__PURE__ */ z(T1, { onClose: w, children: /* @__PURE__ */ z(ut, { color: "#414651", size: 75 }) });
  if (d && !s)
    return /* @__PURE__ */ z(T1, { onClose: w, children: /* @__PURE__ */ z(
      ze,
      {
        stripe: f,
        options: { clientSecret: d },
        children: /* @__PURE__ */ z(
          a2,
          {
            onSuccess: L,
            onClose: w,
            goBack: F,
            currencyCode: u?.currencyCode,
            transactionAmount: u?.transactionAmount
          }
        )
      }
    ) });
}, dt = (t) => {
  const e = document.createElement("div");
  document.body.appendChild(e);
  const n = vt(e), r = () => {
    n.render(/* @__PURE__ */ z(ft, {})), t.onClose?.();
  }, a = () => {
    t.onSuccess?.(), r();
  };
  n.render(
    /* @__PURE__ */ z(
      o2,
      {
        ...t,
        isOpen: !0,
        onSuccess: a,
        onClose: t.onClose,
        closeCheckout: r
      }
    )
  );
}, l2 = ({
  selected: t,
  onSelect: e,
  onSuccess: n,
  onClose: r,
  ...a
}) => {
  const o = () => {
    dt({
      ...a,
      onSuccess: n,
      onClose: r
    });
  };
  return /* @__PURE__ */ i1("div", { className: m1.container, children: [
    /* @__PURE__ */ i1("label", { className: m1.label, children: [
      /* @__PURE__ */ z("input", { type: "radio", checked: t, onChange: e }),
      /* @__PURE__ */ z("span", { className: m1.labelText, children: "Pay with Mima" })
    ] }),
    /* @__PURE__ */ z("img", { src: pt, className: m1.logo, alt: "Mima Logo" }),
    t && /* @__PURE__ */ z(V1, { title: "Pay now", onClick: o, fullWidth: !0 })
  ] });
}, u2 = ({
  fullWidth: t = !0,
  title: e = "Pay with Mima",
  className: n,
  onSuccess: r,
  onClose: a,
  ...o
}) => /* @__PURE__ */ z(
  V1,
  {
    title: e,
    onClick: () => {
      dt({
        ...o,
        onSuccess: r,
        onClose: a
      });
    },
    fullWidth: t,
    className: n
  }
);
export {
  o2 as CheckoutPortal,
  u2 as MimaButton,
  l2 as PayWithMima,
  dt as checkOutWithMima
};
