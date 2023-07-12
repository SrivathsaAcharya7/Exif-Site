
(self.webpackChunkjimpl_web = self.webpackChunkjimpl_web || []).push([
    [377], {
        535: function(t, e, i) {
            var n, s;
            (function() {
                (function() {
                    (function() {
                        this.Rails = {
                            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
                            buttonClickSelector: {
                                selector: "button[data-remote]:not([form]), button[data-confirm]:not([form])",
                                exclude: "form button"
                            },
                            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
                            formSubmitSelector: "form:not([data-turbo=true])",
                            formInputClickSelector: "form:not([data-turbo=true]) input[type=submit], form:not([data-turbo=true]) input[type=image], form:not([data-turbo=true]) button[type=submit], form:not([data-turbo=true]) button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
                            formDisableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
                            formEnableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
                            fileInputSelector: "input[name][type=file]:not([disabled])",
                            linkDisableSelector: "a[data-disable-with], a[data-disable]",
                            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]"
                        }
                    }).call(this)
                }).call(this);
                var o = this.Rails;
                (function() {
                    (function() {
                        var t;
                        t = null, o.loadCSPNonce = function() {
                            var e;
                            return t = null != (e = document.querySelector("meta[name=csp-nonce]")) ? e.content : void 0
                        }, o.cspNonce = function() {
                            return null != t ? t : o.loadCSPNonce()
                        }
                    }).call(this),
                        function() {
                            var t;
                            t = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector, o.matches = function(e, i) {
                                return null != i.exclude ? t.call(e, i.selector) && !t.call(e, i.exclude) : t.call(e, i)
                            }, o.getData = function(t, e) {
                                var i;
                                return null != (i = t._ujsData) ? i[e] : void 0
                            }, o.setData = function(t, e, i) {
                                return null == t._ujsData && (t._ujsData = {}), t._ujsData[e] = i
                            }, o.$ = function(t) {
                                return Array.prototype.slice.call(document.querySelectorAll(t))
                            }
                        }.call(this),
                        function() {
                            var t, e, i;
                            t = o.$, i = o.csrfToken = function() {
                                var t;
                                return (t = document.querySelector("meta[name=csrf-token]")) && t.content
                            }, e = o.csrfParam = function() {
                                var t;
                                return (t = document.querySelector("meta[name=csrf-param]")) && t.content
                            }, o.CSRFProtection = function(t) {
                                var e;
                                if (null != (e = i())) return t.setRequestHeader("X-CSRF-Token", e)
                            }, o.refreshCSRFTokens = function() {
                                var n, s;
                                if (s = i(), n = e(), null != s && null != n) return t('form input[name="' + n + '"]').forEach((function(t) {
                                    return t.value = s
                                }))
                            }
                        }.call(this),
                        function() {
                            var t, e, i, n;
                            i = o.matches, "function" !== typeof(t = window.CustomEvent) && ((t = function(t, e) {
                                var i;
                                return (i = document.createEvent("CustomEvent")).initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
                            }).prototype = window.Event.prototype, n = t.prototype.preventDefault, t.prototype.preventDefault = function() {
                                var t;
                                return t = n.call(this), this.cancelable && !this.defaultPrevented && Object.defineProperty(this, "defaultPrevented", {
                                    get: function() {
                                        return !0
                                    }
                                }), t
                            }), e = o.fire = function(e, i, n) {
                                var s;
                                return s = new t(i, {
                                    bubbles: !0,
                                    cancelable: !0,
                                    detail: n
                                }), e.dispatchEvent(s), !s.defaultPrevented
                            }, o.stopEverything = function(t) {
                                return e(t.target, "ujs:everythingStopped"), t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation()
                            }, o.delegate = function(t, e, n, s) {
                                return t.addEventListener(n, (function(t) {
                                    var n;
                                    for (n = t.target; n instanceof Element && !i(n, e);) n = n.parentNode;
                                    if (n instanceof Element && !1 === s.call(n, t)) return t.preventDefault(), t.stopPropagation()
                                }))
                            }
                        }.call(this),
                        function() {
                            var t, e, i, n, s, r;
                            n = o.cspNonce, e = o.CSRFProtection, o.fire, t = {
                                "*": "*/*",
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript",
                                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                            }, o.ajax = function(t) {
                                var e;
                                return t = s(t), e = i(t, (function() {
                                    var i, n;
                                    return n = r(null != (i = e.response) ? i : e.responseText, e.getResponseHeader("Content-Type")), 2 === Math.floor(e.status / 100) ? "function" === typeof t.success && t.success(n, e.statusText, e) : "function" === typeof t.error && t.error(n, e.statusText, e), "function" === typeof t.complete ? t.complete(e, e.statusText) : void 0
                                })), !(null != t.beforeSend && !t.beforeSend(e, t)) && (e.readyState === XMLHttpRequest.OPENED ? e.send(t.data) : void 0)
                            }, s = function(e) {
                                return e.url = e.url || location.href, e.type = e.type.toUpperCase(), "GET" === e.type && e.data && (e.url.indexOf("?") < 0 ? e.url += "?" + e.data : e.url += "&" + e.data), null == t[e.dataType] && (e.dataType = "*"), e.accept = t[e.dataType], "*" !== e.dataType && (e.accept += ", */*; q=0.01"), e
                            }, i = function(t, i) {
                                var n;
                                return (n = new XMLHttpRequest).open(t.type, t.url, !0), n.setRequestHeader("Accept", t.accept), "string" === typeof t.data && n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8"), t.crossDomain || (n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e(n)), n.withCredentials = !!t.withCredentials, n.onreadystatechange = function() {
                                    if (n.readyState === XMLHttpRequest.DONE) return i(n)
                                }, n
                            }, r = function(t, e) {
                                var i, s;
                                if ("string" === typeof t && "string" === typeof e)
                                    if (e.match(/\bjson\b/)) try {
                                            t = JSON.parse(t)
                                        } catch (o) {} else if (e.match(/\b(?:java|ecma)script\b/))(s = document.createElement("script")).setAttribute("nonce", n()), s.text = t, document.head.appendChild(s).parentNode.removeChild(s);
                                        else if (e.match(/\b(xml|html|svg)\b/)) {
                                    i = new DOMParser, e = e.replace(/;.+/, "");
                                    try {
                                        t = i.parseFromString(t, e)
                                    } catch (o) {}
                                }
                                return t
                            }, o.href = function(t) {
                                return t.href
                            }, o.isCrossDomain = function(t) {
                                var e, i;
                                (e = document.createElement("a")).href = location.href, i = document.createElement("a");
                                try {
                                    return i.href = t, !((!i.protocol || ":" === i.protocol) && !i.host || e.protocol + "//" + e.host === i.protocol + "//" + i.host)
                                } catch (n) {
                                    return n, !0
                                }
                            }
                        }.call(this),
                        function() {
                            var t, e;
                            t = o.matches, e = function(t) {
                                return Array.prototype.slice.call(t)
                            }, o.serializeElement = function(i, n) {
                                var s, o;
                                return s = [i], t(i, "form") && (s = e(i.elements)), o = [], s.forEach((function(i) {
                                    if (i.name && !i.disabled && !t(i, "fieldset[disabled] *")) return t(i, "select") ? e(i.options).forEach((function(t) {
                                        if (t.selected) return o.push({
                                            name: i.name,
                                            value: t.value
                                        })
                                    })) : i.checked || -1 === ["radio", "checkbox", "submit"].indexOf(i.type) ? o.push({
                                        name: i.name,
                                        value: i.value
                                    }) : void 0
                                })), n && o.push(n), o.map((function(t) {
                                    return null != t.name ? encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value) : t
                                })).join("&")
                            }, o.formElements = function(i, n) {
                                return t(i, "form") ? e(i.elements).filter((function(e) {
                                    return t(e, n)
                                })) : e(i.querySelectorAll(n))
                            }
                        }.call(this),
                        function() {
                            var t, e, i;
                            e = o.fire, i = o.stopEverything, o.handleConfirm = function(e) {
                                if (!t(this)) return i(e)
                            }, o.confirm = function(t, e) {
                                return confirm(t)
                            }, t = function(t) {
                                var i, n, s;
                                if (!(s = t.getAttribute("data-confirm"))) return !0;
                                if (i = !1, e(t, "confirm")) {
                                    try {
                                        i = o.confirm(s, t)
                                    } catch (r) {}
                                    n = e(t, "confirm:complete", [i])
                                }
                                return i && n
                            }
                        }.call(this),
                        function() {
                            var t, e, i, n, s, r, l, h, a, c, d, u;
                            c = o.matches, h = o.getData, d = o.setData, u = o.stopEverything, l = o.formElements, o.handleDisabledElement = function(t) {
                                if (this, this.disabled) return u(t)
                            }, o.enableElement = function(t) {
                                var e;
                                if (t instanceof Event) {
                                    if (a(t)) return;
                                    e = t.target
                                } else e = t;
                                return c(e, o.linkDisableSelector) ? r(e) : c(e, o.buttonDisableSelector) || c(e, o.formEnableSelector) ? n(e) : c(e, o.formSubmitSelector) ? s(e) : void 0
                            }, o.disableElement = function(n) {
                                var s;
                                return s = n instanceof Event ? n.target : n, c(s, o.linkDisableSelector) ? i(s) : c(s, o.buttonDisableSelector) || c(s, o.formDisableSelector) ? t(s) : c(s, o.formSubmitSelector) ? e(s) : void 0
                            }, i = function(t) {
                                var e;
                                if (!h(t, "ujs:disabled")) return null != (e = t.getAttribute("data-disable-with")) && (d(t, "ujs:enable-with", t.innerHTML), t.innerHTML = e), t.addEventListener("click", u), d(t, "ujs:disabled", !0)
                            }, r = function(t) {
                                var e;
                                return null != (e = h(t, "ujs:enable-with")) && (t.innerHTML = e, d(t, "ujs:enable-with", null)), t.removeEventListener("click", u), d(t, "ujs:disabled", null)
                            }, e = function(e) {
                                return l(e, o.formDisableSelector).forEach(t)
                            }, t = function(t) {
                                var e;
                                if (!h(t, "ujs:disabled")) return null != (e = t.getAttribute("data-disable-with")) && (c(t, "button") ? (d(t, "ujs:enable-with", t.innerHTML), t.innerHTML = e) : (d(t, "ujs:enable-with", t.value), t.value = e)), t.disabled = !0, d(t, "ujs:disabled", !0)
                            }, s = function(t) {
                                return l(t, o.formEnableSelector).forEach(n)
                            }, n = function(t) {
                                var e;
                                return null != (e = h(t, "ujs:enable-with")) && (c(t, "button") ? t.innerHTML = e : t.value = e, d(t, "ujs:enable-with", null)), t.disabled = !1, d(t, "ujs:disabled", null)
                            }, a = function(t) {
                                var e, i;
                                return null != (null != (i = null != (e = t.detail) ? e[0] : void 0) ? i.getResponseHeader("X-Xhr-Redirect") : void 0)
                            }
                        }.call(this),
                        function() {
                            var t;
                            t = o.stopEverything, o.handleMethod = function(e) {
                                var i, n, s, r, l, h, a;
                                if (a = (h = this).getAttribute("data-method")) return l = o.href(h), n = o.csrfToken(), i = o.csrfParam(), s = document.createElement("form"), r = "<input name='_method' value='" + a + "' type='hidden' />", null == i || null == n || o.isCrossDomain(l) || (r += "<input name='" + i + "' value='" + n + "' type='hidden' />"), r += '<input type="submit" />', s.method = "post", s.action = l, s.target = h.target, s.innerHTML = r, s.style.display = "none", document.body.appendChild(s), s.querySelector('[type="submit"]').click(), t(e)
                            }
                        }.call(this),
                        function() {
                            var t, e, i, n, s, r, l, h, a, c = [].slice;
                            r = o.matches, i = o.getData, h = o.setData, e = o.fire, a = o.stopEverything, t = o.ajax, n = o.isCrossDomain, l = o.serializeElement, s = function(t) {
                                var e;
                                return null != (e = t.getAttribute("data-remote")) && "false" !== e
                            }, o.handleRemote = function(d) {
                                var u, g, p, f, m, w, v;
                                return !s(f = this) || (e(f, "ajax:before") ? (v = f.getAttribute("data-with-credentials"), p = f.getAttribute("data-type") || "script", r(f, o.formSubmitSelector) ? (u = i(f, "ujs:submit-button"), m = i(f, "ujs:submit-button-formmethod") || f.method, w = i(f, "ujs:submit-button-formaction") || f.getAttribute("action") || location.href, "GET" === m.toUpperCase() && (w = w.replace(/\?.*$/, "")), "multipart/form-data" === f.enctype ? (g = new FormData(f), null != u && g.append(u.name, u.value)) : g = l(f, u), h(f, "ujs:submit-button", null), h(f, "ujs:submit-button-formmethod", null), h(f, "ujs:submit-button-formaction", null)) : r(f, o.buttonClickSelector) || r(f, o.inputChangeSelector) ? (m = f.getAttribute("data-method"), w = f.getAttribute("data-url"), g = l(f, f.getAttribute("data-params"))) : (m = f.getAttribute("data-method"), w = o.href(f), g = f.getAttribute("data-params")), t({
                                    type: m || "GET",
                                    url: w,
                                    data: g,
                                    dataType: p,
                                    beforeSend: function(t, i) {
                                        return e(f, "ajax:beforeSend", [t, i]) ? e(f, "ajax:send", [t]) : (e(f, "ajax:stopped"), !1)
                                    },
                                    success: function() {
                                        var t;
                                        return t = 1 <= arguments.length ? c.call(arguments, 0) : [], e(f, "ajax:success", t)
                                    },
                                    error: function() {
                                        var t;
                                        return t = 1 <= arguments.length ? c.call(arguments, 0) : [], e(f, "ajax:error", t)
                                    },
                                    complete: function() {
                                        var t;
                                        return t = 1 <= arguments.length ? c.call(arguments, 0) : [], e(f, "ajax:complete", t)
                                    },
                                    crossDomain: n(w),
                                    withCredentials: null != v && "false" !== v
                                }), a(d)) : (e(f, "ajax:stopped"), !1))
                            }, o.formSubmitButtonClick = function(t) {
                                var e, i;
                                if (i = (e = this).form) return e.name && h(i, "ujs:submit-button", {
                                    name: e.name,
                                    value: e.value
                                }), h(i, "ujs:formnovalidate-button", e.formNoValidate), h(i, "ujs:submit-button-formaction", e.getAttribute("formaction")), h(i, "ujs:submit-button-formmethod", e.getAttribute("formmethod"))
                            }, o.preventInsignificantClick = function(t) {
                                var e, i, n;
                                if (this, n = (this.getAttribute("data-method") || "GET").toUpperCase(), e = this.getAttribute("data-params"), i = (t.metaKey || t.ctrlKey) && "GET" === n && !e, null != t.button && 0 !== t.button || i) return t.stopImmediatePropagation()
                            }
                        }.call(this),
                        function() {
                            var t, e, i, n, s, r, l, h, a, c, d, u, g, p, f;
                            if (r = o.fire, i = o.delegate, h = o.getData, t = o.$, f = o.refreshCSRFTokens, e = o.CSRFProtection, g = o.loadCSPNonce, s = o.enableElement, n = o.disableElement, c = o.handleDisabledElement, a = o.handleConfirm, p = o.preventInsignificantClick, u = o.handleRemote, l = o.formSubmitButtonClick, d = o.handleMethod, "undefined" !== typeof jQuery && null !== jQuery && null != jQuery.ajax) {
                                if (jQuery.rails) throw new Error("If you load both jquery_ujs and rails-ujs, use rails-ujs only.");
                                jQuery.rails = o, jQuery.ajaxPrefilter((function(t, i, n) {
                                    if (!t.crossDomain) return e(n)
                                }))
                            }
                            o.start = function() {
                                if (window._rails_loaded) throw new Error("rails-ujs has already been loaded!");
                                return window.addEventListener("pageshow", (function() {
                                    return t(o.formEnableSelector).forEach((function(t) {
                                        if (h(t, "ujs:disabled")) return s(t)
                                    })), t(o.linkDisableSelector).forEach((function(t) {
                                        if (h(t, "ujs:disabled")) return s(t)
                                    }))
                                })), i(document, o.linkDisableSelector, "ajax:complete", s), i(document, o.linkDisableSelector, "ajax:stopped", s), i(document, o.buttonDisableSelector, "ajax:complete", s), i(document, o.buttonDisableSelector, "ajax:stopped", s), i(document, o.linkClickSelector, "click", p), i(document, o.linkClickSelector, "click", c), i(document, o.linkClickSelector, "click", a), i(document, o.linkClickSelector, "click", n), i(document, o.linkClickSelector, "click", u), i(document, o.linkClickSelector, "click", d), i(document, o.buttonClickSelector, "click", p), i(document, o.buttonClickSelector, "click", c), i(document, o.buttonClickSelector, "click", a), i(document, o.buttonClickSelector, "click", n), i(document, o.buttonClickSelector, "click", u), i(document, o.inputChangeSelector, "change", c), i(document, o.inputChangeSelector, "change", a), i(document, o.inputChangeSelector, "change", u), i(document, o.formSubmitSelector, "submit", c), i(document, o.formSubmitSelector, "submit", a), i(document, o.formSubmitSelector, "submit", u), i(document, o.formSubmitSelector, "submit", (function(t) {
                                    return setTimeout((function() {
                                        return n(t)
                                    }), 13)
                                })), i(document, o.formSubmitSelector, "ajax:send", n), i(document, o.formSubmitSelector, "ajax:complete", s), i(document, o.formInputClickSelector, "click", p), i(document, o.formInputClickSelector, "click", c), i(document, o.formInputClickSelector, "click", a), i(document, o.formInputClickSelector, "click", l), document.addEventListener("DOMContentLoaded", f), document.addEventListener("DOMContentLoaded", g), window._rails_loaded = !0
                            }, window.Rails === o && r(document, "rails:attachBindings") && o.start()
                        }.call(this)
                }).call(this), t.exports ? t.exports = o : void 0 === (s = "function" === typeof(n = o) ? n.call(e, i, e, t) : n) || (t.exports = s)
            }).call(this)
        },
        628: function(t) {
            t.exports = function() {
                "use strict";

                function t(e) {
                    t.installed || e.icon.add({
                        "500px": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z"/><path d="M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z"/><path d="M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z"/><path d="M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z"/></svg>',
                        album: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="10" height="1"/><rect x="3" y="4" width="14" height="1"/><rect fill="none" stroke="#000" x="1.5" y="6.5" width="17" height="11"/></svg>',
                        "arrow-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66"/><line fill="none" stroke="#000" x1="10.5" y1="4" x2="10.5" y2="15"/></svg>',
                        "arrow-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 14 5 9.5 10 5"/><line fill="none" stroke="#000" x1="16" y1="9.5" x2="5" y2="9.52"/></svg>',
                        "arrow-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="10 5 15 9.5 10 14"/><line fill="none" stroke="#000" x1="4" y1="9.5" x2="15" y2="9.5"/></svg>',
                        "arrow-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4"/><line fill="none" stroke="#000" x1="10.5" y1="16" x2="10.5" y2="5"/></svg>',
                        bag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M7.5,7.5V4A2.48,2.48,0,0,1,10,1.5,2.54,2.54,0,0,1,12.5,4V7.5"/><polygon fill="none" stroke="#000" points="16.5 7.5 3.5 7.5 2.5 18.5 17.5 18.5 16.5 7.5"/></svg>',
                        ban: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><line fill="none" stroke="#000" stroke-width="1.1" x1="4" y1="3.5" x2="16" y2="16.5"/></svg>',
                        behance: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z"/><path d="M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z"/><rect x="13" y="4" width="5" height="1.4"/></svg>',
                        bell: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z"/><path fill="none" stroke="#000" d="M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16"/></svg>',
                        bold: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z"/></svg>',
                        bolt: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z"/></svg>',
                        bookmark: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5"/></svg>',
                        calendar: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"/><rect width="1" height="3" x="6" y="2"/><rect width="1" height="3" x="13" y="2"/></svg>',
                        camera: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10.8" r="3.8"/><path fill="none" stroke="#000" d="M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z"/></svg>',
                        cart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="7.3" cy="17.3" r="1.4"/><circle cx="13.3" cy="17.3" r="1.4"/><polyline fill="none" stroke="#000" points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"/></svg>',
                        check: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.1" points="4,10 8,15 17,4"/></svg>',
                        "chevron-double-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 14 6 10 10 6"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="14 14 10 10 14 6"/></svg>',
                        "chevron-double-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="10 6 14 10 10 14"/><polyline fill="none" stroke="#000" stroke-width="1.03" points="6 6 10 10 6 14"/></svg>',
                        "chevron-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"/></svg>',
                        "chevron-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="13 16 7 10 13 4"/></svg>',
                        "chevron-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="7 4 13 10 7 16"/></svg>',
                        "chevron-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.03" points="4 13 10 7 16 13"/></svg>',
                        clock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
                        close: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"/><path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"/></svg>',
                        "cloud-download": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="11.75 16 9.5 18.25 7.25 16"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
                        "cloud-upload": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6"/><polyline fill="none" stroke="#000" points="7.25 11.75 9.5 9.5 11.75 11.75"/><path fill="none" stroke="#000" d="M9.5,18 L9.5,9.5"/></svg>',
                        code: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.01" points="13,4 19,10 13,16"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="7,4 1,10 7,16"/></svg>',
                        cog: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="9.997" cy="10" r="3.31"/><path fill="none" stroke="#000" d="M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z"/></svg>',
                        comment: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z"/></svg>',
                        commenting: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5"/><circle cx="10" cy="8" r="1"/><circle cx="6" cy="8" r="1"/><circle cx="14" cy="8" r="1"/></svg>',
                        comments: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="2 0.5 19.5 0.5 19.5 13"/><path d="M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z"/></svg>',
                        copy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="2.5" width="12" height="16"/><polyline fill="none" stroke="#000" points="5 0.5 17.5 0.5 17.5 17"/></svg>',
                        "credit-card": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="1.5" y="4.5" width="17" height="12"/><rect x="1" y="7" width="18" height="3"/></svg>',
                        database: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="10" cy="4.64" rx="7.5" ry="3.14"/><path fill="none" stroke="#000" d="M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11"/><path fill="none" stroke="#000" d="M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25"/><path fill="none" stroke="#000" d="M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64"/></svg>',
                        desktop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="15" width="1" height="2"/><rect x="11" y="15" width="1" height="2"/><rect x="5" y="16" width="10" height="1"/><rect fill="none" stroke="#000" x="1.5" y="3.5" width="17" height="11"/></svg>',
                        discord: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M16.074,4.361a14.243,14.243,0,0,0-3.61-1.134,10.61,10.61,0,0,0-.463.96,13.219,13.219,0,0,0-4,0,10.138,10.138,0,0,0-.468-.96A14.206,14.206,0,0,0,3.919,4.364,15.146,15.146,0,0,0,1.324,14.5a14.435,14.435,0,0,0,4.428,2.269A10.982,10.982,0,0,0,6.7,15.21a9.294,9.294,0,0,1-1.494-.727c.125-.093.248-.19.366-.289a10.212,10.212,0,0,0,8.854,0c.119.1.242.2.366.289a9.274,9.274,0,0,1-1.5.728,10.8,10.8,0,0,0,.948,1.562,14.419,14.419,0,0,0,4.431-2.27A15.128,15.128,0,0,0,16.074,4.361Zm-8.981,8.1a1.7,1.7,0,0,1-1.573-1.79A1.689,1.689,0,0,1,7.093,8.881a1.679,1.679,0,0,1,1.573,1.791A1.687,1.687,0,0,1,7.093,12.462Zm5.814,0a1.7,1.7,0,0,1-1.573-1.79,1.689,1.689,0,0,1,1.573-1.791,1.679,1.679,0,0,1,1.573,1.791A1.688,1.688,0,0,1,12.907,12.462Z"/></svg>',
                        download: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="14,10 9.5,14.5 5,10"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="13.91" x2="9.5" y2="3"/></svg>',
                        dribbble: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.4" d="M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5"/><path fill="none" stroke="#000" stroke-width="1.4" d="M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6"/><path fill="none" stroke="#000" stroke-width="1.4" d="M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4"/><circle fill="none" stroke="#000" stroke-width="1.4" cx="10" cy="10" r="9"/></svg>',
                        etsy: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z"/></svg>',
                        expand: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 18 2 18 7 17 7 17 3 13 3"/><polygon points="2 13 3 13 3 17 7 17 7 18 2 18"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11,9 L17,3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M3,17 L9,11"/></svg>',
                        facebook: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z"/></svg>',
                        "file-edit": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z"/><polyline fill="none" stroke="#000" points="16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5"/></svg>',
                        "file-pdf": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><path d="M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z"/></svg>',
                        "file-text": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" width="13" height="17" x="3.5" y="1.5"/><line fill="none" stroke="#000" x1="6" x2="12" y1="12.5" y2="12.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="8.5" y2="8.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="6.5" y2="6.5"/><line fill="none" stroke="#000" x1="6" x2="14" y1="10.5" y2="10.5"/></svg>',
                        file: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="1.5" width="13" height="17"/></svg>',
                        flickr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="5.5" cy="9.5" r="3.5"/><circle cx="14.5" cy="9.5" r="3.5"/></svg>',
                        folder: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5"/></svg>',
                        forward: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z"/></svg>',
                        foursquare: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z"/></svg>',
                        future: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline points="19 2 18 2 18 6 14 6 14 7 19 7 19 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10"/><rect x="9" y="4" width="1" height="7"/><path d="M13.018,14.197 L9.445,10.625" fill="none" stroke="#000" stroke-width="1.1"/></svg>',
                        "git-branch": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="3" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14" cy="6" r="2"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="7" cy="17" r="2"/><path fill="none" stroke="#000" stroke-width="2" d="M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5"/></svg>',
                        "git-fork": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.2" cx="5.79" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="14.19" cy="2.79" r="1.79"/><circle fill="none" stroke="#000" stroke-width="1.2" cx="10.03" cy="16.79" r="1.79"/><path fill="none" stroke="#000" stroke-width="2" d="M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57"/></svg>',
                        "github-alt": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z"/></svg>',
                        github: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z"/></svg>',
                        gitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3.5" y="1" width="1.531" height="11.471"/><rect x="7.324" y="4.059" width="1.529" height="15.294"/><rect x="11.148" y="4.059" width="1.527" height="15.294"/><rect x="14.971" y="4.059" width="1.529" height="8.412"/></svg>',
                        google: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z"/></svg>',
                        grid: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="3" height="3"/><rect x="8" y="2" width="3" height="3"/><rect x="14" y="2" width="3" height="3"/><rect x="2" y="8" width="3" height="3"/><rect x="8" y="8" width="3" height="3"/><rect x="14" y="8" width="3" height="3"/><rect x="2" y="14" width="3" height="3"/><rect x="8" y="14" width="3" height="3"/><rect x="14" y="14" width="3" height="3"/></svg>',
                        happy: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="13" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle fill="none" stroke="#000" cx="10" cy="10" r="8.5"/><path fill="none" stroke="#000" d="M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4"/></svg>',
                        hashtag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z"/></svg>',
                        heart: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.03" d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z"/></svg>',
                        history: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="#000" points="1 2 2 2 2 6 6 6 6 7 1 7 1 2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10"/><rect x="9" y="4" width="1" height="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.018,14.197 L9.445,10.625"/></svg>',
                        home: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65"/><polygon points="15 4 18 4 18 7 17 7 17 5 15 5"/><polygon points="3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19"/></svg>',
                        image: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="16.1" cy="6.1" r="1.1"/><rect fill="none" stroke="#000" x=".5" y="2.5" width="19" height="15"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="4,13 8,9 13,14"/><polyline fill="none" stroke="#000" stroke-width="1.01" points="11,12 12.5,10.5 16,14"/></svg>',
                        info: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
                        instagram: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z"/><circle cx="14.87" cy="5.26" r="1.09"/><path d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z"/></svg>',
                        italic: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z"/></svg>',
                        joomla: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z"/><path d="M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8"/><path d="M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8"/><path d="M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7"/></svg>',
                        laptop: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="16" width="20" height="1"/><rect fill="none" stroke="#000" x="2.5" y="4.5" width="15" height="10"/></svg>',
                        lifesaver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z"/></svg>',
                        link: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375"/><path fill="none" stroke="#000" stroke-width="1.1" d="M7.925,11.875 L11.925,7.975"/></svg>',
                        linkedin: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z"/><path d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z"/></svg>',
                        list: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="4" width="12" height="1"/><rect x="6" y="9" width="12" height="1"/><rect x="6" y="14" width="12" height="1"/><rect x="2" y="4" width="2" height="1"/><rect x="2" y="9" width="2" height="1"/><rect x="2" y="14" width="2" height="1"/></svg>',
                        location: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z"/><circle fill="none" stroke="#000" cx="10" cy="6.8" r="2.3"/></svg>',
                        lock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" height="10" width="13" y="8.5" x="3.5"/><path fill="none" stroke="#000" d="M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8"/></svg>',
                        mail: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="1.4,6.5 10,11 18.6,6.5"/><path d="M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z"/></svg>',
                        menu: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="16" height="1"/><rect x="2" y="9" width="16" height="1"/><rect x="2" y="14" width="16" height="1"/></svg>',
                        microphone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" x1="10" x2="10" y1="16.44" y2="18.5"/><line fill="none" stroke="#000" x1="7" x2="13" y1="18.5" y2="18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6"/></svg>',
                        "minus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
                        minus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect height="1" width="18" y="9" x="1"/></svg>',
                        "more-vertical": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="3" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="10" cy="17" r="2"/></svg>',
                        more: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3" cy="10" r="2"/><circle cx="10" cy="10" r="2"/><circle cx="17" cy="10" r="2"/></svg>',
                        move: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="4,5 1,5 1,9 2,9 2,6 4,6"/><polygon points="1,16 2,16 2,18 4,18 4,19 1,19"/><polygon points="14,16 14,19 11,19 11,18 13,18 13,16"/><rect fill="none" stroke="#000" x="5.5" y="1.5" width="13" height="13"/><rect x="1" y="11" width="1" height="3"/><rect x="6" y="18" width="3" height="1"/></svg>',
                        nut: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3"/><circle fill="none" stroke="#000" cx="10" cy="10" r="3.5"/></svg>',
                        pagekit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19"/></svg>',
                        "paint-bucket": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z"/><path fill="none" stroke="#000" stroke-width="1.1" d="M6.42,2.33 L11.7,7.61"/><path d="M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z"/></svg>',
                        pencil: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z"/><path fill="none" stroke="#000" d="M15.98,7.268 L13.851,5.148"/></svg>',
                        "phone-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z"/><circle cx="3.8" cy="10.5" r=".8"/></svg>',
                        phone: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z"/><circle cx="10.5" cy="16.5" r=".8"/></svg>',
                        pinterest: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1"/></svg>',
                        "play-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.1" points="8.5 7 13.5 10 8.5 13"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/></svg>',
                        play: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="6.5,5 14.5,10 6.5,15"/></svg>',
                        "plus-circle": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.5" cy="9.5" r="9"/><line fill="none" stroke="#000" x1="9.5" y1="5" x2="9.5" y2="14"/><line fill="none" stroke="#000" x1="5" y1="9.5" x2="14" y2="9.5"/></svg>',
                        plus: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="1" width="1" height="17"/><rect x="1" y="9" width="17" height="1"/></svg>',
                        print: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5"/><polyline fill="none" stroke="#000" points="15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5"/><rect fill="none" stroke="#000" width="11" height="6" x="4.5" y="11.5"/><rect width="8" height="1" x="6" y="13"/><rect width="8" height="1" x="6" y="15"/></svg>',
                        pull: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7"/><line fill="none" stroke="#000" x1="9.5" y1="11" x2="9.5" y2="2"/><polyline fill="none" stroke="#000" points="6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5"/></svg>',
                        push: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3"/><line fill="none" stroke="#000" x1="9.5" y1="10" x2="9.5" y2="1"/><polyline fill="none" stroke="#000" points="6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5"/></svg>',
                        question: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><circle cx="10.44" cy="14.42" r="1.05"/><path fill="none" stroke="#000" stroke-width="1.2" d="M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75"/></svg>',
                        "quote-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z"/><path d="M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z"/></svg>',
                        receiver: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.01" d="M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611"/></svg>',
                        reddit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z"/><path d="M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z"/><path d="M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z"/><path d="M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z"/></svg>',
                        refresh: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5"/><polyline fill="none" stroke="#000" points="9.9 2 12.79 4.89 9.79 7.9"/></svg>',
                        reply: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z"/></svg>',
                        rss: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="3.12" cy="16.8" r="1.85"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5"/></svg>',
                        search: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
                        server: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="1" height="2"/><rect x="5" y="3" width="1" height="2"/><rect x="7" y="3" width="1" height="2"/><rect x="16" y="3" width="1" height="1"/><rect x="16" y="10" width="1" height="1"/><circle fill="none" stroke="#000" cx="9.9" cy="17.4" r="1.4"/><rect x="3" y="10" width="1" height="2"/><rect x="5" y="10" width="1" height="2"/><rect x="9.5" y="14" width="1" height="2"/><rect x="3" y="17" width="6" height="1"/><rect x="11" y="17" width="6" height="1"/><rect fill="none" stroke="#000" x="1.5" y="1.5" width="17" height="5"/><rect fill="none" stroke="#000" x="1.5" y="8.5" width="17" height="5"/></svg>',
                        settings: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><ellipse fill="none" stroke="#000" cx="6.11" cy="3.55" rx="2.11" ry="2.15"/><ellipse fill="none" stroke="#000" cx="6.11" cy="15.55" rx="2.11" ry="2.15"/><circle fill="none" stroke="#000" cx="13.15" cy="9.55" r="2.15"/><rect x="1" y="3" width="3" height="1"/><rect x="10" y="3" width="8" height="1"/><rect x="1" y="9" width="8" height="1"/><rect x="15" y="9" width="3" height="1"/><rect x="1" y="15" width="3" height="1"/><rect x="10" y="15" width="8" height="1"/></svg>',
                        shrink: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="11 4 12 4 12 8 16 8 16 9 11 9"/><polygon points="4 11 9 11 9 16 8 16 8 12 4 12"/><path fill="none" stroke="#000" stroke-width="1.1" d="M12,8 L18,2"/><path fill="none" stroke="#000" stroke-width="1.1" d="M2,18 L8,12"/></svg>',
                        "sign-in": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3"/><polygon points="9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5"/></svg>',
                        "sign-out": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5"/><polygon points="13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3"/></svg>',
                        social: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="13.4" y1="14" x2="6.3" y2="10.7"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13.5" y1="5.5" x2="6.5" y2="8.8"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="4.6" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="15.5" cy="14.8" r="2.3"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="4.5" cy="9.8" r="2.3"/></svg>',
                        soundcloud: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z"/><rect x="6" y="6.5" width="1.5" height="8.5"/><rect x="3" y="8" width="1.5" height="7"/><rect y="10" width="1.5" height="5"/></svg>',
                        star: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" stroke-width="1.01" points="10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27"/></svg>',
                        strikethrough: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z"/><rect x="3" y="10" width="15" height="1"/></svg>',
                        table: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="1" y="3" width="18" height="1"/><rect x="1" y="7" width="18" height="1"/><rect x="1" y="11" width="18" height="1"/><rect x="1" y="15" width="18" height="1"/></svg>',
                        "tablet-landscape": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z"/><circle cx="3.7" cy="10.5" r=".8"/></svg>',
                        tablet: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z"/><circle cx="10.5" cy="16.3" r=".8"/></svg>',
                        tag: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" stroke-width="1.1" d="M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z"/><circle cx="14" cy="6" r="1"/></svg>',
                        thumbnails: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="3.5" width="5" height="5"/><rect fill="none" stroke="#000" x="11.5" y="11.5" width="5" height="5"/><rect fill="none" stroke="#000" x="3.5" y="11.5" width="5" height="5"/></svg>',
                        tiktok: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.24,6V8.82a6.79,6.79,0,0,1-4-1.28v5.81A5.26,5.26,0,1,1,8,8.1a4.36,4.36,0,0,1,.72.05v2.9A2.57,2.57,0,0,0,7.64,11a2.4,2.4,0,1,0,2.77,2.38V2h2.86a4,4,0,0,0,1.84,3.38A4,4,0,0,0,17.24,6Z"/></svg>',
                        trash: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="6.5 3 6.5 1.5 13.5 1.5 13.5 3"/><polyline fill="none" stroke="#000" points="4.5 4 4.5 18.5 15.5 18.5 15.5 4"/><rect x="8" y="7" width="1" height="9"/><rect x="11" y="7" width="1" height="9"/><rect x="2" y="3" width="16" height="1"/></svg>',
                        "triangle-down": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 7 15 7 10 12"/></svg>',
                        "triangle-left": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 5 7 10 12 15"/></svg>',
                        "triangle-right": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="8 5 13 10 8 15"/></svg>',
                        "triangle-up": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 13 10 8 15 13"/></svg>',
                        tripadvisor: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z"/></svg>',
                        tumblr: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z"/></svg>',
                        tv: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="16" width="6" height="1"/><rect fill="none" stroke="#000" x=".5" y="3.5" width="19" height="11"/></svg>',
                        twitch: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.23,1,2,4.23V15.85H5.88v3.23L9.1,15.85h2.59L17.5,10V1Zm11,8.4L13.62,12H11L8.78,14.24V12H5.88V2.29H16.21Z"/><rect x="12.98" y="4.55" width="1.29" height="3.88"/><rect x="9.43" y="4.55" width="1.29" height="3.88"/></svg>',
                        twitter: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74"/></svg>',
                        uikit: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon points="14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3"/><polygon points="9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3"/></svg>',
                        unlock: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" stroke="#000" x="3.5" y="8.5" width="13" height="10"/><path fill="none" stroke="#000" d="M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9"/></svg>',
                        upload: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" points="5 8 9.5 3.5 14 8"/><rect x="3" y="17" width="13" height="1"/><line fill="none" stroke="#000" x1="9.5" y1="15" x2="9.5" y2="4"/></svg>',
                        user: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9.9" cy="6.4" r="4.4"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2"/></svg>',
                        users: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="7.7" cy="8.6" r="3.5"/><path fill="none" stroke="#000" stroke-width="1.1" d="M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3"/><path fill="none" stroke="#000" stroke-width="1.1" d="M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1"/></svg>',
                        "video-camera": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><polygon fill="none" stroke="#000" points="17.5 6.9 17.5 13.1 13.5 10.4 13.5 14.5 2.5 14.5 2.5 5.5 13.5 5.5 13.5 9.6 17.5 6.9"/></svg>',
                        vimeo: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z"/></svg>',
                        warning: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="14" r="1"/><circle fill="none" stroke="#000" stroke-width="1.1" cx="10" cy="10" r="9"/><path d="M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z"/></svg>',
                        whatsapp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9"/></svg>',
                        wordpress: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z"/></svg>',
                        world: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" d="M1,10.5 L19,10.5"/><path fill="none" stroke="#000" d="M2.35,15.5 L17.65,15.5"/><path fill="none" stroke="#000" d="M2.35,5.5 L17.523,5.5"/><path fill="none" stroke="#000" d="M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z"/><circle fill="none" stroke="#000" cx="10" cy="10.5" r="9"/></svg>',
                        xing: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z"/><path d="M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z"/></svg>',
                        yelp: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z"/></svg>',
                        youtube: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z"/></svg>'
                    })
                }
                return "undefined" !== typeof window && window.UIkit && window.UIkit.use(t), t
            }()
        },
        612: function(t) {
            t.exports = function() {
                "use strict";
                const {
                    hasOwnProperty: t,
                    toString: e
                } = Object.prototype;

                function i(e, i) {
                    return t.call(e, i)
                }
                const n = /\B([A-Z])/g,
                    s = Q((t => t.replace(n, "-$1").toLowerCase())),
                    o = /-(\w)/g,
                    r = Q((t => t.replace(o, h))),
                    l = Q((t => t.length ? h(null, t.charAt(0)) + t.slice(1) : ""));

                function h(t, e) {
                    return e ? e.toUpperCase() : ""
                }

                function a(t, e) {
                    return null == t || null == t.startsWith ? void 0 : t.startsWith(e)
                }

                function c(t, e) {
                    return null == t || null == t.endsWith ? void 0 : t.endsWith(e)
                }

                function d(t, e) {
                    return null == t || null == t.includes ? void 0 : t.includes(e)
                }

                function u(t, e) {
                    return null == t || null == t.findIndex ? void 0 : t.findIndex(e)
                }
                const {
                    isArray: g,
                    from: p
                } = Array, {
                    assign: f
                } = Object;

                function m(t) {
                    return "function" === typeof t
                }

                function w(t) {
                    return null !== t && "object" === typeof t
                }

                function v(t) {
                    return "[object Object]" === e.call(t)
                }

                function x(t) {
                    return w(t) && t === t.window
                }

                function y(t) {
                    return 9 === k(t)
                }

                function b(t) {
                    return k(t) >= 1
                }

                function C(t) {
                    return 1 === k(t)
                }

                function k(t) {
                    return !x(t) && w(t) && t.nodeType
                }

                function L(t) {
                    return "boolean" === typeof t
                }

                function $(t) {
                    return "string" === typeof t
                }

                function S(t) {
                    return "number" === typeof t
                }

                function M(t) {
                    return S(t) || $(t) && !isNaN(t - parseFloat(t))
                }

                function B(t) {
                    return !(g(t) ? t.length : w(t) && Object.keys(t).length)
                }

                function I(t) {
                    return void 0 === t
                }

                function T(t) {
                    return L(t) ? t : "true" === t || "1" === t || "" === t || "false" !== t && "0" !== t && t
                }

                function E(t) {
                    const e = Number(t);
                    return !isNaN(e) && e
                }

                function A(t) {
                    return parseFloat(t) || 0
                }

                function _(t) {
                    return z(t)[0]
                }

                function z(t) {
                    return t && (b(t) ? [t] : Array.from(t).filter(b)) || []
                }

                function D(t) {
                    var e;
                    if (x(t)) return t;
                    const i = y(t = _(t)) ? t : null == (e = t) ? void 0 : e.ownerDocument;
                    return (null == i ? void 0 : i.defaultView) || window
                }

                function P(t, e) {
                    return t === e || w(t) && w(e) && Object.keys(t).length === Object.keys(e).length && N(t, ((t, i) => t === e[i]))
                }

                function j(t, e, i) {
                    return t.replace(new RegExp(e + "|" + i, "g"), (t => t === e ? i : e))
                }

                function H(t) {
                    return t[t.length - 1]
                }

                function N(t, e) {
                    for (const i in t)
                        if (!1 === e(t[i], i)) return !1;
                    return !0
                }

                function O(t, e) {
                    return t.slice().sort(((t, i) => {
                        let {
                            [e]: n = 0
                        } = t, {
                            [e]: s = 0
                        } = i;
                        return n > s ? 1 : s > n ? -1 : 0
                    }))
                }

                function Z(t, e) {
                    const i = new Set;
                    return t.filter((t => {
                        let {
                            [e]: n
                        } = t;
                        return !i.has(n) && i.add(n)
                    }))
                }

                function F(t, e, i) {
                    return void 0 === e && (e = 0), void 0 === i && (i = 1), Math.min(Math.max(E(t) || 0, e), i)
                }

                function R() {}

                function V() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    return [
                        ["bottom", "top"],
                        ["right", "left"]
                    ].every((t => {
                        let [i, n] = t;
                        return Math.min(...e.map((t => {
                            let {
                                [i]: e
                            } = t;
                            return e
                        }))) - Math.max(...e.map((t => {
                            let {
                                [n]: e
                            } = t;
                            return e
                        }))) > 0
                    }))
                }

                function W(t, e) {
                    return t.x <= e.right && t.x >= e.left && t.y <= e.bottom && t.y >= e.top
                }

                function q(t, e, i) {
                    const n = "width" === e ? "height" : "width";
                    return {
                        [n]: t[e] ? Math.round(i * t[n] / t[e]) : t[n],
                        [e]: i
                    }
                }

                function U(t, e) {
                    t = { ...t
                    };
                    for (const i in t) t = t[i] > e[i] ? q(t, i, e[i]) : t;
                    return t
                }

                function X(t, e) {
                    t = U(t, e);
                    for (const i in t) t = t[i] < e[i] ? q(t, i, e[i]) : t;
                    return t
                }
                const Y = {
                    ratio: q,
                    contain: U,
                    cover: X
                };

                function G(t, e, i, n) {
                    void 0 === i && (i = 0), void 0 === n && (n = !1), e = z(e);
                    const {
                        length: s
                    } = e;
                    return s ? (t = M(t) ? E(t) : "next" === t ? i + 1 : "previous" === t ? i - 1 : e.indexOf(_(t)), n ? F(t, 0, s - 1) : (t %= s) < 0 ? t + s : t) : -1
                }

                function Q(t) {
                    const e = Object.create(null);
                    return i => e[i] || (e[i] = t(i))
                }
                class J {
                    constructor() {
                        this.promise = new Promise(((t, e) => {
                            this.reject = e, this.resolve = t
                        }))
                    }
                }

                function K(t, e, i) {
                    if (w(e))
                        for (const s in e) K(t, s, e[s]);
                    else {
                        var n;
                        if (I(i)) return null == (n = _(t)) ? void 0 : n.getAttribute(e);
                        for (const n of z(t)) m(i) && (i = i.call(n, K(n, e))), null === i ? et(n, e) : n.setAttribute(e, i)
                    }
                }

                function tt(t, e) {
                    return z(t).some((t => t.hasAttribute(e)))
                }

                function et(t, e) {
                    const i = z(t);
                    for (const n of e.split(" "))
                        for (const t of i) t.removeAttribute(n)
                }

                function it(t, e) {
                    for (const i of [e, "data-" + e])
                        if (tt(t, i)) return K(t, i)
                }
                const nt = {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    menuitem: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                };

                function st(t) {
                    return z(t).some((t => nt[t.tagName.toLowerCase()]))
                }

                function ot(t) {
                    return z(t).some((t => t.offsetWidth || t.offsetHeight || t.getClientRects().length))
                }
                const rt = "input,select,textarea,button";

                function lt(t) {
                    return z(t).some((t => ut(t, rt)))
                }
                const ht = rt + ",a[href],[tabindex]";

                function at(t) {
                    return ut(t, ht)
                }

                function ct(t) {
                    var e;
                    return null == (e = _(t)) ? void 0 : e.parentElement
                }

                function dt(t, e) {
                    return z(t).filter((t => ut(t, e)))
                }

                function ut(t, e) {
                    return z(t).some((t => t.matches(e)))
                }

                function gt(t, e) {
                    return a(e, ">") && (e = e.slice(1)), C(t) ? t.closest(e) : z(t).map((t => gt(t, e))).filter(Boolean)
                }

                function pt(t, e) {
                    return $(e) ? ut(t, e) || !!gt(t, e) : t === e || _(e).contains(_(t))
                }

                function ft(t, e) {
                    const i = [];
                    for (; t = ct(t);) e && !ut(t, e) || i.push(t);
                    return i
                }

                function mt(t, e) {
                    const i = (t = _(t)) ? z(t.children) : [];
                    return e ? dt(i, e) : i
                }

                function wt(t, e) {
                    return e ? z(t).indexOf(_(e)) : mt(ct(t)).indexOf(t)
                }

                function vt(t, e) {
                    return yt(t, Lt(t, e))
                }

                function xt(t, e) {
                    return bt(t, Lt(t, e))
                }

                function yt(t, e) {
                    return _(Mt(t, e, "querySelector"))
                }

                function bt(t, e) {
                    return z(Mt(t, e, "querySelectorAll"))
                }
                const Ct = /(^|[^\\],)\s*[!>+~-]/,
                    kt = Q((t => t.match(Ct)));

                function Lt(t, e) {
                    return void 0 === e && (e = document), $(t) && kt(t) || y(e) ? e : e.ownerDocument
                }
                const $t = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g,
                    St = Q((t => t.replace($t, "$1 *")));

                function Mt(t, e, i) {
                    if (void 0 === e && (e = document), !t || !$(t)) return t;
                    if (t = St(t), kt(t)) {
                        const i = It(t);
                        t = "";
                        for (let n of i) {
                            let s = e;
                            if ("!" === n[0]) {
                                const t = n.substr(1).trim().split(" ");
                                if (s = gt(ct(e), t[0]), n = t.slice(1).join(" ").trim(), !n.length && 1 === i.length) return s
                            }
                            if ("-" === n[0]) {
                                const t = n.substr(1).trim().split(" "),
                                    i = (s || e).previousElementSibling;
                                s = ut(i, n.substr(1)) ? i : null, n = t.slice(1).join(" ")
                            }
                            s && (t += (t ? "," : "") + Tt(s) + " " + n)
                        }
                        e = document
                    }
                    try {
                        return e[i](t)
                    } catch (n) {
                        return null
                    }
                }
                const Bt = /.*?[^\\](?:,|$)/g,
                    It = Q((t => t.match(Bt).map((t => t.replace(/,$/, "").trim()))));

                function Tt(t) {
                    const e = [];
                    for (; t.parentNode;) {
                        const i = K(t, "id");
                        if (i) {
                            e.unshift("#" + Et(i));
                            break
                        } {
                            let {
                                tagName: i
                            } = t;
                            "HTML" !== i && (i += ":nth-child(" + (wt(t) + 1) + ")"), e.unshift(i), t = t.parentNode
                        }
                    }
                    return e.join(" > ")
                }

                function Et(t) {
                    return $(t) ? CSS.escape(t) : ""
                }

                function At() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    let [n, s, o, r, l = !1] = jt(e);
                    r.length > 1 && (r = Nt(r)), null != l && l.self && (r = Ot(r)), o && (r = Ht(o, r));
                    for (const h of s)
                        for (const t of n) t.addEventListener(h, r, l);
                    return () => _t(n, s, r, l)
                }

                function _t() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    let [n, s, , o, r = !1] = jt(e);
                    for (const l of s)
                        for (const t of n) t.removeEventListener(l, o, r)
                }

                function zt() {
                    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                    const [n, s, o, r, l = !1, h] = jt(e), a = At(n, s, o, (t => {
                        const e = !h || h(t);
                        e && (a(), r(t, e))
                    }), l);
                    return a
                }

                function Dt(t, e, i) {
                    return Rt(t).every((t => t.dispatchEvent(Pt(e, !0, !0, i))))
                }

                function Pt(t, e, i, n) {
                    return void 0 === e && (e = !0), void 0 === i && (i = !1), $(t) && (t = new CustomEvent(t, {
                        bubbles: e,
                        cancelable: i,
                        detail: n
                    })), t
                }

                function jt(t) {
                    return t[0] = Rt(t[0]), $(t[1]) && (t[1] = t[1].split(" ")), m(t[2]) && t.splice(2, 0, !1), t
                }

                function Ht(t, e) {
                    return i => {
                        const n = ">" === t[0] ? bt(t, i.currentTarget).reverse().filter((t => pt(i.target, t)))[0] : gt(i.target, t);
                        n && (i.current = n, e.call(this, i))
                    }
                }

                function Nt(t) {
                    return e => g(e.detail) ? t(e, ...e.detail) : t(e)
                }

                function Ot(t) {
                    return function(e) {
                        if (e.target === e.currentTarget || e.target === e.current) return t.call(null, e)
                    }
                }

                function Zt(t) {
                    return t && "addEventListener" in t
                }

                function Ft(t) {
                    return Zt(t) ? t : _(t)
                }

                function Rt(t) {
                    return g(t) ? t.map(Ft).filter(Boolean) : $(t) ? bt(t) : Zt(t) ? [t] : z(t)
                }

                function Vt(t) {
                    return "touch" === t.pointerType || !!t.touches
                }

                function Wt(t) {
                    var e, i;
                    const {
                        clientX: n,
                        clientY: s
                    } = (null == (e = t.touches) ? void 0 : e[0]) || (null == (i = t.changedTouches) ? void 0 : i[0]) || t;
                    return {
                        x: n,
                        y: s
                    }
                }

                function qt(t, e) {
                    const i = {
                        data: null,
                        method: "GET",
                        headers: {},
                        xhr: new XMLHttpRequest,
                        beforeSend: R,
                        responseType: "",
                        ...e
                    };
                    return Promise.resolve().then((() => i.beforeSend(i))).then((() => Ut(t, i)))
                }

                function Ut(t, e) {
                    return new Promise(((i, n) => {
                        const {
                            xhr: s
                        } = e;
                        for (const t in e)
                            if (t in s) try {
                                s[t] = e[t]
                            } catch (o) {}
                        s.open(e.method.toUpperCase(), t);
                        for (const t in e.headers) s.setRequestHeader(t, e.headers[t]);
                        At(s, "load", (() => {
                            0 === s.status || s.status >= 200 && s.status < 300 || 304 === s.status ? i(s) : n(f(Error(s.statusText), {
                                xhr: s,
                                status: s.status
                            }))
                        })), At(s, "error", (() => n(f(Error("Network Error"), {
                            xhr: s
                        })))), At(s, "timeout", (() => n(f(Error("Network Timeout"), {
                            xhr: s
                        })))), s.send(e.data)
                    }))
                }

                function Xt(t, e, i) {
                    return new Promise(((n, s) => {
                        const o = new Image;
                        o.onerror = t => {
                            s(t)
                        }, o.onload = () => {
                            n(o)
                        }, i && (o.sizes = i), e && (o.srcset = e), o.src = t
                    }))
                }
                const Yt = {
                    "animation-iteration-count": !0,
                    "column-count": !0,
                    "fill-opacity": !0,
                    "flex-grow": !0,
                    "flex-shrink": !0,
                    "font-weight": !0,
                    "line-height": !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    "stroke-dasharray": !0,
                    "stroke-dashoffset": !0,
                    widows: !0,
                    "z-index": !0,
                    zoom: !0
                };

                function Gt(t, e, i, n) {
                    void 0 === n && (n = "");
                    const s = z(t);
                    for (const o of s)
                        if ($(e)) {
                            if (e = Kt(e), I(i)) return getComputedStyle(o).getPropertyValue(e);
                            o.style.setProperty(e, M(i) && !Yt[e] ? i + "px" : i || S(i) ? i : "", n)
                        } else {
                            if (g(e)) {
                                const t = {};
                                for (const i of e) t[i] = Gt(o, i);
                                return t
                            }
                            w(e) && (n = i, N(e, ((t, e) => Gt(o, e, t, n))))
                        }
                    return s[0]
                }
                const Qt = /^\s*(["'])?(.*?)\1\s*$/;

                function Jt(t, e) {
                    return void 0 === e && (e = document.documentElement), Gt(e, "--uk-" + t).replace(Qt, "$2")
                }
                const Kt = Q((t => ee(t))),
                    te = ["webkit", "moz"];

                function ee(t) {
                    if ("-" === t[0]) return t;
                    t = s(t);
                    const {
                        style: e
                    } = document.documentElement;
                    if (t in e) return t;
                    let i, n = te.length;
                    for (; n--;)
                        if (i = "-" + te[n] + "-" + t, i in e) return i
                }

                function ie(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                    he(t, i, "add")
                }

                function ne(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) i[n - 1] = arguments[n];
                    he(t, i, "remove")
                }

                function se(t, e) {
                    K(t, "class", (t => (t || "").replace(new RegExp("\\b" + e + "\\b", "g"), "")))
                }

                function oe(t) {
                    (arguments.length <= 1 ? void 0 : arguments[1]) && ne(t, arguments.length <= 1 ? void 0 : arguments[1]), (arguments.length <= 2 ? void 0 : arguments[2]) && ie(t, arguments.length <= 2 ? void 0 : arguments[2])
                }

                function re(t, e) {
                    return [e] = ae(e), !!e && z(t).some((t => t.classList.contains(e)))
                }

                function le(t, e, i) {
                    const n = ae(e);
                    I(i) || (i = !!i);
                    for (const s of z(t))
                        for (const t of n) s.classList.toggle(t, i)
                }

                function he(t, e, i) {
                    e = e.reduce(((t, e) => t.concat(ae(e))), []);
                    for (const n of z(t)) n.classList[i](...e)
                }

                function ae(t) {
                    return String(t).split(/\s|,/).filter(Boolean)
                }

                function ce(t, e, i, n) {
                    return void 0 === i && (i = 400), void 0 === n && (n = "linear"), Promise.all(z(t).map((t => new Promise(((s, o) => {
                        for (const i in e) {
                            const e = Gt(t, i);
                            "" === e && Gt(t, i, e)
                        }
                        const r = setTimeout((() => Dt(t, "transitionend")), i);
                        zt(t, "transitionend transitioncanceled", (e => {
                            let {
                                type: i
                            } = e;
                            clearTimeout(r), ne(t, "uk-transition"), Gt(t, {
                                transitionProperty: "",
                                transitionDuration: "",
                                transitionTimingFunction: ""
                            }), "transitioncanceled" === i ? o() : s(t)
                        }), {
                            self: !0
                        }), ie(t, "uk-transition"), Gt(t, {
                            transitionProperty: Object.keys(e).map(Kt).join(","),
                            transitionDuration: i + "ms",
                            transitionTimingFunction: n,
                            ...e
                        })
                    })))))
                }
                const de = {
                        start: ce,
                        stop: t => (Dt(t, "transitionend"), Promise.resolve()),
                        cancel(t) {
                            Dt(t, "transitioncanceled")
                        },
                        inProgress: t => re(t, "uk-transition")
                    },
                    ue = "uk-animation-";

                function ge(t, e, i, n, s) {
                    return void 0 === i && (i = 200), Promise.all(z(t).map((t => new Promise(((o, r) => {
                        Dt(t, "animationcanceled");
                        const l = setTimeout((() => Dt(t, "animationend")), i);
                        zt(t, "animationend animationcanceled", (e => {
                            let {
                                type: i
                            } = e;
                            clearTimeout(l), "animationcanceled" === i ? r() : o(t), Gt(t, "animationDuration", ""), se(t, ue + "\\S*")
                        }), {
                            self: !0
                        }), Gt(t, "animationDuration", i + "ms"), ie(t, e, ue + (s ? "leave" : "enter")), a(e, ue) && (n && ie(t, "uk-transform-origin-" + n), s && ie(t, ue + "reverse"))
                    })))))
                }
                const pe = new RegExp(ue + "(enter|leave)"),
                    fe = { in: ge,
                        out: (t, e, i, n) => ge(t, e, i, n, !0),
                        inProgress: t => pe.test(K(t, "class")),
                        cancel(t) {
                            Dt(t, "animationcanceled")
                        }
                    },
                    me = {
                        width: ["left", "right"],
                        height: ["top", "bottom"]
                    };

                function we(t) {
                    const e = C(t) ? _(t).getBoundingClientRect() : {
                        height: be(t),
                        width: Ce(t),
                        top: 0,
                        left: 0
                    };
                    return {
                        height: e.height,
                        width: e.width,
                        top: e.top,
                        left: e.left,
                        bottom: e.top + e.height,
                        right: e.left + e.width
                    }
                }

                function ve(t, e) {
                    const i = we(t);
                    if (t) {
                        const {
                            scrollY: e,
                            scrollX: n
                        } = D(t), s = {
                            height: e,
                            width: n
                        };
                        for (const t in me)
                            for (const e of me[t]) i[e] += s[t]
                    }
                    if (!e) return i;
                    const n = Gt(t, "position");
                    N(Gt(t, ["left", "top"]), ((s, o) => Gt(t, o, e[o] - i[o] + A("absolute" === n && "auto" === s ? xe(t)[o] : s))))
                }

                function xe(t) {
                    let {
                        top: e,
                        left: i
                    } = ve(t);
                    const {
                        ownerDocument: {
                            body: n,
                            documentElement: s
                        },
                        offsetParent: o
                    } = _(t);
                    let r = o || s;
                    for (; r && (r === n || r === s) && "static" === Gt(r, "position");) r = r.parentNode;
                    if (C(r)) {
                        const t = ve(r);
                        e -= t.top + A(Gt(r, "borderTopWidth")), i -= t.left + A(Gt(r, "borderLeftWidth"))
                    }
                    return {
                        top: e - A(Gt(t, "marginTop")),
                        left: i - A(Gt(t, "marginLeft"))
                    }
                }

                function ye(t) {
                    const e = [0, 0];
                    t = _(t);
                    do {
                        if (e[0] += t.offsetTop, e[1] += t.offsetLeft, "fixed" === Gt(t, "position")) {
                            const i = D(t);
                            return e[0] += i.scrollY, e[1] += i.scrollX, e
                        }
                    } while (t = t.offsetParent);
                    return e
                }
                const be = ke("height"),
                    Ce = ke("width");

                function ke(t) {
                    const e = l(t);
                    return (i, n) => {
                        if (I(n)) {
                            if (x(i)) return i["inner" + e];
                            if (y(i)) {
                                const t = i.documentElement;
                                return Math.max(t["offset" + e], t["scroll" + e])
                            }
                            return (n = "auto" === (n = Gt(i = _(i), t)) ? i["offset" + e] : A(n) || 0) - Le(i, t)
                        }
                        return Gt(i, t, n || 0 === n ? +n + Le(i, t) + "px" : "")
                    }
                }

                function Le(t, e, i) {
                    return void 0 === i && (i = "border-box"), Gt(t, "boxSizing") === i ? me[e].map(l).reduce(((e, i) => e + A(Gt(t, "padding" + i)) + A(Gt(t, "border" + i + "Width"))), 0) : 0
                }

                function $e(t) {
                    for (const e in me)
                        for (const i in me[e])
                            if (me[e][i] === t) return me[e][1 - i];
                    return t
                }

                function Se(t, e, i, n) {
                    return void 0 === e && (e = "width"), void 0 === i && (i = window), void 0 === n && (n = !1), $(t) ? Be(t).reduce(((t, s) => {
                        const o = Te(s);
                        return o && (s = Ee("vh" === o ? be(D(i)) : "vw" === o ? Ce(D(i)) : n ? i["offset" + l(e)] : we(i)[e], s)), t + A(s)
                    }), 0) : A(t)
                }
                const Me = /-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,
                    Be = Q((t => t.toString().replace(/\s/g, "").match(Me) || [])),
                    Ie = /(?:v[hw]|%)$/,
                    Te = Q((t => (t.match(Ie) || [])[0]));

                function Ee(t, e) {
                    return t * A(e) / 100
                }

                function Ae(t) {
                    "loading" === document.readyState ? zt(document, "DOMContentLoaded", t) : t()
                }

                function _e(t, e) {
                    var i;
                    return (null == t || null == (i = t.tagName) ? void 0 : i.toLowerCase()) === e.toLowerCase()
                }

                function ze(t) {
                    return Pe(t, "")
                }

                function De(t, e) {
                    return I(e) ? Qe(t).innerHTML : Pe(t, e)
                }
                const Pe = Ze("replaceChildren"),
                    je = Ze("prepend"),
                    He = Ze("append"),
                    Ne = Ze("before"),
                    Oe = Ze("after");

                function Ze(t) {
                    return function(e, i) {
                        var n;
                        const s = z($(i) ? Xe(i) : i);
                        return null == (n = Qe(e)) || n[t](...s), Ye(s)
                    }
                }

                function Fe(t) {
                    z(t).forEach((t => t.remove()))
                }

                function Re(t, e) {
                    for (e = _(Ne(t, e)); e.firstChild;) e = e.firstChild;
                    return He(e, t), e
                }

                function Ve(t, e) {
                    return z(z(t).map((t => t.hasChildNodes() ? Re(z(t.childNodes), e) : He(t, e))))
                }

                function We(t) {
                    z(t).map(ct).filter(((t, e, i) => i.indexOf(t) === e)).forEach((t => t.replaceWith(...t.childNodes)))
                }
                const qe = /^\s*<(\w+|!)[^>]*>/,
                    Ue = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

                function Xe(t) {
                    const e = Ue.exec(t);
                    if (e) return document.createElement(e[1]);
                    const i = document.createElement("div");
                    return qe.test(t) ? i.insertAdjacentHTML("beforeend", t.trim()) : i.textContent = t, Ye(i.childNodes)
                }

                function Ye(t) {
                    return t.length > 1 ? t : t[0]
                }

                function Ge(t, e) {
                    if (C(t))
                        for (e(t), t = t.firstElementChild; t;) {
                            const i = t.nextElementSibling;
                            Ge(t, e), t = i
                        }
                }

                function Qe(t, e) {
                    return Ke(t) ? _(Xe(t)) : yt(t, e)
                }

                function Je(t, e) {
                    return Ke(t) ? z(Xe(t)) : bt(t, e)
                }

                function Ke(t) {
                    return $(t) && a(t.trim(), "<")
                }
                const ti = "undefined" !== typeof window,
                    ei = ti && "rtl" === K(document.documentElement, "dir"),
                    ii = ti && "ontouchstart" in window,
                    ni = ti && window.PointerEvent,
                    si = ni ? "pointerdown" : ii ? "touchstart" : "mousedown",
                    oi = ni ? "pointermove" : ii ? "touchmove" : "mousemove",
                    ri = ni ? "pointerup" : ii ? "touchend" : "mouseup",
                    li = ni ? "pointerenter" : ii ? "" : "mouseenter",
                    hi = ni ? "pointerleave" : ii ? "" : "mouseleave",
                    ai = ni ? "pointercancel" : "touchcancel",
                    ci = {
                        reads: [],
                        writes: [],
                        read(t) {
                            return this.reads.push(t), gi(), t
                        },
                        write(t) {
                            return this.writes.push(t), gi(), t
                        },
                        clear(t) {
                            fi(this.reads, t), fi(this.writes, t)
                        },
                        flush: di
                    };

                function di(t) {
                    pi(ci.reads), pi(ci.writes.splice(0)), ci.scheduled = !1, (ci.reads.length || ci.writes.length) && gi(t + 1)
                }
                const ui = 4;

                function gi(t) {
                    ci.scheduled || (ci.scheduled = !0, t && t < ui ? Promise.resolve().then((() => di(t))) : requestAnimationFrame((() => di(1))))
                }

                function pi(t) {
                    let e;
                    for (; e = t.shift();) try {
                        e()
                    } catch (i) {
                        console.error(i)
                    }
                }

                function fi(t, e) {
                    const i = t.indexOf(e);
                    return ~i && t.splice(i, 1)
                }

                function mi() {}

                function wi(t, e) {
                    let [{
                        x: i,
                        y: n
                    }, {
                        x: s,
                        y: o
                    }] = t, [{
                        x: r,
                        y: l
                    }, {
                        x: h,
                        y: a
                    }] = e;
                    const c = (a - l) * (s - i) - (h - r) * (o - n);
                    if (0 === c) return !1;
                    const d = ((h - r) * (n - l) - (a - l) * (i - r)) / c;
                    return !(d < 0) && {
                        x: i + d * (s - i),
                        y: n + d * (o - n)
                    }
                }

                function vi(t, e, i, n) {
                    void 0 === n && (n = !0);
                    const s = new IntersectionObserver(n ? (t, i) => {
                        t.some((t => t.isIntersecting)) && e(t, i)
                    } : e, i);
                    for (const o of z(t)) s.observe(o);
                    return s
                }
                mi.prototype = {
                    positions: [],
                    init() {
                        let t;
                        this.positions = [], this.unbind = At(document, "mousemove", (e => t = Wt(e))), this.interval = setInterval((() => {
                            t && (this.positions.push(t), this.positions.length > 5 && this.positions.shift())
                        }), 50)
                    },
                    cancel() {
                        var t;
                        null == (t = this.unbind) || t.call(this), this.interval && clearInterval(this.interval)
                    },
                    movesTo(t) {
                        if (this.positions.length < 2) return !1;
                        const e = t.getBoundingClientRect(),
                            {
                                left: i,
                                right: n,
                                top: s,
                                bottom: o
                            } = e,
                            [r] = this.positions,
                            l = H(this.positions),
                            h = [r, l];
                        return !W(l, e) && [
                            [{
                                x: i,
                                y: s
                            }, {
                                x: n,
                                y: o
                            }],
                            [{
                                x: i,
                                y: o
                            }, {
                                x: n,
                                y: s
                            }]
                        ].some((t => {
                            const i = wi(h, t);
                            return i && W(i, e)
                        }))
                    }
                };
                const xi = ti && window.ResizeObserver;

                function yi(t, e, i) {
                    return void 0 === i && (i = {
                        box: "border-box"
                    }), xi ? Li(ResizeObserver, t, e, i) : (Ci(), bi.add(e), {
                        disconnect() {
                            bi.delete(e)
                        }
                    })
                }
                let bi;

                function Ci() {
                    if (bi) return;
                    let t;
                    bi = new Set;
                    const e = () => {
                        if (!t) {
                            t = !0, ci.read((() => t = !1));
                            for (const t of bi) t()
                        }
                    };
                    At(window, "load resize", e), At(document, "loadedmetadata load", e, !0)
                }

                function ki(t, e, i) {
                    return Li(MutationObserver, t, e, i)
                }

                function Li(t, e, i, n) {
                    const s = new t(i);
                    for (const o of z(e)) s.observe(o, n);
                    return s
                }
                const $i = {};

                function Si(t, e, i) {
                    return $i.computed(m(t) ? t.call(i, i) : t, m(e) ? e.call(i, i) : e)
                }

                function Mi(t, e) {
                    return t = t && !g(t) ? [t] : t, e ? t ? t.concat(e) : g(e) ? e : [e] : t
                }

                function Bi(t, e) {
                    return I(e) ? t : e
                }

                function Ii(t, e, n) {
                    const s = {};
                    if (m(e) && (e = e.options), e.extends && (t = Ii(t, e.extends, n)), e.mixins)
                        for (const i of e.mixins) t = Ii(t, i, n);
                    for (const i in t) o(i);
                    for (const r in e) i(t, r) || o(r);

                    function o(i) {
                        s[i] = ($i[i] || Bi)(t[i], e[i], n)
                    }
                    return s
                }

                function Ti(t, e) {
                    void 0 === e && (e = []);
                    try {
                        return t ? a(t, "{") ? JSON.parse(t) : e.length && !d(t, ":") ? {
                            [e[0]]: t
                        } : t.split(";").reduce(((t, e) => {
                            const [i, n] = e.split(/:(.*)/);
                            return i && !I(n) && (t[i.trim()] = n.trim()), t
                        }), {}) : {}
                    } catch (i) {
                        return {}
                    }
                }

                function Ei(t) {
                    if (Pi(t) && Ni(t, {
                            func: "playVideo",
                            method: "play"
                        }), Di(t)) try {
                        t.play().catch(R)
                    } catch (e) {}
                }

                function Ai(t) {
                    Pi(t) && Ni(t, {
                        func: "pauseVideo",
                        method: "pause"
                    }), Di(t) && t.pause()
                }

                function _i(t) {
                    Pi(t) && Ni(t, {
                        func: "mute",
                        method: "setVolume",
                        value: 0
                    }), Di(t) && (t.muted = !0)
                }

                function zi(t) {
                    return Di(t) || Pi(t)
                }

                function Di(t) {
                    return _e(t, "video")
                }

                function Pi(t) {
                    return _e(t, "iframe") && (ji(t) || Hi(t))
                }

                function ji(t) {
                    return !!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)
                }

                function Hi(t) {
                    return !!t.src.match(/vimeo\.com\/video\/.*/)
                }
                async function Ni(t, e) {
                    await Ri(t), Oi(t, e)
                }

                function Oi(t, e) {
                    try {
                        t.contentWindow.postMessage(JSON.stringify({
                            event: "command",
                            ...e
                        }), "*")
                    } catch (i) {}
                }
                $i.events = $i.created = $i.beforeConnect = $i.connected = $i.beforeDisconnect = $i.disconnected = $i.destroy = Mi, $i.args = function(t, e) {
                    return !1 !== e && Mi(e || t)
                }, $i.update = function(t, e) {
                    return O(Mi(t, m(e) ? {
                        read: e
                    } : e), "order")
                }, $i.props = function(t, e) {
                    if (g(e)) {
                        const t = {};
                        for (const i of e) t[i] = String;
                        e = t
                    }
                    return $i.methods(t, e)
                }, $i.computed = $i.methods = function(t, e) {
                    return e ? t ? { ...t,
                        ...e
                    } : e : t
                }, $i.data = function(t, e, i) {
                    return i ? Si(t, e, i) : e ? t ? function(i) {
                        return Si(t, e, i)
                    } : e : t
                };
                const Zi = "_ukPlayer";
                let Fi = 0;

                function Ri(t) {
                    if (t[Zi]) return t[Zi];
                    const e = ji(t),
                        i = Hi(t),
                        n = ++Fi;
                    let s;
                    return t[Zi] = new Promise((o => {
                        e && zt(t, "load", (() => {
                            const e = () => Oi(t, {
                                event: "listening",
                                id: n
                            });
                            s = setInterval(e, 100), e()
                        })), zt(window, "message", o, !1, (t => {
                            let {
                                data: s
                            } = t;
                            try {
                                return s = JSON.parse(s), s && (e && s.id === n && "onReady" === s.event || i && Number(s.player_id) === n)
                            } catch (o) {}
                        })), t.src = t.src + (d(t.src, "?") ? "&" : "?") + (e ? "enablejsapi=1" : "api=1&player_id=" + n)
                    })).then((() => clearInterval(s)))
                }

                function Vi(t, e, i) {
                    return void 0 === e && (e = 0), void 0 === i && (i = 0), !!ot(t) && V(...Xi(t).map((t => {
                        const {
                            top: n,
                            left: s,
                            bottom: o,
                            right: r
                        } = Yi(t);
                        return {
                            top: n - e,
                            left: s - i,
                            bottom: o + e,
                            right: r + i
                        }
                    })).concat(ve(t)))
                }

                function Wi(t, e) {
                    if (t = x(t) || y(t) ? Gi(t) : _(t), I(e)) return t.scrollTop;
                    t.scrollTop = e
                }

                function qi(t, e) {
                    let {
                        offset: i = 0
                    } = void 0 === e ? {} : e;
                    const n = ot(t) ? Xi(t) : [];
                    return n.reduce(((e, o, r) => {
                        const {
                            scrollTop: l,
                            scrollHeight: h,
                            offsetHeight: a
                        } = o, c = Yi(o), d = h - c.height, {
                            height: u,
                            top: g
                        } = n[r - 1] ? Yi(n[r - 1]) : ve(t);
                        let p = Math.ceil(g - c.top - i + l);
                        return i > 0 && a < u + i ? p += i : i = 0, p > d ? (i -= p - d, p = d) : p < 0 && (i -= p, p = 0), () => s(o, p - l).then(e)
                    }), (() => Promise.resolve()))();

                    function s(t, e) {
                        return new Promise((i => {
                            const n = t.scrollTop,
                                s = o(Math.abs(e)),
                                l = Date.now();
                            ! function o() {
                                const h = r(F((Date.now() - l) / s));
                                Wi(t, n + e * h), 1 === h ? i() : requestAnimationFrame(o)
                            }()
                        }))
                    }

                    function o(t) {
                        return 40 * Math.pow(t, .375)
                    }

                    function r(t) {
                        return .5 * (1 - Math.cos(Math.PI * t))
                    }
                }

                function Ui(t, e, i) {
                    if (void 0 === e && (e = 0), void 0 === i && (i = 0), !ot(t)) return 0;
                    const [n] = Xi(t, /auto|scroll/, !0), {
                        scrollHeight: s,
                        scrollTop: o
                    } = n, {
                        height: r
                    } = Yi(n), l = s - r, h = ye(t)[0] - ye(n)[0], a = Math.max(0, h - r + e);
                    return F((o - a) / (Math.min(l, h + t.offsetHeight - i) - a))
                }

                function Xi(t, e, i) {
                    void 0 === e && (e = /auto|scroll|hidden/), void 0 === i && (i = !1);
                    const n = Gi(t);
                    let s = ft(t).reverse();
                    s = s.slice(s.indexOf(n) + 1);
                    const o = u(s, (t => "fixed" === Gt(t, "position")));
                    return ~o && (s = s.slice(o)), [n].concat(s.filter((t => e.test(Gt(t, "overflow")) && (!i || t.scrollHeight > Yi(t).height)))).reverse()
                }

                function Yi(t) {
                    let e = Qi(t);
                    e === Gi(e) && (e = document.documentElement);
                    let i = ve(e);
                    for (let [n, s, o, r] of [
                            ["width", "x", "left", "right"],
                            ["height", "y", "top", "bottom"]
                        ]) x(Qi(e)) || (i[o] += A(Gt(e, "border" + l(o) + "Width"))), i[n] = i[s] = (x(e) ? Gi(e) : e)["client" + l(n)], i[r] = i[n] + i[o];
                    return i
                }

                function Gi(t) {
                    const {
                        document: {
                            scrollingElement: e
                        }
                    } = D(t);
                    return e
                }

                function Qi(t) {
                    return t === Gi(t) ? window : t
                }
                const Ji = [
                    ["width", "x", "left", "right"],
                    ["height", "y", "top", "bottom"]
                ];

                function Ki(t, e, i) {
                    ve(t, (i = {
                        attach: {
                            element: ["left", "top"],
                            target: ["left", "top"],
                            ...i.attach
                        },
                        offset: [0, 0],
                        ...i
                    }).flip ? en(t, e, i) : tn(t, e, i))
                }

                function tn(t, e, i) {
                    let {
                        attach: n,
                        offset: s
                    } = {
                        attach: {
                            element: ["left", "top"],
                            target: ["left", "top"],
                            ...i.attach
                        },
                        offset: [0, 0],
                        ...i
                    };
                    const o = ve(t),
                        r = ve(e);
                    for (const [l, [h, a, c, d]] of Object.entries(Ji)) o[c] = o[a] = r[c] + nn(n.target[l], d, r[h]) - nn(n.element[l], d, o[h]) + +s[l], o[d] = o[c] + o[h];
                    return o
                }

                function en(t, e, i) {
                    const n = tn(t, e, i),
                        s = ve(e);
                    let {
                        flip: o,
                        attach: {
                            element: r,
                            target: l
                        },
                        offset: h,
                        boundary: a,
                        viewport: c,
                        viewportPadding: u
                    } = i, g = Xi(t);
                    a === e && (g = g.filter((t => t !== a)));
                    const [p] = g;
                    g.push(c);
                    const f = { ...n
                    };
                    for (const [m, [w, v, x, y]] of Object.entries(Ji)) {
                        if (!0 !== o && !d(o, v)) continue;
                        const b = !rn(n, s, m) && rn(n, s, 1 - m);
                        c = sn(...g.filter(Boolean).map(Yi)), u && (c[x] += u, c[y] -= u), a && !b && n[w] <= ve(a)[w] && (c = sn(c, ve(a)));
                        const C = n[x] >= c[x],
                            k = n[y] <= c[y];
                        if (C && k) continue;
                        let L;
                        if (b) {
                            if (r[m] === y && C || r[m] === x && k) continue;
                            if (L = (r[m] === x ? -n[w] : r[m] === y ? n[w] : 0) + (l[m] === x ? s[w] : l[m] === y ? -s[w] : 0) - 2 * h[m], !on({ ...n,
                                    [x]: n[x] + L,
                                    [y]: n[y] + L
                                }, p, m)) {
                                if (on(n, p, m)) continue;
                                if (i.recursion) return !1;
                                const s = en(t, e, { ...i,
                                    attach: {
                                        element: r.map(ln).reverse(),
                                        target: l.map(ln).reverse()
                                    },
                                    offset: h.reverse(),
                                    flip: !0 === o ? o : [...o, Ji[1 - m][1]],
                                    recursion: !0
                                });
                                if (s && on(s, p, 1 - m)) return s
                            }
                        } else L = F(F(n[x], c[x], c[y] - n[w]), s[x] - n[w] + h[m], s[y] - h[m]) - n[x];
                        f[x] = n[v] = n[x] + L, f[y] += L
                    }
                    return f
                }

                function nn(t, e, i) {
                    return "center" === t ? i / 2 : t === e ? i : 0
                }

                function sn() {
                    let t = {};
                    for (var e = arguments.length, i = new Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                    for (const s of i)
                        for (const [, , e, i] of Ji) t[e] = Math.max(t[e] || 0, s[e]), t[i] = Math.min(...[t[i], s[i]].filter(Boolean));
                    return t
                }

                function on(t, e, i) {
                    const n = Yi(e),
                        [s, , o, r] = Ji[i];
                    return n[o] -= e["scroll" + l(o)], n[r] = n[o] + e["scroll" + l(s)], t[o] >= n[o] && t[r] <= n[r]
                }

                function rn(t, e, i) {
                    const [, , n, s] = Ji[i];
                    return t[s] > e[n] && e[s] > t[n]
                }

                function ln(t) {
                    for (let e = 0; e < Ji.length; e++) {
                        const i = Ji[e].indexOf(t);
                        if (~i) return Ji[1 - e][i % 2 + 2]
                    }
                }
                var hn = Object.freeze({
                    __proto__: null,
                    ajax: qt,
                    getImage: Xt,
                    transition: ce,
                    Transition: de,
                    animate: ge,
                    Animation: fe,
                    attr: K,
                    hasAttr: tt,
                    removeAttr: et,
                    data: it,
                    addClass: ie,
                    removeClass: ne,
                    removeClasses: se,
                    replaceClass: oe,
                    hasClass: re,
                    toggleClass: le,
                    dimensions: we,
                    offset: ve,
                    position: xe,
                    offsetPosition: ye,
                    height: be,
                    width: Ce,
                    boxModelAdjust: Le,
                    flipPosition: $e,
                    toPx: Se,
                    ready: Ae,
                    isTag: _e,
                    empty: ze,
                    html: De,
                    replaceChildren: Pe,
                    prepend: je,
                    append: He,
                    before: Ne,
                    after: Oe,
                    remove: Fe,
                    wrapAll: Re,
                    wrapInner: Ve,
                    unwrap: We,
                    fragment: Xe,
                    apply: Ge,
                    $: Qe,
                    $$: Je,
                    inBrowser: ti,
                    isRtl: ei,
                    hasTouch: ii,
                    pointerDown: si,
                    pointerMove: oi,
                    pointerUp: ri,
                    pointerEnter: li,
                    pointerLeave: hi,
                    pointerCancel: ai,
                    on: At,
                    off: _t,
                    once: zt,
                    trigger: Dt,
                    createEvent: Pt,
                    toEventTargets: Rt,
                    isTouch: Vt,
                    getEventPos: Wt,
                    fastdom: ci,
                    isVoidElement: st,
                    isVisible: ot,
                    selInput: rt,
                    isInput: lt,
                    selFocusable: ht,
                    isFocusable: at,
                    parent: ct,
                    filter: dt,
                    matches: ut,
                    closest: gt,
                    within: pt,
                    parents: ft,
                    children: mt,
                    index: wt,
                    hasOwn: i,
                    hyphenate: s,
                    camelize: r,
                    ucfirst: l,
                    startsWith: a,
                    endsWith: c,
                    includes: d,
                    findIndex: u,
                    isArray: g,
                    toArray: p,
                    assign: f,
                    isFunction: m,
                    isObject: w,
                    isPlainObject: v,
                    isWindow: x,
                    isDocument: y,
                    isNode: b,
                    isElement: C,
                    isBoolean: L,
                    isString: $,
                    isNumber: S,
                    isNumeric: M,
                    isEmpty: B,
                    isUndefined: I,
                    toBoolean: T,
                    toNumber: E,
                    toFloat: A,
                    toNode: _,
                    toNodes: z,
                    toWindow: D,
                    isEqual: P,
                    swap: j,
                    last: H,
                    each: N,
                    sortBy: O,
                    uniqueBy: Z,
                    clamp: F,
                    noop: R,
                    intersectRect: V,
                    pointInRect: W,
                    Dimensions: Y,
                    getIndex: G,
                    memoize: Q,
                    Deferred: J,
                    MouseTracker: mi,
                    observeIntersection: vi,
                    observeResize: yi,
                    observeMutation: ki,
                    mergeOptions: Ii,
                    parseOptions: Ti,
                    play: Ei,
                    pause: Ai,
                    mute: _i,
                    isVideo: zi,
                    positionAt: Ki,
                    query: vt,
                    queryAll: xt,
                    find: yt,
                    findAll: bt,
                    escape: Et,
                    css: Gt,
                    getCssVar: Jt,
                    propName: Kt,
                    isInView: Vi,
                    scrollTop: Wi,
                    scrollIntoView: qi,
                    scrolledOver: Ui,
                    scrollParents: Xi,
                    offsetViewport: Yi
                });

                function an(t) {
                    const e = t.data;
                    let i;

                    function n(t, e) {
                        if (t)
                            for (const i in t) t[i]._connected && t[i]._callUpdate(e)
                    }
                    t.use = function(t) {
                        if (!t.installed) return t.call(null, this), t.installed = !0, this
                    }, t.mixin = function(e, i) {
                        (i = ($(i) ? t.component(i) : i) || this).options = Ii(i.options, e)
                    }, t.extend = function(t) {
                        t = t || {};
                        const e = this,
                            i = function(t) {
                                this._init(t)
                            };
                        return i.prototype = Object.create(e.prototype), i.prototype.constructor = i, i.options = Ii(e.options, t), i.super = e, i.extend = e.extend, i
                    }, t.update = function(t, i) {
                        t = t ? _(t) : document.body;
                        for (const s of ft(t).reverse()) n(s[e], i);
                        Ge(t, (t => n(t[e], i)))
                    }, Object.defineProperty(t, "container", {
                        get: () => i || document.body,
                        set(t) {
                            i = Qe(t)
                        }
                    })
                }

                function cn(t) {
                    function e(t) {
                        for (const {
                                read: e,
                                write: i,
                                events: n = []
                            } of this.$options.update) {
                            if (!t.has("update") && !n.some((e => t.has(e)))) continue;
                            let s;
                            e && (s = e.call(this, this._data, t), s && v(s) && f(this._data, s)), i && !1 !== s && ci.write((() => i.call(this, this._data, t)))
                        }
                    }

                    function n(t) {
                        const {
                            $options: {
                                computed: e
                            }
                        } = this, n = { ...this._computed
                        };
                        this._computed = {};
                        for (const s in e) {
                            const {
                                watch: o,
                                immediate: r
                            } = e[s];
                            o && (t && r || i(n, s) && !P(n[s], this[s])) && o.call(this, this[s], n[s])
                        }
                    }
                    t.prototype._callHook = function(t) {
                        var e;
                        null == (e = this.$options[t]) || e.forEach((t => t.call(this)))
                    }, t.prototype._callConnected = function() {
                        this._connected || (this._data = {}, this._computed = {}, this._initProps(), this._callHook("beforeConnect"), this._connected = !0, this._initEvents(), this._initObservers(), this._callHook("connected"), this._callUpdate())
                    }, t.prototype._callDisconnected = function() {
                        this._connected && (this._callHook("beforeDisconnect"), this._disconnectObservers(), this._unbindEvents(), this._callHook("disconnected"), this._connected = !1, delete this._watch)
                    }, t.prototype._callUpdate = function(t) {
                        void 0 === t && (t = "update"), this._connected && ("update" !== t && "resize" !== t || this._callWatches(), this.$options.update && (this._updates || (this._updates = new Set, ci.read((() => {
                            this._connected && e.call(this, this._updates), delete this._updates
                        }))), this._updates.add(t.type || t)))
                    }, t.prototype._callWatches = function() {
                        if (this._watch) return;
                        const t = !i(this, "_watch");
                        this._watch = ci.read((() => {
                            this._connected && n.call(this, t), this._watch = null
                        }))
                    }
                }

                function dn(t) {
                    let e = 0;
                    t.prototype._init = function(t) {
                        (t = t || {}).data = vn(t, this.constructor.options), this.$options = Ii(this.constructor.options, t, this), this.$el = null, this.$props = {}, this._uid = e++, this._initData(), this._initMethods(), this._initComputeds(), this._callHook("created"), t.el && this.$mount(t.el)
                    }, t.prototype._initData = function() {
                        const {
                            data: t = {}
                        } = this.$options;
                        for (const e in t) this.$props[e] = this[e] = t[e]
                    }, t.prototype._initMethods = function() {
                        const {
                            methods: t
                        } = this.$options;
                        if (t)
                            for (const e in t) this[e] = t[e].bind(this)
                    }, t.prototype._initComputeds = function() {
                        const {
                            computed: t
                        } = this.$options;
                        if (this._computed = {}, t)
                            for (const e in t) gn(this, e, t[e])
                    }, t.prototype._initProps = function(t) {
                        let e;
                        for (e in t = t || un(this.$options, this.$name)) I(t[e]) || (this.$props[e] = t[e]);
                        const i = [this.$options.computed, this.$options.methods];
                        for (e in this.$props) e in t && fn(i, e) && (this[e] = this.$props[e])
                    }, t.prototype._initEvents = function() {
                        this._events = [];
                        for (const t of this.$options.events || [])
                            if (i(t, "handler")) pn(this, t);
                            else
                                for (const e in t) pn(this, t[e], e)
                    }, t.prototype._unbindEvents = function() {
                        this._events.forEach((t => t())), delete this._events
                    }, t.prototype._initObservers = function() {
                        this._observers = [yn(this)], this.$options.computed && this.registerObserver(xn(this))
                    }, t.prototype.registerObserver = function(t) {
                        this._observers.push(t)
                    }, t.prototype._disconnectObservers = function() {
                        this._observers.forEach((t => null == t ? void 0 : t.disconnect()))
                    }
                }

                function un(t, e) {
                    const i = {},
                        {
                            args: n = [],
                            props: o = {},
                            el: l
                        } = t;
                    if (!o) return i;
                    for (const r in o) {
                        const t = s(r);
                        let e = it(l, t);
                        I(e) || (e = o[r] === Boolean && "" === e || mn(o[r], e), ("target" !== t || e && !a(e, "_")) && (i[r] = e))
                    }
                    const h = Ti(it(l, e), n);
                    for (const s in h) {
                        const t = r(s);
                        void 0 !== o[t] && (i[t] = mn(o[t], h[s]))
                    }
                    return i
                }

                function gn(t, e, n) {
                    Object.defineProperty(t, e, {
                        enumerable: !0,
                        get() {
                            const {
                                _computed: s,
                                $props: o,
                                $el: r
                            } = t;
                            return i(s, e) || (s[e] = (n.get || n).call(t, o, r)), s[e]
                        },
                        set(i) {
                            const {
                                _computed: s
                            } = t;
                            s[e] = n.set ? n.set.call(t, i) : i, I(s[e]) && delete s[e]
                        }
                    })
                }

                function pn(t, e, i) {
                    v(e) || (e = {
                        name: i,
                        handler: e
                    });
                    let {
                        name: n,
                        el: s,
                        handler: o,
                        capture: r,
                        passive: l,
                        delegate: h,
                        filter: a,
                        self: c
                    } = e;
                    s = m(s) ? s.call(t) : s || t.$el, g(s) ? s.forEach((n => pn(t, { ...e,
                        el: n
                    }, i))) : !s || a && !a.call(t) || t._events.push(At(s, n, h ? $(h) ? h : h.call(t) : null, $(o) ? t[o] : o.bind(t), {
                        passive: l,
                        capture: r,
                        self: c
                    }))
                }

                function fn(t, e) {
                    return t.every((t => !t || !i(t, e)))
                }

                function mn(t, e) {
                    return t === Boolean ? T(e) : t === Number ? E(e) : "list" === t ? wn(e) : t ? t(e) : e
                }

                function wn(t) {
                    return g(t) ? t : $(t) ? t.split(/,(?![^(]*\))/).map((t => M(t) ? E(t) : T(t.trim()))) : [t]
                }

                function vn(t, e) {
                    let {
                        data: i = {}
                    } = t, {
                        args: n = [],
                        props: s = {}
                    } = e;
                    g(i) && (i = i.slice(0, n.length).reduce(((t, e, i) => (v(e) ? f(t, e) : t[n[i]] = e, t)), {}));
                    for (const o in i) I(i[o]) ? delete i[o] : s[o] && (i[o] = mn(s[o], i[o]));
                    return i
                }

                function xn(t) {
                    const {
                        el: e
                    } = t.$options, i = new MutationObserver((() => t.$emit()));
                    return i.observe(e, {
                        childList: !0,
                        subtree: !0
                    }), i
                }

                function yn(t) {
                    const {
                        $name: e,
                        $options: i,
                        $props: n
                    } = t, {
                        attrs: o,
                        props: l,
                        el: h
                    } = i;
                    if (!l || !1 === o) return;
                    const a = g(o) ? o : Object.keys(l),
                        c = a.map((t => s(t))).concat(e),
                        d = new MutationObserver((s => {
                            const o = un(i, e);
                            s.some((t => {
                                let {
                                    attributeName: i
                                } = t;
                                const s = i.replace("data-", "");
                                return (s === e ? a : [r(s), r(i)]).some((t => !I(o[t]) && o[t] !== n[t]))
                            })) && t.$reset()
                        }));
                    return d.observe(h, {
                        attributes: !0,
                        attributeFilter: c.concat(c.map((t => "data-" + t)))
                    }), d
                }

                function bn(t) {
                    const e = t.data;
                    t.prototype.$create = function(e, i, n) {
                        return t[e](i, n)
                    }, t.prototype.$mount = function(t) {
                        const {
                            name: i
                        } = this.$options;
                        t[e] || (t[e] = {}), t[e][i] || (t[e][i] = this, this.$el = this.$options.el = this.$options.el || t, pt(t, document) && this._callConnected())
                    }, t.prototype.$reset = function() {
                        this._callDisconnected(), this._callConnected()
                    }, t.prototype.$destroy = function(t) {
                        void 0 === t && (t = !1);
                        const {
                            el: i,
                            name: n
                        } = this.$options;
                        i && this._callDisconnected(), this._callHook("destroy"), null != i && i[e] && (delete i[e][n], B(i[e]) || delete i[e], t && Fe(this.$el))
                    }, t.prototype.$emit = function(t) {
                        this._callUpdate(t)
                    }, t.prototype.$update = function(e, i) {
                        void 0 === e && (e = this.$el), t.update(e, i)
                    }, t.prototype.$getComponent = t.getComponent;
                    const i = Q((e => t.prefix + s(e)));
                    Object.defineProperties(t.prototype, {
                        $container: Object.getOwnPropertyDescriptor(t, "container"),
                        $name: {
                            get() {
                                return i(this.$options.name)
                            }
                        }
                    })
                }

                function Cn(t) {
                    const e = t.data,
                        i = {};
                    t.component = function(e, n) {
                        const o = s(e);
                        if (e = r(o), !n) return v(i[e]) && (i[e] = t.extend(i[e])), i[e];
                        t[e] = function(i, n) {
                            const s = t.component(e);
                            return s.options.functional ? new s({
                                data: v(i) ? i : [...arguments]
                            }) : i ? Je(i).map(o)[0] : o();

                            function o(i) {
                                const o = t.getComponent(i, e);
                                if (o) {
                                    if (!n) return o;
                                    o.$destroy()
                                }
                                return new s({
                                    el: i,
                                    data: n
                                })
                            }
                        };
                        const l = v(n) ? { ...n
                        } : n.options;
                        return l.name = e, null == l.install || l.install(t, l, e), t._initialized && !l.functional && ci.read((() => t[e]("[uk-" + o + "],[data-uk-" + o + "]"))), i[e] = v(n) ? l : n
                    }, t.getComponents = t => (null == t ? void 0 : t[e]) || {}, t.getComponent = (e, i) => t.getComponents(e)[i], t.connect = n => {
                        if (n[e])
                            for (const t in n[e]) n[e][t]._callConnected();
                        for (const e of n.attributes) {
                            const s = kn(e.name);
                            s && s in i && t[s](n)
                        }
                    }, t.disconnect = t => {
                        for (const i in t[e]) t[e][i]._callDisconnected()
                    }
                }
                const kn = Q((t => !(!a(t, "uk-") && !a(t, "data-uk-")) && r(t.replace("data-uk-", "").replace("uk-", "")))),
                    Ln = function(t) {
                        this._init(t)
                    };

                function $n(t) {
                    const {
                        connect: e,
                        disconnect: i
                    } = t;

                    function n(t) {
                        let {
                            addedNodes: n,
                            removedNodes: s
                        } = t;
                        for (const i of n) Ge(i, e);
                        for (const e of s) Ge(e, i)
                    }

                    function s(e) {
                        var i;
                        let {
                            target: n,
                            attributeName: s
                        } = e;
                        const o = kn(s);
                        o && o in t && (tt(n, s) ? t[o](n) : null == (i = t.getComponent(n, o)) || i.$destroy())
                    }
                    ti && window.MutationObserver && ci.read((function() {
                        document.body && Ge(document.body, e), new MutationObserver((t => t.forEach(n))).observe(document, {
                            childList: !0,
                            subtree: !0
                        }), new MutationObserver((t => t.forEach(s))).observe(document, {
                            attributes: !0,
                            subtree: !0
                        }), t._initialized = !0
                    }))
                }
                Ln.util = hn, Ln.data = "__uikit__", Ln.prefix = "uk-", Ln.options = {}, Ln.version = "3.14.1", an(Ln), cn(Ln), dn(Ln), Cn(Ln), bn(Ln);
                var Sn = {
                        connected() {
                            !re(this.$el, this.$name) && ie(this.$el, this.$name)
                        }
                    },
                    Mn = {
                        methods: {
                            lazyload(t, e) {
                                void 0 === t && (t = this.$el), void 0 === e && (e = this.$el), this.registerObserver(vi(t, ((t, i) => {
                                    for (const n of z(m(e) ? e() : e)) Je('[loading="lazy"]', n).forEach((t => et(t, "loading")));
                                    for (const e of t.filter((t => {
                                            let {
                                                isIntersecting: e
                                            } = t;
                                            return e
                                        })).map((t => {
                                            let {
                                                target: e
                                            } = t;
                                            return e
                                        }))) i.unobserve(e)
                                })))
                            }
                        }
                    },
                    Bn = {
                        props: {
                            cls: Boolean,
                            animation: "list",
                            duration: Number,
                            velocity: Number,
                            origin: String,
                            transition: String
                        },
                        data: {
                            cls: !1,
                            animation: [!1],
                            duration: 200,
                            velocity: .2,
                            origin: !1,
                            transition: "ease",
                            clsEnter: "uk-togglabe-enter",
                            clsLeave: "uk-togglabe-leave",
                            initProps: {
                                overflow: "",
                                height: "",
                                paddingTop: "",
                                paddingBottom: "",
                                marginTop: "",
                                marginBottom: "",
                                boxShadow: ""
                            },
                            hideProps: {
                                overflow: "hidden",
                                height: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                marginTop: 0,
                                marginBottom: 0,
                                boxShadow: "none"
                            }
                        },
                        computed: {
                            hasAnimation(t) {
                                let {
                                    animation: e
                                } = t;
                                return !!e[0]
                            },
                            hasTransition(t) {
                                let {
                                    animation: e
                                } = t;
                                return this.hasAnimation && !0 === e[0]
                            }
                        },
                        methods: {
                            toggleElement(t, e, i) {
                                return new Promise((n => Promise.all(z(t).map((t => {
                                    const n = L(e) ? e : !this.isToggled(t);
                                    if (!Dt(t, "before" + (n ? "show" : "hide"), [this])) return Promise.reject();
                                    const s = (m(i) ? i : !1 !== i && this.hasAnimation ? this.hasTransition ? In(this) : Tn(this) : this._toggle)(t, n),
                                        o = n ? this.clsEnter : this.clsLeave;
                                    ie(t, o), Dt(t, n ? "show" : "hide", [this]);
                                    const r = () => {
                                        ne(t, o), Dt(t, n ? "shown" : "hidden", [this]), this.$update(t)
                                    };
                                    return s ? s.then(r, (() => (ne(t, o), Promise.reject()))) : r()
                                }))).then(n, R)))
                            },
                            isToggled(t) {
                                return void 0 === t && (t = this.$el), [t] = z(t), !!re(t, this.clsEnter) || !re(t, this.clsLeave) && (this.cls ? re(t, this.cls.split(" ")[0]) : ot(t))
                            },
                            _toggle(t, e) {
                                if (!t) return;
                                let i;
                                e = Boolean(e), this.cls ? (i = d(this.cls, " ") || e !== re(t, this.cls), i && le(t, this.cls, d(this.cls, " ") ? void 0 : e)) : (i = e === t.hidden, i && (t.hidden = !e)), Je("[autofocus]", t).some((t => ot(t) ? t.focus() || !0 : t.blur())), i && (Dt(t, "toggled", [e, this]), this.$update(t))
                            }
                        }
                    };

                function In(t) {
                    let {
                        isToggled: e,
                        duration: i,
                        velocity: n,
                        initProps: s,
                        hideProps: o,
                        transition: r,
                        _toggle: l
                    } = t;
                    return (t, h) => {
                        const a = de.inProgress(t),
                            c = t.hasChildNodes() ? A(Gt(t.firstElementChild, "marginTop")) + A(Gt(t.lastElementChild, "marginBottom")) : 0,
                            d = ot(t) ? be(t) + (a ? 0 : c) : 0;
                        de.cancel(t), e(t) || l(t, !0), be(t, ""), ci.flush();
                        const u = be(t) + (a ? 0 : c);
                        return i = n * t.offsetHeight + i, be(t, d), (h ? de.start(t, { ...s,
                            overflow: "hidden",
                            height: u
                        }, Math.round(i * (1 - d / u)), r) : de.start(t, o, Math.round(i * (d / u)), r).then((() => l(t, !1)))).then((() => Gt(t, s)))
                    }
                }

                function Tn(t) {
                    return (e, i) => {
                        fe.cancel(e);
                        const {
                            animation: n,
                            duration: s,
                            _toggle: o
                        } = t;
                        return i ? (o(e, !0), fe.in(e, n[0], s, t.origin)) : fe.out(e, n[1] || n[0], s, t.origin).then((() => o(e, !1)))
                    }
                }
                var En = {
                    mixins: [Sn, Mn, Bn],
                    props: {
                        targets: String,
                        active: null,
                        collapsible: Boolean,
                        multiple: Boolean,
                        toggle: String,
                        content: String,
                        offset: Number
                    },
                    data: {
                        targets: "> *",
                        active: !1,
                        animation: [!0],
                        collapsible: !0,
                        multiple: !1,
                        clsOpen: "uk-open",
                        toggle: "> .uk-accordion-title",
                        content: "> .uk-accordion-content",
                        offset: 0
                    },
                    computed: {
                        items: {
                            get(t, e) {
                                let {
                                    targets: i
                                } = t;
                                return Je(i, e)
                            },
                            watch(t, e) {
                                if (e || re(t, this.clsOpen)) return;
                                const i = !1 !== this.active && t[Number(this.active)] || !this.collapsible && t[0];
                                i && this.toggle(i, !1)
                            },
                            immediate: !0
                        },
                        toggles(t) {
                            let {
                                toggle: e
                            } = t;
                            return this.items.map((t => Qe(e, t)))
                        },
                        contents: {
                            get(t) {
                                let {
                                    content: e
                                } = t;
                                return this.items.map((t => Qe(e, t)))
                            },
                            watch(t) {
                                for (const e of t) An(e, !re(this.items.find((t => t.contains(e))), this.clsOpen))
                            },
                            immediate: !0
                        }
                    },
                    connected() {
                        this.lazyload()
                    },
                    events: [{
                        name: "click",
                        delegate() {
                            return this.targets + " " + this.$props.toggle
                        },
                        handler(t) {
                            t.preventDefault(), this.toggle(wt(this.toggles, t.current))
                        }
                    }],
                    methods: {
                        toggle(t, e) {
                            let i = [this.items[G(t, this.items)]];
                            const n = dt(this.items, "." + this.clsOpen);
                            if (this.multiple || d(n, i[0]) || (i = i.concat(n)), this.collapsible || !(n.length < 2) || dt(i, ":not(." + this.clsOpen + ")").length)
                                for (const s of i) this.toggleElement(s, !re(s, this.clsOpen), (async (t, i) => {
                                    le(t, this.clsOpen, i), K(Qe(this.$props.toggle, t), "aria-expanded", i);
                                    const n = Qe((t._wrapper ? "> * " : "") + this.content, t);
                                    if (!1 !== e && this.hasTransition) {
                                        if (t._wrapper || (t._wrapper = Re(n, "<div" + (i ? " hidden" : "") + ">")), An(n, !1), await In(this)(t._wrapper, i), An(n, !i), delete t._wrapper, We(n), i) {
                                            const e = Qe(this.$props.toggle, t);
                                            ci.read((() => {
                                                Vi(e) || qi(e, {
                                                    offset: this.offset
                                                })
                                            }))
                                        }
                                    } else An(n, !i)
                                }))
                        }
                    }
                };

                function An(t, e) {
                    t && (t.hidden = e)
                }
                var _n = {
                        mixins: [Sn, Bn],
                        args: "animation",
                        props: {
                            close: String
                        },
                        data: {
                            animation: [!0],
                            selClose: ".uk-alert-close",
                            duration: 150,
                            hideProps: {
                                opacity: 0,
                                ...Bn.data.hideProps
                            }
                        },
                        events: [{
                            name: "click",
                            delegate() {
                                return this.selClose
                            },
                            handler(t) {
                                t.preventDefault(), this.close()
                            }
                        }],
                        methods: {
                            async close() {
                                await this.toggleElement(this.$el), this.$destroy(!0)
                            }
                        }
                    },
                    zn = {
                        args: "autoplay",
                        props: {
                            automute: Boolean,
                            autoplay: Boolean
                        },
                        data: {
                            automute: !1,
                            autoplay: !0
                        },
                        connected() {
                            this.inView = "inview" === this.autoplay, this.inView && !tt(this.$el, "preload") && (this.$el.preload = "none"), this.automute && _i(this.$el), this.registerObserver(vi(this.$el, (() => this.$emit()), {}, !1))
                        },
                        update: {
                            read() {
                                return !!zi(this.$el) && {
                                    visible: ot(this.$el) && "hidden" !== Gt(this.$el, "visibility"),
                                    inView: this.inView && Vi(this.$el)
                                }
                            },
                            write(t) {
                                let {
                                    visible: e,
                                    inView: i
                                } = t;
                                !e || this.inView && !i ? Ai(this.$el) : (!0 === this.autoplay || this.inView && i) && Ei(this.$el)
                            }
                        }
                    },
                    Dn = {
                        connected() {
                            var t;
                            this.registerObserver(yi((null == (t = this.$options.resizeTargets) ? void 0 : t.call(this)) || this.$el, (() => this.$emit("resize"))))
                        }
                    },
                    Pn = {
                        mixins: [Dn, zn],
                        props: {
                            width: Number,
                            height: Number
                        },
                        data: {
                            automute: !0
                        },
                        events: {
                            "load loadedmetadata" () {
                                this.$emit("resize")
                            }
                        },
                        resizeTargets() {
                            return [this.$el, ct(this.$el)]
                        },
                        update: {
                            read() {
                                const {
                                    ratio: t,
                                    cover: e
                                } = Y, {
                                    $el: i,
                                    width: n,
                                    height: s
                                } = this;
                                let o = {
                                    width: n,
                                    height: s
                                };
                                if (!o.width || !o.height) {
                                    const e = {
                                        width: i.naturalWidth || i.videoWidth || i.clientWidth,
                                        height: i.naturalHeight || i.videoHeight || i.clientHeight
                                    };
                                    o = o.width ? t(e, "width", o.width) : s ? t(e, "height", o.height) : e
                                }
                                const {
                                    offsetHeight: r,
                                    offsetWidth: l
                                } = jn(i) || ct(i), h = e(o, {
                                    width: l + (l % 2 ? 1 : 0),
                                    height: r + (r % 2 ? 1 : 0)
                                });
                                return !(!h.width || !h.height) && h
                            },
                            write(t) {
                                let {
                                    height: e,
                                    width: i
                                } = t;
                                Gt(this.$el, {
                                    height: e,
                                    width: i
                                })
                            },
                            events: ["resize"]
                        }
                    };

                function jn(t) {
                    for (; t = ct(t);)
                        if ("static" !== Gt(t, "position")) return t
                }
                var Hn = {
                        props: {
                            container: Boolean
                        },
                        data: {
                            container: !0
                        },
                        computed: {
                            container(t) {
                                let {
                                    container: e
                                } = t;
                                return !0 === e && this.$container || e && Qe(e)
                            }
                        }
                    },
                    Nn = {
                        props: {
                            pos: String,
                            offset: null,
                            flip: Boolean
                        },
                        data: {
                            pos: "bottom-" + (ei ? "right" : "left"),
                            flip: !0,
                            offset: !1,
                            viewportPadding: 10
                        },
                        connected() {
                            this.pos = this.$props.pos.split("-").concat("center").slice(0, 2), this.axis = d(["top", "bottom"], this.pos[0]) ? "y" : "x"
                        },
                        methods: {
                            positionAt(t, e, i) {
                                const [n, s] = this.pos;
                                let {
                                    offset: o
                                } = this;
                                if (!M(o)) {
                                    const t = Qe(o);
                                    o = t ? ve(t)["x" === this.axis ? "left" : "top"] - ve(e)["x" === this.axis ? "right" : "bottom"] : 0
                                }
                                o = Se(o) + Se(Jt("position-offset", t)), o = [d(["left", "top"], n) ? -o : +o, 0];
                                const r = {
                                    element: [$e(n), s],
                                    target: [n, s]
                                };
                                if ("y" === this.axis) {
                                    for (const t in r) r[t] = r[t].reverse();
                                    o = o.reverse()
                                }
                                Ki(t, e, {
                                    attach: r,
                                    offset: o,
                                    boundary: i,
                                    viewportPadding: this.boundaryAlign ? 0 : this.viewportPadding,
                                    flip: this.flip
                                })
                            }
                        }
                    };
                let On;
                var Zn = {
                    mixins: [Hn, Mn, Nn, Bn],
                    args: "pos",
                    props: {
                        mode: "list",
                        toggle: Boolean,
                        boundary: Boolean,
                        boundaryAlign: Boolean,
                        delayShow: Number,
                        delayHide: Number,
                        display: String,
                        clsDrop: String
                    },
                    data: {
                        mode: ["click", "hover"],
                        toggle: "- *",
                        boundary: !0,
                        boundaryAlign: !1,
                        delayShow: 0,
                        delayHide: 800,
                        display: null,
                        clsDrop: !1,
                        animation: ["uk-animation-fade"],
                        cls: "uk-open",
                        container: !1
                    },
                    created() {
                        this.tracker = new mi
                    },
                    beforeConnect() {
                        this.clsDrop = this.$props.clsDrop || "uk-" + this.$options.name
                    },
                    connected() {
                        ie(this.$el, this.clsDrop), this.toggle && !this.target && (this.target = this.$create("toggle", vt(this.toggle, this.$el), {
                            target: this.$el,
                            mode: this.mode
                        }).$el, K(this.target, "aria-haspopup", !0), this.lazyload(this.target))
                    },
                    disconnected() {
                        this.isActive() && (On = null)
                    },
                    events: [{
                        name: "click",
                        delegate() {
                            return "." + this.clsDrop + "-close"
                        },
                        handler(t) {
                            t.preventDefault(), this.hide(!1)
                        }
                    }, {
                        name: "click",
                        delegate: () => 'a[href^="#"]',
                        handler(t) {
                            let {
                                defaultPrevented: e,
                                current: {
                                    hash: i
                                }
                            } = t;
                            e || !i || pt(i, this.$el) || this.hide(!1)
                        }
                    }, {
                        name: "beforescroll",
                        handler() {
                            this.hide(!1)
                        }
                    }, {
                        name: "toggle",
                        self: !0,
                        handler(t, e) {
                            t.preventDefault(), this.isToggled() ? this.hide(!1) : this.show(null == e ? void 0 : e.$el, !1)
                        }
                    }, {
                        name: "toggleshow",
                        self: !0,
                        handler(t, e) {
                            t.preventDefault(), this.show(null == e ? void 0 : e.$el)
                        }
                    }, {
                        name: "togglehide",
                        self: !0,
                        handler(t) {
                            t.preventDefault(), ut(this.$el, ":focus,:hover") || this.hide()
                        }
                    }, {
                        name: li + " focusin",
                        filter() {
                            return d(this.mode, "hover")
                        },
                        handler(t) {
                            Vt(t) || this.clearTimers()
                        }
                    }, {
                        name: hi + " focusout",
                        filter() {
                            return d(this.mode, "hover")
                        },
                        handler(t) {
                            !Vt(t) && t.relatedTarget && this.hide()
                        }
                    }, {
                        name: "toggled",
                        self: !0,
                        handler(t, e) {
                            e && (this.clearTimers(), this.position())
                        }
                    }, {
                        name: "show",
                        self: !0,
                        handler() {
                            On = this, this.tracker.init();
                            for (const t of [At(document, si, (t => {
                                    let {
                                        target: e
                                    } = t;
                                    return !pt(e, this.$el) && zt(document, ri + " " + ai + " scroll", (t => {
                                        let {
                                            defaultPrevented: i,
                                            type: n,
                                            target: s
                                        } = t;
                                        i || n !== ri || e !== s || this.target && pt(e, this.target) || this.hide(!1)
                                    }), !0)
                                })), At(document, "keydown", (t => {
                                    27 === t.keyCode && this.hide(!1)
                                })), ..."static" === this.display ? [] : (() => {
                                    const t = () => this.$emit();
                                    return [At(window, "resize", t), At(document, "scroll", t, !0), (() => {
                                        const e = yi(Xi(this.$el), t);
                                        return () => e.disconnect()
                                    })()]
                                })()]) zt(this.$el, "hide", t, {
                                self: !0
                            })
                        }
                    }, {
                        name: "beforehide",
                        self: !0,
                        handler() {
                            this.clearTimers()
                        }
                    }, {
                        name: "hide",
                        handler(t) {
                            let {
                                target: e
                            } = t;
                            this.$el === e ? (On = this.isActive() ? null : On, this.tracker.cancel()) : On = null === On && pt(e, this.$el) && this.isToggled() ? this : On
                        }
                    }],
                    update: {
                        write() {
                            this.isToggled() && !re(this.$el, this.clsEnter) && this.position()
                        }
                    },
                    methods: {
                        show(t, e) {
                            if (void 0 === t && (t = this.target), void 0 === e && (e = !0), this.isToggled() && t && this.target && t !== this.target && this.hide(!1), this.target = t, this.clearTimers(), !this.isActive()) {
                                if (On) {
                                    if (e && On.isDelaying) return void(this.showTimer = setTimeout((() => ut(t, ":hover") && this.show()), 10));
                                    let i;
                                    for (; On && i !== On && !pt(this.$el, On.$el);) i = On, On.hide(!1)
                                }
                                this.container && ct(this.$el) !== this.container && He(this.container, this.$el), this.showTimer = setTimeout((() => this.toggleElement(this.$el, !0)), e && this.delayShow || 0)
                            }
                        },
                        hide(t) {
                            void 0 === t && (t = !0);
                            const e = () => this.toggleElement(this.$el, !1, !1);
                            this.clearTimers(), this.isDelaying = Fn(this.$el).some((t => this.tracker.movesTo(t))), t && this.isDelaying ? this.hideTimer = setTimeout(this.hide, 50) : t && this.delayHide ? this.hideTimer = setTimeout(e, this.delayHide) : e()
                        },
                        clearTimers() {
                            clearTimeout(this.showTimer), clearTimeout(this.hideTimer), this.showTimer = null, this.hideTimer = null, this.isDelaying = !1
                        },
                        isActive() {
                            return On === this
                        },
                        position() {
                            ne(this.$el, this.clsDrop + "-stack"), le(this.$el, this.clsDrop + "-boundary", this.boundaryAlign);
                            const t = vt(this.boundary, this.$el),
                                [e] = Xi(this.$el),
                                i = Yi(e),
                                n = t ? ve(t) : i;
                            Gt(this.$el, "maxWidth", "");
                            const s = i.width - (this.boundaryAlign ? 0 : 2 * this.viewportPadding);
                            if ("justify" === this.pos[1]) {
                                const t = "y" === this.axis ? "width" : "height",
                                    e = ve(this.target),
                                    i = this.boundaryAlign ? n : e;
                                Gt(this.$el, t, i[t])
                            } else this.$el.offsetWidth > s && ie(this.$el, this.clsDrop + "-stack");
                            Gt(this.$el, "maxWidth", s), this.positionAt(this.$el, t && this.boundaryAlign ? t : this.target, t)
                        }
                    }
                };

                function Fn(t) {
                    const e = [];
                    return Ge(t, (t => "static" !== Gt(t, "position") && e.push(t))), e
                }
                var Rn = {
                        mixins: [Sn],
                        args: "target",
                        props: {
                            target: Boolean
                        },
                        data: {
                            target: !1
                        },
                        computed: {
                            input: (t, e) => Qe(rt, e),
                            state() {
                                return this.input.nextElementSibling
                            },
                            target(t, e) {
                                let {
                                    target: i
                                } = t;
                                return i && (!0 === i && ct(this.input) === e && this.input.nextElementSibling || Qe(i, e))
                            }
                        },
                        update() {
                            var t;
                            const {
                                target: e,
                                input: i
                            } = this;
                            if (!e) return;
                            let n;
                            const s = lt(e) ? "value" : "textContent",
                                o = e[s],
                                r = null != (t = i.files) && t[0] ? i.files[0].name : ut(i, "select") && (n = Je("option", i).filter((t => t.selected))[0]) ? n.textContent : i.value;
                            o !== r && (e[s] = r)
                        },
                        events: [{
                            name: "change",
                            handler() {
                                this.$emit()
                            }
                        }, {
                            name: "reset",
                            el() {
                                return gt(this.$el, "form")
                            },
                            handler() {
                                this.$emit()
                            }
                        }]
                    },
                    Vn = {
                        mixins: [Dn],
                        props: {
                            margin: String,
                            firstColumn: Boolean
                        },
                        data: {
                            margin: "uk-margin-small-top",
                            firstColumn: "uk-first-column"
                        },
                        resizeTargets() {
                            return [this.$el, ...p(this.$el.children)]
                        },
                        connected() {
                            this.registerObserver(ki(this.$el, (() => this.$reset()), {
                                childList: !0
                            }))
                        },
                        update: {
                            read() {
                                const t = Wn(this.$el.children);
                                return {
                                    rows: t,
                                    columns: qn(t)
                                }
                            },
                            write(t) {
                                let {
                                    columns: e,
                                    rows: i
                                } = t;
                                for (const n of i)
                                    for (const t of n) le(t, this.margin, i[0] !== n), le(t, this.firstColumn, e[0].includes(t))
                            },
                            events: ["resize"]
                        }
                    };

                function Wn(t) {
                    return Un(t, "top", "bottom")
                }

                function qn(t) {
                    const e = [];
                    for (const i of t) {
                        const t = Un(i, "left", "right");
                        for (let i = 0; i < t.length; i++) e[i] = e[i] ? e[i].concat(t[i]) : t[i]
                    }
                    return ei ? e.reverse() : e
                }

                function Un(t, e, i) {
                    const n = [
                        []
                    ];
                    for (const s of t) {
                        if (!ot(s)) continue;
                        let t = Xn(s);
                        for (let o = n.length - 1; o >= 0; o--) {
                            const r = n[o];
                            if (!r[0]) {
                                r.push(s);
                                break
                            }
                            let l;
                            if (r[0].offsetParent === s.offsetParent ? l = Xn(r[0]) : (t = Xn(s, !0), l = Xn(r[0], !0)), t[e] >= l[i] - 1 && t[e] !== l[e]) {
                                n.push([s]);
                                break
                            }
                            if (t[i] - 1 > l[e] || t[e] === l[e]) {
                                r.push(s);
                                break
                            }
                            if (0 === o) {
                                n.unshift([s]);
                                break
                            }
                        }
                    }
                    return n
                }

                function Xn(t, e) {
                    void 0 === e && (e = !1);
                    let {
                        offsetTop: i,
                        offsetLeft: n,
                        offsetHeight: s,
                        offsetWidth: o
                    } = t;
                    return e && ([i, n] = ye(t)), {
                        top: i,
                        left: n,
                        bottom: i + s,
                        right: n + o
                    }
                }
                var Yn = {
                    connected() {
                        Jn(this._uid, (() => this.$emit("scroll")))
                    },
                    disconnected() {
                        Kn(this._uid)
                    }
                };
                const Gn = new Map;
                let Qn;

                function Jn(t, e) {
                    Qn = Qn || At(window, "scroll", (() => Gn.forEach((t => t()))), {
                        passive: !0,
                        capture: !0
                    }), Gn.set(t, e)
                }

                function Kn(t) {
                    Gn.delete(t), Qn && !Gn.size && (Qn(), Qn = null)
                }
                var ts = {
                    extends: Vn,
                    mixins: [Sn, Yn],
                    name: "grid",
                    props: {
                        masonry: Boolean,
                        parallax: Number
                    },
                    data: {
                        margin: "uk-grid-margin",
                        clsStack: "uk-grid-stack",
                        masonry: !1,
                        parallax: 0
                    },
                    connected() {
                        this.masonry && ie(this.$el, "uk-flex-top uk-flex-wrap-top")
                    },
                    update: [{
                        write(t) {
                            let {
                                columns: e
                            } = t;
                            le(this.$el, this.clsStack, e.length < 2)
                        },
                        events: ["resize"]
                    }, {
                        read(t) {
                            let {
                                columns: e,
                                rows: i
                            } = t;
                            if (!e.length || !this.masonry && !this.parallax || es(this.$el)) return t.translates = !1, !1;
                            let n = !1;
                            const s = mt(this.$el),
                                o = ss(e),
                                r = ns(s, this.margin) * (i.length - 1),
                                l = Math.max(...o) + r;
                            this.masonry && (e = e.map((t => O(t, "offsetTop"))), n = is(i, e));
                            let h = Math.abs(this.parallax);
                            return h && (h = o.reduce(((t, e, i) => Math.max(t, e + r + (i % 2 ? h : h / 8) - l)), 0)), {
                                padding: h,
                                columns: e,
                                translates: n,
                                height: n ? l : ""
                            }
                        },
                        write(t) {
                            let {
                                height: e,
                                padding: i
                            } = t;
                            Gt(this.$el, "paddingBottom", i || ""), !1 !== e && Gt(this.$el, "height", e)
                        },
                        events: ["resize"]
                    }, {
                        read() {
                            return (!this.parallax || !es(this.$el)) && {
                                scrolled: !!this.parallax && Ui(this.$el) * Math.abs(this.parallax)
                            }
                        },
                        write(t) {
                            let {
                                columns: e,
                                scrolled: i,
                                translates: n
                            } = t;
                            (!1 !== i || n) && e.forEach(((t, e) => t.forEach(((t, s) => Gt(t, "transform", i || n ? "translateY(" + ((n && -n[e][s]) + (i ? e % 2 ? i : i / 8 : 0)) + "px)" : "")))))
                        },
                        events: ["scroll", "resize"]
                    }]
                };

                function es(t) {
                    return mt(t).some((t => "absolute" === Gt(t, "position")))
                }

                function is(t, e) {
                    const i = t.map((t => Math.max(...t.map((t => t.offsetHeight)))));
                    return e.map((t => {
                        let e = 0;
                        return t.map(((n, s) => e += s ? i[s - 1] - t[s - 1].offsetHeight : 0))
                    }))
                }

                function ns(t, e) {
                    const [i] = t.filter((t => re(t, e)));
                    return A(i ? Gt(i, "marginTop") : Gt(t[0], "paddingLeft"))
                }

                function ss(t) {
                    return t.map((t => t.reduce(((t, e) => t + e.offsetHeight), 0)))
                }
                var os = {
                    mixins: [Dn],
                    args: "target",
                    props: {
                        target: String,
                        row: Boolean
                    },
                    data: {
                        target: "> *",
                        row: !0
                    },
                    computed: {
                        elements: {
                            get(t, e) {
                                let {
                                    target: i
                                } = t;
                                return Je(i, e)
                            },
                            watch() {
                                this.$reset()
                            }
                        }
                    },
                    resizeTargets() {
                        return [this.$el, ...this.elements]
                    },
                    update: {
                        read() {
                            return {
                                rows: (this.row ? Wn(this.elements) : [this.elements]).map(rs)
                            }
                        },
                        write(t) {
                            let {
                                rows: e
                            } = t;
                            for (const {
                                    heights: i,
                                    elements: n
                                } of e) n.forEach(((t, e) => Gt(t, "minHeight", i[e])))
                        },
                        events: ["resize"]
                    }
                };

                function rs(t) {
                    if (t.length < 2) return {
                        heights: [""],
                        elements: t
                    };
                    Gt(t, "minHeight", "");
                    let e = t.map(ls);
                    const i = Math.max(...e);
                    return {
                        heights: t.map(((t, n) => e[n].toFixed(2) === i.toFixed(2) ? "" : i)),
                        elements: t
                    }
                }

                function ls(t) {
                    let e = !1;
                    ot(t) || (e = t.style.display, Gt(t, "display", "block", "important"));
                    const i = we(t).height - Le(t, "height", "content-box");
                    return !1 !== e && Gt(t, "display", e), i
                }
                var hs = {
                        mixins: [Sn, Dn],
                        props: {
                            expand: Boolean,
                            offsetTop: Boolean,
                            offsetBottom: Boolean,
                            minHeight: Number
                        },
                        data: {
                            expand: !1,
                            offsetTop: !1,
                            offsetBottom: !1,
                            minHeight: 0
                        },
                        resizeTargets() {
                            return [this.$el, document.documentElement]
                        },
                        update: {
                            read(t) {
                                let {
                                    minHeight: e
                                } = t;
                                if (!ot(this.$el)) return !1;
                                let i = "";
                                const n = Le(this.$el, "height", "content-box");
                                if (this.expand) i = Math.max(be(window) - (we(document.documentElement).height - we(this.$el).height) - n, 0);
                                else {
                                    if (i = "calc(100vh", this.offsetTop) {
                                        const {
                                            top: t
                                        } = ve(this.$el);
                                        i += t > 0 && t < be(window) / 2 ? " - " + t + "px" : ""
                                    }!0 === this.offsetBottom ? i += " - " + we(this.$el.nextElementSibling).height + "px" : M(this.offsetBottom) ? i += " - " + this.offsetBottom + "vh" : this.offsetBottom && c(this.offsetBottom, "px") ? i += " - " + A(this.offsetBottom) + "px" : $(this.offsetBottom) && (i += " - " + we(vt(this.offsetBottom, this.$el)).height + "px"), i += (n ? " - " + n + "px" : "") + ")"
                                }
                                return {
                                    minHeight: i,
                                    prev: e
                                }
                            },
                            write(t) {
                                let {
                                    minHeight: e
                                } = t;
                                Gt(this.$el, {
                                    minHeight: e
                                }), this.minHeight && A(Gt(this.$el, "minHeight")) < this.minHeight && Gt(this.$el, "minHeight", this.minHeight)
                            },
                            events: ["resize"]
                        }
                    },
                    as = {
                        args: "src",
                        props: {
                            id: Boolean,
                            icon: String,
                            src: String,
                            style: String,
                            width: Number,
                            height: Number,
                            ratio: Number,
                            class: String,
                            strokeAnimation: Boolean,
                            focusable: Boolean,
                            attributes: "list"
                        },
                        data: {
                            ratio: 1,
                            include: ["style", "class", "focusable"],
                            class: "",
                            strokeAnimation: !1
                        },
                        beforeConnect() {
                            this.class += " uk-svg"
                        },
                        connected() {
                            !this.icon && d(this.src, "#") && ([this.src, this.icon] = this.src.split("#")), this.svg = this.getSvg().then((t => {
                                if (this._connected) {
                                    const e = ws(t, this.$el);
                                    return this.svgEl && e !== this.svgEl && Fe(this.svgEl), this.applyAttributes(e, t), this.svgEl = e
                                }
                            }), R), this.strokeAnimation && this.svg.then((t => {
                                this._connected && (fs(t), this.registerObserver(vi(t, ((e, i) => {
                                    fs(t), i.disconnect()
                                }))))
                            }))
                        },
                        disconnected() {
                            this.svg.then((t => {
                                this._connected || (st(this.$el) && (this.$el.hidden = !1), Fe(t), this.svgEl = null)
                            })), this.svg = null
                        },
                        methods: {
                            async getSvg() {
                                return _e(this.$el, "img") && !this.$el.complete && "lazy" === this.$el.loading ? new Promise((t => zt(this.$el, "load", (() => t(this.getSvg()))))) : ds(await cs(this.src), this.icon) || Promise.reject("SVG not found.")
                            },
                            applyAttributes(t, e) {
                                for (const o in this.$options.props) d(this.include, o) && o in this && K(t, o, this[o]);
                                for (const o in this.attributes) {
                                    const [e, i] = this.attributes[o].split(":", 2);
                                    K(t, e, i)
                                }
                                this.id || et(t, "id");
                                const i = ["width", "height"];
                                let n = i.map((t => this[t]));
                                n.some((t => t)) || (n = i.map((t => K(e, t))));
                                const s = K(e, "viewBox");
                                s && !n.some((t => t)) && (n = s.split(" ").slice(2)), n.forEach(((e, n) => K(t, i[n], A(e) * this.ratio || null)))
                            }
                        }
                    };
                const cs = Q((async t => t ? a(t, "data:") ? decodeURIComponent(t.split(",")[1]) : (await fetch(t)).text() : Promise.reject()));

                function ds(t, e) {
                    var i;
                    return e && d(t, "<symbol") && (t = ps(t, e) || t), (null == (i = t = Qe(t.substr(t.indexOf("<svg")))) ? void 0 : i.hasChildNodes()) && t
                }
                const us = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,
                    gs = {};

                function ps(t, e) {
                    if (!gs[t]) {
                        let e;
                        for (gs[t] = {}, us.lastIndex = 0; e = us.exec(t);) gs[t][e[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + e[1] + "svg>"
                    }
                    return gs[t][e]
                }

                function fs(t) {
                    const e = ms(t);
                    e && t.style.setProperty("--uk-animation-stroke", e)
                }

                function ms(t) {
                    return Math.ceil(Math.max(0, ...Je("[stroke]", t).map((t => {
                        try {
                            return t.getTotalLength()
                        } catch (e) {
                            return 0
                        }
                    }))))
                }

                function ws(t, e) {
                    if (st(e) || _e(e, "canvas")) {
                        e.hidden = !0;
                        const i = e.nextElementSibling;
                        return vs(t, i) ? i : Oe(e, t)
                    }
                    const i = e.lastElementChild;
                    return vs(t, i) ? i : He(e, t)
                }

                function vs(t, e) {
                    return _e(t, "svg") && _e(e, "svg") && xs(t) === xs(e)
                }

                function xs(t) {
                    return (t.innerHTML || (new XMLSerializer).serializeToString(t).replace(/<svg.*?>(.*?)<\/svg>/g, "$1")).replace(/\s/g, "")
                }
                const ys = {
                        spinner: '<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',
                        totop: '<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',
                        marker: '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',
                        "close-icon": '<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',
                        "close-large": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',
                        "navbar-toggle-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',
                        "overlay-icon": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',
                        "pagination-next": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',
                        "pagination-previous": '<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',
                        "search-icon": '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',
                        "search-large": '<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',
                        "search-navbar": '<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',
                        "slidenav-next": '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',
                        "slidenav-next-large": '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',
                        "slidenav-previous": '<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',
                        "slidenav-previous-large": '<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'
                    },
                    bs = {
                        install: Bs,
                        extends: as,
                        args: "icon",
                        props: ["icon"],
                        data: {
                            include: ["focusable"]
                        },
                        isIcon: !0,
                        beforeConnect() {
                            ie(this.$el, "uk-icon")
                        },
                        methods: {
                            async getSvg() {
                                const t = Is(this.icon);
                                if (!t) throw "Icon not found.";
                                return t
                            }
                        }
                    },
                    Cs = {
                        args: !1,
                        extends: bs,
                        data: t => ({
                            icon: s(t.constructor.options.name)
                        }),
                        beforeConnect() {
                            ie(this.$el, this.$name)
                        }
                    },
                    ks = {
                        extends: Cs,
                        beforeConnect() {
                            ie(this.$el, "uk-slidenav");
                            const t = this.$props.icon;
                            this.icon = re(this.$el, "uk-slidenav-large") ? t + "-large" : t
                        }
                    },
                    Ls = {
                        extends: Cs,
                        beforeConnect() {
                            this.icon = re(this.$el, "uk-search-icon") && ft(this.$el, ".uk-search-large").length ? "search-large" : ft(this.$el, ".uk-search-navbar").length ? "search-navbar" : this.$props.icon
                        }
                    },
                    $s = {
                        extends: Cs,
                        beforeConnect() {
                            this.icon = "close-" + (re(this.$el, "uk-close-large") ? "large" : "icon")
                        }
                    },
                    Ss = {
                        extends: Cs,
                        methods: {
                            async getSvg() {
                                const t = await bs.methods.getSvg.call(this);
                                return 1 !== this.ratio && Gt(Qe("circle", t), "strokeWidth", 1 / this.ratio), t
                            }
                        }
                    },
                    Ms = {};

                function Bs(t) {
                    t.icon.add = (e, i) => {
                        const n = $(e) ? {
                            [e]: i
                        } : e;
                        N(n, ((t, e) => {
                            ys[e] = t, delete Ms[e]
                        })), t._initialized && Ge(document.body, (e => N(t.getComponents(e), (t => {
                            t.$options.isIcon && t.icon in n && t.$reset()
                        }))))
                    }
                }

                function Is(t) {
                    return ys[t] ? (Ms[t] || (Ms[t] = Qe((ys[Ts(t)] || ys[t]).trim())), Ms[t].cloneNode(!0)) : null
                }

                function Ts(t) {
                    return ei ? j(j(t, "left", "right"), "previous", "next") : t
                }
                const Es = ti && "loading" in HTMLImageElement.prototype;
                var As = {
                    args: "dataSrc",
                    props: {
                        dataSrc: String,
                        sources: String,
                        offsetTop: String,
                        offsetLeft: String,
                        target: String,
                        loading: String
                    },
                    data: {
                        dataSrc: "",
                        sources: !1,
                        offsetTop: "50vh",
                        offsetLeft: "50vw",
                        target: !1,
                        loading: "lazy"
                    },
                    connected() {
                        if ("lazy" !== this.loading) return void this.load();
                        const t = [this.$el, ...xt(this.$props.target, this.$el)];
                        Es && Zs(this.$el) && (this.$el.loading = "lazy", _s(this.$el), 1 === t.length) || (Ns(this.$el), this.registerObserver(vi(t, ((t, e) => {
                            this.load(), e.disconnect()
                        }), {
                            rootMargin: Se(this.offsetTop, "height") + "px " + Se(this.offsetLeft, "width") + "px"
                        })))
                    },
                    disconnected() {
                        this._data.image && (this._data.image.onload = "")
                    },
                    methods: {
                        load() {
                            if (this._data.image) return this._data.image;
                            const t = Zs(this.$el) ? this.$el : Ps(this.$el, this.dataSrc, this.sources);
                            return et(t, "loading"), _s(this.$el, t.currentSrc), this._data.image = t
                        }
                    }
                };

                function _s(t, e) {
                    if (Zs(t)) {
                        const e = ct(t);
                        (Os(e) ? mt(e) : [t]).forEach((t => Ds(t, t)))
                    } else e && !d(t.style.backgroundImage, e) && (Gt(t, "backgroundImage", "url(" + Et(e) + ")"), Dt(t, Pt("load", !1)))
                }
                const zs = ["data-src", "data-srcset", "sizes"];

                function Ds(t, e) {
                    zs.forEach((i => {
                        const n = it(t, i);
                        n && K(e, i.replace(/^(data-)+/, ""), n)
                    }))
                }

                function Ps(t, e, i) {
                    const n = new Image;
                    return js(n, i), Ds(t, n), n.onload = () => {
                        _s(t, n.currentSrc)
                    }, K(n, "src", e), n
                }

                function js(t, e) {
                    if ((e = Hs(e)).length) {
                        const i = Xe("<picture>");
                        for (const t of e) {
                            const e = Xe("<source>");
                            K(e, t), He(i, e)
                        }
                        He(i, t)
                    }
                }

                function Hs(t) {
                    if (!t) return [];
                    if (a(t, "[")) try {
                        t = JSON.parse(t)
                    } catch (e) {
                        t = []
                    } else t = Ti(t);
                    return g(t) || (t = [t]), t.filter((t => !B(t)))
                }

                function Ns(t) {
                    Zs(t) && !tt(t, "src") && K(t, "src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>')
                }

                function Os(t) {
                    return _e(t, "picture")
                }

                function Zs(t) {
                    return _e(t, "img")
                }
                var Fs = {
                    props: {
                        media: Boolean
                    },
                    data: {
                        media: !1
                    },
                    connected() {
                        const t = Rs(this.media);
                        if (this.matchMedia = !0, t) {
                            this.mediaObj = window.matchMedia(t);
                            const e = () => {
                                this.matchMedia = this.mediaObj.matches, Dt(this.$el, Pt("mediachange", !1, !0, [this.mediaObj]))
                            };
                            this.offMediaObj = At(this.mediaObj, "change", (() => {
                                e(), this.$emit("resize")
                            })), e()
                        }
                    },
                    disconnected() {
                        var t;
                        null == (t = this.offMediaObj) || t.call(this)
                    }
                };

                function Rs(t) {
                    if ($(t))
                        if (a(t, "@")) {
                            const e = "breakpoint-" + t.substr(1);
                            t = A(Jt(e))
                        } else if (isNaN(t)) return t;
                    return t && M(t) ? "(min-width: " + t + "px)" : ""
                }
                var Vs = {
                    mixins: [Sn, Fs, Dn],
                    props: {
                        fill: String
                    },
                    data: {
                        fill: "",
                        clsWrapper: "uk-leader-fill",
                        clsHide: "uk-leader-hide",
                        attrFill: "data-fill"
                    },
                    computed: {
                        fill(t) {
                            let {
                                fill: e
                            } = t;
                            return e || Jt("leader-fill-content")
                        }
                    },
                    connected() {
                        [this.wrapper] = Ve(this.$el, '<span class="' + this.clsWrapper + '">')
                    },
                    disconnected() {
                        We(this.wrapper.childNodes)
                    },
                    update: {
                        read() {
                            return {
                                width: Math.trunc(this.$el.offsetWidth / 2),
                                fill: this.fill,
                                hide: !this.matchMedia
                            }
                        },
                        write(t) {
                            let {
                                width: e,
                                fill: i,
                                hide: n
                            } = t;
                            le(this.wrapper, this.clsHide, n), K(this.wrapper, this.attrFill, new Array(e).join(i))
                        },
                        events: ["resize"]
                    }
                };
                const Ws = [];
                var qs = {
                    mixins: [Sn, Hn, Bn],
                    props: {
                        selPanel: String,
                        selClose: String,
                        escClose: Boolean,
                        bgClose: Boolean,
                        stack: Boolean
                    },
                    data: {
                        cls: "uk-open",
                        escClose: !0,
                        bgClose: !0,
                        overlay: !0,
                        stack: !1
                    },
                    computed: {
                        panel(t, e) {
                            let {
                                selPanel: i
                            } = t;
                            return Qe(i, e)
                        },
                        transitionElement() {
                            return this.panel
                        },
                        bgClose(t) {
                            let {
                                bgClose: e
                            } = t;
                            return e && this.panel
                        }
                    },
                    beforeDisconnect() {
                        d(Ws, this) && this.toggleElement(this.$el, !1, !1)
                    },
                    events: [{
                        name: "click",
                        delegate() {
                            return this.selClose
                        },
                        handler(t) {
                            t.preventDefault(), this.hide()
                        }
                    }, {
                        name: "toggle",
                        self: !0,
                        handler(t) {
                            t.defaultPrevented || (t.preventDefault(), this.isToggled() === d(Ws, this) && this.toggle())
                        }
                    }, {
                        name: "beforeshow",
                        self: !0,
                        handler(t) {
                            if (d(Ws, this)) return !1;
                            !this.stack && Ws.length ? (Promise.all(Ws.map((t => t.hide()))).then(this.show), t.preventDefault()) : Ws.push(this)
                        }
                    }, {
                        name: "show",
                        self: !0,
                        handler() {
                            const t = document.documentElement;
                            Ce(window) > t.clientWidth && this.overlay && Gt(document.body, "overflowY", "scroll"), this.stack && Gt(this.$el, "zIndex", A(Gt(this.$el, "zIndex")) + Ws.length), ie(t, this.clsPage), this.bgClose && zt(this.$el, "hide", At(document, si, (t => {
                                let {
                                    target: e
                                } = t;
                                H(Ws) !== this || this.overlay && !pt(e, this.$el) || pt(e, this.panel) || zt(document, ri + " " + ai + " scroll", (t => {
                                    let {
                                        defaultPrevented: i,
                                        type: n,
                                        target: s
                                    } = t;
                                    i || n !== ri || e !== s || this.hide()
                                }), !0)
                            })), {
                                self: !0
                            }), this.escClose && zt(this.$el, "hide", At(document, "keydown", (t => {
                                27 === t.keyCode && H(Ws) === this && this.hide()
                            })), {
                                self: !0
                            })
                        }
                    }, {
                        name: "shown",
                        self: !0,
                        handler() {
                            at(this.$el) || K(this.$el, "tabindex", "-1"), Qe(":focus", this.$el) || this.$el.focus()
                        }
                    }, {
                        name: "hidden",
                        self: !0,
                        handler() {
                            d(Ws, this) && Ws.splice(Ws.indexOf(this), 1), Ws.length || Gt(document.body, "overflowY", ""), Gt(this.$el, "zIndex", ""), Ws.some((t => t.clsPage === this.clsPage)) || ne(document.documentElement, this.clsPage)
                        }
                    }],
                    methods: {
                        toggle() {
                            return this.isToggled() ? this.hide() : this.show()
                        },
                        show() {
                            return this.container && ct(this.$el) !== this.container ? (He(this.container, this.$el), new Promise((t => requestAnimationFrame((() => this.show().then(t)))))) : this.toggleElement(this.$el, !0, Us(this))
                        },
                        hide() {
                            return this.toggleElement(this.$el, !1, Us(this))
                        }
                    }
                };

                function Us(t) {
                    let {
                        transitionElement: e,
                        _toggle: i
                    } = t;
                    return (t, n) => new Promise(((s, o) => zt(t, "show hide", (() => {
                        null == t._reject || t._reject(), t._reject = o, i(t, n);
                        const r = zt(e, "transitionstart", (() => {
                                zt(e, "transitionend transitioncancel", s, {
                                    self: !0
                                }), clearTimeout(l)
                            }), {
                                self: !0
                            }),
                            l = setTimeout((() => {
                                r(), s()
                            }), Xs(Gt(e, "transitionDuration")))
                    })))).then((() => delete t._reject))
                }

                function Xs(t) {
                    return t ? c(t, "ms") ? A(t) : 1e3 * A(t) : 0
                }
                var Ys = {
                    install: Gs,
                    mixins: [qs],
                    data: {
                        clsPage: "uk-modal-page",
                        selPanel: ".uk-modal-dialog",
                        selClose: ".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"
                    },
                    events: [{
                        name: "show",
                        self: !0,
                        handler() {
                            re(this.panel, "uk-margin-auto-vertical") ? ie(this.$el, "uk-flex") : Gt(this.$el, "display", "block"), be(this.$el)
                        }
                    }, {
                        name: "hidden",
                        self: !0,
                        handler() {
                            Gt(this.$el, "display", ""), ne(this.$el, "uk-flex")
                        }
                    }]
                };

                function Gs(t) {
                    let {
                        modal: e
                    } = t;

                    function i(t, i, n, s) {
                        i = {
                            bgClose: !1,
                            escClose: !0,
                            labels: e.labels,
                            ...i
                        };
                        const o = e.dialog(t(i), i),
                            r = new J;
                        let l = !1;
                        return At(o.$el, "submit", "form", (t => {
                            t.preventDefault(), r.resolve(null == s ? void 0 : s(o)), l = !0, o.hide()
                        })), At(o.$el, "hide", (() => !l && n(r))), r.promise.dialog = o, r.promise
                    }
                    e.dialog = function(t, i) {
                        const n = e('<div class="uk-modal"> <div class="uk-modal-dialog">' + t + "</div> </div>", i);
                        return n.show(), At(n.$el, "hidden", (async () => {
                            await Promise.resolve(), n.$destroy(!0)
                        }), {
                            self: !0
                        }), n
                    }, e.alert = function(t, e) {
                        return i((e => {
                            let {
                                labels: i
                            } = e;
                            return '<div class="uk-modal-body">' + ($(t) ? t : De(t)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + i.ok + "</button> </div>"
                        }), e, (t => t.resolve()))
                    }, e.confirm = function(t, e) {
                        return i((e => {
                            let {
                                labels: i
                            } = e;
                            return '<form> <div class="uk-modal-body">' + ($(t) ? t : De(t)) + '</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + i.cancel + '</button> <button class="uk-button uk-button-primary" autofocus>' + i.ok + "</button> </div> </form>"
                        }), e, (t => t.reject()))
                    }, e.prompt = function(t, e, n) {
                        return i((i => {
                            let {
                                labels: n
                            } = i;
                            return '<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>' + ($(t) ? t : De(t)) + '</label> <input class="uk-input" value="' + (e || "") + '" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">' + n.cancel + '</button> <button class="uk-button uk-button-primary">' + n.ok + "</button> </div> </form>"
                        }), n, (t => t.resolve(null)), (t => Qe("input", t.$el).value))
                    }, e.labels = {
                        ok: "Ok",
                        cancel: "Cancel"
                    }
                }
                var Qs = {
                        extends: En,
                        data: {
                            targets: "> .uk-parent",
                            toggle: "> a",
                            content: "> ul"
                        }
                    },
                    Js = {
                        mixins: [Sn, Hn],
                        props: {
                            dropdown: String,
                            mode: "list",
                            align: String,
                            offset: Number,
                            boundary: Boolean,
                            boundaryAlign: Boolean,
                            clsDrop: String,
                            delayShow: Number,
                            delayHide: Number,
                            dropbar: Boolean,
                            dropbarAnchor: Boolean,
                            duration: Number
                        },
                        data: {
                            dropdown: ".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",
                            align: ei ? "right" : "left",
                            clsDrop: "uk-navbar-dropdown",
                            mode: void 0,
                            offset: void 0,
                            delayShow: void 0,
                            delayHide: void 0,
                            boundaryAlign: void 0,
                            flip: "x",
                            boundary: !0,
                            dropbar: !1,
                            dropbarAnchor: !1,
                            duration: 200,
                            container: !1
                        },
                        computed: {
                            boundary(t, e) {
                                let {
                                    boundary: i
                                } = t;
                                return !0 === i ? e : i
                            },
                            dropbarAnchor(t, e) {
                                let {
                                    dropbarAnchor: i
                                } = t;
                                return vt(i, e)
                            },
                            pos(t) {
                                let {
                                    align: e
                                } = t;
                                return "bottom-" + e
                            },
                            dropbar: {
                                get(t) {
                                    let {
                                        dropbar: e
                                    } = t;
                                    return e ? (e = this._dropbar || vt(e, this.$el) || Qe("+ .uk-navbar-dropbar", this.$el), e || (this._dropbar = Qe("<div></div>"))) : null
                                },
                                watch(t) {
                                    ie(t, "uk-navbar-dropbar")
                                },
                                immediate: !0
                            },
                            dropContainer(t, e) {
                                return this.container || e
                            },
                            dropdowns: {
                                get(t, e) {
                                    let {
                                        clsDrop: i
                                    } = t;
                                    const n = Je("." + i, e);
                                    if (this.dropContainer !== e)
                                        for (const o of Je("." + i, this.dropContainer)) {
                                            var s;
                                            const t = null == (s = this.getDropdown(o)) ? void 0 : s.target;
                                            !d(n, o) && t && pt(t, this.$el) && n.push(o)
                                        }
                                    return n
                                },
                                watch(t) {
                                    this.$create("drop", t.filter((t => !this.getDropdown(t))), { ...this.$props,
                                        boundary: this.boundary,
                                        pos: this.pos,
                                        offset: this.dropbar || this.offset
                                    })
                                },
                                immediate: !0
                            },
                            toggles: {
                                get(t, e) {
                                    let {
                                        dropdown: i
                                    } = t;
                                    return Je(i, e)
                                },
                                watch() {
                                    const t = re(this.$el, "uk-navbar-justify");
                                    for (const e of Je(".uk-navbar-nav, .uk-navbar-left, .uk-navbar-right", this.$el)) Gt(e, "flexGrow", t ? Je(this.dropdown, e).length : "")
                                },
                                immediate: !0
                            }
                        },
                        disconnected() {
                            this.dropbar && Fe(this.dropbar), delete this._dropbar
                        },
                        events: [{
                            name: "mouseover focusin",
                            delegate() {
                                return this.dropdown
                            },
                            handler(t) {
                                let {
                                    current: e
                                } = t;
                                const i = this.getActive();
                                i && d(i.mode, "hover") && i.target && !pt(i.target, e) && !i.isDelaying && i.hide(!1)
                            }
                        }, {
                            name: "keydown",
                            delegate() {
                                return this.dropdown
                            },
                            handler(t) {
                                const {
                                    current: e,
                                    keyCode: i
                                } = t, n = this.getActive();
                                i === eo.DOWN && tt(e, "aria-expanded") && (t.preventDefault(), n && n.target === e ? to(n.$el) : (e.click(), zt(this.dropContainer, "show", (t => {
                                    let {
                                        target: e
                                    } = t;
                                    return to(e)
                                })))), Ks(t, this.toggles, n)
                            }
                        }, {
                            name: "keydown",
                            el() {
                                return this.dropContainer
                            },
                            delegate() {
                                return "." + this.clsDrop
                            },
                            handler(t) {
                                const {
                                    current: e,
                                    keyCode: i
                                } = t;
                                if (!d(this.dropdowns, e)) return;
                                const n = this.getActive(),
                                    s = Je(ht, e),
                                    o = u(s, (t => ut(t, ":focus")));
                                var r;
                                i === eo.UP && (t.preventDefault(), o > 0 && s[o - 1].focus()), i === eo.DOWN && (t.preventDefault(), o < s.length - 1 && s[o + 1].focus()), i === eo.ESC && (null == n || null == (r = n.target) || r.focus()), Ks(t, this.toggles, n)
                            }
                        }, {
                            name: "mouseleave",
                            el() {
                                return this.dropbar
                            },
                            filter() {
                                return this.dropbar
                            },
                            handler() {
                                const t = this.getActive();
                                t && d(t.mode, "hover") && !this.dropdowns.some((t => ut(t, ":hover"))) && t.hide()
                            }
                        }, {
                            name: "beforeshow",
                            el() {
                                return this.dropContainer
                            },
                            filter() {
                                return this.dropbar
                            },
                            handler(t, e) {
                                let {
                                    $el: i
                                } = e;
                                re(i, this.clsDrop) && (ct(this.dropbar) || Oe(this.dropbarAnchor || this.$el, this.dropbar), ie(i, this.clsDrop + "-dropbar"))
                            }
                        }, {
                            name: "show",
                            el() {
                                return this.dropContainer
                            },
                            filter() {
                                return this.dropbar
                            },
                            handler(t, e) {
                                let {
                                    $el: i,
                                    pos: [n] = []
                                } = e;
                                re(i, this.clsDrop) && "bottom" === n && this.transitionTo(ve(i).bottom - ve(this.dropbar).top + A(Gt(i, "marginBottom")), i)
                            }
                        }, {
                            name: "beforehide",
                            el() {
                                return this.dropContainer
                            },
                            filter() {
                                return this.dropbar
                            },
                            handler(t, e) {
                                let {
                                    $el: i
                                } = e;
                                const n = this.getActive();
                                ut(this.dropbar, ":hover") && (null == n ? void 0 : n.$el) === i && !this.toggles.some((t => n.target !== t && ut(t, ":focus"))) && t.preventDefault()
                            }
                        }, {
                            name: "hide",
                            el() {
                                return this.dropContainer
                            },
                            filter() {
                                return this.dropbar
                            },
                            handler(t, e) {
                                let {
                                    $el: i
                                } = e;
                                if (!re(i, this.clsDrop)) return;
                                const n = this.getActive();
                                n && (null == n ? void 0 : n.$el) !== i || this.transitionTo(0)
                            }
                        }],
                        methods: {
                            getActive() {
                                return On && pt(On.target, this.$el) && On
                            },
                            transitionTo(t, e) {
                                const {
                                    dropbar: i
                                } = this, n = ot(i) ? be(i) : 0;
                                return Gt(e = n < t && e, "clip", "rect(0," + e.offsetWidth + "px," + n + "px,0)"), be(i, n), de.cancel([e, i]), Promise.all([de.start(i, {
                                    height: t
                                }, this.duration), de.start(e, {
                                    clip: "rect(0," + e.offsetWidth + "px," + t + "px,0)"
                                }, this.duration)]).catch(R).then((() => {
                                    Gt(e, {
                                        clip: ""
                                    }), this.$update(i)
                                }))
                            },
                            getDropdown(t) {
                                return this.$getComponent(t, "drop") || this.$getComponent(t, "dropdown")
                            }
                        }
                    };

                function Ks(t, e, i) {
                    const {
                        current: n,
                        keyCode: s
                    } = t, o = (null == i ? void 0 : i.target) || n, r = e.indexOf(o);
                    s === eo.LEFT && r > 0 && (null == i || i.hide(!1), e[r - 1].focus()), s === eo.RIGHT && r < e.length - 1 && (null == i || i.hide(!1), e[r + 1].focus()), s === eo.TAB && (o.focus(), null == i || i.hide(!1))
                }

                function to(t) {
                    var e;
                    Qe(":focus", t) || null == (e = Qe(ht, t)) || e.focus()
                }
                const eo = {
                    TAB: 9,
                    ESC: 27,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40
                };
                var io = {
                    props: {
                        swiping: Boolean
                    },
                    data: {
                        swiping: !0
                    },
                    computed: {
                        swipeTarget: (t, e) => e
                    },
                    connected() {
                        this.swiping && pn(this, {
                            el: this.swipeTarget,
                            name: si,
                            passive: !0,
                            handler(t) {
                                if (!Vt(t)) return;
                                const e = Wt(t),
                                    i = "tagName" in t.target ? t.target : ct(t.target);
                                zt(document, ri + " " + ai + " scroll", (t => {
                                    const {
                                        x: n,
                                        y: s
                                    } = Wt(t);
                                    ("scroll" !== t.type && i && n && Math.abs(e.x - n) > 100 || s && Math.abs(e.y - s) > 100) && setTimeout((() => {
                                        Dt(i, "swipe"), Dt(i, "swipe" + no(e.x, e.y, n, s))
                                    }))
                                }))
                            }
                        })
                    }
                };

                function no(t, e, i, n) {
                    return Math.abs(t - i) >= Math.abs(e - n) ? t - i > 0 ? "Left" : "Right" : e - n > 0 ? "Up" : "Down"
                }
                var so = {
                    mixins: [qs, io],
                    args: "mode",
                    props: {
                        mode: String,
                        flip: Boolean,
                        overlay: Boolean
                    },
                    data: {
                        mode: "slide",
                        flip: !1,
                        overlay: !1,
                        clsPage: "uk-offcanvas-page",
                        clsContainer: "uk-offcanvas-container",
                        selPanel: ".uk-offcanvas-bar",
                        clsFlip: "uk-offcanvas-flip",
                        clsContainerAnimation: "uk-offcanvas-container-animation",
                        clsSidebarAnimation: "uk-offcanvas-bar-animation",
                        clsMode: "uk-offcanvas",
                        clsOverlay: "uk-offcanvas-overlay",
                        selClose: ".uk-offcanvas-close",
                        container: !1
                    },
                    computed: {
                        clsFlip(t) {
                            let {
                                flip: e,
                                clsFlip: i
                            } = t;
                            return e ? i : ""
                        },
                        clsOverlay(t) {
                            let {
                                overlay: e,
                                clsOverlay: i
                            } = t;
                            return e ? i : ""
                        },
                        clsMode(t) {
                            let {
                                mode: e,
                                clsMode: i
                            } = t;
                            return i + "-" + e
                        },
                        clsSidebarAnimation(t) {
                            let {
                                mode: e,
                                clsSidebarAnimation: i
                            } = t;
                            return "none" === e || "reveal" === e ? "" : i
                        },
                        clsContainerAnimation(t) {
                            let {
                                mode: e,
                                clsContainerAnimation: i
                            } = t;
                            return "push" !== e && "reveal" !== e ? "" : i
                        },
                        transitionElement(t) {
                            let {
                                mode: e
                            } = t;
                            return "reveal" === e ? ct(this.panel) : this.panel
                        }
                    },
                    update: {
                        read() {
                            this.isToggled() && !ot(this.$el) && this.hide()
                        },
                        events: ["resize"]
                    },
                    events: [{
                        name: "click",
                        delegate: () => 'a[href^="#"]',
                        handler(t) {
                            let {
                                current: {
                                    hash: e
                                },
                                defaultPrevented: i
                            } = t;
                            !i && e && Qe(e, document.body) && this.hide()
                        }
                    }, {
                        name: "touchstart",
                        passive: !0,
                        el() {
                            return this.panel
                        },
                        handler(t) {
                            let {
                                targetTouches: e
                            } = t;
                            1 === e.length && (this.clientY = e[0].clientY)
                        }
                    }, {
                        name: "touchmove",
                        self: !0,
                        passive: !1,
                        filter() {
                            return this.overlay
                        },
                        handler(t) {
                            t.cancelable && t.preventDefault()
                        }
                    }, {
                        name: "touchmove",
                        passive: !1,
                        el() {
                            return this.panel
                        },
                        handler(t) {
                            if (1 !== t.targetTouches.length) return;
                            const e = t.targetTouches[0].clientY - this.clientY,
                                {
                                    scrollTop: i,
                                    scrollHeight: n,
                                    clientHeight: s
                                } = this.panel;
                            (s >= n || 0 === i && e > 0 || n - i <= s && e < 0) && t.cancelable && t.preventDefault()
                        }
                    }, {
                        name: "show",
                        self: !0,
                        handler() {
                            "reveal" !== this.mode || re(ct(this.panel), this.clsMode) || (Re(this.panel, "<div>"), ie(ct(this.panel), this.clsMode)), Gt(document.documentElement, "overflowY", this.overlay ? "hidden" : ""), ie(document.body, this.clsContainer, this.clsFlip), Gt(document.body, "touch-action", "pan-y pinch-zoom"), Gt(this.$el, "display", "block"), ie(this.$el, this.clsOverlay), ie(this.panel, this.clsSidebarAnimation, "reveal" !== this.mode ? this.clsMode : ""), be(document.body), ie(document.body, this.clsContainerAnimation), this.clsContainerAnimation && oo()
                        }
                    }, {
                        name: "hide",
                        self: !0,
                        handler() {
                            ne(document.body, this.clsContainerAnimation), Gt(document.body, "touch-action", "")
                        }
                    }, {
                        name: "hidden",
                        self: !0,
                        handler() {
                            this.clsContainerAnimation && ro(), "reveal" === this.mode && We(this.panel), ne(this.panel, this.clsSidebarAnimation, this.clsMode), ne(this.$el, this.clsOverlay), Gt(this.$el, "display", ""), ne(document.body, this.clsContainer, this.clsFlip), Gt(document.documentElement, "overflowY", "")
                        }
                    }, {
                        name: "swipeLeft swipeRight",
                        handler(t) {
                            this.isToggled() && c(t.type, "Left") ^ this.flip && this.hide()
                        }
                    }]
                };

                function oo() {
                    lo().content += ",user-scalable=0"
                }

                function ro() {
                    const t = lo();
                    t.content = t.content.replace(/,user-scalable=0$/, "")
                }

                function lo() {
                    return Qe('meta[name="viewport"]', document.head) || He(document.head, '<meta name="viewport">')
                }
                var ho = {
                        mixins: [Sn, Dn],
                        props: {
                            selContainer: String,
                            selContent: String,
                            minHeight: Number
                        },
                        data: {
                            selContainer: ".uk-modal",
                            selContent: ".uk-modal-dialog",
                            minHeight: 150
                        },
                        computed: {
                            container(t, e) {
                                let {
                                    selContainer: i
                                } = t;
                                return gt(e, i)
                            },
                            content(t, e) {
                                let {
                                    selContent: i
                                } = t;
                                return gt(e, i)
                            }
                        },
                        resizeTargets() {
                            return [this.container, this.content]
                        },
                        update: {
                            read() {
                                return !!(this.content && this.container && ot(this.$el)) && {
                                    max: Math.max(this.minHeight, be(this.container) - (we(this.content).height - be(this.$el)))
                                }
                            },
                            write(t) {
                                let {
                                    max: e
                                } = t;
                                Gt(this.$el, {
                                    minHeight: this.minHeight,
                                    maxHeight: e
                                })
                            },
                            events: ["resize"]
                        }
                    },
                    ao = {
                        mixins: [Dn],
                        props: ["width", "height"],
                        resizeTargets() {
                            return [this.$el, ct(this.$el)]
                        },
                        connected() {
                            ie(this.$el, "uk-responsive-width")
                        },
                        update: {
                            read() {
                                return !!(ot(this.$el) && this.width && this.height) && {
                                    width: Ce(ct(this.$el)),
                                    height: this.height
                                }
                            },
                            write(t) {
                                be(this.$el, Y.contain({
                                    height: this.height,
                                    width: this.width
                                }, t).height)
                            },
                            events: ["resize"]
                        }
                    },
                    co = {
                        props: {
                            offset: Number
                        },
                        data: {
                            offset: 0
                        },
                        methods: {
                            async scrollTo(t) {
                                t = t && Qe(t) || document.body, Dt(this.$el, "beforescroll", [this, t]) && (await qi(t, {
                                    offset: this.offset
                                }), Dt(this.$el, "scrolled", [this, t]))
                            }
                        },
                        events: {
                            click(t) {
                                t.defaultPrevented || (t.preventDefault(), this.scrollTo(uo(this.$el)))
                            }
                        }
                    };

                function uo(t) {
                    return document.getElementById(decodeURIComponent(t.hash).substring(1))
                }
                var go = {
                        mixins: [Yn],
                        args: "cls",
                        props: {
                            cls: String,
                            target: String,
                            hidden: Boolean,
                            offsetTop: Number,
                            offsetLeft: Number,
                            repeat: Boolean,
                            delay: Number
                        },
                        data: () => ({
                            cls: "",
                            target: !1,
                            hidden: !0,
                            offsetTop: 0,
                            offsetLeft: 0,
                            repeat: !1,
                            delay: 0,
                            inViewClass: "uk-scrollspy-inview"
                        }),
                        computed: {
                            elements: {
                                get(t, e) {
                                    let {
                                        target: i
                                    } = t;
                                    return i ? Je(i, e) : [e]
                                },
                                watch(t, e) {
                                    this.hidden && Gt(dt(t, ":not(." + this.inViewClass + ")"), "visibility", "hidden"), P(t, e) || this.$reset()
                                },
                                immediate: !0
                            }
                        },
                        connected() {
                            this._data.elements = new Map, this.registerObserver(vi(this.elements, (t => {
                                const e = this._data.elements;
                                for (const {
                                        target: i,
                                        isIntersecting: n
                                    } of t) {
                                    e.has(i) || e.set(i, {
                                        cls: it(i, "uk-scrollspy-class") || this.cls
                                    });
                                    const t = e.get(i);
                                    !this.repeat && t.show || (t.show = n)
                                }
                                this.$emit()
                            }), {
                                rootMargin: Se(this.offsetTop, "height") - 1 + "px " + (Se(this.offsetLeft, "width") - 1) + "px"
                            }, !1))
                        },
                        disconnected() {
                            for (const [t, e] of this._data.elements.entries()) ne(t, this.inViewClass, (null == e ? void 0 : e.cls) || "")
                        },
                        update: [{
                            write(t) {
                                for (const [e, i] of t.elements.entries()) !i.show || i.inview || i.queued ? !i.show && i.inview && !i.queued && this.repeat && this.toggle(e, !1) : (i.queued = !0, t.promise = (t.promise || Promise.resolve()).then((() => new Promise((t => setTimeout(t, this.delay))))).then((() => {
                                    this.toggle(e, !0), setTimeout((() => {
                                        i.queued = !1, this.$emit()
                                    }), 300)
                                })))
                            }
                        }],
                        methods: {
                            toggle(t, e) {
                                const i = this._data.elements.get(t);
                                if (null == i.off || i.off(), Gt(t, "visibility", !e && this.hidden ? "hidden" : ""), le(t, this.inViewClass, e), le(t, i.cls), /\buk-animation-/.test(i.cls)) {
                                    const n = () => se(t, "uk-animation-[\\w-]+");
                                    e ? i.off = zt(t, "animationcancel animationend", n) : n()
                                }
                                Dt(t, e ? "inview" : "outview"), i.inview = e, this.$update(t)
                            }
                        }
                    },
                    po = {
                        mixins: [Yn],
                        props: {
                            cls: String,
                            closest: String,
                            scroll: Boolean,
                            overflow: Boolean,
                            offset: Number
                        },
                        data: {
                            cls: "uk-active",
                            closest: !1,
                            scroll: !1,
                            overflow: !0,
                            offset: 0
                        },
                        computed: {
                            links: {
                                get: (t, e) => Je('a[href^="#"]', e).filter((t => t.hash)),
                                watch(t) {
                                    this.scroll && this.$create("scroll", t, {
                                        offset: this.offset || 0
                                    })
                                },
                                immediate: !0
                            },
                            elements(t) {
                                let {
                                    closest: e
                                } = t;
                                return gt(this.links, e || "*")
                            }
                        },
                        update: [{
                            read() {
                                const t = this.links.map(uo).filter(Boolean),
                                    {
                                        length: e
                                    } = t;
                                if (!e || !ot(this.$el)) return !1;
                                const [i] = Xi(t, /auto|scroll/, !0), {
                                    scrollTop: n,
                                    scrollHeight: s
                                } = i, o = Yi(i);
                                let r = !1;
                                if (n === s - o.height) r = e - 1;
                                else {
                                    for (let e = 0; e < t.length && !(ve(t[e]).top - o.top - this.offset > 0); e++) r = +e;
                                    !1 === r && this.overflow && (r = 0)
                                }
                                return {
                                    active: r
                                }
                            },
                            write(t) {
                                let {
                                    active: e
                                } = t;
                                const i = !1 !== e && !re(this.elements[e], this.cls);
                                this.links.forEach((t => t.blur()));
                                for (let n = 0; n < this.elements.length; n++) le(this.elements[n], this.cls, +n === e);
                                i && Dt(this.$el, "active", [e, this.elements[e]])
                            },
                            events: ["scroll", "resize"]
                        }]
                    },
                    fo = {
                        mixins: [Sn, Fs, Dn, Yn],
                        props: {
                            position: String,
                            top: null,
                            bottom: null,
                            start: null,
                            end: null,
                            offset: String,
                            overflowFlip: Boolean,
                            animation: String,
                            clsActive: String,
                            clsInactive: String,
                            clsFixed: String,
                            clsBelow: String,
                            selTarget: String,
                            showOnUp: Boolean,
                            targetOffset: Number
                        },
                        data: {
                            position: "top",
                            top: !1,
                            bottom: !1,
                            start: !1,
                            end: !1,
                            offset: 0,
                            overflowFlip: !1,
                            animation: "",
                            clsActive: "uk-active",
                            clsInactive: "",
                            clsFixed: "uk-sticky-fixed",
                            clsBelow: "uk-sticky-below",
                            selTarget: "",
                            showOnUp: !1,
                            targetOffset: !1
                        },
                        computed: {
                            selTarget(t, e) {
                                let {
                                    selTarget: i
                                } = t;
                                return i && Qe(i, e) || e
                            }
                        },
                        resizeTargets: () => document.documentElement,
                        connected() {
                            this.start = wo(this.start || this.top), this.end = wo(this.end || this.bottom), this.placeholder = Qe("+ .uk-sticky-placeholder", this.$el) || Qe('<div class="uk-sticky-placeholder"></div>'), this.isFixed = !1, this.setActive(!1)
                        },
                        disconnected() {
                            this.isFixed && (this.hide(), ne(this.selTarget, this.clsInactive)), Fe(this.placeholder), this.placeholder = null
                        },
                        events: [{
                            name: "resize",
                            el: () => window,
                            handler() {
                                this.$emit("resize")
                            }
                        }, {
                            name: "load hashchange popstate",
                            el: () => window,
                            filter() {
                                return !1 !== this.targetOffset
                            },
                            handler() {
                                location.hash && 0 !== Wi(window) && setTimeout((() => {
                                    const t = ve(Qe(location.hash)),
                                        e = ve(this.$el);
                                    this.isFixed && V(t, e) && Wi(window, t.top - e.height - Se(this.targetOffset, "height", this.placeholder) - Se(this.offset, "height", this.placeholder))
                                }))
                            }
                        }],
                        update: [{
                            read(t, e) {
                                let {
                                    height: i,
                                    margin: n
                                } = t;
                                if (this.inactive = !this.matchMedia || !ot(this.$el), this.inactive) return !1;
                                const s = this.active && e.has("resize");
                                s && (Gt(this.selTarget, "transition", "0s"), this.hide()), this.active || (i = ve(this.$el).height, n = Gt(this.$el, "margin")), s && (this.show(), requestAnimationFrame((() => Gt(this.selTarget, "transition", ""))));
                                const o = this.isFixed ? this.placeholder : this.$el,
                                    r = be(window);
                                let l = this.position;
                                this.overflowFlip && i > r && (l = "top" === l ? "bottom" : "top");
                                let h = Se(this.offset, "height", o);
                                "bottom" === l && (i < r || this.overflowFlip) && (h += r - i);
                                const a = this.overflowFlip ? 0 : Math.max(0, i + h - r),
                                    c = ve(o).top;
                                return {
                                    start: (!1 === this.start ? c : mo(this.start, this.$el, c)) - h,
                                    end: !1 === this.end ? document.scrollingElement.scrollHeight - r : mo(this.end, this.$el, c + i, !0) - ve(this.$el).height + a - h,
                                    offset: h,
                                    overflow: a,
                                    topOffset: c,
                                    height: i,
                                    margin: n,
                                    width: we(o).width,
                                    top: ye(o)[0]
                                }
                            },
                            write(t) {
                                let {
                                    height: e,
                                    margin: i
                                } = t;
                                const {
                                    placeholder: n
                                } = this;
                                Gt(n, {
                                    height: e,
                                    margin: i
                                }), pt(n, document) || (Oe(this.$el, n), n.hidden = !0)
                            },
                            events: ["resize"]
                        }, {
                            read(t) {
                                let {
                                    scroll: e = 0,
                                    dir: i = "down",
                                    overflow: n,
                                    overflowScroll: s = 0,
                                    start: o,
                                    end: r
                                } = t;
                                const l = Wi(window);
                                return {
                                    dir: e <= l ? "down" : "up",
                                    prevDir: i,
                                    scroll: l,
                                    prevScroll: e,
                                    offsetParentTop: ve((this.isFixed ? this.placeholder : this.$el).offsetParent).top,
                                    overflowScroll: F(s + F(l, o, r) - F(e, o, r), 0, n)
                                }
                            },
                            write(t, e) {
                                const i = e.has("scroll"),
                                    {
                                        initTimestamp: n = 0,
                                        dir: s,
                                        prevDir: o,
                                        scroll: r,
                                        prevScroll: l = 0,
                                        top: h,
                                        start: a,
                                        topOffset: c,
                                        height: d
                                    } = t;
                                if (r < 0 || r === l && i || this.showOnUp && !i && !this.isFixed) return;
                                const u = Date.now();
                                if ((u - n > 300 || s !== o) && (t.initScroll = r, t.initTimestamp = u), !(this.showOnUp && !this.isFixed && Math.abs(t.initScroll - r) <= 30 && Math.abs(l - r) <= 10))
                                    if (this.inactive || r < a || this.showOnUp && (r <= a || "down" === s && i || "up" === s && !this.isFixed && r <= c + d)) {
                                        if (!this.isFixed) return void(fe.inProgress(this.$el) && h > r && (fe.cancel(this.$el), this.hide()));
                                        this.isFixed = !1, this.animation && r > c ? (fe.cancel(this.$el), fe.out(this.$el, this.animation).then((() => this.hide()), R)) : this.hide()
                                    } else this.isFixed ? this.update() : this.animation && r > c ? (fe.cancel(this.$el), this.show(), fe.in(this.$el, this.animation).catch(R)) : this.show()
                            },
                            events: ["resize", "scroll"]
                        }],
                        methods: {
                            show() {
                                this.isFixed = !0, this.update(), this.placeholder.hidden = !1
                            },
                            hide() {
                                this.setActive(!1), ne(this.$el, this.clsFixed, this.clsBelow), Gt(this.$el, {
                                    position: "",
                                    top: "",
                                    width: ""
                                }), this.placeholder.hidden = !0
                            },
                            update() {
                                let {
                                    width: t,
                                    scroll: e = 0,
                                    overflow: i,
                                    overflowScroll: n = 0,
                                    start: s,
                                    end: o,
                                    offset: r,
                                    topOffset: l,
                                    height: h,
                                    offsetParentTop: a
                                } = this._data;
                                const c = 0 !== s || e > s;
                                let d = "fixed";
                                e > o && (r += o - a, d = "absolute"), i && (r -= n), Gt(this.$el, {
                                    position: d,
                                    top: r + "px",
                                    width: t
                                }), this.setActive(c), le(this.$el, this.clsBelow, e > l + h), ie(this.$el, this.clsFixed)
                            },
                            setActive(t) {
                                const e = this.active;
                                this.active = t, t ? (oe(this.selTarget, this.clsInactive, this.clsActive), e !== t && Dt(this.$el, "active")) : (oe(this.selTarget, this.clsActive, this.clsInactive), e !== t && Dt(this.$el, "inactive"))
                            }
                        }
                    };

                function mo(t, e, i, n) {
                    if (!t) return 0;
                    if (M(t) || $(t) && t.match(/^-?\d/)) return i + Se(t, "height", e, !0); {
                        const i = !0 === t ? ct(e) : vt(t, e);
                        return ve(i).bottom - (n && i && pt(e, i) ? A(Gt(i, "paddingBottom")) : 0)
                    }
                }

                function wo(t) {
                    return "true" === t || "false" !== t && t
                }
                var vo = {
                        mixins: [Mn, io, Bn],
                        args: "connect",
                        props: {
                            connect: String,
                            toggle: String,
                            itemNav: String,
                            active: Number
                        },
                        data: {
                            connect: "~.uk-switcher",
                            toggle: "> * > :first-child",
                            itemNav: !1,
                            active: 0,
                            cls: "uk-active",
                            attrItem: "uk-switcher-item"
                        },
                        computed: {
                            connects: {
                                get(t, e) {
                                    let {
                                        connect: i
                                    } = t;
                                    return xt(i, e)
                                },
                                watch(t) {
                                    this.swiping && Gt(t, "touch-action", "pan-y pinch-zoom");
                                    const e = this.index();
                                    this.connects.forEach((t => mt(t).forEach(((t, i) => le(t, this.cls, i === e)))))
                                },
                                immediate: !0
                            },
                            toggles: {
                                get(t, e) {
                                    let {
                                        toggle: i
                                    } = t;
                                    return Je(i, e).filter((t => !ut(t, ".uk-disabled *, .uk-disabled, [disabled]")))
                                },
                                watch(t) {
                                    const e = this.index();
                                    this.show(~e ? e : t[this.active] || t[0])
                                },
                                immediate: !0
                            },
                            children() {
                                return mt(this.$el).filter((t => this.toggles.some((e => pt(e, t)))))
                            },
                            swipeTarget() {
                                return this.connects
                            }
                        },
                        connected() {
                            this.lazyload(this.$el, this.connects), Ae((() => this.$emit()))
                        },
                        events: [{
                            name: "click",
                            delegate() {
                                return this.toggle
                            },
                            handler(t) {
                                t.preventDefault(), this.show(t.current)
                            }
                        }, {
                            name: "click",
                            el() {
                                return this.connects.concat(this.itemNav ? xt(this.itemNav, this.$el) : [])
                            },
                            delegate() {
                                return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                            },
                            handler(t) {
                                t.preventDefault(), this.show(it(t.current, this.attrItem))
                            }
                        }, {
                            name: "swipeRight swipeLeft",
                            filter() {
                                return this.swiping
                            },
                            el() {
                                return this.connects
                            },
                            handler(t) {
                                let {
                                    type: e
                                } = t;
                                this.show(c(e, "Left") ? "next" : "previous")
                            }
                        }],
                        methods: {
                            index() {
                                return u(this.children, (t => re(t, this.cls)))
                            },
                            show(t) {
                                const e = this.index(),
                                    i = G(t, this.toggles, e),
                                    n = G(this.children[i], mt(this.$el));
                                mt(this.$el).forEach(((t, e) => {
                                    le(t, this.cls, n === e), K(this.toggles[e], "aria-expanded", n === e)
                                }));
                                const s = e >= 0 && e !== i;
                                this.connects.forEach((async t => {
                                    let {
                                        children: e
                                    } = t;
                                    await this.toggleElement(z(e).filter((t => re(t, this.cls))), !1, s), await this.toggleElement(e[n], !0, s)
                                }))
                            }
                        }
                    },
                    xo = {
                        mixins: [Sn],
                        extends: vo,
                        props: {
                            media: Boolean
                        },
                        data: {
                            media: 960,
                            attrItem: "uk-tab-item"
                        },
                        connected() {
                            const t = re(this.$el, "uk-tab-left") ? "uk-tab-left" : !!re(this.$el, "uk-tab-right") && "uk-tab-right";
                            t && this.$create("toggle", this.$el, {
                                cls: t,
                                mode: "media",
                                media: this.media
                            })
                        }
                    };
                const yo = 32;
                var bo = {
                    mixins: [Mn, Fs, Bn],
                    args: "target",
                    props: {
                        href: String,
                        target: null,
                        mode: "list",
                        queued: Boolean
                    },
                    data: {
                        href: !1,
                        target: !1,
                        mode: "click",
                        queued: !0
                    },
                    computed: {
                        target: {
                            get(t, e) {
                                let {
                                    href: i,
                                    target: n
                                } = t;
                                return n = xt(n || i, e), n.length && n || [e]
                            },
                            watch() {
                                this.updateAria()
                            },
                            immediate: !0
                        }
                    },
                    connected() {
                        d(this.mode, "media") || at(this.$el) || K(this.$el, "tabindex", "0"), this.lazyload(this.$el, this.target), Ae((() => this.$emit()))
                    },
                    events: [{
                        name: si,
                        filter() {
                            return d(this.mode, "hover")
                        },
                        handler(t) {
                            Vt(t) && !this._showState && (Dt(this.$el, "focus"), zt(document, si, (() => Dt(this.$el, "blur")), !0, (t => !pt(t.target, this.$el))), d(this.mode, "click") && (this._preventClick = !0))
                        }
                    }, {
                        name: li + " " + hi + " focus blur",
                        filter() {
                            return d(this.mode, "hover")
                        },
                        handler(t) {
                            if (Vt(t)) return;
                            const e = d([li, "focus"], t.type),
                                i = K(this.$el, "aria-expanded");
                            !e && (t.type === hi && ut(this.$el, ":focus") || "blur" === t.type && ut(this.$el, ":hover")) || (this._showState && e && i !== this._showState ? e || (this._showState = null) : (this._showState = e ? i : null, this.toggle("toggle" + (e ? "show" : "hide"))))
                        }
                    }, {
                        name: "keydown",
                        filter() {
                            return d(this.mode, "click") && !_e(this.$el, "input")
                        },
                        handler(t) {
                            t.keyCode === yo && (t.preventDefault(), this.$el.click())
                        }
                    }, {
                        name: "click",
                        handler(t) {
                            let e;
                            if ((gt(t.target, 'a[href="#"], a[href=""]') || (e = gt(t.target, "a[href]")) && ("true" !== K(this.$el, "aria-expanded") || e.hash && ut(this.target, e.hash))) && t.preventDefault(), this._preventClick) return this._preventClick = null;
                            d(this.mode, "click") && this.toggle()
                        }
                    }, {
                        name: "toggled",
                        self: !0,
                        el() {
                            return this.target
                        },
                        handler(t, e) {
                            t.target === this.target[0] && this.updateAria(e)
                        }
                    }, {
                        name: "mediachange",
                        filter() {
                            return d(this.mode, "media")
                        },
                        el() {
                            return this.target
                        },
                        handler(t, e) {
                            e.matches ^ this.isToggled(this.target) && this.toggle()
                        }
                    }],
                    methods: {
                        async toggle(t) {
                            if (!Dt(this.target, t || "toggle", [this])) return;
                            if (!this.queued) return this.toggleElement(this.target);
                            const e = this.target.filter((t => re(t, this.clsLeave)));
                            if (e.length) {
                                for (const t of this.target) {
                                    const i = d(e, t);
                                    this.toggleElement(t, i, i)
                                }
                                return
                            }
                            const i = this.target.filter(this.isToggled);
                            await this.toggleElement(i, !1), await this.toggleElement(this.target.filter((t => !d(i, t))), !0)
                        },
                        updateAria(t) {
                            d(this.mode, "media") || K(this.$el, "aria-expanded", L(t) ? t : this.isToggled(this.target))
                        }
                    }
                };
                N(Object.freeze({
                    __proto__: null,
                    Accordion: En,
                    Alert: _n,
                    Cover: Pn,
                    Drop: Zn,
                    Dropdown: Zn,
                    FormCustom: Rn,
                    Grid: ts,
                    HeightMatch: os,
                    HeightViewport: hs,
                    Icon: bs,
                    Img: As,
                    Leader: Vs,
                    Margin: Vn,
                    Modal: Ys,
                    Nav: Qs,
                    Navbar: Js,
                    Offcanvas: so,
                    OverflowAuto: ho,
                    Responsive: ao,
                    Scroll: co,
                    Scrollspy: go,
                    ScrollspyNav: po,
                    Sticky: fo,
                    Svg: as,
                    Switcher: vo,
                    Tab: xo,
                    Toggle: bo,
                    Video: zn,
                    Close: $s,
                    Spinner: Ss,
                    SlidenavNext: ks,
                    SlidenavPrevious: ks,
                    SearchIcon: Ls,
                    Marker: Cs,
                    NavbarToggleIcon: Cs,
                    OverlayIcon: Cs,
                    PaginationNext: Cs,
                    PaginationPrevious: Cs,
                    Totop: Cs
                }), ((t, e) => Ln.component(e, t))), $n(Ln);
                const Co = ["days", "hours", "minutes", "seconds"];
                var ko = {
                    mixins: [Sn],
                    props: {
                        date: String,
                        clsWrapper: String
                    },
                    data: {
                        date: "",
                        clsWrapper: ".uk-countdown-%unit%"
                    },
                    connected() {
                        this.date = Date.parse(this.$props.date), this.start()
                    },
                    disconnected() {
                        this.stop()
                    },
                    events: [{
                        name: "visibilitychange",
                        el: () => document,
                        handler() {
                            document.hidden ? this.stop() : this.start()
                        }
                    }],
                    methods: {
                        start() {
                            this.stop(), this.update(), this.timer = setInterval(this.update, 1e3)
                        },
                        stop() {
                            clearInterval(this.timer)
                        },
                        update() {
                            const t = Lo(this.date);
                            (!this.date || t.total <= 0) && (this.stop(), t.days = t.hours = t.minutes = t.seconds = 0);
                            for (const e of Co) {
                                const i = Qe(this.clsWrapper.replace("%unit%", e), this.$el);
                                if (!i) continue;
                                let n = String(Math.trunc(t[e]));
                                n = n.length < 2 ? "0" + n : n, i.textContent !== n && (n = n.split(""), n.length !== i.children.length && De(i, n.map((() => "<span></span>")).join("")), n.forEach(((t, e) => i.children[e].textContent = t)))
                            }
                        }
                    }
                };

                function Lo(t) {
                    const e = t - Date.now();
                    return {
                        total: e,
                        seconds: e / 1e3 % 60,
                        minutes: e / 1e3 / 60 % 60,
                        hours: e / 1e3 / 60 / 60 % 24,
                        days: e / 1e3 / 60 / 60 / 24
                    }
                }
                const $o = "uk-transition-leave",
                    So = "uk-transition-enter";

                function Mo(t, e, i, n) {
                    void 0 === n && (n = 0);
                    const s = Bo(e, !0),
                        o = {
                            opacity: 1
                        },
                        r = {
                            opacity: 0
                        },
                        l = t => () => s === Bo(e) ? t() : Promise.reject(),
                        h = l((() => (ie(e, $o), Promise.all(To(e).map(((t, e) => new Promise((s => setTimeout((() => de.start(t, r, i / 2, "ease").then(s)), e * n)))))).then((() => ne(e, $o)))))),
                        a = l((() => {
                            const l = be(e);
                            return ie(e, So), t(), Gt(mt(e), {
                                opacity: 0
                            }), new Promise((t => requestAnimationFrame((() => {
                                const h = mt(e),
                                    a = be(e);
                                Gt(e, "alignContent", "flex-start"), be(e, l);
                                const c = To(e);
                                Gt(h, r);
                                const d = c.map(((t, e) => new Promise((s => setTimeout((() => de.start(t, o, i / 2, "ease").then(s)), e * n)))));
                                l !== a && d.push(de.start(e, {
                                    height: a
                                }, i / 2 + c.length * n, "ease")), Promise.all(d).then((() => {
                                    ne(e, So), s === Bo(e) && (Gt(e, {
                                        height: "",
                                        alignContent: ""
                                    }), Gt(h, {
                                        opacity: ""
                                    }), delete e.dataset.transition), t()
                                }))
                            }))))
                        }));
                    return re(e, $o) ? Io(e).then(a) : re(e, So) ? Io(e).then(h).then(a) : h().then(a)
                }

                function Bo(t, e) {
                    return e && (t.dataset.transition = 1 + Bo(t)), E(t.dataset.transition) || 0
                }

                function Io(t) {
                    return Promise.all(mt(t).filter(de.inProgress).map((t => new Promise((e => zt(t, "transitionend transitioncanceled", e))))))
                }

                function To(t) {
                    return Wn(mt(t)).reduce(((t, e) => t.concat(O(e.filter((t => Vi(t))), "offsetLeft"))), [])
                }

                function Eo(t, e, i) {
                    return new Promise((n => requestAnimationFrame((() => {
                        let s = mt(e);
                        const o = s.map((t => Ao(t, !0))),
                            r = Gt(e, ["height", "padding"]);
                        de.cancel(e), s.forEach(de.cancel), zo(e), t(), s = s.concat(mt(e).filter((t => !d(s, t)))), Promise.resolve().then((() => {
                            ci.flush();
                            const t = Gt(e, ["height", "padding"]),
                                [l, h] = _o(e, s, o);
                            s.forEach(((t, e) => h[e] && Gt(t, h[e]))), Gt(e, {
                                display: "block",
                                ...r
                            }), requestAnimationFrame((() => {
                                const o = s.map(((t, n) => ct(t) === e && de.start(t, l[n], i, "ease"))).concat(de.start(e, t, i, "ease"));
                                Promise.all(o).then((() => {
                                    s.forEach(((t, i) => ct(t) === e && Gt(t, "display", 0 === l[i].opacity ? "none" : ""))), zo(e)
                                }), R).then(n)
                            }))
                        }))
                    }))))
                }

                function Ao(t, e) {
                    const i = Gt(t, "zIndex");
                    return !!ot(t) && {
                        display: "",
                        opacity: e ? Gt(t, "opacity") : "0",
                        pointerEvents: "none",
                        position: "absolute",
                        zIndex: "auto" === i ? wt(t) : i,
                        ...Do(t)
                    }
                }

                function _o(t, e, i) {
                    const n = e.map(((t, e) => !(!ct(t) || !(e in i)) && (i[e] ? ot(t) ? Do(t) : {
                            opacity: 0
                        } : {
                            opacity: ot(t) ? 1 : 0
                        }))),
                        s = n.map(((n, s) => {
                            const o = ct(e[s]) === t && (i[s] || Ao(e[s]));
                            if (!o) return !1;
                            if (n) {
                                if (!("opacity" in n)) {
                                    const {
                                        opacity: t
                                    } = o;
                                    t % 1 ? n.opacity = 1 : delete o.opacity
                                }
                            } else delete o.opacity;
                            return o
                        }));
                    return [n, s]
                }

                function zo(t) {
                    Gt(t.children, {
                        height: "",
                        left: "",
                        opacity: "",
                        pointerEvents: "",
                        position: "",
                        top: "",
                        marginTop: "",
                        marginLeft: "",
                        transform: "",
                        width: "",
                        zIndex: ""
                    }), Gt(t, {
                        height: "",
                        display: "",
                        padding: ""
                    })
                }

                function Do(t) {
                    const {
                        height: e,
                        width: i
                    } = ve(t), {
                        top: n,
                        left: s
                    } = xe(t), {
                        marginLeft: o,
                        marginTop: r
                    } = Gt(t, ["marginTop", "marginLeft"]);
                    return {
                        top: n,
                        left: s,
                        height: e,
                        width: i,
                        marginLeft: o,
                        marginTop: r,
                        transform: ""
                    }
                }
                var Po = {
                        props: {
                            duration: Number,
                            animation: Boolean
                        },
                        data: {
                            duration: 150,
                            animation: "slide"
                        },
                        methods: {
                            animate(t, e) {
                                void 0 === e && (e = this.$el);
                                const i = this.animation,
                                    n = "fade" === i ? Mo : "delayed-fade" === i ? function() {
                                        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                                        return Mo(...e, 40)
                                    } : i ? Eo : () => (t(), Promise.resolve());
                                return n(t, e, this.duration).then((() => this.$update(e, "resize")), R)
                            }
                        }
                    },
                    jo = {
                        mixins: [Po],
                        args: "target",
                        props: {
                            target: Boolean,
                            selActive: Boolean
                        },
                        data: {
                            target: null,
                            selActive: !1,
                            attrItem: "uk-filter-control",
                            cls: "uk-active",
                            duration: 250
                        },
                        computed: {
                            toggles: {
                                get(t, e) {
                                    let {
                                        attrItem: i
                                    } = t;
                                    return Je("[" + i + "],[data-" + i + "]", e)
                                },
                                watch() {
                                    if (this.updateState(), !1 !== this.selActive) {
                                        const t = Je(this.selActive, this.$el);
                                        this.toggles.forEach((e => le(e, this.cls, d(t, e))))
                                    }
                                },
                                immediate: !0
                            },
                            children: {
                                get(t, e) {
                                    let {
                                        target: i
                                    } = t;
                                    return Je(i + " > *", e)
                                },
                                watch(t, e) {
                                    e && !Ro(t, e) && this.updateState()
                                },
                                immediate: !0
                            }
                        },
                        events: [{
                            name: "click",
                            delegate() {
                                return "[" + this.attrItem + "],[data-" + this.attrItem + "]"
                            },
                            handler(t) {
                                t.preventDefault(), this.apply(t.current)
                            }
                        }],
                        methods: {
                            apply(t) {
                                const e = this.getState(),
                                    i = Zo(t, this.attrItem, this.getState());
                                No(e, i) || this.setState(i)
                            },
                            getState() {
                                return this.toggles.filter((t => re(t, this.cls))).reduce(((t, e) => Zo(e, this.attrItem, t)), {
                                    filter: {
                                        "": ""
                                    },
                                    sort: []
                                })
                            },
                            setState(t, e) {
                                void 0 === e && (e = !0), t = {
                                    filter: {
                                        "": ""
                                    },
                                    sort: [],
                                    ...t
                                }, Dt(this.$el, "beforeFilter", [this, t]), this.toggles.forEach((e => le(e, this.cls, !!Fo(e, this.attrItem, t)))), Promise.all(Je(this.target, this.$el).map((i => {
                                    const n = () => {
                                        Oo(t, i, mt(i)), this.$update(this.$el)
                                    };
                                    return e ? this.animate(n, i) : n()
                                }))).then((() => Dt(this.$el, "afterFilter", [this])))
                            },
                            updateState() {
                                ci.write((() => this.setState(this.getState(), !1)))
                            }
                        }
                    };

                function Ho(t, e) {
                    return Ti(it(t, e), ["filter"])
                }

                function No(t, e) {
                    return ["filter", "sort"].every((i => P(t[i], e[i])))
                }

                function Oo(t, e, i) {
                    const n = Vo(t);
                    i.forEach((t => Gt(t, "display", n && !ut(t, n) ? "none" : "")));
                    const [s, o] = t.sort;
                    if (s) {
                        const t = Wo(i, s, o);
                        P(t, i) || He(e, t)
                    }
                }

                function Zo(t, e, i) {
                    const n = Ho(t, e),
                        {
                            filter: s,
                            group: o,
                            sort: r,
                            order: l = "asc"
                        } = n;
                    return (s || I(r)) && (o ? s ? (delete i.filter[""], i.filter[o] = s) : (delete i.filter[o], (B(i.filter) || "" in i.filter) && (i.filter = {
                        "": s || ""
                    })) : i.filter = {
                        "": s || ""
                    }), I(r) || (i.sort = [r, l]), i
                }

                function Fo(t, e, i) {
                    let {
                        filter: n = {
                            "": ""
                        },
                        sort: [s, o]
                    } = i;
                    const {
                        filter: r = "",
                        group: l = "",
                        sort: h,
                        order: a = "asc"
                    } = Ho(t, e);
                    return I(h) ? l in n && r === n[l] || !r && l && !(l in n) && !n[""] : s === h && o === a
                }

                function Ro(t, e) {
                    return t.length === e.length && t.every((t => e.includes(t)))
                }

                function Vo(t) {
                    let {
                        filter: e
                    } = t, i = "";
                    return N(e, (t => i += t || "")), i
                }

                function Wo(t, e, i) {
                    return [...t].sort(((t, n) => it(t, e).localeCompare(it(n, e), void 0, {
                        numeric: !0
                    }) * ("asc" === i || -1)))
                }
                var qo = {
                    slide: {
                        show: t => [{
                            transform: Xo(-100 * t)
                        }, {
                            transform: Xo()
                        }],
                        percent: t => Uo(t),
                        translate: (t, e) => [{
                            transform: Xo(-100 * e * t)
                        }, {
                            transform: Xo(100 * e * (1 - t))
                        }]
                    }
                };

                function Uo(t) {
                    return Math.abs(Gt(t, "transform").split(",")[4] / t.offsetWidth) || 0
                }

                function Xo(t, e) {
                    return void 0 === t && (t = 0), void 0 === e && (e = "%"), "translate3d(" + (t += t ? e : "") + ", 0, 0)"
                }

                function Yo(t) {
                    return "scale3d(" + t + ", " + t + ", 1)"
                }
                var Go = { ...qo,
                    fade: {
                        show: () => [{
                            opacity: 0
                        }, {
                            opacity: 1
                        }],
                        percent: t => 1 - Gt(t, "opacity"),
                        translate: t => [{
                            opacity: 1 - t
                        }, {
                            opacity: t
                        }]
                    },
                    scale: {
                        show: () => [{
                            opacity: 0,
                            transform: Yo(.8)
                        }, {
                            opacity: 1,
                            transform: Yo(1)
                        }],
                        percent: t => 1 - Gt(t, "opacity"),
                        translate: t => [{
                            opacity: 1 - t,
                            transform: Yo(1 - .2 * t)
                        }, {
                            opacity: t,
                            transform: Yo(.8 + .2 * t)
                        }]
                    }
                };

                function Qo(t, e, i, n) {
                    let {
                        animation: s,
                        easing: o
                    } = n;
                    const {
                        percent: r,
                        translate: l,
                        show: h = R
                    } = s, a = h(i), c = new J;
                    return {
                        dir: i,
                        show(n, s, r) {
                            void 0 === s && (s = 0);
                            const l = r ? "linear" : o;
                            return n -= Math.round(n * F(s, -1, 1)), this.translate(s), Jo(e, "itemin", {
                                percent: s,
                                duration: n,
                                timing: l,
                                dir: i
                            }), Jo(t, "itemout", {
                                percent: 1 - s,
                                duration: n,
                                timing: l,
                                dir: i
                            }), Promise.all([de.start(e, a[1], n, l), de.start(t, a[0], n, l)]).then((() => {
                                this.reset(), c.resolve()
                            }), R), c.promise
                        },
                        cancel() {
                            de.cancel([e, t])
                        },
                        reset() {
                            for (const i in a[0]) Gt([e, t], i, "")
                        },
                        forward(i, n) {
                            return void 0 === n && (n = this.percent()), de.cancel([e, t]), this.show(i, n, !0)
                        },
                        translate(n) {
                            this.reset();
                            const s = l(n, i);
                            Gt(e, s[1]), Gt(t, s[0]), Jo(e, "itemtranslatein", {
                                percent: n,
                                dir: i
                            }), Jo(t, "itemtranslateout", {
                                percent: 1 - n,
                                dir: i
                            })
                        },
                        percent: () => r(t || e, e, i),
                        getDistance: () => null == t ? void 0 : t.offsetWidth
                    }
                }

                function Jo(t, e, i) {
                    Dt(t, Pt(e, !1, !1, i))
                }
                var Ko = {
                        props: {
                            autoplay: Boolean,
                            autoplayInterval: Number,
                            pauseOnHover: Boolean
                        },
                        data: {
                            autoplay: !1,
                            autoplayInterval: 7e3,
                            pauseOnHover: !0
                        },
                        connected() {
                            this.autoplay && this.startAutoplay()
                        },
                        disconnected() {
                            this.stopAutoplay()
                        },
                        update() {
                            K(this.slides, "tabindex", "-1")
                        },
                        events: [{
                            name: "visibilitychange",
                            el: () => document,
                            filter() {
                                return this.autoplay
                            },
                            handler() {
                                document.hidden ? this.stopAutoplay() : this.startAutoplay()
                            }
                        }],
                        methods: {
                            startAutoplay() {
                                this.stopAutoplay(), this.interval = setInterval((() => (!this.draggable || !Qe(":focus", this.$el)) && (!this.pauseOnHover || !ut(this.$el, ":hover")) && !this.stack.length && this.show("next")), this.autoplayInterval)
                            },
                            stopAutoplay() {
                                this.interval && clearInterval(this.interval)
                            }
                        }
                    },
                    tr = {
                        props: {
                            draggable: Boolean
                        },
                        data: {
                            draggable: !0,
                            threshold: 10
                        },
                        created() {
                            for (const t of ["start", "move", "end"]) {
                                const e = this[t];
                                this[t] = t => {
                                    const i = Wt(t).x * (ei ? -1 : 1);
                                    this.prevPos = i === this.pos ? this.prevPos : this.pos, this.pos = i, e(t)
                                }
                            }
                        },
                        events: [{
                            name: si,
                            delegate() {
                                return this.selSlides
                            },
                            handler(t) {
                                !this.draggable || !Vt(t) && er(t.target) || gt(t.target, rt) || t.button > 0 || this.length < 2 || this.start(t)
                            }
                        }, {
                            name: "dragstart",
                            handler(t) {
                                t.preventDefault()
                            }
                        }],
                        methods: {
                            start() {
                                this.drag = this.pos, this._transitioner ? (this.percent = this._transitioner.percent(), this.drag += this._transitioner.getDistance() * this.percent * this.dir, this._transitioner.cancel(), this._transitioner.translate(this.percent), this.dragging = !0, this.stack = []) : this.prevIndex = this.index, At(document, oi, this.move, {
                                    passive: !1
                                }), At(document, ri + " " + ai + " input", this.end, !0), Gt(this.list, "userSelect", "none")
                            },
                            move(t) {
                                const e = this.pos - this.drag;
                                if (0 === e || this.prevPos === this.pos || !this.dragging && Math.abs(e) < this.threshold) return;
                                Gt(this.list, "pointerEvents", "none"), t.cancelable && t.preventDefault(), this.dragging = !0, this.dir = e < 0 ? 1 : -1;
                                const {
                                    slides: i
                                } = this;
                                let {
                                    prevIndex: n
                                } = this, s = Math.abs(e), o = this.getIndex(n + this.dir, n), r = this._getDistance(n, o) || i[n].offsetWidth;
                                for (; o !== n && s > r;) this.drag -= r * this.dir, n = o, s -= r, o = this.getIndex(n + this.dir, n), r = this._getDistance(n, o) || i[n].offsetWidth;
                                this.percent = s / r;
                                const l = i[n],
                                    h = i[o],
                                    a = this.index !== o,
                                    c = n === o;
                                let u;
                                [this.index, this.prevIndex].filter((t => !d([o, n], t))).forEach((t => {
                                    Dt(i[t], "itemhidden", [this]), c && (u = !0, this.prevIndex = n)
                                })), (this.index === n && this.prevIndex !== n || u) && Dt(i[this.index], "itemshown", [this]), a && (this.prevIndex = n, this.index = o, !c && Dt(l, "beforeitemhide", [this]), Dt(h, "beforeitemshow", [this])), this._transitioner = this._translate(Math.abs(this.percent), l, !c && h), a && (!c && Dt(l, "itemhide", [this]), Dt(h, "itemshow", [this]))
                            },
                            end() {
                                if (_t(document, oi, this.move, {
                                        passive: !1
                                    }), _t(document, ri + " " + ai + " input", this.end, !0), this.dragging)
                                    if (this.dragging = null, this.index === this.prevIndex) this.percent = 1 - this.percent, this.dir *= -1, this._show(!1, this.index, !0), this._transitioner = null;
                                    else {
                                        const t = (ei ? this.dir * (ei ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
                                        this.index = t ? this.index : this.prevIndex, t && (this.percent = 1 - this.percent), this.show(this.dir > 0 && !t || this.dir < 0 && t ? "next" : "previous", !0)
                                    }
                                Gt(this.list, {
                                    userSelect: "",
                                    pointerEvents: ""
                                }), this.drag = this.percent = null
                            }
                        }
                    };

                function er(t) {
                    return !t.children.length && t.childNodes.length
                }
                var ir = {
                    mixins: [Ko, tr, {
                        data: {
                            selNav: !1
                        },
                        computed: {
                            nav(t, e) {
                                let {
                                    selNav: i
                                } = t;
                                return Qe(i, e)
                            },
                            selNavItem(t) {
                                let {
                                    attrItem: e
                                } = t;
                                return "[" + e + "],[data-" + e + "]"
                            },
                            navItems(t, e) {
                                return Je(this.selNavItem, e)
                            }
                        },
                        update: {
                            write() {
                                this.nav && this.length !== this.nav.children.length && De(this.nav, this.slides.map(((t, e) => "<li " + this.attrItem + '="' + e + '"><a href></a></li>')).join("")), this.navItems.concat(this.nav).forEach((t => t && (t.hidden = !this.maxIndex))), this.updateNav()
                            },
                            events: ["resize"]
                        },
                        events: [{
                            name: "click",
                            delegate() {
                                return this.selNavItem
                            },
                            handler(t) {
                                t.preventDefault(), this.show(it(t.current, this.attrItem))
                            }
                        }, {
                            name: "itemshow",
                            handler: "updateNav"
                        }],
                        methods: {
                            updateNav() {
                                const t = this.getValidIndex();
                                for (const e of this.navItems) {
                                    const i = it(e, this.attrItem);
                                    le(e, this.clsActive, E(i) === t), le(e, "uk-invisible", this.finite && ("previous" === i && 0 === t || "next" === i && t >= this.maxIndex))
                                }
                            }
                        }
                    }, Dn],
                    props: {
                        clsActivated: Boolean,
                        easing: String,
                        index: Number,
                        finite: Boolean,
                        velocity: Number,
                        selSlides: String
                    },
                    data: () => ({
                        easing: "ease",
                        finite: !1,
                        velocity: 1,
                        index: 0,
                        prevIndex: -1,
                        stack: [],
                        percent: 0,
                        clsActive: "uk-active",
                        clsActivated: !1,
                        Transitioner: !1,
                        transitionOptions: {}
                    }),
                    connected() {
                        this.prevIndex = -1, this.index = this.getValidIndex(this.$props.index), this.stack = []
                    },
                    disconnected() {
                        ne(this.slides, this.clsActive)
                    },
                    computed: {
                        duration(t, e) {
                            let {
                                velocity: i
                            } = t;
                            return sr(e.offsetWidth / i)
                        },
                        list(t, e) {
                            let {
                                selList: i
                            } = t;
                            return Qe(i, e)
                        },
                        maxIndex() {
                            return this.length - 1
                        },
                        selSlides(t) {
                            let {
                                selList: e,
                                selSlides: i
                            } = t;
                            return e + " " + (i || "> *")
                        },
                        slides: {
                            get() {
                                return Je(this.selSlides, this.$el)
                            },
                            watch() {
                                this.$reset()
                            }
                        },
                        length() {
                            return this.slides.length
                        }
                    },
                    methods: {
                        show(t, e) {
                            if (void 0 === e && (e = !1), this.dragging || !this.length) return;
                            const {
                                stack: i
                            } = this, n = e ? 0 : i.length, s = () => {
                                i.splice(n, 1), i.length && this.show(i.shift(), !0)
                            };
                            if (i[e ? "unshift" : "push"](t), !e && i.length > 1) return void(2 === i.length && this._transitioner.forward(Math.min(this.duration, 200)));
                            const o = this.getIndex(this.index),
                                r = re(this.slides, this.clsActive) && this.slides[o],
                                l = this.getIndex(t, this.index),
                                h = this.slides[l];
                            if (r === h) return void s();
                            if (this.dir = nr(t, o), this.prevIndex = o, this.index = l, r && !Dt(r, "beforeitemhide", [this]) || !Dt(h, "beforeitemshow", [this, r])) return this.index = this.prevIndex, void s();
                            const a = this._show(r, h, e).then((() => (r && Dt(r, "itemhidden", [this]), Dt(h, "itemshown", [this]), new Promise((t => {
                                ci.write((() => {
                                    i.shift(), i.length ? this.show(i.shift(), !0) : this._transitioner = null, t()
                                }))
                            })))));
                            return r && Dt(r, "itemhide", [this]), Dt(h, "itemshow", [this]), a
                        },
                        getIndex(t, e) {
                            return void 0 === t && (t = this.index), void 0 === e && (e = this.index), F(G(t, this.slides, e, this.finite), 0, this.maxIndex)
                        },
                        getValidIndex(t, e) {
                            return void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), this.getIndex(t, e)
                        },
                        _show(t, e, i) {
                            if (this._transitioner = this._getTransitioner(t, e, this.dir, {
                                    easing: i ? e.offsetWidth < 600 ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "cubic-bezier(0.165, 0.84, 0.44, 1)" : this.easing,
                                    ...this.transitionOptions
                                }), !i && !t) return this._translate(1), Promise.resolve();
                            const {
                                length: n
                            } = this.stack;
                            return this._transitioner[n > 1 ? "forward" : "show"](n > 1 ? Math.min(this.duration, 75 + 75 / (n - 1)) : this.duration, this.percent)
                        },
                        _getDistance(t, e) {
                            return this._getTransitioner(t, t !== e && e).getDistance()
                        },
                        _translate(t, e, i) {
                            void 0 === e && (e = this.prevIndex), void 0 === i && (i = this.index);
                            const n = this._getTransitioner(e !== i && e, i);
                            return n.translate(t), n
                        },
                        _getTransitioner(t, e, i, n) {
                            return void 0 === t && (t = this.prevIndex), void 0 === e && (e = this.index), void 0 === i && (i = this.dir || 1), void 0 === n && (n = this.transitionOptions), new this.Transitioner(S(t) ? this.slides[t] : t, S(e) ? this.slides[e] : e, i * (ei ? -1 : 1), n)
                        }
                    }
                };

                function nr(t, e) {
                    return "next" === t ? 1 : "previous" === t || t < e ? -1 : 1
                }

                function sr(t) {
                    return .5 * t + 300
                }
                var or = {
                        mixins: [ir],
                        props: {
                            animation: String
                        },
                        data: {
                            animation: "slide",
                            clsActivated: "uk-transition-active",
                            Animations: qo,
                            Transitioner: Qo
                        },
                        computed: {
                            animation(t) {
                                let {
                                    animation: e,
                                    Animations: i
                                } = t;
                                return { ...i[e] || i.slide,
                                    name: e
                                }
                            },
                            transitionOptions() {
                                return {
                                    animation: this.animation
                                }
                            }
                        },
                        events: {
                            beforeitemshow(t) {
                                let {
                                    target: e
                                } = t;
                                ie(e, this.clsActive)
                            },
                            itemshown(t) {
                                let {
                                    target: e
                                } = t;
                                ie(e, this.clsActivated)
                            },
                            itemhidden(t) {
                                let {
                                    target: e
                                } = t;
                                ne(e, this.clsActive, this.clsActivated)
                            }
                        }
                    },
                    rr = {
                        mixins: [Hn, qs, Bn, or],
                        functional: !0,
                        props: {
                            delayControls: Number,
                            preload: Number,
                            videoAutoplay: Boolean,
                            template: String
                        },
                        data: () => ({
                            preload: 1,
                            videoAutoplay: !1,
                            delayControls: 3e3,
                            items: [],
                            cls: "uk-open",
                            clsPage: "uk-lightbox-page",
                            selList: ".uk-lightbox-items",
                            attrItem: "uk-lightbox-item",
                            selClose: ".uk-close-large",
                            selCaption: ".uk-lightbox-caption",
                            pauseOnHover: !1,
                            velocity: 2,
                            Animations: Go,
                            template: '<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'
                        }),
                        created() {
                            const t = Qe(this.template),
                                e = Qe(this.selList, t);
                            this.items.forEach((() => He(e, "<li>"))), this.$mount(He(this.container, t))
                        },
                        computed: {
                            caption(t, e) {
                                let {
                                    selCaption: i
                                } = t;
                                return Qe(i, e)
                            }
                        },
                        events: [{
                            name: oi + " " + si + " keydown",
                            handler: "showControls"
                        }, {
                            name: "click",
                            self: !0,
                            delegate() {
                                return this.selSlides
                            },
                            handler(t) {
                                t.defaultPrevented || this.hide()
                            }
                        }, {
                            name: "shown",
                            self: !0,
                            handler() {
                                this.showControls()
                            }
                        }, {
                            name: "hide",
                            self: !0,
                            handler() {
                                this.hideControls(), ne(this.slides, this.clsActive), de.stop(this.slides)
                            }
                        }, {
                            name: "hidden",
                            self: !0,
                            handler() {
                                this.$destroy(!0)
                            }
                        }, {
                            name: "keyup",
                            el: () => document,
                            handler(t) {
                                if (this.isToggled(this.$el) && this.draggable) switch (t.keyCode) {
                                    case 37:
                                        this.show("previous");
                                        break;
                                    case 39:
                                        this.show("next")
                                }
                            }
                        }, {
                            name: "beforeitemshow",
                            handler(t) {
                                this.isToggled() || (this.draggable = !1, t.preventDefault(), this.toggleElement(this.$el, !0, !1), this.animation = Go.scale, ne(t.target, this.clsActive), this.stack.splice(1, 0, this.index))
                            }
                        }, {
                            name: "itemshow",
                            handler() {
                                De(this.caption, this.getItem().caption || "");
                                for (let t = -this.preload; t <= this.preload; t++) this.loadItem(this.index + t)
                            }
                        }, {
                            name: "itemshown",
                            handler() {
                                this.draggable = this.$props.draggable
                            }
                        }, {
                            name: "itemload",
                            async handler(t, e) {
                                const {
                                    source: i,
                                    type: n,
                                    alt: s = "",
                                    poster: o,
                                    attrs: r = {}
                                } = e;
                                if (this.setItem(e, "<span uk-spinner></span>"), !i) return;
                                let l;
                                const h = {
                                    frameborder: "0",
                                    allow: "autoplay",
                                    allowfullscreen: "",
                                    style: "max-width: 100%; box-sizing: border-box;",
                                    "uk-responsive": "",
                                    "uk-video": "" + this.videoAutoplay
                                };
                                if ("image" === n || i.match(/\.(avif|jpe?g|jfif|a?png|gif|svg|webp)($|\?)/i)) try {
                                    const {
                                        width: t,
                                        height: n
                                    } = await Xt(i, r.srcset, r.size);
                                    this.setItem(e, lr("img", {
                                        src: i,
                                        width: t,
                                        height: n,
                                        alt: s,
                                        ...r
                                    }))
                                } catch (a) {
                                    this.setError(e)
                                } else if ("video" === n || i.match(/\.(mp4|webm|ogv)($|\?)/i)) {
                                    const t = lr("video", {
                                        src: i,
                                        poster: o,
                                        controls: "",
                                        playsinline: "",
                                        "uk-video": "" + this.videoAutoplay,
                                        ...r
                                    });
                                    At(t, "loadedmetadata", (() => {
                                        K(t, {
                                            width: t.videoWidth,
                                            height: t.videoHeight
                                        }), this.setItem(e, t)
                                    })), At(t, "error", (() => this.setError(e)))
                                } else if ("iframe" === n || i.match(/\.(html|php)($|\?)/i)) this.setItem(e, lr("iframe", {
                                    src: i,
                                    frameborder: "0",
                                    allowfullscreen: "",
                                    class: "uk-lightbox-iframe",
                                    ...r
                                }));
                                else if (l = i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/)) this.setItem(e, lr("iframe", {
                                    src: "https://www.youtube" + (l[1] || "") + ".com/embed/" + l[2] + (l[3] ? "?" + l[3] : ""),
                                    width: 1920,
                                    height: 1080,
                                    ...h,
                                    ...r
                                }));
                                else if (l = i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/)) try {
                                    const {
                                        height: t,
                                        width: n
                                    } = await (await fetch("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + encodeURI(i), {
                                        credentials: "omit"
                                    })).json();
                                    this.setItem(e, lr("iframe", {
                                        src: "https://player.vimeo.com/video/" + l[1] + (l[2] ? "?" + l[2] : ""),
                                        width: n,
                                        height: t,
                                        ...h,
                                        ...r
                                    }))
                                } catch (a) {
                                    this.setError(e)
                                }
                            }
                        }],
                        methods: {
                            loadItem(t) {
                                void 0 === t && (t = this.index);
                                const e = this.getItem(t);
                                this.getSlide(e).childElementCount || Dt(this.$el, "itemload", [e])
                            },
                            getItem(t) {
                                return void 0 === t && (t = this.index), this.items[G(t, this.slides)]
                            },
                            setItem(t, e) {
                                Dt(this.$el, "itemloaded", [this, De(this.getSlide(t), e)])
                            },
                            getSlide(t) {
                                return this.slides[this.items.indexOf(t)]
                            },
                            setError(t) {
                                this.setItem(t, '<span uk-icon="icon: bolt; ratio: 2"></span>')
                            },
                            showControls() {
                                clearTimeout(this.controlsTimer), this.controlsTimer = setTimeout(this.hideControls, this.delayControls), ie(this.$el, "uk-active", "uk-transition-active")
                            },
                            hideControls() {
                                ne(this.$el, "uk-active", "uk-transition-active")
                            }
                        }
                    };

                function lr(t, e) {
                    const i = Xe("<" + t + ">");
                    return K(i, e), i
                }
                var hr = {
                    install: ar,
                    props: {
                        toggle: String
                    },
                    data: {
                        toggle: "a"
                    },
                    computed: {
                        toggles: {
                            get(t, e) {
                                let {
                                    toggle: i
                                } = t;
                                return Je(i, e)
                            },
                            watch() {
                                this.hide()
                            }
                        }
                    },
                    disconnected() {
                        this.hide()
                    },
                    events: [{
                        name: "click",
                        delegate() {
                            return this.toggle + ":not(.uk-disabled)"
                        },
                        handler(t) {
                            t.preventDefault(), this.show(t.current)
                        }
                    }],
                    methods: {
                        show(t) {
                            const e = Z(this.toggles.map(cr), "source");
                            if (C(t)) {
                                const {
                                    source: i
                                } = cr(t);
                                t = u(e, (t => {
                                    let {
                                        source: e
                                    } = t;
                                    return i === e
                                }))
                            }
                            return this.panel = this.panel || this.$create("lightboxPanel", { ...this.$props,
                                items: e
                            }), At(this.panel.$el, "hidden", (() => this.panel = !1)), this.panel.show(t)
                        },
                        hide() {
                            var t;
                            return null == (t = this.panel) ? void 0 : t.hide()
                        }
                    }
                };

                function ar(t, e) {
                    t.lightboxPanel || t.component("lightboxPanel", rr), f(e.props, t.component("lightboxPanel").options.props)
                }

                function cr(t) {
                    const e = {};
                    for (const i of ["href", "caption", "type", "poster", "alt", "attrs"]) e["href" === i ? "source" : i] = it(t, i);
                    return e.attrs = Ti(e.attrs), e
                }
                var dr = {
                    mixins: [Hn],
                    functional: !0,
                    args: ["message", "status"],
                    data: {
                        message: "",
                        status: "",
                        timeout: 5e3,
                        group: null,
                        pos: "top-center",
                        clsContainer: "uk-notification",
                        clsClose: "uk-notification-close",
                        clsMsg: "uk-notification-message"
                    },
                    install: ur,
                    computed: {
                        marginProp(t) {
                            let {
                                pos: e
                            } = t;
                            return "margin" + (a(e, "top") ? "Top" : "Bottom")
                        },
                        startProps() {
                            return {
                                opacity: 0,
                                [this.marginProp]: -this.$el.offsetHeight
                            }
                        }
                    },
                    created() {
                        const t = Qe("." + this.clsContainer + "-" + this.pos, this.container) || He(this.container, '<div class="' + this.clsContainer + " " + this.clsContainer + "-" + this.pos + '" style="display: block"></div>');
                        this.$mount(He(t, '<div class="' + this.clsMsg + (this.status ? " " + this.clsMsg + "-" + this.status : "") + '"> <a href class="' + this.clsClose + '" data-uk-close></a> <div>' + this.message + "</div> </div>"))
                    },
                    async connected() {
                        const t = A(Gt(this.$el, this.marginProp));
                        await de.start(Gt(this.$el, this.startProps), {
                            opacity: 1,
                            [this.marginProp]: t
                        }), this.timeout && (this.timer = setTimeout(this.close, this.timeout))
                    },
                    events: {
                        click(t) {
                            gt(t.target, 'a[href="#"],a[href=""]') && t.preventDefault(), this.close()
                        },
                        [li]() {
                            this.timer && clearTimeout(this.timer)
                        },
                        [hi]() {
                            this.timeout && (this.timer = setTimeout(this.close, this.timeout))
                        }
                    },
                    methods: {
                        async close(t) {
                            const e = t => {
                                const e = ct(t);
                                Dt(t, "close", [this]), Fe(t), null != e && e.hasChildNodes() || Fe(e)
                            };
                            this.timer && clearTimeout(this.timer), t || await de.start(this.$el, this.startProps), e(this.$el)
                        }
                    }
                };

                function ur(t) {
                    t.notification.closeAll = function(e, i) {
                        Ge(document.body, (n => {
                            const s = t.getComponent(n, "notification");
                            !s || e && e !== s.group || s.close(i)
                        }))
                    }
                }
                const gr = {
                        x: mr,
                        y: mr,
                        rotate: mr,
                        scale: mr,
                        color: wr,
                        backgroundColor: wr,
                        borderColor: wr,
                        blur: xr,
                        hue: xr,
                        fopacity: xr,
                        grayscale: xr,
                        invert: xr,
                        saturate: xr,
                        sepia: xr,
                        opacity: yr,
                        stroke: br,
                        bgx: Cr,
                        bgy: Cr
                    },
                    {
                        keys: pr
                    } = Object;
                var fr = {
                    mixins: [Fs],
                    props: zr(pr(gr), "list"),
                    data: zr(pr(gr), void 0),
                    computed: {
                        props: (t, e) => pr(gr).reduce(((i, n) => (I(t[n]) || (i[n] = gr[n](n, e, t[n].slice())), i)), {})
                    },
                    events: {
                        load() {
                            this.$emit()
                        }
                    },
                    methods: {
                        reset() {
                            for (const t in this.getCss(0)) Gt(this.$el, t, "")
                        },
                        getCss(t) {
                            const e = {
                                transform: "",
                                filter: ""
                            };
                            for (const i in this.props) this.props[i](e, t);
                            return e
                        }
                    }
                };

                function mr(t, e, i) {
                    let n, s = Ar(i) || {
                        x: "px",
                        y: "px",
                        rotate: "deg"
                    }[t] || "";
                    return "x" === t || "y" === t ? (t = "translate" + l(t), n = t => A(A(t).toFixed("px" === s ? 0 : 6))) : "scale" === t && (s = "", n = t => Ar([t]) ? Se(t, "width", e, !0) / e.offsetWidth : t), 1 === i.length && i.unshift("scale" === t ? 1 : 0), i = Br(i, n), (e, n) => {
                        e.transform += " " + t + "(" + Tr(i, n) + s + ")"
                    }
                }

                function wr(t, e, i) {
                    return 1 === i.length && i.unshift(_r(e, t, "")), i = Br(i, (t => vr(e, t))), (e, n) => {
                        const [s, o, r] = Ir(i, n), l = s.map(((t, e) => (t += r * (o[e] - t), 3 === e ? A(t) : parseInt(t, 10)))).join(",");
                        e[t] = "rgba(" + l + ")"
                    }
                }

                function vr(t, e) {
                    return _r(t, "color", e).split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(A)
                }

                function xr(t, e, i) {
                    1 === i.length && i.unshift(0);
                    const n = Ar(i) || {
                        blur: "px",
                        hue: "deg"
                    }[t] || "%";
                    return t = {
                        fopacity: "opacity",
                        hue: "hue-rotate"
                    }[t] || t, i = Br(i), (e, s) => {
                        const o = Tr(i, s);
                        e.filter += " " + t + "(" + (o + n) + ")"
                    }
                }

                function yr(t, e, i) {
                    return 1 === i.length && i.unshift(_r(e, t, "")), i = Br(i), (e, n) => {
                        e[t] = Tr(i, n)
                    }
                }

                function br(t, e, i) {
                    1 === i.length && i.unshift(0);
                    const n = Ar(i),
                        s = ms(e);
                    return i = Br(i.reverse(), (t => (t = A(t), "%" === n ? t * s / 100 : t))), i.some((t => {
                        let [e] = t;
                        return e
                    })) ? (Gt(e, "strokeDasharray", s), (t, e) => {
                        t.strokeDashoffset = Tr(i, e)
                    }) : R
                }

                function Cr(t, e, i) {
                    1 === i.length && i.unshift(0);
                    const n = "y" === (t = t.substr(-1)) ? "height" : "width";
                    i = Br(i, (t => Se(t, n, e)));
                    const s = _r(e, "background-position-" + t, "");
                    return "cover" === _r(e, "backgroundSize", "") ? kr(t, e, i, s, n) : Lr(t, i, s)
                }

                function kr(t, e, i, n, s) {
                    const o = Sr(e);
                    if (!o.width) return R;
                    const r = i.map((t => {
                            let [e] = t;
                            return e
                        })),
                        l = Math.min(...r),
                        h = Math.max(...r),
                        a = r.indexOf(l) < r.indexOf(h),
                        c = h - l;
                    let d = (a ? -c : 0) - (a ? l : h);
                    const u = {
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        },
                        g = Y.cover(o, u),
                        p = g[s] - u[s];
                    if (p < c) u[s] = g[s] + c - p;
                    else if (p > c) {
                        const t = u[s] / Se(n, s, e, !0);
                        t && (d -= (p - c) / t)
                    }
                    const f = Y.cover(o, u),
                        m = Lr(t, i, d + "px");
                    return (t, e) => {
                        m(t, e), t.backgroundSize = f.width + "px " + f.height + "px", t.backgroundRepeat = "no-repeat"
                    }
                }

                function Lr(t, e, i) {
                    return function(n, s) {
                        n["background-position-" + t] = "calc(" + i + " + " + Tr(e, s) + "px)"
                    }
                }
                const $r = {};

                function Sr(t) {
                    const e = Gt(t, "backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/, "$1");
                    if ($r[e]) return $r[e];
                    const i = new Image;
                    return e && (i.src = e, !i.naturalWidth) ? (i.onload = () => {
                        $r[e] = Mr(i), Dt(t, Pt("load", !1))
                    }, Mr(i)) : $r[e] = Mr(i)
                }

                function Mr(t) {
                    return {
                        width: t.naturalWidth,
                        height: t.naturalHeight
                    }
                }

                function Br(t, e) {
                    void 0 === e && (e = A);
                    const i = [],
                        {
                            length: n
                        } = t;
                    let s = 0;
                    for (let o = 0; o < n; o++) {
                        let [r, l] = $(t[o]) ? t[o].trim().split(" ") : [t[o]];
                        if (r = e(r), l = l ? A(l) / 100 : null, 0 === o ? null === l ? l = 0 : l && i.push([r, 0]) : o === n - 1 && (null === l ? l = 1 : 1 !== l && (i.push([r, l]), l = 1)), i.push([r, l]), null === l) s++;
                        else if (s) {
                            const t = i[o - s - 1][1],
                                e = (l - t) / (s + 1);
                            for (let n = s; n > 0; n--) i[o - n][1] = t + e * (s - n + 1);
                            s = 0
                        }
                    }
                    return i
                }

                function Ir(t, e) {
                    const i = u(t.slice(1), (t => {
                        let [, i] = t;
                        return e <= i
                    })) + 1;
                    return [t[i - 1][0], t[i][0], (e - t[i - 1][1]) / (t[i][1] - t[i - 1][1])]
                }

                function Tr(t, e) {
                    const [i, n, s] = Ir(t, e);
                    return S(i) ? i + Math.abs(i - n) * s * (i < n ? 1 : -1) : +n
                }
                const Er = /^-?\d+(\S*)/;

                function Ar(t, e) {
                    for (const i of t) {
                        const t = null == i.match ? void 0 : i.match(Er);
                        if (t) return t[1]
                    }
                    return e
                }

                function _r(t, e, i) {
                    const n = t.style[e],
                        s = Gt(Gt(t, e, i), e);
                    return t.style[e] = n, s
                }

                function zr(t, e) {
                    return t.reduce(((t, i) => (t[i] = e, t)), {})
                }
                var Dr = {
                    mixins: [fr, Dn, Yn],
                    props: {
                        target: String,
                        viewport: Number,
                        easing: Number,
                        start: String,
                        end: String
                    },
                    data: {
                        target: !1,
                        viewport: 1,
                        easing: 1,
                        start: 0,
                        end: 0
                    },
                    computed: {
                        target(t, e) {
                            let {
                                target: i
                            } = t;
                            return jr(i && vt(i, e) || e)
                        },
                        start(t) {
                            let {
                                start: e
                            } = t;
                            return Se(e, "height", this.target, !0)
                        },
                        end(t) {
                            let {
                                end: e,
                                viewport: i
                            } = t;
                            return Se(e || (i = 100 * (1 - i)) && i + "vh+" + i + "%", "height", this.target, !0)
                        }
                    },
                    update: {
                        read(t, e) {
                            let {
                                percent: i
                            } = t;
                            if (e.has("scroll") || (i = !1), !this.matchMedia) return;
                            const n = i;
                            return i = Pr(Ui(this.target, this.start, this.end), this.easing), {
                                percent: i,
                                style: n !== i && this.getCss(i)
                            }
                        },
                        write(t) {
                            let {
                                style: e
                            } = t;
                            this.matchMedia ? e && Gt(this.$el, e) : this.reset()
                        },
                        events: ["scroll", "resize"]
                    }
                };

                function Pr(t, e) {
                    return e >= 0 ? Math.pow(t, e + 1) : 1 - Math.pow(1 - t, 1 - e)
                }

                function jr(t) {
                    return t ? "offsetTop" in t ? t : jr(ct(t)) : document.documentElement
                }
                var Hr = {
                        update: {
                            write() {
                                if (this.stack.length || this.dragging) return;
                                const t = this.getValidIndex(this.index);
                                ~this.prevIndex && this.index === t || this.show(t)
                            },
                            events: ["resize"]
                        }
                    },
                    Nr = {
                        mixins: [Mn],
                        connected() {
                            this.lazyload(this.slides, this.getAdjacentSlides)
                        }
                    };

                function Or(t, e, i, n) {
                    let {
                        center: s,
                        easing: o,
                        list: r
                    } = n;
                    const l = new J,
                        h = t ? Zr(t, r, s) : Zr(e, r, s) + we(e).width * i,
                        a = e ? Zr(e, r, s) : h + we(t).width * i * (ei ? -1 : 1);
                    return {
                        dir: i,
                        show(e, n, s) {
                            void 0 === n && (n = 0);
                            const h = s ? "linear" : o;
                            return e -= Math.round(e * F(n, -1, 1)), this.translate(n), n = t ? n : F(n, 0, 1), Ur(this.getItemIn(), "itemin", {
                                percent: n,
                                duration: e,
                                timing: h,
                                dir: i
                            }), t && Ur(this.getItemIn(!0), "itemout", {
                                percent: 1 - n,
                                duration: e,
                                timing: h,
                                dir: i
                            }), de.start(r, {
                                transform: Xo(-a * (ei ? -1 : 1), "px")
                            }, e, h).then(l.resolve, R), l.promise
                        },
                        cancel() {
                            de.cancel(r)
                        },
                        reset() {
                            Gt(r, "transform", "")
                        },
                        forward(t, e) {
                            return void 0 === e && (e = this.percent()), de.cancel(r), this.show(t, e, !0)
                        },
                        translate(n) {
                            const s = this.getDistance() * i * (ei ? -1 : 1);
                            Gt(r, "transform", Xo(F(s - s * n - a, -Rr(r), we(r).width) * (ei ? -1 : 1), "px"));
                            const o = this.getActives(),
                                l = this.getItemIn(),
                                h = this.getItemIn(!0);
                            n = t ? F(n, -1, 1) : 0;
                            for (const a of mt(r)) {
                                const s = d(o, a),
                                    c = a === l,
                                    u = a === h;
                                Ur(a, "itemtranslate" + (c || !u && (s || i * (ei ? -1 : 1) === -1 ^ Wr(a, r) > Wr(t || e)) ? "in" : "out"), {
                                    dir: i,
                                    percent: u ? 1 - n : c ? n : s ? 1 : 0
                                })
                            }
                        },
                        percent: () => Math.abs((Gt(r, "transform").split(",")[4] * (ei ? -1 : 1) + h) / (a - h)),
                        getDistance: () => Math.abs(a - h),
                        getItemIn(i) {
                            void 0 === i && (i = !1);
                            let n = this.getActives(),
                                o = qr(r, Zr(e || t, r, s));
                            if (i) {
                                const t = n;
                                n = o, o = t
                            }
                            return o[u(o, (t => !d(n, t)))]
                        },
                        getActives: () => qr(r, Zr(t || e, r, s))
                    }
                }

                function Zr(t, e, i) {
                    const n = Wr(t, e);
                    return i ? n - Vr(t, e) : Math.min(n, Fr(e))
                }

                function Fr(t) {
                    return Math.max(0, Rr(t) - we(t).width)
                }

                function Rr(t) {
                    return mt(t).reduce(((t, e) => we(e).width + t), 0)
                }

                function Vr(t, e) {
                    return we(e).width / 2 - we(t).width / 2
                }

                function Wr(t, e) {
                    return t && (xe(t).left + (ei ? we(t).width - we(e).width : 0)) * (ei ? -1 : 1) || 0
                }

                function qr(t, e) {
                    e -= 1;
                    const i = we(t).width,
                        n = e + i + 2;
                    return mt(t).filter((s => {
                        const o = Wr(s, t),
                            r = o + Math.min(we(s).width, i);
                        return o >= e && r <= n
                    }))
                }

                function Ur(t, e, i) {
                    Dt(t, Pt(e, !1, !1, i))
                }
                var Xr = {
                    mixins: [Sn, ir, Hr, Nr],
                    props: {
                        center: Boolean,
                        sets: Boolean
                    },
                    data: {
                        center: !1,
                        sets: !1,
                        attrItem: "uk-slider-item",
                        selList: ".uk-slider-items",
                        selNav: ".uk-slider-nav",
                        clsContainer: "uk-slider-container",
                        Transitioner: Or
                    },
                    computed: {
                        avgWidth() {
                            return Rr(this.list) / this.length
                        },
                        finite(t) {
                            let {
                                finite: e
                            } = t;
                            return e || Math.ceil(Rr(this.list)) < Math.trunc(we(this.list).width + Yr(this.list) + this.center)
                        },
                        maxIndex() {
                            if (!this.finite || this.center && !this.sets) return this.length - 1;
                            if (this.center) return H(this.sets);
                            let t = 0;
                            const e = Fr(this.list),
                                i = u(this.slides, (i => {
                                    if (t >= e) return !0;
                                    t += we(i).width
                                }));
                            return ~i ? i : this.length - 1
                        },
                        sets(t) {
                            let {
                                sets: e
                            } = t;
                            if (!e) return;
                            let i = 0;
                            const n = [],
                                s = we(this.list).width;
                            for (let o = 0; o < this.slides.length; o++) {
                                const t = we(this.slides[o]).width;
                                i + t > s && (i = 0), this.center ? i < s / 2 && i + t + we(this.slides[+o + 1]).width / 2 > s / 2 && (n.push(+o), i = s / 2 - t / 2) : 0 === i && n.push(Math.min(+o, this.maxIndex)), i += t
                            }
                            return n.length ? n : void 0
                        },
                        transitionOptions() {
                            return {
                                center: this.center,
                                list: this.list
                            }
                        }
                    },
                    connected() {
                        le(this.$el, this.clsContainer, !Qe("." + this.clsContainer, this.$el))
                    },
                    update: {
                        write() {
                            for (const t of this.navItems) {
                                const e = E(it(t, this.attrItem));
                                !1 !== e && (t.hidden = !this.maxIndex || e > this.maxIndex || this.sets && !d(this.sets, e))
                            }!this.length || this.dragging || this.stack.length || (this.reorder(), this._translate(1)), this.updateActiveClasses()
                        },
                        events: ["resize"]
                    },
                    events: {
                        beforeitemshow(t) {
                            !this.dragging && this.sets && this.stack.length < 2 && !d(this.sets, this.index) && (this.index = this.getValidIndex());
                            const e = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));
                            if (!this.dragging && e > 1) {
                                for (let t = 0; t < e; t++) this.stack.splice(1, 0, this.dir > 0 ? "next" : "previous");
                                return void t.preventDefault()
                            }
                            const i = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
                            this.duration = sr(this.avgWidth / this.velocity) * (we(this.slides[i]).width / this.avgWidth), this.reorder()
                        },
                        itemshow() {
                            ~this.prevIndex && ie(this._getTransitioner().getItemIn(), this.clsActive)
                        },
                        itemshown() {
                            this.updateActiveClasses()
                        }
                    },
                    methods: {
                        reorder() {
                            if (this.finite) return void Gt(this.slides, "order", "");
                            const t = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;
                            if (this.slides.forEach(((e, i) => Gt(e, "order", this.dir > 0 && i < t ? 1 : this.dir < 0 && i >= this.index ? -1 : ""))), !this.center) return;
                            const e = this.slides[t];
                            let i = we(this.list).width / 2 - we(e).width / 2,
                                n = 0;
                            for (; i > 0;) {
                                const e = this.getIndex(--n + t, t),
                                    s = this.slides[e];
                                Gt(s, "order", e > t ? -2 : -1), i -= we(s).width
                            }
                        },
                        updateActiveClasses() {
                            const t = this._getTransitioner(this.index).getActives(),
                                e = [this.clsActive, (!this.sets || d(this.sets, A(this.index))) && this.clsActivated || ""];
                            for (const i of this.slides) le(i, e, d(t, i))
                        },
                        getValidIndex(t, e) {
                            if (void 0 === t && (t = this.index), void 0 === e && (e = this.prevIndex), t = this.getIndex(t, e), !this.sets) return t;
                            let i;
                            do {
                                if (d(this.sets, t)) return t;
                                i = t, t = this.getIndex(t + this.dir, e)
                            } while (t !== i);
                            return t
                        },
                        getAdjacentSlides() {
                            const {
                                width: t
                            } = we(this.list), e = -t, i = 2 * t, n = we(this.slides[this.index]).width, s = this.center ? t / 2 - n / 2 : 0, o = new Set;
                            for (const r of [-1, 1]) {
                                let t = s + (r > 0 ? n : 0),
                                    l = 0;
                                do {
                                    const e = this.slides[this.getIndex(this.index + r + l++ * r)];
                                    t += we(e).width * r, o.add(e)
                                } while (this.slides.length > l && t > e && t < i)
                            }
                            return Array.from(o)
                        }
                    }
                };

                function Yr(t) {
                    return Math.max(0, ...mt(t).map((t => we(t).width)))
                }
                var Gr = {
                    mixins: [fr],
                    data: {
                        selItem: "!li"
                    },
                    beforeConnect() {
                        this.item = vt(this.selItem, this.$el)
                    },
                    disconnected() {
                        this.item = null
                    },
                    events: [{
                        name: "itemin itemout",
                        self: !0,
                        el() {
                            return this.item
                        },
                        handler(t) {
                            let {
                                type: e,
                                detail: {
                                    percent: i,
                                    duration: n,
                                    timing: s,
                                    dir: o
                                }
                            } = t;
                            ci.read((() => {
                                const t = this.getCss(Jr(e, o, i)),
                                    r = this.getCss(Qr(e) ? .5 : o > 0 ? 1 : 0);
                                ci.write((() => {
                                    Gt(this.$el, t), de.start(this.$el, r, n, s).catch(R)
                                }))
                            }))
                        }
                    }, {
                        name: "transitioncanceled transitionend",
                        self: !0,
                        el() {
                            return this.item
                        },
                        handler() {
                            de.cancel(this.$el)
                        }
                    }, {
                        name: "itemtranslatein itemtranslateout",
                        self: !0,
                        el() {
                            return this.item
                        },
                        handler(t) {
                            let {
                                type: e,
                                detail: {
                                    percent: i,
                                    dir: n
                                }
                            } = t;
                            ci.read((() => {
                                const t = this.getCss(Jr(e, n, i));
                                ci.write((() => Gt(this.$el, t)))
                            }))
                        }
                    }]
                };

                function Qr(t) {
                    return c(t, "in")
                }

                function Jr(t, e, i) {
                    return i /= 2, Qr(t) ^ e < 0 ? i : 1 - i
                }
                var Kr = { ...qo,
                        fade: {
                            show: () => [{
                                opacity: 0,
                                zIndex: 0
                            }, {
                                zIndex: -1
                            }],
                            percent: t => 1 - Gt(t, "opacity"),
                            translate: t => [{
                                opacity: 1 - t,
                                zIndex: 0
                            }, {
                                zIndex: -1
                            }]
                        },
                        scale: {
                            show: () => [{
                                opacity: 0,
                                transform: Yo(1.5),
                                zIndex: 0
                            }, {
                                zIndex: -1
                            }],
                            percent: t => 1 - Gt(t, "opacity"),
                            translate: t => [{
                                opacity: 1 - t,
                                transform: Yo(1 + .5 * t),
                                zIndex: 0
                            }, {
                                zIndex: -1
                            }]
                        },
                        pull: {
                            show: t => t < 0 ? [{
                                transform: Xo(30),
                                zIndex: -1
                            }, {
                                transform: Xo(),
                                zIndex: 0
                            }] : [{
                                transform: Xo(-100),
                                zIndex: 0
                            }, {
                                transform: Xo(),
                                zIndex: -1
                            }],
                            percent: (t, e, i) => i < 0 ? 1 - Uo(e) : Uo(t),
                            translate: (t, e) => e < 0 ? [{
                                transform: Xo(30 * t),
                                zIndex: -1
                            }, {
                                transform: Xo(-100 * (1 - t)),
                                zIndex: 0
                            }] : [{
                                transform: Xo(100 * -t),
                                zIndex: 0
                            }, {
                                transform: Xo(30 * (1 - t)),
                                zIndex: -1
                            }]
                        },
                        push: {
                            show: t => t < 0 ? [{
                                transform: Xo(100),
                                zIndex: 0
                            }, {
                                transform: Xo(),
                                zIndex: -1
                            }] : [{
                                transform: Xo(-30),
                                zIndex: -1
                            }, {
                                transform: Xo(),
                                zIndex: 0
                            }],
                            percent: (t, e, i) => i > 0 ? 1 - Uo(e) : Uo(t),
                            translate: (t, e) => e < 0 ? [{
                                transform: Xo(100 * t),
                                zIndex: 0
                            }, {
                                transform: Xo(-30 * (1 - t)),
                                zIndex: -1
                            }] : [{
                                transform: Xo(-30 * t),
                                zIndex: -1
                            }, {
                                transform: Xo(100 * (1 - t)),
                                zIndex: 0
                            }]
                        }
                    },
                    tl = {
                        mixins: [Sn, or, Hr, Nr],
                        props: {
                            ratio: String,
                            minHeight: Number,
                            maxHeight: Number
                        },
                        data: {
                            ratio: "16:9",
                            minHeight: !1,
                            maxHeight: !1,
                            selList: ".uk-slideshow-items",
                            attrItem: "uk-slideshow-item",
                            selNav: ".uk-slideshow-nav",
                            Animations: Kr
                        },
                        update: {
                            read() {
                                if (!this.list) return !1;
                                let [t, e] = this.ratio.split(":").map(Number);
                                return e = e * this.list.offsetWidth / t || 0, this.minHeight && (e = Math.max(this.minHeight, e)), this.maxHeight && (e = Math.min(this.maxHeight, e)), {
                                    height: e - Le(this.list, "height", "content-box")
                                }
                            },
                            write(t) {
                                let {
                                    height: e
                                } = t;
                                e > 0 && Gt(this.list, "minHeight", e)
                            },
                            events: ["resize"]
                        },
                        methods: {
                            getAdjacentSlides() {
                                return [1, -1].map((t => this.slides[this.getIndex(this.index + t)]))
                            }
                        }
                    },
                    el = {
                        mixins: [Sn, Po],
                        props: {
                            group: String,
                            threshold: Number,
                            clsItem: String,
                            clsPlaceholder: String,
                            clsDrag: String,
                            clsDragState: String,
                            clsBase: String,
                            clsNoDrag: String,
                            clsEmpty: String,
                            clsCustom: String,
                            handle: String
                        },
                        data: {
                            group: !1,
                            threshold: 5,
                            clsItem: "uk-sortable-item",
                            clsPlaceholder: "uk-sortable-placeholder",
                            clsDrag: "uk-sortable-drag",
                            clsDragState: "uk-drag",
                            clsBase: "uk-sortable",
                            clsNoDrag: "uk-sortable-nodrag",
                            clsEmpty: "uk-sortable-empty",
                            clsCustom: "",
                            handle: !1,
                            pos: {}
                        },
                        created() {
                            for (const t of ["init", "start", "move", "end"]) {
                                const e = this[t];
                                this[t] = t => {
                                    f(this.pos, Wt(t)), e(t)
                                }
                            }
                        },
                        events: {
                            name: si,
                            passive: !1,
                            handler: "init"
                        },
                        computed: {
                            target() {
                                return (this.$el.tBodies || [this.$el])[0]
                            },
                            items() {
                                return mt(this.target)
                            },
                            isEmpty: {
                                get() {
                                    return B(this.items)
                                },
                                watch(t) {
                                    le(this.target, this.clsEmpty, t)
                                },
                                immediate: !0
                            },
                            handles: {
                                get(t, e) {
                                    let {
                                        handle: i
                                    } = t;
                                    return i ? Je(i, e) : this.items
                                },
                                watch(t, e) {
                                    Gt(e, {
                                        touchAction: "",
                                        userSelect: ""
                                    }), Gt(t, {
                                        touchAction: ii ? "none" : "",
                                        userSelect: "none"
                                    })
                                },
                                immediate: !0
                            }
                        },
                        update: {
                            write(t) {
                                if (!this.drag || !ct(this.placeholder)) return;
                                const {
                                    pos: {
                                        x: e,
                                        y: i
                                    },
                                    origin: {
                                        offsetTop: n,
                                        offsetLeft: s
                                    },
                                    placeholder: o
                                } = this;
                                Gt(this.drag, {
                                    top: i - n,
                                    left: e - s
                                });
                                const r = this.getSortable(document.elementFromPoint(e, i));
                                if (!r) return;
                                const {
                                    items: l
                                } = r;
                                if (l.some(de.inProgress)) return;
                                const h = rl(l, {
                                    x: e,
                                    y: i
                                });
                                if (l.length && (!h || h === o)) return;
                                const a = this.getSortable(o),
                                    c = ll(r.target, h, o, e, i, r === a && t.moved !== h);
                                !1 !== c && (c && o === c || (r !== a ? (a.remove(o), t.moved = h) : delete t.moved, r.insert(o, c), this.touched.add(r)))
                            },
                            events: ["move"]
                        },
                        methods: {
                            init(t) {
                                const {
                                    target: e,
                                    button: i,
                                    defaultPrevented: n
                                } = t, [s] = this.items.filter((t => pt(e, t)));
                                !s || n || i > 0 || lt(e) || pt(e, "." + this.clsNoDrag) || this.handle && !pt(e, this.handle) || (t.preventDefault(), this.touched = new Set([this]), this.placeholder = s, this.origin = {
                                    target: e,
                                    index: wt(s),
                                    ...this.pos
                                }, At(document, oi, this.move), At(document, ri, this.end), this.threshold || this.start(t))
                            },
                            start(t) {
                                this.drag = ol(this.$container, this.placeholder);
                                const {
                                    left: e,
                                    top: i
                                } = this.placeholder.getBoundingClientRect();
                                f(this.origin, {
                                    offsetLeft: this.pos.x - e,
                                    offsetTop: this.pos.y - i
                                }), ie(this.drag, this.clsDrag, this.clsCustom), ie(this.placeholder, this.clsPlaceholder), ie(this.items, this.clsItem), ie(document.documentElement, this.clsDragState), Dt(this.$el, "start", [this, this.placeholder]), nl(this.pos), this.move(t)
                            },
                            move(t) {
                                this.drag ? this.$emit("move") : (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) && this.start(t)
                            },
                            end() {
                                if (_t(document, oi, this.move), _t(document, ri, this.end), !this.drag) return;
                                sl();
                                const t = this.getSortable(this.placeholder);
                                this === t ? this.origin.index !== wt(this.placeholder) && Dt(this.$el, "moved", [this, this.placeholder]) : (Dt(t.$el, "added", [t, this.placeholder]), Dt(this.$el, "removed", [this, this.placeholder])), Dt(this.$el, "stop", [this, this.placeholder]), Fe(this.drag), this.drag = null;
                                for (const {
                                        clsPlaceholder: e,
                                        clsItem: i
                                    } of this.touched)
                                    for (const t of this.touched) ne(t.items, e, i);
                                this.touched = null, ne(document.documentElement, this.clsDragState)
                            },
                            insert(t, e) {
                                ie(this.items, this.clsItem);
                                const i = () => e ? Ne(e, t) : He(this.target, t);
                                this.animate(i)
                            },
                            remove(t) {
                                pt(t, this.target) && this.animate((() => Fe(t)))
                            },
                            getSortable(t) {
                                do {
                                    const e = this.$getComponent(t, "sortable");
                                    if (e && (e === this || !1 !== this.group && e.group === this.group)) return e
                                } while (t = ct(t))
                            }
                        }
                    };
                let il;

                function nl(t) {
                    let e = Date.now();
                    il = setInterval((() => {
                        let {
                            x: i,
                            y: n
                        } = t;
                        n += Wi(window);
                        const s = .3 * (Date.now() - e);
                        e = Date.now(), Xi(document.elementFromPoint(i, t.y), /auto|scroll/).reverse().some((t => {
                            let {
                                scrollTop: e,
                                scrollHeight: i
                            } = t;
                            const {
                                top: o,
                                bottom: r,
                                height: l
                            } = Yi(t);
                            if (o < n && o + 35 > n) e -= s;
                            else {
                                if (!(r > n && r - 35 < n)) return;
                                e += s
                            }
                            if (e > 0 && e < i - l) return Wi(t, e), !0
                        }))
                    }), 15)
                }

                function sl() {
                    clearInterval(il)
                }

                function ol(t, e) {
                    const i = He(t, e.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, "$1div$2"));
                    return Gt(i, "margin", "0", "important"), Gt(i, {
                        boxSizing: "border-box",
                        width: e.offsetWidth,
                        height: e.offsetHeight,
                        padding: Gt(e, "padding")
                    }), be(i.firstElementChild, be(e.firstElementChild)), i
                }

                function rl(t, e) {
                    return t[u(t, (t => W(e, t.getBoundingClientRect())))]
                }

                function ll(t, e, i, n, s, o) {
                    if (!mt(t).length) return;
                    const r = e.getBoundingClientRect();
                    if (!o) return hl(t, i) || s < r.top + r.height / 2 ? e : e.nextElementSibling;
                    const l = i.getBoundingClientRect(),
                        h = al([r.top, r.bottom], [l.top, l.bottom]),
                        a = h ? n : s,
                        c = h ? "width" : "height",
                        d = h ? "left" : "top",
                        u = h ? "right" : "bottom",
                        g = l[c] < r[c] ? r[c] - l[c] : 0;
                    return l[d] < r[d] ? !(g && a < r[d] + g) && e.nextElementSibling : !(g && a > r[u] - g) && e
                }

                function hl(t, e) {
                    const i = 1 === mt(t).length;
                    i && He(t, e);
                    const n = mt(t),
                        s = n.some(((t, e) => {
                            const i = t.getBoundingClientRect();
                            return n.slice(e + 1).some((t => {
                                const e = t.getBoundingClientRect();
                                return !al([i.left, i.right], [e.left, e.right])
                            }))
                        }));
                    return i && Fe(e), s
                }

                function al(t, e) {
                    return t[1] > e[0] && e[1] > t[0]
                }
                var cl = {
                    mixins: [Hn, Bn, Nn],
                    args: "title",
                    props: {
                        delay: Number,
                        title: String
                    },
                    data: {
                        pos: "top",
                        title: "",
                        delay: 0,
                        animation: ["uk-animation-scale-up"],
                        duration: 100,
                        cls: "uk-active"
                    },
                    beforeConnect() {
                        this._hasTitle = tt(this.$el, "title"), K(this.$el, "title", ""), this.updateAria(!1), dl(this.$el)
                    },
                    disconnected() {
                        this.hide(), K(this.$el, "title", this._hasTitle ? this.title : null)
                    },
                    methods: {
                        show() {
                            !this.isToggled(this.tooltip || null) && this.title && (this._unbind = zt(document, "show keydown " + si, this.hide, !1, (t => t.type === si && !pt(t.target, this.$el) || "keydown" === t.type && 27 === t.keyCode || "show" === t.type && t.detail[0] !== this && t.detail[0].$name === this.$name)), clearTimeout(this.showTimer), this.showTimer = setTimeout(this._show, this.delay))
                        },
                        async hide() {
                            ut(this.$el, "input:focus") || (clearTimeout(this.showTimer), this.isToggled(this.tooltip || null) && (await this.toggleElement(this.tooltip, !1, !1), Fe(this.tooltip), this.tooltip = null, this._unbind()))
                        },
                        _show() {
                            this.tooltip = He(this.container, '<div class="uk-' + this.$options.name + '"> <div class="uk-' + this.$options.name + '-inner">' + this.title + "</div> </div>"), At(this.tooltip, "toggled", ((t, e) => {
                                if (this.updateAria(e), !e) return;
                                this.positionAt(this.tooltip, this.$el);
                                const [i, n] = ul(this.tooltip, this.$el, this.pos);
                                this.origin = "y" === this.axis ? $e(i) + "-" + n : n + "-" + $e(i)
                            })), this.toggleElement(this.tooltip, !0)
                        },
                        updateAria(t) {
                            K(this.$el, "aria-expanded", t)
                        }
                    },
                    events: {
                        focus: "show",
                        blur: "hide",
                        [li + " " + hi](t) {
                            Vt(t) || this[t.type === li ? "show" : "hide"]()
                        },
                        [si](t) {
                            Vt(t) && this.show()
                        }
                    }
                };

                function dl(t) {
                    at(t) || K(t, "tabindex", "0")
                }

                function ul(t, e, i) {
                    let [n, s] = i;
                    const o = ve(t),
                        r = ve(e),
                        l = [
                            ["left", "right"],
                            ["top", "bottom"]
                        ];
                    for (const a of l) {
                        if (o[a[0]] >= r[a[1]]) {
                            n = a[1];
                            break
                        }
                        if (o[a[1]] <= r[a[0]]) {
                            n = a[0];
                            break
                        }
                    }
                    const h = d(l[0], n) ? l[1] : l[0];
                    return s = o[h[0]] === r[h[0]] ? h[0] : o[h[1]] === r[h[1]] ? h[1] : "center", [n, s]
                }
                var gl = {
                    props: {
                        allow: String,
                        clsDragover: String,
                        concurrent: Number,
                        maxSize: Number,
                        method: String,
                        mime: String,
                        msgInvalidMime: String,
                        msgInvalidName: String,
                        msgInvalidSize: String,
                        multiple: Boolean,
                        name: String,
                        params: Object,
                        type: String,
                        url: String
                    },
                    data: {
                        allow: !1,
                        clsDragover: "uk-dragover",
                        concurrent: 1,
                        maxSize: 0,
                        method: "POST",
                        mime: !1,
                        msgInvalidMime: "Invalid File Type: %s",
                        msgInvalidName: "Invalid File Name: %s",
                        msgInvalidSize: "Invalid File Size: %s Kilobytes Max",
                        multiple: !1,
                        name: "files[]",
                        params: {},
                        type: "",
                        url: "",
                        abort: R,
                        beforeAll: R,
                        beforeSend: R,
                        complete: R,
                        completeAll: R,
                        error: R,
                        fail: R,
                        load: R,
                        loadEnd: R,
                        loadStart: R,
                        progress: R
                    },
                    events: {
                        change(t) {
                            ut(t.target, 'input[type="file"]') && (t.preventDefault(), t.target.files && this.upload(t.target.files), t.target.value = "")
                        },
                        drop(t) {
                            ml(t);
                            const e = t.dataTransfer;
                            null != e && e.files && (ne(this.$el, this.clsDragover), this.upload(e.files))
                        },
                        dragenter(t) {
                            ml(t)
                        },
                        dragover(t) {
                            ml(t), ie(this.$el, this.clsDragover)
                        },
                        dragleave(t) {
                            ml(t), ne(this.$el, this.clsDragover)
                        }
                    },
                    methods: {
                        async upload(t) {
                            if (!(t = p(t)).length) return;
                            Dt(this.$el, "upload", [t]);
                            for (const n of t) {
                                if (this.maxSize && 1e3 * this.maxSize < n.size) return void this.fail(this.msgInvalidSize.replace("%s", this.maxSize));
                                if (this.allow && !pl(this.allow, n.name)) return void this.fail(this.msgInvalidName.replace("%s", this.allow));
                                if (this.mime && !pl(this.mime, n.type)) return void this.fail(this.msgInvalidMime.replace("%s", this.mime))
                            }
                            this.multiple || (t = t.slice(0, 1)), this.beforeAll(this, t);
                            const e = fl(t, this.concurrent),
                                i = async t => {
                                    const n = new FormData;
                                    t.forEach((t => n.append(this.name, t)));
                                    for (const e in this.params) n.append(e, this.params[e]);
                                    try {
                                        const t = await qt(this.url, {
                                            data: n,
                                            method: this.method,
                                            responseType: this.type,
                                            beforeSend: t => {
                                                const {
                                                    xhr: e
                                                } = t;
                                                e.upload && At(e.upload, "progress", this.progress);
                                                for (const i of ["loadStart", "load", "loadEnd", "abort"]) At(e, i.toLowerCase(), this[i]);
                                                return this.beforeSend(t)
                                            }
                                        });
                                        this.complete(t), e.length ? await i(e.shift()) : this.completeAll(t)
                                    } catch (s) {
                                        this.error(s)
                                    }
                                };
                            await i(e.shift())
                        }
                    }
                };

                function pl(t, e) {
                    return e.match(new RegExp("^" + t.replace(/\//g, "\\/").replace(/\*\*/g, "(\\/[^\\/]+)*").replace(/\*/g, "[^\\/]+").replace(/((?!\\))\?/g, "$1.") + "$", "i"))
                }

                function fl(t, e) {
                    const i = [];
                    for (let n = 0; n < t.length; n += e) i.push(t.slice(n, n + e));
                    return i
                }

                function ml(t) {
                    t.preventDefault(), t.stopPropagation()
                }
                return N(Object.freeze({
                    __proto__: null,
                    Countdown: ko,
                    Filter: jo,
                    Lightbox: hr,
                    LightboxPanel: rr,
                    Notification: dr,
                    Parallax: Dr,
                    Slider: Xr,
                    SliderParallax: Gr,
                    Slideshow: tl,
                    SlideshowParallax: Gr,
                    Sortable: el,
                    Tooltip: cl,
                    Upload: gl
                }), ((t, e) => Ln.component(e, t))), Ln
            }()
        }
    }
]);
//# sourceMappingURL=377-5b0815b97301a5ed63b7.js.map