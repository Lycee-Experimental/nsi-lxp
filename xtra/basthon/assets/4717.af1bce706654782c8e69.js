(self.webpackChunk_basthon_basthon_notebook=self.webpackChunk_basthon_basthon_notebook||[]).push([[4717],{34717:(e,t,n)=>{!function(e){"use strict";e.defineMode("eiffel",(function(){function e(e){for(var t={},n=0,r=e.length;n<r;++n)t[e[n]]=!0;return t}var t=e(["note","across","when","variant","until","unique","undefine","then","strip","select","retry","rescue","require","rename","reference","redefine","prefix","once","old","obsolete","loop","local","like","is","inspect","infix","include","if","frozen","from","external","export","ensure","end","elseif","else","do","creation","create","check","alias","agent","separate","invariant","inherit","indexing","feature","expanded","deferred","class","Void","True","Result","Precursor","False","Current","create","attached","detachable","as","and","implies","not","or"]),n=e([":=","and then","and","or","<<",">>"]);function r(e,t){if(e.eatSpace())return null;var n,r,a,i=e.next();return'"'==i||"'"==i?function(e,t,n){return n.tokenize.push(e),e(t,n)}((n=i,r="string",function(e,t){for(var i,o=!1;null!=(i=e.next());){if(i==n&&(a||!o)){t.tokenize.pop();break}o=!o&&"%"==i}return r}),e,t):"-"==i&&e.eat("-")?(e.skipToEnd(),"comment"):":"==i&&e.eat("=")?"operator":/[0-9]/.test(i)?(e.eatWhile(/[xXbBCc0-9\.]/),e.eat(/[\?\!]/),"ident"):/[a-zA-Z_0-9]/.test(i)?(e.eatWhile(/[a-zA-Z_0-9]/),e.eat(/[\?\!]/),"ident"):/[=+\-\/*^%<>~]/.test(i)?(e.eatWhile(/[=+\-\/*^%<>~]/),"operator"):null}return{startState:function(){return{tokenize:[r]}},token:function(e,r){var a=r.tokenize[r.tokenize.length-1](e,r);if("ident"==a){var i=e.current();a=t.propertyIsEnumerable(e.current())?"keyword":n.propertyIsEnumerable(e.current())?"operator":/^[A-Z][A-Z_0-9]*$/g.test(i)?"tag":/^0[bB][0-1]+$/g.test(i)||/^0[cC][0-7]+$/g.test(i)||/^0[xX][a-fA-F0-9]+$/g.test(i)||/^([0-9]+\.[0-9]*)|([0-9]*\.[0-9]+)$/g.test(i)||/^[0-9]+$/g.test(i)?"number":"variable"}return a},lineComment:"--"}})),e.defineMIME("text/x-eiffel","eiffel")}(n(4631))}}]);
//# sourceMappingURL=4717.af1bce706654782c8e69.js.map