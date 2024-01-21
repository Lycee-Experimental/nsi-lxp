(function(){"use strict";var t=this;function n(t){return"string"==typeof t}function e(t,n,e){return t.call.apply(t.bind,arguments)}function r(t,n,e){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(e,r),t.apply(n,e)}}return function(){return t.apply(n,arguments)}}function o(t,n,i){return(o=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?e:r).apply(null,arguments)}function i(t){var n=it;function e(){}e.prototype=n.prototype,t.G=n.prototype,t.prototype=new e,t.prototype.constructor=t,t.F=function(t,e,r){for(var o=Array(arguments.length-2),i=2;i<arguments.length;i++)o[i-2]=arguments[i];return n.prototype[e].apply(t,o)}}var a=String.prototype.trim?function(t){return t.trim()}:function(t){return t.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function u(t,n){return-1!=t.indexOf(n)}function s(t,n){return t<n?-1:t>n?1:0}var c,f=Array.prototype.indexOf?function(t,n,e){return Array.prototype.indexOf.call(t,n,e)}:function(t,e,r){if(r=null==r?0:0>r?Math.max(0,t.length+r):r,n(t))return n(e)&&1==e.length?t.indexOf(e,r):-1;for(;r<t.length;r++)if(r in t&&t[r]===e)return r;return-1},l=Array.prototype.forEach?function(t,n,e){Array.prototype.forEach.call(t,n,e)}:function(t,e,r){for(var o=t.length,i=n(t)?t.split(""):t,a=0;a<o;a++)a in i&&e.call(r,i[a],a,t)},h=Array.prototype.filter?function(t,n,e){return Array.prototype.filter.call(t,n,e)}:function(t,e,r){for(var o=t.length,i=[],a=0,u=n(t)?t.split(""):t,s=0;s<o;s++)if(s in u){var c=u[s];e.call(r,c,s,t)&&(i[a++]=c)}return i},p=Array.prototype.reduce?function(t,n,e,r){return r&&(n=o(n,r)),Array.prototype.reduce.call(t,n,e)}:function(t,n,e,r){var o=e;return l(t,(function(e,i){o=n.call(r,o,e,i,t)})),o},d=Array.prototype.some?function(t,n,e){return Array.prototype.some.call(t,n,e)}:function(t,e,r){for(var o=t.length,i=n(t)?t.split(""):t,a=0;a<o;a++)if(a in i&&e.call(r,i[a],a,t))return!0;return!1};t:{var g=t.navigator;if(g){var v=g.userAgent;if(v){c=v;break t}}c=""}var y,w,b=u(c,"Opera")||u(c,"OPR"),m=u(c,"Trident")||u(c,"MSIE"),E=u(c,"Edge"),N=u(c,"Gecko")&&!(u(c.toLowerCase(),"webkit")&&!u(c,"Edge"))&&!(u(c,"Trident")||u(c,"MSIE"))&&!u(c,"Edge"),x=u(c.toLowerCase(),"webkit")&&!u(c,"Edge");function S(){var n=t.document;return n?n.documentMode:void 0}t:{var T="",A=(w=c,N?/rv\:([^\);]+)(\)|;)/.exec(w):E?/Edge\/([\d\.]+)/.exec(w):m?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(w):x?/WebKit\/(\S+)/.exec(w):b?/(?:Version)[ \/]?(\S+)/.exec(w):void 0);if(A&&(T=A?A[1]:""),m){var I=S();if(null!=I&&I>parseFloat(T)){y=String(I);break t}}y=T}var O={};function k(t){if(!O[t]){for(var n=0,e=a(String(y)).split("."),r=a(String(t)).split("."),o=Math.max(e.length,r.length),i=0;0==n&&i<o;i++){var u=e[i]||"",c=r[i]||"",f=/(\d*)(\D*)/g,l=/(\d*)(\D*)/g;do{var h=f.exec(u)||["","",""],p=l.exec(c)||["","",""];if(0==h[0].length&&0==p[0].length)break;n=s(0==h[1].length?0:parseInt(h[1],10),0==p[1].length?0:parseInt(p[1],10))||s(0==h[2].length,0==p[2].length)||s(h[2],p[2])}while(0==n)}O[t]=0<=n}}var D=t.document,P=D&&m?S()||("CSS1Compat"==D.compatMode?parseInt(y,10):5):void 0,R=m&&!(9<=Number(P)),C=m&&!(8<=Number(P));function _(t,n,e,r){this.a=t,this.nodeName=e,this.nodeValue=r,this.nodeType=2,this.parentNode=this.ownerElement=n}function j(t,n){var e=C&&"href"==n.nodeName?t.getAttribute(n.nodeName,2):n.nodeValue;return new _(n,t,n.nodeName,e)}function M(t){var n=null;if(1==(e=t.nodeType)&&(n=null==(n=null==(n=t.textContent)||null==n?t.innerText:n)||null==n?"":n),"string"!=typeof n)if(R&&"title"==t.nodeName.toLowerCase()&&1==e)n=t.text;else if(9==e||1==e){t=9==e?t.documentElement:t.firstChild;var e=0,r=[];for(n="";t;){do{1!=t.nodeType&&(n+=t.nodeValue),R&&"title"==t.nodeName.toLowerCase()&&(n+=t.text),r[e++]=t}while(t=t.firstChild);for(;e&&!(t=r[--e].nextSibling););}}else n=t.nodeValue;return""+n}function B(t,n,e){if(null===n)return!0;try{if(!t.getAttribute)return!1}catch(t){return!1}return C&&"class"==n&&(n="className"),null==e?!!t.getAttribute(n):t.getAttribute(n,2)==e}function U(t,e,r,o,i){return(R?L:F).call(null,t,e,n(r)?r:null,n(o)?o:null,i||new z)}function L(t,n,e,r,o){if(t instanceof Ct||8==t.b||e&&null===t.b){var i=n.all;if(!i)return o;if("*"!=(t=X(t))&&!(i=n.getElementsByTagName(t)))return o;if(e){for(var a=[],u=0;n=i[u++];)B(n,e,r)&&a.push(n);i=a}for(u=0;n=i[u++];)"*"==t&&"!"==n.tagName||Z(o,n);return o}return H(t,n,e,r,o),o}function F(t,n,e,r,o){return n.getElementsByName&&r&&"name"==e&&!m?(n=n.getElementsByName(r),l(n,(function(n){t.a(n)&&Z(o,n)}))):n.getElementsByClassName&&r&&"class"==e?(n=n.getElementsByClassName(r),l(n,(function(n){n.className==r&&t.a(n)&&Z(o,n)}))):t instanceof St?H(t,n,e,r,o):n.getElementsByTagName&&(n=n.getElementsByTagName(t.f()),l(n,(function(t){B(t,e,r)&&Z(o,t)}))),o}function V(t,n,e,r,o){var i;if((t instanceof Ct||8==t.b||e&&null===t.b)&&(i=n.childNodes)){var a=X(t);return"*"==a||(i=h(i,(function(t){return t.tagName&&t.tagName.toLowerCase()==a})),i)?(e&&(i=h(i,(function(t){return B(t,e,r)}))),l(i,(function(t){"*"==a&&("!"==t.tagName||"*"==a&&1!=t.nodeType)||Z(o,t)})),o):o}return Y(t,n,e,r,o)}function Y(t,n,e,r,o){for(n=n.firstChild;n;n=n.nextSibling)B(n,e,r)&&t.a(n)&&Z(o,n);return o}function H(t,n,e,r,o){for(n=n.firstChild;n;n=n.nextSibling)B(n,e,r)&&t.a(n)&&Z(o,n),H(t,n,e,r,o)}function X(t){if(t instanceof St){if(8==t.b)return"!";if(null===t.b)return"*"}return t.f()}function $(t,n){if(!t||!n)return!1;if(t.contains&&1==n.nodeType)return t==n||t.contains(n);if(void 0!==t.compareDocumentPosition)return t==n||!!(16&t.compareDocumentPosition(n));for(;n&&t!=n;)n=n.parentNode;return n==t}function G(n,e){if(n==e)return 0;if(n.compareDocumentPosition)return 2&n.compareDocumentPosition(e)?1:-1;if(m&&!(9<=Number(P))){if(9==n.nodeType)return-1;if(9==e.nodeType)return 1}if("sourceIndex"in n||n.parentNode&&"sourceIndex"in n.parentNode){var r=1==n.nodeType,o=1==e.nodeType;if(r&&o)return n.sourceIndex-e.sourceIndex;var i=n.parentNode,a=e.parentNode;return i==a?W(n,e):!r&&$(i,e)?-1*K(n,e):!o&&$(a,n)?K(e,n):(r?n.sourceIndex:i.sourceIndex)-(o?e.sourceIndex:a.sourceIndex)}return(r=(o=9==n.nodeType?n:n.ownerDocument||n.document).createRange()).selectNode(n),r.collapse(!0),(o=o.createRange()).selectNode(e),o.collapse(!0),r.compareBoundaryPoints(t.Range.START_TO_END,o)}function K(t,n){var e=t.parentNode;if(e==n)return-1;for(var r=n;r.parentNode!=e;)r=r.parentNode;return W(r,t)}function W(t,n){for(var e=n;e=e.previousSibling;)if(e==t)return-1;return 1}function z(){this.b=this.a=null,this.l=0}function q(t){this.node=t,this.a=this.b=null}function J(t,n){if(!t.a)return n;if(!n.a)return t;for(var e=t.a,r=n.a,o=null,i=null,a=0;e&&r;){i=e.node;var u=r.node;i==u||i instanceof _&&u instanceof _&&i.a==u.a?(i=e,e=e.a,r=r.a):0<G(e.node,r.node)?(i=r,r=r.a):(i=e,e=e.a),(i.b=o)?o.a=i:t.a=i,o=i,a++}for(i=e||r;i;)i.b=o,o=o.a=i,a++,i=i.a;return t.b=o,t.l=a,t}function Q(t,n){var e=new q(n);e.a=t.a,t.b?t.a.b=e:t.a=t.b=e,t.a=e,t.l++}function Z(t,n){var e=new q(n);e.b=t.b,t.a?t.b.a=e:t.a=t.b=e,t.b=e,t.l++}function tt(t){return(t=t.a)?t.node:null}function nt(t){return(t=tt(t))?M(t):""}function et(t,n){return new rt(t,!!n)}function rt(t,n){this.f=t,this.b=(this.c=n)?t.b:t.a,this.a=null}function ot(t){var n=t.b;if(null==n)return null;var e=t.a=n;return t.b=t.c?n.b:n.a,e.node}function it(t){this.i=t,this.b=this.g=!1,this.f=null}function at(t){return"\n  "+t.toString().split("\n").join("\n  ")}function ut(t,n){t.g=n}function st(t,n){t.b=n}function ct(t,n){var e=t.a(n);return e instanceof z?+nt(e):+e}function ft(t,n){var e=t.a(n);return e instanceof z?nt(e):""+e}function lt(t,n){var e=t.a(n);return e instanceof z?!!e.l:!!e}function ht(t,n,e){it.call(this,t.i),this.c=t,this.h=n,this.o=e,this.g=n.g||e.g,this.b=n.b||e.b,this.c==yt&&(e.b||e.g||4==e.i||0==e.i||!n.f?n.b||n.g||4==n.i||0==n.i||!e.f||(this.f={name:e.f.name,s:n}):this.f={name:n.f.name,s:e})}function pt(t,n,e,r,o){var i;if(n=n.a(r),e=e.a(r),n instanceof z&&e instanceof z){for(r=ot(n=et(n));r;r=ot(n))for(i=ot(o=et(e));i;i=ot(o))if(t(M(r),M(i)))return!0;return!1}if(n instanceof z||e instanceof z){n instanceof z?(o=n,r=e):(o=e,r=n);for(var a=typeof r,u=ot(i=et(o));u;u=ot(i)){switch(a){case"number":u=+M(u);break;case"boolean":u=!!M(u);break;case"string":u=M(u);break;default:throw Error("Illegal primitive type for comparison.")}if(o==n&&t(u,r)||o==e&&t(r,u))return!0}return!1}return o?"boolean"==typeof n||"boolean"==typeof e?t(!!n,!!e):"number"==typeof n||"number"==typeof e?t(+n,+e):t(n,e):t(+n,+e)}function dt(t,n,e,r){this.a=t,this.w=n,this.i=e,this.m=r}!N&&!m||m&&9<=Number(P)||N&&k("1.9.1"),m&&k("9"),i(ht),ht.prototype.a=function(t){return this.c.m(this.h,this.o,t)},ht.prototype.toString=function(){return"Binary Expression: "+this.c+at(this.h)+at(this.o)},dt.prototype.toString=function(){return this.a};var gt={};function vt(t,n,e,r){if(gt.hasOwnProperty(t))throw Error("Binary operator already created: "+t);return t=new dt(t,n,e,r),gt[t.toString()]=t}vt("div",6,1,(function(t,n,e){return ct(t,e)/ct(n,e)})),vt("mod",6,1,(function(t,n,e){return ct(t,e)%ct(n,e)})),vt("*",6,1,(function(t,n,e){return ct(t,e)*ct(n,e)})),vt("+",5,1,(function(t,n,e){return ct(t,e)+ct(n,e)})),vt("-",5,1,(function(t,n,e){return ct(t,e)-ct(n,e)})),vt("<",4,2,(function(t,n,e){return pt((function(t,n){return t<n}),t,n,e)})),vt(">",4,2,(function(t,n,e){return pt((function(t,n){return t>n}),t,n,e)})),vt("<=",4,2,(function(t,n,e){return pt((function(t,n){return t<=n}),t,n,e)})),vt(">=",4,2,(function(t,n,e){return pt((function(t,n){return t>=n}),t,n,e)}));var yt=vt("=",3,2,(function(t,n,e){return pt((function(t,n){return t==n}),t,n,e,!0)}));function wt(t,n,e){this.a=t,this.b=n||1,this.f=e||1}function bt(t,n){if(n.a.length&&4!=t.i)throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");it.call(this,t.i),this.c=t,this.h=n,this.g=t.g,this.b=t.b}function mt(t,n){if(n.length<t.A)throw Error("Function "+t.j+" expects at least"+t.A+" arguments, "+n.length+" given");if(null!==t.v&&n.length>t.v)throw Error("Function "+t.j+" expects at most "+t.v+" arguments, "+n.length+" given");t.B&&l(n,(function(n,e){if(4!=n.i)throw Error("Argument "+e+" to function "+t.j+" is not of type Nodeset: "+n)})),it.call(this,t.i),this.h=t,this.c=n,ut(this,t.g||d(n,(function(t){return t.g}))),st(this,t.D&&!n.length||t.C&&!!n.length||d(n,(function(t){return t.b})))}function Et(t,n,e,r,o,i,a,u,s){this.j=t,this.i=n,this.g=e,this.D=r,this.C=o,this.m=i,this.A=a,this.v=void 0!==u?u:a,this.B=!!s}vt("!=",3,2,(function(t,n,e){return pt((function(t,n){return t!=n}),t,n,e,!0)})),vt("and",2,2,(function(t,n,e){return lt(t,e)&&lt(n,e)})),vt("or",1,2,(function(t,n,e){return lt(t,e)||lt(n,e)})),i(bt),bt.prototype.a=function(t){return t=this.c.a(t),Ft(this.h,t)},bt.prototype.toString=function(){return"Filter:"+at(this.c)+at(this.h)},i(mt),mt.prototype.a=function(t){return this.h.m.apply(null,function(t){return Array.prototype.concat.apply(Array.prototype,arguments)}(t,this.c))},mt.prototype.toString=function(){var t="Function: "+this.h;if(this.c.length){var n=p(this.c,(function(t,n){return t+at(n)}),"Arguments:");t+=at(n)}return t},Et.prototype.toString=function(){return this.j};var Nt={};function xt(t,n,e,r,o,i,a,u){if(Nt.hasOwnProperty(t))throw Error("Function already created: "+t+".");Nt[t]=new Et(t,n,e,r,!1,o,i,a,u)}function St(t,n){switch(this.h=t,this.c=void 0!==n?n:null,this.b=null,t){case"comment":this.b=8;break;case"text":this.b=3;break;case"processing-instruction":this.b=7;break;case"node":break;default:throw Error("Unexpected argument")}}function Tt(t){return"comment"==t||"text"==t||"processing-instruction"==t||"node"==t}function At(t){this.b=t,this.a=0}xt("boolean",2,!1,!1,(function(t,n){return lt(n,t)}),1),xt("ceiling",1,!1,!1,(function(t,n){return Math.ceil(ct(n,t))}),1),xt("concat",3,!1,!1,(function(t,n){return p(function(t,n,e){return 2>=arguments.length?Array.prototype.slice.call(t,n):Array.prototype.slice.call(t,n,e)}(arguments,1),(function(n,e){return n+ft(e,t)}),"")}),2,null),xt("contains",2,!1,!1,(function(t,n,e){return u(ft(n,t),ft(e,t))}),2),xt("count",1,!1,!1,(function(t,n){return n.a(t).l}),1,1,!0),xt("false",2,!1,!1,(function(){return!1}),0),xt("floor",1,!1,!1,(function(t,n){return Math.floor(ct(n,t))}),1),xt("id",4,!1,!1,(function(t,e){var r=9==(o=t.a).nodeType?o:o.ownerDocument,o=ft(e,t).split(/\s+/),i=[];l(o,(function(t){!(t=function(t){if(R){var e=r.all[t];if(e){if(e.nodeType&&t==e.id)return e;if(e.length)return function(t,e){var r;t:{r=t.length;for(var o=n(t)?t.split(""):t,i=0;i<r;i++)if(i in o&&e.call(void 0,o[i],i,t)){r=i;break t}r=-1}return 0>r?null:n(t)?t.charAt(r):t[r]}(e,(function(n){return t==n.id}))}return null}return r.getElementById(t)}(t))||0<=f(i,t)||i.push(t)})),i.sort(G);var a=new z;return l(i,(function(t){Z(a,t)})),a}),1),xt("lang",2,!1,!1,(function(){return!1}),1),xt("last",1,!0,!1,(function(t){if(1!=arguments.length)throw Error("Function last expects ()");return t.f}),0),xt("local-name",3,!1,!0,(function(t,n){var e=n?tt(n.a(t)):t.a;return e?e.localName||e.nodeName.toLowerCase():""}),0,1,!0),xt("name",3,!1,!0,(function(t,n){var e=n?tt(n.a(t)):t.a;return e?e.nodeName.toLowerCase():""}),0,1,!0),xt("namespace-uri",3,!0,!1,(function(){return""}),0,1,!0),xt("normalize-space",3,!1,!0,(function(t,n){return(n?ft(n,t):M(t.a)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")}),0,1),xt("not",2,!1,!1,(function(t,n){return!lt(n,t)}),1),xt("number",1,!1,!0,(function(t,n){return n?ct(n,t):+M(t.a)}),0,1),xt("position",1,!0,!1,(function(t){return t.b}),0),xt("round",1,!1,!1,(function(t,n){return Math.round(ct(n,t))}),1),xt("starts-with",2,!1,!1,(function(t,n,e){return n=ft(n,t),t=ft(e,t),0==n.lastIndexOf(t,0)}),2),xt("string",3,!1,!0,(function(t,n){return n?ft(n,t):M(t.a)}),0,1),xt("string-length",1,!1,!0,(function(t,n){return(n?ft(n,t):M(t.a)).length}),0,1),xt("substring",3,!1,!1,(function(t,n,e,r){if(e=ct(e,t),isNaN(e)||1/0==e||-1/0==e)return"";if(r=r?ct(r,t):1/0,isNaN(r)||-1/0===r)return"";e=Math.round(e)-1;var o=Math.max(e,0);return t=ft(n,t),1/0==r?t.substring(o):t.substring(o,e+Math.round(r))}),2,3),xt("substring-after",3,!1,!1,(function(t,n,e){return n=ft(n,t),t=ft(e,t),-1==(e=n.indexOf(t))?"":n.substring(e+t.length)}),2),xt("substring-before",3,!1,!1,(function(t,n,e){return n=ft(n,t),t=ft(e,t),-1==(t=n.indexOf(t))?"":n.substring(0,t)}),2),xt("sum",1,!1,!1,(function(t,n){for(var e=et(n.a(t)),r=0,o=ot(e);o;o=ot(e))r+=+M(o);return r}),1,1,!0),xt("translate",3,!1,!1,(function(t,n,e,r){n=ft(n,t),e=ft(e,t);var o=ft(r,t);for(t={},r=0;r<e.length;r++){var i=e.charAt(r);i in t||(t[i]=o.charAt(r))}for(e="",r=0;r<n.length;r++)e+=(i=n.charAt(r))in t?t[i]:i;return e}),3),xt("true",2,!1,!1,(function(){return!0}),0),St.prototype.a=function(t){return null===this.b||this.b==t.nodeType},St.prototype.f=function(){return this.h},St.prototype.toString=function(){var t="Kind Test: "+this.h;return null===this.c||(t+=at(this.c)),t};var It=/\$?(?:(?![0-9-\.])(?:\*|[\w-\.]+):)?(?![0-9-\.])(?:\*|[\w-\.]+)|\/\/|\.\.|::|\d+(?:\.\d*)?|\.\d+|"[^"]*"|'[^']*'|[!<>]=|\s+|./g,Ot=/^\s/;function kt(t,n){return t.b[t.a+(n||0)]}function Dt(t){return t.b[t.a++]}function Pt(t){return t.b.length<=t.a}function Rt(t){it.call(this,3),this.c=t.substring(1,t.length-1)}function Ct(t,n){var e;this.j=t.toLowerCase(),e="*"==this.j?"*":"http://www.w3.org/1999/xhtml",this.c=n?n.toLowerCase():e}function _t(t,n){if(it.call(this,t.i),this.h=t,this.c=n,this.g=t.g,this.b=t.b,1==this.c.length){var e=this.c[0];e.u||e.c!=$t||"*"!=(e=e.o).f()&&(this.f={name:e.f(),s:null})}}function jt(){it.call(this,4)}function Mt(){it.call(this,4)}function Bt(t){return"/"==t||"//"==t}function Ut(t){it.call(this,4),this.c=t,ut(this,d(this.c,(function(t){return t.g}))),st(this,d(this.c,(function(t){return t.b})))}function Lt(t,n){this.a=t,this.b=!!n}function Ft(t,n,e){for(e=e||0;e<t.a.length;e++)for(var r,o=t.a[e],i=et(n),a=n.l,u=0;r=ot(i);u++){var s=t.b?a-u:u+1;if("number"==typeof(r=o.a(new wt(r,s,a))))s=s==r;else if("string"==typeof r||"boolean"==typeof r)s=!!r;else{if(!(r instanceof z))throw Error("Predicate.evaluate returned an unexpected type.");s=0<r.l}if(!s){if(r=(s=i).f,!(f=s.a))throw Error("Next must be called at least once before remove.");var c=f.b,f=f.a;c?c.a=f:r.a=f,f?f.b=c:r.b=c,r.l--,s.a=null}}return n}function Vt(t,n,e,r){it.call(this,4),this.c=t,this.o=n,this.h=e||new Lt([]),this.u=!!r,n=0<(n=this.h).a.length?n.a[0].f:null,t.b&&n&&(t=n.name,t=R?t.toLowerCase():t,this.f={name:t,s:n.s});t:{for(t=this.h,n=0;n<t.a.length;n++)if((e=t.a[n]).g||1==e.i||0==e.i){t=!0;break t}t=!1}this.g=t}function Yt(t,n,e,r){this.j=t,this.f=n,this.a=e,this.b=r}i(Rt),Rt.prototype.a=function(){return this.c},Rt.prototype.toString=function(){return"Literal: "+this.c},Ct.prototype.a=function(t){var n=t.nodeType;return!(1!=n&&2!=n||(n=void 0!==t.localName?t.localName:t.nodeName,"*"!=this.j&&this.j!=n.toLowerCase()||"*"!=this.c&&this.c!=(t.namespaceURI?t.namespaceURI.toLowerCase():"http://www.w3.org/1999/xhtml")))},Ct.prototype.f=function(){return this.j},Ct.prototype.toString=function(){return"Name Test: "+("http://www.w3.org/1999/xhtml"==this.c?"":this.c+":")+this.j},i(_t),i(jt),jt.prototype.a=function(t){var n=new z;return 9==(t=t.a).nodeType?Z(n,t):Z(n,t.ownerDocument),n},jt.prototype.toString=function(){return"Root Helper Expression"},i(Mt),Mt.prototype.a=function(t){var n=new z;return Z(n,t.a),n},Mt.prototype.toString=function(){return"Context Helper Expression"},_t.prototype.a=function(t){var n=this.h.a(t);if(!(n instanceof z))throw Error("Filter expression must evaluate to nodeset.");for(var e=0,r=(t=this.c).length;e<r&&n.l;e++){var o,i=t[e],a=et(n,i.c.a);if(i.g||i.c!=Wt)if(i.g||i.c!=qt)for(o=ot(a),n=i.a(new wt(o));null!=(o=ot(a));)n=J(n,o=i.a(new wt(o)));else o=ot(a),n=i.a(new wt(o));else{for(o=ot(a);(n=ot(a))&&(!o.contains||o.contains(n))&&8&n.compareDocumentPosition(o);o=n);n=i.a(new wt(o))}}return n},_t.prototype.toString=function(){var t;if(t="Path Expression:"+at(this.h),this.c.length){var n=p(this.c,(function(t,n){return t+at(n)}),"Steps:");t+=at(n)}return t},i(Ut),Ut.prototype.a=function(t){var n=new z;return l(this.c,(function(e){if(!((e=e.a(t))instanceof z))throw Error("Path expression must evaluate to NodeSet.");n=J(n,e)})),n},Ut.prototype.toString=function(){return p(this.c,(function(t,n){return t+at(n)}),"Union Expression:")},Lt.prototype.toString=function(){return p(this.a,(function(t,n){return t+at(n)}),"Predicates:")},i(Vt),Vt.prototype.a=function(t){var n=t.a,e=null,r=null,o=null,i=0;if((e=this.f)&&(r=e.name,o=e.s?ft(e.s,t):null,i=1),this.u)if(this.g||this.c!=Gt)if(n=ot(t=et(new Vt(Kt,new St("node")).a(t))))for(e=this.m(n,r,o,i);null!=(n=ot(t));)e=J(e,this.m(n,r,o,i));else e=new z;else e=U(this.o,n,r,o),e=Ft(this.h,e,i);else e=this.m(t.a,r,o,i);return e},Vt.prototype.m=function(t,n,e,r){return t=this.c.f(this.o,t,n,e),Ft(this.h,t,r)},Vt.prototype.toString=function(){var t;if(t="Step:"+at("Operator: "+(this.u?"//":"/")),this.c.j&&(t+=at("Axis: "+this.c)),t+=at(this.o),this.h.a.length){var n=p(this.h.a,(function(t,n){return t+at(n)}),"Predicates:");t+=at(n)}return t},Yt.prototype.toString=function(){return this.j};var Ht={};function Xt(t,n,e,r){if(Ht.hasOwnProperty(t))throw Error("Axis already created: "+t);return n=new Yt(t,n,e,!!r),Ht[t]=n}Xt("ancestor",(function(t,n){for(var e=new z,r=n;r=r.parentNode;)t.a(r)&&Q(e,r);return e}),!0),Xt("ancestor-or-self",(function(t,n){var e=new z,r=n;do{t.a(r)&&Q(e,r)}while(r=r.parentNode);return e}),!0);var $t=Xt("attribute",(function(t,n){var e=new z;if("style"==(i=t.f())&&R&&n.style)return Z(e,new _(n.style,n,"style",n.style.cssText)),e;var r=n.attributes;if(r)if(t instanceof St&&null===t.b||"*"==i)for(var o,i=0;o=r[i];i++)R?o.nodeValue&&Z(e,j(n,o)):Z(e,o);else(o=r.getNamedItem(i))&&(R?o.nodeValue&&Z(e,j(n,o)):Z(e,o));return e}),!1),Gt=Xt("child",(function(t,e,r,o,i){return(R?V:Y).call(null,t,e,n(r)?r:null,n(o)?o:null,i||new z)}),!1,!0);Xt("descendant",U,!1,!0);var Kt=Xt("descendant-or-self",(function(t,n,e,r){var o=new z;return B(n,e,r)&&t.a(n)&&Z(o,n),U(t,n,e,r,o)}),!1,!0),Wt=Xt("following",(function(t,n,e,r){var o=new z;do{for(var i=n;i=i.nextSibling;)B(i,e,r)&&t.a(i)&&Z(o,i),o=U(t,i,e,r,o)}while(n=n.parentNode);return o}),!1,!0);Xt("following-sibling",(function(t,n){for(var e=new z,r=n;r=r.nextSibling;)t.a(r)&&Z(e,r);return e}),!1),Xt("namespace",(function(){return new z}),!1);var zt=Xt("parent",(function(t,n){var e=new z;if(9==n.nodeType)return e;if(2==n.nodeType)return Z(e,n.ownerElement),e;var r=n.parentNode;return t.a(r)&&Z(e,r),e}),!1),qt=Xt("preceding",(function(t,n,e,r){var o=new z,i=[];do{i.unshift(n)}while(n=n.parentNode);for(var a=1,u=i.length;a<u;a++){var s=[];for(n=i[a];n=n.previousSibling;)s.unshift(n);for(var c=0,f=s.length;c<f;c++)B(n=s[c],e,r)&&t.a(n)&&Z(o,n),o=U(t,n,e,r,o)}return o}),!0,!0);Xt("preceding-sibling",(function(t,n){for(var e=new z,r=n;r=r.previousSibling;)t.a(r)&&Q(e,r);return e}),!0);var Jt=Xt("self",(function(t,n){var e=new z;return t.a(n)&&Z(e,n),e}),!1);function Qt(t){it.call(this,1),this.c=t,this.g=t.g,this.b=t.b}function Zt(t){it.call(this,1),this.c=t}function tn(t,n){this.a=t,this.b=n}function nn(t){for(var n,e=[];;){en(t,"Missing right hand side of binary expression."),n=fn(t);var r=Dt(t.a);if(!r)break;var o=(r=gt[r]||null)&&r.w;if(!o){t.a.a--;break}for(;e.length&&o<=e[e.length-1].w;)n=new ht(e.pop(),e.pop(),n);e.push(n,r)}for(;e.length;)n=new ht(e.pop(),e.pop(),n);return n}function en(t,n){if(Pt(t.a))throw Error(n)}function rn(t,n){var e=Dt(t.a);if(e!=n)throw Error("Bad token, expected: "+n+" got: "+e)}function on(t){if(")"!=(t=Dt(t.a)))throw Error("Bad token: "+t)}function an(t){if(2>(t=Dt(t.a)).length)throw Error("Unclosed literal string");return new Rt(t)}function un(t){var n,e,r=[];if(Bt(kt(t.a))){if(n=Dt(t.a),e=kt(t.a),"/"==n&&(Pt(t.a)||"."!=e&&".."!=e&&"@"!=e&&"*"!=e&&!/(?![0-9])[\w]/.test(e)))return new jt;e=new jt,en(t,"Missing next location step."),n=sn(t,n),r.push(n)}else{t:{switch(e=(n=kt(t.a)).charAt(0)){case"$":throw Error("Variable reference not allowed in HTML XPath");case"(":Dt(t.a),n=nn(t),en(t,'unclosed "("'),rn(t,")");break;case'"':case"'":n=an(t);break;default:if(isNaN(+n)){if(Tt(n)||!/(?![0-9])[\w]/.test(e)||"("!=kt(t.a,1)){n=null;break t}for(n=Dt(t.a),n=Nt[n]||null,Dt(t.a),e=[];")"!=kt(t.a)&&(en(t,"Missing function argument list."),e.push(nn(t)),","==kt(t.a));)Dt(t.a);en(t,"Unclosed function argument list."),on(t),n=new mt(n,e)}else n=new Zt(+Dt(t.a))}"["==kt(t.a)&&(n=new bt(n,e=new Lt(cn(t))))}if(n){if(!Bt(kt(t.a)))return n;e=n}else n=sn(t,"/"),e=new Mt,r.push(n)}for(;Bt(kt(t.a));)n=Dt(t.a),en(t,"Missing next location step."),n=sn(t,n),r.push(n);return new _t(e,r)}function sn(t,n){var e,r,o,i;if("/"!=n&&"//"!=n)throw Error('Step op should be "/" or "//"');if("."==kt(t.a))return r=new Vt(Jt,new St("node")),Dt(t.a),r;if(".."==kt(t.a))return r=new Vt(zt,new St("node")),Dt(t.a),r;if("@"==kt(t.a))i=$t,Dt(t.a),en(t,"Missing attribute name");else if("::"==kt(t.a,1)){if(!/(?![0-9])[\w]/.test(kt(t.a).charAt(0)))throw Error("Bad token: "+Dt(t.a));if(e=Dt(t.a),!(i=Ht[e]||null))throw Error("No axis with name: "+e);Dt(t.a),en(t,"Missing node name")}else i=Gt;if(e=kt(t.a),!/(?![0-9])[\w\*]/.test(e.charAt(0)))throw Error("Bad token: "+Dt(t.a));if("("==kt(t.a,1)){if(!Tt(e))throw Error("Invalid node type: "+e);if(!Tt(e=Dt(t.a)))throw Error("Invalid type name: "+e);rn(t,"("),en(t,"Bad nodetype");var a=null;'"'!=(o=kt(t.a).charAt(0))&&"'"!=o||(a=an(t)),en(t,"Bad nodetype"),on(t),e=new St(e,a)}else if(-1==(o=(e=Dt(t.a)).indexOf(":")))e=new Ct(e);else{var u;if("*"==(a=e.substring(0,o)))u="*";else if(!(u=t.b(a)))throw Error("Namespace prefix not declared: "+a);e=new Ct(e=e.substr(o+1),u)}return o=new Lt(cn(t),i.a),r||new Vt(i,e,o,"//"==n)}function cn(t){for(var n=[];"["==kt(t.a);){Dt(t.a),en(t,"Missing predicate expression.");var e=nn(t);n.push(e),en(t,"Unclosed predicate expression."),rn(t,"]")}return n}function fn(t){if("-"==kt(t.a))return Dt(t.a),new Qt(fn(t));var n=un(t);if("|"!=kt(t.a))t=n;else{for(n=[n];"|"==Dt(t.a);)en(t,"Missing next union location path."),n.push(un(t));t.a.a--,t=new Ut(n)}return t}function ln(t){switch(t.nodeType){case 1:return function(t,n){var e=Array.prototype.slice.call(arguments,1);return function(){var n=e.slice();return n.push.apply(n,arguments),t.apply(this,n)}}(pn,t);case 9:return ln(t.documentElement);case 11:case 10:case 6:case 12:return hn;default:return t.parentNode?ln(t.parentNode):hn}}function hn(){return null}function pn(t,n){if(t.prefix==n)return t.namespaceURI||"http://www.w3.org/1999/xhtml";var e=t.getAttributeNode("xmlns:"+n);return e&&e.specified?e.value||null:t.parentNode&&9!=t.parentNode.nodeType?pn(t.parentNode,n):null}function dn(t,n){if(!t.length)throw Error("Empty XPath expression.");var e=function(t){t=t.match(It);for(var n=0;n<t.length;n++)Ot.test(t[n])&&t.splice(n,1);return new At(t)}(t);if(Pt(e))throw Error("Invalid XPath expression.");n?"function"==function(t){var n=typeof t;if("object"==n){if(!t)return"null";if(t instanceof Array)return"array";if(t instanceof Object)return n;var e=Object.prototype.toString.call(t);if("[object Window]"==e)return"object";if("[object Array]"==e||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array";if("[object Function]"==e||void 0!==t.call&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==n&&void 0===t.call)return"object";return n}(n)||(n=o(n.lookupNamespaceURI,n)):n=function(){return null};var r=nn(new tn(e,n));if(!Pt(e))throw Error("Bad token: "+Dt(e));this.evaluate=function(t,n){return new gn(r.a(new wt(t)),n)}}function gn(t,n){if(0==n)if(t instanceof z)n=4;else if("string"==typeof t)n=2;else if("number"==typeof t)n=1;else{if("boolean"!=typeof t)throw Error("Unexpected evaluation result.");n=3}if(2!=n&&1!=n&&3!=n&&!(t instanceof z))throw Error("value could not be converted to the specified type");var e;switch(this.resultType=n,n){case 2:this.stringValue=t instanceof z?nt(t):""+t;break;case 1:this.numberValue=t instanceof z?+nt(t):+t;break;case 3:this.booleanValue=t instanceof z?0<t.l:!!t;break;case 4:case 5:case 6:case 7:var r=et(t);e=[];for(var o=ot(r);o;o=ot(r))e.push(o instanceof _?o.a:o);this.snapshotLength=t.l,this.invalidIteratorState=!1;break;case 8:case 9:r=tt(t),this.singleNodeValue=r instanceof _?r.a:r;break;default:throw Error("Unknown XPathResult type.")}var i=0;this.iterateNext=function(){if(4!=n&&5!=n)throw Error("iterateNext called with wrong result type");return i>=e.length?null:e[i++]},this.snapshotItem=function(t){if(6!=n&&7!=n)throw Error("snapshotItem called with wrong result type");return t>=e.length||0>t?null:e[t]}}function vn(t){this.lookupNamespaceURI=ln(t)}function yn(n,e){var r=n||t,o=r.Document&&r.Document.prototype||r.document;o.evaluate&&!e||(r.XPathResult=gn,o.evaluate=function(t,n,e,r){return new dn(t,e).evaluate(n,r)},o.createExpression=function(t,n){return new dn(t,n)},o.createNSResolver=function(t){return new vn(t)})}i(Qt),Qt.prototype.a=function(t){return-ct(this.c,t)},Qt.prototype.toString=function(){return"Unary Expression: -"+at(this.c)},i(Zt),Zt.prototype.a=function(){return this.c},Zt.prototype.toString=function(){return"Number: "+this.c},gn.ANY_TYPE=0,gn.NUMBER_TYPE=1,gn.STRING_TYPE=2,gn.BOOLEAN_TYPE=3,gn.UNORDERED_NODE_ITERATOR_TYPE=4,gn.ORDERED_NODE_ITERATOR_TYPE=5,gn.UNORDERED_NODE_SNAPSHOT_TYPE=6,gn.ORDERED_NODE_SNAPSHOT_TYPE=7,gn.ANY_UNORDERED_NODE_TYPE=8,gn.FIRST_ORDERED_NODE_TYPE=9;var wn,bn=["wgxpath","install"],mn=t;bn[0]in mn||!mn.execScript||mn.execScript("var "+bn[0]);for(;bn.length&&(wn=bn.shift());)bn.length||void 0===yn?mn=mn[wn]?mn[wn]:mn[wn]={}:mn[wn]=yn}).call(this);