/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-canvas-canvastext-es6math-setclasses !*/
!function(n,e,t){function a(n,e){return typeof n===e}function s(){var n,e,t,s,o,i,c;for(var f in r)if(r.hasOwnProperty(f)){if(n=[],e=r[f],e.name&&(n.push(e.name.toLowerCase()),e.options&&e.options.aliases&&e.options.aliases.length))for(t=0;t<e.options.aliases.length;t++)n.push(e.options.aliases[t].toLowerCase());for(s=a(e.fn,"function")?e.fn():e.fn,o=0;o<n.length;o++)i=n[o],c=i.split("."),1===c.length?Modernizr[c[0]]=s:(!Modernizr[c[0]]||Modernizr[c[0]]instanceof Boolean||(Modernizr[c[0]]=new Boolean(Modernizr[c[0]])),Modernizr[c[0]][c[1]]=s),l.push((s?"":"no-")+c.join("-"))}}function o(n){var e=f.className,t=Modernizr._config.classPrefix||"";if(h&&(e=e.baseVal),Modernizr._config.enableJSClass){var a=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");e=e.replace(a,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(e+=" "+t+n.join(" "+t),h?f.className.baseVal=e:f.className=e)}function i(){return"function"!=typeof e.createElement?e.createElement(arguments[0]):h?e.createElementNS.call(e,"http://www.w3.org/2000/svg",arguments[0]):e.createElement.apply(e,arguments)}var l=[],r=[],c={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(n,e){var t=this;setTimeout(function(){e(t[n])},0)},addTest:function(n,e,t){r.push({name:n,fn:e,options:t})},addAsyncTest:function(n){r.push({name:null,fn:n})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr;var f=e.documentElement,h="svg"===f.nodeName.toLowerCase();Modernizr.addTest("canvas",function(){var n=i("canvas");return!(!n.getContext||!n.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof i("canvas").getContext("2d").fillText}),Modernizr.addTest("es6math",!!(Math&&Math.clz32&&Math.cbrt&&Math.imul&&Math.sign&&Math.log10&&Math.log2&&Math.log1p&&Math.expm1&&Math.cosh&&Math.sinh&&Math.tanh&&Math.acosh&&Math.asinh&&Math.atanh&&Math.hypot&&Math.trunc&&Math.fround)),s(),o(l),delete c.addTest,delete c.addAsyncTest;for(var u=0;u<Modernizr._q.length;u++)Modernizr._q[u]();n.Modernizr=Modernizr}(window,document);