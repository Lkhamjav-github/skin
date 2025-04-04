//swv.js
(() => {
  "use strict";
  var t = {
      d: (e, s) => {
        for (var i in s)
          t.o(s, i) &&
            !t.o(e, i) &&
            Object.defineProperty(e, i, { enumerable: !0, get: s[i] });
      },
      o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
      r: (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      },
    },
    e = {};
  function s(t) {
    if (((this.formData = {}), (this.tree = {}), !(t instanceof FormData)))
      return this;
    this.formData = t;
    const e = () => {
      const t = new Map();
      return (
        (t.largestIndex = 0),
        (t.set = function (e, s) {
          "" === e
            ? (e = t.largestIndex++)
            : /^[0-9]+$/.test(e) &&
              ((e = parseInt(e)),
              t.largestIndex <= e && (t.largestIndex = e + 1)),
            Map.prototype.set.call(t, e, s);
        }),
        t
      );
    };
    this.tree = e();
    const s =
      /^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;
    for (const [t, i] of this.formData) {
      const n = t.match(s);
      if (n)
        if ("" === n.groups.array) this.tree.set(n.groups.name, i);
        else {
          const t = [
            ...n.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi),
          ].map(([t, e]) => e);
          t.unshift(n.groups.name);
          const s = t.pop();
          t.reduce((t, s) => {
            if (
              (/^[0-9]+$/.test(s) && (s = parseInt(s)), t.get(s) instanceof Map)
            )
              return t.get(s);
            const i = e();
            return t.set(s, i), i;
          }, this.tree).set(s, i);
        }
    }
  }
  t.r(e),
    t.d(e, {
      date: () => d,
      dayofweek: () => u,
      email: () => r,
      enum: () => h,
      file: () => f,
      maxdate: () => z,
      maxfilesize: () => I,
      maxitems: () => v,
      maxlength: () => x,
      maxnumber: () => b,
      mindate: () => A,
      minfilesize: () => $,
      minitems: () => g,
      minlength: () => w,
      minnumber: () => y,
      number: () => c,
      required: () => o,
      requiredfile: () => a,
      tel: () => l,
      time: () => m,
      url: () => p,
    }),
    (s.prototype.entries = function () {
      return this.tree.entries();
    }),
    (s.prototype.get = function (t) {
      return this.tree.get(t);
    }),
    (s.prototype.getAll = function (t) {
      if (!this.has(t)) return [];
      const e = (t) => {
        const s = [];
        if (t instanceof Map) for (const [i, n] of t) s.push(...e(n));
        else "" !== t && s.push(t);
        return s;
      };
      return e(this.get(t));
    }),
    (s.prototype.has = function (t) {
      return this.tree.has(t);
    }),
    (s.prototype.keys = function () {
      return this.tree.keys();
    }),
    (s.prototype.values = function () {
      return this.tree.values();
    });
  const i = s;
  function n({ rule: t, field: e, error: s, ...i }) {
    (this.rule = t), (this.field = e), (this.error = s), (this.properties = i);
  }
  const o = function (t) {
      if (0 === t.getAll(this.field).length) throw new n(this);
    },
    a = function (t) {
      if (0 === t.getAll(this.field).length) throw new n(this);
    },
    r = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          if ((t = t.trim()).length < 6) return !1;
          if (-1 === t.indexOf("@", 1)) return !1;
          if (t.indexOf("@") !== t.lastIndexOf("@")) return !1;
          const [e, s] = t.split("@", 2);
          if (!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(e)) return !1;
          if (/\.{2,}/.test(s)) return !1;
          if (/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(s)) return !1;
          const i = s.split(".");
          if (i.length < 2) return !1;
          for (const t of i) {
            if (/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(t)) return !1;
            if (!/^[a-z0-9-]+$/i.test(t)) return !1;
          }
          return !0;
        })
      )
        throw new n(this);
    },
    p = function (t) {
      const e = t.getAll(this.field);
      if (
        !e.every((t) => {
          if ("" === (t = t.trim())) return !1;
          try {
            return ((t) =>
              -1 !==
              [
                "http",
                "https",
                "ftp",
                "ftps",
                "mailto",
                "news",
                "irc",
                "irc6",
                "ircs",
                "gopher",
                "nntp",
                "feed",
                "telnet",
                "mms",
                "rtsp",
                "sms",
                "svn",
                "tel",
                "fax",
                "xmpp",
                "webcal",
                "urn",
              ].indexOf(t))(new URL(t).protocol.replace(/:$/, ""));
          } catch {
            return !1;
          }
        })
      )
        throw new n(this);
    },
    l = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = (t = t.trim()).replaceAll(/[()/.*#\s-]+/g, "")),
              /^[+]?[0-9]+$/.test(t)
            )
          )
      )
        throw new n(this);
    },
    c = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t) ||
                !!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(t)
            )
          )
      )
        throw new n(this);
    },
    d = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          if (((t = t.trim()), !/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t)))
            return !1;
          const e = new Date(t);
          return !Number.isNaN(e.valueOf());
        })
      )
        throw new n(this);
    },
    m = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          const e = t.trim().match(/^([0-9]{2})\:([0-9]{2})(?:\:([0-9]{2}))?$/);
          if (!e) return !1;
          const s = parseInt(e[1]),
            i = parseInt(e[2]),
            n = e[3] ? parseInt(e[3]) : 0;
          return 0 <= s && s <= 23 && 0 <= i && i <= 59 && 0 <= n && n <= 59;
        })
      )
        throw new n(this);
    },
    f = function (t) {
      if (
        !t.getAll(this.field).every(
          (t) =>
            t instanceof File &&
            this.accept?.some((e) =>
              /^\.[a-z0-9]+$/i.test(e)
                ? t.name.toLowerCase().endsWith(e.toLowerCase())
                : ((t) => {
                    const e = [],
                      s = t.match(
                        /^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i
                      );
                    if (s) {
                      const t = s.groups.toplevel.toLowerCase(),
                        i = s.groups.sub.toLowerCase();
                      for (const [n, o] of (() => {
                        const t = new Map();
                        return (
                          t.set("jpg|jpeg|jpe", "image/jpeg"),
                          t.set("gif", "image/gif"),
                          t.set("png", "image/png"),
                          t.set("bmp", "image/bmp"),
                          t.set("tiff|tif", "image/tiff"),
                          t.set("webp", "image/webp"),
                          t.set("ico", "image/x-icon"),
                          t.set("heic", "image/heic"),
                          t.set("asf|asx", "video/x-ms-asf"),
                          t.set("wmv", "video/x-ms-wmv"),
                          t.set("wmx", "video/x-ms-wmx"),
                          t.set("wm", "video/x-ms-wm"),
                          t.set("avi", "video/avi"),
                          t.set("divx", "video/divx"),
                          t.set("flv", "video/x-flv"),
                          t.set("mov|qt", "video/quicktime"),
                          t.set("mpeg|mpg|mpe", "video/mpeg"),
                          t.set("mp4|m4v", "video/mp4"),
                          t.set("ogv", "video/ogg"),
                          t.set("webm", "video/webm"),
                          t.set("mkv", "video/x-matroska"),
                          t.set("3gp|3gpp", "video/3gpp"),
                          t.set("3g2|3gp2", "video/3gpp2"),
                          t.set("txt|asc|c|cc|h|srt", "text/plain"),
                          t.set("csv", "text/csv"),
                          t.set("tsv", "text/tab-separated-values"),
                          t.set("ics", "text/calendar"),
                          t.set("rtx", "text/richtext"),
                          t.set("css", "text/css"),
                          t.set("htm|html", "text/html"),
                          t.set("vtt", "text/vtt"),
                          t.set("dfxp", "application/ttaf+xml"),
                          t.set("mp3|m4a|m4b", "audio/mpeg"),
                          t.set("aac", "audio/aac"),
                          t.set("ra|ram", "audio/x-realaudio"),
                          t.set("wav", "audio/wav"),
                          t.set("ogg|oga", "audio/ogg"),
                          t.set("flac", "audio/flac"),
                          t.set("mid|midi", "audio/midi"),
                          t.set("wma", "audio/x-ms-wma"),
                          t.set("wax", "audio/x-ms-wax"),
                          t.set("mka", "audio/x-matroska"),
                          t.set("rtf", "application/rtf"),
                          t.set("js", "application/javascript"),
                          t.set("pdf", "application/pdf"),
                          t.set("swf", "application/x-shockwave-flash"),
                          t.set("class", "application/java"),
                          t.set("tar", "application/x-tar"),
                          t.set("zip", "application/zip"),
                          t.set("gz|gzip", "application/x-gzip"),
                          t.set("rar", "application/rar"),
                          t.set("7z", "application/x-7z-compressed"),
                          t.set("exe", "application/x-msdownload"),
                          t.set("psd", "application/octet-stream"),
                          t.set("xcf", "application/octet-stream"),
                          t.set("doc", "application/msword"),
                          t.set("pot|pps|ppt", "application/vnd.ms-powerpoint"),
                          t.set("wri", "application/vnd.ms-write"),
                          t.set("xla|xls|xlt|xlw", "application/vnd.ms-excel"),
                          t.set("mdb", "application/vnd.ms-access"),
                          t.set("mpp", "application/vnd.ms-project"),
                          t.set(
                            "docx",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          ),
                          t.set(
                            "docm",
                            "application/vnd.ms-word.document.macroEnabled.12"
                          ),
                          t.set(
                            "dotx",
                            "application/vnd.openxmlformats-officedocument.wordprocessingml.template"
                          ),
                          t.set(
                            "dotm",
                            "application/vnd.ms-word.template.macroEnabled.12"
                          ),
                          t.set(
                            "xlsx",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                          ),
                          t.set(
                            "xlsm",
                            "application/vnd.ms-excel.sheet.macroEnabled.12"
                          ),
                          t.set(
                            "xlsb",
                            "application/vnd.ms-excel.sheet.binary.macroEnabled.12"
                          ),
                          t.set(
                            "xltx",
                            "application/vnd.openxmlformats-officedocument.spreadsheetml.template"
                          ),
                          t.set(
                            "xltm",
                            "application/vnd.ms-excel.template.macroEnabled.12"
                          ),
                          t.set(
                            "xlam",
                            "application/vnd.ms-excel.addin.macroEnabled.12"
                          ),
                          t.set(
                            "pptx",
                            "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                          ),
                          t.set(
                            "pptm",
                            "application/vnd.ms-powerpoint.presentation.macroEnabled.12"
                          ),
                          t.set(
                            "ppsx",
                            "application/vnd.openxmlformats-officedocument.presentationml.slideshow"
                          ),
                          t.set(
                            "ppsm",
                            "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"
                          ),
                          t.set(
                            "potx",
                            "application/vnd.openxmlformats-officedocument.presentationml.template"
                          ),
                          t.set(
                            "potm",
                            "application/vnd.ms-powerpoint.template.macroEnabled.12"
                          ),
                          t.set(
                            "ppam",
                            "application/vnd.ms-powerpoint.addin.macroEnabled.12"
                          ),
                          t.set(
                            "sldx",
                            "application/vnd.openxmlformats-officedocument.presentationml.slide"
                          ),
                          t.set(
                            "sldm",
                            "application/vnd.ms-powerpoint.slide.macroEnabled.12"
                          ),
                          t.set(
                            "onetoc|onetoc2|onetmp|onepkg",
                            "application/onenote"
                          ),
                          t.set("oxps", "application/oxps"),
                          t.set("xps", "application/vnd.ms-xpsdocument"),
                          t.set(
                            "odt",
                            "application/vnd.oasis.opendocument.text"
                          ),
                          t.set(
                            "odp",
                            "application/vnd.oasis.opendocument.presentation"
                          ),
                          t.set(
                            "ods",
                            "application/vnd.oasis.opendocument.spreadsheet"
                          ),
                          t.set(
                            "odg",
                            "application/vnd.oasis.opendocument.graphics"
                          ),
                          t.set(
                            "odc",
                            "application/vnd.oasis.opendocument.chart"
                          ),
                          t.set(
                            "odb",
                            "application/vnd.oasis.opendocument.database"
                          ),
                          t.set(
                            "odf",
                            "application/vnd.oasis.opendocument.formula"
                          ),
                          t.set("wp|wpd", "application/wordperfect"),
                          t.set("key", "application/vnd.apple.keynote"),
                          t.set("numbers", "application/vnd.apple.numbers"),
                          t.set("pages", "application/vnd.apple.pages"),
                          t
                        );
                      })())
                        (("*" === i && o.startsWith(t + "/")) || o === s[0]) &&
                          e.push(...n.split("|"));
                    }
                    return e;
                  })(e).some(
                    (e) => (
                      (e = "." + e.trim()),
                      t.name.toLowerCase().endsWith(e.toLowerCase())
                    )
                  )
            )
        )
      )
        throw new n(this);
    },
    h = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => this.accept?.some((e) => t === String(e)))
      )
        throw new n(this);
    },
    u = function (t) {
      if (
        !t.getAll(this.field).every((t) => {
          const e = 0 === (s = new Date(t).getDay()) ? 7 : s;
          var s;
          return this.accept?.some((t) => e === parseInt(t));
        })
      )
        throw new n(this);
    },
    g = function (t) {
      if (t.getAll(this.field).length < parseInt(this.threshold))
        throw new n(this);
    },
    v = function (t) {
      const e = t.getAll(this.field);
      if (parseInt(this.threshold) < e.length) throw new n(this);
    },
    w = function (t) {
      const e = t.getAll(this.field);
      let s = 0;
      if (
        (e.forEach((t) => {
          "string" == typeof t && (s += t.length);
        }),
        0 !== s && s < parseInt(this.threshold))
      )
        throw new n(this);
    },
    x = function (t) {
      const e = t.getAll(this.field);
      let s = 0;
      if (
        (e.forEach((t) => {
          "string" == typeof t && (s += t.length);
        }),
        parseInt(this.threshold) < s)
      )
        throw new n(this);
    },
    y = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => !(parseFloat(t) < parseFloat(this.threshold)))
      )
        throw new n(this);
    },
    b = function (t) {
      if (
        !t
          .getAll(this.field)
          .every((t) => !(parseFloat(this.threshold) < parseFloat(t)))
      )
        throw new n(this);
    },
    A = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !(
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) &&
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) &&
                t < this.threshold
              )
            )
          )
      )
        throw new n(this);
    },
    z = function (t) {
      if (
        !t
          .getAll(this.field)
          .every(
            (t) => (
              (t = t.trim()),
              !(
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(t) &&
                /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) &&
                this.threshold < t
              )
            )
          )
      )
        throw new n(this);
    },
    $ = function (t) {
      const e = t.getAll(this.field);
      let s = 0;
      if (
        (e.forEach((t) => {
          t instanceof File && (s += t.size);
        }),
        s < parseInt(this.threshold))
      )
        throw new n(this);
    },
    I = function (t) {
      const e = t.getAll(this.field);
      let s = 0;
      if (
        (e.forEach((t) => {
          t instanceof File && (s += t.size);
        }),
        parseInt(this.threshold) < s)
      )
        throw new n(this);
    };
  var E;
  window.swv = {
    validators: e,
    validate: (t, s, o = {}) => {
      const a = (t.rules ?? []).filter(
        ({ rule: t, ...s }) =>
          "function" == typeof e[t] &&
          ("function" != typeof e[t].matches || e[t].matches(s, o))
      );
      if (!a.length) return new Map();
      const r = new i(s),
        p = a.reduce((t, s) => {
          const { rule: i, ...o } = s;
          if (t.get(o.field)?.error) return t;
          try {
            e[i].call({ rule: i, ...o }, r);
          } catch (e) {
            if (e instanceof n) return t.set(o.field, e);
          }
          return t;
        }, new Map());
      for (const t of r.keys())
        p.has(t) || p.set(t, { validInputs: r.getAll(t) });
      return p;
    },
    ...(null !== (E = window.swv) && void 0 !== E ? E : {}),
  };
})();
