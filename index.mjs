// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-split-grapheme-clusters@esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-escape-regexp-string@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function d(d,o,p){var h,l,g,j,f;if(!s(d))throw new TypeError(m("0hF3R",d));if(!t(o))throw new TypeError(m("0hF3k",o));if(arguments.length>2){if(!(g=s(p))&&!r(p))throw new TypeError(m("0hFB8",p));for(g&&(p=e(p)),h=p.length-1,l="",f=0;f<h;f++)l+=n(p[f]),l+="|";l+=n(p[h]),j=new RegExp("^(?:"+l+"){0,"+o+"}")}else j=new RegExp("^[ \f\n\r\t\v   - \u2028\u2029  　\ufeff]{0,"+o+"}");return i(d,j,"")}export{d as default};
//# sourceMappingURL=index.mjs.map
