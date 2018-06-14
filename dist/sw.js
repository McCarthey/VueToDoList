var __wpo = { "assets": { "main": ["/VueToDoList/dist/build.js", "/VueToDoList/index.html"], "additional": [], "optional": [] }, "externals": [], "hashesMap": { "25c98d0020cfc2ec938180c5a4451db6628c7a14": "/VueToDoList/dist/build.js" }, "strategy": "changed", "responseStrategy": "cache-first", "version": "2018-6-14 11:44:43", "name": "webpack-offline", "pluginVersion": "5.0.5", "relativePaths": false };

! function(e) {
    function n(r) { if (t[r]) return t[r].exports; var o = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports }
    var t = {};
    n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r }) }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, n) { return Object.prototype.hasOwnProperty.call(e, n) }, n.p = "/dist/", n(n.s = 0)
}([function(e, n, t) {
    "use strict";

    function r(e, n) { return caches.match(e, { cacheName: n }).then(function(t) { return a(t) ? t : c(t).then(function(t) { return caches.open(n).then(function(n) { return n.put(e, t) }).then(function() { return t }) }) }).catch(function() {}) }

    function o(e, n) { return e + (-1 !== e.indexOf("?") ? "&" : "?") + "__uncache=" + encodeURIComponent(n) }

    function i(e) { return "navigate" === e.mode || e.headers.get("Upgrade-Insecure-Requests") || -1 !== (e.headers.get("Accept") || "").indexOf("text/html") }

    function a(e) { return !e || !e.redirected || !e.ok || "opaqueredirect" === e.type }

    function c(e) { return a(e) ? Promise.resolve(e) : ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function(n) { return new Response(n, { headers: e.headers, status: e.status }) }) }

    function s(e, n) { console.groupCollapsed("[SW]:", e), n.forEach(function(e) { console.log("Asset:", e) }), console.groupEnd() }
    if (function() {
            var e = ExtendableEvent.prototype.waitUntil,
                n = FetchEvent.prototype.respondWith,
                t = new WeakMap;
            ExtendableEvent.prototype.waitUntil = function(n) {
                var r = this,
                    o = t.get(r);
                return o ? void o.push(Promise.resolve(n)) : (o = [Promise.resolve(n)], t.set(r, o), e.call(r, Promise.resolve().then(function e() { var n = o.length; return Promise.all(o.map(function(e) { return e.catch(function() {}) })).then(function() { return o.length != n ? e() : (t.delete(r), Promise.all(o)) }) })))
            }, FetchEvent.prototype.respondWith = function(e) { return this.waitUntil(e), n.call(this, e) }
        }(), void 0 === u) var u = !1;
    ! function(e, n) {
        function t() {
            if (!S.additional.length) return Promise.resolve();
            u && console.log("[SW]:", "Caching additional");
            var e = void 0;
            return e = "changed" === O ? f("additional") : a("additional"), e.catch(function(e) { console.error("[SW]:", "Cache section `additional` failed to load") })
        }

        function a(n) { var t = S[n]; return caches.open(j).then(function(r) { return y(r, t, { bust: e.version, request: k, failAll: "main" === n }) }).then(function() { s("Cached assets: " + n, t) }).catch(function(e) { throw console.error(e), e }) }

        function f(n) {
            return h().then(function(t) {
                if (!t) return a(n);
                var r = t[0],
                    o = t[1],
                    i = t[2],
                    c = i.hashmap,
                    u = i.version;
                if (!i.hashmap || u === e.version) return a(n);
                var f = Object.keys(c).map(function(e) { return c[e] }),
                    l = o.map(function(e) { var n = new URL(e.url); return n.search = "", n.hash = "", n.toString() }),
                    h = S[n],
                    d = [],
                    p = h.filter(function(e) { return -1 === l.indexOf(e) || -1 === f.indexOf(e) });
                Object.keys(W).forEach(function(e) {
                    var n = W[e];
                    if (-1 !== h.indexOf(n) && -1 === p.indexOf(n) && -1 === d.indexOf(n)) {
                        var t = c[e];
                        t && -1 !== l.indexOf(t) ? d.push([t, n]) : p.push(n)
                    }
                }), s("Changed assets: " + n, p), s("Moved assets: " + n, d);
                var v = Promise.all(d.map(function(e) { return r.match(e[0]).then(function(n) { return [e[1], n] }) }));
                return caches.open(j).then(function(t) { var r = v.then(function(e) { return Promise.all(e.map(function(e) { return t.put(e[0], e[1]) })) }); return Promise.all([r, y(t, p, { bust: e.version, request: k, failAll: "main" === n, deleteFirst: "main" !== n })]) })
            })
        }

        function l() { return caches.keys().then(function(e) { var n = e.map(function(e) { if (0 === e.indexOf(E) && 0 !== e.indexOf(j)) return console.log("[SW]:", "Delete cache:", e), caches.delete(e) }); return Promise.all(n) }) }

        function h() { return caches.keys().then(function(e) { for (var n = e.length, t = void 0; n-- && (t = e[n], 0 !== t.indexOf(E));); if (t) { var r = void 0; return caches.open(t).then(function(e) { return r = e, e.match(new URL(M, location).toString()) }).then(function(e) { if (e) return Promise.all([r, r.keys(), e.json()]) }) } }) }

        function d() { return caches.open(j).then(function(n) { var t = new Response(JSON.stringify({ version: e.version, hashmap: W })); return n.put(new URL(M, location).toString(), t) }) }

        function p(e, n, t) {
            return m(e), r(t, j).then(function(r) {
                return r ? (u && console.log("[SW]:", "URL [" + t + "](" + n + ") from cache"), r) : fetch(e.request).then(function(r) {
                    return r.ok ? (u && console.log("[SW]:", "URL [" + n + "] from network"), t === n && function() {
                        var t = r.clone(),
                            o = caches.open(j).then(function(e) { return e.put(n, t) }).then(function() { console.log("[SW]:", "Cache asset: " + n) });
                        e.waitUntil(o)
                    }(), r) : (u && console.log("[SW]:", "URL [" + n + "] wrong response: [" + r.status + "] " + r.type), r)
                })
            })
        }

        function v(e, n, t) { return P(e).then(function(e) { if (e.ok) return u && console.log("[SW]:", "URL [" + n + "] from network"), e; throw e }).catch(function(e) { return u && console.log("[SW]:", "URL [" + n + "] from cache if possible"), r(t, j).then(function(n) { if (n) return n; if (e instanceof Response) return e; throw e }) }) }

        function m(e) {
            if (x && "function" == typeof x.map && e.preloadResponse && "navigate" === e.request.mode) {
                var n = x.map(new URL(e.request.url), e.request);
                n && g(n, e)
            }
        }

        function g(e, n) {
            var t = new URL(e, location),
                r = n.preloadResponse;
            T.set(r, { url: t, response: r });
            var o = function() { return T.has(r) },
                i = r.then(function(e) { if (e && o()) { var n = e.clone(); return caches.open(C).then(function(e) { if (o()) return e.put(t, n).then(function() { if (!o()) return caches.open(C).then(function(e) { return e.delete(t) }) }) }) } });
            n.waitUntil(i)
        }

        function w(e) {
            if (T) {
                var n = void 0,
                    t = void 0;
                return T.forEach(function(r, o) { r.url.href === e.href && (n = r.response, t = o) }), n ? (T.delete(t), n) : void 0
            }
        }

        function U(e) {
            var n = new URL(e.request.url);
            if (self.registration.navigationPreload && x && x.test && x.test(n, e.request)) {
                var t = w(n),
                    o = e.request;
                return t ? (e.waitUntil(caches.open(C).then(function(e) { return e.delete(o) })), t) : r(o, C).then(function(n) { return n && e.waitUntil(caches.open(C).then(function(e) { return e.delete(o) })), n || fetch(e.request) })
            }
        }

        function y(e, n, t) {
            var r = t.bust,
                i = !1 !== t.failAll,
                a = !0 === t.deleteFirst,
                s = t.request || { credentials: "omit", mode: "cors" },
                u = Promise.resolve();
            return a && (u = Promise.all(n.map(function(n) { return e.delete(n).catch(function() {}) }))), Promise.all(n.map(function(e) { return r && (e = o(e, r)), fetch(e, s).then(c).then(function(e) { return e.ok ? { response: e } : { error: !0 } }, function() { return { error: !0 } }) })).then(function(t) { return i && t.some(function(e) { return e.error }) ? Promise.reject(new Error("Wrong response status")) : (i || (t = t.filter(function(e) { return !e.error })), u.then(function() { var r = t.map(function(t, r) { var o = t.response; return e.put(n[r], o) }); return Promise.all(r) })) })
        }

        function R(e) {
            var n = e.url,
                t = new URL(n),
                r = void 0;
            r = i(e) ? "navigate" : t.origin === location.origin ? "same-origin" : "cross-origin";
            for (var o = 0; o < q.length; o++) { var a = q[o]; if (a && (!a.requestTypes || -1 !== a.requestTypes.indexOf(r))) { var c = void 0; if ((c = "function" == typeof a.match ? a.match(t, e) : n.replace(a.match, a.to)) && c !== n) return c } }
        }

        function P(e) { return e.preloadResponse && !0 === x ? e.preloadResponse.then(function(n) { return n || fetch(e.request) }) : fetch(e.request) }
        var q = n.cacheMaps,
            x = n.navigationPreload,
            O = e.strategy,
            L = e.responseStrategy,
            S = e.assets,
            W = e.hashesMap,
            b = e.externals,
            k = e.prefetchRequest || { credentials: "same-origin", mode: "cors" },
            E = e.name,
            _ = e.version,
            j = E + ":" + _,
            C = E + "$preload",
            M = "__offline_webpack__data";
        ! function() { Object.keys(S).forEach(function(e) { S[e] = S[e].map(function(e) { var n = new URL(e, location); return n.hash = "", -1 === b.indexOf(e) && (n.search = ""), n.toString() }) }), W = Object.keys(W).reduce(function(e, n) { var t = new URL(W[n], location); return t.search = "", t.hash = "", e[n] = t.toString(), e }, {}), b = b.map(function(e) { var n = new URL(e, location); return n.hash = "", n.toString() }) }();
        var A = [].concat(S.main, S.additional, S.optional);
        self.addEventListener("install", function(e) {
            console.log("[SW]:", "Install event");
            var n = void 0;
            n = "changed" === O ? f("main") : a("main"), e.waitUntil(n)
        }), self.addEventListener("activate", function(e) {
            console.log("[SW]:", "Activate event");
            var n = t();
            n = n.then(d), n = n.then(l), n = n.then(function() { if (self.clients && self.clients.claim) return self.clients.claim() }), x && self.registration.navigationPreload && (n = Promise.all([n, self.registration.navigationPreload.enable()])), e.waitUntil(n)
        }), self.addEventListener("fetch", function(e) {
            if ("GET" === e.request.method && ("only-if-cached" !== e.request.cache || "same-origin" === e.request.mode)) {
                var n = new URL(e.request.url);
                n.hash = "";
                var t = n.toString(); - 1 === b.indexOf(t) && (n.search = "", t = n.toString());
                var r = -1 !== A.indexOf(t),
                    o = t;
                if (!r) {
                    var i = R(e.request);
                    i && (o = i, r = !0)
                }
                if (r) {
                    var a = void 0;
                    a = "network-first" === L ? v(e, t, o) : p(e, t, o), e.respondWith(a)
                } else { if ("navigate" === e.request.mode && !0 === x) return void e.respondWith(P(e)); if (x) { var c = U(e); if (c) return void e.respondWith(c) } }
            }
        }), self.addEventListener("message", function(e) {
            var n = e.data;
            if (n) switch (n.action) {
                case "skipWaiting":
                    self.skipWaiting && self.skipWaiting()
            }
        });
        var T = new Map
    }(__wpo, { loaders: {}, cacheMaps: [{ match: function(e) { if (e.pathname !== location.pathname) return new URL("/VueToDoList/", location) }, to: null, requestTypes: ["navigate"] }], navigationPreload: !1 }), e.exports = t(1)
}, function(e, n) {}]);