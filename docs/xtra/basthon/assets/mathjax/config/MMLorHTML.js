!function(t,a){var e=MathJax.Hub.CombineConfig("MMLorHTML",{prefer:{MSIE:"MML",Firefox:"HTML",Opera:"HTML",Chrome:"HTML",Safari:"HTML",other:"HTML"}}),r="0.0"===a.version||a.versionAtLeast({Firefox:3,Opera:9.52,MSIE:6,Chrome:.3,Safari:2,Konqueror:4}[a]||0),o=a.isFirefox&&a.versionAtLeast("1.5")||a.isMSIE&&a.hasMathPlayer||a.isSafari&&a.versionAtLeast("5.0")||a.isOpera&&a.versionAtLeast("9.52");t.Register.StartupHook("End Config",(function(){var a=e.prefer&&"object"==typeof e.prefer?e.prefer[MathJax.Hub.Browser]||e.prefer.other||"HTML":e.prefer;r||o?!o||"MML"!==a&&r?(MathJax.OutputJax["HTML-CSS"]?MathJax.OutputJax["HTML-CSS"].Register("jax/mml"):t.config.jax.unshift("output/HTML-CSS"),t.Startup.signal.Post("HTML-CSS output selected")):(MathJax.OutputJax.NativeMML?MathJax.OutputJax.NativeMML.Register("jax/mml"):t.config.jax.unshift("output/NativeMML"),t.Startup.signal.Post("NativeMML output selected")):(t.PreProcess.disabled=!0,t.prepareScripts.disabled=!0,MathJax.Message.Set(["MathJaxNotSupported","Your browser does not support MathJax"],null,4e3),t.Startup.signal.Post("MathJax not supported"))}))}(MathJax.Hub,MathJax.Hub.Browser),MathJax.Ajax.loadComplete("[MathJax]/config/MMLorHTML.js");