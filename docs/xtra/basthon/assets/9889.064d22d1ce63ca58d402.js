(self.webpackChunk_basthon_basthon_notebook=self.webpackChunk_basthon_basthon_notebook||[]).push([[9889],{19889:(e,t,n)=>{!function(e){"use strict";e.defineMode("haxe",(function(e,t){var n=e.indentUnit;function r(e){return{type:e,style:"keyword"}}var a,i=r("keyword a"),o=r("keyword b"),l=r("keyword c"),u=r("operator"),c={type:"atom",style:"atom"},f={type:"attribute",style:"attribute"},s=r("typedef"),d={if:i,while:i,else:o,do:o,try:o,return:l,break:l,continue:l,new:l,throw:l,var:r("var"),inline:f,static:f,using:r("import"),public:f,private:f,cast:r("cast"),import:r("import"),macro:r("macro"),function:r("function"),catch:r("catch"),untyped:r("untyped"),callback:r("cb"),for:r("for"),switch:r("switch"),case:r("case"),default:r("default"),in:u,never:r("property_access"),trace:r("trace"),class:s,abstract:s,enum:s,interface:s,typedef:s,extends:s,implements:s,dynamic:s,true:c,false:c,null:c},p=/[+\-*&%=<>!?|]/;function m(e,t,n){return t.tokenize=n,n(e,t)}function v(e,t){for(var n,r=!1;null!=(n=e.next());){if(n==t&&!r)return!0;r=!r&&"\\"==n}}function b(e,t,n){return s=e,a=n,t}function h(e,t){var n,r=e.next();if('"'==r||"'"==r)return m(e,t,(n=r,function(e,t){return v(e,n)&&(t.tokenize=h),b("string","string")}));if(/[\[\]{}\(\),;\:\.]/.test(r))return b(r);if("0"==r&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),b("number","number");if(/\d/.test(r)||"-"==r&&e.eat(/\d/))return e.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/),b("number","number");if(t.reAllowed&&"~"==r&&e.eat(/\//))return v(e,"/"),e.eatWhile(/[gimsu]/),b("regexp","string-2");if("/"==r)return e.eat("*")?m(e,t,y):e.eat("/")?(e.skipToEnd(),b("comment","comment")):(e.eatWhile(p),b("operator",null,e.current()));if("#"==r)return e.skipToEnd(),b("conditional","meta");if("@"==r)return e.eat(/:/),e.eatWhile(/[\w_]/),b("metadata","meta");if(p.test(r))return e.eatWhile(p),b("operator",null,e.current());if(/[A-Z]/.test(r))return e.eatWhile(/[\w_<>]/),b("type","variable-3",a=e.current());e.eatWhile(/[\w_]/);var a=e.current(),i=d.propertyIsEnumerable(a)&&d[a];return i&&t.kwAllowed?b(i.type,i.style,a):b("variable","variable",a)}function y(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize=h;break}r="*"==n}return b("comment","comment")}var x={atom:!0,number:!0,variable:!0,string:!0,regexp:!0};function k(e,t,n,r,a,i){this.indented=e,this.column=t,this.type=n,this.prev=a,this.info=i,null!=r&&(this.align=r)}function w(e,t){for(var n=e.localVars;n;n=n.next)if(n.name==t)return!0}function g(e,t){if(/[a-z]/.test(t.charAt(0)))return!1;for(var n=e.importedtypes.length,r=0;r<n;r++)if(e.importedtypes[r]==t)return!0}function V(e){for(var t=A.state,n=t.importedtypes;n;n=n.next)if(n.name==e)return;t.importedtypes={name:e,next:t.importedtypes}}var A={state:null,column:null,marked:null,cc:null};function S(){for(var e=arguments.length-1;e>=0;e--)A.cc.push(arguments[e])}function _(){return S.apply(null,arguments),!0}function E(e,t){for(var n=t;n;n=n.next)if(n.name==e)return!0;return!1}function W(e){var t=A.state;if(t.context){if(A.marked="def",E(e,t.localVars))return;t.localVars={name:e,next:t.localVars}}else if(t.globalVars){if(E(e,t.globalVars))return;t.globalVars={name:e,next:t.globalVars}}}var z={name:"this",next:null};function C(){A.state.context||(A.state.localVars=z),A.state.context={prev:A.state.context,vars:A.state.localVars}}function M(){A.state.localVars=A.state.context.vars,A.state.context=A.state.context.prev}function T(e,t){var n=function(){var n=A.state;n.lexical=new k(n.indented,A.stream.column(),e,null,n.lexical,t)};return n.lex=!0,n}function Z(){var e=A.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function I(e){return function t(n){return n==e?_():";"==e?S():_(t)}}function O(e){return"@"==e?_(F):"var"==e?_(T("vardef"),N,I(";"),Z):"keyword a"==e?_(T("form"),P,O,Z):"keyword b"==e?_(T("form"),O,Z):"{"==e?_(T("}"),C,L,Z,M):";"==e?_():"attribute"==e?_(B):"function"==e?_(Y):"for"==e?_(T("form"),I("("),T(")"),R,I(")"),Z,O,Z):"variable"==e?_(T("stat"),G):"switch"==e?_(T("form"),P,T("}","switch"),I("{"),L,Z,Z):"case"==e?_(P,I(":")):"default"==e?_(I(":")):"catch"==e?_(T("form"),C,I("("),re,I(")"),O,Z,M):"import"==e?_($,I(";")):"typedef"==e?_(q):S(T("stat"),P,I(";"),Z)}function P(e){return x.hasOwnProperty(e)||"type"==e?_(j):"function"==e?_(Y):"keyword c"==e?_(D):"("==e?_(T(")"),D,I(")"),Z,j):"operator"==e?_(P):"["==e?_(T("]"),K(D,"]"),Z,j):"{"==e?_(T("}"),K(J,"}"),Z,j):_()}function D(e){return e.match(/[;\}\)\],]/)?S():S(P)}function j(e,t){return"operator"==e&&/\+\+|--/.test(t)?_(j):"operator"==e||":"==e?_(P):";"!=e?"("==e?_(T(")"),K(P,")"),Z,j):"."==e?_(H,j):"["==e?_(T("]"),P,I("]"),Z,j):void 0:void 0}function B(e){return"attribute"==e?_(B):"function"==e?_(Y):"var"==e?_(N):void 0}function F(e){return":"==e||"variable"==e?_(F):"("==e?_(T(")"),K(U,")"),Z,O):void 0}function U(e){if("variable"==e)return _()}function $(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(V(t),_()):"variable"==e||"property"==e||"."==e||"*"==t?_($):void 0}function q(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(V(t),_()):"type"==e&&/[A-Z]/.test(t.charAt(0))?_():void 0}function G(e){return":"==e?_(Z,O):S(j,I(";"),Z)}function H(e){if("variable"==e)return A.marked="property",_()}function J(e){if("variable"==e&&(A.marked="property"),x.hasOwnProperty(e))return _(I(":"),P)}function K(e,t){function n(r){return","==r?_(e,n):r==t?_():_(I(t))}return function(r){return r==t?_():S(e,n)}}function L(e){return"}"==e?_():S(O,L)}function N(e,t){return"variable"==e?(W(t),_(ee,Q)):_()}function Q(e,t){return"="==t?_(P,Q):","==e?_(N):void 0}function R(e,t){return"variable"==e?(W(t),_(X,P)):S()}function X(e,t){if("in"==t)return _()}function Y(e,t){return"variable"==e||"type"==e?(W(t),_(Y)):"new"==t?_(Y):"("==e?_(T(")"),C,K(re,")"),Z,ee,O,M):void 0}function ee(e){if(":"==e)return _(te)}function te(e){return"type"==e||"variable"==e?_():"{"==e?_(T("}"),K(ne,"}"),Z):void 0}function ne(e){if("variable"==e)return _(ee)}function re(e,t){if("variable"==e)return W(t),_(ee)}return M.lex=!0,Z.lex=!0,{startState:function(e){var r={tokenize:h,reAllowed:!0,kwAllowed:!0,cc:[],lexical:new k((e||0)-n,0,"block",!1),localVars:t.localVars,importedtypes:["Int","Float","String","Void","Std","Bool","Dynamic","Array"],context:t.localVars&&{vars:t.localVars},indented:0};return t.globalVars&&"object"==typeof t.globalVars&&(r.globalVars=t.globalVars),r},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation()),e.eatSpace())return null;var n=t.tokenize(e,t);return"comment"==s?n:(t.reAllowed=!("operator"!=s&&"keyword c"!=s&&!s.match(/^[\[{}\(,;:]$/)),t.kwAllowed="."!=s,function(e,t,n,r,a){var i=e.cc;for(A.state=e,A.stream=a,A.marked=null,A.cc=i,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((i.length?i.pop():O)(n,r)){for(;i.length&&i[i.length-1].lex;)i.pop()();return A.marked?A.marked:"variable"==n&&w(e,r)?"variable-2":"variable"==n&&g(e,r)?"variable-3":t}}(t,n,s,a,e))},indent:function(e,t){if(e.tokenize!=h)return 0;var r=t&&t.charAt(0),a=e.lexical;"stat"==a.type&&"}"==r&&(a=a.prev);var i=a.type,o=r==i;return"vardef"==i?a.indented+4:"form"==i&&"{"==r?a.indented:"stat"==i||"form"==i?a.indented+n:"switch"!=a.info||o?a.align?a.column+(o?0:1):a.indented+(o?0:n):a.indented+(/^(?:case|default)\b/.test(t)?n:2*n)},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}})),e.defineMIME("text/x-haxe","haxe"),e.defineMode("hxml",(function(){return{startState:function(){return{define:!1,inString:!1}},token:function(e,t){var n=e.peek(),r=e.sol();if("#"==n)return e.skipToEnd(),"comment";if(r&&"-"==n){var a="variable-2";return e.eat(/-/),"-"==e.peek()&&(e.eat(/-/),a="keyword a"),"D"==e.peek()&&(e.eat(/[D]/),a="keyword c",t.define=!0),e.eatWhile(/[A-Z]/i),a}return n=e.peek(),0==t.inString&&"'"==n&&(t.inString=!0,e.next()),1==t.inString?(e.skipTo("'")||e.skipToEnd(),"'"==e.peek()&&(e.next(),t.inString=!1),"string"):(e.next(),null)},lineComment:"#"}})),e.defineMIME("text/x-hxml","hxml")}(n(4631))}}]);
//# sourceMappingURL=9889.064d22d1ce63ca58d402.js.map