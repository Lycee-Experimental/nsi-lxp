MathJax.Hub.Register.StartupHook("CommonHTML Jax Ready",(function(){var t=MathJax.ElementJax.mml,a=MathJax.OutputJax.CommonHTML;t.ms.Augment({toCommonHTML:function(t){t=this.CHTMLcreateNode(t),this.CHTMLhandleStyle(t),this.CHTMLgetVariant(),this.CHTMLhandleScale(t),a.BBOX.empty(this.CHTML);var e=this.getValues("lquote","rquote","mathvariant");this.hasValue("lquote")&&'"'!==e.lquote||(e.lquote="“"),this.hasValue("rquote")&&'"'!==e.rquote||(e.rquote="”"),"“"===e.lquote&&"monospace"===e.mathvariant&&(e.lquote='"'),"”"===e.rquote&&"monospace"===e.mathvariant&&(e.rquote='"');var o=e.lquote+this.data.join("")+e.rquote;return this.CHTMLhandleText(t,o,this.CHTMLvariant),this.CHTML.clean(),this.CHTMLhandleSpace(t),this.CHTMLhandleBBox(t),this.CHTMLhandleColor(t),t}}),MathJax.Hub.Startup.signal.Post("CommonHTML ms Ready"),MathJax.Ajax.loadComplete(a.autoloadDir+"/ms.js")}));