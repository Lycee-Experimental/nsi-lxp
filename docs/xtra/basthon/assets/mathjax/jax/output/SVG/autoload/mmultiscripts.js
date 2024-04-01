MathJax.Hub.Register.StartupHook("SVG Jax Ready",(function(){var t=MathJax.ElementJax.mml,a=MathJax.OutputJax.SVG;t.mmultiscripts.Augment({toSVG:function(t,s){this.SVGgetStyles();var e=this.SVG(),i=this.SVGgetScale(e);this.SVGhandleSpace(e);var h,r=this.data[this.base]?this.SVGdataStretched(this.base,t,s):a.BBOX.G().Clean(),d=a.TeX.x_height*i,p=a.TeX.scriptspace*i*.75,u=this.SVGgetScripts(p),l=u[0],c=u[1],m=u[2],x=u[3],n=(this.data[1]||this).SVGgetScale(),S=a.TeX.sup_drop*n,o=a.TeX.sub_drop*n,f=r.h-S,w=r.d+o,G=0;r.ic&&(G=r.ic),!this.data[this.base]||"mi"!==this.data[this.base].type&&"mo"!==this.data[this.base].type||!a.isChar(this.data[this.base].data.join(""))||1!==r.scale||r.stretched||this.data[this.base].Get("largeop")||(f=w=0);var M=this.getValues("subscriptshift","superscriptshift"),V=this.SVGgetMu(e);M.subscriptshift=""===M.subscriptshift?0:a.length2em(M.subscriptshift,V),M.superscriptshift=""===M.superscriptshift?0:a.length2em(M.superscriptshift,V);var b=0;if(m?b=m.w+G:x&&(b=x.w-G),e.Add(r,Math.max(0,b),0),c||x)if(l||m){w=Math.max(w,a.TeX.sub2*i);var g=a.TeX.rule_thickness*i,y=(l||m).h,v=(c||x).d;m&&(y=Math.max(y,m.h)),x&&(v=Math.max(v,x.d)),f-v-(y-w)<3*g&&(w=3*g-f+v+y,(S=.8*d-(f-v))>0&&(f+=S,w-=S)),f=Math.max(f,M.superscriptshift),w=Math.max(w,M.subscriptshift),c&&e.Add(c,b+r.w+p,f),x&&e.Add(x,b+G-x.w,f),l&&e.Add(l,b+r.w+p-G,-w),m&&e.Add(m,b-m.w,-w)}else{var A=this.getValues("displaystyle","texprimestyle");h=a.TeX[A.displaystyle?"sup1":A.texprimestyle?"sup3":"sup2"],f=Math.max(f,h*i,M.superscriptshift),c&&(f=Math.max(f,c.d+1/4*d)),x&&(f=Math.max(f,x.d+1/4*d)),c&&e.Add(c,b+r.w+p,f),x&&e.Add(x,0,f)}else w=Math.max(w,a.TeX.sub1*i,M.subscriptshift),l&&(w=Math.max(w,l.h-.8*d)),m&&(w=Math.max(w,m.h-.8*d)),l&&e.Add(l,b+r.w+p-G,-w),m&&e.Add(m,0,-w);e.Clean(),this.SVGhandleColor(e),this.SVGsaveData(e);var X=this.SVGdata;return X.dx=b,X.s=p,X.u=f,X.v=w,X.delta=G,e},SVGgetScripts:function(t){for(var s,e,i=[],h=1,r=this.data.length,d=0,p=0;p<4;p+=2){for(;h<r&&"mprescripts"!==(this.data[h]||{}).type;){for(var u=[null,null,null,null],l=p;l<p+2;l++)this.data[h]&&"none"!==this.data[h].type&&"mprescripts"!==this.data[h].type&&(i[l]||(i[l]=a.BBOX.G()),u[l]=this.data[h].toSVG()),"mprescripts"!==(this.data[h]||{}).type&&h++;var c=2===p;c&&(d+=Math.max((u[p]||{w:0}).w,(u[p+1]||{w:0}).w)),u[p]&&i[p].Add(u[p].With({x:d-(c?u[p].w:0)})),u[p+1]&&i[p+1].Add(u[p+1].With({x:d-(c?u[p+1].w:0)})),e=i[p]||{w:0},s=i[p+1]||{w:0},e.w=s.w=d=Math.max(e.w,s.w)}h++,d=0}for(l=0;l<4;l++)i[l]&&(i[l].w+=t,i[l].Clean());return i}}),MathJax.Hub.Startup.signal.Post("SVG mmultiscripts Ready"),MathJax.Ajax.loadComplete(a.autoloadDir+"/mmultiscripts.js")}));