!function(t){var e=t.config.menuSettings,n={},o=MathJax.Ajax.config.path;o.a11y||(o.a11y=t.config.root+"/extensions/a11y");var i=MathJax.Extension["auto-collapse"]={version:"1.6.0",config:t.CombineConfig("auto-collapse",{disabled:!1}),dependents:[],Enable:function(o,i){e.autocollapse=!0,i&&(n.autocollapse=!0),this.config.disabled=!1,MathJax.Extension.collapsible.Enable(!1,i),o&&t.Queue(["Reprocess",t],["CollapseWideMath",this])},Disable:function(o,i){e.autocollapse=!1,i&&(n.autocollapse=!1),this.config.disabled=!0;for(var a=this.dependents.length-1;0<=a;a--){var s=this.dependents[a];s.Disable&&s.Disable(!1,i)}o&&t.Queue(["Rerender",t])},Dependent:function(t){this.dependents.push(t)},Startup:function(){var e=MathJax.Extension.collapsible;e&&e.Dependent(this),t.postInputHooks.Add(["Filter",i],150),t.Queue((function(){return i.CollapseWideMath()})),window.addEventListener?window.addEventListener("resize",i.resizeHandler,!1):window.attachEvent?window.attachEvent("onresize",i.resizeHandler):window.onresize=i.resizeHandler},Filter:function(t,e,n){t.enriched&&!this.config.disabled&&("block"===t.root.Get("display")||n.parentNode.childNodes.length<=3)&&(t.root.SRE={action:this.Actions(t.root)})},Actions:function(t){var e=[];return this.getActions(t,0,e),this.sortActions(e)},getActions:function(t,e,n){if(!t.isToken&&t.data){e++;for(var o,i=0,a=t.data.length;i<a;i++)t.data[i]&&((o=t.data[i]).collapsible?(n[e]||(n[e]=[]),n[e].push(o),this.getActions(o.data[1],e,n)):this.getActions(o,e,n))}},sortActions:function(t){for(var e=[],n=0,o=t.length;n<o;n++)t[n]&&(e=e.concat(t[n].sort(this.sortActionsBy)));return e},sortActionsBy:function(t,e){return(t=t.data[1].complexity)<(e=e.data[1].complexity)?-1:e<t?1:0},CollapseWideMath:function(e){if(!this.config.disabled){this.GetContainerWidths(e);var n=t.getAllJax(e),o={collapse:[],jax:n,m:n.length,i:0,changed:!1};return this.collapseState(o)}},collapseState:function(e){for(var n=e.collapse;e.i<e.m;){var o=e.jax[e.i],i=o.root.SRE;if(e.changed=!1,i&&i.action.length&&(i.cwidth<i.m||i.cwidth>i.M)){var a=this.getActionWidths(o,e);if(a)return a;this.collapseActions(i,e),e.changed&&n.push(o.SourceElement())}e.i++}if(0!==n.length)return 1===n.length&&(n=n[0]),t.Rerender(n)},collapseActions:function(t,e){for(var n=t.width,o=n,i=1e6,a=t.action.length-1;0<=a;a--){var s=t.action[a],r=s.selection;n>t.cwidth?(s.selection=1,o=s.SREwidth,i=n):s.selection=2,n=s.SREwidth,t.DOMupdate?document.getElementById(s.id).setAttribute("selection",s.selection):s.selection!==r&&(e.changed=!0)}t.m=o,t.M=i},getActionWidths:function(t,e){if(!t.root.SRE.actionWidths){MathJax.OutputJax[t.outputJax].getMetrics(t);try{this.computeActionWidths(t)}catch(t){if(!t.restart)throw t;return MathJax.Callback.After(["collapseState",this,e],t.restart)}e.changed=!0}return null},computeActionWidths:function(t){var e,n=t.root.SRE,o=n.action,i={};for(n.width=t.sreGetRootWidth(i),e=o.length-1;0<=e;e--)o[e].selection=2;for(e=o.length-1;0<=e;e--){var a=o[e];null==a.SREwidth&&(a.selection=1,a.SREwidth=t.sreGetActionWidth(i,a))}n.actionWidths=!0},GetContainerWidths:function(e){for(var n,o,i,a=t.getAllJax(e),s=MathJax.HTML.Element("span",{style:{display:"block"}}),r=[],l=0,c=a.length;l<c;l++)i=(o=a[l]).root,SRE=i.SRE,SRE&&SRE.action.length&&(null==SRE.width&&(o.sreGetMetrics(),SRE.m=SRE.width,SRE.M=1e6),(n=o.SourceElement()).previousSibling.style.display="none",n.parentNode.insertBefore(s.cloneNode(!1),n),r.push([o,n]));for(l=0,c=r.length;l<c;l++)o=r[l][0],(n=r[l][1]).previousSibling.offsetWidth&&(o.root.SRE.cwidth=n.previousSibling.offsetWidth*o.root.SRE.em);for(l=0,c=r.length;l<c;l++)o=r[l][0],(n=r[l][1]).parentNode.removeChild(n.previousSibling),n.previousSibling.style.display=""},timer:null,running:!1,retry:!1,saved_delay:0,resizeHandler:function(t){i.config.disabled||(i.running?i.retry=!0:(i.timer&&clearTimeout(i.timer),i.timer=setTimeout(i.resizeAction,100)))},resizeAction:function(){i.timer=null,i.running=!0,t.Queue((function(){i.saved_delay=t.processSectionDelay,t.processSectionDelay=0}),["CollapseWideMath",i],["resizeCheck",i])},resizeCheck:function(){i.running=!1,t.processSectionDelay=i.saved_delay,i.retry&&(i.retry=!1,setTimeout(i.resizeHandler,0))}};t.Register.StartupHook("End Extensions",(function(){null==e.autocollapse?e.autocollapse=!i.config.disabled:i.config.disabled=!e.autocollapse,t.Register.StartupHook("MathMenu Ready",(function(){n=MathJax.Menu.cookie;var t,o=MathJax.Menu.ITEM,a=MathJax.Menu.menu,s=o.CHECKBOX(["AutoCollapse","Auto Collapse"],"autocollapse",{action:function(t){i[e.autocollapse?"Enable":"Disable"](!0,!0),MathJax.Menu.saveCookie()}}),r=(a.FindId("Accessibility")||{}).submenu;function l(){i[e.autocollapse?"Enable":"Disable"]()}r?null!==(t=r.IndexOfId("AutoCollapse"))?r.items[t]=s:(t=r.IndexOfId("CollapsibleMath"),r.items.splice(t+1,0,s)):(t=a.IndexOfId("CollapsibleMath"),a.items.splice(t+1,0,s)),MathJax.Extension.collapse?l():MathJax.Hub.Register.StartupHook("Auto Collapse Ready",l)}),25)}),25)}(MathJax.Hub),MathJax.ElementJax.Augment({sreGetMetrics:function(){MathJax.OutputJax[this.outputJax].sreGetMetrics(this,this.root.SRE)},sreGetRootWidth:function(t){return MathJax.OutputJax[this.outputJax].sreGetRootWidth(this,t)},sreGetActionWidth:function(t,e){return MathJax.OutputJax[this.outputJax].sreGetActionWidth(this,t,e)}}),MathJax.OutputJax.Augment({getMetrics:function(){},sreGetMetrics:function(t,e){e.cwidth=1e6,e.width=0,e.em=12},sreGetRootWidth:function(t,e){return 0},sreGetActionWidth:function(t,e,n){return 0}}),MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",(function(){MathJax.OutputJax["HTML-CSS"].Augment({sreGetMetrics:function(t,e){e.width=t.root.data[0].HTMLspanElement().parentNode.bbox.w,e.em=1/t.HTMLCSS.em/t.HTMLCSS.scale},sreGetRootWidth:function(t,e){var n=t.root.data[0].HTMLspanElement();return e.box=n.parentNode,e.box.bbox.w},sreGetActionWidth:function(t,e,n){return t.root.data[0].toHTML(e.box).bbox.w}})})),MathJax.Hub.Register.StartupHook("SVG Jax Ready",(function(){MathJax.OutputJax.SVG.Augment({getMetrics:function(t){this.em=MathJax.ElementJax.mml.mbase.prototype.em=t.SVG.em,this.ex=t.SVG.ex,this.linebreakWidth=t.SVG.lineWidth,this.cwidth=t.SVG.cwidth},sreGetMetrics:function(t,e){e.width=t.root.SVGdata.w/1e3,e.em=1/t.SVG.em},sreGetRootWidth:function(t,e){return e.span=document.getElementById(t.inputID+"-Frame"),t.root.SVGdata.w/1e3},sreGetActionWidth:function(t,e,n){this.mathDiv=e.span,e.span.appendChild(this.textSVG);try{t.root.data[0].toSVG()}catch(t){var o=t}if(e.span.removeChild(this.textSVG),o)throw o;return t.root.data[0].SVGdata.w/1e3}})})),MathJax.Hub.Register.StartupHook("CommonHTML Jax Ready",(function(){MathJax.OutputJax.CommonHTML.Augment({sreGetMetrics:function(t,e){e.width=t.root.CHTML.w,e.em=1/t.CHTML.em/t.CHTML.scale},sreGetRootWidth:function(t,e){return e.span=document.getElementById(t.inputID+"-Frame").firstChild,e.tmp=document.createElement("span"),e.tmp.className=e.span.className,t.root.CHTML.w/t.CHTML.scale},sreGetActionWidth:function(t,e,n){e.span.parentNode.replaceChild(e.tmp,e.span),MathJax.OutputJax.CommonHTML.CHTMLnode=e.tmp;try{t.root.data[0].toCommonHTML(e.tmp)}catch(t){var o=t}if(e.tmp.parentNode.replaceChild(e.span,e.tmp),o)throw o;return t.root.data[0].CHTML.w/t.CHTML.scale}})})),MathJax.Hub.Register.StartupHook("NativeMML Jax Ready",(function(){MathJax.OutputJax.NativeMML.Augment({sreGetMetrics:function(t,e){var n=document.getElementById(t.inputID+"-Frame");e.width=n.offsetWidth,e.em=1,e.DOMupdate=!0},sreGetRootWidth:function(t,e){return e.span=document.getElementById(t.inputID+"-Frame").firstChild,e.span.offsetWidth},sreGetActionWidth:function(t,e,n){return document.getElementById(n.id).setAttribute("selection",1),e.span.offsetWidth}})})),MathJax.Ajax.Require("[a11y]/collapsible.js"),MathJax.Hub.Register.StartupHook("Collapsible Ready",(function(){MathJax.Extension["auto-collapse"].Startup(),MathJax.Hub.Startup.signal.Post("Auto Collapse Ready"),MathJax.Ajax.loadComplete("[a11y]/auto-collapse.js")}));