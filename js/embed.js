(function(t, e) {
    "object" === typeof exports && "object" === typeof module ? module.exports = e() : "function" === typeof define && define.amd ? define([], e) : "object" === typeof exports ? exports["embed"] = e() : t["embed"] = e()
}
)("undefined" !== typeof self ? self : this, (function() {
    return function(t) {
        var e = {};
        function n(r) {
            if (e[r])
                return e[r].exports;
            var i = e[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, n),
            i.l = !0,
            i.exports
        }
        return n.m = t,
        n.c = e,
        n.d = function(t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: r
            })
        }
        ,
        n.r = function(t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }),
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        n.t = function(t, e) {
            if (1 & e && (t = n(t)),
            8 & e)
                return t;
            if (4 & e && "object" === typeof t && t && t.__esModule)
                return t;
            var r = Object.create(null);
            if (n.r(r),
            Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }),
            2 & e && "string" != typeof t)
                for (var i in t)
                    n.d(r, i, function(e) {
                        return t[e]
                    }
                    .bind(null, i));
            return r
        }
        ,
        n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t["default"]
            }
            : function() {
                return t
            }
            ;
            return n.d(e, "a", e),
            e
        }
        ,
        n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        n.p = "",
        n(n.s = "fae3")
    }({
        "00ee": function(t, e, n) {
            var r = n("b622")
              , i = r("toStringTag")
              , o = {};
            o[i] = "z",
            t.exports = "[object z]" === String(o)
        },
        "06cf": function(t, e, n) {
            var r = n("83ab")
              , i = n("d1e7")
              , o = n("5c6c")
              , c = n("fc6a")
              , a = n("c04e")
              , u = n("5135")
              , s = n("0cfb")
              , f = Object.getOwnPropertyDescriptor;
            e.f = r ? f : function(t, e) {
                if (t = c(t),
                e = a(e, !0),
                s)
                    try {
                        return f(t, e)
                    } catch (n) {}
                if (u(t, e))
                    return o(!i.f.call(t, e), t[e])
            }
        },
        "0c31": function(t, e, n) {
            var r = n("6132");
            t.exports = "string" === typeof r ? r : r.toString()
        },
        "0cfb": function(t, e, n) {
            var r = n("83ab")
              , i = n("d039")
              , o = n("cc12");
            t.exports = !r && !i((function() {
                return 7 != Object.defineProperty(o("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }
            ))
        },
        1276: function(t, e, n) {
            "use strict";
            var r = n("d784")
              , i = n("44e7")
              , o = n("825a")
              , c = n("1d80")
              , a = n("4840")
              , u = n("8aa5")
              , s = n("50c4")
              , f = n("14c3")
              , l = n("9263")
              , d = n("d039")
              , p = [].push
              , g = Math.min
              , v = 4294967295
              , b = !d((function() {
                return !RegExp(v, "y")
            }
            ));
            r("split", 2, (function(t, e, n) {
                var r;
                return r = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, n) {
                    var r = String(c(this))
                      , o = void 0 === n ? v : n >>> 0;
                    if (0 === o)
                        return [];
                    if (void 0 === t)
                        return [r];
                    if (!i(t))
                        return e.call(r, t, o);
                    var a, u, s, f = [], d = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), g = 0, b = new RegExp(t.source,d + "g");
                    while (a = l.call(b, r)) {
                        if (u = b.lastIndex,
                        u > g && (f.push(r.slice(g, a.index)),
                        a.length > 1 && a.index < r.length && p.apply(f, a.slice(1)),
                        s = a[0].length,
                        g = u,
                        f.length >= o))
                            break;
                        b.lastIndex === a.index && b.lastIndex++
                    }
                    return g === r.length ? !s && b.test("") || f.push("") : f.push(r.slice(g)),
                    f.length > o ? f.slice(0, o) : f
                }
                : "0".split(void 0, 0).length ? function(t, n) {
                    return void 0 === t && 0 === n ? [] : e.call(this, t, n)
                }
                : e,
                [function(e, n) {
                    var i = c(this)
                      , o = void 0 == e ? void 0 : e[t];
                    return void 0 !== o ? o.call(e, i, n) : r.call(String(i), e, n)
                }
                , function(t, i) {
                    var c = n(r, t, this, i, r !== e);
                    if (c.done)
                        return c.value;
                    var l = o(t)
                      , d = String(this)
                      , p = a(l, RegExp)
                      , m = l.unicode
                      , h = (l.ignoreCase ? "i" : "") + (l.multiline ? "m" : "") + (l.unicode ? "u" : "") + (b ? "y" : "g")
                      , x = new p(b ? l : "^(?:" + l.source + ")",h)
                      , y = void 0 === i ? v : i >>> 0;
                    if (0 === y)
                        return [];
                    if (0 === d.length)
                        return null === f(x, d) ? [d] : [];
                    var w = 0
                      , S = 0
                      , E = [];
                    while (S < d.length) {
                        x.lastIndex = b ? S : 0;
                        var k, A = f(x, b ? d : d.slice(S));
                        if (null === A || (k = g(s(x.lastIndex + (b ? 0 : S)), d.length)) === w)
                            S = u(d, S, m);
                        else {
                            if (E.push(d.slice(w, S)),
                            E.length === y)
                                return E;
                            for (var O = 1; O <= A.length - 1; O++)
                                if (E.push(A[O]),
                                E.length === y)
                                    return E;
                            S = w = k
                        }
                    }
                    return E.push(d.slice(w)),
                    E
                }
                ]
            }
            ), !b)
        },
        "14c3": function(t, e, n) {
            var r = n("c6b6")
              , i = n("9263");
            t.exports = function(t, e) {
                var n = t.exec;
                if ("function" === typeof n) {
                    var o = n.call(t, e);
                    if ("object" !== typeof o)
                        throw TypeError("RegExp exec method returned something other than an Object or null");
                    return o
                }
                if ("RegExp" !== r(t))
                    throw TypeError("RegExp#exec called on incompatible receiver");
                return i.call(t, e)
            }
        },
        "1c0b": function(t, e) {
            t.exports = function(t) {
                if ("function" != typeof t)
                    throw TypeError(String(t) + " is not a function");
                return t
            }
        },
        "1d80": function(t, e) {
            t.exports = function(t) {
                if (void 0 == t)
                    throw TypeError("Can't call method on " + t);
                return t
            }
        },
        "1dde": function(t, e, n) {
            var r = n("d039")
              , i = n("b622")
              , o = n("2d00")
              , c = i("species");
            t.exports = function(t) {
                return o >= 51 || !r((function() {
                    var e = []
                      , n = e.constructor = {};
                    return n[c] = function() {
                        return {
                            foo: 1
                        }
                    }
                    ,
                    1 !== e[t](Boolean).foo
                }
                ))
            }
        },
        "1eb2": function(t, e, n) {
            "use strict";
            if ("undefined" !== typeof window) {
                var r = window.document.currentScript
                  , i = n("8875");
                r = i(),
                "currentScript"in document || Object.defineProperty(document, "currentScript", {
                    get: i
                });
                var o = r && r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
                o && (n.p = o[1])
            }
        },
        "23cb": function(t, e, n) {
            var r = n("a691")
              , i = Math.max
              , o = Math.min;
            t.exports = function(t, e) {
                var n = r(t);
                return n < 0 ? i(n + e, 0) : o(n, e)
            }
        },
        "23e7": function(t, e, n) {
            var r = n("da84")
              , i = n("06cf").f
              , o = n("9112")
              , c = n("6eeb")
              , a = n("ce4e")
              , u = n("e893")
              , s = n("94ca");
            t.exports = function(t, e) {
                var n, f, l, d, p, g, v = t.target, b = t.global, m = t.stat;
                if (f = b ? r : m ? r[v] || a(v, {}) : (r[v] || {}).prototype,
                f)
                    for (l in e) {
                        if (p = e[l],
                        t.noTargetGet ? (g = i(f, l),
                        d = g && g.value) : d = f[l],
                        n = s(b ? l : v + (m ? "." : "#") + l, t.forced),
                        !n && void 0 !== d) {
                            if (typeof p === typeof d)
                                continue;
                            u(p, d)
                        }
                        (t.sham || d && d.sham) && o(p, "sham", !0),
                        c(f, l, p, t)
                    }
            }
        },
        "241c": function(t, e, n) {
            var r = n("ca84")
              , i = n("7839")
              , o = i.concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function(t) {
                return r(t, o)
            }
        },
        "25f0": function(t, e, n) {
            "use strict";
            var r = n("6eeb")
              , i = n("825a")
              , o = n("d039")
              , c = n("ad6d")
              , a = "toString"
              , u = RegExp.prototype
              , s = u[a]
              , f = o((function() {
                return "/a/b" != s.call({
                    source: "a",
                    flags: "b"
                })
            }
            ))
              , l = s.name != a;
            (f || l) && r(RegExp.prototype, a, (function() {
                var t = i(this)
                  , e = String(t.source)
                  , n = t.flags
                  , r = String(void 0 === n && t instanceof RegExp && !("flags"in u) ? c.call(t) : n);
                return "/" + e + "/" + r
            }
            ), {
                unsafe: !0
            })
        },
        "2d00": function(t, e, n) {
            var r, i, o = n("da84"), c = n("342f"), a = o.process, u = a && a.versions, s = u && u.v8;
            s ? (r = s.split("."),
            i = r[0] + r[1]) : c && (r = c.match(/Edge\/(\d+)/),
            (!r || r[1] >= 74) && (r = c.match(/Chrome\/(\d+)/),
            r && (i = r[1]))),
            t.exports = i && +i
        },
        "342f": function(t, e, n) {
            var r = n("d066");
            t.exports = r("navigator", "userAgent") || ""
        },
        "428f": function(t, e, n) {
            var r = n("da84");
            t.exports = r
        },
        "44ad": function(t, e, n) {
            var r = n("d039")
              , i = n("c6b6")
              , o = "".split;
            t.exports = r((function() {
                return !Object("z").propertyIsEnumerable(0)
            }
            )) ? function(t) {
                return "String" == i(t) ? o.call(t, "") : Object(t)
            }
            : Object
        },
        "44e7": function(t, e, n) {
            var r = n("861d")
              , i = n("c6b6")
              , o = n("b622")
              , c = o("match");
            t.exports = function(t) {
                var e;
                return r(t) && (void 0 !== (e = t[c]) ? !!e : "RegExp" == i(t))
            }
        },
        "466d": function(t, e, n) {
            "use strict";
            var r = n("d784")
              , i = n("825a")
              , o = n("50c4")
              , c = n("1d80")
              , a = n("8aa5")
              , u = n("14c3");
            r("match", 1, (function(t, e, n) {
                return [function(e) {
                    var n = c(this)
                      , r = void 0 == e ? void 0 : e[t];
                    return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n))
                }
                , function(t) {
                    var r = n(e, t, this);
                    if (r.done)
                        return r.value;
                    var c = i(t)
                      , s = String(this);
                    if (!c.global)
                        return u(c, s);
                    var f = c.unicode;
                    c.lastIndex = 0;
                    var l, d = [], p = 0;
                    while (null !== (l = u(c, s))) {
                        var g = String(l[0]);
                        d[p] = g,
                        "" === g && (c.lastIndex = a(s, o(c.lastIndex), f)),
                        p++
                    }
                    return 0 === p ? null : d
                }
                ]
            }
            ))
        },
        4840: function(t, e, n) {
            var r = n("825a")
              , i = n("1c0b")
              , o = n("b622")
              , c = o("species");
            t.exports = function(t, e) {
                var n, o = r(t).constructor;
                return void 0 === o || void 0 == (n = r(o)[c]) ? e : i(n)
            }
        },
        4930: function(t, e, n) {
            var r = n("d039");
            t.exports = !!Object.getOwnPropertySymbols && !r((function() {
                return !String(Symbol())
            }
            ))
        },
        "4d64": function(t, e, n) {
            var r = n("fc6a")
              , i = n("50c4")
              , o = n("23cb")
              , c = function(t) {
                return function(e, n, c) {
                    var a, u = r(e), s = i(u.length), f = o(c, s);
                    if (t && n != n) {
                        while (s > f)
                            if (a = u[f++],
                            a != a)
                                return !0
                    } else
                        for (; s > f; f++)
                            if ((t || f in u) && u[f] === n)
                                return t || f || 0;
                    return !t && -1
                }
            };
            t.exports = {
                includes: c(!0),
                indexOf: c(!1)
            }
        },
        "50c4": function(t, e, n) {
            var r = n("a691")
              , i = Math.min;
            t.exports = function(t) {
                return t > 0 ? i(r(t), 9007199254740991) : 0
            }
        },
        5135: function(t, e) {
            var n = {}.hasOwnProperty;
            t.exports = function(t, e) {
                return n.call(t, e)
            }
        },
        5319: function(t, e, n) {
            "use strict";
            var r = n("d784")
              , i = n("825a")
              , o = n("7b0b")
              , c = n("50c4")
              , a = n("a691")
              , u = n("1d80")
              , s = n("8aa5")
              , f = n("14c3")
              , l = Math.max
              , d = Math.min
              , p = Math.floor
              , g = /\$([$&'`]|\d\d?|<[^>]*>)/g
              , v = /\$([$&'`]|\d\d?)/g
              , b = function(t) {
                return void 0 === t ? t : String(t)
            };
            r("replace", 2, (function(t, e, n, r) {
                var m = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
                  , h = r.REPLACE_KEEPS_$0
                  , x = m ? "$" : "$0";
                return [function(n, r) {
                    var i = u(this)
                      , o = void 0 == n ? void 0 : n[t];
                    return void 0 !== o ? o.call(n, i, r) : e.call(String(i), n, r)
                }
                , function(t, r) {
                    if (!m && h || "string" === typeof r && -1 === r.indexOf(x)) {
                        var o = n(e, t, this, r);
                        if (o.done)
                            return o.value
                    }
                    var u = i(t)
                      , p = String(this)
                      , g = "function" === typeof r;
                    g || (r = String(r));
                    var v = u.global;
                    if (v) {
                        var w = u.unicode;
                        u.lastIndex = 0
                    }
                    var S = [];
                    while (1) {
                        var E = f(u, p);
                        if (null === E)
                            break;
                        if (S.push(E),
                        !v)
                            break;
                        var k = String(E[0]);
                        "" === k && (u.lastIndex = s(p, c(u.lastIndex), w))
                    }
                    for (var A = "", O = 0, j = 0; j < S.length; j++) {
                        E = S[j];
                        for (var T = String(E[0]), R = l(d(a(E.index), p.length), 0), C = [], P = 1; P < E.length; P++)
                            C.push(b(E[P]));
                        var _ = E.groups;
                        if (g) {
                            var I = [T].concat(C, R, p);
                            void 0 !== _ && I.push(_);
                            var z = String(r.apply(void 0, I))
                        } else
                            z = y(T, p, R, C, _, r);
                        R >= O && (A += p.slice(O, R) + z,
                        O = R + T.length)
                    }
                    return A + p.slice(O)
                }
                ];
                function y(t, n, r, i, c, a) {
                    var u = r + t.length
                      , s = i.length
                      , f = v;
                    return void 0 !== c && (c = o(c),
                    f = g),
                    e.call(a, f, (function(e, o) {
                        var a;
                        switch (o.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return t;
                        case "`":
                            return n.slice(0, r);
                        case "'":
                            return n.slice(u);
                        case "<":
                            a = c[o.slice(1, -1)];
                            break;
                        default:
                            var f = +o;
                            if (0 === f)
                                return e;
                            if (f > s) {
                                var l = p(f / 10);
                                return 0 === l ? e : l <= s ? void 0 === i[l - 1] ? o.charAt(1) : i[l - 1] + o.charAt(1) : e
                            }
                            a = i[f - 1]
                        }
                        return void 0 === a ? "" : a
                    }
                    ))
                }
            }
            ))
        },
        5692: function(t, e, n) {
            var r = n("c430")
              , i = n("c6cd");
            (t.exports = function(t, e) {
                return i[t] || (i[t] = void 0 !== e ? e : {})
            }
            )("versions", []).push({
                version: "3.6.5",
                mode: r ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        },
        "56ef": function(t, e, n) {
            var r = n("d066")
              , i = n("241c")
              , o = n("7418")
              , c = n("825a");
            t.exports = r("Reflect", "ownKeys") || function(t) {
                var e = i.f(c(t))
                  , n = o.f;
                return n ? e.concat(n(t)) : e
            }
        },
        "5c6c": function(t, e) {
            t.exports = function(t, e) {
                return {
                    enumerable: !(1 & t),
                    configurable: !(2 & t),
                    writable: !(4 & t),
                    value: e
                }
            }
        },
        6132: function(t, e) {
            t.exports = "*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}.nomics-ticker-widget-footer{background-color:rgba(16,19,21,.1);bottom:0;color:rgba(11,19,32,.55);display:block;font-family:Roboto,Avenir,Helvetica,Arial,sans-serif;font-size:12px;height:38px;left:0;line-height:38px;opacity:1;overflow:hidden;position:absolute;right:0;text-align:center;visibility:visible;width:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.nomics-ticker-widget-embedded{border-radius:5px;border:1px solid rgba(16,19,21,.1);overflow:hidden;position:relative;min-width:260px;min-height:310px;max-height:310px;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.nomics-ticker-widget-embedded.nomics-ticker-widget-size-responsive{max-width:800px}.nomics-ticker-widget-embedded.nomics-ticker-widget-size-large{max-width:500px}.nomics-ticker-widget-embedded.nomics-ticker-widget-size-medium{max-width:400px}.nomics-ticker-widget-embedded.nomics-ticker-widget-size-small{max-width:300px}.nomics-ticker-widget-embedded.nomics-ticker-widget-size-small .nomics-ticker-widget-footer{font-size:10px}.nomics-ticker-widget-embedded.nomics-ticker-widget-bg-light{background-color:#fff}.nomics-ticker-widget-embedded.nomics-ticker-widget-bg-dark{background-color:#666}.nomics-ticker-widget-embedded.nomics-ticker-widget-bg-transparent{background-color:transparent}.nomics-ticker-widget-embedded iframe{border:0;bottom:36px;left:0;right:0;position:absolute;top:0;width:100%;z-index:1}.nomics-ticker-widget-embedded .nomics-ticker-widget-footer{background-color:rgba(16,19,21,.1);bottom:0;color:rgba(11,19,32,.55);display:block;font-family:Roboto,Avenir,Helvetica,Arial,sans-serif;font-size:12px;height:38px;left:0;line-height:38px;opacity:1;overflow:hidden;position:absolute;right:0;text-align:center;visibility:visible;width:100%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;z-index:10}.nomics-ticker-widget-embedded .nomics-ticker-widget-footer a{color:#93979e;font-weight:700;text-decoration:none;font-size:12px;line-height:38px}.nomics-ticker-widget-embedded .nomics-ticker-widget-footer a:hover{color:rgba(11,19,32,.55);text-decoration:underline}"
        },
        6547: function(t, e, n) {
            var r = n("a691")
              , i = n("1d80")
              , o = function(t) {
                return function(e, n) {
                    var o, c, a = String(i(e)), u = r(n), s = a.length;
                    return u < 0 || u >= s ? t ? "" : void 0 : (o = a.charCodeAt(u),
                    o < 55296 || o > 56319 || u + 1 === s || (c = a.charCodeAt(u + 1)) < 56320 || c > 57343 ? t ? a.charAt(u) : o : t ? a.slice(u, u + 2) : c - 56320 + (o - 55296 << 10) + 65536)
                }
            };
            t.exports = {
                codeAt: o(!1),
                charAt: o(!0)
            }
        },
        "65f0": function(t, e, n) {
            var r = n("861d")
              , i = n("e8b5")
              , o = n("b622")
              , c = o("species");
            t.exports = function(t, e) {
                var n;
                return i(t) && (n = t.constructor,
                "function" != typeof n || n !== Array && !i(n.prototype) ? r(n) && (n = n[c],
                null === n && (n = void 0)) : n = void 0),
                new (void 0 === n ? Array : n)(0 === e ? 0 : e)
            }
        },
        "69f3": function(t, e, n) {
            var r, i, o, c = n("7f9a"), a = n("da84"), u = n("861d"), s = n("9112"), f = n("5135"), l = n("f772"), d = n("d012"), p = a.WeakMap, g = function(t) {
                return o(t) ? i(t) : r(t, {})
            }, v = function(t) {
                return function(e) {
                    var n;
                    if (!u(e) || (n = i(e)).type !== t)
                        throw TypeError("Incompatible receiver, " + t + " required");
                    return n
                }
            };
            if (c) {
                var b = new p
                  , m = b.get
                  , h = b.has
                  , x = b.set;
                r = function(t, e) {
                    return x.call(b, t, e),
                    e
                }
                ,
                i = function(t) {
                    return m.call(b, t) || {}
                }
                ,
                o = function(t) {
                    return h.call(b, t)
                }
            } else {
                var y = l("state");
                d[y] = !0,
                r = function(t, e) {
                    return s(t, y, e),
                    e
                }
                ,
                i = function(t) {
                    return f(t, y) ? t[y] : {}
                }
                ,
                o = function(t) {
                    return f(t, y)
                }
            }
            t.exports = {
                set: r,
                get: i,
                has: o,
                enforce: g,
                getterFor: v
            }
        },
        "6eeb": function(t, e, n) {
            var r = n("da84")
              , i = n("9112")
              , o = n("5135")
              , c = n("ce4e")
              , a = n("8925")
              , u = n("69f3")
              , s = u.get
              , f = u.enforce
              , l = String(String).split("String");
            (t.exports = function(t, e, n, a) {
                var u = !!a && !!a.unsafe
                  , s = !!a && !!a.enumerable
                  , d = !!a && !!a.noTargetGet;
                "function" == typeof n && ("string" != typeof e || o(n, "name") || i(n, "name", e),
                f(n).source = l.join("string" == typeof e ? e : "")),
                t !== r ? (u ? !d && t[e] && (s = !0) : delete t[e],
                s ? t[e] = n : i(t, e, n)) : s ? t[e] = n : c(e, n)
            }
            )(Function.prototype, "toString", (function() {
                return "function" == typeof this && s(this).source || a(this)
            }
            ))
        },
        7418: function(t, e) {
            e.f = Object.getOwnPropertySymbols
        },
        7839: function(t, e) {
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        "7b0b": function(t, e, n) {
            var r = n("1d80");
            t.exports = function(t) {
                return Object(r(t))
            }
        },
        "7f9a": function(t, e, n) {
            var r = n("da84")
              , i = n("8925")
              , o = r.WeakMap;
            t.exports = "function" === typeof o && /native code/.test(i(o))
        },
        "825a": function(t, e, n) {
            var r = n("861d");
            t.exports = function(t) {
                if (!r(t))
                    throw TypeError(String(t) + " is not an object");
                return t
            }
        },
        "83ab": function(t, e, n) {
            var r = n("d039");
            t.exports = !r((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }
            ))
        },
        8418: function(t, e, n) {
            "use strict";
            var r = n("c04e")
              , i = n("9bf2")
              , o = n("5c6c");
            t.exports = function(t, e, n) {
                var c = r(e);
                c in t ? i.f(t, c, o(0, n)) : t[c] = n
            }
        },
        "861d": function(t, e) {
            t.exports = function(t) {
                return "object" === typeof t ? null !== t : "function" === typeof t
            }
        },
        8875: function(t, e, n) {
            var r, i, o;
            (function(n, c) {
                i = [],
                r = c,
                o = "function" === typeof r ? r.apply(e, i) : r,
                void 0 === o || (t.exports = o)
            }
            )("undefined" !== typeof self && self, (function() {
                function t() {
                    if (document.currentScript)
                        return document.currentScript;
                    try {
                        throw new Error
                    } catch (l) {
                        var t, e, n, r = /.*at [^(]*\((.*):(.+):(.+)\)$/gi, i = /@([^@]*):(\d+):(\d+)\s*$/gi, o = r.exec(l.stack) || i.exec(l.stack), c = o && o[1] || !1, a = o && o[2] || !1, u = document.location.href.replace(document.location.hash, ""), s = document.getElementsByTagName("script");
                        c === u && (t = document.documentElement.outerHTML,
                        e = new RegExp("(?:[^\\n]+?\\n){0," + (a - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),
                        n = t.replace(e, "$1").trim());
                        for (var f = 0; f < s.length; f++) {
                            if ("interactive" === s[f].readyState)
                                return s[f];
                            if (s[f].src === c)
                                return s[f];
                            if (c === u && s[f].innerHTML && s[f].innerHTML.trim() === n)
                                return s[f]
                        }
                        return null
                    }
                }
                return t
            }
            ))
        },
        8925: function(t, e, n) {
            var r = n("c6cd")
              , i = Function.toString;
            "function" != typeof r.inspectSource && (r.inspectSource = function(t) {
                return i.call(t)
            }
            ),
            t.exports = r.inspectSource
        },
        "8aa5": function(t, e, n) {
            "use strict";
            var r = n("6547").charAt;
            t.exports = function(t, e, n) {
                return e + (n ? r(t, e).length : 1)
            }
        },
        "90e3": function(t, e) {
            var n = 0
              , r = Math.random();
            t.exports = function(t) {
                return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36)
            }
        },
        9112: function(t, e, n) {
            var r = n("83ab")
              , i = n("9bf2")
              , o = n("5c6c");
            t.exports = r ? function(t, e, n) {
                return i.f(t, e, o(1, n))
            }
            : function(t, e, n) {
                return t[e] = n,
                t
            }
        },
        9263: function(t, e, n) {
            "use strict";
            var r = n("ad6d")
              , i = n("9f7f")
              , o = RegExp.prototype.exec
              , c = String.prototype.replace
              , a = o
              , u = function() {
                var t = /a/
                  , e = /b*/g;
                return o.call(t, "a"),
                o.call(e, "a"),
                0 !== t.lastIndex || 0 !== e.lastIndex
            }()
              , s = i.UNSUPPORTED_Y || i.BROKEN_CARET
              , f = void 0 !== /()??/.exec("")[1]
              , l = u || f || s;
            l && (a = function(t) {
                var e, n, i, a, l = this, d = s && l.sticky, p = r.call(l), g = l.source, v = 0, b = t;
                return d && (p = p.replace("y", ""),
                -1 === p.indexOf("g") && (p += "g"),
                b = String(t).slice(l.lastIndex),
                l.lastIndex > 0 && (!l.multiline || l.multiline && "\n" !== t[l.lastIndex - 1]) && (g = "(?: " + g + ")",
                b = " " + b,
                v++),
                n = new RegExp("^(?:" + g + ")",p)),
                f && (n = new RegExp("^" + g + "$(?!\\s)",p)),
                u && (e = l.lastIndex),
                i = o.call(d ? n : l, b),
                d ? i ? (i.input = i.input.slice(v),
                i[0] = i[0].slice(v),
                i.index = l.lastIndex,
                l.lastIndex += i[0].length) : l.lastIndex = 0 : u && i && (l.lastIndex = l.global ? i.index + i[0].length : e),
                f && i && i.length > 1 && c.call(i[0], n, (function() {
                    for (a = 1; a < arguments.length - 2; a++)
                        void 0 === arguments[a] && (i[a] = void 0)
                }
                )),
                i
            }
            ),
            t.exports = a
        },
        "94ca": function(t, e, n) {
            var r = n("d039")
              , i = /#|\.prototype\./
              , o = function(t, e) {
                var n = a[c(t)];
                return n == s || n != u && ("function" == typeof e ? r(e) : !!e)
            }
              , c = o.normalize = function(t) {
                return String(t).replace(i, ".").toLowerCase()
            }
              , a = o.data = {}
              , u = o.NATIVE = "N"
              , s = o.POLYFILL = "P";
            t.exports = o
        },
        "99af": function(t, e, n) {
            "use strict";
            var r = n("23e7")
              , i = n("d039")
              , o = n("e8b5")
              , c = n("861d")
              , a = n("7b0b")
              , u = n("50c4")
              , s = n("8418")
              , f = n("65f0")
              , l = n("1dde")
              , d = n("b622")
              , p = n("2d00")
              , g = d("isConcatSpreadable")
              , v = 9007199254740991
              , b = "Maximum allowed index exceeded"
              , m = p >= 51 || !i((function() {
                var t = [];
                return t[g] = !1,
                t.concat()[0] !== t
            }
            ))
              , h = l("concat")
              , x = function(t) {
                if (!c(t))
                    return !1;
                var e = t[g];
                return void 0 !== e ? !!e : o(t)
            }
              , y = !m || !h;
            r({
                target: "Array",
                proto: !0,
                forced: y
            }, {
                concat: function(t) {
                    var e, n, r, i, o, c = a(this), l = f(c, 0), d = 0;
                    for (e = -1,
                    r = arguments.length; e < r; e++)
                        if (o = -1 === e ? c : arguments[e],
                        x(o)) {
                            if (i = u(o.length),
                            d + i > v)
                                throw TypeError(b);
                            for (n = 0; n < i; n++,
                            d++)
                                n in o && s(l, d, o[n])
                        } else {
                            if (d >= v)
                                throw TypeError(b);
                            s(l, d++, o)
                        }
                    return l.length = d,
                    l
                }
            })
        },
        "9bf2": function(t, e, n) {
            var r = n("83ab")
              , i = n("0cfb")
              , o = n("825a")
              , c = n("c04e")
              , a = Object.defineProperty;
            e.f = r ? a : function(t, e, n) {
                if (o(t),
                e = c(e, !0),
                o(n),
                i)
                    try {
                        return a(t, e, n)
                    } catch (r) {}
                if ("get"in n || "set"in n)
                    throw TypeError("Accessors not supported");
                return "value"in n && (t[e] = n.value),
                t
            }
        },
        "9f7f": function(t, e, n) {
            "use strict";
            var r = n("d039");
            function i(t, e) {
                return RegExp(t, e)
            }
            e.UNSUPPORTED_Y = r((function() {
                var t = i("a", "y");
                return t.lastIndex = 2,
                null != t.exec("abcd")
            }
            )),
            e.BROKEN_CARET = r((function() {
                var t = i("^r", "gy");
                return t.lastIndex = 2,
                null != t.exec("str")
            }
            ))
        },
        a640: function(t, e, n) {
            "use strict";
            var r = n("d039");
            t.exports = function(t, e) {
                var n = [][t];
                return !!n && r((function() {
                    n.call(null, e || function() {
                        throw 1
                    }
                    , 1)
                }
                ))
            }
        },
        a691: function(t, e) {
            var n = Math.ceil
              , r = Math.floor;
            t.exports = function(t) {
                return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
            }
        },
        ac1f: function(t, e, n) {
            "use strict";
            var r = n("23e7")
              , i = n("9263");
            r({
                target: "RegExp",
                proto: !0,
                forced: /./.exec !== i
            }, {
                exec: i
            })
        },
        ad6d: function(t, e, n) {
            "use strict";
            var r = n("825a");
            t.exports = function() {
                var t = r(this)
                  , e = "";
                return t.global && (e += "g"),
                t.ignoreCase && (e += "i"),
                t.multiline && (e += "m"),
                t.dotAll && (e += "s"),
                t.unicode && (e += "u"),
                t.sticky && (e += "y"),
                e
            }
        },
        adc6: function(t, e, n) {
            "use strict";
            n("99af"),
            n("c975"),
            n("d3b7"),
            n("ac1f"),
            n("25f0"),
            n("466d"),
            n("5319"),
            n("1276");
            var r = n("0c31")
              , i = function(t) {
                var e = t.match(/^(https?:)\/\/(([^:/?#]*)(?::([0-9]+))?)([/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
                return e ? "".concat(e[1], "//").concat(e[2]) : "https://widget.nomics.com"
            }
              , o = "";
            if (void 0 != window.document.currentScript) {
                var c = window.document.currentScript;
                void 0 != c.src && (o = c.src)
            }
            var a = function(t, e) {
                var n = i(o);
                return "".concat(n, "/assets/").concat(t, "/").concat(e, "/")
            }
              , u = function() {
                for (var t = window.document.getElementsByClassName("nomics-ticker-widget"), e = 0; e < t.length; e++) {
                    var n = t[e];
                    if (n.parentElement) {
                        var r = n.getAttribute("class") || "";
                        if (-1 == r.indexOf("nomics-ticker-widget-processing")) {
                            n.setAttribute("class", "nomics-ticker-widget-processing " + r);
                            var i = (n.getAttribute("data-base") || "BTC").toUpperCase()
                              , o = (n.getAttribute("data-quote") || "USD").toUpperCase()
                              , c = n.getAttribute("data-name") || i
                              , u = (n.getAttribute("data-size") || "responsive").toLowerCase()
                              , s = (n.getAttribute("data-theme") || "light").toLowerCase()
                              , f = encodeURIComponent(c)
                              , l = "nomics-ticker-widget-size-responsive";
                            "small" == u ? l = "nomics-ticker-widget-size-small" : "medium" == u ? l = "nomics-ticker-widget-size-medium" : "large" == u && (l = "nomics-ticker-widget-size-large");
                            var d = "nomics-ticker-widget-bg-light";
                            "dark" == s ? d = "nomics-ticker-widget-bg-dark" : "transparent" == s && (d = "nomics-ticker-widget-bg-transparent");
                            var p = n.parentElement
                              , g = window.document.createElement("div");
                            g.setAttribute("class", "nomics-ticker-widget-embedded ".concat(l, " ").concat(d));
                            var v = window.document.createElement("iframe");
                            v.setAttribute("frameborder", "0"),
                            v.setAttribute("scrolling", "no"),
                            v.setAttribute("height", "270px"),
                            v.setAttribute("sandbox", "allow-same-origin allow-scripts allow-top-navigation allow-popups"),
                            v.setAttribute("src", a(i, o)),
                            g.appendChild(v);
                            var b = window.document.createElement("div")
                              , m = "https://nomics.com/assets/".concat(i, "-").concat(f, "?quote=").concat(o, "&utm_source=nomics-widget&utm_campaign=").concat(i, "-").concat(o, "&utm_medium=widget")
                              , h = "https://nomics.com/?utm_source=nomics-widget&utm_campaign=".concat(i, "-").concat(o, "&utm_medium=widget");
                            b.setAttribute("class", "nomics-ticker-widget-footer"),
                            b.setAttribute("style", "display: block !important; visibility: visible !important; opacity: 1 !important;");
                            var x = '<a href="'.concat(m, '" target="_blank" rel="nofollow noopener" class="nomics-currency-name-').concat(i, '">').concat(c, " Price</a>");
                            x += ' by <a href="'.concat(h, '" target="_blank" rel="nofollow noopener">Nomics (A&nbsp;Crypto&nbsp;Market&nbsp;Cap&nbsp;Provider)</a>'),
                            b.innerHTML = x,
                            g.appendChild(b),
                            p.insertBefore(g, n);
                            var y = function(t) {
                                return function() {
                                    t.remove()
                                }
                            };
                            setTimeout(y(n), 1);
                            var w = function(t) {
                                return function(e) {
                                    try {
                                        if (!e.data)
                                            return;
                                        var n = e.data.toString();
                                        if (0 != n.indexOf("nomicsCurrencyNameUpdate"))
                                            return;
                                        var r = e.data.split(":");
                                        if (3 != r.length || t != r[1])
                                            return;
                                        for (var i = "nomics-currency-name-".concat(t), o = window.document.getElementsByClassName(i), c = 0; c < o.length; c++) {
                                            var a = o[c];
                                            a.innerHTML = "".concat(r[2], " Price"),
                                            a.setAttribute("class", "")
                                        }
                                    } catch (u) {}
                                }
                            };
                            window.addEventListener("message", w(i))
                        }
                    }
                }
            };
            function s(t) {
                t = t.toString(),
                t = t.replace(/;/g, " !important;");
                var e = window.document.createElement("style");
                e.setAttribute("type", "text/css"),
                e.styleSheet ? e.styleSheet.cssText = t : e.innerHTML = t,
                window.document.getElementsByTagName("head")[0].appendChild(e)
            }
            s(r),
            u()
        },
        ae40: function(t, e, n) {
            var r = n("83ab")
              , i = n("d039")
              , o = n("5135")
              , c = Object.defineProperty
              , a = {}
              , u = function(t) {
                throw t
            };
            t.exports = function(t, e) {
                if (o(a, t))
                    return a[t];
                e || (e = {});
                var n = [][t]
                  , s = !!o(e, "ACCESSORS") && e.ACCESSORS
                  , f = o(e, 0) ? e[0] : u
                  , l = o(e, 1) ? e[1] : void 0;
                return a[t] = !!n && !i((function() {
                    if (s && !r)
                        return !0;
                    var t = {
                        length: -1
                    };
                    s ? c(t, 1, {
                        enumerable: !0,
                        get: u
                    }) : t[1] = 1,
                    n.call(t, f, l)
                }
                ))
            }
        },
        b041: function(t, e, n) {
            "use strict";
            var r = n("00ee")
              , i = n("f5df");
            t.exports = r ? {}.toString : function() {
                return "[object " + i(this) + "]"
            }
        },
        b622: function(t, e, n) {
            var r = n("da84")
              , i = n("5692")
              , o = n("5135")
              , c = n("90e3")
              , a = n("4930")
              , u = n("fdbf")
              , s = i("wks")
              , f = r.Symbol
              , l = u ? f : f && f.withoutSetter || c;
            t.exports = function(t) {
                return o(s, t) || (a && o(f, t) ? s[t] = f[t] : s[t] = l("Symbol." + t)),
                s[t]
            }
        },
        c04e: function(t, e, n) {
            var r = n("861d");
            t.exports = function(t, e) {
                if (!r(t))
                    return t;
                var n, i;
                if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t)))
                    return i;
                if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t)))
                    return i;
                if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t)))
                    return i;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        c430: function(t, e) {
            t.exports = !1
        },
        c6b6: function(t, e) {
            var n = {}.toString;
            t.exports = function(t) {
                return n.call(t).slice(8, -1)
            }
        },
        c6cd: function(t, e, n) {
            var r = n("da84")
              , i = n("ce4e")
              , o = "__core-js_shared__"
              , c = r[o] || i(o, {});
            t.exports = c
        },
        c8ba: function(t, e) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (r) {
                "object" === typeof window && (n = window)
            }
            t.exports = n
        },
        c975: function(t, e, n) {
            "use strict";
            var r = n("23e7")
              , i = n("4d64").indexOf
              , o = n("a640")
              , c = n("ae40")
              , a = [].indexOf
              , u = !!a && 1 / [1].indexOf(1, -0) < 0
              , s = o("indexOf")
              , f = c("indexOf", {
                ACCESSORS: !0,
                1: 0
            });
            r({
                target: "Array",
                proto: !0,
                forced: u || !s || !f
            }, {
                indexOf: function(t) {
                    return u ? a.apply(this, arguments) || 0 : i(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        ca84: function(t, e, n) {
            var r = n("5135")
              , i = n("fc6a")
              , o = n("4d64").indexOf
              , c = n("d012");
            t.exports = function(t, e) {
                var n, a = i(t), u = 0, s = [];
                for (n in a)
                    !r(c, n) && r(a, n) && s.push(n);
                while (e.length > u)
                    r(a, n = e[u++]) && (~o(s, n) || s.push(n));
                return s
            }
        },
        cc12: function(t, e, n) {
            var r = n("da84")
              , i = n("861d")
              , o = r.document
              , c = i(o) && i(o.createElement);
            t.exports = function(t) {
                return c ? o.createElement(t) : {}
            }
        },
        ce4e: function(t, e, n) {
            var r = n("da84")
              , i = n("9112");
            t.exports = function(t, e) {
                try {
                    i(r, t, e)
                } catch (n) {
                    r[t] = e
                }
                return e
            }
        },
        d012: function(t, e) {
            t.exports = {}
        },
        d039: function(t, e) {
            t.exports = function(t) {
                try {
                    return !!t()
                } catch (e) {
                    return !0
                }
            }
        },
        d066: function(t, e, n) {
            var r = n("428f")
              , i = n("da84")
              , o = function(t) {
                return "function" == typeof t ? t : void 0
            };
            t.exports = function(t, e) {
                return arguments.length < 2 ? o(r[t]) || o(i[t]) : r[t] && r[t][e] || i[t] && i[t][e]
            }
        },
        d1e7: function(t, e, n) {
            "use strict";
            var r = {}.propertyIsEnumerable
              , i = Object.getOwnPropertyDescriptor
              , o = i && !r.call({
                1: 2
            }, 1);
            e.f = o ? function(t) {
                var e = i(this, t);
                return !!e && e.enumerable
            }
            : r
        },
        d3b7: function(t, e, n) {
            var r = n("00ee")
              , i = n("6eeb")
              , o = n("b041");
            r || i(Object.prototype, "toString", o, {
                unsafe: !0
            })
        },
        d784: function(t, e, n) {
            "use strict";
            n("ac1f");
            var r = n("6eeb")
              , i = n("d039")
              , o = n("b622")
              , c = n("9263")
              , a = n("9112")
              , u = o("species")
              , s = !i((function() {
                var t = /./;
                return t.exec = function() {
                    var t = [];
                    return t.groups = {
                        a: "7"
                    },
                    t
                }
                ,
                "7" !== "".replace(t, "$<a>")
            }
            ))
              , f = function() {
                return "$0" === "a".replace(/./, "$0")
            }()
              , l = o("replace")
              , d = function() {
                return !!/./[l] && "" === /./[l]("a", "$0")
            }()
              , p = !i((function() {
                var t = /(?:)/
                  , e = t.exec;
                t.exec = function() {
                    return e.apply(this, arguments)
                }
                ;
                var n = "ab".split(t);
                return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
            }
            ));
            t.exports = function(t, e, n, l) {
                var g = o(t)
                  , v = !i((function() {
                    var e = {};
                    return e[g] = function() {
                        return 7
                    }
                    ,
                    7 != ""[t](e)
                }
                ))
                  , b = v && !i((function() {
                    var e = !1
                      , n = /a/;
                    return "split" === t && (n = {},
                    n.constructor = {},
                    n.constructor[u] = function() {
                        return n
                    }
                    ,
                    n.flags = "",
                    n[g] = /./[g]),
                    n.exec = function() {
                        return e = !0,
                        null
                    }
                    ,
                    n[g](""),
                    !e
                }
                ));
                if (!v || !b || "replace" === t && (!s || !f || d) || "split" === t && !p) {
                    var m = /./[g]
                      , h = n(g, ""[t], (function(t, e, n, r, i) {
                        return e.exec === c ? v && !i ? {
                            done: !0,
                            value: m.call(e, n, r)
                        } : {
                            done: !0,
                            value: t.call(n, e, r)
                        } : {
                            done: !1
                        }
                    }
                    ), {
                        REPLACE_KEEPS_$0: f,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: d
                    })
                      , x = h[0]
                      , y = h[1];
                    r(String.prototype, t, x),
                    r(RegExp.prototype, g, 2 == e ? function(t, e) {
                        return y.call(t, this, e)
                    }
                    : function(t) {
                        return y.call(t, this)
                    }
                    )
                }
                l && a(RegExp.prototype[g], "sham", !0)
            }
        },
        da84: function(t, e, n) {
            (function(e) {
                var n = function(t) {
                    return t && t.Math == Math && t
                };
                t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")()
            }
            ).call(this, n("c8ba"))
        },
        e893: function(t, e, n) {
            var r = n("5135")
              , i = n("56ef")
              , o = n("06cf")
              , c = n("9bf2");
            t.exports = function(t, e) {
                for (var n = i(e), a = c.f, u = o.f, s = 0; s < n.length; s++) {
                    var f = n[s];
                    r(t, f) || a(t, f, u(e, f))
                }
            }
        },
        e8b5: function(t, e, n) {
            var r = n("c6b6");
            t.exports = Array.isArray || function(t) {
                return "Array" == r(t)
            }
        },
        f5df: function(t, e, n) {
            var r = n("00ee")
              , i = n("c6b6")
              , o = n("b622")
              , c = o("toStringTag")
              , a = "Arguments" == i(function() {
                return arguments
            }())
              , u = function(t, e) {
                try {
                    return t[e]
                } catch (n) {}
            };
            t.exports = r ? i : function(t) {
                var e, n, r;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = u(e = Object(t), c)) ? n : a ? i(e) : "Object" == (r = i(e)) && "function" == typeof e.callee ? "Arguments" : r
            }
        },
        f772: function(t, e, n) {
            var r = n("5692")
              , i = n("90e3")
              , o = r("keys");
            t.exports = function(t) {
                return o[t] || (o[t] = i(t))
            }
        },
        fae3: function(t, e, n) {
            "use strict";
            n.r(e);
            n("1eb2");
            var r = n("adc6");
            for (var i in r)
                "default" !== i && function(t) {
                    n.d(e, t, (function() {
                        return r[t]
                    }
                    ))
                }(i)
        },
        fc6a: function(t, e, n) {
            var r = n("44ad")
              , i = n("1d80");
            t.exports = function(t) {
                return r(i(t))
            }
        },
        fdbf: function(t, e, n) {
            var r = n("4930");
            t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        }
    })
}
));
