(self.webpackChunk_basthon_basthon_notebook=self.webpackChunk_basthon_basthon_notebook||[]).push([[1149],{31149:(t,e,n)=>{!function(t){"use strict";t.defineMode("shell",(function(){var e={};function n(t,n){for(var r=0;r<n.length;r++)e[n[r]]=t}var r=["true","false"],s=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],i=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];function o(t,n){if(t.eatSpace())return null;var r,s=t.sol(),i=t.next();if("\\"===i)return t.next(),null;if("'"===i||'"'===i||"`"===i)return n.tokens.unshift(u(i,"`"===i?"quote":"string")),l(t,n);if("#"===i)return s&&t.eat("!")?(t.skipToEnd(),"meta"):(t.skipToEnd(),"comment");if("$"===i)return n.tokens.unshift(a),l(t,n);if("+"===i||"="===i)return"operator";if("-"===i)return t.eat("-"),t.eatWhile(/\w/),"attribute";if("<"==i){if(t.match("<<"))return"operator";var o=t.match(/^<-?\s*['"]?([^'"]*)['"]?/);if(o)return n.tokens.unshift((r=o[1],function(t,e){return t.sol()&&t.string==r&&e.tokens.shift(),t.skipToEnd(),"string-2"})),"string-2"}if(/\d/.test(i)&&(t.eatWhile(/\d/),t.eol()||!/\w/.test(t.peek())))return"number";t.eatWhile(/[\w-]/);var f=t.current();return"="===t.peek()&&/\w+/.test(f)?"def":e.hasOwnProperty(f)?e[f]:null}function u(t,e){var n="("==t?")":"{"==t?"}":t;return function(r,s){for(var i,o=!1;null!=(i=r.next());){if(i===n&&!o){s.tokens.shift();break}if("$"===i&&!o&&"'"!==t&&r.peek()!=n){o=!0,r.backUp(1),s.tokens.unshift(a);break}if(!o&&t!==n&&i===t)return s.tokens.unshift(u(t,e)),l(r,s);if(!o&&/['"]/.test(i)&&!/['"]/.test(t)){s.tokens.unshift(f(i,"string")),r.backUp(1);break}o=!o&&"\\"===i}return e}}function f(t,e){return function(n,r){return r.tokens[0]=u(t,e),n.next(),l(n,r)}}t.registerHelper("hintWords","shell",r.concat(s,i)),n("atom",r),n("keyword",s),n("builtin",i);var a=function(t,e){e.tokens.length>1&&t.eat("$");var n=t.next();return/['"({]/.test(n)?(e.tokens[0]=u(n,"("==n?"quote":"{"==n?"def":"string"),l(t,e)):(/\d/.test(n)||t.eatWhile(/\w/),e.tokens.shift(),"def")};function l(t,e){return(e.tokens[0]||o)(t,e)}return{startState:function(){return{tokens:[]}},token:function(t,e){return l(t,e)},closeBrackets:"()[]{}''\"\"``",lineComment:"#",fold:"brace"}})),t.defineMIME("text/x-sh","shell"),t.defineMIME("application/x-sh","shell")}(n(4631))}}]);
//# sourceMappingURL=1149.c2bb4c342924b4f5abdf.js.map