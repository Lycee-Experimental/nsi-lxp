(self.webpackChunk_basthon_basthon_notebook=self.webpackChunk_basthon_basthon_notebook||[]).push([[4670],{74670:(e,n,t)=>{!function(e){"use strict";e.defineMode("jinja2",(function(){var e=["and","as","block","endblock","by","cycle","debug","else","elif","extends","filter","endfilter","firstof","do","for","endfor","if","endif","ifchanged","endifchanged","ifequal","endifequal","ifnotequal","set","raw","endraw","endifnotequal","in","include","load","not","now","or","parsed","regroup","reversed","spaceless","call","endcall","macro","endmacro","endspaceless","ssi","templatetag","openblock","closeblock","openvariable","closevariable","without","context","openbrace","closebrace","opencomment","closecomment","widthratio","url","with","endwith","get_current_language","trans","endtrans","noop","blocktrans","endblocktrans","get_available_languages","get_current_language_bidi","pluralize","autoescape","endautoescape"],n=/^[+\-*&%=<>!?|~^]/,t=/^[:\[\(\{]/,i=["true","false"],a=/^(\d[+\-\*\/])?\d+(\.\d+)?/;function r(r,o){var s=r.peek();if(o.incomment)return r.skipTo("#}")?(r.eatWhile(/\#|}/),o.incomment=!1):r.skipToEnd(),"comment";if(o.intag){if(o.operator){if(o.operator=!1,r.match(i))return"atom";if(r.match(a))return"number"}if(o.sign){if(o.sign=!1,r.match(i))return"atom";if(r.match(a))return"number"}if(o.instring)return s==o.instring&&(o.instring=!1),r.next(),"string";if("'"==s||'"'==s)return o.instring=s,r.next(),"string";if(o.inbraces>0&&")"==s)r.next(),o.inbraces--;else if("("==s)r.next(),o.inbraces++;else if(o.inbrackets>0&&"]"==s)r.next(),o.inbrackets--;else if("["==s)r.next(),o.inbrackets++;else{if(!o.lineTag&&(r.match(o.intag+"}")||r.eat("-")&&r.match(o.intag+"}")))return o.intag=!1,"tag";if(r.match(n))return o.operator=!0,"operator";if(r.match(t))o.sign=!0;else{if(1==r.column()&&o.lineTag&&r.match(e))return"keyword";if(r.eat(" ")||r.sol()){if(r.match(e))return"keyword";if(r.match(i))return"atom";if(r.match(a))return"number";r.sol()&&r.next()}else r.next()}}return"variable"}if(r.eat("{")){if(r.eat("#"))return o.incomment=!0,r.skipTo("#}")?(r.eatWhile(/\#|}/),o.incomment=!1):r.skipToEnd(),"comment";if(s=r.eat(/\{|%/))return o.intag=s,o.inbraces=0,o.inbrackets=0,"{"==s&&(o.intag="}"),r.eat("-"),"tag"}else if(r.eat("#")){if("#"==r.peek())return r.skipToEnd(),"comment";if(!r.eol())return o.intag=!0,o.lineTag=!0,o.inbraces=0,o.inbrackets=0,"tag"}r.next()}return e=new RegExp("(("+e.join(")|(")+"))\\b"),i=new RegExp("(("+i.join(")|(")+"))\\b"),{startState:function(){return{tokenize:r,inbrackets:0,inbraces:0}},token:function(e,n){var t=n.tokenize(e,n);return e.eol()&&n.lineTag&&!n.instring&&0==n.inbraces&&0==n.inbrackets&&(n.intag=!1,n.lineTag=!1),t},blockCommentStart:"{#",blockCommentEnd:"#}",lineComment:"##"}})),e.defineMIME("text/jinja2","jinja2")}(t(4631))}}]);
//# sourceMappingURL=4670.1aab20bdbc8589479389.js.map