!function(t,e,i,a){var s,n,r,h,l="'Times New Roman',Times,STIXGeneral,serif",o={".MJXp-script":{"font-size":".8em"},".MJXp-right":{"-webkit-transform-origin":"right","-moz-transform-origin":"right","-ms-transform-origin":"right","-o-transform-origin":"right","transform-origin":"right"},".MJXp-bold":{"font-weight":"bold"},".MJXp-italic":{"font-style":"italic"},".MJXp-scr":{"font-family":"MathJax_Script,"+l},".MJXp-frak":{"font-family":"MathJax_Fraktur,"+l},".MJXp-sf":{"font-family":"MathJax_SansSerif,"+l},".MJXp-cal":{"font-family":"MathJax_Caligraphic,"+l},".MJXp-mono":{"font-family":"MathJax_Typewriter,"+l},".MJXp-largeop":{"font-size":"150%"},".MJXp-largeop.MJXp-int":{"vertical-align":"-.2em"},".MJXp-math":{display:"inline-block","line-height":"1.2","text-indent":"0","font-family":l,"white-space":"nowrap","border-collapse":"collapse"},".MJXp-display":{display:"block","text-align":"center",margin:"1em 0"},".MJXp-math span":{display:"inline-block"},".MJXp-box":{display:"block!important","text-align":"center"},".MJXp-box:after":{content:'" "'},".MJXp-rule":{display:"block!important","margin-top":".1em"},".MJXp-char":{display:"block!important"},".MJXp-mo":{margin:"0 .15em"},".MJXp-mfrac":{margin:"0 .125em","vertical-align":".25em"},".MJXp-denom":{display:"inline-table!important",width:"100%"},".MJXp-denom > *":{display:"table-row!important"},".MJXp-surd":{"vertical-align":"top"},".MJXp-surd > *":{display:"block!important"},".MJXp-script-box > * ":{display:"table!important",height:"50%"},".MJXp-script-box > * > *":{display:"table-cell!important","vertical-align":"top"},".MJXp-script-box > *:last-child > *":{"vertical-align":"bottom"},".MJXp-script-box > * > * > *":{display:"block!important"},".MJXp-mphantom":{visibility:"hidden"},".MJXp-munderover, .MJXp-munder":{display:"inline-table!important"},".MJXp-over":{display:"inline-block!important","text-align":"center"},".MJXp-over > *":{display:"block!important"},".MJXp-munderover > *, .MJXp-munder > *":{display:"table-row!important"},".MJXp-mtable":{"vertical-align":".25em",margin:"0 .125em"},".MJXp-mtable > *":{display:"inline-table!important","vertical-align":"middle"},".MJXp-mtr":{display:"table-row!important"},".MJXp-mtd":{display:"table-cell!important","text-align":"center",padding:".5em 0 0 .5em"},".MJXp-mtr > .MJXp-mtd:first-child":{"padding-left":0},".MJXp-mtr:first-child > .MJXp-mtd":{"padding-top":0},".MJXp-mlabeledtr":{display:"table-row!important"},".MJXp-mlabeledtr > .MJXp-mtd:first-child":{"padding-left":0},".MJXp-mlabeledtr:first-child > .MJXp-mtd":{"padding-top":0},".MJXp-merror":{"background-color":"#FFFF88",color:"#CC0000",border:"1px solid #CC0000",padding:"1px 3px","font-style":"normal","font-size":"90%"}};!function(){for(var t=0;t<10;t++){var e="scaleX(."+t+")";o[".MJXp-scale"+t]={"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,"-o-transform":e,transform:e}}}();var d=1e6,m="V",p="H";a.Augment({settings:e.config.menuSettings,config:{styles:o},hideProcessedMath:!1,maxStretchyParts:1e3,Config:function(){this.require||(this.require=[]),this.SUPER(arguments).Config.call(this);var t=this.settings;t.scale&&(this.config.scale=t.scale),this.require.push(MathJax.OutputJax.extensionDir+"/MathEvents.js")},Startup:function(){n=MathJax.Extension.MathEvents.Event,r=MathJax.Extension.MathEvents.Touch,h=MathJax.Extension.MathEvents.Hover,this.ContextMenu=n.ContextMenu,this.Mousedown=n.AltContextMenu,this.Mouseover=h.Mouseover,this.Mouseout=h.Mouseout,this.Mousemove=h.Mousemove;var e=i.addElement(document.body,"div",{style:{width:"5in"}});return this.pxPerInch=e.offsetWidth/5,e.parentNode.removeChild(e),t.Styles(this.config.styles,["InitializePHTML",this])},InitializePHTML:function(){},preTranslate:function(t){var a,s,h,l,o,d,m=t.jax[this.id],p=m.length;for(a=0;a<p;a++)(s=m[a]).parentNode&&((h=s.previousSibling)&&String(h.className).match(/^MathJax(_PHTML)?(_Display)?( MathJax_Process(ing|ed))?$/)&&h.parentNode.removeChild(h),(d=s.MathJax.elementJax)&&(d.PHTML={display:"block"===d.root.Get("display")},l=o=i.Element("span",{className:"MathJax_PHTML",id:d.inputID+"-Frame",isMathJax:!0,jaxID:this.id,oncontextmenu:n.Menu,onmousedown:n.Mousedown,onmouseover:n.Mouseover,onmouseout:n.Mouseout,onmousemove:n.Mousemove,onclick:n.Click,ondblclick:n.DblClick,onkeydown:n.Keydown,tabIndex:e.getTabOrder(d)}),e.Browser.noContextMenu&&(l.ontouchstart=r.start,l.ontouchend=r.end),d.PHTML.display&&(o=i.Element("div",{className:"MathJax_PHTML_Display"})).appendChild(l),o.className+=" MathJax_Processing",s.parentNode.insertBefore(o,s)))},Translate:function(t,e){if(t.parentNode){var i=t.MathJax.elementJax,a=i.root,s=document.getElementById(i.inputID+"-Frame"),n=i.PHTML.display?s.parentNode:s;this.initPHTML(a,s);try{a.toPreviewHTML(s)}catch(t){if(t.restart)for(;s.firstChild;)s.removeChild(s.firstChild);throw t}n.className=n.className.split(/ /)[0],this.hideProcessedMath&&(n.className+=" MathJax_Processed",t.MathJax.preview&&(i.PHTML.preview=t.MathJax.preview,delete t.MathJax.preview))}},postTranslate:function(t){var e=t.jax[this.id];if(this.hideProcessedMath)for(var i=0,a=e.length;i<a;i++){var s=e[i];if(s&&s.MathJax.elementJax){s.previousSibling.className=s.previousSibling.className.split(/ /)[0];var n=s.MathJax.elementJax.PHTML;n.preview&&(n.preview.innerHTML="",s.MathJax.preview=n.preview,delete n.preview)}}},getJaxFromMath:function(t){t.parentNode.className.match(/MathJax_PHTML_Display/)&&(t=t.parentNode);do{t=t.nextSibling}while(t&&"script"!==t.nodeName.toLowerCase());return e.getJaxFor(t)},getHoverSpan:function(t,e){return t.root.PHTMLspanElement()},getHoverBBox:function(t,e,i){var a=t.root.PHTML,s=t.PHTML.outerEm,n={w:a.w*s,h:a.h*s,d:a.d*s};return a.width&&(n.width=a.width),n},Zoom:function(t,e,i,a,s){e.className="MathJax",this.idPostfix="-zoom",t.root.toPHTML(e,e),this.idPostfix="",e.style.position="absolute",width||(i.style.position="absolute");var r=e.offsetWidth,h=e.offsetHeight,l=i.offsetHeight,o=i.offsetWidth;return 0===o&&(o=i.parentNode.offsetWidth),e.style.position=i.style.position="",{Y:-n.getBBox(e).h,mW:o,mH:l,zW:r,zH:h}},initPHTML:function(t,e){},Remove:function(t){var e=document.getElementById(t.inputID+"-Frame");e&&(t.PHTML.display&&(e=e.parentNode),e.parentNode.removeChild(e)),delete t.PHTML},ID:0,idPostfix:"",GetID:function(){return this.ID++,this.ID},VARIANT:{bold:"MJXp-bold",italic:"MJXp-italic","bold-italic":"MJXp-bold MJXp-italic",script:"MJXp-scr","bold-script":"MJXp-scr MJXp-bold",fraktur:"MJXp-frak","bold-fraktur":"MJXp-frak MJXp-bold",monospace:"MJXp-mono","sans-serif":"MJXp-sf","-tex-caligraphic":"MJXp-cal"},MATHSPACE:{veryverythinmathspace:1/18,verythinmathspace:2/18,thinmathspace:3/18,mediummathspace:4/18,thickmathspace:5/18,verythickmathspace:6/18,veryverythickmathspace:7/18,negativeveryverythinmathspace:-1/18,negativeverythinmathspace:-2/18,negativethinmathspace:-3/18,negativemediummathspace:-4/18,negativethickmathspace:-5/18,negativeverythickmathspace:-6/18,negativeveryverythickmathspace:-7/18,thin:.08,medium:.1,thick:.15,infinity:d},TeX:{x_height:.430554},pxPerInch:72,em:16,DELIMITERS:{"(":{dir:m},"{":{dir:m,w:.58},"[":{dir:m},"|":{dir:m,w:.275},")":{dir:m},"}":{dir:m,w:.58},"]":{dir:m},"/":{dir:m},"\\":{dir:m},"∣":{dir:m,w:.275},"∥":{dir:m,w:.55},"⌊":{dir:m,w:.5},"⌋":{dir:m,w:.5},"⌈":{dir:m,w:.5},"⌉":{dir:m,w:.5},"⟨":{dir:m,w:.5},"⟩":{dir:m,w:.5},"↑":{dir:m,w:.65},"↓":{dir:m,w:.65},"⇑":{dir:m,w:.75},"⇓":{dir:m,w:.75},"↕":{dir:m,w:.65},"⇕":{dir:m,w:.75},"⟮":{dir:m,w:.275},"⟯":{dir:m,w:.275},"⎰":{dir:m,w:.6},"⎱":{dir:m,w:.6}},REMAPACCENT:{"⃗":"→","'":"ˋ","`":"ˊ",".":"˙","^":"ˆ","-":"ˉ","~":"˜","¯":"ˉ","°":"˚","´":"ˊ","̀":"ˋ","́":"ˊ","̂":"ˆ","̃":"˜","̄":"ˉ","̅":"ˉ","̆":"˘","̇":"˙","̈":"¨","̌":"ˇ"},REMAPACCENTUNDER:{},length2em:function(t,e){if("string"!=typeof t&&(t=t.toString()),""===t)return"";if(t===s.SIZE.NORMAL)return 1;if(t===s.SIZE.BIG)return 2;if(t===s.SIZE.SMALL)return.71;if(this.MATHSPACE[t])return this.MATHSPACE[t];var i=t.match(/^\s*([-+]?(?:\.\d+|\d+(?:\.\d*)?))?(pt|em|ex|mu|px|pc|in|mm|cm|%)?/),a=parseFloat(i[1]||"1"),n=i[2];return null==e&&(e=1),"em"===n?a:"ex"===n?a*this.TeX.x_height:"%"===n?a/100*e:"px"===n?a/this.em:"pt"===n?a/10:"pc"===n?1.2*a:"in"===n?a*this.pxPerInch/this.em:"cm"===n?a*this.pxPerInch/this.em/2.54:"mm"===n?a*this.pxPerInch/this.em/25.4:"mu"===n?a/18:a*e},Em:function(t){return Math.abs(t)<.001?"0em":t.toFixed(3).replace(/\.?0+$/,"")+"em"},arrayEntry:function(t,e){return t[Math.max(0,Math.min(e,t.length-1))]}}),MathJax.Hub.Register.StartupHook("mml Jax Ready",(function(){(s=MathJax.ElementJax.mml).mbase.Augment({toPreviewHTML:function(t,e){return this.PHTMLdefaultSpan(t,e)},PHTMLdefaultSpan:function(t,e){e||(e={}),t=this.PHTMLcreateSpan(t),this.PHTMLhandleStyle(t),this.PHTMLhandleColor(t),this.isToken&&this.PHTMLhandleToken(t);for(var i=0,a=this.data.length;i<a;i++)this.PHTMLaddChild(t,i,e);return t},PHTMLaddChild:function(t,e,a){var s=this.data[e];s?(a.childSpans&&(t=i.addElement(t,"span",{className:a.className})),s.toPreviewHTML(t),a.noBBox||(this.PHTML.w+=s.PHTML.w+s.PHTML.l+s.PHTML.r,s.PHTML.h>this.PHTML.h&&(this.PHTML.h=s.PHTML.h),s.PHTML.d>this.PHTML.d&&(this.PHTML.d=s.PHTML.d),s.PHTML.t>this.PHTML.t&&(this.PHTML.t=s.PHTML.t),s.PHTML.b>this.PHTML.b&&(this.PHTML.b=s.PHTML.b))):a.forceChild&&i.addElement(t,"span")},PHTMLstretchChild:function(t,e,i){var a=this.data[t];if(a&&a.PHTMLcanStretch("Vertical",e,i)){var s=this.PHTML,n=a.PHTML,r=n.w;a.PHTMLstretchV(e,i),s.w+=n.w-r,n.h>s.h&&(s.h=n.h),n.d>s.d&&(s.d=n.d)}},PHTMLcreateSpan:function(t){if(this.PHTML||(this.PHTML={}),this.PHTML={w:0,h:0,d:0,l:0,r:0,t:0,b:0},this.inferred)return t;"mo"===this.type&&"∫"===this.data.join("")?a.lastIsInt=!0:"mspace"===this.type&&"negativethinmathspace"===this.width||(a.lastIsInt=!1),this.PHTMLspanID||(this.PHTMLspanID=a.GetID());var e=this.id||"MJXp-Span-"+this.PHTMLspanID;return i.addElement(t,"span",{className:"MJXp-"+this.type,id:e})},PHTMLspanElement:function(){return this.PHTMLspanID?document.getElementById(this.id||"MJXp-Span-"+this.PHTMLspanID):null},PHTMLhandleToken:function(t){var e=this.getValues("mathvariant");e.mathvariant!==s.VARIANT.NORMAL&&(t.className+=" "+a.VARIANT[e.mathvariant])},PHTMLhandleStyle:function(t){this.style&&(t.style.cssText=this.style)},PHTMLhandleColor:function(t){this.mathcolor&&(t.style.color=this.mathcolor),this.mathbackground&&(t.style.backgroundColor=this.mathbackground)},PHTMLhandleScriptlevel:function(t){this.Get("scriptlevel")&&(t.className+=" MJXp-script")},PHTMLhandleText:function(t,e){for(var s,n,r=0,h=0,l=0,o=0,d=e.length;o<d;o++){n=e.charCodeAt(o),s=e.charAt(o),n>=55296&&n<56319&&(o++,n=(n-55296<<10)+(e.charCodeAt(o)-56320)+65536);var m=.7,p=.22,M=.5;n<127&&(s.match(/[A-Za-ehik-or-xz0-9]/)&&(p=0),s.match(/[A-HK-Z]/)?M=.67:s.match(/[IJ]/)&&(M=.36),s.match(/[acegm-su-z]/)?m=.45:s.match(/[ij]/)&&(m=.75),s.match(/[ijlt]/)&&(M=.28)),a.DELIMITERS[s]&&(M=a.DELIMITERS[s].w||.4),m>r&&(r=m),p>h&&(h=p),l+=M}this.CHML||(this.PHTML={}),this.PHTML={h:.9,d:.3,w:l,l:0,r:0,t:r,b:h},i.addText(t,e)},PHTMLbboxFor:function(t){return this.data[t]&&this.data[t].PHTML?this.data[t].PHTML:{w:0,h:0,d:0,l:0,r:0,t:0,b:0}},PHTMLcanStretch:function(t,e,i){if(this.isEmbellished()){var a=this.Core();if(a&&a!==this)return a.PHTMLcanStretch(t,e,i)}return!1},PHTMLstretchV:function(t,e){},PHTMLstretchH:function(t){},CoreParent:function(){for(var t=this;t&&t.isEmbellished()&&t.CoreMO()===this&&!t.isa(s.math);)t=t.Parent();return t},CoreText:function(t){if(!t)return"";if(t.isEmbellished())return t.CoreMO().data.join("");for(;(t.isa(s.mrow)||t.isa(s.TeXAtom)||t.isa(s.mstyle)||t.isa(s.mphantom))&&1===t.data.length&&t.data[0];)t=t.data[0];return t.isToken?t.data.join(""):""}}),s.chars.Augment({toPreviewHTML:function(t){var e=this.toString().replace(/[\u2061-\u2064]/g,"");this.PHTMLhandleText(t,e)}}),s.entity.Augment({toPreviewHTML:function(t){var e=this.toString().replace(/[\u2061-\u2064]/g,"");this.PHTMLhandleText(t,e)}}),s.math.Augment({toPreviewHTML:function(t){return t=this.PHTMLdefaultSpan(t),"block"===this.Get("display")&&(t.className+=" MJXp-display"),t}}),s.mo.Augment({toPreviewHTML:function(t){t=this.PHTMLdefaultSpan(t),this.PHTMLadjustAccent(t);var e=this.getValues("lspace","rspace","scriptlevel","displaystyle","largeop");if(0===e.scriptlevel?(this.PHTML.l=a.length2em(e.lspace),this.PHTML.r=a.length2em(e.rspace),t.style.marginLeft=a.Em(this.PHTML.l),t.style.marginRight=a.Em(this.PHTML.r)):(this.PHTML.l=.15,this.PHTML.r=.1),e.displaystyle&&e.largeop){var s=i.Element("span",{className:"MJXp-largeop"});s.appendChild(t.firstChild),t.appendChild(s),this.PHTML.h*=1.2,this.PHTML.d*=1.2,"∫"===this.data.join("")&&(s.className+=" MJXp-int")}return t},PHTMLadjustAccent:function(t){var e=this.CoreParent();if(e&&e.isa(s.munderover)&&1===this.CoreText(e.data[e.base]).length){var i,n=e.data[e.over],r=e.data[e.under],h=this.data.join("");n&&this===n.CoreMO()&&e.Get("accent")?i=a.REMAPACCENT[h]:r&&this===r.CoreMO()&&e.Get("accentunder")&&(i=a.REMAPACCENTUNDER[h]),i&&(h=t.innerHTML=i),h.match(/[\u02C6-\u02DC\u00A8]/)?this.PHTML.acc=-.52:"→"===h&&(this.PHTML.acc=-.15,this.PHTML.vec=!0)}},PHTMLcanStretch:function(t,e,i){if(!this.Get("stretchy"))return!1;var s=this.data.join("");if(s.length>1)return!1;var n=(s=a.DELIMITERS[s])&&s.dir===t.substr(0,1);return n&&(n=this.PHTML.h!==e||this.PHTML.d!==i||this.Get("minsize",!0)||this.Get("maxsize",!0)),n},PHTMLstretchV:function(t,e){var s=this.PHTMLspanElement(),n=this.PHTML,r=this.getValues("symmetric","maxsize","minsize");p=r.symmetric?2*Math.max(t-.25,e+.25):t+e,r.maxsize=a.length2em(r.maxsize,n.h+n.d),r.minsize=a.length2em(r.minsize,n.h+n.d);var h=(p=Math.max(r.minsize,Math.min(r.maxsize,p)))/(n.h+n.d-.3),l=i.Element("span",{style:{"font-size":a.Em(h)}});if(h>1.25){var o=Math.ceil(1.25/h*10);l.className="MJXp-right MJXp-scale"+o,l.style.marginLeft=a.Em(n.w*(o/10-1)+.07),n.w*=h*o/10}l.appendChild(s.firstChild),s.appendChild(l),r.symmetric&&(s.style.verticalAlign=a.Em(.25*(1-h)))}}),s.mspace.Augment({toPreviewHTML:function(t){t=this.PHTMLdefaultSpan(t);var e=this.getValues("height","depth","width"),i=a.length2em(e.width),s=a.length2em(e.height),n=a.length2em(e.depth),r=this.PHTML;return r.w=i,r.h=s,r.d=n,i<0&&(a.lastIsInt||(t.style.marginLeft=a.Em(i)),i=0),t.style.width=a.Em(i),t.style.height=a.Em(s+n),n&&(t.style.verticalAlign=a.Em(-n)),t}}),s.mpadded.Augment({toPreviewHTML:function(t){var e=(t=this.PHTMLdefaultSpan(t,{childSpans:!0,className:"MJXp-box",forceChild:!0})).firstChild,i=this.getValues("width","height","depth","lspace","voffset"),s=this.PHTMLdimen(i.lspace),n=0,r=0,h=s.len,l=-s.len,o=0;return""!==i.width&&((s=this.PHTMLdimen(i.width,"w",0)).pm?l+=s.len:t.style.width=a.Em(s.len)),""!==i.height&&((s=this.PHTMLdimen(i.height,"h",0)).pm||(n+=-this.PHTMLbboxFor(0).h),n+=s.len),""!==i.depth&&((s=this.PHTMLdimen(i.depth,"d",0)).pm||(r+=-this.PHTMLbboxFor(0).d,o+=-s.len),r+=s.len),""!==i.voffset&&(n-=(s=this.PHTMLdimen(i.voffset)).len,r+=s.len,o+=s.len),n&&(e.style.marginTop=a.Em(n)),r&&(e.style.marginBottom=a.Em(r)),h&&(e.style.marginLeft=a.Em(h)),l&&(e.style.marginRight=a.Em(l)),o&&(t.style.verticalAlign=a.Em(o)),t},PHTMLdimen:function(t,e,i){null==i&&(i=-d);var s=(t=String(t)).match(/width|height|depth/),n=s?this.PHTML[s[0].charAt(0)]:e?this.PHTML[e]:0;return{len:a.length2em(t,n)||0,pm:!!t.match(/^[-+]/)}}}),s.munderover.Augment({toPreviewHTML:function(t){var e=this.getValues("displaystyle","accent","accentunder","align"),n=this.data[this.base];if(!e.displaystyle&&null!=n&&(n.movablelimits||n.CoreMO().Get("movablelimits")))return(t=s.msubsup.prototype.toPreviewHTML.call(this,t)).className=t.className.replace(/munderover/,"msubsup"),t;t=this.PHTMLdefaultSpan(t,{childSpans:!0,className:"",noBBox:!0});var r=this.PHTMLbboxFor(this.over),h=this.PHTMLbboxFor(this.under),l=this.PHTMLbboxFor(this.base),o=this.PHTML,d=r.acc;if(this.data[this.over]){t.lastChild.firstChild&&(t.lastChild.firstChild.style.marginLeft=r.l=t.lastChild.firstChild.style.marginRight=r.r=0);var m=i.Element("span",{},[["span",{className:"MJXp-over"}]]);m.firstChild.appendChild(t.lastChild),t.childNodes.length>(this.data[this.under]?1:0)&&m.firstChild.appendChild(t.firstChild),this.data[this.over].PHTMLhandleScriptlevel(m.firstChild.firstChild),null!=d&&(r.vec&&(m.firstChild.firstChild.firstChild.style.fontSize="60%",r.h*=.6,r.d*=.6,r.w*=.6),d=d-r.d+.1,null!=l.t&&(d+=l.t-l.h),m.firstChild.firstChild.style.marginBottom=a.Em(d)),t.firstChild?t.insertBefore(m,t.firstChild):t.appendChild(m)}return this.data[this.under]&&(t.lastChild.firstChild&&(t.lastChild.firstChild.style.marginLeft=h.l=t.lastChild.firstChild.marginRight=h.r=0),this.data[this.under].PHTMLhandleScriptlevel(t.lastChild)),o.w=Math.max(.8*r.w,.8*h.w,l.w),o.h=.8*(r.h+r.d+(d||0))+l.h,o.d=l.d+.8*(h.h+h.d),t}}),s.msubsup.Augment({toPreviewHTML:function(t){t=this.PHTMLdefaultSpan(t,{noBBox:!0}),this.data[this.base]||(t.firstChild?t.insertBefore(i.Element("span"),t.firstChild):t.appendChild(i.Element("span")));var e=this.data[this.base],s=this.data[this.sub],n=this.data[this.sup];e||(e={bbox:{h:.8,d:.2}}),t.firstChild.style.marginRight=".05em";var r=Math.max(.4,e.PHTML.h-.4),h=Math.max(.2,e.PHTML.d+.1),l=this.PHTML;if(n&&s){var o=i.Element("span",{className:"MJXp-script-box",style:{height:a.Em(r+.8*n.PHTML.h+h+.8*s.PHTML.d),"vertical-align":a.Em(-h-.8*s.PHTML.d)}},[["span",{},[["span",{},[["span",{style:{"margin-bottom":a.Em(-(n.PHTML.d-.05))}}]]]]],["span",{},[["span",{},[["span",{style:{"margin-top":a.Em(-(n.PHTML.h-.05))}}]]]]]]);s.PHTMLhandleScriptlevel(o.firstChild),n.PHTMLhandleScriptlevel(o.lastChild),o.firstChild.firstChild.firstChild.appendChild(t.lastChild),o.lastChild.firstChild.firstChild.appendChild(t.lastChild),t.appendChild(o),l.h=Math.max(e.PHTML.h,.8*n.PHTML.h+r),l.d=Math.max(e.PHTML.d,.8*s.PHTML.d+h),l.w=e.PHTML.w+Math.max(n.PHTML.w,s.PHTML.w)+.07}else n?(t.lastChild.style.verticalAlign=a.Em(r),n.PHTMLhandleScriptlevel(t.lastChild),l.h=Math.max(e.PHTML.h,.8*n.PHTML.h+r),l.d=Math.max(e.PHTML.d,.8*n.PHTML.d-r),l.w=e.PHTML.w+n.PHTML.w+.07):s&&(t.lastChild.style.verticalAlign=a.Em(-h),s.PHTMLhandleScriptlevel(t.lastChild),l.h=Math.max(e.PHTML.h,.8*s.PHTML.h-h),l.d=Math.max(e.PHTML.d,.8*s.PHTML.d+h),l.w=e.PHTML.w+s.PHTML.w+.07);return t}}),s.mfrac.Augment({toPreviewHTML:function(t){t=this.PHTMLdefaultSpan(t,{childSpans:!0,className:"MJXp-box",forceChild:!0,noBBox:!0});var e=this.getValues("linethickness","displaystyle");e.displaystyle||(this.data[0]&&this.data[0].PHTMLhandleScriptlevel(t.firstChild),this.data[1]&&this.data[1].PHTMLhandleScriptlevel(t.lastChild));var s=i.Element("span",{className:"MJXp-box"},[["span",{className:"MJXp-denom"},[["span",{},[["span",{className:"MJXp-rule",style:{height:"1em"}}]]],["span"]]]]);s.firstChild.lastChild.appendChild(t.lastChild),t.appendChild(s);var n=this.PHTMLbboxFor(0),r=this.PHTMLbboxFor(1),h=this.PHTML;if(h.w=.8*Math.max(n.w,r.w),h.h=n.h+n.d+.1+.25,h.d=r.h+r.d-.25,h.l=h.r=.125,e.linethickness=Math.max(0,a.length2em(e.linethickness||"0",0)),e.linethickness){var l=s.firstChild.firstChild.firstChild,o=a.Em(e.linethickness);l.style.borderTop="none",l.style.borderBottom=(e.linethickness<.15?"1px":o)+" solid",l.style.margin=o+" 0",o=e.linethickness,s.style.marginTop=a.Em(3*o-1.2),t.style.verticalAlign=a.Em(1.5*o+.1),h.h+=1.5*o-.1,h.d+=1.5*o}else s.style.marginTop="-.7em";return t}}),s.msqrt.Augment({toPreviewHTML:function(t){return t=this.PHTMLdefaultSpan(t,{childSpans:!0,className:"MJXp-box",forceChild:!0,noBBox:!0}),this.PHTMLlayoutRoot(t,t.firstChild),t},PHTMLlayoutRoot:function(t,e){var s=this.PHTMLbboxFor(0),n=Math.ceil(100*(s.h+s.d+.14)),r=a.Em(14/n),h=i.Element("span",{className:"MJXp-surd"},[["span",{style:{"font-size":n+"%","margin-top":r}},["√"]]]),l=i.Element("span",{className:"MJXp-root"},[["span",{className:"MJXp-rule",style:{"border-top":".08em solid"}}]]),o=1.2/2.2*n/100;if(n>150){var d=Math.ceil(150/n*10);h.firstChild.className="MJXp-right MJXp-scale"+d,h.firstChild.style.marginLeft=a.Em(o*(d/10-1)/n*100),o=o*d/10,l.firstChild.style.borderTopWidth=a.Em(.08/Math.sqrt(d/10))}return l.appendChild(e),t.appendChild(h),t.appendChild(l),this.PHTML.h=s.h+.18,this.PHTML.d=s.d,this.PHTML.w=s.w+o,t}}),s.mroot.Augment({toPreviewHTML:function(t){t=this.PHTMLdefaultSpan(t,{childSpans:!0,className:"MJXp-box",forceChild:!0,noBBox:!0});var e=this.PHTMLbboxFor(1),s=t.removeChild(t.lastChild),n=this.PHTMLlayoutRoot(i.Element("span"),t.firstChild);s.className="MJXp-script";var r=parseInt(n.firstChild.firstChild.style.fontSize),h=r/120*.55+.8*e.d,l=r/120*-.6;return r>150&&(l*=.95*Math.ceil(150/r*10)/10),s.style.marginRight=a.Em(l),s.style.verticalAlign=a.Em(h),-l>.8*e.w&&(s.style.marginLeft=a.Em(-l-.8*e.w)),t.appendChild(s),t.appendChild(n),this.PHTML.w+=Math.max(0,.8*e.w+l),this.PHTML.h=Math.max(this.PHTML.h,.8*e.h+h),t},PHTMLlayoutRoot:s.msqrt.prototype.PHTMLlayoutRoot}),s.mfenced.Augment({toPreviewHTML:function(t){t=this.PHTMLcreateSpan(t),this.PHTMLhandleStyle(t),this.PHTMLhandleColor(t),this.addFakeNodes(),this.PHTMLaddChild(t,"open",{});for(var e=0,i=this.data.length;e<i;e++)this.PHTMLaddChild(t,"sep"+e,{}),this.PHTMLaddChild(t,e,{});this.PHTMLaddChild(t,"close",{});var a=this.PHTML.h,s=this.PHTML.d;for(this.PHTMLstretchChild("open",a,s),e=0,i=this.data.length;e<i;e++)this.PHTMLstretchChild("sep"+e,a,s),this.PHTMLstretchChild(e,a,s);return this.PHTMLstretchChild("close",a,s),t}}),s.mrow.Augment({toPreviewHTML:function(t){t=this.PHTMLdefaultSpan(t);for(var e=this.PHTML.h,i=this.PHTML.d,a=0,s=this.data.length;a<s;a++)this.PHTMLstretchChild(a,e,i);return t}}),s.mstyle.Augment({toPreviewHTML:function(t){return t=this.PHTMLdefaultSpan(t),this.PHTMLhandleScriptlevel(t),t}}),s.TeXAtom.Augment({toPreviewHTML:function(t){return(t=this.PHTMLdefaultSpan(t)).className="MJXp-mrow",t}}),s.mtable.Augment({toPreviewHTML:function(t){t=this.PHTMLdefaultSpan(t,{noBBox:!0});var e,s,n,r,h=this.getValues("columnalign","rowalign","columnspacing","rowspacing","columnwidth","equalcolumns","equalrows","columnlines","rowlines","frame","framespacing","align","width"),l=MathJax.Hub.SplitList,o=l(h.columnspacing),d=l(h.rowspacing),m=l(h.columnalign),p=l(h.rowalign);for(e=0,s=o.length;e<s;e++)o[e]=a.length2em(o[e]);for(e=0,s=d.length;e<s;e++)d[e]=a.length2em(d[e]);for(var M=i.Element("span");t.firstChild;)M.appendChild(t.firstChild);t.appendChild(M);var c=0,u=0;for(e=0,s=this.data.length;e<s;e++){var T=this.data[e];if(T){var f=a.arrayEntry(d,e-1),H=a.arrayEntry(p,e),P=T.PHTML;T.PHTMLspanElement().style.verticalAlign=H;var L="mlabeledtr"===T.type?1:0;for(n=0,r=T.data.length;n<r-L;n++){var g=T.data[n+L];if(g){var v=a.arrayEntry(o,n-1),y=a.arrayEntry(m,n),C=g.PHTMLspanElement();n&&(P.w+=v,C.style.paddingLeft=a.Em(v)),e&&(C.style.paddingTop=a.Em(f)),C.style.textAlign=y}}c+=P.h+P.d,e&&(c+=f),P.w>u&&(u=P.w)}}var x=this.PHTML;return x.w=u,x.h=c/2+.25,x.d=c/2-.25,x.l=x.r=.125,t}}),s.mlabeledtr.Augment({PHTMLdefaultSpan:function(t,e){e||(e={}),t=this.PHTMLcreateSpan(t),this.PHTMLhandleStyle(t),this.PHTMLhandleColor(t),this.isToken&&this.PHTMLhandleToken(t);for(var i=1,a=this.data.length;i<a;i++)this.PHTMLaddChild(t,i,e);return t}}),s.semantics.Augment({toPreviewHTML:function(t){return t=this.PHTMLcreateSpan(t),this.data[0]&&(this.data[0].toPreviewHTML(t),MathJax.Hub.Insert(this.data[0].PHTML||{},this.PHTML)),t}}),s.annotation.Augment({toPreviewHTML:function(t){}}),s["annotation-xml"].Augment({toPreviewHTML:function(t){}}),MathJax.Hub.Register.StartupHook("onLoad",(function(){setTimeout(MathJax.Callback(["loadComplete",a,"jax.js"]),0)}))})),MathJax.Hub.Register.StartupHook("End Cookie",(function(){"None"!==e.config.menuSettings.zoom&&t.Require("[MathJax]/extensions/MathZoom.js")}))}(MathJax.Ajax,MathJax.Hub,MathJax.HTML,MathJax.OutputJax.PreviewHTML);