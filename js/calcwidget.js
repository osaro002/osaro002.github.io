function showCalc(o, i, e, t, r, d, l, n, a, c, h, p, m, v) {
    d = void 0 === d ? "f93" : d,
    l = void 0 === l ? "f93" : l,
    n = void 0 === n ? "4e9f15" : n,
    a = void 0 === a ? "09c" : a,
    c = void 0 === c ? "f0ad4e" : c,
    h = void 0 === h ? "d9534f" : h,
    p = void 0 === p ? "f5f5f5" : p,
    m = void 0 === m ? "eee" : m,
    i = void 0 === i ? "470" : i,
    v = void 0 !== v && v;
    var s = document.getElementById("cr-copyright");
    s && s.parentNode.removeChild(s);
    var g = 495
      , x = 0
      , f = ""
      , y = ""
      , b = "";
    1 == e ? (f = "100%",
    y = "100%") : (f = Number(i).toString() + "px; ",
    y = i.toString() + "px; "),
    x = g,
    x += 15,
    Number(i) < 415 && (g += 15,
    x += 15),
    document.body.clientWidth < 415 && (g = 535,
    f = "100%",
    y = "100%"),
    t > 0 && (b = " padding:10px; ");
    var C = '<div style="min-width:320px; width:' + f + "; min-height:" + x + "px; height:" + x + "px; max-height:" + x + "px;" + b + "border:" + t + "px solid #" + r + ';display:inline-block; box-sizing:unset;"><iframe src="' + (1 == v ? "//" + location.hostname : "https://cryptorival.com") + "/widget/calcs/" + o + "?calcButtonColor=" + d + "&backButtonColor=" + l + "&dailyColor=" + n + "&weeklyColor=" + a + "&monthlyColor=" + c + "&yearlyColor=" + h + "&backColor=" + p + "&addonColor=" + m + '" allowtransparency="false" scrolling="no" frameborder="0" border="0" cellspacing="0" style="height:' + g + "px; width:" + y + "; min-width:320px; min-height:" + g + "px; max-height:" + g + 'px; position:relative !important;"></iframe></div>';
    document.write(C)
}
