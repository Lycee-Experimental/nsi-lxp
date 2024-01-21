!function(e,t,o,n,i){var a="2.7.9",s=MathJax.Callback.Signal("menu");MathJax.Extension.MathMenu={version:a,signal:s};var r,u,l,h=function(e){return MathJax.Localization._.apply(MathJax.Localization,[["MathMenu",e]].concat([].slice.call(arguments,1)))},d=MathJax.Object.isArray,c=e.Browser.isPC,m=e.Browser.isMSIE,M=(document.documentMode||0)>8,f=c?null:"5px",p=e.CombineConfig("MathMenu",{delay:150,showRenderer:!0,showMathPlayer:!0,showFontMenu:!1,showContext:!1,showDiscoverable:!1,showLocale:!0,showLocaleURL:!1,semanticsAnnotations:{TeX:["TeX","LaTeX","application/x-tex"],StarMath:["StarMath 5.0"],Maple:["Maple"],ContentMathML:["MathML-Content","application/mathml-content+xml"],OpenMath:["OpenMath"]},windowSettings:{status:"no",toolbar:"no",locationbar:"no",menubar:"no",directories:"no",personalbar:"no",resizable:"yes",scrollbars:"yes",width:400,height:300,left:Math.round((screen.width-400)/2),top:Math.round((screen.height-300)/3)},styles:{"#MathJax_About":{position:"fixed",left:"50%",width:"auto","text-align":"center",border:"3px outset",padding:"1em 2em","background-color":"#DDDDDD",color:"black",cursor:"default","font-family":"message-box","font-size":"120%","font-style":"normal","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap",float:"none","z-index":201,"border-radius":"15px","-webkit-border-radius":"15px","-moz-border-radius":"15px","-khtml-border-radius":"15px","box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},"#MathJax_About.MathJax_MousePost":{outline:"none"},".MathJax_Menu":{position:"absolute","background-color":"white",color:"black",width:"auto",padding:c?"2px":"5px 0px",border:"1px solid #CCCCCC",margin:0,cursor:"default",font:"menu","text-align":"left","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap",float:"none","z-index":201,"border-radius":f,"-webkit-border-radius":f,"-moz-border-radius":f,"-khtml-border-radius":f,"box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_MenuItem":{padding:c?"2px 2em":"1px 2em",background:"transparent"},".MathJax_MenuArrow":{position:"absolute",right:".5em","padding-top":".25em",color:"#666666","font-family":m?"'Arial unicode MS'":null,"font-size":".75em"},".MathJax_MenuActive .MathJax_MenuArrow":{color:"white"},".MathJax_MenuArrow.RTL":{left:".5em",right:"auto"},".MathJax_MenuCheck":{position:"absolute",left:".7em","font-family":m?"'Arial unicode MS'":null},".MathJax_MenuCheck.RTL":{right:".7em",left:"auto"},".MathJax_MenuRadioCheck":{position:"absolute",left:c?"1em":".7em"},".MathJax_MenuRadioCheck.RTL":{right:c?"1em":".7em",left:"auto"},".MathJax_MenuLabel":{padding:c?"2px 2em 4px 1.33em":"1px 2em 3px 1.33em","font-style":"italic"},".MathJax_MenuRule":{"border-top":c?"1px solid #CCCCCC":"1px solid #DDDDDD",margin:c?"4px 1px 0px":"4px 3px"},".MathJax_MenuDisabled":{color:"GrayText"},".MathJax_MenuActive":{"background-color":c?"Highlight":"#606872",color:c?"HighlightText":"white"},".MathJax_MenuDisabled:focus, .MathJax_MenuLabel:focus":{"background-color":"#E8E8E8"},".MathJax_ContextMenu:focus":{outline:"none"},".MathJax_ContextMenu .MathJax_MenuItem:focus":{outline:"none"},"#MathJax_AboutClose":{top:".2em",right:".2em"},".MathJax_Menu .MathJax_MenuClose":{top:"-10px",left:"-10px"},".MathJax_MenuClose":{position:"absolute",cursor:"pointer",display:"inline-block",border:"2px solid #AAA","border-radius":"18px","-webkit-border-radius":"18px","-moz-border-radius":"18px","-khtml-border-radius":"18px","font-family":"'Courier New',Courier","font-size":"24px",color:"#F0F0F0"},".MathJax_MenuClose span":{display:"block","background-color":"#AAA",border:"1.5px solid","border-radius":"18px","-webkit-border-radius":"18px","-moz-border-radius":"18px","-khtml-border-radius":"18px","line-height":0,padding:"8px 0 6px"},".MathJax_MenuClose:hover":{color:"white!important",border:"2px solid #CCC!important"},".MathJax_MenuClose:hover span":{"background-color":"#CCC!important"},".MathJax_MenuClose:hover:focus":{outline:"none"}}});e.Register.StartupHook("MathEvents Ready",(function(){r=MathJax.Extension.MathEvents.Event.False,u=MathJax.Extension.MathEvents.Hover,l=MathJax.Extension.MathEvents.Event.KEY}));var x=MathJax.Object.Subclass({Keydown:function(e,t){switch(e.keyCode){case l.ESCAPE:this.Remove(e,t);break;case l.RIGHT:this.Right(e,t);break;case l.LEFT:this.Left(e,t);break;case l.UP:this.Up(e,t);break;case l.DOWN:this.Down(e,t);break;case l.RETURN:case l.SPACE:this.Space(e,t);break;default:return}return r(e)},Escape:function(e,t){},Right:function(e,t){},Left:function(e,t){},Up:function(e,t){},Down:function(e,t){},Space:function(e,t){}},{}),v=MathJax.Menu=x.Subclass({version:a,items:[],posted:!1,title:null,margin:5,Init:function(e){this.items=[].slice.call(arguments,0)},With:function(t){return t&&e.Insert(this,t),this},Post:function(e,o,n){e||(e=window.event||{});var i=document.getElementById("MathJax_MenuFrame");i||(i=v.Background(this),delete b.lastItem,delete b.lastMenu,delete v.skipUp,s.Post(["post",v.jax]),v.isRTL="rtl"===MathJax.Localization.fontDirection());var a=t.Element("div",{onmouseup:v.Mouseup,ondblclick:r,ondragstart:r,onselectstart:r,oncontextmenu:r,menuItem:this,className:"MathJax_Menu",onkeydown:v.Keydown,role:"menu"});"contextmenu"!==e.type&&"mouseover"!==e.type||(a.className+=" MathJax_ContextMenu"),n||MathJax.Localization.setCSS(a);for(var u=0,l=this.items.length;u<l;u++)this.items[u].Create(a);v.isMobile&&t.addElement(a,"span",{className:"MathJax_MenuClose",menu:o,ontouchstart:v.Close,ontouchend:r,onmousedown:v.Close,onmouseup:r},[["span",{},"×"]]),i.appendChild(a),this.posted=!0,a.offsetWidth&&(a.style.width=a.offsetWidth+2+"px");var h=e.pageX,d=e.pageY,m=document.body.getBoundingClientRect(),M=window.getComputedStyle?window.getComputedStyle(document.body):{marginLeft:"0px"},f=m.right-Math.min(0,m.left)+parseFloat(M.marginLeft);if(h||d||!("clientX"in e)||(h=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,d=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),o){var x="left",g=o.offsetWidth;for(h=v.isMobile?30:g-2,d=0;o&&o!==i;)h+=o.offsetLeft,d+=o.offsetTop,o=o.parentNode;v.isMobile||(v.isRTL&&h-g-a.offsetWidth>this.margin||!v.isRTL&&h+a.offsetWidth>f-this.margin)&&(x="right",h=Math.max(this.margin,h-g-a.offsetWidth+6)),c||(a.style["borderRadiusTop"+x]=0,a.style["WebkitBorderRadiusTop"+x]=0,a.style["MozBorderRadiusTop"+x]=0,a.style["KhtmlBorderRadiusTop"+x]=0)}else{var w=v.CurrentNode()||e.target;if(("keydown"===e.type||!h&&!d)&&w){var C=window.pageXOffset||document.documentElement.scrollLeft,S=window.pageYOffset||document.documentElement.scrollTop,L=w.getBoundingClientRect();h=(L.right+L.left)/2+C,d=(L.bottom+L.top)/2+S}h+a.offsetWidth>f-this.margin&&(h=f-a.offsetWidth-this.margin),v.isMobile&&(h=Math.max(5,h-Math.floor(a.offsetWidth/2)),d-=20),v.skipUp=e.isContextMenu}a.style.left=h+"px",a.style.top=d+"px",document.selection&&document.selection.empty&&document.selection.empty();var E=window.pageXOffset||document.documentElement.scrollLeft,A=window.pageYOffset||document.documentElement.scrollTop;return v.Focus(a),"keydown"===e.type&&(v.skipMouseoverFromKey=!0,setTimeout((function(){delete v.skipMouseoverFromKey}),p.delay)),window.scrollTo(E,A),r(e)},Remove:function(e,t){s.Post(["unpost",v.jax]);var o=document.getElementById("MathJax_MenuFrame");return o&&(o.parentNode.removeChild(o),this.msieFixedPositionBug&&detachEvent("onresize",v.Resize)),v.jax.hover&&(delete v.jax.hover.nofade,u.UnHover(v.jax)),v.Unfocus(t),"mousedown"===e.type&&v.CurrentNode().blur(),r(e)},Find:function(e){return this.FindN(1,e,[].slice.call(arguments,1))},FindId:function(e){return this.FindN(0,e,[].slice.call(arguments,1))},FindN:function(e,t,o){for(var n=0,i=this.items.length;n<i;n++)if(this.items[n].name[e]===t)return o.length?this.items[n].submenu?this.items[n].submenu.FindN(e,o[0],o.slice(1)):null:this.items[n];return null},IndexOf:function(e){return this.IndexOfN(1,e)},IndexOfId:function(e){return this.IndexOfN(0,e)},IndexOfN:function(e,t){for(var o=0,n=this.items.length;o<n;o++)if(this.items[o].name[e]===t)return o;return null},Right:function(e,t){v.Right(e,t)},Left:function(e,t){v.Left(e,t)},Up:function(e,t){var o=t.lastChild;o.menuItem.Activate(e,o)},Down:function(e,t){var o=t.firstChild;o.menuItem.Activate(e,o)},Space:function(e,t){this.Remove(e,t)}},{config:p,Remove:function(e){return v.Event(e,this,"Remove")},Mouseover:function(e){return v.Event(e,this,"Mouseover")},Mouseout:function(e){return v.Event(e,this,"Mouseout")},Mousedown:function(e){return v.Event(e,this,"Mousedown")},Mouseup:function(e){return v.Event(e,this,"Mouseup")},Keydown:function(e){return v.Event(e,this,"Keydown")},Touchstart:function(e){return v.Event(e,this,"Touchstart")},Touchend:function(e){return v.Event(e,this,"Touchend")},Close:function(e){return v.Event(e,this.menu||this.parentNode,this.menu?"Touchend":"Remove")},Event:function(e,t,o,n){if(v.skipMouseover&&"Mouseover"===o&&!n)return r(e);if(v.skipMouseoverFromKey&&"Mouseover"===o)return delete v.skipMouseoverFromKey,r(e);if(v.skipUp){if(o.match(/Mouseup|Touchend/))return delete v.skipUp,r(e);("Touchstart"===o||"Mousedown"===o&&!v.skipMousedown)&&delete v.skipUp}e||(e=window.event);var i=t.menuItem;return i&&i[o]?i[o](e,t):null},BGSTYLE:{position:"absolute",left:0,top:0,"z-index":200,width:"100%",height:"100%",border:0,padding:0,margin:0},Background:function(e){var o=t.addElement(document.body,"div",{style:this.BGSTYLE,id:"MathJax_MenuFrame"},[["div",{style:this.BGSTYLE,menuItem:e,onmousedown:this.Remove}]]),n=o.firstChild;return v.msieBackgroundBug&&(n.style.backgroundColor="white",n.style.filter="alpha(opacity=0)"),v.msieFixedPositionBug?(o.width=o.height=0,this.Resize(),attachEvent("onresize",this.Resize)):n.style.position="fixed",o},Resize:function(){setTimeout(v.SetWH,0)},SetWH:function(){var e=document.getElementById("MathJax_MenuFrame");e&&((e=e.firstChild).style.width=e.style.height="1px",e.style.width=document.body.scrollWidth+"px",e.style.height=document.body.scrollHeight+"px")},posted:!1,active:null,GetNode:function(e){var t=document.getElementById(e.inputID+"-Frame");return t.isMathJax?t:t.firstChild},CurrentNode:function(){return v.GetNode(v.jax)},AllNodes:function(){for(var e,t=MathJax.Hub.getAllJax(),o=[],n=0;e=t[n];n++)o.push(v.GetNode(e));return o},ActiveNode:function(){return v.active},FocusNode:function(e){v.active=e,e.focus()},Focus:function(e){v.posted?v.ActiveNode().tabIndex=-1:v.Activate(e),e.tabIndex=0,v.FocusNode(e)},Activate:function(e,t){v.UnsetTabIndex(),v.posted=!0},Unfocus:function(){v.ActiveNode().tabIndex=-1,v.SetTabIndex(),v.FocusNode(v.CurrentNode()),v.posted=!1},MoveHorizontal:function(e,t,o){if(e.shiftKey){var n=v.AllNodes(),i=n.length;if(0!==i){var a=n[v.Mod(o(v.IndexOf(n,v.CurrentNode())),i)];a!==v.CurrentNode()&&(v.menu.Remove(e,t),v.jax=MathJax.Hub.getJaxFor(a),v.FocusNode(a),v.menu.Post(null))}}},Right:function(e,t){v.MoveHorizontal(e,t,(function(e){return e+1}))},Left:function(e,t){v.MoveHorizontal(e,t,(function(e){return e-1}))},UnsetTabIndex:function(){for(var e,t=v.AllNodes(),o=0;e=t[o];o++)e.tabIndex>0&&(e.oldTabIndex=e.tabIndex),e.tabIndex=-1},SetTabIndex:function(){for(var t,o=v.AllNodes(),n=0;t=o[n];n++)void 0!==t.oldTabIndex?(t.tabIndex=t.oldTabIndex,delete t.oldTabIndex):t.tabIndex=e.getTabOrder(t)},Mod:function(e,t){return(e%t+t)%t},IndexOf:Array.prototype.indexOf?function(e,t,o){return e.indexOf(t,o)}:function(e,t,o){for(var n=o||0,i=e.length;n<i;n++)if(t===e[n])return n;return-1},saveCookie:function(){t.Cookie.Set("menu",this.cookie)},getCookie:function(){this.cookie=t.Cookie.Get("menu")}});MathJax.Menu.NAV=x;var b=v.ITEM=x.Subclass({name:"",node:null,menu:null,Attributes:function(t){return e.Insert({onmouseup:v.Mouseup,ondragstart:r,onselectstart:r,onselectend:r,ontouchstart:v.Touchstart,ontouchend:v.Touchend,className:"MathJax_MenuItem",role:this.role,menuItem:this},t)},Create:function(e){if(!this.hidden){var o=this.Attributes(),n=this.Label(o,e);t.addElement(e,"div",o,n)}},Name:function(){return h(this.name[0],this.name[1])},Mouseover:function(e,t){t.parentNode===v.ActiveNode().parentNode&&this.Deactivate(v.ActiveNode()),this.Activate(e,t)},Mouseout:function(e,t){this.Deactivate(t)},Mouseup:function(e,t){return this.Remove(e,t)},DeactivateSubmenus:function(e){for(var t=document.getElementById("MathJax_MenuFrame").childNodes,o=b.GetMenuNode(e).childNodes,n=0,i=o.length;n<i;n++){var a=o[n].menuItem;a&&a.submenu&&a.submenu.posted&&a!==e.menuItem&&a.Deactivate(o[n])}this.RemoveSubmenus(e,t)},RemoveSubmenus:function(e,t){for(var o=(t=t||document.getElementById("MathJax_MenuFrame").childNodes).length-1;o>=0&&b.GetMenuNode(e).menuItem!==t[o].menuItem;)t[o].menuItem.posted=!1,t[o].parentNode.removeChild(t[o]),o--},Touchstart:function(e,t){return this.TouchEvent(e,t,"Mousedown")},Touchend:function(e,t){return this.TouchEvent(e,t,"Mouseup")},TouchEvent:function(e,t,o){return this!==b.lastItem&&(b.lastMenu&&v.Event(e,b.lastMenu,"Mouseout"),v.Event(e,t,"Mouseover",!0),b.lastItem=this,b.lastMenu=t),this.nativeTouch?null:(v.Event(e,t,o),!1)},Remove:function(e,t){return(t=t.parentNode.menuItem).Remove(e,t)},With:function(t){return t&&e.Insert(this,t),this},isRTL:function(){return v.isRTL},rtlClass:function(){return this.isRTL()?" RTL":""}},{GetMenuNode:function(e){return e.parentNode}});v.ENTRY=v.ITEM.Subclass({role:"menuitem",Attributes:function(t){return t=e.Insert({onmouseover:v.Mouseover,onmouseout:v.Mouseout,onmousedown:v.Mousedown,onkeydown:v.Keydown,"aria-disabled":!!this.disabled},t),t=this.SUPER(arguments).Attributes.call(this,t),this.disabled&&(t.className+=" MathJax_MenuDisabled"),t},MoveVertical:function(e,t,o){for(var n,i=b.GetMenuNode(t),a=[],s=0,r=i.menuItem.items;n=r[s];s++)n.hidden||a.push(n);var u=v.IndexOf(a,this);if(-1!==u){var l=a.length,h=i.childNodes;do{u=v.Mod(o(u),l)}while(a[u].hidden||!h[u].role||"separator"===h[u].role);this.Deactivate(t),a[u].Activate(e,h[u])}},Up:function(e,t){this.MoveVertical(e,t,(function(e){return e-1}))},Down:function(e,t){this.MoveVertical(e,t,(function(e){return e+1}))},Right:function(e,t){this.MoveHorizontal(e,t,v.Right,!this.isRTL())},Left:function(e,t){this.MoveHorizontal(e,t,v.Left,this.isRTL())},MoveHorizontal:function(e,t,o,n){var i=b.GetMenuNode(t);if(i.menuItem===v.menu&&e.shiftKey&&o(e,t),!n){i.menuItem!==v.menu&&this.Deactivate(t);for(var a=i.previousSibling.childNodes,s=a.length;s--;){var r=a[s];if(r.menuItem.submenu&&r.menuItem.submenu===i.menuItem){v.Focus(r);break}}this.RemoveSubmenus(t)}},Space:function(e,t){this.Mouseup(e,t)},Activate:function(e,t){this.Deactivate(t),this.disabled||(t.className+=" MathJax_MenuActive"),this.DeactivateSubmenus(t),v.Focus(t)},Deactivate:function(e){e.className=e.className.replace(/ MathJax_MenuActive/,"")}}),v.ITEM.COMMAND=v.ENTRY.Subclass({action:function(){},Init:function(e,t,o){d(e)||(e=[e,e]),this.name=e,this.action=t,this.With(o)},Label:function(e,t){return[this.Name()]},Mouseup:function(e,t){return this.disabled||(this.Remove(e,t),s.Post(["command",this]),this.action.call(this,e)),r(e)}}),v.ITEM.SUBMENU=v.ENTRY.Subclass({submenu:null,marker:"►",markerRTL:"◄",Attributes:function(t){return t=e.Insert({"aria-haspopup":"true"},t),this.SUPER(arguments).Attributes.call(this,t)},Init:function(e,t){d(e)||(e=[e,e]),this.name=e;var o=1;t instanceof v.ITEM||(this.With(t),o++),this.submenu=v.apply(v,[].slice.call(arguments,o))},Label:function(e,t){return this.submenu.posted=!1,[this.Name()+" ",["span",{className:"MathJax_MenuArrow"+this.rtlClass()},[this.isRTL()?this.markerRTL:this.marker]]]},Timer:function(e,t){this.ClearTimer(),e={type:e.type,clientX:e.clientX,clientY:e.clientY},this.timer=setTimeout(n(["Mouseup",this,e,t]),p.delay)},ClearTimer:function(){this.timer&&clearTimeout(this.timer)},Touchend:function(e,t){var o=this.submenu.posted,n=this.SUPER(arguments).Touchend.apply(this,arguments);return o&&(this.Deactivate(t),delete b.lastItem,delete b.lastMenu),n},Mouseout:function(e,t){this.submenu.posted||this.Deactivate(t),this.ClearTimer()},Mouseover:function(e,t){this.Activate(e,t)},Mouseup:function(e,t){return this.disabled||(this.submenu.posted?this.DeactivateSubmenus(t):(this.ClearTimer(),this.submenu.Post(e,t,this.ltr),v.Focus(t))),r(e)},Activate:function(e,t){this.disabled||(this.Deactivate(t),t.className+=" MathJax_MenuActive"),this.submenu.posted||(this.DeactivateSubmenus(t),v.isMobile||this.Timer(e,t)),v.Focus(t)},MoveVertical:function(e,t,o){this.ClearTimer(),this.SUPER(arguments).MoveVertical.apply(this,arguments)},MoveHorizontal:function(e,t,o,n){if(n){if(!this.disabled)if(this.submenu.posted){var i=b.GetMenuNode(t).nextSibling.childNodes;i.length>0&&this.submenu.items[0].Activate(e,i[0])}else this.Activate(e,t)}else this.SUPER(arguments).MoveHorizontal.apply(this,arguments)}}),v.ITEM.RADIO=v.ENTRY.Subclass({variable:null,marker:c?"●":"✓",role:"menuitemradio",Attributes:function(t){var o=p.settings[this.variable]===this.value?"true":"false";return t=e.Insert({"aria-checked":o},t),this.SUPER(arguments).Attributes.call(this,t)},Init:function(e,t,o){d(e)||(e=[e,e]),this.name=e,this.variable=t,this.With(o),null==this.value&&(this.value=this.name[0])},Label:function(e,t){var o={className:"MathJax_MenuRadioCheck"+this.rtlClass()};return p.settings[this.variable]!==this.value&&(o={style:{display:"none"}}),[["span",o,[this.marker]]," "+this.Name()]},Mouseup:function(e,t){if(!this.disabled){for(var o=t.parentNode.childNodes,n=0,i=o.length;n<i;n++){var a=o[n].menuItem;a&&a.variable===this.variable&&(o[n].firstChild.style.display="none")}t.firstChild.display="",p.settings[this.variable]=this.value,v.cookie[this.variable]=p.settings[this.variable],v.saveCookie(),s.Post(["radio button",this])}return this.Remove(e,t),this.action&&!this.disabled&&this.action.call(v,this),r(e)}}),v.ITEM.CHECKBOX=v.ENTRY.Subclass({variable:null,marker:"✓",role:"menuitemcheckbox",Attributes:function(t){var o=p.settings[this.variable]?"true":"false";return t=e.Insert({"aria-checked":o},t),this.SUPER(arguments).Attributes.call(this,t)},Init:function(e,t,o){d(e)||(e=[e,e]),this.name=e,this.variable=t,this.With(o)},Label:function(e,t){var o={className:"MathJax_MenuCheck"+this.rtlClass()};return p.settings[this.variable]||(o={style:{display:"none"}}),[["span",o,[this.marker]]," "+this.Name()]},Mouseup:function(e,t){return this.disabled||(t.firstChild.display=p.settings[this.variable]?"none":"",p.settings[this.variable]=!p.settings[this.variable],v.cookie[this.variable]=p.settings[this.variable],v.saveCookie(),s.Post(["checkbox",this])),this.Remove(e,t),this.action&&!this.disabled&&this.action.call(v,this),r(e)}}),v.ITEM.LABEL=v.ENTRY.Subclass({role:"menuitem",Init:function(e,t){d(e)||(e=[e,e]),this.name=e,this.With(t)},Label:function(e,t){return e.className+=" MathJax_MenuLabel",[this.Name()]},Activate:function(e,t){this.Deactivate(t),v.Focus(t)},Mouseup:function(e,t){}}),v.ITEM.RULE=v.ITEM.Subclass({role:"separator",Attributes:function(t){return t=e.Insert({"aria-orientation":"vertical"},t),this.SUPER(arguments).Attributes.call(this,t)},Label:function(e,t){return e.className+=" MathJax_MenuRule",null}}),v.About=function(o){var n=v.About.GetFont(),i=v.About.GetFormat(),a=["MathJax.js v"+MathJax.fileversion,["br"]];a.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]),v.About.GetJax(a,MathJax.InputJax,["InputJax","%1 Input Jax v%2"]),v.About.GetJax(a,MathJax.OutputJax,["OutputJax","%1 Output Jax v%2"]),v.About.GetJax(a,MathJax.ElementJax,["ElementJax","%1 Element Jax v%2"]),a.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]),v.About.GetJax(a,MathJax.Extension,["Extension","%1 Extension v%2"],!0),a.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}],["center",{},[e.Browser+" v"+e.Browser.version+(i?" — "+h(i.replace(/ /g,""),i):"")]]),v.About.div=v.Background(v.About);var s=t.addElement(v.About.div,"div",{id:"MathJax_About",tabIndex:0,onkeydown:v.About.Keydown},[["b",{style:{fontSize:"120%"}},["MathJax"]]," v"+MathJax.version,["br"],h(n.replace(/ /g,""),"using "+n),["br"],["br"],["span",{style:{display:"inline-block","text-align":"left","font-size":"80%","max-height":"20em",overflow:"auto","background-color":"#E4E4E4",padding:".4em .6em",border:"1px inset"},tabIndex:0},a],["br"],["br"],["a",{href:"http://www.mathjax.org/"},["www.mathjax.org"]],["span",{className:"MathJax_MenuClose",id:"MathJax_AboutClose",onclick:v.About.Remove,onkeydown:v.About.Keydown,tabIndex:0,role:"button","aria-label":h("CloseAboutDialog","Close about MathJax dialog")},[["span",{},"×"]]]]);"mouseup"===o.type&&(s.className+=" MathJax_MousePost"),s.focus(),MathJax.Localization.setCSS(s);var r=document.documentElement||{},u=window.innerHeight||r.clientHeight||r.scrollHeight||0;v.prototype.msieAboutBug?(s.style.width="20em",s.style.position="absolute",s.style.left=Math.floor((document.documentElement.scrollWidth-s.offsetWidth)/2)+"px",s.style.top=Math.floor((u-s.offsetHeight)/3)+document.body.scrollTop+"px"):(s.style.marginLeft=Math.floor(-s.offsetWidth/2)+"px",s.style.top=Math.floor((u-s.offsetHeight)/3)+"px")},v.About.Remove=function(e){v.About.div&&(document.body.removeChild(v.About.div),delete v.About.div)},v.About.Keydown=function(e){e.keyCode!==l.ESCAPE&&("MathJax_AboutClose"!==this.id||e.keyCode!==l.SPACE&&e.keyCode!==l.RETURN)||(v.About.Remove(e),v.CurrentNode().focus(),r(e))},v.About.GetJax=function(e,t,o,n){var i=[];for(var a in t)t.hasOwnProperty(a)&&t[a]&&(n&&t[a].version||t[a].isa&&t[a].isa(t))&&i.push(h(o[0],o[1],t[a].id||a,t[a].version));i.sort();for(var s=0,r=i.length;s<r;s++)e.push(i[s],["br"]);return e},v.About.GetFont=function(){var e=MathJax.Hub.outputJax["jax/mml"][0]||{};return({SVG:"web SVG",CommonHTML:"web TeX","HTML-CSS":e.imgFonts?"image":(e.webFonts?"web":"local")+" "+e.fontInUse}[e.id]||"generic")+" fonts"},v.About.GetFormat=function(){var e=MathJax.Hub.outputJax["jax/mml"][0]||{};if("HTML-CSS"===e.id&&e.webFonts&&!e.imgFonts)return e.allowWebFonts.replace(/otf/,"woff or otf")+" fonts"},v.Help=function(e){o.Require("[MathJax]/extensions/HelpDialog.js",(function(){MathJax.Extension.Help.Dialog({type:e.type})}))},v.ShowSource=function(e){e||(e=window.event);var t={screenX:e.screenX,screenY:e.screenY};if(v.jax)if("MathML"===this.format){var i=MathJax.ElementJax.mml;if(i&&void 0!==i.mbase.prototype.toMathML)try{v.ShowSource.Text(v.jax.root.toMathML("",v.jax),e)}catch(e){if(!e.restart)throw e;n.After([this,v.ShowSource,t],e.restart)}else if(!o.loadingToMathML)return o.loadingToMathML=!0,v.ShowSource.Window(e),void n.Queue(o.Require("[MathJax]/extensions/toMathML.js"),(function(){delete o.loadingToMathML,i.mbase.prototype.toMathML||(i.mbase.prototype.toMathML=function(){})}),[this,v.ShowSource,t])}else if("Error"===this.format)v.ShowSource.Text(v.jax.errorText,e);else if(p.semanticsAnnotations[this.format]){var a=v.jax.root.getAnnotation(this.format);a.data[0]&&v.ShowSource.Text(a.data[0].toString())}else{if(null==v.jax.originalText)return void alert(h("NoOriginalForm","No original form available"));v.ShowSource.Text(v.jax.originalText,e)}},v.ShowSource.Window=function(e){if(!v.ShowSource.w){var t=[],o=p.windowSettings;for(var n in o)o.hasOwnProperty(n)&&t.push(n+"="+o[n]);v.ShowSource.w=window.open("","_blank",t.join(","))}return v.ShowSource.w},v.ShowSource.Text=function(e,t){var o=v.ShowSource.Window(t);delete v.ShowSource.w,e=(e=e.replace(/^\s*/,"").replace(/\s*$/,"")).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");var n=h("EqSource","MathJax Equation Source");if(v.isMobile)o.document.open(),o.document.write("<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>"+n+"</title></head><body style='font-size:85%'>"),o.document.write("<pre>"+e+"</pre>"),o.document.write("<hr><input type='button' value='"+h("Close","Close")+"' onclick='window.close()' />"),o.document.write("</body></html>"),o.document.close();else{o.document.open(),o.document.write("<html><head><title>"+n+"</title></head><body style='font-size:85%'>"),o.document.write("<table><tr><td><pre>"+e+"</pre></td></tr></table>"),o.document.write("</body></html>"),o.document.close();var i=o.document.body.firstChild;setTimeout((function(){var e,n,a,s=o.outerHeight-o.innerHeight||30,r=o.outerWidth-o.innerWidth||30;r=Math.max(140,Math.min(Math.floor(.5*screen.width),i.offsetWidth+r+25)),s=Math.max(40,Math.min(Math.floor(.5*screen.height),i.offsetHeight+s+25)),v.prototype.msieHeightBug&&(s+=35),o.resizeTo(r,s);try{a=t.screenX}catch(e){}t&&null!=a&&(e=Math.max(0,Math.min(t.screenX-Math.floor(r/2),screen.width-r-20)),n=Math.max(0,Math.min(t.screenY-Math.floor(s/2),screen.height-s-20)),o.moveTo(e,n))}),50)}},v.Scale=function(){var t,o,n=["CommonHTML","HTML-CSS","SVG","NativeMML","PreviewHTML"],a=n.length,s=100;for(t=0;t<a;t++)if(o=i[n[t]]){s=o.config.scale;break}var r=prompt(h("ScaleMath","Scale all mathematics (compared to surrounding text) by"),s+"%");if(r)if(r.match(/^\s*\d+(\.\d*)?\s*%?\s*$/))if(r=parseFloat(r)){if(r!==s){for(t=0;t<a;t++)(o=i[n[t]])&&(o.config.scale=r);v.cookie.scale=e.config.scale=r,v.saveCookie(),e.Queue(["Rerender",e])}}else alert(h("NonZeroScale","The scale should not be zero"));else alert(h("PercentScale","The scale should be a percentage (e.g., 120%%)"))},v.Zoom=function(){MathJax.Extension.MathZoom||o.Require("[MathJax]/extensions/MathZoom.js")},v.Renderer=function(){var o=e.outputJax["jax/mml"];if(o[0]!==p.settings.renderer){var n,i,a=e.Browser,s=v.Renderer.Messages;switch(p.settings.renderer){case"NativeMML":p.settings.warnedMML||(a.isChrome&&"24."!==a.version.substr(0,3)||a.isSafari&&!a.versionAtLeast("5.0")?n=s.MML.WebKit:a.isMSIE?a.hasMathPlayer||(n=s.MML.MSIE):n=a.isEdge?s.MML.WebKit:s.MML[a],i="warnedMML");break;case"SVG":p.settings.warnedSVG||a.isMSIE&&!M&&(n=s.SVG.MSIE)}if(n){if(n=h(n[0],n[1]),n+="\n\n",n+=h("SwitchAnyway","Switch the renderer anyway?\n\n(Press OK to switch, CANCEL to continue with the current renderer)"),v.cookie.renderer=o[0].id,v.saveCookie(),!confirm(n))return v.cookie.renderer=p.settings.renderer=t.Cookie.Get("menu").renderer,void v.saveCookie();i&&(v.cookie.warned=p.settings.warned=!0),v.cookie.renderer=p.settings.renderer,v.saveCookie()}e.Queue(["setRenderer",e,p.settings.renderer,"jax/mml"],["Rerender",e])}},v.Renderer.Messages={MML:{WebKit:["WebkitNativeMMLWarning","Your browser doesn't seem to support MathML natively, so switching to MathML output may cause the mathematics on the page to become unreadable."],MSIE:["MSIENativeMMLWarning","Internet Explorer requires the MathPlayer plugin in order to process MathML output."],Opera:["OperaNativeMMLWarning","Opera's support for MathML is limited, so switching to MathML output may cause some expressions to render poorly."],Safari:["SafariNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."],Firefox:["FirefoxNativeMMLWarning","Your browser's native MathML does not implement all the features used by MathJax, so some expressions may not render properly."]},SVG:{MSIE:["MSIESVGWarning","SVG is not implemented in Internet Explorer prior to IE9 or when it is emulating IE8 or below. Switching to SVG output will cause the mathematics to not display properly."]}},v.AssistiveMML=function(e,t){var n=MathJax.Extension.AssistiveMML;n?MathJax.Hub.Queue([(p.settings.assistiveMML?"Add":"Remove")+"AssistiveMathML",n]):t||o.Require("[MathJax]/extensions/AssistiveMML.js",["AssistiveMML",v,e,!0])},v.Font=function(){i["HTML-CSS"]&&document.location.reload()},v.Locale=function(){MathJax.Localization.setLocale(p.settings.locale),MathJax.Hub.Queue(["Reprocess",MathJax.Hub])},v.LoadLocale=function(){var e=prompt(h("LoadURL","Load translation data from this URL:"));e&&(e.match(/\.js$/)||alert(h("BadURL","The URL should be for a javascript file that defines MathJax translation data.  Javascript file names should end with '.js'")),o.Require(e,(function(t){t!=o.STATUS.OK&&alert(h("BadData","Failed to load translation data from %1",e))})))},v.MPEvents=function(e){var t=p.settings.discoverable,o=v.MPEvents.Messages;if(M)!t&&"Menu Events"===e.name[1]&&p.settings.mpContext&&alert(h.apply(h,o.IE9warning));else{if(p.settings.mpMouse&&!confirm(h.apply(h,o.IE8warning)))return delete v.cookie.mpContext,delete p.settings.mpContext,delete v.cookie.mpMouse,delete p.settings.mpMouse,void v.saveCookie();p.settings.mpContext=p.settings.mpMouse,v.cookie.mpContext=v.cookie.mpMouse=p.settings.mpMouse,v.saveCookie(),MathJax.Hub.Queue(["Rerender",MathJax.Hub])}},v.MPEvents.Messages={IE8warning:["IE8warning","This will disable the MathJax menu and zoom features, but you can Alt-Click on an expression to obtain the MathJax menu instead.\n\nReally change the MathPlayer settings?"],IE9warning:["IE9warning","The MathJax contextual menu will be disabled, but you can Alt-Click on an expression to obtain the MathJax menu instead."]},e.Browser.Select({MSIE:function(e){var t="BackCompat"===document.compatMode,o=e.versionAtLeast("8.0")&&document.documentMode>7;v.Augment({margin:20,msieBackgroundBug:(document.documentMode||0)<9,msieFixedPositionBug:t||!o,msieAboutBug:t,msieHeightBug:(document.documentMode||0)<9}),M&&(delete p.styles["#MathJax_About"].filter,delete p.styles[".MathJax_Menu"].filter)},Firefox:function(e){v.skipMouseover=e.isMobile&&e.versionAtLeast("6.0"),v.skipMousedown=e.isMobile}}),v.isMobile=e.Browser.isMobile,v.noContextMenu=e.Browser.noContextMenu,v.CreateLocaleMenu=function(){if(v.menu){var e=v.menu.Find("Language").submenu,t=e.items,o=[],n=MathJax.Localization.strings;for(var i in n)n.hasOwnProperty(i)&&o.push(i);o=o.sort(),e.items=[];for(var a=0,s=o.length;a<s;a++){var r=n[o[a]].menuTitle;r?r+=" ("+o[a]+")":r=o[a],e.items.push(b.RADIO([o[a],r],"locale",{action:v.Locale}))}e.items.push(t[t.length-2],t[t.length-1])}},v.CreateAnnotationMenu=function(){if(v.menu){var e=v.menu.Find("Show Math As","Annotation").submenu,t=p.semanticsAnnotations;for(var o in t)t.hasOwnProperty(o)&&e.items.push(b.COMMAND([o,o],v.ShowSource,{hidden:!0,nativeTouch:!0,format:o}))}},e.Register.StartupHook("End Config",(function(){var t,o;p.settings=e.config.menuSettings,void 0!==p.settings.showRenderer&&(p.showRenderer=p.settings.showRenderer),void 0!==p.settings.showFontMenu&&(p.showFontMenu=p.settings.showFontMenu),void 0!==p.settings.showContext&&(p.showContext=p.settings.showContext),v.getCookie(),v.menu=v(b.SUBMENU(["Show","Show Math As"],b.COMMAND(["MathMLcode","MathML Code"],v.ShowSource,{nativeTouch:!0,format:"MathML"}),b.COMMAND(["Original","Original Form"],v.ShowSource,{nativeTouch:!0}),b.SUBMENU(["Annotation","Annotation"],{disabled:!0}),b.RULE(),b.CHECKBOX(["texHints","Show TeX hints in MathML"],"texHints"),b.CHECKBOX(["semantics","Add original form as annotation"],"semantics")),b.RULE(),b.SUBMENU(["Settings","Math Settings"],b.SUBMENU(["ZoomTrigger","Zoom Trigger"],b.RADIO(["Hover","Hover"],"zoom",{action:v.Zoom}),b.RADIO(["Click","Click"],"zoom",{action:v.Zoom}),b.RADIO(["DoubleClick","Double-Click"],"zoom",{action:v.Zoom}),b.RADIO(["NoZoom","No Zoom"],"zoom",{value:"None"}),b.RULE(),b.LABEL(["TriggerRequires","Trigger Requires:"]),b.CHECKBOX(e.Browser.isMac?["Option","Option"]:["Alt","Alt"],"ALT"),b.CHECKBOX(["Command","Command"],"CMD",{hidden:!e.Browser.isMac}),b.CHECKBOX(["Control","Control"],"CTRL",{hidden:e.Browser.isMac}),b.CHECKBOX(["Shift","Shift"],"Shift")),b.SUBMENU(["ZoomFactor","Zoom Factor"],b.RADIO("125%","zscale"),b.RADIO("133%","zscale"),b.RADIO("150%","zscale"),b.RADIO("175%","zscale"),b.RADIO("200%","zscale"),b.RADIO("250%","zscale"),b.RADIO("300%","zscale"),b.RADIO("400%","zscale")),b.RULE(),b.SUBMENU(["Renderer","Math Renderer"],{hidden:!p.showRenderer},b.RADIO(["HTML-CSS","HTML-CSS"],"renderer",{action:v.Renderer}),b.RADIO(["CommonHTML","Common HTML"],"renderer",{action:v.Renderer,value:"CommonHTML"}),b.RADIO(["PreviewHTML","Preview HTML"],"renderer",{action:v.Renderer,value:"PreviewHTML"}),b.RADIO(["MathML","MathML"],"renderer",{action:v.Renderer,value:"NativeMML"}),b.RADIO(["SVG","SVG"],"renderer",{action:v.Renderer}),b.RADIO(["PlainSource","Plain Source"],"renderer",{action:v.Renderer,value:"PlainSource"}),b.RULE(),b.CHECKBOX(["FastPreview","Fast Preview"],"FastPreview")),b.SUBMENU("MathPlayer",{hidden:!e.Browser.isMSIE||!p.showMathPlayer,disabled:!e.Browser.hasMathPlayer},b.LABEL(["MPHandles","Let MathPlayer Handle:"]),b.CHECKBOX(["MenuEvents","Menu Events"],"mpContext",{action:v.MPEvents,hidden:!M}),b.CHECKBOX(["MouseEvents","Mouse Events"],"mpMouse",{action:v.MPEvents,hidden:!M}),b.CHECKBOX(["MenuAndMouse","Mouse and Menu Events"],"mpMouse",{action:v.MPEvents,hidden:M})),b.SUBMENU(["FontPrefs","Font Preference"],{hidden:!p.showFontMenu},b.LABEL(["ForHTMLCSS","For HTML-CSS:"]),b.RADIO(["Auto","Auto"],"font",{action:v.Font}),b.RULE(),b.RADIO(["TeXLocal","TeX (local)"],"font",{action:v.Font}),b.RADIO(["TeXWeb","TeX (web)"],"font",{action:v.Font}),b.RADIO(["TeXImage","TeX (image)"],"font",{action:v.Font}),b.RULE(),b.RADIO(["STIXLocal","STIX (local)"],"font",{action:v.Font}),b.RADIO(["STIXWeb","STIX (web)"],"font",{action:v.Font}),b.RULE(),b.RADIO(["AsanaMathWeb","Asana Math (web)"],"font",{action:v.Font}),b.RADIO(["GyrePagellaWeb","Gyre Pagella (web)"],"font",{action:v.Font}),b.RADIO(["GyreTermesWeb","Gyre Termes (web)"],"font",{action:v.Font}),b.RADIO(["LatinModernWeb","Latin Modern (web)"],"font",{action:v.Font}),b.RADIO(["NeoEulerWeb","Neo Euler (web)"],"font",{action:v.Font})),b.SUBMENU(["ContextMenu","Contextual Menu"],{hidden:!p.showContext},b.RADIO(["MathJax","MathJax"],"context"),b.RADIO(["Browser","Browser"],"context")),b.COMMAND(["Scale","Scale All Math ..."],v.Scale),b.RULE().With({hidden:!p.showDiscoverable,name:["","discover_rule"]}),b.CHECKBOX(["Discoverable","Highlight on Hover"],"discoverable",{hidden:!p.showDiscoverable})),b.SUBMENU(["Accessibility","Accessibility"],b.CHECKBOX(["AssistiveMML","Assistive MathML"],"assistiveMML",{action:v.AssistiveMML}),b.CHECKBOX(["InTabOrder","Include in Tab Order"],"inTabOrder")),b.SUBMENU(["Locale","Language"],{hidden:!p.showLocale,ltr:!0},b.RADIO("en","locale",{action:v.Locale}),b.RULE().With({hidden:!p.showLocaleURL,name:["","localURL_rule"]}),b.COMMAND(["LoadLocale","Load from URL ..."],v.LoadLocale,{hidden:!p.showLocaleURL})),b.RULE(),b.COMMAND(["About","About MathJax"],v.About),b.COMMAND(["Help","MathJax Help"],v.Help)),v.isMobile&&(t=p.settings,(o=v.menu.Find("Math Settings","Zoom Trigger").submenu).items[0].disabled=o.items[1].disabled=!0,"Hover"!==t.zoom&&"Click"!=t.zoom||(t.zoom="None"),o.items=o.items.slice(0,4),navigator.appVersion.match(/[ (]Android[) ]/)&&v.ITEM.SUBMENU.Augment({marker:"»"})),v.CreateLocaleMenu(),v.CreateAnnotationMenu()})),v.showRenderer=function(e){v.cookie.showRenderer=p.showRenderer=e,v.saveCookie(),v.menu.Find("Math Settings","Math Renderer").hidden=!e},v.showMathPlayer=function(e){v.cookie.showMathPlayer=p.showMathPlayer=e,v.saveCookie(),v.menu.Find("Math Settings","MathPlayer").hidden=!e},v.showFontMenu=function(e){v.cookie.showFontMenu=p.showFontMenu=e,v.saveCookie(),v.menu.Find("Math Settings","Font Preference").hidden=!e},v.showContext=function(e){v.cookie.showContext=p.showContext=e,v.saveCookie(),v.menu.Find("Math Settings","Contextual Menu").hidden=!e},v.showDiscoverable=function(e){v.cookie.showDiscoverable=p.showDiscoverable=e,v.saveCookie(),v.menu.Find("Math Settings","Highlight on Hover").hidden=!e,v.menu.Find("Math Settings","discover_rule").hidden=!e},v.showLocale=function(e){v.cookie.showLocale=p.showLocale=e,v.saveCookie(),v.menu.Find("Language").hidden=!e},MathJax.Hub.Register.StartupHook("HTML-CSS Jax Ready",(function(){MathJax.OutputJax["HTML-CSS"].config.imageFont||(v.menu.Find("Math Settings","Font Preference","TeX (image)").disabled=!0)})),n.Queue(e.Register.StartupHook("End Config",{}),["Styles",o,p.styles],["Post",e.Startup.signal,"MathMenu Ready"],["loadComplete",o,"[MathJax]/extensions/MathMenu.js"])}(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.CallBack,MathJax.OutputJax);