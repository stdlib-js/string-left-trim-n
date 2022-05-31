// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-split-grapheme-clusters@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-replace@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-escape-regexp-string@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";var d=s.isPrimitive,o=e,p=r.isPrimitive,h=t.primitives,l=i,g=n,j=m;var f=function(s,e,r){var t,i,n,m,f;if(!d(s))throw new TypeError(j("0hF3R",s));if(!p(e))throw new TypeError(j("0hF3k",e));if(arguments.length>2){if(!(n=d(r))&&!h(r))throw new TypeError(j("0hFB8",r));for(n&&(r=o(r)),t=r.length-1,i="",f=0;f<t;f++)i+=g(r[f]),i+="|";i+=g(r[t]),m=new RegExp("^(?:"+i+"){0,"+e+"}")}else m=new RegExp("^[ \f\n\r\t\v   - \u2028\u2029  　\ufeff]{0,"+e+"}");return l(s,m,"")};export{f as default};
//# sourceMappingURL=index.mjs.map
