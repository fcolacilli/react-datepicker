"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var e = require("react");
require("prop-types");
var t = require("classnames"),
  r = require("date-fns/isDate"),
  a = require("date-fns/isValid"),
  n = require("date-fns/format"),
  o = require("date-fns/addMinutes"),
  s = require("date-fns/addHours"),
  i = require("date-fns/addDays"),
  p = require("date-fns/addWeeks"),
  l = require("date-fns/addMonths"),
  c = require("date-fns/addYears");
require("date-fns/subMinutes"), require("date-fns/subHours");
var u = require("date-fns/subDays"),
  d = require("date-fns/subWeeks"),
  f = require("date-fns/subMonths"),
  h = require("date-fns/subYears"),
  m = require("date-fns/getSeconds"),
  y = require("date-fns/getMinutes"),
  v = require("date-fns/getHours"),
  D = require("date-fns/getDay"),
  w = require("date-fns/getDate"),
  k = require("date-fns/getISOWeek"),
  g = require("date-fns/getMonth"),
  b = require("date-fns/getQuarter"),
  C = require("date-fns/getYear"),
  S = require("date-fns/getTime"),
  _ = require("date-fns/setSeconds"),
  M = require("date-fns/setMinutes"),
  P = require("date-fns/setHours"),
  E = require("date-fns/setMonth"),
  N = require("date-fns/setQuarter"),
  x = require("date-fns/setYear"),
  O = require("date-fns/min"),
  Y = require("date-fns/max"),
  I = require("date-fns/differenceInCalendarDays"),
  T = require("date-fns/differenceInCalendarMonths");
require("date-fns/differenceInCalendarWeeks");
var L = require("date-fns/differenceInCalendarYears"),
  F = require("date-fns/startOfDay"),
  R = require("date-fns/startOfWeek"),
  A = require("date-fns/startOfMonth"),
  q = require("date-fns/startOfQuarter"),
  K = require("date-fns/startOfYear"),
  B = require("date-fns/endOfDay");
require("date-fns/endOfWeek"), require("date-fns/endOfMonth");
var W = require("date-fns/isEqual"),
  j = require("date-fns/isSameDay"),
  H = require("date-fns/isSameMonth"),
  Q = require("date-fns/isSameYear"),
  V = require("date-fns/isSameQuarter"),
  U = require("date-fns/isAfter"),
  $ = require("date-fns/isBefore"),
  z = require("date-fns/isWithinInterval"),
  G = require("date-fns/toDate"),
  J = require("date-fns/parse"),
  X = require("date-fns/parseISO"),
  Z = require("react-onclickoutside"),
  ee = require("react-dom"),
  te = require("react-popper");
function re(e) {
  return e && "object" == typeof e && "default" in e ? e : { default: e };
}
var ae = re(e),
  ne = re(t),
  oe = re(r),
  se = re(a),
  ie = re(n),
  pe = re(o),
  le = re(s),
  ce = re(i),
  ue = re(p),
  de = re(l),
  fe = re(c),
  he = re(u),
  me = re(d),
  ye = re(f),
  ve = re(h),
  De = re(m),
  we = re(y),
  ke = re(v),
  ge = re(D),
  be = re(w),
  Ce = re(k),
  Se = re(g),
  _e = re(b),
  Me = re(C),
  Pe = re(S),
  Ee = re(_),
  Ne = re(M),
  xe = re(P),
  Oe = re(E),
  Ye = re(N),
  Ie = re(x),
  Te = re(O),
  Le = re(Y),
  Fe = re(I),
  Re = re(T),
  Ae = re(L),
  qe = re(F),
  Ke = re(R),
  Be = re(A),
  We = re(q),
  je = re(K),
  He = re(B),
  Qe = re(W),
  Ve = re(j),
  Ue = re(H),
  $e = re(Q),
  ze = re(V),
  Ge = re(U),
  Je = re($),
  Xe = re(z),
  Ze = re(G),
  et = re(J),
  tt = re(X),
  rt = re(Z),
  at = re(ee);
function nt(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    t &&
      (a = a.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      r.push.apply(r, a);
  }
  return r;
}
function ot(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? nt(Object(r), !0).forEach(function (t) {
          ct(e, t, r[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
      : nt(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
  }
  return e;
}
function st(e) {
  return (
    (st =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? "symbol"
              : typeof e;
          }),
    st(e)
  );
}
function it(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pt(e, t) {
  for (var r = 0; r < t.length; r++) {
    var a = t[r];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      "value" in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function lt(e, t, r) {
  return t && pt(e.prototype, t), r && pt(e, r), e;
}
function ct(e, t, r) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = r),
    e
  );
}
function ut() {
  return (
    (ut =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var a in r)
            Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
        }
        return e;
      }),
    ut.apply(this, arguments)
  );
}
function dt(e, t) {
  if ("function" != typeof t && null !== t)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    t && ht(e, t);
}
function ft(e) {
  return (
    (ft = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    ft(e)
  );
}
function ht(e, t) {
  return (
    (ht =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      }),
    ht(e, t)
  );
}
function mt(e) {
  if (void 0 === e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function yt(e, t) {
  if (t && ("object" == typeof t || "function" == typeof t)) return t;
  if (void 0 !== t)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return mt(e);
}
function vt(e) {
  var t = (function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return (
        Boolean.prototype.valueOf.call(
          Reflect.construct(Boolean, [], function () {})
        ),
        !0
      );
    } catch (e) {
      return !1;
    }
  })();
  return function () {
    var r,
      a = ft(e);
    if (t) {
      var n = ft(this).constructor;
      r = Reflect.construct(a, arguments, n);
    } else r = a.apply(this, arguments);
    return yt(this, r);
  };
}
function Dt(e) {
  return (
    (function (e) {
      if (Array.isArray(e)) return wt(e);
    })(e) ||
    (function (e) {
      if (
        ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e["@@iterator"]
      )
        return Array.from(e);
    })(e) ||
    (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return wt(e, t);
      var r = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === r && e.constructor && (r = e.constructor.name);
      if ("Map" === r || "Set" === r) return Array.from(e);
      if (
        "Arguments" === r ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
      )
        return wt(e, t);
    })(e) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    })()
  );
}
function wt(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var r = 0, a = new Array(t); r < t; r++) a[r] = e[r];
  return a;
}
function kt(e, t) {
  switch (e) {
    case "P":
      return t.date({ width: "short" });
    case "PP":
      return t.date({ width: "medium" });
    case "PPP":
      return t.date({ width: "long" });
    default:
      return t.date({ width: "full" });
  }
}
function gt(e, t) {
  switch (e) {
    case "p":
      return t.time({ width: "short" });
    case "pp":
      return t.time({ width: "medium" });
    case "ppp":
      return t.time({ width: "long" });
    default:
      return t.time({ width: "full" });
  }
}
var bt = {
    p: gt,
    P: function (e, t) {
      var r,
        a = e.match(/(P+)(p+)?/),
        n = a[1],
        o = a[2];
      if (!o) return kt(e, t);
      switch (n) {
        case "P":
          r = t.dateTime({ width: "short" });
          break;
        case "PP":
          r = t.dateTime({ width: "medium" });
          break;
        case "PPP":
          r = t.dateTime({ width: "long" });
          break;
        default:
          r = t.dateTime({ width: "full" });
      }
      return r.replace("{{date}}", kt(n, t)).replace("{{time}}", gt(o, t));
    },
  },
  Ct = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
function St(e) {
  var t = e
    ? "string" == typeof e || e instanceof String
      ? tt.default(e)
      : Ze.default(e)
    : new Date();
  return Mt(t) ? t : null;
}
function _t(e, t, r, a, n) {
  var o = null,
    s = Ht(r) || Ht(jt()),
    i = !0;
  return Array.isArray(t)
    ? (t.forEach(function (t) {
        var r = et.default(e, t, new Date(), { locale: s });
        a &&
          (i =
            Mt(r, n) && e === ie.default(r, t, { awareOfUnicodeTokens: !0 })),
          Mt(r, n) && i && (o = r);
      }),
      o)
    : ((o = et.default(e, t, new Date(), { locale: s })),
      a
        ? (i = Mt(o) && e === ie.default(o, t, { awareOfUnicodeTokens: !0 }))
        : Mt(o) ||
          ((t = t
            .match(Ct)
            .map(function (e) {
              var t = e[0];
              return "p" === t || "P" === t
                ? s
                  ? (0, bt[t])(e, s.formatLong)
                  : t
                : e;
            })
            .join("")),
          e.length > 0 && (o = et.default(e, t.slice(0, e.length), new Date())),
          Mt(o) || (o = new Date(e))),
      Mt(o) && i ? o : null);
}
function Mt(e, t) {
  return (t = t || new Date("1/1/1000")), se.default(e) && Ge.default(e, t);
}
function Pt(e, t, r) {
  if ("en" === r) return ie.default(e, t, { awareOfUnicodeTokens: !0 });
  var a = Ht(r);
  return (
    r &&
      !a &&
      console.warn(
        'A locale object was not found for the provided string ["'.concat(
          r,
          '"].'
        )
      ),
    !a && jt() && Ht(jt()) && (a = Ht(jt())),
    ie.default(e, t, { locale: a || null, awareOfUnicodeTokens: !0 })
  );
}
function Et(e, t) {
  var r = t.dateFormat,
    a = t.locale;
  return (e && Pt(e, Array.isArray(r) ? r[0] : r, a)) || "";
}
function Nt(e, t) {
  var r = t.hour,
    a = void 0 === r ? 0 : r,
    n = t.minute,
    o = void 0 === n ? 0 : n,
    s = t.second,
    i = void 0 === s ? 0 : s;
  return xe.default(Ne.default(Ee.default(e, i), o), a);
}
function xt(e, t) {
  var r = (t && Ht(t)) || (jt() && Ht(jt()));
  return Ce.default(e, r ? { locale: r } : null);
}
function Ot(e, t) {
  return Pt(e, "ddd", t);
}
function Yt(e) {
  return qe.default(e);
}
function It(e, t, r) {
  var a = Ht(t || jt());
  return Ke.default(e, { locale: a, weekStartsOn: r });
}
function Tt(e) {
  return Be.default(e);
}
function Lt(e) {
  return je.default(e);
}
function Ft(e) {
  return We.default(e);
}
function Rt(e, t) {
  return e && t ? $e.default(e, t) : !e && !t;
}
function At(e, t) {
  return e && t ? Ue.default(e, t) : !e && !t;
}
function qt(e, t) {
  return e && t ? ze.default(e, t) : !e && !t;
}
function Kt(e, t) {
  return e && t ? Ve.default(e, t) : !e && !t;
}
function Bt(e, t) {
  return e && t ? Qe.default(e, t) : !e && !t;
}
function Wt(e, t, r) {
  var a,
    n = qe.default(t),
    o = He.default(r);
  try {
    a = Xe.default(e, { start: n, end: o });
  } catch (e) {
    a = !1;
  }
  return a;
}
function jt() {
  return ("undefined" != typeof window ? window : global).__localeId__;
}
function Ht(e) {
  if ("string" == typeof e) {
    var t = "undefined" != typeof window ? window : global;
    return t.__localeData__ ? t.__localeData__[e] : null;
  }
  return e;
}
function Qt(e, t) {
  return Pt(Oe.default(St(), e), "LLLL", t);
}
function Vt(e, t) {
  return Pt(Oe.default(St(), e), "LLL", t);
}
function Ut(e, t) {
  return Pt(Ye.default(St(), e), "QQQ", t);
}
function $t(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    a = t.maxDate,
    n = t.excludeDates,
    o = t.excludeDateIntervals,
    s = t.includeDates,
    i = t.includeDateIntervals,
    p = t.filterDate;
  return (
    tr(e, { minDate: r, maxDate: a }) ||
    (n &&
      n.some(function (t) {
        return Kt(e, t);
      })) ||
    (o &&
      o.some(function (t) {
        var r = t.start,
          a = t.end;
        return Xe.default(e, { start: r, end: a });
      })) ||
    (s &&
      !s.some(function (t) {
        return Kt(e, t);
      })) ||
    (i &&
      !i.some(function (t) {
        var r = t.start,
          a = t.end;
        return Xe.default(e, { start: r, end: a });
      })) ||
    (p && !p(St(e))) ||
    !1
  );
}
function zt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.excludeDates,
    a = t.excludeDateIntervals;
  return a && a.length > 0
    ? a.some(function (t) {
        var r = t.start,
          a = t.end;
        return Xe.default(e, { start: r, end: a });
      })
    : (r &&
        r.some(function (t) {
          return Kt(e, t);
        })) ||
        !1;
}
function Gt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    a = t.maxDate,
    n = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    tr(e, { minDate: r, maxDate: a }) ||
    (n &&
      n.some(function (t) {
        return At(e, t);
      })) ||
    (o &&
      !o.some(function (t) {
        return At(e, t);
      })) ||
    (s && !s(St(e))) ||
    !1
  );
}
function Jt(e, t, r, a) {
  var n = Me.default(e),
    o = Se.default(e),
    s = Me.default(t),
    i = Se.default(t),
    p = Me.default(a);
  return n === s && n === p
    ? o <= r && r <= i
    : n < s
    ? (p === n && o <= r) || (p === s && i >= r) || (p < s && p > n)
    : void 0;
}
function Xt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    a = t.maxDate,
    n = t.excludeDates,
    o = t.includeDates,
    s = t.filterDate;
  return (
    tr(e, { minDate: r, maxDate: a }) ||
    (n &&
      n.some(function (t) {
        return qt(e, t);
      })) ||
    (o &&
      !o.some(function (t) {
        return qt(e, t);
      })) ||
    (s && !s(St(e))) ||
    !1
  );
}
function Zt(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    a = t.maxDate,
    n = new Date(e, 0, 1);
  return tr(n, { minDate: r, maxDate: a }) || !1;
}
function er(e, t, r, a) {
  var n = Me.default(e),
    o = _e.default(e),
    s = Me.default(t),
    i = _e.default(t),
    p = Me.default(a);
  return n === s && n === p
    ? o <= r && r <= i
    : n < s
    ? (p === n && o <= r) || (p === s && i >= r) || (p < s && p > n)
    : void 0;
}
function tr(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    a = t.maxDate;
  return (r && Fe.default(e, r) < 0) || (a && Fe.default(e, a) > 0);
}
function rr(e, t) {
  return t.some(function (t) {
    return ke.default(t) === ke.default(e) && we.default(t) === we.default(e);
  });
}
function ar(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.excludeTimes,
    a = t.includeTimes,
    n = t.filterTime;
  return (r && rr(e, r)) || (a && !rr(e, a)) || (n && !n(e)) || !1;
}
function nr(e, t) {
  var r = t.minTime,
    a = t.maxTime;
  if (!r || !a) throw new Error("Both minTime and maxTime props required");
  var n,
    o = St(),
    s = xe.default(Ne.default(o, we.default(e)), ke.default(e)),
    i = xe.default(Ne.default(o, we.default(r)), ke.default(r)),
    p = xe.default(Ne.default(o, we.default(a)), ke.default(a));
  try {
    n = !Xe.default(s, { start: i, end: p });
  } catch (e) {
    n = !1;
  }
  return n;
}
function or(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    a = t.includeDates,
    n = ye.default(e, 1);
  return (
    (r && Re.default(r, n) > 0) ||
    (a &&
      a.every(function (e) {
        return Re.default(e, n) > 0;
      })) ||
    !1
  );
}
function sr(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    a = t.includeDates,
    n = de.default(e, 1);
  return (
    (r && Re.default(n, r) > 0) ||
    (a &&
      a.every(function (e) {
        return Re.default(n, e) > 0;
      })) ||
    !1
  );
}
function ir(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.minDate,
    a = t.includeDates,
    n = ve.default(e, 1);
  return (
    (r && Ae.default(r, n) > 0) ||
    (a &&
      a.every(function (e) {
        return Ae.default(e, n) > 0;
      })) ||
    !1
  );
}
function pr(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.maxDate,
    a = t.includeDates,
    n = fe.default(e, 1);
  return (
    (r && Ae.default(n, r) > 0) ||
    (a &&
      a.every(function (e) {
        return Ae.default(n, e) > 0;
      })) ||
    !1
  );
}
function lr(e) {
  var t = e.minDate,
    r = e.includeDates;
  if (r && t) {
    var a = r.filter(function (e) {
      return Fe.default(e, t) >= 0;
    });
    return Te.default(a);
  }
  return r ? Te.default(r) : t;
}
function cr(e) {
  var t = e.maxDate,
    r = e.includeDates;
  if (r && t) {
    var a = r.filter(function (e) {
      return Fe.default(e, t) <= 0;
    });
    return Le.default(a);
  }
  return r ? Le.default(r) : t;
}
function ur() {
  for (
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
      t =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "react-datepicker__day--highlighted",
      r = new Map(),
      a = 0,
      n = e.length;
    a < n;
    a++
  ) {
    var o = e[a];
    if (oe.default(o)) {
      var s = Pt(o, "MM.dd.yyyy"),
        i = r.get(s) || [];
      i.includes(t) || (i.push(t), r.set(s, i));
    } else if ("object" === st(o)) {
      var p = Object.keys(o),
        l = p[0],
        c = o[p[0]];
      if ("string" == typeof l && c.constructor === Array)
        for (var u = 0, d = c.length; u < d; u++) {
          var f = Pt(c[u], "MM.dd.yyyy"),
            h = r.get(f) || [];
          h.includes(l) || (h.push(l), r.set(f, h));
        }
    }
  }
  return r;
}
function dr(e, t, r, a, n) {
  for (var o = n.length, s = [], i = 0; i < o; i++) {
    var p = pe.default(le.default(e, ke.default(n[i])), we.default(n[i])),
      l = pe.default(e, (r + 1) * a);
    Ge.default(p, t) && Je.default(p, l) && s.push(n[i]);
  }
  return s;
}
function fr(e) {
  return e < 10 ? "0".concat(e) : "".concat(e);
}
function hr(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12,
    r = Math.ceil(Me.default(e) / t) * t,
    a = r - (t - 1);
  return { startPeriod: a, endPeriod: r };
}
function mr(e, t, r, a) {
  for (var n = [], o = 0; o < 2 * t + 1; o++) {
    var s = e + t - o,
      i = !0;
    r && (i = Me.default(r) <= s),
      a && i && (i = Me.default(a) >= s),
      i && n.push(s);
  }
  return n;
}
var yr = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r(e) {
      var a;
      it(this, r),
        ct(mt((a = t.call(this, e))), "renderOptions", function () {
          var e = a.props.year,
            t = a.state.yearsList.map(function (t) {
              return ae.default.createElement(
                "div",
                {
                  className:
                    e === t
                      ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                      : "react-datepicker__year-option",
                  key: t,
                  onClick: a.onChange.bind(mt(a), t),
                },
                e === t
                  ? ae.default.createElement(
                      "span",
                      { className: "react-datepicker__year-option--selected" },
                      "✓"
                    )
                  : "",
                t
              );
            }),
            r = a.props.minDate ? Me.default(a.props.minDate) : null,
            n = a.props.maxDate ? Me.default(a.props.maxDate) : null;
          return (
            (n &&
              a.state.yearsList.find(function (e) {
                return e === n;
              })) ||
              t.unshift(
                ae.default.createElement(
                  "div",
                  {
                    className: "react-datepicker__year-option",
                    key: "upcoming",
                    onClick: a.incrementYears,
                  },
                  ae.default.createElement("a", {
                    className:
                      "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming",
                  })
                )
              ),
            (r &&
              a.state.yearsList.find(function (e) {
                return e === r;
              })) ||
              t.push(
                ae.default.createElement(
                  "div",
                  {
                    className: "react-datepicker__year-option",
                    key: "previous",
                    onClick: a.decrementYears,
                  },
                  ae.default.createElement("a", {
                    className:
                      "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                  })
                )
              ),
            t
          );
        }),
        ct(mt(a), "onChange", function (e) {
          a.props.onChange(e);
        }),
        ct(mt(a), "handleClickOutside", function () {
          a.props.onCancel();
        }),
        ct(mt(a), "shiftYears", function (e) {
          var t = a.state.yearsList.map(function (t) {
            return t + e;
          });
          a.setState({ yearsList: t });
        }),
        ct(mt(a), "incrementYears", function () {
          return a.shiftYears(1);
        }),
        ct(mt(a), "decrementYears", function () {
          return a.shiftYears(-1);
        });
      var n = e.yearDropdownItemNumber,
        o = e.scrollableYearDropdown,
        s = n || (o ? 10 : 5);
      return (
        (a.state = {
          yearsList: mr(a.props.year, s, a.props.minDate, a.props.maxDate),
        }),
        a
      );
    }
    return (
      lt(r, [
        {
          key: "render",
          value: function () {
            var e = ne.default({
              "react-datepicker__year-dropdown": !0,
              "react-datepicker__year-dropdown--scrollable":
                this.props.scrollableYearDropdown,
            });
            return ae.default.createElement(
              "div",
              { className: e },
              this.renderOptions()
            );
          },
        },
      ]),
      r
    );
  })(),
  vr = rt.default(yr),
  Dr = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r() {
      var e;
      it(this, r);
      for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
        n[o] = arguments[o];
      return (
        ct(mt((e = t.call.apply(t, [this].concat(n)))), "state", {
          dropdownVisible: !1,
        }),
        ct(mt(e), "renderSelectOptions", function () {
          for (
            var t = e.props.minDate ? Me.default(e.props.minDate) : 1900,
              r = e.props.maxDate ? Me.default(e.props.maxDate) : 2100,
              a = [],
              n = t;
            n <= r;
            n++
          )
            a.push(ae.default.createElement("option", { key: n, value: n }, n));
          return a;
        }),
        ct(mt(e), "onSelectChange", function (t) {
          e.onChange(t.target.value);
        }),
        ct(mt(e), "renderSelectMode", function () {
          return ae.default.createElement(
            "select",
            {
              value: e.props.year,
              className: "react-datepicker__year-select",
              onChange: e.onSelectChange,
            },
            e.renderSelectOptions()
          );
        }),
        ct(mt(e), "renderReadView", function (t) {
          return ae.default.createElement(
            "div",
            {
              key: "read",
              style: { visibility: t ? "visible" : "hidden" },
              className: "react-datepicker__year-read-view",
              onClick: function (t) {
                return e.toggleDropdown(t);
              },
            },
            ae.default.createElement("span", {
              className: "react-datepicker__year-read-view--down-arrow",
            }),
            ae.default.createElement(
              "span",
              { className: "react-datepicker__year-read-view--selected-year" },
              e.props.year
            )
          );
        }),
        ct(mt(e), "renderDropdown", function () {
          return ae.default.createElement(vr, {
            key: "dropdown",
            year: e.props.year,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
            minDate: e.props.minDate,
            maxDate: e.props.maxDate,
            scrollableYearDropdown: e.props.scrollableYearDropdown,
            yearDropdownItemNumber: e.props.yearDropdownItemNumber,
          });
        }),
        ct(mt(e), "renderScrollMode", function () {
          var t = e.state.dropdownVisible,
            r = [e.renderReadView(!t)];
          return t && r.unshift(e.renderDropdown()), r;
        }),
        ct(mt(e), "onChange", function (t) {
          e.toggleDropdown(), t !== e.props.year && e.props.onChange(t);
        }),
        ct(mt(e), "toggleDropdown", function (t) {
          e.setState(
            { dropdownVisible: !e.state.dropdownVisible },
            function () {
              e.props.adjustDateOnChange && e.handleYearChange(e.props.date, t);
            }
          );
        }),
        ct(mt(e), "handleYearChange", function (t, r) {
          e.onSelect(t, r), e.setOpen();
        }),
        ct(mt(e), "onSelect", function (t, r) {
          e.props.onSelect && e.props.onSelect(t, r);
        }),
        ct(mt(e), "setOpen", function () {
          e.props.setOpen && e.props.setOpen(!0);
        }),
        e
      );
    }
    return (
      lt(r, [
        {
          key: "render",
          value: function () {
            var e;
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode();
                break;
              case "select":
                e = this.renderSelectMode();
            }
            return ae.default.createElement(
              "div",
              {
                className:
                  "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                    this.props.dropdownMode
                  ),
              },
              e
            );
          },
        },
      ]),
      r
    );
  })(),
  wr = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r() {
      var e;
      it(this, r);
      for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
        n[o] = arguments[o];
      return (
        ct(
          mt((e = t.call.apply(t, [this].concat(n)))),
          "renderOptions",
          function () {
            return e.props.monthNames.map(function (t, r) {
              return ae.default.createElement(
                "div",
                {
                  className:
                    e.props.month === r
                      ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                      : "react-datepicker__month-option",
                  key: t,
                  onClick: e.onChange.bind(mt(e), r),
                },
                e.props.month === r
                  ? ae.default.createElement(
                      "span",
                      { className: "react-datepicker__month-option--selected" },
                      "✓"
                    )
                  : "",
                t
              );
            });
          }
        ),
        ct(mt(e), "onChange", function (t) {
          return e.props.onChange(t);
        }),
        ct(mt(e), "handleClickOutside", function () {
          return e.props.onCancel();
        }),
        e
      );
    }
    return (
      lt(r, [
        {
          key: "render",
          value: function () {
            return ae.default.createElement(
              "div",
              { className: "react-datepicker__month-dropdown" },
              this.renderOptions()
            );
          },
        },
      ]),
      r
    );
  })(),
  kr = rt.default(wr),
  gr = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r() {
      var e;
      it(this, r);
      for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
        n[o] = arguments[o];
      return (
        ct(mt((e = t.call.apply(t, [this].concat(n)))), "state", {
          dropdownVisible: !1,
        }),
        ct(mt(e), "renderSelectOptions", function (e) {
          return e.map(function (e, t) {
            return ae.default.createElement("option", { key: t, value: t }, e);
          });
        }),
        ct(mt(e), "renderSelectMode", function (t) {
          return ae.default.createElement(
            "select",
            {
              value: e.props.month,
              className: "react-datepicker__month-select",
              onChange: function (t) {
                return e.onChange(t.target.value);
              },
            },
            e.renderSelectOptions(t)
          );
        }),
        ct(mt(e), "renderReadView", function (t, r) {
          return ae.default.createElement(
            "div",
            {
              key: "read",
              style: { visibility: t ? "visible" : "hidden" },
              className: "react-datepicker__month-read-view",
              onClick: e.toggleDropdown,
            },
            ae.default.createElement("span", {
              className: "react-datepicker__month-read-view--down-arrow",
            }),
            ae.default.createElement(
              "span",
              {
                className: "react-datepicker__month-read-view--selected-month",
              },
              r[e.props.month]
            )
          );
        }),
        ct(mt(e), "renderDropdown", function (t) {
          return ae.default.createElement(kr, {
            key: "dropdown",
            month: e.props.month,
            monthNames: t,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
          });
        }),
        ct(mt(e), "renderScrollMode", function (t) {
          var r = e.state.dropdownVisible,
            a = [e.renderReadView(!r, t)];
          return r && a.unshift(e.renderDropdown(t)), a;
        }),
        ct(mt(e), "onChange", function (t) {
          e.toggleDropdown(), t !== e.props.month && e.props.onChange(t);
        }),
        ct(mt(e), "toggleDropdown", function () {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      lt(r, [
        {
          key: "render",
          value: function () {
            var e,
              t = this,
              r = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
                this.props.useShortMonthInDropdown
                  ? function (e) {
                      return Vt(e, t.props.locale);
                    }
                  : function (e) {
                      return Qt(e, t.props.locale);
                    }
              );
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode(r);
                break;
              case "select":
                e = this.renderSelectMode(r);
            }
            return ae.default.createElement(
              "div",
              {
                className:
                  "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                    this.props.dropdownMode
                  ),
              },
              e
            );
          },
        },
      ]),
      r
    );
  })();
function br(e, t) {
  for (var r = [], a = Tt(e), n = Tt(t); !Ge.default(a, n); )
    r.push(St(a)), (a = de.default(a, 1));
  return r;
}
var Cr = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r(e) {
      var a;
      return (
        it(this, r),
        ct(mt((a = t.call(this, e))), "renderOptions", function () {
          return a.state.monthYearsList.map(function (e) {
            var t = Pe.default(e),
              r = Rt(a.props.date, e) && At(a.props.date, e);
            return ae.default.createElement(
              "div",
              {
                className: r
                  ? "react-datepicker__month-year-option --selected_month-year"
                  : "react-datepicker__month-year-option",
                key: t,
                onClick: a.onChange.bind(mt(a), t),
              },
              r
                ? ae.default.createElement(
                    "span",
                    {
                      className:
                        "react-datepicker__month-year-option--selected",
                    },
                    "✓"
                  )
                : "",
              Pt(e, a.props.dateFormat, a.props.locale)
            );
          });
        }),
        ct(mt(a), "onChange", function (e) {
          return a.props.onChange(e);
        }),
        ct(mt(a), "handleClickOutside", function () {
          a.props.onCancel();
        }),
        (a.state = { monthYearsList: br(a.props.minDate, a.props.maxDate) }),
        a
      );
    }
    return (
      lt(r, [
        {
          key: "render",
          value: function () {
            var e = ne.default({
              "react-datepicker__month-year-dropdown": !0,
              "react-datepicker__month-year-dropdown--scrollable":
                this.props.scrollableMonthYearDropdown,
            });
            return ae.default.createElement(
              "div",
              { className: e },
              this.renderOptions()
            );
          },
        },
      ]),
      r
    );
  })(),
  Sr = rt.default(Cr),
  _r = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r() {
      var e;
      it(this, r);
      for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
        n[o] = arguments[o];
      return (
        ct(mt((e = t.call.apply(t, [this].concat(n)))), "state", {
          dropdownVisible: !1,
        }),
        ct(mt(e), "renderSelectOptions", function () {
          for (
            var t = Tt(e.props.minDate), r = Tt(e.props.maxDate), a = [];
            !Ge.default(t, r);

          ) {
            var n = Pe.default(t);
            a.push(
              ae.default.createElement(
                "option",
                { key: n, value: n },
                Pt(t, e.props.dateFormat, e.props.locale)
              )
            ),
              (t = de.default(t, 1));
          }
          return a;
        }),
        ct(mt(e), "onSelectChange", function (t) {
          e.onChange(t.target.value);
        }),
        ct(mt(e), "renderSelectMode", function () {
          return ae.default.createElement(
            "select",
            {
              value: Pe.default(Tt(e.props.date)),
              className: "react-datepicker__month-year-select",
              onChange: e.onSelectChange,
            },
            e.renderSelectOptions()
          );
        }),
        ct(mt(e), "renderReadView", function (t) {
          var r = Pt(e.props.date, e.props.dateFormat, e.props.locale);
          return ae.default.createElement(
            "div",
            {
              key: "read",
              style: { visibility: t ? "visible" : "hidden" },
              className: "react-datepicker__month-year-read-view",
              onClick: function (t) {
                return e.toggleDropdown(t);
              },
            },
            ae.default.createElement("span", {
              className: "react-datepicker__month-year-read-view--down-arrow",
            }),
            ae.default.createElement(
              "span",
              {
                className:
                  "react-datepicker__month-year-read-view--selected-month-year",
              },
              r
            )
          );
        }),
        ct(mt(e), "renderDropdown", function () {
          return ae.default.createElement(Sr, {
            key: "dropdown",
            date: e.props.date,
            dateFormat: e.props.dateFormat,
            onChange: e.onChange,
            onCancel: e.toggleDropdown,
            minDate: e.props.minDate,
            maxDate: e.props.maxDate,
            scrollableMonthYearDropdown: e.props.scrollableMonthYearDropdown,
            locale: e.props.locale,
          });
        }),
        ct(mt(e), "renderScrollMode", function () {
          var t = e.state.dropdownVisible,
            r = [e.renderReadView(!t)];
          return t && r.unshift(e.renderDropdown()), r;
        }),
        ct(mt(e), "onChange", function (t) {
          e.toggleDropdown();
          var r = St(parseInt(t));
          (Rt(e.props.date, r) && At(e.props.date, r)) || e.props.onChange(r);
        }),
        ct(mt(e), "toggleDropdown", function () {
          return e.setState({ dropdownVisible: !e.state.dropdownVisible });
        }),
        e
      );
    }
    return (
      lt(r, [
        {
          key: "render",
          value: function () {
            var e;
            switch (this.props.dropdownMode) {
              case "scroll":
                e = this.renderScrollMode();
                break;
              case "select":
                e = this.renderSelectMode();
            }
            return ae.default.createElement(
              "div",
              {
                className:
                  "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                    this.props.dropdownMode
                  ),
              },
              e
            );
          },
        },
      ]),
      r
    );
  })(),
  Mr = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r() {
      var e;
      it(this, r);
      for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
        n[o] = arguments[o];
      return (
        ct(
          mt((e = t.call.apply(t, [this].concat(n)))),
          "dayEl",
          ae.default.createRef()
        ),
        ct(mt(e), "handleClick", function (t) {
          !e.isDisabled() && e.props.onClick && e.props.onClick(t);
        }),
        ct(mt(e), "handleMouseEnter", function (t) {
          !e.isDisabled() && e.props.onMouseEnter && e.props.onMouseEnter(t);
        }),
        ct(mt(e), "handleOnKeyDown", function (t) {
          " " === t.key && (t.preventDefault(), (t.key = "Enter")),
            e.props.handleOnKeyDown(t);
        }),
        ct(mt(e), "isSameDay", function (t) {
          return Kt(e.props.day, t);
        }),
        ct(mt(e), "isKeyboardSelected", function () {
          return (
            !e.props.disabledKeyboardNavigation &&
            !e.isSameDay(e.props.selected) &&
            e.isSameDay(e.props.preSelection)
          );
        }),
        ct(mt(e), "isDisabled", function () {
          return $t(e.props.day, e.props);
        }),
        ct(mt(e), "isExcluded", function () {
          return zt(e.props.day, e.props);
        }),
        ct(mt(e), "getHighLightedClass", function (t) {
          var r = e.props,
            a = r.day,
            n = r.highlightDates;
          if (!n) return !1;
          var o = Pt(a, "MM.dd.yyyy");
          return n.get(o);
        }),
        ct(mt(e), "isInRange", function () {
          var t = e.props,
            r = t.day,
            a = t.startDate,
            n = t.endDate;
          return !(!a || !n) && Wt(r, a, n);
        }),
        ct(mt(e), "isInSelectingRange", function () {
          var t,
            r = e.props,
            a = r.day,
            n = r.selectsStart,
            o = r.selectsEnd,
            s = r.selectsRange,
            i = r.startDate,
            p = r.endDate,
            l =
              null !== (t = e.props.selectingDate) && void 0 !== t
                ? t
                : e.props.preSelection;
          return (
            !(!(n || o || s) || !l || e.isDisabled()) &&
            (n && p && (Je.default(l, p) || Bt(l, p))
              ? Wt(a, l, p)
              : ((o && i && (Ge.default(l, i) || Bt(l, i))) ||
                  !(!s || !i || p || (!Ge.default(l, i) && !Bt(l, i)))) &&
                Wt(a, i, l))
          );
        }),
        ct(mt(e), "isSelectingRangeStart", function () {
          var t;
          if (!e.isInSelectingRange()) return !1;
          var r = e.props,
            a = r.day,
            n = r.startDate,
            o = r.selectsStart,
            s =
              null !== (t = e.props.selectingDate) && void 0 !== t
                ? t
                : e.props.preSelection;
          return Kt(a, o ? s : n);
        }),
        ct(mt(e), "isSelectingRangeEnd", function () {
          var t;
          if (!e.isInSelectingRange()) return !1;
          var r = e.props,
            a = r.day,
            n = r.endDate,
            o = r.selectsEnd,
            s =
              null !== (t = e.props.selectingDate) && void 0 !== t
                ? t
                : e.props.preSelection;
          return Kt(a, o ? s : n);
        }),
        ct(mt(e), "isRangeStart", function () {
          var t = e.props,
            r = t.day,
            a = t.startDate,
            n = t.endDate;
          return !(!a || !n) && Kt(a, r);
        }),
        ct(mt(e), "isRangeEnd", function () {
          var t = e.props,
            r = t.day,
            a = t.startDate,
            n = t.endDate;
          return !(!a || !n) && Kt(n, r);
        }),
        ct(mt(e), "isWeekend", function () {
          var t = ge.default(e.props.day);
          return 0 === t || 6 === t;
        }),
        ct(mt(e), "isOutsideMonth", function () {
          return (
            void 0 !== e.props.month &&
            e.props.month !== Se.default(e.props.day)
          );
        }),
        ct(mt(e), "getClassNames", function (t) {
          var r = e.props.dayClassName ? e.props.dayClassName(t) : void 0;
          return ne.default(
            "react-datepicker__day",
            r,
            "react-datepicker__day--" + Ot(e.props.day),
            {
              "react-datepicker__day--disabled": e.isDisabled(),
              "react-datepicker__day--excluded": e.isExcluded(),
              "react-datepicker__day--selected": e.isSameDay(e.props.selected),
              "react-datepicker__day--keyboard-selected":
                e.isKeyboardSelected(),
              "react-datepicker__day--range-start": e.isRangeStart(),
              "react-datepicker__day--range-end": e.isRangeEnd(),
              "react-datepicker__day--in-range": e.isInRange(),
              "react-datepicker__day--in-selecting-range":
                e.isInSelectingRange(),
              "react-datepicker__day--selecting-range-start":
                e.isSelectingRangeStart(),
              "react-datepicker__day--selecting-range-end":
                e.isSelectingRangeEnd(),
              "react-datepicker__day--today": e.isSameDay(St()),
              "react-datepicker__day--weekend": e.isWeekend(),
              "react-datepicker__day--outside-month": e.isOutsideMonth(),
            },
            e.getHighLightedClass("react-datepicker__day--highlighted")
          );
        }),
        ct(mt(e), "getAriaLabel", function () {
          var t = e.props,
            r = t.day,
            a = t.ariaLabelPrefixWhenEnabled,
            n = void 0 === a ? "Choose" : a,
            o = t.ariaLabelPrefixWhenDisabled,
            s = void 0 === o ? "Not available" : o,
            i = e.isDisabled() || e.isExcluded() ? s : n;
          return "".concat(i, " ").concat(Pt(r, "PPPP", e.props.locale));
        }),
        ct(mt(e), "getTabIndex", function (t, r) {
          var a = t || e.props.selected,
            n = r || e.props.preSelection;
          return e.isKeyboardSelected() || (e.isSameDay(a) && Kt(n, a))
            ? 0
            : -1;
        }),
        ct(mt(e), "handleFocusDay", function () {
          var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = !1;
          0 === e.getTabIndex() &&
            !t.isInputFocused &&
            e.isSameDay(e.props.preSelection) &&
            ((document.activeElement &&
              document.activeElement !== document.body) ||
              (r = !0),
            e.props.inline && !e.props.shouldFocusDayInline && (r = !1),
            e.props.containerRef &&
              e.props.containerRef.current &&
              e.props.containerRef.current.contains(document.activeElement) &&
              document.activeElement.classList.contains(
                "react-datepicker__day"
              ) &&
              (r = !0)),
            r && e.dayEl.current.focus({ preventScroll: !0 });
        }),
        ct(mt(e), "renderDayContents", function () {
          if (e.isOutsideMonth()) {
            if (
              e.props.monthShowsDuplicateDaysEnd &&
              be.default(e.props.day) < 10
            )
              return null;
            if (
              e.props.monthShowsDuplicateDaysStart &&
              be.default(e.props.day) > 20
            )
              return null;
          }
          return e.props.renderDayContents
            ? e.props.renderDayContents(be.default(e.props.day), e.props.day)
            : be.default(e.props.day);
        }),
        ct(mt(e), "render", function () {
          return ae.default.createElement(
            "div",
            {
              ref: e.dayEl,
              className: e.getClassNames(e.props.day),
              onKeyDown: e.handleOnKeyDown,
              onClick: e.handleClick,
              onMouseEnter: e.handleMouseEnter,
              tabIndex: e.getTabIndex(),
              "aria-label": e.getAriaLabel(),
              role: "button",
              "aria-disabled": e.isDisabled(),
            },
            e.renderDayContents()
          );
        }),
        e
      );
    }
    return (
      lt(r, [
        {
          key: "componentDidMount",
          value: function () {
            this.handleFocusDay();
          },
        },
        {
          key: "componentDidUpdate",
          value: function (e) {
            this.handleFocusDay(e);
          },
        },
      ]),
      r
    );
  })(),
  Pr = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r() {
      var e;
      it(this, r);
      for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
        n[o] = arguments[o];
      return (
        ct(
          mt((e = t.call.apply(t, [this].concat(n)))),
          "handleClick",
          function (t) {
            e.props.onClick && e.props.onClick(t);
          }
        ),
        e
      );
    }
    return (
      lt(r, [
        {
          key: "render",
          value: function () {
            var e = this.props,
              t = e.weekNumber,
              r = e.ariaLabelPrefix,
              a = void 0 === r ? "week " : r,
              n = {
                "react-datepicker__week-number": !0,
                "react-datepicker__week-number--clickable": !!e.onClick,
              };
            return ae.default.createElement(
              "div",
              {
                className: ne.default(n),
                "aria-label": "".concat(a, " ").concat(this.props.weekNumber),
                onClick: this.handleClick,
              },
              t
            );
          },
        },
      ]),
      r
    );
  })(),
  Er = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r() {
      var e;
      it(this, r);
      for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
        n[o] = arguments[o];
      return (
        ct(
          mt((e = t.call.apply(t, [this].concat(n)))),
          "handleDayClick",
          function (t, r) {
            e.props.onDayClick && e.props.onDayClick(t, r);
          }
        ),
        ct(mt(e), "handleDayMouseEnter", function (t) {
          e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
        }),
        ct(mt(e), "handleWeekClick", function (t, r, a) {
          "function" == typeof e.props.onWeekSelect &&
            e.props.onWeekSelect(t, r, a),
            e.props.shouldCloseOnSelect && e.props.setOpen(!1);
        }),
        ct(mt(e), "formatWeekNumber", function (t) {
          return e.props.formatWeekNumber ? e.props.formatWeekNumber(t) : xt(t);
        }),
        ct(mt(e), "renderDays", function () {
          var t = It(e.props.day, e.props.locale, e.props.calendarStartDay),
            r = [],
            a = e.formatWeekNumber(t);
          if (e.props.showWeekNumber) {
            var n = e.props.onWeekSelect
              ? e.handleWeekClick.bind(mt(e), t, a)
              : void 0;
            r.push(
              ae.default.createElement(Pr, {
                key: "W",
                weekNumber: a,
                onClick: n,
                ariaLabelPrefix: e.props.ariaLabelPrefix,
              })
            );
          }
          return r.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function (r) {
              var a = ce.default(t, r);
              return ae.default.createElement(Mr, {
                ariaLabelPrefixWhenEnabled: e.props.chooseDayAriaLabelPrefix,
                ariaLabelPrefixWhenDisabled: e.props.disabledDayAriaLabelPrefix,
                key: a.valueOf(),
                day: a,
                month: e.props.month,
                onClick: e.handleDayClick.bind(mt(e), a),
                onMouseEnter: e.handleDayMouseEnter.bind(mt(e), a),
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                excludeDates: e.props.excludeDates,
                excludeDateIntervals: e.props.excludeDateIntervals,
                includeDates: e.props.includeDates,
                includeDateIntervals: e.props.includeDateIntervals,
                highlightDates: e.props.highlightDates,
                selectingDate: e.props.selectingDate,
                filterDate: e.props.filterDate,
                preSelection: e.props.preSelection,
                selected: e.props.selected,
                selectsStart: e.props.selectsStart,
                selectsEnd: e.props.selectsEnd,
                selectsRange: e.props.selectsRange,
                startDate: e.props.startDate,
                endDate: e.props.endDate,
                dayClassName: e.props.dayClassName,
                renderDayContents: e.props.renderDayContents,
                disabledKeyboardNavigation: e.props.disabledKeyboardNavigation,
                handleOnKeyDown: e.props.handleOnKeyDown,
                isInputFocused: e.props.isInputFocused,
                containerRef: e.props.containerRef,
                inline: e.props.inline,
                shouldFocusDayInline: e.props.shouldFocusDayInline,
                monthShowsDuplicateDaysEnd: e.props.monthShowsDuplicateDaysEnd,
                monthShowsDuplicateDaysStart:
                  e.props.monthShowsDuplicateDaysStart,
                locale: e.props.locale,
              });
            })
          );
        }),
        e
      );
    }
    return (
      lt(
        r,
        [
          {
            key: "render",
            value: function () {
              return ae.default.createElement(
                "div",
                { className: "react-datepicker__week" },
                this.renderDays()
              );
            },
          },
        ],
        [
          {
            key: "defaultProps",
            get: function () {
              return { shouldCloseOnSelect: !0 };
            },
          },
        ]
      ),
      r
    );
  })(),
  Nr = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r() {
      var e;
      it(this, r);
      for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
        n[o] = arguments[o];
      return (
        ct(
          mt((e = t.call.apply(t, [this].concat(n)))),
          "MONTH_REFS",
          Dt(Array(12)).map(function () {
            return ae.default.createRef();
          })
        ),
        ct(mt(e), "isDisabled", function (t) {
          return $t(t, e.props);
        }),
        ct(mt(e), "isExcluded", function (t) {
          return zt(t, e.props);
        }),
        ct(mt(e), "handleDayClick", function (t, r) {
          e.props.onDayClick &&
            e.props.onDayClick(t, r, e.props.orderInDisplay);
        }),
        ct(mt(e), "handleDayMouseEnter", function (t) {
          e.props.onDayMouseEnter && e.props.onDayMouseEnter(t);
        }),
        ct(mt(e), "handleMouseLeave", function () {
          e.props.onMouseLeave && e.props.onMouseLeave();
        }),
        ct(mt(e), "isRangeStartMonth", function (t) {
          var r = e.props,
            a = r.day,
            n = r.startDate,
            o = r.endDate;
          return !(!n || !o) && At(Oe.default(a, t), n);
        }),
        ct(mt(e), "isRangeStartQuarter", function (t) {
          var r = e.props,
            a = r.day,
            n = r.startDate,
            o = r.endDate;
          return !(!n || !o) && qt(Ye.default(a, t), n);
        }),
        ct(mt(e), "isRangeEndMonth", function (t) {
          var r = e.props,
            a = r.day,
            n = r.startDate,
            o = r.endDate;
          return !(!n || !o) && At(Oe.default(a, t), o);
        }),
        ct(mt(e), "isRangeEndQuarter", function (t) {
          var r = e.props,
            a = r.day,
            n = r.startDate,
            o = r.endDate;
          return !(!n || !o) && qt(Ye.default(a, t), o);
        }),
        ct(mt(e), "isWeekInMonth", function (t) {
          var r = e.props.day,
            a = ce.default(t, 6);
          return At(t, r) || At(a, r);
        }),
        ct(mt(e), "renderWeeks", function () {
          for (
            var t = [],
              r = e.props.fixedHeight,
              a = 0,
              n = !1,
              o = It(Tt(e.props.day), e.props.locale, e.props.calendarStartDay);
            t.push(
              ae.default.createElement(Er, {
                ariaLabelPrefix: e.props.weekAriaLabelPrefix,
                chooseDayAriaLabelPrefix: e.props.chooseDayAriaLabelPrefix,
                disabledDayAriaLabelPrefix: e.props.disabledDayAriaLabelPrefix,
                key: a,
                day: o,
                month: Se.default(e.props.day),
                onDayClick: e.handleDayClick,
                onDayMouseEnter: e.handleDayMouseEnter,
                onWeekSelect: e.props.onWeekSelect,
                formatWeekNumber: e.props.formatWeekNumber,
                locale: e.props.locale,
                minDate: e.props.minDate,
                maxDate: e.props.maxDate,
                excludeDates: e.props.excludeDates,
                excludeDateIntervals: e.props.excludeDateIntervals,
                includeDates: e.props.includeDates,
                includeDateIntervals: e.props.includeDateIntervals,
                inline: e.props.inline,
                shouldFocusDayInline: e.props.shouldFocusDayInline,
                highlightDates: e.props.highlightDates,
                selectingDate: e.props.selectingDate,
                filterDate: e.props.filterDate,
                preSelection: e.props.preSelection,
                selected: e.props.selected,
                selectsStart: e.props.selectsStart,
                selectsEnd: e.props.selectsEnd,
                selectsRange: e.props.selectsRange,
                showWeekNumber: e.props.showWeekNumbers,
                startDate: e.props.startDate,
                endDate: e.props.endDate,
                dayClassName: e.props.dayClassName,
                setOpen: e.props.setOpen,
                shouldCloseOnSelect: e.props.shouldCloseOnSelect,
                disabledKeyboardNavigation: e.props.disabledKeyboardNavigation,
                renderDayContents: e.props.renderDayContents,
                handleOnKeyDown: e.props.handleOnKeyDown,
                isInputFocused: e.props.isInputFocused,
                containerRef: e.props.containerRef,
                calendarStartDay: e.props.calendarStartDay,
                monthShowsDuplicateDaysEnd: e.props.monthShowsDuplicateDaysEnd,
                monthShowsDuplicateDaysStart:
                  e.props.monthShowsDuplicateDaysStart,
              })
            ),
              !n;

          ) {
            a++, (o = ue.default(o, 1));
            var s = r && a >= 6,
              i = !r && !e.isWeekInMonth(o);
            if (s || i) {
              if (!e.props.peekNextMonth) break;
              n = !0;
            }
          }
          return t;
        }),
        ct(mt(e), "onMonthClick", function (t, r) {
          e.handleDayClick(Tt(Oe.default(e.props.day, r)), t);
        }),
        ct(mt(e), "handleMonthNavigation", function (t, r) {
          e.isDisabled(r) ||
            e.isExcluded(r) ||
            (e.props.setPreSelection(r),
            e.MONTH_REFS[t].current && e.MONTH_REFS[t].current.focus());
        }),
        ct(mt(e), "onMonthKeyDown", function (t, r) {
          var a = t.key;
          if (!e.props.disabledKeyboardNavigation)
            switch (a) {
              case "Enter":
                e.onMonthClick(t, r), e.props.setPreSelection(e.props.selected);
                break;
              case "ArrowRight":
                e.handleMonthNavigation(
                  11 === r ? 0 : r + 1,
                  de.default(e.props.preSelection, 1)
                );
                break;
              case "ArrowLeft":
                e.handleMonthNavigation(
                  0 === r ? 11 : r - 1,
                  ye.default(e.props.preSelection, 1)
                );
            }
        }),
        ct(mt(e), "onQuarterClick", function (t, r) {
          e.handleDayClick(Ft(Ye.default(e.props.day, r)), t);
        }),
        ct(mt(e), "getMonthClassNames", function (t) {
          var r = e.props,
            a = r.day,
            n = r.startDate,
            o = r.endDate,
            s = r.selected,
            i = r.minDate,
            p = r.maxDate,
            l = r.preSelection,
            c = r.monthClassName,
            u = c ? c(a) : void 0;
          return ne.default(
            "react-datepicker__month-text",
            "react-datepicker__month-".concat(t),
            u,
            {
              "react-datepicker__month--disabled":
                (i || p) && Gt(Oe.default(a, t), e.props),
              "react-datepicker__month--selected":
                Se.default(a) === t && Me.default(a) === Me.default(s),
              "react-datepicker__month-text--keyboard-selected":
                Se.default(l) === t,
              "react-datepicker__month--in-range": Jt(n, o, t, a),
              "react-datepicker__month--range-start": e.isRangeStartMonth(t),
              "react-datepicker__month--range-end": e.isRangeEndMonth(t),
            }
          );
        }),
        ct(mt(e), "getTabIndex", function (t) {
          var r = Se.default(e.props.preSelection);
          return e.props.disabledKeyboardNavigation || t !== r ? "-1" : "0";
        }),
        ct(mt(e), "getAriaLabel", function (t) {
          var r = e.props,
            a = r.ariaLabelPrefix,
            n = void 0 === a ? "Choose" : a,
            o = r.disabledDayAriaLabelPrefix,
            s = void 0 === o ? "Not available" : o,
            i = r.day,
            p = Oe.default(i, t),
            l = e.isDisabled(p) || e.isExcluded(p) ? s : n;
          return "".concat(l, " ").concat(Pt(p, "MMMM yyyy"));
        }),
        ct(mt(e), "getQuarterClassNames", function (t) {
          var r = e.props,
            a = r.day,
            n = r.startDate,
            o = r.endDate,
            s = r.selected,
            i = r.minDate,
            p = r.maxDate;
          return ne.default(
            "react-datepicker__quarter-text",
            "react-datepicker__quarter-".concat(t),
            {
              "react-datepicker__quarter--disabled":
                (i || p) && Xt(Ye.default(a, t), e.props),
              "react-datepicker__quarter--selected":
                _e.default(a) === t && Me.default(a) === Me.default(s),
              "react-datepicker__quarter--in-range": er(n, o, t, a),
              "react-datepicker__quarter--range-start":
                e.isRangeStartQuarter(t),
              "react-datepicker__quarter--range-end": e.isRangeEndQuarter(t),
            }
          );
        }),
        ct(mt(e), "renderMonths", function () {
          var t = e.props,
            r = t.showFullMonthYearPicker,
            a = t.showTwoColumnMonthYearPicker,
            n = t.showFourColumnMonthYearPicker,
            o = t.locale;
          return (
            n
              ? [
                  [0, 1, 2, 3],
                  [4, 5, 6, 7],
                  [8, 9, 10, 11],
                ]
              : a
              ? [
                  [0, 1],
                  [2, 3],
                  [4, 5],
                  [6, 7],
                  [8, 9],
                  [10, 11],
                ]
              : [
                  [0, 1, 2],
                  [3, 4, 5],
                  [6, 7, 8],
                  [9, 10, 11],
                ]
          ).map(function (t, a) {
            return ae.default.createElement(
              "div",
              { className: "react-datepicker__month-wrapper", key: a },
              t.map(function (t, a) {
                return ae.default.createElement(
                  "div",
                  {
                    ref: e.MONTH_REFS[t],
                    key: a,
                    onClick: function (r) {
                      e.onMonthClick(r, t);
                    },
                    onKeyDown: function (r) {
                      e.onMonthKeyDown(r, t);
                    },
                    tabIndex: e.getTabIndex(t),
                    className: e.getMonthClassNames(t),
                    role: "button",
                    "aria-label": e.getAriaLabel(t),
                  },
                  r ? Qt(t, o) : Vt(t, o)
                );
              })
            );
          });
        }),
        ct(mt(e), "renderQuarters", function () {
          return ae.default.createElement(
            "div",
            { className: "react-datepicker__quarter-wrapper" },
            [1, 2, 3, 4].map(function (t, r) {
              return ae.default.createElement(
                "div",
                {
                  key: r,
                  onClick: function (r) {
                    e.onQuarterClick(r, t);
                  },
                  className: e.getQuarterClassNames(t),
                },
                Ut(t, e.props.locale)
              );
            })
          );
        }),
        ct(mt(e), "getClassNames", function () {
          var t = e.props;
          t.day;
          var r = t.selectingDate,
            a = t.selectsStart,
            n = t.selectsEnd,
            o = t.showMonthYearPicker,
            s = t.showQuarterYearPicker;
          return ne.default(
            "react-datepicker__month",
            { "react-datepicker__month--selecting-range": r && (a || n) },
            { "react-datepicker__monthPicker": o },
            { "react-datepicker__quarterPicker": s }
          );
        }),
        e
      );
    }
    return (
      lt(r, [
        {
          key: "render",
          value: function () {
            var e = this.props,
              t = e.showMonthYearPicker,
              r = e.showQuarterYearPicker,
              a = e.day,
              n = e.ariaLabelPrefix,
              o = void 0 === n ? "month " : n;
            return ae.default.createElement(
              "div",
              {
                className: this.getClassNames(),
                onMouseLeave: this.handleMouseLeave,
                "aria-label": "".concat(o, " ").concat(Pt(a, "yyyy-MM")),
              },
              t
                ? this.renderMonths()
                : r
                ? this.renderQuarters()
                : this.renderWeeks()
            );
          },
        },
      ]),
      r
    );
  })(),
  xr = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r() {
      var e;
      it(this, r);
      for (var a = arguments.length, n = new Array(a), o = 0; o < a; o++)
        n[o] = arguments[o];
      return (
        ct(mt((e = t.call.apply(t, [this].concat(n)))), "state", {
          height: null,
        }),
        ct(mt(e), "handleClick", function (t) {
          ((e.props.minTime || e.props.maxTime) && nr(t, e.props)) ||
            ((e.props.excludeTimes ||
              e.props.includeTimes ||
              e.props.filterTime) &&
              ar(t, e.props)) ||
            e.props.onChange(t);
        }),
        ct(mt(e), "liClasses", function (t, r, a) {
          var n = [
            "react-datepicker__time-list-item",
            e.props.timeClassName ? e.props.timeClassName(t, r, a) : void 0,
          ];
          return (
            e.props.selected &&
              r === ke.default(t) &&
              a === we.default(t) &&
              n.push("react-datepicker__time-list-item--selected"),
            (((e.props.minTime || e.props.maxTime) && nr(t, e.props)) ||
              ((e.props.excludeTimes ||
                e.props.includeTimes ||
                e.props.filterTime) &&
                ar(t, e.props))) &&
              n.push("react-datepicker__time-list-item--disabled"),
            e.props.injectTimes &&
              (60 * ke.default(t) + we.default(t)) % e.props.intervals != 0 &&
              n.push("react-datepicker__time-list-item--injected"),
            n.join(" ")
          );
        }),
        ct(mt(e), "handleOnKeyDown", function (t, r) {
          " " === t.key && (t.preventDefault(), (t.key = "Enter")),
            "Enter" === t.key && e.handleClick(r),
            e.props.handleOnKeyDown(t);
        }),
        ct(mt(e), "renderTimes", function () {
          for (
            var t = [],
              r = e.props.format ? e.props.format : "p",
              a = e.props.intervals,
              n = Yt(St(e.props.selected)),
              o = 1440 / a,
              s =
                e.props.injectTimes &&
                e.props.injectTimes.sort(function (e, t) {
                  return e - t;
                }),
              i = e.props.selected || e.props.openToDate || St(),
              p = ke.default(i),
              l = we.default(i),
              c = xe.default(Ne.default(n, l), p),
              u = 0;
            u < o;
            u++
          ) {
            var d = pe.default(n, u * a);
            if ((t.push(d), s)) {
              var f = dr(n, d, u, a, s);
              t = t.concat(f);
            }
          }
          return t.map(function (t, a) {
            return ae.default.createElement(
              "li",
              {
                key: a,
                onClick: e.handleClick.bind(mt(e), t),
                className: e.liClasses(t, p, l),
                ref: function (r) {
                  (Je.default(t, c) || Bt(t, c)) && (e.centerLi = r);
                },
                onKeyDown: function (r) {
                  e.handleOnKeyDown(r, t);
                },
                tabIndex: "0",
              },
              Pt(t, r, e.props.locale)
            );
          });
        }),
        e
      );
    }
    return (
      lt(
        r,
        [
          {
            key: "componentDidMount",
            value: function () {
              (this.list.scrollTop = r.calcCenterPosition(
                this.props.monthRef
                  ? this.props.monthRef.clientHeight - this.header.clientHeight
                  : this.list.clientHeight,
                this.centerLi
              )),
                this.props.monthRef &&
                  this.header &&
                  this.setState({
                    height:
                      this.props.monthRef.clientHeight -
                      this.header.clientHeight,
                  });
            },
          },
          {
            key: "render",
            value: function () {
              var e = this,
                t = this.state.height;
              return ae.default.createElement(
                "div",
                {
                  className: "react-datepicker__time-container ".concat(
                    this.props.todayButton
                      ? "react-datepicker__time-container--with-today-button"
                      : ""
                  ),
                },
                ae.default.createElement(
                  "div",
                  {
                    className:
                      "react-datepicker__header react-datepicker__header--time ".concat(
                        this.props.showTimeSelectOnly
                          ? "react-datepicker__header--time--only"
                          : ""
                      ),
                    ref: function (t) {
                      e.header = t;
                    },
                  },
                  ae.default.createElement(
                    "div",
                    { className: "react-datepicker-time__header" },
                    this.props.timeCaption
                  )
                ),
                ae.default.createElement(
                  "div",
                  { className: "react-datepicker__time" },
                  ae.default.createElement(
                    "div",
                    { className: "react-datepicker__time-box" },
                    ae.default.createElement(
                      "ul",
                      {
                        className: "react-datepicker__time-list",
                        ref: function (t) {
                          e.list = t;
                        },
                        style: t ? { height: t } : {},
                        tabIndex: "0",
                      },
                      this.renderTimes()
                    )
                  )
                )
              );
            },
          },
        ],
        [
          {
            key: "defaultProps",
            get: function () {
              return {
                intervals: 30,
                onTimeChange: function () {},
                todayButton: null,
                timeCaption: "Time",
              };
            },
          },
        ]
      ),
      r
    );
  })();
ct(xr, "calcCenterPosition", function (e, t) {
  return t.offsetTop - (e / 2 - t.clientHeight / 2);
});
var Or = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r(e) {
      var a;
      return (
        it(this, r),
        ct(
          mt((a = t.call(this, e))),
          "YEAR_REFS",
          Dt(Array(a.props.yearItemNumber)).map(function () {
            return ae.default.createRef();
          })
        ),
        ct(mt(a), "isDisabled", function (e) {
          return $t(e, a.props);
        }),
        ct(mt(a), "isExcluded", function (e) {
          return zt(e, a.props);
        }),
        ct(mt(a), "updateFocusOnPaginate", function (e) {
          var t = function () {
            this.YEAR_REFS[e].current.focus();
          }.bind(mt(a));
          window.requestAnimationFrame(t);
        }),
        ct(mt(a), "handleYearClick", function (e, t) {
          a.props.onDayClick && a.props.onDayClick(e, t);
        }),
        ct(mt(a), "handleYearNavigation", function (e, t) {
          var r = a.props,
            n = r.date,
            o = r.yearItemNumber,
            s = hr(n, o).startPeriod;
          a.isDisabled(t) ||
            a.isExcluded(t) ||
            (a.props.setPreSelection(t),
            e - s == -1
              ? a.updateFocusOnPaginate(o - 1)
              : e - s === o
              ? a.updateFocusOnPaginate(0)
              : a.YEAR_REFS[e - s].current.focus());
        }),
        ct(mt(a), "isSameDay", function (e, t) {
          return Kt(e, t);
        }),
        ct(mt(a), "isKeyboardSelected", function (e) {
          var t = Lt(Ie.default(a.props.date, e));
          return (
            !a.props.disabledKeyboardNavigation &&
            !a.props.inline &&
            !Kt(t, Lt(a.props.selected)) &&
            Kt(t, Lt(a.props.preSelection))
          );
        }),
        ct(mt(a), "onYearClick", function (e, t) {
          var r = a.props.date;
          a.handleYearClick(Lt(Ie.default(r, t)), e);
        }),
        ct(mt(a), "onYearKeyDown", function (e, t) {
          var r = e.key;
          if (!a.props.disabledKeyboardNavigation)
            switch (r) {
              case "Enter":
                a.onYearClick(e, t), a.props.setPreSelection(a.props.selected);
                break;
              case "ArrowRight":
                a.handleYearNavigation(
                  t + 1,
                  fe.default(a.props.preSelection, 1)
                );
                break;
              case "ArrowLeft":
                a.handleYearNavigation(
                  t - 1,
                  ve.default(a.props.preSelection, 1)
                );
            }
        }),
        ct(mt(a), "getYearClassNames", function (e) {
          var t = a.props,
            r = t.minDate,
            n = t.maxDate,
            o = t.selected;
          return ne.default("react-datepicker__year-text", {
            "react-datepicker__year-text--selected": e === Me.default(o),
            "react-datepicker__year-text--disabled": (r || n) && Zt(e, a.props),
            "react-datepicker__year-text--keyboard-selected":
              a.isKeyboardSelected(e),
            "react-datepicker__year-text--today": e === Me.default(St()),
          });
        }),
        ct(mt(a), "getYearTabIndex", function (e) {
          return a.props.disabledKeyboardNavigation
            ? "-1"
            : e === Me.default(a.props.preSelection)
            ? "0"
            : "-1";
        }),
        a
      );
    }
    return (
      lt(r, [
        {
          key: "render",
          value: function () {
            for (
              var e = this,
                t = [],
                r = this.props,
                a = hr(r.date, r.yearItemNumber),
                n = a.startPeriod,
                o = a.endPeriod,
                s = function (r) {
                  t.push(
                    ae.default.createElement(
                      "div",
                      {
                        ref: e.YEAR_REFS[r - n],
                        onClick: function (t) {
                          e.onYearClick(t, r);
                        },
                        onKeyDown: function (t) {
                          e.onYearKeyDown(t, r);
                        },
                        tabIndex: e.getYearTabIndex(r),
                        className: e.getYearClassNames(r),
                        key: r,
                      },
                      r
                    )
                  );
                },
                i = n;
              i <= o;
              i++
            )
              s(i);
            return ae.default.createElement(
              "div",
              { className: "react-datepicker__year" },
              ae.default.createElement(
                "div",
                { className: "react-datepicker__year-wrapper" },
                t
              )
            );
          },
        },
      ]),
      r
    );
  })(),
  Yr = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r(e) {
      var a;
      return (
        it(this, r),
        ct(mt((a = t.call(this, e))), "onTimeChange", function (e) {
          a.setState({ time: e });
          var t = new Date();
          t.setHours(e.split(":")[0]),
            t.setMinutes(e.split(":")[1]),
            a.props.onChange(t);
        }),
        ct(mt(a), "renderTimeInput", function () {
          var e = a.state.time,
            t = a.props,
            r = t.date,
            n = t.timeString,
            o = t.customTimeInput;
          return o
            ? ae.default.cloneElement(o, {
                date: r,
                value: e,
                onChange: a.onTimeChange,
              })
            : ae.default.createElement("input", {
                type: "time",
                className: "react-datepicker-time__input",
                placeholder: "Time",
                name: "time-input",
                required: !0,
                value: e,
                onChange: function (e) {
                  a.onTimeChange(e.target.value || n);
                },
              });
        }),
        (a.state = { time: a.props.timeString }),
        a
      );
    }
    return (
      lt(
        r,
        [
          {
            key: "render",
            value: function () {
              return ae.default.createElement(
                "div",
                { className: "react-datepicker__input-time-container" },
                ae.default.createElement(
                  "div",
                  { className: "react-datepicker-time__caption" },
                  this.props.timeInputLabel
                ),
                ae.default.createElement(
                  "div",
                  { className: "react-datepicker-time__input-container" },
                  ae.default.createElement(
                    "div",
                    { className: "react-datepicker-time__input" },
                    this.renderTimeInput()
                  )
                )
              );
            },
          },
        ],
        [
          {
            key: "getDerivedStateFromProps",
            value: function (e, t) {
              return e.timeString !== t.time ? { time: e.timeString } : null;
            },
          },
        ]
      ),
      r
    );
  })();
function Ir(e) {
  var t = e.className,
    r = e.children,
    a = e.showPopperArrow,
    n = e.arrowProps,
    o = void 0 === n ? {} : n;
  return ae.default.createElement(
    "div",
    { className: t },
    a &&
      ae.default.createElement(
        "div",
        ut({ className: "react-datepicker__triangle" }, o)
      ),
    r
  );
}
var Tr = [
    "react-datepicker__year-select",
    "react-datepicker__month-select",
    "react-datepicker__month-year-select",
  ],
  Lr = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r(e) {
      var a;
      return (
        it(this, r),
        ct(mt((a = t.call(this, e))), "handleClickOutside", function (e) {
          a.props.onClickOutside(e);
        }),
        ct(mt(a), "setClickOutsideRef", function () {
          return a.containerRef.current;
        }),
        ct(mt(a), "handleDropdownFocus", function (e) {
          (function () {
            var e = (
              (arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {}
              ).className || ""
            ).split(/\s+/);
            return Tr.some(function (t) {
              return e.indexOf(t) >= 0;
            });
          })(e.target) && a.props.onDropdownFocus();
        }),
        ct(mt(a), "getDateInView", function () {
          var e = a.props,
            t = e.preSelection,
            r = e.selected,
            n = e.openToDate,
            o = lr(a.props),
            s = cr(a.props),
            i = St(),
            p = n || r || t;
          return (
            p || (o && Je.default(i, o) ? o : s && Ge.default(i, s) ? s : i)
          );
        }),
        ct(mt(a), "increaseMonth", function () {
          a.setState(
            function (e) {
              var t = e.date;
              return { date: de.default(t, 1) };
            },
            function () {
              return a.handleMonthChange(a.state.date);
            }
          );
        }),
        ct(mt(a), "decreaseMonth", function () {
          a.setState(
            function (e) {
              var t = e.date;
              return { date: ye.default(t, 1) };
            },
            function () {
              return a.handleMonthChange(a.state.date);
            }
          );
        }),
        ct(mt(a), "handleDayClick", function (e, t, r) {
          a.props.onSelect(e, t, r),
            a.props.setPreSelection && a.props.setPreSelection(e);
        }),
        ct(mt(a), "handleDayMouseEnter", function (e) {
          a.setState({ selectingDate: e }),
            a.props.onDayMouseEnter && a.props.onDayMouseEnter(e);
        }),
        ct(mt(a), "handleMonthMouseLeave", function () {
          a.setState({ selectingDate: null }),
            a.props.onMonthMouseLeave && a.props.onMonthMouseLeave();
        }),
        ct(mt(a), "handleYearChange", function (e) {
          a.props.onYearChange && a.props.onYearChange(e),
            a.props.adjustDateOnChange &&
              (a.props.onSelect && a.props.onSelect(e),
              a.props.setOpen && a.props.setOpen(!0)),
            a.props.setPreSelection && a.props.setPreSelection(e);
        }),
        ct(mt(a), "handleMonthChange", function (e) {
          a.props.onMonthChange && a.props.onMonthChange(e),
            a.props.adjustDateOnChange &&
              (a.props.onSelect && a.props.onSelect(e),
              a.props.setOpen && a.props.setOpen(!0)),
            a.props.setPreSelection && a.props.setPreSelection(e);
        }),
        ct(mt(a), "handleMonthYearChange", function (e) {
          a.handleYearChange(e), a.handleMonthChange(e);
        }),
        ct(mt(a), "changeYear", function (e) {
          a.setState(
            function (t) {
              var r = t.date;
              return { date: Ie.default(r, e) };
            },
            function () {
              return a.handleYearChange(a.state.date);
            }
          );
        }),
        ct(mt(a), "changeMonth", function (e) {
          a.setState(
            function (t) {
              var r = t.date;
              return { date: Oe.default(r, e) };
            },
            function () {
              return a.handleMonthChange(a.state.date);
            }
          );
        }),
        ct(mt(a), "changeMonthYear", function (e) {
          a.setState(
            function (t) {
              var r = t.date;
              return {
                date: Ie.default(Oe.default(r, Se.default(e)), Me.default(e)),
              };
            },
            function () {
              return a.handleMonthYearChange(a.state.date);
            }
          );
        }),
        ct(mt(a), "header", function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : a.state.date,
            t = It(e, a.props.locale, a.props.calendarStartDay),
            r = [];
          return (
            a.props.showWeekNumbers &&
              r.push(
                ae.default.createElement(
                  "div",
                  { key: "W", className: "react-datepicker__day-name" },
                  a.props.weekLabel || "#"
                )
              ),
            r.concat(
              [0, 1, 2, 3, 4, 5, 6].map(function (e) {
                var r = ce.default(t, e),
                  n = a.formatWeekday(r, a.props.locale),
                  o = a.props.weekDayClassName
                    ? a.props.weekDayClassName(r)
                    : void 0;
                return ae.default.createElement(
                  "div",
                  {
                    key: e,
                    className: ne.default("react-datepicker__day-name", o),
                  },
                  n
                );
              })
            )
          );
        }),
        ct(mt(a), "formatWeekday", function (e, t) {
          return a.props.formatWeekDay
            ? (function (e, t, r) {
                return t(Pt(e, "EEEE", r));
              })(e, a.props.formatWeekDay, t)
            : a.props.useWeekdaysShort
            ? (function (e, t) {
                return Pt(e, "EEE", t);
              })(e, t)
            : (function (e, t) {
                return Pt(e, "EEEEEE", t);
              })(e, t);
        }),
        ct(mt(a), "decreaseYear", function () {
          a.setState(
            function (e) {
              var t = e.date;
              return {
                date: ve.default(
                  t,
                  a.props.showYearPicker ? a.props.yearItemNumber : 1
                ),
              };
            },
            function () {
              return a.handleYearChange(a.state.date);
            }
          );
        }),
        ct(mt(a), "renderPreviousButton", function () {
          if (!a.props.renderCustomHeader) {
            var e;
            switch (!0) {
              case a.props.showMonthYearPicker:
                e = ir(a.state.date, a.props);
                break;
              case a.props.showYearPicker:
                e = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = t.minDate,
                    a = t.yearItemNumber,
                    n = void 0 === a ? 12 : a,
                    o = hr(Lt(ve.default(e, n)), n).endPeriod,
                    s = r && Me.default(r);
                  return (s && s > o) || !1;
                })(a.state.date, a.props);
                break;
              default:
                e = or(a.state.date, a.props);
            }
            if (
              (a.props.forceShowMonthNavigation ||
                a.props.showDisabledMonthNavigation ||
                !e) &&
              !a.props.showTimeSelectOnly
            ) {
              var t = [
                  "react-datepicker__navigation",
                  "react-datepicker__navigation--previous",
                ],
                r = a.decreaseMonth;
              (a.props.showMonthYearPicker ||
                a.props.showQuarterYearPicker ||
                a.props.showYearPicker) &&
                (r = a.decreaseYear),
                e &&
                  a.props.showDisabledMonthNavigation &&
                  (t.push("react-datepicker__navigation--previous--disabled"),
                  (r = null));
              var n =
                  a.props.showMonthYearPicker ||
                  a.props.showQuarterYearPicker ||
                  a.props.showYearPicker,
                o = a.props,
                s = o.previousMonthButtonLabel,
                i = o.previousYearButtonLabel,
                p = a.props,
                l = p.previousMonthAriaLabel,
                c =
                  void 0 === l
                    ? "string" == typeof s
                      ? s
                      : "Previous Month"
                    : l,
                u = p.previousYearAriaLabel,
                d =
                  void 0 === u
                    ? "string" == typeof i
                      ? i
                      : "Previous Year"
                    : u;
              return ae.default.createElement(
                "button",
                {
                  type: "button",
                  className: t.join(" "),
                  onClick: r,
                  onKeyDown: a.props.handleOnKeyDown,
                  "aria-label": n ? d : c,
                },
                ae.default.createElement(
                  "span",
                  {
                    className: [
                      "react-datepicker__navigation-icon",
                      "react-datepicker__navigation-icon--previous",
                    ].join(" "),
                  },
                  n
                    ? a.props.previousYearButtonLabel
                    : a.props.previousMonthButtonLabel
                )
              );
            }
          }
        }),
        ct(mt(a), "increaseYear", function () {
          a.setState(
            function (e) {
              var t = e.date;
              return {
                date: fe.default(
                  t,
                  a.props.showYearPicker ? a.props.yearItemNumber : 1
                ),
              };
            },
            function () {
              return a.handleYearChange(a.state.date);
            }
          );
        }),
        ct(mt(a), "renderNextButton", function () {
          if (!a.props.renderCustomHeader) {
            var e;
            switch (!0) {
              case a.props.showMonthYearPicker:
                e = pr(a.state.date, a.props);
                break;
              case a.props.showYearPicker:
                e = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    r = t.maxDate,
                    a = t.yearItemNumber,
                    n = void 0 === a ? 12 : a,
                    o = hr(fe.default(e, n), n).startPeriod,
                    s = r && Me.default(r);
                  return (s && s < o) || !1;
                })(a.state.date, a.props);
                break;
              default:
                e = sr(a.state.date, a.props);
            }
            if (
              (a.props.forceShowMonthNavigation ||
                a.props.showDisabledMonthNavigation ||
                !e) &&
              !a.props.showTimeSelectOnly
            ) {
              var t = [
                "react-datepicker__navigation",
                "react-datepicker__navigation--next",
              ];
              a.props.showTimeSelect &&
                t.push("react-datepicker__navigation--next--with-time"),
                a.props.todayButton &&
                  t.push(
                    "react-datepicker__navigation--next--with-today-button"
                  );
              var r = a.increaseMonth;
              (a.props.showMonthYearPicker ||
                a.props.showQuarterYearPicker ||
                a.props.showYearPicker) &&
                (r = a.increaseYear),
                e &&
                  a.props.showDisabledMonthNavigation &&
                  (t.push("react-datepicker__navigation--next--disabled"),
                  (r = null));
              var n =
                  a.props.showMonthYearPicker ||
                  a.props.showQuarterYearPicker ||
                  a.props.showYearPicker,
                o = a.props,
                s = o.nextMonthButtonLabel,
                i = o.nextYearButtonLabel,
                p = a.props,
                l = p.nextMonthAriaLabel,
                c =
                  void 0 === l ? ("string" == typeof s ? s : "Next Month") : l,
                u = p.nextYearAriaLabel,
                d = void 0 === u ? ("string" == typeof i ? i : "Next Year") : u;
              return ae.default.createElement(
                "button",
                {
                  type: "button",
                  className: t.join(" "),
                  onClick: r,
                  onKeyDown: a.props.handleOnKeyDown,
                  "aria-label": n ? d : c,
                },
                ae.default.createElement(
                  "span",
                  {
                    className: [
                      "react-datepicker__navigation-icon",
                      "react-datepicker__navigation-icon--next",
                    ].join(" "),
                  },
                  n ? a.props.nextYearButtonLabel : a.props.nextMonthButtonLabel
                )
              );
            }
          }
        }),
        ct(mt(a), "renderCurrentMonth", function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : a.state.date,
            t = ["react-datepicker__current-month"];
          return (
            a.props.showYearDropdown &&
              t.push("react-datepicker__current-month--hasYearDropdown"),
            a.props.showMonthDropdown &&
              t.push("react-datepicker__current-month--hasMonthDropdown"),
            a.props.showMonthYearDropdown &&
              t.push("react-datepicker__current-month--hasMonthYearDropdown"),
            ae.default.createElement(
              "div",
              { className: t.join(" ") },
              Pt(e, a.props.dateFormat, a.props.locale)
            )
          );
        }),
        ct(mt(a), "renderYearDropdown", function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (a.props.showYearDropdown && !e)
            return ae.default.createElement(Dr, {
              adjustDateOnChange: a.props.adjustDateOnChange,
              date: a.state.date,
              onSelect: a.props.onSelect,
              setOpen: a.props.setOpen,
              dropdownMode: a.props.dropdownMode,
              onChange: a.changeYear,
              minDate: a.props.minDate,
              maxDate: a.props.maxDate,
              year: Me.default(a.state.date),
              scrollableYearDropdown: a.props.scrollableYearDropdown,
              yearDropdownItemNumber: a.props.yearDropdownItemNumber,
            });
        }),
        ct(mt(a), "renderMonthDropdown", function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (a.props.showMonthDropdown && !e)
            return ae.default.createElement(gr, {
              dropdownMode: a.props.dropdownMode,
              locale: a.props.locale,
              onChange: a.changeMonth,
              month: Se.default(a.state.date),
              useShortMonthInDropdown: a.props.useShortMonthInDropdown,
            });
        }),
        ct(mt(a), "renderMonthYearDropdown", function () {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          if (a.props.showMonthYearDropdown && !e)
            return ae.default.createElement(_r, {
              dropdownMode: a.props.dropdownMode,
              locale: a.props.locale,
              dateFormat: a.props.dateFormat,
              onChange: a.changeMonthYear,
              minDate: a.props.minDate,
              maxDate: a.props.maxDate,
              date: a.state.date,
              scrollableMonthYearDropdown: a.props.scrollableMonthYearDropdown,
            });
        }),
        ct(mt(a), "renderTodayButton", function () {
          if (a.props.todayButton && !a.props.showTimeSelectOnly)
            return ae.default.createElement(
              "div",
              {
                className: "react-datepicker__today-button",
                onClick: function (e) {
                  return a.props.onSelect(qe.default(St()), e);
                },
              },
              a.props.todayButton
            );
        }),
        ct(mt(a), "renderDefaultHeader", function (e) {
          var t = e.monthDate,
            r = e.i;
          return ae.default.createElement(
            "div",
            {
              className: "react-datepicker__header ".concat(
                a.props.showTimeSelect
                  ? "react-datepicker__header--has-time-select"
                  : ""
              ),
            },
            a.renderCurrentMonth(t),
            ae.default.createElement(
              "div",
              {
                className:
                  "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                    a.props.dropdownMode
                  ),
                onFocus: a.handleDropdownFocus,
              },
              a.renderMonthDropdown(0 !== r),
              a.renderMonthYearDropdown(0 !== r),
              a.renderYearDropdown(0 !== r)
            ),
            ae.default.createElement(
              "div",
              { className: "react-datepicker__day-names" },
              a.header(t)
            )
          );
        }),
        ct(mt(a), "renderCustomHeader", function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = e.monthDate,
            r = e.i;
          if (
            (a.props.showTimeSelect && !a.state.monthContainer) ||
            a.props.showTimeSelectOnly
          )
            return null;
          var n = or(a.state.date, a.props),
            o = sr(a.state.date, a.props),
            s = ir(a.state.date, a.props),
            i = pr(a.state.date, a.props),
            p =
              !a.props.showMonthYearPicker &&
              !a.props.showQuarterYearPicker &&
              !a.props.showYearPicker;
          return ae.default.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker__header--custom",
              onFocus: a.props.onDropdownFocus,
            },
            a.props.renderCustomHeader(
              ot(
                ot({}, a.state),
                {},
                {
                  customHeaderCount: r,
                  monthDate: t,
                  changeMonth: a.changeMonth,
                  changeYear: a.changeYear,
                  decreaseMonth: a.decreaseMonth,
                  increaseMonth: a.increaseMonth,
                  decreaseYear: a.decreaseYear,
                  increaseYear: a.increaseYear,
                  prevMonthButtonDisabled: n,
                  nextMonthButtonDisabled: o,
                  prevYearButtonDisabled: s,
                  nextYearButtonDisabled: i,
                }
              )
            ),
            p &&
              ae.default.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                a.header(t)
              )
          );
        }),
        ct(mt(a), "renderYearHeader", function () {
          var e = a.state.date,
            t = a.props,
            r = t.showYearPicker,
            n = hr(e, t.yearItemNumber),
            o = n.startPeriod,
            s = n.endPeriod;
          return ae.default.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker-year-header",
            },
            r ? "".concat(o, " - ").concat(s) : Me.default(e)
          );
        }),
        ct(mt(a), "renderHeader", function (e) {
          switch (!0) {
            case void 0 !== a.props.renderCustomHeader:
              return a.renderCustomHeader(e);
            case a.props.showMonthYearPicker ||
              a.props.showQuarterYearPicker ||
              a.props.showYearPicker:
              return a.renderYearHeader(e);
            default:
              return a.renderDefaultHeader(e);
          }
        }),
        ct(mt(a), "renderMonths", function () {
          if (!a.props.showTimeSelectOnly && !a.props.showYearPicker) {
            for (
              var e = [],
                t = a.props.showPreviousMonths ? a.props.monthsShown - 1 : 0,
                r = ye.default(a.state.date, t),
                n = 0;
              n < a.props.monthsShown;
              ++n
            ) {
              var o = n - a.props.monthSelectedIn,
                s = de.default(r, o),
                i = "month-".concat(n),
                p = n < a.props.monthsShown - 1,
                l = n > 0;
              e.push(
                ae.default.createElement(
                  "div",
                  {
                    key: i,
                    ref: function (e) {
                      a.monthContainer = e;
                    },
                    className: "react-datepicker__month-container",
                  },
                  a.renderHeader({ monthDate: s, i: n }),
                  ae.default.createElement(Nr, {
                    chooseDayAriaLabelPrefix: a.props.chooseDayAriaLabelPrefix,
                    disabledDayAriaLabelPrefix:
                      a.props.disabledDayAriaLabelPrefix,
                    weekAriaLabelPrefix: a.props.weekAriaLabelPrefix,
                    onChange: a.changeMonthYear,
                    day: s,
                    dayClassName: a.props.dayClassName,
                    calendarStartDay: a.props.calendarStartDay,
                    monthClassName: a.props.monthClassName,
                    onDayClick: a.handleDayClick,
                    handleOnKeyDown: a.props.handleOnDayKeyDown,
                    onDayMouseEnter: a.handleDayMouseEnter,
                    onMouseLeave: a.handleMonthMouseLeave,
                    onWeekSelect: a.props.onWeekSelect,
                    orderInDisplay: n,
                    formatWeekNumber: a.props.formatWeekNumber,
                    locale: a.props.locale,
                    minDate: a.props.minDate,
                    maxDate: a.props.maxDate,
                    excludeDates: a.props.excludeDates,
                    excludeDateIntervals: a.props.excludeDateIntervals,
                    highlightDates: a.props.highlightDates,
                    selectingDate: a.state.selectingDate,
                    includeDates: a.props.includeDates,
                    includeDateIntervals: a.props.includeDateIntervals,
                    inline: a.props.inline,
                    shouldFocusDayInline: a.props.shouldFocusDayInline,
                    fixedHeight: a.props.fixedHeight,
                    filterDate: a.props.filterDate,
                    preSelection: a.props.preSelection,
                    setPreSelection: a.props.setPreSelection,
                    selected: a.props.selected,
                    selectsStart: a.props.selectsStart,
                    selectsEnd: a.props.selectsEnd,
                    selectsRange: a.props.selectsRange,
                    showWeekNumbers: a.props.showWeekNumbers,
                    startDate: a.props.startDate,
                    endDate: a.props.endDate,
                    peekNextMonth: a.props.peekNextMonth,
                    setOpen: a.props.setOpen,
                    shouldCloseOnSelect: a.props.shouldCloseOnSelect,
                    renderDayContents: a.props.renderDayContents,
                    disabledKeyboardNavigation:
                      a.props.disabledKeyboardNavigation,
                    showMonthYearPicker: a.props.showMonthYearPicker,
                    showFullMonthYearPicker: a.props.showFullMonthYearPicker,
                    showTwoColumnMonthYearPicker:
                      a.props.showTwoColumnMonthYearPicker,
                    showFourColumnMonthYearPicker:
                      a.props.showFourColumnMonthYearPicker,
                    showYearPicker: a.props.showYearPicker,
                    showQuarterYearPicker: a.props.showQuarterYearPicker,
                    isInputFocused: a.props.isInputFocused,
                    containerRef: a.containerRef,
                    monthShowsDuplicateDaysEnd: p,
                    monthShowsDuplicateDaysStart: l,
                  })
                )
              );
            }
            return e;
          }
        }),
        ct(mt(a), "renderYears", function () {
          if (!a.props.showTimeSelectOnly)
            return a.props.showYearPicker
              ? ae.default.createElement(
                  "div",
                  { className: "react-datepicker__year--container" },
                  a.renderHeader(),
                  ae.default.createElement(
                    Or,
                    ut(
                      { onDayClick: a.handleDayClick, date: a.state.date },
                      a.props
                    )
                  )
                )
              : void 0;
        }),
        ct(mt(a), "renderTimeSection", function () {
          if (
            a.props.showTimeSelect &&
            (a.state.monthContainer || a.props.showTimeSelectOnly)
          )
            return ae.default.createElement(xr, {
              selected: a.props.selected,
              openToDate: a.props.openToDate,
              onChange: a.props.onTimeChange,
              timeClassName: a.props.timeClassName,
              format: a.props.timeFormat,
              includeTimes: a.props.includeTimes,
              intervals: a.props.timeIntervals,
              minTime: a.props.minTime,
              maxTime: a.props.maxTime,
              excludeTimes: a.props.excludeTimes,
              filterTime: a.props.filterTime,
              timeCaption: a.props.timeCaption,
              todayButton: a.props.todayButton,
              showMonthDropdown: a.props.showMonthDropdown,
              showMonthYearDropdown: a.props.showMonthYearDropdown,
              showYearDropdown: a.props.showYearDropdown,
              withPortal: a.props.withPortal,
              monthRef: a.state.monthContainer,
              injectTimes: a.props.injectTimes,
              locale: a.props.locale,
              handleOnKeyDown: a.props.handleOnKeyDown,
              showTimeSelectOnly: a.props.showTimeSelectOnly,
            });
        }),
        ct(mt(a), "renderInputTimeSection", function () {
          var e = new Date(a.props.selected),
            t =
              Mt(e) && Boolean(a.props.selected)
                ? "".concat(fr(e.getHours()), ":").concat(fr(e.getMinutes()))
                : "";
          if (a.props.showTimeInput)
            return ae.default.createElement(Yr, {
              date: e,
              timeString: t,
              timeInputLabel: a.props.timeInputLabel,
              onChange: a.props.onTimeChange,
              customTimeInput: a.props.customTimeInput,
            });
        }),
        (a.containerRef = ae.default.createRef()),
        (a.state = {
          date: a.getDateInView(),
          selectingDate: null,
          monthContainer: null,
        }),
        a
      );
    }
    return (
      lt(
        r,
        [
          {
            key: "componentDidMount",
            value: function () {
              var e = this;
              this.props.showTimeSelect &&
                (this.assignMonthContainer = void e.setState({
                  monthContainer: e.monthContainer,
                }));
            },
          },
          {
            key: "componentDidUpdate",
            value: function (e) {
              this.props.preSelection &&
              !Kt(this.props.preSelection, e.preSelection)
                ? this.setState({ date: this.props.preSelection })
                : this.props.openToDate &&
                  !Kt(this.props.openToDate, e.openToDate) &&
                  this.setState({ date: this.props.openToDate });
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.props.container || Ir;
              return ae.default.createElement(
                "div",
                { ref: this.containerRef },
                ae.default.createElement(
                  e,
                  {
                    className: ne.default(
                      "react-datepicker",
                      this.props.className,
                      {
                        "react-datepicker--time-only":
                          this.props.showTimeSelectOnly,
                      }
                    ),
                    showPopperArrow: this.props.showPopperArrow,
                    arrowProps: this.props.arrowProps,
                  },
                  this.renderPreviousButton(),
                  this.renderNextButton(),
                  this.renderMonths(),
                  this.renderYears(),
                  this.renderTodayButton(),
                  this.renderTimeSection(),
                  this.renderInputTimeSection(),
                  this.props.children
                )
              );
            },
          },
        ],
        [
          {
            key: "defaultProps",
            get: function () {
              return {
                onDropdownFocus: function () {},
                monthsShown: 1,
                monthSelectedIn: 0,
                forceShowMonthNavigation: !1,
                timeCaption: "Time",
                previousYearButtonLabel: "Previous Year",
                nextYearButtonLabel: "Next Year",
                previousMonthButtonLabel: "Previous Month",
                nextMonthButtonLabel: "Next Month",
                customTimeInput: null,
                yearItemNumber: 12,
              };
            },
          },
        ]
      ),
      r
    );
  })(),
  Fr = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r(e) {
      var a;
      return (
        it(this, r),
        ((a = t.call(this, e)).el = document.createElement("div")),
        a
      );
    }
    return (
      lt(r, [
        {
          key: "componentDidMount",
          value: function () {
            (this.portalRoot = document.getElementById(this.props.portalId)),
              this.portalRoot ||
                ((this.portalRoot = document.createElement("div")),
                this.portalRoot.setAttribute("id", this.props.portalId),
                document.body.appendChild(this.portalRoot)),
              this.portalRoot.appendChild(this.el);
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this.portalRoot.removeChild(this.el);
          },
        },
        {
          key: "render",
          value: function () {
            return at.default.createPortal(this.props.children, this.el);
          },
        },
      ]),
      r
    );
  })(),
  Rr = function (e) {
    return !e.disabled && -1 !== e.tabIndex;
  },
  Ar = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r(e) {
      var a;
      return (
        it(this, r),
        ct(mt((a = t.call(this, e))), "getTabChildren", function () {
          return Array.prototype.slice
            .call(
              a.tabLoopRef.current.querySelectorAll(
                "[tabindex], a, button, input, select, textarea"
              ),
              1,
              -1
            )
            .filter(Rr);
        }),
        ct(mt(a), "handleFocusStart", function (e) {
          var t = a.getTabChildren();
          t && t.length > 1 && t[t.length - 1].focus();
        }),
        ct(mt(a), "handleFocusEnd", function (e) {
          var t = a.getTabChildren();
          t && t.length > 1 && t[0].focus();
        }),
        (a.tabLoopRef = ae.default.createRef()),
        a
      );
    }
    return (
      lt(
        r,
        [
          {
            key: "render",
            value: function () {
              return this.props.enableTabLoop
                ? ae.default.createElement(
                    "div",
                    {
                      className: "react-datepicker__tab-loop",
                      ref: this.tabLoopRef,
                    },
                    ae.default.createElement("div", {
                      className: "react-datepicker__tab-loop__start",
                      tabIndex: "0",
                      onFocus: this.handleFocusStart,
                    }),
                    this.props.children,
                    ae.default.createElement("div", {
                      className: "react-datepicker__tab-loop__end",
                      tabIndex: "0",
                      onFocus: this.handleFocusEnd,
                    })
                  )
                : this.props.children;
            },
          },
        ],
        [
          {
            key: "defaultProps",
            get: function () {
              return { enableTabLoop: !0 };
            },
          },
        ]
      ),
      r
    );
  })(),
  qr = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r() {
      return it(this, r), t.apply(this, arguments);
    }
    return (
      lt(
        r,
        [
          {
            key: "render",
            value: function () {
              var e,
                t = this.props,
                r = t.className,
                a = t.wrapperClassName,
                n = t.hidePopper,
                o = t.popperComponent,
                s = t.popperModifiers,
                i = t.popperPlacement,
                p = t.popperProps,
                l = t.targetComponent,
                c = t.enableTabLoop,
                u = t.popperOnKeyDown,
                d = t.portalId;
              if (!n) {
                var f = ne.default("react-datepicker-popper", r);
                e = ae.default.createElement(
                  te.Popper,
                  ut({ modifiers: s, placement: i }, p),
                  function (e) {
                    var t = e.ref,
                      r = e.style,
                      a = e.placement,
                      n = e.arrowProps;
                    return ae.default.createElement(
                      Ar,
                      { enableTabLoop: c },
                      ae.default.createElement(
                        "div",
                        {
                          ref: t,
                          style: r,
                          className: f,
                          "data-placement": a,
                          onKeyDown: u,
                        },
                        ae.default.cloneElement(o, { arrowProps: n })
                      )
                    );
                  }
                );
              }
              this.props.popperContainer &&
                (e = ae.default.createElement(
                  this.props.popperContainer,
                  {},
                  e
                )),
                d &&
                  !n &&
                  (e = ae.default.createElement(Fr, { portalId: d }, e));
              var h = ne.default("react-datepicker-wrapper", a);
              return ae.default.createElement(
                te.Manager,
                { className: "react-datepicker-manager" },
                ae.default.createElement(te.Reference, null, function (e) {
                  var t = e.ref;
                  return ae.default.createElement(
                    "div",
                    { ref: t, className: h },
                    l
                  );
                }),
                e
              );
            },
          },
        ],
        [
          {
            key: "defaultProps",
            get: function () {
              return {
                hidePopper: !0,
                popperModifiers: [],
                popperProps: {},
                popperPlacement: "bottom-start",
              };
            },
          },
        ]
      ),
      r
    );
  })(),
  Kr = rt.default(Lr);
var Br = (function (e) {
    dt(r, ae["default"].Component);
    var t = vt(r);
    function r(e) {
      var a;
      return (
        it(this, r),
        ct(mt((a = t.call(this, e))), "getPreSelection", function () {
          return a.props.openToDate
            ? a.props.openToDate
            : a.props.selectsEnd && a.props.startDate
            ? a.props.startDate
            : a.props.selectsStart && a.props.endDate
            ? a.props.endDate
            : St();
        }),
        ct(mt(a), "calcInitialState", function () {
          var e,
            t = a.getPreSelection(),
            r = lr(a.props),
            n = cr(a.props),
            o =
              r && Je.default(t, qe.default(r))
                ? r
                : n && Ge.default(t, He.default(n))
                ? n
                : t;
          return {
            open: a.props.startOpen || !1,
            preventFocus: !1,
            preSelection:
              null !==
                (e = a.props.selectsRange
                  ? a.props.startDate
                  : a.props.selected) && void 0 !== e
                ? e
                : o,
            highlightDates: ur(a.props.highlightDates),
            focused: !1,
            shouldFocusDayInline: !1,
          };
        }),
        ct(mt(a), "clearPreventFocusTimeout", function () {
          a.preventFocusTimeout && clearTimeout(a.preventFocusTimeout);
        }),
        ct(mt(a), "setFocus", function () {
          a.input && a.input.focus && a.input.focus({ preventScroll: !0 });
        }),
        ct(mt(a), "setBlur", function () {
          a.input && a.input.blur && a.input.blur(), a.cancelFocusInput();
        }),
        ct(mt(a), "setOpen", function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          a.setState(
            {
              open: e,
              preSelection:
                e && a.state.open
                  ? a.state.preSelection
                  : a.calcInitialState().preSelection,
              lastPreSelectChange: jr,
            },
            function () {
              e ||
                a.setState(
                  function (e) {
                    return { focused: !!t && e.focused };
                  },
                  function () {
                    !t && a.setBlur(), a.setState({ inputValue: null });
                  }
                );
            }
          );
        }),
        ct(mt(a), "inputOk", function () {
          return oe.default(a.state.preSelection);
        }),
        ct(mt(a), "isCalendarOpen", function () {
          return void 0 === a.props.open
            ? a.state.open && !a.props.disabled && !a.props.readOnly
            : a.props.open;
        }),
        ct(mt(a), "handleFocus", function (e) {
          a.state.preventFocus ||
            (a.props.onFocus(e),
            a.props.preventOpenOnFocus || a.props.readOnly || a.setOpen(!0)),
            a.setState({ focused: !0 });
        }),
        ct(mt(a), "cancelFocusInput", function () {
          clearTimeout(a.inputFocusTimeout), (a.inputFocusTimeout = null);
        }),
        ct(mt(a), "deferFocusInput", function () {
          a.cancelFocusInput(),
            (a.inputFocusTimeout = setTimeout(function () {
              return a.setFocus();
            }, 1));
        }),
        ct(mt(a), "handleDropdownFocus", function () {
          a.cancelFocusInput();
        }),
        ct(mt(a), "handleBlur", function (e) {
          (!a.state.open || a.props.withPortal || a.props.showTimeInput) &&
            a.props.onBlur(e),
            a.setState({ focused: !1 });
        }),
        ct(mt(a), "handleCalendarClickOutside", function (e) {
          a.props.inline || a.setOpen(!1),
            a.props.onClickOutside(e),
            a.props.withPortal && e.preventDefault();
        }),
        ct(mt(a), "handleChange", function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          var n = t[0];
          if (
            !a.props.onChangeRaw ||
            (a.props.onChangeRaw.apply(mt(a), t),
            "function" == typeof n.isDefaultPrevented &&
              !n.isDefaultPrevented())
          ) {
            a.setState({ inputValue: n.target.value, lastPreSelectChange: Wr });
            var o = _t(
              n.target.value,
              a.props.dateFormat,
              a.props.locale,
              a.props.strictParsing,
              a.props.minDate
            );
            (!o && n.target.value) || a.setSelected(o, n, !0);
          }
        }),
        ct(mt(a), "handleSelect", function (e, t, r) {
          if (
            (a.setState({ preventFocus: !0 }, function () {
              return (
                (a.preventFocusTimeout = setTimeout(function () {
                  return a.setState({ preventFocus: !1 });
                }, 50)),
                a.preventFocusTimeout
              );
            }),
            a.props.onChangeRaw && a.props.onChangeRaw(t),
            a.setSelected(e, t, !1, r),
            !a.props.shouldCloseOnSelect || a.props.showTimeSelect)
          )
            a.setPreSelection(e);
          else if (!a.props.inline) {
            a.props.selectsRange || a.setOpen(!1);
            var n = a.props,
              o = n.startDate,
              s = n.endDate;
            !o || s || Je.default(e, o) || a.setOpen(!1);
          }
        }),
        ct(mt(a), "setSelected", function (e, t, r, n) {
          var o = e;
          if (null === o || !$t(o, a.props)) {
            var s = a.props,
              i = s.onChange,
              p = s.selectsRange,
              l = s.startDate,
              c = s.endDate;
            if (!Bt(a.props.selected, o) || a.props.allowSameDay || p)
              if (
                (null !== o &&
                  (!a.props.selected ||
                    (r &&
                      (a.props.showTimeSelect ||
                        a.props.showTimeSelectOnly ||
                        a.props.showTimeInput)) ||
                    (o = Nt(o, {
                      hour: ke.default(a.props.selected),
                      minute: we.default(a.props.selected),
                      second: De.default(a.props.selected),
                    })),
                  a.props.inline || a.setState({ preSelection: o }),
                  a.props.focusSelectedMonth ||
                    a.setState({ monthSelectedIn: n })),
                p)
              ) {
                var u = l && !c,
                  d = l && c;
                !l && !c
                  ? i([o, null], t)
                  : u && (Je.default(o, l) ? i([o, null], t) : i([l, o], t)),
                  d && i([o, null], t);
              } else i(o, t);
            r || (a.props.onSelect(o, t), a.setState({ inputValue: null }));
          }
        }),
        ct(mt(a), "setPreSelection", function (e) {
          var t = void 0 !== a.props.minDate,
            r = void 0 !== a.props.maxDate,
            n = !0;
          if (e) {
            var o = qe.default(e);
            if (t && r) n = Wt(e, a.props.minDate, a.props.maxDate);
            else if (t) {
              var s = qe.default(a.props.minDate);
              n = Ge.default(e, s) || Bt(o, s);
            } else if (r) {
              var i = He.default(a.props.maxDate);
              n = Je.default(e, i) || Bt(o, i);
            }
          }
          n && a.setState({ preSelection: e });
        }),
        ct(mt(a), "handleTimeChange", function (e) {
          var t = Nt(
            a.props.selected ? a.props.selected : a.getPreSelection(),
            { hour: ke.default(e), minute: we.default(e) }
          );
          a.setState({ preSelection: t }),
            a.props.onChange(t),
            a.props.shouldCloseOnSelect && a.setOpen(!1),
            a.props.showTimeInput && a.setOpen(!0),
            a.setState({ inputValue: null });
        }),
        ct(mt(a), "onInputClick", function () {
          a.props.disabled || a.props.readOnly || a.setOpen(!0),
            a.props.onInputClick();
        }),
        ct(mt(a), "onInputKeyDown", function (e) {
          a.props.onKeyDown(e);
          var t = e.key;
          if (a.state.open || a.props.inline || a.props.preventOpenOnFocus) {
            if (a.state.open) {
              if ("ArrowDown" === t || "ArrowUp" === t) {
                e.preventDefault();
                var r =
                  a.calendar.componentNode &&
                  a.calendar.componentNode.querySelector(
                    '.react-datepicker__day[tabindex="0"]'
                  );
                return void (r && r.focus({ preventScroll: !0 }));
              }
              var n = St(a.state.preSelection);
              "Enter" === t
                ? (e.preventDefault(),
                  a.inputOk() && a.state.lastPreSelectChange === jr
                    ? (a.handleSelect(n, e),
                      !a.props.shouldCloseOnSelect && a.setPreSelection(n))
                    : a.setOpen(!1))
                : "Escape" === t && (e.preventDefault(), a.setOpen(!1)),
                a.inputOk() ||
                  a.props.onInputError({
                    code: 1,
                    msg: "Date input not valid.",
                  });
            }
          } else ("ArrowDown" !== t && "ArrowUp" !== t && "Enter" !== t) || a.onInputClick();
        }),
        ct(mt(a), "onDayKeyDown", function (e) {
          a.props.onKeyDown(e);
          var t = e.key,
            r = St(a.state.preSelection);
          if ("Enter" === t)
            e.preventDefault(),
              a.handleSelect(r, e),
              !a.props.shouldCloseOnSelect && a.setPreSelection(r);
          else if ("Escape" === t)
            e.preventDefault(),
              a.setOpen(!1),
              a.inputOk() ||
                a.props.onInputError({ code: 1, msg: "Date input not valid." });
          else if (!a.props.disabledKeyboardNavigation) {
            var n;
            switch (t) {
              case "ArrowLeft":
                n = he.default(r, 1);
                break;
              case "ArrowRight":
                n = ce.default(r, 1);
                break;
              case "ArrowUp":
                n = me.default(r, 1);
                break;
              case "ArrowDown":
                n = ue.default(r, 1);
                break;
              case "PageUp":
                n = ye.default(r, 1);
                break;
              case "PageDown":
                n = de.default(r, 1);
                break;
              case "Home":
                n = ve.default(r, 1);
                break;
              case "End":
                n = fe.default(r, 1);
            }
            if (!n)
              return void (
                a.props.onInputError &&
                a.props.onInputError({ code: 1, msg: "Date input not valid." })
              );
            if (
              (e.preventDefault(),
              a.setState({ lastPreSelectChange: jr }),
              a.props.adjustDateOnChange && a.setSelected(n),
              a.setPreSelection(n),
              a.props.inline)
            ) {
              var o = Se.default(r),
                s = Se.default(n),
                i = Me.default(r),
                p = Me.default(n);
              o !== s || i !== p
                ? a.setState({ shouldFocusDayInline: !0 })
                : a.setState({ shouldFocusDayInline: !1 });
            }
          }
        }),
        ct(mt(a), "onPopperKeyDown", function (e) {
          "Escape" === e.key &&
            (e.preventDefault(),
            a.setState({ preventFocus: !0 }, function () {
              a.setOpen(!1),
                setTimeout(function () {
                  a.setFocus(), a.setState({ preventFocus: !1 });
                });
            }));
        }),
        ct(mt(a), "onClearClick", function (e) {
          e && e.preventDefault && e.preventDefault(),
            a.props.selectsRange
              ? a.props.onChange([null, null], e)
              : a.props.onChange(null, e),
            a.setState({ inputValue: null });
        }),
        ct(mt(a), "clear", function () {
          a.onClearClick();
        }),
        ct(mt(a), "onScroll", function (e) {
          "boolean" == typeof a.props.closeOnScroll && a.props.closeOnScroll
            ? (e.target !== document &&
                e.target !== document.documentElement &&
                e.target !== document.body) ||
              a.setOpen(!1)
            : "function" == typeof a.props.closeOnScroll &&
              a.props.closeOnScroll(e) &&
              a.setOpen(!1);
        }),
        ct(mt(a), "renderCalendar", function () {
          return a.props.inline || a.isCalendarOpen()
            ? ae.default.createElement(
                Kr,
                {
                  ref: function (e) {
                    a.calendar = e;
                  },
                  locale: a.props.locale,
                  calendarStartDay: a.props.calendarStartDay,
                  chooseDayAriaLabelPrefix: a.props.chooseDayAriaLabelPrefix,
                  disabledDayAriaLabelPrefix:
                    a.props.disabledDayAriaLabelPrefix,
                  weekAriaLabelPrefix: a.props.weekAriaLabelPrefix,
                  adjustDateOnChange: a.props.adjustDateOnChange,
                  setOpen: a.setOpen,
                  shouldCloseOnSelect: a.props.shouldCloseOnSelect,
                  dateFormat: a.props.dateFormatCalendar,
                  useWeekdaysShort: a.props.useWeekdaysShort,
                  formatWeekDay: a.props.formatWeekDay,
                  dropdownMode: a.props.dropdownMode,
                  selected: a.props.selected,
                  preSelection: a.state.preSelection,
                  onSelect: a.handleSelect,
                  onWeekSelect: a.props.onWeekSelect,
                  openToDate: a.props.openToDate,
                  minDate: a.props.minDate,
                  maxDate: a.props.maxDate,
                  selectsStart: a.props.selectsStart,
                  selectsEnd: a.props.selectsEnd,
                  selectsRange: a.props.selectsRange,
                  startDate: a.props.startDate,
                  endDate: a.props.endDate,
                  excludeDates: a.props.excludeDates,
                  excludeDateIntervals: a.props.excludeDateIntervals,
                  filterDate: a.props.filterDate,
                  onClickOutside: a.handleCalendarClickOutside,
                  formatWeekNumber: a.props.formatWeekNumber,
                  highlightDates: a.state.highlightDates,
                  includeDates: a.props.includeDates,
                  includeDateIntervals: a.props.includeDateIntervals,
                  includeTimes: a.props.includeTimes,
                  injectTimes: a.props.injectTimes,
                  inline: a.props.inline,
                  shouldFocusDayInline: a.state.shouldFocusDayInline,
                  peekNextMonth: a.props.peekNextMonth,
                  showMonthDropdown: a.props.showMonthDropdown,
                  showPreviousMonths: a.props.showPreviousMonths,
                  useShortMonthInDropdown: a.props.useShortMonthInDropdown,
                  showMonthYearDropdown: a.props.showMonthYearDropdown,
                  showWeekNumbers: a.props.showWeekNumbers,
                  showYearDropdown: a.props.showYearDropdown,
                  withPortal: a.props.withPortal,
                  forceShowMonthNavigation: a.props.forceShowMonthNavigation,
                  showDisabledMonthNavigation:
                    a.props.showDisabledMonthNavigation,
                  scrollableYearDropdown: a.props.scrollableYearDropdown,
                  scrollableMonthYearDropdown:
                    a.props.scrollableMonthYearDropdown,
                  todayButton: a.props.todayButton,
                  weekLabel: a.props.weekLabel,
                  outsideClickIgnoreClass:
                    "react-datepicker-ignore-onclickoutside",
                  fixedHeight: a.props.fixedHeight,
                  monthsShown: a.props.monthsShown,
                  monthSelectedIn: a.state.monthSelectedIn,
                  onDropdownFocus: a.handleDropdownFocus,
                  onMonthChange: a.props.onMonthChange,
                  onYearChange: a.props.onYearChange,
                  dayClassName: a.props.dayClassName,
                  weekDayClassName: a.props.weekDayClassName,
                  monthClassName: a.props.monthClassName,
                  timeClassName: a.props.timeClassName,
                  showTimeSelect: a.props.showTimeSelect,
                  showTimeSelectOnly: a.props.showTimeSelectOnly,
                  onTimeChange: a.handleTimeChange,
                  timeFormat: a.props.timeFormat,
                  timeIntervals: a.props.timeIntervals,
                  minTime: a.props.minTime,
                  maxTime: a.props.maxTime,
                  excludeTimes: a.props.excludeTimes,
                  filterTime: a.props.filterTime,
                  timeCaption: a.props.timeCaption,
                  className: a.props.calendarClassName,
                  container: a.props.calendarContainer,
                  yearItemNumber: a.props.yearItemNumber,
                  yearDropdownItemNumber: a.props.yearDropdownItemNumber,
                  previousMonthAriaLabel: a.props.previousMonthAriaLabel,
                  previousMonthButtonLabel: a.props.previousMonthButtonLabel,
                  nextMonthAriaLabel: a.props.nextMonthAriaLabel,
                  nextMonthButtonLabel: a.props.nextMonthButtonLabel,
                  previousYearAriaLabel: a.props.previousYearAriaLabel,
                  previousYearButtonLabel: a.props.previousYearButtonLabel,
                  nextYearAriaLabel: a.props.nextYearAriaLabel,
                  nextYearButtonLabel: a.props.nextYearButtonLabel,
                  timeInputLabel: a.props.timeInputLabel,
                  disabledKeyboardNavigation:
                    a.props.disabledKeyboardNavigation,
                  renderCustomHeader: a.props.renderCustomHeader,
                  popperProps: a.props.popperProps,
                  renderDayContents: a.props.renderDayContents,
                  onDayMouseEnter: a.props.onDayMouseEnter,
                  onMonthMouseLeave: a.props.onMonthMouseLeave,
                  showTimeInput: a.props.showTimeInput,
                  showMonthYearPicker: a.props.showMonthYearPicker,
                  showFullMonthYearPicker: a.props.showFullMonthYearPicker,
                  showTwoColumnMonthYearPicker:
                    a.props.showTwoColumnMonthYearPicker,
                  showFourColumnMonthYearPicker:
                    a.props.showFourColumnMonthYearPicker,
                  showYearPicker: a.props.showYearPicker,
                  showQuarterYearPicker: a.props.showQuarterYearPicker,
                  showPopperArrow: a.props.showPopperArrow,
                  excludeScrollbar: a.props.excludeScrollbar,
                  handleOnKeyDown: a.props.onKeyDown,
                  handleOnDayKeyDown: a.onDayKeyDown,
                  isInputFocused: a.state.focused,
                  customTimeInput: a.props.customTimeInput,
                  setPreSelection: a.setPreSelection,
                },
                a.props.children
              )
            : null;
        }),
        ct(mt(a), "renderDateInput", function () {
          var e,
            t = ne.default(
              a.props.className,
              ct({}, "react-datepicker-ignore-onclickoutside", a.state.open)
            ),
            r =
              a.props.customInput ||
              ae.default.createElement("input", { type: "text" }),
            n = a.props.customInputRef || "ref",
            o =
              "string" == typeof a.props.value
                ? a.props.value
                : "string" == typeof a.state.inputValue
                ? a.state.inputValue
                : a.props.selectsRange
                ? (function (e, t, r) {
                    if (!e) return "";
                    var a = Et(e, r),
                      n = t ? Et(t, r) : "";
                    return "".concat(a, " - ").concat(n);
                  })(a.props.startDate, a.props.endDate, a.props)
                : Et(a.props.selected, a.props);
          return ae.default.cloneElement(
            r,
            (ct((e = {}), n, function (e) {
              a.input = e;
            }),
            ct(e, "value", o),
            ct(e, "onBlur", a.handleBlur),
            ct(e, "onChange", a.handleChange),
            ct(e, "onClick", a.onInputClick),
            ct(e, "onFocus", a.handleFocus),
            ct(e, "onKeyDown", a.onInputKeyDown),
            ct(e, "id", a.props.id),
            ct(e, "name", a.props.name),
            ct(e, "autoFocus", a.props.autoFocus),
            ct(e, "placeholder", a.props.placeholderText),
            ct(e, "disabled", a.props.disabled),
            ct(e, "autoComplete", a.props.autoComplete),
            ct(e, "className", ne.default(r.props.className, t)),
            ct(e, "title", a.props.title),
            ct(e, "readOnly", a.props.readOnly),
            ct(e, "required", a.props.required),
            ct(e, "tabIndex", a.props.tabIndex),
            ct(e, "aria-describedby", a.props.ariaDescribedBy),
            ct(e, "aria-invalid", a.props.ariaInvalid),
            ct(e, "aria-labelledby", a.props.ariaLabelledBy),
            ct(e, "aria-required", a.props.ariaRequired),
            e)
          );
        }),
        ct(mt(a), "renderClearButton", function () {
          var e = a.props,
            t = e.isClearable,
            r = e.selected,
            n = e.startDate,
            o = e.endDate,
            s = e.clearButtonTitle,
            i = e.clearButtonClassName,
            p = void 0 === i ? "" : i,
            l = e.ariaLabelClose,
            c = void 0 === l ? "Close" : l;
          return !t || (null == r && null == n && null == o)
            ? null
            : ae.default.createElement("button", {
                type: "button",
                className: "react-datepicker__close-icon ".concat(p).trim(),
                "aria-label": c,
                onClick: a.onClearClick,
                title: s,
                tabIndex: -1,
              });
        }),
        (a.state = a.calcInitialState()),
        a
      );
    }
    return (
      lt(
        r,
        [
          {
            key: "componentDidMount",
            value: function () {
              window.addEventListener("scroll", this.onScroll, !0);
            },
          },
          {
            key: "componentDidUpdate",
            value: function (e, t) {
              var r, a;
              e.inline &&
                ((r = e.selected),
                (a = this.props.selected),
                r && a
                  ? Se.default(r) !== Se.default(a) ||
                    Me.default(r) !== Me.default(a)
                  : r !== a) &&
                this.setPreSelection(this.props.selected),
                void 0 !== this.state.monthSelectedIn &&
                  e.monthsShown !== this.props.monthsShown &&
                  this.setState({ monthSelectedIn: 0 }),
                e.highlightDates !== this.props.highlightDates &&
                  this.setState({
                    highlightDates: ur(this.props.highlightDates),
                  }),
                t.focused ||
                  Bt(e.selected, this.props.selected) ||
                  this.setState({ inputValue: null }),
                t.open !== this.state.open &&
                  (!1 === t.open &&
                    !0 === this.state.open &&
                    this.props.onCalendarOpen(),
                  !0 === t.open &&
                    !1 === this.state.open &&
                    this.props.onCalendarClose());
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              this.clearPreventFocusTimeout(),
                window.removeEventListener("scroll", this.onScroll, !0);
            },
          },
          {
            key: "renderInputContainer",
            value: function () {
              return ae.default.createElement(
                "div",
                { className: "react-datepicker__input-container" },
                this.renderDateInput(),
                this.renderClearButton()
              );
            },
          },
          {
            key: "render",
            value: function () {
              var e = this.renderCalendar();
              if (this.props.inline) return e;
              if (this.props.withPortal) {
                var t = this.state.open
                  ? ae.default.createElement(
                      "div",
                      { className: "react-datepicker__portal" },
                      e
                    )
                  : null;
                return (
                  this.state.open &&
                    this.props.portalId &&
                    (t = ae.default.createElement(
                      Fr,
                      { portalId: this.props.portalId },
                      t
                    )),
                  ae.default.createElement(
                    "div",
                    null,
                    this.renderInputContainer(),
                    t
                  )
                );
              }
              return ae.default.createElement(qr, {
                className: this.props.popperClassName,
                wrapperClassName: this.props.wrapperClassName,
                hidePopper: !this.isCalendarOpen(),
                portalId: this.props.portalId,
                popperModifiers: this.props.popperModifiers,
                targetComponent: this.renderInputContainer(),
                popperContainer: this.props.popperContainer,
                popperComponent: e,
                popperPlacement: this.props.popperPlacement,
                popperProps: this.props.popperProps,
                popperOnKeyDown: this.onPopperKeyDown,
                enableTabLoop: this.props.enableTabLoop,
              });
            },
          },
        ],
        [
          {
            key: "defaultProps",
            get: function () {
              return {
                allowSameDay: !1,
                dateFormat: "MM/dd/yyyy",
                dateFormatCalendar: "LLLL yyyy",
                onChange: function () {},
                disabled: !1,
                disabledKeyboardNavigation: !1,
                dropdownMode: "scroll",
                onFocus: function () {},
                onBlur: function () {},
                onKeyDown: function () {},
                onInputClick: function () {},
                onSelect: function () {},
                onClickOutside: function () {},
                onMonthChange: function () {},
                onCalendarOpen: function () {},
                onCalendarClose: function () {},
                preventOpenOnFocus: !1,
                onYearChange: function () {},
                onInputError: function () {},
                monthsShown: 1,
                readOnly: !1,
                withPortal: !1,
                shouldCloseOnSelect: !0,
                showTimeSelect: !1,
                showTimeInput: !1,
                showPreviousMonths: !1,
                showMonthYearPicker: !1,
                showFullMonthYearPicker: !1,
                showTwoColumnMonthYearPicker: !1,
                showFourColumnMonthYearPicker: !1,
                showYearPicker: !1,
                showQuarterYearPicker: !1,
                strictParsing: !1,
                timeIntervals: 30,
                timeCaption: "Time",
                previousMonthAriaLabel: "Previous Month",
                previousMonthButtonLabel: "Previous Month",
                nextMonthAriaLabel: "Next Month",
                nextMonthButtonLabel: "Next Month",
                previousYearAriaLabel: "Previous Year",
                previousYearButtonLabel: "Previous Year",
                nextYearAriaLabel: "Next Year",
                nextYearButtonLabel: "Next Year",
                timeInputLabel: "Time",
                enableTabLoop: !0,
                yearItemNumber: 12,
                renderDayContents: function (e) {
                  return e;
                },
                focusSelectedMonth: !1,
                showPopperArrow: !0,
                excludeScrollbar: !0,
                customTimeInput: null,
                calendarStartDay: void 0,
              };
            },
          },
        ]
      ),
      r
    );
  })(),
  Wr = "input",
  jr = "navigate";
(exports.CalendarContainer = Ir),
  (exports.default = Br),
  (exports.getDefaultLocale = jt),
  (exports.registerLocale = function (e, t) {
    var r = "undefined" != typeof window ? window : global;
    r.__localeData__ || (r.__localeData__ = {}), (r.__localeData__[e] = t);
  }),
  (exports.setDefaultLocale = function (e) {
    ("undefined" != typeof window ? window : global).__localeId__ = e;
  });
