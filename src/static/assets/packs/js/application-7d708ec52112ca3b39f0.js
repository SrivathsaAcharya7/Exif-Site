(self.webpackChunkjimpl_web = self.webpackChunkjimpl_web || []).push([
    [34], {
        883: function(e, t, n) {
            n(535).start(), n(533), n(805)
        },
        533: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(612),
                i = n.n(o),
                d = n(535),
                a = n.n(d),
                r = n(628),
                u = n.n(r),
                c = n(942);

            function l() {
                var e = document.documentElement,
                    t = (window.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    n = document.getElementById("sticky-to-top");
                n && (n.hidden = t <= 300)
            }
            i().use(u()), window.addEventListener("DOMContentLoaded", (function() {
                var e = document.getElementById("upload-container");
                if (e) {
                    var t = document.getElementById("js-upload"),
                        n = document.getElementById("remove-exif"),
                        o = document.getElementById("remove-exif-filename"),
                        d = document.getElementById("remove-exif-download-url"),
                        r = document.getElementById("remove-exif-view-metadata"),
                        u = document.getElementById("remove-exif-upload-another"),
                        l = document.getElementById("js-upload-error"),
                        s = document.getElementById("js-upload-progress-overlay"),
                        m = document.getElementById("js-upload-input"),
                        f = document.getElementById("url-upload"),
                        p = document.getElementById("url-upload-submit"),
                        v = document.getElementById("url-upload-input"),
                        w = e.getAttribute("jimpl-target"),
                        y = "/uploads?target=".concat(w),
                        g = "remove-exif" === w;
                    if (f) {
                        f.onsubmit = function(e) {
                            e.preventDefault(), _()
                        };
                        var E = new URLSearchParams(window.location.search).get("url");
                        E && E.trim() && v && (v.value = E.trim(), _())
                    }
                    u && (u.onclick = function(e) {
                        e.preventDefault(), p.disabled = !1, f.style.visibility = "unset", s.hidden = !0, m.disabled = !1, m.hidden = !1, t.classList.remove("js-upload-default-cursor"), o.innerText = "", n.hidden = !0
                    }), i().upload(".js-upload", {
                        url: y,
                        multiple: !0,
                        beforeSend: function(e) {
                            (0, c.L)("file_upload_start"), e.headers["X-CSRF-Token"] = document.querySelectorAll('meta[name="csrf-token"]')[0].content
                        },
                        error: function() {
                            (0, c.L)("file_upload_error"), h()
                        },
                        loadStart: function() {
                            b()
                        },
                        completeAll: function() {
                            (0, c.L)("file_upload_success");
                            var e = Array.prototype.slice.call(arguments),
                                t = e[0];
                            L(t.response)
                        }
                    })
                }

                function b() {
                    p.disabled = !0, m.disabled = !0, s.hidden = !1
                }

                function h() {
                    p.disabled = !1, m.disabled = !1, s.hidden = !0, i().modal(l).show()
                }

                function L(e) {
                    if (g) {
                        var i = "string" === typeof e ? JSON.parse(e) : e;
                        p.disabled = !0, f.reset(), f.style.visibility = "hidden", s.hidden = !0, m.disabled = !0, m.hidden = !0, t.classList.add("js-upload-default-cursor"), o.innerText = i.name, d.href = "/results/".concat(i.id, "/without-metadata"), r.href = "/results/".concat(i.id), n.hidden = !1
                    } else setTimeout((function() {
                        p.disabled = !1, m.disabled = !1, s.hidden = !0
                    }), 5e3), window.location.href = e
                }

                function _() {
                    var e = v.value;
                    if (e.trim()) {
                        var t = new FormData;
                        t.append("url", e), (0, c.L)("url_upload_start"), b(), a().ajax({
                            url: y,
                            type: "POST",
                            data: t,
                            success: function(e) {
                                (0, c.L)("url_upload_success"), L(e)
                            },
                            error: function() {
                                (0, c.L)("url_upload_error"), h()
                            }
                        })
                    }
                }
            })), document.addEventListener("DOMContentLoaded", (function() {
                l()
            })), window.addEventListener("scroll", (function() {
                l()
            })), window.addEventListener("DOMContentLoaded", (function() {
                ["facebook", "twitter", "pinterest", "linkedin"].forEach((function(e) {
                    var t = document.getElementById("share-".concat(e, "-link"));
                    t && (t.onclick = function() {
                        (0, c.L)("share_".concat(e, "_click"))
                    })
                }))
            }))
        },
        805: function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n(612),
                i = n.n(o),
                d = n(535),
                a = n.n(d),
                r = n(942);
            window.addEventListener("DOMContentLoaded", (function() {
                var e = document.getElementById("review-container"),
                    t = document.getElementById("review-form"),
                    n = document.getElementById("review-form-submit"),
                    o = document.getElementById("review-form-comment-container"),
                    d = document.getElementById("review-form-comment"),
                    u = 0;

                function c(e) {
                    n.hidden = !1, o.hidden = !1, u = e.target.value
                }
                t && (t.onsubmit = function(t) {
                    t.preventDefault(), n.disabled = !0, (0, r.L)("review_submit_start");
                    var o = new FormData;
                    o.append("rating", u), o.append("comment", d.value), a().ajax({
                        url: "/reviews",
                        type: "POST",
                        data: o,
                        success: function() {
                            (0, r.L)("review_submit_success"), e.remove(), i().notification("Review submitted, thank you!", {
                                status: "success",
                                pos: "bottom-center",
                                timeout: 5e3
                            })
                        },
                        error: function() {
                            (0, r.L)("review_submit_error"), n.disabled = !1, i().notification("Failed to submit your review, please try again later", {
                                status: "danger",
                                pos: "bottom-center",
                                timeout: 5e3
                            })
                        }
                    })
                }), document.querySelectorAll("#review-form input[name='rating']").forEach((function(e) {
                    e.addEventListener("click", c)
                }))
            })), window.addEventListener("DOMContentLoaded", (function() {
                var e = document.getElementById("upload-another-link"),
                    t = document.getElementById("remove-metadata-link"),
                    n = document.getElementById("view-full-exif-link");
                e && (e.onclick = function() {
                    (0, r.L)("upload_another_click")
                }), t && (t.onclick = function() {
                    (0, r.L)("remove_metadata_click")
                }), n && (n.onclick = function() {
                    (0, r.L)("view_full_exif_click")
                })
            }))
        },
        942: function(e, t, n) {
            "use strict";

            function o(e, t) {
                ! function() {
                    var e;
                    "function" === typeof window.gtag && (e = window).gtag.apply(e, arguments)
                }("event", e, t)
            }
            n.d(t, {
                L: function() {
                    return o
                }
            })
        }
    },
    function(e) {
        e.O(0, [377], (function() {
            return t = 883, e(e.s = t);
            var t
        }));
        e.O()
    }
]);
//# sourceMappingURL=application-7d708ec52112ca3b39f0.js.map