(()=>{var t={623:t=>{"use strict";function e(t,e,i){t instanceof RegExp&&(t=n(t,i)),e instanceof RegExp&&(e=n(e,i));var o=r(t,e,i);return o&&{start:o[0],end:o[1],pre:i.slice(0,o[0]),body:i.slice(o[0]+t.length,o[1]),post:i.slice(o[1]+e.length)}}function n(t,e){var n=e.match(t);return n?n[0]:null}function r(t,e,n){var r,i,o,s,a,c=n.indexOf(t),u=n.indexOf(e,c+1),l=c;if(c>=0&&u>0){if(t===e)return[c,u];for(r=[],o=n.length;l>=0&&!a;)l==c?(r.push(l),c=n.indexOf(t,l+1)):1==r.length?a=[r.pop(),u]:((i=r.pop())<o&&(o=i,s=u),u=n.indexOf(e,l+1)),l=c<u&&c>=0?c:u;r.length&&(a=[o,s])}return a}t.exports=e,e.range=r},644:(t,e,n)=>{var r=n(48),i=n(623);t.exports=function(t){return t?("{}"===t.substr(0,2)&&(t="\\{\\}"+t.substr(2)),m(function(t){return t.split("\\\\").join(o).split("\\{").join(s).split("\\}").join(a).split("\\,").join(c).split("\\.").join(u)}(t),!0).map(h)):[]};var o="\0SLASH"+Math.random()+"\0",s="\0OPEN"+Math.random()+"\0",a="\0CLOSE"+Math.random()+"\0",c="\0COMMA"+Math.random()+"\0",u="\0PERIOD"+Math.random()+"\0";function l(t){return parseInt(t,10)==t?parseInt(t,10):t.charCodeAt(0)}function h(t){return t.split(o).join("\\").split(s).join("{").split(a).join("}").split(c).join(",").split(u).join(".")}function p(t){if(!t)return[""];var e=[],n=i("{","}",t);if(!n)return t.split(",");var r=n.pre,o=n.body,s=n.post,a=r.split(",");a[a.length-1]+="{"+o+"}";var c=p(s);return s.length&&(a[a.length-1]+=c.shift(),a.push.apply(a,c)),e.push.apply(e,a),e}function f(t){return"{"+t+"}"}function d(t){return/^-?0\d/.test(t)}function g(t,e){return t<=e}function v(t,e){return t>=e}function m(t,e){var n=[],o=i("{","}",t);if(!o||/\$$/.test(o.pre))return[t];var s,c=/^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(o.body),u=/^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(o.body),h=c||u,b=o.body.indexOf(",")>=0;if(!h&&!b)return o.post.match(/,.*\}/)?m(t=o.pre+"{"+o.body+a+o.post):[t];if(h)s=o.body.split(/\.\./);else if(1===(s=p(o.body)).length&&1===(s=m(s[0],!1).map(f)).length)return(j=o.post.length?m(o.post,!1):[""]).map((function(t){return o.pre+s[0]+t}));var y,x=o.pre,j=o.post.length?m(o.post,!1):[""];if(h){var w=l(s[0]),O=l(s[1]),E=Math.max(s[0].length,s[1].length),S=3==s.length?Math.abs(l(s[2])):1,A=g;O<w&&(S*=-1,A=v);var M=s.some(d);y=[];for(var C=w;A(C,O);C+=S){var T;if(u)"\\"===(T=String.fromCharCode(C))&&(T="");else if(T=String(C),M){var k=E-T.length;if(k>0){var R=new Array(k+1).join("0");T=C<0?"-"+R+T.slice(1):R+T}}y.push(T)}}else y=r(s,(function(t){return m(t,!1)}));for(var $=0;$<y.length;$++)for(var N=0;N<j.length;N++){var L=x+y[$]+j[N];(!e||h||L)&&n.push(L)}return n}},48:t=>{t.exports=function(t,n){for(var r=[],i=0;i<t.length;i++){var o=n(t[i],i);e(o)?r.push.apply(r,o):r.push(o)}return r};var e=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},348:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(645),i=n.n(r)()((function(t){return t[1]}));i.push([t.id,"\n\nbody{\n    background-color:  rgb(42, 117, 193);\n}",""]);const o=i},960:(t,e,n)=>{"use strict";n.d(e,{Z:()=>o});var r=n(645),i=n.n(r)()((function(t){return t[1]}));i.push([t.id,"\n\nbody{\n    font-family: monospace;\n}",""]);const o=i},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},272:t=>{console.log("-ar.js-"),t.exports=function(){console.log("ar:marhabaan")}},572:t=>{console.log("-en.js-"),t.exports=function(){console.log("en:hello...")}},40:t=>{t.exports=function(){console.log("ola")}},978:(t,e,n)=>{console.log("-index.js-");const r=n(572),i=n(187),o=n(272),s=n(40);t.exports={greet:function(t){"english"!==t?"tamil"!==t?"arabic"!==t?"spanish"!==t?console.log("greetings to you, provide lang for personalized greetings"):s():o():i():r()}}},187:t=>{console.log("-tn.js-"),t.exports=function(){console.log("tn:vanakkam")}},171:(t,e,n)=>{t.exports=p,p.Minimatch=f;var r={sep:"/"};try{r=n(Object(function(){var t=new Error("Cannot find module 'path'");throw t.code="MODULE_NOT_FOUND",t}()))}catch(t){}var i=p.GLOBSTAR=f.GLOBSTAR={},o=n(644),s={"!":{open:"(?:(?!(?:",close:"))[^/]*?)"},"?":{open:"(?:",close:")?"},"+":{open:"(?:",close:")+"},"*":{open:"(?:",close:")*"},"@":{open:"(?:",close:")"}},a="[^/]",c="[^/]*?",u="().*{}+?[]^$\\!".split("").reduce((function(t,e){return t[e]=!0,t}),{}),l=/\/+/;function h(t,e){t=t||{},e=e||{};var n={};return Object.keys(e).forEach((function(t){n[t]=e[t]})),Object.keys(t).forEach((function(e){n[e]=t[e]})),n}function p(t,e,n){if("string"!=typeof e)throw new TypeError("glob pattern string required");return n||(n={}),!(!n.nocomment&&"#"===e.charAt(0))&&(""===e.trim()?""===t:new f(e,n).match(t))}function f(t,e){if(!(this instanceof f))return new f(t,e);if("string"!=typeof t)throw new TypeError("glob pattern string required");e||(e={}),t=t.trim(),"/"!==r.sep&&(t=t.split(r.sep).join("/")),this.options=e,this.set=[],this.pattern=t,this.regexp=null,this.negate=!1,this.comment=!1,this.empty=!1,this.make()}function d(t,e){if(e||(e=this instanceof f?this.options:{}),void 0===(t=void 0===t?this.pattern:t))throw new TypeError("undefined pattern");return e.nobrace||!t.match(/\{.*\}/)?[t]:o(t)}p.filter=function(t,e){return e=e||{},function(n,r,i){return p(n,t,e)}},p.defaults=function(t){if(!t||!Object.keys(t).length)return p;var e=p,n=function(n,r,i){return e.minimatch(n,r,h(t,i))};return n.Minimatch=function(n,r){return new e.Minimatch(n,h(t,r))},n},f.defaults=function(t){return t&&Object.keys(t).length?p.defaults(t).Minimatch:f},f.prototype.debug=function(){},f.prototype.make=function(){if(!this._made){var t=this.pattern,e=this.options;if(e.nocomment||"#"!==t.charAt(0))if(t){this.parseNegate();var n=this.globSet=this.braceExpand();e.debug&&(this.debug=console.error),this.debug(this.pattern,n),n=this.globParts=n.map((function(t){return t.split(l)})),this.debug(this.pattern,n),n=n.map((function(t,e,n){return t.map(this.parse,this)}),this),this.debug(this.pattern,n),n=n.filter((function(t){return-1===t.indexOf(!1)})),this.debug(this.pattern,n),this.set=n}else this.empty=!0;else this.comment=!0}},f.prototype.parseNegate=function(){var t=this.pattern,e=!1,n=0;if(!this.options.nonegate){for(var r=0,i=t.length;r<i&&"!"===t.charAt(r);r++)e=!e,n++;n&&(this.pattern=t.substr(n)),this.negate=e}},p.braceExpand=function(t,e){return d(t,e)},f.prototype.braceExpand=d,f.prototype.parse=function(t,e){if(t.length>65536)throw new TypeError("pattern is too long");var n=this.options;if(!n.noglobstar&&"**"===t)return i;if(""===t)return"";var r,o="",l=!!n.nocase,h=!1,p=[],f=[],d=!1,v=-1,m=-1,b="."===t.charAt(0)?"":n.dot?"(?!(?:^|\\/)\\.{1,2}(?:$|\\/))":"(?!\\.)",y=this;function x(){if(r){switch(r){case"*":o+=c,l=!0;break;case"?":o+=a,l=!0;break;default:o+="\\"+r}y.debug("clearStateChar %j %j",r,o),r=!1}}for(var j,w=0,O=t.length;w<O&&(j=t.charAt(w));w++)if(this.debug("%s\t%s %s %j",t,w,o,j),h&&u[j])o+="\\"+j,h=!1;else switch(j){case"/":return!1;case"\\":x(),h=!0;continue;case"?":case"*":case"+":case"@":case"!":if(this.debug("%s\t%s %s %j <-- stateChar",t,w,o,j),d){this.debug("  in class"),"!"===j&&w===m+1&&(j="^"),o+=j;continue}y.debug("call clearStateChar %j",r),x(),r=j,n.noext&&x();continue;case"(":if(d){o+="(";continue}if(!r){o+="\\(";continue}p.push({type:r,start:w-1,reStart:o.length,open:s[r].open,close:s[r].close}),o+="!"===r?"(?:(?!(?:":"(?:",this.debug("plType %j %j",r,o),r=!1;continue;case")":if(d||!p.length){o+="\\)";continue}x(),l=!0;var E=p.pop();o+=E.close,"!"===E.type&&f.push(E),E.reEnd=o.length;continue;case"|":if(d||!p.length||h){o+="\\|",h=!1;continue}x(),o+="|";continue;case"[":if(x(),d){o+="\\"+j;continue}d=!0,m=w,v=o.length,o+=j;continue;case"]":if(w===m+1||!d){o+="\\"+j,h=!1;continue}if(d){var S=t.substring(m+1,w);try{RegExp("["+S+"]")}catch(t){var A=this.parse(S,g);o=o.substr(0,v)+"\\["+A[0]+"\\]",l=l||A[1],d=!1;continue}}l=!0,d=!1,o+=j;continue;default:x(),h?h=!1:!u[j]||"^"===j&&d||(o+="\\"),o+=j}for(d&&(S=t.substr(m+1),A=this.parse(S,g),o=o.substr(0,v)+"\\["+A[0],l=l||A[1]),E=p.pop();E;E=p.pop()){var M=o.slice(E.reStart+E.open.length);this.debug("setting tail",o,E),M=M.replace(/((?:\\{2}){0,64})(\\?)\|/g,(function(t,e,n){return n||(n="\\"),e+e+n+"|"})),this.debug("tail=%j\n   %s",M,M,E,o);var C="*"===E.type?c:"?"===E.type?a:"\\"+E.type;l=!0,o=o.slice(0,E.reStart)+C+"\\("+M}x(),h&&(o+="\\\\");var T=!1;switch(o.charAt(0)){case".":case"[":case"(":T=!0}for(var k=f.length-1;k>-1;k--){var R=f[k],$=o.slice(0,R.reStart),N=o.slice(R.reStart,R.reEnd-8),L=o.slice(R.reEnd-8,R.reEnd),_=o.slice(R.reEnd);L+=_;var Z=$.split("(").length-1,B=_;for(w=0;w<Z;w++)B=B.replace(/\)[+*?]?/,"");var P="";""===(_=B)&&e!==g&&(P="$"),o=$+N+_+P+L}if(""!==o&&l&&(o="(?=.)"+o),T&&(o=b+o),e===g)return[o,l];if(!l)return t.replace(/\\(.)/g,"$1");var I=n.nocase?"i":"";try{var D=new RegExp("^"+o+"$",I)}catch(t){return new RegExp("$.")}return D._glob=t,D._src=o,D};var g={};p.makeRe=function(t,e){return new f(t,e||{}).makeRe()},f.prototype.makeRe=function(){if(this.regexp||!1===this.regexp)return this.regexp;var t=this.set;if(!t.length)return this.regexp=!1,this.regexp;var e=this.options,n=e.noglobstar?c:e.dot?"(?:(?!(?:\\/|^)(?:\\.{1,2})($|\\/)).)*?":"(?:(?!(?:\\/|^)\\.).)*?",r=e.nocase?"i":"",o=t.map((function(t){return t.map((function(t){return t===i?n:"string"==typeof t?t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&"):t._src})).join("\\/")})).join("|");o="^(?:"+o+")$",this.negate&&(o="^(?!"+o+").*$");try{this.regexp=new RegExp(o,r)}catch(t){this.regexp=!1}return this.regexp},p.match=function(t,e,n){var r=new f(e,n=n||{});return t=t.filter((function(t){return r.match(t)})),r.options.nonull&&!t.length&&t.push(e),t},f.prototype.match=function(t,e){if(this.debug("match",t,this.pattern),this.comment)return!1;if(this.empty)return""===t;if("/"===t&&e)return!0;var n=this.options;"/"!==r.sep&&(t=t.split(r.sep).join("/")),t=t.split(l),this.debug(this.pattern,"split",t);var i,o,s=this.set;for(this.debug(this.pattern,"set",s),o=t.length-1;o>=0&&!(i=t[o]);o--);for(o=0;o<s.length;o++){var a=s[o],c=t;if(n.matchBase&&1===a.length&&(c=[i]),this.matchOne(c,a,e))return!!n.flipNegate||!this.negate}return!n.flipNegate&&this.negate},f.prototype.matchOne=function(t,e,n){var r=this.options;this.debug("matchOne",{this:this,file:t,pattern:e}),this.debug("matchOne",t.length,e.length);for(var o=0,s=0,a=t.length,c=e.length;o<a&&s<c;o++,s++){this.debug("matchOne loop");var u,l=e[s],h=t[o];if(this.debug(e,l,h),!1===l)return!1;if(l===i){this.debug("GLOBSTAR",[e,l,h]);var p=o,f=s+1;if(f===c){for(this.debug("** at the end");o<a;o++)if("."===t[o]||".."===t[o]||!r.dot&&"."===t[o].charAt(0))return!1;return!0}for(;p<a;){var d=t[p];if(this.debug("\nglobstar while",t,p,e,f,d),this.matchOne(t.slice(p),e.slice(f),n))return this.debug("globstar found match!",p,a,d),!0;if("."===d||".."===d||!r.dot&&"."===d.charAt(0)){this.debug("dot detected!",t,p,e,f);break}this.debug("globstar swallow a segment, and continue"),p++}return!(!n||(this.debug("\n>>> no match, partial?",t,p,e,f),p!==a))}if("string"==typeof l?(u=r.nocase?h.toLowerCase()===l.toLowerCase():h===l,this.debug("string match",l,h,u)):(u=h.match(l),this.debug("pattern match",l,h,u)),!u)return!1}if(o===a&&s===c)return!0;if(o===a)return n;if(s===c)return o===a-1&&""===t[o];throw new Error("wtf?")}},38:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var r=n(379),i=n.n(r),o=n(348);i()(o.Z,{insert:"head",singleton:!1});const s=o.Z.locals||{}},467:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});var r=n(379),i=n.n(r),o=n(960);i()(o.Z,{insert:"head",singleton:!1});const s=o.Z.locals||{}},379:(t,e,n)=>{"use strict";var r,i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),o=[];function s(t){for(var e=-1,n=0;n<o.length;n++)if(o[n].identifier===t){e=n;break}return e}function a(t,e){for(var n={},r=[],i=0;i<t.length;i++){var a=t[i],c=e.base?a[0]+e.base:a[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var h=s(l),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==h?(o[h].references++,o[h].updater(p)):o.push({identifier:l,updater:g(p,e),references:1}),r.push(l)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var s=i(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var u,l=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function h(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function p(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var f=null,d=0;function g(t,e){var n,r,i;if(e.singleton){var o=d++;n=f||(f=c(e)),r=h.bind(null,n,o,!1),i=h.bind(null,n,o,!0)}else n=c(e),r=p.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=a(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=s(n[r]);o[i].references--}for(var c=a(t,e),u=0;u<n.length;u++){var l=s(n[u]);0===o[l].references&&(o[l].updater(),o.splice(l,1))}n=c}}}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{"use strict";n(38),n(467);const t=n(978);n(171),t.greet("english"),console.log({name:"biryani",price:200}),console.log({name:"food1",price:100}),console.log({name:"food2",price:100})})()})();