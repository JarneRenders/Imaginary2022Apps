!function () {
  "use strict";
  var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function n(t, n) {
    return t(n = {exports: {}}, n.exports), n.exports
  }

  var r, e, o, i = function (t) {
      return t && t.Math == Math && t
    },
    u = i("object" == typeof globalThis && globalThis) || i("object" == typeof window && window) || i("object" == typeof self && self) || i("object" == typeof t && t) || Function("return this")(),
    c = function (t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }, f = !c((function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7
        }
      }).a
    })), a = {}.propertyIsEnumerable, s = Object.getOwnPropertyDescriptor, l = {
      f: s && !a.call({1: 2}, 1) ? function (t) {
        var n = s(this, t);
        return !!n && n.enumerable
      } : a
    }, p = function (t, n) {
      return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n}
    }, y = {}.toString, v = function (t) {
      return y.call(t).slice(8, -1)
    }, h = "".split, d = c((function () {
      return !Object("z").propertyIsEnumerable(0)
    })) ? function (t) {
      return "String" == v(t) ? h.call(t, "") : Object(t)
    } : Object, g = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t
    }, b = function (t) {
      return d(g(t))
    }, m = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
    }, O = function (t, n) {
      if (!m(t)) return t;
      var r, e;
      if (n && "function" == typeof (r = t.toString) && !m(e = r.call(t))) return e;
      if ("function" == typeof (r = t.valueOf) && !m(e = r.call(t))) return e;
      if (!n && "function" == typeof (r = t.toString) && !m(e = r.call(t))) return e;
      throw TypeError("Can't convert object to primitive value")
    }, w = {}.hasOwnProperty, j = function (t, n) {
      return w.call(t, n)
    }, S = u.document, x = m(S) && m(S.createElement), E = function (t) {
      return x ? S.createElement(t) : {}
    }, P = !f && !c((function () {
      return 7 != Object.defineProperty(E("div"), "a", {
        get: function () {
          return 7
        }
      }).a
    })), k = Object.getOwnPropertyDescriptor, T = {
      f: f ? k : function (t, n) {
        if (t = b(t), n = O(n, !0), P) try {
          return k(t, n)
        } catch (t) {
        }
        if (j(t, n)) return p(!l.f.call(t, n), t[n])
      }
    }, _ = function (t) {
      if (!m(t)) throw TypeError(String(t) + " is not an object");
      return t
    }, I = Object.defineProperty, A = {
      f: f ? I : function (t, n, r) {
        if (_(t), n = O(n, !0), _(r), P) try {
          return I(t, n, r)
        } catch (t) {
        }
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported");
        return "value" in r && (t[n] = r.value), t
      }
    }, F = f ? function (t, n, r) {
      return A.f(t, n, p(1, r))
    } : function (t, n, r) {
      return t[n] = r, t
    }, R = function (t, n) {
      try {
        F(u, t, n)
      } catch (r) {
        u[t] = n
      }
      return n
    }, z = u["__core-js_shared__"] || R("__core-js_shared__", {}), D = n((function (t) {
      (t.exports = function (t, n) {
        return z[t] || (z[t] = void 0 !== n ? n : {})
      })("versions", []).push({version: "3.3.6", mode: "global", copyright: "© 2019 Denis Pushkarev (zloirock.ru)"})
    })), N = D("native-function-to-string", Function.toString), M = u.WeakMap,
    C = "function" == typeof M && /native code/.test(N.call(M)), U = 0, G = Math.random(), W = function (t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++U + G).toString(36)
    }, L = D("keys"), Q = function (t) {
      return L[t] || (L[t] = W(t))
    }, K = {}, q = u.WeakMap;
  if (C) {
    var Y = new q, B = Y.get, J = Y.has, V = Y.set;
    r = function (t, n) {
      return V.call(Y, t, n), n
    }, e = function (t) {
      return B.call(Y, t) || {}
    }, o = function (t) {
      return J.call(Y, t)
    }
  } else {
    var H = Q("state");
    K[H] = !0, r = function (t, n) {
      return F(t, H, n), n
    }, e = function (t) {
      return j(t, H) ? t[H] : {}
    }, o = function (t) {
      return j(t, H)
    }
  }
  var X = {
      set: r, get: e, has: o, enforce: function (t) {
        return o(t) ? e(t) : r(t, {})
      }, getterFor: function (t) {
        return function (n) {
          var r;
          if (!m(n) || (r = e(n)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
          return r
        }
      }
    }, Z = n((function (t) {
      var n = X.get, r = X.enforce, e = String(N).split("toString");
      D("inspectSource", (function (t) {
        return N.call(t)
      })), (t.exports = function (t, n, o, i) {
        var c = !!i && !!i.unsafe, f = !!i && !!i.enumerable, a = !!i && !!i.noTargetGet;
        "function" == typeof o && ("string" != typeof n || j(o, "name") || F(o, "name", n), r(o).source = e.join("string" == typeof n ? n : "")), t !== u ? (c ? !a && t[n] && (f = !0) : delete t[n], f ? t[n] = o : F(t, n, o)) : f ? t[n] = o : R(n, o)
      })(Function.prototype, "toString", (function () {
        return "function" == typeof this && n(this).source || N.call(this)
      }))
    })), $ = u, tt = function (t) {
      return "function" == typeof t ? t : void 0
    }, nt = function (t, n) {
      return arguments.length < 2 ? tt($[t]) || tt(u[t]) : $[t] && $[t][n] || u[t] && u[t][n]
    }, rt = Math.ceil, et = Math.floor, ot = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? et : rt)(t)
    }, it = Math.min, ut = function (t) {
      return t > 0 ? it(ot(t), 9007199254740991) : 0
    }, ct = Math.max, ft = Math.min, at = function (t) {
      return function (n, r, e) {
        var o, i = b(n), u = ut(i.length), c = function (t, n) {
          var r = ot(t);
          return r < 0 ? ct(r + n, 0) : ft(r, n)
        }(e, u);
        if (t && r != r) {
          for (; u > c;) if ((o = i[c++]) != o) return !0
        } else for (; u > c; c++) if ((t || c in i) && i[c] === r) return t || c || 0;
        return !t && -1
      }
    }, st = {includes: at(!0), indexOf: at(!1)}, lt = st.indexOf, pt = function (t, n) {
      var r, e = b(t), o = 0, i = [];
      for (r in e) !j(K, r) && j(e, r) && i.push(r);
      for (; n.length > o;) j(e, r = n[o++]) && (~lt(i, r) || i.push(r));
      return i
    },
    yt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    vt = yt.concat("length", "prototype"), ht = {
      f: Object.getOwnPropertyNames || function (t) {
        return pt(t, vt)
      }
    }, dt = {f: Object.getOwnPropertySymbols}, gt = nt("Reflect", "ownKeys") || function (t) {
      var n = ht.f(_(t)), r = dt.f;
      return r ? n.concat(r(t)) : n
    }, bt = function (t, n) {
      for (var r = gt(n), e = A.f, o = T.f, i = 0; i < r.length; i++) {
        var u = r[i];
        j(t, u) || e(t, u, o(n, u))
      }
    }, mt = /#|\.prototype\./, Ot = function (t, n) {
      var r = jt[wt(t)];
      return r == xt || r != St && ("function" == typeof n ? c(n) : !!n)
    }, wt = Ot.normalize = function (t) {
      return String(t).replace(mt, ".").toLowerCase()
    }, jt = Ot.data = {}, St = Ot.NATIVE = "N", xt = Ot.POLYFILL = "P", Et = Ot, Pt = T.f, kt = function (t, n) {
      var r, e, o, i, c, f = t.target, a = t.global, s = t.stat;
      if (r = a ? u : s ? u[f] || R(f, {}) : (u[f] || {}).prototype) for (e in n) {
        if (i = n[e], o = t.noTargetGet ? (c = Pt(r, e)) && c.value : r[e], !Et(a ? e : f + (s ? "." : "#") + e, t.forced) && void 0 !== o) {
          if (typeof i == typeof o) continue;
          bt(i, o)
        }
        (t.sham || o && o.sham) && F(i, "sham", !0), Z(r, e, i, t)
      }
    }, Tt = Object.keys || function (t) {
      return pt(t, yt)
    }, _t = function (t) {
      return Object(g(t))
    }, It = Object.assign, At = !It || c((function () {
      var t = {}, n = {}, r = Symbol();
      return t[r] = 7, "abcdefghijklmnopqrst".split("").forEach((function (t) {
        n[t] = t
      })), 7 != It({}, t)[r] || "abcdefghijklmnopqrst" != Tt(It({}, n)).join("")
    })) ? function (t, n) {
      for (var r = _t(t), e = arguments.length, o = 1, i = dt.f, u = l.f; e > o;) for (var c, a = d(arguments[o++]), s = i ? Tt(a).concat(i(a)) : Tt(a), p = s.length, y = 0; p > y;) c = s[y++], f && !u.call(a, c) || (r[c] = a[c]);
      return r
    } : It;
  kt({target: "Object", stat: !0, forced: Object.assign !== At}, {assign: At});
  var Ft = c((function () {
    Tt(1)
  }));
  kt({target: "Object", stat: !0, forced: Ft}, {
    keys: function (t) {
      return Tt(_t(t))
    }
  });
  var Rt = A.f, zt = Function.prototype, Dt = zt.toString, Nt = /^\s*function ([^ (]*)/;
  !f || "name" in zt || Rt(zt, "name", {
    configurable: !0, get: function () {
      try {
        return Dt.call(this).match(Nt)[1]
      } catch (t) {
        return ""
      }
    }
  });
  var Mt = !!Object.getOwnPropertySymbols && !c((function () {
    return !String(Symbol())
  })), Ct = Array.isArray || function (t) {
    return "Array" == v(t)
  }, Ut = f ? Object.defineProperties : function (t, n) {
    _(t);
    for (var r, e = Tt(n), o = e.length, i = 0; o > i;) A.f(t, r = e[i++], n[r]);
    return t
  }, Gt = nt("document", "documentElement"), Wt = Q("IE_PROTO"), Lt = function () {
  }, Qt = function () {
    var t, n = E("iframe"), r = yt.length;
    for (n.style.display = "none", Gt.appendChild(n), n.src = String("javascript:"), (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), Qt = t.F; r--;) delete Qt.prototype[yt[r]];
    return Qt()
  }, Kt = Object.create || function (t, n) {
    var r;
    return null !== t ? (Lt.prototype = _(t), r = new Lt, Lt.prototype = null, r[Wt] = t) : r = Qt(), void 0 === n ? r : Ut(r, n)
  };
  K[Wt] = !0;
  var qt = ht.f, Yt = {}.toString,
    Bt = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    Jt = {
      f: function (t) {
        return Bt && "[object Window]" == Yt.call(t) ? function (t) {
          try {
            return qt(t)
          } catch (t) {
            return Bt.slice()
          }
        }(t) : qt(b(t))
      }
    }, Vt = u.Symbol, Ht = D("wks"), Xt = function (t) {
      return Ht[t] || (Ht[t] = Mt && Vt[t] || (Mt ? Vt : W)("Symbol." + t))
    }, Zt = {f: Xt}, $t = A.f, tn = A.f, nn = Xt("toStringTag"), rn = function (t, n, r) {
      t && !j(t = r ? t : t.prototype, nn) && tn(t, nn, {configurable: !0, value: n})
    }, en = function (t, n, r) {
      if (function (t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function")
      }(t), void 0 === n) return t;
      switch (r) {
        case 0:
          return function () {
            return t.call(n)
          };
        case 1:
          return function (r) {
            return t.call(n, r)
          };
        case 2:
          return function (r, e) {
            return t.call(n, r, e)
          };
        case 3:
          return function (r, e, o) {
            return t.call(n, r, e, o)
          }
      }
      return function () {
        return t.apply(n, arguments)
      }
    }, on = Xt("species"), un = function (t, n) {
      var r;
      return Ct(t) && ("function" != typeof (r = t.constructor) || r !== Array && !Ct(r.prototype) ? m(r) && null === (r = r[on]) && (r = void 0) : r = void 0), new (void 0 === r ? Array : r)(0 === n ? 0 : n)
    }, cn = [].push, fn = function (t) {
      var n = 1 == t, r = 2 == t, e = 3 == t, o = 4 == t, i = 6 == t, u = 5 == t || i;
      return function (c, f, a, s) {
        for (var l, p, y = _t(c), v = d(y), h = en(f, a, 3), g = ut(v.length), b = 0, m = s || un, O = n ? m(c, g) : r ? m(c, 0) : void 0; g > b; b++) if ((u || b in v) && (p = h(l = v[b], b, y), t)) if (n) O[b] = p; else if (p) switch (t) {
          case 3:
            return !0;
          case 5:
            return l;
          case 6:
            return b;
          case 2:
            cn.call(O, l)
        } else if (o) return !1;
        return i ? -1 : e || o ? o : O
      }
    }, an = {forEach: fn(0), map: fn(1), filter: fn(2), some: fn(3), every: fn(4), find: fn(5), findIndex: fn(6)}.forEach,
    sn = Q("hidden"), ln = Xt("toPrimitive"), pn = X.set, yn = X.getterFor("Symbol"), vn = Object.prototype,
    hn = u.Symbol, dn = u.JSON, gn = dn && dn.stringify, bn = T.f, mn = A.f, On = Jt.f, wn = l.f, jn = D("symbols"),
    Sn = D("op-symbols"), xn = D("string-to-symbol-registry"), En = D("symbol-to-string-registry"), Pn = D("wks"),
    kn = u.QObject, Tn = !kn || !kn.prototype || !kn.prototype.findChild, _n = f && c((function () {
      return 7 != Kt(mn({}, "a", {
        get: function () {
          return mn(this, "a", {value: 7}).a
        }
      })).a
    })) ? function (t, n, r) {
      var e = bn(vn, n);
      e && delete vn[n], mn(t, n, r), e && t !== vn && mn(vn, n, e)
    } : mn, In = function (t, n) {
      var r = jn[t] = Kt(hn.prototype);
      return pn(r, {type: "Symbol", tag: t, description: n}), f || (r.description = n), r
    }, An = Mt && "symbol" == typeof hn.iterator ? function (t) {
      return "symbol" == typeof t
    } : function (t) {
      return Object(t) instanceof hn
    }, Fn = function (t, n, r) {
      t === vn && Fn(Sn, n, r), _(t);
      var e = O(n, !0);
      return _(r), j(jn, e) ? (r.enumerable ? (j(t, sn) && t[sn][e] && (t[sn][e] = !1), r = Kt(r, {enumerable: p(0, !1)})) : (j(t, sn) || mn(t, sn, p(1, {})), t[sn][e] = !0), _n(t, e, r)) : mn(t, e, r)
    }, Rn = function (t, n) {
      _(t);
      var r = b(n), e = Tt(r).concat(Mn(r));
      return an(e, (function (n) {
        f && !zn.call(r, n) || Fn(t, n, r[n])
      })), t
    }, zn = function (t) {
      var n = O(t, !0), r = wn.call(this, n);
      return !(this === vn && j(jn, n) && !j(Sn, n)) && (!(r || !j(this, n) || !j(jn, n) || j(this, sn) && this[sn][n]) || r)
    }, Dn = function (t, n) {
      var r = b(t), e = O(n, !0);
      if (r !== vn || !j(jn, e) || j(Sn, e)) {
        var o = bn(r, e);
        return !o || !j(jn, e) || j(r, sn) && r[sn][e] || (o.enumerable = !0), o
      }
    }, Nn = function (t) {
      var n = On(b(t)), r = [];
      return an(n, (function (t) {
        j(jn, t) || j(K, t) || r.push(t)
      })), r
    }, Mn = function (t) {
      var n = t === vn, r = On(n ? Sn : b(t)), e = [];
      return an(r, (function (t) {
        !j(jn, t) || n && !j(vn, t) || e.push(jn[t])
      })), e
    };
  Mt || (Z((hn = function () {
    if (this instanceof hn) throw TypeError("Symbol is not a constructor");
    var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0, n = W(t), r = function (t) {
      this === vn && r.call(Sn, t), j(this, sn) && j(this[sn], n) && (this[sn][n] = !1), _n(this, n, p(1, t))
    };
    return f && Tn && _n(vn, n, {configurable: !0, set: r}), In(n, t)
  }).prototype, "toString", (function () {
    return yn(this).tag
  })), l.f = zn, A.f = Fn, T.f = Dn, ht.f = Jt.f = Nn, dt.f = Mn, f && (mn(hn.prototype, "description", {
    configurable: !0,
    get: function () {
      return yn(this).description
    }
  }), Z(vn, "propertyIsEnumerable", zn, {unsafe: !0})), Zt.f = function (t) {
    return In(Xt(t), t)
  }), kt({global: !0, wrap: !0, forced: !Mt, sham: !Mt}, {Symbol: hn}), an(Tt(Pn), (function (t) {
    !function (t) {
      var n = $.Symbol || ($.Symbol = {});
      j(n, t) || $t(n, t, {value: Zt.f(t)})
    }(t)
  })), kt({target: "Symbol", stat: !0, forced: !Mt}, {
    for: function (t) {
      var n = String(t);
      if (j(xn, n)) return xn[n];
      var r = hn(n);
      return xn[n] = r, En[r] = n, r
    }, keyFor: function (t) {
      if (!An(t)) throw TypeError(t + " is not a symbol");
      if (j(En, t)) return En[t]
    }, useSetter: function () {
      Tn = !0
    }, useSimple: function () {
      Tn = !1
    }
  }), kt({target: "Object", stat: !0, forced: !Mt, sham: !f}, {
    create: function (t, n) {
      return void 0 === n ? Kt(t) : Rn(Kt(t), n)
    }, defineProperty: Fn, defineProperties: Rn, getOwnPropertyDescriptor: Dn
  }), kt({target: "Object", stat: !0, forced: !Mt}, {
    getOwnPropertyNames: Nn,
    getOwnPropertySymbols: Mn
  }), kt({
    target: "Object", stat: !0, forced: c((function () {
      dt.f(1)
    }))
  }, {
    getOwnPropertySymbols: function (t) {
      return dt.f(_t(t))
    }
  }), dn && kt({
    target: "JSON", stat: !0, forced: !Mt || c((function () {
      var t = hn();
      return "[null]" != gn([t]) || "{}" != gn({a: t}) || "{}" != gn(Object(t))
    }))
  }, {
    stringify: function (t) {
      for (var n, r, e = [t], o = 1; arguments.length > o;) e.push(arguments[o++]);
      if (r = n = e[1], (m(n) || void 0 !== t) && !An(t)) return Ct(n) || (n = function (t, n) {
        if ("function" == typeof r && (n = r.call(this, t, n)), !An(n)) return n
      }), e[1] = n, gn.apply(dn, e)
    }
  }), hn.prototype[ln] || F(hn.prototype, ln, hn.prototype.valueOf), rn(hn, "Symbol"), K[sn] = !0;
  var Cn = !c((function () {
      return Object.isExtensible(Object.preventExtensions({}))
    })), Un = n((function (t) {
      var n = A.f, r = W("meta"), e = 0, o = Object.isExtensible || function () {
        return !0
      }, i = function (t) {
        n(t, r, {value: {objectID: "O" + ++e, weakData: {}}})
      }, u = t.exports = {
        REQUIRED: !1, fastKey: function (t, n) {
          if (!m(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
          if (!j(t, r)) {
            if (!o(t)) return "F";
            if (!n) return "E";
            i(t)
          }
          return t[r].objectID
        }, getWeakData: function (t, n) {
          if (!j(t, r)) {
            if (!o(t)) return !0;
            if (!n) return !1;
            i(t)
          }
          return t[r].weakData
        }, onFreeze: function (t) {
          return Cn && u.REQUIRED && o(t) && !j(t, r) && i(t), t
        }
      };
      K[r] = !0
    })), Gn = (Un.REQUIRED, Un.fastKey, Un.getWeakData, Un.onFreeze, {}), Wn = Xt("iterator"), Ln = Array.prototype,
    Qn = function (t) {
      return void 0 !== t && (Gn.Array === t || Ln[Wn] === t)
    }, Kn = Xt("toStringTag"), qn = "Arguments" == v(function () {
      return arguments
    }()), Yn = Xt("iterator"), Bn = function (t) {
      if (null != t) return t[Yn] || t["@@iterator"] || Gn[function (t) {
        var n, r, e;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, n) {
          try {
            return t[n]
          } catch (t) {
          }
        }(n = Object(t), Kn)) ? r : qn ? v(n) : "Object" == (e = v(n)) && "function" == typeof n.callee ? "Arguments" : e
      }(t)]
    }, Jn = function (t, n, r, e) {
      try {
        return e ? n(_(r)[0], r[1]) : n(r)
      } catch (n) {
        var o = t.return;
        throw void 0 !== o && _(o.call(t)), n
      }
    }, Vn = n((function (t) {
      var n = function (t, n) {
        this.stopped = t, this.result = n
      };
      (t.exports = function (t, r, e, o, i) {
        var u, c, f, a, s, l, p, y = en(r, e, o ? 2 : 1);
        if (i) u = t; else {
          if ("function" != typeof (c = Bn(t))) throw TypeError("Target is not iterable");
          if (Qn(c)) {
            for (f = 0, a = ut(t.length); a > f; f++) if ((s = o ? y(_(p = t[f])[0], p[1]) : y(t[f])) && s instanceof n) return s;
            return new n(!1)
          }
          u = c.call(t)
        }
        for (l = u.next; !(p = l.call(u)).done;) if ("object" == typeof (s = Jn(u, y, p.value, o)) && s && s instanceof n) return s;
        return new n(!1)
      }).stop = function (t) {
        return new n(!0, t)
      }
    })), Hn = function (t, n, r) {
      if (!(t instanceof n)) throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
      return t
    }, Xn = Xt("iterator"), Zn = !1;
  try {
    var $n = 0, tr = {
      next: function () {
        return {done: !!$n++}
      }, return: function () {
        Zn = !0
      }
    };
    tr[Xn] = function () {
      return this
    }, Array.from(tr, (function () {
      throw 2
    }))
  } catch (t) {
  }
  var nr, rr, er, or = function (t, n) {
    if (!n && !Zn) return !1;
    var r = !1;
    try {
      var e = {};
      e[Xn] = function () {
        return {
          next: function () {
            return {done: r = !0}
          }
        }
      }, t(e)
    } catch (t) {
    }
    return r
  }, ir = Object.setPrototypeOf || ("__proto__" in {} ? function () {
    var t, n = !1, r = {};
    try {
      (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []), n = r instanceof Array
    } catch (t) {
    }
    return function (r, e) {
      return _(r), function (t) {
        if (!m(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype")
      }(e), n ? t.call(r, e) : r.__proto__ = e, r
    }
  }() : void 0), ur = function (t, n, r) {
    for (var e in n) Z(t, e, n[e], r);
    return t
  }, cr = !c((function () {
    function t() {
    }

    return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
  })), fr = Q("IE_PROTO"), ar = Object.prototype, sr = cr ? Object.getPrototypeOf : function (t) {
    return t = _t(t), j(t, fr) ? t[fr] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? ar : null
  }, lr = Xt("iterator"), pr = !1;
  [].keys && ("next" in (er = [].keys()) ? (rr = sr(sr(er))) !== Object.prototype && (nr = rr) : pr = !0), null == nr && (nr = {}), j(nr, lr) || F(nr, lr, (function () {
    return this
  }));
  var yr = {IteratorPrototype: nr, BUGGY_SAFARI_ITERATORS: pr}, vr = yr.IteratorPrototype, hr = function () {
    return this
  }, dr = yr.IteratorPrototype, gr = yr.BUGGY_SAFARI_ITERATORS, br = Xt("iterator"), mr = function () {
    return this
  }, Or = function (t, n, r, e, o, i, u) {
    !function (t, n, r) {
      var e = n + " Iterator";
      t.prototype = Kt(vr, {next: p(1, r)}), rn(t, e, !1), Gn[e] = hr
    }(r, n, e);
    var c, f, a, s = function (t) {
        if (t === o && d) return d;
        if (!gr && t in v) return v[t];
        switch (t) {
          case"keys":
          case"values":
          case"entries":
            return function () {
              return new r(this, t)
            }
        }
        return function () {
          return new r(this)
        }
      }, l = n + " Iterator", y = !1, v = t.prototype, h = v[br] || v["@@iterator"] || o && v[o], d = !gr && h || s(o),
      g = "Array" == n && v.entries || h;
    if (g && (c = sr(g.call(new t)), dr !== Object.prototype && c.next && (sr(c) !== dr && (ir ? ir(c, dr) : "function" != typeof c[br] && F(c, br, mr)), rn(c, l, !0))), "values" == o && h && "values" !== h.name && (y = !0, d = function () {
      return h.call(this)
    }), v[br] !== d && F(v, br, d), Gn[n] = d, o) if (f = {
      values: s("values"),
      keys: i ? d : s("keys"),
      entries: s("entries")
    }, u) for (a in f) !gr && !y && a in v || Z(v, a, f[a]); else kt({target: n, proto: !0, forced: gr || y}, f);
    return f
  }, wr = Xt("species"), jr = A.f, Sr = Un.fastKey, xr = X.set, Er = X.getterFor, Pr = (function (t, n, r, e, o) {
    var i = u[t], f = i && i.prototype, a = i, s = e ? "set" : "add", l = {}, p = function (t) {
      var n = f[t];
      Z(f, t, "add" == t ? function (t) {
        return n.call(this, 0 === t ? 0 : t), this
      } : "delete" == t ? function (t) {
        return !(o && !m(t)) && n.call(this, 0 === t ? 0 : t)
      } : "get" == t ? function (t) {
        return o && !m(t) ? void 0 : n.call(this, 0 === t ? 0 : t)
      } : "has" == t ? function (t) {
        return !(o && !m(t)) && n.call(this, 0 === t ? 0 : t)
      } : function (t, r) {
        return n.call(this, 0 === t ? 0 : t, r), this
      })
    };
    if (Et(t, "function" != typeof i || !(o || f.forEach && !c((function () {
      (new i).entries().next()
    }))))) a = r.getConstructor(n, t, e, s), Un.REQUIRED = !0; else if (Et(t, !0)) {
      var y = new a, v = y[s](o ? {} : -0, 1) != y, h = c((function () {
        y.has(1)
      })), d = or((function (t) {
        new i(t)
      })), g = !o && c((function () {
        for (var t = new i, n = 5; n--;) t[s](n, n);
        return !t.has(-0)
      }));
      d || ((a = n((function (n, r) {
        Hn(n, a, t);
        var o = function (t, n, r) {
          var e, o;
          return ir && "function" == typeof (e = n.constructor) && e !== r && m(o = e.prototype) && o !== r.prototype && ir(t, o), t
        }(new i, n, a);
        return null != r && Vn(r, o[s], o, e), o
      }))).prototype = f, f.constructor = a), (h || g) && (p("delete"), p("has"), e && p("get")), (g || v) && p(s), o && f.clear && delete f.clear
    }
    l[t] = a, kt({global: !0, forced: a != i}, l), rn(a, t), o || r.setStrong(a, t, e)
  }("Set", (function (t) {
    return function () {
      return t(this, arguments.length ? arguments[0] : void 0)
    }
  }), {
    getConstructor: function (t, n, r, e) {
      var o = t((function (t, i) {
        Hn(t, o, n), xr(t, {
          type: n,
          index: Kt(null),
          first: void 0,
          last: void 0,
          size: 0
        }), f || (t.size = 0), null != i && Vn(i, t[e], t, r)
      })), i = Er(n), u = function (t, n, r) {
        var e, o, u = i(t), a = c(t, n);
        return a ? a.value = r : (u.last = a = {
          index: o = Sr(n, !0),
          key: n,
          value: r,
          previous: e = u.last,
          next: void 0,
          removed: !1
        }, u.first || (u.first = a), e && (e.next = a), f ? u.size++ : t.size++, "F" !== o && (u.index[o] = a)), t
      }, c = function (t, n) {
        var r, e = i(t), o = Sr(n);
        if ("F" !== o) return e.index[o];
        for (r = e.first; r; r = r.next) if (r.key == n) return r
      };
      return ur(o.prototype, {
        clear: function () {
          for (var t = i(this), n = t.index, r = t.first; r;) r.removed = !0, r.previous && (r.previous = r.previous.next = void 0), delete n[r.index], r = r.next;
          t.first = t.last = void 0, f ? t.size = 0 : this.size = 0
        }, delete: function (t) {
          var n = i(this), r = c(this, t);
          if (r) {
            var e = r.next, o = r.previous;
            delete n.index[r.index], r.removed = !0, o && (o.next = e), e && (e.previous = o), n.first == r && (n.first = e), n.last == r && (n.last = o), f ? n.size-- : this.size--
          }
          return !!r
        }, forEach: function (t) {
          for (var n, r = i(this), e = en(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.next : r.first;) for (e(n.value, n.key, this); n && n.removed;) n = n.previous
        }, has: function (t) {
          return !!c(this, t)
        }
      }), ur(o.prototype, r ? {
        get: function (t) {
          var n = c(this, t);
          return n && n.value
        }, set: function (t, n) {
          return u(this, 0 === t ? 0 : t, n)
        }
      } : {
        add: function (t) {
          return u(this, t = 0 === t ? 0 : t, t)
        }
      }), f && jr(o.prototype, "size", {
        get: function () {
          return i(this).size
        }
      }), o
    }, setStrong: function (t, n, r) {
      var e = n + " Iterator", o = Er(n), i = Er(e);
      Or(t, n, (function (t, n) {
        xr(this, {type: e, target: t, state: o(t), kind: n, last: void 0})
      }), (function () {
        for (var t = i(this), n = t.kind, r = t.last; r && r.removed;) r = r.previous;
        return t.target && (t.last = r = r ? r.next : t.state.first) ? "keys" == n ? {
          value: r.key,
          done: !1
        } : "values" == n ? {value: r.value, done: !1} : {
          value: [r.key, r.value],
          done: !1
        } : (t.target = void 0, {value: void 0, done: !0})
      }), r ? "entries" : "values", !r, !0), function (t) {
        var n = nt(t), r = A.f;
        f && n && !n[wr] && r(n, wr, {
          configurable: !0, get: function () {
            return this
          }
        })
      }(n)
    }
  }), Xt("unscopables")), kr = Array.prototype;
  null == kr[Pr] && F(kr, Pr, Kt(null));
  var Tr, _r = st.includes;
  kt({target: "Array", proto: !0}, {
    includes: function (t) {
      return _r(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), Tr = "includes", kr[Pr][Tr] = !0;
  var Ir = Xt("match"), Ar = function (t) {
    if (function (t) {
      var n;
      return m(t) && (void 0 !== (n = t[Ir]) ? !!n : "RegExp" == v(t))
    }(t)) throw TypeError("The method doesn't accept regular expressions");
    return t
  }, Fr = Xt("match");
  kt({
    target: "String", proto: !0, forced: !function (t) {
      var n = /./;
      try {
        "/./"[t](n)
      } catch (r) {
        try {
          return n[Fr] = !1, "/./"[t](n)
        } catch (t) {
        }
      }
      return !1
    }("includes")
  }, {
    includes: function (t) {
      return !!~String(g(this)).indexOf(Ar(t), arguments.length > 1 ? arguments[1] : void 0)
    }
  });
  var Rr = function (t, n, r) {
    var e = O(n);
    e in t ? A.f(t, e, p(0, r)) : t[e] = r
  }, zr = !or((function (t) {
    Array.from(t)
  }));
  kt({target: "Array", stat: !0, forced: zr}, {
    from: function (t) {
      var n, r, e, o, i, u = _t(t), c = "function" == typeof this ? this : Array, f = arguments.length,
        a = f > 1 ? arguments[1] : void 0, s = void 0 !== a, l = 0, p = Bn(u);
      if (s && (a = en(a, f > 2 ? arguments[2] : void 0, 2)), null == p || c == Array && Qn(p)) for (r = new c(n = ut(u.length)); n > l; l++) Rr(r, l, s ? a(u[l], l) : u[l]); else for (i = (o = p.call(u)).next, r = new c; !(e = i.call(o)).done; l++) Rr(r, l, s ? Jn(o, a, [e.value, l], !0) : e.value);
      return r.length = l, r
    }
  })
}();
