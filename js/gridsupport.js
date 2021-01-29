!function(e, n, t) {
    function r(e, n) {
        return typeof e === n
    }
    function s(e, n) {
        return !!~("" + e).indexOf(n)
    }
    function o() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : w ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }
    function i(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }
    function l(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }
    function a(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }
    function u(n, t, r) {
        var s;
        if ("getComputedStyle"in e) {
            s = getComputedStyle.call(e, n, t);
            var o = e.console;
            if (null !== s)
                r && (s = s.getPropertyValue(r));
            else if (o) {
                o[o.error ? "error" : "log"].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            }
        } else
            s = !t && n.currentStyle && n.currentStyle[r];
        return s
    }
    function f(e, t, r, s) {
        var i, l, a, u, f = "modernizr", c = o("div"), d = function() {
            var e = n.body;
            return e || ((e = o(w ? "svg" : "body")).fake = !0),
            e
        }();
        if (parseInt(r, 10))
            for (; r--; )
                (a = o("div")).id = s ? s[r] : f + (r + 1),
                c.appendChild(a);
        return (i = o("style")).type = "text/css",
        i.id = "s" + f,
        (d.fake ? d : c).appendChild(i),
        d.appendChild(c),
        i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(n.createTextNode(e)),
        c.id = f,
        d.fake && (d.style.background = "",
        d.style.overflow = "hidden",
        u = C.style.overflow,
        C.style.overflow = "hidden",
        C.appendChild(d)),
        l = t(c, e),
        d.fake ? (d.parentNode.removeChild(d),
        C.style.overflow = u,
        C.offsetHeight) : c.parentNode.removeChild(c),
        !!l
    }
    function c(n, r) {
        var s = n.length;
        if ("CSS"in e && "supports"in e.CSS) {
            for (; s--; )
                if (e.CSS.supports(a(n[s]), r))
                    return !0;
            return !1
        }
        if ("CSSSupportsRule"in e) {
            for (var o = []; s--; )
                o.push("(" + a(n[s]) + ":" + r + ")");
            return f("@supports (" + (o = o.join(" or ")) + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == u(e, null, "position")
            })
        }
        return t
    }
    function d(e, n, l, a) {
        function u() {
            d && (delete E.style,
            delete E.modElem)
        }
        if (a = !r(a, "undefined") && a,
        !r(l, "undefined")) {
            var f = c(e, l);
            if (!r(f, "undefined"))
                return f
        }
        for (var d, p, m, y, g, h = ["modernizr", "tspan", "samp"]; !E.style && h.length; )
            d = !0,
            E.modElem = o(h.shift()),
            E.style = E.modElem.style;
        for (m = e.length,
        p = 0; m > p; p++)
            if (y = e[p],
            g = E.style[y],
            s(y, "-") && (y = i(y)),
            E.style[y] !== t) {
                if (a || r(l, "undefined"))
                    return u(),
                    "pfx" != n || y;
                try {
                    E.style[y] = l
                } catch (e) {}
                if (E.style[y] != g)
                    return u(),
                    "pfx" != n || y
            }
        return u(),
        !1
    }
    function p(e, n, t, s, o) {
        var i = e.charAt(0).toUpperCase() + e.slice(1)
          , a = (e + " " + x.join(i + " ") + i).split(" ");
        return r(n, "string") || r(n, "undefined") ? d(a, n, s, o) : function(e, n, t) {
            var s;
            for (var o in e)
                if (e[o]in n)
                    return !1 === t ? e[o] : r(s = n[e[o]], "function") ? l(s, t || n) : s;
            return !1
        }(a = (e + " " + b.join(i + " ") + i).split(" "), n, t)
    }
    function m(e, n, r) {
        return p(e, t, t, n, r)
    }
    var y = []
      , g = []
      , h = {
        _version: "3.6.0",
        _config: {
            classPrefix: "",
            enableClasses: !0,
            enableJSClass: !0,
            usePrefixes: !0
        },
        _q: [],
        on: function(e, n) {
            var t = this;
            setTimeout(function() {
                n(t[e])
            }, 0)
        },
        addTest: function(e, n, t) {
            g.push({
                name: e,
                fn: n,
                options: t
            })
        },
        addAsyncTest: function(e) {
            g.push({
                name: null,
                fn: e
            })
        }
    }
      , v = function() {};
    v.prototype = h,
    v = new v;
    var C = n.documentElement
      , w = "svg" === C.nodeName.toLowerCase()
      , S = "Moz O ms Webkit"
      , x = h._config.usePrefixes ? S.split(" ") : [];
    h._cssomPrefixes = x;
    var b = h._config.usePrefixes ? S.toLowerCase().split(" ") : [];
    h._domPrefixes = b;
    var _ = {
        elem: o("modernizr")
    };
    v._q.push(function() {
        delete _.elem
    });
    var E = {
        style: _.elem.style
    };
    v._q.unshift(function() {
        delete E.style
    }),
    h.testAllProps = p,
    h.testAllProps = m,
    v.addTest("cssgridlegacy", m("grid-columns", "10px", !0)),
    v.addTest("cssgrid", m("grid-template-rows", "none", !0)),
    function() {
        var e, n, t, s, o, i;
        for (var l in g)
            if (g.hasOwnProperty(l)) {
                if (e = [],
                (n = g[l]).name && (e.push(n.name.toLowerCase()),
                n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++)
                        e.push(n.options.aliases[t].toLowerCase());
                for (s = r(n.fn, "function") ? n.fn() : n.fn,
                o = 0; o < e.length; o++)
                    1 === (i = e[o].split(".")).length ? v[i[0]] = s : (!v[i[0]] || v[i[0]]instanceof Boolean || (v[i[0]] = new Boolean(v[i[0]])),
                    v[i[0]][i[1]] = s),
                    y.push((s ? "" : "no-") + i.join("-"))
            }
    }(),
    function(e) {
        var n = C.className
          , t = v._config.classPrefix || "";
        if (w && (n = n.baseVal),
        v._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2")
        }
        v._config.enableClasses && (n += " " + t + e.join(" " + t),
        w ? C.className.baseVal = n : C.className = n)
    }(y),
    delete h.addTest,
    delete h.addAsyncTest;
    for (var P = 0; P < v._q.length; P++)
        v._q[P]();
    e.Modernizr = v
}(window, document),
0 == Modernizr.cssgrid && function() {
    var e = document.createElement("link");
    e.href = "" + document.getElementById("gridscript").getAttribute("css"),
    e.rel = "stylesheet",
    e.type = "text/css",
    document.getElementsByTagName("body")[0].appendChild(e)
}();
